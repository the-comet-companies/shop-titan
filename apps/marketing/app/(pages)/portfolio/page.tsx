'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import {
    generateFAQSchema,
    generateServiceSchema,
    generateBreadcrumbSchema,
} from '@/lib/schema';

// ───── Content ─────

// Live customer builds, shown as full-width cards.
const liveProjects = [
    {
        key: 'dtla-print',
        name: 'DTLA Print',
        url: 'https://www.dtlaprint.com',
        image: '/website/dtla.png',
        imageWidth: 1900,
        imageHeight: 840,
        desc: 'Live website for DTLA Print, a Los Angeles shop offering eco-friendly screen printing, embroidery, and private label services. Custom tees, hoodies, hats, and totes with a quote-ready ordering flow.',
    },
    {
        key: 'mika-jaymes',
        name: 'Mika Jaymes',
        url: 'https://mikajaymes.com',
        image: '/website/mika-jaymes.png',
        imageWidth: 1900,
        imageHeight: 909,
        desc: 'Live storefront for Mika Jaymes, a premium fashion brand with hand cut and sewn essentials crafted in Los Angeles. Minimal, modern design with a clean path from collection to checkout.',
    },
    {
        key: 'kases',
        name: 'KASES',
        url: 'https://kases.com',
        image: '/website/kases.png',
        imageWidth: 1893,
        imageHeight: 910,
        desc: 'Live storefront for KASES, a premium Christian apparel brand. A clean, brand-first catalog of tees, hoodies, and tanks with a fast path from product page to checkout.',
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
        answer: 'A strong print shop website pairs a branded storefront with decoration-aware online ordering. Customers browse your products, choose colors, sizes, and quantities, upload artwork, and see pricing before checkout. The live sites on this page show that foundation applied to real apparel brands.',
    },
    {
        question: 'Are these real examples or templates?',
        answer: 'Every site on this page is a live build for a real business, and you can visit each one through its Live link. Nothing here is a stock template. Every build is custom to your brand, your products, and how your shop sells, so your site does not look like anyone else in your market.',
    },
    {
        question: 'Do you build sites for my type of shop?',
        answer: 'Yes. Whether you run screen printing, embroidery, promotional products, signage and large format, or team and spirit wear, the storefront and ordering flow are shaped around how that work sells. If your shop spans several of these, the site can too.',
    },
    {
        question: 'Can you match my brand and colors?',
        answer: 'Yes. Each site is designed around your brand, your logo, your colors, and your product mix. The live sites here look nothing alike on purpose: the same underlying platform adapts to very different brands.',
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
    name: 'Websites Built by Shop Titan',
    numberOfItems: liveProjects.length,
    itemListElement: liveProjects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `${p.name} website`,
        url: p.url,
    })),
};

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
                    <div className="max-w-3xl mx-auto px-mobile text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            Our Work
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                        >
                            Explore custom websites we&apos;ve built for print shops, from screen printing and embroidery to signage and promotional products.
                        </motion.p>
                    </div>
                </section>

                {/* ───── GALLERY (signature) ───── */}
                <section className="bg-background-light dark:bg-background-dark py-12 md:py-16 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        {/* Live customer builds */}
                        {liveProjects.map((p) => (
                            <motion.article
                                key={p.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="mb-10 md:mb-12 last:mb-0 rounded-2xl overflow-hidden border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 shadow-card"
                            >
                                <a href={p.url} target="_blank" rel="noopener noreferrer" className="block">
                                    <Image
                                        src={p.image}
                                        alt={`${p.name} website built by Shop Titan`}
                                        width={p.imageWidth}
                                        height={p.imageHeight}
                                        sizes="(max-width: 1152px) 100vw, 1152px"
                                        quality={90}
                                        className="w-full h-auto"
                                    />
                                </a>
                                <div className="p-6 md:p-8">
                                    <h2 className="text-xl md:text-2xl font-bold text-charcoal dark:text-white tracking-tight mb-3">
                                        {p.name}
                                    </h2>
                                    <p className="text-base text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl mb-6">
                                        {p.desc}
                                    </p>
                                    <a
                                        href={p.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 font-mono text-sm text-secondary-text hover:text-charcoal dark:text-gray-400 dark:hover:text-white transition-colors"
                                    >
                                        Live <span aria-hidden="true">&#8599;</span>
                                    </a>
                                </div>
                            </motion.article>
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
                            <Link href="/gallery" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Browse the full gallery
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
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
                        <h2 className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-10 text-center">
                            Print shop website examples FAQ
                        </h2>
                        <div className="border-t border-structural-border dark:border-gray-800">
                            {faqs.map((faq, i) => (
                                <details key={i} className="group border-b border-structural-border dark:border-gray-800">
                                    <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none select-none">
                                        <h3 className="text-base font-bold text-charcoal dark:text-white pr-4 leading-snug">{faq.question}</h3>
                                        <span className="material-symbols-outlined text-xl text-secondary-text dark:text-gray-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                                    </summary>
                                    <p className="pb-5 text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{faq.answer}</p>
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
