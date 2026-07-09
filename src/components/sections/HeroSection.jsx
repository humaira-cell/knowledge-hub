import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useAsync } from '../../hooks/useAsync'
import { getPhilosophers } from '../../lib/sanity'
import GreekKeyBorder from '../ui/GreekKeyBorder'

export default function HeroSection() {
  const { data: philosophers = [] } = useAsync(getPhilosophers, [])
  const allQuotes = philosophers.flatMap(p =>
    (p.quotes || []).map(q => ({ ...q, author: p.name, authorSlug: p.slug || p.id }))
  )
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    if (allQuotes.length === 0) return
    const timer = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % allQuotes.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [allQuotes.length])

  const quote = allQuotes[currentQuote]

  return (
    <section className="relative bg-gradient-to-br from-aegean via-aegean to-aegean/90 text-ivory">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 border border-gold/40 rounded-full">
          <span className="font-body text-gold text-xs tracking-[0.25em] uppercase">Bayt al-Ḥikma • Academia • Lyceum</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-gold tracking-wide leading-tight">Library of the Ancients</h1>
        <p className="font-body text-ivory/70 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          A digital treasury of metaphysical wisdom — exploring the perennial philosophy through the works of the great thinkers.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/catalog"
            className="inline-flex items-center gap-2 bg-gold text-aegean font-heading text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-gold/90 transition-colors">
            Enter the Library <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/philosopher/plato"
            className="inline-flex items-center gap-2 border border-gold/50 text-gold font-heading text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-gold/10 transition-colors">
            Begin with Plato
          </Link>
        </div>
      </div>

      <GreekKeyBorder className="opacity-60" />

      <div className="bg-aegean/80 backdrop-blur-sm border-t border-gold/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 text-center">
          <p className="font-body text-gold/50 text-xs uppercase tracking-[0.2em] mb-3">Wisdom of the Ancients</p>
          {quote && (
            <div key={currentQuote} className="fade-in">
              <p className="font-body text-ivory/80 text-sm sm:text-base leading-relaxed italic">&ldquo;{quote.text}&rdquo;</p>
              <div className="mt-2">
                <Link to={`/philosopher/${quote.authorSlug}`}
                  className="text-gold/60 hover:text-gold text-xs font-body transition-colors">
                  &mdash; {quote.author}{quote.source && <span>, <em>{quote.source}</em></span>}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
