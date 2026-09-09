import { useEffect, useRef, useState } from 'react'

export function Reveal({ children, className = '', delay = 0, as: Element = 'div' }) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Element
      ref={elementRef}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Element>
  )
}
