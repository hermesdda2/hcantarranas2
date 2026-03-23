'use client'
import { useState } from 'react'

export default function BookingWidget() {
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [guests, setGuests] = useState('2 adultos')

  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="reservar" className="relative z-20 -mt-16 mx-4 md:mx-auto max-w-5xl">
      <div className="bg-white rounded-xl shadow-2xl shadow-black/20 p-6 md:p-8">
        <p className="text-center text-[#7C2D12] text-xs tracking-[0.3em] uppercase mb-4 font-body">
          Verificar disponibilidad
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Check-in */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500 tracking-wider uppercase">Llegada</label>
            <div className="border border-gray-200 rounded-lg px-3 py-3 flex items-center gap-2 focus-within:border-amber-500 transition-colors">
              <span className="text-amber-600">📅</span>
              <input
                type="date"
                min={today}
                value={checkin}
                onChange={e => setCheckin(e.target.value)}
                className="flex-1 text-sm text-gray-700 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500 tracking-wider uppercase">Salida</label>
            <div className="border border-gray-200 rounded-lg px-3 py-3 flex items-center gap-2 focus-within:border-amber-500 transition-colors">
              <span className="text-amber-600">📅</span>
              <input
                type="date"
                min={checkin || today}
                value={checkout}
                onChange={e => setCheckout(e.target.value)}
                className="flex-1 text-sm text-gray-700 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500 tracking-wider uppercase">Huéspedes</label>
            <div className="border border-gray-200 rounded-lg px-3 py-3 flex items-center gap-2 focus-within:border-amber-500 transition-colors">
              <span className="text-amber-600">👤</span>
              <select
                value={guests}
                onChange={e => setGuests(e.target.value)}
                className="flex-1 text-sm text-gray-700 outline-none bg-transparent"
              >
                <option>1 adulto</option>
                <option>2 adultos</option>
                <option>2 adultos, 1 niño</option>
                <option>2 adultos, 2 niños</option>
                <option>3 adultos</option>
                <option>4 adultos</option>
              </select>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-end">
            <button
              onClick={() => {
                if (!checkin || !checkout) {
                  alert('Por favor selecciona las fechas de llegada y salida')
                  return
                }
                // Future: redirect to availability page
                alert(`Buscando habitaciones disponibles...\nLlegada: ${checkin}\nSalida: ${checkout}\nHuéspedes: ${guests}`)
              }}
              className="bg-[#7C2D12] hover:bg-[#9a3516] text-white py-3 px-6 rounded-lg text-sm tracking-widest uppercase transition-all hover:shadow-lg font-medium"
            >
              Ver disponibilidad →
            </button>
          </div>
        </div>

        {/* Bottom info */}
        <div className="flex flex-wrap gap-4 justify-center mt-4 pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-400 flex items-center gap-1">🔒 Pago 100% seguro</span>
          <span className="text-xs text-gray-400 flex items-center gap-1">✓ Cancelación gratuita hasta 24h antes</span>
          <span className="text-xs text-gray-400 flex items-center gap-1">⭐ Mejor precio garantizado reservando aquí</span>
        </div>
      </div>
    </section>
  )
}
