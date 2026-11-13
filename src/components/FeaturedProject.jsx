import { featuredGame, games } from '../data/games'
import { Reveal } from './Reveal.jsx'
import { ArrowUpRight } from 'lucide-react'
import { pathFor } from '../i18n'

export function FeaturedProject({ t, locale }) {
  return (
    <Reveal>
      <article className="featured-project">
        <div className="featured-project-image">
          <img src="/images/projects/real-driver.jpg" alt={t('projects.featuredAlt')} />
          <div className="image-shade" />
          <span className="project-index">01 / {String(games.length).padStart(2, '0')}</span>
          <span className="project-platform">iOS · Android</span>
        </div>
        <div className="featured-project-content">
          <div className="featured-project-head">
            <span className="project-kicker"><span /> {t('projects.kicker')}</span>
            <span className="published-pill">{t('projects.published')}</span>
          </div>
          <div>
            <h3><a href={pathFor('realDriver', locale)}>{featuredGame.title} <ArrowUpRight size={24} aria-hidden="true" /></a></h3>
            <p className="project-subtitle">{featuredGame.subtitle}</p>
          </div>
          <p className="project-description">
            {t('projects.featuredDescription')}
          </p>
          <div className="project-capabilities">
            {(t('projects.capabilities') || []).map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="project-actions">
            <a href={featuredGame.storeUrl} target="_blank" rel="noreferrer">
              <img className="store-badge" src="/images/badges/app-store.png" alt={t('projects.appStoreAlt')} />
            </a>
            <a href={featuredGame.googlePlayUrl} target="_blank" rel="noreferrer">
              <img className="store-badge store-badge--google" src="/images/badges/google-play.png" alt={t('projects.googlePlayAlt')} />
            </a>
          </div>
          <a className="text-link" lang="en" href={pathFor('realDriver', locale)}>Explore Real Driver <ArrowUpRight size={17} /></a>
        </div>
      </article>
    </Reveal>
  )
}
