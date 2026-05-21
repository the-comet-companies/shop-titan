'use client';

import { useState, useRef, useCallback } from 'react';
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

const PRICING_WEBHOOK_URL = 'https://n8n-dtla-c914de1950b9.herokuapp.com/webhook/0af2fe66-41e7-4a1d-b9be-73d8b2c1a72a';

export default function InteractivePricing() {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedTrack, setSelectedTrack] = useState<TrackId | null>(null);
    const [selectedDelivery, setSelectedDelivery] = useState<DeliveryId | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

    // Save-my-configuration mini-form state
    const [configEmail, setConfigEmail] = useState('');
    const [configStatus, setConfigStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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
        if (step <= currentStep) scrollTo(stepRefs[step - 1].current);
    }, [currentStep, stepRefs]);

    const handleContinueToDelivery = useCallback(() => {
        setCurrentStep(3);
        setTimeout(() => scrollTo(step3Ref.current), 100);
    }, []);

    const handleConfigSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!configEmail || !selectedTrack || !selectedDelivery) return;

        setConfigStatus('submitting');

        const trackData = tracks.find(t => t.id === selectedTrack);
        const deliveryData = deliveries.find(d => d.id === selectedDelivery);
        const priceData = pricing.find(p => p.track === selectedTrack && p.delivery === selectedDelivery);
        const addOnNames = addOns
            .filter(a => a.id !== 'all-in-pro' && selectedAddOns.includes(a.id))
            .map(a => a.name);
        const addOnTotal = selectedAddOns.length === addOns.length
            ? addOnBundlePrice
            : addOns.filter(a => a.id !== 'all-in-pro' && selectedAddOns.includes(a.id)).reduce((s, a) => s + a.price, 0);

        try {
            await fetch(PRICING_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    source: 'pricing_configurator',
                    email: configEmail,
                    track: selectedTrack,
                    trackName: trackData?.name,
                    delivery: selectedDelivery,
                    deliveryName: deliveryData?.name,
                    setup: priceData?.setup,
                    monthly: priceData?.monthly,
                    timeline: priceData?.timeline,
                    addOns: addOnNames,
                    addOnMonthly: addOnTotal,
                    userPricingNote: userPricing[selectedTrack],
                    timestamp: new Date().toISOString(),
                }),
            });
            setConfigStatus('success');
        } catch (err) {
            console.error('Pricing configurator submit failed:', err);
            setConfigStatus('error');
        }
    }, [configEmail, selectedTrack, selectedDelivery, selectedAddOns]);

    const toggleAddOn = useCallback((id: string) => {
        setSelectedAddOns(prev => {
            if (id === 'all-in-pro') {
                const allIds = addOns.map(a => a.id);
                return prev.length === allIds.length ? [] : allIds;
            }
            const next = prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id];
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
        <div className="min-h-screen bg-ivory">

            {/* ===== HERO ===== */}
            <section className="pt-24 md:pt-32 pb-16 md:pb-20">
                <div className="max-w-7xl mx-auto px-mobile">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                        <div className="lg:col-span-5">
                            <motion.span
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="inline-block text-[11px] tracking-[0.22em] uppercase text-graphite font-medium mb-6"
                            >
                                Pricing
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.05 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-light text-charcoal leading-[1.05] tracking-tight"
                            >
                                {hero.headline.split(',').map((part, i, arr) => (
                                    <span key={i}>
                                        {i === arr.length - 1 ? (
                                            <span className="italic font-extralight text-graphite">{part}</span>
                                        ) : (
                                            <>{part},</>
                                        )}
                                    </span>
                                ))}
                            </motion.h1>
                        </div>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="lg:col-span-7 lg:pt-2 text-lg md:text-xl text-graphite leading-relaxed font-light max-w-2xl"
                        >
                            {hero.subheadline}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ===== STICKY STEP INDICATOR ===== */}
            <div className="sticky top-0 z-30 bg-ivory/90 backdrop-blur-md border-y border-line">
                <div className="max-w-4xl mx-auto px-mobile">
                    <div className="grid grid-cols-4">
                        {steps.map((step) => {
                            const stepNum = step.id;
                            const isCompleted = currentStep > stepNum;
                            const isActive = currentStep === stepNum;
                            const isClickable = stepNum <= currentStep;

                            return (
                                <button
                                    key={step.id}
                                    onClick={() => handleStepClick(stepNum)}
                                    disabled={!isClickable}
                                    className={`relative py-4 text-left transition-colors group ${
                                        isClickable ? 'cursor-pointer' : 'cursor-default'
                                    }`}
                                >
                                    <span
                                        className={`absolute top-0 inset-x-0 h-px transition-colors ${
                                            isActive || isCompleted ? 'bg-charcoal' : 'bg-transparent'
                                        }`}
                                    />
                                    <div className="flex items-baseline gap-2">
                                        <span
                                            className={`text-[10px] tracking-[0.22em] uppercase font-medium ${
                                                isActive || isCompleted ? 'text-charcoal' : 'text-graphite/60'
                                            }`}
                                        >
                                            {String(stepNum).padStart(2, '0')}
                                        </span>
                                        <span
                                            className={`hidden sm:inline text-xs font-light tracking-tight ${
                                                isActive ? 'text-charcoal' : isCompleted ? 'text-graphite' : 'text-graphite/60'
                                            }`}
                                        >
                                            {step.label}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ===== STEP 1 - TRACK SELECTOR ===== */}
            <section ref={step1Ref} className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-mobile">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
                        <div className="lg:col-span-5">
                            <span className="inline-block text-[11px] tracking-[0.22em] uppercase text-graphite font-medium mb-6">
                                Step 01
                            </span>
                            <h2 className="text-3xl md:text-4xl font-light text-charcoal leading-tight tracking-tight">
                                Choose your path.
                            </h2>
                        </div>
                        <p className="lg:col-span-7 lg:pt-2 text-base md:text-lg text-graphite leading-relaxed font-light max-w-xl">
                            Three tracks. Pick the one that matches what your shop needs today &mdash; you can add the other later.
                        </p>
                    </div>

                    <div className="border-t border-line">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {tracks.map((track, idx) => {
                                const isSelected = selectedTrack === track.id;
                                const isMiddle = idx === 1;
                                return (
                                    <button
                                        key={track.id}
                                        onClick={() => handleTrackSelect(track.id)}
                                        className={`relative text-left py-10 md:py-12 px-6 md:px-8 border-b md:border-b-0 border-line transition-colors ${
                                            isMiddle ? 'md:border-x' : ''
                                        } ${isSelected ? 'bg-stone' : 'hover:bg-stone/40'}`}
                                    >
                                        {isSelected && (
                                            <span className="absolute top-0 inset-x-0 h-0.5 bg-charcoal" />
                                        )}
                                        <div className="flex items-baseline justify-between mb-4">
                                            <span className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium">
                                                {track.badge ?? `Track ${String(idx + 1).padStart(2, '0')}`}
                                            </span>
                                            {isSelected && (
                                                <span
                                                    className="material-symbols-outlined text-charcoal text-base"
                                                    style={{ fontVariationSettings: "'wght' 250" }}
                                                >
                                                    check
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-light text-charcoal tracking-tight mb-2">
                                            {track.name}
                                        </h3>
                                        <p className="text-sm text-graphite leading-relaxed font-light mb-6">
                                            {track.tagline}
                                        </p>

                                        <ul className="space-y-2">
                                            {track.cardFeatures.map((f) => (
                                                <li key={f.name} className="flex items-start gap-2">
                                                    <span
                                                        className={`material-symbols-outlined text-base flex-shrink-0 mt-0.5 ${
                                                            f.included ? 'text-charcoal' : 'text-line'
                                                        }`}
                                                        style={{ fontVariationSettings: "'wght' 250" }}
                                                    >
                                                        {f.included ? 'check' : 'close'}
                                                    </span>
                                                    <span
                                                        className={`text-sm font-light ${
                                                            f.included ? 'text-charcoal' : 'text-graphite/60 line-through'
                                                        }`}
                                                    >
                                                        {f.name}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {selectedTrack && (
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-10 flex justify-center"
                        >
                            <button
                                onClick={handleContinueToFeatures}
                                className="px-7 py-3.5 bg-charcoal text-ivory text-sm tracking-wide font-medium rounded-[6px] hover:bg-black transition-colors inline-flex items-center justify-center gap-2 group"
                            >
                                <span>Continue</span>
                                <span
                                    className="material-symbols-outlined text-base group-hover:translate-y-0.5 transition-transform"
                                    style={{ fontVariationSettings: "'wght' 250" }}
                                >
                                    arrow_downward
                                </span>
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
                        className="bg-ivory overflow-hidden border-t border-line"
                    >
                        <div className="max-w-7xl mx-auto px-mobile py-16 md:py-20">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
                                <div className="lg:col-span-5">
                                    <span className="inline-block text-[11px] tracking-[0.22em] uppercase text-graphite font-medium mb-6">
                                        Step 02
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-light text-charcoal leading-tight tracking-tight">
                                        What you get with{' '}
                                        <span className="italic font-extralight text-graphite">{selectedTrackData.name}.</span>
                                    </h2>
                                </div>
                                <p className="lg:col-span-7 lg:pt-2 text-base md:text-lg text-graphite leading-relaxed font-light max-w-xl">
                                    {selectedTrackData.tagline}
                                </p>
                            </div>

                            <div className="border-t border-line">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                                    {selectedTrackData.features.map((f, i) => (
                                        <motion.div
                                            key={f.name}
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.04 }}
                                            className={`py-8 md:py-10 px-6 border-b border-line ${
                                                (i + 1) % 4 !== 0 ? 'lg:border-r' : ''
                                            } ${i % 2 !== 0 ? 'sm:border-r-0 lg:border-r' : ''} ${
                                                i % 2 === 0 ? 'sm:border-r lg:border-r' : ''
                                            }`}
                                        >
                                            <span
                                                className="material-symbols-outlined text-charcoal text-xl mb-4 block"
                                                style={{ fontVariationSettings: "'wght' 250" }}
                                            >
                                                {f.icon}
                                            </span>
                                            <h3 className="text-sm font-medium text-charcoal tracking-tight mb-2">{f.name}</h3>
                                            <p className="text-xs text-graphite leading-relaxed font-light">{f.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-10 flex justify-center">
                                <button
                                    onClick={handleContinueToDelivery}
                                    className="px-7 py-3.5 bg-charcoal text-ivory text-sm tracking-wide font-medium rounded-[6px] hover:bg-black transition-colors inline-flex items-center justify-center gap-2 group"
                                >
                                    <span>Continue</span>
                                    <span
                                        className="material-symbols-outlined text-base group-hover:translate-y-0.5 transition-transform"
                                        style={{ fontVariationSettings: "'wght' 250" }}
                                    >
                                        arrow_downward
                                    </span>
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
                        className="bg-ivory overflow-hidden border-t border-line"
                    >
                        <div className="max-w-7xl mx-auto px-mobile py-16 md:py-20">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
                                <div className="lg:col-span-5">
                                    <span className="inline-block text-[11px] tracking-[0.22em] uppercase text-graphite font-medium mb-6">
                                        Step 03
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-light text-charcoal leading-tight tracking-tight">
                                        How do you want it{' '}
                                        <span className="italic font-extralight text-graphite">delivered?</span>
                                    </h2>
                                </div>
                                <p className="lg:col-span-7 lg:pt-2 text-base md:text-lg text-graphite leading-relaxed font-light max-w-xl">
                                    Two paths to live: hand it over to our team or stay close and configure with us.
                                </p>
                            </div>

                            <div className="border-t border-line">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    {deliveries.map((d, idx) => {
                                        const isSelected = selectedDelivery === d.id;
                                        return (
                                            <button
                                                key={d.id}
                                                onClick={() => handleDeliverySelect(d.id)}
                                                className={`group relative text-left py-10 md:py-12 px-6 md:px-8 border-b md:border-b-0 border-line transition-colors ${
                                                    idx === 0 ? 'md:border-r' : ''
                                                } ${isSelected ? 'bg-stone' : 'hover:bg-stone'}`}
                                            >
                                                <span
                                                    className={`absolute top-0 inset-x-0 transition-all ${
                                                        isSelected
                                                            ? 'h-0.5 bg-charcoal'
                                                            : 'h-px bg-transparent group-hover:bg-charcoal/40'
                                                    }`}
                                                />
                                                <div className="flex items-baseline justify-between mb-4">
                                                    <span
                                                        className={`text-[10px] tracking-[0.22em] uppercase font-medium transition-colors ${
                                                            isSelected ? 'text-charcoal' : 'text-graphite group-hover:text-charcoal'
                                                        }`}
                                                    >
                                                        Delivery {String(idx + 1).padStart(2, '0')}
                                                    </span>
                                                    <span
                                                        className={`material-symbols-outlined text-base transition-all ${
                                                            isSelected
                                                                ? 'text-charcoal opacity-100'
                                                                : 'text-charcoal opacity-0 group-hover:opacity-40 group-hover:translate-x-0 -translate-x-1'
                                                        }`}
                                                        style={{ fontVariationSettings: "'wght' 250" }}
                                                    >
                                                        {isSelected ? 'check' : 'arrow_forward'}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-light text-charcoal tracking-tight mb-2">
                                                    {d.name}
                                                </h3>
                                                <p className="text-sm text-graphite leading-relaxed font-light mb-6">{d.tagline}</p>
                                                <ul className="space-y-2">
                                                    {d.includes.map((item) => (
                                                        <li key={item} className="flex items-start gap-2 text-sm text-charcoal font-light">
                                                            <span
                                                                className="material-symbols-outlined text-charcoal text-base mt-0.5 flex-shrink-0"
                                                                style={{ fontVariationSettings: "'wght' 250" }}
                                                            >
                                                                check
                                                            </span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {selectedDeliveryData && (
                                <motion.div
                                    key={selectedDelivery}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-14"
                                >
                                    <p className="text-center text-[11px] tracking-[0.22em] uppercase text-graphite font-medium mb-6">
                                        Onboarding Journey
                                    </p>
                                    <div className="border-t border-line">
                                        <div className="grid grid-cols-2 md:grid-cols-4">
                                            {selectedDeliveryData.timeline.map((t, i, arr) => (
                                                <div
                                                    key={t.step}
                                                    className={`py-6 px-4 border-b border-line ${
                                                        i < arr.length - 1 ? 'md:border-r' : ''
                                                    } ${i % 2 === 0 ? 'border-r md:border-r' : ''}`}
                                                >
                                                    <span className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium block mb-2">
                                                        {t.step}
                                                    </span>
                                                    <span className="text-sm text-charcoal font-light tracking-tight">
                                                        {t.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
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
                        className="bg-ivory overflow-hidden border-t border-line"
                    >
                        <div className="max-w-5xl mx-auto px-mobile py-16 md:py-20">
                            <div className="text-center mb-12">
                                <span className="inline-block text-[11px] tracking-[0.22em] uppercase text-graphite font-medium mb-4">
                                    Step 04
                                </span>
                                <h2 className="text-3xl md:text-4xl font-light text-charcoal leading-tight tracking-tight">
                                    Your{' '}
                                    <span className="italic font-extralight text-graphite">package.</span>
                                </h2>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="border border-line bg-white rounded-[8px] overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.02),0_20px_60px_-30px_rgba(0,0,0,0.08)]"
                            >
                                {/* Header bar with track + delivery */}
                                <div className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-line bg-ivory/60">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] tracking-[0.22em] uppercase text-charcoal font-medium">
                                            {selectedTrackData.name}
                                        </span>
                                        <span className="text-graphite/40">|</span>
                                        <span className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium">
                                            {selectedDeliveryData.name}
                                        </span>
                                    </div>
                                </div>

                                {/* Pricing numbers */}
                                <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
                                    <div className="py-8 md:py-10 px-6 md:px-8">
                                        <p className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium mb-3">
                                            Setup
                                        </p>
                                        <p className="text-3xl md:text-4xl text-charcoal font-extralight tracking-tight leading-none">
                                            {selectedPricing.setup}
                                        </p>
                                    </div>
                                    <div className="py-8 md:py-10 px-6 md:px-8">
                                        <p className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium mb-3">
                                            Monthly
                                        </p>
                                        <p className="text-3xl md:text-4xl text-charcoal font-extralight tracking-tight leading-none">
                                            {selectedPricing.monthly}
                                        </p>
                                        {addOnMonthly > 0 && (
                                            <p className="text-xs text-graphite font-light mt-2">
                                                + ${addOnMonthly}/mo add-ons
                                            </p>
                                        )}
                                    </div>
                                    <div className="py-8 md:py-10 px-6 md:px-8">
                                        <p className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium mb-3">
                                            Timeline
                                        </p>
                                        <p className="text-3xl md:text-4xl text-charcoal font-extralight tracking-tight leading-none">
                                            {selectedPricing.timeline}
                                        </p>
                                    </div>
                                </div>

                                {/* User pricing */}
                                <div className="px-6 md:px-8 py-5 border-b border-line bg-stone/40">
                                    <div className="flex items-start gap-3">
                                        <span
                                            className="material-symbols-outlined text-graphite text-base mt-0.5"
                                            style={{ fontVariationSettings: "'wght' 250" }}
                                        >
                                            group
                                        </span>
                                        <div>
                                            <p className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium mb-1">
                                                User Pricing
                                            </p>
                                            <p className="text-sm text-charcoal font-light">
                                                {selectedTrack && userPricing[selectedTrack]}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Includes */}
                                <div className="px-6 md:px-8 py-8 border-b border-line">
                                    <p className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium mb-5">
                                        Everything Included
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                                        {selectedPricing.includes.map((item) => (
                                            <div key={item} className="flex items-start gap-2">
                                                <span
                                                    className="material-symbols-outlined text-charcoal text-base mt-0.5 flex-shrink-0"
                                                    style={{ fontVariationSettings: "'wght' 250" }}
                                                >
                                                    check
                                                </span>
                                                <span className="text-sm text-charcoal font-light leading-relaxed">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Add-ons */}
                                <div className="px-6 md:px-8 py-8 border-b border-line">
                                    <div className="flex items-center justify-between mb-5">
                                        <p className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium">
                                            Premium Automations
                                        </p>
                                        {allAddOnsSelected && (
                                            <span className="text-[10px] tracking-[0.22em] uppercase text-charcoal font-medium">
                                                Bundle ${addOnBundlePrice}/mo
                                            </span>
                                        )}
                                    </div>
                                    <div className="space-y-1">
                                        {addOns.filter(a => a.id !== 'all-in-pro').map((addon) => {
                                            const isChecked = selectedAddOns.includes(addon.id);
                                            return (
                                                <label
                                                    key={addon.id}
                                                    className="flex items-center justify-between gap-3 cursor-pointer group py-2 border-b border-line/60 last:border-b-0"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <input
                                                            type="checkbox"
                                                            checked={isChecked}
                                                            onChange={() => toggleAddOn(addon.id)}
                                                            className="w-4 h-4 border-line accent-charcoal cursor-pointer"
                                                        />
                                                        <span className="text-sm text-charcoal font-light group-hover:text-black transition-colors">
                                                            {addon.name}
                                                        </span>
                                                    </div>
                                                    <span className="text-xs text-graphite font-light">
                                                        +${addon.price}/mo
                                                    </span>
                                                </label>
                                            );
                                        })}
                                    </div>
                                    <button
                                        onClick={() => toggleAddOn('all-in-pro')}
                                        className={`mt-5 w-full py-3 text-[11px] tracking-[0.22em] uppercase font-medium rounded-[6px] border transition-colors ${
                                            allAddOnsSelected
                                                ? 'bg-charcoal text-ivory border-charcoal'
                                                : 'border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory'
                                        }`}
                                    >
                                        {allAddOnsSelected ? 'All add-ons selected' : `Select all - $${addOnBundlePrice}/mo`}
                                    </button>
                                </div>

                                {/* Save configuration mini-form */}
                                <div className="px-6 md:px-8 py-8 border-b border-line bg-stone/30">
                                    {configStatus === 'success' ? (
                                        <div className="flex items-start gap-3">
                                            <span
                                                className="material-symbols-outlined text-charcoal text-base mt-0.5"
                                                style={{ fontVariationSettings: "'wght' 250" }}
                                            >
                                                check_circle
                                            </span>
                                            <div>
                                                <p className="text-[10px] tracking-[0.22em] uppercase text-charcoal font-medium mb-1">
                                                    Configuration sent
                                                </p>
                                                <p className="text-sm text-graphite font-light">
                                                    We received your selections at {configEmail}. We will be in touch within one business day.
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <p className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium mb-2">
                                                Save this configuration
                                            </p>
                                            <p className="text-sm text-charcoal font-light mb-5">
                                                Email this exact package to your inbox and our team will reach out with next steps.
                                            </p>
                                            <form
                                                onSubmit={handleConfigSubmit}
                                                className="flex flex-col sm:flex-row gap-2"
                                            >
                                                <input
                                                    type="email"
                                                    required
                                                    value={configEmail}
                                                    onChange={(e) => setConfigEmail(e.target.value)}
                                                    placeholder="you@yourshop.com"
                                                    disabled={configStatus === 'submitting'}
                                                    className="flex-1 min-h-[44px] px-4 py-3 bg-white border border-line text-charcoal placeholder-graphite/60 text-sm font-light rounded-[6px] focus:outline-none focus:border-charcoal transition-colors disabled:opacity-50"
                                                />
                                                <button
                                                    type="submit"
                                                    disabled={configStatus === 'submitting' || !configEmail}
                                                    className="min-h-[44px] px-6 py-3 bg-charcoal text-ivory text-sm tracking-wide font-medium rounded-[6px] hover:bg-black transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {configStatus === 'submitting' ? 'Sending...' : 'Send'}
                                                    {configStatus !== 'submitting' && (
                                                        <span
                                                            className="material-symbols-outlined text-base"
                                                            style={{ fontVariationSettings: "'wght' 250" }}
                                                        >
                                                            arrow_forward
                                                        </span>
                                                    )}
                                                </button>
                                            </form>
                                            {configStatus === 'error' && (
                                                <p className="text-xs text-rust font-light mt-3">
                                                    Something went wrong. Please try again or use the contact form below.
                                                </p>
                                            )}
                                        </>
                                    )}
                                </div>

                                {/* CTA */}
                                <div className="px-6 md:px-8 py-8">
                                    <Link
                                        href="/reach-out"
                                        className="w-full px-7 py-3.5 bg-charcoal text-ivory text-sm tracking-wide font-medium rounded-[6px] hover:bg-black transition-colors inline-flex items-center justify-center gap-2 group"
                                    >
                                        <span>{selectedDelivery === 'dfy' ? 'Book Your Discovery Call' : 'Get Started Now'}</span>
                                        <span
                                            className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform"
                                            style={{ fontVariationSettings: "'wght' 250" }}
                                        >
                                            arrow_forward
                                        </span>
                                    </Link>
                                    <p className="text-xs text-graphite font-light mt-4 text-center">
                                        No long-term contracts. Cancel with 30 days notice.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* ===== COMPARISON TABLE ===== */}
            <section className="border-t border-line py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-mobile">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
                        <div className="lg:col-span-5">
                            <span className="inline-block text-[11px] tracking-[0.22em] uppercase text-graphite font-medium mb-6">
                                Compare
                            </span>
                            <h2 className="text-3xl md:text-4xl font-light text-charcoal leading-tight tracking-tight">
                                All plans,{' '}
                                <span className="italic font-extralight text-graphite">side by side.</span>
                            </h2>
                        </div>
                        <p className="lg:col-span-7 lg:pt-2 text-base md:text-lg text-graphite leading-relaxed font-light max-w-xl">
                            What is included in each track at a glance. Pricing, features, and what is on the roadmap.
                        </p>
                    </div>

                    <div className="overflow-x-auto border-t border-line">
                        <table className="w-full text-sm border-collapse min-w-[640px]">
                            <thead className="sticky top-[48px] z-10 bg-ivory/95 backdrop-blur-sm">
                                <tr className="border-b border-line align-bottom">
                                    <th className="text-left pt-6 pb-5 px-4 w-1/4"></th>
                                    {(['website', 'filemaker', 'both'] as TrackId[]).map((trackId) => {
                                        const isPreferred = trackId === 'both';
                                        return (
                                            <th key={trackId} className="text-center pt-6 pb-5 px-4">
                                                <div className="flex flex-col items-center gap-3">
                                                    <span className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium">
                                                        {isPreferred ? 'Recommended' : `Track ${trackId === 'website' ? '01' : '02'}`}
                                                    </span>
                                                    <span className={`font-medium tracking-tight ${isPreferred ? 'text-charcoal' : 'text-graphite'}`}>
                                                        {trackId === 'website' ? 'Website Only' : trackId === 'filemaker' ? 'FileMaker Only' : 'Website + FileMaker'}
                                                    </span>
                                                    <button
                                                        onClick={() => handleTableGetPlan(trackId)}
                                                        className={`px-4 py-2 text-[11px] tracking-[0.22em] uppercase font-medium rounded-[6px] transition-colors ${
                                                            isPreferred
                                                                ? 'bg-charcoal text-ivory hover:bg-black'
                                                                : 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory'
                                                        }`}
                                                    >
                                                        Get Plan
                                                    </button>
                                                </div>
                                            </th>
                                        );
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td colSpan={4} className="h-4"></td></tr>
                                {comparisonPricing.map((row) => (
                                    <tr key={row.label} className="border-b border-line">
                                        <td className="py-3 px-4 text-[10px] tracking-[0.22em] uppercase text-graphite font-medium">
                                            {row.label}
                                        </td>
                                        <td className="py-3 px-4 text-center text-sm text-graphite font-light">{row.website}</td>
                                        <td className="py-3 px-4 text-center text-sm text-graphite font-light">{row.filemaker}</td>
                                        <td className="py-3 px-4 text-center text-sm text-charcoal font-medium">{row.both}</td>
                                    </tr>
                                ))}
                                <tr className="border-b border-line">
                                    <td colSpan={4} className="py-3 px-4 text-[10px] tracking-[0.22em] uppercase text-charcoal font-medium">
                                        Features
                                    </td>
                                </tr>
                                {comparisonFeatures.map((row) => (
                                    <tr key={row.label} className="border-b border-line">
                                        <td className="py-3 px-4 text-sm text-charcoal font-light">{row.label}</td>
                                        {[row.website, row.filemaker, row.both].map((val, i) => (
                                            <td key={i} className="py-3 px-4 text-center">
                                                <span
                                                    className={`material-symbols-outlined text-base ${
                                                        val ? 'text-charcoal' : 'text-line'
                                                    }`}
                                                    style={{ fontVariationSettings: "'wght' 250" }}
                                                >
                                                    {val ? 'check' : 'close'}
                                                </span>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="border-t border-line py-20 md:py-24">
                <div className="max-w-4xl mx-auto px-mobile">
                    <div className="mb-12">
                        <span className="inline-block text-[11px] tracking-[0.22em] uppercase text-graphite font-medium mb-6">
                            Questions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-charcoal leading-tight tracking-tight">
                            Frequently asked.
                        </h2>
                    </div>
                    <div className="border-t border-line">
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div key={i} className="border-b border-line">
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : i)}
                                        className="w-full flex items-center justify-between py-6 text-left group"
                                    >
                                        <h3 className="text-base md:text-lg font-light text-charcoal pr-6 leading-snug tracking-tight">
                                            {faq.question}
                                        </h3>
                                        <span
                                            className={`material-symbols-outlined text-base text-graphite group-hover:text-charcoal transition-all duration-300 flex-shrink-0 ${
                                                isOpen ? 'rotate-180 text-charcoal' : ''
                                            }`}
                                            style={{ fontVariationSettings: "'wght' 250" }}
                                        >
                                            expand_more
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${
                                            isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                                        }`}
                                    >
                                        <p className="text-sm md:text-base text-graphite leading-relaxed font-light max-w-3xl">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className="bg-charcoal text-ivory py-24 md:py-32">
                <div className="max-w-4xl mx-auto px-mobile">
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight max-w-3xl">
                        Ready to get started?
                    </h2>
                    <p className="mt-6 text-base md:text-lg text-ivory/60 font-light max-w-2xl leading-relaxed">
                        Book a free consultation. We will walk through your shop, show you the system, and tell you honestly whether it is a fit.
                    </p>
                    <div className="mt-12 flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/reach-out"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-ivory text-charcoal text-sm tracking-wide font-medium rounded-[6px] hover:bg-white transition-colors group"
                        >
                            <span>Book a Free Consultation</span>
                            <span
                                className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform"
                                style={{ fontVariationSettings: "'wght' 250" }}
                            >
                                arrow_forward
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
