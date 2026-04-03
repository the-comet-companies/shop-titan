'use client';

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';
import VideoPlayer from '@/components/VideoPlayer';
import VideoModal from '@/components/ui/VideoModal';
import quotesImage from '@/assets/Filemaker/Quotes.png';
import ordersImage from '@/assets/Filemaker/Orders.png';
import customersImage from '@/assets/Filemaker/Customers.png';
import purchaseOrdersImage from '@/assets/Filemaker/PurchaseOrders.png';
import taskTypesImage from '@/assets/Filemaker/TaskTypes.png';
import pricingGridImage from '@/assets/Filemaker/ServicePricingGrid.png';
import screenPricingGridImage from '@/assets/Filemaker/ScreenPricingGrid.png';
import emailTemplateImage from '@/assets/Filemaker/EmailTemplate.png';
import reportingImage from '@/assets/Filemaker/Reporting.png';

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
    imageSrc?: typeof quotesImage;
}

// --- Tier 1 Features ---
const tier1Features: Feature[] = [
    {
        id: 'quotes',
        tabLabel: 'Quotes',
        tabIcon: 'request_quote',
        title: 'Quotes',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Manual quote creation with spreadsheets. Inconsistent pricing. Hours spent calculating setup fees, per-piece costs, and rush charges.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Automated quote generation with intelligent pricing matrices. Template library, auto-calculations, and one-click PDF generation.',
        },
        videoSrc: '/videos/feature-quotes.mp4',
        imageSrc: quotesImage,
    },
    {
        id: 'orders',
        tabLabel: 'Orders',
        tabIcon: 'shopping_cart',
        title: 'Orders',
        painPoint: {
            label: 'THE FRICTION',
            description: '"Where is order #492?" Lost orders, unclear status, constant check-in calls. Job jackets getting lost between office and production floor.',
        },
        solution: {
            label: 'THE FIX',
            description: "End-to-end order tracking with real-time status updates. Every garment's journey is logged, visible, and searchable from anywhere.",
        },
        videoSrc: '/videos/feature-orders.mp4',
        imageSrc: ordersImage,
    },
    {
        id: 'email-template',
        tabLabel: 'Email Templates',
        tabIcon: 'mail',
        title: 'Email Templates',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Sending plain text emails or manually formatting every message. No consistency, no branding, and no way to automate order confirmations or updates.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Professional, branded email templates for order confirmations, invoices, shipping updates, and more. Automated and consistent every time.',
        },
        videoSrc: '/videos/feature-email.mp4',
        imageSrc: emailTemplateImage,
    },
    {
        id: 'tasks',
        tabLabel: 'Task Types',
        tabIcon: 'tune',
        title: 'Task Types',
        painPoint: {
            label: 'THE FRICTION',
            description: "Rigid software that can't handle your custom workflows. Every shop does things differently, but you're stuck with one-size-fits-all.",
        },
        solution: {
            label: 'THE FIX',
            description: 'Fully configurable task types and decoration methods. Custom fields, workflow rules, and pricing formulas for ANY process you run.',
        },
        videoSrc: '/videos/feature-tasks.mp4',
        imageSrc: taskTypesImage,
    },
    {
        id: 'pricing',
        tabLabel: 'Service Pricing Grid',
        tabIcon: 'grid_on',
        title: 'Service Pricing Grid',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Underquoting complex jobs. No structured pricing for different decoration types. Sales team guessing at embroidery stitch counts or screen counts.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Dynamic pricing matrices for all decoration types: embroidery (stitch count), screen printing (colors, screens), sewing, and any custom task you offer.',
        },
        videoSrc: '/videos/feature-pricing.mp4',
        imageSrc: pricingGridImage,
    },
    {
        id: 'screen-pricing',
        tabLabel: 'Screen Pricing Grid',
        tabIcon: 'grid_on',
        title: 'Screen Pricing Grid',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Screen printing pricing is a guessing game. Number of colors, screen counts, and setup fees vary per job — and nobody quotes them consistently.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Dedicated screen printing pricing matrix. Set rates by color count, quantity breaks, and screen fees — every quote is accurate and consistent.',
        },
        videoSrc: '/videos/feature-screen-pricing.mp4',
        imageSrc: screenPricingGridImage,
    },
    {
        id: 'customers',
        tabLabel: 'Customers / Vendors',
        tabIcon: 'people',
        title: 'Customers / Vendors',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Contact info scattered across emails, sticky notes, and old spreadsheets. No relationship history. No visibility into customer lifetime value.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Unified CRM and VRM with complete relationship tracking. Contact cards, order history, notes, and communication logs all in one place.',
        },
        videoSrc: '/videos/feature-crm.mp4',
        imageSrc: customersImage,
    },
    {
        id: 'purchase-orders',
        tabLabel: 'Purchase Orders',
        tabIcon: 'receipt_long',
        title: 'Purchase Orders',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Manual PO creation, vendor emails flying back and forth. Stock running out mid-job because nobody tracked what was ordered.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Automated PO generation with vendor integration. RFQ workflow for quotes, auto-reordering based on stock levels, and complete order tracking.',
        },
        videoSrc: '/videos/feature-pos.mp4',
        imageSrc: purchaseOrdersImage,
    },
    {
        id: 'contractors',
        tabLabel: 'Contractor Work Orders',
        tabIcon: 'handshake',
        title: 'Contractor Work Orders',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Subcontractor miscommunication. Work sent out with vague specs. Jobs coming back wrong or late with no accountability.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Digital work order system for contractors. Send work out with detailed spec sheets, track deadlines, and get quality confirmation—all documented.',
        },
        videoSrc: '/videos/feature-contractors.mp4',
    },
    {
        id: 'reporting',
        tabLabel: 'Reporting',
        tabIcon: 'assessment',
        title: 'Reporting',
        painPoint: {
            label: 'THE FRICTION',
            description: 'No visibility into your numbers. Revenue, costs, and margins buried in spreadsheets. You find out about problems weeks after they happen.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Built-in reporting with real-time dashboards. Track revenue, production output, costs, and profitability — all from one place.',
        },
        videoSrc: '/videos/feature-reporting.mp4',
        imageSrc: reportingImage,
    },
];

