import { games } from './games.js'
import { gameDetails } from './gameDetails.js'
import { productProjects } from './projects.js'

export const productPageId = (id) => `product-${id}`
export const gamePageId = (slug) => slug === 'real-driver' ? 'realDriver' : `game-${slug}`

export const detailPages = Object.fromEntries([
  ...productProjects.map((product) => [productPageId(product.id), {
    kind: 'product',
    item: product,
    tagline: product.tagline,
    description: product.description ?? `Explore ${product.title} and its official website${product.links.length > 1 ? ' and web app' : ''}.`,
  }]),
  ...games.filter((game) => !game.featured).map((game) => [gamePageId(game.slug), {
    kind: 'game',
    item: game,
    ...gameDetails[game.slug],
  }]),
])
