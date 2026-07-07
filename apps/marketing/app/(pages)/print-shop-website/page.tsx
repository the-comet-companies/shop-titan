'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import {
    generateFAQSchema,
    generateServiceSchema,
    generateBreadcrumbSchema,
} from '@/lib/schema';

// ───── Content ─────

const stats = [
    { k: '24/7', v: 'Customers can order anytime' },
    { k: 'Weeks', v: 'Typical time to launch' },
    { k: '$1M+', v: 'Shop it was proven in' },
    { k: 'Zero', v: 'Phone tag to place an order' },
];

const beforeItems = [
    'Customers call and text only during business hours.',
    'Every job starts with back-and-forth on sizes, colors, and quantities.',
    'Artwork arrives buried in email threads, sometimes the wrong file.',
    'Quotes get retyped by hand, and some buyers never reply.',
];

const afterItems = [
    'Customers browse, configure, and pay on their own schedule.',
    'Products show real options and pricing up front.',
    'Artwork uploads attach to the order at checkout.',
    'Complete orders land ready for production.',
];

const features = [
    { icon: 'storefront', title: 'Branded storefront', desc: 'A fast, professional site that looks like your shop, not a generic template.' },
    { icon: 'shopping_cart', title: 'Online ordering 24/7', desc: 'Customers place and pay for jobs themselves, anytime, without a phone call.' },
    { icon: 'upload_file', title: 'Artwork upload', desc: 'Buyers attach their design, placement, and notes right on the order before checkout.' },
    { icon: 'view_kanban', title: 'Decoration-aware catalog', desc: 'Product pages with sizes, colors, and per-method pricing for print and embroidery.' },
    { icon: 'sell', title: 'Volume and customer pricing', desc: 'Quantity breaks and wholesale tiers built in, so the right customer sees the right price.' },
    { icon: 'travel_explore', title: 'SEO ready', desc: 'Clean URLs, structured data, and fast pages so local customers find your shop on Google.' },
    { icon: 'smartphone', title: 'Mobile first', desc: 'More than half of buyers order from a phone, so every page is built for small screens.' },
    { icon: 'sync', title: 'Connects to production', desc: 'Orders can flow straight into your back office, with no manual re-entry or lost details.' },
];

const trades = [
    { icon: 'format_paint', label: 'Screen printing' },
    { icon: 'gesture', label: 'Embroidery' },
    { icon: 'print', label: 'DTG' },
    { icon: 'colorize', label: 'DTF and heat transfer' },
    { icon: 'redeem', label: 'Promotional products' },
];

const steps = [
    { icon: 'search', title: 'Discovery', desc: 'We learn your products, pricing, decoration methods, and brand.' },
    { icon: 'design_services', title: 'Build', desc: 'We set up your storefront, product catalog, and artwork upload flow.' },
    { icon: 'sync', title: 'Connect', desc: 'Optional: we link orders into your operations and FileMaker back office.' },
    { icon: 'rocket_launch', title: 'Launch', desc: 'You go live in a few weeks, and we train your team to run it.' },
];

const mockProducts = [
    { img: '/website/tees.png', label: 'Tees', w: 255, h: 481 },
    { img: '/website/hoodies.png', label: 'Hoodies', w: 253, h: 486 },
    { img: '/website/caps.png', label: 'Caps', w: 272, h: 536 },
    { img: '/website/towels.png', label: 'Towels', w: 268, h: 529 },
];

