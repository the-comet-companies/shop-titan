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

const stack = [
    { item: 'WordPress hosting', cost: '$10 to $50+ / mo', desc: 'You self-host WordPress and keep it fast, secure, and online. Managed hosting costs more but saves headaches.' },
    { item: 'WooCommerce core + gateway', cost: 'Free + transaction fees', desc: 'The plugin itself is free. Payments run through a gateway with the usual processing fees.' },
    { item: 'Product add-ons / personalizer', cost: 'Premium plugin', desc: 'For custom options beyond simple variants. Needed for decoration choices, and an extra cost.' },
    { item: 'File-upload plugin', cost: 'Premium plugin', desc: 'So customers can attach artwork. WooCommerce has no native print-artwork flow.' },
    { item: 'Dynamic / conditional pricing', cost: 'Premium plugin', desc: 'For quantity and decoration-based pricing that standard variants cannot express.' },
    { item: 'Security, backups & updates', cost: 'Ongoing time or service', desc: 'You own uptime, plugin conflicts, and security patches, or you pay someone to manage it.' },
    { item: 'A developer', cost: 'Setup + upkeep', desc: 'To wire it together and keep plugins compatible through WordPress and Woo updates.' },
];

const pros = [
    'Free, open-source core, no platform subscription',
    'Full control and ownership of your data',
    'Endlessly customizable if you have the skills',
    'Built on WordPress, strong for content and blog SEO',
];

const cons = [
    'You self-host and maintain it: security, updates, plugin conflicts',
    'Decoration-aware ordering and artwork upload need premium plugins',
    'No native tie-in to your production, orders still get re-keyed',
    '"Free" adds up across hosting, extensions, and developer time',
];

const faqs = [
    {
        question: 'Can you use WooCommerce for a print shop?',
        answer: 'Yes. WooCommerce is a free, flexible WordPress plugin and you can absolutely run a print shop store on it. The catch is that it is a do-it-yourself, self-hosted platform. Decoration-aware ordering, artwork upload, and dynamic pricing all require premium plugins, and there is no built-in tie to your production, so you assemble and maintain the stack yourself.',
    },
    {
        question: 'Is WooCommerce really free for a print shop?',
        answer: 'The core plugin is free, but running it is not. You pay for WordPress hosting, premium plugins for personalization, file upload, and dynamic pricing, and either your own time or a developer to set it up and keep it secure and updated. The honest cost is hosting plus extensions plus maintenance, not zero.',
    },
    {
        question: 'WooCommerce or Shopify for a print shop?',
        answer: 'WooCommerce gives you more control and no subscription but demands more technical work and self-hosting. Shopify is easier to run but hosted and subscription-based. Neither is built for decoration workflows out of the box, so both need add-ons. The real choice is how much DIY and maintenance you want to take on.',
    },
    {
        question: 'Does WooCommerce connect to print production?',
        answer: 'Not on its own. WooCommerce ends at the paid order. To get orders into quotes, inventory, and your production queue you would need a separate system and custom integration. A purpose-built print platform connects the store to production so orders are not re-keyed by hand.',
    },
    {
        question: 'When does a purpose-built platform make more sense?',
        answer: 'When you decorate in-house, want a custom site without becoming your own WordPress admin, and want online orders to flow straight into production. A platform like Shop Titan handles the print-specific workflow and the operations tie-in out of the box, instead of you assembling and maintaining plugins.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Print Shop Website vs WooCommerce',
    description:
        'A purpose-built, managed print shop ecommerce platform with decoration-aware online ordering, artwork upload, and production integration, compared against self-hosted WooCommerce for print shops and apparel decorators.',
    url: 'https://shoptitan.app/woocommerce-for-print-shops',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'WooCommerce for Print Shops', url: 'https://shoptitan.app/woocommerce-for-print-shops' },
]);

// ───── Motion ─────

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

