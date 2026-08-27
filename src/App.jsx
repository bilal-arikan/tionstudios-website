import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Braces,
  Check,
  ChevronDown,
  CircleCheck,
  Code2,
  ExternalLink,
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

const navigation = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Projeler', href: '#projeler' },
  { label: 'Yaklaşım', href: '#yaklasim' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
]

const services = [
  {
    number: '01',
    icon: Palette,
    title: 'Ürün Stratejisi & UX/UI',
    text: 'Doğru problemi tanımlar, kullanıcı yolculuğunu sadeleştirir ve geliştirmeye hazır bir ürün sistemi tasarlarız.',
    tags: ['Keşif', 'UX araştırma', 'UI sistemleri'],
    accent: 'cyan',
  },
  {
    number: '02',
    icon: Globe2,
    title: 'Web Uygulamaları',
    text: 'Hızlı, erişilebilir ve ölçeklenebilir kurumsal sitelerden karmaşık SaaS platformlarına kadar web ürünleri geliştiririz.',
    tags: ['React', 'SaaS', 'E-ticaret'],
    accent: 'violet',
  },
  {
    number: '03',
    icon: Smartphone,
    title: 'Mobil Uygulamalar',
    text: 'iOS ve Android için tutarlı deneyime, güçlü performansa ve sürdürülebilir kod tabanına sahip uygulamalar üretiriz.',
    tags: ['iOS & Android', 'Cross-platform', 'API'],
    accent: 'blue',
  },
  {
    number: '04',
    icon: Blocks,
    title: 'Özel Yazılım & Oyun',
    text: 'İşinize özel yönetim sistemleri, entegrasyonlar ve etkileşimli oyun deneyimlerini uçtan uca hayata geçiririz.',
    tags: ['Entegrasyon', 'Otomasyon', 'Unity'],
    accent: 'lime',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Keşif & Strateji',
    text: 'Hedefi, kullanıcıyı ve iş gereksinimlerini birlikte netleştirir; doğru kapsamı oluştururuz.',
    output: 'Ürün kapsamı + yol haritası',
  },
  {
    number: '02',
    title: 'Tasarım & Prototip',
    text: 'Akışları görünür hâle getirir, arayüzü tasarlar ve ürünü kod yazmadan önce doğrularız.',
    output: 'Prototip + tasarım sistemi',
  },
  {
    number: '03',
    title: 'Geliştirme & Test',
    text: 'Sprintler hâlinde geliştirir, çalışan sürümleri düzenli paylaşır ve kalite kontrollerini yürütürüz.',
    output: 'Test edilmiş ürün sürümü',
  },
  {
    number: '04',
    title: 'Yayın & İyileştirme',
    text: 'Yayın sürecini yönetir; gerçek kullanım verileri ve geri bildirimlerle ürünü geliştirmeye devam ederiz.',
    output: 'Canlı ürün + gelişim planı',
  },
]

const projectArchive = [
  {
    title: 'Sea Treasure',
    subtitle: 'Pirate Run',
    image: '/images/projects/sea-treasure.jpg',
    meta: 'Mobil oyun · TION arşivi',
    tone: 'aqua',
  },
  {
    title: 'NeoN',
    subtitle: 'Minimal arcade',
    image: '/images/projects/neon.jpg',
    meta: 'Arcade · TION arşivi',
    tone: 'green',
  },
  {
    title: 'War Train',
    subtitle: 'Iron Fortress',
    image: '/images/projects/war-train.jpg',
    meta: 'Simülasyon · TION arşivi',
    tone: 'steel',
  },
]

const technologyList = ['React', 'TypeScript', 'Node.js', 'Cloud', '.NET', 'Unity', 'PostgreSQL', 'REST API']

