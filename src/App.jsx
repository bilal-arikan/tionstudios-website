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
import { featuredGame, games } from './data/games'

const navigation = [
  { label: 'Hizmetler', href: '/hizmetler/', page: 'services' },
  { label: 'Oyunlar', href: '/oyunlar/', page: 'games' },
  { label: 'Hakkımızda', href: '/hakkimizda/', page: 'about' },
  { label: 'İletişim', href: '/iletisim/', page: 'contact' },
]

const services = [
  {
    number: '01',
    icon: Palette,
    title: 'Ürün Tasarımı',
    text: 'Ürün kapsamı, kullanıcı akışları ve arayüz tasarımı.',
    tags: ['Keşif', 'UX', 'UI'],
    accent: 'cyan',
  },
  {
    number: '02',
    icon: Globe2,
    title: 'Web Geliştirme',
    text: 'Kurumsal siteler, web uygulamaları ve yönetim panelleri.',
    tags: ['React', 'API', 'E-ticaret'],
    accent: 'violet',
  },
  {
    number: '03',
    icon: Smartphone,
    title: 'Mobil Uygulamalar',
    text: 'iOS ve Android için mobil uygulama geliştirme.',
    tags: ['iOS', 'Android', 'Cross-platform'],
    accent: 'blue',
  },
  {
    number: '04',
    icon: Blocks,
    title: 'Özel Yazılım & Oyun',
    text: 'Özel iş yazılımları, entegrasyonlar ve Unity projeleri.',
    tags: ['Entegrasyon', 'Otomasyon', 'Unity'],
    accent: 'lime',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Kapsam',
    text: 'Gereksinimleri ve öncelikleri belirleriz.',
    output: 'Kapsam + plan',
  },
  {
    number: '02',
    title: 'Tasarım',
    text: 'Akışları ve arayüzü prototipleriz.',
    output: 'Prototip',
  },
  {
    number: '03',
    title: 'Geliştirme',
    text: 'Ürünü geliştirir ve test ederiz.',
    output: 'Test sürümü',
  },
  {
    number: '04',
    title: 'Yayın',
    text: 'Ürünü yayınlar, gerektiğinde bakımını sürdürürüz.',
    output: 'Canlı ürün',
  },
]

const projectArchive = games.filter((game) => !game.featured).slice(0, 3)

const technologyList = ['React', 'TypeScript', 'Node.js', 'Cloud', '.NET', 'Unity', 'PostgreSQL', 'REST API']

const faqs = [
  {
    question: 'Hangi projelerde çalışıyorsunuz?',
    answer: 'Web, mobil, özel yazılım ve oyun projelerinde çalışıyoruz.',
  },
  {
    question: 'Süreç nasıl başlıyor?',
    answer: 'Kısa bir görüşmeden sonra kapsam ve çalışma planı hazırlanır.',
  },
  {
    question: 'Mevcut bir projeyi devralabilir misiniz?',
    answer: 'Evet. Önce kod ve tasarım yapısını inceler, ardından devir planı hazırlarız.',
  },
  {
    question: 'Yayın sonrasında destek veriyor musunuz?',
    answer: 'İhtiyaca göre bakım, iyileştirme ve yeni özellik desteği veriyoruz.',
  },
  {
    question: 'Bütçe nasıl belirleniyor?',
    answer: 'Bütçe; kapsam, teknik gereksinimler ve takvime göre belirlenir.',
  },
]

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

