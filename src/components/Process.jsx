import { CircleCheck } from 'lucide-react'
import { SplitTitle } from './SplitTitle.jsx'
import { buildProcessSteps } from '../data/content.js'
import { Reveal } from './Reveal.jsx'
import { SectionHeading } from './SectionHeading.jsx'

export function Process({ t, locale }) {
  const processSteps = buildProcessSteps(t)

  return (
    <section className="section process-section" id="yaklasim">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t('process.eyebrow')}
            title={<SplitTitle locale={locale} before={t('process.titleBefore')} accent={t('process.titleAccent')} />}
            description={t('process.description')}
            align="center"
          />
        </Reveal>

        <div className="process-list">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 70}>
              <article className="process-item">
                <span className="process-number">{step.number}</span>
                <div className="process-title">
                  <span className="process-dot" />
                  <h3>{step.title}</h3>
                </div>
                <p>{step.text}</p>
                <span className="process-output"><CircleCheck size={15} />{step.output}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
