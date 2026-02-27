'use client';

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import VideoModal from '@/components/ui/VideoModal';

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
    },
    {
        id: 'scheduler',
        tabLabel: 'Scheduler',
        tabIcon: 'precision_manufacturing',
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

// --- Tier 2 Features ---
const tier2Features: Feature[] = [
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
        id: 'products',
        tabLabel: 'Product Management',
        tabIcon: 'inventory_2',
        title: 'Product Management',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Manual product data entry across multiple channels. SKU chaos. No central product database. Images scattered everywhere.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Centralized product database with SKU management, variant tracking, and organized image libraries. One source of truth for all product data.',
        },
        videoSrc: '/videos/feature-products.mp4',
    },
    {
        id: 'feeds',
        tabLabel: 'XML Feed Management',
        tabIcon: 'rss_feed',
        title: 'XML Feed Management',
        painPoint: {
            label: 'THE FRICTION',
            description: 'Manual marketplace updates. Products out of sync across Google, Facebook, Pinterest, Reddit. Hours of copy-paste to update pricing.',
        },
        solution: {
            label: 'THE FIX',
            description: 'Automated XML feed generation for all platforms: Google Merchant Center, Facebook/Instagram, Reddit, Pinterest. Auto-sync, error handling, and one-click updates.',
        },
        videoSrc: '/videos/feature-feeds.mp4',
    },
    {
        id: 'tasks',
        tabLabel: 'Decoration & Task Types',
        tabIcon: 'tune',
        title: 'Decoration & Task Types',
        painPoint: {
            label: 'THE FRICTION',
            description: "Rigid software that can't handle your custom workflows. Every shop does things differently, but you're stuck with one-size-fits-all.",
        },
        solution: {
            label: 'THE FIX',
            description: 'Fully configurable task types and decoration methods. Custom fields, workflow rules, and pricing formulas for ANY process you run.',
        },
        videoSrc: '/videos/feature-tasks.mp4',
    },
];

