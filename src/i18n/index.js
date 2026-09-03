// i18n runtime: resolves the active locale and looks up strings with a
// deep fallback to Turkish, so a partially translated locale never renders blank.

import { DEFAULT_LOCALE, localeCodes, locales, localeFromPath, pathFor } from './locales'
import tr from './translations/tr'
import en from './translations/en'
import es from './translations/es'
import ar from './translations/ar'
import ru from './translations/ru'
import zh from './translations/zh'

const dictionaries = { tr, en, es, ar, ru, zh }

export const STORAGE_KEY = 'tion-locale'

/** The locale for the page being rendered, taken from its URL. */
export function currentLocale() {
  if (typeof document !== 'undefined') {
    const declared = document.documentElement.getAttribute('data-locale')
    if (declared && localeCodes.includes(declared)) return declared
  }
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  return localeFromPath(window.location.pathname)
}

/**
 * Best matching supported locale for this visitor, from their stored choice
 * first and browser languages second. Returns null when nothing matches.
 */
export function preferredLocale() {
  if (typeof window === 'undefined') return null

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && localeCodes.includes(saved)) return saved
  } catch {
    // Private mode or blocked storage — fall through to the browser languages.
  }

  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const candidate of candidates || []) {
    if (!candidate) continue
    const base = candidate.toLowerCase().split('-')[0]
    if (localeCodes.includes(base)) return base
  }
  return null
}

export function rememberLocale(code) {
  try {
    window.localStorage.setItem(STORAGE_KEY, code)
  } catch {
    // Storing the preference is a convenience; failing to store it is not fatal.
  }
}

function lookup(dictionary, key) {
  return key.split('.').reduce((value, part) => (value == null ? undefined : value[part]), dictionary)
}

function interpolate(value, vars) {
  if (typeof value !== 'string' || !vars) return value
  return value.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match))
}

/**
 * Translator bound to one locale. Falls back to Turkish per key, then returns
 * the key itself so a missing string is visible rather than silently empty.
 */
export function translator(locale = DEFAULT_LOCALE) {
  const active = dictionaries[locale] || dictionaries[DEFAULT_LOCALE]
  const fallback = dictionaries[DEFAULT_LOCALE]

  return function t(key, vars) {
    const value = lookup(active, key) ?? lookup(fallback, key)
    if (value === undefined) return key
    return interpolate(value, vars)
  }
}

export { DEFAULT_LOCALE, localeCodes, locales, pathFor }
