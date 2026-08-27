export function BrandMark({ compact = false }) {
  return (
    <span className={`brand-lockup${compact ? ' brand-lockup--compact' : ''}`}>
      <svg className="brand-symbol" viewBox="0 0 44 44" aria-hidden="true">
        <path d="M13 5.5h18L40 22l-9 16.5H13L4 22 13 5.5Z" />
        <path d="m17 15-7 7 7 7M27 15l7 7-7 7" />
      </svg>
      <span className="brand-copy">
        <strong>TION</strong>
        <small>STUDIOS</small>
      </span>
    </span>
  )
}
