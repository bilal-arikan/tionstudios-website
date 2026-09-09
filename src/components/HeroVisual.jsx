import { MousePointer2, Pause, Play } from 'lucide-react'
import { useGalaxy } from './galaxy/useGalaxy.js'

export function HeroVisual({ t }) {
  const { hostRef, canvasRef, status, togglePlaying } = useGalaxy()

  return (
    <div className="galaxy">
      <div className="galaxy-heading" aria-hidden="true"><span className="eyebrow-dot" />Tionport universe<span>01 — ∞</span></div>
      <div className="galaxy-stage" ref={hostRef} data-ready={status.ready}>
        <img className="galaxy-poster" src="/images/galaxy.svg" alt="" width="720" height="640" aria-hidden="true" />
        <canvas ref={canvasRef} className="galaxy-canvas" role="img" aria-label={t('galaxy.description')} aria-description={status.ready ? t('galaxy.hint') : undefined} tabIndex={status.ready ? 0 : -1} />
      </div>
      <div className="galaxy-caption">
        {status.ready && <span><MousePointer2 size={13} />{t('galaxy.hint')}</span>}
        {status.ready && <button type="button" onClick={togglePlaying} aria-label={t(status.playing ? 'galaxy.pause' : 'galaxy.play')} title={t(status.playing ? 'galaxy.pause' : 'galaxy.play')}>
          {status.playing ? <Pause size={14} /> : <Play size={14} />}
        </button>}
      </div>
    </div>
  )
}
