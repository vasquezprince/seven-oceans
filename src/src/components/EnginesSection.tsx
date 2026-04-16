import { useEffect, useRef, useState } from 'react'
import { enginesSection, images } from '../content/siteContent'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function EnginesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const revealRef = useScrollReveal<HTMLDivElement>()
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
        minHeight: 470,
        overflow: 'hidden',
      }}
    >
      {/* Triple Mercury 600 engines — prominent and bright */}
      <div className="engines-bg" style={{
        position: 'absolute',
        inset: 0,
        background: `
          linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.34)),
          url(${images.engines}) center center / cover no-repeat
        `,
        transform: `translateY(${bgY}px)`,
      }} />

      {/* Grid: text side LEFT, image side RIGHT */}
      <div className="split-grid" style={{
        maxWidth: 'var(--page-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '42% 58%',
        alignItems: 'stretch',
        minHeight: 470,
        position: 'relative',
      }}>
        {/* Left column — glass text panel */}
        <div className="split-text-col split-text-col--left" style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '44px 34px 44px 42px',
          background: 'rgba(8, 12, 19, 0.34)',
          backdropFilter: 'blur(18px) saturate(120%)',
          WebkitBackdropFilter: 'blur(18px) saturate(120%)',
          borderRight: '1px solid rgba(255,255,255,.08)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.025), inset -24px 0 42px rgba(0,0,0,.12)',
        }}>
          <div ref={revealRef} className="reveal" style={{ maxWidth: 520 }}>
            <h2 style={{
              margin: 0,
              fontSize: 'clamp(2rem, 3.2vw, 3.35rem)',
              lineHeight: 1,
              letterSpacing: '-.03em',
              textTransform: 'uppercase',
              color: '#fff',
              fontFamily: 'var(--font-display)',
              textWrap: 'balance',
            }}>
              {enginesSection.heading.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>

            <p style={{
              marginTop: 18,
              color: 'rgba(230,236,245,.82)',
              fontSize: '1.03rem',
              lineHeight: 1.7,
            }}>
              {enginesSection.description}
            </p>
          </div>
        </div>

        {/* Right column — engines image shows through (transparent) */}
        <div className="split-image-col" style={{ position: 'relative', minHeight: 470 }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(270deg, rgba(4,7,12,.06), rgba(4,7,12,0) 38%)',
            pointerEvents: 'none',
          }} />
        </div>
      </div>
    </section>
  )
}
