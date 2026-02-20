import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function RGBEngine() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    const features = [
        {
            label: 'Audio Visualizer',
            desc: 'Real-time audio signal sampling mapped directly to per-key brightness values. Hardware framerate sync for sub-16ms render cycles.',
        },
        {
            label: 'Wave / Smooth / Breathing',
            desc: 'Algorithmically generated lighting patterns with configurable phase offsets and individual zone timing control.',
        },
        {
            label: 'Hardware-Synced Timing',
            desc: 'Lighting frames synchronized to keyboard controller refresh intervals. No dropped frames, no OS scheduler dependency.',
        },
        {
            label: 'Direct Register Control',
            desc: 'USB HID commands written to device registers directly. Bypasses driver abstractions entirely for bit-perfect color output.',
        },
    ]

    return (
        <section id="rgb" className="bg-[#0d1117] border-t border-white/[0.04]">
            <div className="max-w-7xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-px bg-white/10" />
                    <span className="font-mono-code text-[9px] text-white/20 uppercase tracking-[0.22em]">
                        RGB Engine
                    </span>
                </div>
                <h2 className="text-[28px] font-black text-white tracking-tight uppercase mb-2">
                    HID Lighting Engine Deep Dive
                </h2>
                <p className="text-[12px] text-white/25 font-medium mb-14 max-w-md leading-relaxed">
                    Hardware-level per-zone control. No OS scheduling. No driver overhead.
                    Direct USB HID register access.
                </p>

                <div ref={ref} className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Screenshot */}
                    <motion.div
                        className="w-full lg:flex-[1.4]"
                        initial={{ opacity: 0, y: 14 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                    >
                        <div className="bg-[#11161d] rounded-[14px] p-px border border-white/[0.07] shadow-[0_16px_48px_rgba(0,0,0,0.55)] overflow-hidden">
                            <div className="rounded-[13px] overflow-hidden bg-[#0d1117]">
                                <img
                                    src="/Images/Screenshot 2026-02-19 235429.png"
                                    alt="HID Lighting Engine"
                                    className="w-full h-auto block"
                                    style={{
                                        clipPath: 'inset(4.2% 0 4.8% 0)',
                                        transform: 'scale(1.095)',
                                        transformOrigin: 'center',
                                    }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature list */}
                    <motion.div
                        className="flex-1 flex flex-col gap-0"
                        initial={{ opacity: 0, y: 14 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.28, delay: 0.08, ease: 'easeOut' }}
                    >
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="py-5 border-b border-white/[0.04] first:border-t first:border-white/[0.04]"
                            >
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="w-1 h-1 rotate-45 bg-[#e8644a] shrink-0" />
                                    <h3 className="text-[11px] font-black text-white uppercase tracking-[0.12em]">
                                        {f.label}
                                    </h3>
                                </div>
                                <p className="text-[11.5px] text-white/28 leading-relaxed font-medium pl-3">
                                    {f.desc}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
