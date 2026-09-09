import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BrandMark } from './BrandMark'
import { LanguageSwitcher } from './LanguageSwitcher'
import { pathFor } from '../i18n'
import { buildNavigation } from '../data/content.js'

export function Header({ currentPage = 'home', t, locale }) {
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
            <a href="mailto:info@tionport.com">info@tionport.com</a>
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
