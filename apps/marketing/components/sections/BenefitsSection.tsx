'use client';

import { motion } from 'framer-motion';

const models = [
    { name: 'OpenAI', logo: '/logos/ai/openai.svg', invert: true },
    { name: 'Claude', logo: '/logos/ai/claude.svg', invert: false },
    { name: 'Gemini', logo: '/logos/ai/gemini.svg', invert: false },
    { name: 'Perplexity', logo: '/logos/ai/perplexity.svg', invert: true },
];

export default function BenefitsSection() {
    return (
        <section id="benefits" className="bg-ivory dark:bg-gray-950 py-20 md:py-28 relative">
            <div className="max-w-7xl mx-auto px-mobile">

                {/* Two-column header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 md:mb-16">
                    <div className="lg:col-span-5">
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="inline-block text-[11px] tracking-[0.22em] uppercase text-graphite font-medium mb-6"
                        >
                            Intelligence Layer
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="text-3xl md:text-5xl font-light text-charcoal dark:text-white leading-[1.05] tracking-tight"
                        >
                            Powered by{' '}
                            <span className="italic font-extralight text-graphite">leading AI models.</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-7 lg:pt-2 text-lg md:text-xl text-graphite dark:text-gray-400 leading-relaxed font-light max-w-2xl"
                    >
                        Your website and FileMaker system are integrated with the frontier of AI. Smart product descriptions, automated customer responses, intelligent order processing, and predictive analytics. Quietly working in the background.
                    </motion.p>
                </div>

                {/* Logo strip with hairline dividers */}
                <div className="border-t border-line">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {models.map((model, i) => (
                            <motion.div
                                key={model.name}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className={`flex flex-col items-center justify-center gap-5 py-12 md:py-16 border-b border-line ${
                                    i < models.length - 1 ? 'md:border-r' : ''
                                } ${i === 0 || i === 2 ? 'border-r md:border-r' : ''} ${i === 1 ? 'border-r md:border-r' : ''}`}
                            >
                                <div className="h-12 flex items-center justify-center">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={model.logo}
                                        alt={model.name}
                                        className={`h-10 w-auto opacity-80 hover:opacity-100 transition-opacity ${model.invert ? 'dark:invert' : ''}`}
                                    />
                                </div>
                                <span className="text-[11px] tracking-[0.22em] uppercase text-graphite font-medium">
                                    {model.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
