import { useEffect, useState, type CSSProperties, type FormEvent } from 'react'
import { X, Phone } from 'lucide-react'
import { contact } from '../content/siteContent'

type Props = {
  open: boolean
  onClose: () => void
}

const inputBaseStyle: CSSProperties = {
  width: '100%',
  appearance: 'none',
  border: '1px solid rgba(255,255,255,.18)',
  background: 'rgba(8,12,18,.62)',
  color: '#fff',
  padding: '12px 14px',
  borderRadius: 10,
  fontSize: '.94rem',
  fontFamily: 'inherit',
  letterSpacing: '.01em',
  outline: 'none',
  transition: 'border-color .22s ease, background .22s ease, box-shadow .22s ease',
  boxSizing: 'border-box',
}

const labelStyle: CSSProperties = {
  display: 'block',
  color: 'rgba(235,240,248,.78)',
  fontSize: '.72rem',
  letterSpacing: '.16em',
  textTransform: 'uppercase',
  marginBottom: 6,
}

function focusIn(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = 'rgba(158,196,255,.55)'
  e.currentTarget.style.background = 'rgba(12,20,32,.72)'
  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(118,167,255,.12)'
}
function focusOut(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = 'rgba(255,255,255,.18)'
  e.currentTarget.style.background = 'rgba(8,12,18,.62)'
  e.currentTarget.style.boxShadow = 'none'
}

export default function ContactModal({ open, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) setSubmitted(false)
  }, [open])

  if (!open) return null

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      message: data.get('message'),
    }
    console.log('Contact form submission:', payload)
    setSubmitted(true)
    setTimeout(() => onClose(), 1800)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Contact Seven Oceans"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(2,4,8,.62)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 200,
        display: 'grid',
        placeItems: 'center',
        padding: 18,
        animation: 'fade-up .28s ease both',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 520,
          background: 'rgba(8,12,19,.78)',
          backdropFilter: 'blur(22px) saturate(125%)',
          WebkitBackdropFilter: 'blur(22px) saturate(125%)',
          border: '1px solid rgba(255,255,255,.1)',
          borderRadius: 16,
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.03), 0 30px 70px rgba(0,0,0,.55)',
          padding: '30px 28px 26px',
          color: '#fff',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            width: 36,
            height: 36,
            borderRadius: 10,
            background: 'rgba(255,255,255,.04)',
            border: '1px solid rgba(255,255,255,.12)',
            color: '#fff',
            cursor: 'pointer',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <X size={18} />
        </button>

        <div style={{
          color: 'rgba(158,196,255,.85)',
          textTransform: 'uppercase',
          letterSpacing: '.22em',
          fontSize: '.7rem',
          marginBottom: 8,
        }}>
          MERCURY V12 600 CONCIERGE
        </div>
        <h2 style={{
          margin: 0,
          fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
          lineHeight: 1.05,
          letterSpacing: '-.02em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-display)',
        }}>
          {contact.heading}
        </h2>
        <p style={{
          margin: '10px 0 22px',
          color: 'rgba(230,236,245,.78)',
          fontSize: '.95rem',
          lineHeight: 1.55,
        }}>
          {contact.subheading}
        </p>

        {submitted ? (
          <div style={{
            padding: '28px 18px',
            textAlign: 'center',
            border: '1px solid rgba(126,176,255,.35)',
            borderRadius: 12,
            background: 'rgba(30,55,100,.22)',
            color: '#fff',
            fontSize: '1rem',
            letterSpacing: '.02em',
          }}>
            {contact.successMessage}
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate={false}>
            <div style={{ display: 'grid', gap: 14 }}>
              <div>
                <label style={labelStyle} htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  style={inputBaseStyle}
                  onFocus={focusIn}
                  onBlur={focusOut}
                />
              </div>
              <div style={{ display: 'grid', gap: 14, gridTemplateColumns: '1fr 1fr' }}>
                <div>
                  <label style={labelStyle} htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    style={inputBaseStyle}
                    onFocus={focusIn}
                    onBlur={focusOut}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="contact-phone">Phone</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    style={inputBaseStyle}
                    onFocus={focusIn}
                    onBlur={focusOut}
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle} htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  style={{ ...inputBaseStyle, resize: 'vertical', minHeight: 100 }}
                  onFocus={focusIn}
                  onBlur={focusOut}
                />
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              margin: '18px 0 14px',
              color: 'rgba(220,228,240,.72)',
              fontSize: '.86rem',
            }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.08)' }} />
              <span>{contact.callPrompt}</span>
              <a
                href={contact.phoneHref}
                style={{
                  color: 'rgba(158,196,255,.95)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontWeight: 600,
                  letterSpacing: '.04em',
                }}
              >
                <Phone size={14} strokeWidth={1.8} />
                {contact.phone}
              </a>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,.08)' }} />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                appearance: 'none',
                border: '1px solid rgba(126,176,255,.55)',
                background: 'linear-gradient(180deg, rgba(79,132,255,.24), rgba(36,71,148,.18))',
                color: '#fff',
                padding: '14px 22px',
                minHeight: 50,
                borderRadius: 12,
                fontWeight: 600,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                fontSize: '.82rem',
                cursor: 'pointer',
                boxShadow: 'inset 0 0 0 1px rgba(159,198,255,.08), 0 0 0 1px rgba(126,176,255,.12)',
                transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.borderColor = 'rgba(158,196,255,.75)'
                e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(159,198,255,.12), 0 0 20px rgba(118,167,255,.25), 0 10px 24px rgba(15,23,43,.36)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(126,176,255,.55)'
                e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(159,198,255,.08), 0 0 0 1px rgba(126,176,255,.12)'
              }}
            >
              {contact.submitLabel}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
