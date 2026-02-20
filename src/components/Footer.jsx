const GITHUB_URL = 'https://github.com/earnest-s/LoqNova'
const RELEASES_URL = 'https://github.com/earnest-s/LoqNova/releases'

export default function Footer() {
    return (
        <footer className="border-t border-white/[0.04] bg-[#0b0f14]">
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                {/* Left */}
                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                        <svg width="11" height="11" viewBox="0 0 20 20" fill="none" className="text-white/20 shrink-0">
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
                        <span className="text-[10px] font-bold tracking-[0.15em] text-white/20 uppercase">
                            LOQ Nova
                        </span>
                    </div>
                    <p className="font-mono-code text-[8.5px] text-white/12 uppercase tracking-widest">
                        Version 3.0.0
                    </p>
                    <p className="font-mono-code text-[8.5px] text-white/12 uppercase tracking-widest">
                        Built for LOQ Systems
                    </p>
                    <p className="font-mono-code text-[8.5px] text-white/10 uppercase tracking-widest mt-1">
                        © 2026 Ernest S
                    </p>
                </div>

                {/* Right */}
                <div className="flex items-center gap-7">
                    {[
                        ['Docs', '#'],
                        ['Repo', GITHUB_URL],
                        ['Builds', RELEASES_URL],
                    ].map(([label, href]) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-[9px] font-bold tracking-[0.16em] uppercase text-white/15 hover:text-white/50 transition-colors duration-200"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
