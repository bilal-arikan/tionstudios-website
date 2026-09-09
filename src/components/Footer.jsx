import { ArrowUpRight, Github, Instagram, Linkedin } from 'lucide-react'
import { BrandMark } from './BrandMark'
import { pathFor } from '../i18n'
import { buildNavigation } from '../data/content.js'

export function Footer({ t, locale }) {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <a href={pathFor('home', locale)} className="brand" aria-label={t('nav.home')}><BrandMark /></a>
          <p>{t('footerExtra.tagline')}</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/tion-studios" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://github.com/tionstudios" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.instagram.com/tionstudios/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
          </div>
        </div>
        <div className="footer-links-column">
          <span>{t('footer.explore')}</span>
          {buildNavigation(t, locale).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <div className="footer-links-column">
          <span>{t('footer.legal')}</span>
          <a href={pathFor('privacy', locale)}>{t('footer.privacy')}</a>
          <a href={pathFor('terms', locale)}>{t('footer.terms')}</a>
          <a href="/app-ads.txt">App Ads</a>
        </div>
        <div className="footer-contact-column">
          <span>{t('footer.contact')}</span>
          <a href="mailto:info@tionport.com">info@tionport.com <ArrowUpRight size={17} /></a>
          <p>{t('about.location')}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>
        <p>{t('footer.tagline')}</p>
        <a href="#top">{t('footer.backToTop')} <span>↑</span></a>
      </div>
    </footer>
  )
}
