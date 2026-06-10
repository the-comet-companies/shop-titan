'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhyWebsiteSection() {
    return (
        <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-mobile">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* LEFT — copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="order-2 lg:order-1"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6">
                            So, Why a Website?
                        </h2>

                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-5">
                            <span className="font-bold text-charcoal dark:text-white">Let&apos;s face it</span> — running a print shop without a real website is like opening a storefront with no sign on the street. Customers cannot find you, cannot see what you make, and cannot order without picking up the phone.
                        </p>

                        <h3 className="text-lg md:text-xl font-bold text-charcoal dark:text-white tracking-tight mb-3 mt-7">
                            That is where a real storefront comes in.
                        </h3>

                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-7">
                            A Shop Titan website is your shop&apos;s digital front door — built for decoration, branded to your business, and connected to the work you already do. Customers find you, browse your catalog, and place orders without a single email back and forth.
                        </p>

                        <h3 className="text-lg md:text-xl font-bold text-charcoal dark:text-white tracking-tight mb-3">
                            Built to convert visitors into orders.
                        </h3>

                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                            Every page is tuned for the way decoration buyers actually shop — clear pricing, color swatches, art upload, and instant quotes. The website does the selling so your team can focus on production.
                        </p>
                    </motion.div>

                    {/* RIGHT — layered mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative aspect-[5/4] w-full">
                            {/* Background desktop screenshot, slightly rotated */}
                            <div className="absolute top-0 left-0 w-[78%] rotate-[-3deg] origin-top-left">
                                <div className="rounded-xl overflow-hidden border border-structural-border dark:border-gray-800 shadow-xl shadow-charcoal/10 bg-white">
                                    <Image
                                        src="/website/StoreFront.png"
                                        alt="Branded ecommerce storefront for a print shop"
                                        width={1773}
                                        height={795}
                                        sizes="(max-width: 1024px) 80vw, 500px"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>

                            {/* Foreground catalog screenshot, slightly tilted opposite */}
                            <div className="absolute bottom-0 -right-[50px] w-[60%] rotate-[2deg] origin-bottom-right">
                                <div className="rounded-xl overflow-hidden border border-structural-border dark:border-gray-800 shadow-2xl shadow-primary/15 bg-white">
                                    <Image
                                        src="/website/ProductCatalog.png"
                                        alt="Decoration aware product catalog"
                                        width={1302}
                                        height={867}
                                        sizes="(max-width: 1024px) 60vw, 380px"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>

                            {/* Floating GA4 analytics overlay */}
                            <div className="absolute -bottom-6 left-[-4%] w-[62%] rotate-[-4deg] hidden md:block">
                                <div className="rounded-xl overflow-hidden border border-structural-border dark:border-gray-800 shadow-2xl bg-white">
                                    <Image
                                        src="/website/GA4.png"
                                        alt="Google Analytics dashboard showing website traffic"
                                        width={1495}
                                        height={810}
                                        sizes="(max-width: 1024px) 0px, 480px"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>

                            {/* Soft connector arrow */}
                            <svg
                                className="absolute top-[35%] right-[25%] w-16 h-12 text-primary/40 hidden lg:block"
                                viewBox="0 0 60 40"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M2 8 C 15 2, 40 2, 56 16 M56 16 L 48 12 M56 16 L 52 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    fill="none"
                                    strokeDasharray="3 4"
                                />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
