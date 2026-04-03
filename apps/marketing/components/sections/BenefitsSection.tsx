'use client';

import { motion } from 'framer-motion';

export default function BenefitsSection() {
    return (
        <section id="benefits" className="pt-10 md:pt-16 pb-12 md:pb-16 bg-surface dark:bg-gray-950 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

            <div className="max-w-7xl mx-auto px-mobile relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl md:rounded-3xl p-6 md:p-10 border border-structural-border dark:border-gray-800 bg-gradient-to-br from-violet-50/40 to-indigo-50/40 dark:from-violet-950/20 dark:to-indigo-950/20 shadow-sm overflow-hidden flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
                >
                    {/* Left: Copy */}
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="material-symbols-outlined text-violet-600 dark:text-violet-400 text-xl">auto_awesome</span>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-bold dark:text-white">AI-Powered Platform</h2>
                        </div>
                        <p className="text-secondary-text dark:text-gray-400 font-medium pt-2 text-lg">
                            Our website and FileMaker system are integrated with leading AI models. From smart product descriptions and automated customer responses to intelligent order processing and predictive analytics.
                        </p>
                    </div>

                    {/* Right: AI Logo Grid */}
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-700/50 aspect-square">
                                <img src="/logos/ai/openai.svg" alt="OpenAI" className="w-16 h-16 dark:invert" />
                                <span className="text-sm font-bold text-charcoal dark:text-white">OpenAI</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-700/50 aspect-square">
                                <img src="/logos/ai/claude.svg" alt="Claude" className="w-16 h-16" />
                                <span className="text-sm font-bold text-charcoal dark:text-white">Claude</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-700/50 aspect-square">
                                <img src="/logos/ai/gemini.svg" alt="Gemini" className="w-16 h-16" />
                                <span className="text-sm font-bold text-charcoal dark:text-white">Gemini</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-700/50 aspect-square">
                                <img src="/logos/ai/perplexity.svg" alt="Perplexity" className="w-16 h-16 dark:invert" />
                                <span className="text-sm font-bold text-charcoal dark:text-white">Perplexity</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
