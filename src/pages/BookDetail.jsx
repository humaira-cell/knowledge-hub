import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Download, BookOpen, User, BookMarked } from 'lucide-react'
import { getBookBySlug } from '../data/books'
import { getPhilosopherBySlug } from '../data/philosophers'
import ComplexityBadge from '../components/ui/ComplexityBadge'
import GreekKeyBorder from '../components/ui/GreekKeyBorder'

export default function BookDetail() {
  const { slug } = useParams()
  const book = getBookBySlug(slug)

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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Link
        to="/catalog"
        className="inline-flex items-center gap-1.5 text-gold hover:text-aegean text-sm font-body transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Catalog
      </Link>

      <div className="marble-bg border border-gold/30 rounded-lg overflow-hidden gold-glow">
        {book.coverUrl ? (
          <div className="h-48 sm:h-56 bg-gradient-to-br from-aegean/10 to-aegean/30 flex items-center justify-center overflow-hidden">
            <img
              src={book.coverUrl}
              alt={book.title}
              className="w-full h-full object-contain object-bottom opacity-90"
            />
          </div>
        ) : (
          <div className={`h-32 bg-gradient-to-br ${author?.portraitBg || 'from-aegean to-aegean'} flex items-center justify-center`}>
            <BookOpen className="w-10 h-10 text-gold/40" />
          </div>
        )}

        <div className="p-6 lg:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <h1 className="font-heading text-aegean text-2xl sm:text-3xl tracking-wide">
              {book.title}
            </h1>
            <ComplexityBadge level={book.complexity} />
          </div>

          {author && (
            <Link
              to={`/philosopher/${author.slug}`}
              className="inline-flex items-center gap-1.5 text-turquoise hover:text-gold text-sm font-body transition-colors mb-6"
            >
              <User className="w-3.5 h-3.5" />
              by {author.name}
            </Link>
          )}

          <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gold/20">
            <div className="text-center">
              <p className="font-heading text-aegean text-lg">{book.pages}</p>
              <p className="font-body text-ink/40 text-[10px] uppercase tracking-wider">Pages</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-aegean text-lg capitalize">
                {book.complexity}
              </p>
              <p className="font-body text-ink/40 text-[10px] uppercase tracking-wider">Level</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-aegean text-lg capitalize">
                {book.era === 'ancient' ? 'Ancient' : 'Perennialist'}
              </p>
              <p className="font-body text-ink/40 text-[10px] uppercase tracking-wider">Era</p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-aegean text-lg tracking-wide mb-3">
              Metaphysical Description
            </h2>
            <p className="font-body text-ink/80 text-sm sm:text-base leading-relaxed">
              {book.description}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gold/20 flex flex-wrap gap-3">
            <Link
              to={`/book/${book.slug}/read`}
              className="inline-flex items-center gap-2 bg-aegean text-ivory font-heading text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-aegean/90 transition-colors"
            >
              <BookMarked className="w-4 h-4" />
              Read Online
            </Link>
            <a
              href={book.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-aegean font-heading text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-gold/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
