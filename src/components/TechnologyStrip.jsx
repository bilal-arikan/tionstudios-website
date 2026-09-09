import { technologyList } from '../data/content.js'

export function TechnologyStrip() {
  return (
    <div className="technology-strip" aria-label="Technology expertise">
      <div className="container technology-track">
        {technologyList.map((technology) => <span key={technology}>{technology}</span>)}
      </div>
    </div>
  )
}
