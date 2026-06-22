'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const websiteBullets = [
    'Branded ecommerce storefront built for decoration shops',
    'Decoration-aware product catalog with options and approvals',
    'Customer portal, online ordering, and SEO ready out of the box',
    'Launch in 2 to 4 weeks',
];

const websiteHighlights = [
    {
        icon: 'laptop_mac',
        title: 'Website',
        desc: 'A branded ecommerce storefront built for decoration shops. Customers find your shop, configure their job, and order without a phone call.',
    },
    {
        icon: 'trending_up',
        title: 'SEO',
        desc: 'Built-in SEO so the right customers find your shop on Google. Keyword targeting, structured data, and analytics baked in from day one.',
    },
    {
        icon: 'settings',
        title: 'Customer Portal',
        desc: 'A self-service area where customers track orders, view history, reorder past jobs, and approve artwork without an email thread.',
    },
];

const secondaryPaths = [
    {
        eyebrow: 'Add the back office',
        label: 'FileMaker',
        icon: 'database',
        title: 'FileMaker System',
        desc: 'For shops past the spreadsheet stage. Quotes, orders, inventory, production, and reporting in one connected platform.',
        href: '/platform/filemaker-system',
        ctaLabel: 'Learn about FileMaker',
    },
    {
        eyebrow: 'Best together',
        label: 'Complete',
        icon: 'hub',
        title: 'Website + FileMaker',
        desc: 'Web orders flow straight into production. Inventory updates in real time. The whole shop on one platform.',
        href: '/platform/complete-system',
        ctaLabel: 'See the Complete System',
    },
];

export default function PathSelectionSection() {
    return (
        <section id="solutions" className="pt-16 md:pt-20 pb-16 md:pb-20 bg-background-light dark:bg-background-dark relative">
            <div className="max-w-7xl mx-auto px-mobile">
                <div className="text-center mb-10 md:mb-14">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4"
                    >
                        Start with the website
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl md:text-5xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-4"
                    >
                        Your shop online, on brand, and ready for orders.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Shop Titan starts with a branded website built for decoration shops. Add the FileMaker system when you are ready to run the back office on the same platform.
                    </motion.p>
                </div>

                {/* ─── PRIMARY: Website hero card ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Link
                        href="/platform/ecommerce-storefront"
                        className="group relative block overflow-hidden rounded-2xl border border-primary bg-white dark:bg-gray-900 ring-1 ring-primary/20 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-shadow"
                    >
                        <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold tracking-wider uppercase">
                            Primary product
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                                        <span className="material-symbols-outlined text-2xl">language</span>
                                    </span>
                                    <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                                        Website Building
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-4 leading-tight">
                                    A storefront that actually works for a print shop.
                                </h3>
                                <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                                    Customers find your shop, configure their job, and order without a phone call. Branded, decoration aware, and SEO ready from day one.
                                </p>

                                <ul className="space-y-2.5 mb-7">
                                    {websiteBullets.map((b) => (
                                        <li key={b} className="flex items-start gap-2.5 text-sm md:text-base text-charcoal dark:text-gray-200">
                                            <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-full group-hover:bg-primary/90 transition-colors">
                                        Explore the Website
                                        <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </span>
                                    <span className="text-xs font-mono uppercase tracking-[0.18em] text-secondary-text dark:text-gray-500">
                                        Live in 2 to 4 weeks
                                    </span>
                                </div>
                            </div>

                            <div className="hidden lg:flex items-center justify-center border-l border-structural-border dark:border-gray-800 p-10 bg-white dark:bg-gray-900">
                                <div className="w-full max-w-md">
                                    <Image
                                        src="/website/design-studio.png"
                                        alt="Branded ecommerce storefront for print shops"
                                        width={1080}
                                        height={1350}
                                        sizes="(max-width: 1024px) 0px, 480px"
                                        className="w-full h-auto"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* ─── 3-COLUMN WEBSITE HIGHLIGHTS ─── */}
                <div className="mt-14 md:mt-16">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mb-12"
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        {websiteHighlights.map((h) => (
                            <motion.div key={h.title} variants={fadeUp} className="text-center">
                                <div className="flex justify-center mb-5 text-primary">
                                    <span className="material-symbols-outlined" style={{ fontSize: '80px' }}>{h.icon}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-charcoal dark:text-white tracking-tight mb-3">
                                    {h.title}
                                </h3>
                                <p className="text-sm md:text-base text-secondary-text dark:text-gray-400 leading-relaxed max-w-sm mx-auto">
                                    {h.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <Link
                            href="/platform/ecommerce-storefront"
                            className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-primary/90 transition-colors"
                        >
                            View All Features
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                    </motion.div>
                </div>

                {/* ─── SECONDARY: FileMaker + Complete System ─── */}
                <div className="mt-16 md:mt-20">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center text-xs font-mono uppercase tracking-[0.18em] text-secondary-text dark:text-gray-500 mb-6"
                    >
                        Want to run the back office too?
                    </motion.p>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        {secondaryPaths.map((p) => (
                            <motion.div key={p.title} variants={fadeUp} className="h-full">
                                <Link
                                    href={p.href}
                                    className="group relative flex h-full flex-col rounded-2xl bg-white dark:bg-gray-900 border border-structural-border dark:border-gray-800 hover:border-primary/40 p-5 md:p-6 transition-colors"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                            <span className="material-symbols-outlined text-lg">{p.icon}</span>
                                        </span>
                                        <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                                            {p.eyebrow}
                                        </span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-charcoal dark:text-white tracking-tight mb-2 leading-snug">
                                        {p.title}
                                    </h3>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed mb-5">
                                        {p.desc}
                                    </p>
                                    <span className="mt-auto inline-flex items-center gap-2 text-primary text-sm font-semibold">
                                        {p.ctaLabel}
                                        <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
