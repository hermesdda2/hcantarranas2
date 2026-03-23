import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0f0500] text-amber-100/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-2xl font-bold text-white mb-3">
              Casa<br />Cantarranas
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Hotel boutique en el corazón de Tehuacán, Puebla. Descanso, spa y experiencias únicas en un entorno natural.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-amber-900/30 flex items-center justify-center hover:bg-amber-700/40 transition-colors">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-amber-900/30 flex items-center justify-center hover:bg-amber-700/40 transition-colors">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0"/>
                </svg>
              </a>
              <a href="https://wa.me/522381234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-amber-900/30 flex items-center justify-center hover:bg-amber-700/40 transition-colors">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Navegación</h4>
            <ul className="space-y-3 text-sm">
              {['Inicio', 'Habitaciones', 'Servicios', 'Galería', 'Contacto'].map(item => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="hover:text-amber-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Servicios</h4>
            <ul className="space-y-3 text-sm">
              {['Spa & Temazcal', 'Restaurante', 'Salones de Eventos', 'Alberca', 'Deportes', 'Habitaciones'].map(item => (
                <li key={item}>
                  <span className="hover:text-amber-400 transition-colors cursor-pointer">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto rápido */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Contacto rápido</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-amber-400 text-xs uppercase tracking-widest mb-1">Dirección</p>
                <p>Calle Reforma Norte 210<br />Tehuacán, Puebla, México</p>
              </div>
              <div>
                <p className="text-amber-400 text-xs uppercase tracking-widest mb-1">Teléfono</p>
                <a href="tel:+522381234567" className="hover:text-amber-400 transition-colors">+52 (238) 123-4567</a>
              </div>
              <div>
                <p className="text-amber-400 text-xs uppercase tracking-widest mb-1">Correo</p>
                <a href="mailto:reservas@cantarranas.com.mx" className="hover:text-amber-400 transition-colors text-xs">
                  reservas@cantarranas.com.mx
                </a>
              </div>
              <div>
                <p className="text-amber-400 text-xs uppercase tracking-widest mb-1">Recepción</p>
                <p>Lun–Dom · 7:00 am – 11:00 pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-900/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {year} Casa Cantarranas · Todos los derechos reservados</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Aviso de privacidad</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
