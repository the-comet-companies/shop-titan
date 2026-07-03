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

const headToHead = [
    { label: 'Built for', shopify: 'General ecommerce, any product', us: 'Print shops & apparel decorators' },
    { label: 'Size & color matrices', shopify: 'Needs apps or workarounds', us: 'Native' },
    { label: 'Artwork upload & proofing', shopify: 'Via third-party apps', us: 'Built in' },
    { label: 'Per-decoration pricing', shopify: 'Custom app / manual', us: 'Built in' },
    { label: 'Branded site', shopify: 'Themes & templates', us: 'Custom-built' },
    { label: 'Connects to production', shopify: 'No, needs integration', us: 'Yes, via FileMaker' },
    { label: 'Pricing model', shopify: 'Monthly + transaction + app fees', us: 'Setup + monthly' },
];

const worksWell = [
    'A fast, reliable checkout and proven hosting',
    'A huge app ecosystem for general store needs',
    'Easy to start and sell ready-made or blank products',
    'Strong payments, shipping, and inventory for simple catalogs',
];

const fallsShort = [
    'Not built for decoration-aware ordering (size/color matrices, per-decoration pricing)',
    'Artwork upload and online proofing require third-party apps',
    'No tie-in to your production, orders still get re-keyed into the shop',
    'You stitch several paid apps together and maintain the seams',
];

const needs = [
    { icon: 'extension', title: 'Product personalizer app', desc: 'To handle custom options beyond basic variants, often limited and an extra monthly cost.' },
    { icon: 'upload_file', title: 'File-upload app', desc: 'So customers can attach artwork, since Shopify has no native print-artwork flow.' },
    { icon: 'request_quote', title: 'Custom pricing app', desc: 'For quantity and decoration-based pricing that a standard variant cannot express.' },
    { icon: 'account_tree', title: 'A separate production tool', desc: 'And someone to integrate it, because Shopify ends at the paid cart, not the shop floor.' },
];

const faqs = [
    {
        question: 'Can you use Shopify for a print shop?',
        answer: 'Yes, you can use Shopify for a print shop, and it handles checkout, payments, and a simple catalog well. The catch is that Shopify is general ecommerce. It was not built for decoration-aware ordering, artwork upload and proofing, or order flow into production, so you add third-party apps to cover those gaps and maintain the seams yourself.',
    },
    {
        question: 'What does Shopify do well for print shops?',
        answer: 'Shopify is excellent at the ecommerce basics: a fast checkout, reliable hosting, strong payments and shipping, and a huge app marketplace. If you mainly sell ready-made or blank products with simple options, Shopify is a solid, quick way to get selling online.',
    },
    {
        question: 'Where does Shopify fall short for print shops?',
        answer: 'Shopify was not designed for custom decoration. Size and color matrices, per-decoration pricing, artwork upload, and online proofing all need apps or workarounds, and even then orders do not flow into your production. You end up paying for several apps and re-keying orders into the shop by hand.',
    },
    {
        question: 'What apps do I need to make Shopify work for a print shop?',
        answer: 'Typically a product personalizer, a file-upload app, and a custom-pricing app, plus a separate production or management tool and someone to integrate them. That stack adds monthly cost and complexity, which is the trade-off versus a platform built for print shops out of the box.',
    },
    {
        question: 'Shopify or a purpose-built print shop platform?',
        answer: 'Choose Shopify if you sell simple products and want to start fast. Choose a purpose-built platform like Shop Titan if you decorate in-house, want a custom branded site, and want online orders to flow straight into production without stitching apps together. It comes down to whether print-specific workflow matters to your shop.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Print Shop Website vs Shopify',
    description:
        'A purpose-built print shop ecommerce platform with decoration-aware online ordering, artwork upload, and production integration, compared against Shopify for print shops and apparel decorators.',
    url: 'https://shoptitan.app/shopify-for-print-shops',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Shopify for Print Shops', url: 'https://shoptitan.app/shopify-for-print-shops' },
]);

// ───── Motion ─────

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

