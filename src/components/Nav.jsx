import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const RELEASES_URL = 'https://github.com/earnest-s/LoqNova/releases'

const NAV_LINKS = [
  ['Features', '#features'],
  ['RGB Engine', '#rgb'],
  ['Performance', '#performance'],
  ['Automation', '#automation'],
  ['Download', '#download'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Navbar fade down sequence
    gsap.fromTo(navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }
    )
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 border-b opacity-0 ${scrolled
          ? 'bg-transparent/96 backdrop-blur-sm border-white/[0.05]'
          : 'bg-transparent border-white/[0.04]'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img src="/logo.svg" alt="LOQ Nova" className="w-[18px] h-[18px] shrink-0" />
          <span className="text-[11px] font-bold tracking-[0.18em] text-white uppercase select-none">
            LOQ Nova
          </span>
        </a>

        {/* Center links - Dock hover effect added */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group relative text-[10px] font-semibold text-white/40 hover:text-white transition-colors duration-200 uppercase tracking-[0.14em]"
            >
              {label}
              {/* Dock-style underline animation */}
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={RELEASES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-[#e8644a] text-white px-4 py-1.5 text-[9px] font-bold tracking-[0.16em] uppercase hover:bg-[#d45a41] transition-colors duration-200"
        >
          Download
        </a>
      </div>
    </nav>
  )
}
