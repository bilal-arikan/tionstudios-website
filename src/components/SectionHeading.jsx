export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
