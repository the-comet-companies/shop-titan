'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { generateFAQSchema } from '@/lib/schema';

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const websiteFeatures = [
    { icon: 'storefront', title: 'Branded storefront', desc: 'A clean, fast site that looks like your business, not a template.' },
    { icon: 'view_kanban', title: 'Product catalog', desc: 'Decoration-aware product pages with pricing, options, and approvals.' },
    { icon: 'shopping_cart', title: 'Online ordering', desc: 'Customers place jobs themselves with art upload and quote built-in.' },
    { icon: 'travel_explore', title: 'SEO ready', desc: 'Built for search so the right customers can find your shop online.' },
];

const filemakerFeatures = [
    { icon: 'request_quote', title: 'Quotes and orders', desc: 'Accurate pricing matrices, fast intake, and one source of truth.' },
    { icon: 'inventory_2', title: 'Inventory tracking', desc: 'Real stock by SKU, color, and size. No more surprises mid-job.' },
    { icon: 'precision_manufacturing', title: 'Production tasks', desc: 'Assign and track decoration tasks across screen print, embroidery, DTF, DTG.' },
    { icon: 'assessment', title: 'Reporting and visibility', desc: 'Owner visibility into finance, production load, and inventory in one place.' },
];

const faqs = [
    {
        question: 'Can I use the website without the FileMaker system?',
        answer: 'Yes. The website is a standalone product. You can launch a branded storefront with online ordering, product catalog, customer portal, and SEO, even if your back office stays the way it is today.',
    },
    {
        question: 'Can I use the FileMaker system without the website?',
        answer: 'Yes. The FileMaker system runs your shop floor on its own. Quotes, orders, inventory, production, and reporting all work whether your customers find you online, by phone, or in person.',
    },
    {
        question: 'What changes if I add the second product later?',
        answer: 'Web orders start flowing directly into the FileMaker system, inventory updates in real time, and customer status is available without a phone call. There is no double entry between systems. Migrating from one product to both is straightforward because the integration was designed in from the start.',
    },
    {
        question: 'Is there a discount for taking both products?',
        answer: 'Yes. The combined Website plus FileMaker plan is priced lower than the two products purchased separately. See the pricing page for the current rates.',
    },
    {
        question: 'What if I already have a website I like?',
        answer: 'Keep it. Many shops start with the FileMaker system alone because the back office is the bottleneck, not the storefront. If you eventually want to upgrade the website, you can add it without disrupting operations.',
    },
    {
        question: 'How long does it take to launch each product?',
        answer: 'Most shops are live in 2 to 4 weeks per product. That includes configuration, data migration where needed, training, and the team going hands-on.',
    },
    {
        question: 'Who is each product best suited for?',
        answer: 'The website is for shops whose customer-facing experience is holding them back, especially if quoting and ordering happen by phone or email. The FileMaker system is for shops past the spreadsheet stage that need real visibility into orders, inventory, and production. The combined plan is for shops that want to run the whole business on one platform.',
    },
    {
        question: 'Can the FileMaker system connect to an existing ecommerce platform?',
        answer: 'In most cases, yes. We integrate the FileMaker system with common storefronts so orders flow in automatically. If your storefront blocks integration, we can usually replace it without disrupting your operations.',
    },
    {
        question: 'How does support work if I only use one product?',
        answer: 'You get full support for whichever product you use, including hosting, backups, updates, and ongoing changes. There is no difference in service level between a single-product shop and a combined-plan shop.',
    },
    {
        question: 'Can I switch between plans later?',
        answer: 'Yes. You can add or remove a product at any time. Your data, customer records, and order history stay intact through any change.',
    },
];

const faqSchema = generateFAQSchema(faqs);

