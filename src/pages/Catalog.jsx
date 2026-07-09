import { useState } from 'react'
import { Filter, X } from 'lucide-react'
import useFilters from '../hooks/useFilters'
import BookCard from '../components/ui/BookCard'
import Sidebar from '../components/layout/Sidebar'
import ArabesqueDivider from '../components/ui/ArabesqueDivider'

export default function Catalog() {
  const filters = useFilters()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="text-center mb-8">
        <h1 className="font-heading text-aegean text-2xl sm:text-3xl tracking-wide">
          Catalog of Works
        </h1>
        <p className="font-body text-ink/60 text-sm mt-1">
          Browse the collected works of the great metaphysicians
        </p>
      </div>

      <ArabesqueDivider />

      <button
        className="lg:hidden flex items-center gap-2 mb-4 text-aegean font-heading text-sm uppercase tracking-wider"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="w-4 h-4" /> : <Filter className="w-4 h-4" />}
        {sidebarOpen ? 'Close Filters' : 'Filters'}
      </button>

      <div className="flex gap-8">
        <Sidebar
          {...filters}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="flex-1 min-w-0">
          {filters.hasActiveFilters && (
            <p className="font-body text-ink/50 text-sm mb-4">
              Showing {filters.filteredBooks.length}{' '}
              {filters.filteredBooks.length === 1 ? 'result' : 'results'}
            </p>
          )}

          {filters.filteredBooks.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-heading text-aegean/50 text-lg">
                No works found
              </p>
              <p className="font-body text-ink/40 text-sm mt-2">
                Try adjusting your filters or search term
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filters.filteredBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
