import { whyItMattersSection } from '../content/siteContent'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function WhyItMattersSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id={whyItMattersSection.sectionId}
      className="section-divider"
      style={{
        position: 'relative',
        minHeight: 540,
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        className="why-it-matters-bg"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/why-this-matters.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark tint for text legibility */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(3,6,11,.45) 0%, rgba(3,6,11,.6) 100%)',
      }} />

      {/* Grid: text-side LEFT, image-side RIGHT (empty/gradient) */}
      <div className="split-grid" style={{
        maxWidth: 'var(--page-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '42% 58%',
        alignItems: 'stretch',
        minHeight: 540,
        position: 'relative',
      }}>
        {/* Left column — glass text panel */}
        <div className="split-text-col split-text-col--left" style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '52px 34px 52px 42px',
          background: 'rgba(8, 12, 19, 0.34)',
          backdropFilter: 'blur(18px) saturate(120%)',
          WebkitBackdropFilter: 'blur(18px) saturate(120%)',
          borderRight: '1px solid rgba(255,255,255,.08)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.025), inset -24px 0 42px rgba(0,0,0,.12)',
        }}>
          <div ref={ref} className="reveal" style={{ maxWidth: 560 }}>
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
              {whyItMattersSection.heading.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>

            <p style={{
              marginTop: 24,
              marginBottom: 10,
              color: 'rgba(158,196,255,.9)',
              textTransform: 'uppercase',
              letterSpacing: '.16em',
              fontSize: '.78rem',
              fontWeight: 500,
            }}>
              {whyItMattersSection.intro}
            </p>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 20px',
              display: 'grid',
              gap: 10,
            }}>
              {whyItMattersSection.bullets.map((b) => (
                <li key={b} style={{
                  position: 'relative',
                  paddingLeft: 20,
                  color: 'rgba(235,240,248,.88)',
                  fontSize: '1rem',
                  lineHeight: 1.5,
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: 10,
                    width: 8,
                    height: 2,
                    background: 'rgba(126,176,255,.7)',
                  }} />
                  {b}
                </li>
              ))}
            </ul>

            <p style={{
              margin: '16px 0 0',
              color: 'rgba(230,236,245,.82)',
              fontSize: '1rem',
              lineHeight: 1.65,
            }}>
              {whyItMattersSection.body}
            </p>

            <p style={{
              margin: '18px 0 0',
              paddingTop: 16,
              borderTop: '1px solid rgba(255,255,255,.08)',
              color: '#fff',
              fontFamily: 'var(--font-display)',
              fontSize: '1.02rem',
              lineHeight: 1.4,
              letterSpacing: '.01em',
              fontStyle: 'italic',
            }}>
              {whyItMattersSection.closing}
            </p>
          </div>
        </div>

        {/* Right column — just atmosphere */}
        <div className="split-image-col why-it-matters-empty-col" style={{ position: 'relative', minHeight: 540 }}>
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
