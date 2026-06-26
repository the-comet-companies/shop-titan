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

const features = [
    {
        icon: 'storefront',
        title: 'Online store and catalog',
        desc: 'A searchable storefront with categories, product pages, and your full lineup on display.',
    },
    {
        icon: 'shopping_cart_checkout',
        title: 'Secure cart and checkout',
        desc: 'A fast, trusted checkout built to convert browsers into paid orders.',
    },
    {
        icon: 'credit_card',
        title: 'Online card payments',
        desc: 'Take payment up front with Stripe, so jobs are paid before they hit the press.',
    },
    {
        icon: 'person',
        title: 'Customer accounts and reorders',
        desc: 'Buyers save their details, track orders, and reorder a past job in a click.',
    },
    {
        icon: 'tune',
        title: 'Product options and variants',
        desc: 'Sizes, colors, decoration methods, and quantity pricing handled on every product.',
    },
    {
        icon: 'groups',
        title: 'Team and company stores',
        desc: 'Private stores for schools, clubs, and brands, each with their own products and pricing.',
    },
    {
        icon: 'upload_file',
        title: 'Artwork upload at checkout',
        desc: 'Customers attach their design and placement to the order before they pay.',
    },
    {
        icon: 'analytics',
        title: 'Sales analytics',
        desc: 'See traffic, conversion, and revenue so you know what is actually selling.',
    },
];

const sellingModels = [
    {
        icon: 'local_mall',
        title: 'Retail merch',
        desc: 'Sell your own branded apparel and products directly to the public.',
    },
    {
        icon: 'groups',
        title: 'Team and company stores',
        desc: 'Stand up private stores for schools, sports teams, and corporate clients.',
    },
    {
        icon: 'volunteer_activism',
        title: 'Fundraisers and spirit wear',
        desc: 'Run time-boxed campaigns that collect orders and payment up front.',
    },
    {
        icon: 'handshake',
        title: 'Wholesale and B2B reorders',
        desc: 'Give repeat business accounts their own pricing and one-click reordering.',
    },
];

const steps = [
    {
        title: 'Plan your store',
        desc: 'We map your products, pricing, options, and how you want to take payment.',
    },
    {
        title: 'Build the storefront',
        desc: 'We set up the catalog, variants, checkout, and your branding.',
    },
    {
        title: 'Connect payments and ops',
        desc: 'We wire up Stripe and, if you want it, the link into production.',
    },
    {
        title: 'Launch and sell',
        desc: 'You go live, start taking online orders, and we train your team.',
    },
];

const faqs = [
    {
        question: 'What is a print shop ecommerce website?',
        answer: 'A print shop ecommerce website is an online store built for decorators. Customers buy custom apparel and merch, choose sizes, colors, and decoration, upload artwork, and pay by card at checkout, so orders arrive paid and ready for production.',
    },
    {
        question: 'Can I sell custom apparel and merch online?',
        answer: 'Yes. You can sell your own branded products, set up team and company stores, run fundraisers, and take wholesale reorders. Each product carries its own sizes, colors, decoration options, and quantity pricing.',
    },
    {
        question: 'How do customers pay?',
        answer: 'Customers pay by card at checkout through Stripe. Jobs are paid up front before they enter production, which protects your cash flow and cuts down on chasing invoices.',
    },
    {
        question: 'Can I set up team stores or company stores?',
        answer: 'Yes. You can launch private stores for schools, clubs, leagues, and corporate clients, each with its own products, branding, and pricing. They are ideal for recurring group orders and spirit wear.',
    },
    {
        question: 'Can customers order custom sizes, colors, and quantities?',
        answer: 'Yes. Every product supports size and color matrices, decoration method, placement, and quantity-based pricing, so a customer can configure exactly what they want and see the price before checkout.',
    },
    {
        question: 'Is this built on Shopify?',
        answer: 'No. The store is purpose-built for print shops. Generic ecommerce platforms struggle with artwork uploads, size and color matrices, per-method pricing, and the connection into production. This is built for decoration from the ground up.',
    },
    {
        question: 'Does the store connect to my production and inventory?',
        answer: 'Yes. Online orders can flow straight into the FileMaker back office, where they become quotes, allocate inventory, and enter the production queue, with no manual re-entry between the website and the shop floor.',
    },
    {
        question: 'How much does a print shop ecommerce website cost?',
        answer: 'Pricing depends on whether you take the store on its own or connected to the full operations system, and whether we build it for you or you set it up yourself. See the pricing page for current setup and monthly options with no long-term contract.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Print Shop Ecommerce Website',
    description:
        'Ecommerce websites for print shops and apparel decorators, with an online store, secure checkout, card payments, team and company stores, product variants, artwork upload, and a connection to production.',
    url: 'https://shoptitan.app/print-shop-ecommerce-website',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Print Shop Ecommerce Website', url: 'https://shoptitan.app/print-shop-ecommerce-website' },
]);

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

