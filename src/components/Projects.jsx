import { ArrowUpRight, Gamepad2 } from 'lucide-react'
import { pathFor } from '../i18n'
import { projectArchive } from '../data/content.js'
import { gamePageId } from '../data/detailPages.js'
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

        <FeaturedProject t={t} locale={locale} />

        <div className="project-archive-grid">
          {projectArchive.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 90}>
              <article className="archive-card">
                <a className="archive-image" href={pathFor(gamePageId(project.slug), locale)} aria-label={`Explore ${project.title}`}>
                  <img
                    src={project.image}
                    alt={t('projects.coverAlt', { title: project.title, subtitle: project.subtitle })}
                    loading="lazy"
                  />
                  <span className="archive-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
                </a>
                <div className="archive-content">
                  <span>{project.category} · {project.status}</span>
                  <h3><a href={pathFor(gamePageId(project.slug), locale)}>{project.title}</a></h3>
                  <p>{project.subtitle}</p>
                  <a className="text-link" lang="en" href={pathFor(gamePageId(project.slug), locale)}>Explore game <ArrowUpRight size={16} /></a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
