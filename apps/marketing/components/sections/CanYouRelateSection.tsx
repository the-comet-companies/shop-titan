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

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.07 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function CanYouRelateSection() {
    return (
        <section id="can-you-relate" className="py-24 md:py-32 bg-surface dark:bg-gray-950 relative overflow-hidden">
            {/* Top divider */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
            {/* Micro grid texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-mobile relative z-10">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="mb-16 md:mb-20 max-w-2xl"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 text-xs font-bold tracking-wider uppercase mb-4">
                        Can You Relate?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-charcoal dark:text-white leading-tight mb-4">
                        If any of these sound familiar,
                        <br />
                        <span className="text-secondary-text dark:text-gray-500">keep reading.</span>
                    </h2>
                </motion.div>

                {/* Pain point grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {painPoints.map((point) => (
                        <motion.div
                            key={point.number}
                            variants={cardVariants}
                            className="group relative p-6 md:p-7 rounded-2xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-rose-200 dark:hover:border-rose-900/60 transition-colors duration-300 overflow-hidden"
                        >
                            {/* Hover glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/0 group-hover:bg-rose-500/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />

                            <span className="block text-xs font-bold tracking-widest text-secondary-text dark:text-gray-600 uppercase mb-3">
                                {point.number}
                            </span>
                            <p className="text-base md:text-lg font-bold text-charcoal dark:text-white leading-snug mb-2">
                                {point.headline}
                            </p>
                            <p className="text-sm text-secondary-text dark:text-gray-500 font-medium leading-relaxed">
                                {point.consequence}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bridge to features */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                    className="mt-16 md:mt-20 flex flex-col items-center text-center gap-6"
                >
                    <p className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white">
                        Every one of these has a fix.
                    </p>
                    <button
                        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-10 py-5 text-xl font-semibold text-charcoal dark:text-white relative overflow-hidden group rounded-full inline-flex items-center gap-2 justify-center"
                    >
                        <div className="absolute inset-0 bg-white/20 dark:bg-white/8 group-hover:bg-white/30 dark:group-hover:bg-white/12 transition-colors rounded-full" />
                        <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-charcoal/30 dark:group-hover:border-white/40 transition-colors rounded-full" />
                        <span className="relative z-10">See How It Works</span>
                        <span className="material-symbols-outlined text-xl relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
