'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '', llegada: '', salida: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: conectar con Supabase o Resend
    setSent(true)
  }

  return (
    <section id="contacto" className="py-24 bg-[#1a0a00]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Info */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-amber-600" />
              <p className="text-amber-500 text-xs tracking-[0.4em] uppercase">Estamos para servirte</p>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Contáctanos
            </h2>
            <p className="text-amber-100/70 leading-relaxed mb-10">
              ¿Tienes preguntas sobre disponibilidad, eventos especiales o servicios? Escríbenos y te respondemos en menos de 2 horas.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">Dirección</p>
                  <p className="text-amber-100/60 text-sm">Calle Reforma Norte 210, Col. Centro<br />Tehuacán, Puebla, México</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">Teléfono / WhatsApp</p>
                  <a href="tel:+522381234567" className="text-amber-400 text-sm hover:text-amber-300 transition-colors">
                    +52 (238) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">Correo</p>
                  <a href="mailto:reservas@cantarranas.com.mx" className="text-amber-400 text-sm hover:text-amber-300 transition-colors">
                    reservas@cantarranas.com.mx
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">Horario de recepción</p>
                  <p className="text-amber-100/60 text-sm">Todos los días · 7:00 am – 11:00 pm</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/522381234567?text=Hola%2C%20me%20gustaría%20hacer%20una%20reservación%20en%20Casa%20Cantarranas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#1ebe5d] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escribir por WhatsApp
            </a>
          </div>

          {/* Formulario */}
          <div className="bg-white/5 border border-amber-900/30 rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-amber-600/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-heading text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
                <p className="text-amber-100/60">Te respondemos en menos de 2 horas.</p>
              </div>
            ) : (
              <>
                <h3 className="text-white font-heading text-2xl font-bold mb-6">Envíanos un mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-amber-200/70 text-xs uppercase tracking-widest block mb-2">Nombre</label>
                      <input
                        type="text"
                        required
                        value={form.nombre}
                        onChange={e => setForm({ ...form, nombre: e.target.value })}
                        className="w-full bg-white/5 border border-amber-900/40 rounded-lg px-4 py-3 text-white placeholder-amber-100/30 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="text-amber-200/70 text-xs uppercase tracking-widest block mb-2">Teléfono</label>
                      <input
                        type="tel"
                        value={form.telefono}
                        onChange={e => setForm({ ...form, telefono: e.target.value })}
                        className="w-full bg-white/5 border border-amber-900/40 rounded-lg px-4 py-3 text-white placeholder-amber-100/30 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                        placeholder="+52 (238) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-amber-200/70 text-xs uppercase tracking-widest block mb-2">Correo electrónico</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-amber-900/40 rounded-lg px-4 py-3 text-white placeholder-amber-100/30 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      placeholder="tu@correo.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-amber-200/70 text-xs uppercase tracking-widest block mb-2">Llegada (opcional)</label>
                      <input
                        type="date"
                        value={form.llegada}
                        onChange={e => setForm({ ...form, llegada: e.target.value })}
                        className="w-full bg-white/5 border border-amber-900/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-amber-200/70 text-xs uppercase tracking-widest block mb-2">Salida (opcional)</label>
                      <input
                        type="date"
                        value={form.salida}
                        onChange={e => setForm({ ...form, salida: e.target.value })}
                        className="w-full bg-white/5 border border-amber-900/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-amber-200/70 text-xs uppercase tracking-widest block mb-2">Mensaje</label>
                    <textarea
                      rows={4}
                      value={form.mensaje}
                      onChange={e => setForm({ ...form, mensaje: e.target.value })}
                      className="w-full bg-white/5 border border-amber-900/40 rounded-lg px-4 py-3 text-white placeholder-amber-100/30 focus:outline-none focus:border-amber-500 transition-colors text-sm resize-none"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-4 rounded-lg transition-colors text-sm tracking-wide"
                  >
                    Enviar mensaje →
                  </button>

                  <p className="text-center text-amber-100/40 text-xs">
                    🔒 Tu información es confidencial y no será compartida.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
