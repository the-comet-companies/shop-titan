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

type Vertical = {
    key: string;
    name: string;
    accent: string;
    url: string;
    shopName: string;
    tagline: string;
    products: string[];
    blurb: string;
    features: string[];
};

const verticals: Vertical[] = [
    {
        key: 'screen-printing',
        name: 'Screen Printing',
        accent: '#2563eb',
        url: 'inkhouseprints.com',
        shopName: 'INKHOUSE PRINTS',
        tagline: 'Custom screen printed apparel, printed right.',
        products: ['Tees', 'Hoodies', 'Long Sleeve', 'Tanks', 'Crewnecks', 'Caps'],
        blurb: 'A bold, apparel-forward storefront that lets customers pick garments, colors, and quantities, then upload art and see pricing before they check out.',
        features: ['Quantity and color-count pricing', 'Artwork upload with online proofing', 'One-click reorders of past runs'],
    },
    {
        key: 'embroidery',
        name: 'Embroidery',
        accent: '#7c3aed',
        url: 'stitchandco.com',
        shopName: 'STITCH & CO',
        tagline: 'Embroidered logos with a premium finish.',
        products: ['Polos', 'Caps', 'Jackets', 'Beanies', 'Bags', 'Aprons'],
        blurb: 'A refined storefront built for logo work, with placement options, stitch-count pricing, and a clean flow for submitting and approving digitized files.',
        features: ['Stitch-count based pricing', 'Logo digitizing requests', 'Left-chest and cap placement options'],
    },
    {
        key: 'promotional-products',
        name: 'Promotional Products',
        accent: '#ea580c',
        url: 'brandmerchco.com',
        shopName: 'BRANDMERCH CO',
        tagline: 'Branded swag your team will actually use.',
        products: ['Drinkware', 'Pens', 'Totes', 'Tech', 'Notebooks', 'Coolers'],
        blurb: 'A catalog-heavy storefront that handles a wide product range, minimum quantities, and sample requests without overwhelming the buyer.',
        features: ['Large searchable branded catalog', 'Minimum-quantity handling', 'Sample and mockup requests'],
    },
    {
        key: 'signage',
        name: 'Signage & Large Format',
        accent: '#0d9488',
        url: 'citywidesigns.com',
        shopName: 'CITYWIDE SIGNS',
        tagline: 'Banners, signs, and displays, made to size.',
        products: ['Banners', 'Yard Signs', 'Decals', 'Posters', 'Displays', 'Wraps'],
        blurb: 'A storefront built around custom sizes and materials, with clear file-spec guidance and options for local pickup or installation.',
        features: ['Custom size and material builder', 'File spec and setup guidance', 'Local pickup and install options'],
    },
    {
        key: 'team-spirit-wear',
        name: 'Team & Spirit Wear',
        accent: '#dc2626',
        url: 'hometeamgear.com',
        shopName: 'HOMETEAM GEAR',
        tagline: 'Team stores that open, sell, and close on schedule.',
        products: ['Jerseys', 'Hoodies', 'Shorts', 'Hats', 'Bags', 'Socks'],
        blurb: 'A storefront designed for group ordering, with dedicated team stores, roster-based bulk ordering, and set open and close dates.',
        features: ['Dedicated team and group stores', 'Roster and bulk ordering', 'Scheduled store open and close dates'],
    },
];

const included = [
    { icon: 'storefront', title: 'A branded storefront', body: 'A custom site in your colors and voice, not a generic template every shop shares.' },
    { icon: 'upload_file', title: 'Decoration-aware ordering', body: 'Product options, artwork upload, and pricing built for how decorators actually sell.' },
    { icon: 'conveyor_belt', title: 'A tie into production', body: 'Online orders flow into the system that runs your shop, so nothing gets re-keyed.' },
];

const faqs = [
    {
        question: 'What does a print shop website look like?',
        answer: 'A strong print shop website pairs a branded storefront with decoration-aware online ordering. Customers browse your products, choose colors, sizes, and quantities, upload artwork, and see pricing before checkout. The examples on this page show that flow styled for different kinds of shops, from screen printing to embroidery to signage.',
    },
    {
        question: 'Are these real examples or templates?',
        answer: 'They are representative design examples that show what a Shop Titan print shop website can look like for each vertical, not stock templates every shop reuses. Every real build is custom to your brand, your products, and how your shop sells, so your site does not look like anyone else in your market.',
    },
    {
        question: 'Do you build sites for my type of shop?',
        answer: 'Yes. Whether you run screen printing, embroidery, promotional products, signage and large format, or team and spirit wear, the storefront and ordering flow are shaped around how that work sells. If your shop spans several of these, the site can too.',
    },
    {
        question: 'Can you match my brand and colors?',
        answer: 'Yes. Each site is designed around your brand, your logo, your colors, and your product mix. The examples here use different accents on purpose, to show that the same underlying platform adapts to very different looks.',
    },
    {
        question: 'How do I get a site like these?',
        answer: 'Book a demo and we will walk through your products, your decoration methods, and how you want customers to order. From there we build a branded storefront wired to production, so the site does not just look good, it takes clean orders and feeds your shop floor.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Print Shop Website Design',
    description:
        'Custom print shop website design and build across verticals, screen printing, embroidery, promotional products, signage, and team wear, with decoration-aware online ordering, artwork upload, and production integration.',
    url: 'https://shoptitan.app/portfolio',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Print Shop Website Examples', url: 'https://shoptitan.app/portfolio' },
]);
const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Print Shop Website Examples by Vertical',
    numberOfItems: verticals.length,
    itemListElement: verticals.map((v, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `${v.name} website example`,
    })),
};

// ───── Motion ─────

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

// ───── Browser-frame mockup (signature element) ─────

