const testimonials = [
  {
    name: 'María González',
    city: 'Puebla, Pue.',
    stars: 5,
    text: 'Increíble experiencia. Las habitaciones son muy cómodas y el personal súper atento. El spa fue lo mejor — el Temazcal es una experiencia única. Definitivamente regresamos.',
    avatar: 'MG',
  },
  {
    name: 'Carlos Ramírez',
    city: 'Ciudad de México',
    stars: 5,
    text: 'Llegamos por un evento de empresa y quedamos encantados. Los salones perfectamente equipados, el servicio excelente y la comida del restaurante deliciosa. Muy recomendable.',
    avatar: 'CR',
  },
  {
    name: 'Sofía Hernández',
    city: 'Monterrey, NL',
    stars: 5,
    text: 'Un oasis en Tehuacán. La alberca, el spa y el trato del personal hacen de Casa Cantarranas el lugar perfecto para desconectarse. Ya tenemos reserva para diciembre.',
    avatar: 'SH',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-600" />
            <p className="text-amber-700 text-xs tracking-[0.4em] uppercase">Lo que dicen nuestros huéspedes</p>
            <div className="h-px w-12 bg-amber-600" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1a0a00] mb-2">
            Experiencias reales
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-amber-500 text-xl">⭐⭐⭐⭐⭐</span>
            <span className="text-gray-600 font-medium">4.9/5</span>
            <span className="text-gray-400 text-sm">· más de 200 reseñas en Google</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100">
              {/* Stars */}
              <div className="text-amber-400 mb-4">{'⭐'.repeat(t.stars)}</div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7C2D12] flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#1a0a00] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