// --- Feature Panel ---
function FeaturePanel({ feature }: { feature: Feature }) {
    return (
        <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start lg:items-center mb-12 md:mb-20 lg:mb-28"
        >
            {/* Left: Copy — below video on mobile, left col on desktop */}
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

            {/* Right: Browser Frame — on top on mobile, right col on desktop */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.08 }}
                className="lg:w-7/12 w-full order-1 lg:order-2"
            >
                <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl shadow-black/20">
                    {/* App chrome header */}
                    <div className="bg-gray-50 dark:bg-gray-900 border-b border-black/[0.06] dark:border-white/[0.06] px-4 py-2.5 flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-400 dark:text-gray-600 text-lg select-none">menu</span>
                        <div className="flex-1 flex items-center gap-2 bg-white dark:bg-gray-800 border border-black/[0.08] dark:border-white/[0.08] rounded-lg px-3 py-1.5">
                            <span className="material-symbols-outlined text-primary text-sm select-none">lock</span>
                            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium truncate">app.shoptitan.com / {feature.tabLabel.toLowerCase()}</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 dark:text-gray-600 text-lg select-none">more_vert</span>
                    </div>
                    {/* Video / placeholder */}
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
                        {/* Play overlay */}
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
    const [activeTier2, setActiveTier2] = useState<Feature | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // Fixed position of dropdown (to escape overflow clipping)
    const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const moreButtonRef = useRef<HTMLButtonElement>(null);
    const tabScrollRef = useRef<HTMLDivElement>(null);
    const [scrollState, setScrollState] = useState<'start' | 'middle' | 'end'>('start');

    useEffect(() => {
        const el = tabScrollRef.current;
        if (!el) return;
        function update() {
            if (!el) return;
            const atStart = el.scrollLeft <= 4;
            const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
            setScrollState(atStart ? 'start' : atEnd ? 'end' : 'middle');
        }
        update();
        el.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update, { passive: true });
        return () => {
            el.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    const activeFeature: Feature = activeTier2 ?? tier1Features[activeTab];
    const isMoreActive = activeTier2 !== null;

    // Close dropdown on outside click or scroll
    useEffect(() => {
        if (!dropdownOpen) return;
        function handleMouseDown(e: MouseEvent) {
            // If the click is on the More button itself, skip — let onClick toggle it
            if (moreButtonRef.current?.contains(e.target as Node)) return;
            setDropdownOpen(false);
        }
        function handleScroll() { setDropdownOpen(false); }
        document.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [dropdownOpen]);

    function openDropdown() {
        if (moreButtonRef.current) {
            const rect = moreButtonRef.current.getBoundingClientRect();
            setDropdownPos({ top: rect.bottom + 8, left: rect.left });
        }
        setDropdownOpen(o => !o);
    }

    function selectTier1(i: number) {
        setActiveTab(i);
        setActiveTier2(null);
        setDropdownOpen(false);
    }

    function selectTier2(f: Feature) {
        setActiveTier2(f);
        setDropdownOpen(false);
    }

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
                        Engineered for Operational Excellence
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        A modular architectural approach to apparel decoration. We didn&apos;t just build features; we solved the fundamental frictions.
                    </motion.p>
                </div>

                {/* Sticky Tab Bar */}
                <div className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md py-4 mb-10 md:mb-14 -mx-mobile px-mobile">
                    <LayoutGroup>
                        {/* Scroll indicator wrapper */}
                        <div className="relative">
                            {/* Left fade — visible once scrolled right */}
                            <div className={`absolute left-0 top-0 bottom-1 w-8 bg-gradient-to-r from-background-light/90 dark:from-background-dark/90 to-transparent pointer-events-none z-10 transition-opacity duration-200 ${scrollState === 'start' ? 'opacity-0' : 'opacity-100'}`} />
                            {/* Right fade — visible when more tabs exist to the right */}
                            <div className={`absolute right-0 top-0 bottom-1 w-12 bg-gradient-to-l from-background-light/90 dark:from-background-dark/90 to-transparent pointer-events-none z-10 transition-opacity duration-200 ${scrollState === 'end' ? 'opacity-0' : 'opacity-100'}`} />

                            {/* Single scrollable row — More pill sits flush after the last tab */}
                            <div ref={tabScrollRef} className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
                                {tier1Features.map((f, i) => (
                                    <button
                                        key={f.id}
                                        onClick={() => selectTier1(i)}
                                        className={`relative flex items-center gap-1 sm:gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors ${!isMoreActive && activeTab === i
                                            ? 'text-white'
                                            : 'border border-structural-border dark:border-gray-700 text-secondary-text hover:text-charcoal dark:hover:text-white hover:border-primary/30'
                                            }`}
                                    >
                                        {!isMoreActive && activeTab === i && (
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

                                {/* "More" pill — uses fixed-position dropdown to escape overflow clipping */}
                                <button
                                    ref={moreButtonRef}
                                    onClick={openDropdown}
                                    className={`relative flex items-center gap-1 sm:gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors ${isMoreActive
                                        ? 'text-white'
                                        : 'border border-structural-border dark:border-gray-700 text-secondary-text hover:text-charcoal dark:hover:text-white hover:border-primary/30'
                                        }`}
                                >
                                    {isMoreActive && (
                                        <motion.div
                                            layoutId="activeFeatureTab"
                                            className="absolute inset-0 bg-primary rounded-full"
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="material-symbols-outlined text-sm sm:text-base relative z-10 hidden sm:inline-block">apps</span>
                                    <span className="relative z-10">
                                        {isMoreActive ? activeTier2!.tabLabel : 'More'}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: dropdownOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="material-symbols-outlined text-base relative z-10"
                                    >
                                        expand_more
                                    </motion.span>
                                </button>
                            </div>
                        </div>{/* end relative scroll indicator wrapper */}
                    </LayoutGroup>
                </div>

                {/* Feature Panel */}
                <AnimatePresence mode="wait">
                    <FeaturePanel key={activeFeature.id} feature={activeFeature} />
                </AnimatePresence>

            </div>

            {/* Dropdown — rendered at root level with fixed positioning to escape all overflow clipping */}
            <AnimatePresence>
                {dropdownOpen && dropdownPos && (
                    <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        style={{ position: 'fixed', top: dropdownPos.top, left: Math.min(dropdownPos.left, window.innerWidth - 264 - 8) }}
                        className="w-64 bg-white dark:bg-gray-900 border border-structural-border dark:border-gray-800 rounded-2xl shadow-xl shadow-black/10 overflow-hidden z-[999]"
                    >
                        {tier2Features.map((f) => (
                            <button
                                key={f.id}
                                onClick={() => selectTier2(f)}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${activeTier2?.id === f.id
                                    ? 'bg-primary/10 text-primary font-semibold'
                                    : 'text-charcoal dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                                    }`}
                            >
                                <span className={`material-symbols-outlined text-lg flex-shrink-0 ${activeTier2?.id === f.id ? 'text-primary' : 'text-secondary-text dark:text-gray-400'}`}>
                                    {f.tabIcon}
                                </span>
                                <span className="truncate">{f.tabLabel}</span>
                                {activeTier2?.id === f.id && (
                                    <span className="material-symbols-outlined text-primary text-base ml-auto flex-shrink-0">check</span>
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Modal */}
            <VideoModal
                isOpen={!!activeVideo}
                onClose={() => setActiveVideo(null)}
                videoSrc={activeVideo || ''}
            />
        </section>
    );
}
