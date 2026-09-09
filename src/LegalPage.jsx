import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowUpRight, Mail } from 'lucide-react'
import { BrandMark } from './components/BrandMark'

const legalConfig = {
  privacy: {
    eyebrow: 'LEGAL / PRIVACY',
    title: 'Privacy Policy',
    description: 'How Tionport collects, uses and protects personal information across its products and services.',
    source: '/legal/privacy-source.html',
  },
  terms: {
    eyebrow: 'LEGAL / TERMS',
    title: 'Terms of Service',
    description: 'The terms that govern the use of Tionport products, software, games and related services.',
    source: '/legal/terms-source.html',
  },
}

function LegalPage({ type }) {
  const config = legalConfig[type] || legalConfig.privacy
  const [content, setContent] = useState('')
  const [loadFailed, setLoadFailed] = useState(false)

  useEffect(() => {
    let active = true

    async function loadLegalContent() {
      try {
        const response = await fetch(config.source)
        if (!response.ok) throw new Error('Legal content could not be loaded.')
        const source = await response.text()
        const documentFragment = new DOMParser().parseFromString(source, 'text/html')
        const legalContent = documentFragment.querySelector('.terms-privacy')
        if (!legalContent) throw new Error('Legal content was not found.')

        legalContent.querySelectorAll('p').forEach((paragraph) => {
          const strong = paragraph.firstElementChild
          const isStandaloneTitle =
            paragraph.children.length === 1 &&
            strong?.tagName === 'STRONG' &&
            paragraph.textContent.trim() === strong.textContent.trim()

          if (!isStandaloneTitle) return
          if (strong.textContent.trim().toLowerCase().startsWith('effective date')) {
            paragraph.remove()
            return
          }

          const heading = documentFragment.createElement('h2')
          heading.textContent = strong.textContent.trim()
          paragraph.replaceWith(heading)
        })

        if (active) setContent(legalContent.innerHTML)
      } catch {
        if (active) setLoadFailed(true)
      }
    }

    loadLegalContent()
    return () => {
      active = false
    }
  }, [config.source])

  return (
    <div className="legal-shell">
      <header className="legal-header">
        <div className="container legal-header-inner">
          <a className="brand" href="/" aria-label="Tionport home">
            <BrandMark />
          </a>
          <a className="legal-back-link" href="/">
            <ArrowLeft size={16} /> Back to website
          </a>
        </div>
      </header>

      <main id="main-content" className="legal-main">
        <div className="legal-hero">
          <div className="legal-grid" aria-hidden="true" />
          <div className="container">
            <span className="eyebrow">{config.eyebrow}</span>
            <h1>{config.title}</h1>
            <p>{config.description}</p>
            <div className="legal-meta">
              <span>Effective date</span>
              <strong>01 / 01 / 2024</strong>
            </div>
          </div>
        </div>

        <div className="container legal-layout">
          <aside className="legal-aside">
            <span>Document</span>
            <strong>{config.title}</strong>
            <p>Questions about this document?</p>
            <a href="mailto:info@tionport.com"><Mail size={15} />info@tionport.com</a>
          </aside>
          <article className="legal-content">
            {!content && !loadFailed && <div className="legal-loading"><span />Loading document…</div>}
            {loadFailed && (
              <div className="legal-error">
                <h2>Document unavailable</h2>
                <p>Please contact us at <a href="mailto:info@tionport.com">info@tionport.com</a> to request a copy.</p>
              </div>
            )}
            {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
          </article>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Tionport</p>
          <a href="mailto:info@tionport.com">Contact <ArrowUpRight size={15} /></a>
        </div>
      </footer>
    </div>
  )
}

export default LegalPage
