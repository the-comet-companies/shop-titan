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

const platforms = [
    {
        name: 'Shop Titan',
        focus: 'Custom website + operations system',
        customSite: 'Yes, custom-built',
        production: 'Yes, via FileMaker',
        bestFor: 'Shops that produce in-house and want a branded site wired to production',
        us: true,
    },
    {
        name: 'Printavo',
        focus: 'Shop management & online approvals',
        customSite: 'In-app storefront',
        production: 'Within Printavo',
        bestFor: 'Shops focused on workflow and order management',
    },
    {
        name: 'DecoNetwork',
        focus: 'Web-to-print + business management',
        customSite: 'Template storefronts',
        production: 'Within DecoNetwork',
        bestFor: 'Decorators wanting an all-in-one web-to-print suite',
    },
    {
        name: 'OnPrintShop',
        focus: 'Web-to-print storefronts',
        customSite: 'Template storefronts',
        production: 'Storefront-focused',
        bestFor: 'Print businesses that need a web-to-print store',
    },
    {
        name: 'Shopify (+ apps)',
        focus: 'Generic ecommerce',
        customSite: 'Themes & templates',
        production: 'Needs apps / integration',
        bestFor: 'General online selling, not print-specific workflows',
    },
    {
        name: 'Printful / Printify',
        focus: 'Print-on-demand fulfillment',
        customSite: 'Storefront integrations',
        production: 'They print for you',
        bestFor: 'Sellers who do not produce in-house',
    },
];

const criteria = [
    { icon: 'precision_manufacturing', title: 'Do you produce in-house?', desc: 'If you print and decorate yourself, you need a platform that feeds your production, not just a checkout. If you do not, print-on-demand may fit better.' },
    { icon: 'language', title: 'Custom site or template?', desc: 'Template storefronts are fast but look like everyone else. A custom-built site reflects your brand and converts better, but costs more up front.' },
    { icon: 'dynamic_form', title: 'Decoration-aware ordering?', desc: 'Generic ecommerce was not built for size and color matrices, artwork upload, and per-decoration pricing. Print-specific platforms handle these natively.' },
    { icon: 'sync', title: 'Does it connect to operations?', desc: 'The real time savings come when online orders flow into quotes, inventory, and production with no re-entry, not just a paid cart.' },
];

