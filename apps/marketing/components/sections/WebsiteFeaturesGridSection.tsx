'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const features = [
    { icon: 'storefront', title: 'Branded Storefront', desc: 'Your branded site, built for decoration shops, not a template.' },
    { icon: 'grid_view', title: 'Product Catalog', desc: 'Browsable catalog with photos, swatches, sizes, and live pricing.' },
    { icon: 'loyalty', title: 'Brands Showcase', desc: 'Dedicated pages for every blank brand you carry.' },
    { icon: 'account_circle', title: 'Customer Portal', desc: 'Self-serve ordering, history, and easy reorders for repeat buyers.' },
    { icon: 'upload_file', title: 'Artwork Upload', desc: 'Drag and drop art directly into the order, no email threads.' },
    { icon: 'design_services', title: 'Services Pages', desc: 'Pages for screen printing, embroidery, DTG, and every decoration method.' },
    { icon: 'trending_up', title: 'SEO Ready', desc: 'Built to rank on Google so the right customers find your shop.' },
    { icon: 'analytics', title: 'Analytics', desc: 'Track traffic, conversions, and revenue with GA4 wired in from day one.' },
    { icon: 'smartphone', title: 'Mobile First', desc: 'Looks and works perfectly on phones, tablets, and desktops.' },
    { icon: 'shopping_cart', title: 'Online Ordering', desc: 'Take orders 24 hours a day with instant quotes and live pricing.' },
    { icon: 'approval', title: 'Approvals', desc: 'Track artwork and order approvals so production starts only when ready.' },
    { icon: 'cloud_done', title: 'Hosting & Updates', desc: 'Fast hosting, daily backups, SSL, and ongoing updates all included.' },
];

export default function WebsiteFeaturesGridSection() {
    return (
        <section className="py-16 md:py-24 bg-surface dark:bg-gray-950 relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

            <div className="max-w-7xl mx-auto px-mobile relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-4">
                        Shop Titan gives you everything you need to sell online.
                    </h2>
                    <p className="font-serif italic text-xl md:text-2xl text-primary leading-snug">
                        Plus the tools to actually scale your shop.
                    </p>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-structural-border dark:border-gray-800 rounded-2xl overflow-hidden"
                >
                    {features.map((f) => (
                        <motion.div
                            key={f.title}
                            variants={fadeUp}
                            className="border-r border-b border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 p-7 md:p-8 text-center hover:bg-primary/[0.02] dark:hover:bg-primary/[0.05] transition-colors"
                        >
                            <div className="flex justify-center mb-4 text-primary">
                                <span className="material-symbols-outlined" style={{ fontSize: '40px' }}>
                                    {f.icon}
                                </span>
                            </div>
                            <h3 className="text-base md:text-lg font-bold text-charcoal dark:text-white tracking-tight mb-2">
                                {f.title}
                            </h3>
                            <p className="text-xs md:text-sm text-secondary-text dark:text-gray-400 leading-relaxed">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
