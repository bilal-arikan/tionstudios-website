import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'
import { localeCodes, locales, pathFor } from '../src/i18n/locales.js'

const output = resolve('dist')
const pageNames = { home: 'HomePage', services: 'ServicesPage', games: 'GamesPage', about: 'AboutPage', contact: 'ContactPage' }
const preservedProfiles = [
  'https://www.linkedin.com/company/tion-studios',
  'https://github.com/tionstudios',
  'https://www.instagram.com/tionstudios/',
]

function publicFile(href) {
  const path = new URL(href, 'https://tionport.com').pathname
  return join(output, path.endsWith('/') ? `${path}index.html` : path)
}

function validateLinks(html, context) {
  for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[^"\s]*)"/g)) {
    assert.ok(existsSync(publicFile(href)), `${context}: missing local target ${href}`)
  }
}

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
let count = 0
try {
  const { translator } = await server.ssrLoadModule('/src/i18n/index.js')
  for (const [page, name] of Object.entries(pageNames)) {
    const module = await server.ssrLoadModule(`/src/pages/${name}.jsx`)
    for (const locale of localeCodes) {
      const path = pathFor(page, locale)
      const html = readFileSync(publicFile(path), 'utf8')
      assert.ok(html.includes(`lang="${locales[locale].htmlLang}"`), `${path}: wrong language`)
      assert.ok(html.includes(`dir="${locales[locale].dir}"`), `${path}: wrong text direction`)
      assert.ok(html.includes(`rel="canonical" href="https://tionport.com${path}"`), `${path}: wrong canonical URL`)
      assert.ok(html.includes(`data-page="${page}"`), `${path}: wrong page entry`)
      assert.equal([...html.matchAll(/hreflang=/g)].length, 7, `${path}: missing language alternatives`)
      for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(json)
      validateLinks(html, path)
      const rendered = renderToStaticMarkup(createElement(module[name], { t: translator(locale), locale }))
      assert.equal([...rendered.matchAll(/<h1(?:\s|>)/g)].length, 1, `${path}: expected one main heading`)
      validateLinks(rendered, path)
      count++
    }
  }
  const { Footer } = await server.ssrLoadModule('/src/components/Footer.jsx')
  for (const locale of localeCodes) {
    const footer = renderToStaticMarkup(createElement(Footer, { t: translator(locale), locale }))
    preservedProfiles.forEach((profile) => assert.ok(footer.includes(profile), `Missing preserved social profile: ${profile}`))
    validateLinks(footer, `${locale} footer`)
  }
} finally {
  await server.close()
}

function inspect(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name)
    if (entry.isDirectory()) { inspect(file); continue }
    if (!/\.(html|js|json|xml|txt|webmanifest)$/.test(entry.name)) continue
    let source = readFileSync(file, 'utf8')
    for (const profile of preservedProfiles) source = source.replaceAll(profile, '')
    assert.ok(!/tion[\s_-]*studios/i.test(source), `${file}: obsolete brand reference`)
  }
}
inspect(output)
for (const file of ['404.html', 'privacy-policy.html', 'terms-of-services.html', 'app-ads.txt', 'legal/privacy-source.html', 'legal/terms-source.html']) {
  assert.ok(existsSync(join(output, file)), `Missing preserved endpoint: ${file}`)
}
const sitemap = readFileSync(join(output, 'sitemap.xml'), 'utf8')
assert.equal([...sitemap.matchAll(/<loc>/g)].length, 32, 'Unexpected sitemap URL count')
assert.ok(readFileSync(join(output, 'robots.txt'), 'utf8').includes('https://tionport.com/sitemap.xml'))
console.log(`Verified ${count} localized pages, metadata, local links, assets, legal endpoints, sitemap and preserved social profiles.`)
