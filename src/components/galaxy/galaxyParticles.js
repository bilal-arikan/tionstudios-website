const TAU = Math.PI * 2

export function createGalaxyParticles(count, seed = 1977) {
  let state = seed >>> 0
  const random = () => {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0
    return state / 4294967296
  }
  const scatter = () => (random() + random() + random() - 1.5)
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  const phases = new Float32Array(count)
  const shapes = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    const core = random() < 0.23
    const halo = !core && random() < 0.18
    const radius = core ? Math.pow(random(), 1.6) * 0.9 : Math.pow(random(), 0.7) * 3.25
    const arm = i % 4
    const angle = arm / 4 * TAU + radius * 1.45 + scatter() * (halo ? 2.5 : 0.2)
    const spread = core ? 0.15 : 0.07 + radius * (halo ? 0.2 : 0.075)
    positions[i * 3] = Math.cos(angle) * radius + scatter() * spread
    positions[i * 3 + 1] = Math.sin(angle) * radius + scatter() * spread
    positions[i * 3 + 2] = scatter() * (core ? 0.35 : halo ? 0.9 : 0.12 + radius * 0.045)

    const warm = random() < 0.12
    const outer = Math.min(radius / 3.3, 1)
    const brightness = 0.52 + random() * 0.48
    colors[i * 3] = (warm ? 0.98 : 0.89 - outer * 0.36) * brightness
    colors[i * 3 + 1] = (warm ? 0.88 : 1 - outer * 0.18) * brightness
    colors[i * 3 + 2] = (warm ? 0.65 : 0.72 - outer * 0.42) * brightness
    const geometric = !core && random() < 0.045
    sizes[i] = geometric ? 4 + random() * 3 : 1.1 + Math.pow(random(), 3) * 2.2
    shapes[i] = geometric ? (random() < 0.72 ? 1 : 2) : 0
    phases[i] = random() * TAU
  }

  return { positions, colors, sizes, phases, shapes }
}
