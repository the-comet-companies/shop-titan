'use client';

import { motion } from 'framer-motion';

const LOGOS = [
    { src: '/logos/ai/openai.svg', name: 'OpenAI', invert: true },
    { src: '/logos/ai/claude-color.svg', name: 'Claude', invert: false },
    { src: '/logos/ai/gemini.svg', name: 'Gemini', invert: false },
    { src: '/logos/ai/perplexity.svg', name: 'Perplexity', invert: true },
];

export default function BenefitsSection() {
    return (
        <section id="benefits" className="pt-10 md:pt-16 pb-12 md:pb-16 bg-surface dark:bg-gray-950 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

            <div className="max-w-7xl mx-auto px-mobile relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-primary dark:text-blue-400 text-xl">auto_awesome</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight">
                            AI-Powered Platform
                        </h2>
                    </div>
                    <p className="text-secondary-text dark:text-gray-400 text-base md:text-lg leading-relaxed">
                        Our website and FileMaker system are integrated with leading AI models. From smart product descriptions and automated customer responses to intelligent order processing and predictive analytics.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-structural-border dark:divide-gray-800 border border-structural-border dark:border-gray-800 rounded-2xl overflow-hidden bg-surface dark:bg-gray-900/40"
                >
                    {LOGOS.map((logo) => (
                        <div
                            key={logo.name}
                            className="flex flex-col items-center justify-center gap-3 px-4 py-8 md:py-10 transition-colors hover:bg-primary/[0.03] dark:hover:bg-primary/[0.06]"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className={`w-12 h-12 md:w-14 md:h-14 ${logo.invert ? 'dark:invert' : ''}`}
                            />
                            <span className="text-xs md:text-sm font-bold text-charcoal dark:text-white tracking-wide">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
