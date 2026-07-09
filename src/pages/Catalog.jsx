import { useState } from 'react'
import { Filter, X } from 'lucide-react'
import { useAsync } from '../hooks/useAsync'
import { getPhilosophers, getBooks } from '../lib/sanity'
import BookCard from '../components/ui/BookCard'
import Sidebar from '../components/layout/Sidebar'
import ArabesqueDivider from '../components/ui/ArabesqueDivider'

export default function Catalog() {
  const { data: books = [], loading: booksLoading } = useAsync(getBooks, [])
  const { data: philosophers = [] } = useAsync(getPhilosophers, [])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedEras, setSelectedEras] = useState([])
  const [selectedAuthors, setSelectedAuthors] = useState([])
  const [selectedComplexities, setSelectedComplexities] = useState([])

  const toggleArray = (arr, setter, value) => {
    setter(arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value])
  }

  const filteredBooks = books.filter(b => {
    if (searchTerm.trim()) {
      const t = searchTerm.toLowerCase()
      if (!b.title?.toLowerCase().includes(t) && !b.description?.toLowerCase().includes(t)) return false
    }
    if (selectedEras.length && !selectedEras.includes(b.era)) return false
    if (selectedAuthors.length && !selectedAuthors.includes(b.authorId)) return false
    if (selectedComplexities.length && !selectedComplexities.includes(b.complexity)) return false
    return true
  })

  const hasActiveFilters = searchTerm || selectedEras.length || selectedAuthors.length || selectedComplexities.length

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
        <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 shrink-0`}>
          <Sidebar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedEras={selectedEras}
            setSelectedEras={v => setSelectedEras(v)}
            selectedAuthors={selectedAuthors}
            setSelectedAuthors={v => setSelectedAuthors(v)}
            selectedComplexities={selectedComplexities}
            setSelectedComplexities={v => setSelectedComplexities(v)}
            onClear={() => {
              setSearchTerm('')
              setSelectedEras([])
              setSelectedAuthors([])
              setSelectedComplexities([])
            }}
            philosophers={philosophers}
          />
        </div>

        <div className="flex-1 min-w-0">
          {booksLoading ? (
            <div className="text-center py-16">
              <p className="font-body text-ink/40 text-sm">Loading works...</p>
            </div>
          ) : hasActiveFilters ? (
            <p className="font-body text-ink/50 text-sm mb-4">
              Showing {filteredBooks.length} {filteredBooks.length === 1 ? 'result' : 'results'}
            </p>
          ) : null}

          {!booksLoading && filteredBooks.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-heading text-aegean/50 text-lg">No works found</p>
              <p className="font-body text-ink/40 text-sm mt-2">Try adjusting your filters or search term</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredBooks.map(book => (
                <BookCard key={book.id || book._id} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