function Header({ currentPage = 'home' }) {
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
        <a className="brand" href="/" aria-label="TION Studios ana sayfa" onClick={() => setMenuOpen(false)}>
          <BrandMark />
        </a>

        <nav
          ref={navigationRef}
          id="main-navigation"
          className={`main-navigation${menuOpen ? ' is-open' : ''}`}
          aria-label="Ana menü"
        >
          <div className="mobile-nav-label">
            <span>Menü</span>
            <button ref={closeButtonRef} type="button" onClick={() => setMenuOpen(false)} aria-label="Menüyü kapat">
              <X size={22} />
            </button>
          </div>
          <div className="nav-links">
            {navigation.map((item) => (
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
            <span>İstanbul · Türkiye</span>
          </div>
        </nav>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
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

function HeroVisual() {
  const shipped = games.filter((game) => game.status === 'Yayında')

  return (
    <div className="hero-visual">
      <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit--two" aria-hidden="true" />

      <div className="readout" aria-label="TION Studios yayın durumu">
        <div className="readout-bar">
          <span className="readout-path">~/tion/{featuredGame.slug}</span>
          <span className="readout-env">PROD</span>
        </div>

        <dl className="readout-body">
          <div className="readout-line">
            <dt>proje</dt>
            <dd>{featuredGame.title} — <b>{featuredGame.subtitle}</b></dd>
          </div>
          <div className="readout-line">
            <dt>platform</dt>
            <dd>{featuredGame.platform}</dd>
          </div>
          <div className="readout-line">
            <dt>tür</dt>
            <dd>{featuredGame.category}</dd>
          </div>
          <div className="readout-line">
            <dt>odak</dt>
            <dd>{featuredGame.focus.join(' · ')}</dd>
          </div>
          <div className="readout-line">
            <dt>durum</dt>
            <dd className="is-live">
              <span className="live-dot" aria-hidden="true" />
              İki mağazada yayında
            </dd>
          </div>
        </dl>

        <div className="readout-foot">
          <span className="readout-foot-label">STÜDYO</span>
          <span className="readout-foot-val"><b>{games.length}</b> oyun</span>
          <span className="readout-foot-val"><b>{shipped.length}</b> yayında</span>
          <span className="readout-foot-val">Unity · React</span>
        </div>
      </div>

      <div className="floating-card floating-card--top">
        <span className="floating-icon"><Zap size={15} /></span>
        <div><strong>Tasarım + kod</strong><small>Tek ekip</small></div>
        <CircleCheck size={18} />
      </div>
      <div className="floating-card floating-card--bottom">
        <div className="avatar-stack" aria-hidden="true"><span>UX</span><span>DEV</span><span>QA</span></div>
        <div><strong>İstanbul</strong><small>TION Studios</small></div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="hero-glow hero-glow--one" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="eyebrow-dot" />
            TION Studios · İstanbul
          </div>
          <h1>
            Web, mobil ve <span className="text-accent">oyun</span> geliştiriyoruz.
          </h1>
          <p className="hero-description">
            TION Studios, yazılım ve oyun geliştirme stüdyosudur.
          </p>
          <div className="hero-actions">
            <a className="button" href="/hizmetler/">
              Hizmetler
              <ArrowRight size={18} />
            </a>
            <a className="text-link" href="/oyunlar/">
              Oyunlar
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-proof" aria-label="Hizmet kapsamı">
            <div><Check size={15} /><span>Web geliştirme</span></div>
            <div><Check size={15} /><span>Mobil uygulama</span></div>
            <div><Check size={15} /><span>Oyun geliştirme</span></div>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="container hero-bottom">
        <span className="hero-bottom-label">TION Studios</span>
        <div className="hero-bottom-line" />
        <a href="#hizmetler">Aşağı kaydır <span>↓</span></a>
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

function Services() {
  return (
    <section className="section services-section" id="hizmetler">
      <div className="container">
        <Reveal>
          <div className="section-intro-grid">
            <SectionHeading
              eyebrow="Hizmetler"
              title={<>Çalışma <span className="text-accent">alanları.</span></>}
            />
            <p className="section-lead">
              Web, mobil, özel yazılım ve oyun geliştirme.
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
                  <a href="/iletisim/" aria-label={`${service.title} hakkında konuşalım`}>
                    İletişim <ArrowUpRight size={17} />
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

function FeaturedProject() {
  return (
    <Reveal>
      <article className="featured-project">
        <div className="featured-project-image">
          <img src="/images/projects/real-driver.jpg" alt="Real Driver: Legend of the City oyunundan kırmızı spor otomobil" />
          <div className="image-shade" />
          <span className="project-index">01 / 07</span>
          <span className="project-platform">App Store · iOS</span>
        </div>
        <div className="featured-project-content">
          <div className="featured-project-head">
            <span className="project-kicker"><span /> TION OYUNLARI</span>
            <span className="published-pill">Yayında</span>
          </div>
          <div>
            <h3>Real Driver</h3>
            <p className="project-subtitle">Legend of the City</p>
          </div>
          <p className="project-description">
            Mobil şehir ve sürüş simülasyonu.
          </p>
          <div className="project-capabilities">
            <span>Mobil</span>
            <span>3D</span>
            <span>Sürüş</span>
            <span>Unity</span>
          </div>
          <div className="project-actions">
            <a href="https://apps.apple.com/us/app/real-driver-legend-of-the-city/id1607564621" target="_blank" rel="noreferrer">
              <img className="store-badge" src="/images/badges/app-store.png" alt="App Store’da görüntüle" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.arikan.realdriver" target="_blank" rel="noreferrer">
              <img className="store-badge store-badge--google" src="/images/badges/google-play.png" alt="Google Play’den indirin" />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function Projects() {
  return (
    <section className="section projects-section" id="projeler">
      <div className="projects-glow" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <div className="section-intro-grid section-intro-grid--projects">
            <SectionHeading
              eyebrow="Oyunlar"
              title={<>TION <span className="text-accent">oyunları.</span></>}
            />
            <div className="section-side-copy">
              <p>Yedi mobil oyun projesi.</p>
              <span><Gamepad2 size={16} /> Oyun arşivi</span>
            </div>
          </div>
        </Reveal>

        <FeaturedProject />

        <div className="project-archive-grid">
          {projectArchive.map((project, index) => (
            <Reveal key={project.title} delay={index * 90}>
              <article className="archive-card">
                <div className="archive-image">
                  <img src={project.image} alt={`${project.title} ${project.subtitle} kapak görseli`} loading="lazy" />
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
          <a className="button button--outline-light" href="/oyunlar/">
            Tüm oyunlar <ArrowRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section process-section" id="yaklasim">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Süreç"
            title={<>Çalışma <span className="text-accent">süreci.</span></>}
            description="Kapsam, tasarım, geliştirme ve yayın."
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

function About() {
  const principles = [
    {
      icon: Layers3,
      title: 'Tasarım ve geliştirme',
      text: 'Tasarım ve yazılım aynı süreçte yürütülür.',
    },
    {
      icon: Code2,
      title: 'Teknik yapı',
      text: 'Bakımı yapılabilir sistemler geliştiririz.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Düzenli paylaşım',
      text: 'Çalışan sürümleri süreç boyunca paylaşırız.',
    },
    {
      icon: ShieldCheck,
      title: 'Destek',
      text: 'Yayın sonrasında bakım desteği verebiliriz.',
    },
  ]

  return (
    <section className="section about-section" id="hakkimizda">
      <div className="container about-grid">
        <Reveal className="about-sticky">
          <span className="eyebrow"><Sparkles size={14} />Hakkımızda</span>
          <h2>TION <span className="text-accent">Studios.</span></h2>
          <p>
            İstanbul merkezli yazılım ve oyun geliştirme stüdyosuyuz.
          </p>
          <div className="location-chip"><MapPin size={16} />İstanbul, Türkiye</div>
        </Reveal>

        <div className="principles-grid">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <Reveal key={principle.title} delay={index * 70}>
                <article className="principle-card">
                  <span className="principle-icon"><Icon size={23} strokeWidth={1.7} /></span>
                  <span className="principle-index">0{index + 1}</span>
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

function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section faq-section">
      <div className="container faq-grid">
        <Reveal>
          <SectionHeading
            eyebrow="SSS"
            title={<>Sık sorulan <span className="text-accent">sorular.</span></>}
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
                    <span><em>0{index + 1}</em>{item.question}</span>
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

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = `Yeni proje talebi — ${data.get('name')}`
    const body = [
      `Ad Soyad: ${data.get('name')}`,
      `E-posta: ${data.get('email')}`,
      `Şirket: ${data.get('company') || '-'}`,
      `Proje tipi: ${data.get('projectType')}`,
      '',
      'Proje hakkında:',
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
          <span className="eyebrow eyebrow--light"><Sparkles size={14} />İletişim</span>
          <h2>Projeniz için <span>bize yazın.</span></h2>
          <p>Kısa bir bilgi bırakın veya doğrudan e-posta gönderin.</p>
          <div className="contact-direct">
            <a href="mailto:info@tionstudios.com"><span><Mail size={18} /></span><div><small>Doğrudan yazın</small><strong>info@tionstudios.com</strong></div></a>
            <div><span><MapPin size={18} /></span><div><small>Konum</small><strong>İstanbul, Türkiye</strong></div></div>
          </div>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={100}>
          <div className="form-heading">
            <div><span>İLETİŞİM</span><strong>Proje bilgileri</strong></div>
            <span className="form-step">E-POSTA</span>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
            <div className="form-row">
              <label>
                <span>Adınız *</span>
                <input name="name" type="text" placeholder="Ad Soyad" autoComplete="name" maxLength={80} required />
              </label>
              <label>
                <span>İş e-postanız *</span>
                <input name="email" type="email" placeholder="siz@sirket.com" autoComplete="email" maxLength={254} required />
              </label>
            </div>
            <label>
              <span>Şirket / marka</span>
              <input name="company" type="text" placeholder="Varsa şirketinizin adı" autoComplete="organization" maxLength={120} />
            </label>
            <label>
              <span>Proje tipi *</span>
              <select name="projectType" defaultValue="" required>
                <option value="" disabled>Seçiniz</option>
                <option>Web uygulaması</option>
                <option>Mobil uygulama</option>
                <option>Özel yazılım</option>
                <option>Oyun projesi</option>
                <option>UX/UI tasarım</option>
                <option>Diğer</option>
              </select>
            </label>
            <label>
              <span>Kısaca projeniz *</span>
              <textarea name="message" rows="4" placeholder="Hedefiniz, ihtiyacınız ve varsa hedef takviminiz..." maxLength={700} required />
            </label>
            <button className="button button--dark form-submit" type="submit">
              E-posta oluştur <Send size={17} />
            </button>
            <p className={`form-note${submitted ? ' is-active' : ''}`} aria-live="polite">
              {submitted ? 'Taslak hazırlandı. E-posta uygulamanız açılmazsa info@tionstudios.com adresine doğrudan yazabilirsiniz.' : 'Form, bilgilerinizi e-posta uygulamanızda hazır bir taslağa dönüştürür.'}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function PageHero({ eyebrow, title, accent, description, facts = [], image, imageAlt, children }) {
  return (
    <section className={`page-hero${image ? ' page-hero--with-image' : ''}`} id="top">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="page-hero-glow" aria-hidden="true" />
      <div className="container page-hero-inner">
        <div className="page-hero-copy">
          <span className="eyebrow page-hero-eyebrow"><Sparkles size={14} />{eyebrow}</span>
          <h1>{title} {accent && <span>{accent}</span>}</h1>
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

function PageCta({ eyebrow = 'İletişim', title, text, primaryLabel = 'Bize yazın', primaryHref = '/iletisim/', secondaryLabel, secondaryHref }) {
  return (
    <section className="section page-cta-section">
      <div className="container">
        <Reveal>
          <div className="page-cta-card">
            <div>
              <span className="eyebrow"><Sparkles size={14} />{eyebrow}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <div className="page-cta-actions">
              <a className="button" href={primaryHref}>{primaryLabel}<ArrowRight size={17} /></a>
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

function GamesCatalog() {
  return (
    <section className="section games-catalog-section" id="tum-oyunlar">
      <div className="container">
        <Reveal>
          <div className="section-intro-grid games-catalog-intro">
            <SectionHeading
              eyebrow="Tüm oyunlar"
              title={<>Oyun <span className="text-accent">arşivi.</span></>}
            />
            <div className="catalog-side-copy">
              <p>Yedi mobil oyun projesi.</p>
              <span><ShieldCheck size={15} /> Yayın ve arşiv durumları belirtilmiştir</span>
            </div>
          </div>
        </Reveal>

        <div className="games-catalog-grid">
          {games.map((game, index) => (
            <Reveal key={game.slug} delay={(index % 4) * 70} className={game.featured ? 'game-card-wrap game-card-wrap--featured' : 'game-card-wrap'}>
              <article className={`game-catalog-card${game.featured ? ' is-featured' : ''}`} id={game.slug}>
                <div className="game-card-image">
                  <img src={game.featured ? game.wideImage : game.image} alt={`${game.title} ${game.subtitle} oyun görseli`} loading={game.featured ? 'eager' : 'lazy'} />
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
                          <img className="store-badge store-badge--small" src="/images/badges/app-store.png" alt="App Store’da görüntüle" />
                        </a>
                        {game.googlePlayUrl && (
                          <a href={game.googlePlayUrl} target="_blank" rel="noreferrer">
                            <img className="store-badge store-badge--small store-badge--google" src="/images/badges/google-play.png" alt="Google Play’den indirin" />
                          </a>
                        )}
                      </>
                    ) : (
                      <span><Gamepad2 size={15} /> TION stüdyo arşivi</span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="games-archive-note">
            <strong>Not:</strong> Aktif olmayan eski mağaza bağlantıları paylaşılmamıştır.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <TechnologyStrip />
      <Services />
      <Projects />
      <PageCta
        title="Bir projeniz mi var?"
        text="Kısa bilgi için bize yazın."
        secondaryLabel="Hizmetler"
        secondaryHref="/hizmetler/"
      />
    </>
  )
}

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        title="Web, mobil ve oyun"
        accent="geliştirme."
        description="Ürün tasarımı, yazılım geliştirme ve bakım."
      >
        <a className="button" href="/iletisim/">İletişim <ArrowRight size={17} /></a>
      </PageHero>
      <Services />
      <Process />
      <TechnologyStrip />
      <PageCta
        title="Projeniz için bize yazın."
        text="Kapsam ve takvim görüşmede belirlenir."
      />
    </>
  )
}

function GamesPage() {
  return (
    <>
      <PageHero
        eyebrow="Oyunlar"
        title="TION"
        accent="oyunları."
        description="Yedi mobil oyun projesi."
        image={featuredGame.wideImage}
        imageAlt="Real Driver oyunundan kırmızı spor otomobil"
      >
        <a className="button" href="#tum-oyunlar">Tüm oyunları gör <ArrowRight size={17} /></a>
        <a className="text-link" href="#real-driver">Real Driver <ArrowRight size={15} /></a>
      </PageHero>
      <GamesCatalog />
      <PageCta
        title="Oyun projesi için bize yazın."
        text="Tasarım ve geliştirme desteği veriyoruz."
        secondaryLabel="Hizmetler"
        secondaryHref="/hizmetler/"
      />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="TION"
        accent="Studios."
        description="İstanbul merkezli yazılım ve oyun geliştirme stüdyosu."
        facts={[
          { label: 'Konum', value: 'İstanbul' },
          { label: 'Alanlar', value: 'Web · Mobil · Oyun' },
        ]}
      />
      <About />
      <Process />
      <PageCta
        title="İletişim"
        text="Yeni bir proje için bize yazabilirsiniz."
      />
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Projeniz için"
        accent="bize yazın."
        description="info@tionstudios.com"
        facts={[
          { label: 'Konum', value: 'İstanbul, Türkiye' },
        ]}
      >
        <a className="button" href="mailto:info@tionstudios.com">E-posta gönder <Mail size={17} /></a>
      </PageHero>
      <Contact />
      <Faq />
    </>
  )
}

function NotFoundPage() {
  return (
    <PageHero
      eyebrow="404 / Sayfa bulunamadı"
      title="Aradığınız sayfa"
      accent="burada değil."
      description="Bağlantı değişmiş veya sayfa kaldırılmış olabilir."
    >
      <a className="button" href="/">Ana sayfaya dön <ArrowRight size={17} /></a>
    </PageHero>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <a href="/" className="brand" aria-label="TION Studios ana sayfa"><BrandMark /></a>
          <p>Yazılım ve oyun geliştirme stüdyosu.</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/tion-studios" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://github.com/tionstudios" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.instagram.com/tionstudios/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
          </div>
        </div>
        <div className="footer-links-column">
          <span>Keşfet</span>
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>) }
        </div>
        <div className="footer-links-column">
          <span>Yasal</span>
          <a href="/privacy-policy.html">Gizlilik Politikası</a>
          <a href="/terms-of-services.html">Kullanım Koşulları</a>
          <a href="/app-ads.txt">App Ads</a>
        </div>
        <div className="footer-contact-column">
          <span>İletişim</span>
          <a href="mailto:info@tionstudios.com">info@tionstudios.com <ArrowUpRight size={17} /></a>
          <p>İstanbul · Türkiye</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} TION Studios. Tüm hakları saklıdır.</p>
        <p>Web · Mobil · Oyun</p>
        <a href="#top">Yukarı dön <span>↑</span></a>
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

  return (
    <div className="site-shell">
      <Header currentPage={page} />
      <main id="main-content">
        <Page />
      </main>
      <Footer />
    </div>
  )
}

export default App
