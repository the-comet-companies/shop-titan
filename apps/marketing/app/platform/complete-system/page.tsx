'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

const faqs = [
    {
        question: 'What is a print shop management system?',
        answer: "A print shop management system is a platform that handles the core operations of a printing or apparel decoration business — quotes, orders, inventory, production scheduling, customer management, and reporting. The Shop Titan complete system also includes an ecommerce storefront, making it a full frontend-to-backend solution.",
    },
    {
        question: 'Do I need both the website and the backend system?',
        answer: "Not necessarily. You can start with just the ecommerce storefront or just the FileMaker system. But the complete system is where the real value is — orders flowing from website to production without manual steps. Most shops that start with one add the other within a few months.",
    },
    {
        question: 'Can this all-in-one print shop software replace Printavo?',
        answer: "Yes. It covers everything Printavo does — quotes, orders, customer management — plus real inventory tracking, purchase orders, contractor work orders, website integration, and reporting that Printavo doesn't offer.",
    },
    {
        question: 'Can this replace my spreadsheets?',
        answer: 'Yes. Quotes, orders, inventory, customer lists, pricing — everything currently in Excel or Google Sheets moves into a connected system where data flows automatically.',
    },
    {
        question: 'How long does setup take for the complete system?',
        answer: 'Four to six weeks. FileMaker system first (2–3 weeks), then storefront deployment and integration (1–2 weeks). Your team is trained on both during the process.',
    },
    {
        question: 'Is this customizable?',
        answer: "Yes. The system is customized to your pricing matrices, decoration methods, email templates, branding, product catalog, and team workflow. It's a proven system with personalized configuration.",
    },
    {
        question: 'How much does the complete print shop management system cost?',
        answer: 'Flat monthly fee covering the storefront, FileMaker system, cloud hosting, backups, support, and updates. No hourly development fees. Contact us for pricing based on your shop size.',
    },
    {
        question: 'What if I already have a website?',
        answer: 'We can replace it or connect your existing site to the FileMaker system. If you have an existing domain and SEO history, we preserve it during migration.',
    },
    {
        question: 'What makes this different from buying separate tools?',
        answer: "Integration. Separate tools make you the integration layer — re-entering data, checking multiple systems, manually bridging workflows. This screen printing business system is built as one platform. Data flows between storefront and operations automatically.",
    },
    {
        question: 'Can the system grow with my business?',
        answer: 'Yes. The same print shop automation system handles 50 orders a month and 500+. As you grow, the system scales with you — no rebuilding required.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Complete Print Shop Management System',
    description: 'All-in-one print shop software — ecommerce storefront and FileMaker operations platform connected. Orders flow from website to production automatically.',
    url: 'https://shoptitan.app/platform/complete-system',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Platform', url: 'https://shoptitan.app/platform' },
    { name: 'Complete System', url: 'https://shoptitan.app/platform/complete-system' },
]);

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function CompleteSystemPage() {
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
                            className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider uppercase mb-6"
                        >
                            Complete Platform
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            Print Shop Management System — Website, Operations & Production in One Platform
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
                        >
                            This print shop management system is designed for screen printing and apparel businesses that need their ecommerce storefront and operations working as one system. Orders flow from your website directly into production — no manual entry, no disconnected tools, no gaps. Already used in real print shop operations handling daily orders, inventory, and production workflows. Deployed into yours in 4–6 weeks.
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
                                Book a Demo — Watch a Real Order Flow Through the System
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
                            What Is a Complete Print Shop Management System?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-4 max-w-3xl"
                        >
                            In simple terms, a print shop management system replaces spreadsheets, disconnected apps, and manual processes with one system that handles orders, inventory, production, and customer data in one place.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed mb-10 max-w-3xl"
                        >
                            But this all-in-one print shop software goes further. It connects your customer-facing storefront directly to your back-office operations — so the moment a customer places an order online, your entire shop knows about it.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {[
                                { icon: 'storefront', title: 'Storefront', desc: 'Customers browse products, upload artwork, select sizes/colors, and place orders online' },
                                { icon: 'shopping_cart', title: 'Order Management', desc: 'Every order tracked from intake to delivery with full visibility' },
                                { icon: 'inventory_2', title: 'Inventory', desc: 'Blank apparel stock monitored in real time by style, color, and size' },
                                { icon: 'precision_manufacturing', title: 'Production', desc: 'Tasks assigned and tracked across screen printing, embroidery, DTG, and sewing' },
                                { icon: 'local_shipping', title: 'Fulfillment', desc: 'Packing slips, shipping labels, tracking emails — automated' },
                                { icon: 'assessment', title: 'Reporting', desc: 'Revenue, production load, inventory levels, and profitability on demand' },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="flex gap-4 p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400 text-xl">{item.icon}</span>
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
                            If you only need the storefront, you can start with our{' '}
                            <Link href="/platform/ecommerce-storefront" className="text-primary hover:underline">ecommerce website for print shops</Link>.
                            If your issue is backend operations, our{' '}
                            <Link href="/platform/filemaker-system" className="text-primary hover:underline">FileMaker system</Link> handles that.
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
                            What Happens When Your Website and Operations Don&apos;t Talk to Each Other
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-500 mb-12"
                        >
                            The cost of disconnected tools.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {[
                                { num: '01', title: "Your website takes orders. Your system doesn't know about them.", desc: "A customer orders at 9pm. Nobody sees it until someone checks email the next morning. Then they re-enter it manually — name, product, sizes, colors, artwork." },
                                { num: '02', title: 'Manual data entry creates errors you catch too late.', desc: "The order said 50 black mediums and 30 navy larges. Someone transposed the numbers. You don't find out until it's on the press — or after it ships." },
                                { num: '03', title: "You can't see the full picture from anywhere.", desc: "Website shows orders. App shows production. Spreadsheet shows inventory. Email shows customer comms. No single view tells you what's happening." },
                                { num: '04', title: 'Your team wastes hours on work the system should handle.', desc: "Confirmation emails sent manually. Inventory checked by walking to the shelf. Status updates by phone. An all-in-one print shop software eliminates all of this." },
                                { num: '05', title: "You're paying for 5 tools that don't connect.", desc: "Website hosting. CRM. Inventory spreadsheet. Order app. Accounting. Each costs money. None share data. You're the integration layer — and you don't scale." },
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

                {/* ───── HOW IT WORKS ───── */}
                <section className="relative bg-surface dark:bg-gray-950">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="max-w-7xl mx-auto px-mobile py-16 md:py-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-4"
                        >
                            One Order, One System — From Website to Shipment
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl mb-12"
                        >
                            Every step connected. No manual handoffs. This is how a print shop automation system should work.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            {[
                                { step: '01', title: 'Customer Finds You', icon: 'search', desc: 'SEO-optimized, mobile-responsive storefront. Customers browse your catalog, see brand pages, and view pricing.' },
                                { step: '02', title: 'Customer Places Order', icon: 'shopping_cart', desc: 'Products selected, colors/sizes chosen in a grid, artwork uploaded with placement, checkout completed.' },
                                { step: '03', title: 'Order Appears in FileMaker', icon: 'sync', desc: 'Automatically. Customer details, line items, artwork, decoration specs, due date — all transferred. Zero re-entry.' },
                                { step: '04', title: 'Inventory Checked', icon: 'inventory_2', desc: 'Blank availability verified. Stock allocated. If low, a purchase order is triggered to your vendor automatically.' },
                                { step: '05', title: 'Production Scheduled', icon: 'precision_manufacturing', desc: 'Tasks created per decoration method. Team sees what\'s due, in progress, and complete.' },
                                { step: '06', title: 'Customer Notified', icon: 'mail', desc: 'Confirmation, updates, and shipping tracking sent automatically via branded email templates.' },
                                { step: '07', title: 'Order Ships', icon: 'local_shipping', desc: 'Packing slip generated. Label via ShipStation. Tracking sent. Order complete. Revenue logged.' },
                            ].map((s) => (
                                <motion.div
                                    key={s.step}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/0 group-hover:bg-primary/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400 text-lg">{s.icon}</span>
                                        </div>
                                        <span className="text-[10px] font-bold tracking-widest text-indigo-600/60 dark:text-indigo-400/60 uppercase">{s.step}</span>
                                    </div>
                                    <h3 className="font-bold text-charcoal dark:text-white mb-2">{s.title}</h3>
                                    <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{s.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── WHAT YOU GET ───── */}
                <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-12"
                        >
                            Everything Your Print Shop Needs — Frontend and Backend
                        </motion.h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Frontend */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-6 md:p-8 rounded-2xl border border-teal-200 dark:border-teal-900/40 bg-teal-50/30 dark:bg-teal-950/10"
                            >
                                <h3 className="text-sm font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-5">Your Online Storefront (Frontend)</h3>
                                <div className="space-y-3">
                                    {[
                                        'Product catalog with color swatches, sizing, and images',
                                        'Size/color quantity grid — multiple variants at once',
                                        'Drag-and-drop artwork upload with placement selection',
                                        'Volume-based pricing that calculates automatically',
                                        'Brand pages for every blank apparel line',
                                        'Customer portal with order history and reorder',
                                        'Mobile-responsive on every device',
                                        'SEO-optimized pages for Google visibility',
                                    ].map((f, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-teal-500 text-sm mt-0.5 flex-shrink-0">check</span>
                                            <span className="text-sm text-charcoal dark:text-white font-medium">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Backend */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-6 md:p-8 rounded-2xl border border-primary/20 dark:border-primary/30 bg-primary/[0.03] dark:bg-primary/[0.05]"
                            >
                                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-5">Your Operations System (Backend)</h3>
                                <div className="space-y-3">
                                    {[
                                        'Quote system with auto-calculated pricing matrices',
                                        'End-to-end order management from intake to shipment',
                                        'Real-time inventory tracking by style, color, and size',
                                        'Customer and vendor CRM with relationship history',
                                        'Purchase order system with receiving and allocation',
                                        'Contractor work orders for outsourced decoration',
                                        'Configurable task types for any decoration method',
                                        'Branded email templates with automation',
                                        'Reporting across orders, production, and revenue',
                                        'Cloud hosting on AWS with daily backups',
                                    ].map((f, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-primary text-sm mt-0.5 flex-shrink-0">check</span>
                                            <span className="text-sm text-charcoal dark:text-white font-medium">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-secondary-text dark:text-gray-400 text-sm text-center mt-8 max-w-2xl mx-auto"
                        >
                            Data flows between the storefront and operations system in real time. Orders appear instantly. Inventory syncs automatically. Customer data is shared. Nothing is duplicated.
                        </motion.p>
                    </div>
                </section>

                {/* ───── REAL WORKFLOW ───── */}
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
                            What a Real Order Looks Like in the Complete System
                        </motion.h2>
                        <motion.div
                            className="space-y-6"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-40px' }}
                        >
                            {[
                                { time: 'Monday, 2:14 PM', title: 'Customer places an order', desc: 'Selects 200 Comfort Colors 1717 tees in 4 colors, uploads logo, selects left chest embroidery, checks out. Total calculated automatically. Payment processed.' },
                                { time: 'Monday, 2:14 PM', title: 'Order hits your system', desc: 'Appears in FileMaker immediately. Customer info, products, sizes per color, artwork file, decoration specs, due date — all there. No email to check. No data to re-enter.' },
                                { time: 'Monday, 2:15 PM', title: 'Inventory checked', desc: '180 of 200 tees in stock. Purchase order for remaining 20 generated automatically and sent to vendor.' },
                                { time: 'Monday, 2:16 PM', title: 'Customer receives confirmation', desc: 'Branded email sent automatically with order details, estimated delivery, and tracking link.' },
                                { time: 'Tuesday, 10:00 AM', title: 'Blanks arrive', desc: 'Remaining 20 tees received into the system. Inventory updates. Order fully allocated.' },
                                { time: 'Tuesday, 11:00 AM', title: 'Production begins', desc: 'Embroidery task created and assigned. Thread colors, placement, stitch count, quantity per size — visible to production team.' },
                                { time: 'Wednesday, 3:00 PM', title: 'Production complete', desc: 'Task marked complete. Quality checked. Order status updates automatically.' },
                                { time: 'Wednesday, 4:00 PM', title: 'Order ships', desc: 'Packing slip generated. Shipping label via ShipStation. Tracking sent to customer. Order fulfilled. Revenue logged.' },
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="flex gap-4 md:gap-6"
                                >
                                    <div className="flex-shrink-0 flex flex-col items-center">
                                        <div className="w-3 h-3 rounded-full bg-indigo-500 mt-1.5" />
                                        {i < 7 && <div className="w-px flex-1 bg-structural-border dark:bg-gray-800 mt-1" />}
                                    </div>
                                    <div className="pb-2">
                                        <span className="text-[10px] font-bold tracking-widest text-indigo-500/70 uppercase">{step.time}</span>
                                        <h3 className="font-bold text-charcoal dark:text-white text-sm mt-1">{step.title}</h3>
                                        <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed mt-1">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-8 text-center"
                        >
                            Total manual data entry across the entire flow: zero.
                        </motion.p>
                    </div>
                </section>

                {/* ───── COMPARISON ───── */}
                <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-8"
                        >
                            Disconnected Tools vs. One Connected Screen Printing Business System
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="overflow-x-auto rounded-2xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900"
                        >
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-structural-border dark:border-gray-800">
                                        <th className="p-4 text-left font-bold text-charcoal dark:text-white"></th>
                                        <th className="p-4 text-left font-bold text-secondary-text">Disconnected Tools</th>
                                        <th className="p-4 text-left font-bold text-primary">Shop Titan Complete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Online orders', 'Re-entered manually', 'Flow into FileMaker automatically'],
                                        ['Inventory', 'Spreadsheet or hand count', 'Real time, synced with website'],
                                        ['Customer data', 'Scattered across tools', 'One shared record'],
                                        ['Production', 'Phone or whiteboard', 'Tracked per task, visible to all'],
                                        ['Customer updates', 'Sent manually', 'Automated branded emails'],
                                        ['Reporting', 'Monthly spreadsheet assembly', 'On demand, one dashboard'],
                                        ['Cost', '4–6 separate subscriptions', 'One platform, one fee'],
                                        ['Integration', 'You are the integration', 'Built-in by default'],
                                    ].map(([label, disco, titan], i) => (
                                        <tr key={i} className="border-b border-structural-border dark:border-gray-800 last:border-0">
                                            <td className="p-4 font-semibold text-charcoal dark:text-white whitespace-nowrap">{label}</td>
                                            <td className="p-4 text-secondary-text dark:text-gray-400">{disco}</td>
                                            <td className="p-4 text-charcoal dark:text-white font-medium">{titan}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    </div>
                </section>

                {/* ───── IMPLEMENTATION ───── */}
                <section className="relative bg-surface dark:bg-gray-950">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="max-w-7xl mx-auto px-mobile py-16 md:py-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-10"
                        >
                            What Happens After You Get Started
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {[
                                { title: 'Discovery', desc: 'Learn your operations and pain points.', icon: 'search' },
                                { title: 'FileMaker Setup', desc: 'Pricing, tasks, templates, data migration.', icon: 'settings' },
                                { title: 'Storefront Build', desc: 'Branding, catalog, artwork upload.', icon: 'storefront' },
                                { title: 'Integration', desc: 'Connect storefront to FileMaker. Test full flow.', icon: 'hub' },
                                { title: 'Training', desc: 'Hands-on for office and production staff.', icon: 'school' },
                                { title: 'Go Live', desc: 'Real orders through both systems.', icon: 'rocket_launch' },
                                { title: 'Support', desc: 'Slack access. Updates included.', icon: 'support_agent' },
                            ].map((s) => (
                                <motion.div
                                    key={s.title}
                                    variants={fadeUp}
                                    className="text-center p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900"
                                >
                                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-3">
                                        <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400 text-lg">{s.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-charcoal dark:text-white text-xs mb-1">{s.title}</h3>
                                    <p className="text-[10px] text-secondary-text dark:text-gray-400 leading-relaxed">{s.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center text-sm text-indigo-600 dark:text-indigo-400 font-semibold mt-6"
                        >
                            Total timeline: 4–6 weeks from discovery to go-live
                        </motion.p>
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
                            Built For Shops Ready to Run on One System
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {[
                                { title: 'Shops ready to stop duct-taping tools together', desc: "Website here, CRM there, spreadsheets for inventory, email for everything else. This all-in-one print shop software replaces all of it.", icon: 'build' },
                                { title: 'Growing shops that need online ordering + operations', desc: "You're adding online ordering but don't want orders in a separate system. Start with everything integrated from day one.", icon: 'trending_up' },
                                { title: 'Decorators scaling past manual workflows', desc: "At a certain size, manual processes break. This print shop automation system absorbs that complexity so your team can focus on production.", icon: 'speed' },
                                { title: 'Shops that outgrew Printavo, Shopify, or Airtable', desc: "Printavo does orders but not inventory. Shopify does websites but not production. You need a screen printing business system that does it all.", icon: 'sync_problem' },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/0 group-hover:bg-primary/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
                                    <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400 text-2xl mb-3 block">{item.icon}</span>
                                    <h3 className="font-bold text-charcoal dark:text-white mb-1 text-sm">{item.title}</h3>
                                    <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm text-secondary-text dark:text-gray-400 mt-6 text-center"
                        >
                            Not sure which option fits?{' '}
                            <Link href="/reach-out" className="text-primary hover:underline">Talk to us</Link> and we&apos;ll help you decide.
                            {' '}Or if you&apos;re considering whether to{' '}
                            <Link href="/hire/filemaker-developer" className="text-primary hover:underline">hire a FileMaker developer</Link>, see why deploying beats building.
                        </motion.p>
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
                            See How Your Shop Would Run With One Connected System
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto"
                        >
                            Storefront and back office, connected. Orders flow from your website to production without a single manual step. Book a walkthrough and watch a real order move through the entire system.
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
                                Book a Demo — Watch a Real Order Flow Through the System
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
