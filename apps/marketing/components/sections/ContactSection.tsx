"use client";

import { useState } from "react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactSection() {
    const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation();

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        friction: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Webhook URLs (Placeholders - to be replaced with env vars or actual URLs)
    const WEBHOOK_STEP_1 = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_STEP_1 || "";
    const WEBHOOK_STEP_2 = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_STEP_2 || "";

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleNextStep = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Trigger Webhook 1 (Capture Lead)
            if (WEBHOOK_STEP_1) {
                await fetch(WEBHOOK_STEP_1, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        step: 1,
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        company: formData.company,
                        timestamp: new Date().toISOString()
                    })
                });
            } else {
                console.log("Step 1 Webhook Triggered:", {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company
                });
                // Simulate delay
                await new Promise(resolve => setTimeout(resolve, 800));
            }

            setStep(2);
        } catch (error) {
            console.error("Error submitting step 1:", error);
            // Optional: Show error state
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Trigger Webhook 2 (Capture Context/Friction)
            if (WEBHOOK_STEP_2) {
                await fetch(WEBHOOK_STEP_2, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        step: 2,
                        email: formData.email, // Key to link records if needed
                        friction: formData.friction,
                        timestamp: new Date().toISOString()
                    })
                });
            } else {
                console.log("Step 2 Webhook Triggered:", {
                    email: formData.email,
                    friction: formData.friction
                });
                // Simulate delay
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            setIsSubmitted(true);
        } catch (error) {
            console.error("Error submitting step 2:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="flex-grow flex items-center justify-center px-mobile py-20 md:py-28 lg:py-32 bg-background-light dark:bg-background-dark"
        >
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Left Column: Brand Content */}
                    <div className="space-y-6 lg:space-y-10 order-2 lg:order-1 mt-12 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-charcoal dark:text-white leading-[1.1]">
                                The Operating System for High-Volume Apparel.
                            </h2>
                            <p className="text-base lg:text-xl text-secondary-text dark:text-gray-400 font-medium leading-relaxed max-w-lg">
                                Join modern decorators running better, faster, and smarter operations. Stop wrestling with spreadsheets and start scaling.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-4 lg:space-y-6"
                        >
                            {[
                                "End-to-End Order Management",
                                "Real-time Inventory Sync",
                                "Production Scheduling Automation",
                                "Client Portal & Approvals"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary text-sm lg:text-lg">check</span>
                                    </div>
                                    <span className="text-sm lg:text-lg font-medium text-charcoal dark:text-gray-200">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="pt-6 lg:pt-8 border-t border-gray-100 dark:border-gray-800"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-background-light dark:border-background-dark bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                                            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-500">
                                                U{i}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center text-yellow-400 gap-1 text-sm">
                                        <span className="material-symbols-outlined filled text-lg">star</span>
                                        <span className="material-symbols-outlined filled text-lg">star</span>
                                        <span className="material-symbols-outlined filled text-lg">star</span>
                                        <span className="material-symbols-outlined filled text-lg">star</span>
                                        <span className="material-symbols-outlined filled text-lg">star</span>
                                    </div>
                                    <p className="text-sm font-semibold text-charcoal dark:text-white mt-1">
                                        Trusted by 500+ Shops
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="w-full order-1 lg:order-2">

                        {/* Header (Mobile Only) */}
                        <div
                            ref={headerRef}
                            className={`lg:hidden text-center mb-8 md:mb-10 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal dark:text-white mb-3 md:mb-4">
                                {step === 1 ? "Request Your Demo" : "Tell Us More"}
                            </h1>
                            <p className="text-secondary-text dark:text-gray-400 text-base md:text-lg">
                                {step === 1 ? "No pressure. No sales pitch. Just clarity." : "What's the biggest challenge you're facing right now?"}
                            </p>
                        </div>

                        {/* Form Card */}
                        <div
                            ref={formRef}
                            className={`bg-surface dark:bg-gray-900 rounded-2xl md:rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-structural-border dark:border-gray-800 p-6 md:p-8 lg:p-12 transition-all duration-700 delay-100 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            {/* Form Header */}
                            <div className="mb-6 lg:mb-8 text-center lg:text-left">
                                <h3 className="text-2xl lg:text-3xl font-bold text-charcoal dark:text-white mb-2">
                                    {step === 1 ? "Book a Demo" : "Tell Us More"}
                                </h3>
                                <p className="text-secondary-text dark:text-gray-400">
                                    {step === 1 ? "Get a guided tour of the platform." : "We'll tailor the demo to your needs."}
                                </p>
                            </div>

                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.div
                                        key={step} // Key change triggers animation
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {step === 1 ? (
                                            <form onSubmit={handleNextStep} className="space-y-6">
                                                <div className="grid grid-cols-1 gap-5">
                                                    {/* Name */}
                                                    <div>
                                                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-secondary-text mb-2">
                                                            Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            required
                                                            placeholder="Full Name"
                                                            className="w-full min-h-[48px] bg-background-light dark:bg-black/20 border border-structural-border dark:border-gray-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-charcoal dark:text-white placeholder:text-gray-300 outline-none"
                                                        />
                                                    </div>

                                                    {/* Email */}
                                                    <div>
                                                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-secondary-text mb-2">
                                                            Work Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            required
                                                            placeholder="email@company.com"
                                                            className="w-full min-h-[48px] bg-background-light dark:bg-black/20 border border-structural-border dark:border-gray-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-charcoal dark:text-white placeholder:text-gray-300 outline-none"
                                                        />
                                                    </div>

                                                    {/* Phone */}
                                                    <div>
                                                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-secondary-text mb-2">
                                                            Phone Number
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            id="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            required
                                                            placeholder="(555) 555-5555"
                                                            className="w-full min-h-[48px] bg-background-light dark:bg-black/20 border border-structural-border dark:border-gray-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-charcoal dark:text-white placeholder:text-gray-300 outline-none"
                                                        />
                                                    </div>

                                                    {/* Company */}
                                                    <div>
                                                        <label htmlFor="company" className="block text-xs font-bold uppercase tracking-widest text-secondary-text mb-2">
                                                            Company
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="company"
                                                            value={formData.company}
                                                            onChange={handleChange}
                                                            required
                                                            placeholder="Business Name"
                                                            className="w-full min-h-[48px] bg-background-light dark:bg-black/20 border border-structural-border dark:border-gray-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-charcoal dark:text-white placeholder:text-gray-300 outline-none"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Next Button */}
                                                <div className="pt-4">
                                                    <motion.button
                                                        type="submit"
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        disabled={isSubmitting}
                                                        className="w-full min-h-[48px] group relative backdrop-blur-xl bg-charcoal dark:bg-white/10 border border-charcoal/10 dark:border-white/10 text-white font-bold py-3 md:py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                                    >
                                                        {isSubmitting ? (
                                                            <span className="material-symbols-outlined animate-spin">refresh</span>
                                                        ) : (
                                                            <>
                                                                Next Step
                                                                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                                                                    arrow_forward
                                                                </span>
                                                            </>
                                                        )}
                                                    </motion.button>
                                                </div>
                                            </form>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="grid grid-cols-1 gap-6">
                                                    {/* Friction Point */}
                                                    <div>
                                                        <label htmlFor="friction" className="block text-xs font-bold uppercase tracking-widest text-secondary-text mb-2">
                                                            Main Friction Point
                                                        </label>
                                                        <textarea
                                                            id="friction"
                                                            value={formData.friction}
                                                            onChange={handleChange}
                                                            required
                                                            autoFocus
                                                            placeholder="What part of your operation is causing the most chaos?"
                                                            className="w-full bg-background-light dark:bg-black/20 border border-structural-border dark:border-gray-800 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-charcoal dark:text-white placeholder:text-gray-300 min-h-[160px] outline-none resize-none"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Submit Button */}
                                                <div className="pt-4 flex gap-4">
                                                    <motion.button
                                                        type="button"
                                                        onClick={() => setStep(1)}
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        disabled={isSubmitting}
                                                        className="w-full md:w-1/3 group relative bg-transparent border border-structural-border dark:border-gray-700 text-secondary-text font-bold py-5 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center gap-2"
                                                    >
                                                        <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">
                                                            arrow_back
                                                        </span>
                                                        Back
                                                    </motion.button>

                                                    <motion.button
                                                        type="submit"
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        disabled={isSubmitting}
                                                        className="w-full md:w-2/3 group relative backdrop-blur-xl bg-primary border border-primary text-white font-bold py-5 rounded-full transition-all duration-300 hover:bg-primary/90 shadow-lg shadow-primary/25 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                                    >
                                                        {isSubmitting ? (
                                                            <span className="material-symbols-outlined animate-spin">refresh</span>
                                                        ) : (
                                                            <>
                                                                Submit Request
                                                                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                                                                    send
                                                                </span>
                                                            </>
                                                        )}
                                                    </motion.button>
                                                </div>
                                            </form>
                                        )}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        className="flex flex-col items-center justify-center py-20 text-center space-y-6"
                                    >
                                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                                            <span className="material-symbols-outlined text-4xl">check_circle</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-2">Request Received</h3>
                                            <p className="text-secondary-text dark:text-gray-400 max-w-sm mx-auto">
                                                Thanks, {formData.name.split(' ')[0]}. We&apos;ll be in touch shortly to schedule your demo.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => { setIsSubmitted(false); setStep(1); setFormData({ name: "", email: "", phone: "", company: "", friction: "" }) }}
                                            className="text-primary text-sm font-bold uppercase tracking-widest hover:underline mt-8"
                                        >
                                            Send another request
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Mobile Social Proof */}
                            <div className="lg:hidden mt-10 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-structural-border dark:bg-gray-700 border-2 border-surface dark:border-gray-900 flex items-center justify-center text-[10px] font-bold">
                                            JD
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-surface dark:border-gray-900 flex items-center justify-center text-[10px] font-bold text-primary">
                                            MS
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-background-light dark:bg-gray-800 border-2 border-surface dark:border-gray-900 flex items-center justify-center text-[10px] font-bold text-secondary-text">
                                            +12
                                        </div>
                                    </div>
                                    <span className="text-xs text-secondary-text font-medium">
                                        Joined by 150+ shops this month
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Footer Text */}
                        <div className="mt-8 text-center lg:text-left lg:pl-4">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary-text font-semibold">
                                Zero Distractions • Ultra-Clean UI • High Focus
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
