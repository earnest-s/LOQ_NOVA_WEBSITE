import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SectionReveal({ children, className = "" }) {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(containerRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.25,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className={`will-change-[opacity,transform] backdrop-blur-sm ${className}`}>
            {children}
        </div>
    )
}