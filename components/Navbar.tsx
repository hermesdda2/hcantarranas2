'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a0a00]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <p className="font-heading text-2xl font-bold text-amber-200 tracking-widest uppercase">
            Casa Cantarranas
          </p>
          <p className="text-xs text-amber-400 tracking-[0.3em] uppercase">Hotel & Spa · Tehuacán</p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Inicio', 'Habitaciones', 'Servicios', 'Galería', 'Contacto'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-amber-100 hover:text-amber-300 text-sm tracking-wider transition-colors uppercase">
              {item}
            </a>
          ))}
          <a href="#reservar"
            className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2 text-sm tracking-wider uppercase transition-colors rounded">
            Reservar
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-amber-200 text-2xl">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1a0a00] px-6 pb-6 flex flex-col gap-4">
          {['Inicio', 'Habitaciones', 'Servicios', 'Galería', 'Contacto'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-amber-100 text-sm tracking-wider uppercase border-b border-amber-900 pb-3">
              {item}
            </a>
          ))}
          <a href="#reservar" onClick={() => setOpen(false)}
            className="bg-amber-600 text-white text-center py-3 text-sm tracking-wider uppercase rounded">
            Reservar ahora
          </a>
        </div>
      )}
    </nav>
  )
}
