import { ArrowLeft, ArrowDown } from 'lucide-react'
import { pathFor } from '../../i18n'

export function DetailHero({ detail, locale }) {
  const { item, kind } = detail
  return (
    <section className="detail-hero" id="top">
      <div className="container">
        <a className="text-link detail-back" href={`${pathFor('home', locale)}#projects`}><ArrowLeft size={16} /> Back to Product</a>
        <div className="detail-hero-grid">
          <div className="detail-hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> Tionport / Product</span>
            <h1>{item.title}<span className="text-accent">.</span></h1>
            {detail.tagline && <p className="detail-tagline">{detail.tagline}</p>}
            <p className="detail-description">{detail.description}</p>
            <a className="button button--outline-light" href="#overview">Explore {kind === 'game' ? 'game' : 'product'} <ArrowDown size={17} /></a>
          </div>
          {kind === 'game' ? (
            <div className="detail-cover"><img src={item.image} alt={`${item.title} game artwork`} fetchPriority="high" /></div>
          ) : (
            <div className={`product-project-card product-project-card--${item.accent} detail-product-art`} aria-hidden="true">
              <div className="product-project-art"><span>{item.monogram}</span></div>
              <p>{item.title}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
