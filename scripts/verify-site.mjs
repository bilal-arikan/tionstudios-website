import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'
import { legacyGamesRoutes, localeCodes, locales, pathFor } from '../src/i18n/locales.js'
import { detailPages, gamePageId, productPageId } from '../src/data/detailPages.js'
import { games } from '../src/data/games.js'
import { productProjects } from '../src/data/projects.js'
import { localizedPages } from './site-paths.mjs'

const output = resolve('dist')
const pageNames = { home: 'HomePage', services: 'ServicesPage', realDriver: 'RealDriverPage', about: 'AboutPage', contact: 'ContactPage', ...Object.fromEntries(Object.keys(detailPages).map((page) => [page, 'DetailPage'])) }
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

const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'error' })
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
      const rendered = renderToStaticMarkup(createElement(module[name], { t: translator(locale), locale, detail: detailPages[page] }))
      assert.equal([...rendered.matchAll(/<h1(?:\s|>)/g)].length, 1, `${path}: expected one main heading`)
      validateLinks(rendered, path)
      if (page === 'home') {
        assert.equal([...rendered.matchAll(/class="archive-card"/g)].length, games.length - 1, `${path}: missing homepage games`)
        assert.ok(rendered.includes('class="featured-project"'), `${path}: missing featured game`)
        for (const game of games) assert.ok(rendered.includes(`href="${pathFor(gamePageId(game.slug), locale)}"`), `${path}: missing ${game.title} detail link`)
        for (const product of productProjects) assert.ok(rendered.includes(`href="${pathFor(productPageId(product.id), locale)}"`), `${path}: missing ${product.title} detail link`)
        assert.ok(!rendered.includes(`href="${legacyGamesRoutes[locale]}"`), `${path}: retired Games catalog link`)
      }
      if (detailPages[page]) {
        assert.ok(rendered.includes('lang="en" dir="ltr"'), `${path}: missing declared detail language`)
        assert.ok(html.includes(`<body data-page="${page}">`), `${path}: detail entry mismatch`)
        for (const link of detailPages[page].item.links ?? []) assert.ok(rendered.includes(`href="${link.url}"`), `${path}: missing official product link`)
      }
      if (page === 'realDriver') {
        assert.equal([...rendered.matchAll(/role="tab"/g)].length, 6, `${path}: expected six driving modes`)
        assert.ok(rendered.includes('https://www.youtube.com/watch?v=wSkLt35uevA'), `${path}: missing requested trailer`)
        assert.ok(!rendered.includes('<iframe'), `${path}: trailer must load only after play`)
        assert.ok(rendered.includes('aria-label="Steam, coming soon"'), `${path}: missing Steam placeholder`)
        assert.ok(!/href="[^"]*steampowered/.test(rendered), `${path}: unpublished Steam store must not be linked`)
        assert.ok(rendered.includes('id="download"'), `${path}: missing platform section`)
        assert.ok(rendered.includes('lang="en" dir="ltr"'), `${path}: campaign language must be declared`)
      }
      count++
    }
  }
  const { Footer } = await server.ssrLoadModule('/src/components/Footer.jsx')
  const { Header } = await server.ssrLoadModule('/src/components/Header.jsx')
  for (const locale of localeCodes) {
    const footer = renderToStaticMarkup(createElement(Footer, { t: translator(locale), locale }))
    preservedProfiles.forEach((profile) => assert.ok(footer.includes(profile), `Missing preserved social profile: ${profile}`))
    validateLinks(footer, `${locale} footer`)
    const header = renderToStaticMarkup(createElement(Header, { t: translator(locale), locale, currentPage: 'home' }))
    for (const [label, content] of [['header', header], ['footer', footer]]) {
      assert.ok(content.includes(`href="${pathFor('home', locale)}#projects">Product</a>`), `${locale} ${label}: missing Product navigation`)
      assert.ok(!content.includes(`href="${pathFor('home', locale)}#projeler"`), `${locale} ${label}: obsolete Games navigation`)
    }
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
assert.equal([...sitemap.matchAll(/<loc>/g)].length, localizedPages.length * localeCodes.length + 2, 'Unexpected sitemap URL count')
for (const locale of localeCodes) {
  const oldPath = legacyGamesRoutes[locale]
  const redirect = readFileSync(publicFile(oldPath), 'utf8')
  assert.ok(redirect.includes(`0;url=${pathFor('home', locale)}#projects`), `${oldPath}: missing product section redirect`)
  assert.ok(!sitemap.includes(`<loc>https://tionport.com${oldPath}</loc>`), `${oldPath}: retired catalog in sitemap`)
}
assert.ok(readFileSync(join(output, 'robots.txt'), 'utf8').includes('https://tionport.com/sitemap.xml'))
console.log(`Verified ${count} localized pages, metadata, local links, assets, legal endpoints, sitemap and preserved social profiles.`)
