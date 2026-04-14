import { coverage, images } from '../content/siteContent'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CoverageSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id={coverage.sectionId}
      className="section-divider"
      style={{
        position: 'relative',
        minHeight: 290,
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background: plain-water.webp with gradient overlays */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 50% 16%, rgba(118,167,255,.16), transparent 12%),
          linear-gradient(180deg, rgba(4,7,11,.24), rgba(6,9,14,.88)),
          url(${images.coverageBackground}) center center / cover no-repeat
        `,
      }} />

      {/* Subtle glow arcs */}
      <div style={{
        position: 'absolute',
        left: '-5%',
        right: '-5%',
        bottom: '34%',
        height: 120,
        borderRadius: '50%',
        background: `
          linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,0)),
          radial-gradient(circle at 50% 50%, rgba(205,235,255,.14), transparent 24%)
        `,
        filter: 'blur(10px)',
        pointerEvents: 'none',
      }} />

      <div
        ref={ref}
        className="reveal"
        style={{
          padding: '58px 24px 62px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <h2 style={{
          margin: '0 auto',
          maxWidth: 900,
          fontSize: 'clamp(2rem, 3.2vw, 3.35rem)',
          lineHeight: 1,
          letterSpacing: '-.03em',
          textTransform: 'uppercase',
          color: '#fff',
          fontFamily: 'var(--font-display)',
          textWrap: 'balance',
        }}>
          {coverage.heading.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h2>

        <div style={{
          marginTop: 18,
          color: 'rgba(240,244,250,.85)',
          letterSpacing: '.06em',
          fontSize: '.95rem',
          textTransform: 'uppercase',
        }}>
          {coverage.regions.join(' \u2022 ')}
        </div>
      </div>
    </section>
  )
}
