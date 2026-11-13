import { ArrowUpRight } from 'lucide-react'
import { pathFor } from '../i18n'
import { productPageId } from '../data/detailPages.js'

export function ProductProjectCard({ project, locale }) {
  return (
    <article className={`product-project-card product-project-card--${project.accent}`}>
      <div className="product-project-art" aria-hidden="true">
        <span>{project.monogram}</span>
      </div>
      <div className="product-project-content">
        <h3><a href={pathFor(productPageId(project.id), locale)}>{project.title}</a></h3>
        <a className="text-link" href={pathFor(productPageId(project.id), locale)}>Explore product <ArrowUpRight size={16} /></a>
        <ul className="product-project-links">
          {project.links.map((link) => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <span>
                  <span className="product-project-link-label">{link.label}</span>
                  <span className="product-project-domain">{new URL(link.url).hostname}</span>
                </span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
