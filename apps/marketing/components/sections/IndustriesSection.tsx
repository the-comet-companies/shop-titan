'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const capabilities = [
    { label: "Take in custom orders", icon: "shopping_bag" },
    { label: "Manage artwork", icon: "palette" },
    { label: "RFQs & Work with subcontractors", icon: "handshake" },
    { label: "Schedule machines", icon: "precision_manufacturing" },
    { label: "Assign production tasks", icon: "task_alt" },
    { label: "Manage pricing matrices", icon: "grid_on" },
    { label: "Deal with rush jobs", icon: "bolt" },
    { label: "Track QC", icon: "verified" },
    { label: "Coordinate vendors", icon: "people" },
    { label: "Handle sampling and reorders", icon: "repeat" },
];

const industries = [
    "Manual press shops",
    "Automatic press shops",
    "Contract printers",
    "Specialty ink printers",
    "Plastisol transfer producers",
    "Large format textile printers",
    "Commercial embroidery shops",
    "Multi-head operators",
    "Contract embroidery houses",
    "Cap embroidery specialists",
    "Patch + embroidery hybrids",
    "Small batch decorators",
    "Ecommerce fulfillment printers",
    "In-house brand production",
    "Sample studios",
    "Gang sheet producers",
    "Wholesale transfer suppliers",
    "Hybrid screen + DTF shops",
    "Small print shops transitioning from vinyl",
    "Sports jersey producers",
    "All-over print manufacturers",
    "Promotional product decorators",
    "Polyester apparel decorators",
    "Boutique apparel decorators",
    "Event merch printers",
    "Small sign shops",
    "Custom one-off printers",
    "Hard goods decorators",
    "Bottle/tumbler printers",
    "Phone case printers",
    "Industrial flatbed operators",
    "Promotional item printers",
    "Plastic product decorators",
    "Promo item suppliers",
    "Industrial parts decorators",
    "Tumbler engraving shops",
    "Corporate gifting companies",
    "Wood/acrylic decorators",
    "Leather engraving shops",
    "Chenille producers",
    "Varsity patch makers",
    "Woven patch manufacturers",
    "PVC patch producers",
    "Leather patch shops",
    "Velcro patch makers",
    "Enzyme wash facilities",
    "Acid wash houses",
    "Pigment dye facilities",
    "Vintage wash processors",
    "Garment distressing facilities",
    "Garment dye specialists",
    "Tie-dye production",
    "Dip-dye processors",
    "Custom color labs",
    "Leather embossers",
    "Apparel embossers",
    "Foil stamp operators",
    "Heat emboss operators",
    "Sand blasting operators",
    "Bleach effect printers",
    "Hand distressing studios",
    "Cut-and-destroy processors",
    "Campus merch producers",
    "Athletic department printers",
    "Police uniform suppliers",
    "Fire department apparel",
];

const uniqueIndustries = Array.from(new Set(industries));

function distributeIntoRows(items: string[], numRows = 2) {
    const rows: string[][] = Array.from({ length: numRows }, () => []);
    items.forEach((item, i) => { rows[i % numRows].push(item); });
    return rows;
}

const industryRows = distributeIntoRows(uniqueIndustries, 2);

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
            className="relative bg-background-light overflow-hidden pt-40 pb-40"
        >
            {/* Animated gradient orb background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40" aria-hidden="true">
                <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/[0.07] blur-3xl animate-gradient-flow-1" />
                <div className="absolute top-1/2 -left-48 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.05] blur-3xl animate-gradient-flow-2" />
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-teal-400/[0.04] blur-3xl animate-gradient-flow-3" />
            </div>

            {/* Top bleed: previous light section → dark */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background-light to-transparent pointer-events-none z-0" />
            {/* Bottom bleed */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background-light to-transparent pointer-events-none z-0" />

            {/* All content sits above the gradient bleeds */}
            <div className="relative z-10">

                {/* Section Header */}
                <div className="max-w-3xl mx-auto px-mobile text-center mb-16 md:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6"
                    >
                        Who We Serve
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-charcoal dark:text-white leading-tight tracking-tight mb-6"
                    >
                        Built for businesses who{' '}
                        <span className="italic font-serif opacity-90">actually make</span> things.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex flex-wrap items-center justify-center gap-2 text-xl md:text-2xl text-secondary-text font-medium"
                    >
                        <span>Not just for</span>
                        <div className="relative inline-flex overflow-hidden h-8 items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentWordIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="block italic font-serif text-primary whitespace-nowrap"
                                >
                                    &quot;{highlightWords[currentWordIndex]}&quot;
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Marquee */}
                <div className="relative overflow-hidden pb-8">
                    {/* Edge fades — must match section bg */}
                    <div className="absolute left-0 inset-y-0 w-24 md:w-48 bg-gradient-to-r from-background-light to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 inset-y-0 w-24 md:w-48 bg-gradient-to-l from-background-light to-transparent z-10 pointer-events-none" />

                    <div className="flex flex-col gap-4 md:gap-5">
                        {industryRows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="carousel-track shrink-0"
                                style={{
                                    animationDuration: '120s',
                                    animationDelay: `${rowIndex * -12}s`,
                                    animationDirection: rowIndex % 2 === 0 ? 'normal' : 'reverse',
                                    willChange: 'transform',
                                }}
                            >
                                {[...row, ...row].map((industry, i) => (
                                    <span
                                        key={`${rowIndex}-${i}`}
                                        className="inline-flex items-center px-4 py-2 mr-3 rounded-full border border-gray-200 text-sm font-medium text-gray-700 whitespace-nowrap bg-white hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
                                    >
                                        {industry}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bridge text */}
                <div className="max-w-3xl mx-auto px-mobile text-center mt-10 mb-8">
                    <p className="text-sm text-secondary-text/60 font-medium tracking-widest uppercase">
                        If your shop handles any of these, you&apos;re in the right place.
                    </p>
                </div>

                {/* Capability Badges */}
                <div className="max-w-4xl mx-auto px-mobile pb-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {capabilities.map((capability, index) => (
                            <motion.div
                                key={capability.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: 'spring', stiffness: 280, damping: 22, delay: index * 0.06 }}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-charcoal hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 cursor-default shadow-sm"
                            >
                                <span className="material-symbols-outlined text-primary text-base leading-none">{capability.icon}</span>
                                {capability.label}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
