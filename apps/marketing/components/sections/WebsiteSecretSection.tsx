'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const withoutItems = [
    'Phone tag and email threads for every quote',
    'Lost to shops with a real online presence',
    'No way for customers to reorder past jobs',
    'Owner becomes the bottleneck for every order',
    'Generic site that does not look like your brand',
];

const withItems = [
    'Orders coming in 24 hours a day',
    'Self-serve quoting and instant pricing',
    'Customer portal for reorders and approvals',
    'Production team free to focus on the floor',
    'Branded storefront that converts visitors into buyers',
];

export default function WebsiteSecretSection() {
    return (
        <section className="py-16 md:py-24 bg-surface dark:bg-gray-950 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

            <div className="max-w-6xl mx-auto px-mobile relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-5">
                        The Website Is the Secret to Your Print Shop&apos;s Growth.
                    </h2>
                    <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                        It is the difference between the shops still chasing customers by phone, and the{' '}
                        <span className="font-bold text-charcoal dark:text-white">
                            ones taking orders while they sleep
                        </span>
                        .
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7"
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {/* WITHOUT card */}
                    <motion.div
                        variants={fadeUp}
                        className="rounded-2xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 p-7 md:p-9 shadow-sm"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white text-center mb-7 tracking-tight">
                            Without a Website
                        </h3>
                        <ul className="space-y-4">
                            {withoutItems.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-500 text-white shrink-0 mt-0.5">
                                        <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: '"FILL" 1, "wght" 500' }}>close</span>
                                    </span>
                                    <span className="text-sm md:text-base font-semibold text-charcoal dark:text-white leading-snug">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* WITH card */}
                    <motion.div
                        variants={fadeUp}
                        className="rounded-2xl border border-primary/30 bg-white dark:bg-gray-900 p-7 md:p-9 shadow-lg shadow-primary/10 ring-1 ring-primary/10 relative"
                    >
                        <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary text-white text-[10px] font-bold tracking-wider uppercase">
                            Shop Titan
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white text-center mb-7 tracking-tight">
                            With a Website
                        </h3>
                        <ul className="space-y-4">
                            {withItems.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white shrink-0 mt-0.5">
                                        <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: '"FILL" 1, "wght" 500' }}>check</span>
                                    </span>
                                    <span className="text-sm md:text-base font-semibold text-charcoal dark:text-white leading-snug">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
