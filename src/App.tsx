import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ImageTextSection from './components/ImageTextSection'
import EnginesSection from './components/EnginesSection'
import CoverageSection from './components/CoverageSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Navbar />
      <div style={{ maxWidth: 1510, margin: '0 auto', padding: '0 14px 28px' }}>
        <div className="site-frame" style={{ marginTop: 14 }}>
          <HeroSection />
          <ImageTextSection />
          <EnginesSection />
          <CoverageSection />
          <Footer />
        </div>
      </div>
    </div>
  )
}
