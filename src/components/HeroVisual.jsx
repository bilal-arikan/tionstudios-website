import { ArrowUpRight, Box, Layers3 } from 'lucide-react'
import { featuredGame, games } from '../data/games'
import { pathFor } from '../i18n'

export function HeroVisual({ t, locale }) {
  return (
    <div className="hero-showcase">
      <a className="showcase-project" href={`${pathFor('games', locale)}#${featuredGame.slug}`}>
        <div className="showcase-top"><span>{t('projects.eyebrow')}</span><span>01 / {String(games.length).padStart(2, '0')}</span></div>
        <div className="showcase-art">
          <img src={featuredGame.wideImage} alt={t('projects.featuredAlt')} fetchPriority="high" />
          <span className="showcase-status"><span className="eyebrow-dot" />{t('projects.published')}</span>
        </div>
        <div className="showcase-caption">
          <div><span>iOS / Android</span><h2>{featuredGame.title}</h2><p>{featuredGame.subtitle}</p></div>
          <span className="showcase-arrow"><ArrowUpRight size={24} /></span>
        </div>
      </a>
      <div className="showcase-notes">
        <div><Layers3 size={21} /><span>{t('readout.designCode')}<small>{t('readout.oneTeam')}</small></span></div>
        <div><Box size={21} /><span>Web / Mobile / Games<small>{t('readout.location')}</small></span></div>
      </div>
    </div>
  )
}
