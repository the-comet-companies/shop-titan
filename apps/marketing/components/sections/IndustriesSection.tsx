'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const capabilities = [
    { label: "Take in custom orders", icon: "shopping_bag" },
    { label: "Manage artwork", icon: "palette" },
    { label: "RFQs & work with subcontractors", icon: "handshake" },
    { label: "Schedule machines", icon: "precision_manufacturing" },
    { label: "Assign production tasks", icon: "task_alt" },
    { label: "Manage pricing matrices", icon: "grid_on" },
    { label: "Deal with rush jobs", icon: "bolt" },
    { label: "Track QC", icon: "verified" },
    { label: "Coordinate vendors", icon: "people" },
    { label: "Handle sampling and reorders", icon: "repeat" },
];

const industryGroups = [
    {
        category: "Print & Decoration",
        items: [
            "Manual press shops",
            "Automatic press shops",
            "Contract printers",
            "Specialty ink printers",
            "Plastisol transfer producers",
            "Large format textile printers",
            "Hybrid screen + DTF shops",
            "Bleach effect printers",
        ],
    },
    {
        category: "Embroidery & Patches",
        items: [
            "Commercial embroidery shops",
            "Multi-head operators",
            "Contract embroidery houses",
            "Cap embroidery specialists",
            "Chenille producers",
            "Varsity patch makers",
            "Woven patch manufacturers",
            "Leather patch shops",
        ],
    },
    {
        category: "Hard Goods & Industrial",
        items: [
            "Bottle / tumbler printers",
            "Phone case printers",
            "Industrial flatbed operators",
            "Plastic product decorators",
            "Industrial parts decorators",
            "Wood / acrylic decorators",
            "Leather engraving shops",
            "Tumbler engraving shops",
        ],
    },
    {
        category: "Specialty & Wash",
        items: [
            "Enzyme wash facilities",
            "Pigment dye facilities",
            "Garment distressing facilities",
            "Tie-dye production",
            "Custom color labs",
            "Apparel embossers",
            "Foil stamp operators",
            "Hand distressing studios",
        ],
    },
    {
        category: "Order Channels",
        items: [
            "Ecommerce fulfillment printers",
            "In-house brand production",
            "Sample studios",
            "Wholesale transfer suppliers",
            "Small batch decorators",
            "Event merch printers",
            "Custom one-off printers",
            "Boutique apparel decorators",
        ],
    },
    {
        category: "Vertical & Promo",
        items: [
            "Promotional product decorators",
            "Corporate gifting companies",
            "Campus merch producers",
            "Athletic department printers",
            "Police uniform suppliers",
            "Fire department apparel",
            "Sports jersey producers",
            "All-over print manufacturers",
        ],
    },
];

const highlightWords = [
    "embroidery shops",
    "screen printers",
    "DTF producers",
    "promo distributors",
    "sublimation shops",
    "print brokers",
    "apparel brands",
];

export default function IndustriesSection() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !interval) {
                    interval = setInterval(() => {
                        setCurrentWordIndex(p => (p + 1) % highlightWords.length);
                    }, 2500);
                } else if (!entry.isIntersecting && interval) {
                    clearInterval(interval);
                    interval = null;
                }
            },
            { threshold: 0.1 }
        );
        const el = sectionRef.current;
        if (el) observer.observe(el);
        return () => {
            observer.disconnect();
            if (interval) clearInterval(interval);
        };
    }, []);

    return (
        <section
            id="industries"
            ref={sectionRef}
            className="relative bg-ivory pt-24 md:pt-32 pb-24 md:pb-32"
        >
            <div className="max-w-7xl mx-auto px-mobile">

                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 md:mb-24">
                    <div className="lg:col-span-5">
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="inline-block text-[11px] tracking-[0.22em] uppercase text-graphite font-medium mb-6"
                        >
                            Industries we serve
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="text-3xl md:text-5xl font-light text-charcoal leading-[1.05] tracking-tight"
                        >
                            Built for businesses who{' '}
                            <span className="italic font-extralight text-graphite">actually make</span> things.
                        </motion.h2>
                    </div>

                    <div className="lg:col-span-7 lg:pt-2 flex flex-col justify-between">
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-graphite leading-relaxed font-light max-w-xl"
                        >
                            One operating system spanning the production landscape - from manual press shops to contract embroidery houses to industrial flatbed operators.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-3 text-sm md:text-base text-graphite font-light mt-8"
                        >
                            <span>Not just for</span>
                            <div className="relative inline-flex overflow-hidden h-7 items-center">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={currentWordIndex}
                                        initial={{ y: 16, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -16, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="block italic text-charcoal whitespace-nowrap"
                                    >
                                        {highlightWords[currentWordIndex]}.
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Industries grid - 6 categories x 8 items each, hairline columns */}
                <div className="border-t border-line">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {industryGroups.map((group, gi) => (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.5, delay: (gi % 3) * 0.08 }}
                                className="border-b border-line md:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r md:border-line lg:border-line py-8 md:py-10 md:pr-8 md:pl-0 md:[&:nth-child(even)]:pl-8 lg:[&:nth-child(3n+2)]:pl-8 lg:[&:nth-child(3n)]:pl-8 first:pt-8"
                            >
                                <div className="flex items-baseline gap-3 mb-5">
                                    <span className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium">
                                        {String(gi + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-base text-charcoal font-medium tracking-tight">
                                        {group.category}
                                    </h3>
                                </div>
                                <ul className="space-y-2">
                                    {group.items.map((item) => (
                                        <li key={item} className="text-sm text-graphite font-light leading-relaxed">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Capabilities */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-24 md:mt-32">
                    <div className="lg:col-span-5">
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="inline-block text-[11px] tracking-[0.22em] uppercase text-graphite font-medium mb-6"
                        >
                            What it handles
                        </motion.span>
                        <motion.h3
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="text-2xl md:text-3xl font-light text-charcoal leading-tight tracking-tight max-w-md"
                        >
                            If your shop handles any of these, you&apos;re in the right place.
                        </motion.h3>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="border-t border-line">
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {capabilities.map((capability, index) => (
                                    <motion.div
                                        key={capability.label}
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
                                        className="flex items-baseline gap-4 py-4 border-b border-line sm:[&:nth-child(odd)]:border-r sm:pr-6 sm:[&:nth-child(even)]:pl-6"
                                    >
                                        <span className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium flex-shrink-0 w-6">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <div className="flex items-center gap-3 flex-1">
                                            <span
                                                className="material-symbols-outlined text-graphite text-base"
                                                style={{ fontVariationSettings: "'wght' 250" }}
                                            >
                                                {capability.icon}
                                            </span>
                                            <span className="text-sm text-charcoal font-light">
                                                {capability.label}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
