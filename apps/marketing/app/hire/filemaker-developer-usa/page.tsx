'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

const faqs = [
    {
        question: 'How much does a FileMaker developer cost in the USA?',
        answer: 'US-based FileMaker developers typically charge between $80 and $150 per hour depending on experience, location, and project complexity. A full custom system build can cost $30,000–$100,000+ over several months.',
    },
    {
        question: 'How long does it take to build a FileMaker system from scratch?',
        answer: 'Building a custom FileMaker system from scratch typically takes 3–6+ months for a production-ready solution. Complex systems with inventory, production tracking, and ecommerce integration can take longer.',
    },
    {
        question: 'Is there a pre-built FileMaker system for print shops?',
        answer: 'Yes. Shop Titan is a FileMaker-based system built specifically for print shops and apparel decorators. It covers orders, inventory, production, quoting, and ecommerce — and deploys in 2–4 weeks.',
    },
    {
        question: "What's the difference between hiring a developer and deploying a system?",
        answer: "Hiring a developer means building from scratch — you manage timelines, decisions, and ongoing maintenance. Deploying a system means starting with something proven that's already running in production, then customizing to fit your shop.",
    },
    {
        question: 'Can I customize a pre-built FileMaker system?',
        answer: 'Yes. FileMaker is inherently customizable. After deploying the base system, you can add custom fields, workflows, reports, and integrations — without starting from zero.',
    },
    {
        question: 'Should I hire a US-based developer or go offshore?',
        answer: 'US-based developers cost more ($80–150/hr vs $25–60/hr offshore) but offer better communication, timezone alignment, and understanding of US business workflows. However, deploying a proven system eliminates the need to manage developers entirely.',
    },
    {
        question: 'What if I need a developer after deploying the system?',
        answer: 'Shop Titan includes onboarding and support. For custom additions beyond the base system, our team handles modifications — so you don\'t need to find and manage a separate developer.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Hire FileMaker Developer USA',
    description: 'Before you hire a FileMaker developer in the USA, see how print shops deploy a proven system in weeks instead of building from scratch.',
    url: 'https://shoptitan.app/hire/filemaker-developer-usa',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Hire', url: 'https://shoptitan.app/hire' },
    { name: 'FileMaker Developer USA', url: 'https://shoptitan.app/hire/filemaker-developer-usa' },
]);

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function HireFileMakerDeveloperUSAPage() {
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
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-blue-400 text-xs font-bold tracking-wider uppercase mb-6"
                        >
                            Hire vs. Deploy
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            Hire a FileMaker Developer in the USA — Or Deploy a Proven System Instead
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 space-y-4"
                        >
                            <p>
                                Before you hire a FileMaker developer in the USA, see if the system you need is already built. US-based FileMaker developers charge $80–150/hr and building from scratch takes months. What if the system you need is already running in production — ready to deploy in weeks?
                            </p>
                            <p className="text-base text-secondary-text/80 dark:text-gray-500">
                                Already powering real print shop operations. Deploys in 2–4 weeks.
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
                                Book a Demo — Deploy in Weeks, Not Months
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* ───── DEFINITION / COST ───── */}
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
                            What Does a FileMaker Developer in the USA Cost?
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl space-y-4 mb-10"
                        >
                            <p className="text-lg">
                                FileMaker developers in the United States typically charge between $80 and $150 per hour depending on experience and project scope. Building a custom system can take several months and requires ongoing maintenance after launch.
                            </p>
                            <p>
                                For many print shops, the question isn&apos;t just cost — it&apos;s whether the system needs to be built from scratch at all. If you&apos;re looking for a FileMaker developer in the United States to build order tracking, inventory management, or production scheduling, that system may already exist.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {[
                                { label: 'US Developer Rate', value: '$80–150/hr', desc: 'Experienced US-based FileMaker developers. Higher for specialists with industry knowledge.', icon: 'payments' },
                                { label: 'Custom Build Timeline', value: '3–6+ months', desc: 'From requirements gathering through development, testing, and deployment. Complex systems take longer.', icon: 'schedule' },
                                { label: 'Shop Titan Deployment', value: '2–4 weeks', desc: 'Pre-built system configured for your shop. Data import, training, and go-live included.', icon: 'rocket_launch' },
                            ].map((item) => (
                                <motion.div
                                    key={item.label}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 text-center"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                        <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                                    </div>
                                    <p className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white mb-1">{item.value}</p>
                                    <p className="text-sm font-bold text-primary mb-2">{item.label}</p>
                                    <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── WHY SHOPS SEARCH ───── */}
                <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white leading-tight mb-2"
                        >
                            Why Print Shops Look for FileMaker Developers
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-500 mb-12 max-w-3xl"
                        >
                            Many print shops start searching for a FileMaker developer when their workflow becomes too complex for spreadsheets or SaaS tools. The triggers are usually the same.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {[
                                { icon: 'block', title: 'SaaS tools hit a wall', desc: 'Printavo, Shopify, or generic CRMs don\'t support your pricing model, production workflow, or multi-method routing. You need something custom.' },
                                { icon: 'tune', title: 'Custom workflows needed', desc: 'Screen printing pricing grids, embroidery stitch-count calculations, DTG routing — your shop does things that no off-the-shelf tool handles.' },
                                { icon: 'lock', title: 'Data control matters', desc: 'You want to own your data, not rent it from a SaaS provider who could change pricing, features, or terms at any time.' },
                                { icon: 'trending_up', title: 'Outgrown spreadsheets', desc: 'Orders, inventory, and production are too complex for spreadsheets. You need a real system — and many shops that <a href="/get-started/replace-spreadsheets" class="text-primary hover:underline">replace spreadsheets</a> start here.' },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="relative p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/30 transition-colors group"
                                >
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-charcoal dark:text-white mb-1 text-sm">{item.title}</h3>
                                            <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── REALITY OF HIRING ───── */}
                <section className="relative bg-surface dark:bg-gray-950">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="max-w-7xl mx-auto px-mobile py-16 md:py-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-4"
                        >
                            The Reality of Hiring a FileMaker Developer
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl mb-10"
                        >
                            Hiring a FileMaker developer is a valid path — but it&apos;s important to understand what it actually involves before committing.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            {[
                                { num: '01', title: 'Finding the right developer takes time', desc: 'Experienced FileMaker developers in the USA are a niche talent pool. Finding someone who understands both FileMaker AND your industry narrows the search significantly.' },
                                { num: '02', title: 'Building from scratch takes 3–6+ months', desc: 'Requirements gathering, prototyping, development, testing, revisions, and deployment. A production-ready system doesn\'t happen in weeks when you build custom.' },
                                { num: '03', title: 'You manage the project alongside your business', desc: 'You\'ll need to manage development timelines, revisions, and system decisions alongside your daily operations. That\'s a second job on top of running a print shop.' },
                                { num: '04', title: 'Maintenance is ongoing', desc: 'After launch, bugs, updates, feature requests, and compatibility issues become your responsibility. The developer may move on — but the system needs ongoing care.' },
                            ].map((item) => (
                                <motion.div
                                    key={item.num}
                                    variants={fadeUp}
                                    className="p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900"
                                >
                                    <span className="block text-[10px] font-bold tracking-widest text-secondary-text/50 uppercase mb-1.5">{item.num}</span>
                                    <h3 className="font-bold text-charcoal dark:text-white text-sm mb-1">{item.title}</h3>
                                    <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── THE ALTERNATIVE ───── */}
                <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-4"
                        >
                            The Alternative: Deploy a System That&apos;s Already Built
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl mb-10"
                        >
                            Shop Titan is a <Link href="/platform/filemaker-system" className="text-primary hover:underline">FileMaker system built specifically for print shop operations</Link>. It&apos;s not a template or a prototype — it&apos;s already running in a real production environment.
                        </motion.p>

                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2"
                            >
                                <div className="space-y-3">
                                    {[
                                        'Already used in real print shop workflows — orders, inventory, production',
                                        'Covers quoting, order management, task routing, and reporting',
                                        'Connected to a modern ecommerce storefront for online sales',
                                        'Deploys in 2–4 weeks with data import and team training',
                                        'Customizable after deployment — add fields, workflows, and reports',
                                        'Ongoing support included — no managing a developer',
                                    ].map((item, i) => (
                                        <motion.div key={i} variants={fadeUp} className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-green-500 dark:text-green-400 text-sm mt-0.5 flex-shrink-0">check</span>
                                            <span className="text-sm text-charcoal dark:text-white font-medium">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-8">
                                    <Link
                                        href="/platform/complete-system"
                                        className="text-primary hover:underline font-semibold text-sm inline-flex items-center gap-1"
                                    >
                                        See the complete system before you hire a developer →
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2 h-64 lg:h-auto rounded-xl bg-gray-100 dark:bg-gray-800 border border-structural-border dark:border-gray-800 flex items-center justify-center"
                            >
                                <span className="text-sm text-secondary-text dark:text-gray-500">(Screenshot: FileMaker dashboard)</span>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ───── USA vs OFFSHORE ───── */}
                <section className="relative bg-surface dark:bg-gray-950">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
                    <div className="max-w-7xl mx-auto px-mobile py-16 md:py-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-12"
                        >
                            Hiring a FileMaker Developer: USA vs. Offshore vs. Deploy
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="overflow-x-auto"
                        >
                            <table className="w-full text-sm border-collapse min-w-[640px]">
                                <thead>
                                    <tr className="border-b border-structural-border dark:border-gray-800">
                                        <th className="text-left py-3 px-4 text-secondary-text dark:text-gray-500 font-medium text-xs uppercase tracking-wider w-1/4"></th>
                                        <th className="text-left py-3 px-4 text-charcoal dark:text-white font-bold">US Developer</th>
                                        <th className="text-left py-3 px-4 text-charcoal dark:text-white font-bold">Offshore Developer</th>
                                        <th className="text-left py-3 px-4 text-primary font-bold">Shop Titan Deploy</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { label: 'Cost', us: '$80–150/hr', offshore: '$25–60/hr', deploy: 'Fixed deployment fee' },
                                        { label: 'Timeline', us: '3–6+ months', offshore: '4–8+ months', deploy: '2–4 weeks' },
                                        { label: 'Communication', us: 'Same timezone, fluent English', offshore: 'Timezone gaps, possible language barrier', deploy: 'Direct support, US-based' },
                                        { label: 'Industry Knowledge', us: 'Varies — most don\'t know print', offshore: 'Rarely understands print shops', deploy: 'Built for print shops specifically' },
                                        { label: 'Ongoing Maintenance', us: 'You manage or rehire', offshore: 'You manage or rehire', deploy: 'Included in support' },
                                        { label: 'Risk', us: 'Moderate — depends on developer', offshore: 'Higher — QA and communication gaps', deploy: 'Low — system is proven' },
                                    ].map((row) => (
                                        <tr key={row.label} className="border-b border-structural-border/50 dark:border-gray-800/50">
                                            <td className="py-3 px-4 text-xs font-bold text-secondary-text dark:text-gray-500 uppercase tracking-wider">{row.label}</td>
                                            <td className="py-3 px-4 text-secondary-text dark:text-gray-400">{row.us}</td>
                                            <td className="py-3 px-4 text-secondary-text dark:text-gray-400">{row.offshore}</td>
                                            <td className="py-3 px-4 text-charcoal dark:text-white font-medium">{row.deploy}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-6 h-48 rounded-xl bg-gray-100 dark:bg-gray-800 border border-structural-border dark:border-gray-800 flex items-center justify-center"
                        >
                            <span className="text-sm text-secondary-text dark:text-gray-500">(Diagram: Build vs Deploy timeline comparison)</span>
                        </motion.div>
                    </div>
                </section>

                {/* ───── WHEN TO ACTUALLY HIRE ───── */}
                <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white mb-4"
                        >
                            When You Should Actually Hire a FileMaker Developer
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl mb-10"
                        >
                            Deploying a pre-built system covers most print shop needs. But there are cases where hiring a developer makes sense. Here&apos;s an honest look.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            {[
                                { icon: 'settings_suggest', title: 'Truly unique workflows', desc: 'Your process is so specialized that no existing system covers it. This is rare in print shops, but it happens in highly niche operations.' },
                                { icon: 'memory', title: 'Proprietary hardware integration', desc: 'You need to connect FileMaker to custom hardware — specialized printers, scanners, or machinery with proprietary APIs.' },
                                { icon: 'build', title: 'Building something that doesn\'t exist', desc: 'Your idea is genuinely new — not a better way to track orders, but something no system on the market offers.' },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                                        <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-charcoal dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm text-secondary-text dark:text-gray-400 mt-8"
                        >
                            For everything else — orders, inventory, production, quoting, ecommerce — the <Link href="/platform/complete-system" className="text-primary hover:underline">complete system</Link> is already built. Also see our general <Link href="/hire/filemaker-developer" className="text-primary hover:underline">FileMaker developer guide</Link> for more on the build vs. deploy decision.
                        </motion.p>
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
                            See the System Before You Hire a Developer
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary-text dark:text-gray-400 mb-8 max-w-2xl mx-auto"
                        >
                            If you&apos;re looking for a FileMaker developer in the United States to build a print shop system, see what&apos;s already built first. Orders, inventory, production, and ecommerce — deployed in weeks, not months.
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
                            <Link href="/hire/filemaker-developer" className="hover:text-primary transition-colors">Hire a Developer</Link>
                            <span className="text-structural-border dark:text-gray-700">·</span>
                            <Link href="/get-started/replace-spreadsheets" className="hover:text-primary transition-colors">Replace Spreadsheets</Link>
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
