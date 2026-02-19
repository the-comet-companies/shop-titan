'use client';

import { useState } from 'react';
import { motion } from "framer-motion";

import InteractiveGridPattern from '@/components/ui/InteractiveGridPattern';
import SplineHero from './SplineHero';

export default function HeroSection() {
    const [splineReady, setSplineReady] = useState(false);

    return (
        <section
            id="hero"
            aria-label="Welcome to Shop Titan"
            className="relative bg-background dark:bg-background-dark min-h-[80vh] flex flex-col justify-start overflow-hidden"
        >
            {/* Background Layer: Spline 3D Asset */}
            <motion.div
                className="absolute inset-0 z-0 select-none pointer-events-none"
                role="img"
                aria-label="3D visualization of logistics and container management operations"
                initial={{ opacity: 0 }}
                animate={splineReady ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="w-full h-[120%] opacity-70 md:opacity-100 transition-opacity duration-1000 transform -translate-y-[10%]">
                    <SplineHero
                        eagerLoad={true}
                        onReady={() => setSplineReady(true)}
                    />
                </div>
                {/* Readability Overlays */}
                <div className="absolute inset-0 bg-white/30 dark:bg-black/40 -z-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-black dark:via-black/70 dark:to-transparent z-10 lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/80 dark:from-black/10 dark:via-transparent dark:to-black/80 z-10 lg:hidden block" />
            </motion.div>

            {/* Hero Content */}
            <div className="relative pt-32 pb-20 md:pt-24 lg:pt-32 lg:pb-40 z-20">
                <div className="max-w-7xl mx-auto px-mobile relative">
                    <div className="max-w-3xl text-left">
                        <motion.header
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mb-8 md:mb-12"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-charcoal dark:text-white leading-[1.1] mb-8 tracking-tight">
                                A single source of truth for the decoration industry.
                            </h1>
                            <p
                                className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl text-secondary-text dark:text-gray-300 font-medium"
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
                                className="px-10 py-5 text-xl font-semibold text-charcoal dark:text-white relative overflow-hidden group rounded-full flex items-center gap-2 justify-center"
                                aria-label="Contact us to get started"
                            >
                                <div className="absolute inset-0 bg-white/20 dark:bg-white/8 group-hover:bg-white/30 dark:group-hover:bg-white/12 transition-colors rounded-full" />
                                <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-charcoal/30 dark:group-hover:border-white/40 transition-colors rounded-full" />
                                <span className="relative z-10">Let&apos;s Talk</span>
                                <span className="material-symbols-outlined text-xl relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true">
                                    arrow_forward
                                </span>
                            </a>
                            <button
                                onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-5 text-xl font-semibold text-charcoal dark:text-white relative overflow-hidden group rounded-full"
                                aria-label="Scroll to platform features section"
                            >
                                <div className="absolute inset-0 bg-white/20 dark:bg-white/8 group-hover:bg-white/30 dark:group-hover:bg-white/12 transition-colors rounded-full" />
                                <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 rounded-full" />
                                <span className="relative z-10">See How It Works</span>
                            </button>
                        </motion.nav>
                    </div>
                </div>

                {/* Subtle Grid overlay for texture - more subtle now */}
                <InteractiveGridPattern
                    width={120}
                    height={120}
                    className="opacity-[0.05] dark:opacity-[0.1] pointer-events-none"
                />
            </div>
        </section>
    );
}
