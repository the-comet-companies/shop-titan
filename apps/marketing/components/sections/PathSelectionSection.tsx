'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import WebsiteFeaturesSection from './WebsiteFeaturesSection';
import FeaturesSection from './FeaturesSection';

const tabs = [
    {
        id: 'website',
        label: 'Website Only',
        icon: 'language',
    },
    {
        id: 'filemaker',
        label: 'FileMaker Only',
        icon: 'database',
    },
    {
        id: 'both',
        label: 'Website + FileMaker',
        icon: 'hub',
    },
];

export default function PathSelectionSection() {
    const [activeTab, setActiveTab] = useState('website');

    return (
        <section id="solutions" className="pt-16 md:pt-20 bg-background-light dark:bg-background-dark relative">
            <div className="max-w-7xl mx-auto px-mobile">
                <div className="text-center mb-10 md:mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl md:text-5xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-4"
                    >
                        Solutions That Scale With You
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Start with what you need. Expand as your business grows.
                    </motion.p>
                </div>

                {/* Tabs */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-2 md:mb-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                                activeTab === tab.id
                                    ? 'bg-primary text-white'
                                    : 'border border-structural-border dark:border-gray-700 text-secondary-text hover:text-charcoal dark:hover:text-white hover:border-primary/30'
                            }`}
                        >
                            <span className="material-symbols-outlined text-base">{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
                {(activeTab === 'website' || activeTab === 'both') && (
                    <motion.div
                        key="website"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <WebsiteFeaturesSection />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {(activeTab === 'filemaker' || activeTab === 'both') && (
                    <motion.div
                        key="filemaker"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FeaturesSection />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
