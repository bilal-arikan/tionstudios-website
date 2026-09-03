import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Check,
  ChevronDown,
  CircleCheck,
  Code2,
  Gamepad2,
  Github,
  Globe2,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Palette,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'
import { BrandMark } from './components/BrandMark'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { currentLocale, locales, pathFor, translator } from './i18n'
import { featuredGame, games } from './data/games'

const NAV_PAGES = ['services', 'games', 'about', 'contact']

const SERVICE_ICONS = [Palette, Globe2, Smartphone, Blocks]
const SERVICE_ACCENTS = ['cyan', 'violet', 'blue', 'lime']
const PRINCIPLE_ICONS = [Layers3, Code2, MonitorSmartphone, ShieldCheck]

const projectArchive = games.filter((game) => !game.featured).slice(0, 3)

const technologyList = ['React', 'TypeScript', 'Node.js', 'Cloud', '.NET', 'Unity', 'PostgreSQL', 'REST API']

/** Content arrays are built from the dictionary so they follow the active locale. */
/**
 * Joins a split headline around its highlighted span.
 *
 * Most languages need a space between the parts; Chinese and Japanese do not
 * write spaces between words, so a literal space would show as a visible gap.
 */
function SplitTitle({ before, accent, after, locale, accentClass = 'text-accent' }) {
  const gap = locales[locale]?.wordSpacing === false ? null : ' '
  return (
    <>
      {before}
      {gap}
      <span className={accentClass}>{accent}</span>
      {after ? <>{gap}{after}</> : null}
    </>
  )
}

function buildServices(t) {
  return (t('services.items') || []).map((item, index) => ({
    ...item,
    number: String(index + 1).padStart(2, '0'),
    icon: SERVICE_ICONS[index] ?? SERVICE_ICONS[0],
    accent: SERVICE_ACCENTS[index] ?? SERVICE_ACCENTS[0],
  }))
}

function buildProcessSteps(t) {
  return (t('process.steps') || []).map((step, index) => ({
    ...step,
    number: String(index + 1).padStart(2, '0'),
  }))
}

function buildPrinciples(t) {
  return (t('about.principles') || []).map((item, index) => ({
    ...item,
    icon: PRINCIPLE_ICONS[index] ?? PRINCIPLE_ICONS[0],
  }))
}

function buildNavigation(t, locale) {
  return NAV_PAGES.map((page) => ({
    page,
    label: t(`nav.${page}`),
    href: pathFor(page, locale),
  }))
}

function Reveal({ children, className = '', delay = 0, as: Element = 'div' }) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Element
      ref={elementRef}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Element>
  )
}

