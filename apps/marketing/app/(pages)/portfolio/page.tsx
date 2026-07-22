'use client';

import { useCallback, useEffect, useState } from 'react';
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

// Live customer builds, shown as two-column cards: header image, supporting
// text, then a horizontally scrollable strip of page captures (3 per row).
const liveProjects = [
    {
        key: 'dtla-print',
        name: 'DTLA Print',
        url: 'https://www.dtlaprint.com',
        image: '/website/dtla.png',
        desc: 'Live website for DTLA Print, a Los Angeles shop offering eco-friendly screen printing, embroidery, and private label services. Custom tees, hoodies, hats, and totes with a quote-ready ordering flow.',
        shots: [
            '/gallery/dtla-print/homepage.webp',
            '/gallery/dtla-print/custom-merch.webp',
            '/gallery/dtla-print/best-sellers.webp',
            '/gallery/dtla-print/t-shirts.webp',
            '/gallery/dtla-print/hoodies.webp',
            '/gallery/dtla-print/carhartt.webp',
            '/gallery/dtla-print/categories.webp',
            '/gallery/dtla-print/deals.webp',
            '/gallery/dtla-print/rush-orders.webp',
            '/gallery/dtla-print/cart.webp',
            '/gallery/dtla-print/blog.webp',
        ],
    },
    {
        key: 'fresh-merch',
        name: 'Fresh Merch',
        url: '',
        image: '/gallery/fresh-merch/homepage.webp',
        desc: 'Storefront build for Fresh Merch, a custom merch company. Product catalog, categories, a how-we-work walkthrough, live event printing, and a clean path from browsing to cart.',
        shots: [
            '/gallery/fresh-merch/products.webp',
            '/gallery/fresh-merch/categories.webp',
            '/gallery/fresh-merch/how-we-work.webp',
            '/gallery/fresh-merch/live-events.webp',
            '/gallery/fresh-merch/cart.webp',
        ],
    },
];

const shotLabel = (src: string) => (src.split('/').pop() || '').replace('.webp', '').replace(/-/g, ' ');

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
        ...(p.url ? { url: p.url } : {}),
    })),
};

type Active = { project: number; shot: number } | null;

export default function PortfolioPage() {
    const [active, setActive] = useState<Active>(null);

    const close = useCallback(() => setActive(null), []);
    const step = useCallback((dir: 1 | -1) => {
        setActive((a) => {
            if (!a) return a;
            const shots = liveProjects[a.project].shots;
            return { ...a, shot: (a.shot + dir + shots.length) % shots.length };
        });
    }, []);

    useEffect(() => {
        if (!active) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') step(1);
            if (e.key === 'ArrowLeft') step(-1);
        };
        window.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [active, close, step]);

    const activeProject = active ? liveProjects[active.project] : null;
    const activeShot = active && activeProject ? activeProject.shots[active.shot] : null;

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
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-8"
                        >
                            <Link
                                href="/gallery"
                                className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Browse the full gallery
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* ───── GALLERY (signature) ───── */}
                <section className="bg-background-light dark:bg-background-dark py-12 md:py-16 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-[1400px] mx-auto px-mobile">
                        {/* Live customer builds */}
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
                            {liveProjects.map((p, pi) => (
                                <motion.article
                                    key={p.key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="rounded-2xl overflow-hidden border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 shadow-card"
                                >
                                    {(() => {
                                        const frame = (
                                            <div className="relative aspect-[1900/840] overflow-hidden">
                                                <Image
                                                    src={p.image}
                                                    alt={`${p.name} website built by Shop Titan`}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 560px"
                                                    quality={90}
                                                    className="object-cover object-top"
                                                />
                                            </div>
                                        );
                                        return p.url ? (
                                            <a href={p.url} target="_blank" rel="noopener noreferrer" className="block">
                                                {frame}
                                            </a>
                                        ) : (
                                            frame
                                        );
                                    })()}
                                    <div className="p-6 md:p-7">
                                        <h2 className="text-xl md:text-2xl font-bold text-charcoal dark:text-white tracking-tight mb-3">
                                            {p.name}
                                        </h2>
                                        <p className="text-base text-secondary-text dark:text-gray-400 leading-relaxed mb-4">
                                            {p.desc}
                                        </p>
                                        {p.url && (
                                            <a
                                                href={p.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 font-mono text-sm text-secondary-text hover:text-charcoal dark:text-gray-400 dark:hover:text-white transition-colors"
                                            >
                                                Live <span aria-hidden="true">&#8599;</span>
                                            </a>
                                        )}
                                        <div
                                            className="mt-5 grid grid-cols-3 gap-3 max-h-[540px] overflow-y-auto pr-1"
                                            aria-label={`${p.name} page captures`}
                                        >
                                            {p.shots.map((s, si) => (
                                                <button
                                                    key={s}
                                                    type="button"
                                                    onClick={() => setActive({ project: pi, shot: si })}
                                                    aria-label={`View ${p.name} ${shotLabel(s)} page fullscreen`}
                                                    className="relative aspect-[3/4] rounded-lg overflow-hidden border border-structural-border dark:border-gray-800 cursor-zoom-in"
                                                >
                                                    <Image
                                                        src={s}
                                                        alt={`${p.name} ${shotLabel(s)} page`}
                                                        fill
                                                        sizes="200px"
                                                        className="object-cover object-top"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
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

            {/* ───── LIGHTBOX ───── */}
            {activeShot && activeProject && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${activeProject.name}: ${shotLabel(activeShot)}`}
                    onClick={close}
                >
                    <div className="flex items-center justify-between px-5 py-4 text-white/90">
                        <p className="font-mono text-sm truncate pr-4 capitalize">
                            {activeProject.name} <span className="text-white/50">/</span> {shotLabel(activeShot)}
                        </p>
                        <button
                            type="button"
                            onClick={close}
                            aria-label="Close fullscreen view"
                            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors flex-shrink-0"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <div
                        className="flex-1 overflow-y-auto overscroll-contain px-4 pb-6 md:px-16"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={activeShot}
                            alt={`${activeProject.name} ${shotLabel(activeShot)} page`}
                            width={1900}
                            height={1200}
                            sizes="100vw"
                            quality={90}
                            className="w-full h-auto max-w-5xl mx-auto rounded-lg"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); step(-1); }}
                        aria-label="Previous screenshot"
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    >
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); step(1); }}
                        aria-label="Next screenshot"
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    >
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            )}
        </>
    );
}
