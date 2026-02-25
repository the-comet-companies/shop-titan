'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const capabilities = [
    "Take in custom orders",
    "Manage artwork",
    "RFQs & Work with subcontractors",
    "Schedule machines",
    "Assign production tasks",
    "Manage pricing matrices",
    "Deal with rush jobs",
    "Track QC",
    "Coordinate vendors",
    "Handle sampling and reorders"
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
    "Fire department apparel"
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
    "apparel brands"
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
            className="pt-20 md:pt-32 pb-8 md:pb-12 bg-background-light dark:bg-background-dark relative overflow-hidden"
        >
            {/* Top: Headline + Capabilities List */}
            <div className="max-w-7xl mx-auto px-mobile relative z-10 mb-24 md:mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6">
                                Workflows Solved
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight text-charcoal dark:text-white">
                                Built for businesses who{' '}
                                <span className="text-primary italic font-serif opacity-90">actually make</span> things.
                            </h2>
                            <p className="text-lg text-secondary-text dark:text-gray-400 leading-relaxed max-w-lg">
                                If your shop performs any of these multi-step custom workflows, our platform is engineered for your operational chaos.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800/60 self-center"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        {capabilities.map((capability, index) => (
                            <div key={index} className="flex items-center gap-4 py-3.5">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M3 8l3.5 3.5L13 4.5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {capability}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom: Industry Marquee */}
            <div className="relative pt-16 pb-12 border-y border-gray-200 dark:border-gray-800/60 bg-white/50 dark:bg-black/20">
                <div className="absolute left-0 inset-y-0 w-24 md:w-48 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 inset-y-0 w-24 md:w-48 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-mobile text-center mb-12 relative z-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white mb-3 flex flex-wrap items-center justify-center gap-2">
                        <span>Not just for</span>
                        <div className="relative inline-flex overflow-hidden h-10 items-center justify-center px-1">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentWordIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="block font-serif italic text-primary min-w-[200px]"
                                >
                                    &quot;{highlightWords[currentWordIndex]}&quot;
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </h3>
                    <p className="text-secondary-text dark:text-gray-400 font-medium mt-2">
                        Production driven decoration businesses managing multi step custom workflows.
                    </p>
                </div>

                <div className="flex flex-col gap-4 md:gap-5 overflow-hidden pb-8">
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
                                    className="inline-flex items-center px-4 py-2 mr-3 rounded-full border border-gray-200 dark:border-gray-800 text-sm font-medium text-charcoal dark:text-gray-300 whitespace-nowrap bg-white/70 dark:bg-gray-900/50"
                                >
                                    {industry}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
