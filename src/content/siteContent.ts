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
  // ─── NEW LOGO REFS (easy-revert: delete these two lines to restore single-logo setup) ───
  logoSevenOceans: '/images/seven-oceans-logo-orig.png',
  logoMercury: '/images/mercury-logo-orig.png',
  // ─── END NEW LOGO REFS ───
}

export const nav = {
  brand: 'SEVEN OCEANS',
  brandSuffix: 'SERVICES',
  phone: '(555) 555-0199',
  contactLabel: 'Contact',
  links: [
    { label: 'Why Seven Oceans', href: '#why-it-matters' },
    { label: 'Mercury V12 600', href: '#why' },
    { label: 'Core Services', href: '#services' },
    { label: 'Bulletins', href: '#' },
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
  heading: 'THE ENGINE IS ONLY\nPART OF THE SYSTEM',
  description:
    'Seven Ocean also provides state-of-the-art metal work, enclosures, electronics, seakeeper, and more.',
}

// ─── NEW SECTIONS (easy-revert): delete this block + imports/renders in App.tsx to remove ───
export const servicesSection = {
  sectionId: 'services',
  heading: 'CORE\nSERVICES',
  items: [
    {
      title: 'Performance Oversight & Engineering Insight',
      description:
        'System\u2011level diagnostics and operational guidance focused on reliability, longevity, and confidence.',
    },
    {
      title: '24/7 Global Concierge Support',
      description:
        'Immediate access to informed support\u2014any time, any location.',
    },
    {
      title: 'Remote Intelligence & Decision Support',
      description:
        'Real\u2011time consultation when alerts, anomalies, or performance questions arise.',
    },
    {
      title: 'Fleet\u2011Scale Insight',
      description:
        'Experience across large volumes of advanced outboard platforms enables early pattern recognition and preventive action.',
    },
    {
      title: 'Concierge Coordination',
      description:
        'Clear, discreet coordination with owners, captains, service yards, and manufacturers.',
    },
  ],
}

export const whyItMattersSection = {
  sectionId: 'why-it-matters',
  heading: 'WHY THIS\nMATTERS',
  intro: "Today\u2019s large\u2011outboard vessels:",
  bullets: [
    'Operate at sustained high speeds',
    'Depend on integrated digital systems',
    'Travel far beyond traditional marina support zones',
  ],
  body:
    'As sophistication increases, so does complexity\u2014and complexity demands experience, judgment, and immediate access to support.',
  closing:
    'Seven Oceans Services \u2013 Large Outboard Concierge was built for that reality.',
}
// ─── END NEW SECTIONS ───

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
