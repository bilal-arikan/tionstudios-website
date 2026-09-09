import { ArrowRight } from 'lucide-react'
import { pathFor } from '../i18n'
import { featuredGame } from '../data/games'
import { PageHero } from '../components/PageHero.jsx'
import { PageCta } from '../components/PageCta.jsx'
import { GamesCatalog } from '../components/GamesCatalog.jsx'

export function GamesPage({ t, locale }) {
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={t('games.eyebrow')}
        title={t('games.heroTitle')}
        accent={t('games.heroAccent')}
        description={t('pages.games.description')}
        image={featuredGame.wideImage}
        imageAlt={t('pages.games.heroImageAlt')}
      >
        <a className="button" href="#tum-oyunlar">{t('pages.games.seeAll')} <ArrowRight size={17} /></a>
        <a className="text-link" href={`#${featuredGame.slug}`}>{featuredGame.title} <ArrowRight size={15} /></a>
      </PageHero>
      <GamesCatalog t={t} locale={locale} />
      <PageCta
        t={t}
        locale={locale}
        title={t('pages.games.ctaTitle')}
        text={t('pages.games.ctaText')}
        secondaryLabel={t('nav.services')}
        secondaryHref={pathFor('services', locale)}
      />
    </>
  )
}
