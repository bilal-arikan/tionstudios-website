import { useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { SplitTitle } from './SplitTitle.jsx'
import { Reveal } from './Reveal.jsx'
import { SectionHeading } from './SectionHeading.jsx'

export function Faq({ t, locale }) {
  const [openIndex, setOpenIndex] = useState(0)
  const faqs = t('faq.items') || []

  return (
    <section className="section faq-section">
      <div className="container faq-grid">
        <Reveal>
          <SectionHeading
            eyebrow={t('faq.eyebrow')}
            title={<SplitTitle locale={locale} before={t('faq.titleBefore')} accent={t('faq.titleAccent')} />}
          />
          <a className="text-link faq-mail-link" href="mailto:info@tionport.com">
            info@tionport.com <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <Reveal key={item.question} delay={index * 50}>
                <div className={`faq-item${isOpen ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span><em>{String(index + 1).padStart(2, '0')}</em>{item.question}</span>
                    <ChevronDown size={20} />
                  </button>
                  <div className="faq-answer" id={`faq-answer-${index}`} aria-hidden={!isOpen}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
