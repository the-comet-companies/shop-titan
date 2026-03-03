'use client';

import { motion } from 'framer-motion';

export default function FounderStorySection() {
    return (
        <section className="relative bg-charcoal dark:bg-gray-950 py-24 md:py-32 overflow-hidden">
            {/* Subtle background orbs for depth */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-3xl" />
                <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.05] blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-mobile relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column — Copy */}
                    <div className="flex flex-col gap-6">
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="inline-block w-fit px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase"
                        >
                            The Origin
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
                        >
                            Built by someone who lived it.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="text-lg text-gray-400 leading-relaxed max-w-lg"
                        >
                            Over 15 years running a large-scale print shop, the stress was constant — no visibility, no control, no way to step away. So he built his own solution, and now he&apos;s offering it to the world.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
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
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <a
                                href="/about"
                                className="inline-flex items-center gap-2 px-8 py-3 min-h-[44px] text-base font-semibold text-white relative overflow-hidden group rounded-full"
                            >
                                <div className="absolute inset-0 bg-white/8 group-hover:bg-white/14 transition-colors rounded-full" />
                                <div className="absolute inset-0 border-2 border-white/20 group-hover:border-white/35 transition-colors rounded-full" />
                                <span className="relative z-10">Our Story</span>
                                <span className="material-symbols-outlined text-lg relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column — Video Thumbnail Card */}
                    <motion.a
                        href="/about"
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group cursor-pointer block"
                        aria-label="Watch Building Shop Titan — Our Story"
                    >
                        {/* Dark background with gradient */}
                        <div className="absolute inset-0 bg-neutral-900">
                            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" />
                        </div>

                        {/* Subtle grid texture */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                                <span className="material-symbols-outlined text-3xl md:text-4xl text-white ml-1">play_arrow</span>
                            </div>
                        </div>

                        {/* Bottom gradient for text readability */}
                        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                        {/* Label */}
                        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-10">
                            <span className="inline-block px-1.5 py-0.5 md:px-2 md:py-1 bg-white/20 backdrop-blur-sm rounded text-[8px] md:text-[10px] font-bold text-white mb-1 md:mb-2 uppercase tracking-wide">
                                Watch the Film
                            </span>
                            <h3 className="text-white text-lg md:text-2xl font-bold">Building Shop Titan</h3>
                        </div>
                    </motion.a>

                </div>
            </div>
        </section>
    );
}
