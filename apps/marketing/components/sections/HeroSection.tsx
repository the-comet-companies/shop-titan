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
            id="product"
            className="relative"
        >
            {/* Hero Content with Animated Background */}
            <div className="relative overflow-hidden pt-32 pb-12 md:pt-48 md:pb-20 lg:pb-28">
                <div className="max-w-6xl mx-auto px-mobile relative z-10">
                    <div className="max-w-3xl text-left">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-xl sm:text-2xl md:text-[2.5rem] lg:text-[2.75rem] text-secondary-text dark:text-gray-400 mb-8 md:mb-12 leading-relaxed sm:leading-normal md:leading-[1.55] tracking-tight font-medium"
                        >
                            <span className="text-charcoal dark:text-white">Unify your production.</span> One
                            platform for high-volume decorators to manage orders, inventory, and
                            automation—from intake to fulfillment, <span className="text-charcoal dark:text-white">without the friction.</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-4 justify-start"
                        >
                            <button className="group relative backdrop-blur-xl bg-white/5 dark:bg-white/5 border border-white/10 hover:border-white/20 text-charcoal dark:text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-medium transition-all duration-300 text-base md:text-lg hover:bg-white/10 hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-black/5">
                                <span>Get Started Now</span>
                                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <button className="group relative backdrop-blur-xl bg-transparent border border-white/10 hover:border-white/20 text-charcoal dark:text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-medium transition-all duration-300 text-base md:text-lg hover:bg-white/5 hover:scale-105 flex items-center justify-center gap-2">
                                <span>Contact Sales</span>
                                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
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

            {/* Why This System Exists - separate from animated background */}
            <div
                ref={whyRef}
                className={`pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-20 bg-white dark:bg-background-dark border-t border-gray-50 dark:border-gray-900 transition-all duration-700 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-mobile text-center">
                    <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-4 md:mb-6">
                        Why This System Exists
                    </h2>
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-charcoal dark:text-white mb-8 md:mb-10 max-w-4xl mx-auto">
                        The modern decorator is bogged down by{" "}
                        <span className="text-secondary-text italic">
                            disconnected spreadsheets
                        </span>{" "}
                        and manual entry. We built a unified flow to let you focus on craft,
                        not administration.
                    </p>
                </div>
            </div>
        </section>
    );
}
