import { pathFor } from '../i18n'
import { Hero } from '../components/Hero.jsx'
import { TechnologyStrip } from '../components/TechnologyStrip.jsx'
import { ProductProjects } from '../components/ProductProjects.jsx'
import { Projects } from '../components/Projects.jsx'
import { PageCta } from '../components/PageCta.jsx'

export function HomePage({ t, locale }) {
  return (
    <>
      <Hero t={t} locale={locale} />
      <TechnologyStrip />
      <ProductProjects locale={locale} />
      <Projects t={t} locale={locale} />
      <PageCta
        t={t}
        locale={locale}
        title={t('pages.home.ctaTitle')}
        text={t('pages.home.ctaText')}
        secondaryLabel={t('nav.services')}
        secondaryHref={pathFor('services', locale)}
      />
    </>
  )
}
