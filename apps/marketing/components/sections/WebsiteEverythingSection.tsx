'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

type Feature = {
    eyebrow: string; // not rendered as a tag; feeds the mock browser URL bar only
    title: string;
    desc: string;
    bullets: string[];
    image: { src: string; width: number; height: number; alt: string };
};

const features: Feature[] = [
    {
        eyebrow: 'Branded Storefront',
        title: 'A site that actually looks like your shop',
        desc: 'Built around your brand, not a template. Your colors, your photos, your story, on a fast site that loads cleanly on every device and looks like a shop a buyer would actually trust.',
        bullets: [
            'Your branding, not a generic theme',
            'Real product photos and decoration samples',
            'Fast loading, mobile first, search optimized',
            'Pages tuned for the way decoration buyers shop',
        ],
        image: {
            src: '/website/StoreFront.png',
            width: 1773,
            height: 795,
            alt: 'Branded ecommerce storefront for a print shop',
        },
    },
    {
        eyebrow: 'Backend Dashboard',
        title: 'See every error your customers run into',
        desc: 'The backend surfaces the errors customers hit while ordering, so you can spot exactly where they get stuck and fix it before it costs you a sale.',
        bullets: [
            'Detect errors customers encounter while ordering',
            'See exactly where customers get stuck',
            'Fix issues before they cost you a sale',
            'Connected to back-office inventory',
        ],
        image: {
            src: '/website/backend-dashboard.png',
            width: 1743,
            height: 877,
            alt: 'Backend dashboard for tracking errors and generating product descriptions',
        },
    },
    {
        eyebrow: 'Artwork Upload',
        title: 'Customers attach art directly to the order',
        desc: 'Customers upload their own artwork and design it right on the product. They can remove the background, place the design on every side, add custom text, and choose their colors, then the finished, approved design goes straight to the order.',
        bullets: [
            'Upload artwork and edit it right in the browser',
            'One-click background removal',
            'Place designs on every side: front, back, and sleeves',
            'Add custom text and choose colors',
        ],
        image: {
            src: '/website/art-work-upload.png',
            width: 1904,
            height: 909,
            alt: 'Drag and drop artwork upload',
        },
    },
];

export default function WebsiteEverythingSection() {
    return (
        <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark relative">
            <div className="max-w-7xl mx-auto px-mobile">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-5xl mx-auto mb-16 md:mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-5 lg:whitespace-nowrap">
                        Everything your print shop needs to sell online.
                    </h2>
                    <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                        Branding, catalog, artwork, ordering, and analytics all built in. No plugins, no patchwork, no missing pieces.
                    </p>
                </motion.div>

                <div className="space-y-20 md:space-y-28">
                    {features.map((feature, i) => {
                        const reverse = i % 2 === 1;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                            >
                                {/* TEXT */}
                                <motion.div variants={fadeUp} className={`order-2 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-5">
                                        {feature.title}
                                    </h3>
                                    <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-7">
                                        {feature.desc}
                                    </p>
                                    <ul className="space-y-3.5">
                                        {feature.bullets.map((b) => (
                                            <li key={b} className="flex items-start gap-3 text-sm md:text-base text-charcoal dark:text-gray-200">
                                                <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">chevron_right</span>
                                                <span className="leading-snug">{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* IMAGE */}
                                <motion.div
                                    variants={fadeUp}
                                    className={`order-1 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
                                >
                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-primary/5 dark:bg-primary/10 rounded-3xl -z-10" aria-hidden="true" />
                                        <div className="rounded-2xl overflow-hidden border border-structural-border dark:border-gray-800 shadow-2xl shadow-primary/10 bg-white">
                                            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-900">
                                                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                                                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                                <span className="ml-3 flex-1 truncate text-[11px] font-mono text-secondary-text dark:text-gray-500">
                                                    shoptitan.com / {feature.eyebrow.toLowerCase().replace(/\s+/g, '-')}
                                                </span>
                                            </div>
                                            <Image
                                                src={feature.image.src}
                                                alt={feature.image.alt}
                                                width={feature.image.width}
                                                height={feature.image.height}
                                                sizes="(max-width: 1024px) 100vw, 600px"
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="flex justify-center mt-16 md:mt-20"
                >
                    <Link
                        href="/platform/ecommerce-storefront"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-primary/90 transition-colors"
                    >
                        See the Website in Action
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
