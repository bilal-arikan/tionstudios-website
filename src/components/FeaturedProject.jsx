import { featuredGame, games } from '../data/games'
import { Reveal } from './Reveal.jsx'

export function FeaturedProject({ t }) {
  return (
    <Reveal>
      <article className="featured-project">
        <div className="featured-project-image">
          <img src="/images/projects/real-driver.jpg" alt={t('projects.featuredAlt')} />
          <div className="image-shade" />
          <span className="project-index">01 / {String(games.length).padStart(2, '0')}</span>
          <span className="project-platform">App Store · iOS</span>
        </div>
        <div className="featured-project-content">
          <div className="featured-project-head">
            <span className="project-kicker"><span /> {t('projects.kicker')}</span>
            <span className="published-pill">{t('projects.published')}</span>
          </div>
          <div>
            <h3>{featuredGame.title}</h3>
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
        </div>
      </article>
    </Reveal>
  )
}
