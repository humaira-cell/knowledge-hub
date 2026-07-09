import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/catalog', label: 'Catalog' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="bg-aegean border-b-2 border-gold shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/40 group-hover:bg-gold/30 transition-colors">
              <BookOpen className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h1 className="font-heading text-gold text-lg sm:text-xl tracking-wider leading-tight">
                Library of the Ancients
              </h1>
              <p className="text-gold/60 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-body">
                Bayt al-Ḥikma • Academia
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm tracking-wider uppercase transition-colors duration-200 ${
                  pathname === link.to
                    ? 'text-gold border-b-2 border-gold'
                    : 'text-gold/70 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-gold p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gold/20 bg-aegean/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block font-body text-sm tracking-wider uppercase py-2 ${
                  pathname === link.to ? 'text-gold' : 'text-gold/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