function SiteMockup({ v }: { v: Vertical }) {
    return (
        <div className="rounded-2xl overflow-hidden border border-structural-border dark:border-gray-800 shadow-card bg-white dark:bg-gray-900 select-none">
            {/* browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-950">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <div className="ml-2 flex-1 h-5 rounded-md bg-white dark:bg-gray-800 border border-structural-border dark:border-gray-700 flex items-center px-2">
                    <span className="material-symbols-outlined text-[11px] text-secondary-text mr-1">lock</span>
                    <span className="text-[10px] text-secondary-text dark:text-gray-500 truncate">{v.url}</span>
                </div>
            </div>
            {/* mock hero */}
            <div className="p-5 md:p-6" style={{ backgroundColor: `${v.accent}0f` }}>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-black tracking-widest" style={{ color: v.accent }}>{v.shopName}</span>
                    <div className="flex gap-3">
                        <span className="h-1.5 w-8 rounded-full bg-charcoal/15 dark:bg-white/20" />
                        <span className="h-1.5 w-8 rounded-full bg-charcoal/15 dark:bg-white/20" />
                        <span className="h-1.5 w-8 rounded-full bg-charcoal/15 dark:bg-white/20" />
                    </div>
                </div>
                <div className="text-base md:text-lg font-bold text-charcoal dark:text-white leading-snug max-w-[16rem] mb-3">{v.tagline}</div>
                <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-white rounded-full px-3 py-1.5 mb-5" style={{ backgroundColor: v.accent }}>
                    Order Online
                    <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                </div>
                {/* product grid */}
                <div className="grid grid-cols-3 gap-2">
                    {v.products.map((p) => (
                        <div
                            key={p}
                            className="rounded-lg h-14 p-2 flex flex-col justify-end bg-white dark:bg-gray-800 border border-structural-border/60 dark:border-gray-700"
                        >
                            <span className="h-6 rounded-md mb-1.5" style={{ backgroundColor: `${v.accent}26` }} />
                            <span className="text-[8px] font-medium text-charcoal/70 dark:text-white/70 leading-none">{p}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function PortfolioPage() {
    return (
        <>
            <main className="min-h-screen pt-20">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

                {/* ───── HERO ───── */}
                <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-background-light dark:bg-background-dark">
                    <div className="max-w-4xl mx-auto px-mobile text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="inline-flex items-center gap-2 rounded-full border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 px-4 py-1.5 mb-6"
                        >
                            <span className="material-symbols-outlined text-primary text-lg">palette</span>
                            <span className="text-sm font-semibold text-charcoal dark:text-gray-200">{verticals.length} shop types, one platform</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            Print shop website examples, built for what you make.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
                        >
                            See how a Shop Titan site looks for your kind of shop, from screen printing to embroidery to promo and signage. Every example is a real, buildable design, not a stock template.
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
                                href="/print-shop-website"
                                className="px-8 py-4 text-charcoal dark:text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-primary/50 transition-colors rounded-full" />
                                <span className="relative z-10">How a Print Shop Site Works</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* ───── DIRECT ANSWER (AEO) ───── */}
                <section className="bg-surface dark:bg-gray-950 border-t border-structural-border dark:border-gray-800 py-14 md:py-16">
                    <div className="max-w-4xl mx-auto px-mobile">
                        <div className="border-l-4 border-primary pl-6 md:pl-8">
                            <p className="text-base md:text-lg text-charcoal dark:text-gray-200 leading-relaxed">
                                These are examples of what a Shop Titan print shop website can look like, organized by the kind of work you do. Each one pairs a branded storefront with decoration-aware online ordering, artwork upload, and a tie into production, so the site does not just look good, it takes clean orders and feeds your shop floor.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ───── VERTICAL SHOWCASES (signature) ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile space-y-16 md:space-y-24">
                        {verticals.map((v, i) => (
                            <motion.div
                                key={v.key}
                                variants={stagger}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                            >
                                <motion.div variants={fadeUp} className={i % 2 === 1 ? 'md:order-2' : ''}>
                                    <SiteMockup v={v} />
                                </motion.div>
                                <motion.div variants={fadeUp} className={i % 2 === 1 ? 'md:order-1' : ''}>
                                    <div className="inline-flex items-center gap-2 mb-3">
                                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: v.accent }} />
                                        <span className="text-xs font-semibold uppercase tracking-wide text-secondary-text dark:text-gray-500">{v.name}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                        A website built for {v.name.toLowerCase()}
                                    </h2>
                                    <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-6">{v.blurb}</p>
                                    <ul className="space-y-3">
                                        {v.features.map((f) => (
                                            <li key={f} className="flex items-start gap-3 text-sm md:text-base text-charcoal dark:text-gray-200">
                                                <span className="material-symbols-outlined text-lg shrink-0" style={{ color: v.accent }}>check_circle</span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ───── WHAT EVERY BUILD INCLUDES ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-5xl mx-auto px-mobile">
                        <div className="text-center mb-12 max-w-2xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                Different looks, the same foundation
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Every example above is built on the same core, so whatever your shop makes, the site is wired to sell and to run.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {included.map((it) => (
                                <div key={it.title} className="rounded-2xl border border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-900 p-7">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 mb-4">
                                        <span className="material-symbols-outlined text-primary">{it.icon}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-2">{it.title}</h3>
                                    <p className="text-sm md:text-base text-secondary-text dark:text-gray-400 leading-relaxed">{it.body}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center mt-10">
                            <Link href="/print-shop-website" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Print shop websites overview
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/print-shop-website-checklist" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Website checklist
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/online-ordering-for-print-shops" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Online ordering
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ───── FAQ ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-10">
                            Print shop website examples FAQ
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
                            Want a site like these for your shop?
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Book a demo and we will design a branded storefront around your products and decoration methods, wired straight into production.
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
