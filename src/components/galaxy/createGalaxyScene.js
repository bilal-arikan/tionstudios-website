import { AdditiveBlending, BufferAttribute, BufferGeometry, Group, PerspectiveCamera, Points, Scene, ShaderMaterial, Vector2, WebGLRenderer } from 'three'
import { createGalaxyParticles } from './galaxyParticles.js'
import { galaxyFragmentShader, galaxyVertexShader } from './galaxyShaders.js'

export function createGalaxyScene(host, canvas, onStatus) {
  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' })
  const compact = window.matchMedia('(max-width: 640px), (pointer: coarse)').matches
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  const scene = new Scene()
  const camera = new PerspectiveCamera(44, 1, 0.1, 30)
  camera.position.z = 9
  const galaxy = new Group()
  galaxy.rotation.set(-1.05, 0, -0.3)
  scene.add(galaxy)
  const data = createGalaxyParticles(compact ? 13000 : 26000)
  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new BufferAttribute(data.positions, 3))
  geometry.setAttribute('color', new BufferAttribute(data.colors, 3))
  geometry.setAttribute('aSize', new BufferAttribute(data.sizes, 1))
  geometry.setAttribute('aPhase', new BufferAttribute(data.phases, 1))
  geometry.setAttribute('aShape', new BufferAttribute(data.shapes, 1))
  const uniforms = {
    uTime: { value: 0 },
    uPixelRatio: { value: 1 },
    uScale: { value: 1 },
    uPointer: { value: new Vector2(3, 3) },
    uViewport: { value: new Vector2(1, 1) },
    uPointerRadius: { value: 120 },
    uInfluence: { value: 0 },
  }
  const material = new ShaderMaterial({
    vertexShader: galaxyVertexShader, fragmentShader: galaxyFragmentShader,
    uniforms, vertexColors: true, transparent: true, depthWrite: false,
    blending: AdditiveBlending,
  })
  galaxy.add(new Points(geometry, material))
  const pointer = new Vector2(0, 0)
  let hovering = false
  let playing = !motionPreference.matches
  let visible = true
  let lost = false
  let disposed = false
  let lastFrame = 0
  let elapsed = 0
  let width = 0
  let height = 0

  function reportStatus() {
    onStatus({ ready: !lost, playing })
  }

  function draw(delta = 0) {
    if (disposed || lost) return
    const damping = 1 - Math.exp(-delta * 4)
    if (hovering) uniforms.uPointer.value.lerp(pointer, 1 - Math.exp(-delta * 18))
    uniforms.uInfluence.value += ((hovering ? 1 : 0) - uniforms.uInfluence.value) * damping
    uniforms.uTime.value = elapsed
    renderer.render(scene, camera)
  }

  function frame(now) {
    if (!lastFrame) lastFrame = now
    const delta = Math.min((now - lastFrame) / 1000, 0.05)
    lastFrame = now
    elapsed += delta
    draw(delta)
  }

  function syncPlayback() {
    lastFrame = 0
    renderer.setAnimationLoop(playing && visible && !document.hidden && !lost && !disposed ? frame : null)
  }

  function resize() {
    if (disposed || lost) return
    const bounds = host.getBoundingClientRect()
    if (!bounds.width || !bounds.height) return
    width = bounds.width
    height = bounds.height
    const ratio = Math.min(window.devicePixelRatio || 1, compact ? 1.5 : 2)
    renderer.setPixelRatio(ratio)
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.position.z = camera.aspect < 1 ? 9 / camera.aspect : 9
    camera.zoom = camera.aspect > 1.4 ? 1.4 : 1.12
    camera.updateProjectionMatrix()
    uniforms.uPixelRatio.value = ratio
    uniforms.uViewport.value.set(width, height)
    uniforms.uPointerRadius.value = Math.min(160, Math.max(90, width * 0.11))
    const visualScale = width / host.clientWidth
    uniforms.uScale.value = Math.min(host.clientWidth / 560, 1.3) * visualScale
    draw()
  }

  function move(event) {
    if (!playing) return
    const bounds = host.getBoundingClientRect()
    pointer.set((event.clientX - bounds.left) / width * 2 - 1, 1 - (event.clientY - bounds.top) / height * 2)
    if (!hovering) uniforms.uPointer.value.copy(pointer)
    hovering = true
  }

  function resetPointer() {
    pointer.set(0, 0)
    hovering = false
  }

  function releasePointer(event) {
    if (event.pointerType !== 'mouse') resetPointer()
  }

  function keydown(event) {
    const directions = { ArrowLeft: [-0.25, 0], ArrowRight: [0.25, 0], ArrowUp: [0, 0.25], ArrowDown: [0, -0.25] }
    const direction = directions[event.key]
    if (!direction || !playing) return
    event.preventDefault()
    pointer.set(Math.max(-1, Math.min(1, pointer.x + direction[0])), Math.max(-1, Math.min(1, pointer.y + direction[1])))
    if (!hovering) uniforms.uPointer.value.copy(pointer)
    hovering = true
  }

  function setPlaying(value) {
    playing = value
    if (!playing) resetPointer()
    syncPlayback()
    reportStatus()
  }

  function preferenceChanged() {
    setPlaying(!motionPreference.matches)
  }

  function contextLost(event) {
    event.preventDefault()
    lost = true
    syncPlayback()
    reportStatus()
  }

  function contextRestored() {
    lost = false
    resize()
    syncPlayback()
    reportStatus()
  }

  const resizeObserver = new ResizeObserver(resize)
  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    syncPlayback()
  })
  resizeObserver.observe(host)
  intersectionObserver.observe(host)
  host.addEventListener('pointermove', move)
  host.addEventListener('pointerleave', resetPointer)
  host.addEventListener('pointerup', releasePointer)
  host.addEventListener('pointercancel', resetPointer)
  canvas.addEventListener('keydown', keydown)
  canvas.addEventListener('blur', resetPointer)
  canvas.addEventListener('webglcontextlost', contextLost)
  canvas.addEventListener('webglcontextrestored', contextRestored)
  document.addEventListener('visibilitychange', syncPlayback)
  motionPreference.addEventListener('change', preferenceChanged)

  function dispose() {
    disposed = true
    renderer.setAnimationLoop(null)
    resizeObserver.disconnect()
    intersectionObserver.disconnect()
    host.removeEventListener('pointermove', move)
    host.removeEventListener('pointerleave', resetPointer)
    host.removeEventListener('pointerup', releasePointer)
    host.removeEventListener('pointercancel', resetPointer)
    canvas.removeEventListener('keydown', keydown)
    canvas.removeEventListener('blur', resetPointer)
    canvas.removeEventListener('webglcontextlost', contextLost)
    canvas.removeEventListener('webglcontextrestored', contextRestored)
    document.removeEventListener('visibilitychange', syncPlayback)
    motionPreference.removeEventListener('change', preferenceChanged)
    geometry.dispose()
    material.dispose()
    renderer.dispose()
  }

  try {
    resize()
    syncPlayback()
    reportStatus()
  } catch (error) {
    dispose()
    throw error
  }

  return { setPlaying, dispose }
}
