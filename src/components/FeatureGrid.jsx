import { Cpu, Activity, Zap } from 'lucide-react'

const FEATURES = [
  {
    id: '1',
    title: 'Direct Hardware Access',
    description: 'Bypass OS abstraction layers. Write directly to embedded controller registers for zero-latency subsystem management.',
    icon: Cpu,
  },
  {
    id: '2',
    title: 'Thermal Telemetry',
    description: 'Native polling. Accurate die temperature and power draw data without the overhead of background monitoring bloatware.',
    icon: Activity,
  },
  {
    id: '3',
    title: 'Deterministic Logic',
    description: 'Event-driven architecture. Complex automation rules executed via a rigid, lightweight internal state machine.',
    icon: Zap,
  }
]

export default function FeatureGrid() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feat) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.id}
                className="group relative bg-[#0b0f14] border border-white/[0.04] p-8 transition-transform duration-300 ease-out hover:-translate-y-1 hover:border-white/20 will-change-transform"
              >
                <div className="mb-6 inline-flex p-3 bg-white/[0.02] border border-white/[0.04] rounded-sm group-hover:border-white/10 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-white/50 group-hover:text-white/90 transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-[14px] font-bold text-white tracking-wide uppercase mb-3">
                  {feat.title}
                </h3>
                <p className="text-[12px] text-white/30 leading-relaxed font-medium">
                  {feat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}