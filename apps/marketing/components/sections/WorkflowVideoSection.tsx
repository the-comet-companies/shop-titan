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
        // Reset autoplay timer on manual navigation
        startAutoplay();
    };

    const slide = slides[current];

    return (
        <section id="workflow-video" className="py-24 md:py-32 bg-background-light dark:bg-black">
            <div className="max-w-6xl mx-auto px-mobile">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-4">
                        Every stage. One system.
                    </h2>
                    <p className="text-lg text-secondary-text dark:text-gray-400 max-w-2xl mx-auto">
                        From the first lead to the final report  - fully connected.
                    </p>
                </motion.div>

                {/* Showcase container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Browser chrome */}
                    <div className="bg-gray-50 dark:bg-gray-900 border-b border-black/[0.06] dark:border-white/[0.06] px-4 py-2.5 flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-400 dark:text-gray-600 text-lg select-none">menu</span>
                        <div className="flex-1 flex items-center gap-2 bg-white dark:bg-gray-800 border border-black/[0.08] dark:border-white/[0.08] rounded-lg px-3 py-1.5">
                            <span className="material-symbols-outlined text-primary text-sm select-none">lock</span>
                            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium truncate">
                                {slide.type === 'Website' ? 'yourstore.com' : 'app.shoptitan.com'} / {slide.label.toLowerCase().replace(/ /g, '-')}
                            </span>
                        </div>
                        {/* Type badge */}
                        <span className={`hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                            slide.type === 'Website'
                                ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400'
                                : 'bg-primary/10 text-primary dark:text-blue-400'
                        }`}>
                            {slide.type}
                        </span>
                    </div>

                    {/* Image area  - fixed height to prevent layout shift */}
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
                                    alt={`${slide.type}  - ${slide.label}`}
                                    className="w-full h-full object-cover object-top"
                                    sizes="(max-width: 1024px) 100vw, 1100px"
                                    placeholder="blur"
                                    priority={current === 0}
                                    fill
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Overlay label */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6 pointer-events-none">
                            <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-1.5 ${
                                slide.type === 'Website'
                                    ? 'bg-teal-500/20 text-teal-300'
                                    : 'bg-blue-500/20 text-blue-300'
                            }`}>
                                {slide.type}
                            </span>
                            <h3 className="text-white text-lg md:text-2xl font-bold">{slide.label}</h3>
                        </div>
                    </div>

                    {/* Dot navigation */}
                    <div className="flex items-center justify-center gap-1.5 py-4 bg-black/90 dark:bg-gray-950">
                        {slides.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    i === current
                                        ? s.type === 'Website'
                                            ? 'bg-teal-500 w-4'
                                            : 'bg-primary w-4'
                                        : 'bg-gray-600 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to ${s.label}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
