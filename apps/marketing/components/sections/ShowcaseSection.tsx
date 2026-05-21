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
        quote: "The single source of truth concept is revolutionary. No more hunting for information across spreadsheets. Everything is exactly where you expect it.",
        author: "Michael Chen",
        role: "Production Manager",
        company: "Elite Screen Printing",
    },
    {
        quote: "We scaled from 5 to 20 employees without losing our minds. The system handles everything: orders, scheduling, QC. I can't imagine running the shop without it.",
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

    const go = useCallback((next: number) => {
        setCurrent((next + testimonials.length) % testimonials.length);
    }, []);

    const prev = () => go(current - 1);
    const next = () => go(current + 1);

    useEffect(() => {
        const t = setInterval(() => go(current + 1), 6000);
        return () => clearInterval(t);
    }, [current, go]);

    const t = testimonials[current];
    const counter = `${String(current + 1).padStart(2, '0')} / ${String(testimonials.length).padStart(2, '0')}`;

    return (
        <section id="showcase" className="bg-ivory dark:bg-gray-950 py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-mobile">

                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-20">
                    <div className="lg:col-span-5">
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="inline-block text-[11px] tracking-[0.22em] uppercase text-graphite font-medium mb-6"
                        >
                            Trusted by Shops
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="text-3xl md:text-5xl font-light text-charcoal dark:text-white leading-[1.05] tracking-tight"
                        >
                            Real shops.{' '}
                            <span className="italic font-extralight text-graphite">Real results.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-7 lg:pt-2 text-lg md:text-xl text-graphite dark:text-gray-400 leading-relaxed font-light max-w-xl"
                    >
                        No demos. No cherry-picked screenshots. Just what print and embroidery shops say after using it.
                    </motion.p>
                </div>

                {/* Testimonial editorial block */}
                <div className="border-t border-line">
                    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[340px]">

                        {/* Left: counter + author */}
                        <div className="lg:col-span-4 py-10 md:py-12 lg:pr-10 lg:border-r border-line flex flex-col justify-between border-b lg:border-b-0 border-line">
                            <div className="flex items-baseline gap-4">
                                <span className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium">
                                    {counter}
                                </span>
                                <span className="h-px flex-1 bg-line" />
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.35 }}
                                    className="mt-8 lg:mt-0"
                                >
                                    <p className="text-base text-charcoal dark:text-white font-medium tracking-tight mb-1">
                                        {t.author}
                                    </p>
                                    <p className="text-sm text-graphite dark:text-gray-500 font-light">
                                        {t.role}, {t.company}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right: quote */}
                        <div className="lg:col-span-8 py-10 md:py-12 lg:pl-12">
                            <AnimatePresence mode="wait">
                                <motion.blockquote
                                    key={current}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-xl md:text-2xl lg:text-3xl text-charcoal dark:text-white font-light leading-snug tracking-tight"
                                    style={{ fontFamily: 'var(--font-crimson), serif' }}
                                >
                                    <span className="italic">&ldquo;{t.quote}&rdquo;</span>
                                </motion.blockquote>
                            </AnimatePresence>
                        </div>

                    </div>

                    {/* Navigation bar */}
                    <div className="border-t border-line flex items-stretch">
                        <button
                            onClick={prev}
                            className="px-5 py-4 text-graphite hover:text-charcoal hover:bg-stone transition-colors border-r border-line flex items-center justify-center"
                            aria-label="Previous testimonial"
                        >
                            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'wght' 250" }}>arrow_back</span>
                        </button>

                        <div className="flex-1 flex items-stretch">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => go(i)}
                                    className="flex-1 relative group border-r border-line last:border-r-0"
                                    aria-label={`Go to testimonial ${i + 1}`}
                                >
                                    <span
                                        className={`absolute inset-x-0 top-0 h-px transition-colors ${
                                            i === current
                                                ? 'bg-charcoal dark:bg-white'
                                                : 'bg-transparent group-hover:bg-charcoal/30'
                                        }`}
                                    />
                                    <span className="block py-3 text-[10px] tracking-[0.22em] uppercase font-medium text-graphite group-hover:text-charcoal transition-colors">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="px-5 py-4 text-graphite hover:text-charcoal hover:bg-stone transition-colors border-l border-line flex items-center justify-center"
                            aria-label="Next testimonial"
                        >
                            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'wght' 250" }}>arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Bridge CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mt-16 md:mt-20 flex flex-col items-center gap-8"
                >
                    <div className="flex items-center gap-3">
                        <span className="h-px w-10 bg-charcoal" />
                        <p className="text-base md:text-lg text-charcoal dark:text-white font-light tracking-tight">
                            Join them.
                        </p>
                        <span className="h-px w-10 bg-charcoal" />
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <a
                            href="/reach-out"
                            className="px-7 py-3.5 min-h-[44px] text-sm tracking-wide font-medium bg-charcoal text-ivory rounded-[6px] hover:bg-black transition-colors inline-flex items-center justify-center gap-2 group"
                        >
                            <span>Let&apos;s Talk</span>
                            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
                        </a>
                        <p className="text-sm text-graphite font-light">
                            See why shops like yours switched to Shop Titan.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
