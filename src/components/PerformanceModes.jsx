import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const MODES = [
    {
        id: 'quiet',
        label: 'Quiet',
        color: '#3b82f6',
        accent: 'rgba(59,130,246,0.12)',
        tag: 'Thermal Efficiency',
        specs: [
            { key: 'Fan Profile', val: 'Minimal RPM' },
            { key: 'CPU TDP', val: 'Reduced Envelope' },
            { key: 'Refresh Rate', val: '60 Hz Lock' },
            { key: 'Keyboard Backlight', val: 'Off / Dim' },
        ],
        desc: 'Prioritizes acoustic performance and thermal efficiency. CPU and GPU power limits are constrained to extend battery life. Fan curves are suppressed to near-silent operation.',
    },
    {
        id: 'balance',
        label: 'Balance',
        color: '#e5e7eb',
        accent: 'rgba(229,231,235,0.06)',
        tag: 'Adaptive Response',
        specs: [
            { key: 'Fan Profile', val: 'Adaptive Curve' },
            { key: 'CPU TDP', val: 'Dynamic Boost' },
            { key: 'Refresh Rate', val: 'Auto' },
            { key: 'Keyboard Backlight', val: 'System Default' },
        ],
        desc: 'Dynamic thermal response that scales with workload demand. System resources allocated proportionally — no fixed ceiling on compute or thermal output.',
    },
    {
        id: 'performance',
        label: 'Performance',
        color: '#ef4444',
        accent: 'rgba(239,68,68,0.1)',
        tag: 'Maximum Throughput',
        specs: [
            { key: 'Fan Profile', val: 'Aggressive Curve' },
            { key: 'CPU TDP', val: 'Max Sustained' },
            { key: 'Refresh Rate', val: '165 Hz Unlocked' },
            { key: 'Keyboard Backlight', val: 'Full Brightness' },
        ],
        desc: 'Full power delivery to CPU and GPU. Fan curves maximized for sustained thermal headroom. Peak TDP maintained under continuous load. No throttle limits.',
    },
    {
        id: 'custom',
        label: 'Custom',
        color: '#a855f7',
        accent: 'rgba(168,85,247,0.1)',
        tag: 'User-Defined',
        specs: [
            { key: 'Fan Profile', val: 'User Curve' },
            { key: 'CPU TDP', val: 'Manual Override' },
            { key: 'Refresh Rate', val: 'User-Defined' },
            { key: 'Keyboard Backlight', val: 'Custom' },
        ],
        desc: 'Full manual control over every parameter. Fan curves, power limits, refresh rates, and display settings are individually configurable through the configuration registry.',
    },
]

export default function PerformanceModes() {
    const [active, setActive] = useState('balance')
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    const mode = MODES.find((m) => m.id === active)

    return (
        <section id="performance" className="bg-[#0b0f14] border-t border-white/[0.04]">
            <div className="max-w-7xl mx-auto px-6 py-20">
                {/* Header */}
                <div ref={ref}>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-px bg-white/10" />
                        <span className="font-mono-code text-[9px] text-white/20 uppercase tracking-[0.22em]">
                            Performance Modes
                        </span>
                    </div>
                    <motion.h2
                        className="text-[28px] font-black text-white tracking-tight uppercase mb-2"
                        initial={{ opacity: 0, y: 12 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                    >
                        Thermal Operating Modes
                    </motion.h2>
                    <motion.p
                        className="text-[12px] text-white/25 font-medium mb-12 max-w-md leading-relaxed"
                        initial={{ opacity: 0, y: 12 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.28, delay: 0.06, ease: 'easeOut' }}
                    >
                        Four defined thermal envelopes with distinct power policies. Direct Fn+Q integration maps each mode to hardware state.
                    </motion.p>
                </div>

                {/* Mode selector */}
                <motion.div
                    className="flex items-end gap-0 border-b border-white/[0.06] mb-10"
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.28, delay: 0.1, ease: 'easeOut' }}
                >
                    {MODES.map((m) => {
                        const isActive = m.id === active
                        return (
                            <button
                                key={m.id}
                                onClick={() => setActive(m.id)}
                                className={`relative px-6 py-3 text-[10px] font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer ${isActive ? 'text-white' : 'text-white/20 hover:text-white/50'
                                    }`}
                                style={{ outline: 'none', background: 'none', border: 'none' }}
                            >
                                {m.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="mode-indicator"
                                        className="absolute bottom-0 left-0 right-0 h-px"
                                        style={{ backgroundColor: m.color }}
                                        transition={{ duration: 0.2, ease: 'easeOut' }}
                                    />
                                )}
                            </button>
                        )
                    })}
                </motion.div>

                {/* Mode panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="rounded-[14px] border border-white/[0.05] overflow-hidden"
                        style={{ background: mode.accent }}
                    >
                        <div className="flex flex-col md:flex-row gap-0">
                            {/* Left: description */}
                            <div className="flex-1 p-8 md:border-r border-white/[0.04]">
                                <div className="flex items-center gap-2 mb-4">
                                    <span
                                        className="w-1.5 h-1.5 rounded-sm rotate-45"
                                        style={{ backgroundColor: mode.color }}
                                    />
                                    <span className="font-mono-code text-[8.5px] uppercase tracking-[0.2em]" style={{ color: mode.color }}>
                                        {mode.tag}
                                    </span>
                                </div>
                                <h3
                                    className="text-[22px] font-black uppercase tracking-tight mb-3"
                                    style={{ color: mode.color === '#e5e7eb' ? '#ffffff' : mode.color }}
                                >
                                    {mode.label} Mode
                                </h3>
                                <p className="text-[12px] text-white/30 leading-relaxed font-medium max-w-xs">
                                    {mode.desc}
                                </p>
                            </div>

                            {/* Right: specs table */}
                            <div className="flex-1 p-8">
                                <div className="flex flex-col gap-0">
                                    {mode.specs.map((s, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-between py-3 border-b border-white/[0.04] last:border-0"
                                        >
                                            <span className="text-[10px] font-semibold text-white/25 uppercase tracking-[0.12em]">
                                                {s.key}
                                            </span>
                                            <span
                                                className="font-mono-code text-[10px] font-semibold"
                                                style={{ color: mode.color === '#e5e7eb' ? 'rgba(255,255,255,0.7)' : mode.color }}
                                            >
                                                {s.val}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