export default function ShopifyForPrintShopsPage() {
    return (
        <>
            <main className="min-h-screen pt-20">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

                {/* ───── HERO ───── */}
                <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-background-light dark:bg-background-dark">
                    <div className="max-w-4xl mx-auto px-mobile text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            Shopify for print shops: does it actually work?
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
                        >
                            An honest look at using Shopify to run a print shop, what it does well, where it falls short for decoration, and the apps you would need to fill the gaps.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href="/reach-out"
                                className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Book a Demo
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link
                                href="/best-ecommerce-platform-for-print-shops"
                                className="px-8 py-4 text-charcoal dark:text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-primary/50 transition-colors rounded-full" />
                                <span className="relative z-10">Compare All Platforms</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* ───── DIRECT ANSWER (AEO) ───── */}
                <section className="bg-surface dark:bg-gray-950 border-t border-structural-border dark:border-gray-800 py-14 md:py-16">
                    <div className="max-w-4xl mx-auto px-mobile">
                        <div className="border-l-4 border-primary pl-6 md:pl-8">
                            <p className="text-base md:text-lg text-charcoal dark:text-gray-200 leading-relaxed">
                                You can use Shopify for a print shop, and it handles checkout, payments, and a simple catalog well. But Shopify is general ecommerce. It was not built for decoration-aware ordering, artwork upload and proofing, or order flow into production, so you add third-party apps to cover the gaps and maintain the seams yourself. Shops that decorate in-house and want orders to feed production often prefer a purpose-built platform.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ───── HEAD TO HEAD (signature) ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-5xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                Shopify vs a purpose-built print shop platform
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Head to head on the things that matter for a shop that decorates in-house.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-structural-border dark:border-gray-800 overflow-hidden">
                            {/* header row */}
                            <div className="grid grid-cols-3 bg-surface dark:bg-gray-950 border-b border-structural-border dark:border-gray-800">
                                <div className="p-4 text-sm font-semibold text-secondary-text dark:text-gray-400">&nbsp;</div>
                                <div className="p-4 text-sm font-bold text-charcoal dark:text-white text-center">Shopify</div>
                                <div className="p-4 text-sm font-bold text-primary text-center bg-primary/5 dark:bg-primary/10">Shop Titan</div>
                            </div>
                            {headToHead.map((row, i) => (
                                <div key={row.label} className={`grid grid-cols-3 ${i % 2 === 1 ? 'bg-surface/50 dark:bg-gray-900/40' : 'bg-background-light dark:bg-background-dark'}`}>
                                    <div className="p-4 text-sm font-semibold text-charcoal dark:text-white border-t border-structural-border dark:border-gray-800">{row.label}</div>
                                    <div className="p-4 text-sm text-secondary-text dark:text-gray-400 text-center border-t border-structural-border dark:border-gray-800">{row.shopify}</div>
                                    <div className="p-4 text-sm text-charcoal dark:text-gray-200 text-center border-t border-structural-border dark:border-gray-800 bg-primary/5 dark:bg-primary/10">{row.us}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── WORKS WELL / FALLS SHORT ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile grid md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-900 p-7">
                            <h2 className="text-xl font-bold text-charcoal dark:text-white tracking-tight mb-5 flex items-center gap-2">
                                <span className="material-symbols-outlined text-green-600 dark:text-green-400">check_circle</span>
                                Where Shopify works well
                            </h2>
                            <ul className="space-y-3">
                                {worksWell.map((w) => (
                                    <li key={w} className="flex items-start gap-3 text-sm md:text-base text-secondary-text dark:text-gray-400 leading-relaxed">
                                        <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-xl shrink-0">check</span>
                                        {w}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-900 p-7">
                            <h2 className="text-xl font-bold text-charcoal dark:text-white tracking-tight mb-5 flex items-center gap-2">
                                <span className="material-symbols-outlined text-rose-500">cancel</span>
                                Where it falls short for print
                            </h2>
                            <ul className="space-y-3">
                                {fallsShort.map((w) => (
                                    <li key={w} className="flex items-start gap-3 text-sm md:text-base text-secondary-text dark:text-gray-400 leading-relaxed">
                                        <span className="material-symbols-outlined text-rose-500 text-xl shrink-0">close</span>
                                        {w}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ───── WHAT YOU'D NEED ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                What you would need to make Shopify work for print
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                It is doable, but it means assembling and paying for a stack of apps, then keeping them in sync.
                            </p>
                        </div>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="grid sm:grid-cols-2 gap-6"
                        >
                            {needs.map((n) => (
                                <motion.div
                                    key={n.title}
                                    variants={fadeUp}
                                    className="rounded-2xl border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 p-6 flex flex-col gap-3"
                                >
                                    <span className="material-symbols-outlined text-primary text-3xl">{n.icon}</span>
                                    <h3 className="text-lg font-semibold text-charcoal dark:text-white tracking-tight">{n.title}</h3>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{n.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── FIRST-HAND EVIDENCE ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-5xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                We measured this at a real shop that left Shopify
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                This is not theory. One shop we work with ran a Shopify store doing 40+ orders a week, and every order was re-entered by hand into their tracking spreadsheet. Here is what changed after we replaced it with a connected storefront.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            {[
                                { label: 'Order processing time', before: '15-20 min each', after: 'Automatic' },
                                { label: 'Lost or duplicate orders', before: '2-3 per week', after: 'Zero' },
                                { label: 'Status calls from customers', before: '15+ per week', after: '2-3 per week' },
                                { label: 'Wrong design printed', before: '1-2 per month', after: 'Zero' },
                            ].map((m) => (
                                <div key={m.label} className="rounded-2xl border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 p-5">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-secondary-text dark:text-gray-500 mb-3">{m.label}</p>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 line-through decoration-rose-400/60 mb-1">{m.before}</p>
                                    <p className="text-lg font-bold text-primary">{m.after}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/case-studies/website-plus-operations" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                            Read the full case study
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </Link>
                    </div>
                </section>

                {/* ───── WHICH TO CHOOSE ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-20 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            Which should you choose?
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                            Choose Shopify if you sell simple products and want to start fast. Choose a purpose-built platform like Shop Titan if you decorate in-house, want a custom branded site, and want online orders to flow straight into production without stitching apps together. Both are good tools, the right one depends on how your shop sells and runs.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/print-shop-ecommerce-website" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Print shop ecommerce website
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/best-ecommerce-platform-for-print-shops" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Compare all platforms
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/print-shop-website-cost" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                What it costs
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/woocommerce-for-print-shops" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                WooCommerce for print shops
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/onprintshop-alternative" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                OnPrintShop alternative
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ───── FAQ ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-10">
                            Shopify for print shops FAQ
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
                <section className="bg-surface dark:bg-gray-950 py-20 md:py-28 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            Not sure Shopify fits your shop?
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Book a demo and we will give you an honest take on whether Shopify or a purpose-built platform is right for how your shop sells and produces.
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
