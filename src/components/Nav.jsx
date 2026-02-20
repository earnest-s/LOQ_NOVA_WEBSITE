import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#0b0f14]/96 backdrop-blur-sm border-white/[0.05]'
          : 'bg-[#0b0f14] border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="text-white shrink-0">
            <polygon
              points="10,2 19,17 1,17"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <line x1="10" y1="8" x2="10" y2="13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="10" cy="15" r="0.7" fill="currentColor" />
          </svg>
          <span className="text-[11px] font-bold tracking-[0.18em] text-white uppercase select-none">
            LOQ Nova
          </span>
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[10px] font-semibold text-white/30 hover:text-white/80 transition-colors duration-200 uppercase tracking-[0.14em]"
            >
              {label}
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
