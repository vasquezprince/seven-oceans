import { servicesSection } from '../content/siteContent'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ServicesSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id={servicesSection.sectionId}
      className="section-divider"
      style={{
        position: 'relative',
        minHeight: 540,
        overflow: 'hidden',
      }}
    >
      {/* Generic dark blue-black background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 22% 35%, rgba(118,167,255,.10), transparent 28%),
          linear-gradient(180deg, rgba(6,10,18,.95), rgba(3,6,11,.98))
        `,
      }} />

      {/* Grid: image-side LEFT (empty/gradient), text-side RIGHT */}
      <div className="split-grid" style={{
        maxWidth: 'var(--page-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '42% 58%',
        alignItems: 'stretch',
        minHeight: 540,
        position: 'relative',
      }}>
        {/* Left column — just atmosphere */}
        <div className="split-image-col" style={{ position: 'relative', minHeight: 540 }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(4,7,12,.06), rgba(4,7,12,0) 38%)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* Right column — glass text panel */}
        <div className="split-text-col" style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '52px 42px 52px 34px',
          background: 'rgba(8, 12, 19, 0.34)',
          backdropFilter: 'blur(18px) saturate(120%)',
          WebkitBackdropFilter: 'blur(18px) saturate(120%)',
          borderLeft: '1px solid rgba(255,255,255,.08)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.025), inset 24px 0 42px rgba(0,0,0,.12)',
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
              {servicesSection.heading.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '28px 0 0',
              display: 'grid',
              gap: 18,
            }}>
              {servicesSection.items.map((item) => (
                <li key={item.title} style={{
                  paddingLeft: 18,
                  borderLeft: '2px solid rgba(126,176,255,.5)',
                }}>
                  <div style={{
                    color: '#fff',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.04rem',
                    lineHeight: 1.25,
                    letterSpacing: '.01em',
                    fontWeight: 600,
                    marginBottom: 4,
                  }}>
                    {item.title}
                  </div>
                  <div style={{
                    color: 'rgba(225,232,243,.78)',
                    fontSize: '.94rem',
                    lineHeight: 1.55,
                  }}>
                    {item.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
