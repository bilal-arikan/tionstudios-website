// Locale registry — the single source of truth for which languages exist,
// how their URLs are shaped, and how each page path is spelled per language.

import { detailPages } from '../data/detailPages.js'

export const DEFAULT_LOCALE = 'tr'

export const locales = {
  tr: { code: 'tr', label: 'Türkçe',   english: 'Turkish', htmlLang: 'tr', dir: 'ltr', ogLocale: 'tr_TR' },
  en: { code: 'en', label: 'English',  english: 'English', htmlLang: 'en', dir: 'ltr', ogLocale: 'en_US' },
  es: { code: 'es', label: 'Español',  english: 'Spanish', htmlLang: 'es', dir: 'ltr', ogLocale: 'es_ES' },
  ar: { code: 'ar', label: 'العربية',  english: 'Arabic',  htmlLang: 'ar', dir: 'rtl', ogLocale: 'ar_AR' },
  ru: { code: 'ru', label: 'Русский',  english: 'Russian', htmlLang: 'ru', dir: 'ltr', ogLocale: 'ru_RU' },
  // wordSpacing:false — Chinese does not separate words with spaces.
  zh: { code: 'zh', label: '中文',      english: 'Chinese', htmlLang: 'zh-Hans', dir: 'ltr', ogLocale: 'zh_CN', wordSpacing: false },
}

export const localeCodes = Object.keys(locales)

// Page identifiers used across the app. 'home' is the site root.
export const pageIds = ['home', 'services', 'realDriver', 'about', 'contact', ...Object.keys(detailPages), 'privacy', 'terms']

// URL segment for each page, per locale. The default locale keeps the original
// Turkish paths so existing links and search rankings are never broken.
export const routes = {
  tr: { home: '', services: 'hizmetler',  games: 'oyunlar', about: 'hakkimizda', contact: 'iletisim' },
  en: { home: '', services: 'services',   games: 'games',   about: 'about',      contact: 'contact' },
  es: { home: '', services: 'servicios',  games: 'juegos',  about: 'nosotros',   contact: 'contacto' },
  ar: { home: '', services: 'khadamat',   games: 'alaab',   about: 'man-nahnu',  contact: 'ittasil-bina' },
  ru: { home: '', services: 'uslugi',     games: 'igry',    about: 'o-nas',      contact: 'kontakty' },
  zh: { home: '', services: 'fuwu',       games: 'youxi',   about: 'guanyu',     contact: 'lianxi' },
}

export const legacyGamesRoutes = {}
for (const locale of localeCodes) {
  const gameSegment = routes[locale].games
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`
  legacyGamesRoutes[locale] = `${prefix}/${gameSegment}/`
  routes[locale].realDriver = `${gameSegment}/real-driver`
  delete routes[locale].games
  for (const [pageId, detail] of Object.entries(detailPages)) {
    routes[locale][pageId] = detail.kind === 'game'
      ? `${gameSegment}/${detail.item.slug}`
      : `products/${detail.item.id}`
  }
}

// Legal pages keep a single spelling across locales: they are flat .html files
// at the site root in the existing build, and their names are already English.
export const legalRoutes = {
  privacy: 'privacy-policy.html',
  terms: 'terms-of-services.html',
}

/**
 * Build the URL for a page in a given locale.
 * The default locale lives at the root; every other locale is under /<code>/.
 */
export function pathFor(pageId, locale = DEFAULT_LOCALE) {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`

  if (pageId in legalRoutes) {
    return `/${legalRoutes[pageId]}`
  }

  const segment = routes[locale]?.[pageId] ?? routes[DEFAULT_LOCALE][pageId]
  return segment ? `${prefix}/${segment}/` : `${prefix}/` || '/'
}

/** Every locale's URL for one page — used to emit hreflang alternates. */
export function alternatesFor(pageId) {
  return localeCodes.map((code) => ({
    locale: code,
    htmlLang: locales[code].htmlLang,
    path: pathFor(pageId, code),
  }))
}

/** Read the locale out of a pathname, falling back to the default. */
export function localeFromPath(pathname = '/') {
  const first = pathname.split('/').filter(Boolean)[0]
  return localeCodes.includes(first) && first !== DEFAULT_LOCALE ? first : DEFAULT_LOCALE
}
