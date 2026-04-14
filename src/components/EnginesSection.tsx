import { useEffect, useRef, useState } from 'react'
import { enginesSection, images } from '../content/siteContent'

export default function EnginesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [bgY, setBgY] = useState(0)

  useEffect(() => {
    const fn = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const progress =
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        setBgY(progress * 20 - 10)
      }
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <section
      id={enginesSection.sectionId}
      ref={ref}
      className="section-divider"
      style={{
        position: 'relative',
        minHeight: 420,
        overflow: 'hidden',
      }}
    >
      {/* Triple Mercury 600 engines — prominent and bright */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.34)),
          url(${images.engines}) center center / cover no-repeat
        `,
        transform: `translateY(${bgY}px)`,
      }} />
    </section>
  )
}
