import { useRef, useState } from 'react'
import { ArrowUpRight, Flag, Route, ShieldCheck, Timer, RotateCw, CircleGauge } from 'lucide-react'
import { drivingModes } from '../../data/realDriver.js'

const icons = { flag: Flag, drift: RotateCw, clock: Timer, route: Route, shield: ShieldCheck, wheel: CircleGauge }

export function DrivingModes() {
  const [selected, setSelected] = useState(0)
  const tabs = useRef([])
  const mode = drivingModes[selected]
  const Icon = icons[mode.icon]

  function handleKeyDown(event, index) {
    let next
    if (event.key === 'ArrowRight') next = (index + 1) % drivingModes.length
    if (event.key === 'ArrowLeft') next = (index - 1 + drivingModes.length) % drivingModes.length
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = drivingModes.length - 1
    if (next === undefined) return
    event.preventDefault()
    setSelected(next)
    tabs.current[next]?.focus()
  }

  return (
    <section className="rd-experience rd-section" id="experience" aria-labelledby="rd-experience-title">
      <div className="rd-wrap">
        <div className="rd-section-heading"><div><p className="rd-eyebrow">01 / FIND YOUR DRIVE</p><h2 id="rd-experience-title">One city.<br /><em>Your kind of freedom.</em></h2></div><p>Chase the clock or forget it exists.<br />There’s more than one way to own the streets.</p></div>
        <div className="rd-mode-tabs" role="tablist" aria-label="Driving modes">
          {drivingModes.map((item, index) => <button key={item.id} ref={(node) => { tabs.current[index] = node }} type="button" role="tab" id={`tab-${item.id}`} aria-controls="rd-driving-mode-panel" aria-selected={selected === index} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={(event) => handleKeyDown(event, index)}><span>0{index + 1}</span>{item.label}</button>)}
        </div>
        <div className="rd-mode-panel" id="rd-driving-mode-panel" role="tabpanel" aria-labelledby={`tab-${mode.id}`} tabIndex={0}>
          <div className="rd-mode-visual"><img src="/images/real-driver/city.jpg" alt="Red sports car on the streets of Real Driver" width="1600" height="900" loading="lazy" /><span className="rd-image-label">REAL DRIVER / IN-GAME CAPTURE</span><span className="rd-mode-number" aria-hidden="true">0{selected + 1}</span></div>
          <div className="rd-mode-copy"><Icon size={31} strokeWidth={1.3} aria-hidden="true" /><p className="rd-eyebrow">{mode.detail}</p><h3>{mode.heading}</h3><p>{mode.description}</p><a href="#download">Find your drive <ArrowUpRight size={18} /></a></div>
        </div>
      </div>
    </section>
  )
}
