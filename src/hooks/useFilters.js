import { useState, useMemo } from 'react'
import { getAllBooks } from '../data/books'

export default function useFilters() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedEras, setSelectedEras] = useState([])
  const [selectedAuthors, setSelectedAuthors] = useState([])
  const [selectedComplexities, setSelectedComplexities] = useState([])

  const filteredBooks = useMemo(() => {
    let result = getAllBooks()

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        b =>
          b.title.toLowerCase().includes(term) ||
          b.description.toLowerCase().includes(term) ||
          b.authorId.toLowerCase().includes(term)
      )
    }

    if (selectedEras.length > 0) {
      result = result.filter(b => selectedEras.includes(b.era))
    }

    if (selectedAuthors.length > 0) {
      result = result.filter(b => selectedAuthors.includes(b.authorId))
    }

    if (selectedComplexities.length > 0) {
      result = result.filter(b => selectedComplexities.includes(b.complexity))
    }

    return result
  }, [searchTerm, selectedEras, selectedAuthors, selectedComplexities])

  const hasActiveFilters =
    searchTerm ||
    selectedEras.length > 0 ||
    selectedAuthors.length > 0 ||
    selectedComplexities.length > 0

  return {
    searchTerm,
    setSearchTerm,
    selectedEras,
    setSelectedEras,
    selectedAuthors,
    setSelectedAuthors,
    selectedComplexities,
    setSelectedComplexities,
    filteredBooks,
    hasActiveFilters,
  }
}
