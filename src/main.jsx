import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/archivo'
import '@fontsource-variable/jetbrains-mono'
import './styles.css'
import App from './App'
import LegalPage from './LegalPage'

const page = document.body.dataset.page || 'home'
const legalPages = ['privacy', 'terms']
const content = legalPages.includes(page) ? <LegalPage type={page} /> : <App page={page} />

// Dismiss the splash once React has committed the first render. This must not
// depend on requestAnimationFrame alone: rAF is throttled to zero in background
// tabs, which would leave the splash covering the page until the fallback.
const SPLASH_MIN_MS = 620
const splashStart = Number(window.__tionSplashStart) || 0

function dismissSplash() {
  if (document.body.classList.contains('tion-ready')) return
  document.body.classList.add('tion-ready')
  const splash = document.getElementById('tion-splash')
  if (splash) window.setTimeout(() => splash.setAttribute('hidden', ''), 560)
}

function scheduleDismiss() {
  // Hold it briefly so it reads as intentional rather than as a flash.
  const shown = performance.now() - splashStart
  window.setTimeout(dismissSplash, Math.max(0, SPLASH_MIN_MS - shown))
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {content}
  </StrictMode>,
)

// React has committed by the time this runs. Prefer the post-paint frame when
// the tab is visible, but always keep a timer racing it so a throttled or
// hidden tab still clears promptly.
requestAnimationFrame(() => requestAnimationFrame(scheduleDismiss))
window.setTimeout(scheduleDismiss, 0)
