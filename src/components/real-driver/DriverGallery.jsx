import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react'
import { galleryImages } from '../../data/realDriver.js'
import { galleryImageSizes } from '../../data/realDriverImages.js'

export function DriverGallery() {
  const [selected, setSelected] = useState(0)
  const dialogRef = useRef(null)
  const current = galleryImages[selected]
  const move = (amount) => setSelected((index) => (index + amount + galleryImages.length) % galleryImages.length)

  return (
    <section className="rd-gallery rd-section" aria-labelledby="rd-gallery-title">
      <div className="rd-wrap">
        <div className="rd-section-heading"><div><p className="rd-eyebrow">04 / FROM THE GAME</p><h2 id="rd-gallery-title">Wish you<br /><em>were here.</em></h2></div><p>A closer look at your next drive.</p></div>
        <div className="rd-gallery-grid">{galleryImages.map((item, index) => <button className="rd-gallery-card" type="button" key={item.src} onClick={() => { setSelected(index); dialogRef.current?.showModal() }} aria-label={`Enlarge image: ${item.title}`}><div><img src={item.src} srcSet={item.srcSet} sizes={galleryImageSizes} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" /><span className="rd-gallery-expand"><Maximize2 size={19} /></span></div><span className="rd-gallery-caption"><span><small>{item.category}</small><strong>{item.title}</strong></span><span>0{index + 1}</span></span></button>)}</div>
      </div>
      <dialog className="rd-lightbox" ref={dialogRef} aria-label="Real Driver image gallery" onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close() }} onKeyDown={(event) => { if (event.key === 'ArrowRight') { event.preventDefault(); move(1) } if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) } }}>
        <button className="rd-lightbox-close" type="button" autoFocus onClick={() => dialogRef.current?.close()} aria-label="Close image gallery"><X size={22} /></button>
        <img src={current.src} alt={current.alt} width={current.width} height={current.height} decoding="async" />
        <div className="rd-lightbox-controls"><button type="button" onClick={() => move(-1)} aria-label="Previous image"><ArrowLeft size={22} /></button><p aria-live="polite">{selected + 1} / {galleryImages.length} — {current.title}</p><button type="button" onClick={() => move(1)} aria-label="Next image"><ArrowRight size={22} /></button></div>
      </dialog>
    </section>
  )
}
