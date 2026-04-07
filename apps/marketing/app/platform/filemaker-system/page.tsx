'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

const faqs = [
    {
        question: 'What is FileMaker used for in print shops?',
        answer: 'FileMaker is a business application platform by Claris (an Apple subsidiary) used to build custom operational systems. In print shops, a FileMaker system manages quotes, orders, inventory, customer relationships, purchase orders, production tracking, and reporting  - replacing spreadsheets and disconnected tools with one connected platform.',
    },
    {
        question: 'Is FileMaker good for small business?',
        answer: "Yes. FileMaker is designed for small to mid-size businesses that need more than spreadsheets but don't need enterprise platforms like SAP or NetSuite. It's flexible, runs on Mac, PC, and mobile, and can be customized to match exactly how your business operates.",
    },
    {
        question: 'How much does a FileMaker system for print shops cost?',
        answer: 'Shop Titan charges a flat monthly fee that includes the system, cloud hosting, automated backups, support, and updates. There are no hourly development fees or surprise charges. Pricing depends on your shop size and requirements.',
    },
    {
        question: 'Is this system custom-built or pre-built?',
        answer: "It's a production-tested system refined through daily use in a real print shop. We deploy it and customize it to your specific business  - your pricing, decoration methods, email templates, and workflows. You get a proven system with personalized configuration, not a build from scratch.",
    },
    {
        question: 'Can the FileMaker system connect to my ecommerce website?',
        answer: 'Yes. The system integrates with ecommerce storefronts so that online orders flow directly into your operations without manual data entry. We also build storefronts specifically designed for print shops.',
    },
    {
        question: 'How long does implementation take?',
        answer: 'Most shops are fully operational in 2-4 weeks. That includes configuring pricing matrices, setting up decoration types, customizing email templates, migrating existing data, and training your team.',
    },
    {
        question: 'Can this replace my spreadsheets?',
        answer: "That's exactly what it's built to do. Quotes, orders, inventory, customer lists, vendor records, pricing  - everything that currently lives in Excel or Google Sheets moves into a connected system where data flows automatically between modules.",
    },
    {
        question: 'Do I need technical knowledge to use it?',
        answer: 'No. The system is designed for shop floor staff, office managers, and owners  - not IT specialists. If your team can use a web browser, they can use this system. Training is included during setup.',
    },
    {
        question: 'Can the system grow with my business?',
        answer: "Yes. The same system scales from 50 orders a month to 500+. As your operation grows  - more decoration types, more staff, more customers  - the system handles it without needing to be rebuilt.",
    },
    {
        question: 'What makes this different from Printavo, ShopWorx, or other print shop software?',
        answer: "Most print shop software was built by software companies that studied print shops. This system was built inside one. It handles custom pricing matrices for every decoration type, real inventory tracking at the SKU level, purchase orders, contractor work orders, and direct website integration. It's a complete print shop management system.",
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'FileMaker System for Print Shops',
    description: 'Pre-built FileMaker operations platform for print shops and apparel decorators. Manage quotes, orders, inventory, production, and reporting from one system.',
    url: 'https://shoptitan.app/platform/filemaker-system',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Platform', url: 'https://shoptitan.app/platform' },
    { name: 'FileMaker System', url: 'https://shoptitan.app/platform/filemaker-system' },
]);

