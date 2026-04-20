import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { nav, images, contact } from '../content/siteContent'

type Props = {
  onOpenContact: () => void
}

export default function Navbar({ onOpenContact }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    onOpenContact()
  }

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
            src={images.logoSevenOceans}
            alt="Seven Oceans Services"
            style={{ width: 100, height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(118,167,255,.12))' }}
          />
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

          <a
            href="#contact"
            onClick={handleContactClick}
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
            {nav.contactLabel}
          </a>

          <a
            href={contact.phoneHref}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: 'rgba(158,196,255,.92)',
              textDecoration: 'none',
              fontSize: '.88rem',
              fontWeight: 600,
              letterSpacing: '.04em',
              padding: '8px 12px',
              border: '1px solid rgba(126,176,255,.35)',
              borderRadius: 10,
              background: 'rgba(30,55,100,.16)',
              transition: 'color .2s ease, border-color .2s ease, background .2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.borderColor = 'rgba(158,196,255,.65)'
              e.currentTarget.style.background = 'rgba(40,70,130,.24)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(158,196,255,.92)'
              e.currentTarget.style.borderColor = 'rgba(126,176,255,.35)'
              e.currentTarget.style.background = 'rgba(30,55,100,.16)'
            }}
          >
            <Phone size={14} strokeWidth={1.8} />
            {nav.phone}
          </a>
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
            display: 'grid',
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
          <a
            href="#contact"
            onClick={handleContactClick}
            style={{ color: 'rgba(245,247,251,.82)', textDecoration: 'none', fontSize: '.86rem', letterSpacing: '.02em' }}
          >
            {nav.contactLabel}
          </a>
          <a
            href={contact.phoneHref}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: 'rgba(158,196,255,.92)',
              textDecoration: 'none',
              fontSize: '.9rem',
              fontWeight: 600,
              letterSpacing: '.04em',
            }}
          >
            <Phone size={14} strokeWidth={1.8} />
            {nav.phone}
          </a>
        </div>
      )}
    </nav>
  )
}
