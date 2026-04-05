'use client';

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useState, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import VideoPlayer from '@/components/VideoPlayer';
import VideoModal from '@/components/ui/VideoModal';
import brandsImage from '@/assets/Website/Brands.png';
import storefrontImage from '@/assets/Website/StoreFront.png';
import productCatalogImage from '@/assets/Website/ProductCatalog.png';
import servicesImage from '@/assets/Website/Services.png';
import mobileImage from '@/assets/Website/mobile.png';
import dragAndDropImage from '@/assets/Website/DragAndDrop.png';
import customerPortalImage from '@/assets/Website/CustomerPortal.png';
import seoImage from '@/assets/Website/SEO.png';

// --- Shared Feature Type ---
interface Feature {
    id: string;
    tabLabel: string;
    tabIcon: string;
    title: string;
    painPoint: { label: string; description: string };
    solution: { label: string; description: string };
    highlights?: string[];
    videoSrc: string;
    imageSrc?: StaticImageData;
    layout?: 'stacked' | 'side-by-side';
    hideBrowserChrome?: boolean;
}

// --- Tier 1: Primary Website Features ---
const tier1Features: Feature[] = [
    {
        id: 'storefront',
        tabLabel: 'Storefront',
        tabIcon: 'storefront',
        title: 'Custom Storefront',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Generic website templates that don\'t fit apparel decoration. No way to showcase your work, handle custom orders, or reflect your brand.',
        },
        solution: {
            label: 'THE FIX',
            description: 'A fully branded storefront built for print shops. Showcase your products, services, and portfolio — designed to convert visitors into customers.',
        },
        videoSrc: '/videos/feature-storefront.mp4',
        imageSrc: storefrontImage,
        layout: 'side-by-side',
    },
    {
        id: 'product-catalog',
        tabLabel: 'Product Catalog',
        tabIcon: 'grid_view',
        title: 'Product Catalog',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Your customers can\'t see what you carry. No browsable catalog, no color options, no way to compare styles — they call, email, or go somewhere else.',
        },
        solution: {
            label: 'THE FIX',
            description: 'A browsable, searchable product catalog that shows everything you offer — with real photos, color swatches, size breakdowns, and live pricing.',
        },
        highlights: [
            'Color swatches with real product images',
            'Size & variant selectors per style',
            'SKU display for easy reordering',
            'Sale badges & discount pricing',
            'Filter by brand, category, or color',
            'Synced with back-office inventory',
        ],
        videoSrc: '/videos/feature-catalog.mp4',
        imageSrc: productCatalogImage,
        layout: 'side-by-side',
    },
    {
        id: 'brands',
        tabLabel: 'Brands',
        tabIcon: 'loyalty',
        title: 'Brands',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Customers don\'t know what blanks you carry. No way to browse by brand, compare quality, or see what\'s available — so they go somewhere else.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Showcase every brand you carry with dedicated brand pages. Customers browse by brand, see available styles, and order with confidence.',
        },
        videoSrc: '/videos/feature-brands.mp4',
        imageSrc: brandsImage,
        layout: 'side-by-side',
    },
    {
        id: 'drag-and-drop',
        tabLabel: 'Drag & Drop',
        tabIcon: 'upload_file',
        title: 'Drag & Drop Upload',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Customers emailing artwork back and forth. Lost files, wrong formats, unclear placement instructions. Endless revision cycles before production starts.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Drag-and-drop file upload right on your website. Customers attach their artwork directly to their order — no emails, no confusion, no lost files.',
        },
        videoSrc: '/videos/feature-dragdrop.mp4',
        imageSrc: dragAndDropImage,
        layout: 'side-by-side',
    },
    {
        id: 'services',
        tabLabel: 'Services',
        tabIcon: 'design_services',
        title: 'Services',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Customers don\'t know what decoration methods you offer. No clear breakdown of embroidery, screen printing, DTG, or other services — so they look elsewhere.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Dedicated services pages that showcase every decoration method you offer. Customers understand your capabilities and order the right service from the start.',
        },
        videoSrc: '/videos/feature-services.mp4',
        imageSrc: servicesImage,
        layout: 'side-by-side',
    },
    {
        id: 'customer-portal',
        tabLabel: 'Customer Portal',
        tabIcon: 'person',
        title: 'Customer Portal',
        painPoint: {
            label: 'THE FRICTION',
            description: '"Where\'s my order?" calls all day. Customers have no visibility into their order status, history, or account details.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Self-service customer portal with order tracking, history, reorder capability, and saved designs. Fewer support calls, happier customers.',
        },
        videoSrc: '/videos/feature-portal.mp4',
        imageSrc: customerPortalImage,
        layout: 'side-by-side',
    },
    {
        id: 'seo',
        tabLabel: 'SEO & Analytics',
        tabIcon: 'trending_up',
        title: 'SEO & Analytics',
        painPoint: {
            label: 'THE FRICTION',
            description: 'No online presence. Competitors rank above you on Google. No data on who visits your site or what they\'re looking for.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Built-in SEO optimization, Google Analytics integration, and conversion tracking. Know where your traffic comes from and what converts.',
        },
        videoSrc: '/videos/feature-seo.mp4',
        imageSrc: seoImage,
        layout: 'side-by-side',
    },
    {
        id: 'mobile',
        tabLabel: 'Mobile Responsive',
        tabIcon: 'smartphone',
        title: 'Mobile Responsive',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Your website breaks on mobile. Over 60% of traffic is mobile, but your site was built for desktop only.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Fully responsive design that looks and works perfectly on any device. Your customers can browse, configure, and order from their phone.',
        },
        videoSrc: '/videos/feature-mobile.mp4',
        imageSrc: mobileImage,
        layout: 'side-by-side',
        hideBrowserChrome: true,
    },
];

