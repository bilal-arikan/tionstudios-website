import { useState } from 'react'
import { Mail, MapPin, Send, Sparkles } from 'lucide-react'
import { SplitTitle } from './SplitTitle.jsx'
import { Reveal } from './Reveal.jsx'

export function Contact({ t, locale }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = t('contact.mailSubject', { name: data.get('name') })
    const body = [
      `${t('contact.mailName')}: ${data.get('name')}`,
      `${t('contact.mailEmail')}: ${data.get('email')}`,
      `${t('contact.mailCompany')}: ${data.get('company') || '-'}`,
      `${t('contact.mailProjectType')}: ${data.get('projectType')}`,
      '',
      t('contact.mailAbout'),
      data.get('message'),
    ].join('\n')

    setSubmitted(true)
    window.location.href = `mailto:info@tionport.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="section contact-section" id="iletisim">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <span className="eyebrow eyebrow--light"><Sparkles size={14} />{t('contact.eyebrow')}</span>
          <h2><SplitTitle locale={locale} before={t('contact.titleBefore')} accent={t('contact.titleAccent')} accentClass="" /></h2>
          <p>{t('contact.description')}</p>
          <div className="contact-direct">
            <a href="mailto:info@tionport.com">
              <span><Mail size={18} /></span>
              <div><small>{t('contact.directLabel')}</small><strong>info@tionport.com</strong></div>
            </a>
            <div>
              <span><MapPin size={18} /></span>
              <div><small>{t('contact.locationLabel')}</small><strong>{t('contact.location')}</strong></div>
            </div>
          </div>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={90}>
          <div className="form-heading">
            <div><span>{t('contact.eyebrow')}</span><strong>{t('contact.formHeading')}</strong></div>
            <span className="form-step">{t('contact.formStep')}</span>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
            <div className="form-row">
              <label>
                <span>{t('contact.fields.name')}</span>
                <input name="name" type="text" placeholder={t('contact.fields.namePlaceholder')} autoComplete="name" maxLength={80} required />
              </label>
              <label>
                <span>{t('contact.fields.email')}</span>
                <input name="email" type="email" placeholder={t('contact.fields.emailPlaceholder')} autoComplete="email" maxLength={254} required />
              </label>
            </div>
            <label>
              <span>{t('contact.fields.company')}</span>
              <input name="company" type="text" placeholder={t('contact.fields.companyPlaceholder')} autoComplete="organization" maxLength={120} />
            </label>
            <label>
              <span>{t('contact.fields.projectType')}</span>
              <select name="projectType" defaultValue="" required>
                <option value="" disabled>{t('contact.choose')}</option>
                {(t('contact.projectTypes') || []).map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>
              <span>{t('contact.fields.message')}</span>
              <textarea name="message" rows="4" placeholder={t('contact.fields.messagePlaceholder')} maxLength={700} required />
            </label>
            <button className="button button--dark form-submit" type="submit">
              {t('contact.submit')} <Send size={17} />
            </button>
            <p className={`form-note${submitted ? ' is-active' : ''}`} aria-live="polite">
              {submitted ? t('contact.noteSent') : t('contact.note')}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
