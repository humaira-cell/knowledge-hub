import { Link } from 'react-router-dom'
import { BookOpen, Quote } from 'lucide-react'

export default function PhilosopherCard({ philosopher }) {
  return (
    <Link
      to={`/philosopher/${philosopher.slug}`}
      className="block group"
    >
      <div className="marble-bg border border-gold/30 rounded-lg overflow-hidden gold-glow transition-all duration-300 group-hover:border-gold/70">
        <div className={`h-32 bg-gradient-to-br ${philosopher.portraitBg} flex items-center justify-center relative`}>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-ivory/10 border-2 border-gold/30 flex items-center justify-center">
              <span className="font-heading text-gold text-xl">
                {philosopher.name.charAt(0)}
              </span>
            </div>
          </div>
          <div className="absolute top-2 right-2">
            <span className="px-2 py-0.5 bg-ivory/20 text-gold text-[10px] uppercase tracking-wider rounded font-body border border-gold/20">
              {philosopher.era === 'ancient' ? 'Ancient' : 'Perennialist'}
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-heading text-aegean text-lg tracking-wide group-hover:text-gold transition-colors">
            {philosopher.name}
          </h3>
          {philosopher.greekName && (
            <p className="font-body text-ink/50 text-xs italic mt-0.5">
              {philosopher.greekName}
            </p>
          )}
          <p className="font-body text-ink/60 text-xs mt-1">
            {philosopher.lifespan}
          </p>
          <p className="font-body text-ink/70 text-sm mt-2 line-clamp-2 leading-relaxed">
            {philosopher.bio}
          </p>

          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gold/20">
            <span className="flex items-center gap-1.5 text-xs text-ink/50 font-body">
              <BookOpen className="w-3.5 h-3.5 text-gold/60" />
              {philosopher.bookCount} {philosopher.bookCount === 1 ? 'work' : 'works'}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-ink/50 font-body">
              <Quote className="w-3.5 h-3.5 text-gold/60" />
              {philosopher.quoteCount} {philosopher.quoteCount === 1 ? 'quote' : 'quotes'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
