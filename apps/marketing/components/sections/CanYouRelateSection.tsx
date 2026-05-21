'use client';

import { motion } from 'framer-motion';

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

export default function CanYouRelateSection() {
    return (
        <section
            id="can-you-relate"
            className="bg-ivory dark:bg-gray-950 py-20 md:py-28"
        >
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
                            The Pattern
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="text-3xl md:text-5xl font-light text-charcoal dark:text-white leading-[1.05] tracking-tight"
                        >
                            We&apos;ve heard all of these.{' '}
                            <span className="italic font-extralight text-graphite">Usually in the same conversation.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-7 lg:pt-2 text-lg md:text-xl text-graphite dark:text-gray-400 leading-relaxed font-light max-w-xl"
                    >
                        Ten quiet failures that compound until something breaks loudly. None of them on their own is a crisis. Together, they are why your shop feels harder to run than it should.
                    </motion.p>
                </div>

                {/* Pain points list - 2 columns with hairline dividers */}
                <div className="border-t border-line">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {painPoints.map((point, index) => (
                            <motion.div
                                key={point.number}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
                                className={`flex items-baseline gap-5 py-6 md:py-7 border-b border-line ${
                                    index % 2 === 0 ? 'md:border-r md:pr-8' : 'md:pl-8'
                                }`}
                            >
                                <span className="flex-shrink-0 text-[10px] tracking-[0.22em] uppercase text-graphite font-medium w-7 pt-1">
                                    {point.number}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-base md:text-lg text-charcoal dark:text-white font-light leading-snug mb-2 tracking-tight">
                                        {point.headline}
                                    </p>
                                    <p className="text-sm text-graphite dark:text-gray-500 font-light leading-relaxed">
                                        {point.consequence}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
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
                            We have solutions for all of these.
                        </p>
                        <span className="h-px w-10 bg-charcoal" />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <a
                            href="/reach-out"
                            className="w-full sm:w-auto px-7 py-3.5 min-h-[44px] text-sm tracking-wide font-medium bg-charcoal text-ivory rounded-[6px] hover:bg-black transition-colors inline-flex items-center justify-center gap-2 group"
                        >
                            <span>Let&apos;s Talk</span>
                            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
                        </a>
                        <button
                            onClick={() => document.getElementById('workflow-video')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto px-7 py-3.5 min-h-[44px] text-sm tracking-wide font-medium border border-charcoal text-charcoal rounded-[6px] hover:bg-charcoal hover:text-ivory dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-charcoal transition-colors inline-flex items-center justify-center"
                        >
                            See How It Works
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
