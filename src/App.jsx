import { useEffect } from 'react'
import { currentLocale, locales, translator } from './i18n'
import { Header } from './components/Header.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { ServicesPage } from './pages/ServicesPage.jsx'
import { GamesPage } from './pages/GamesPage.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { Footer } from './components/Footer.jsx'

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
