import { Mail } from 'lucide-react'
import { Faq } from '../components/Faq.jsx'
import { Contact } from '../components/Contact.jsx'
import { PageHero } from '../components/PageHero.jsx'

export function ContactPage({ t, locale }) {
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={t('contact.eyebrow')}
        title={t('contact.titleBefore')}
        accent={t('contact.titleAccent')}
        description="info@tionport.com"
        facts={[
          { label: t('pages.about.factLocation'), value: t('contact.location') },
        ]}
      >
        <a className="button" href="mailto:info@tionport.com">{t('pages.contact.sendEmail')} <Mail size={17} /></a>
      </PageHero>
      <Contact t={t} locale={locale} />
      <Faq t={t} locale={locale} />
    </>
  )
}