const paths = [
    {
        eyebrow: 'Just the website',
        title: 'Replace your storefront',
        desc: 'You already run production well. Upgrade the customer-facing side without touching how you operate today.',
        bullets: ['New branded storefront', 'Online ordering for repeat customers', 'Faster quote intake'],
        href: '/platform/ecommerce-storefront',
        ctaLabel: 'See the website system',
        accent: 'border-primary/30',
    },
    {
        eyebrow: 'Just the FileMaker system',
        title: 'Replace spreadsheets and chaos',
        desc: 'Your site is fine. Your back office is the bottleneck. Move quoting, orders, inventory, and production into one connected system.',
        bullets: ['Quotes, orders, inventory, production', 'Proven in a real print shop', 'Live in 2 to 4 weeks'],
        href: '/platform/filemaker-system',
        ctaLabel: 'See the FileMaker system',
        accent: 'border-primary/30',
    },
    {
        eyebrow: 'Both, connected',
        title: 'Run the whole shop on one platform',
        desc: 'Web orders flow directly into production. Inventory updates in real time. Customers see status without a phone call.',
        bullets: ['Website and operations on one platform', 'No double entry between systems', 'Visibility from order to ship'],
        href: '/platform/complete-system',
        ctaLabel: 'See the complete platform',
        accent: 'border-primary ring-1 ring-primary/20',
        featured: true,
    },
];