// Process timeline: dot pops in, then the connector line draws left to right.
const dotPop: Variants = {
    hidden: { scale: 0, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] },
    },
};

const lineGrow: Variants = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.15 } },
};

export default function PrintShopEcommerceWebsitePage() {
    return (
        <>
            <main className="min-h-screen pt-20">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

                {/* ───── HERO ───── */}
                <section className="pt-16 md:pt-24 pb-16 md:pb-20 bg-background-light dark:bg-background-dark relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-mobile text-center relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            Sell custom apparel online with a print shop ecommerce website
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
                        >
                            A real online store built for decorators. Customers buy your products, configure sizes and colors, upload artwork, and pay by card at checkout, so every order lands paid and ready for production.
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
                <section className="bg-surface dark:bg-gray-950 py-12 md:py-16">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
                            <p className="text-base md:text-lg text-charcoal dark:text-gray-200 leading-relaxed">
                                A print shop ecommerce website is an online store built for decorators, where customers buy custom apparel and merch, choose sizes, colors, and decoration, upload artwork, and pay by card at checkout. Shop Titan builds the storefront, wires up payments, and connects orders straight to production.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ───── WHY ───── */}
                <section className="bg-surface dark:bg-gray-950 pb-16 md:pb-20">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            Why a print shop needs a real online store
                        </h2>
                        <div className="space-y-4 text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                            <p>
                                A brochure website tells people you exist. An ecommerce website lets them buy. For a print shop, that difference is revenue you capture while the shop is closed, from customers who would rather configure a job and pay online than trade emails for two days.
                            </p>
                            <p>
                                With a store built for decoration, every product carries its sizes, colors, methods, and quantity pricing, and checkout collects payment and artwork in one step. Orders arrive complete and paid, your team stops quoting the same simple jobs by hand, and repeat buyers reorder themselves.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ───── FEATURES ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                Everything your store needs to sell
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Built around how decoration shops actually sell online, not a generic cart bolted onto a template.
                            </p>
                        </div>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-structural-border dark:bg-gray-800 border border-structural-border dark:border-gray-800 rounded-2xl overflow-hidden"
                        >
                            {features.map((f) => (
                                <motion.div
                                    key={f.title}
                                    variants={fadeUp}
                                    className="bg-surface dark:bg-gray-950 p-6 flex flex-col gap-3"
                                >
                                    <span className="material-symbols-outlined text-primary text-3xl">{f.icon}</span>
                                    <h3 className="text-lg font-semibold text-charcoal dark:text-white tracking-tight">{f.title}</h3>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{f.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── WAYS TO SELL ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                Built for the ways print shops sell online
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                One store, every revenue stream, from public retail to private group orders.
                            </p>
                        </div>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {sellingModels.map((m) => (
                                <motion.div
                                    key={m.title}
                                    variants={fadeUp}
                                    className="rounded-2xl border border-structural-border dark:border-gray-800 bg-background-light dark:bg-background-dark p-6 flex flex-col gap-3"
                                >
                                    <span className="material-symbols-outlined text-primary text-3xl">{m.icon}</span>
                                    <h3 className="text-lg font-semibold text-charcoal dark:text-white tracking-tight">{m.title}</h3>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{m.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── HOW IT WORKS (process) ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-12 max-w-2xl">
                            How we launch your online store
                        </h2>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10"
                        >
                            {steps.map((s, i) => (
                                <motion.div key={s.title} variants={fadeUp} className="relative flex flex-col gap-3">
                                    <div className="flex items-center">
                                        <motion.span variants={dotPop} className="relative z-10 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-primary/15 shrink-0" />
                                        {i < steps.length - 1 && (
                                            <motion.span variants={lineGrow} className="hidden lg:block h-px flex-1 bg-structural-border dark:bg-gray-800 ml-3 origin-left" />
                                        )}
                                    </div>
                                    <h3 className="text-lg font-semibold text-charcoal dark:text-white tracking-tight">{s.title}</h3>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed pr-6">{s.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── CONNECTS TO OPS ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-20 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            Online orders that run themselves into production
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                            Selling online only pays off if the orders do not pile up as manual data entry. Connect the store to the pre-built FileMaker system and every checkout becomes a quote, allocates inventory, and enters the production queue automatically. Start with the store, add the operations side when volume calls for it.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/print-shop-website" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Print shop websites overview
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/platform/ecommerce-storefront" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                See the storefront platform
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/platform/complete-system" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                See the complete system
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ───── FAQ ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-10">
                            Print shop ecommerce FAQ
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
                            Start selling your apparel online
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Book a demo and we will show you a working print shop store taking real orders, with real products, real pricing, and real card payments.
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