const faqs = [
    {
        question: 'What is the best ecommerce platform for print shops?',
        answer: 'There is no single best platform, it depends on whether you produce in-house and how much you value a custom site. Shops that decorate in-house and want a branded site connected to production tend to choose a purpose-built option like Shop Titan, while sellers who do not produce often use print-on-demand, and generic ecommerce like Shopify fits only with print-specific apps.',
    },
    {
        question: 'Can I just use Shopify for my print shop?',
        answer: 'You can, but Shopify is generic ecommerce. It was not built for size and color matrices, artwork upload and proofing, per-decoration pricing, or order flow into production. You can add apps to cover some of this, but you end up stitching tools together. Print-specific platforms handle these natively.',
    },
    {
        question: 'What is the difference from print-on-demand platforms?',
        answer: 'Print-on-demand services like Printful and Printify print and ship the orders for you, so they suit sellers who do not produce in-house. If you run your own shop and want orders to feed your own production, you need a platform built around your operation, not a third party doing the printing.',
    },
    {
        question: 'Why does production integration matter?',
        answer: 'A storefront that only collects paid orders still leaves your team re-keying every job into quotes, inventory, and the production queue. The real efficiency comes when online orders flow into operations automatically, which is why connecting the store to a production system matters more than the checkout alone.',
    },
    {
        question: 'How much does a print shop ecommerce platform cost?',
        answer: 'Pricing ranges from low monthly subscriptions for template storefronts to higher setup costs for a custom site connected to operations. The right comparison is not just the monthly fee, it is the total of the platform plus the manual work it removes. See our pricing for setup and monthly options with no long-term contract.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Print Shop Ecommerce Platform',
    description:
        'A custom ecommerce website and operations platform for print shops and apparel decorators, with decoration-aware online ordering, artwork upload, and orders connected to production, compared against print management, web-to-print, generic ecommerce, and print-on-demand platforms.',
    url: 'https://shoptitan.app/best-ecommerce-platform-for-print-shops',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Best Ecommerce Platform for Print Shops', url: 'https://shoptitan.app/best-ecommerce-platform-for-print-shops' },
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

export default function BestEcommercePlatformPage() {
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
                            The best ecommerce platform for print shops
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
                        >
                            An honest comparison of the platforms print shops and apparel decorators actually evaluate, what each is built for, and how to pick the right one for how your shop works.
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
                                href="/pricing"
                                className="px-8 py-4 text-charcoal dark:text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-primary/50 transition-colors rounded-full" />
                                <span className="relative z-10">View Pricing</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* ───── DIRECT ANSWER (AEO) ───── */}
                <section className="bg-surface dark:bg-gray-950 border-t border-structural-border dark:border-gray-800 py-14 md:py-16">
                    <div className="max-w-4xl mx-auto px-mobile">
                        <div className="border-l-4 border-primary pl-6 md:pl-8">
                            <p className="text-base md:text-lg text-charcoal dark:text-gray-200 leading-relaxed">
                                The best ecommerce platform for a print shop depends on whether you produce in-house and how much a custom, branded site matters to you. Shops that decorate in-house and want a site wired to production tend to choose a purpose-built platform like Shop Titan. Sellers who do not produce often use print-on-demand, and generic ecommerce like Shopify works only once you bolt on print-specific apps.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ───── COMPARISON TABLE (signature) ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                Print shop ecommerce platforms compared
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Each of these fits a different kind of shop. Here is what they are built for and where they fit.
                            </p>
                        </div>
                        <div className="overflow-x-auto rounded-2xl border border-structural-border dark:border-gray-800">
                            <table className="w-full text-left border-collapse min-w-[820px]">
                                <thead>
                                    <tr className="bg-surface dark:bg-gray-950">
                                        <th className="p-4 text-sm font-semibold text-charcoal dark:text-white">Platform</th>
                                        <th className="p-4 text-sm font-semibold text-secondary-text dark:text-gray-400">Primary focus</th>
                                        <th className="p-4 text-sm font-semibold text-secondary-text dark:text-gray-400">Custom site?</th>
                                        <th className="p-4 text-sm font-semibold text-secondary-text dark:text-gray-400">Connects to production?</th>
                                        <th className="p-4 text-sm font-semibold text-secondary-text dark:text-gray-400">Best for</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {platforms.map((p) => (
                                        <tr key={p.name} className={p.us ? 'bg-primary/5 dark:bg-primary/10' : 'bg-background-light dark:bg-background-dark'}>
                                            <td className="p-4 text-sm font-bold align-top border-t border-structural-border dark:border-gray-800 text-charcoal dark:text-white">
                                                {p.name}
                                                {p.us && <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-primary">us</span>}
                                            </td>
                                            <td className="p-4 text-sm text-secondary-text dark:text-gray-400 align-top border-t border-structural-border dark:border-gray-800">{p.focus}</td>
                                            <td className="p-4 text-sm text-secondary-text dark:text-gray-400 align-top border-t border-structural-border dark:border-gray-800">{p.customSite}</td>
                                            <td className="p-4 text-sm text-secondary-text dark:text-gray-400 align-top border-t border-structural-border dark:border-gray-800">{p.production}</td>
                                            <td className="p-4 text-sm text-charcoal dark:text-gray-200 align-top border-t border-structural-border dark:border-gray-800">{p.bestFor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-secondary-text dark:text-gray-500 mt-4">
                            Categorized by primary focus. Every platform here is a capable tool for the job it was built for, the right pick depends on your shop.
                        </p>
                    </div>
                </section>

                {/* ───── HOW TO CHOOSE ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                How to choose the right one
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Four questions cut through the noise and point you at the right category.
                            </p>
                        </div>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="grid sm:grid-cols-2 gap-6"
                        >
                            {criteria.map((c) => (
                                <motion.div
                                    key={c.title}
                                    variants={fadeUp}
                                    className="rounded-2xl border border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-900 p-6 flex flex-col gap-3"
                                >
                                    <span className="material-symbols-outlined text-primary text-3xl">{c.icon}</span>
                                    <h3 className="text-lg font-semibold text-charcoal dark:text-white tracking-tight">{c.title}</h3>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{c.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── WHERE SHOP TITAN FITS ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-20 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            Where Shop Titan fits
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                            Shop Titan is the right pick for one specific shop: you produce in-house, you want a custom, branded site instead of a template, and you want online orders to flow straight into operations. It pairs a custom storefront with a pre-built FileMaker system, proven in a $1M-plus shop. If that is not you, one of the other categories above will fit better, and that is fine.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/print-shop-ecommerce-website" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Print shop ecommerce website
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/platform/ecommerce-storefront" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                See the storefront product
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/platform/complete-system" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                The complete system
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ───── FAQ ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-10">
                            Print shop ecommerce platform FAQ
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
                            See if Shop Titan is the right fit
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Book a demo and we will give you an honest assessment of whether Shop Titan fits your shop, or point you somewhere better if it does not.
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
