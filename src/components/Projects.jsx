import { ArrowRight, Gamepad2 } from 'lucide-react'
import { pathFor } from '../i18n'
import { projectArchive } from '../data/content.js'
import { SplitTitle } from './SplitTitle.jsx'
import { Reveal } from './Reveal.jsx'
import { SectionHeading } from './SectionHeading.jsx'
import { FeaturedProject } from './FeaturedProject.jsx'

export function Projects({ t, locale }) {
  return (
    <section className="section projects-section" id="projeler">
      <div className="projects-glow" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <div className="section-intro-grid section-intro-grid--projects">
            <SectionHeading
              eyebrow={t('projects.eyebrow')}
              title={<SplitTitle locale={locale} before={t('projects.titleBefore')} accent={t('projects.titleAccent')} />}
            />
            <div className="section-side-copy">
              <p>{t('projects.sideCopy')}</p>
              <span><Gamepad2 size={16} /> {t('projects.archiveLabel')}</span>
            </div>
          </div>
        </Reveal>

        <FeaturedProject t={t} />

        <div className="project-archive-grid">
          {projectArchive.map((project, index) => (
            <Reveal key={project.title} delay={index * 90}>
              <article className="archive-card">
                <div className="archive-image">
                  <img
                    src={project.image}
                    alt={t('projects.coverAlt', { title: project.title, subtitle: project.subtitle })}
                    loading="lazy"
                  />
                  <span className="archive-arrow" aria-hidden="true"><Gamepad2 size={18} /></span>
                </div>
                <div className="archive-content">
                  <span>{project.category} · {project.status}</span>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="projects-all-row">
          <a className="button button--outline-light" href={pathFor('games', locale)}>
            {t('projects.allGames')} <ArrowRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
