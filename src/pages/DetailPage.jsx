import { DetailHero } from '../components/detail/DetailHero.jsx'
import { DetailOverview } from '../components/detail/DetailOverview.jsx'

export function DetailPage({ detail, locale }) {
  return (
    <div className="detail-page" lang="en" dir="ltr">
      <DetailHero detail={detail} locale={locale} />
      <DetailOverview detail={detail} />
    </div>
  )
}
