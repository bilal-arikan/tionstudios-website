import { CircleCheck, Zap } from 'lucide-react'
import { featuredGame, games } from '../data/games'

export function HeroVisual({ t }) {
  const shipped = games.filter((game) => game.status === 'Yayında')

  return (
    <div className="hero-visual">
      <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit--two" aria-hidden="true" />

      <div className="readout" aria-label={t('readout.label')}>
        <div className="readout-bar">
          <span className="readout-path">~/tion/{featuredGame.slug}</span>
          <span className="readout-env">PROD</span>
        </div>

        <dl className="readout-body">
          <div className="readout-line">
            <dt>{t('readout.project')}</dt>
            <dd>{featuredGame.title} — <b>{featuredGame.subtitle}</b></dd>
          </div>
          <div className="readout-line">
            <dt>{t('readout.platform')}</dt>
            <dd>{featuredGame.platform}</dd>
          </div>
          <div className="readout-line">
            <dt>{t('readout.type')}</dt>
            <dd>{featuredGame.category}</dd>
          </div>
          <div className="readout-line">
            <dt>{t('readout.focus')}</dt>
            <dd>{featuredGame.focus.join(' · ')}</dd>
          </div>
          <div className="readout-line">
            <dt>{t('readout.status')}</dt>
            <dd className="is-live">
              <span className="live-dot" aria-hidden="true" />
              {t('readout.live')}
            </dd>
          </div>
        </dl>

        <div className="readout-foot">
          <span className="readout-foot-label">{t('readout.studio')}</span>
          <span className="readout-foot-val"><b>{games.length}</b> {t('readout.gamesCount')}</span>
          <span className="readout-foot-val"><b>{shipped.length}</b> {t('readout.shippedCount')}</span>
          <span className="readout-foot-val">Unity · React</span>
        </div>
      </div>

      <div className="floating-card floating-card--top">
        <span className="floating-icon"><Zap size={15} /></span>
        <div><strong>{t('readout.designCode')}</strong><small>{t('readout.oneTeam')}</small></div>
        <CircleCheck size={18} />
      </div>
      <div className="floating-card floating-card--bottom">
        <div className="avatar-stack" aria-hidden="true"><span>UX</span><span>DEV</span><span>QA</span></div>
        <div><strong>{t('readout.location')}</strong><small>Tionport</small></div>
      </div>
    </div>
  )
}
