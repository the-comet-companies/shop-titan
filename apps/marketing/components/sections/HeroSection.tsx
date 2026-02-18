'use client';

import { motion } from "framer-motion";

import InteractiveGridPattern from '@/components/ui/InteractiveGridPattern';
import SplineHero from './SplineHero';

export default function HeroSection() {

    return (
        <section
            id="hero"
            className="relative bg-background dark:bg-background-dark min-h-[80vh] flex flex-col justify-start overflow-hidden"
        >
            {/* Background Layer: Spline 3D Asset */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none lg:pointer-events-auto">
                <div className="w-full h-[120%] opacity-70 md:opacity-100 transition-opacity duration-1000 transform -translate-y-[10%]">
                    <SplineHero />
                </div>
                {/* Readability Overlays */}
                <div className="absolute inset-0 bg-white/30 dark:bg-black/40 backdrop-blur-[0.5px] -z-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-black dark:via-black/70 dark:to-transparent z-10 lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/80 dark:from-black/10 dark:via-transparent dark:to-black/80 z-10 lg:hidden block" />
            </div>

            {/* Hero Content */}
            <div className="relative pt-16 pb-20 md:pt-24 lg:pt-32 lg:pb-40 z-20">
                <div className="max-w-7xl mx-auto px-mobile relative">
                    <div className="max-w-3xl text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mb-8 md:mb-12"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-charcoal dark:text-white leading-[1.1] mb-8 tracking-tight">
                                A single source of truth for the decoration industry.
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl text-secondary-text dark:text-gray-300 font-medium">
                                Our system allows you to focus on what you do best.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-5 justify-start"
                        >
                            <button className="btn-primary px-10 py-5 text-xl">
                                Let&apos;s Talk
                            </button>
                            <button
                                onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-secondary px-10 py-5 text-xl backdrop-blur-md bg-white/10 dark:bg-white/5 border-white/20"
                            >
                                See How It Works
                            </button>
                        </motion.div>
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
