import { technologyList } from '../data/content.js'

export function TechnologyStrip() {
  return (
    <div className="technology-strip" aria-label="Teknoloji yetkinlikleri">
      <div className="technology-track">
        {[0, 1].map((group) => (
          <div className="technology-group" key={group} aria-hidden={group === 1}>
            {technologyList.map((technology) => (
              <span key={`${group}-${technology}`}><i />{technology}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
