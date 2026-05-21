'use client';

import { motion } from "framer-motion";
import HeroBackground from './HeroBackground';
import InteractiveGridPattern from '@/components/ui/InteractiveGridPattern';

export default function HeroSection() {
    return (
        <section
            id="hero"
            aria-label="Welcome to Shop Titan"
            className="relative bg-background dark:bg-background-dark min-h-[80vh] flex flex-col justify-start overflow-hidden"
        >
            {/* Convergence Network Background */}
            <HeroBackground />

            {/* Readability overlays */}
            <div className="absolute inset-0 z-[1] bg-white/10 dark:bg-black/20 pointer-events-none" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white/50 via-white/40 to-transparent dark:from-black/50 dark:via-black/40 dark:to-transparent pointer-events-none lg:block hidden" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/10 via-transparent to-white/80 dark:from-black/10 dark:via-transparent dark:to-black/80 pointer-events-none lg:hidden block" />

            {/* Hero Content  - unchanged */}
            <div className="relative pt-32 pb-20 md:pt-24 lg:pt-32 lg:pb-40 z-20">
                <div className="max-w-7xl mx-auto px-mobile relative 2xl:max-w-[1480px]">
                    <div className="max-w-3xl text-left">
                        <motion.header
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mb-8 md:mb-12"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-light text-charcoal dark:text-white leading-[1.05] mb-8 tracking-tight">
                                A{' '}
                                <span className="italic text-graphite dark:text-gray-300 font-extralight">
                                    single source of truth
                                </span>
                                {' '}for the decoration industry.
                            </h1>
                            <p
                                className="text-lg sm:text-xl leading-relaxed max-w-2xl text-graphite dark:text-gray-400 font-light"
                                role="doc-subtitle"
                            >
                                Our system allows you to focus on what you do best.
                            </p>
                        </motion.header>

                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-5 justify-start"
                            aria-label="Primary call-to-action"
                        >
                            <a
                                href="/reach-out"
                                className="px-7 py-3.5 text-sm tracking-wide font-medium bg-charcoal text-ivory rounded-[6px] hover:bg-black transition-colors inline-flex items-center justify-center gap-2 group"
                                aria-label="Contact us to get started"
                            >
                                <span>Let&apos;s Talk</span>
                                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform" aria-hidden="true">
                                    arrow_forward
                                </span>
                            </a>
                            <button
                                onClick={() => document.getElementById('pain-points')?.scrollIntoView({ behavior: 'auto' })}
                                className="px-7 py-3.5 text-sm tracking-wide font-medium border border-charcoal text-charcoal rounded-[6px] hover:bg-charcoal hover:text-ivory dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-charcoal transition-colors inline-flex items-center justify-center"
                                aria-label="Scroll to platform features section"
                            >
                                See How It Works
                            </button>
                        </motion.nav>
                    </div>
                </div>

                {/* Subtle Grid overlay for texture */}
                <InteractiveGridPattern
                    width={120}
                    height={120}
                    className="opacity-[0.05] dark:opacity-[0.1] pointer-events-none"
                />
            </div>
        </section>
    );
}
