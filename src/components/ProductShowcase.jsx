import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SECTIONS = [
    {
        id: 'hardware-telemetry',
        label: 'Hardware Telemetry',
        title: 'Real-Time Hardware Telemetry',
        desc: 'Direct register access for CPU and GPU thermal indexing, clock frequency tracking, and fan RPM monitoring. Sub-millisecond telemetry response with no OS scheduling overhead.',
        image: '/Images/dashboard.png',
        tag: 'Subsystem Monitor',
    },
    {
        id: 'performance-logic',
        label: 'Performance Logic',
        title: 'Performance Logic & Thermal Control',
        desc: 'Native Fn+Q state management for immediate thermal mode transitions. Direct integration with power envelopes, refresh rate control, and CPU TDP profiles.',
        image: '/Images/performance.png',
        tag: 'Thermal Engine',
        reverse: true,
    },
    {
        id: 'hid-lighting',
        label: 'HID Lighting Engine',
        title: 'HID Lighting Engine',
        desc: 'Per-zone RGB control via hardware-level USB HID commands. Bypasses OS scheduling entirely — direct register-level lighting with bit-perfect timing and hardware-synced frames.',
        image: '/Images/lighting.png',
        tag: 'Lighting Subsystem',
    },
    {
        id: 'power-subsystem',
        label: 'Power Subsystem',
        title: 'Power Subsystem Analytics',
        desc: 'Precision discharge rate tracking via embedded controller interface. Full battery health lifecycle data with cycle counts and firmware-level verification.',
        image: '/Images/power1.png',
        tag: 'Power Management',
        reverse: true,
    },
    {
        id: 'automation-layer',
        label: 'Automation Layer',
        title: 'Automation Layer',
        desc: 'Event-driven system profile management. Internal state machine responds to AC/DC transitions, thermal thresholds, and schedule triggers — with zero manual intervention.',
        image: '/Images/automation.png',
        tag: 'State Machine',
    },
    {
        id: 'execution-engine',
        label: 'Execution Engine',
        title: 'Execution Engine & Input Sequencing',
        desc: 'High-speed macro processing with direct HID buffer mapping. Input sequencing at hardware latency levels. Zero perceptible lag between trigger and execution.',
        image: '/Images/macros.png',
        tag: 'Input Engine',
        reverse: true,
    },
    {
        id: 'engine-overrides',
        label: 'Engine Overrides',
        title: 'Engine Overrides & Driver Config',
        desc: 'Direct access to driver-level configuration registers. Manual override pathways for hardware synchronization, binary execution targets, and notification dispatch.',
        image: '/Images/settings1.png',
        tag: 'System Config',
    },
]

function ShowcaseRow({ section, index }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <div
            ref={ref}
            id={section.id}
            className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16 py-16 px-6 border-t border-white/[0.04]`}
        >
            {/* Text side */}
            <motion.div
                className="flex-1 min-w-0"
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.28, delay: 0.05, ease: 'easeOut' }}
            >
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-1 h-1 rotate-45 bg-[#e8644a] shrink-0" />
                    <span className="font-mono-code text-[8.5px] text-white/25 uppercase tracking-[0.2em]">
                        {section.tag}
                    </span>
                </div>
                <h2 className="text-[17px] font-black text-white tracking-tight leading-snug mb-3 uppercase">
                    {section.title}
                </h2>
                <p className="text-[12px] text-white/30 leading-relaxed max-w-xs font-medium">
                    {section.desc}
                </p>
            </motion.div>

            {/* Screenshot side */}
            <motion.div
                className="flex-[1.7] w-full max-w-2xl"
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.28, delay: 0.1, ease: 'easeOut' }}
            >
                <div className="bg-[#11161d] rounded-[14px] p-px border border-white/[0.07] shadow-[0_16px_48px_rgba(0,0,0,0.55)] overflow-hidden">
                    <div className="rounded-[13px] overflow-hidden bg-[#0d1117]">
                        <img
                            src={section.image}
                            alt={section.label}
                            className="w-full h-auto block"
                            loading="lazy"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default function ProductShowcase() {
    return (
        <section id="features" className="bg-[#0b0f14]">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="px-6 pt-20 pb-2">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-px bg-white/10" />
                        <span className="font-mono-code text-[9px] text-white/20 uppercase tracking-[0.22em]">
                            Inside LOQ Nova
                        </span>
                    </div>
                    <h2 className="text-[28px] font-black text-white tracking-tight uppercase max-w-lg">
                        System-Level Architecture
                    </h2>
                    <p className="text-[12px] text-white/25 font-medium mt-2 max-w-sm leading-relaxed">
                        Every subsystem built for direct hardware access — no abstraction layers, no overhead services.
                    </p>
                </div>

                {/* Rows */}
                {SECTIONS.map((section, i) => (
                    <ShowcaseRow key={section.id} section={section} index={i} />
                ))}
            </div>
        </section>
    )
}
