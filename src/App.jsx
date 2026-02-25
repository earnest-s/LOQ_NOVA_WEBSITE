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
import CardStackDemoPage from './components/CardStackDemoPage'
import ScrollProgressBar from './components/ScrollProgressBar'
import SectionReveal from './components/SectionReveal'
import FeatureGrid from './components/FeatureGrid'
import SectionDivider from './components/SectionDivider'
import SpotlightContainer from './components/SpotlightContainer'

export default function App() {
  return (
    <>
      <ScrollProgressBar />
      <div>
        <ProceduralGroundBackground />
        <Nav />
        <main>
          <Hero />

          <SectionDivider />

          <SectionReveal>
            <FeatureGrid />
          </SectionReveal>

          <SectionDivider />

          <SectionReveal>
            <CardStackDemoPage />
          </SectionReveal>

          <SectionDivider />

          <SectionReveal>
            <ProductShowcase />
          </SectionReveal>

          <SectionDivider />

          <SpotlightContainer>
            <SectionReveal>
              <RGBEngine />
            </SectionReveal>
          </SpotlightContainer>

          <SectionDivider />

          <SectionReveal>
            <PerformanceModes />
          </SectionReveal>

          <SectionDivider />

          <SectionReveal>
            <Architecture />
          </SectionReveal>

          <SectionDivider />

          <SectionReveal>
            <Download />
          </SectionReveal>
        </main>
        <Footer />
      </div>
    </>
  )
}
