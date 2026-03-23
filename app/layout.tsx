import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Casa Cantarranas | Hotel & Spa — Tehuacán, Puebla',
  description: 'Descubre el descanso que mereces en Casa Cantarranas. Hotel, spa, restaurante y salones de eventos en Tehuacán, Puebla. Reserva directo y obtén la mejor tarifa.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="font-body min-h-full">{children}</body>
    </html>
  )
}
