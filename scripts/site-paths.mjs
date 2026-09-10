import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { DEFAULT_LOCALE, legalRoutes, localeCodes, pathFor, routes } from '../src/i18n/locales.js'

export const projectRoot = fileURLToPath(new URL('../', import.meta.url))
export const generatedDir = join(projectRoot, '.generated')
export const templateDir = join(projectRoot, 'templates')
export const publicDir = join(projectRoot, 'public')
export const outputDir = join(projectRoot, 'dist')
export const localizedPages = Object.keys(routes[DEFAULT_LOCALE])
export const staticEntries = ['404.html', ...Object.values(legalRoutes)]

/** Map a public URL to its HTML entry without changing the published route. */
export function entryFile(pageId, code) {
  return `${pathFor(pageId, code).slice(1)}index.html`
}

// Only registered routes are build inputs; unrelated HTML cannot become a page.
export const htmlEntries = [
  ...localizedPages.flatMap((pageId) => localeCodes.map((code) => entryFile(pageId, code))),
  ...staticEntries,
].map((file) => join(generatedDir, file))
