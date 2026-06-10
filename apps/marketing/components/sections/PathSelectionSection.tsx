'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const paths = [
    {
        eyebrow: 'Product 01',
        label: 'Website',
        icon: 'language',
        title: 'Website Only',
        desc: 'A branded storefront for taking orders online. Customers find your shop, configure their job, and order without a phone call.',
        bullets: ['Branded ecommerce storefront', 'Decoration-aware product catalog', 'Customer portal and SEO ready'],
        href: '/platform/ecommerce-storefront',
        ctaLabel: 'Explore the Website',
        accent: 'border-structural-border dark:border-gray-800 hover:border-primary/40',
    },
    {
        eyebrow: 'Product 02',
        label: 'FileMaker',
        icon: 'database',
        title: 'FileMaker Only',
        desc: 'A complete operations system for the shop floor. Quotes, orders, inventory, production, and reporting in one connected platform.',
        bullets: ['Quotes, orders, and pricing matrices', 'Real-time inventory by SKU', 'Production tracking and reporting'],
        href: '/platform/filemaker-system',
        ctaLabel: 'Explore the FileMaker System',
        accent: 'border-structural-border dark:border-gray-800 hover:border-primary/40',
    },
    {
        eyebrow: 'Best together',
        label: 'Website + FileMaker',
        icon: 'hub',
        title: 'Complete System',
        desc: 'Web orders flow straight into production. Inventory updates in real time. One platform from order to ship, no double entry.',
        bullets: ['Website and operations connected', 'No double entry between systems', 'Full visibility from order to ship'],
        href: '/platform/complete-system',
        ctaLabel: 'Explore the Complete System',
        accent: 'border-primary ring-1 ring-primary/20',
        featured: true,
    },
];

export default function PathSelectionSection() {
    return (
        <section id="solutions" className="pt-16 md:pt-20 pb-16 md:pb-20 bg-background-light dark:bg-background-dark relative">
            <div className="max-w-7xl mx-auto px-mobile">
                <div className="text-center mb-10 md:mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl md:text-5xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-4"
                    >
                        Solutions That Scale With You
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Start with what you need. Expand as your business grows.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {paths.map((p) => (
                        <motion.div key={p.title} variants={fadeUp} className="h-full">
                            <Link
                                href={p.href}
                                className={`group relative flex h-full flex-col rounded-2xl bg-white dark:bg-gray-900 border ${p.accent} p-6 md:p-7 transition-colors`}
                            >
                                {p.featured && (
                                    <span className="absolute top-4 right-4 inline-block px-2.5 py-1 rounded-full bg-primary text-white text-[10px] font-bold tracking-wider uppercase">
                                        Most chosen
                                    </span>
                                )}

                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${p.featured ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                                        <span className="material-symbols-outlined text-xl">{p.icon}</span>
                                    </span>
                                    <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                                        {p.eyebrow}
                                    </span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-charcoal dark:text-white tracking-tight mb-3 leading-snug">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed mb-5">
                                    {p.desc}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {p.bullets.map((b) => (
                                        <li key={b} className="flex items-start gap-2 text-sm text-charcoal dark:text-gray-200">
                                            <span className="material-symbols-outlined text-primary text-base mt-0.5">check</span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                <span className="mt-auto inline-flex items-center gap-2 text-primary text-sm font-semibold">
                                    {p.ctaLabel}
                                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
