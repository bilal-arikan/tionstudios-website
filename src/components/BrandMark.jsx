export function BrandMark({ compact = false }) {
  return (
    <span className={`brand-lockup${compact ? ' brand-lockup--compact' : ''}`} dir="ltr">
      <span className="brand-symbol" aria-hidden="true">T</span>
      <span className="brand-word">tionport<span>.</span></span>
    </span>
  )
}
