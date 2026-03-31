'use client';

import { motion } from 'framer-motion';

const paths = [
    {
        id: 'website',
        title: 'Website Only',
        subtitle: 'Sell online. Look professional. Get discovered.',
        description: 'Launch a custom storefront with product catalogs, online ordering, branded pages, drag-and-drop artwork uploads, and mobile-optimized design. Built-in SEO helps customers find you faster.',
        href: '#website-features',
        popular: false,
    },
    {
        id: 'filemaker',
        title: 'FileMaker Only',
        subtitle: 'Run your operations from one system.',
        description: 'Manage quotes, orders, scheduling, purchase orders, customer data, pricing matrices, and analytics — all connected and automated within FileMaker.',
        href: '#features',
        popular: false,
    },
    {
        id: 'both',
        title: 'Website + FileMaker',
        subtitle: 'Complete system for print shops.',
        description: 'Connect your storefront and back office seamlessly. Orders move directly into production with no manual steps. One system, fully integrated.',
        href: '#website-features',
        popular: true,
    },
];

export default function PathSelectionSection() {
    function handleClick(href: string) {
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark relative">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {paths.map((path, i) => (
                        <motion.div
                            key={path.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="relative rounded-2xl p-6 md:p-8 flex flex-col gap-4 border border-structural-border dark:border-gray-700 bg-white/40 dark:bg-white/5"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-charcoal dark:text-white">{path.title}</h3>
                            <p className="text-sm text-primary font-medium">{path.subtitle}</p>
                            <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed flex-1">{path.description}</p>

                            <button
                                onClick={() => handleClick(path.href)}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-2 group"
                            >
                                More info
                                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
