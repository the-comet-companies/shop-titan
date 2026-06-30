'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import {
    generateFAQSchema,
    generateServiceSchema,
    generateBreadcrumbSchema,
} from '@/lib/schema';

// ───── Content ─────

const tiers = [
    {
        label: 'DIY website builder',
        price: '$15 to $50 / mo',
        sub: 'Wix, Squarespace, GoDaddy',
        points: ['You build and maintain it', 'Generic templates', 'No real print ordering or production tie-in'],
        note: 'Cheapest, but you do the work and it is not built for decoration.',
    },
    {
        label: 'Freelancer or agency',
        price: '$2,000 to $10,000+',
        sub: 'One-time build + hosting',
        points: ['Custom design', 'Usually generic ecommerce', 'Print workflows bolted on, if at all'],
        note: 'A nicer site, but most agencies do not understand print production.',
        featured: true,
    },
    {
        label: 'Print-specialized platform',
        price: 'Setup + monthly',
        sub: 'Built for decorators',
        points: ['Custom, branded site', 'Decoration-aware ordering', 'Connected to production'],
        note: 'Higher up front, but built for how a shop actually sells and runs.',
    },
];

const factors = [
    { icon: 'language', title: 'Custom vs template', desc: 'A template site is cheap but looks generic. A custom-built site reflects your brand and converts better, and costs more up front.' },
    { icon: 'shopping_cart_checkout', title: 'Ecommerce & online ordering', desc: 'Adding real online ordering, size and color matrices, artwork upload, and payments raises the cost over a brochure site.' },
    { icon: 'sync', title: 'Production integration', desc: 'Wiring orders into quotes, inventory, and production is the priciest piece, and the one that saves the most labor.' },
    { icon: 'support_agent', title: 'Build vs ongoing', desc: 'Most pricing splits into a one-time build (or setup) and an ongoing monthly fee for hosting, updates, and support.' },
];

const faqs = [
    {
        question: 'How much does a print shop website cost?',
        answer: 'It depends on the type. A DIY website builder runs about $15 to $50 a month but you build it yourself. A freelancer or agency typically charges $2,000 to $10,000 or more for a custom site. A print-specialized platform with online ordering and production integration is usually priced as a setup fee plus a monthly subscription.',
    },
    {
        question: 'Is it a one-time cost or a monthly fee?',
        answer: 'Usually both. Most custom and specialized options split into a one-time build or setup fee and an ongoing monthly cost for hosting, updates, and support. DIY builders are monthly only. When you compare, look at the total of both, not just the headline number.',
    },
    {
        question: 'Why does a print shop website cost more than a regular website?',
        answer: 'A regular website just shows information. A print shop website has to handle size and color matrices, artwork upload and proofing, per-decoration pricing, and ideally order flow into production. That extra functionality is real software work, which is why a print-ready site costs more than a brochure site.',
    },
    {
        question: 'What is the cheapest way to get a print shop online?',
        answer: 'A DIY website builder is the cheapest at $15 to $50 a month, and it is fine for a simple online presence. The trade-off is that you build and maintain it yourself, and it will not handle decoration-aware ordering or connect to your production, so you keep doing intake by phone and email.',
    },
    {
        question: 'Does the price include online ordering and payments?',
        answer: 'Not always, so ask. A basic site may only include a contact form. Real online ordering with artwork upload, quantity pricing, and card payments is often a separate tier or add-on. If taking complete, paid orders online is the goal, confirm it is included before comparing prices.',
    },
    {
        question: 'How much does a Shop Titan print shop website cost?',
        answer: 'Shop Titan is priced as a setup fee plus a monthly subscription, with no long-term contract, and the storefront can be taken on its own or connected to the full operations system. See the pricing page for current setup and monthly options.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Print Shop Website',
    description:
        'A custom print shop website with decoration-aware online ordering, artwork upload, payments, and orders connected to production, priced as a setup fee plus monthly subscription. Compared against DIY builders and generic agencies.',
    url: 'https://shoptitan.app/print-shop-website-cost',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Print Shop Website Cost', url: 'https://shoptitan.app/print-shop-website-cost' },
]);

// ───── Motion ─────

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

