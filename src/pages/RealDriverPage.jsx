import { DriverHero } from '../components/real-driver/DriverHero.jsx'
import { DrivingModes } from '../components/real-driver/DrivingModes.jsx'
import { DriverTrailer } from '../components/real-driver/DriverTrailer.jsx'
import { DriverGarage } from '../components/real-driver/DriverGarage.jsx'
import { DriverGallery } from '../components/real-driver/DriverGallery.jsx'
import { PlatformLinks } from '../components/real-driver/PlatformLinks.jsx'
import '../styles/real-driver.css'

export function RealDriverPage({ locale }) {
  return (
    <div className="rd-page" id="top" lang="en" dir="ltr">
      <DriverHero locale={locale} />
      <DrivingModes />
      <DriverTrailer />
      <DriverGarage />
      <DriverGallery />
      <section className="rd-download rd-section" id="download" aria-labelledby="rd-download-title">
        <div className="rd-wrap"><p className="rd-eyebrow">YOUR NEXT DRIVE STARTS HERE</p><h2 id="rd-download-title">The city is waiting.<br /><em>Make your entrance.</em></h2><p>Real Driver: Legend of the City</p><PlatformLinks /><p className="rd-download-note">Available on iOS and Android. The road to Steam is next.</p></div>
        <span className="rd-finish-line" aria-hidden="true" />
      </section>
    </div>
  )
}
