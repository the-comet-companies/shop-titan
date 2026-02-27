'use client';

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useState } from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import VideoModal from '@/components/ui/VideoModal';

// --- Types ---
interface Tier1Feature {
    id: string;
    tabLabel: string;
    tabIcon: string;
    icon: string;
    title: string;
    painPoint: { label: string; description: string };
    solution: { label: string; description: string };
    highlights?: string[];
    videoSrc: string;
}

// --- Tier 1 Feature Data ---
const tier1Features: Tier1Feature[] = [
    {
        id: 'quotes',
        tabLabel: 'Quotes',
        tabIcon: 'request_quote',
        icon: 'description',
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
    },
    {
        id: 'orders',
        tabLabel: 'Orders',
        tabIcon: 'shopping_cart',
        icon: 'shopping_cart',
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
    },
    {
        id: 'scheduler',
        tabLabel: 'Scheduler',
        tabIcon: 'precision_manufacturing',
        icon: 'precision_manufacturing',
        title: 'Machines & Production Scheduler',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Overbooking machines, capacity guessing, production chaos. Managers juggling jobs in their head. No visibility into actual machine utilization.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Visual production scheduler with drag-drop job assignment. Real-time capacity planning, machine utilization tracking, and workload balancing.',
        },
        videoSrc: '/videos/feature-scheduler.mp4',
    },
    {
        id: 'pricing',
        tabLabel: 'Pricing',
        tabIcon: 'grid_on',
        icon: 'grid_on',
        title: 'Pricing Matrixes',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Underquoting complex jobs. No structured pricing for different decoration types. Sales team guessing at embroidery stitch counts or screen counts.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Dynamic pricing matrices for all decoration types: embroidery (stitch count), screen printing (colors, screens), sewing, and any custom task you offer.',
        },
        videoSrc: '/videos/feature-pricing.mp4',
    },
    {
        id: 'analytics',
        tabLabel: 'Analytics',
        tabIcon: 'analytics',
        icon: 'analytics',
        title: 'Reporting + Data Analytics',
        painPoint: {
            label: 'THE FRICTION',
            description: 'No business intelligence. Flying blind on inventory, profit margins, and customer trends. Finding out problems weeks after they happened.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Real-time dashboards and comprehensive reports: Inventory levels & turnover, financial P&L, production metrics, and customer analytics.',
        },
        highlights: [
            'Inventory Reports (stock levels, turnover, reorder alerts)',
            'Financial visibility (real-time P&L)',
            'Production metrics',
            'Customer analytics',
        ],
        videoSrc: '/videos/feature-analytics.mp4',
    },
];

// --- Tier 2 Feature Data ---
const tier2Features = [
    { id: 'customers', icon: 'people', title: 'Customers / Vendors', summary: 'Unified CRM and VRM with complete relationship tracking. Contact cards, order history, notes, and communication logs all in one place.' },
    { id: 'purchase-orders', icon: 'receipt_long', title: 'Purchase Orders', summary: 'Automated PO generation with vendor integration. RFQ workflow for quotes, auto-reordering based on stock levels, and complete order tracking.' },
    { id: 'contractors', icon: 'handshake', title: 'Contractor Work Orders', summary: 'Digital work order system for contractors. Send work out with detailed spec sheets, track deadlines, and get quality confirmation—all documented.' },
    { id: 'products', icon: 'inventory_2', title: 'Product Management', summary: 'Centralized product database with SKU management, variant tracking, and organized image libraries. One source of truth for all product data.' },
    { id: 'feeds', icon: 'rss_feed', title: 'XML Feed Management', summary: 'Automated XML feed generation for all platforms: Google Merchant Center, Facebook/Instagram, Reddit, Pinterest. Auto-sync, error handling, and one-click updates.' },
    { id: 'tasks', icon: 'tune', title: 'Decoration & Task Types', summary: 'Fully configurable task types and decoration methods. Custom fields, workflow rules, and pricing formulas for ANY process you run.' },
];

