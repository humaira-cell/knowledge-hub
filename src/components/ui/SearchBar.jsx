import { Search } from 'lucide-react'

export default function SearchBar({ value, onChange, placeholder = 'Seek wisdom...' }) {
  return (
    <div className="relative max-w-lg mx-auto">
      <div className="relative border-2 border-gold/60 rounded overflow-hidden manuscript-border bg-ivory">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="w-4 h-4 text-gold/60" />
        </div>
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent pl-11 pr-4 py-3 text-ink font-body text-sm placeholder-gold/50 focus:outline-none"
        />
      </div>
    </div>
  )
}
