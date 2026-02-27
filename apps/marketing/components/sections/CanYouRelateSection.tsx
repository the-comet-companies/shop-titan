'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const TOTAL_CARDS = 10;

const painPoints = [
    {
        number: "01",
        headline: "Your orders live in 6 different places.",
        consequence: "And everyone's working off a different version.",
    },
    {
        number: "02",
        headline: "Your production schedule is a whiteboard.",
        consequence: "One rush job and the whole day falls apart.",
    },
    {
        number: "03",
        headline: "You enter the same order four times.",
        consequence: "Quotes. Production sheets. Invoices. Inventory. Every single time.",
    },
    {
        number: "04",
        headline: '"Where is this order?" gets asked 10 times a day.',
        consequence: "And nobody has a real answer.",
    },
    {
        number: "05",
        headline: "You find out a job lost money weeks after it shipped.",
        consequence: "Because labor, machine time, and reprints were never tracked.",
    },
    {
        number: "06",
        headline: "Your sales rep just guessed on that quote.",
        consequence: "And you won't know if it was profitable until it's too late.",
    },
    {
        number: "07",
        headline: "The wrong artwork version got printed.",
        consequence: "Again.",
    },
    {
        number: "08",
        headline: "You ran out of blanks mid-production.",
        consequence: "Because nobody knew stock was low until it was too late.",
    },
    {
        number: "09",
        headline: "The shop slows down every time you leave.",
        consequence: "Because the system only works when you're in it.",
    },
    {
        number: "10",
        headline: "What worked at 5 employees is breaking at 20.",
        consequence: "Because you built the system for where you were, not where you're going.",
    },
];

function AnimatedCard({ point, visible, index }: { point: typeof painPoints[0]; visible: boolean; index: number }) {
    const prefersReduced = useReducedMotion();

    return (
        <motion.div
            data-index={index}
            initial={false}
            animate={visible
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: prefersReduced ? 1 : 0.88 }
            }
            transition={visible && !prefersReduced
                ? { type: 'spring', stiffness: 280, damping: 22 }
                : { duration: prefersReduced ? 0.15 : 0 }
            }
            className="relative p-3 md:p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden group min-w-0"
        >
            {/* Hover glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/0 group-hover:bg-rose-500/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
            <span className="block text-[10px] font-bold tracking-widest text-secondary-text dark:text-gray-600 uppercase mb-1.5">
                {point.number}
            </span>
            <p className="text-sm font-bold text-charcoal dark:text-white leading-snug mb-1">
                {point.headline}
            </p>
            <p className="text-xs text-secondary-text dark:text-gray-500 font-medium leading-relaxed">
                {point.consequence}
            </p>
        </motion.div>
    );
}

export default function CanYouRelateSection() {
    const outerRef = useRef<HTMLDivElement>(null);

    return (
        // Mobile & Desktop: natural flowing height
        <div ref={outerRef} className="w-full">
            <section
                id="can-you-relate"
                className="flex flex-col bg-surface dark:bg-gray-950 relative"
            >
                {/* Transition gradient from PainPoint3D */}
                <div className="absolute top-0 inset-x-0 h-56 bg-gradient-to-b from-black to-transparent pointer-events-none z-0" />
                {/* Micro grid texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                {/* Content wrapper */}
                <div className="relative z-10 md:flex-1 flex flex-col max-w-7xl mx-auto w-full px-mobile py-6 md:py-8 lg:py-12 md:min-h-0">

                    {/* Header */}
                    <div className="flex-shrink-0 mb-8 md:mb-12">
                        <div className="flex items-end justify-between gap-4">
                            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                                We&apos;ve heard all of these.
                                <br />
                                <span className="text-gray-400">Usually in the same conversation.</span>
                            </h2>
                        </div>
                    </div>

                    {/* Grid wrapper */}
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                            {painPoints.map((point, index) => (
                                <motion.div
                                    key={point.number}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index % 2 === 0 ? 0 : 0.1 }}
                                    className="h-full"
                                >
                                    <AnimatedCard
                                        point={point}
                                        visible={true}
                                        index={index}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Bridge CTA */}
                        <motion.div
                            className="pt-10 pb-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <button
                                onClick={() => document.getElementById('workflow-video')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3 min-h-[44px] text-base font-semibold text-charcoal dark:text-white relative overflow-hidden group rounded-full inline-flex items-center gap-2 justify-center flex-shrink-0"
                            >
                                <div className="absolute inset-0 bg-white/20 dark:bg-white/8 group-hover:bg-white/30 dark:group-hover:bg-white/12 transition-colors rounded-full" />
                                <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-charcoal/30 dark:group-hover:border-white/40 transition-colors rounded-full" />
                                <span className="relative z-10">See How It Works</span>
                                <span className="material-symbols-outlined text-lg relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
                            </button>
                        </motion.div>
                    </div>

                </div>
            </section>
        </div>
    );
}
