import { footer, images } from '../content/siteContent'

export default function Footer() {
  return (
    <footer
      className="section-divider"
      style={{
        background: 'linear-gradient(180deg, rgba(7,10,15,.96), rgba(3,5,8,.98))',
      }}
    >
      <div style={{
        maxWidth: 'var(--page-max)',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 34,
        flexWrap: 'wrap',
        padding: '28px 24px',
      }}>
        {/* Mercury */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          color: 'rgba(245,247,251,.86)',
          textTransform: 'uppercase',
          letterSpacing: '.14em',
          fontWeight: 700,
          fontSize: '.9rem',
          opacity: .92,
        }}>
          <img
            src={images.logo}
            alt="Mercury"
            style={{ width: 42, height: 20, objectFit: 'contain', opacity: .95 }}
          />
          <span>{footer.mercuryLabel}</span>
        </div>

        {/* Divider */}
        <div style={{ width: 1, height: 34, background: 'rgba(255,255,255,.1)' }} />

        {/* Seven Oceans */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          color: 'rgba(245,247,251,.86)',
          textTransform: 'uppercase',
          letterSpacing: '.14em',
          fontWeight: 700,
          fontSize: '.9rem',
          opacity: .92,
        }}>
          <img
            src={images.logo}
            alt="Seven Oceans"
            style={{ width: 42, height: 20, objectFit: 'contain', opacity: .95 }}
          />
          <span>{footer.brandLabel}</span>
        </div>
      </div>
    </footer>
  )
}
