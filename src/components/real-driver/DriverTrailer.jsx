import { useRef, useState } from 'react'
import { ArrowUpRight, Play, X } from 'lucide-react'
import { realDriver } from '../../data/realDriver.js'
import { driverImages, wideImageSizes } from '../../data/realDriverImages.js'

export function DriverTrailer() {
  const [playing, setPlaying] = useState(false)
  const playRef = useRef(null)
  const frameRef = useRef(null)

  function closeVideo() {
    setPlaying(false)
    requestAnimationFrame(() => playRef.current?.focus())
  }

  return (
    <section className="rd-trailer rd-section" id="trailer" aria-labelledby="rd-trailer-title">
      <div className="rd-wrap">
        <div className="rd-section-heading"><div><p className="rd-eyebrow">02 / SEE IT IN MOTION</p><h2 id="rd-trailer-title">Less talk.<br /><em>More throttle.</em></h2></div><a className="rd-text-link" href={realDriver.videoUrl} target="_blank" rel="noreferrer">Watch on YouTube <ArrowUpRight size={17} /></a></div>
        <div className={`rd-video${playing ? ' is-playing' : ''}`}>
          {playing ? (
            <>
              <iframe ref={frameRef} src={`https://www.youtube-nocookie.com/embed/${realDriver.videoId}?autoplay=1&rel=0`} title="Real Driver: Legend of the City — official trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen onLoad={() => frameRef.current?.focus()} />
              <button className="rd-video-close" type="button" onClick={closeVideo} aria-label="Close trailer"><X size={18} /></button>
            </>
          ) : (
            <button ref={playRef} type="button" className="rd-video-poster" onClick={() => setPlaying(true)} aria-label="Play Real Driver trailer">
              <img {...driverImages.lineup} alt="" sizes={wideImageSizes} loading="lazy" decoding="async" />
              <span className="rd-video-topline"><span>REAL DRIVER</span><span>OFFICIAL TRAILER ↗</span></span>
              <span className="rd-play"><Play size={29} fill="currentColor" aria-hidden="true" /></span>
              <span className="rd-video-caption">THE STREETS ARE YOURS.</span>
            </button>
          )}
        </div>
        <div className="rd-video-footnote"><span>REAL DRIVER: LEGEND OF THE CITY</span><span>Video loads from YouTube when you press play.</span></div>
      </div>
    </section>
  )
}
