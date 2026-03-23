const rooms = [
  {
    name: 'Habitación Estándar',
    description: 'Espaciosa habitación con todo el confort que necesitas para un descanso perfecto.',
    price: 'Desde $1,200',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    amenities: ['TV pantalla plana', 'AC', 'Caja fuerte', 'Terraza', 'Mini bar'],
    capacity: '2 personas',
    size: '25 m²',
    badge: null,
  },
  {
    name: 'Suite',
    description: 'Lujo y amplitud en nuestra suite con sala de estar y todas las comodidades premium.',
    price: 'Desde $2,200',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    amenities: ['TV pantalla plana', 'AC', 'Caja fuerte', 'Terraza privada', 'Cafetera', 'Mini bar'],
    capacity: '3 personas',
    size: '45 m²',
    badge: 'Más popular',
  },
]

export default function Rooms() {
  return (
    <section id="habitaciones" className="py-24 bg-[#1a0a00]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-500" />
            <p className="text-amber-500 text-xs tracking-[0.4em] uppercase">Nuestras habitaciones</p>
            <div className="h-px w-12 bg-amber-500" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-amber-100 mb-4">
            Tu espacio de descanso
          </h2>
          <p className="text-amber-200/60 max-w-xl mx-auto leading-relaxed">
            Cada habitación está diseñada con atención al detalle para ofrecerte
            una experiencia de confort y bienestar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.name} className="bg-[#2a1200] rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-amber-900/30 transition-all">
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {room.badge && (
                  <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs px-3 py-1 rounded-full tracking-wider uppercase">
                    {room.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-amber-200">{room.name}</h3>
                    <p className="text-amber-500/60 text-sm mt-1">{room.capacity} · {room.size}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-amber-400 font-semibold">{room.price}</p>
                    <p className="text-amber-500/50 text-xs">por noche</p>
                  </div>
                </div>

                <p className="text-amber-100/60 text-sm leading-relaxed mb-6">{room.description}</p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map(a => (
                    <span key={a} className="text-xs bg-amber-900/30 text-amber-300 px-3 py-1 rounded-full border border-amber-800/30">
                      {a}
                    </span>
                  ))}
                </div>

                <a href="#reservar"
                  className="block text-center bg-amber-600 hover:bg-amber-500 text-white py-3 rounded-lg text-sm tracking-wider uppercase transition-all">
                  Reservar esta habitación
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
