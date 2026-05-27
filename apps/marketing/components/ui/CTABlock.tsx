'use client';

import { motion, Variants } from 'framer-motion';
import InteractiveGridPattern from '@/components/ui/InteractiveGridPattern';

export default function CTABlock() {
    const scrollToFeatures = () => {
        const element = document.getElementById('features');
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="relative py-32 md:py-48 bg-background-light dark:bg-background-dark overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen" />
                <InteractiveGridPattern
                    width={80}
                    height={80}
                    className="opacity-[0.03] dark:opacity-[0.05]"
                />
            </div>

            <div className="relative max-w-5xl mx-auto px-mobile text-center z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal dark:text-white mb-8 leading-[1.1] tracking-tight"
                    >
                        Ready to Stop the Chaos?
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-secondary-text dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        See how a single platform could save you 10+ hours per week, or keep struggling with fragmented systems.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
                    >
                        {/* Primary CTA */}
                        <a
                            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ07CrlMgyw-180nOXS9V2iQamYwK8S8OXjoNlzgOIAkSmdH1dBjVbDskGz9zO_6lD8T2kQ_oxqC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-5 text-xl font-bold text-white relative overflow-hidden group rounded-full flex items-center gap-2 justify-center w-full sm:w-auto shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
                            aria-label="Request a demo"
                        >
                            <div className="absolute inset-0 bg-primary group-hover:bg-primary-dark transition-colors rounded-full" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                            <span className="relative z-10">Request Demo</span>
                            <span className="material-symbols-outlined text-xl relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true">
                                arrow_forward
                            </span>
                        </a>

                        {/* Secondary CTA */}
                        <button
                            onClick={scrollToFeatures}
                            className="px-10 py-5 text-xl font-semibold text-charcoal dark:text-white relative overflow-hidden group rounded-full w-full sm:w-auto"
                            aria-label="Scroll to features"
                        >
                            <div className="absolute inset-0 bg-white/20 dark:bg-white/8 group-hover:bg-white/30 dark:group-hover:bg-white/12 transition-colors rounded-full" />
                            <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 rounded-full" />
                            <span className="relative z-10">See How It Works</span>
                        </button>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-sm text-gray-500 dark:text-gray-500 font-medium tracking-wide uppercase"
                    >
                        No pressure. No sales pitch. Just clarity.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}
