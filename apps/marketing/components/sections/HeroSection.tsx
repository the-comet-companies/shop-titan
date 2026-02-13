'use client';

import { motion } from "framer-motion";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import InteractiveGridPattern from '@/components/ui/InteractiveGridPattern';

export default function HeroSection() {
    const { elementRef: whyRef, isVisible: whyVisible } = useScrollAnimation();

    const partners = [
        { icon: "verified_user", name: "Trusted Partner" },
        { icon: "layers", name: "Apparel Co." },
        { icon: "precision_manufacturing", name: "Global Print" },
        { icon: "architecture", name: "Stitch Labs" },
        { icon: "monitoring", name: "Flow Metrics" },
    ];

    return (
        <section
            id="hero"
            className="relative"
        >
            {/* Hero Content with Animated Background */}
            <div className="relative overflow-hidden pt-32 pb-12 md:pt-48 md:pb-20 lg:pb-28">
                <div className="max-w-6xl mx-auto px-mobile relative z-10">
                    <div className="max-w-3xl text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mb-8 md:mb-12"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white leading-tight mb-6">
                                A single source of truth for the decoration industry.
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl text-secondary-text dark:text-gray-400">
                                Our system allows you to focus on what you do best.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-4 justify-start"
                        >
                            <button className="btn-primary">
                                Request Demo
                            </button>
                            <button
                                onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-secondary"
                            >
                                See How It Works
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Partner Carousel */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-full overflow-hidden mt-16 md:mt-24 py-3 md:py-4 border-y border-gray-100 dark:border-gray-900/50"
                >
                    <div className="carousel-track gap-8 md:gap-16 lg:gap-32 px-8 md:px-12 items-center">
                        {/* Duplicate partners for infinite scroll */}
                        {[...partners, ...partners].map((partner, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-secondary-text dark:text-gray-600 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                            >
                                <span className="material-symbols-outlined text-2xl md:text-3xl">
                                    {partner.icon}
                                </span>
                                <span className="text-sm md:text-base lg:text-lg font-semibold tracking-tighter italic whitespace-nowrap">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Animated Gradient Background - only for hero area */}
                <AnimatedGradientBackground />
                <InteractiveGridPattern
                    width={140}
                    height={140}
                    className="opacity-[0.4] dark:opacity-[0.5]"
                />
            </div>
        </section>
    );
}
