import { useGalaxy } from './galaxy/useGalaxy.js'

export function HeroVisual({ t }) {
  const { hostRef, canvasRef, status } = useGalaxy()

  return (
    <div className="galaxy">
      <div className="galaxy-heading" aria-hidden="true"><span className="eyebrow-dot" />Tionport universe<span>01 — ∞</span></div>
      <div className="galaxy-stage" ref={hostRef} data-ready={status.ready}>
        <img className="galaxy-poster" src="/images/galaxy.svg" alt="" width="720" height="640" aria-hidden="true" />
        <canvas ref={canvasRef} className="galaxy-canvas" role="img" aria-label={t('galaxy.description')} aria-description={status.ready ? t('galaxy.hint') : undefined} tabIndex={status.ready ? 0 : -1} />
      </div>
    </div>
  )
}
