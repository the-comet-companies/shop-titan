'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

const faqs = [
    {
        question: 'What is a print shop inventory system?',
        answer: 'A print shop inventory system tracks blank apparel and supplies by style, color, and size  - and connects that data to orders, production, and vendor management. It replaces spreadsheets and manual counts with real-time tracking and automatic reordering.',
    },
    {
        question: 'Can this track blanks by size and color?',
        answer: 'Yes. Every style × color × size combination is tracked as an individual SKU. The apparel inventory tracking system handles thousands of combinations across multiple brands and vendors.',
    },
    {
        question: 'Does it generate purchase orders automatically?',
        answer: 'Yes. When stock drops below your reorder threshold, the system generates a purchase order with the correct vendor, quantities, and pricing pre-filled. You approve and send.',
    },
    {
        question: 'Can inventory connect to my website?',
        answer: "Yes. Out-of-stock items are hidden from your storefront automatically. When stock is replenished, items reappear. No manual updates needed.",
    },
    {
        question: 'How does allocation work?',
        answer: "When an order is created, the system reserves the blanks needed. Those blanks are marked as allocated  - they can't be sold to another customer or pulled for a different job. You always know what's truly available.",
    },
    {
        question: 'Can this replace my inventory spreadsheet?',
        answer: "Yes. That's exactly what this screen printing inventory software is built to do. Stock levels, vendor data, PO history, receiving logs  - everything in a connected system where counts update automatically.",
    },
    {
        question: 'Does it work as a standalone tool?',
        answer: 'The inventory module is part of the Shop Titan FileMaker system. It works best connected to orders, production, and your website  - as part of the complete system.',
    },
    {
        question: 'How long does setup take?',
        answer: 'Inventory configuration is part of the overall system setup  - typically 2-4 weeks. We import your product catalog, set reorder thresholds, and configure vendor data during onboarding.',
    },
    {
        question: 'What makes this different from Sortly or Zoho Inventory?',
        answer: "Generic inventory tools track numbers. This print shop inventory system tracks availability  - allocated vs. available stock, connected to orders, production, and your website. It's built for apparel decoration workflows, not retail or warehouse generics.",
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Inventory Management for Print Shops',
    description: 'Real-time inventory tracking for print shops and apparel decorators. Track blanks by style, color, and size. Connected to orders, production, and ecommerce.',
    url: 'https://shoptitan.app/platform/inventory-management',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Platform', url: 'https://shoptitan.app/platform' },
    { name: 'Inventory Management', url: 'https://shoptitan.app/platform/inventory-management' },
]);

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function InventoryManagementPage() {
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
                            className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase mb-6"
                        >
                            Inventory Module
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            Inventory Management for Print Shops  - Track Blanks, Prevent Stockouts, Sync With Orders
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 space-y-4"
                        >
                            <p>
                                A print shop inventory system that tracks blank apparel by style, color, and size  - connected directly to your orders and production. Know what&apos;s in stock, what&apos;s allocated, and what needs reordering. No spreadsheets. No shelf counts. Already handling thousands of SKU combinations in real operations.
                            </p>
                            <p className="text-base text-secondary-text/80 dark:text-gray-500">
                                This print shop inventory management system is designed for apparel decorators who need real-time visibility into stock, allocation, and reorder decisions.
                            </p>
                        </motion.div>
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
                                Book a Demo  - See How Inventory Prevents Stockouts Before They Happen
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
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
                            What Is Inventory Management for Print Shops?
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl space-y-4 mb-10"
                        >
                            <p className="text-lg">
                                In simple terms, inventory management for print shops replaces spreadsheets and manual counts with a system that automatically tracks stock as it is received, allocated to orders, and used in production.
                            </p>
                            <p>
                                Unlike generic inventory tools (Sortly, Zoho Inventory, spreadsheets), a print shop inventory system needs to handle the complexity specific to apparel decoration:
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {[
                                { icon: 'grid_view', title: 'Size/color combinations', desc: 'Tracking a Comfort Colors 1717 across 47 colors and 8 sizes is thousands of individual SKU counts' },
                                { icon: 'lock', title: 'Order allocation', desc: 'Inventory reserved for specific orders so the same blanks aren\'t promised twice' },
                                { icon: 'local_shipping', title: 'Vendor relationships', desc: 'Which vendor supplies which blank, at what price, with what lead time' },
                                { icon: 'precision_manufacturing', title: 'Production integration', desc: 'Inventory deducted as jobs complete  - not when someone remembers to update a spreadsheet' },
                                { icon: 'autorenew', title: 'Automatic reordering', desc: 'Purchase orders generated when stock drops below your threshold' },
                                { icon: 'analytics', title: 'Data insights', desc: 'See which SKUs move fastest, identify dead stock, optimize reorder timing' },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="flex gap-4 p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-xl">{item.icon}</span>
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
                            className="text-sm text-secondary-text dark:text-gray-400"
                        >
                            Inventory alone doesn&apos;t solve the problem  - see how it connects inside the{' '}
                            <Link href="/platform/complete-system" className="text-primary hover:underline">complete print shop management system</Link>.
                            {' '}If your main issue is backend operations, start with our{' '}
                            <Link href="/platform/filemaker-system" className="text-primary hover:underline">FileMaker system</Link>.
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
                            What Print Shop Inventory Problems Actually Look Like
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-500 mb-12"
                        >
                            If any of these sound familiar, your inventory process is the problem.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {[
                                { num: '01', title: "You find out you're out of black mediums when the job is already on the press.", desc: "Not last week. Right now  - screens burned, team set up, customer expects Friday. The count was updated three days ago. Two orders pulled from the same stock since." },
                                { num: '02', title: 'Inventory counts are updated after the problem  - not before.', desc: "Someone walks to the shelf, counts, updates the spreadsheet. By the time they're done, another order pulled from the same stock. The count is already wrong." },
                                { num: '03', title: "You're overstocked on SKUs nobody orders.", desc: "400 ash gray XXLs from six months ago. Meanwhile, you're constantly short on black mediums and navy larges  - the blanks customers actually order." },
                                { num: '04', title: 'Purchase orders are created from memory.', desc: "Someone notices a shelf looks low. Maybe checks the spreadsheet. Calls the vendor. Orders what they think is right. No data on reorder points. No history." },
                                { num: '05', title: "Your website sells blanks you don't have.", desc: "Customer orders 100 pieces of a style that's been out of stock for two weeks. Nobody updated the website. Now you're apologizing and losing trust." },
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
                            Not Just Inventory Tracking  - Inventory Connected to Your Entire Operation
                        </motion.h2>
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2 space-y-4 text-secondary-text dark:text-gray-400 leading-relaxed"
                            >
                                <p>
                                    This isn&apos;t just inventory tracking  - it&apos;s inventory connected to your entire operation. Every time an order is created, the system checks stock. Every time blanks are received, counts update. Every time a job completes, inventory adjusts. Every time stock hits your threshold, a PO is generated.
                                </p>
                                <p>
                                    The apparel inventory tracking system handles thousands of combinations (size × color × style) and tracks them in real time  - not after someone walks to the shelf and counts.
                                </p>
                            </motion.div>
                            <motion.div
                                className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-2.5"
                                variants={stagger}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                {[
                                    'Stock levels by style, color, and size',
                                    'Automatic allocation on order creation',
                                    'PO generation at reorder thresholds',
                                    'Receiving workflow with count verification',
                                    'Vendor management with pricing & lead times',
                                    'Out-of-stock sync with your website',
                                    'SKU turnover and dead stock reports',
                                    'Reorder timing optimization',
                                ].map((f) => (
                                    <motion.div key={f} variants={fadeUp} className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-green-500 dark:text-green-400 text-sm mt-0.5 flex-shrink-0">check</span>
                                        <span className="text-sm text-charcoal dark:text-white font-medium">{f}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ───── HOW IT WORKS ───── */}
                <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-12"
                        >
                            How the Print Shop Inventory System Works
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            {[
                                { step: '01', title: 'Receive', icon: 'inventory', desc: 'Blanks arrive. Team receives them into the system  - counts verified against the PO. Stock updates immediately. Discrepancies flagged.' },
                                { step: '02', title: 'Track', icon: 'monitoring', desc: 'Every SKU tracked by style, color, and size. Available stock, allocated stock, and total on hand. The real number  - not just what\'s on the shelf.' },
                                { step: '03', title: 'Allocate', icon: 'lock', desc: 'Order created? System checks inventory and reserves blanks. Allocated stock can\'t be double-sold or pulled for another job.' },
                                { step: '04', title: 'Reorder', icon: 'autorenew', desc: 'Stock below threshold? PO generated automatically  - vendor, quantities, pricing, lead time pre-filled. No guessing, no forgetting.' },
                                { step: '05', title: 'Produce', icon: 'precision_manufacturing', desc: 'Production completes tasks, inventory adjusts. Blanks used are deducted. Waste logged. The count reflects reality.' },
                                { step: '06', title: 'Report', icon: 'analytics', desc: 'Inventory levels, turnover rates, reorder history, dead stock  - on demand. Know which SKUs move, which sit, which vendors deliver on time.' },
                            ].map((s) => (
                                <motion.div
                                    key={s.step}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/0 group-hover:bg-primary/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-lg">{s.icon}</span>
                                        </div>
                                        <span className="text-[10px] font-bold tracking-widest text-emerald-600/60 dark:text-emerald-400/60 uppercase">{s.step}</span>
                                    </div>
                                    <h3 className="font-bold text-charcoal dark:text-white mb-2">{s.title}</h3>
                                    <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{s.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
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
                                <h3 className="text-sm font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-4">Before  - Manual Inventory</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Stock counted by hand, usually after running out',
                                        'Spreadsheet updated days after the count',
                                        'Same blanks promised to multiple orders',
                                        'Purchase orders created from memory',
                                        'Website shows items that are out of stock',
                                        'No visibility into what moves and what sits',
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
                                <h3 className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-4">After  - Screen Printing Inventory Software</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Stock updated in real time as blanks are received and used',
                                        'Allocation prevents double-selling',
                                        'Auto-generated POs at reorder thresholds',
                                        'Website hides out-of-stock items automatically',
                                        'Reports show turnover, dead stock, and reorder timing',
                                        'Thousands of SKU combinations tracked without spreadsheets',
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

                {/* ───── CONNECTED SYSTEM ───── */}
                <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-4"
                        >
                            How Inventory Connects to Everything Else
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl mb-10"
                        >
                            Inventory in isolation is just counting. Inventory connected to your orders, website, production, and vendors is operational intelligence.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {[
                                { icon: 'shopping_cart', title: 'Connected to your orders', desc: "When an order is created, the system checks availability and allocates stock. If you have 200 tees and a customer orders 200, the system tells you immediately  - and triggers a PO if you're short." },
                                { icon: 'language', title: 'Connected to your website', desc: "Out-of-stock items hidden from your storefront automatically. Customers don't order what you can't deliver. When replenished, items reappear. No manual updates." },
                                { icon: 'precision_manufacturing', title: 'Connected to production', desc: "As decoration tasks complete, inventory adjusts. Blanks used in production are deducted. Your count always reflects what's actually available  - not last Tuesday's number." },
                                { icon: 'local_shipping', title: 'Connected to your vendors', desc: 'Reorder thresholds trigger POs to the right vendor, at the right price, with the right quantities. When received, stock updates and blanks are immediately available.' },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/0 group-hover:bg-primary/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
                                    <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-2xl mb-3 block">{item.icon}</span>
                                    <h3 className="font-bold text-charcoal dark:text-white mb-2 text-sm">{item.title}</h3>
                                    <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm text-secondary-text dark:text-gray-400 mt-8 text-center"
                        >
                            This is how inventory management for print shops should work  - as part of a{' '}
                            <Link href="/platform/complete-system" className="text-primary hover:underline">complete system</Link>, not a standalone app.
                            {' '}If your website and warehouse are out of sync, see how our{' '}
                            <Link href="/platform/ecommerce-storefront" className="text-primary hover:underline">ecommerce storefront</Link> connects automatically.
                        </motion.p>
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
                            className="grid grid-cols-2 md:grid-cols-5 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {[
                                { title: 'SKU Setup', desc: 'We import your product catalog  - every style, color, and size.', icon: 'grid_view' },
                                { title: 'Vendor Config', desc: 'Vendors, pricing, lead times, and reorder thresholds set up.', icon: 'local_shipping' },
                                { title: 'Data Import', desc: 'Current stock levels loaded into the system.', icon: 'upload' },
                                { title: 'Training', desc: 'Receiving, allocation, POs  - your team trained on every workflow.', icon: 'school' },
                                { title: 'Go Live', desc: 'Real inventory tracked from day one. Connected to orders.', icon: 'rocket_launch' },
                            ].map((s) => (
                                <motion.div
                                    key={s.title}
                                    variants={fadeUp}
                                    className="text-center p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900"
                                >
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                                        <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-lg">{s.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-charcoal dark:text-white text-xs mb-1">{s.title}</h3>
                                    <p className="text-[10px] text-secondary-text dark:text-gray-400 leading-relaxed">{s.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
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
                            Built For Shops With Inventory They Can&apos;t Track by Hand
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {[
                                { title: 'Shops tracking 500+ SKU combinations', desc: 'Multiple brands, dozens of styles, hundreds of color/size combos. Spreadsheets broke a long time ago.', icon: 'grid_view' },
                                { title: 'Shops that run out mid-production', desc: "If your team has ever stopped a press because blanks weren't there, you need real-time inventory with allocation.", icon: 'warning' },
                                { title: 'Shops with multiple vendors', desc: 'SanMar, S&S, Alpha Broder  - different vendors for different blanks. One system to track them all.', icon: 'groups' },
                                { title: 'Shops where website and warehouse are out of sync', desc: "If customers order blanks you don't have, you need inventory that syncs with your storefront automatically.", icon: 'sync_problem' },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/0 group-hover:bg-primary/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
                                    <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-2xl mb-3 block">{item.icon}</span>
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
                            See How You&apos;ll Never Run Out of Blanks Again
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto"
                        >
                            Watch how inventory syncs with orders and production in real time  - allocation, automatic POs, and real-time stock updates in a live system.
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
                                Book a Demo  - See Inventory Sync With Orders in Real Time
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
                            <Link href="/platform/complete-system" className="text-primary hover:underline">See the Complete System →</Link>
                        </motion.p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
