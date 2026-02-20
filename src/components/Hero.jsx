import { motion } from 'framer-motion'

const RELEASES_URL = 'https://github.com/earnest-s/LoqNova/releases'
const GITHUB_URL = 'https://github.com/earnest-s/LoqNova'

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay, ease: 'easeOut' },
})

export default function Hero() {
    return (
        <section className="relative min-h-[88vh] flex flex-col items-center justify-center px-6 pt-12 overflow-hidden bg-[#0b0f14]">
            {/* Radial depth */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(232,100,74,0.027) 0%, transparent 70%)',
                }}
            />
            {/* Very faint app UI background crop */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: "url('/Images/dashboard.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(28px) saturate(0.4)',
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Headline */}
                <motion.h1
                    {...fade(0.06)}
                    className="text-[clamp(48px,8vw,88px)] font-[900] tracking-[-0.04em] text-white leading-[0.92] mb-5 uppercase"
                >
                    Total Control.
                    <br />
                    <span className="text-white/20">Zero Overhead.</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    {...fade(0.12)}
                    className="text-[13px] text-white/30 font-medium max-w-lg mx-auto leading-[1.6] mb-10 tracking-[0.01em]"
                >
                    Direct subsystem power envelope control for LOQ Laptops — without the abstraction layer.
                    Natively integrated hardware access. Zero background agents.
                </motion.p>

                {/* CTAs */}
                <motion.div {...fade(0.18)} className="flex items-center justify-center gap-3">
                    <a
                        href={RELEASES_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#e8644a] text-white px-7 py-2.5 text-[10px] font-bold tracking-[0.16em] uppercase hover:bg-[#d45a41] transition-colors duration-200"
                    >
                        Download Now
                    </a>
                    <a
                        href="#features"
                        className="border border-white/[0.08] text-white/30 px-7 py-2.5 text-[10px] font-bold tracking-[0.16em] uppercase hover:text-white/70 hover:border-white/[0.14] transition-all duration-200"
                    >
                        View Features
                    </a>
                </motion.div>

                {/* Build ref */}
                <motion.p
                    {...fade(0.24)}
                    className="mt-8 font-mono-code text-[8px] text-white/12 uppercase tracking-widest"
                >
                    Windows x64 · Build 3.0.0 · Direct hardware integration
                </motion.p>
            </div>

            {/* Bottom fade */}
            <div
                className="pointer-events-none absolute bottom-0 inset-x-0 h-24"
                style={{
                    background: 'linear-gradient(to bottom, transparent, #0b0f14)',
                }}
            />
        </section>
    )
}
