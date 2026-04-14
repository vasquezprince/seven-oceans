import { splitSection, images } from '../content/siteContent'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ImageTextSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id={splitSection.sectionId}
      className="section-divider"
      style={{
        position: 'relative',
        minHeight: 470,
        overflow: 'hidden',
      }}
    >
      {/* Full background: cockpit image + overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          linear-gradient(180deg, rgba(0,0,0,.16), rgba(0,0,0,.34)),
          url(${images.splitBoat}) center center / cover no-repeat
        `,
      }} />

      {/* Grid: image side LEFT, text side RIGHT */}
      <div style={{
        maxWidth: 'var(--page-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '58% 42%',
        alignItems: 'stretch',
        minHeight: 470,
        position: 'relative',
      }}>
        {/* Left column — image shows through (transparent) */}
        <div style={{ position: 'relative', minHeight: 470 }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(4,7,12,.06), rgba(4,7,12,0) 38%)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* Right column — glass text panel */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '44px 42px 44px 34px',
          background: 'rgba(8, 12, 19, 0.34)',
          backdropFilter: 'blur(18px) saturate(120%)',
          WebkitBackdropFilter: 'blur(18px) saturate(120%)',
          borderLeft: '1px solid rgba(255,255,255,.08)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.025), inset 24px 0 42px rgba(0,0,0,.12)',
        }}>
          <div ref={ref} className="reveal" style={{ maxWidth: 520 }}>
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
              {splitSection.heading.split('\n').map((line, i) => (
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
              {splitSection.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
