import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const MODES = [
    {
        id: 'quiet',
        label: 'Quiet',
        color: '#2563eb', // Darker blue
        accent: 'rgba(37,99,235,0.06)',
        tag: 'Thermal Efficiency',
        specs: [
            { key: 'Power Envelope', val: 'Constrained' },
            { key: 'Fan Curve', val: 'Low Acoustic Bias' },
            { key: 'CPU PL1 / PL2', val: 'Reduced' },
            { key: 'GPU Policy', val: 'Efficiency Priority' },
        ],
        desc: 'Prioritizes acoustic performance and thermal efficiency. Compute limits constrained to extend battery lifecycle. Fan curves suppressed to near-silent operation.',
    },
    {
        id: 'balance',
        label: 'Balance',
        color: '#a1a1aa', // Darker gray
        accent: 'rgba(161,161,170,0.04)',
        tag: 'Adaptive Response',
        specs: [
            { key: 'Power Envelope', val: 'Dynamic Scaling' },
            { key: 'Fan Curve', val: 'Adaptive' },
            { key: 'CPU PL1 / PL2', val: 'Balanced' },
            { key: 'GPU Policy', val: 'Hybrid Boost' },
        ],
        desc: 'Dynamic thermal response scaling with workload demand. Hardware resources allocated proportionally — no fixed ceiling on thermal output.',
    },
    {
        id: 'performance',
        label: 'Performance',
        color: '#dc2626', // Darker red
        accent: 'rgba(220,38,38,0.06)',
        tag: 'Maximum Throughput',
        specs: [
            { key: 'Power Envelope', val: 'Maximum Sustained' },
            { key: 'Fan Curve', val: 'Aggressive' },
            { key: 'CPU PL1 / PL2', val: 'Elevated' },
            { key: 'GPU Policy', val: 'Performance Priority' },
        ],
        desc: 'Unrestricted power delivery to CPU and GPU. Fan curves maximized for sustained thermal headroom. Peak TDP maintained under continuous load without throttle limits.',
    },
    {
        id: 'custom',
        label: 'Custom',
        color: '#9333ea', // Darker purple
        accent: 'rgba(147,51,234,0.06)',
        tag: 'User-Defined',
        specs: [
            { key: 'Power Envelope', val: 'User Defined' },
            { key: 'Fan Curve', val: 'Manual Curve' },
            { key: 'CPU Limits', val: 'User Controlled' },
            { key: 'GPU Policy', val: 'User Override' },
        ],
        desc: 'Full manual control over configuration registers. Fan curves, power limits, and display timings are individually addressable through the engine UI.',
    },
]

export default function PerformanceModes() {
    const [active, setActive] = useState('balance')
    const panelRef = useRef(null)

    // Dispatch event to update background color
    useEffect(() => {
        window.dispatchEvent(new CustomEvent('themeChange', { detail: { id: active } }));
    }, [active]);

    // GSAP Animation for mode switch
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(panelRef.current,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
            )
        }, panelRef)
        return () => ctx.revert()
    }, [active])

    const mode = MODES.find((m) => m.id === active)

    return (
        <section id="performance" className="bg-transparent border-t border-white/[0.04]">
            <div className="max-w-7xl mx-auto px-6 py-20">
                {/* Header */}
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-px bg-white/10" />
                        <span className="font-mono-code text-[9px] text-white/20 uppercase tracking-[0.22em]">
                            Performance Modes
                        </span>
                    </div>
                    <h2 className="text-[28px] font-[900] tracking-[-0.02em] text-white uppercase mb-2">
                        Thermal Operating Modes
                    </h2>
                    <p className="text-[12px] text-white/20 font-medium mb-12 max-w-md leading-[1.6]">
                        Four defined thermal envelopes with distinct power policies. Direct Fn+Q integration maps each mode to specific hardware execution variants.
                    </p>
                </div>

                {/* Mode selector */}
                <div className="relative mb-10 transition-colors duration-300 w-full rounded-full p-1 flex justify-center" style={{ background: mode.accent }}>
                    <div className="relative flex w-full max-w-2xl" role="tablist">
                        {MODES.map((m, idx) => {
                            const isActive = m.id === active
                            return (
                                <button
                                    key={m.id}
                                    role="tab"
                                    onClick={() => setActive(m.id)}
                                    className={`relative z-10 flex-1 text-center text-[13px] font-semibold py-2 px-4 cursor-pointer transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/40'}`}
                                    style={{ background: 'none', border: 'none' }}
                                >
                                    {m.label}
                                </button>
                            )
                        })}
                        <div
                            className="absolute top-0 bottom-0 left-0 rounded-full z-0 transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(${MODES.findIndex(s => s.id === active) * 100}%)`, width: `${100 / MODES.length}%`, background: mode.color }}
                        />
                    </div>
                </div>

                {/* Mode panel */}
                <div
                    ref={panelRef}
                    className="rounded-[14px] border border-white/[0.05] overflow-hidden transition-colors duration-300"
                    style={{ background: mode.accent }}
                >
                    <div className="flex flex-col md:flex-row gap-0">
                        {/* Left: description */}
                        <div className="flex-1 p-8 md:border-r border-white/[0.04]">
                            <div className="flex items-center gap-2 mb-4">
                                <span
                                    className="w-1.5 h-1.5 rounded-sm rotate-45 transition-colors duration-300"
                                    style={{ backgroundColor: mode.color }}
                                />
                                <span className="font-mono-code text-[8.5px] uppercase tracking-[0.2em] transition-colors duration-300" style={{ color: mode.color }}>
                                    {mode.tag}
                                </span>
                            </div>
                            <h3
                                className="text-[22px] font-[900] uppercase tracking-[-0.02em] mb-3 transition-colors duration-300"
                                style={{ color: mode.color === '#a1a1aa' ? '#ffffff' : mode.color }}
                            >
                                {mode.label} Mode
                            </h3>
                            <p className="text-[11.5px] text-white/25 leading-[1.65] font-medium max-w-xs">
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
                                            className="font-mono-code text-[10px] font-semibold transition-colors duration-300"
                                            style={{ color: mode.color === '#94a3b8' ? 'rgba(255,255,255,0.7)' : mode.color }}
                                        >
                                            {s.val}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
