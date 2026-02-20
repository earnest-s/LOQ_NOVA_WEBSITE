import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import RGBEngine from './components/RGBEngine'
import PerformanceModes from './components/PerformanceModes'
import Architecture from './components/Architecture'
import Download from './components/Download'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white antialiased">
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
