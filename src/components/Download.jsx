import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const GITHUB_URL = 'https://github.com/earnest-s/LoqNova'
const RELEASES_URL = 'https://github.com/earnest-s/LoqNova/releases'

export default function Download() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="download" className="bg-[#0b0f14] border-t border-white/[0.04]">
            <div className="max-w-7xl mx-auto px-6 py-16" ref={ref}>
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
                    {/* Left */}
                    <motion.div
                        className="max-w-lg"
                        initial={{ opacity: 0, y: 12 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-6 h-px bg-white/10" />
                            <span className="font-mono-code text-[9px] text-white/20 uppercase tracking-[0.22em]">
                                Download
                            </span>
                        </div>
                        <h2 className="text-[28px] font-[900] tracking-[-0.02em] text-white uppercase mb-2">
                            Deployment Package
                        </h2>
                        <p className="text-[12px] text-white/20 font-medium leading-[1.65] mb-2 max-w-sm">
                            Compiled x64 binary. Single executable payload. Direct hardware interface. Zero dependency footprint.
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                            <span className="font-mono-code text-[8.5px] text-white/15 uppercase tracking-widest">
                                Build 3.0.0
                            </span>
                            <span className="text-white/10">·</span>
                            <span className="font-mono-code text-[8.5px] text-white/15 uppercase tracking-widest">
                                Windows x64
                            </span>
                            <span className="text-white/10">·</span>
                            <span className="font-mono-code text-[8.5px] text-white/15 uppercase tracking-widest">
                                Stable
                            </span>
                        </div>
                    </motion.div>

                    {/* Right: links */}
                    <motion.div
                        className="flex flex-col gap-3 min-w-[260px]"
                        initial={{ opacity: 0, y: 12 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.28, delay: 0.08, ease: 'easeOut' }}
                    >
                        <a
                            href={RELEASES_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-4 bg-[#e8644a] text-white px-6 py-4 hover:bg-[#e8644a]/90 transition-colors duration-0 group"
                        >
                            <div>
                                <div className="text-[10px] font-[900] tracking-[0.2em] uppercase mb-0.5">
                                    Download Direct
                                </div>
                                <div className="font-mono-code text-[8px] text-white/50 tracking-wide">
                                    LOQNova_v3.0.0.exe
                                </div>
                            </div>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 16 16"
                                fill="none"
                                className="opacity-40 group-hover:opacity-100 transition-opacity shrink-0"
                            >
                                <path
                                    d="M8 2v8M4 7l4 4 4-4M2 13h12"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>

                        <div className="flex gap-2">
                            <a
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 border border-white/[0.07] text-white/30 px-4 py-3 text-[9px] font-bold tracking-[0.16em] uppercase hover:text-white/70 hover:border-white/[0.14] transition-all duration-200 text-center"
                            >
                                GitHub Repo
                            </a>
                            <a
                                href={RELEASES_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 border border-white/[0.07] text-white/30 px-4 py-3 text-[9px] font-bold tracking-[0.16em] uppercase hover:text-white/70 hover:border-white/[0.14] transition-all duration-200 text-center"
                            >
                                All Releases
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
