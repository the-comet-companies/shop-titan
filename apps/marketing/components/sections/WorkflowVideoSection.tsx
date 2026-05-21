'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// FileMaker screenshots
import quotesImg from '@/assets/Filemaker/Quotes.png';
import ordersImg from '@/assets/Filemaker/Orders.png';
import customersImg from '@/assets/Filemaker/Customers.png';
import purchaseOrdersImg from '@/assets/Filemaker/PurchaseOrders.png';
import reportingImg from '@/assets/Filemaker/Reporting.png';
import emailTemplateImg from '@/assets/Filemaker/EmailTemplate.png';

// Website screenshots
import storeFrontImg from '@/assets/Website/StoreFront.png';
import productCatalogImg from '@/assets/Website/ProductCatalog.png';
import brandsImg from '@/assets/Website/Brands.png';
import servicesImg from '@/assets/Website/Services.png';
import customerPortalImg from '@/assets/Website/CustomerPortal.png';
import seoImg from '@/assets/Website/SEO.png';

const slides = [
    { src: storeFrontImg, label: 'Storefront', type: 'Website' },
    { src: quotesImg, label: 'Quotes', type: 'FileMaker' },
    { src: productCatalogImg, label: 'Product Catalog', type: 'Website' },
    { src: ordersImg, label: 'Orders', type: 'FileMaker' },
    { src: brandsImg, label: 'Brands', type: 'Website' },
    { src: customersImg, label: 'Customers / Vendors', type: 'FileMaker' },
    { src: servicesImg, label: 'Services', type: 'Website' },
    { src: purchaseOrdersImg, label: 'Purchase Orders', type: 'FileMaker' },
    { src: customerPortalImg, label: 'Customer Portal', type: 'Website' },
    { src: emailTemplateImg, label: 'Email Templates', type: 'FileMaker' },
    { src: seoImg, label: 'SEO & Analytics', type: 'Website' },
    { src: reportingImg, label: 'Reporting', type: 'FileMaker' },
];

export default function WorkflowVideoSection() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startAutoplay = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3500);
    }, []);

    useEffect(() => {
        if (!isPaused) startAutoplay();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused, startAutoplay]);

    const goTo = (index: number) => {
        setCurrent(index);
        startAutoplay();
    };

    const slide = slides[current];
    const counter = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;

    return (
        <section id="workflow-video" className="py-24 md:py-32 bg-ivory dark:bg-black">
            <div className="max-w-6xl mx-auto px-mobile">

                {/* Section header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 md:mb-16">
                    <div className="lg:col-span-5">
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="inline-block text-[11px] tracking-[0.22em] uppercase text-graphite font-medium mb-6"
                        >
                            The Platform
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="text-3xl md:text-5xl font-light text-charcoal dark:text-white leading-[1.05] tracking-tight"
                        >
                            Every stage.{' '}
                            <span className="italic font-extralight text-graphite">One system.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-7 lg:pt-2 text-lg md:text-xl text-graphite dark:text-gray-400 leading-relaxed font-light max-w-xl"
                    >
                        From the first lead to the final report - storefront, quotes, orders, production, and reporting in one continuous workflow.
                    </motion.p>
                </div>

                {/* Showcase container */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="border border-line dark:border-gray-800 bg-white dark:bg-gray-900 rounded-[8px] overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.02),0_20px_60px_-30px_rgba(0,0,0,0.08)]"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Minimal browser chrome */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-line dark:border-gray-800 bg-ivory/60 dark:bg-gray-950/60">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-line" />
                            <span className="w-1.5 h-1.5 rounded-full bg-line" />
                            <span className="w-1.5 h-1.5 rounded-full bg-line" />
                        </div>
                        <div className="flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-graphite font-medium">
                            <span
                                className="material-symbols-outlined text-graphite text-xs"
                                style={{ fontVariationSettings: "'wght' 250" }}
                            >
                                lock
                            </span>
                            <span className="hidden sm:inline-block normal-case tracking-normal text-xs font-light text-graphite">
                                {slide.type === 'Website' ? 'yourstore.com' : 'app.shoptitan.com'}/{slide.label.toLowerCase().replace(/ /g, '-')}
                            </span>
                            <span className="sm:hidden">{slide.type}</span>
                        </div>
                        <div className="w-12" />
                    </div>

                    {/* Image area */}
                    <div className="relative h-[280px] sm:h-[380px] md:h-[500px] lg:h-[580px] bg-white dark:bg-gray-950 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={slide.src}
                                    alt={`${slide.type} - ${slide.label}`}
                                    className="w-full h-full object-cover object-top"
                                    sizes="(max-width: 1024px) 100vw, 1100px"
                                    placeholder="blur"
                                    priority={current === 0}
                                    fill
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Caption + navigation bar */}
                    <div className="border-t border-line dark:border-gray-800 bg-white dark:bg-gray-900">
                        {/* Caption row */}
                        <div className="flex items-baseline justify-between gap-4 px-5 md:px-8 pt-5 pb-4">
                            <div className="flex items-baseline gap-4 min-w-0">
                                <span className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium flex-shrink-0">
                                    {counter}
                                </span>
                                <span className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium flex-shrink-0 hidden sm:inline-block">
                                    {slide.type}
                                </span>
                                <h3 className="text-base md:text-lg text-charcoal dark:text-white font-medium tracking-tight truncate">
                                    {slide.label}
                                </h3>
                            </div>
                        </div>

                        {/* Line indicator strip */}
                        <div className="flex items-stretch h-1 border-t border-line/60 dark:border-gray-800/60">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    className="flex-1 relative group"
                                    aria-label={`Go to slide ${i + 1}`}
                                >
                                    <span
                                        className={`absolute inset-0 transition-colors ${
                                            i === current
                                                ? 'bg-charcoal dark:bg-white'
                                                : 'bg-transparent group-hover:bg-charcoal/20 dark:group-hover:bg-white/20'
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
