import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../Reveal.jsx'

export function DetailOverview({ detail }) {
  const { kind, item } = detail
  const features = detail.focus ?? item.features ?? []
  return (
    <section className="section detail-overview" id="overview">
      <div className="container detail-overview-grid">
        <Reveal>
          <span className="eyebrow"><span className="eyebrow-dot" /> Overview</span>
          <h2>{kind === 'game' ? 'The game' : 'The product'}<span className="text-accent">.</span></h2>
          <p>{detail.description}</p>
          {features.length > 0 && <ul className="detail-features">{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>}
        </Reveal>
        <Reveal className="detail-access">
          <h2>{kind === 'game' ? 'Project details' : 'Explore online'}</h2>
          {kind === 'game' ? (
            <>
              <dl className="detail-facts">
                <div><dt>Category</dt><dd>{detail.category}</dd></div>
                <div><dt>Platform</dt><dd>Mobile</dd></div>
                <div><dt>Status</dt><dd>{item.status === 'Geliştirme arşivi' ? 'Development archive' : 'Studio archive'}</dd></div>
              </dl>
              <p className="detail-archive-note">Part of the Tionport game archive.</p>
            </>
          ) : (
            <ul className="detail-online-links">
              {item.links.map((link) => (
                <li key={link.url}><a href={link.url} target="_blank" rel="noopener noreferrer"><span><strong>{link.label}</strong><span>{new URL(link.url).hostname}</span></span><ArrowUpRight size={20} aria-hidden="true" /></a></li>
              ))}
            </ul>
          )}
        </Reveal>
      </div>
    </section>
  )
}
