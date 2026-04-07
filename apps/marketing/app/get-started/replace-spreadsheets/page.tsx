'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

const faqs = [
    {
        question: 'Can I replace my print shop spreadsheets with software?',
        answer: 'Yes. A print shop management system replaces spreadsheets for orders, inventory, production tracking, quoting, and customer management — with everything connected in real time instead of scattered across files.',
    },
    {
        question: 'How do I migrate from spreadsheets to a print shop management system?',
        answer: 'We import your existing spreadsheet data — customers, products, pricing, vendor info — into the system during onboarding. Your spreadsheets become the starting point, not something you lose.',
    },
    {
        question: "What's better than spreadsheets for managing a print shop?",
        answer: 'A connected system where orders, inventory, production, and your website share the same data. Unlike spreadsheets, changes happen in real time — no version conflicts, no broken formulas, no manual updates.',
    },
    {
        question: 'How long does it take to switch from spreadsheets?',
        answer: 'Typical deployment takes 2–4 weeks. That includes data import, system configuration, workflow mapping, and team training. You run both systems in parallel until the transition is complete.',
    },
    {
        question: 'Will I lose my data when switching from spreadsheets?',
        answer: "No. We don't rebuild your data — we structure it. Your existing spreadsheets are exported, cleaned, and imported into the system. Nothing is lost — it's organized into a connected platform.",
    },
    {
        question: 'What print shop data can be imported from spreadsheets?',
        answer: 'Customer lists, product catalogs, pricing matrices, vendor information, inventory counts, and order history. If it exists in a spreadsheet, it can be structured and imported.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Replace Print Shop Spreadsheets',
    description: 'Replace spreadsheets with a connected print shop management system. Orders, inventory, production, and customer data — all in one platform.',
    url: 'https://shoptitan.app/get-started/replace-spreadsheets',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Get Started', url: 'https://shoptitan.app/get-started' },
    { name: 'Replace Spreadsheets', url: 'https://shoptitan.app/get-started/replace-spreadsheets' },
]);

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function ReplaceSpreadsheetsPage() {
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
                            className="inline-block px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-bold tracking-wider uppercase mb-6"
                        >
                            Stop Using Spreadsheets
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            Replace Print Shop Spreadsheets With a Management System That Scales
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 space-y-4"
                        >
                            <p>
                                You built your business on spreadsheets. They got you here. But they can&apos;t take you further — missed orders, broken formulas, and zero visibility are costing you money every week. It&apos;s time to move from manual tracking to a connected print shop workflow system.
                            </p>
                            <p className="text-base text-secondary-text/80 dark:text-gray-500">
                                You don&apos;t need to start over. You need software instead of spreadsheets — a system that imports your data and connects everything.
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
                                Book a Demo — Replace Spreadsheets With a Connected System
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
                            Why Do Print Shops Still Use Spreadsheets?
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl space-y-4 mb-10"
                        >
                            <p className="text-lg">
                                Print shops often start with spreadsheets because they are easy to set up and flexible. But as orders, inventory, and production grow, spreadsheets become harder to manage, prone to errors, and disconnected from real-time operations.
                            </p>
                            <p>
                                In simple terms, spreadsheets work for tracking data — but not for running a print shop. This is where a <Link href="/platform/complete-system" className="text-primary hover:underline">complete print shop management system</Link> becomes necessary.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {[
                                { icon: 'error', title: 'No real-time sync', desc: 'Spreadsheets are static. By the time you update a count, it\'s already wrong.' },
                                { icon: 'people', title: 'Multi-user chaos', desc: 'Two people editing the same sheet means conflicting versions and lost data.' },
                                { icon: 'link_off', title: 'Nothing is connected', desc: 'Orders, inventory, production, and customers live in separate tabs with no link between them.' },
                                { icon: 'functions', title: 'Fragile formulas', desc: 'One wrong edit breaks pricing, totals, or reporting for the entire sheet.' },
                                { icon: 'school', title: 'Impossible to train', desc: 'New employees take weeks to understand your spreadsheet system — and still make mistakes.' },
                                { icon: 'visibility_off', title: 'Zero visibility', desc: 'You can\'t answer basic questions without digging through multiple sheets and tabs.' },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="flex gap-4 p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-rose-500/30 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-rose-600 dark:text-rose-400 text-xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-charcoal dark:text-white mb-1 text-sm">{item.title}</h3>
                                        <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── PAIN POINTS ───── */}
                <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white leading-tight mb-2"
                        >
                            Sound Familiar?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-500 mb-12"
                        >
                            If you recognize these, your spreadsheets are the bottleneck.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {[
                                { num: '01', title: 'Someone edits row 342 and breaks the entire pricing formula.', desc: 'One accidental change cascades through the sheet. You don\'t notice until a customer gets quoted the wrong price — or worse, you lose money on a job.' },
                                { num: '02', title: 'Two people update the same file — now you have conflicting versions.', desc: 'The office updated the order sheet. Production updated their copy. Neither matches. Nobody knows which is right.' },
                                { num: '03', title: 'You can\'t answer basic questions without digging through multiple sheets.', desc: '"How many orders shipped this week?" "What\'s our revenue this month?" 20 minutes of filtering, copying, and cross-referencing to get a number you should see instantly.' },
                                { num: '04', title: 'New employee takes 3 weeks to learn your spreadsheet system.', desc: 'Color-coded tabs, hidden columns, custom formulas that only the owner understands. Training is a nightmare because there is no system — just a collection of files.' },
                                { num: '05', title: 'Customer calls asking about their order — you open 4 tabs to find the answer.', desc: 'Order status in one sheet. Tracking in another. Payment in a third. By the time you find the info, the customer is frustrated and you look disorganized.' },
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

                {/* ───── WHAT YOU'RE TRACKING ───── */}
                <section className="relative bg-surface dark:bg-gray-950">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="max-w-7xl mx-auto px-mobile py-16 md:py-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-4"
                        >
                            What You&apos;re Tracking in Spreadsheets — and Why It Breaks
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl mb-12"
                        >
                            Every print shop tracks the same things. In a spreadsheet, they&apos;re disconnected tabs. In a print shop management software, they&apos;re one connected system.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            {[
                                {
                                    title: 'Orders & Jobs',
                                    icon: 'shopping_cart',
                                    breaks: 'Status not synced — production doesn\'t know what\'s approved, office doesn\'t know what shipped.',
                                    system: 'Real-time order tracking from intake to delivery. Every department sees the same status.',
                                },
                                {
                                    title: 'Inventory',
                                    icon: 'inventory_2',
                                    breaks: 'Outdated counts. You find out you\'re out of stock when the job is already on the press.',
                                    system: 'Live stock levels with automatic allocation. Counts update as blanks are received and used.',
                                    link: '/platform/inventory-management',
                                    linkText: 'See inventory management',
                                },
                                {
                                    title: 'Production',
                                    icon: 'precision_manufacturing',
                                    breaks: 'No visibility into what\'s printing, what\'s queued, or what\'s late. You walk the floor to find out.',
                                    system: 'Job tracking by department with real-time status. Your team knows what\'s next without asking.',
                                    link: '/platform/production-automation',
                                    linkText: 'See production management',
                                },
                                {
                                    title: 'Quotes & Pricing',
                                    icon: 'request_quote',
                                    breaks: 'Manual calculations with fragile formulas. Inconsistent pricing across sales reps.',
                                    system: 'Automated quote generation with pricing matrices. Every quote is accurate and consistent.',
                                },
                                {
                                    title: 'Customers & Vendors',
                                    icon: 'people',
                                    breaks: 'Contact info scattered across sheets, emails, and sticky notes. No relationship history.',
                                    system: 'Unified CRM with order history, communication logs, and vendor management in one place.',
                                },
                                {
                                    title: 'Invoicing & Payments',
                                    icon: 'receipt_long',
                                    breaks: 'Manually creating invoices from order data. Payments tracked in a separate file.',
                                    system: 'Invoices generated automatically from completed orders. Payment status tracked in real time.',
                                },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                                        </div>
                                        <h3 className="font-bold text-charcoal dark:text-white">{item.title}</h3>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-rose-500 text-sm mt-0.5 flex-shrink-0">close</span>
                                            <div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-500/70 block mb-0.5">Spreadsheet</span>
                                                <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{item.breaks}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-green-500 text-sm mt-0.5 flex-shrink-0">check</span>
                                            <div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-green-500/70 block mb-0.5">Connected System</span>
                                                <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{item.system}</p>
                                            </div>
                                        </div>
                                        {'link' in item && item.link && (
                                            <Link href={item.link} className="text-xs text-primary hover:underline font-medium block mt-2">
                                                {item.linkText} →
                                            </Link>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── BEFORE & AFTER ───── */}
                <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-12"
                        >
                            Spreadsheets vs. a Connected Print Shop System
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/30 dark:bg-rose-950/10"
                            >
                                <h3 className="text-sm font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-4">Spreadsheets</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Data scattered across multiple files and tabs',
                                        'Manual updates that are outdated by the time they\'re done',
                                        'No connection between orders, inventory, and production',
                                        'Broken formulas and version conflicts',
                                        'Weeks of training for new employees',
                                        'No real-time visibility into operations',
                                        'Reports require hours of manual assembly',
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
                                <h3 className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-4">Shop Titan — Connected System</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Everything in one platform — orders, inventory, production, customers',
                                        'Real-time updates as events happen',
                                        'Orders automatically create production jobs',
                                        'Inventory adjusts when stock is received or used',
                                        'New employees follow guided workflows from day one',
                                        'Instant visibility into every job and department',
                                        'Reports generated on demand — no assembly required',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-secondary-text dark:text-gray-400">
                                            <span className="material-symbols-outlined text-green-500 text-sm mt-0.5 flex-shrink-0">check</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-6 h-48 rounded-xl bg-gray-100 dark:bg-gray-800 border border-structural-border dark:border-gray-800 flex items-center justify-center"
                        >
                            <span className="text-sm text-secondary-text dark:text-gray-500">(Screenshot: Spreadsheet vs system dashboard side-by-side)</span>
                        </motion.div>
                    </div>
                </section>

                {/* ───── MIGRATION ───── */}
                <section className="relative bg-surface dark:bg-gray-950">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="max-w-7xl mx-auto px-mobile py-16 md:py-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-4"
                        >
                            You Don&apos;t Lose Your Data — We Structure It
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl space-y-4 mb-12"
                        >
                            <p>
                                We don&apos;t rebuild your data — we structure it. Your existing spreadsheets become your starting point. Customers, products, pricing, vendor info — everything is imported and organized into a connected system.
                            </p>
                            <p>
                                You run both systems in parallel during the transition. Nothing is lost. Nothing is rushed.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            {[
                                { step: '01', title: 'Export', desc: 'Export your existing spreadsheets — orders, customers, products, pricing, vendors. We tell you exactly what we need.', icon: 'upload_file' },
                                { step: '02', title: 'Clean', desc: 'We review your data for duplicates, inconsistencies, and formatting issues. You approve before anything is imported.', icon: 'cleaning_services' },
                                { step: '03', title: 'Import', desc: 'Data imported into the system — structured, connected, and ready. Customers link to orders. Products link to inventory.', icon: 'download' },
                                { step: '04', title: 'Verify', desc: 'You verify the data is correct. Run both systems in parallel. Compare results. Build confidence before switching.', icon: 'fact_check' },
                                { step: '05', title: 'Go Live', desc: 'Spreadsheets retired. Your team runs on a connected print shop workflow system. Live support throughout the transition.', icon: 'rocket_launch' },
                            ].map((s) => (
                                <motion.div
                                    key={s.step}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/0 group-hover:bg-primary/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-9 h-9 rounded-lg bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-rose-600 dark:text-rose-400 text-lg">{s.icon}</span>
                                        </div>
                                        <span className="text-[10px] font-bold tracking-widest text-rose-600/60 dark:text-rose-400/60 uppercase">{s.step}</span>
                                    </div>
                                    <h3 className="font-bold text-charcoal dark:text-white mb-2">{s.title}</h3>
                                    <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{s.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
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
                            From Manual Tracking to a Connected System
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl mb-10"
                        >
                            The real problem with spreadsheets isn&apos;t the data — it&apos;s the disconnect. When you replace spreadsheets with a connected system, everything talks to everything else.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    icon: 'shopping_cart',
                                    title: 'Orders flow without manual entry',
                                    desc: 'Website orders automatically create jobs in the system. No re-keying from one sheet to another. Specs, quantities, and deadlines arrive with the order.',
                                    link: '/platform/ecommerce-storefront',
                                    linkText: 'See the ecommerce storefront',
                                },
                                {
                                    icon: 'inventory_2',
                                    title: 'Inventory adjusts in real time',
                                    desc: 'Stock counts update when blanks are received, allocated, or used in production. No manual counting. No outdated spreadsheet numbers.',
                                    link: '/platform/inventory-management',
                                    linkText: 'See inventory management',
                                },
                                {
                                    icon: 'precision_manufacturing',
                                    title: 'Production updates automatically',
                                    desc: 'Jobs move through departments with status updates at every stage. Your team knows what\'s printing, what\'s next, and what\'s late — without a whiteboard.',
                                    link: '/platform/production-automation',
                                    linkText: 'See production management',
                                },
                                {
                                    icon: 'analytics',
                                    title: 'Reports generate instantly',
                                    desc: 'Revenue, production output, inventory levels, and customer history — on demand. No formulas, no assembly, no 20-minute data hunts.',
                                    link: '/platform/filemaker-system',
                                    linkText: 'See the FileMaker system',
                                },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                                        </div>
                                        <h3 className="font-bold text-charcoal dark:text-white">{item.title}</h3>
                                    </div>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed mb-3">{item.desc}</p>
                                    <Link href={item.link} className="text-xs text-primary hover:underline font-medium">
                                        {item.linkText} →
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── FAQ ───── */}
                <section className="relative bg-surface dark:bg-gray-950">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="max-w-3xl mx-auto px-mobile py-16 md:py-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-10"
                        >
                            Frequently Asked Questions
                        </motion.h2>
                        <motion.div
                            className="space-y-6"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {faqs.map((faq) => (
                                <motion.div key={faq.question} variants={fadeUp} className="pb-6 border-b border-structural-border dark:border-gray-800 last:border-0">
                                    <h3 className="font-bold text-charcoal dark:text-white mb-2">{faq.question}</h3>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── CTA ───── */}
                <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark">
                    <div className="max-w-3xl mx-auto px-mobile text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-4"
                        >
                            See How Your Print Shop Runs Without Spreadsheets
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 mb-8 max-w-2xl mx-auto"
                        >
                            From manual tracking to a connected print shop management software — orders, inventory, production, and your website in one system. Your spreadsheets got you here. A system takes you further.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                        >
                            <Link
                                href="/reach-out"
                                className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Book a Demo
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link
                                href="/platform/complete-system"
                                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/5 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                See the Complete System
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-secondary-text dark:text-gray-500"
                        >
                            <Link href="/platform/complete-system" className="hover:text-primary transition-colors">Complete System</Link>
                            <span className="text-structural-border dark:text-gray-700">·</span>
                            <Link href="/platform/filemaker-system" className="hover:text-primary transition-colors">FileMaker System</Link>
                            <span className="text-structural-border dark:text-gray-700">·</span>
                            <Link href="/platform/inventory-management" className="hover:text-primary transition-colors">Inventory Management</Link>
                            <span className="text-structural-border dark:text-gray-700">·</span>
                            <Link href="/platform/production-automation" className="hover:text-primary transition-colors">Production Management</Link>
                            <span className="text-structural-border dark:text-gray-700">·</span>
                            <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
