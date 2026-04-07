'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

const faqs = [
    {
        question: 'How do print shops track production?',
        answer: 'Print shops track production using a system that assigns jobs to departments, updates status in real time, and shows what is printing, what is queued, and what is at risk — replacing whiteboards and manual check-ins.',
    },
    {
        question: 'What is print shop production scheduling?',
        answer: 'Print shop production scheduling is the process of organizing jobs by priority, print method, and deadline — so your team knows exactly what to run next without asking a manager.',
    },
    {
        question: 'How do you manage rush orders in a print shop?',
        answer: 'Rush orders are flagged in the system with a priority level. The production queue automatically adjusts — moving the rush job ahead while recalculating deadlines for other jobs so nothing is silently pushed late.',
    },
    {
        question: 'What software do screen printers use for production management?',
        answer: 'Screen printers use production management systems that handle job tracking, task assignment, scheduling, and quality control. Shop Titan uses a FileMaker-based system built specifically for apparel decoration workflows.',
    },
    {
        question: 'Can a production system handle multiple print methods?',
        answer: 'Yes. A print shop production system routes jobs to the correct department based on print method — screen printing, DTG, embroidery, or heat transfer — with each station seeing only their assigned work.',
    },
    {
        question: 'What is a job tracking system for print shops?',
        answer: 'A job tracking system for print shops follows every order from intake through art approval, production, quality check, and shipping — giving real-time visibility into where every job stands without walking the floor.',
    },
    {
        question: 'How does production connect to inventory?',
        answer: 'When a job enters production, the system checks that blanks are allocated and available. Inventory is deducted as production completes — so stock counts always reflect reality, not estimates.',
    },
    {
        question: 'How long does it take to set up a production system?',
        answer: 'Production configuration is part of the overall Shop Titan deployment — typically 2–4 weeks. We map your departments, define workflows, configure task types, and train your team during onboarding.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Production Management for Print Shops',
    description: 'Print shop production management system that tracks jobs from art approval to shipment. Real-time scheduling, task assignment, rush order handling, and multi-method routing.',
    url: 'https://shoptitan.app/platform/production-automation',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Platform', url: 'https://shoptitan.app/platform' },
    { name: 'Production Management', url: 'https://shoptitan.app/platform/production-automation' },
]);

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function ProductionAutomationPage() {
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
                            className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold tracking-wider uppercase mb-6"
                        >
                            Production Module
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            Production Management for Print Shops — Track Jobs, Control Scheduling, Prevent Delays
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 space-y-4"
                        >
                            <p>
                                A print shop production management system that tracks every job from art approval to shipment. Know what&apos;s printing, what&apos;s next, and what&apos;s late — without walking the floor. Handle screen printing production tracking, rush orders, and multi-method routing in one connected system.
                            </p>
                            <p className="text-base text-secondary-text/80 dark:text-gray-500">
                                Already running in production. Deploys in 2–4 weeks.
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
                                Book a Demo — See Every Job Tracked From Order to Shipment
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
                            What Is Print Shop Production Management?
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl space-y-4 mb-10"
                        >
                            <p className="text-lg">
                                Print shop production management is the process of tracking and controlling every job from art approval to shipment — including scheduling, task assignment, and real-time status updates across departments like screen printing, DTG, and embroidery.
                            </p>
                            <p>
                                In simple terms, it replaces whiteboards, spreadsheets, and manual check-ins with a system that shows exactly what&apos;s in production, what&apos;s next, and what&apos;s at risk.
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
                                { icon: 'dashboard', title: 'Real-time job board', desc: 'See every job\'s status — queued, in production, in QC, shipped — without asking anyone or walking the floor' },
                                { icon: 'schedule', title: 'Production scheduling', desc: 'Jobs organized by priority, deadline, and print method so your team knows exactly what runs next' },
                                { icon: 'assignment_ind', title: 'Task assignment', desc: 'Each department sees only their work — screen printing, DTG, embroidery, finishing — with clear handoffs between stations' },
                                { icon: 'priority_high', title: 'Rush order routing', desc: 'Rush jobs flagged and prioritized automatically — other deadlines recalculated so nothing is silently pushed late' },
                                { icon: 'verified', title: 'Quality checkpoints', desc: 'Built-in QC gates ensure jobs are verified before moving to the next stage — catching errors before they ship' },
                                { icon: 'analytics', title: 'Throughput analytics', desc: 'Track jobs per day, bottleneck identification, on-time rates, and department performance over time' },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="flex gap-4 p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-xl">{item.icon}</span>
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
                            Production works best when connected to your full system — see how it fits inside the{' '}
                            <Link href="/platform/complete-system" className="text-primary hover:underline">complete print shop management system</Link>.
                            {' '}Powered by our{' '}
                            <Link href="/platform/filemaker-system" className="text-primary hover:underline">FileMaker system</Link>.
                        </motion.p>
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
                            What Print Shop Production Problems Actually Look Like
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-500 mb-12"
                        >
                            If any of these sound familiar, your production process is the bottleneck.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {[
                                { num: '01', title: 'A job sits in art approval while production assumes it\'s ready.', desc: 'The press is set up, the blanks are pulled, but the art was never approved. Nobody checked. Now you\'re resetting for a different job and losing 45 minutes.' },
                                { num: '02', title: 'The press operator asks "what\'s next?" and no one knows.', desc: 'There\'s a whiteboard, maybe a clipboard. But the priorities changed after lunch and nobody updated either one. The operator picks a job — it might be the wrong one.' },
                                { num: '03', title: 'Rush orders push everything else behind without visibility.', desc: 'A rush job jumps the line. Three other deadlines slip. Nobody knows which customers are now at risk until someone calls asking where their order is.' },
                                { num: '04', title: 'Jobs move between departments with no handoff.', desc: 'Screen printing finishes a job. It sits on a cart. Finishing doesn\'t know it\'s there. The customer calls on Friday asking for tracking. It hasn\'t shipped.' },
                                { num: '05', title: 'You only find out a job is late after the customer complains.', desc: 'No dashboard. No alerts. No proactive visibility. By the time you know there\'s a problem, the customer already knows too.' },
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

                {/* ───── FEATURES BY WORKFLOW ───── */}
                <section className="relative bg-surface dark:bg-gray-950">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="max-w-7xl mx-auto px-mobile py-16 md:py-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-12"
                        >
                            Print Shop Production Scheduling &amp; Job Tracking — Organized by Workflow
                        </motion.h2>

                        <div className="space-y-12">
                            {/* Production Visibility */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-lg font-bold text-charcoal dark:text-white mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-lg">visibility</span>
                                    </span>
                                    Production Visibility
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { title: 'Real-time job board', desc: 'Every job visible by status — queued, in production, in QC, ready to ship. No walking the floor to find out what\'s happening.' },
                                        { title: 'Status tracking by department', desc: 'Screen printing, DTG, embroidery, finishing — each department\'s queue visible in one view. Know where every job is at any moment.' },
                                    ].map((f) => (
                                        <div key={f.title} className="p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900">
                                            <p className="text-sm font-bold text-charcoal dark:text-white mb-1">{f.title}</p>
                                            <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{f.desc}</p>
                                            <div className="mt-3 h-32 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                                <span className="text-xs text-secondary-text dark:text-gray-500">(Screenshot: Production job board)</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Scheduling & Flow */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-lg font-bold text-charcoal dark:text-white mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-lg">schedule</span>
                                    </span>
                                    Scheduling &amp; Flow
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { title: 'Queue management', desc: 'Jobs ordered by priority and deadline. Your team always knows what to run next — no guessing, no asking the owner.' },
                                        { title: 'Priority routing for rush orders', desc: 'Rush jobs flagged and moved to the front. The system recalculates affected deadlines so you know what else is at risk.' },
                                    ].map((f) => (
                                        <div key={f.title} className="p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900">
                                            <p className="text-sm font-bold text-charcoal dark:text-white mb-1">{f.title}</p>
                                            <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{f.desc}</p>
                                            <div className="mt-3 h-32 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                                <span className="text-xs text-secondary-text dark:text-gray-500">(Screenshot: Scheduling dashboard)</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Execution Control */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-lg font-bold text-charcoal dark:text-white mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-lg">precision_manufacturing</span>
                                    </span>
                                    Execution Control
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { title: 'Task assignment by department', desc: 'Each station sees only their assigned work. Screen printing doesn\'t see embroidery jobs. Clear ownership, clean handoffs.' },
                                        { title: 'Art approval workflow', desc: 'Jobs can\'t enter production until art is approved. No more setting up presses for unapproved designs.' },
                                        { title: 'Quality checkpoints', desc: 'Built-in QC gates between stages. Jobs are verified before moving forward — catching errors before they ship to customers.' },
                                        { title: 'Multi-method routing', desc: 'Screen printing, DTG, embroidery, heat transfer — jobs routed to the correct department based on method. One system, all methods.' },
                                    ].map((f) => (
                                        <div key={f.title} className="p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900">
                                            <p className="text-sm font-bold text-charcoal dark:text-white mb-1">{f.title}</p>
                                            <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{f.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Analytics */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-lg font-bold text-charcoal dark:text-white mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-lg">analytics</span>
                                    </span>
                                    Analytics
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { title: 'Throughput tracking', desc: 'Jobs completed per day, per department, per method. See where output is strong and where it\'s falling behind.' },
                                        { title: 'Bottleneck identification', desc: 'Which stage holds jobs the longest? Where do delays cluster? Data-driven decisions instead of guesswork.' },
                                    ].map((f) => (
                                        <div key={f.title} className="p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900">
                                            <p className="text-sm font-bold text-charcoal dark:text-white mb-1">{f.title}</p>
                                            <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{f.desc}</p>
                                        </div>
                                    ))}
                                </div>
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
                            How Production Connects to Everything Else
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl mb-10"
                        >
                            Production in isolation is just a task list. Production connected to orders, inventory, and your website is operational control. This is what competitors don&apos;t have.
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
                                    title: 'Orders → Production',
                                    desc: 'Orders automatically create production jobs. No re-keying, no missed details. The job arrives with specs, quantities, art files, and deadline.',
                                    link: '/platform/ecommerce-storefront',
                                    linkText: 'See how orders flow from your storefront',
                                },
                                {
                                    icon: 'inventory_2',
                                    title: 'Inventory → Production',
                                    desc: 'Before a job hits the press, the system confirms blanks are allocated and available. If inventory isn\'t synced, production breaks.',
                                    link: '/platform/inventory-management',
                                    linkText: 'See how inventory connects to production',
                                },
                                {
                                    icon: 'language',
                                    title: 'Production → Website',
                                    desc: 'Real-time order status visible to customers on your storefront. They see "In Production" or "Shipped" — without calling to ask.',
                                    link: '/platform/ecommerce-storefront',
                                    linkText: 'See the customer-facing storefront',
                                },
                                {
                                    icon: 'receipt_long',
                                    title: 'Production → Invoicing',
                                    desc: 'Completed jobs trigger invoicing automatically. No manual data entry. The invoice matches the order — quantities, pricing, and all.',
                                    link: '/platform/filemaker-system',
                                    linkText: 'See the FileMaker system behind it',
                                },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-amber-500/30 transition-colors"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-xl">{item.icon}</span>
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

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-6 h-48 rounded-xl bg-gray-100 dark:bg-gray-800 border border-structural-border dark:border-gray-800 flex items-center justify-center"
                        >
                            <span className="text-sm text-secondary-text dark:text-gray-500">(Diagram: Order → Art Approval → Production → QC → Shipping flow)</span>
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
                            Whiteboards &amp; Spreadsheets vs. Shop Titan Production
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/30 dark:bg-rose-950/10"
                            >
                                <h3 className="text-sm font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-4">Before — Manual Production Tracking</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Jobs tracked on whiteboards that nobody updates',
                                        'Art approval status unknown until someone asks',
                                        'Rush orders disrupt the schedule with no recalculation',
                                        'No visibility into what each department is working on',
                                        'Late jobs discovered when the customer calls',
                                        'Production data lives in people\'s heads',
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
                                <h3 className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-4">After — Job Tracking System for Print Shops</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Real-time job board with status by department',
                                        'Art approval gates prevent unapproved jobs from printing',
                                        'Rush orders reprioritized with deadline impact visible',
                                        'Each station sees only their queue — clear handoffs',
                                        'At-risk jobs flagged before deadlines are missed',
                                        'Throughput and bottleneck data for continuous improvement',
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

                {/* ───── IMPLEMENTATION ───── */}
                <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-12"
                        >
                            How We Set Up Your Production System
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            {[
                                { step: '01', title: 'Production Setup', desc: 'Define your departments — screen printing, DTG, embroidery, finishing, shipping. Each gets its own queue and task types.', icon: 'settings' },
                                { step: '02', title: 'Workflow Mapping', desc: 'Map how jobs move through your shop — from order intake through art, production, QC, and shipping. Define handoff rules.', icon: 'route' },
                                { step: '03', title: 'System Configuration', desc: 'Set up automation rules — rush order routing, priority logic, QC gates, and status notifications across departments.', icon: 'tune' },
                                { step: '04', title: 'Team Training', desc: 'Each department learns their interface — how to receive tasks, update status, flag issues, and hand off to the next station.', icon: 'school' },
                                { step: '05', title: 'Go Live', desc: 'Real production running through the system. Live support during the transition. Your team sees what\'s printing, what\'s next, and what\'s at risk.', icon: 'rocket_launch' },
                            ].map((s) => (
                                <motion.div
                                    key={s.step}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/0 group-hover:bg-primary/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-lg">{s.icon}</span>
                                        </div>
                                        <span className="text-[10px] font-bold tracking-widest text-amber-600/60 dark:text-amber-400/60 uppercase">{s.step}</span>
                                    </div>
                                    <h3 className="font-bold text-charcoal dark:text-white mb-2">{s.title}</h3>
                                    <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{s.desc}</p>
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
                            See How Production Runs Without Guessing or Walking the Floor
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 mb-8 max-w-2xl mx-auto"
                        >
                            Production management is one module inside Shop Titan&apos;s connected platform. Orders, inventory, production, and your website — all in one system.
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
                            <Link href="/platform/ecommerce-storefront" className="hover:text-primary transition-colors">Ecommerce Storefront</Link>
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
