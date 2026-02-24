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

function distributeIntoRows(items: string[], numRows: number = 4) {
    const rows: string[][] = Array.from({ length: numRows }, () => []);
    items.forEach((item, index) => {
        rows[index % numRows].push(item);
    });
    return rows;
}

const industryRows = distributeIntoRows(uniqueIndustries, 4);

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
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;
        let wordInterval: ReturnType<typeof setInterval> | null = null;
        const observer = new IntersectionObserver(
            ([entry]) => {
                const rows = container.querySelectorAll<HTMLElement>('.animate-scroll-horizontal');
                rows.forEach(row => {
                    row.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
                });
                if (entry.isIntersecting && !wordInterval) {
                    wordInterval = setInterval(() => {
                        setCurrentWordIndex((prev) => (prev + 1) % highlightWords.length);
                    }, 2500);
                } else if (!entry.isIntersecting && wordInterval) {
                    clearInterval(wordInterval);
                    wordInterval = null;
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(container);
        return () => {
            observer.disconnect();
            if (wordInterval) clearInterval(wordInterval);
        };
    }, []);

    return (
        <section id="industries" className="py-20 md:py-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-mobile relative z-10">

                {/* Top Section: Capabilities Checklist */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 md:mb-32">
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
                                Built for businesses who <span className="text-primary italic font-serif opacity-90">actually make</span> things.
                            </h2>
                            <p className="text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-lg">
                                If your shop performs any of these multi-step custom workflows, our platform is engineered for your operational chaos.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 relative">
                        {/* Decorative background element */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900/50 dark:to-gray-950 rounded-3xl -z-10 border border-gray-100 dark:border-gray-800 transform rotate-1 scale-[1.05]" />

                        {capabilities.map((capability, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/50 shadow-sm hover:border-primary/30 dark:hover:border-primary/50 transition-colors group"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-all">
                                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                    {capability}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section: Massive Marquee of Industries */}
            <div className="relative pt-16 pb-12 border-y border-gray-200 dark:border-gray-800/60 bg-white/50 dark:bg-black/20">
                {/* Faded edges for marquee */}
                <div className="absolute left-0 inset-y-0 w-24 md:w-48 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 inset-y-0 w-24 md:w-48 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-mobile text-center mb-12 relative z-20">
                    <h3 className="text-2xl md:text-3xl font-bold dark:text-white mb-3 flex flex-wrap items-center justify-center gap-2">
                        <span>Not just for</span>
                        <div className="relative inline-flex overflow-hidden h-10 w-fit items-center justify-center -mb-1 px-1">
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

                <div className="flex flex-col gap-4 md:gap-6 overflow-hidden relative pb-8" ref={scrollContainerRef}>
                    {industryRows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="flex w-max shrink-0 items-center gap-4 md:gap-6 group animate-scroll-horizontal py-2"
                            style={{
                                animationDuration: '60s',
                                animationDelay: `${rowIndex * -5}s`,
                                animationDirection: rowIndex % 2 === 0 ? 'normal' : 'reverse',
                                willChange: 'transform'
                            }}
                        >
                            {/* Duplicate array for infinite scroll */}
                            {[...row, ...row].map((industry, i) => (
                                <div
                                    key={`row-${rowIndex}-${i}`}
                                    className="bg-white dark:bg-gray-900 rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 shadow-sm flex items-center gap-3 cursor-default min-w-max"
                                >
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-primary text-sm font-bold">handshake</span>
                                    </div>
                                    <span className="text-sm md:text-base font-semibold text-charcoal dark:text-white whitespace-nowrap">
                                        {industry}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <style jsx>{`
                    @keyframes scroll-horizontal {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }

                    .animate-scroll-horizontal {
                        animation: scroll-horizontal linear infinite;
                    }

                    .animate-scroll-horizontal:hover {
                        animation-play-state: paused !important;
                    }
                `}</style>
            </div>
        </section>
    );
}
