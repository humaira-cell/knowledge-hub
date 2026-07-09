import { Link } from 'react-router-dom'
import { BookOpen, ScrollText, Library } from 'lucide-react'
import GreekKeyBorder from '../ui/GreekKeyBorder'
import ArabesqueDivider from '../ui/ArabesqueDivider'

export default function Footer() {
  return (
    <footer className="bg-aegean mt-16">
      <GreekKeyBorder />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-gold" />
              <h3 className="font-heading text-gold text-lg tracking-wide">
                Library of the Ancients
              </h3>
            </div>
            <p className="text-gold/60 text-sm leading-relaxed font-body">
              A digital library dedicated to the great metaphysicians — preserving
              the wisdom of the ages for the seekers of today.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <ScrollText className="w-5 h-5 text-gold" />
              <h3 className="font-heading text-gold text-lg tracking-wide">
                Philosophers
              </h3>
            </div>
            <ul className="space-y-2 font-body text-sm">
              {['plato', 'aristotle', 'guenon'].map(slug => (
                <li key={slug}>
                  <Link
                    to={`/philosopher/${slug}`}
                    className="text-gold/60 hover:text-gold transition-colors capitalize"
                  >
                    {slug === 'guenon' ? 'René Guénon' : slug}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Library className="w-5 h-5 text-gold" />
              <h3 className="font-heading text-gold text-lg tracking-wide">
                Quick Links
              </h3>
            </div>
            <ul className="space-y-2 font-body text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/catalog', label: 'Catalog' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gold/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ArabesqueDivider />

        <p className="text-center text-gold/40 text-xs font-body mt-8">
          &copy; {new Date().getFullYear()} Library of the Ancients. In the name of Wisdom, may it illuminate all who seek.
        </p>
      </div>
    </footer>
  )
}