export default function WooCommerceForPrintShopsPage() {
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
                            WooCommerce for print shops: is it worth it?
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
                        >
                            WooCommerce is free and flexible, but running it for a print shop is a do-it-yourself project. Here is the real stack, the true cost, and when it is the right call.
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
                                WooCommerce is a free, flexible WordPress plugin you can use to run a print shop store, with full control and no subscription. But it is self-hosted and do-it-yourself: decoration-aware ordering, artwork upload, and dynamic pricing all need premium plugins, and there is no built-in tie to production. The honest cost is hosting plus extensions plus maintenance, so it suits shops that want control and have the technical appetite to run it.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ───── THE STACK (signature) ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-4xl mx-auto px-mobile">
                        <div className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                What running WooCommerce for a print shop actually takes
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Free is just the plugin. This is the stack you assemble and maintain to make it work for decoration.
                            </p>
                        </div>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="space-y-3"
                        >
                            {stack.map((s, i) => (
                                <motion.div
                                    key={s.item}
                                    variants={fadeUp}
                                    className="flex items-start gap-4 rounded-2xl border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 p-5"
                                >
                                    <div className="text-lg font-bold text-primary/40 shrink-0 w-8 text-center pt-0.5">{i + 1}</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                                            <h3 className="text-base font-semibold text-charcoal dark:text-white">{s.item}</h3>
                                            <span className="text-xs font-semibold text-secondary-text dark:text-gray-500">{s.cost}</span>
                                        </div>
                                        <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{s.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── PROS / CONS ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile grid md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-900 p-7">
                            <h2 className="text-xl font-bold text-charcoal dark:text-white tracking-tight mb-5 flex items-center gap-2">
                                <span className="material-symbols-outlined text-green-600 dark:text-green-400">check_circle</span>
                                What WooCommerce gives you
                            </h2>
                            <ul className="space-y-3">
                                {pros.map((p) => (
                                    <li key={p} className="flex items-start gap-3 text-sm md:text-base text-secondary-text dark:text-gray-400 leading-relaxed">
                                        <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-xl shrink-0">check</span>
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-900 p-7">
                            <h2 className="text-xl font-bold text-charcoal dark:text-white tracking-tight mb-5 flex items-center gap-2">
                                <span className="material-symbols-outlined text-rose-500">cancel</span>
                                The trade-offs for print
                            </h2>
                            <ul className="space-y-3">
                                {cons.map((c) => (
                                    <li key={c} className="flex items-start gap-3 text-sm md:text-base text-secondary-text dark:text-gray-400 leading-relaxed">
                                        <span className="material-symbols-outlined text-rose-500 text-xl shrink-0">close</span>
                                        {c}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ───── FIRST-HAND EVIDENCE ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-4xl mx-auto px-mobile">
                        <div className="rounded-2xl border border-primary/20 bg-primary/5 dark:bg-primary/10 p-7 md:p-10 shadow-card">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Measured at a real shop</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                The plugin stack is not the expensive part. The gap after checkout is.
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                                A store that does not feed production means someone re-keys every order. At one shop we moved onto a connected system, that gap was costing 8 to 10 order errors a month and more than 6 hours a week of manual tracking. Both went to zero in the first month, and order status lookups went from 10-15 minutes of digging to under 30 seconds.
                            </p>
                            <Link href="/case-studies/spreadsheets-to-system" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Read the full case study
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ───── WHICH TO CHOOSE ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-20 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            When WooCommerce fits, and when it does not
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                            Choose WooCommerce if you want full control, have the technical appetite to self-host and maintain it, and do not mind assembling plugins. Choose a purpose-built platform like Shop Titan if you would rather not become your own WordPress admin, want a custom site built for decoration, and want online orders to flow straight into production.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/print-shop-ecommerce-website" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Print shop ecommerce website
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/shopify-for-print-shops" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Shopify for print shops
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/print-shop-website-cost" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                What it costs
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
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-10">
                            WooCommerce for print shops FAQ
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
                            Rather not run WordPress yourself?
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Book a demo and we will show you a managed, print-built alternative, a custom site wired to production, with no plugins to maintain.
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