import type { Variants } from 'framer-motion';

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function FileMakerSystemPage() {
    return (
        <>
            <main className="min-h-screen pt-20">
                {/* Schema */}
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
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6"
                        >
                            The Platform
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            FileMaker System for Print Shops  - Replace Spreadsheets, Manage Orders & Inventory
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
                        >
                            A pre-built print shop management system that handles quotes, orders, inventory, and production  - already tested in real daily operations. We deploy it into your shop, customized to your workflow, in 2-4 weeks.
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

                {/* ───── DEFINITION ───── */}
                <section className="relative bg-surface dark:bg-gray-950">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                    <div className="max-w-7xl mx-auto px-mobile py-16 md:py-20 relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-4"
                        >
                            What Is a FileMaker System for Print Shops?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-10 max-w-3xl"
                        >
                            A FileMaker system for print shops is a centralized operations platform that replaces spreadsheets, disconnected tools, and manual tracking with one connected system. It manages the core workflows of a print shop or apparel decoration business:
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {[
                                { icon: 'request_quote', title: 'Quoting', desc: 'Generate accurate quotes in minutes using pricing matrices for screen printing, embroidery, DTG, and other decoration types' },
                                { icon: 'shopping_cart', title: 'Order Management', desc: 'Track every order from intake to shipment with full visibility for your office and production team' },
                                { icon: 'inventory_2', title: 'Inventory', desc: 'Monitor blank apparel stock levels by style, color, and size in real time' },
                                { icon: 'precision_manufacturing', title: 'Production', desc: 'Assign and track tasks across decoration methods and monitor progress without walking to the floor' },
                                { icon: 'assessment', title: 'Reporting', desc: 'See financial performance, production load, and inventory status on demand' },
                                { icon: 'mail', title: 'Communication', desc: 'Send branded emails for order confirmations, status updates, and shipping notifications automatically' },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="flex gap-4 p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
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
                            className="text-sm text-primary font-medium mt-8"
                        >
                            Looking for a complete system including an online storefront?{' '}
                            <Link href="/platform/complete-system" className="underline hover:no-underline">
                                See our complete platform →
                            </Link>
                            {' '}If you&apos;re evaluating whether to{' '}
                            <Link href="/hire/filemaker-developer" className="underline hover:no-underline">
                                hire a FileMaker developer
                            </Link>, see why deploying a proven system is faster.
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
                            What Running a Print Shop Without a System Looks Like
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-500 mb-12"
                        >
                            Sound familiar?
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {[
                                { num: '01', title: 'Your pricing lives in spreadsheets nobody trusts.', desc: "Every quote means hunting for the right tab, adjusting formulas, double-checking math. A new hire can't quote without asking three questions." },
                                { num: '02', title: 'Orders disappear between the office and the floor.', desc: "A customer calls about their order. Office checks email. Production checks the whiteboard. Art checks a folder. Nobody has the full picture." },
                                { num: '03', title: "You don't know what's on your shelves until it's too late.", desc: "Blanks get allocated to one job, pulled for another, and the count hasn't been updated since last week. You find out you're short the morning the order is due." },
                                { num: '04', title: 'Every order gets entered more than once.', desc: 'Quote in one place. Confirmation in another. Production sheet printed separately. Invoice from scratch. Each handoff is a chance for errors.' },
                                { num: '05', title: 'The shop runs on your memory.', desc: "You know where every job is. But the moment you step away  - vacation, meeting, sick day  - things stall. The business depends on you being present." },
                            ].map((pain, i) => (
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
                            One System. Every Workflow. Already Proven.
                        </motion.h2>
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2 space-y-4 text-secondary-text dark:text-gray-400 leading-relaxed"
                            >
                                <p>
                                    This isn&apos;t a concept or a prototype. It&apos;s a complete FileMaker system for print shops  - running in a real apparel decoration operation, handling daily orders, managing thousands of SKUs, and coordinating production across multiple decoration methods.
                                </p>
                                <p>
                                    Every module was built because the shop needed it. Every workflow was refined under real deadlines. The edge cases were found and fixed by the people using it daily.
                                </p>
                                <p>
                                    We deploy this print shop management system into your operation and customize it to your pricing, decoration methods, team structure, and workflow. You&apos;re not starting from zero.
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
                                    'Quote system with pricing matrices',
                                    'End-to-end order management',
                                    'Real-time inventory tracking',
                                    'Customer and vendor CRM',
                                    'Purchase order system',
                                    'Contractor work orders',
                                    'Branded email templates',
                                    'Configurable task types',
                                    'Reporting & analytics',
                                    'Cloud hosting with daily backups',
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
                            From First Call to Final Shipment  - One System
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            {[
                                { step: '01', title: 'Quote', icon: 'request_quote', desc: 'Select decoration type, pricing matrix calculates everything  - setup, per-piece, quantity breaks, rush. Branded PDF sent in under 2 minutes.' },
                                { step: '02', title: 'Order', icon: 'shopping_cart', desc: 'One-click conversion from quote. All details carry over  - customer, line items, specs, artwork, due date. Visible to your entire team instantly.' },
                                { step: '03', title: 'Inventory', icon: 'inventory_2', desc: 'Tracks blanks by style, color, size. Low stock triggers a PO. Receiving updates counts automatically. No spreadsheets, no shelf counts.' },
                                { step: '04', title: 'Production', icon: 'precision_manufacturing', desc: 'Each task tracked individually  - screen printing, embroidery, sewing. Team sees what\'s due, in progress, and complete. Office sees the same.' },
                                { step: '05', title: 'Fulfillment', icon: 'local_shipping', desc: 'Packing slip generated. Shipping via ShipStation. Customer gets branded tracking email. Order closed.' },
                                { step: '06', title: 'Reporting', icon: 'assessment', desc: 'Active orders, production load, inventory levels, financials  - on demand. No month-end scramble. No manual assembly.' },
                            ].map((s) => (
                                <motion.div
                                    key={s.step}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/0 group-hover:bg-primary/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-primary text-lg">{s.icon}</span>
                                        </div>
                                        <span className="text-[10px] font-bold tracking-widest text-primary/60 uppercase">{s.step}</span>
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
                                <h3 className="text-sm font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-4">Before  - Manual Operations</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Quotes took 15-30 minutes each',
                                        'Orders tracked in email and paper job jackets',
                                        'Inventory counted by hand after running out',
                                        'Customer info across inboxes and sticky notes',
                                        '"Where\'s my order?" meant a 10-minute search',
                                        'Month-end reporting required days of work',
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
                                <h3 className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-4">After  - FileMaker System</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Quotes generated in under 2 minutes',
                                        'Every order tracked from intake to delivery',
                                        'Inventory updated automatically in real time',
                                        'Complete customer history in one place',
                                        'Order status answered in seconds',
                                        'Reports available on demand',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-secondary-text dark:text-gray-400">
                                            <span className="material-symbols-outlined text-green-500 text-sm mt-0.5 flex-shrink-0">check</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed mt-8 text-center max-w-2xl mx-auto text-sm"
                        >
                            The team didn&apos;t get bigger. The repetitive work  - data entry, status lookups, inventory counts  - was handled by the system instead of by people.
                        </motion.p>
                    </div>
                </section>

                {/* ───── BUILD VS DEPLOY ───── */}
                <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-8"
                        >
                            Build vs. Deploy
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
                                        <th className="p-4 text-left font-bold text-secondary-text">Custom Development</th>
                                        <th className="p-4 text-left font-bold text-primary">Shop Titan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Timeline', '6-12 months', '2-4 weeks'],
                                        ['Upfront Cost', '$50,000-$150,000+', 'Flat monthly fee'],
                                        ['Risk', 'Your business is the test case', 'Tested in real daily operations'],
                                        ['Features', 'You discover needs after launch', 'Built from operational needs'],
                                        ['Support', 'Developer availability varies', 'Ongoing via Slack'],
                                        ['Bugs', 'You discover them first', 'Already resolved'],
                                    ].map(([label, custom, titan], i) => (
                                        <tr key={i} className="border-b border-structural-border dark:border-gray-800 last:border-0">
                                            <td className="p-4 font-semibold text-charcoal dark:text-white whitespace-nowrap">{label}</td>
                                            <td className="p-4 text-secondary-text dark:text-gray-400">{custom}</td>
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
                            className="grid grid-cols-2 md:grid-cols-5 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {[
                                { title: 'Discovery', desc: 'We learn your operations, pricing, and pain points.', icon: 'search' },
                                { title: 'Configuration', desc: 'System set up with your pricing, tasks, and data.', icon: 'settings' },
                                { title: 'Training', desc: 'Hands-on training for your team on every module.', icon: 'school' },
                                { title: 'Go Live', desc: 'Real orders through the system from day one.', icon: 'rocket_launch' },
                                { title: 'Support', desc: 'Direct Slack access. Updates included monthly.', icon: 'support_agent' },
                            ].map((s) => (
                                <motion.div
                                    key={s.title}
                                    variants={fadeUp}
                                    className="text-center p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900"
                                >
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                        <span className="material-symbols-outlined text-primary text-lg">{s.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-charcoal dark:text-white text-sm mb-1">{s.title}</h3>
                                    <p className="text-[11px] text-secondary-text dark:text-gray-400 leading-relaxed">{s.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center text-sm text-primary font-semibold mt-6"
                        >
                            Total timeline: 2-4 weeks from discovery to go-live
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
                            Built For Shops That Have Outgrown Their Tools
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {[
                                { title: 'Print shops processing 50+ orders/month', desc: "You need a system that keeps up with volume without hiring more office staff to manage paperwork.", icon: 'print' },
                                { title: 'Apparel decorators with multiple methods', desc: 'Screen printing, embroidery, DTG, sewing  - each with different pricing and workflows. One system handles all of them.', icon: 'checkroom' },
                                { title: 'Shops that tried other software and hit limits', desc: "You've used Printavo, ShopWorx, or Airtable. You need custom pricing, real inventory, POs, and website integration.", icon: 'sync_problem' },
                                { title: 'Owners ready to stop being the system', desc: "If the shop stalls when you leave, the knowledge is in your head instead of a system. This fixes that.", icon: 'person_off' },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/0 group-hover:bg-primary/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
                                    <span className="material-symbols-outlined text-primary text-2xl mb-3 block">{item.icon}</span>
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
                            See the System in Action
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto"
                        >
                            Book a walkthrough and see exactly how this FileMaker system for print shops manages quotes, orders, inventory, and production  - and how your workflow would look inside it.
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
                                Book a Live Demo  - See How Your Workflow Would Look
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
