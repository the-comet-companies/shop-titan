'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { generateBreadcrumbSchema } from '@/lib/schema';

// ───── Content ─────

type Shot = {
    src: string;
    width: number;
    height: number;
    caption: string;
    alt: string;
};

type Project = {
    key: string;
    name: string;
    url?: string;
    blurb: string;
    shots: Shot[];
};

const projects: Project[] = [
    {
        key: 'dtla-print',
        name: 'DTLA Print',
        url: 'https://www.dtlaprint.com',
        blurb: 'A Los Angeles shop offering eco-friendly screen printing, embroidery, and private label services. A deeper look at the storefront, from catalog and brand pages to deals, rush orders, and the cart.',
        shots: [
            { src: '/gallery/dtla-print/homepage.webp', width: 1898, height: 1044, caption: 'Homepage', alt: 'DTLA Print homepage hero with eco-friendly screen printing messaging' },
            { src: '/gallery/dtla-print/custom-merch.webp', width: 1898, height: 1047, caption: 'Custom merch', alt: 'DTLA Print custom merchandise section with customizable products and printing services' },
            { src: '/gallery/dtla-print/best-sellers.webp', width: 1897, height: 1046, caption: 'Best sellers', alt: 'DTLA Print best sellers carousel with t-shirts, headwear, hoodies, and bags' },
            { src: '/gallery/dtla-print/t-shirts.webp', width: 1905, height: 1635, caption: 'T-shirt catalog', alt: 'DTLA Print t-shirt catalog with blank apparel products and pricing' },
            { src: '/gallery/dtla-print/hoodies.webp', width: 1906, height: 2334, caption: 'Hoodie catalog', alt: 'DTLA Print hoodie catalog with product cards and color options' },
            { src: '/gallery/dtla-print/carhartt.webp', width: 1906, height: 3598, caption: 'Brand page', alt: 'DTLA Print brand page with Carhartt workwear products for decoration' },
            { src: '/gallery/dtla-print/categories.webp', width: 1895, height: 2236, caption: 'Product categories', alt: 'DTLA Print product category navigation across apparel types' },
            { src: '/gallery/dtla-print/deals.webp', width: 1910, height: 4848, caption: 'Deals page', alt: 'DTLA Print deals page with discounted blank apparel offers' },
            { src: '/gallery/dtla-print/rush-orders.webp', width: 1913, height: 3266, caption: 'Rush orders', alt: 'DTLA Print rush orders page for fast-turnaround custom printing' },
            { src: '/gallery/dtla-print/cart.webp', width: 1891, height: 1573, caption: 'Cart', alt: 'DTLA Print shopping cart with order details before checkout' },
            { src: '/gallery/dtla-print/blog.webp', width: 1911, height: 3478, caption: 'Blog', alt: 'DTLA Print blog with articles on custom printing and apparel' },
        ],
    },
    {
        key: 'fresh-merch',
        name: 'Fresh Merch',
        blurb: 'A custom apparel supplier and decorator serving brands across Australia, from a single tee to full private label ranges. Storefront, product catalog, and live event merch flows.',
        shots: [
            { src: '/gallery/fresh-merch/homepage.webp', width: 1908, height: 2243, caption: 'Homepage', alt: 'Fresh Merch homepage hero with custom apparel branding and intro video' },
            { src: '/gallery/fresh-merch/products.webp', width: 1894, height: 1569, caption: 'Product catalog', alt: 'Fresh Merch product catalog with custom apparel items' },
            { src: '/gallery/fresh-merch/categories.webp', width: 1871, height: 1528, caption: 'Categories', alt: 'Fresh Merch product categories across apparel and merchandise' },
            { src: '/gallery/fresh-merch/how-we-work.webp', width: 1906, height: 2393, caption: 'How we work', alt: 'Fresh Merch how we work page explaining the custom apparel process' },
            { src: '/gallery/fresh-merch/live-events.webp', width: 1894, height: 2726, caption: 'Live events', alt: 'Fresh Merch live events page for on-site merch printing' },
            { src: '/gallery/fresh-merch/cart.webp', width: 1901, height: 1545, caption: 'Cart', alt: 'Fresh Merch shopping cart with order summary' },
        ],
    },
];

// ───── Schema ─────

const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Print Shop Website Gallery', url: 'https://shoptitan.app/gallery' },
]);

