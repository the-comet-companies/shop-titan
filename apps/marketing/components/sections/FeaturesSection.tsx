'use client';

import { motion, LayoutGroup } from 'framer-motion';
import { useState, useEffect, useRef, useMemo } from 'react';
import { cn } from '@/lib/utils';
import VideoPlayer from '@/components/VideoPlayer';
import VideoModal from '@/components/ui/VideoModal';
import FeatureGrid from '@/components/ui/FeatureGrid';

export default function FeaturesSection() {
    const [activeFeature, setActiveFeature] = useState('feature-0');
    const navRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const navContainerRef = useRef<HTMLDivElement>(null);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    // Tier 2 Features Data
    const tier2Features = useMemo(() => [
        {
            id: "customers",
            icon: "people",
            title: "Customers / Vendors",
            summary: "Unified CRM and VRM with complete relationship tracking. Contact cards, order history, notes, and communication logs all in one place.",
            painPoint: "Contact info scattered across emails, sticky notes, and old spreadsheets. No relationship history. No visibility into customer lifetime value.",
            solution: "Unified CRM and VRM with complete relationship tracking. Contact cards, order history, notes, and communication logs all in one place.",
            videoSrc: "/videos/feature-crm.mp4"
        },
        {
            id: "purchase-orders",
            icon: "receipt_long",
            title: "Purchase Orders",
            summary: "Automated PO generation with vendor integration. RFQ workflow for quotes, auto-reordering based on stock levels, and complete order tracking.",
            painPoint: "Manual PO creation, vendor emails flying back and forth. Stock running out mid-job because nobody tracked what was ordered.",
            solution: "Automated PO generation with vendor integration. RFQ workflow for quotes, auto-reordering based on stock levels, and complete order tracking.",
            videoSrc: "/videos/feature-pos.mp4"
        },
        {
            id: "contractors",
            icon: "handshake",
            title: "Contractor Work Orders",
            summary: "Digital work order system for contractors. Send work out with detailed spec sheets, track deadlines, and get quality confirmation—all documented.",
            painPoint: "Subcontractor miscommunication. Work sent out with vague specs. Jobs coming back wrong or late with no accountability.",
            solution: "Digital work order system for contractors. Send work out with detailed spec sheets, track deadlines, and get quality confirmation—all documented.",
            videoSrc: "/videos/feature-contractors.mp4"
        },
        {
            id: "products",
            icon: "inventory_2",
            title: "Product Management",
            summary: "Centralized product database with SKU management, variant tracking, and organized image libraries. One source of truth for all product data.",
            painPoint: "Manual product data entry across multiple channels. SKU chaos. No central product database. Images scattered everywhere.",
            solution: "Centralized product database with SKU management, variant tracking, and organized image libraries. One source of truth for all product data.",
            videoSrc: "/videos/feature-products.mp4"
        },
        {
            id: "feeds",
            icon: "rss_feed",
            title: "XML Feed Management",
            summary: "Automated XML feed generation for all platforms: Google Merchant Center, Facebook/Instagram, Reddit, Pinterest. Auto-sync, error handling, and one-click updates.",
            painPoint: "Manual marketplace updates. Products out of sync across Google, Facebook, Pinterest, Reddit. Hours of copy-paste to update pricing.",
            solution: "Automated XML feed generation for all platforms: Google Merchant Center, Facebook/Instagram, Reddit, Pinterest. Auto-sync, error handling, and one-click updates.",
            videoSrc: "/videos/feature-feeds.mp4"
        },
        {
            id: "tasks",
            icon: "tune",
            title: "Decoration & Task Types",
            summary: "Fully configurable task types and decoration methods. Custom fields, workflow rules, and pricing formulas for ANY process you run.",
            painPoint: "Rigid software that can't handle your custom workflows. Every shop does things differently, but you're stuck with one-size-fits-all.",
            solution: "Fully configurable task types and decoration methods. Custom fields, workflow rules, and pricing formulas for ANY process you run.",
            videoSrc: "/videos/feature-tasks.mp4"
        }
    ], []);

    // Updated navigation items (Tier 1 + More Features)
    const navigationItems = useMemo(() => [
        { title: "Quotes", id: "feature-0", type: "feature" },
        { title: "Orders", id: "feature-1", type: "feature" },
        { title: "Machines & Scheduler", id: "feature-4", type: "feature" },
        { title: "Pricing Matrixes", id: "feature-5", type: "feature" },
        { title: "Reporting + Analytics", id: "feature-10", type: "feature" },
        { title: "More Features", id: "more-features", type: "section" }
    ], []);

    // Auto-scroll the active navigation item into view
    useEffect(() => {
        const activeIndex = navigationItems.findIndex(item => item.id === activeFeature);
        if (activeIndex !== -1) {
            const activeButton = navRefs.current[activeIndex];
            const container = navContainerRef.current;

            if (activeButton && container) {
                const buttonTop = activeButton.offsetTop;
                const buttonHeight = activeButton.offsetHeight;
                const containerHeight = container.offsetHeight;

                container.scrollTo({
                    top: buttonTop - (containerHeight / 2) + (buttonHeight / 2),
                    behavior: 'smooth'
                });
            }
        }
    }, [activeFeature, navigationItems]);

    // Smooth scroll to feature
    const scrollToFeature = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    // Progress track percentage (0–100) based on active nav item index
    const activeNavIndex = navigationItems.findIndex(item => item.id === activeFeature);
    const progressPercent = navigationItems.length > 1
        ? (Math.max(0, activeNavIndex) / (navigationItems.length - 1)) * 100
        : 0;

    // IntersectionObserver for active state tracking
    const featureRatios = useRef<Map<string, number>>(new Map());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Update ratios for changed entries
                entries.forEach((entry) => {
                    const id = entry.target.id;
                    if (id.startsWith('feature-') || id === 'more-features') {
                        featureRatios.current.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
                    }
                });

                // Find the most visible element among ALL tracked elements
                let mostVisibleId = '';
                let maxRatio = 0;

                featureRatios.current.forEach((ratio, id) => {
                    if (ratio > maxRatio) {
                        maxRatio = ratio;
                        mostVisibleId = id;
                    }
                });

                // Update active feature if we have a winner
                if (mostVisibleId) {
                    setActiveFeature(mostVisibleId);
                }
            },
            {
                threshold: [0, 0.25, 0.5, 1],
                rootMargin: '-10% 0px -40% 0px'
            }
        );

        // Observe all Tier 1 feature blocks and the grid section
        const featureElements = document.querySelectorAll('[id^="feature-"]');
        const gridSection = document.getElementById('more-features');

        featureElements.forEach(el => observer.observe(el));
        if (gridSection) observer.observe(gridSection);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="features" className="pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-28 lg:pb-32 bg-background-light dark:bg-background-dark relative">
            {/* Animated gradient orb background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-3xl animate-gradient-flow-1" />
                <div className="absolute top-1/2 -left-48 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.04] blur-3xl animate-gradient-flow-2" />
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-teal-400/[0.03] blur-3xl animate-gradient-flow-3" />
            </div>
            <div className="max-w-7xl mx-auto px-mobile">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left Column - Sticky Header & Nav */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 self-start flex flex-col max-h-[calc(100vh-8rem)]">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-8 flex-shrink-0"
                        >
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4 md:mb-6">
                                Product Capabilities
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] mb-6 tracking-tight text-charcoal dark:text-white">
                                Engineered for <br />
                                <span className="text-secondary-text dark:text-gray-600">
                                    Operational Excellence.
                                </span>
                            </h1>
                            <p className="text-base text-secondary-text dark:text-gray-400 leading-relaxed max-w-md">
                                A modular architectural approach to apparel decoration. We didn&apos;t
                                just build features; we solved the fundamental frictions.
                            </p>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div
                            ref={navContainerRef}
                            className="hidden lg:flex flex-col gap-1 relative flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent pl-4"
                        >
                            {/* Progress track */}
                            <div className="absolute left-1 top-3 bottom-3 w-0.5 bg-gray-200 dark:bg-gray-800 rounded-full pointer-events-none">
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-full bg-primary rounded-full origin-top"
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: progressPercent / 100 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                                />
                            </div>

                            <LayoutGroup>
                                {navigationItems.map((item, index) => (
                                    <button
                                        key={item.id}
                                        ref={(el) => { navRefs.current[index] = el; }}
                                        onClick={() => scrollToFeature(item.id)}
                                        className={cn(
                                            "text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 relative flex items-center gap-3",
                                            activeFeature === item.id
                                                ? "text-primary font-bold"
                                                : "text-gray-500 hover:text-charcoal dark:hover:text-white",
                                            item.type === "section" && "border-t border-gray-200 dark:border-gray-800 mt-4 pt-6"
                                        )}
                                    >
                                        {/* Glassmorphic background pill for active item */}
                                        {activeFeature === item.id && (
                                            <motion.div
                                                layoutId="activeNavPill"
                                                className="absolute inset-0 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-white/80 dark:border-white/20 shadow-md shadow-primary/10 rounded-lg"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10">
                                            {item.title}
                                        </span>
                                        {item.type === "section" && (
                                            <span className="material-symbols-outlined text-sm ml-auto relative z-10">
                                                expand_more
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </LayoutGroup>
                        </div>
                    </div>

                    {/* Right Column - Scrolling Content */}
                    <div className="lg:col-span-8 space-y-16 md:space-y-24">
                        {/* Tier 1: Feature 0 - Quotes */}
                        <FeatureBlock
                            id="feature-0"
                            icon="description"
                            title="Quotes"
                            painPoint={{
                                title: "The Friction",
                                description: "Manual quote creation with spreadsheets. Inconsistent pricing. Hours spent calculating setup fees, per-piece costs, and rush charges."
                            }}
                            solution={{
                                title: "The Flow",
                                description: "Automated quote generation with intelligent pricing matrices. Template library, auto-calculations, and one-click PDF generation."
                            }}
                            videoSrc="/videos/feature-quotes.mp4"
                            onWatchDemo={(src) => setActiveVideo(src)}
                        >
                            <div className="h-full flex items-center justify-center">
                                <div className="w-full bg-surface dark:bg-gray-950 rounded-lg shadow-lg p-5 border border-structural-border dark:border-gray-800">
                                    <div className="flex justify-between items-center mb-4 pb-3 border-b border-dashed border-gray-200 dark:border-gray-800">
                                        <span className="text-xs font-bold dark:text-white">Quote #3849</span>
                                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] rounded-full font-bold">DRAFT</span>
                                    </div>
                                    <div className="space-y-2 text-[10px]">
                                        <div className="flex justify-between"><span className="text-gray-500">Setup Fee:</span><span className="font-bold dark:text-white">$85.00</span></div>
                                        <div className="flex justify-between"><span className="text-gray-500">Per Piece (144 qty):</span><span className="font-bold dark:text-white">$8.25</span></div>
                                        <div className="flex justify-between"><span className="text-gray-500">Rush (2-day):</span><span className="font-bold text-orange-600">+$125.00</span></div>
                                        <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-800 flex justify-between">
                                            <span className="font-bold dark:text-white">Total:</span>
                                            <span className="text-lg font-bold text-primary">$1,398.00</span>
                                        </div>
                                    </div>
                                    <button className="w-full mt-4 py-2 bg-primary text-white text-xs font-bold rounded hover:bg-primary/90 transition-colors">
                                        Generate PDF
                                    </button>
                                </div>
                            </div>
                        </FeatureBlock>

                        {/* Tier 1: Feature 1 - Orders */}
                        <FeatureBlock
                            id="feature-1"
                            icon="shopping_cart"
                            title="Orders"
                            painPoint={{
                                title: "The Friction",
                                description: '"Where is order #492?" Lost orders, unclear status, constant check-in calls. Job jackets getting lost between office and production floor.'
                            }}
                            solution={{
                                title: "The Flow",
                                description: "End-to-end order tracking with real-time status updates. Every garment's journey is logged, visible, and searchable from anywhere."
                            }}
                            videoSrc="/videos/feature-orders.mp4"
                            onWatchDemo={(src) => setActiveVideo(src)}
                        >
                            <div className="h-full flex items-center justify-center">
                                <div className="w-full bg-surface dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden border border-structural-border dark:border-gray-800">
                                    <div className="h-8 bg-gray-100 dark:bg-gray-900 border-b border-structural-border dark:border-gray-800 px-3 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="p-4 space-y-3">
                                        <div className="flex justify-between items-center pb-3 border-b border-dashed border-gray-200 dark:border-gray-800">
                                            <span className="text-xs font-bold dark:text-white">Order #9928</span>
                                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] rounded-full font-bold">PRODUCTION</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-[10px] text-gray-500">
                                                <span>Art Approved</span>
                                                <span className="text-green-500 font-bold">✓ Done</span>
                                            </div>
                                            <div className="flex justify-between text-[10px] text-gray-500">
                                                <span>Screen Burning</span>
                                                <span className="text-green-500 font-bold">✓ Done</span>
                                            </div>
                                            <div className="flex justify-between text-[10px] text-gray-500">
                                                <span>Printing</span>
                                                <span className="text-primary font-bold">In Progress</span>
                                            </div>
                                            <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "67%" }}
                                                    transition={{ duration: 1.5, delay: 0.2 }}
                                                    className="bg-primary h-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FeatureBlock>

                        {/* Tier 1: Feature 4 - Machines & Production Scheduler */}
                        <FeatureBlock
                            id="feature-4"
                            icon="precision_manufacturing"
                            title="Machines & Production Scheduler"
                            painPoint={{
                                title: "The Friction",
                                description: "Overbooking machines, capacity guessing, production chaos. Managers juggling jobs in their head. No visibility into actual machine utilization."
                            }}
                            solution={{
                                title: "The Flow",
                                description: "Visual production scheduler with drag-drop job assignment. Real-time capacity planning, machine utilization tracking, and workload balancing."
                            }}
                            videoSrc="/videos/feature-scheduler.mp4"
                            onWatchDemo={(src) => setActiveVideo(src)}
                        >
                            <div className="h-full flex items-center justify-center">
                                <div className="w-full bg-surface dark:bg-gray-950 rounded-lg shadow-lg p-4 border border-structural-border dark:border-gray-800">
                                    <div className="mb-3">
                                        <span className="text-xs font-bold dark:text-white">Today&apos;s Schedule</span>
                                    </div>
                                    <div className="space-y-2">
                                        {[
                                            { machine: "Press A", job: "Job #9928", progress: 85, color: "bg-green-500" },
                                            { machine: "Press B", job: "Job #9931", progress: 45, color: "bg-blue-500" },
                                            { machine: "Embroidery 1", job: "Job #9925", progress: 92, color: "bg-purple-500" }
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="p-2 bg-gray-50 dark:bg-gray-900 rounded-lg"
                                            >
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-[10px] font-bold dark:text-white">{item.machine}</span>
                                                    <span className="text-[9px] text-gray-500">{item.job}</span>
                                                </div>
                                                <div className="w-full bg-gray-200 dark:bg-gray-800 h-1 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${item.progress}%` }}
                                                        transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                                                        className={`${item.color} h-full`}
                                                    />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FeatureBlock>

                        {/* Tier 1: Feature 5 - Pricing Matrixes */}
                        <FeatureBlock
                            id="feature-5"
                            icon="grid_on"
                            title="Pricing Matrixes"
                            painPoint={{
                                title: "The Friction",
                                description: "Underquoting complex jobs. No structured pricing for different decoration types. Sales team guessing at embroidery stitch counts or screen counts."
                            }}
                            solution={{
                                title: "The Flow",
                                description: "Dynamic pricing matrices for all decoration types: embroidery (stitch count), screen printing (colors, screens), sewing, and any custom task you offer."
                            }}
                            videoSrc="/videos/feature-pricing.mp4"
                            onWatchDemo={(src) => setActiveVideo(src)}
                        >
                            <div className="h-full flex items-center justify-center">
                                <div className="w-full bg-surface dark:bg-gray-950 rounded-lg shadow-lg p-4 border border-structural-border dark:border-gray-800">
                                    <div className="mb-3">
                                        <span className="text-xs font-bold dark:text-white">Embroidery Pricing Matrix</span>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-[9px]">
                                            <thead>
                                                <tr className="border-b border-gray-200 dark:border-gray-800">
                                                    <th className="text-left py-1 text-gray-500">Stitch Count</th>
                                                    <th className="text-right py-1 text-gray-500">1-24</th>
                                                    <th className="text-right py-1 text-gray-500">25-99</th>
                                                    <th className="text-right py-1 text-gray-500">100+</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-100 dark:border-gray-900">
                                                    <td className="py-2 font-medium dark:text-white">0-5K</td>
                                                    <td className="text-right text-gray-600 dark:text-gray-400">$8.50</td>
                                                    <td className="text-right text-gray-600 dark:text-gray-400">$7.25</td>
                                                    <td className="text-right text-primary font-bold">$6.00</td>
                                                </tr>
                                                <tr className="border-b border-gray-100 dark:border-gray-900">
                                                    <td className="py-2 font-medium dark:text-white">5K-10K</td>
                                                    <td className="text-right text-gray-600 dark:text-gray-400">$12.00</td>
                                                    <td className="text-right text-gray-600 dark:text-gray-400">$10.50</td>
                                                    <td className="text-right text-primary font-bold">$9.25</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 font-medium dark:text-white">10K+</td>
                                                    <td className="text-right text-gray-600 dark:text-gray-400">$16.50</td>
                                                    <td className="text-right text-gray-600 dark:text-gray-400">$14.75</td>
                                                    <td className="text-right text-primary font-bold">$13.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </FeatureBlock>

                        {/* Tier 1: Feature 10 - Reporting + Data Analytics */}
                        <FeatureBlock
                            id="feature-10"
                            icon="analytics"
                            title="Reporting + Data Analytics"
                            painPoint={{
                                title: "The Friction",
                                description: "No business intelligence. Flying blind on inventory, profit margins, and customer trends. Finding out problems weeks after they happened."
                            }}
                            solution={{
                                title: "The Flow",
                                description: "Real-time dashboards and comprehensive reports: Inventory levels & turnover, financial P&L, production metrics, and customer analytics."
                            }}
                            highlights={[
                                "Inventory Reports (stock levels, turnover, reorder alerts)",
                                "Financial visibility (real-time P&L)",
                                "Production metrics",
                                "Customer analytics"
                            ]}
                            videoSrc="/videos/feature-analytics.mp4"
                            onWatchDemo={(src) => setActiveVideo(src)}
                        >
                            <div className="h-full flex items-center justify-center">
                                <div className="w-full bg-surface dark:bg-gray-950 rounded-lg shadow-lg p-5 border border-structural-border dark:border-gray-800">
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold">Net Profit</p>
                                            <p className="text-2xl font-bold text-gray-900 dark:text-white">$12,402</p>
                                            <p className="text-[10px] text-green-500 font-bold flex items-center gap-1">
                                                <span className="material-symbols-outlined text-xs">trending_up</span> +14%
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold">Inventory Turn</p>
                                            <p className="text-2xl font-bold text-gray-900 dark:text-white">8.2x</p>
                                            <p className="text-[10px] text-gray-500">vs 6.5x last quarter</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-1 h-20 mb-3">
                                        {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${height}%` }}
                                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                                className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary/40 transition-colors"
                                            />
                                        ))}
                                    </div>
                                    <div className="p-2 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded flex items-center gap-2">
                                        <span className="material-symbols-outlined text-red-600 text-sm">warning</span>
                                        <span className="text-[9px] text-red-700 dark:text-red-400 font-bold">Low Stock Alert: 3 items below reorder point</span>
                                    </div>
                                </div>
                            </div>
                        </FeatureBlock>

                        {/* Tier 2: Feature Grid */}
                        <FeatureGrid
                            features={tier2Features}
                            onWatchDemo={(src) => setActiveVideo(src)}
                        />
                    </div>
                </div>
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

// Sub-component for individual Feature with Storytelling Layout
function FeatureBlock({
    id,
    icon,
    title,
    painPoint,
    solution,
    highlights,
    videoSrc,
    onWatchDemo,
    children
}: {
    id: string;
    icon: string;
    title: string;
    painPoint: { title: string; description: string };
    solution: { title: string; description: string };
    highlights?: string[];
    videoSrc?: string;
    onWatchDemo?: (src: string) => void;
    children?: React.ReactNode;
}) {
    const [isMobileExpanded, setIsMobileExpanded] = useState(false);

    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6 }}
            className="group feature-card rounded-2xl md:rounded-3xl overflow-hidden flex flex-col border border-white/60 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-black/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 max-w-3xl mx-auto w-full relative"
        >
            {/* Hover Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-primary/10 transition-colors duration-500" />
            {/* Top-edge glass highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none z-10" />

            {/* Story Content Side (Top) */}
            <div className="p-6 md:p-8 flex flex-col justify-center relative z-10 w-full max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/50 dark:border-white/20 rounded-2xl shadow-sm flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-500">
                        <span className="material-symbols-outlined text-xl md:text-2xl">{icon}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold dark:text-white leading-tight group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {/* Pain Point - Expressive/Friction Theme (Full Box) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="relative p-5 border border-rose-200/50 dark:border-rose-800/30 bg-rose-50/60 dark:bg-rose-950/20 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col h-full hover:shadow-lg hover:border-rose-300/60 dark:hover:border-rose-700/40 transition-all"
                    >
                        {/* Corner glow accent */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-rose-500/10 blur-2xl rounded-full pointer-events-none" />
                        <div className="flex items-center gap-2 mb-3 relative z-10">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400">
                                {painPoint.title}
                            </h4>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed relative z-10 font-medium flex-grow">
                            {painPoint.description}
                        </p>
                    </motion.div>

                    {/* Solution - Vibrant/Flow Theme (Full Box) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="relative p-5 border border-blue-200/50 dark:border-blue-800/30 bg-blue-50/60 dark:bg-blue-950/20 backdrop-blur-sm rounded-xl overflow-hidden group/flow flex flex-col h-full hover:shadow-lg hover:shadow-primary/10 hover:border-blue-300/60 dark:hover:border-blue-700/40 transition-all"
                    >
                        {/* Corner glow accent */}
                        <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/10 blur-2xl rounded-full pointer-events-none" />
                        <div className="flex items-center gap-2 mb-3 relative z-10">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-400">
                                {solution.title}
                            </h4>
                        </div>
                        <p className="text-charcoal dark:text-white text-sm leading-relaxed font-semibold relative z-10 flex-grow">
                            {solution.description}
                        </p>
                    </motion.div>
                </div>

                {/* Highlights List - Inline/Grid */}
                {highlights && highlights.length > 0 && (
                    <div className="pt-4 pl-1">
                        <ul className="flex flex-wrap gap-x-6 gap-y-2">
                            {highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-1.5 group/item">
                                    <span className="material-symbols-outlined text-green-500 dark:text-green-400 text-[14px] mt-[1.5px] font-bold flex-shrink-0 group-hover/item:scale-110 transition-transform">check</span>
                                    <span className="text-xs text-secondary-text dark:text-gray-300 font-medium leading-relaxed">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Expand Toggle Button */}
                <div className="mt-6">
                    <button
                        onClick={() => setIsMobileExpanded(!isMobileExpanded)}
                        className="w-full py-3 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-charcoal dark:text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors active:bg-gray-50 dark:active:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                        <span className="material-symbols-outlined text-lg text-primary">
                            {isMobileExpanded ? 'visibility_off' : 'play_circle'}
                        </span>
                        {isMobileExpanded ? 'Hide Visual' : 'See Visual Demo'}
                    </button>
                </div>
            </div>

            {/* Visual Side (Bottom) - Toggleable on all devices */}
            <div className={cn(
                "bg-gray-50 dark:bg-black/50 p-2 md:p-4 border-t border-structural-border dark:border-gray-800 relative grow transition-all duration-300",
                isMobileExpanded ? "block md:flex md:items-center md:justify-center md:h-auto" : "hidden"
            )}>
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 dark:opacity-20 pointer-events-none" />

                {videoSrc ? (
                    <div className="w-full max-w-5xl shadow-2xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 relative z-10 group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-shadow duration-500 bg-white dark:bg-gray-900 flex flex-col aspect-video">
                        <div className="flex-grow relative bg-gray-900 group-hover:bg-gray-800 transition-colors duration-500">
                            {/* Play Button Trigger */}
                            <button
                                onClick={() => onWatchDemo?.(videoSrc)}
                                className="absolute inset-0 flex flex-col items-center justify-center text-white/40 group-hover:text-white/80 transition-all duration-500 z-20 hover:bg-black/20"
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-current flex items-center justify-center mb-4 transition-transform group-hover:scale-110 bg-black/20 backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-5xl md:text-6xl pl-1">play_arrow</span>
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Watch Demo</span>
                            </button>

                            {/* Background Video (Muted, Loop, No Controls) acting as a "Live Poster" */}
                            <VideoPlayer
                                src={videoSrc}
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                fallbackContent={children}
                                className="h-full w-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                                hideControls={true}
                            />
                        </div>
                    </div>
                ) : (
                    children
                )}
            </div>
        </motion.div>
    );
}
