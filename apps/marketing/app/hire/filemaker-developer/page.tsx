'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

const faqs = [
    {
        question: 'How much does a FileMaker developer cost?',
        answer: "Typical FileMaker developers charge $100–$200/hour. A full system build can cost $50,000–$150,000+ depending on complexity. Shop Titan charges a flat monthly fee that includes the system, hosting, support, and updates — no hourly billing, no scope creep.",
    },
    {
        question: 'Should I hire a FileMaker developer or deploy a pre-built system?',
        answer: "If your business runs standard operational workflows — quotes, orders, inventory, production, customers — a pre-built system is faster, cheaper, and lower risk. If you need something genuinely unique that no existing system covers, a custom developer or FileMaker consultant may be the right choice.",
    },
    {
        question: 'How long does custom FileMaker development take?',
        answer: 'A typical custom build takes 6–12 months for a full operations system. Shop Titan deploys in 2–4 weeks because the system is already built and tested in real operations.',
    },
    {
        question: "What's the difference between a FileMaker developer and a FileMaker consultant?",
        answer: 'A FileMaker developer builds systems. A FileMaker consultant advises on strategy, evaluates existing systems, and recommends solutions. Shop Titan combines both — we consult on your workflow and deploy a proven system.',
    },
    {
        question: 'Can FileMaker connect to my ecommerce website?',
        answer: 'Yes. Our FileMaker system integrates with ecommerce storefronts so online orders flow directly into operations. We also build storefronts specifically for print shops.',
    },
    {
        question: 'Is FileMaker still a good choice in 2025?',
        answer: "Yes. FileMaker (by Claris, an Apple subsidiary) has been powering businesses for over 30 years. It's flexible, runs on Mac, PC, and mobile, and is actively developed. It's not a legacy tool — it's a modern platform for custom business systems.",
    },
    {
        question: 'What if I already have a FileMaker system?',
        answer: 'We can evaluate your existing system and determine if it makes more sense to optimize it or migrate to the Shop Titan platform. In many cases, deploying a proven system is faster than fixing a fragile custom build.',
    },
    {
        question: 'Do you offer FileMaker consulting separately?',
        answer: 'Yes. If you need help evaluating, optimizing, or extending a FileMaker system, we can consult. But for most businesses, deploying our pre-built system is more cost-effective than consulting on a custom build.',
    },
    {
        question: "What's included in the monthly fee?",
        answer: 'The system, cloud hosting on AWS, automated backups, ongoing support via Slack, updates, and training. No hourly charges. No surprise invoices.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'FileMaker Developer & System Deployment',
    description: 'Pre-built FileMaker systems deployed in 2–4 weeks. Alternative to hiring a FileMaker developer for custom builds. Proven in real operations.',
    url: 'https://shoptitan.app/hire/filemaker-developer',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Hire', url: 'https://shoptitan.app/hire' },
    { name: 'FileMaker Developer', url: 'https://shoptitan.app/hire/filemaker-developer' },
]);

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function HireFileMakerDeveloperPage() {
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
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6"
                        >
                            FileMaker Development
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            Hire a FileMaker Developer — Or Deploy a System That&apos;s Already Built
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 space-y-4"
                        >
                            <p>
                                You&apos;re looking to hire a FileMaker developer because you need a system. But before you spend 6–12 months and $50K+ building one from scratch, consider this: the system you need might already exist. We deploy pre-built FileMaker systems used in real business operations — customized to your workflow — in 2–4 weeks.
                            </p>
                            <p className="text-base text-secondary-text/80 dark:text-gray-500">
                                If you&apos;re searching to hire a FileMaker developer, you&apos;re likely trying to build a system for your business. This page shows a faster alternative — deploying a proven FileMaker system instead of building one from scratch.
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
                                Book a Consultation — See If You Even Need a Developer
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
                            What Does a FileMaker Developer Do?
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl space-y-4 mb-10"
                        >
                            <p className="text-lg">
                                A FileMaker developer — sometimes called a Claris FileMaker developer or FileMaker programmer — builds custom business applications on the FileMaker platform. They design databases, create user interfaces, write scripts for automation, and build workflows that connect different parts of a business.
                            </p>
                            <p>A FileMaker consultant may also audit existing systems, recommend improvements, or integrate FileMaker with other tools.</p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {[
                                { icon: 'request_quote', title: 'Quote & pricing tools' },
                                { icon: 'shopping_cart', title: 'Order management systems' },
                                { icon: 'inventory_2', title: 'Inventory tracking databases' },
                                { icon: 'people', title: 'Customer relationship management' },
                                { icon: 'precision_manufacturing', title: 'Production scheduling tools' },
                                { icon: 'assessment', title: 'Reporting dashboards' },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="flex gap-3 p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
                                    </div>
                                    <span className="text-sm font-medium text-charcoal dark:text-white self-center">{item.title}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl"
                        >
                            But here&apos;s what most businesses discover after hiring a FileMaker developer: <strong className="text-charcoal dark:text-white">they didn&apos;t just need a developer — they needed a working system.</strong> The development is the means, not the end. And if the system already exists, the development is unnecessary.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm text-primary font-medium mt-4"
                        >
                            <Link href="/platform/filemaker-system" className="hover:underline">
                                Want to see the system instead of hiring someone to build one? →
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
                            What Actually Happens When You Hire a FileMaker Developer
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-500 mb-12"
                        >
                            The reality most people don&apos;t talk about.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {[
                                { num: '01', title: 'You describe what you need. They build what they heard.', desc: "The first version never matches. Not because the developer is bad — but because nobody understands a system until they use it. So you revise. And revise." },
                                { num: '02', title: 'The project takes longer than anyone expected.', desc: "Original estimate: 3 months. Six months in, you're still adding features — inventory, purchase orders, email templates. Each one adds weeks and cost." },
                                { num: '03', title: "You're paying someone to figure out your business.", desc: "A FileMaker developer for hire builds databases. Knowing what a print shop needs — how quotes connect to orders, how pricing matrices work — takes years of operational experience." },
                                { num: '04', title: 'When the project ends, the developer moves on.', desc: "Need changes? They're on another project. Something breaks? You're waiting. New feature? New invoice, new timeline." },
                                { num: '05', title: "You're the first user of an unproven system.", desc: "Every bug, every edge case, every workflow gap — you discover them in production. With real customers and real orders. That's beta testing with your business." },
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

                {/* ───── BETTER APPROACH ───── */}
                <section className="relative bg-surface dark:bg-gray-950">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="max-w-7xl mx-auto px-mobile py-16 md:py-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-6"
                        >
                            What If the System Was Already Built?
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl space-y-4 mb-12"
                        >
                            <p>
                                Here&apos;s what most people searching &quot;hire FileMaker developer&quot; actually need: a working system. Not a developer. Not a project. A system that handles their operations today.
                            </p>
                            <p>
                                We built a complete FileMaker system inside a real business operation — handling daily orders, managing thousands of SKUs, coordinating production across screen printing, embroidery, DTG, and sewing. Instead of hiring a Claris FileMaker developer to build from scratch, you deploy ours.
                            </p>
                        </motion.div>

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
                                        <th className="p-4 text-left font-bold text-secondary-text">Hiring a Developer</th>
                                        <th className="p-4 text-left font-bold text-primary">Deploying Shop Titan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Timeline', '6–12 months', '2–4 weeks'],
                                        ['Cost', '$50,000–$150,000+', 'Flat monthly fee'],
                                        ['Risk', 'You\'re the test case', 'Tested in real operations'],
                                        ['Scope', 'Discover needs along the way', 'Built from real needs'],
                                        ['Support', 'Developer availability varies', 'Ongoing via Slack'],
                                        ['Bugs', 'You find them first', 'Already resolved'],
                                    ].map(([label, dev, titan], i) => (
                                        <tr key={i} className="border-b border-structural-border dark:border-gray-800 last:border-0">
                                            <td className="p-4 font-semibold text-charcoal dark:text-white whitespace-nowrap">{label}</td>
                                            <td className="p-4 text-secondary-text dark:text-gray-400">{dev}</td>
                                            <td className="p-4 text-charcoal dark:text-white font-medium">{titan}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-10"
                        >
                            What You Get When You Work With Shop Titan
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {[
                                { icon: 'verified', title: 'A proven system — not a project', desc: "You're not hiring a FileMaker developer to start a build. You're getting a complete platform — quotes, orders, inventory, production, reporting. All built, tested, connected." },
                                { icon: 'tune', title: 'Customization — not one-size-fits-all', desc: 'Your pricing matrices configured. Your decoration types set up. Your email templates branded. The system fits your business because we configure it to your business.' },
                                { icon: 'support_agent', title: 'Ongoing support — not a handoff', desc: "Direct Slack access. Questions answered. Issues resolved. Updates deployed. This isn't a project that ends — it's a system that evolves." },
                                { icon: 'school', title: 'Training — not documentation', desc: "We train your team on every module. Designed for shop floor staff and office managers — not for people who know FileMaker." },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/0 group-hover:bg-primary/[0.06] blur-2xl rounded-full transition-all duration-500 pointer-events-none" />
                                    <span className="material-symbols-outlined text-primary text-2xl mb-3 block">{item.icon}</span>
                                    <h3 className="font-bold text-charcoal dark:text-white mb-2 text-sm">{item.title}</h3>
                                    <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm text-primary font-medium mt-6 text-center"
                        >
                            <Link href="/platform/complete-system" className="hover:underline">
                                For a full solution including an ecommerce storefront, see our complete system →
                            </Link>
                        </motion.p>
                    </div>
                </section>

                {/* ───── USE CASE ───── */}
                <section className="relative bg-surface dark:bg-gray-950">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                    <div className="max-w-7xl mx-auto px-mobile py-16 md:py-20 relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-12"
                        >
                            What This Looks Like in Practice
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/30 dark:bg-rose-950/10"
                            >
                                <h3 className="text-sm font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-4">The Typical Path — Hiring a Developer</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Find a FileMaker developer on Upwork or referral',
                                        'Spend weeks describing your workflow',
                                        '3 months in: quoting works, orders don\'t connect',
                                        '6 months in: orders work, no inventory tracking',
                                        '9 months in: system usable but fragile',
                                        '12 months in: still paying for fixes',
                                        'Total cost: $80K+ and counting',
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
                                <h3 className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-4">The Shop Titan Path</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Book a demo, see a working system',
                                        'Sign up, system configured in 2 weeks',
                                        'Your pricing, decoration types, and data loaded',
                                        'Team trained on every module',
                                        'Real orders flowing through immediately',
                                        'Ongoing support via Slack',
                                        'Total cost: flat monthly fee',
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
                            className="text-secondary-text dark:text-gray-400 text-sm text-center mt-8 max-w-2xl mx-auto"
                        >
                            They didn&apos;t hire a FileMaker programmer. They deployed a FileMaker system. The difference is years of trial-and-error they didn&apos;t have to go through.
                        </motion.p>
                    </div>
                </section>

                {/* ───── WHEN TO HIRE ───── */}
                <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-4xl mx-auto px-mobile">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-6"
                        >
                            When Hiring a FileMaker Developer Actually Makes Sense
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed mb-8"
                        >
                            We&apos;re not saying you should never hire a FileMaker consultant or developer. There are cases where it&apos;s the right move:
                        </motion.p>
                        <motion.div
                            className="space-y-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {[
                                { title: 'You need something truly unique.', desc: "If your business has workflows that no existing system covers — not just customization, but fundamentally different logic — a custom build might be necessary. This is rare." },
                                { title: 'You have an existing FileMaker system that needs modifications.', desc: 'If you have a working database and need targeted improvements, a developer can make changes without replacing the system.' },
                                { title: "You're building for a non-standard industry.", desc: 'Our system is built for print shops and apparel decorators. If you\'re in a completely different industry, a custom FileMaker developer may be a better fit.' },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900"
                                >
                                    <h3 className="font-bold text-charcoal dark:text-white text-sm mb-1">{item.title}</h3>
                                    <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed mt-6"
                        >
                            <strong className="text-charcoal dark:text-white">But for most print shops and apparel businesses:</strong> the system you need already exists. Deploying it is faster, cheaper, and lower risk than building from scratch. If you&apos;re specifically looking at <Link href="/hire/filemaker-developer-usa" className="text-primary hover:underline">US-based FileMaker developers, see our cost and timeline breakdown</Link>.
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
                            What Happens After You Book a Consultation
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {[
                                { title: 'Demo', desc: 'We show you the working system — quotes, orders, inventory, production. Real workflows, not slides.', icon: 'play_circle' },
                                { title: 'Workflow Discussion', desc: 'You tell us how your shop operates. Decoration types, pricing, team, pain points.', icon: 'forum' },
                                { title: 'System Fit Check', desc: "We tell you honestly if our system fits. If it doesn't, we'll say so.", icon: 'check_circle' },
                                { title: 'Setup Timeline', desc: 'If it fits: configuration, data migration, training, go-live. Most shops: 2–4 weeks.', icon: 'calendar_month' },
                            ].map((s) => (
                                <motion.div
                                    key={s.title}
                                    variants={fadeUp}
                                    className="text-center p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900"
                                >
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                        <span className="material-symbols-outlined text-primary text-lg">{s.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-charcoal dark:text-white text-sm mb-1">{s.title}</h3>
                                    <p className="text-[11px] text-secondary-text dark:text-gray-400 leading-relaxed">{s.desc}</p>
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
                            Who This Page Is For
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {[
                                { title: 'Print shops searching for a FileMaker developer', desc: "You need a system for quotes, orders, and inventory. Before you start a build, see the system that's already handling these workflows.", icon: 'search' },
                                { title: 'Businesses burned by a custom build', desc: "Project went over budget, over timeline, or the developer disappeared. You need something proven — not another experiment.", icon: 'warning' },
                                { title: 'Shops evaluating FileMaker vs other platforms', desc: "Considering FileMaker but don't want to bet on a developer? See a working system before deciding.", icon: 'compare' },
                                { title: 'Owners who need a system now', desc: "Operations are breaking. You can't wait 6 months for a custom build. You need a working system in weeks.", icon: 'speed' },
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
                            Before You Hire a Developer, See the System First
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto"
                        >
                            If you need a system, it may already be built. Book a consultation and we&apos;ll show you the system, walk through your workflow, and tell you honestly whether it&apos;s a fit. If it is, you deploy in weeks. If it isn&apos;t, you&apos;ll know exactly what to tell the developer you hire.
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
                                Book a Consultation — See If You Even Need a Developer
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
                            <Link href="/platform/filemaker-system" className="text-primary hover:underline">View the FileMaker System →</Link>
                            <span className="mx-2 text-structural-border dark:text-gray-700">·</span>
                            <Link href="/hire/filemaker-developer-usa" className="text-primary hover:underline">Hiring in the USA? See costs & timelines →</Link>
                        </motion.p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
