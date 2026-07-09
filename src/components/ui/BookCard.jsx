import { Link } from 'react-router-dom'
import { Download, BookOpen } from 'lucide-react'
import ComplexityBadge from './ComplexityBadge'
import { getPhilosopherBySlug } from '../../data/philosophers'

export default function BookCard({ book }) {
  const author = getPhilosopherBySlug(book.authorId)

  return (
    <div className="marble-bg border border-gold/30 rounded-lg overflow-hidden gold-glow transition-all duration-300 hover:border-gold/70 hover:shadow-lg flex flex-col">
      {book.coverUrl && (
        <div className="h-40 overflow-hidden bg-gradient-to-br from-aegean/10 to-aegean/30 flex items-center justify-center">
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-heading text-aegean text-base tracking-wide leading-tight flex-1">
            {book.title}
          </h3>
          <ComplexityBadge level={book.complexity} />
        </div>

        <p className="font-body text-ink/50 text-xs mb-3">
          by{' '}
          <Link
            to={`/philosopher/${author?.slug}`}
            className="text-turquoise hover:text-gold transition-colors"
          >
            {author?.name || book.authorId}
          </Link>
        </p>

        <p className="font-body text-ink/70 text-sm leading-relaxed flex-1 line-clamp-4">
          {book.description}
        </p>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gold/20">
          <span className="text-xs text-ink/40 font-body">
            {book.pages} pages
          </span>
          <div className="flex items-center gap-2">
            <Link
              to={`/book/${book.slug}`}
              className="flex items-center gap-1.5 text-xs text-turquoise hover:text-gold transition-colors font-body"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Details
            </Link>
            <a
              href={book.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gold hover:text-aegean transition-colors font-body"
            >
              <Download className="w-3.5 h-3.5" />
              PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
