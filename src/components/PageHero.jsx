import { ArrowDownRight } from 'lucide-react'
import { SplitTitle } from './SplitTitle.jsx'

export function PageHero({ eyebrow, title, accent, description, facts = [], image, imageAlt, locale, children }) {
  return (
    <section className={`page-hero${image ? ' page-hero--with-image' : ''}`} id="top">
      <div className="container page-hero-inner">
        <div className="page-hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
          <h1>{accent ? <SplitTitle locale={locale} before={title} accent={accent} /> : title}</h1>
          <p>{description}</p>
          {children && <div className="page-hero-actions">{children}</div>}
          {facts.length > 0 && <div className="page-hero-facts">{facts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}</div>}
        </div>
        {image ? (
          <div className="page-hero-visual"><img src={image} alt={imageAlt} /><span className="page-hero-image-label">TIONPORT / GAMES</span></div>
        ) : <div className="page-hero-glyph" aria-hidden="true"><ArrowDownRight strokeWidth={0.75} /></div>}
      </div>
    </section>
  )
}