// --- Feature Panel ---
function FeaturePanel({ feature }: { feature: Feature }) {
    if (feature.imageSrc) {
        // Side-by-side layout: text left, image right (same as website section)
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
                    <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl shadow-black/20">
                        <div className="bg-gray-50 dark:bg-gray-900 border-b border-black/[0.06] dark:border-white/[0.06] px-4 py-2.5 flex items-center gap-3">
                            <span className="material-symbols-outlined text-gray-400 dark:text-gray-600 text-lg select-none">menu</span>
                            <div className="flex-1 flex items-center gap-2 bg-white dark:bg-gray-800 border border-black/[0.08] dark:border-white/[0.08] rounded-lg px-3 py-1.5">
                                <span className="material-symbols-outlined text-primary text-sm select-none">lock</span>
                                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium truncate">app.shoptitan.com / {feature.tabLabel.toLowerCase()}</span>
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
                            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium truncate">app.shoptitan.com / {feature.tabLabel.toLowerCase()}</span>
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
export default function FeaturesSection() {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const tabScrollRef = useRef<HTMLDivElement>(null);

    const activeFeature: Feature = tier1Features[activeTab];

    return (
        <section id="features" className="pt-12 md:pt-16 lg:pt-20 pb-0 bg-background-light dark:bg-background-dark relative">

            <div className="max-w-7xl mx-auto px-mobile relative z-10">

                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4"
                    >
                        FileMaker System
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-4"
                    >
                        Your Back Office, Fully Automated
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        A powerful FileMaker-based system that runs your entire operation — from quoting and orders to scheduling and analytics.
                    </motion.p>
                </div>

            </div>

            {/* Sticky Tab Bar — full width, scrollable */}
            <div className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md py-4 mb-10 md:mb-14 px-4 md:px-8">
                <LayoutGroup>
                    <div className="relative">
                        <div ref={tabScrollRef} className="flex gap-1.5 overflow-x-auto pb-1 justify-start">
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
                                            layoutId="activeFeatureTab"
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col items-center text-center gap-2 pt-8 pb-4 border-t border-structural-border dark:border-gray-800 mt-4"
                >
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                        <p className="text-xl md:text-2xl font-bold text-charcoal dark:text-white">
                            Seen enough?
                        </p>
                        <a
                            href="/reach-out"
                            className="px-8 py-3 min-h-[44px] text-base font-semibold text-charcoal dark:text-white relative overflow-hidden group rounded-full inline-flex items-center gap-2 justify-center flex-shrink-0"
                        >
                            <div className="absolute inset-0 bg-white/20 dark:bg-white/8 group-hover:bg-white/30 dark:group-hover:bg-white/12 transition-colors rounded-full" />
                            <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-charcoal/30 dark:group-hover:border-white/40 transition-colors rounded-full" />
                            <span className="relative z-10">Let&apos;s Talk</span>
                            <span className="material-symbols-outlined text-lg relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
                        </a>
                    </div>
                    <p className="text-sm text-secondary-text dark:text-gray-400 font-medium">
                        Get a guided walkthrough of the features relevant to your shop.
                    </p>
                </motion.div>
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
