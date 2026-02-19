'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import BrowserFrame from '@/components/ui/BrowserFrame';

type TabId = 'intake' | 'proofing' | 'production' | 'fulfillment' | 'updates';

interface Tab {
    id: TabId;
    label: string;
    icon: string;
}

const TABS: Tab[] = [
    { id: 'intake', label: 'Intake', icon: 'download' },
    { id: 'proofing', label: 'Proofing', icon: 'visibility' },
    { id: 'production', label: 'Production', icon: 'print' },
    { id: 'fulfillment', label: 'Fulfillment', icon: 'package_2' },
    { id: 'updates', label: 'Updates', icon: 'mail' },
];

export default function WorkflowTabs() {
    const [activeTab, setActiveTab] = useState<TabId>('intake');
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "-20% 0px -20% 0px" });

    useEffect(() => {
        if (isPaused || !isInView) return;

        const timer = setTimeout(() => {
            setActiveTab((current) => {
                const currentIndex = TABS.findIndex(t => t.id === current);
                const nextIndex = (currentIndex + 1) % TABS.length;
                return TABS[nextIndex].id;
            });
        }, 3000);

        return () => clearTimeout(timer);
    }, [isPaused, activeTab, isInView]);

    return (
        <div
            ref={containerRef}
            className="mt-24 md:mt-32 max-w-5xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Tabs Navigation */}
            <div className="flex justify-center mb-8 md:mb-12 px-4">
                <div className="flex flex-wrap md:flex-nowrap items-center justify-center bg-zinc-100/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 rounded-2xl md:rounded-full p-1.5 gap-1 md:gap-0 shadow-sm max-w-full md:overflow-x-auto md:no-scrollbar">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "group relative flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-lg md:rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 z-10 whitespace-nowrap",
                                activeTab === tab.id
                                    ? "text-zinc-900 dark:text-white"
                                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                            )}
                        >
                            <span className="material-symbols-outlined text-base md:text-lg relative z-20">
                                {tab.icon}
                            </span>
                            <span className="relative z-20">{tab.label}</span>

                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-lg md:rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-black/5 dark:border-white/5 z-0"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                >
                                    {!isPaused && isInView && (
                                        <motion.div
                                            layoutId="progress"
                                            className="absolute top-0 left-0 h-full w-full bg-zinc-900/5 dark:bg-white/10 rounded-lg md:rounded-full"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            style={{ transformOrigin: 'left' }}
                                            transition={{ duration: 3, ease: "linear" }}
                                        />
                                    )}
                                </motion.div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <BrowserFrame url={`app.shoptitan.com/${activeTab}`}>
                            <div className="p-6 md:p-8 bg-background-light dark:bg-black/90 min-h-[400px] flex flex-col">
                                {activeTab === 'intake' && <IntakeContent />}
                                {activeTab === 'proofing' && <ProofingContent />}
                                {activeTab === 'production' && <ProductionContent />}
                                {activeTab === 'fulfillment' && <FulfillmentContent />}
                                {activeTab === 'updates' && <UpdatesContent />}
                            </div>
                        </BrowserFrame>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

function IntakeContent() {
    return (
        <div className="space-y-4 max-w-2xl mx-auto w-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg dark:text-white">Incoming Orders</h3>
                <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded-full font-mono">
                    Auto-Processing Active
                </span>
            </div>
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 bg-white dark:bg-gray-800/50 rounded-lg border border-structural-border dark:border-gray-700 flex items-center justify-between"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                            <span className="material-symbols-outlined">shopping_cart</span>
                        </div>
                        <div>
                            <div className="font-medium text-sm dark:text-gray-200">Order #{9000 + i}</div>
                            <div className="text-xs text-secondary-text">Shopify Ã¢â‚¬Â¢ 2 items</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-xs font-bold text-primary">Syncing...</div>
                        <div className="text-[10px] text-secondary-text">0.2s ago</div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

function ProofingContent() {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-6">
            <div className="relative w-full max-w-md aspect-[4/3] bg-white dark:bg-gray-800/30 rounded-lg border border-structural-border dark:border-gray-700 p-4 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="text-center">
                    <span className="material-symbols-outlined text-6xl text-gray-300 mb-2">image</span>
                    <p className="text-xs text-secondary-text uppercase tracking-widest">Art Preview</p>
                </div>
                {/* Simulated annotations */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center bg-green-500/10"
                >
                    <span className="material-symbols-outlined text-xs text-green-500">check</span>
                </motion.div>
            </div>
            <div className="flex gap-4">
                <button className="px-6 py-2 bg-red-500/10 text-red-500 rounded-lg text-sm font-bold hover:bg-red-500/20 transition-colors">
                    Reject
                </button>
                <button className="px-6 py-2 bg-green-500 text-white rounded-lg text-sm font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20">
                    Auto-Approve
                </button>
            </div>
        </div>
    );
}

function ProductionContent() {
    return (
        <div className="grid grid-cols-2 gap-4 h-full">
            {['DTG-01', 'DTG-02', 'Embroidery-01', 'HeatPress-01'].map((machine, i) => (
                <motion.div
                    key={machine}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 bg-white dark:bg-gray-800/50 rounded-lg border border-structural-border dark:border-gray-700 flex flex-col justify-between"
                >
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold uppercase text-secondary-text">{machine}</span>
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="dark:text-gray-300">Job #402{i}</span>
                            <span className="font-mono text-primary">{(45 + i * 12)}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${45 + i * 12}%` }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-primary rounded-full"
                            />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

function FulfillmentContent() {
    return (
        <div className="max-w-md mx-auto w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-structural-border dark:border-gray-700 overflow-hidden my-auto">
            <div className="p-4 border-b border-structural-border dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">local_shipping</span>
                    <span className="font-bold text-sm dark:text-white">USPS Priority</span>
                </div>
                <span className="text-xs font-mono text-secondary-text">TRK: 94001000...</span>
            </div>
            <div className="p-6 flex flex-col items-center">
                <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">qr_code_2</span>
                <div className="w-full space-y-2">
                    <div className="flex justify-between text-xs">
                        <span className="text-secondary-text">From:</span>
                        <span className="font-medium dark:text-gray-300">Shop Titan Fulfillment</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span className="text-secondary-text">To:</span>
                        <span className="font-medium dark:text-gray-300">Customer (Miami, FL)</span>
                    </div>
                </div>
                <button className="mt-6 w-full py-2 bg-primary/10 text-primary rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-primary/20 transition-colors">
                    Print Label
                </button>
            </div>
        </div>
    );
}

function UpdatesContent() {
    return (
        <div className="space-y-0 divide-y divide-structural-border dark:divide-gray-700">
            {[
                { event: 'Order Delivered', time: '2m ago', icon: 'check_circle', color: 'text-green-500' },
                { event: 'Shipment Created', time: '15m ago', icon: 'local_shipping', color: 'text-blue-500' },
                { event: 'Production Completed', time: '1h ago', icon: 'fact_check', color: 'text-purple-500' },
                { event: 'Art Approved', time: '2h ago', icon: 'palette', color: 'text-orange-500' },
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 ${item.color}`}>
                        <span className="material-symbols-outlined text-lg">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                        <div className="text-sm font-bold dark:text-gray-200">{item.event}</div>
                        <div className="text-xs text-secondary-text">Order #9000 Ã¢â‚¬Â¢ Automated Update</div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">{item.time}</div>
                </motion.div>
            ))}
        </div>
    );
}
