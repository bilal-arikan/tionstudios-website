import { writeFile } from 'node:fs/promises'
import { Matrix4, PerspectiveCamera, Vector3, Euler } from 'three'
import { createGalaxyParticles } from '../src/components/galaxy/galaxyParticles.js'

const width = 720
const height = 640
const camera = new PerspectiveCamera(44, width / height, 0.1, 30)
camera.position.z = 9
camera.zoom = 1.12
camera.updateProjectionMatrix()
camera.updateMatrixWorld()
const rotation = new Matrix4().makeRotationFromEuler(new Euler(-1.05, 0, -0.3))
const data = createGalaxyParticles(4200)
const stars = []

for (let i = 0; i < data.sizes.length; i++) {
  const point = new Vector3().fromArray(data.positions, i * 3).applyMatrix4(rotation).project(camera)
  const x = ((point.x + 1) * width / 2).toFixed(1)
  const y = ((1 - point.y) * height / 2).toFixed(1)
  const radius = (Math.min(data.sizes[i], 2.5) * 0.48).toFixed(2)
  stars.push(`<circle cx="${x}" cy="${y}" r="${radius}"/>`)
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="640" viewBox="0 0 720 640"><defs><radialGradient id="glow"><stop stop-color="#bcf578" stop-opacity=".1"/><stop offset="1" stop-color="#bcf578" stop-opacity="0"/></radialGradient></defs><ellipse cx="360" cy="320" rx="220" ry="160" fill="url(#glow)"/><g fill="#bcf578" opacity=".65">${stars.join('')}</g></svg>\n`
await writeFile(new URL('../public/images/galaxy.svg', import.meta.url), svg)
