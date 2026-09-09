import { ArrowRight } from 'lucide-react'
import { pathFor } from '../i18n'
import { PageHero } from '../components/PageHero.jsx'

export function NotFoundPage({ t, locale }) {
  return (
    <PageHero
      locale={locale}
      eyebrow={t('pages.notFound.eyebrow')}
      title={t('pages.notFound.title')}
      accent={t('pages.notFound.accent')}
      description={t('pages.notFound.description')}
    >
      <a className="button" href={pathFor('home', locale)}>{t('pages.notFound.cta')} <ArrowRight size={17} /></a>
    </PageHero>
  )
}
