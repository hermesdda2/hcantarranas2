const services = [
  {
    icon: '🏨',
    title: 'Hotel',
    description: 'Recepción 24 horas, WiFi de alta velocidad, servicio a la habitación y estacionamiento con valet parking.',
  },
  {
    icon: '💆',
    title: 'Spa',
    description: 'Faciales, masajes relajantes y tratamientos de Temazcal para renovar cuerpo y mente.',
  },
  {
    icon: '🍽️',
    title: 'Restaurante & Bar',
    description: 'Cocina mexicana e internacional con los mejores ingredientes de la región. Billar y ambiente relajado.',
  },
  {
    icon: '🎯',
    title: 'Salones de Eventos',
    description: 'Espacios equipados con proyector, pantalla, internet inalámbrico y aire acondicionado para tus reuniones.',
  },
  {
    icon: '🏊',
    title: 'Alberca',
    description: 'Alberca climatizada con energía solar para disfrutar en cualquier época del año.',
  },
  {
    icon: '🎾',
    title: 'Deportes',
    description: 'Cancha de tenis y área de juegos infantiles para el entretenimiento de toda la familia.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#FFFBEB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-600" />
            <p className="text-amber-700 text-xs tracking-[0.4em] uppercase">Lo que ofrecemos</p>
            <div className="h-px w-12 bg-amber-600" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1a0a00] mb-4">
            Todo en un solo lugar
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            Casa Cantarranas es más que un hotel. Es un espacio pensado para que
            cada momento de tu estancia sea memorable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title}
              className="bg-white rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-amber-100 group">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-heading text-2xl font-semibold text-[#7C2D12] mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
