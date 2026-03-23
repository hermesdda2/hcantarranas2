export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80"
          alt="Casa Cantarranas Hotel"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a00]/70 via-[#1a0a00]/40 to-[#1a0a00]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-amber-400" />
          <p className="text-amber-400 text-xs tracking-[0.4em] uppercase">Tehuacán, Puebla</p>
          <div className="h-px w-16 bg-amber-400" />
        </div>

        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Tu refugio en el<br />
          <span className="text-amber-300">corazón de Tehuacán</span>
        </h1>

        <p className="text-amber-100 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Descansa, disfruta y reconéctate. Hotel, Spa, Restaurante y Salones de Eventos
          en un solo lugar — con la calidez que siempre imaginaste.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#reservar"
            className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 text-sm tracking-widest uppercase transition-all hover:shadow-lg hover:shadow-amber-600/30 rounded">
            Reservar ahora
          </a>
          <a href="#habitaciones"
            className="border border-amber-300 text-amber-200 hover:bg-amber-300/10 px-8 py-4 text-sm tracking-widest uppercase transition-all rounded">
            Ver habitaciones
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-amber-200/70 text-xs tracking-wider uppercase">
          <span>✓ Mejor tarifa garantizada</span>
          <span>✓ Cancelación gratuita</span>
          <span>✓ Pago seguro</span>
          <span>✓ Check-in 24 hrs</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-300/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-amber-300/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
