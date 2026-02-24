import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import RGBEngine from './components/RGBEngine'
import PerformanceModes from './components/PerformanceModes'
import Architecture from './components/Architecture'
import Download from './components/Download'
import Footer from './components/Footer'
import ProceduralGroundBackground from './components/ProceduralGroundBackground'

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-white antialiased relative">
      <ProceduralGroundBackground />
      <Nav />
      <main>
        <Hero />
        <ProductShowcase />
        <RGBEngine />
        <PerformanceModes />
        <Architecture />
        <Download />
      </main>
      <Footer />
    </div>
  )
}
