import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CardStack = ({
    items,
    offset = 15,
    scaleFactor = 0.08,
    autoAdvance = true,
    intervalMs = 2000,
    pauseOnHover = true,
    showDots = false,
    initialIndex = 0,
}) => {
    const [cards, setCards] = useState(items);
    const [isHovering, setIsHovering] = useState(false);

    // Initialize with initialIndex if needed
    useEffect(() => {
        if (initialIndex > 0 && initialIndex < items.length) {
            const newItems = [...items];
            const itemsToMove = newItems.splice(0, initialIndex);
            setCards([...newItems, ...itemsToMove]);
        }
    }, [initialIndex, items]);

    useEffect(() => {
        if (!autoAdvance) return;
        if (pauseOnHover && isHovering) return;

        const interval = setInterval(() => {
            setCards((prevCards) => {
                const newArray = [...prevCards];
                // Move the top card to the back
                newArray.push(newArray.shift());
                return newArray;
            });
        }, intervalMs);

        return () => clearInterval(interval);
    }, [autoAdvance, intervalMs, pauseOnHover, isHovering]);

    return (
        <div
            className="relative h-[400px] w-full max-w-[600px] mx-auto perspective-1000"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="absolute inset-x-0 bottom-[-40px] flex justify-center gap-2">
                {showDots && items.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${cards[0].id === items[i].id ? "w-6 bg-white" : "bg-white/20"}`}
                    />
                ))}
            </div>

            <AnimatePresence>
                {cards.map((card, index) => {
                    return (
                        <motion.div
                            layoutId={`card-${card.id}`}
                            key={card.id}
                            className="absolute h-full w-full rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col justify-end"
                            style={{
                                transformOrigin: "bottom center",
                            }}
                            animate={{
                                top: index * -offset,
                                scale: 1 - index * scaleFactor,
                                zIndex: cards.length - index,
                                opacity: index > 2 ? 0 : 1 - index * 0.2, // Fade out cards that are too far back
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.32, 0.72, 0, 1], // Custom easing for smooth fluid motion
                            }}
                        >
                            {/* Image Background */}
                            <div
                                className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                                style={{ backgroundImage: `url(${card.imageSrc})` }}
                            />
                            {/* Dark background behind the contained image */}
                            <div className="absolute inset-0 z-[-1] bg-[#0b0f14]" />

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

                            {/* Content */}
                            <div className="relative z-20 p-8 pt-20">
                                <a
                                    href={card.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block group"
                                >
                                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2 flex items-center gap-3">
                                        {card.title}
                                        <svg className="w-5 h-5 opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </h3>
                                </a>
                                <p className="text-white/70 text-sm md:text-base font-medium max-w-sm">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};
