import { useEffect } from 'react'

export function useHashNavigation() {
  useEffect(() => {
    let active = true
    let frame
    const scrollToHash = () => {
      if (!active || !window.location.hash) return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        let id = window.location.hash.slice(1)
        try { id = decodeURIComponent(id) } catch { /* Use the literal fragment if decoding fails. */ }
        document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
      })
    }

    // Fragment targets appear after React mounts; wait for font layout as well.
    const layoutReady = document.fonts?.ready ?? Promise.resolve()
    layoutReady.then(scrollToHash)
    window.addEventListener('hashchange', scrollToHash)
    return () => {
      active = false
      cancelAnimationFrame(frame)
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])
}
