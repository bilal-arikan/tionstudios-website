import { Sparkles } from 'lucide-react'
import { BrandMark } from './BrandMark'
import { SplitTitle } from './SplitTitle.jsx'

export function PageHero({ eyebrow, title, accent, description, facts = [], image, imageAlt, locale, children }) {
  return (
    <section className={`page-hero${image ? ' page-hero--with-image' : ''}`} id="top">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="page-hero-glow" aria-hidden="true" />
      <div className="container page-hero-inner">
        <div className="page-hero-copy">
          <span className="eyebrow page-hero-eyebrow"><Sparkles size={14} />{eyebrow}</span>
          <h1>{accent ? <SplitTitle locale={locale} before={title} accent={accent} accentClass="" /> : title}</h1>
          <p>{description}</p>
          {children && <div className="page-hero-actions">{children}</div>}
          {facts.length > 0 && (
            <div className="page-hero-facts">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={`page-hero-visual${image ? ' has-image' : ''}`}>
          {image ? (
            <>
              <img src={image} alt={imageAlt} />
              <div className="page-hero-image-overlay" />
              <span className="page-hero-image-label"><span /> TIONPORT</span>
            </>
          ) : (
            <div className="page-hero-system" aria-hidden="true">
              <div className="page-system-top"><span>TIONPORT</span><i /></div>
              <div className="page-system-mark"><BrandMark compact /></div>
              <div className="page-system-lines"><span /><span /><span /></div>
              <div className="page-system-bottom"><span>Web</span><span>Mobile</span><span>Game</span></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
