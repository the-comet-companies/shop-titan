'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    hero, steps, tracks, deliveries, pricing,
    comparisonFeatures, comparisonPricing, faqs,
    addOns, addOnBundlePrice, userPricing,
    type TrackId, type DeliveryId,
} from '@/lib/pricing-data';

function scrollTo(el: HTMLElement | null) {
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

export default function InteractivePricing() {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedTrack, setSelectedTrack] = useState<TrackId | null>(null);
    const [selectedDelivery, setSelectedDelivery] = useState<DeliveryId | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

    const step1Ref = useRef<HTMLDivElement>(null);
    const step2Ref = useRef<HTMLDivElement>(null);
    const step3Ref = useRef<HTMLDivElement>(null);
    const step4Ref = useRef<HTMLDivElement>(null);

    const stepRefs = [step1Ref, step2Ref, step3Ref, step4Ref];

    const handleTrackSelect = useCallback((id: TrackId) => {
        setSelectedTrack(id);
        setSelectedDelivery(null);
        setSelectedAddOns([]);
        setCurrentStep(1);
    }, []);

    const handleContinueToFeatures = useCallback(() => {
        setCurrentStep(2);
        setTimeout(() => scrollTo(step2Ref.current), 100);
    }, []);

    const handleTableGetPlan = useCallback((id: TrackId) => {
        setSelectedTrack(id);
        setSelectedDelivery(null);
        setSelectedAddOns([]);
        setCurrentStep(1);
        setTimeout(() => scrollTo(step1Ref.current), 100);
    }, []);

    const handleDeliverySelect = useCallback((id: DeliveryId) => {
        setSelectedDelivery(id);
        setCurrentStep(4);
        setTimeout(() => scrollTo(step4Ref.current), 100);
    }, []);

    const handleStepClick = useCallback((step: number) => {
        if (step <= currentStep) {
            scrollTo(stepRefs[step - 1].current);
        }
    }, [currentStep, stepRefs]);

    const handleContinueToDelivery = useCallback(() => {
        setCurrentStep(3);
        setTimeout(() => scrollTo(step3Ref.current), 100);
    }, []);

    const toggleAddOn = useCallback((id: string) => {
        setSelectedAddOns(prev => {
            if (id === 'all-in-pro') {
                // Select all or deselect all
                const allIds = addOns.map(a => a.id);
                return prev.length === allIds.length ? [] : allIds;
            }
            const next = prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id];
            // If all individual items selected, also mark all-in-pro
            const individualIds = addOns.filter(a => a.id !== 'all-in-pro').map(a => a.id);
            if (individualIds.every(i => next.includes(i)) && !next.includes('all-in-pro')) {
                return [...next, 'all-in-pro'];
            }
            return next.filter(i => i !== 'all-in-pro');
        });
    }, []);

    const allAddOnsSelected = selectedAddOns.length === addOns.length;
    const addOnMonthly = allAddOnsSelected
        ? addOnBundlePrice
        : addOns.filter(a => a.id !== 'all-in-pro' && selectedAddOns.includes(a.id)).reduce((sum, a) => sum + a.price, 0);

    const selectedPricing = selectedTrack && selectedDelivery
        ? pricing.find(p => p.track === selectedTrack && p.delivery === selectedDelivery)
        : null;

    const selectedTrackData = selectedTrack ? tracks.find(t => t.id === selectedTrack) : null;
    const selectedDeliveryData = selectedDelivery ? deliveries.find(d => d.id === selectedDelivery) : null;

    return (
        <div className="min-h-screen">
            {/* ===== HERO ===== */}
            <section className="pt-12 md:pt-16 pb-10 md:pb-14 bg-background-light dark:bg-background-dark">
                <div className="max-w-4xl mx-auto px-mobile text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-4"
                    >
                        {hero.headline}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8"
                    >
                        {hero.subheadline}
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        onClick={() => scrollTo(step1Ref.current)}
                        className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                    >
                        {hero.cta}
                        <span className="material-symbols-outlined text-lg">arrow_downward</span>
                    </motion.button>
                </div>
            </section>

            {/* ===== STICKY STEP INDICATOR ===== */}
            <div className="sticky top-0 z-30 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-structural-border dark:border-gray-800">
                <div className="max-w-3xl mx-auto px-mobile py-3">
                    <div className="flex items-center justify-between">
                        {steps.map((step, i) => {
                            const stepNum = step.id;
                            const isCompleted = currentStep > stepNum;
                            const isActive = currentStep === stepNum;
                            const isClickable = stepNum <= currentStep;

                            return (
                                <button
                                    key={step.id}
                                    onClick={() => handleStepClick(stepNum)}
                                    disabled={!isClickable}
                                    className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                                        isCompleted
                                            ? 'text-green-600 dark:text-green-400 cursor-pointer'
                                            : isActive
                                                ? 'text-primary cursor-pointer'
                                                : 'text-gray-300 dark:text-gray-700 cursor-default'
                                    }`}
                                >
                                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 ${
                                        isCompleted
                                            ? 'bg-green-600 dark:bg-green-500 border-green-600 dark:border-green-500 text-white'
                                            : isActive
                                                ? 'border-primary text-primary'
                                                : 'border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-700'
                                    }`}>
                                        {isCompleted ? (
                                            <span className="material-symbols-outlined text-sm">check</span>
                                        ) : stepNum}
                                    </span>
                                    <span className="hidden sm:inline">{step.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ===== STEP 1 - TRACK SELECTOR ===== */}
            <section ref={step1Ref} className="py-10 md:py-14 bg-background-light dark:bg-background-dark">
                <div className="max-w-5xl mx-auto px-mobile">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">Step 1</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight">
                            Choose Your Path
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {tracks.map((track) => (
                            <motion.button
                                key={track.id}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                onClick={() => handleTrackSelect(track.id)}
                                className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-300 group flex flex-col ${
                                    selectedTrack === track.id
                                        ? 'border-primary bg-primary/5 dark:bg-primary/10'
                                        : 'border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/50'
                                }`}
                            >
                                {track.badge && (
                                    <span className="absolute -top-3 left-6 px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                                        {track.badge}
                                    </span>
                                )}
                                {selectedTrack === track.id && (
                                    <span className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-sm">check</span>
                                    </span>
                                )}
                                <h3 className="text-xl font-bold text-charcoal dark:text-white mb-1">{track.name}</h3>
                                <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed mb-4">{track.tagline}</p>

                                <div className="space-y-1.5 mt-auto">
                                    {track.cardFeatures.map((f) => (
                                        <div key={f.name} className="flex items-center gap-2">
                                            <span className={`material-symbols-outlined text-sm flex-shrink-0 ${
                                                f.included ? 'text-primary' : 'text-gray-300 dark:text-gray-700'
                                            }`}>
                                                {f.included ? 'check' : 'close'}
                                            </span>
                                            <span className={`text-xs ${
                                                f.included
                                                    ? 'text-charcoal dark:text-gray-300'
                                                    : 'text-gray-400 dark:text-gray-600 line-through'
                                            }`}>
                                                {f.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Continue button after track selection */}
                    {selectedTrack && (
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mt-8"
                        >
                            <button
                                onClick={handleContinueToFeatures}
                                className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                            >
                                Continue
                                <span className="material-symbols-outlined text-lg">arrow_downward</span>
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* ===== STEP 2 - FEATURES ===== */}
            <AnimatePresence>
                {currentStep >= 2 && selectedTrackData && (
                    <motion.section
                        ref={step2Ref}
                        key={`features-${selectedTrack}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-surface dark:bg-gray-950 overflow-hidden"
                    >
                        <div className="border-t border-structural-border dark:border-gray-800" />
                        <div className="max-w-5xl mx-auto px-mobile py-16 md:py-20">
                            <div className="text-center mb-10">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">Step 2</span>
                                <h2 className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-2">
                                    What You Get With {selectedTrackData.name}
                                </h2>
                                <p className="text-secondary-text dark:text-gray-400">{selectedTrackData.tagline}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                {selectedTrackData.features.map((f, i) => (
                                    <motion.div
                                        key={f.name}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900"
                                    >
                                        <span className="material-symbols-outlined text-primary text-xl mb-2 block">{f.icon}</span>
                                        <h3 className="text-sm font-bold text-charcoal dark:text-white mb-1">{f.name}</h3>
                                        <p className="text-xs text-secondary-text dark:text-gray-400 leading-relaxed">{f.desc}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="text-center mt-10">
                                <button
                                    onClick={handleContinueToDelivery}
                                    className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                                >
                                    Continue
                                    <span className="material-symbols-outlined text-lg">arrow_downward</span>
                                </button>
                            </div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* ===== STEP 3 - DELIVERY MODEL ===== */}
            <AnimatePresence>
                {currentStep >= 3 && (
                    <motion.section
                        ref={step3Ref}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-background-light dark:bg-background-dark overflow-hidden"
                    >
                        <div className="border-t border-structural-border dark:border-gray-800" />
                        <div className="max-w-5xl mx-auto px-mobile py-16 md:py-20">
                            <div className="text-center mb-10">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">Step 3</span>
                                <h2 className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight">
                                    How Do You Want It Delivered?
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                {deliveries.map((d) => (
                                    <motion.button
                                        key={d.id}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        onClick={() => handleDeliverySelect(d.id)}
                                        className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 ${
                                            selectedDelivery === d.id
                                                ? 'border-primary bg-primary/5 dark:bg-primary/10'
                                                : 'border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/50'
                                        }`}
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="text-xl font-bold text-charcoal dark:text-white">{d.name}</h3>
                                            {selectedDelivery === d.id && (
                                                <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                                    <span className="material-symbols-outlined text-white text-sm">check</span>
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-secondary-text dark:text-gray-400 mb-4">{d.tagline}</p>
                                        <ul className="space-y-2">
                                            {d.includes.map((item) => (
                                                <li key={item} className="flex items-start gap-2 text-xs text-secondary-text dark:text-gray-400">
                                                    <span className="material-symbols-outlined text-primary text-sm mt-0.5 flex-shrink-0">check</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.button>
                                ))}
                            </div>

                            {/* Onboarding Timeline */}
                            <AnimatePresence>
                                {selectedDeliveryData && (
                                    <motion.div
                                        key={selectedDelivery}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mt-8"
                                    >
                                        <h3 className="text-lg font-bold text-charcoal dark:text-white mb-6 text-center">
                                            Your Onboarding Journey
                                        </h3>
                                        <div className="flex flex-wrap justify-center gap-3">
                                            {selectedDeliveryData.timeline.map((t, i) => (
                                                <div key={t.step} className="flex items-center gap-3">
                                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900">
                                                        <span className="text-[10px] font-bold text-primary">{t.step}</span>
                                                        <span className="text-xs font-medium text-charcoal dark:text-white">{t.label}</span>
                                                    </div>
                                                    {i < selectedDeliveryData.timeline.length - 1 && (
                                                        <span className="material-symbols-outlined text-gray-300 dark:text-gray-700 text-sm hidden sm:block">arrow_forward</span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* ===== STEP 4 - PRICING REVEAL ===== */}
            <AnimatePresence>
                {currentStep >= 4 && selectedPricing && selectedTrackData && selectedDeliveryData && (
                    <motion.section
                        ref={step4Ref}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-surface dark:bg-gray-950 overflow-hidden"
                    >
                        <div className="border-t border-structural-border dark:border-gray-800" />
                        <div className="max-w-3xl mx-auto px-mobile py-16 md:py-20">
                            <div className="text-center mb-10">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">Step 4</span>
                                <h2 className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight">
                                    Your Package
                                </h2>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-8 rounded-2xl border-2 border-primary bg-white dark:bg-gray-900"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                                        {selectedTrackData.name}
                                    </span>
                                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-secondary-text dark:text-gray-400 text-xs font-bold uppercase tracking-wider rounded-full">
                                        {selectedDeliveryData.name}
                                    </span>
                                </div>

                                <div className="grid grid-cols-3 gap-6 mb-8">
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary-text dark:text-gray-500 mb-1">Setup</p>
                                        <p className="text-2xl font-bold text-charcoal dark:text-white">{selectedPricing.setup}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary-text dark:text-gray-500 mb-1">Monthly</p>
                                        <p className="text-2xl font-bold text-charcoal dark:text-white">
                                            {selectedPricing.monthly}
                                            {addOnMonthly > 0 && (
                                                <span className="text-sm font-medium text-primary ml-1">+ ${addOnMonthly}/mo</span>
                                            )}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary-text dark:text-gray-500 mb-1">Timeline</p>
                                        <p className="text-2xl font-bold text-charcoal dark:text-white">{selectedPricing.timeline}</p>
                                    </div>
                                </div>

                                {/* User pricing */}
                                <div className="flex items-start gap-2 mb-6 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                                    <span className="material-symbols-outlined text-primary text-sm mt-0.5 flex-shrink-0">group</span>
                                    <div>
                                        <p className="text-xs font-bold text-charcoal dark:text-white mb-0.5">User Pricing</p>
                                        <p className="text-xs text-secondary-text dark:text-gray-400">
                                            {selectedTrack && userPricing[selectedTrack]}
                                        </p>
                                    </div>
                                </div>

                                <div className="border-t border-structural-border dark:border-gray-800 pt-6 mb-6">
                                    <p className="text-sm font-bold text-charcoal dark:text-white mb-4">Everything included:</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {selectedPricing.includes.map((item) => (
                                            <div key={item} className="flex items-start gap-2">
                                                <span className="material-symbols-outlined text-primary text-sm mt-0.5 flex-shrink-0">check</span>
                                                <span className="text-sm text-secondary-text dark:text-gray-400">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Add-ons */}
                                <div className="border-t border-structural-border dark:border-gray-800 pt-6 mb-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <p className="text-sm font-bold text-charcoal dark:text-white">Premium Automations</p>
                                        {allAddOnsSelected && (
                                            <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full">
                                                Bundle - ${addOnBundlePrice}/mo
                                            </span>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        {addOns.filter(a => a.id !== 'all-in-pro').map((addon) => (
                                            <label
                                                key={addon.id}
                                                className="flex items-center gap-3 cursor-pointer group"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedAddOns.includes(addon.id)}
                                                    onChange={() => toggleAddOn(addon.id)}
                                                    className="w-4 h-4 rounded-sm border-gray-300 dark:border-gray-600 accent-primary cursor-pointer"
                                                />
                                                <span className="text-sm text-charcoal dark:text-gray-300 group-hover:text-primary transition-colors flex-1">
                                                    {addon.name}
                                                </span>
                                                <span className="text-xs text-secondary-text dark:text-gray-500">
                                                    +${addon.price}/mo
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => toggleAddOn('all-in-pro')}
                                        className={`mt-4 w-full py-2 text-xs font-bold uppercase tracking-wider rounded-lg border transition-colors ${
                                            allAddOnsSelected
                                                ? 'bg-primary text-white border-primary'
                                                : 'border-structural-border dark:border-gray-700 text-secondary-text dark:text-gray-400 hover:border-primary hover:text-primary'
                                        }`}
                                    >
                                        {allAddOnsSelected ? 'All Add-ons Selected' : `Select All - $${addOnBundlePrice}/mo (save $${addOns.filter(a => a.id !== 'all-in-pro').reduce((s, a) => s + a.price, 0) - addOnBundlePrice}/mo)`}
                                    </button>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link
                                        href="/reach-out"
                                        className="flex-1 px-6 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors text-center inline-flex items-center justify-center gap-2"
                                    >
                                        {selectedDelivery === 'dfy' ? 'Book Your Discovery Call' : 'Get Started Now'}
                                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                    </Link>
                                </div>

                                <p className="text-xs text-secondary-text dark:text-gray-500 mt-4 text-center">
                                    No long-term contracts. Cancel with 30 days notice.
                                </p>
                            </motion.div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* ===== COMPARISON TABLE ===== */}
            <section className="py-10 md:py-14 bg-background-light dark:bg-background-dark">
                <div className="max-w-5xl mx-auto px-mobile">
                    <h2 className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-6 text-center">
                        Compare All Plans
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse min-w-[600px]">
                            <thead className="sticky top-[49px] z-10 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm shadow-sm">
                                <tr className="border-b-2 border-structural-border dark:border-gray-800 align-bottom">
                                    <th className="text-left pt-3 pb-5 px-3 w-1/4"></th>
                                    <th className="text-center pt-3 pb-5 px-3">
                                        <div className="flex flex-col items-center justify-end">
                                            <span className="text-[9px] text-transparent mb-0.5">&nbsp;</span>
                                            <span className="text-charcoal dark:text-white font-bold block mb-2">Website Only</span>
                                            <button onClick={() => { handleTableGetPlan('website'); }} className="px-3 py-1 text-xs font-bold border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors">Get Plan</button>
                                        </div>
                                    </th>
                                    <th className="text-center pt-3 pb-5 px-3">
                                        <div className="flex flex-col items-center justify-end">
                                            <span className="text-[9px] text-transparent mb-0.5">&nbsp;</span>
                                            <span className="text-charcoal dark:text-white font-bold block mb-2">FileMaker Only</span>
                                            <button onClick={() => { handleTableGetPlan('filemaker'); }} className="px-3 py-1 text-xs font-bold border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors">Get Plan</button>
                                        </div>
                                    </th>
                                    <th className="text-center pt-3 pb-5 px-3">
                                        <div className="flex flex-col items-center justify-end">
                                            <span className="inline-block px-2 py-0.5 bg-primary text-white text-[9px] font-bold uppercase tracking-wider rounded-full mb-0.5">Best Value</span>
                                            <span className="text-primary font-bold block mb-2">Website + FileMaker</span>
                                            <button onClick={() => { handleTableGetPlan('both'); }} className="px-3 py-1 text-xs font-bold bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">Get Plan</button>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Spacer row for sticky header gap */}
                                <tr><td colSpan={4} className="h-3"></td></tr>
                                {/* Pricing rows */}
                                {comparisonPricing.map((row) => (
                                    <tr key={row.label} className="border-b border-structural-border/50 dark:border-gray-800/50">
                                        <td className="py-2.5 px-3 text-xs font-bold text-secondary-text dark:text-gray-500 uppercase tracking-wider">{row.label}</td>
                                        <td className="py-2.5 px-3 text-center text-secondary-text dark:text-gray-400">{row.website}</td>
                                        <td className="py-2.5 px-3 text-center text-secondary-text dark:text-gray-400">{row.filemaker}</td>
                                        <td className="py-2.5 px-3 text-center font-medium text-charcoal dark:text-white">{row.both}</td>
                                    </tr>
                                ))}
                                {/* Feature rows */}
                                <tr className="border-b-2 border-structural-border dark:border-gray-800">
                                    <td colSpan={4} className="py-2 px-3 text-xs font-bold text-charcoal dark:text-white uppercase tracking-wider">Features</td>
                                </tr>
                                {comparisonFeatures.map((row) => (
                                    <tr key={row.label} className="border-b border-structural-border/50 dark:border-gray-800/50">
                                        <td className="py-2.5 px-3 text-sm text-secondary-text dark:text-gray-400">{row.label}</td>
                                        <td className="py-2.5 px-3 text-center">
                                            {row.website
                                                ? <span className="material-symbols-outlined text-primary text-lg">check</span>
                                                : <span className="material-symbols-outlined text-gray-300 dark:text-gray-700 text-lg">close</span>
                                            }
                                        </td>
                                        <td className="py-2.5 px-3 text-center">
                                            {row.filemaker
                                                ? <span className="material-symbols-outlined text-primary text-lg">check</span>
                                                : <span className="material-symbols-outlined text-gray-300 dark:text-gray-700 text-lg">close</span>
                                            }
                                        </td>
                                        <td className="py-2.5 px-3 text-center">
                                            {row.both
                                                ? <span className="material-symbols-outlined text-primary text-lg">check</span>
                                                : <span className="material-symbols-outlined text-gray-300 dark:text-gray-700 text-lg">close</span>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="py-10 md:py-14 bg-surface dark:bg-gray-950">
                <div className="max-w-3xl mx-auto px-mobile">
                    <h2 className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-10 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="border-t border-structural-border dark:border-gray-800">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-b border-structural-border dark:border-gray-800">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between py-5 text-left"
                                >
                                    <h3 className="text-base font-bold text-charcoal dark:text-white pr-4 leading-snug">{faq.question}</h3>
                                    <span className={`material-symbols-outlined text-xl text-secondary-text dark:text-gray-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                                        expand_more
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className="py-10 md:py-16 bg-background-light dark:bg-background-dark">
                <div className="max-w-3xl mx-auto px-mobile text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-secondary-text dark:text-gray-400 mb-8 max-w-xl mx-auto">
                        Book a free consultation. We will walk through your shop, show you the system, and tell you honestly whether it is a fit.
                    </p>
                    <Link
                        href="/reach-out"
                        className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                    >
                        Book a Free Consultation
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
