import test from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve, sep } from 'node:path'
import { projectRoot } from '../scripts/site-paths.mjs'

function snapshot(directory) {
  return Object.fromEntries(readdirSync(directory, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => {
      const file = join(entry.parentPath, entry.name)
      return [file.slice(directory.length + 1), readFileSync(file, 'utf8')]
    }))
}

test('a source-only checkout regenerates pages without changing templates or retaining stale routes', () => {
  const workspace = mkdtempSync(join(tmpdir(), 'tionport-pages-'))
  assert.ok(resolve(workspace).startsWith(resolve(tmpdir()) + sep))
  try {
    for (const directory of ['templates', 'src/i18n', 'src/data', 'scripts']) {
      cpSync(join(projectRoot, directory), join(workspace, directory), { recursive: true })
    }
    cpSync(join(projectRoot, 'package.json'), join(workspace, 'package.json'))
    const templates = join(workspace, 'templates')
    const before = snapshot(templates)
    const generate = () => {
      const result = spawnSync(process.execPath, ['scripts/generate-pages.mjs'], { cwd: workspace, encoding: 'utf8' })
      assert.equal(result.status, 0, result.stderr || result.stdout)
    }
    generate()

    const output = join(workspace, '.generated')
    const first = snapshot(output)
    assert.equal(Object.keys(first).filter((file) => file.endsWith('.html')).length, 123)
    for (const file of ['index.html', 'en/services/index.html', 'ar/alaab/index.html', 'zh/lianxi/index.html',
      'oyunlar/real-driver/index.html', 'en/games/real-driver/index.html', 'ar/alaab/real-driver/index.html',
      'products/tionads/index.html', 'en/products/tevapp/index.html', 'ar/products/farkindayim/index.html',
      'products/bedendenbeyne/index.html', 'en/products/afyoncimnastik/index.html',
      'oyunlar/sea-treasure/index.html', 'en/games/war-train/index.html', 'ar/alaab/platforms/index.html',
      '404.html', 'privacy-policy.html', 'terms-of-services.html', 'sitemap.xml']) {
      assert.ok(existsSync(join(output, file)), `Missing generated endpoint: ${file}`)
    }
    assert.ok(readFileSync(join(output, 'en/games/index.html'), 'utf8').includes('0;url=/en/#projects'))
    assert.ok(!readFileSync(join(output, 'sitemap.xml'), 'utf8').includes('<loc>https://tionport.com/en/games/</loc>'))
    for (const page of ['product-tionads', 'game-war-train']) {
      const file = page === 'product-tionads' ? 'en/products/tionads/index.html' : 'en/games/war-train/index.html'
      assert.ok(readFileSync(join(output, file), 'utf8').includes(`<body data-page="${page}">`), 'Generated details must mount the correct page')
    }
    mkdirSync(join(output, 'retired-route'))
    writeFileSync(join(output, 'retired-route/index.html'), 'Obsolete page')
    generate()

    assert.deepEqual(snapshot(output), first, 'Regeneration must be deterministic and remove obsolete pages')
    assert.deepEqual(snapshot(templates), before, 'Generation must not rewrite source templates')
    assert.ok(!existsSync(join(workspace, 'index.html')), 'Generated entries must stay out of the repository root')
    assert.ok(!existsSync(join(workspace, 'public/sitemap.xml')), 'The sitemap must remain a generated artifact')
  } finally {
    rmSync(workspace, { recursive: true, force: true })
  }
})
