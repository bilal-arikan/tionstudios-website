import { ArrowUpRight, Paintbrush, Settings2, Users } from 'lucide-react'
import { driverImages, galleryImageSizes } from '../../data/realDriverImages.js'

export function DriverGarage() {
  return (
    <section className="rd-garage rd-section" id="garage" aria-labelledby="rd-garage-title">
      <div className="rd-wrap rd-garage-grid">
        <div className="rd-garage-art"><span className="rd-garage-outline" aria-hidden="true">YOUR<br />RULES.</span><img {...driverImages.streetCoupe} sizes={galleryImageSizes} loading="lazy" decoding="async" /><span className="rd-image-label">YOUR NEXT CHAPTER STARTS IN THE GARAGE.</span></div>
        <div className="rd-garage-copy"><p className="rd-eyebrow">03 / MAKE IT PERSONAL</p><h2 id="rd-garage-title">Stock is<br /><em>just the start.</em></h2><p>Build a car that feels like you. From the first coat of paint to the way it takes a corner, make every detail your own.</p>
          <div className="rd-garage-feature"><Paintbrush size={21} /><div><h3>Find your signature.</h3><p>Paint, decals and wheels. A new look for every mood.</p></div></div>
          <div className="rd-garage-feature"><Settings2 size={21} /><div><h3>Make the feeling yours.</h3><p>Upgrade your engine, tires and brakes. Refine the drive.</p></div></div>
          <div className="rd-garage-feature"><Users size={21} /><div><h3>Bring your people.</h3><p>Take your ride online and share the streets with other drivers.</p></div></div>
          <a className="rd-text-link" href="#download">Start your story <ArrowUpRight size={17} /></a>
        </div>
      </div>
    </section>
  )
}
