'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function FeaturesSection() {
    const [activeFeature, setActiveFeature] = useState(0);

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
        { title: "Job and project tracking", id: "tracking" },
        { title: "Inventory and materials management", id: "inventory" },
        { title: "Client workflows and approvals", id: "approvals" },
        { title: "Financial visibility and reporting", id: "financials" },
        { title: "Automation layers and triggers", id: "automation" }
    ];

    return (
        <section id="features" className="pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-28 lg:pb-32 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-mobile">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left Column - Sticky Header & Nav */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
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
                                A modular architectural approach to apparel decoration. We didn't
                                just build features; we solved the fundamental frictions.
                            </p>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex flex-col gap-2 relative">
                            {features.map((feature, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToFeature(index)}
                                    className={cn(
                                        "text-left py-3 px-4 rounded-lg text-sm font-bold transition-all duration-300 relative flex items-center gap-3",
                                        activeFeature === index
                                            ? "text-primary bg-primary/5"
                                            : "text-gray-400 hover:text-charcoal dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
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
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Scrolling Content */}
                    <div className="lg:col-span-8 space-y-12 md:space-y-24">
                        {/* Feature 1: Job Tracking */}
                        <motion.div
                            id="feature-0"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            onViewportEnter={() => setActiveFeature(0)}
                            transition={{ duration: 0.6 }}
                            className="feature-card rounded-2xl md:rounded-3xl overflow-hidden grid md:grid-cols-2 border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-900 shadow-xl"
                        >
                            <div className="p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-structural-border dark:border-gray-800">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8">
                                    <span className="material-symbols-outlined">analytics</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
                                    Job and project tracking
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                            The Problem Eliminated
                                        </h4>
                                        <p className="text-secondary-text dark:text-gray-400 text-sm leading-relaxed">
                                            "Where is order #492?" phone calls and physical job jackets
                                            getting lost between the office and the press.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                            What Changes After
                                        </h4>
                                        <p className="text-secondary-text dark:text-gray-400 text-sm leading-relaxed">
                                            Real-time digital status updates at every stage. Every
                                            garment's journey is logged, visible, and searchable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-background-light dark:bg-black/50 p-8 flex items-center justify-center">
                                {/* Mock UI - Kept Simplified */}
                                <div className="w-full bg-surface dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden border border-structural-border dark:border-gray-800">
                                    <div className="h-8 bg-gray-100 dark:bg-gray-900 border-b border-structural-border dark:border-gray-800 px-3 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="p-4 space-y-3">
                                        <div className="flex justify-between items-center pb-3 border-b border-dashed border-gray-200 dark:border-gray-800">
                                            <span className="text-xs font-bold dark:text-white">Job #9928</span>
                                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] rounded-full font-bold">PRODUCTION</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-[10px] text-gray-500">
                                                <span>Separations</span>
                                                <span className="text-green-500 font-bold">Done</span>
                                            </div>
                                            <div className="flex justify-between text-[10px] text-gray-500">
                                                <span>Screen Burning</span>
                                                <span className="text-green-500 font-bold">Done</span>
                                            </div>
                                            <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "82%" }}
                                                    transition={{ duration: 1.5, delay: 0.2 }}
                                                    className="bg-primary h-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Feature 2: Inventory Management */}
                        <motion.div
                            id="feature-1"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            onViewportEnter={() => setActiveFeature(1)}
                            transition={{ duration: 0.6 }}
                            className="feature-card rounded-2xl md:rounded-3xl overflow-hidden grid md:grid-cols-2 border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-900 shadow-xl"
                        >
                            <div className="md:order-last p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-l border-structural-border dark:border-gray-800">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8">
                                    <span className="material-symbols-outlined">inventory</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
                                    Inventory and materials management
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                            The Problem Eliminated
                                        </h4>
                                        <p className="text-secondary-text dark:text-gray-400 text-sm leading-relaxed">
                                            The "Oh crap, we're out of Large Whites" moment
                                            mid-production because someone forgot to update the spreadsheet.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                            What Changes After
                                        </h4>
                                        <p className="text-secondary-text dark:text-gray-400 text-sm leading-relaxed">
                                            Global stock visibility synced with POs. Live inventory levels across all bins, automatically updated.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-background-light dark:bg-black/50 p-8 flex items-center justify-center">
                                <div className="w-full bg-surface dark:bg-gray-950 rounded-lg shadow-lg p-5 border border-structural-border dark:border-gray-800">
                                    <div className="grid grid-cols-3 gap-2 text-center mb-4">
                                        <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded border border-gray-100 dark:border-gray-800">
                                            <div className="text-[10px] text-gray-400">S</div>
                                            <div className="font-bold dark:text-white">142</div>
                                        </div>
                                        <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded border border-gray-100 dark:border-gray-800">
                                            <div className="text-[10px] text-gray-400">M</div>
                                            <div className="font-bold dark:text-white">82</div>
                                        </div>
                                        <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded border border-red-100 dark:border-red-900/30">
                                            <div className="text-[10px] text-red-500">L</div>
                                            <div className="font-bold text-red-600">4</div>
                                        </div>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="p-2 bg-primary/5 border border-primary/10 rounded flex items-center gap-2"
                                    >
                                        <span className="material-symbols-outlined text-primary text-sm animate-spin">sync</span>
                                        <span className="text-[10px] text-primary font-medium">Syncing with SanMar...</span>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Feature 3: Client Approvals */}
                        <motion.div
                            id="feature-2"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            onViewportEnter={() => setActiveFeature(2)}
                            transition={{ duration: 0.6 }}
                            className="feature-card rounded-2xl md:rounded-3xl overflow-hidden grid md:grid-cols-2 border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-900 shadow-xl"
                        >
                            <div className="p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-structural-border dark:border-gray-800">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8">
                                    <span className="material-symbols-outlined">verified</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
                                    Client workflows and approvals
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                            The Problem Eliminated
                                        </h4>
                                        <p className="text-secondary-text dark:text-gray-400 text-sm leading-relaxed">
                                            Approval delays buried in email threads. Clients approving the wrong version.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                            What Changes After
                                        </h4>
                                        <p className="text-secondary-text dark:text-gray-400 text-sm leading-relaxed">
                                            Integrated proofing portals. One-click approvals trigger production tickets instantly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-background-light dark:bg-black/50 p-8 flex items-center justify-center">
                                <div className="w-full bg-surface dark:bg-gray-950 rounded-lg shadow-lg p-5 border border-structural-border dark:border-gray-800 text-center">
                                    <div className="aspect-video bg-gray-100 dark:bg-gray-900 rounded mb-4 flex items-center justify-center relative overflow-hidden">
                                        <span className="material-symbols-outlined text-4xl text-gray-300">image</span>
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            transition={{ type: "spring", delay: 0.4 }}
                                            className="absolute inset-0 flex items-center justify-center bg-green-500/10 backdrop-blur-[1px]"
                                        >
                                            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm">check</span> APPROVED
                                            </div>
                                        </motion.div>
                                    </div>
                                    <button className="w-full py-2 bg-primary text-white text-xs font-bold rounded opacity-50 cursor-not-allowed">
                                        Approved by Client
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Feature 4: Financial Visibility */}
                        <motion.div
                            id="feature-3"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            onViewportEnter={() => setActiveFeature(3)}
                            transition={{ duration: 0.6 }}
                            className="feature-card rounded-2xl md:rounded-3xl overflow-hidden grid md:grid-cols-2 border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-900 shadow-xl"
                        >
                            <div className="md:order-last p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-l border-structural-border dark:border-gray-800">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8">
                                    <span className="material-symbols-outlined">payments</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
                                    Financial visibility and reporting
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                            The Problem Eliminated
                                        </h4>
                                        <p className="text-secondary-text dark:text-gray-400 text-sm leading-relaxed">
                                            Profit leaks and guessing margins. Finding out a job lost money two weeks after it shipped.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                            What Changes After
                                        </h4>
                                        <p className="text-secondary-text dark:text-gray-400 text-sm leading-relaxed">
                                            Real-time P&L per job. Automated commissions. Know your exact profitability the moment an order is placed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-background-light dark:bg-black/50 p-8 flex items-center justify-center">
                                <div className="w-full bg-surface dark:bg-gray-950 rounded-lg shadow-lg p-5 border border-structural-border dark:border-gray-800">
                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold">Net Profit</p>
                                            <p className="text-2xl font-bold text-gray-900 dark:text-white">$12,402</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] text-green-500 font-bold flex items-center justify-end gap-1">
                                                <span className="material-symbols-outlined text-xs">trending_up</span> +14%
                                            </p>
                                            <p className="text-[9px] text-gray-400">vs last month</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-1 h-24">
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
                                </div>
                            </div>
                        </motion.div>

                        {/* Feature 5: Automation Layers */}
                        <motion.div
                            id="feature-4"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            onViewportEnter={() => setActiveFeature(4)}
                            transition={{ duration: 0.6 }}
                            className="feature-card rounded-2xl md:rounded-3xl overflow-hidden grid md:grid-cols-2 border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-900 shadow-xl"
                        >
                            <div className="md:order-last p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-l border-structural-border dark:border-gray-800">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8">
                                    <span className="material-symbols-outlined">bolt</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
                                    Automation layers and triggers
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                            The Problem Eliminated
                                        </h4>
                                        <p className="text-secondary-text dark:text-gray-400 text-sm leading-relaxed">
                                            Manual data re-entry. Humans doing repetitive tasks that computers can do 10x faster.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                            What Changes After
                                        </h4>
                                        <p className="text-secondary-text dark:text-gray-400 text-sm leading-relaxed">
                                            Your software works for you. Automated alerts, shipping labels, and P&L calculations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-background-light dark:bg-black/50 p-8 flex items-center justify-center">
                                <div className="w-full font-mono text-[10px] bg-gray-900 text-gray-300 p-4 rounded-lg shadow-xl border border-gray-800">
                                    <div className="flex gap-2 mb-2 opacity-50">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <span className="text-purple-400">IF</span> status == <span className="text-green-400">"Approved"</span>:
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="pl-4"
                                        >
                                            <span className="text-blue-400">await</span> shipstation.createLabel();
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 }}
                                            className="pl-4"
                                        >
                                            <span className="text-blue-400">await</span> notify.slack(<span className="text-green-400">"#production"</span>);
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
