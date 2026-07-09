const complexityConfig = {
  introductory: {
    label: 'Introductory',
    bg: 'bg-emerald-100',
    text: 'text-emerald-800',
    dot: 'bg-emerald-500',
    icon: '⊙',
  },
  intermediate: {
    label: 'Intermediate',
    bg: 'bg-aegean/10',
    text: 'text-aegean',
    dot: 'bg-aegean',
    icon: '◉',
  },
  advanced: {
    label: 'Advanced',
    bg: 'bg-purple-100',
    text: 'text-purple-800',
    dot: 'bg-purple-500',
    icon: '◎',
  },
  esoteric: {
    label: 'Esoteric',
    bg: 'bg-amber-100',
    text: 'text-amber-800',
    dot: 'bg-gold',
    icon: '✦',
  },
}

export default function ComplexityBadge({ level }) {
  const config = complexityConfig[level]
  if (!config) return null

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider font-body ${config.bg} ${config.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  )
}

export { complexityConfig }
