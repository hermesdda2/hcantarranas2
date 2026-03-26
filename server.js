const express = require('express');
const cors    = require('cors');
const path    = require('path');
const fs      = require('fs');
const low     = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(path.join(__dirname, 'db.json'));
const db      = low(adapter);

const app = express();
app.use(cors());
app.use(express.json());

// Sirve archivos estáticos (index.html, admin.html, etc.)
app.use(express.static(__dirname));

// ─────────────────────────────────────────────────────────
//  Helpers
// ─────────────────────────────────────────────────────────
function overlap(cin, cout, rIn, rOut) {
  // Devuelve true si los rangos se solapan
  return !(cout <= rIn || cin >= rOut);
}

function habitacionesDisponibles(checkin, checkout, huespedes) {
  const habitaciones = db.get('habitaciones').value();
  const reservas     = db.get('reservas').value();
  const cin  = new Date(checkin);
  const cout = new Date(checkout);
  const cap  = parseInt(huespedes) || 1;

  const bloqueadas = new Set(
    reservas
      .filter(r => r.estado !== 'cancelada')
      .filter(r => overlap(cin, cout, new Date(r.checkin), new Date(r.checkout)))
      .map(r => r.habitacion_id)
  );

  return habitaciones.filter(h => !bloqueadas.has(h.id) && h.capacidad >= cap);
}

// ─────────────────────────────────────────────────────────
//  GET /api/disponibilidad
// ─────────────────────────────────────────────────────────
app.get('/api/disponibilidad', (req, res) => {
  const { checkin, checkout, huespedes } = req.query;
  if (!checkin || !checkout) return res.status(400).json({ error: 'Faltan fechas' });
  const cin  = new Date(checkin);
  const cout = new Date(checkout);
  if (isNaN(cin) || isNaN(cout) || cout <= cin) return res.status(400).json({ error: 'Fechas inválidas' });
  res.json(habitacionesDisponibles(checkin, checkout, huespedes));
});

// ─────────────────────────────────────────────────────────
//  GET /api/habitaciones
// ─────────────────────────────────────────────────────────
app.get('/api/habitaciones', (req, res) => {
  res.json(db.get('habitaciones').value());
});

// ─────────────────────────────────────────────────────────
//  GET /api/reservas  (admin)
// ─────────────────────────────────────────────────────────
app.get('/api/reservas', (req, res) => {
  const reservas = db.get('reservas').value();
  // ordenar por fecha de creación desc
  const sorted = [...reservas].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  res.json(sorted);
});

// ─────────────────────────────────────────────────────────
//  POST /api/reservas  — crear reserva
// ─────────────────────────────────────────────────────────
app.post('/api/reservas', (req, res) => {
  const { habitacion_id, checkin, checkout, huespedes, nombre, telefono, email, notas } = req.body;

  if (!habitacion_id || !checkin || !checkout || !nombre || !telefono) {
    return res.status(400).json({ error: 'Faltan datos requeridos (habitacion_id, checkin, checkout, nombre, telefono)' });
  }

  const cin    = new Date(checkin);
  const cout   = new Date(checkout);
  const noches = Math.round((cout - cin) / (1000 * 60 * 60 * 24));
  if (noches < 1) return res.status(400).json({ error: 'Fechas inválidas' });

  const habitacion = db.get('habitaciones').find({ id: parseInt(habitacion_id) }).value();
  if (!habitacion) return res.status(404).json({ error: 'Habitación no encontrada' });

  // Doble verificación de disponibilidad
  const disponibles = habitacionesDisponibles(checkin, checkout, huespedes);
  if (!disponibles.find(h => h.id === parseInt(habitacion_id))) {
    return res.status(409).json({ error: 'La habitación ya no está disponible para esas fechas' });
  }

  const nueva = {
    id: Date.now(),
    habitacion_id: parseInt(habitacion_id),
    habitacion_nombre: habitacion.nombre,
    habitacion_tipo: habitacion.tipo,
    nombre: nombre.trim(),
    telefono: telefono.trim(),
    email: (email || '').trim(),
    checkin,
    checkout,
    noches,
    huespedes: parseInt(huespedes) || 1,
    notas: (notas || '').trim(),
    estado: 'pendiente',
    precio_noche: habitacion.precio,
    total: habitacion.precio * noches,
    created_at: new Date().toISOString()
  };

  db.get('reservas').push(nueva).write();
  console.log(`✅ Nueva reserva: ${nueva.nombre} · ${nueva.habitacion_nombre} · ${nueva.checkin} → ${nueva.checkout}`);
  res.status(201).json(nueva);
});

// ─────────────────────────────────────────────────────────
//  PATCH /api/reservas/:id/estado
// ─────────────────────────────────────────────────────────
app.patch('/api/reservas/:id/estado', (req, res) => {
  const id     = parseInt(req.params.id);
  const { estado } = req.body;
  if (!['pendiente', 'confirmada', 'cancelada'].includes(estado)) {
    return res.status(400).json({ error: 'Estado inválido' });
  }
  const reserva = db.get('reservas').find({ id }).value();
  if (!reserva) return res.status(404).json({ error: 'Reserva no encontrada' });

  db.get('reservas').find({ id }).assign({ estado }).write();
  console.log(`🔄 Reserva #${id} → ${estado}`);
  res.json({ ...reserva, estado });
});

// ─────────────────────────────────────────────────────────
//  DELETE /api/reservas/:id
// ─────────────────────────────────────────────────────────
app.delete('/api/reservas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const reserva = db.get('reservas').find({ id }).value();
  if (!reserva) return res.status(404).json({ error: 'Reserva no encontrada' });
  db.get('reservas').remove({ id }).write();
  res.json({ ok: true });
});

// ─────────────────────────────────────────────────────────
//  PATCH /api/habitaciones/:id  — editar habitación
// ─────────────────────────────────────────────────────────
app.patch('/api/habitaciones/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const hab = db.get('habitaciones').find({ id }).value();
  if (!hab) return res.status(404).json({ error: 'Habitación no encontrada' });

  const allowed = ['nombre', 'tipo', 'descripcion', 'capacidad', 'precio', 'imagen', 'amenidades'];
  const update = {};
  allowed.forEach(k => { if (req.body[k] !== undefined) update[k] = req.body[k]; });

  if (update.precio !== undefined)   update.precio   = parseFloat(update.precio)   || hab.precio;
  if (update.capacidad !== undefined) update.capacidad = parseInt(update.capacidad) || hab.capacidad;

  db.get('habitaciones').find({ id }).assign(update).write();
  console.log(`✏️  Habitación #${id} actualizada:`, Object.keys(update).join(', '));
  res.json({ ...hab, ...update });
});

// ─────────────────────────────────────────────────────────
//  Start
// ─────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('\n╔══════════════════════════════════════════╗');
  console.log('║  🏨  Hotel Cantarranas — API Local        ║');
  console.log(`║  http://localhost:${PORT}                    ║`);
  console.log('╠══════════════════════════════════════════╣');
  console.log(`║  Web:    http://localhost:${PORT}/index.html  ║`);
  console.log(`║  Admin:  http://localhost:${PORT}/admin.html  ║`);
  console.log(`║  API:    http://localhost:${PORT}/api/        ║`);
  console.log('╚══════════════════════════════════════════╝\n');
});
