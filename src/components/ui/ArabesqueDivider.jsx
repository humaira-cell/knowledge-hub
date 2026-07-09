export default function ArabesqueDivider({ className = '' }) {
  return (
    <div className={`w-full overflow-hidden leading-none my-6 ${className}`}>
      <svg
        viewBox="0 0 1200 12"
        preserveAspectRatio="none"
        className="w-full h-3"
        aria-hidden="true"
      >
        <defs>
          <pattern id="arabesque" x="0" y="0" width="24" height="12" patternUnits="userSpaceOnUse">
            <path
              d="M12 0c-3 0-6 2-6 6s3 6 6 6 6-2 6-6-3-6-6-6z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1"
              opacity="0.5"
            />
            <circle cx="12" cy="6" r="1.5" fill="#D4AF37" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="1200" height="12" fill="url(#arabesque)" />
      </svg>
    </div>
  )
}
