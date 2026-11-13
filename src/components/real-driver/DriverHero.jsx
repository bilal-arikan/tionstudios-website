import { ArrowDown, ArrowUpRight, Play } from 'lucide-react'
import { pathFor } from '../../i18n'

export function DriverHero({ locale }) {
  return (
    <>
      <nav className="rd-subnav rd-wrap" aria-label="Real Driver navigation">
        <a className="rd-wordmark" href={pathFor('realDriver', locale)}>REAL DRIVER<span> / </span></a>
        <div><a href="#experience">The experience</a><a href="#trailer">Trailer</a><a href="#garage">The garage</a></div>
        <a className="rd-subnav-play" href="#download">Get the game <ArrowUpRight size={15} /></a>
      </nav>
      <section className="rd-hero" aria-labelledby="rd-title">
        <img className="rd-hero-image" src="/images/projects/real-driver.jpg" width="1600" height="900" alt="Red sports car in the Real Driver garage" fetchPriority="high" />
        <div className="rd-hero-shade" />
        <div className="rd-wrap rd-hero-content">
          <p className="rd-eyebrow"><span className="rd-live-dot" /> A TIONPORT ORIGINAL <span className="rd-eyebrow-divider">/</span> CITY DRIVING</p>
          <h1 id="rd-title">REAL<span>DRIVER<span className="rd-title-period">.</span></span></h1>
          <p className="rd-hero-subtitle">LEGEND OF THE CITY</p>
          <p className="rd-hero-copy">Your car. Your rules.<br />A whole city to make your own.</p>
          <div className="rd-hero-actions">
            <a className="rd-button" href="#download">Take the wheel <ArrowUpRight size={19} /></a>
            <a className="rd-watch-link" href="#trailer"><span><Play size={15} fill="currentColor" /></span> Watch the trailer</a>
          </div>
        </div>
        <span className="rd-hero-side" aria-hidden="true">BUILT FOR THE DRIVE. MADE FOR YOU.</span>
        <div className="rd-hero-bottom rd-wrap"><a href="#experience"><ArrowDown size={15} /> SCROLL TO EXPLORE</a><span>01 <i /> THE CITY IS CALLING</span></div>
      </section>
      <div className="rd-ticker" aria-label="Race. Drift. Explore. Make it yours."><div>RACE <span>↗</span> DRIFT <span>↗</span> EXPLORE <span>↗</span> MAKE IT YOURS <span>↗</span><span aria-hidden="true"> RACE ↗ DRIFT ↗ EXPLORE ↗</span></div></div>
    </>
  )
}