export default function PrintShopWebsiteCostPage() {
    return (
        <>
            <main className="min-h-screen pt-20">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

                {/* ───── HERO ───── */}
                <section className="pt-16 md:pt-24 pb-10 md:pb-14 bg-background-light dark:bg-background-dark">
                    <div className="max-w-4xl mx-auto px-mobile text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            How much does a print shop website cost?
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                        >
                            A straight answer, the three ways to get a print shop online, what each really costs, and what actually drives the price.
                        </motion.p>
                    </div>
                </section>

                {/* ───── DIRECT ANSWER (AEO) ───── */}
                <section className="bg-surface dark:bg-gray-950 border-t border-structural-border dark:border-gray-800 py-14 md:py-16">
                    <div className="max-w-4xl mx-auto px-mobile">
                        <div className="border-l-4 border-primary pl-6 md:pl-8">
                            <p className="text-base md:text-lg text-charcoal dark:text-gray-200 leading-relaxed">
                                A print shop website typically costs <strong>$15 to $50 a month</strong> with a DIY builder you set up yourself, <strong>$2,000 to $10,000 or more</strong> from a freelancer or agency, or a <strong>setup fee plus monthly subscription</strong> for a print-specialized platform with online ordering and production integration. The right price depends on whether you want a simple presence or a site that actually takes orders and feeds your shop.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ───── COST TIERS (signature) ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                Three ways to get a print shop website
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Each option lands at a different price for a reason. Here is what you get, and what you give up.
                            </p>
                        </div>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="grid md:grid-cols-3 gap-6 items-stretch"
                        >
                            {tiers.map((t) => (
                                <motion.div
                                    key={t.label}
                                    variants={fadeUp}
                                    className={`rounded-2xl border p-7 flex flex-col ${
                                        t.featured
                                            ? 'border-primary/30 bg-primary/5 dark:bg-primary/10'
                                            : 'border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950'
                                    }`}
                                >
                                    <div className="text-sm font-semibold text-secondary-text dark:text-gray-400 mb-1">{t.label}</div>
                                    <div className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-1">{t.price}</div>
                                    <div className="text-xs text-secondary-text dark:text-gray-500 mb-5">{t.sub}</div>
                                    <ul className="space-y-2.5 mb-5 flex-1">
                                        {t.points.map((p) => (
                                            <li key={p} className="flex items-start gap-2.5 text-sm text-secondary-text dark:text-gray-400 leading-relaxed">
                                                <span className="material-symbols-outlined text-primary text-lg shrink-0">check</span>
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-xs text-secondary-text dark:text-gray-500 leading-relaxed border-t border-structural-border dark:border-gray-800 pt-4">{t.note}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── COST FACTORS ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                What drives the price
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Four things move a print shop website up or down in cost. Knowing them helps you compare quotes honestly.
                            </p>
                        </div>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="grid sm:grid-cols-2 gap-6"
                        >
                            {factors.map((f) => (
                                <motion.div
                                    key={f.title}
                                    variants={fadeUp}
                                    className="rounded-2xl border border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-900 p-6 flex flex-col gap-3"
                                >
                                    <span className="material-symbols-outlined text-primary text-3xl">{f.icon}</span>
                                    <h3 className="text-lg font-semibold text-charcoal dark:text-white tracking-tight">{f.title}</h3>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{f.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── SHOP TITAN PRICING ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-20 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            What Shop Titan costs
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                            Shop Titan is priced as a setup fee plus a monthly subscription, with no long-term contract. You can take the storefront on its own or connect it to the full operations system, and we build it for you so you are not maintaining a template. See the pricing page for current options, or book a demo for a quote on your specific shop.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/pricing" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                See pricing
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/print-shop-website" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Print shop websites overview
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/best-ecommerce-platform-for-print-shops" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Compare platforms
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ───── FAQ ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-10">
                            Print shop website cost FAQ
                        </h2>
                        <div className="border-t border-structural-border dark:border-gray-800">
                            {faqs.map((f) => (
                                <details key={f.question} className="group border-b border-structural-border dark:border-gray-800">
                                    <summary className="flex cursor-pointer items-center justify-between gap-4 list-none py-5 text-left">
                                        <span className="text-base md:text-lg font-medium tracking-tight text-charcoal dark:text-white">{f.question}</span>
                                        <span className="material-symbols-outlined text-secondary-text transition-transform duration-200 group-open:rotate-45">add</span>
                                    </summary>
                                    <div className="pb-5 -mt-1 text-base text-secondary-text dark:text-gray-400 leading-relaxed">{f.answer}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── FINAL CTA ───── */}
                <section className="bg-background-light dark:bg-background-dark py-20 md:py-28 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            Get a real quote for your shop
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Book a demo and we will walk you through what a print shop website would cost for your products, your ordering, and your production, no guesswork.
                        </p>
                        <Link
                            href="/reach-out"
                            className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            Book a Demo
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