// --- Main Component ---
export default function FeaturesSection() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const feature = tier1Features[activeTab];

    return (
        <section id="features" className="pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-28 lg:pb-32 bg-background-light dark:bg-background-dark relative">
            {/* Animated gradient orb background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-3xl animate-gradient-flow-1" />
                <div className="absolute top-1/2 -left-48 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.04] blur-3xl animate-gradient-flow-2" />
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-teal-400/[0.03] blur-3xl animate-gradient-flow-3" />
            </div>

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
                        The Platform
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-4"
                    >
                        Built for how print shops actually work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Every tool your team needs — quotes, orders, production, inventory — in one place.
                    </motion.p>
                </div>

                {/* Sticky Tab Bar */}
                {/*
                  -mx-mobile px-mobile: bleeds the sticky backdrop to screen edges
                  while keeping tabs aligned to the content grid.
                  scrollbar-none: defined in globals.css as .scrollbar-none::-webkit-scrollbar { display: none }
                */}
                <div className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md py-4 mb-10 md:mb-14 -mx-mobile px-mobile">
                    <LayoutGroup>
                        <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
                            {tier1Features.map((f, i) => (
                                <button
                                    key={f.id}
                                    onClick={() => setActiveTab(i)}
                                    className={`relative flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors ${activeTab === i
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
                                    <span className="material-symbols-outlined text-base relative z-10">{f.tabIcon}</span>
                                    <span className="relative z-10">{f.tabLabel}</span>
                                </button>
                            ))}
                        </div>
                    </LayoutGroup>
                </div>

                {/* Tab Panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center mb-20 md:mb-28"
                    >
                        {/* Left: Copy */}
                        <div className="lg:w-5/12 flex flex-col gap-5">
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined text-primary text-3xl">{feature.icon}</span>
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.06 }}
                                className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white leading-tight"
                            >
                                {feature.title}
                            </motion.h3>

                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.12 }}
                                className="relative p-4 border border-rose-200/50 dark:border-rose-800/30 bg-rose-50/60 dark:bg-rose-950/20 rounded-xl overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-rose-500/10 blur-2xl rounded-full pointer-events-none" />
                                <p className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400 mb-1.5 relative z-10">{feature.painPoint.label}</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium relative z-10">{feature.painPoint.description}</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.18 }}
                                className="relative p-4 border border-blue-200/50 dark:border-blue-800/30 bg-blue-50/60 dark:bg-blue-950/20 rounded-xl overflow-hidden"
                            >
                                <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/10 blur-2xl rounded-full pointer-events-none" />
                                <p className="text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-400 mb-1.5 relative z-10">{feature.solution.label}</p>
                                <p className="text-sm text-charcoal dark:text-white leading-relaxed font-semibold relative z-10">{feature.solution.description}</p>
                            </motion.div>

                            {feature.highlights && feature.highlights.length > 0 && (
                                <motion.ul
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.24 }}
                                    className="grid grid-cols-2 gap-x-4 gap-y-1.5"
                                >
                                    {feature.highlights.map((h, i) => (
                                        <li key={i} className="flex items-start gap-1.5">
                                            <span className="material-symbols-outlined text-green-500 dark:text-green-400 text-sm mt-0.5 flex-shrink-0">check</span>
                                            <span className="text-xs text-secondary-text dark:text-gray-300 font-medium leading-relaxed">{h}</span>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}

                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.30 }}
                            >
                                <button
                                    onClick={() => setActiveVideo(feature.videoSrc)}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-structural-border dark:border-gray-700 text-sm font-semibold text-charcoal dark:text-white hover:border-primary/40 hover:text-primary transition-colors group"
                                >
                                    <span className="material-symbols-outlined text-primary text-lg group-hover:scale-110 transition-transform">play_circle</span>
                                    Watch Full Demo
                                </button>
                            </motion.div>
                        </div>

                        {/* Right: Browser Frame */}
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.08 }}
                            className="lg:w-7/12 w-full"
                        >
                            <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl shadow-black/20">
                                {/* Fake title bar */}
                                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                    <span className="flex-1 text-center text-xs font-semibold text-gray-500 dark:text-gray-400">Shop Titan</span>
                                </div>
                                {/* Video */}
                                <div className="aspect-video bg-gray-900">
                                    <VideoPlayer
                                        src={feature.videoSrc}
                                        autoPlay={true}
                                        muted={true}
                                        loop={true}
                                        className="h-full w-full object-cover"
                                        hideControls={false}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* Tier 2 Grid */}
                <section id="more-features" className="mt-8">
                    <div className="text-center mb-10">
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4"
                        >
                            More Features
                        </motion.span>
                        <motion.h3
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white"
                        >
                            Additional Capabilities
                        </motion.h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {tier2Features.map((f, i) => (
                            <motion.div
                                key={f.id}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="rounded-2xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:border-primary/30 dark:hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-xl">{f.icon}</span>
                                </div>
                                <h4 className="text-base font-bold text-charcoal dark:text-white mb-1">{f.title}</h4>
                                <p className="text-sm text-secondary-text dark:text-gray-500 leading-relaxed line-clamp-2">{f.summary}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

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