function Header({ currentPage = 'home', t, locale }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigationRef = useRef(null)
  const menuButtonRef = useRef(null)
  const closeButtonRef = useRef(null)
  const menuWasOpenRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    if (!menuOpen) {
      if (menuWasOpenRef.current) menuButtonRef.current?.focus()
      menuWasOpenRef.current = false
      return () => document.body.classList.remove('menu-open')
    }

    menuWasOpenRef.current = true
    closeButtonRef.current?.focus()

    const handleMenuKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuOpen(false)
        return
      }

      if (event.key !== 'Tab') return
      const focusableElements = navigationRef.current?.querySelectorAll('a[href], button:not([disabled])')
      if (!focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleMenuKeyDown)
    return () => {
      document.removeEventListener('keydown', handleMenuKeyDown)
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href={pathFor('home', locale)} aria-label={t('nav.home')} onClick={() => setMenuOpen(false)}>
          <BrandMark />
        </a>

        <nav
          ref={navigationRef}
          id="main-navigation"
          className={`main-navigation${menuOpen ? ' is-open' : ''}`}
          aria-label={t('nav.mainNav')}
        >
          <div className="mobile-nav-label">
            <span>{t('nav.menu')}</span>
            <button ref={closeButtonRef} type="button" onClick={() => setMenuOpen(false)} aria-label={t('nav.closeMenu')}>
              <X size={22} />
            </button>
          </div>
          <div className="nav-links">
            {buildNavigation(t, locale).map((item) => (
              <a
                key={item.href}
                className={currentPage === item.page ? 'is-active' : undefined}
                href={item.href}
                aria-current={currentPage === item.page ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mobile-nav-meta">
            <a href="mailto:info@tionstudios.com">info@tionstudios.com</a>
            <span>{t('about.location')}</span>
          </div>
        </nav>

        <LanguageSwitcher locale={locale} page={currentPage} t={t} />

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}

function HeroVisual({ t }) {
  const shipped = games.filter((game) => game.status === 'Yayında')

  return (
    <div className="hero-visual">
      <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit--two" aria-hidden="true" />

      <div className="readout" aria-label={t('readout.label')}>
        <div className="readout-bar">
          <span className="readout-path">~/tion/{featuredGame.slug}</span>
          <span className="readout-env">PROD</span>
        </div>

        <dl className="readout-body">
          <div className="readout-line">
            <dt>{t('readout.project')}</dt>
            <dd>{featuredGame.title} — <b>{featuredGame.subtitle}</b></dd>
          </div>
          <div className="readout-line">
            <dt>{t('readout.platform')}</dt>
            <dd>{featuredGame.platform}</dd>
          </div>
          <div className="readout-line">
            <dt>{t('readout.type')}</dt>
            <dd>{featuredGame.category}</dd>
          </div>
          <div className="readout-line">
            <dt>{t('readout.focus')}</dt>
            <dd>{featuredGame.focus.join(' · ')}</dd>
          </div>
          <div className="readout-line">
            <dt>{t('readout.status')}</dt>
            <dd className="is-live">
              <span className="live-dot" aria-hidden="true" />
              {t('readout.live')}
            </dd>
          </div>
        </dl>

        <div className="readout-foot">
          <span className="readout-foot-label">{t('readout.studio')}</span>
          <span className="readout-foot-val"><b>{games.length}</b> {t('readout.gamesCount')}</span>
          <span className="readout-foot-val"><b>{shipped.length}</b> {t('readout.shippedCount')}</span>
          <span className="readout-foot-val">Unity · React</span>
        </div>
      </div>

      <div className="floating-card floating-card--top">
        <span className="floating-icon"><Zap size={15} /></span>
        <div><strong>{t('readout.designCode')}</strong><small>{t('readout.oneTeam')}</small></div>
        <CircleCheck size={18} />
      </div>
      <div className="floating-card floating-card--bottom">
        <div className="avatar-stack" aria-hidden="true"><span>UX</span><span>DEV</span><span>QA</span></div>
        <div><strong>{t('readout.location')}</strong><small>TION Studios</small></div>
      </div>
    </div>
  )
}

function Hero({ t, locale }) {
  return (
    <section className="hero" id="top">
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="hero-glow hero-glow--one" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="eyebrow-dot" />
            {t('hero.eyebrow')}
          </div>
          <h1>
            <SplitTitle locale={locale} before={t('hero.titleBefore')} accent={t('hero.titleAccent')} after={t('hero.titleAfter')} />
          </h1>
          <p className="hero-description">
            {t('hero.description')}
          </p>
          <div className="hero-actions">
            <a className="button" href={pathFor('services', locale)}>
              {t('hero.ctaPrimary')}
              <ArrowRight size={18} />
            </a>
            <a className="text-link" href={pathFor('games', locale)}>
              {t('hero.ctaSecondary')}
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-proof">
            <div><Check size={15} /><span>{t('hero.proofWeb')}</span></div>
            <div><Check size={15} /><span>{t('hero.proofMobile')}</span></div>
            <div><Check size={15} /><span>{t('hero.proofGame')}</span></div>
          </div>
        </div>
        <HeroVisual t={t} />
      </div>
      <div className="container hero-bottom">
        <span className="hero-bottom-label">TION Studios</span>
        <div className="hero-bottom-line" />
        <a href="#hizmetler">{t('hero.scroll')} <span>↓</span></a>
      </div>
    </section>
  )
}

function TechnologyStrip() {
  return (
    <div className="technology-strip" aria-label="Teknoloji yetkinlikleri">
      <div className="technology-track">
        {[0, 1].map((group) => (
          <div className="technology-group" key={group} aria-hidden={group === 1}>
            {technologyList.map((technology) => (
              <span key={`${group}-${technology}`}><i />{technology}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="eyebrow"><Sparkles size={14} />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function Services({ t, locale }) {
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

function FeaturedProject({ t }) {
  return (
    <Reveal>
      <article className="featured-project">
        <div className="featured-project-image">
          <img src="/images/projects/real-driver.jpg" alt={t('projects.featuredAlt')} />
          <div className="image-shade" />
          <span className="project-index">01 / {String(games.length).padStart(2, '0')}</span>
          <span className="project-platform">App Store · iOS</span>
        </div>
        <div className="featured-project-content">
          <div className="featured-project-head">
            <span className="project-kicker"><span /> {t('projects.kicker')}</span>
            <span className="published-pill">{t('projects.published')}</span>
          </div>
          <div>
            <h3>{featuredGame.title}</h3>
            <p className="project-subtitle">{featuredGame.subtitle}</p>
          </div>
          <p className="project-description">
            {t('projects.featuredDescription')}
          </p>
          <div className="project-capabilities">
            {(t('projects.capabilities') || []).map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="project-actions">
            <a href={featuredGame.storeUrl} target="_blank" rel="noreferrer">
              <img className="store-badge" src="/images/badges/app-store.png" alt={t('projects.appStoreAlt')} />
            </a>
            <a href={featuredGame.googlePlayUrl} target="_blank" rel="noreferrer">
              <img className="store-badge store-badge--google" src="/images/badges/google-play.png" alt={t('projects.googlePlayAlt')} />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function Projects({ t, locale }) {
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

function Process({ t, locale }) {
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

function About({ t, locale }) {
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

function Faq({ t, locale }) {
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
          <a className="text-link faq-mail-link" href="mailto:info@tionstudios.com">
            info@tionstudios.com <ArrowUpRight size={16} />
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

function Contact({ t, locale }) {
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
    window.location.href = `mailto:info@tionstudios.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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
            <a href="mailto:info@tionstudios.com">
              <span><Mail size={18} /></span>
              <div><small>{t('contact.directLabel')}</small><strong>info@tionstudios.com</strong></div>
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

function PageHero({ eyebrow, title, accent, description, facts = [], image, imageAlt, locale, children }) {
  return (
    <section className={`page-hero${image ? ' page-hero--with-image' : ''}`} id="top">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="page-hero-glow" aria-hidden="true" />
      <div className="container page-hero-inner">
        <div className="page-hero-copy">
          <span className="eyebrow page-hero-eyebrow"><Sparkles size={14} />{eyebrow}</span>
          <h1>{accent ? <SplitTitle locale={locale} before={title} accent={accent} accentClass="" /> : title}</h1>
          <p>{description}</p>
          {children && <div className="page-hero-actions">{children}</div>}
          {facts.length > 0 && (
            <div className="page-hero-facts">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={`page-hero-visual${image ? ' has-image' : ''}`}>
          {image ? (
            <>
              <img src={image} alt={imageAlt} />
              <div className="page-hero-image-overlay" />
              <span className="page-hero-image-label"><span /> TION STUDIOS</span>
            </>
          ) : (
            <div className="page-hero-system" aria-hidden="true">
              <div className="page-system-top"><span>TION STUDIOS</span><i /></div>
              <div className="page-system-mark"><BrandMark compact /></div>
              <div className="page-system-lines"><span /><span /><span /></div>
              <div className="page-system-bottom"><span>Web</span><span>Mobile</span><span>Game</span></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function PageCta({ t, locale, eyebrow, title, text, primaryLabel, primaryHref, secondaryLabel, secondaryHref }) {
  const ctaEyebrow = eyebrow ?? t('pages.cta.eyebrow')
  const ctaPrimary = primaryLabel ?? t('pages.cta.primary')
  const ctaHref = primaryHref ?? pathFor('contact', locale)
  return (
    <section className="section page-cta-section">
      <div className="container">
        <Reveal>
          <div className="page-cta-card">
            <div>
              <span className="eyebrow"><Sparkles size={14} />{ctaEyebrow}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <div className="page-cta-actions">
              <a className="button" href={ctaHref}>{ctaPrimary}<ArrowRight size={17} /></a>
              {secondaryLabel && secondaryHref && (
                <a className="text-link" href={secondaryHref}>{secondaryLabel}<ArrowUpRight size={16} /></a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function GamesCatalog({ t, locale }) {
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

function HomePage({ t, locale }) {
  return (
    <>
      <Hero t={t} locale={locale} />
      <TechnologyStrip />
      <Services t={t} locale={locale} />
      <Projects t={t} locale={locale} />
      <PageCta
        t={t}
        locale={locale}
        title={t('pages.home.ctaTitle')}
        text={t('pages.home.ctaText')}
        secondaryLabel={t('nav.services')}
        secondaryHref={pathFor('services', locale)}
      />
    </>
  )
}

function ServicesPage({ t, locale }) {
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={t('services.eyebrow')}
        title={t('pages.services.title')}
        accent={t('pages.services.accent')}
        description={t('pages.services.description')}
      >
        <a className="button" href={pathFor('contact', locale)}>{t('nav.contact')} <ArrowRight size={17} /></a>
      </PageHero>
      <Services t={t} locale={locale} />
      <Process t={t} locale={locale} />
      <TechnologyStrip />
      <PageCta
        t={t}
        locale={locale}
        title={t('pages.services.ctaTitle')}
        text={t('pages.services.ctaText')}
      />
    </>
  )
}

function GamesPage({ t, locale }) {
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={t('games.eyebrow')}
        title={t('games.heroTitle')}
        accent={t('games.heroAccent')}
        description={t('pages.games.description')}
        image={featuredGame.wideImage}
        imageAlt={t('pages.games.heroImageAlt')}
      >
        <a className="button" href="#tum-oyunlar">{t('pages.games.seeAll')} <ArrowRight size={17} /></a>
        <a className="text-link" href={`#${featuredGame.slug}`}>{featuredGame.title} <ArrowRight size={15} /></a>
      </PageHero>
      <GamesCatalog t={t} locale={locale} />
      <PageCta
        t={t}
        locale={locale}
        title={t('pages.games.ctaTitle')}
        text={t('pages.games.ctaText')}
        secondaryLabel={t('nav.services')}
        secondaryHref={pathFor('services', locale)}
      />
    </>
  )
}

function AboutPage({ t, locale }) {
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={t('about.eyebrow')}
        title={t('about.titleBefore')}
        accent={t('about.titleAccent')}
        description={t('pages.about.description')}
        facts={[
          { label: t('pages.about.factLocation'), value: t('pages.about.factLocationValue') },
          { label: t('pages.about.factAreas'), value: t('pages.about.factAreasValue') },
        ]}
      />
      <About t={t} locale={locale} />
      <Process t={t} locale={locale} />
      <PageCta
        t={t}
        locale={locale}
        title={t('pages.about.ctaTitle')}
        text={t('pages.about.ctaText')}
      />
    </>
  )
}

function ContactPage({ t, locale }) {
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={t('contact.eyebrow')}
        title={t('contact.titleBefore')}
        accent={t('contact.titleAccent')}
        description="info@tionstudios.com"
        facts={[
          { label: t('pages.about.factLocation'), value: t('contact.location') },
        ]}
      >
        <a className="button" href="mailto:info@tionstudios.com">{t('pages.contact.sendEmail')} <Mail size={17} /></a>
      </PageHero>
      <Contact t={t} locale={locale} />
      <Faq t={t} locale={locale} />
    </>
  )
}

function NotFoundPage({ t, locale }) {
  return (
    <PageHero
      locale={locale}
      eyebrow={t('pages.notFound.eyebrow')}
      title={t('pages.notFound.title')}
      accent={t('pages.notFound.accent')}
      description={t('pages.notFound.description')}
    >
      <a className="button" href={pathFor('home', locale)}>{t('pages.notFound.cta')} <ArrowRight size={17} /></a>
    </PageHero>
  )
}

function Footer({ t, locale }) {
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
          <a href="mailto:info@tionstudios.com">info@tionstudios.com <ArrowUpRight size={17} /></a>
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

const pageComponents = {
  home: HomePage,
  services: ServicesPage,
  games: GamesPage,
  about: AboutPage,
  contact: ContactPage,
  notFound: NotFoundPage,
}

function App({ page = 'home' }) {
  const Page = pageComponents[page] || NotFoundPage
  const locale = currentLocale()
  const t = translator(locale)

  // Keep the document in sync with the locale it is actually rendering, so
  // screen readers and the browser's own text handling get it right.
  useEffect(() => {
    const { htmlLang, dir } = locales[locale]
    document.documentElement.lang = htmlLang
    document.documentElement.dir = dir
  }, [locale])

  return (
    <div className="site-shell">
      <Header currentPage={page} t={t} locale={locale} />
      <main id="main-content">
        <Page t={t} locale={locale} />
      </main>
      <Footer t={t} locale={locale} />
    </div>
  )
}

export default App