const faqs = [
    {
        question: 'What is a print shop website?',
        answer: 'A print shop website is a branded ecommerce storefront built for decorators. Customers browse your products, upload artwork, choose sizes and colors, and pay online, so orders arrive complete instead of through back-and-forth phone calls and emails.',
    },
    {
        question: 'How is this different from Shopify, Wix, or Squarespace?',
        answer: 'Generic website builders are not built for decoration. They do not handle artwork uploads, size and color matrices, per-method pricing, or a connection to your production system. Shop Titan is purpose-built for print shops, so the workflow your customers need is there from day one.',
    },
    {
        question: 'Can customers upload artwork and pick sizes and colors?',
        answer: 'Yes. Customers attach their design files directly to the order, choose decoration method and placement, and select sizes and colors from a matrix. Everything they enter travels with the order, so production starts with the full picture.',
    },
    {
        question: 'Will a print shop website help me rank on Google?',
        answer: 'Yes. Every page ships with clean URLs, meta tags, structured data, and fast load times. Product, category, and service pages are all indexable, which helps local customers searching for screen printing, embroidery, or custom apparel find your shop.',
    },
    {
        question: 'How long does it take to launch?',
        answer: 'Most print shop websites launch in a few weeks. That includes your branding, product catalog, artwork upload system, and connecting the storefront to your operations if you want the back office too.',
    },
    {
        question: 'Does it work on mobile?',
        answer: 'Yes. The storefront is fully responsive and tested on phones and tablets. Since most apparel buyers order from a phone, mobile is treated as the primary experience, not an afterthought.',
    },
    {
        question: 'Can the website connect to my production or inventory system?',
        answer: 'Yes. The website is the front door and the FileMaker system is the back office. Orders can flow from the storefront straight into quotes, inventory, and production, so nobody re-keys an order and nothing gets lost between sales and the shop floor.',
    },
    {
        question: 'How much does a print shop website cost?',
        answer: 'Pricing depends on whether you want the website on its own or connected to the full operations system, and whether we build it for you or you set it up yourself. See the pricing page for current setup and monthly options with no long-term contract.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Print Shop Website',
    description:
        'Branded ecommerce websites for print shops and apparel decorators, with online ordering, artwork upload, decoration-aware product catalogs, volume pricing, and a connection to production.',
    url: 'https://shoptitan.app/print-shop-website',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Print Shop Website', url: 'https://shoptitan.app/print-shop-website' },
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

export default function PrintShopWebsitePage() {
    return (
        <>
            <main className="min-h-screen pt-20">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

                {/* ───── HERO (centered) ───── */}
                <section className="pt-16 md:pt-24 pb-16 md:pb-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-4xl mx-auto px-mobile text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            Print shop websites that take orders online
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
                        >
                            A branded ecommerce storefront built for screen printers and apparel decorators. Customers browse your products, upload artwork, pick sizes and colors, and pay online, so orders arrive complete and ready for production.
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

                    {/* Product image row */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="show"
                        className="max-w-5xl mx-auto px-mobile mt-14 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6"
                    >
                        {mockProducts.map((p) => (
                            <motion.div
                                key={p.label}
                                variants={fadeUp}
                                className="rounded-xl border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 overflow-hidden"
                            >
                                <div className="p-3 border-b border-structural-border dark:border-gray-800">
                                    <div className="text-xs font-semibold text-charcoal dark:text-white">{p.label}</div>
                                </div>
                                <div className="relative aspect-[3/5] bg-background-light dark:bg-gray-900">
                                    <Image src={p.img} alt={p.label} fill sizes="(max-width: 640px) 45vw, 220px" className="object-contain p-2" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* ───── STAT STRIP ───── */}
                <section className="bg-surface dark:bg-gray-950 border-y border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile grid grid-cols-2 md:grid-cols-4 divide-x divide-structural-border dark:divide-gray-800">
                        {stats.map((s) => (
                            <div key={s.k} className="px-4 py-8 text-center">
                                <div className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight">{s.k}</div>
                                <div className="mt-1 text-xs md:text-sm text-secondary-text dark:text-gray-400">{s.v}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ───── DIRECT ANSWER (AEO) ───── */}
                <section className="bg-surface dark:bg-gray-950 py-12 md:py-16">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <div className="border-l-4 border-primary pl-5 md:pl-6">
                            <p className="text-base md:text-lg text-charcoal dark:text-gray-200 leading-relaxed">
                                A print shop website is a branded ecommerce storefront built for decorators, so customers browse your products, upload artwork, pick sizes and colors, and pay online without a phone call. Shop Titan builds one in a few weeks and connects it straight to your production system.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ───── BEFORE / AFTER ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-5xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-3 max-w-2xl">
                            From phone tag to self-serve ordering
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-10 max-w-2xl">
                            Most shops still take orders by phone, email, and text. A website turns that into orders that arrive complete and paid.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 p-6 md:p-7">
                                <div className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-text mb-5">Ordering by phone and email</div>
                                <ul className="space-y-4">
                                    {beforeItems.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm md:text-base text-secondary-text dark:text-gray-400 leading-relaxed">
                                            <span className="material-symbols-outlined text-secondary-text/70 text-xl shrink-0">close</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 md:p-7">
                                <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-5">Ordering on your website</div>
                                <ul className="space-y-4">
                                    {afterItems.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm md:text-base text-charcoal dark:text-gray-200 leading-relaxed">
                                            <span className="material-symbols-outlined text-primary text-xl shrink-0">check</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ───── FEATURES (sticky rail) ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile grid lg:grid-cols-3 gap-10 lg:gap-12">
                        <div className="lg:sticky lg:top-28 self-start">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                What comes with a Shop Titan print shop website
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Every storefront is built around how decoration shops actually sell, not a generic template you have to force into shape.
                            </p>
                        </div>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="lg:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-8"
                        >
                            {features.map((f) => (
                                <motion.div key={f.title} variants={fadeUp} className="flex gap-4">
                                    <span className="material-symbols-outlined text-primary text-2xl shrink-0">{f.icon}</span>
                                    <div>
                                        <h3 className="text-base md:text-lg font-semibold text-charcoal dark:text-white tracking-tight mb-1">{f.title}</h3>
                                        <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── BUILT FOR YOUR TRADE ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-20 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-5xl mx-auto px-mobile text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                            Built for how your shop decorates
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
                            Whether you run one method or all of them, your storefront speaks the language of your trade.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {trades.map((t) => (
                                <span
                                    key={t.label}
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 text-charcoal dark:text-white font-medium"
                                >
                                    <span className="material-symbols-outlined text-primary text-xl">{t.icon}</span>
                                    {t.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── HOW IT WORKS (process) ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-12 max-w-2xl mx-auto text-center">
                            How we launch your print shop website
                        </h2>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="relative max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-12"
                        >
                            {/* connecting line through the circle centers */}
                            <motion.div
                                variants={lineGrow}
                                className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-12 -translate-y-1/2 h-px bg-structural-border dark:bg-gray-800 origin-left z-0"
                            />
                            {steps.map((s, i) => (
                                <motion.div key={s.title} variants={fadeUp} className="relative flex flex-col items-center">
                                    <div className="relative z-10 h-20 w-20 lg:h-24 lg:w-24 rounded-full bg-surface dark:bg-gray-950 border border-structural-border dark:border-gray-800 shadow-soft flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-3xl lg:text-4xl">{s.icon}</span>
                                    </div>
                                    <div className="text-center px-2 mt-5">
                                        <div className="text-xs font-bold uppercase tracking-wider text-primary mb-0.5">{`Step 0${i + 1}`}</div>
                                        <div className="text-base font-semibold text-charcoal dark:text-white tracking-tight">{s.title}</div>
                                        <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed mt-1">{s.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── FRONT DOOR + BACK OFFICE ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-20 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            Your website is the front door. The back office runs the shop.
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                            The website brings customers in and captures clean orders. When you are ready, connect it to the pre-built FileMaker system so those orders flow into quotes, inventory, and production automatically, with no re-entry. Start with the website alone and add the operations side whenever it becomes your bottleneck.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/print-shop-ecommerce-website" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Sell apparel online
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/online-ordering-for-print-shops" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Take orders online
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/platform/filemaker-system" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                See the FileMaker system
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/print-shop-website-checklist" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Website checklist
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/portfolio" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Website examples
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ───── FAQ ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-10 text-center">
                            Print shop website FAQ
                        </h2>
                        <div className="border-t border-structural-border dark:border-gray-800">
                            {faqs.map((f) => (
                                <details key={f.question} className="group border-b border-structural-border dark:border-gray-800">
                                    <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none select-none">
                                        <h3 className="text-base font-bold text-charcoal dark:text-white pr-4 leading-snug">{f.question}</h3>
                                        <span className="material-symbols-outlined text-xl text-secondary-text dark:text-gray-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                                    </summary>
                                    <p className="pb-5 text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{f.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── FINAL CTA ───── */}
                <section className="bg-background-light dark:bg-background-dark py-20 md:py-28 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            Get your shop online and taking orders
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Book a demo and we will show you a working print shop website handling real orders, with real products, real pricing, and real artwork uploads.
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
