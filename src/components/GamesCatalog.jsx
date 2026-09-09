import { Gamepad2, ShieldCheck } from 'lucide-react'
import { games } from '../data/games'
import { SplitTitle } from './SplitTitle.jsx'
import { Reveal } from './Reveal.jsx'
import { SectionHeading } from './SectionHeading.jsx'

export function GamesCatalog({ t, locale }) {
  return (
    <section className="section games-catalog-section" id="tum-oyunlar">
      <div className="container">
        <Reveal>
          <div className="section-intro-grid games-catalog-intro">
            <SectionHeading
              eyebrow={t('catalog.eyebrow')}
              title={<SplitTitle locale={locale} before={t('catalog.titleBefore')} accent={t('catalog.titleAccent')} />}
            />
            <div className="catalog-side-copy">
              <p>{t('catalog.sideCopy')}</p>
              <span><ShieldCheck size={15} /> {t('catalog.statusNote')}</span>
            </div>
          </div>
        </Reveal>

        <div className="games-catalog-grid">
          {games.map((game, index) => (
            <Reveal key={game.slug} delay={(index % 4) * 70} className={game.featured ? 'game-card-wrap game-card-wrap--featured' : 'game-card-wrap'}>
              <article className={`game-catalog-card${game.featured ? ' is-featured' : ''}`} id={game.slug}>
                <div className="game-card-image">
                  <img src={game.featured ? game.wideImage : game.image} alt={t('catalog.gameAlt', { title: game.title, subtitle: game.subtitle })} loading={game.featured ? 'eager' : 'lazy'} />
                  <div className="game-card-shade" />
                  <span className={`game-status${game.featured ? ' is-live' : ''}`}>{game.status}</span>
                  <span className="game-number">{String(index + 1).padStart(2, '0')} / {String(games.length).padStart(2, '0')}</span>
                </div>
                <div className="game-card-body">
                  <div className="game-card-meta"><span>{game.category}</span><span>{game.platform}</span></div>
                  <h2>{game.title}</h2>
                  <p className="game-card-subtitle">{game.subtitle}</p>
                  <p className="game-card-description">{game.description}</p>
                  <div className="game-card-focus">
                    {game.focus.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <div className="game-card-footer">
                    {game.storeUrl ? (
                      <>
                        <a href={game.storeUrl} target="_blank" rel="noreferrer">
                          <img className="store-badge store-badge--small" src="/images/badges/app-store.png" alt={t('projects.appStoreAlt')} />
                        </a>
                        {game.googlePlayUrl && (
                          <a href={game.googlePlayUrl} target="_blank" rel="noreferrer">
                            <img className="store-badge store-badge--small store-badge--google" src="/images/badges/google-play.png" alt={t('projects.googlePlayAlt')} />
                          </a>
                        )}
                      </>
                    ) : (
                      <span><Gamepad2 size={15} /> {t('catalog.studioArchive')}</span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="games-archive-note">
            <strong>{t('catalog.noteLabel')}</strong> {t('catalog.noteText')}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
