import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, images } from '../content/siteContent'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        background: scrolled
          ? 'linear-gradient(180deg, rgba(5,9,16,.95), rgba(7,11,18,.88))'
          : 'linear-gradient(180deg, rgba(5,9,16,.9), rgba(7,11,18,.78))',
        borderBottom: '1px solid rgba(255,255,255,.08)',
        boxShadow: '0 8px 25px rgba(0,0,0,.24)',
        transition: 'background 0.4s ease',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--page-max)',
          margin: '0 auto',
          height: 74,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          padding: '0 18px',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'var(--text)' }}>
          <img
            src={images.logo}
            alt="Seven Oceans"
            style={{ width: 62, height: 28, objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(118,167,255,.12))' }}
          />
          <span style={{ fontSize: '1rem', letterSpacing: '.16em', fontWeight: 600, whiteSpace: 'nowrap', fontFamily: 'var(--font-display)' }}>
            {nav.brand}{' '}
            <span style={{ fontWeight: 300, color: 'rgba(255,255,255,.78)' }}>{nav.brandSuffix}</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 'clamp(12px, 1.6vw, 28px)', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: 'rgba(245,247,251,.82)',
                textDecoration: 'none',
                fontSize: '.86rem',
                letterSpacing: '.02em',
                transition: 'color .25s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,247,251,.82)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:!hidden"
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,.12)',
            color: '#fff',
            width: 44,
            height: 44,
            borderRadius: 12,
            cursor: 'pointer',
            placeItems: 'center',
          }}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden animate-slide-down"
          style={{
            position: 'absolute',
            left: 14,
            right: 14,
            top: 'calc(100% + 10px)',
            padding: 14,
            background: 'rgba(7,10,16,.97)',
            border: '1px solid rgba(255,255,255,.08)',
            borderRadius: 16,
            boxShadow: '0 20px 45px rgba(0,0,0,.35)',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ color: 'rgba(245,247,251,.82)', textDecoration: 'none', fontSize: '.86rem', letterSpacing: '.02em' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
