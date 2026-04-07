'use client';

import { motion } from 'framer-motion';

export default function FounderStorySection() {
    return (
        <section id="founder-story" className="relative bg-charcoal dark:bg-gray-950 py-24 md:py-32 overflow-hidden">
            {/* Subtle background orbs for depth */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-3xl" />
                <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.05] blur-3xl" />
            </div>

            <div className="max-w-3xl mx-auto px-mobile relative z-10 flex flex-col gap-6">
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="inline-block w-fit px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase"
                        >
                            The Origin
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
                        >
                            Built by someone who lived it.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                            className="text-lg text-gray-400 leading-relaxed"
                        >
                            Over 15 years running a large-scale print shop, the stress was constant  - no visibility, no control, no way to step away. So he built his own solution, and now he&apos;s offering it to the world.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                                <span className="text-primary font-bold text-sm">M</span>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">Michael Monfared</p>
                                <p className="text-gray-500 text-xs font-medium">Founder &amp; CEO, Shop Titan</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                        >
                            <a
                                href="/about"
                                className="inline-flex items-center gap-2 px-8 py-3 min-h-[44px] text-base font-semibold text-white relative overflow-hidden group rounded-full"
                            >
                                <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors rounded-full" />
                                <div className="absolute inset-0 border-2 border-white/20 group-hover:border-white/40 transition-colors rounded-full" />
                                <span className="material-symbols-outlined text-lg relative z-10" aria-hidden="true">play_arrow</span>
                                <span className="relative z-10">Watch Our Story</span>
                            </a>
                        </motion.div>
            </div>
        </section>
    );
}
