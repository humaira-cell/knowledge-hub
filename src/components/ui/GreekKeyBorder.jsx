export default function GreekKeyBorder({ className = '' }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1200 16"
        preserveAspectRatio="none"
        className="w-full h-4"
        aria-hidden="true"
      >
        <defs>
          <pattern id="greek-key" x="0" y="0" width="40" height="16" patternUnits="userSpaceOnUse">
            <path
              d="M0 12h8v-8h8v8h8v-8h8v12"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </pattern>
        </defs>
        <rect width="1200" height="16" fill="url(#greek-key)" />
      </svg>
    </div>
  )
}