const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Print Shop Website Gallery',
    description: 'Full walkthroughs of real print shop websites built by Shop Titan.',
    url: 'https://shoptitan.app/gallery',
    image: projects.flatMap((p) =>
        p.shots.map((s) => ({
            '@type': 'ImageObject',
            contentUrl: `https://shoptitan.app${s.src}`,
            name: `${p.name}: ${s.caption}`,
        })),
    ),
};

// ───── Page ─────

type Active = { project: number; shot: number } | null;

export default function GalleryPage() {
    const [active, setActive] = useState<Active>(null);

    const close = useCallback(() => setActive(null), []);
    const step = useCallback(
        (dir: 1 | -1) => {
            setActive((a) => {
                if (!a) return a;
                const shots = projects[a.project].shots;
                return { ...a, shot: (a.shot + dir + shots.length) % shots.length };
            });
        },
        [],
    );

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

    const activeShot = active ? projects[active.project].shots[active.shot] : null;
    const activeProject = active ? projects[active.project] : null;

    return (
        <>
            <main className="min-h-screen pt-20">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />

                {/* ───── HERO ───── */}
                <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-background-light dark:bg-background-dark">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            Gallery
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl leading-relaxed"
                        >
                            Real storefronts we design and build, page by page. Browse full sites, from homepage and catalog to checkout.
                        </motion.p>
                    </div>
                </section>

                {/* ───── PROJECT SHOWCASES ───── */}
                {projects.map((p, pi) => (
                    <section
                        key={p.key}
                        className="bg-background-light dark:bg-background-dark py-12 md:py-16 border-t border-structural-border dark:border-gray-800"
                    >
                        <div className="max-w-6xl mx-auto px-mobile">
                            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
                                <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight">
                                    {p.name}
                                </h2>
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
                            </div>
                            <p className="text-base text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl mb-8">
                                {p.blurb}
                            </p>

                            {/* Lead shot: full width */}
                            <figure className="mb-6">

                                <button
                                    type="button"
                                    onClick={() => setActive({ project: pi, shot: 0 })}
                                    className="block w-full rounded-2xl overflow-hidden border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 shadow-card cursor-zoom-in"
                                    aria-label={`View ${p.name} ${p.shots[0].caption} fullscreen`}
                                >
                                    <Image
                                        src={p.shots[0].src}
                                        alt={p.shots[0].alt}
                                        width={p.shots[0].width}
                                        height={p.shots[0].height}
                                        sizes="(max-width: 1152px) 100vw, 1152px"
                                        quality={90}
                                        className="w-full h-auto"
                                    />
                                </button>
                                <figcaption className="mt-3 font-mono text-sm text-secondary-text dark:text-gray-400">
                                    {p.shots[0].caption}
                                </figcaption>
                            </figure>

                            {/* Remaining shots: card grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                                {p.shots.slice(1).map((s, si) => (
                                    <figure key={s.src}>
                                        <button
                                            type="button"
                                            onClick={() => setActive({ project: pi, shot: si + 1 })}
                                            className="block w-full rounded-xl overflow-hidden border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 shadow-card cursor-zoom-in"
                                            aria-label={`View ${p.name} ${s.caption} fullscreen`}
                                        >
                                            <div className="relative aspect-[4/3]">
                                                <Image
                                                    src={s.src}
                                                    alt={s.alt}
                                                    fill
                                                    sizes="(max-width: 768px) 50vw, 384px"
                                                    quality={85}
                                                    className="object-cover object-top"
                                                />
                                            </div>
                                        </button>
                                        <figcaption className="mt-2 font-mono text-xs md:text-sm text-secondary-text dark:text-gray-400">
                                            {s.caption}
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}

                {/* ───── FINAL CTA ───── */}
                <section className="bg-surface dark:bg-gray-950 py-20 md:py-28 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            Want your shop in this gallery?
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Book a demo and we will design a branded storefront around your products and decoration methods, wired straight into production.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center items-center">
                            <Link
                                href="/reach-out"
                                className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Book a Demo
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/portfolio" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                See all our work
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
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
                    aria-label={`${activeProject.name}: ${activeShot.caption}`}
                    onClick={close}
                >
                    <div className="flex items-center justify-between px-5 py-4 text-white/90">
                        <p className="font-mono text-sm truncate pr-4">
                            {activeProject.name} <span className="text-white/50">/</span> {activeShot.caption}
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
                            src={activeShot.src}
                            alt={activeShot.alt}
                            width={activeShot.width}
                            height={activeShot.height}
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
