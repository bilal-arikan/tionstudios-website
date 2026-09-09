import { ArrowRight } from 'lucide-react'
import { pathFor } from '../i18n'
import { TechnologyStrip } from '../components/TechnologyStrip.jsx'
import { Services } from '../components/Services.jsx'
import { Process } from '../components/Process.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { PageCta } from '../components/PageCta.jsx'

export function ServicesPage({ t, locale }) {
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={t('services.eyebrow')}
        title={t('pages.services.title')}
        accent={t('pages.services.accent')}
        description={t('pages.services.description')}
      >
        <a className="button" href={pathFor('contact', locale)}>{t('nav.contact')} <ArrowRight size={17} /></a>
      </PageHero>
      <Services t={t} locale={locale} />
      <Process t={t} locale={locale} />
      <TechnologyStrip />
      <PageCta
        t={t}
        locale={locale}
        title={t('pages.services.ctaTitle')}
        text={t('pages.services.ctaText')}
      />
    </>
  )
}
