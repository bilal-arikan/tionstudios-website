import { ArrowUpRight } from 'lucide-react'
import { pathFor } from '../i18n'
import { SplitTitle } from './SplitTitle.jsx'
import { buildServices } from '../data/content.js'
import { Reveal } from './Reveal.jsx'
import { SectionHeading } from './SectionHeading.jsx'

export function Services({ t, locale }) {
  const services = buildServices(t)

  return (
    <section className="section services-section" id="hizmetler">
      <div className="container">
        <Reveal>
          <div className="section-intro-grid">
            <SectionHeading
              eyebrow={t('services.eyebrow')}
              title={<SplitTitle locale={locale} before={t('services.titleBefore')} accent={t('services.titleAccent')} />}
            />
            <p className="section-lead">
              {t('services.lead')}
            </p>
          </div>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={index * 80}>
                <article className={`service-card service-card--${service.accent}`}>
                  <div className="service-card-top">
                    <span className="service-icon"><Icon size={24} strokeWidth={1.7} /></span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a href={pathFor('contact', locale)} aria-label={t('services.talkAbout', { title: service.title })}>
                    {t('services.contactCta')} <ArrowUpRight size={17} />
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
