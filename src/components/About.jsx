import { MapPin, Sparkles } from 'lucide-react'
import { SplitTitle } from './SplitTitle.jsx'
import { buildPrinciples } from '../data/content.js'
import { Reveal } from './Reveal.jsx'

export function About({ t, locale }) {
  const principles = buildPrinciples(t)

  return (
    <section className="section about-section" id="hakkimizda">
      <div className="container about-grid">
        <Reveal className="about-sticky">
          <span className="eyebrow"><Sparkles size={14} />{t('about.eyebrow')}</span>
          <h2><SplitTitle locale={locale} before={t('about.titleBefore')} accent={t('about.titleAccent')} /></h2>
          <p>
            {t('about.description')}
          </p>
          <div className="location-chip"><MapPin size={16} />{t('about.location')}</div>
        </Reveal>

        <div className="principles-grid">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <Reveal key={principle.title} delay={index * 70}>
                <article className="principle-card">
                  <span className="principle-icon"><Icon size={23} strokeWidth={1.7} /></span>
                  <span className="principle-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
