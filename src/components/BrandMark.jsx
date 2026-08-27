export function BrandMark({ compact = false }) {
  return (
    <span className={`brand-lockup${compact ? ' brand-lockup--compact' : ''}`}>
      <img className="brand-symbol brand-symbol--original" src="/apple-touch-icon.png" alt="" aria-hidden="true" />
      <span className="brand-copy">
        <strong>TION</strong>
        <small>STUDIOS</small>
      </span>
    </span>
  )
}