export default function ProductsPage() {
    return (
        <>
            <main className="min-h-screen pt-20">
                {/* Schema */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

                {/* ───── HERO ───── */}
                <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-background-light dark:bg-background-dark relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6"
                        >
                            Products
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            Get your shop online and taking orders. Add the FileMaker back office when you&apos;re ready.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
                        >
                            Shop Titan starts with a branded website that takes orders online  - customers find you, configure their job, and order without a phone call. Add the FileMaker system to run quotes, inventory, and production on the same platform when you&apos;re ready.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href="/reach-out"
                                className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Book a Live Demo
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link
                                href="/pricing"
                                className="px-8 py-4 text-charcoal dark:text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-primary/50 transition-colors rounded-full" />
                                <span className="relative z-10">View Pricing</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* ───── TWO PRODUCT CARDS ───── */}
                <section className="bg-surface dark:bg-gray-950 relative">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {/* WEBSITE CARD */}
                            <motion.div
                                variants={fadeUp}
                                className="relative bg-white dark:bg-gray-900 border border-structural-border dark:border-gray-800 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
                            >
                                <div className="aspect-[16/10] bg-background-light dark:bg-gray-950 border-b border-structural-border dark:border-gray-800 relative overflow-hidden">
                                    <Image
                                        src="/website/StoreFront.png"
                                        alt="Branded ecommerce storefront for print shops"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="p-6 md:p-8">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-secondary-text dark:text-gray-500">
                                            Customer facing
                                        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-3">
                                        Website Building
                                    </h2>
                                    <p className="text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                                        A branded storefront built for decoration shops. Customers find you, configure their job, and order without a phone call. Works on its own, even if your back office stays the way it is today.
                                    </p>
                                    <ul className="grid grid-cols-1 gap-3 mb-7">
                                        {websiteFeatures.map((f) => (
                                            <li key={f.title} className="flex gap-3">
                                                <span className="w-9 h-9 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-primary text-lg">{f.icon}</span>
                                                </span>
                                                <div>
                                                    <p className="text-sm font-bold text-charcoal dark:text-white">{f.title}</p>
                                                    <p className="text-xs text-secondary-text dark:text-gray-500 leading-relaxed">{f.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-3">
                                        <Link
                                            href="/platform/ecommerce-storefront"
                                            className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
                                        >
                                            See the website system
                                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>

                            {/* FILEMAKER CARD */}
                            <motion.div
                                variants={fadeUp}
                                className="relative bg-white dark:bg-gray-900 border border-structural-border dark:border-gray-800 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
                            >
                                <div className="aspect-[16/10] bg-background-light dark:bg-gray-950 border-b border-structural-border dark:border-gray-800 relative overflow-hidden">
                                    <Image
                                        src="/filemaker/Orders.png"
                                        alt="FileMaker system for managing print shop orders and production"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="p-6 md:p-8">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-secondary-text dark:text-gray-500">
                                            Shop floor
                                        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-3">
                                        FileMaker System
                                    </h2>
                                    <p className="text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                                        A pre-built FileMaker platform that replaces spreadsheets and disconnected tools. Quoting, orders, inventory, production, and reporting in one connected system. Works on its own, with your current website or none at all.
                                    </p>
                                    <ul className="grid grid-cols-1 gap-3 mb-7">
                                        {filemakerFeatures.map((f) => (
                                            <li key={f.title} className="flex gap-3">
                                                <span className="w-9 h-9 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-primary text-lg">{f.icon}</span>
                                                </span>
                                                <div>
                                                    <p className="text-sm font-bold text-charcoal dark:text-white">{f.title}</p>
                                                    <p className="text-xs text-secondary-text dark:text-gray-500 leading-relaxed">{f.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-3">
                                        <Link
                                            href="/platform/filemaker-system"
                                            className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
                                        >
                                            See the FileMaker system
                                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ───── PICK YOUR PATH ───── */}
                <section className="bg-background-light dark:bg-background-dark relative">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
                        <div className="max-w-3xl mb-12 md:mb-14">
                            <motion.span
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4"
                            >
                                Pick your path
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-4"
                            >
                                Start with what your shop needs first.
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-secondary-text dark:text-gray-400 leading-relaxed"
                            >
                                You don&apos;t have to do everything at once. Plug in one product today, add the other when the timing is right.
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
                                <motion.div
                                    key={p.title}
                                    variants={fadeUp}
                                    className={`relative bg-white dark:bg-gray-900 border ${p.accent} rounded-2xl p-6 md:p-7 flex flex-col h-full`}
                                >
                                    {p.featured && (
                                        <span className="absolute top-4 right-4 inline-block px-2.5 py-1 rounded-full bg-primary text-white text-[10px] font-bold tracking-wider uppercase">
                                            Most chosen
                                        </span>
                                    )}
                                    <span className="text-[10px] font-bold tracking-widest text-primary uppercase mb-2">
                                        {p.eyebrow}
                                    </span>
                                    <h3 className="text-lg md:text-xl font-bold text-charcoal dark:text-white tracking-tight mb-3 leading-snug">
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
                                    <Link
                                        href={p.href}
                                        className="mt-auto inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
                                    >
                                        {p.ctaLabel}
                                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── FINAL CTA ───── */}
                <section className="bg-background-light dark:bg-background-dark relative">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-20 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-4"
                        >
                            Not sure which one fits your shop yet?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed mb-8"
                        >
                            Book a live walkthrough and we&apos;ll show you both products in 30 minutes, then point you to the right starting place.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href="/reach-out"
                                className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Book a Live Demo
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link
                                href="/pricing"
                                className="px-8 py-4 text-charcoal dark:text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-primary/50 transition-colors rounded-full" />
                                <span className="relative z-10">View Pricing</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* ───── FAQ ───── */}
                <section className="bg-surface dark:bg-gray-950 relative">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-20">
                        <div className="mb-10">
                            <motion.span
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4"
                            >
                                Common questions
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight leading-tight"
                            >
                                Frequently Asked Questions
                            </motion.h2>
                        </div>
                        <motion.div
                            className="space-y-3"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-40px' }}
                        >
                            {faqs.map((faq, i) => (
                                <motion.div key={i} variants={fadeUp}>
                                    <details className="group rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 open:border-primary/30 transition-colors">
                                        <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-4 md:p-5 select-none">
                                            <h3 className="font-bold text-charcoal dark:text-white text-sm md:text-base">
                                                {faq.question}
                                            </h3>
                                            <span className="material-symbols-outlined text-secondary-text dark:text-gray-500 text-xl shrink-0 transition-transform duration-200 group-open:rotate-180">
                                                expand_more
                                            </span>
                                        </summary>
                                        <div className="px-4 md:px-5 pb-4 md:pb-5 -mt-1">
                                            <p className="text-xs md:text-sm text-secondary-text dark:text-gray-400 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </details>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