const faqs = [
  {
    question: 'Hangi tür projelerde çalışıyorsunuz?',
    answer:
      'Web uygulamaları, mobil ürünler, şirket içi yönetim sistemleri, API ve üçüncü parti entegrasyonlar ile oyun projelerinde çalışıyoruz. Yeni bir ürünün sıfırdan geliştirilmesini de mevcut bir ürünün iyileştirilmesini de üstlenebiliriz.',
  },
  {
    question: 'Süreç nasıl başlıyor?',
    answer:
      'Kısa bir keşif görüşmesiyle hedeflerinizi ve mevcut durumunuzu dinliyoruz. Ardından kapsam, yaklaşım ve sonraki adımları içeren net bir çalışma planı hazırlıyoruz.',
  },
  {
    question: 'Mevcut bir projeyi devralabilir misiniz?',
    answer:
      'Evet. Önce kod tabanı, mimari, tasarım ve iş ihtiyaçlarını inceleriz. Teknik riskleri görünür hâle getirip güvenli bir devir ve iyileştirme planı oluştururuz.',
  },
  {
    question: 'Yayın sonrasında destek veriyor musunuz?',
    answer:
      'Ürünün ihtiyacına göre bakım, performans iyileştirme, yeni özellik geliştirme ve teknik danışmanlık kapsamında birlikte çalışmaya devam edebiliriz.',
  },
  {
    question: 'Proje bütçesi nasıl belirleniyor?',
    answer:
      'Bütçe; kapsam, teknik karmaşıklık, entegrasyonlar ve hedef takvime göre şekillenir. Keşif sonrasında öncelikleri ve teslim aşamalarını görünür kılan şeffaf bir teklif sunarız.',
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

function Header() {
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
        <a className="brand" href="#top" aria-label="TION Studios ana sayfa" onClick={() => setMenuOpen(false)}>
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
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
          <a className="button button--small nav-cta" href="#iletisim" onClick={() => setMenuOpen(false)}>
            Projenizi konuşalım
            <ArrowUpRight size={16} />
          </a>
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
  return (
    <div className="hero-visual" aria-label="TION ürün geliştirme paneli görselleştirmesi">
      <div className="hero-orbit hero-orbit--one" />
      <div className="hero-orbit hero-orbit--two" />
      <div className="build-window">
        <div className="window-bar">
          <div className="window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="window-address">studio.tion / build</span>
          <span className="window-secure"><ShieldCheck size={13} /> Live</span>
        </div>
        <div className="window-body">
          <aside className="window-sidebar" aria-hidden="true">
            <span className="sidebar-brand"><Braces size={19} /></span>
            <span className="sidebar-item is-active" />
            <span className="sidebar-item" />
            <span className="sidebar-item" />
            <span className="sidebar-item" />
            <span className="sidebar-avatar">T</span>
          </aside>
          <div className="window-content">
            <div className="window-heading">
              <div>
                <span className="micro-label">DIGITAL PRODUCT / 001</span>
                <h3>Product cockpit</h3>
              </div>
              <span className="status-pill"><span /> System ready</span>
            </div>

            <div className="metric-grid">
              <div className="metric-card metric-card--primary">
                <span>Product flow</span>
                <strong>Idea → Impact</strong>
                <div className="flow-line">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="metric-card">
                <span>Current sprint</span>
                <strong>Build 02</strong>
                <small><CircleCheck size={13} /> On track</small>
              </div>
            </div>

            <div className="code-panel">
              <div className="code-panel-head">
                <span>product.tsx</span>
                <span>● ● ●</span>
              </div>
              <div className="code-row"><em>01</em><code><b>const</b> product = <i>{'{'}</i></code></div>
              <div className="code-row"><em>02</em><code>&nbsp;&nbsp;strategy: <span>&apos;clear&apos;</span>,</code></div>
              <div className="code-row"><em>03</em><code>&nbsp;&nbsp;experience: <span>&apos;simple&apos;</span>,</code></div>
              <div className="code-row"><em>04</em><code>&nbsp;&nbsp;technology: <span>&apos;scalable&apos;</span>,</code></div>
              <div className="code-row"><em>05</em><code><i>{'}'}</i></code></div>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-card floating-card--top">
        <span className="floating-icon"><Zap size={15} /></span>
        <div><strong>Build complete</strong><small>Ready to ship</small></div>
        <CircleCheck size={18} />
      </div>
      <div className="floating-card floating-card--bottom">
        <div className="avatar-stack" aria-hidden="true"><span>UX</span><span>DEV</span><span>QA</span></div>
        <div><strong>Tek ürün ekibi</strong><small>Stratejiden yayına</small></div>
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
            İstanbul’dan dijital ürünler
          </div>
          <h1>
            Fikrinizi <span className="text-accent">çalışan</span> bir dijital ürüne dönüştürüyoruz.
          </h1>
          <p className="hero-description">
            Strateji, tasarım ve yazılımı tek ekipte buluşturuyor; web, mobil ve özel yazılım ürünlerini fikirden yayına taşıyoruz.
          </p>
          <div className="hero-actions">
            <a className="button" href="#iletisim">
              Projenizi anlatın
              <ArrowRight size={18} />
            </a>
            <a className="text-link" href="#projeler">
              Seçili işleri incele
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-proof" aria-label="Hizmet kapsamı">
            <div><Check size={15} /><span>Uçtan uca ürün geliştirme</span></div>
            <div><Check size={15} /><span>Şeffaf ve çevik süreç</span></div>
            <div><Check size={15} /><span>Sürdürülebilir teknoloji</span></div>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="container hero-bottom">
        <span className="hero-bottom-label">Tasarım + mühendislik</span>
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
              eyebrow="Neler yapıyoruz"
              title={<>Ürünün ihtiyaç duyduğu <span className="text-accent">tek ekip.</span></>}
            />
            <p className="section-lead">
              Sadece kod yazmıyoruz. İş hedefini, kullanıcı deneyimini ve teknik sürdürülebilirliği aynı masada çözüyoruz.
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
                  <a href="#iletisim" aria-label={`${service.title} hakkında konuşalım`}>
                    Birlikte çalışalım <ArrowUpRight size={17} />
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
          <span className="project-index">01 / 04</span>
          <span className="project-platform">App Store · iOS</span>
        </div>
        <div className="featured-project-content">
          <div className="featured-project-head">
            <span className="project-kicker"><span /> TION ORIGINALS</span>
            <span className="published-pill">Yayınlanmış ürün</span>
          </div>
          <div>
            <h3>Real Driver</h3>
            <p className="project-subtitle">Legend of the City</p>
          </div>
          <p className="project-description">
            Mobil platformlar için geliştirilen şehir ve sürüş simülasyonu. Oyun mekaniğinden 3D dünyaya, mobil performanstan mağaza yayınına uzanan uçtan uca bir ürün deneyimi.
          </p>
          <div className="project-capabilities">
            <span>Ürün geliştirme</span>
            <span>Oyun tasarımı</span>
            <span>3D deneyim</span>
            <span>Mobil yayın</span>
          </div>
          <div className="project-actions">
            <a href="https://apps.apple.com/us/app/real-driver-legend-of-the-city/id1607564621" target="_blank" rel="noreferrer">
              App Store <ExternalLink size={15} />
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
              eyebrow="Seçili işler"
              title={<>Yayınlanan fikirler,<br /><span className="text-accent">gerçek deneyimler.</span></>}
            />
            <div className="section-side-copy">
              <p>Ürün üretme kültürümüz oyun dünyasında başladı. Bugün aynı merakı ve teknik disiplini farklı dijital deneyimlere taşıyoruz.</p>
              <span><Gamepad2 size={16} /> TION ürün arşivi</span>
            </div>
          </div>
        </Reveal>

        <FeaturedProject />

        <div className="project-archive-grid">
          {projectArchive.map((project, index) => (
            <Reveal key={project.title} delay={index * 90}>
              <article className={`archive-card archive-card--${project.tone}`}>
                <div className="archive-image">
                  <img src={project.image} alt={`${project.title} ${project.subtitle} kapak görseli`} loading="lazy" />
                  <span className="archive-arrow" aria-hidden="true"><Gamepad2 size={18} /></span>
                </div>
                <div className="archive-content">
                  <span>{project.meta}</span>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
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
            eyebrow="Çalışma şeklimiz"
            title={<>Belirsizliği azaltan,<br /><span className="text-accent">ilerlemeyi görünür kılan</span> süreç.</>}
            description="Her aşamada ne yaptığımızı, neden yaptığımızı ve sırada ne olduğunu bilirsiniz."
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
      title: 'Bütünsel ürün bakışı',
      text: 'Tasarım ve teknoloji kararlarını iş hedefinden ayrı düşünmeyiz.',
    },
    {
      icon: Code2,
      title: 'Sürdürülebilir mühendislik',
      text: 'Bugünü çözerken ürünün yarın büyüyeceği alanı da planlarız.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Sürekli görünürlük',
      text: 'Çalışan sürümleri ve kararları süreç boyunca açıkça paylaşırız.',
    },
    {
      icon: ShieldCheck,
      title: 'Uzun vadeli sahiplenme',
      text: 'Teslimi bir bitiş değil, ürünün yeni döneminin başlangıcı sayarız.',
    },
  ]

  return (
    <section className="section about-section" id="hakkimizda">
      <div className="container about-grid">
        <Reveal className="about-sticky">
          <span className="eyebrow"><Sparkles size={14} />Neden TION?</span>
          <h2>Ajans çevikliği.<br />Ürün ekibi <span className="text-accent">sahiplenmesi.</span></h2>
          <p>
            TION Studios, İstanbul merkezli bir dijital ürün ve yazılım stüdyosu. Karmaşık fikirleri anlaşılır deneyimlere ve sağlam ürünlere dönüştürmek için tasarımcı ve geliştirici bakışını bir araya getiriyoruz.
          </p>
          <div className="location-chip"><MapPin size={16} />41.0082° N · 28.9784° E</div>
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
            eyebrow="Merak edilenler"
            title={<>Başlamadan önce<br /><span className="text-accent">kısa cevaplar.</span></>}
            description="Aklınızdaki başka bir soru için bize doğrudan yazabilirsiniz."
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
      `Bütçe aralığı: ${data.get('budget')}`,
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
          <span className="eyebrow eyebrow--light"><Sparkles size={14} />Bir fikriniz mi var?</span>
          <h2>Bir sonraki dijital ürününüzü <span>birlikte tasarlayalım.</span></h2>
          <p>İhtiyacınızı birkaç cümleyle anlatın. Doğru yaklaşımı, kapsamı ve ilk adımı birlikte netleştirelim.</p>
          <div className="contact-direct">
            <a href="mailto:info@tionstudios.com"><span><Mail size={18} /></span><div><small>Doğrudan yazın</small><strong>info@tionstudios.com</strong></div></a>
            <div><span><MapPin size={18} /></span><div><small>Konum</small><strong>İstanbul, Türkiye</strong></div></div>
          </div>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={100}>
          <div className="form-heading">
            <div><span>PROJECT BRIEF</span><strong>Projenizi anlatın</strong></div>
            <span className="form-step">01 — 05</span>
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
            <div className="form-row">
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
                <span>Yaklaşık bütçe *</span>
                <select name="budget" defaultValue="" required>
                  <option value="" disabled>Seçiniz</option>
                  <option>Henüz net değil</option>
                  <option>₺100K — ₺250K</option>
                  <option>₺250K — ₺500K</option>
                  <option>₺500K — ₺1M</option>
                  <option>₺1M+</option>
                </select>
              </label>
            </div>
            <label>
              <span>Kısaca projeniz *</span>
              <textarea name="message" rows="4" placeholder="Hedefiniz, ihtiyacınız ve varsa hedef takviminiz..." maxLength={700} required />
            </label>
            <button className="button button--dark form-submit" type="submit">
              E-posta taslağını oluştur <Send size={17} />
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

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <a href="#top" className="brand" aria-label="Sayfanın başına dön"><BrandMark /></a>
          <p>Fikirleri kullanıcıların sevdiği, işletmelerin büyütebildiği dijital ürünlere dönüştürüyoruz.</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/tion-studios" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://github.com/tionstudios" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.instagram.com/tionstudios/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
          </div>
        </div>
        <div className="footer-links-column">
          <span>Keşfet</span>
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          <a href="#iletisim">İletişim</a>
        </div>
        <div className="footer-links-column">
          <span>Yasal</span>
          <a href="/privacy-policy.html">Gizlilik Politikası</a>
          <a href="/terms-of-services.html">Kullanım Koşulları</a>
          <a href="/app-ads.txt">App Ads</a>
        </div>
        <div className="footer-contact-column">
          <span>Yeni bir proje</span>
          <a href="mailto:info@tionstudios.com">info@tionstudios.com <ArrowUpRight size={17} /></a>
          <p>İstanbul · Türkiye</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} TION Studios. Tüm hakları saklıdır.</p>
        <p>Strateji · Tasarım · Teknoloji</p>
        <a href="#top">Yukarı dön <span>↑</span></a>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <Hero />
        <TechnologyStrip />
        <Services />
        <Projects />
        <Process />
        <About />
        <TechnologyStrip />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
