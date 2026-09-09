import { ArrowRight, ArrowUpRight, Monitor, Smartphone, Gamepad2 } from 'lucide-react'
import { pathFor } from '../i18n'
import { SplitTitle } from './SplitTitle.jsx'
import { HeroVisual } from './HeroVisual.jsx'

export function Hero({ t, locale }) {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-topline">
          <span className="eyebrow"><span className="eyebrow-dot" />{t('hero.eyebrow')}</span>
          <span className="hero-discipline">Independent digital studio</span>
        </div>
        <div className="hero-inner">
          <div className="hero-copy">
            <h1><SplitTitle locale={locale} before={t('hero.titleBefore')} accent={t('hero.titleAccent')} after={t('hero.titleAfter')} /></h1>
            <p className="hero-description">{t('hero.description')}</p>
            <div className="hero-actions">
              <a className="button" href={pathFor('contact', locale)}>{t('pages.cta.primary')}<ArrowUpRight size={19} /></a>
              <a className="text-link" href={pathFor('services', locale)}>{t('hero.ctaPrimary')}<ArrowRight size={18} /></a>
            </div>
          </div>
          <HeroVisual t={t} locale={locale} />
        </div>
        <div className="hero-bottom">
          <div className="hero-proof">
            <span><Monitor size={17} />{t('hero.proofWeb')}</span>
            <span><Smartphone size={17} />{t('hero.proofMobile')}</span>
            <span><Gamepad2 size={18} />{t('hero.proofGame')}</span>
          </div>
          <a href="#hizmetler">{t('hero.scroll')}<span>↓</span></a>
        </div>
      </div>
    </section>
  )
}
