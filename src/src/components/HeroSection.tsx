import { useEffect, useState } from 'react'
import { hero, images, features } from '../content/siteContent'
import { useScrollReveal } from '../hooks/useScrollReveal'
import PropellerIcon from './PropellerIcon'

type Props = {
  onOpenContact: () => void
}

export default function HeroSection({ onOpenContact }: Props) {
  const [offset, setOffset] = useState(0)
  const cardsRef = useScrollReveal<HTMLDivElement>()

  useEffect(() => {
    const fn = () => setOffset(window.scrollY * 0.06)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <section
      id={features.sectionId}
      className="section-divider"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background layers: radial highlights + gradients + hero image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 67% 30%, rgba(160,198,255,.18), transparent 14%),
            linear-gradient(90deg, rgba(3,4,8,.95) 0%, rgba(6,9,15,.90) 22%, rgba(8,10,16,.52) 46%, rgba(4,6,10,.12) 68%),
            linear-gradient(180deg, rgba(10,16,24,.15), rgba(5,7,11,.58))
          `,
          zIndex: 1,
        }}
      />

      {/* Hero image */}
      <img
        src={images.heroBackground}
        alt=""
        className="hero-bg-image"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '62% 40%',
          transform: `translateY(${offset}px)`,
        }}
      />

      {/* Subtle light effects */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0)),
            radial-gradient(circle at 72% 44%, rgba(188,226,255,.16), transparent 16%),
            radial-gradient(circle at 58% 70%, rgba(126,173,255,.10), transparent 20%)
          `,
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Hero content */}
      <div
        className="hero-content-grid"
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: 'var(--page-max)',
          margin: '0 auto',
          minHeight: 680,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: 'minmax(0, 560px) 1fr',
          gap: 24,
          padding: '120px 24px 60px',
        }}
      >
        <div className="opacity-0 animate-fade-up" style={{ maxWidth: 560, animationDelay: '0.1s' }}>
          {/* Eyebrow */}
          <div className="hero-eyebrow" style={{
            display: 'inline-block',
            marginBottom: 20,
            color: 'rgba(158,196,255,.9)',
            textTransform: 'uppercase',
            letterSpacing: '.2em',
            fontSize: 'clamp(1.44rem, 1.91vw, 1.75rem)',
            fontWeight: 500,
            maxWidth: '100%',
          }}>
            {hero.subtitle}
          </div>

          {/* Heading */}
          <h1 style={{
            margin: 0,
            fontSize: 'clamp(2.3rem, 5vw, 4.4rem)',
            lineHeight: .97,
            letterSpacing: '-.03em',
            textTransform: 'uppercase',
            fontWeight: 760,
            color: '#fff',
            fontFamily: 'var(--font-display)',
            textWrap: 'balance',
          }}>
            {hero.heading.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p style={{
            margin: '22px 0 0',
            maxWidth: 500,
            color: 'rgba(235,240,248,.88)',
            fontSize: 'clamp(1rem, 1.4vw, 1.16rem)',
            lineHeight: 1.6,
          }}>
            {hero.description}
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 30 }}>
            <button
              type="button"
              onClick={onOpenContact}
              className="hero-btn-primary"
              style={{
                appearance: 'none',
                border: '1px solid rgba(126,176,255,.55)',
                background: 'linear-gradient(180deg, rgba(79,132,255,.24), rgba(36,71,148,.18))',
                color: '#fff',
                padding: '15px 22px',
                minHeight: 52,
                borderRadius: 12,
                fontWeight: 600,
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                fontSize: '.82rem',
                fontFamily: 'inherit',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'inset 0 0 0 1px rgba(159,198,255,.08), 0 0 0 1px rgba(126,176,255,.12)',
                cursor: 'pointer',
                transition: 'transform .24s ease, border-color .24s ease, background .24s ease, box-shadow .24s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.borderColor = 'rgba(158,196,255,.75)'
                e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(159,198,255,.12), 0 0 20px rgba(118,167,255,.25), 0 12px 28px rgba(15,23,43,.36)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(126,176,255,.55)'
                e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(159,198,255,.08), 0 0 0 1px rgba(126,176,255,.12)'
              }}
            >
              {hero.ctaPrimary}
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="hero-btn-secondary"
              style={{
                appearance: 'none',
                border: '1px solid rgba(255,255,255,.18)',
                background: 'rgba(8,12,18,.52)',
                color: '#fff',
                padding: '15px 22px',
                minHeight: 52,
                borderRadius: 12,
                fontWeight: 600,
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                fontSize: '.82rem',
                fontFamily: 'inherit',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.02)',
                cursor: 'pointer',
                transition: 'transform .24s ease, border-color .24s ease, background .24s ease, box-shadow .24s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.borderColor = 'rgba(158,196,255,.45)'
                e.currentTarget.style.background = 'rgba(30,45,75,.4)'
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(15,23,43,.36), 0 0 14px rgba(118,167,255,.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,.18)'
                e.currentTarget.style.background = 'rgba(8,12,18,.52)'
                e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(255,255,255,.02)'
              }}
            >
              {hero.ctaSecondary}
            </button>
          </div>
        </div>
      </div>

      {/* Feature cards — sitting on top of hero background */}
      <div
        ref={cardsRef}
        className="reveal feature-cards-grid"
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: 'var(--page-max)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
          paddingBottom: 30,
        }}
      >
        {features.cards.map((card, i) => {
          return (
            <article
              key={card.title}
              style={{
                position: 'relative',
                padding: '28px 22px 24px',
                background: 'rgba(8, 12, 19, 0.38)',
                backdropFilter: 'blur(18px) saturate(120%)',
                WebkitBackdropFilter: 'blur(18px) saturate(120%)',
                borderRight: i < features.cards.length - 1 ? '1px solid rgba(255,255,255,.07)' : 'none',
                borderLeft: i === 0 ? '1px solid rgba(255,255,255,.07)' : 'none',
                borderTop: '1px solid rgba(255,255,255,.06)',
                minHeight: 185,
                transition: 'transform .25s ease, background .25s ease, box-shadow .25s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.background = 'rgba(10, 16, 26, 0.55)'
                e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(132,183,255,.08), 0 20px 35px rgba(0,0,0,.24)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = 'rgba(8, 12, 19, 0.38)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Top glow line per card */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 16,
                right: 16,
                height: 2,
                background: 'linear-gradient(90deg, transparent, rgba(126,176,255,.8), transparent)',
                opacity: .55,
              }} />

              {/* Icon ring */}
              <div style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: '1px solid rgba(145,189,255,.28)',
                display: 'grid',
                placeItems: 'center',
                marginBottom: 18,
                background: 'radial-gradient(circle at 30% 30%, rgba(119,170,255,.2), rgba(255,255,255,.02))',
                boxShadow: 'inset 0 0 18px rgba(118,167,255,.08)',
                color: 'var(--accent-2)',
              }}>
                <PropellerIcon size={24} />
              </div>

              <h3 style={{
                margin: '0 0 10px',
                fontSize: '1.08rem',
                lineHeight: 1.14,
                textTransform: 'uppercase',
                letterSpacing: '.02em',
                color: '#fff',
                fontFamily: 'var(--font-display)',
              }}>
                {card.title.replace('\n', ' ')}
              </h3>

              <p style={{
                margin: 0,
                color: 'rgba(220,228,240,.72)',
                lineHeight: 1.5,
                fontSize: '.92rem',
                maxWidth: 200,
              }}>
                {card.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
