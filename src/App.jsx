import { useEffect } from 'react'
import { currentLocale, locales, translator } from './i18n'
import { Header } from './components/Header.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { ServicesPage } from './pages/ServicesPage.jsx'
import { DetailPage } from './pages/DetailPage.jsx'
import { detailPages } from './data/detailPages.js'
import { RealDriverPage } from './pages/RealDriverPage.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { Footer } from './components/Footer.jsx'
import { useHashNavigation } from './hooks/useHashNavigation.js'

const pageComponents = {
  home: HomePage,
  services: ServicesPage,
  realDriver: RealDriverPage,
  about: AboutPage,
  contact: ContactPage,
  notFound: NotFoundPage,
}

function App({ page = 'home' }) {
  const Page = pageComponents[page] || (detailPages[page] ? DetailPage : NotFoundPage)
  const locale = currentLocale()
  const t = translator(locale)
  useHashNavigation()

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
        <Page t={t} locale={locale} detail={detailPages[page]} />
      </main>
      <Footer t={t} locale={locale} />
    </div>
  )
}

export default App
