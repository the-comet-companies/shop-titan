'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

const faqs = [
    {
        question: 'Is this built on Shopify or WooCommerce?',
        answer: "No. The storefront is purpose-built for print shops. Generic ecommerce platforms don't support the workflows print shops need  - artwork uploads, size/color matrices, volume pricing, and production system integration.",
    },
    {
        question: 'Can customers upload their own artwork?',
        answer: 'Yes. Customers drag and drop design files directly onto their order. They can specify placement, decoration method, and add notes  - all before checkout.',
    },
    {
        question: 'Does the storefront connect to a production system?',
        answer: 'Yes. Orders flow directly from the website into the FileMaker system. No manual re-entry. Customer info, line items, artwork, and specs all transfer automatically.',
    },
    {
        question: 'Can I show different pricing for different customers?',
        answer: 'Yes. The system supports price tiers, volume-based pricing, and customer-specific rates. Wholesale and retail customers can see different pricing when logged in.',
    },
    {
        question: 'How long does it take to launch?',
        answer: 'Most storefronts launch in 2-3 weeks. That includes setting up your product catalog, branding, artwork upload system, and connecting to your operations system.',
    },
    {
        question: 'Do I need to manage the products myself?',
        answer: 'We set up your initial product catalog during onboarding. After that, you can add or update products yourself, or we can handle it as part of ongoing support.',
    },
    {
        question: 'Is the storefront SEO-optimized?',
        answer: 'Yes. Every page is built with meta titles, descriptions, structured data, and clean URLs. Product pages, brand pages, and category pages are all indexable by Google.',
    },
    {
        question: 'Will it work on mobile?',
        answer: 'Yes. Fully responsive. Over 60% of ecommerce traffic is mobile  - the storefront is designed and tested for phones and tablets.',
    },
    {
        question: 'What if I already have a website?',
        answer: 'We can replace it or run the storefront alongside it. If you have an existing domain, we migrate it. Your SEO history is preserved.',
    },
    {
        question: 'Can I see a live example?',
        answer: 'Yes. Book a demo and we\'ll show you a working storefront handling real orders  - with real products, real pricing, and real artwork uploads.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Ecommerce Website for Print Shops',
    description: 'Pre-built ecommerce storefront for print shops and apparel decorators. Product catalog, artwork uploads, size/color selection, volume pricing, and automatic order flow into production.',
    url: 'https://shoptitan.app/platform/ecommerce-storefront',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Platform', url: 'https://shoptitan.app/platform' },
    { name: 'Ecommerce Storefront', url: 'https://shoptitan.app/platform/ecommerce-storefront' },
]);

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function EcommerceStorefrontPage() {
    return (
        <>
            <main className="min-h-screen pt-20">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

                {/* ───── HERO ───── */}
                <section className="pt-16 md:pt-24 pb-16 md:pb-20 bg-background-light dark:bg-background-dark relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-mobile text-center relative z-10">
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wider uppercase mb-6"
                        >
                            Your Storefront
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            Ecommerce Website for Print Shops  - Online Ordering for Custom Apparel
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
                        >
                            A storefront built specifically for screen printers and apparel decorators  - with artwork uploads, size/color selection, volume pricing, and automatic order flow into your production system. Not a template. A proven storefront handling real orders every day.
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
                                See a Live Storefront in Action
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

                {/* ───── DEFINITION ───── */}
                <section className="relative bg-surface dark:bg-gray-950">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                    <div className="max-w-7xl mx-auto px-mobile py-16 md:py-20 relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-4"
                        >
                            What Is an Ecommerce Storefront for Print Shops?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-10 max-w-3xl"
                        >
                            An ecommerce storefront for print shops is an online ordering platform designed specifically for apparel decorators and custom printing businesses. Unlike standard platforms like Shopify or WooCommerce, a print shop ecommerce website handles the workflows unique to custom apparel:
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {[
                                { icon: 'upload_file', title: 'Artwork Uploads', desc: 'Customers drag and drop design files directly onto their order with placement selection' },
                                { icon: 'grid_view', title: 'Size/Color Matrices', desc: 'Customers select quantities per size per color in a grid layout, not one at a time' },
                                { icon: 'payments', title: 'Volume Pricing', desc: 'Pricing changes automatically based on order quantity and decoration method' },
                                { icon: 'loyalty', title: 'Brand Pages', desc: 'Dedicated pages for each blank apparel brand you carry  - Comfort Colors, Bella+Canvas, Gildan, and more' },
                                { icon: 'sync', title: 'Production-Ready Orders', desc: 'Orders arrive with all the information your shop needs to start production immediately' },
                                { icon: 'smartphone', title: 'Mobile Responsive', desc: 'Over 60% of traffic is mobile  - the storefront works perfectly on every device' },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="flex gap-4 p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-teal-600 dark:text-teal-400 text-xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-charcoal dark:text-white mb-1 text-sm">{item.title}</h3>
                                        <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm text-secondary-text dark:text-gray-400 mt-8"
                        >
                            A standard Shopify or Wix store isn&apos;t built for this. It&apos;s built for selling one product at one price. Print shops sell custom work with variables  - and the storefront needs to handle that.{' '}
                            <Link href="/platform/filemaker-system" className="text-primary hover:underline">
                                Already have a storefront and need a back-office system? →
                            </Link>
                        </motion.p>
                    </div>
                </section>

                {/* ───── PROBLEM ───── */}
                <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white leading-tight mb-2"
                        >
                            Why Generic Ecommerce Platforms Don&apos;t Work for Print Shops
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-500 mb-12"
                        >
                            These aren&apos;t opinions  - they&apos;re limitations.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {[
                                { num: '01', title: "Shopify doesn't handle your pricing model.", desc: "You charge by quantity, number of colors, stitch count, and decoration type  - with setup fees and quantity breaks. Shopify's pricing logic is built for retail: one product, one price." },
                                { num: '02', title: "Wix and Squarespace can't handle artwork uploads.", desc: "Customers need to upload print-ready files with their order. Generic builders don't support file uploads tied to specific products, placements, and decoration methods." },
                                { num: '03', title: "Template sites don't support size/color matrices.", desc: "Your customers order 50 black mediums, 30 black larges, and 20 navy mediums  - all on one order. Generic ecommerce treats each variant as a separate add-to-cart action." },
                                { num: '04', title: 'Your website looks nice but generates zero orders.', desc: "You paid an agency for a pretty website. It has a gallery, a contact form, and an about page. But customers can't browse, select products, upload artwork, or place an order." },
                                { num: '05', title: "Orders from your website don't connect to anything.", desc: "Even if you take online orders, someone manually re-enters them into production. Every manual step is a chance for the wrong quantity, color, or decoration to slip through." },
                            ].map((pain) => (
                                <motion.div
                                    key={pain.num}
                                    variants={fadeUp}
                                    className="relative p-3 md:p-4 rounded-xl border border-structural-border dark:border-gray-800 hover:border-rose-500/30 dark:hover:border-rose-500/20 bg-white dark:bg-gray-900 overflow-hidden group h-full transition-colors duration-300"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/0 group-hover:bg-rose-500/[0.10] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
                                    <span className="block text-[10px] font-bold tracking-widest text-rose-500/70 dark:text-rose-500/50 uppercase mb-1.5">{pain.num}</span>
                                    <p className="text-sm font-bold text-charcoal dark:text-white leading-snug mb-1">{pain.title}</p>
                                    <p className="text-xs text-secondary-text dark:text-gray-500 font-medium leading-relaxed">{pain.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── SOLUTION ───── */}
                <section className="relative bg-surface dark:bg-gray-950">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="max-w-7xl mx-auto px-mobile py-16 md:py-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-6"
                        >
                            A Storefront That Understands How Print Shops Actually Sell
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl mb-10"
                        >
                            This isn&apos;t a website template adapted for printing. It&apos;s a storefront architecture built inside a real apparel decoration operation  - handling real customer orders every day. Every feature exists because real customers used them to place real orders.
                        </motion.p>

                        {/* Features grouped by workflow */}
                        <div className="space-y-10">
                            {[
                                {
                                    label: 'Customer Experience',
                                    color: 'teal',
                                    items: [
                                        { icon: 'grid_view', title: 'Product catalog', desc: 'Browsable by category, brand, or decoration type with real product images and color swatches' },
                                        { icon: 'view_comfy', title: 'Size/color configurator', desc: 'Customers select quantities per size per color in a grid layout  - not one variant at a time' },
                                        { icon: 'upload_file', title: 'Artwork upload', desc: 'Drag and drop design files directly onto the order with placement selection' },
                                        { icon: 'payments', title: 'Volume pricing', desc: 'Prices update automatically based on quantity, showing per-piece cost and total' },
                                        { icon: 'person', title: 'Customer portal', desc: 'Order history, tracking, saved designs, and reorder capability' },
                                    ],
                                },
                                {
                                    label: 'Business Operations',
                                    color: 'primary',
                                    items: [
                                        { icon: 'sync', title: 'Automatic order flow', desc: 'Orders placed on the website flow directly into your production system with zero manual entry' },
                                        { icon: 'calculate', title: 'Pricing automation', desc: 'Pricing matrices calculate costs based on decoration type, quantity, and method' },
                                        { icon: 'database', title: 'Customer data tracking', desc: 'Every order, interaction, and contact detail captured and searchable' },
                                    ],
                                },
                                {
                                    label: 'Marketing & Growth',
                                    color: 'indigo',
                                    items: [
                                        { icon: 'trending_up', title: 'SEO-ready pages', desc: 'Meta titles, descriptions, structured data, and clean URLs built in from day one' },
                                        { icon: 'loyalty', title: 'Brand pages', desc: 'Dedicated pages for each blank apparel brand you carry  - helps customers browse by brand' },
                                        { icon: 'smartphone', title: 'Mobile optimization', desc: 'Fully responsive. Over 60% of your traffic is on mobile  - the storefront works perfectly' },
                                    ],
                                },
                            ].map((group) => (
                                <motion.div
                                    key={group.label}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-secondary-text dark:text-gray-500 mb-4">{group.label}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {group.items.map((item) => (
                                            <div
                                                key={item.title}
                                                className="flex gap-3 p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors group relative overflow-hidden"
                                            >
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/0 group-hover:bg-primary/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
                                                <span className="material-symbols-outlined text-primary text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                                                <div>
                                                    <h4 className="font-bold text-charcoal dark:text-white text-sm mb-0.5">{item.title}</h4>
                                                    <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── HOW IT CONNECTS ───── */}
                <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-4"
                        >
                            The Part Other Platforms Can&apos;t Do
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl mb-12"
                        >
                            Your storefront and your operations system are the same platform. This is what makes a Shop Titan storefront different from every other print shop website.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            {[
                                { step: '01', title: 'Customer Orders', icon: 'shopping_cart', desc: 'Customer selects product, chooses colors and sizes, uploads artwork, submits payment  - all on your website.' },
                                { step: '02', title: 'Order Appears in FileMaker', icon: 'sync', desc: 'Automatically. No email forwarding, no copy-pasting, no manual entry. Every detail transfers.' },
                                { step: '03', title: 'Inventory Checked', icon: 'inventory_2', desc: 'The system verifies blank availability. If stock is low, a purchase order is triggered automatically.' },
                                { step: '04', title: 'Production Scheduled', icon: 'precision_manufacturing', desc: 'Decoration tasks are created based on order specs. Your team sees exactly what needs to happen.' },
                                { step: '05', title: 'Customer Notified', icon: 'mail', desc: 'Order confirmation, status updates, and shipping tracking sent automatically via branded emails.' },
                                { step: '06', title: 'Order Ships', icon: 'local_shipping', desc: 'ShipStation integration handles labels and tracking. Customer gets their tracking number. Done.' },
                            ].map((s) => (
                                <motion.div
                                    key={s.step}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/0 group-hover:bg-primary/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-teal-600 dark:text-teal-400 text-lg">{s.icon}</span>
                                        </div>
                                        <span className="text-[10px] font-bold tracking-widest text-teal-600/60 dark:text-teal-400/60 uppercase">{s.step}</span>
                                    </div>
                                    <h3 className="font-bold text-charcoal dark:text-white mb-2">{s.title}</h3>
                                    <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{s.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-secondary-text dark:text-gray-400 text-sm leading-relaxed mt-8 text-center max-w-2xl mx-auto"
                        >
                            Most print shop websites stop at step 1. Your customers place an order, then someone re-enters data, checks inventory manually, and emails the production floor. That&apos;s not an ecommerce system  - that&apos;s a contact form with extra steps.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm text-primary font-medium mt-4 text-center"
                        >
                            <Link href="/platform/complete-system" className="hover:underline">
                                Want the full connected system? See Website + FileMaker →
                            </Link>
                        </motion.p>
                    </div>
                </section>

                {/* ───── BEFORE & AFTER ───── */}
                <section className="relative bg-surface dark:bg-gray-950">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="max-w-7xl mx-auto px-mobile py-16 md:py-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-12"
                        >
                            Before & After
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/30 dark:bg-rose-950/10"
                            >
                                <h3 className="text-sm font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-4">Before  - No Online Ordering</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Customers call or email to place orders',
                                        'Artwork collected via email, often lost',
                                        'Orders re-entered manually into production',
                                        'No product catalog  - customers don\'t know what you carry',
                                        'Website is a brochure that generates no revenue',
                                        'Mobile visitors bounce  - site doesn\'t work on phones',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-secondary-text dark:text-gray-400">
                                            <span className="material-symbols-outlined text-rose-500 text-sm mt-0.5 flex-shrink-0">close</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-green-200 dark:border-green-900/40 bg-green-50/30 dark:bg-green-950/10"
                            >
                                <h3 className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-4">After  - Print Shop Ecommerce Website</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Customers browse, configure, upload, and order  - 24/7',
                                        'Artwork attached directly to order with placement',
                                        'Orders flow into production system automatically',
                                        'Full product catalog with swatches, sizing, and pricing',
                                        'Storefront designed to convert visitors into customers',
                                        'Mobile-optimized  - works perfectly on every device',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-secondary-text dark:text-gray-400">
                                            <span className="material-symbols-outlined text-green-500 text-sm mt-0.5 flex-shrink-0">check</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ───── WHO THIS IS FOR ───── */}
                <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-10"
                        >
                            Built For Shops Ready to Sell Online
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {[
                                { title: 'Print shops with no online ordering', desc: "You rely on phone calls, emails, and walk-ins. You're losing customers who expect to order online  - especially younger buyers and B2B clients.", icon: 'storefront' },
                                { title: 'Shops with a website that doesn\'t generate orders', desc: "You have a website. It looks fine. But it has no product catalog, can't handle artwork uploads, and has no checkout. It's a digital business card.", icon: 'web_asset_off' },
                                { title: 'Decorators who want website + operations connected', desc: "You're tired of re-entering online orders into your system manually. You want a storefront that feeds directly into production.", icon: 'hub' },
                                { title: 'Shops selling to both retail and wholesale', desc: 'You need different pricing for different customer types, volume discounts, and B2B account management  - all from one storefront.', icon: 'groups' },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/0 group-hover:bg-primary/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
                                    <span className="material-symbols-outlined text-teal-600 dark:text-teal-400 text-2xl mb-3 block">{item.icon}</span>
                                    <h3 className="font-bold text-charcoal dark:text-white mb-1 text-sm">{item.title}</h3>
                                    <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── FAQ ───── */}
                <section className="relative bg-surface dark:bg-gray-950">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                    <div className="max-w-4xl mx-auto px-mobile py-16 md:py-20 relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-10"
                        >
                            Frequently Asked Questions
                        </motion.h2>
                        <motion.div
                            className="space-y-3"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-40px' }}
                        >
                            {faqs.map((faq, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="p-4 md:p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/20 transition-colors"
                                >
                                    <h3 className="font-bold text-charcoal dark:text-white mb-2 text-sm">{faq.question}</h3>
                                    <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── FINAL CTA ───── */}
                <section className="py-20 md:py-28 bg-background-light dark:bg-background-dark">
                    <div className="max-w-3xl mx-auto px-mobile text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-4"
                        >
                            See a Working Print Shop Storefront
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto"
                        >
                            This isn&apos;t a mockup. Customers use it to browse products, upload artwork, and place orders  - every day. Book a walkthrough and see how it works for your business.
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
                                Book a Demo  - Watch How Orders Flow Into the System
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-sm text-secondary-text dark:text-gray-400 mt-4"
                        >
                            <Link href="/pricing" className="text-primary hover:underline">View Pricing →</Link>
                        </motion.p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
