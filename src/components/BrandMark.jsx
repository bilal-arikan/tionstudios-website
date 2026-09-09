export function BrandMark({ compact = false }) {
  return (
    <span className={`brand-lockup${compact ? ' brand-lockup--compact' : ''}`} dir="ltr">
      <img className="brand-symbol" src="/favicon.svg?v=2" width="36" height="36" alt="" />
      <span className="brand-word">tionport<span>.</span></span>
    </span>
  )
}
