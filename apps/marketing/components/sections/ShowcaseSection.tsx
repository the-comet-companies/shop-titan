'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "Shop Titan transformed how we handle custom orders. What used to take our team hours now gets done in minutes. It's the single biggest upgrade we've made.",
        author: "Sarah Martinez",
        role: "Owner",
        company: "Premier Embroidery Co.",
    },
    {
        quote: "The single source of truth concept is revolutionary. No more hunting for information across spreadsheets — everything is exactly where you expect it.",
        author: "Michael Chen",
        role: "Production Manager",
        company: "Elite Screen Printing",
    },
    {
        quote: "We scaled from 5 to 20 employees without losing our minds. The system handles everything — orders, scheduling, QC. I can't imagine running the shop without it.",
        author: "Jessica Williams",
        role: "CEO",
        company: "Custom Apparel Solutions",
    },
    {
        quote: "Pricing matrices alone saved us from so many costly mistakes. Our quotes go out in seconds now, and customers love the turnaround.",
        author: "David Park",
        role: "Owner",
        company: "Park Print & Promo",
    },
    {
        quote: "Rush job coordination used to be pure chaos. Now it's a few clicks and everyone knows exactly what to do. Night and day difference.",
        author: "Tanya Rhodes",
        role: "Shop Manager",
        company: "FastTurn Apparel",
    },
];

export default function ShowcaseSection() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);

    const go = useCallback((next: number, dir: 1 | -1) => {
        setDirection(dir);
        setCurrent((next + testimonials.length) % testimonials.length);
    }, []);

    const prev = () => go(current - 1, -1);
    const next = () => go(current + 1, 1);

    // Auto-advance every 6 s
    useEffect(() => {
        const t = setInterval(() => go(current + 1, 1), 6000);
        return () => clearInterval(t);
    }, [current, go]);

    const slide = {
        enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
        center: { opacity: 1, x: 0 },
        exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
    };

    const t = testimonials[current];

    return (
        <section id="showcase" className="bg-gray-100 py-20 md:py-28 overflow-hidden">
            <style>{`
                @keyframes progress-fill {
                    from { transform: scaleX(0); }
                    to   { transform: scaleX(1); }
                }
                .dot-progress {
                    animation: progress-fill 6s linear forwards;
                    transform-origin: left;
                }
            `}</style>
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-5">
                        Trusted by Shops
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight tracking-tight">
                        Real shops. Real results.
                    </h2>
                    <p className="mt-4 text-secondary-text text-lg max-w-2xl mx-auto">
                        No demos. No cherry-picked screenshots. Just what print and embroidery shops say after using it.
                    </p>
                </motion.div>

                {/* Giant quote mark */}
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-[120px] leading-none text-primary/20 font-serif select-none mb-2 -mt-6"
                    aria-hidden="true"
                >
                    &ldquo;
                </motion.div>

                {/* Sliding quote */}
                <div className="relative min-h-[180px] md:min-h-[140px] flex items-center justify-center">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={slide}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-6"
                        >
                            <p className="text-xl md:text-2xl font-medium text-charcoal leading-relaxed max-w-3xl">
                                {t.quote}
                            </p>

                            <div className="flex flex-col items-center gap-0.5">
                                <span className="text-base font-bold text-charcoal tracking-wide">
                                    {t.author}
                                </span>
                                <span className="text-sm text-secondary-text">
                                    {t.role} &middot; {t.company}
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls row */}
                <div className="mt-12 flex items-center justify-center gap-8">

                    {/* Prev arrow */}
                    <button
                        onClick={prev}
                        className="w-10 h-10 rounded-full border border-structural-border bg-white hover:bg-primary hover:border-primary hover:text-white text-charcoal flex items-center justify-center transition-all duration-200 shadow-sm"
                        aria-label="Previous testimonial"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="10 12 6 8 10 4" />
                        </svg>
                    </button>

                    {/* Dot indicators */}
                    <div className="flex items-center gap-2.5">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => go(i, i > current ? 1 : -1)}
                                aria-label={`Go to testimonial ${i + 1}`}
                                className={`relative rounded-full overflow-hidden transition-all duration-300 ${i === current
                                        ? 'w-10 h-2.5 bg-primary/20'
                                        : 'w-2.5 h-2.5 bg-charcoal/20 hover:bg-charcoal/40'
                                    }`}
                            >
                                {i === current && (
                                    <span
                                        key={current}
                                        className="dot-progress absolute inset-y-0 left-0 right-0 bg-primary rounded-full"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Next arrow */}
                    <button
                        onClick={next}
                        className="w-10 h-10 rounded-full border border-structural-border bg-white hover:bg-primary hover:border-primary hover:text-white text-charcoal flex items-center justify-center transition-all duration-200 shadow-sm"
                        aria-label="Next testimonial"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 4 10 8 6 12" />
                        </svg>
                    </button>

                </div>

            </div>
        </section>
    );
}
