import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'
import { getPhilosopherBySlug } from '../data/philosophers'
import { getBooksByAuthor } from '../data/books'
import BookCard from '../components/ui/BookCard'
import QuoteCard from '../components/ui/QuoteCard'
import GreekKeyBorder from '../components/ui/GreekKeyBorder'
import ArabesqueDivider from '../components/ui/ArabesqueDivider'

export default function PhilosopherDetail() {
  const { slug } = useParams()
  const philosopher = getPhilosopherBySlug(slug)
  const books = getBooksByAuthor(slug)
  const [quoteIndex, setQuoteIndex] = useState(0)

  if (!philosopher) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="font-heading text-aegean text-xl">Philosopher not found</p>
        <Link to="/catalog" className="text-turquoise hover:text-gold text-sm font-body mt-2 inline-block">
          Return to catalog
        </Link>
      </div>
    )
  }

  const quotes = philosopher.quotes
  const currentQuote = quotes[quoteIndex]

  return (
    <div>
      <div className={`h-64 sm:h-80 bg-gradient-to-br ${philosopher.portraitBg} flex items-end justify-center relative overflow-hidden`}>
        {philosopher.imageUrl ? (
          <img
            src={philosopher.imageUrl}
            alt={philosopher.name}
            className="w-full h-full object-contain object-bottom opacity-85"
          />
        ) : null}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-aegean/90 via-aegean/60 to-transparent pt-16 pb-4 sm:pb-6">
          <div className="text-center px-4">
            <h1 className="font-heading text-gold text-2xl sm:text-3xl lg:text-4xl tracking-wide">
              {philosopher.name}
            </h1>
            {philosopher.greekName && (
              <p className="text-gold/50 text-sm italic mt-1 font-body">
                {philosopher.greekName}
              </p>
            )}
            <p className="text-ivory/60 text-xs mt-2 font-body tracking-wider uppercase">
              {philosopher.lifespan} • {philosopher.era === 'ancient' ? 'Ancient Greece' : 'Perennialist'}
            </p>
          </div>
        </div>
      </div>

      <GreekKeyBorder />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <Link
          to="/catalog"
          className="inline-flex items-center gap-1.5 text-gold hover:text-aegean text-sm font-body transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Catalog
        </Link>

        <div className="marble-bg border border-gold/30 rounded-lg p-6 lg:p-8 gold-glow">
          <h2 className="font-heading text-aegean text-xl tracking-wide mb-4">
            Biography
          </h2>
          <p className="font-body text-ink/80 text-sm sm:text-base leading-relaxed">
            {philosopher.bio}
          </p>
        </div>

        <ArabesqueDivider />

        <div className="marble-bg border border-gold/30 rounded-lg p-6 lg:p-8 gold-glow">
          <h2 className="font-heading text-aegean text-xl tracking-wide mb-6">
            Notable Quotes
          </h2>

          {quotes.length > 0 && currentQuote && (
            <div>
              <QuoteCard quote={currentQuote} />
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => setQuoteIndex(prev => prev === 0 ? quotes.length - 1 : prev - 1)}
                  className="flex items-center gap-1 text-xs text-ink/40 hover:text-gold font-body transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  Previous
                </button>
                <span className="text-xs text-ink/30 font-body">
                  {quoteIndex + 1} / {quotes.length}
                </span>
                <button
                  onClick={() => setQuoteIndex(prev => prev === quotes.length - 1 ? 0 : prev + 1)}
                  className="flex items-center gap-1 text-xs text-ink/40 hover:text-gold font-body transition-colors"
                >
                  Next
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        <ArabesqueDivider />

        <div>
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-gold" />
            <h2 className="font-heading text-aegean text-xl tracking-wide">
              Works ({books.length})
            </h2>
          </div>

          {books.length === 0 ? (
            <p className="font-body text-ink/50 text-sm">No works available yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {books.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
