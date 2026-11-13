import { ArrowUpRight, Monitor, Smartphone } from 'lucide-react'
import { realDriver } from '../../data/realDriver.js'

export function PlatformLinks() {
  return (
    <div className="rd-platforms">
      <a className="rd-platform" href={realDriver.storeUrl} target="_blank" rel="noreferrer">
        <Smartphone size={24} aria-hidden="true" />
        <span><small>DOWNLOAD ON THE</small><strong>App Store</strong></span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
      <a className="rd-platform" href={realDriver.googlePlayUrl} target="_blank" rel="noreferrer">
        <svg width="24" height="27" viewBox="0 0 24 27" fill="none" aria-hidden="true"><path d="M2 2L22 13.5L2 25V2Z" stroke="currentColor" strokeWidth="1.5" /><path d="M2 2L15 18M2 25L15 9" stroke="currentColor" strokeWidth="1.5" /></svg>
        <span><small>GET IT ON</small><strong>Google Play</strong></span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
      {realDriver.steamUrl ? (
        <a className="rd-platform" href={realDriver.steamUrl} target="_blank" rel="noreferrer">
          <Monitor size={24} aria-hidden="true" /><span><small>DISCOVER ON</small><strong>Steam</strong></span><ArrowUpRight size={18} aria-hidden="true" />
        </a>
      ) : (
        <div className="rd-platform rd-platform--soon" aria-label="Steam, coming soon">
          <Monitor size={24} aria-hidden="true" /><span><small>COMING SOON</small><strong>Steam</strong></span><span className="rd-soon-dot" aria-hidden="true" />
        </div>
      )}
    </div>
  )
}
