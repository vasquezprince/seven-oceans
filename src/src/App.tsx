import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ImageTextSection from './components/ImageTextSection'
import EnginesSection from './components/EnginesSection'
import CoverageSection from './components/CoverageSection'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
// ─── NEW SECTIONS (easy-revert): delete these 2 imports + the 2 render lines below to remove ───
import ServicesSection from './components/ServicesSection'
import WhyItMattersSection from './components/WhyItMattersSection'
// ─── END NEW SECTIONS imports ───

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Navbar onOpenContact={openContact} />
      <div style={{ maxWidth: 1510, margin: '0 auto', padding: '0 14px 28px' }}>
        <div className="site-frame" style={{ marginTop: 14 }}>
          <HeroSection onOpenContact={openContact} />
          <ImageTextSection />
          <EnginesSection />
          {/* ─── NEW SECTIONS (easy-revert): delete these 2 lines to remove ─── */}
          <ServicesSection />
          <WhyItMattersSection />
          {/* ─── END NEW SECTIONS ─── */}
          <CoverageSection />
          <Footer />
        </div>
      </div>
      <ContactModal open={contactOpen} onClose={closeContact} />
    </div>
  )
}
