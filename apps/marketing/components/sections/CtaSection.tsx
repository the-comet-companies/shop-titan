'use client';

import { motion } from "framer-motion";

export default function CtaSection() {
    return (
        <section className="relative bg-background dark:bg-background-dark py-32 md:py-48 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal dark:text-white leading-[1.1] mb-6 tracking-tight">
                        Ready to elevate your workflow?
                    </h2>
                    <p className="text-xl md:text-2xl text-secondary-text dark:text-gray-300 font-medium mb-10 leading-relaxed">
                        Join the platform redefining the decoration industry. Focus on what you do best.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <a
                            href="/reach-out"
                            className="px-10 py-5 text-xl font-semibold text-charcoal dark:text-white relative overflow-hidden group rounded-full flex items-center gap-2 justify-center"
                        >
                            <div className="absolute inset-0 bg-black/5 dark:bg-white/8 group-hover:bg-black/10 dark:group-hover:bg-white/12 transition-colors rounded-full backdrop-blur-md" />
                            <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-charcoal/30 dark:group-hover:border-white/40 transition-colors rounded-full" />
                            <span className="relative z-10">Let&apos;s Talk</span>
                            <span className="material-symbols-outlined text-xl relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true">
                                arrow_forward
                            </span>
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center mt-8 text-sm text-secondary-text dark:text-gray-500">
                        <a href="/platform/complete-system" className="hover:text-primary transition-colors">Complete System</a>
                        <span className="text-gray-300 dark:text-gray-700">·</span>
                        <a href="/platform/filemaker-system" className="hover:text-primary transition-colors">FileMaker System</a>
                        <span className="text-gray-300 dark:text-gray-700">·</span>
                        <a href="/platform/ecommerce-storefront" className="hover:text-primary transition-colors">Ecommerce Storefront</a>
                        <span className="text-gray-300 dark:text-gray-700">·</span>
                        <a href="/pricing" className="hover:text-primary transition-colors">Pricing</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