// --- Feature Panel ---
function FeaturePanel({ feature }: { feature: Feature }) {
    if (feature.imageSrc && feature.layout === 'side-by-side') {
        // Side-by-side layout: text left, image right
        return (
            <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start lg:items-center mb-12 md:mb-20 lg:mb-28"
            >
                {/* Left: Copy */}
                <div className="lg:w-4/12 flex flex-col gap-4 order-2 lg:order-1">
                    <motion.h3
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.06 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal dark:text-white leading-tight"
                    >
                        {feature.title}
                    </motion.h3>

                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.12 }}
                        className="relative p-4 border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-sm rounded-xl overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/50 dark:bg-white/10 blur-2xl rounded-full pointer-events-none" />
                        <p className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400 mb-1.5 relative z-10">{feature.painPoint.label}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium relative z-10">{feature.painPoint.description}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.18 }}
                        className="relative p-4 border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-sm rounded-xl overflow-hidden"
                    >
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/50 dark:bg-white/10 blur-2xl rounded-full pointer-events-none" />
                        <p className="text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-400 mb-1.5 relative z-10">{feature.solution.label}</p>
                        <p className="text-sm text-charcoal dark:text-white leading-relaxed font-semibold relative z-10">{feature.solution.description}</p>
                    </motion.div>

                    {feature.highlights && feature.highlights.length > 0 && (
                        <motion.ul
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.24 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5"
                        >
                            {feature.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                    <span className="material-symbols-outlined text-green-500 dark:text-green-400 text-sm mt-0.5 flex-shrink-0">check</span>
                                    <span className="text-xs text-secondary-text dark:text-gray-300 font-medium leading-relaxed">{h}</span>
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </div>

                {/* Right: Browser Frame with image */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.08 }}
                    className="lg:w-8/12 w-full order-1 lg:order-2"
                >
                    {feature.hideBrowserChrome ? (
                        <div className="flex items-center justify-center">
                            <Image
                                src={feature.imageSrc}
                                alt={feature.title}
                                className="h-auto max-h-[500px] w-auto"
                                sizes="(max-width: 1024px) 50vw, 33vw"
                                placeholder="blur"
                            />
                        </div>
                    ) : (
                        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl shadow-black/20">
                            <div className="bg-gray-50 dark:bg-gray-900 border-b border-black/[0.06] dark:border-white/[0.06] px-4 py-2.5 flex items-center gap-3">
                                <span className="material-symbols-outlined text-gray-400 dark:text-gray-600 text-lg select-none">menu</span>
                                <div className="flex-1 flex items-center gap-2 bg-white dark:bg-gray-800 border border-black/[0.08] dark:border-white/[0.08] rounded-lg px-3 py-1.5">
                                    <span className="material-symbols-outlined text-primary text-sm select-none">lock</span>
                                    <span className="text-xs text-gray-400 dark:text-gray-500 font-medium truncate">shoptitan.com / {feature.tabLabel.toLowerCase()}</span>
                                </div>
                                <span className="material-symbols-outlined text-gray-400 dark:text-gray-600 text-lg select-none">more_vert</span>
                            </div>
                            <div className="relative min-h-[400px] bg-white dark:bg-gray-950">
                                <Image
                                    src={feature.imageSrc}
                                    alt={feature.title}
                                    className="w-full h-auto"
                                    sizes="(max-width: 1024px) 100vw, 66vw"
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        );
    }

    if (feature.imageSrc) {
        return (
            <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6 mb-12 md:mb-20 lg:mb-28"
            >
                {/* Title centered on top */}
                <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.06 }}
                    className="text-2xl sm:text-3xl font-bold text-charcoal dark:text-white leading-tight text-center"
                >
                    {feature.title}
                </motion.h3>

                {/* Cards row underneath */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.12 }}
                        className="relative p-3 border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-sm rounded-xl overflow-hidden flex-1"
                    >
                        <p className="text-[10px] font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400 mb-1 relative z-10">{feature.painPoint.label}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-medium relative z-10">{feature.painPoint.description}</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.18 }}
                        className="relative p-3 border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-sm rounded-xl overflow-hidden flex-1"
                    >
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary dark:text-blue-400 mb-1 relative z-10">{feature.solution.label}</p>
                        <p className="text-xs text-charcoal dark:text-white leading-relaxed font-semibold relative z-10">{feature.solution.description}</p>
                    </motion.div>
                </div>

                {/* Full-width browser frame with image */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.08 }}
                    className="w-full"
                >
                    <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl shadow-black/20">
                        <div className="bg-gray-50 dark:bg-gray-900 border-b border-black/[0.06] dark:border-white/[0.06] px-4 py-2.5 flex items-center gap-3">
                            <span className="material-symbols-outlined text-gray-400 dark:text-gray-600 text-lg select-none">menu</span>
                            <div className="flex-1 flex items-center gap-2 bg-white dark:bg-gray-800 border border-black/[0.08] dark:border-white/[0.08] rounded-lg px-3 py-1.5">
                                <span className="material-symbols-outlined text-primary text-sm select-none">lock</span>
                                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium truncate">shoptitan.com / {feature.tabLabel.toLowerCase()}</span>
                            </div>
                            <span className="material-symbols-outlined text-gray-400 dark:text-gray-600 text-lg select-none">more_vert</span>
                        </div>
                        <Image
                            src={feature.imageSrc}
                            alt={feature.title}
                            className="w-full h-auto"
                            sizes="(max-width: 1024px) 100vw, 1280px"
                            placeholder="blur"
                        />
                    </div>
                </motion.div>
            </motion.div>
        );
    }

    // Default side-by-side layout for video features
    return (
        <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start lg:items-center mb-12 md:mb-20 lg:mb-28"
        >
            {/* Left: Copy */}
            <div className="lg:w-5/12 flex flex-col gap-4 order-2 lg:order-1">
                <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.06 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal dark:text-white leading-tight"
                >
                    {feature.title}
                </motion.h3>

                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.12 }}
                    className="relative p-4 border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-sm rounded-xl overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/50 dark:bg-white/10 blur-2xl rounded-full pointer-events-none" />
                    <p className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400 mb-1.5 relative z-10">{feature.painPoint.label}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium relative z-10">{feature.painPoint.description}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.18 }}
                    className="relative p-4 border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-sm rounded-xl overflow-hidden"
                >
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/50 dark:bg-white/10 blur-2xl rounded-full pointer-events-none" />
                    <p className="text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-400 mb-1.5 relative z-10">{feature.solution.label}</p>
                    <p className="text-sm text-charcoal dark:text-white leading-relaxed font-semibold relative z-10">{feature.solution.description}</p>
                </motion.div>

                {feature.highlights && feature.highlights.length > 0 && (
                    <motion.ul
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.24 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5"
                    >
                        {feature.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                                <span className="material-symbols-outlined text-green-500 dark:text-green-400 text-sm mt-0.5 flex-shrink-0">check</span>
                                <span className="text-xs text-secondary-text dark:text-gray-300 font-medium leading-relaxed">{h}</span>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </div>

            {/* Right: Browser Frame */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.08 }}
                className="lg:w-7/12 w-full order-1 lg:order-2"
            >
                <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl shadow-black/20">
                    <div className="bg-gray-50 dark:bg-gray-900 border-b border-black/[0.06] dark:border-white/[0.06] px-4 py-2.5 flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-400 dark:text-gray-600 text-lg select-none">menu</span>
                        <div className="flex-1 flex items-center gap-2 bg-white dark:bg-gray-800 border border-black/[0.08] dark:border-white/[0.08] rounded-lg px-3 py-1.5">
                            <span className="material-symbols-outlined text-primary text-sm select-none">lock</span>
                            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium truncate">shoptitan.com / {feature.tabLabel.toLowerCase()}</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 dark:text-gray-600 text-lg select-none">more_vert</span>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                        <VideoPlayer
                            src={feature.videoSrc}
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            className="absolute inset-0 h-full w-full object-cover"
                            hideControls={false}
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="relative flex items-center justify-center">
                                <div className="absolute w-20 h-20 rounded-full bg-white/10 animate-ping" />
                                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-3xl pl-0.5">play_arrow</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Main Component ---
export default function WebsiteFeaturesSection({ hideLearnMore = false }: { hideLearnMore?: boolean } = {}) {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const tabScrollRef = useRef<HTMLDivElement>(null);

    const activeFeature: Feature = tier1Features[activeTab];

    return (
        <section id="website-features" className="pt-12 md:pt-16 lg:pt-20 pb-0 bg-background-light dark:bg-background-dark relative">

            <div className="max-w-7xl mx-auto px-mobile relative z-10">

                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wider uppercase mb-4"
                    >
                        Your Storefront
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-4"
                    >
                        A Website That Works as Hard as You Do
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        More than a website — a complete online storefront with custom ordering, product configuration, and seamless checkout built for print shops.
                    </motion.p>
                </div>
            </div>

            {/* Sticky Tab Bar — outside max-w container for full width */}
            <div className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md py-4 mb-10 md:mb-14 px-4 md:px-8 flex justify-center">
                    <LayoutGroup>
                        <div className="relative">

                            <div ref={tabScrollRef} className="flex gap-1.5 overflow-x-auto scrollbar-none pb-1 justify-start">
                                {tier1Features.map((f, i) => (
                                    <button
                                        key={f.id}
                                        onClick={() => setActiveTab(i)}
                                        className={`relative flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors ${activeTab === i
                                            ? 'text-white'
                                            : 'border border-structural-border dark:border-gray-700 text-secondary-text hover:text-charcoal dark:hover:text-white hover:border-primary/30'
                                            }`}
                                    >
                                        {activeTab === i && (
                                            <motion.div
                                                layoutId="activeWebsiteTab"
                                                className="absolute inset-0 bg-primary rounded-full"
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <span className="material-symbols-outlined text-sm sm:text-base relative z-10 hidden sm:inline-block">{f.tabIcon}</span>
                                        <span className="relative z-10">{f.tabLabel}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </LayoutGroup>
            </div>

            <div className="max-w-7xl mx-auto px-mobile relative z-10">
                {/* Feature Panel */}
                <AnimatePresence mode="wait">
                    <FeaturePanel key={activeFeature.id} feature={activeFeature} />
                </AnimatePresence>

                {/* Bottom CTA */}
                {!hideLearnMore && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center justify-center pt-8 pb-4 mt-4"
                    >
                        <a
                            href="/platform/ecommerce-storefront"
                            className="px-8 py-3 min-h-[44px] text-base font-semibold text-charcoal dark:text-white relative overflow-hidden group rounded-full inline-flex items-center gap-2 justify-center flex-shrink-0"
                        >
                            <div className="absolute inset-0 bg-white/20 dark:bg-white/8 group-hover:bg-white/30 dark:group-hover:bg-white/12 transition-colors rounded-full" />
                            <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-charcoal/30 dark:group-hover:border-white/40 transition-colors rounded-full" />
                            <span className="relative z-10">Learn more about the Ecommerce Storefront</span>
                            <span className="material-symbols-outlined text-lg relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
                        </a>
                    </motion.div>
                )}
            </div>

            {/* Video Modal */}
            <VideoModal
                isOpen={!!activeVideo}
                onClose={() => setActiveVideo(null)}
                videoSrc={activeVideo || ''}
            />
        </section>
    );
}
