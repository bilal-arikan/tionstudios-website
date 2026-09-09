// Generates the per-locale HTML entry files from the Turkish originals.
//
// The Turkish pages at the repo root are the source of truth for page structure
// (shared head metadata and the module script tag). This script re-emits them
// for every non-default locale under /<code>/, rewriting only what is locale
// specific: <html lang/dir>, title, description, canonical, og tags, the
// data-page/data-locale attributes and the hreflang alternates.
//
// Run it after editing a Turkish page or adding a locale:
//   npm run gen:pages

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')

const SITE = 'https://tionport.com'

const { DEFAULT_LOCALE, localeCodes, locales, pathFor } =
  await import(pathToFileURL(join(root, 'src/i18n/locales.js')).href)

async function dictionaryFor(code) {
  const mod = await import(pathToFileURL(join(root, `src/i18n/translations/${code}.js`)).href)
  return mod.default
}

// page id -> the Turkish source file that defines its structure
const SOURCES = {
  home: 'index.html',
  services: 'hizmetler/index.html',
  games: 'oyunlar/index.html',
  about: 'hakkimizda/index.html',
  contact: 'iletisim/index.html',
}

const escapeHtml = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** hreflang block: every locale for this page, plus x-default pointing at Turkish. */
function alternatesBlock(pageId) {
  const rows = localeCodes.map((code) => {
    const href = `${SITE}${pathFor(pageId, code)}`
    return `    <link rel="alternate" hreflang="${locales[code].htmlLang}" href="${href}" />`
  })
  rows.push(`    <link rel="alternate" hreflang="x-default" href="${SITE}${pathFor(pageId, DEFAULT_LOCALE)}" />`)
  return rows.join('\n')
}


const REDIRECT_MARKER = 'Send first-time visitors'

/** Remove the default-locale-only language redirect script, if present. */
function stripRedirect(html) {
  const at = html.indexOf(REDIRECT_MARKER)
  if (at === -1) return html

  const open = html.lastIndexOf('<script>', at)
  const close = html.indexOf('</script>', at)
  if (open === -1 || close === -1) return html

  return html.slice(0, open) + html.slice(close + '</script>'.length)
}

function applyLocale(html, { pageId, code, dict }) {
  const locale = locales[code]
  const meta = dict.meta?.[pageId] ?? {}
  const title = meta.title ?? ''
  const description = meta.description ?? ''
  const url = `${SITE}${pathFor(pageId, code)}`

  let out = html
  out = out.replace(/(<a class="skip-link" href="#main-content">)[^<]*(<\/a>)/,
    `$1${escapeHtml(dict.nav.skipToContent)}$2`)

  // Root element: language + direction, and the locale the app should render.
  out = out.replace(/<html lang="[^"]*"[^>]*>/,
    `<html lang="${locale.htmlLang}" dir="${locale.dir}" data-locale="${code}" data-page="${pageId}">`)

  // The language redirect belongs only on the default-locale pages. Leaving it
  // on a translated page would bounce visitors between locales.
  if (code !== DEFAULT_LOCALE) {
    out = stripRedirect(out)
  }

  // Assets are absolute already; only the head text changes.
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
  out = out.replace(/<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escapeHtml(description)}" />`)
  out = out.replace(/<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${url}" />`)
  out = out.replace(/<meta property="og:locale" content="[^"]*" \/>/,
    `<meta property="og:locale" content="${locale.ogLocale}" />`)
  out = out.replace(/<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`)
  out = out.replace(/<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`)
  out = out.replace(/<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${url}" />`)

  // Replace any existing alternates, then insert the fresh block.
  out = out.replace(/^\s*<link rel="alternate"[^>]*\/>\s*$/gm, '')
  out = out.replace(/(\s*)<link rel="canonical"/, `$1${alternatesBlock(pageId).trim()}\n    <link rel="canonical"`)

  // Keep the JSON-LD in sync with the page language where one is present.
  out = out.replace(/"inLanguage":\s*"[^"]*"/g, `"inLanguage": "${locale.htmlLang}"`)

  return out.replace(/\n{3,}/g, '\n\n')
}

let written = 0

/** Turn '/en/services/' into 'en/services/index.html' on disk. */
function targetFile(pageId, code) {
  const path = pathFor(pageId, code)          // '/en/services/' or '/'
  const trimmed = path.replace(/^\/|\/$/g, '') // 'en/services' or ''
  return trimmed ? join(root, trimmed, 'index.html') : join(root, 'index.html')
}

const templates = Object.fromEntries(
  Object.entries(SOURCES).map(([pageId, source]) => [pageId, readFileSync(join(root, source), 'utf8')]),
)

for (const [pageId] of Object.entries(SOURCES)) {
  const original = templates[pageId]

  for (const code of localeCodes) {
    const dict = await dictionaryFor(code)
    const html = applyLocale(original, { pageId, code, dict })
    const target = targetFile(pageId, code)

    mkdirSync(dirname(target), { recursive: true })
    writeFileSync(target, html, 'utf8')
    written += 1
  }
}

console.log(`generate-pages: wrote ${written} files across ${localeCodes.length} locales`)


// --- sitemap -------------------------------------------------------------
// Every locale URL, each carrying the full alternate set. Search engines use
// these to serve the right language and to avoid treating them as duplicates.

const PRIORITY = { home: '1.0', services: '0.9', games: '0.9', contact: '0.8', about: '0.7' }

const sitemapUrls = []
for (const pageId of Object.keys(SOURCES)) {
  for (const code of localeCodes) {
    const alternates = localeCodes
      .map((alt) => `    <xhtml:link rel="alternate" hreflang="${locales[alt].htmlLang}" href="${SITE}${pathFor(pageId, alt)}" />`)
      .join('\n')

    sitemapUrls.push(
      [
        '  <url>',
        `    <loc>${SITE}${pathFor(pageId, code)}</loc>`,
        alternates,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${pathFor(pageId, DEFAULT_LOCALE)}" />`,
        '    <changefreq>monthly</changefreq>',
        `    <priority>${PRIORITY[pageId] ?? '0.7'}</priority>`,
        '  </url>',
      ].join('\n'),
    )
  }
}

for (const [pageId, freq, priority] of [['privacy', 'yearly', '0.3'], ['terms', 'yearly', '0.3']]) {
  sitemapUrls.push(
    [
      '  <url>',
      `    <loc>${SITE}${pathFor(pageId, DEFAULT_LOCALE)}</loc>`,
      `    <changefreq>${freq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n'),
  )
}

writeFileSync(
  join(root, 'public/sitemap.xml'),
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...sitemapUrls,
    '</urlset>',
    '',
  ].join('\n'),
  'utf8',
)

console.log(`generate-pages: sitemap has ${sitemapUrls.length} URLs`)

if (!existsSync(join(root, 'index.html'))) {
  throw new Error('generate-pages: root index.html missing after generation')
}
