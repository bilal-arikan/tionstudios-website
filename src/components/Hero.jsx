import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { pathFor } from '../i18n'
import { SplitTitle } from './SplitTitle.jsx'
import { HeroVisual } from './HeroVisual.jsx'

export function Hero({ t, locale }) {
  return (
    <section className="hero" id="top">
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="hero-glow hero-glow--one" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="eyebrow-dot" />
            {t('hero.eyebrow')}
          </div>
          <h1>
            <SplitTitle locale={locale} before={t('hero.titleBefore')} accent={t('hero.titleAccent')} after={t('hero.titleAfter')} />
          </h1>
          <p className="hero-description">
            {t('hero.description')}
          </p>
          <div className="hero-actions">
            <a className="button" href={pathFor('services', locale)}>
              {t('hero.ctaPrimary')}
              <ArrowRight size={18} />
            </a>
            <a className="text-link" href={pathFor('games', locale)}>
              {t('hero.ctaSecondary')}
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-proof">
            <div><Check size={15} /><span>{t('hero.proofWeb')}</span></div>
            <div><Check size={15} /><span>{t('hero.proofMobile')}</span></div>
            <div><Check size={15} /><span>{t('hero.proofGame')}</span></div>
          </div>
        </div>
        <HeroVisual t={t} />
      </div>
      <div className="container hero-bottom">
        <span className="hero-bottom-label">Tionport</span>
        <div className="hero-bottom-line" />
        <a href="#hizmetler">{t('hero.scroll')} <span>↓</span></a>
      </div>
    </section>
  )
}
