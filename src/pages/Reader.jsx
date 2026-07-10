import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, BookOpen, Loader } from 'lucide-react'
import { useState } from 'react'
import { getBookBySlug } from '../data/books'
import { getPhilosopherBySlug } from '../data/philosophers'
import GreekKeyBorder from '../components/ui/GreekKeyBorder'

export default function Reader() {
  const { slug } = useParams()
  const book = getBookBySlug(slug)
  const [loaded, setLoaded] = useState(false)

  if (!book) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="font-heading text-aegean text-xl">Book not found</p>
        <Link to="/catalog" className="text-turquoise hover:text-gold text-sm font-body mt-2 inline-block">
          Return to catalog
        </Link>
      </div>
    )
  }

  const author = getPhilosopherBySlug(book.authorId)

  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="bg-aegean border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              to={`/book/${book.slug}`}
              className="text-gold/60 hover:text-gold shrink-0 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="min-w-0">
              <h1 className="font-heading text-gold text-sm sm:text-base tracking-wide truncate">
                {book.title}
              </h1>
              {author && (
                <p className="text-gold/50 text-[10px] font-body truncate">
                  {author.name}
                </p>
              )}
            </div>
          </div>
          <a
            href={book.readUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gold/60 hover:text-gold font-body shrink-0 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Open in new tab
          </a>
        </div>
        <GreekKeyBorder className="opacity-40" />
      </div>

      <div className="flex-1 bg-ivory relative">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-ivory z-10">
            <div className="text-center">
              <Loader className="w-8 h-8 text-gold animate-spin mx-auto mb-3" />
              <p className="font-body text-ink/40 text-sm">Loading text...</p>
            </div>
          </div>
        )}

        <iframe
          src={book.readUrl}
          title={book.title}
          className="w-full h-full min-h-[70vh] border-0"
          onLoad={() => setLoaded(true)}
          sandbox="allow-same-origin allow-forms allow-popups allow-top-navigation"
        />
      </div>
    </div>
  )
}
