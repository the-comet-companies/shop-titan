'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import VideoPlayer from '@/components/VideoPlayer';

export default function FeaturesSection() {
    const [activeFeature, setActiveFeature] = useState(0);
    const navRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const navContainerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll the active navigation item into view (container only)
    useEffect(() => {
        const activeButton = navRefs.current[activeFeature];
        const container = navContainerRef.current;

        if (activeButton && container) {
            const buttonTop = activeButton.offsetTop;
            const buttonHeight = activeButton.offsetHeight;
            const containerHeight = container.offsetHeight;

            // Scroll to center the button in the container
            container.scrollTo({
                top: buttonTop - (containerHeight / 2) + (buttonHeight / 2),
                behavior: 'smooth'
            });
        }
    }, [activeFeature]);

    // Smooth scroll to feature
    const scrollToFeature = (index: number) => {
        const element = document.getElementById(`feature-${index}`);
        if (element) {
            // Offset for sticky header if needed, though we have a side nav now
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const features = [
        // Core Operations
        { title: "Quotes", id: "quotes", group: "Core Operations" },
        { title: "Orders", id: "orders", group: "Core Operations" },
        { title: "Customers / Vendors", id: "customers", group: "Core Operations" },
        { title: "Purchase Orders", id: "purchase-orders", group: "Core Operations" },

        // Production Management
        { title: "Machines & Production Scheduler", id: "scheduler", group: "Production" },
        { title: "Pricing Matrixes", id: "pricing", group: "Production" },
        { title: "Contractor Work Orders", id: "contractors", group: "Production" },

        // Digital & Product Management
        { title: "Product Management System", id: "products", group: "Digital" },
        { title: "XML Feed Management", id: "feeds", group: "Digital" },

        // Flexibility & Intelligence
        { title: "Decoration & Task Types", id: "tasks", group: "Flexibility" },
        { title: "Reporting + Data Analytics", id: "analytics", group: "Intelligence" }
    ];

    return (
        <section id="features" className="pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-28 lg:pb-32 bg-background-light dark:bg-background-dark">
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

                        {/* Desktop Navigation - Now scrollable */}
                        <div
                            ref={navContainerRef}
                            className="hidden lg:flex flex-col gap-1 relative flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent"
                        >
                            {features.reduce((acc, feature, index) => {
                                // Add group header if this is the first item in a new group
                                const prevGroup = index > 0 ? features[index - 1].group : null;
                                if (feature.group !== prevGroup) {
                                    acc.push(
                                        <div key={`group-${feature.group}`} className="mt-4 first:mt-0 mb-1">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4">
                                                {feature.group}
                                            </span>
                                        </div>
                                    );
                                }

                                // Add the feature button
                                acc.push(
                                    <button
                                        key={index}
                                        ref={(el) => { navRefs.current[index] = el; }}
                                        onClick={() => scrollToFeature(index)}
                                        className={cn(
                                            "text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 relative flex items-center gap-3",
                                            activeFeature === index
                                                ? "text-primary bg-primary/5 font-bold"
                                                : "text-gray-500 hover:text-charcoal dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                        )}
                                    >
                                        {activeFeature === index && (
                                            <motion.div
                                                layoutId="activeFeatureIndicator"
                                                className="absolute left-0 w-1 h-6 bg-primary rounded-r-full"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <span className={cn("transition-transform duration-300", activeFeature === index ? "translate-x-2" : "")}>
                                            {feature.title}
                                        </span>
                                    </button>
                                );

                                return acc;
                            }, [] as React.ReactNode[])}
                        </div>
                    </div>

                    {/* Right Column - Scrolling Content */}
                    <div className="lg:col-span-8 space-y-16 md:space-y-24">
                        {/* Feature 1: Quotes */}
                        <FeatureBlock
                            id="feature-0"
                            setActiveFeature={() => setActiveFeature(0)}
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

                        {/* Feature 2: Orders */}
                        <FeatureBlock
                            id="feature-1"
                            setActiveFeature={() => setActiveFeature(1)}
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

                        {/* Feature 3: Customers / Vendors */}
                        <FeatureBlock
                            id="feature-2"
                            setActiveFeature={() => setActiveFeature(2)}
                            icon="people"
                            title="Customers / Vendors"
                            painPoint={{
                                title: "The Friction",
                                description: "Contact info scattered across emails, sticky notes, and old spreadsheets. No relationship history. No visibility into customer lifetime value."
                            }}
                            solution={{
                                title: "The Flow",
                                description: "Unified CRM and VRM with complete relationship tracking. Contact cards, order history, notes, and communication logs all in one place."
                            }}
                            videoSrc="/videos/feature-customers.mp4"
                        >
                            <div className="h-full flex items-center justify-center">
                                <div className="w-full bg-surface dark:bg-gray-950 rounded-lg shadow-lg p-5 border border-structural-border dark:border-gray-800">
                                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary">business</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm dark:text-white">Acme Corp</h4>
                                            <p className="text-[10px] text-gray-500">Customer since 2022</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3 text-center">
                                        <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded">
                                            <div className="text-lg font-bold text-primary">47</div>
                                            <div className="text-[9px] text-gray-400">Orders</div>
                                        </div>
                                        <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded">
                                            <div className="text-lg font-bold text-green-600">$89K</div>
                                            <div className="text-[9px] text-gray-400">Revenue</div>
                                        </div>
                                        <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded">
                                            <div className="text-lg font-bold text-gray-600 dark:text-gray-400">14d</div>
                                            <div className="text-[9px] text-gray-400">Avg Turn</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FeatureBlock>

                        {/* Feature 4: Purchase Orders */}
                        <FeatureBlock
                            id="feature-3"
                            setActiveFeature={() => setActiveFeature(3)}
                            icon="receipt_long"
                            title="Purchase Orders"
                            painPoint={{
                                title: "The Friction",
                                description: "Manual PO creation, vendor emails flying back and forth. Stock running out mid-job because nobody tracked what was ordered."
                            }}
                            solution={{
                                title: "The Flow",
                                description: "Automated PO generation with vendor integration. RFQ workflow for quotes, auto-reordering based on stock levels, and complete order tracking."
                            }}
                            highlights={["RFQ Feature - Request for Quote workflow"]}
                            videoSrc="/videos/feature-purchase-orders.mp4"
                        >
                            <div className="h-full flex items-center justify-center">
                                <div className="w-full bg-surface dark:bg-gray-950 rounded-lg shadow-lg p-4 border border-structural-border dark:border-gray-800">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-xs font-bold dark:text-white">PO #2847</span>
                                        <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] rounded-full font-bold">RFQ SENT</span>
                                    </div>
                                    <div className="mb-3 p-2 bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30 rounded">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="material-symbols-outlined text-purple-600 text-sm">mail</span>
                                            <span className="text-[10px] font-bold text-purple-600">Request for Quote</span>
                                        </div>
                                        <p className="text-[9px] text-gray-600 dark:text-gray-400">Awaiting vendor response for 500 units Large Black Gildan 5000</p>
                                    </div>
                                    <div className="space-y-2 text-[10px]">
                                        <div className="flex justify-between"><span className="text-gray-500">Vendor:</span><span className="font-bold dark:text-white">SanMar</span></div>
                                        <div className="flex justify-between"><span className="text-gray-500">Est. Delivery:</span><span className="font-bold dark:text-white">Feb 20, 2026</span></div>
                                        <div className="flex justify-between"><span className="text-gray-500">Auto-reorder:</span><span className="text-green-600 font-bold">✓ Enabled</span></div>
                                    </div>
                                </div>
                            </div>
                        </FeatureBlock>

                        {/* Feature 5: Machines & Production Scheduler */}
                        <FeatureBlock
                            id="feature-4"
                            setActiveFeature={() => setActiveFeature(4)}
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

                        {/* Feature 6: Pricing Matrixes */}
                        <FeatureBlock
                            id="feature-5"
                            setActiveFeature={() => setActiveFeature(5)}
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

                        {/* Feature 7: Contractor Work Orders */}
                        <FeatureBlock
                            id="feature-6"
                            setActiveFeature={() => setActiveFeature(6)}
                            icon="handshake"
                            title="Contractor Work Orders"
                            painPoint={{
                                title: "The Friction",
                                description: "Subcontractor miscommunication. Work sent out with vague specs. Jobs coming back wrong or late with no accountability."
                            }}
                            solution={{
                                title: "The Flow",
                                description: "Digital work order system for contractors. Send work out with detailed spec sheets, track deadlines, and get quality confirmation—all documented."
                            }}
                            videoSrc="/videos/feature-contractors.mp4"
                        >
                            <div className="h-full flex items-center justify-center">
                                <div className="w-full bg-surface dark:bg-gray-950 rounded-lg shadow-lg p-4 border border-structural-border dark:border-gray-800">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-xs font-bold dark:text-white">Work Order #WO-471</span>
                                        <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] rounded-full font-bold">IN PROGRESS</span>
                                    </div>
                                    <div className="space-y-2 text-[10px] mb-3">
                                        <div className="flex justify-between"><span className="text-gray-500">Contractor:</span><span className="font-bold dark:text-white">Elite Embroidery</span></div>
                                        <div className="flex justify-between"><span className="text-gray-500">Task:</span><span className="font-bold dark:text-white">Left Chest Logo</span></div>
                                        <div className="flex justify-between"><span className="text-gray-500">Due Date:</span><span className="font-bold text-orange-600">Feb 18, 2026</span></div>
                                        <div className="flex justify-between"><span className="text-gray-500">Quantity:</span><span className="font-bold dark:text-white">288 pieces</span></div>
                                    </div>
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded">
                                        <p className="text-[9px] text-blue-700 dark:text-blue-400 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-xs">attach_file</span>
                                            Spec sheet attached • Quality checklist sent
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FeatureBlock>

                        {/* Feature 8: Product Management System */}
                        <FeatureBlock
                            id="feature-7"
                            setActiveFeature={() => setActiveFeature(7)}
                            icon="inventory_2"
                            title="Product Management System"
                            painPoint={{
                                title: "The Friction",
                                description: "Manual product data entry across multiple channels. SKU chaos. No central product database. Images scattered everywhere."
                            }}
                            solution={{
                                title: "The Flow",
                                description: "Centralized product database with SKU management, variant tracking, and organized image libraries. One source of truth for all product data."
                            }}
                            videoSrc="/videos/feature-products.mp4"
                        >
                            <div className="h-full flex items-center justify-center">
                                <div className="w-full bg-surface dark:bg-gray-950 rounded-lg shadow-lg p-4 border border-structural-border dark:border-gray-800">
                                    <div className="flex gap-3 mb-3">
                                        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded flex items-center justify-center">
                                            <span className="material-symbols-outlined text-gray-400">checkroom</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-xs dark:text-white mb-1">Gildan 5000 Heavy Cotton Tee</h4>
                                            <p className="text-[9px] text-gray-500 mb-2">SKU: GIL-5000-BLK-L</p>
                                            <div className="flex gap-1">
                                                {['S', 'M', 'L', 'XL', '2XL'].map((size) => (
                                                    <span key={size} className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-[8px] rounded font-medium dark:text-white">
                                                        {size}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 text-center text-[9px]">
                                        <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded">
                                            <div className="font-bold dark:text-white">24</div>
                                            <div className="text-gray-400">Colors</div>
                                        </div>
                                        <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded">
                                            <div className="font-bold dark:text-white">7</div>
                                            <div className="text-gray-400">Sizes</div>
                                        </div>
                                        <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded">
                                            <div className="font-bold text-green-600">✓</div>
                                            <div className="text-gray-400">Synced</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FeatureBlock>

                        {/* Feature 9: XML Feed Management */}
                        <FeatureBlock
                            id="feature-8"
                            setActiveFeature={() => setActiveFeature(8)}
                            icon="rss_feed"
                            title="XML Feed Management"
                            painPoint={{
                                title: "The Friction",
                                description: "Manual marketplace updates. Products out of sync across Google, Facebook, Pinterest, Reddit. Hours of copy-paste to update pricing."
                            }}
                            solution={{
                                title: "The Flow",
                                description: "Automated XML feed generation for all platforms: Google Merchant Center, Facebook/Instagram, Reddit, Pinterest. Auto-sync, error handling, and one-click updates."
                            }}
                            highlights={[
                                "Google Merchant Center feed",
                                "Facebook / Instagram feed",
                                "Reddit feed",
                                "Pinterest feed"
                            ]}
                            videoSrc="/videos/feature-feeds.mp4"
                        >
                            <div className="h-full flex items-center justify-center">
                                <div className="w-full bg-surface dark:bg-gray-950 rounded-lg shadow-lg p-4 border border-structural-border dark:border-gray-800">
                                    <div className="mb-3">
                                        <span className="text-xs font-bold dark:text-white">Feed Status</span>
                                    </div>
                                    <div className="space-y-2">
                                        {[
                                            { platform: "Google Merchant", status: "Synced", color: "green", icon: "check_circle" },
                                            { platform: "Facebook/Instagram", status: "Synced", color: "green", icon: "check_circle" },
                                            { platform: "Pinterest", status: "Synced", color: "green", icon: "check_circle" },
                                            { platform: "Reddit", status: "Syncing", color: "blue", icon: "sync" }
                                        ].map((feed, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-900 rounded"
                                            >
                                                <span className="text-[10px] font-medium dark:text-white">{feed.platform}</span>
                                                <div className="flex items-center gap-1">
                                                    <span className={`material-symbols-outlined text-sm text-${feed.color}-500 ${feed.icon === 'sync' ? 'animate-spin' : ''}`}>
                                                        {feed.icon}
                                                    </span>
                                                    <span className={`text-[9px] text-${feed.color}-600 font-bold`}>{feed.status}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <p className="mt-3 text-[9px] text-gray-500 text-center">Last updated: 2 minutes ago</p>
                                </div>
                            </div>
                        </FeatureBlock>

                        {/* Feature 10: Decoration & Task Types */}
                        <FeatureBlock
                            id="feature-9"
                            setActiveFeature={() => setActiveFeature(9)}
                            icon="tune"
                            title="Unlimited Decoration & Task Types"
                            painPoint={{
                                title: "The Friction",
                                description: "Rigid software that can't handle your custom workflows. Every shop does things differently, but you're stuck with one-size-fits-all."
                            }}
                            solution={{
                                title: "The Flow",
                                description: "Fully configurable task types and decoration methods. Custom fields, workflow rules, and pricing formulas for ANY process you run."
                            }}
                            videoSrc="/videos/feature-tasks.mp4"
                        >
                            <div className="h-full flex items-center justify-center">
                                <div className="w-full bg-surface dark:bg-gray-950 rounded-lg shadow-lg p-4 border border-structural-border dark:border-gray-800">
                                    <div className="mb-3">
                                        <span className="text-xs font-bold dark:text-white">Active Task Types</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            { name: "Screen Printing", icon: "palette" },
                                            { name: "Embroidery", icon: "style" },
                                            { name: "DTG", icon: "print" },
                                            { name: "Heat Press", icon: "local_fire_department" },
                                            { name: "Vinyl Cut", icon: "cut" },
                                            { name: "Laser Engrave", icon: "light_mode" }
                                        ].map((task, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="p-2 bg-gray-50 dark:bg-gray-900 rounded-lg text-center"
                                            >
                                                <span className="material-symbols-outlined text-primary text-lg">{task.icon}</span>
                                                <p className="text-[9px] font-medium mt-1 dark:text-white">{task.name}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <button className="w-full mt-3 py-2 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg text-[10px] font-bold text-gray-400 hover:border-primary hover:text-primary transition-colors">
                                        + Add Custom Task Type
                                    </button>
                                </div>
                            </div>
                        </FeatureBlock>

                        {/* Feature 11: Reporting + Data Analytics */}
                        <FeatureBlock
                            id="feature-10"
                            setActiveFeature={() => setActiveFeature(10)}
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
                    </div>
                </div>
            </div>
        </section>
    );
}

// Sub-component for individual Feature with Storytelling Layout
function FeatureBlock({
    id,
    setActiveFeature,
    icon,
    title,
    painPoint,
    solution,
    highlights,
    videoSrc,
    children
}: {
    id: string;
    setActiveFeature: () => void;
    icon: string;
    title: string;
    painPoint: { title: string; description: string };
    solution: { title: string; description: string };
    highlights?: string[];
    videoSrc?: string;
    children?: React.ReactNode;
}) {
    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            onViewportEnter={setActiveFeature}
            transition={{ duration: 0.6 }}
            className="group feature-card rounded-2xl md:rounded-3xl overflow-hidden flex flex-col border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-900 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 max-w-3xl mx-auto w-full relative"
        >
            {/* Hover Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-primary/10 transition-colors duration-500" />

            {/* Story Content Side (Top) */}
            <div className="p-6 md:p-8 flex flex-col justify-center relative z-10 w-full max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
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
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.4 }}
                        className="relative p-5 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 rounded-xl overflow-hidden flex flex-col h-full hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600 transition-all"
                    >
                        <div className="flex items-center gap-2 mb-3 relative z-10">
                            <div className="p-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg">
                                <span className="material-symbols-outlined text-slate-500 text-lg">sentiment_dissatisfied</span>
                            </div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
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
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="relative p-5 border border-indigo-100 dark:border-indigo-900 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-xl overflow-hidden group/flow flex flex-col h-full hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-200 dark:hover:border-indigo-700 transition-all"
                    >
                        {/* Subtle Background Gradient Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent -translate-x-[100%] animate-[shimmer_3s_infinite] pointer-events-none" />

                        <div className="flex items-center gap-2 mb-3 relative z-10">
                            <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400">
                                <span className="material-symbols-outlined text-lg">bolt</span>
                            </div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-400">
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
                                <li key={index} className="flex items-center gap-2 group/item">
                                    <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-0.5 group-hover/item:scale-110 transition-transform flex-shrink-0">
                                        <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-[10px] block font-bold">check</span>
                                    </div>
                                    <span className="text-xs text-secondary-text dark:text-gray-300 font-medium whitespace-nowrap">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Visual Side (Bottom) */}
            <div className="bg-gray-50 dark:bg-black/50 p-2 md:p-4 flex items-center justify-center border-t border-structural-border dark:border-gray-800 relative grow">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 dark:opacity-20 pointer-events-none" />

                {videoSrc ? (
                    <div className="w-full max-w-5xl shadow-2xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 relative z-10 group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-shadow duration-500 bg-white dark:bg-gray-900 flex flex-col aspect-video">
                        <div className="flex-grow relative bg-gray-900 group-hover:bg-gray-800 transition-colors duration-500">
                            {/* Play Button Placeholder / Loading State */}
                            <div className="absolute inset-0 flex items-center justify-center text-white/20 group-hover:text-white/40 transition-colors duration-500">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-current flex items-center justify-center">
                                    <span className="material-symbols-outlined text-4xl md:text-5xl">play_arrow</span>
                                </div>
                            </div>

                            <VideoPlayer
                                src={videoSrc}
                                autoPlay={true}
                                fallbackContent={children}
                                className="h-full w-full object-cover relative z-10"
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
