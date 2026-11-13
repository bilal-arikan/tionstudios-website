import { productProjects } from '../data/projects.js'
import { ProductProjectCard } from './ProductProjectCard.jsx'
import { Reveal } from './Reveal.jsx'
import { SectionHeading } from './SectionHeading.jsx'

export function ProductProjects({ locale }) {
  return (
    <section className="section product-projects-section" id="projects" lang="en" dir="ltr">
      <div className="container">
        <Reveal className="product-projects-heading">
          <SectionHeading
            eyebrow="Product"
            title={<>Our <span className="text-accent">products.</span></>}
          />
        </Reveal>
        <div className="product-projects-grid">
          {productProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <ProductProjectCard project={project} locale={locale} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
