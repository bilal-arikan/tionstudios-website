import { Process } from '../components/Process.jsx'
import { About } from '../components/About.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { PageCta } from '../components/PageCta.jsx'

export function AboutPage({ t, locale }) {
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={t('about.eyebrow')}
        title={t('about.titleBefore')}
        accent={t('about.titleAccent')}
        description={t('pages.about.description')}
        facts={[
          { label: t('pages.about.factLocation'), value: t('pages.about.factLocationValue') },
          { label: t('pages.about.factAreas'), value: t('pages.about.factAreasValue') },
        ]}
      />
      <About t={t} locale={locale} />
      <Process t={t} locale={locale} />
      <PageCta
        t={t}
        locale={locale}
        title={t('pages.about.ctaTitle')}
        text={t('pages.about.ctaText')}
      />
    </>
  )
}
