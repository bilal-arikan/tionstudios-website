import test from 'node:test'
import assert from 'node:assert/strict'
import { createGalaxyParticles } from '../src/components/galaxy/galaxyParticles.js'

test('galaxy geometry remains finite and inside the visible volume on both quality levels', () => {
  for (const count of [13000, 26000]) {
    const data = createGalaxyParticles(count)
    assert.equal(data.positions.length, count * 3)
    assert.equal(data.colors.length, count * 3)
    for (const value of data.positions) assert.ok(Number.isFinite(value) && Math.abs(value) < 4.5)
    for (const value of data.colors) assert.ok(Number.isFinite(value) && value >= 0 && value <= 1)
    for (const value of data.sizes) assert.ok(Number.isFinite(value) && value > 0 && value <= 7)
    for (const value of data.phases) assert.ok(Number.isFinite(value))
    for (const value of data.shapes) assert.ok([0, 1, 2].includes(value))
  }
})

test('the same seed preserves the galaxy across reloads and poster generation', () => {
  const first = createGalaxyParticles(400)
  assert.deepEqual(first, createGalaxyParticles(400))
  assert.notDeepEqual(first.positions, createGalaxyParticles(400, 42).positions)
  const larger = createGalaxyParticles(800)
  assert.deepEqual(first.positions, larger.positions.slice(0, first.positions.length))
})

test('the model has a dense core, extended arms and a thin three-dimensional disk', () => {
  const { positions } = createGalaxyParticles(26000)
  let core = 0
  let outer = 0
  let verticalSquared = 0
  let radialSquared = 0
  for (let i = 0; i < positions.length; i += 3) {
    const radius = Math.hypot(positions[i], positions[i + 1])
    if (radius < 0.75) core++
    if (radius > 2) outer++
    verticalSquared += positions[i + 2] ** 2
    radialSquared += radius ** 2
  }
  assert.ok(core > 6500)
  assert.ok(outer > 6500)
  assert.ok(verticalSquared > 1 && verticalSquared / radialSquared < 0.03)
})
