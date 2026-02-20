import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const METRICS = [
    {
        value: '< 0.5%',
        unit: 'CPU Idle',
        desc: 'Background process footprint under zero-load conditions.',
    },
    {
        value: '~4 MB',
        unit: 'RAM Usage',
        desc: 'Near-zero working set. No heap bloat, no cached modules.',
    },
    {
        value: '0',
        unit: 'OEM Services',
        desc: 'No background services. No system tray agents. No schedulers.',
    },
    {
        value: 'Direct',
        unit: 'HW Integration',
        desc: 'USB HID and WMI interfaces accessed natively — no intermediary drivers.',
    },
]

const PROPERTIES = [
    'Single executable — no installer required',
    'Zero system service registration',
    'No auto-start unless explicitly configured',
    'All state persisted to a single local config file',
    'Hardware access via native Windows APIs only',
    'Fully portable — no registry dependencies',
]

export default function Architecture() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="bg-[#0d1117] border-t border-white/[0.04]">
            <div className="max-w-7xl mx-auto px-6 py-20" ref={ref}>
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-px bg-white/10" />
                    <span className="font-mono-code text-[9px] text-white/20 uppercase tracking-[0.22em]">
                        Architecture
                    </span>
                </div>
                <motion.h2
                    className="text-[28px] font-black text-white tracking-tight uppercase mb-2"
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                >
                    Lightweight by Design
                </motion.h2>
                <motion.p
                    className="text-[12px] text-white/25 font-medium mb-14 max-w-md leading-relaxed"
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.28, delay: 0.06, ease: 'easeOut' }}
                >
                    No bloat services. No persistent daemons. No OEM cruft. LOQ Nova loads
                    on demand and exits completely when closed.
                </motion.p>

                {/* Metrics grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] border border-white/[0.04] rounded-[14px] overflow-hidden mb-10"
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.28, delay: 0.1, ease: 'easeOut' }}
                >
                    {METRICS.map((m, i) => (
                        <div key={i} className="bg-[#0d1117] p-7">
                            <div className="text-[32px] font-black text-white tracking-tight leading-none mb-1">
                                {m.value}
                            </div>
                            <div className="text-[9px] font-bold text-[#e8644a] uppercase tracking-[0.16em] mb-2">
                                {m.unit}
                            </div>
                            <p className="text-[10.5px] text-white/20 leading-relaxed font-medium">{m.desc}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Properties list */}
                <motion.div
                    className="border border-white/[0.04] rounded-[14px] overflow-hidden bg-[#0b0f14]"
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.28, delay: 0.16, ease: 'easeOut' }}
                >
                    {PROPERTIES.map((p, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 px-6 py-3.5 border-b border-white/[0.04] last:border-0"
                        >
                            <span className="w-1 h-1 rotate-45 bg-white/15 shrink-0" />
                            <span className="text-[11px] font-medium text-white/35 tracking-wide">{p}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
