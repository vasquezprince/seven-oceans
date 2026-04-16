import { Zap, Cpu, Gauge, Shield, Crown, type LucideIcon } from 'lucide-react'
import { features } from '../content/siteContent'
import { useScrollReveal } from '../hooks/useScrollReveal'

const iconMap: Record<string, LucideIcon> = { Zap, Cpu, Gauge, Shield, Crown }

export default function FeatureCards() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id={features.sectionId}
      className="section-divider"
      style={{
        padding: 0,
        background: `
          linear-gradient(180deg, rgba(4,7,12,.22), rgba(7,10,16,.85)),
          linear-gradient(180deg, rgba(118,167,255,.05), transparent 36%)
        `,
      }}
    >
      <div
        ref={ref}
        className="reveal feature-cards-grid"
        style={{
          maxWidth: 'var(--page-max)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
        }}
      >
        {features.cards.map((card, i) => {
          const Icon = iconMap[card.icon] || Zap
          return (
            <article
              key={card.title}
              style={{
                position: 'relative',
                padding: '28px 22px 24px',
                background: 'linear-gradient(180deg, rgba(10,14,23,.84), rgba(5,8,14,.9))',
                borderRight: '1px solid rgba(255,255,255,.07)',
                borderLeft: i === 0 ? '1px solid rgba(255,255,255,.07)' : 'none',
                minHeight: 185,
                transition: 'transform .25s ease, background .25s ease, box-shadow .25s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.background = 'linear-gradient(180deg, rgba(13,18,29,.92), rgba(8,12,19,.96))'
                e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(132,183,255,.08), 0 20px 35px rgba(0,0,0,.24)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = 'linear-gradient(180deg, rgba(10,14,23,.84), rgba(5,8,14,.9))'
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
                <Icon size={18} strokeWidth={1.5} />
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
