import { useEffect, useRef, useState } from 'react'
import { Check, Globe2 } from 'lucide-react'
import { localeCodes, locales, pathFor, rememberLocale } from '../i18n'

/**
 * Language menu. Switching navigates to the same page in the target locale
 * (not to that locale's home page), and stores the choice so the root redirect
 * respects it on later visits.
 */
export function LanguageSwitcher({ locale, page = 'home', t }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const active = locales[locale]

  return (
    <div className="language-switcher" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className="language-toggle"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t('nav.selectLanguage')}
        onClick={() => setOpen((current) => !current)}
      >
        <Globe2 size={16} />
        <span>{active.code.toUpperCase()}</span>
      </button>

      {open && (
        <ul className="language-menu" role="listbox" aria-label={t('nav.language')}>
          {localeCodes.map((code) => {
            const isActive = code === locale
            return (
              <li key={code}>
                <a
                  href={pathFor(page, code)}
                  lang={locales[code].htmlLang}
                  hrefLang={locales[code].htmlLang}
                  role="option"
                  aria-selected={isActive}
                  className={isActive ? 'is-active' : undefined}
                  onClick={() => rememberLocale(code)}
                >
                  <span>{locales[code].label}</span>
                  {isActive && <Check size={15} />}
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
