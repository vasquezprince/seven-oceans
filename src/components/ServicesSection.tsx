import { servicesSection } from '../content/siteContent'
import { useScrollReveal } from '../hooks/useScrollReveal'

const BACKGROUND_IMAGE = '/images/core-services.webp'

export default function ServicesSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      className="section-divider"
      style={{
        position: 'relative',
        minHeight: 540,
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        className="core-services-bg"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
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

      {/* Grid: image-side LEFT (empty so background shows), text-side RIGHT */}
      <div className="split-grid" style={{
        maxWidth: 'var(--page-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '58% 42%',
        alignItems: 'stretch',
        minHeight: 540,
        position: 'relative',
      }}>
        <div className="split-image-col" style={{ position: 'relative', minHeight: 540 }} />

        {/* Right column — glass text panel */}
        <div id={servicesSection.sectionId} className="split-text-col" style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '52px 42px 52px 34px',
          background: 'rgba(8, 12, 19, 0.42)',
          backdropFilter: 'blur(18px) saturate(120%)',
          WebkitBackdropFilter: 'blur(18px) saturate(120%)',
          borderLeft: '1px solid rgba(255,255,255,.08)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.025), inset 24px 0 42px rgba(0,0,0,.18)',
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

            <ul className="core-services-static-list" style={{
              listStyle: 'none',
              padding: 0,
              margin: '28px 0 0',
              display: 'grid',
              gap: 14,
            }}>
              {servicesSection.items.map((item) => (
                <li key={item.title} className="core-services-static-item">
                  <div className="core-services-static-item-title">{item.title}</div>
                  <div className="core-services-static-item-desc">{item.description}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
