// ═══════════════════════════════════════════════════════════════
// Edit all text and image paths here.
// Every visible string and image reference on the site lives
// in this single file. Fix typos here, not in components.
// ═══════════════════════════════════════════════════════════════

export const images = {
  heroBackground: '/images/hero-v2.webp',
  splitBoat: '/images/high-output.webp',
  engines: '/images/triple-600-v2.webp',
  coverageBackground: '/images/plain-water.webp',
  logo: '/images/logo.png',
}

export const nav = {
  brand: 'SEVEN OCEANS',
  brandSuffix: 'SERVICES',
  phone: '(555) 555-0199',
  contactLabel: 'Contact',
  links: [
    { label: 'Concierge Center', href: '#concierge' },
    { label: 'Why Seven Oceans', href: '#why' },
    { label: 'Mercury V12 600', href: '#v12' },
    { label: 'Coverage', href: '#coverage' },
  ],
}

export const contact = {
  phone: '(555) 555-0199',
  phoneHref: 'tel:+15555550199',
  heading: 'GET IN TOUCH',
  subheading: "Share a few details and we'll reach out to set up concierge access.",
  successMessage: "Thanks \u2014 we'll be in touch shortly.",
  submitLabel: 'SEND MESSAGE',
  callPrompt: 'Or call us:',
}

export const hero = {
  subtitle: 'MERCURY V12 600 CONCIERGE',
  heading: 'PERFORMANCE\nBEYOND ROUTINE',
  description:
    "Technical oversight and informed concierge support for owners demanding more from Mercury's most advanced outboard platform.",
  ctaPrimary: 'REQUEST CONCIERGE ACCESS',
  ctaSecondary: 'SPEAK WITH OUR TEAM',
}

export const features = {
  sectionId: 'concierge',
  cards: [
    {
      icon: 'Zap',
      title: 'IMMEDIATE\nRESPONSE',
      description:
        'Priority access to our dedicated technical support team around the clock.',
    },
    {
      icon: 'Cpu',
      title: 'SYSTEM-LEVEL\nINTEL',
      description:
        'Deep telemetry analysis and proactive diagnostics for every engine parameter.',
    },
    {
      icon: 'Gauge',
      title: 'V600 V12\nEXPERTISE',
      description:
        'Factory-certified specialists with unmatched knowledge of the V12 platform.',
    },
    {
      icon: 'Shield',
      title: 'SYSTEM-LEVEL\nOVERSIGHT',
      description:
        'Continuous monitoring and management of your complete propulsion system.',
    },
    {
      icon: 'Crown',
      title: 'ELITE\nCONCIERGE SUPPORT',
      description:
        'White-glove service coordination from maintenance scheduling to parts sourcing.',
    },
  ],
}

export const splitSection = {
  sectionId: 'why',
  heading: 'HIGH-OUTPUT BOATS DEMAND\nHIGHER-LEVEL SUPPORT',
  description:
    "Today's high-performance outboard vessels operate at the edge of their design envelope. We are there whenever alerts, zero-hour conditions change, or immediate attention is needed.",
}

export const enginesSection = {
  sectionId: 'v12',
}

export const coverage = {
  sectionId: 'coverage',
  heading: 'WHEREVER THE BOAT GOES,\nSUPPORT FOLLOWS',
  regions: ['Northeast', 'South Florida', 'Bahamas', 'Offshore'],
}

export const footer = {
  mercuryLabel: 'MERCURY',
  brandLabel: 'SEVEN OCEANS',
  phone: '(555) 555-0199',
  phoneHref: 'tel:+15555550199',
}
