import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ImageTextSection from './components/ImageTextSection'
import EnginesSection from './components/EnginesSection'
import CoverageSection from './components/CoverageSection'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

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
          <CoverageSection />
          <Footer />
        </div>
      </div>
      <ContactModal open={contactOpen} onClose={closeContact} />
    </div>
  )
}
