import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'
import { pathFor } from '../i18n'
import { Reveal } from './Reveal.jsx'

export function PageCta({ t, locale, eyebrow, title, text, primaryLabel, primaryHref, secondaryLabel, secondaryHref }) {
  const ctaEyebrow = eyebrow ?? t('pages.cta.eyebrow')
  const ctaPrimary = primaryLabel ?? t('pages.cta.primary')
  const ctaHref = primaryHref ?? pathFor('contact', locale)
  return (
    <section className="section page-cta-section">
      <div className="container">
        <Reveal>
          <div className="page-cta-card">
            <div>
              <span className="eyebrow"><Sparkles size={14} />{ctaEyebrow}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <div className="page-cta-actions">
              <a className="button" href={ctaHref}>{ctaPrimary}<ArrowRight size={17} /></a>
              {secondaryLabel && secondaryHref && (
                <a className="text-link" href={secondaryHref}>{secondaryLabel}<ArrowUpRight size={16} /></a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
