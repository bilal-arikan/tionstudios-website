import { useEffect, useRef, useState } from 'react'

export function useGalaxy() {
  const hostRef = useRef(null)
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const [status, setStatus] = useState({ ready: false, playing: false })

  useEffect(() => {
    let cancelled = false

    import('./createGalaxyScene.js').then(({ createGalaxyScene }) => {
      if (cancelled) return
      sceneRef.current = createGalaxyScene(hostRef.current, canvasRef.current, setStatus)
    }).catch(() => {
      if (!cancelled) setStatus({ ready: false, playing: false })
    })

    return () => {
      cancelled = true
      sceneRef.current?.dispose()
      sceneRef.current = null
    }
  }, [])

  return { hostRef, canvasRef, status }
}
