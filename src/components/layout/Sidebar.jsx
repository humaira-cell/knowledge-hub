import { Filter } from 'lucide-react'
import { getAllPhilosophers } from '../../data/philosophers'

const eras = [
  { value: 'ancient', label: 'Ancient' },
  { value: 'perennialist', label: 'Perennialist' },
]

const complexities = [
  { value: 'introductory', label: 'Introductory' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
  { value: 'esoteric', label: 'Esoteric' },
]

export default function Sidebar({
  searchTerm,
  setSearchTerm,
  selectedEras,
  setSelectedEras,
  selectedAuthors,
  setSelectedAuthors,
  selectedComplexities,
  setSelectedComplexities,
  isOpen,
}) {
  const toggleArray = (arr, setter, value) => {
    setter(
      arr.includes(value)
        ? arr.filter(v => v !== value)
        : [...arr, value]
    )
  }

  return (
    <aside
      className={`${
        isOpen ? 'block' : 'hidden'
      } lg:block w-full lg:w-64 shrink-0`}
    >
      <div className="lg:sticky lg:top-6 bg-aegean/5 border border-gold/20 rounded-lg p-5">
        <div className="flex items-center gap-2 mb-5 pb-3 border-b border-gold/20">
          <Filter className="w-4 h-4 text-gold" />
          <h3 className="font-heading text-aegean text-sm tracking-wider uppercase">
            Filters
          </h3>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block font-heading text-aegean text-xs tracking-wider uppercase mb-2">
              Search
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Seek wisdom..."
              className="w-full bg-ivory border border-gold/40 rounded px-3 py-2 text-sm text-ink placeholder-gold/50 font-body focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition"
            />
          </div>

          <div>
            <h4 className="font-heading text-aegean text-xs tracking-wider uppercase mb-2">
              Era
            </h4>
            <div className="space-y-1.5">
              {eras.map(era => (
                <label
                  key={era.value}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedEras.includes(era.value)}
                    onChange={() => toggleArray(selectedEras, setSelectedEras, era.value)}
                    className="accent-gold w-3.5 h-3.5"
                  />
                  <span className="font-body text-sm text-ink/80 group-hover:text-ink transition">
                    {era.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-aegean text-xs tracking-wider uppercase mb-2">
              Author
            </h4>
            <div className="space-y-1.5">
              {getAllPhilosophers().map(p => (
                <label
                  key={p.id}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedAuthors.includes(p.id)}
                    onChange={() => toggleArray(selectedAuthors, setSelectedAuthors, p.id)}
                    className="accent-gold w-3.5 h-3.5"
                  />
                  <span className="font-body text-sm text-ink/80 group-hover:text-ink transition">
                    {p.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-aegean text-xs tracking-wider uppercase mb-2">
              Complexity
            </h4>
            <div className="space-y-1.5">
              {complexities.map(c => (
                <label
                  key={c.value}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedComplexities.includes(c.value)}
                    onChange={() => toggleArray(selectedComplexities, setSelectedComplexities, c.value)}
                    className="accent-gold w-3.5 h-3.5"
                  />
                  <span className="font-body text-sm text-ink/80 group-hover:text-ink transition">
                    {c.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setSearchTerm('')
              setSelectedEras([])
              setSelectedAuthors([])
              setSelectedComplexities([])
            }}
            className="w-full text-center font-body text-xs text-turquoise hover:text-gold transition-colors uppercase tracking-wider"
          >
            Clear all filters
          </button>
        </div>
      </div>
    </aside>
  )
}
