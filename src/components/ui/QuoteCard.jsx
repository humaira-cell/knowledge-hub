import { Quote } from 'lucide-react'

export default function QuoteCard({ quote, compact = false }) {
  if (compact) {
    return (
      <div className="border-l-2 border-gold pl-3 py-1">
        <p className="font-body text-ink/80 text-xs leading-relaxed italic">
          &ldquo;{quote.text}&rdquo;
        </p>
        {quote.source && (
          <p className="text-ink/40 text-[10px] mt-1 font-body">
            &mdash; {quote.source}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="marble-bg border border-gold/30 rounded-lg p-6 relative gold-glow">
      <Quote className="absolute top-3 left-3 w-6 h-6 text-gold/20" />
      <div className="pl-4 border-l-2 border-gold">
        <p className="font-body text-ink/80 text-sm sm:text-base leading-relaxed italic">
          &ldquo;{quote.text}&rdquo;
        </p>
        <div className="mt-3 flex items-center gap-3 text-xs text-ink/50 font-body">
          {quote.source && (
            <span>&mdash; {quote.source}</span>
          )}
          {quote.context && (
            <>
              <span className="w-1 h-1 rounded-full bg-gold/40" />
              <span className="italic">{quote.context}</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
