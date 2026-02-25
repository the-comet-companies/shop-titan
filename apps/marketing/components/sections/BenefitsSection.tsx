'use client';

import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

export default function BenefitsSection() {
    return (
        <section id="benefits" className="pt-20 md:pt-32 pb-20 md:pb-32 bg-surface dark:bg-gray-950 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-mobile relative z-10">
                <div className="mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-charcoal dark:text-white leading-tight mb-4">
                            Built for reliability.<br />
                            <span className="text-secondary-text dark:text-gray-400">Integrated with everything.</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Bento Grid — staggered sequential reveal */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {/* Cloud Security — col span 2 */}
                    <motion.div
                        variants={cardVariants}
                        className="md:col-span-2 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm relative overflow-hidden group hover:border-gray-300 dark:hover:border-gray-700 transition-colors flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center p-2 flex-shrink-0">
                                    <img src="/logos/storage/amazonS3.svg" alt="Amazon S3" className="w-full h-full object-contain" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold dark:text-white">Fully Cloud Based on AWS S3</h3>
                            </div>
                            <p className="text-secondary-text dark:text-gray-400 font-medium pt-2">
                                Secure, enterprise-grade architecture. Your data, your access, you are in control.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-bold border border-green-100 dark:border-green-800/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Hourly Backups
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs font-bold border border-blue-100 dark:border-blue-800/30">
                                <span className="material-symbols-outlined text-sm">shield_locked</span>
                                Nightly & Monthly Save States
                            </span>
                        </div>
                    </motion.div>

                    {/* Support */}
                    <motion.div
                        variants={cardVariants}
                        className="rounded-2xl md:rounded-3xl p-6 md:p-8 border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden group hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                    >
                        <h3 className="text-xl font-bold dark:text-white mb-2">Quick Response Support</h3>
                        <p className="text-secondary-text dark:text-gray-400 font-medium text-sm">
                            Real support happens through Slack, directly connecting you with our success team. Includes all maintenance and hosting so you focus on what you do best.
                        </p>
                    </motion.div>

                    {/* API & Automations */}
                    <motion.div
                        variants={cardVariants}
                        className="md:col-span-1 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden group hover:border-gray-300 dark:hover:border-gray-700 transition-colors flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-bold dark:text-white mb-2">API & Automations</h3>
                            <p className="text-secondary-text dark:text-gray-400 font-medium text-sm mb-6">
                                Unlimited possibilities with white-labeled, blind ship options using your client&apos;s logo, plus S3 bucket integrations.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gray-100 dark:bg-gray-800/50 rounded-lg h-12 flex items-center justify-center p-2">
                                <img src="/logos/tools/n8n.svg" alt="n8n" className="w-full h-full object-contain dark:invert" />
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg h-12 flex items-center justify-center p-2">
                                <img src="/logos/tools/zapier.svg" alt="Zapier" className="w-full h-full object-contain" />
                            </div>
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg h-12 flex items-center justify-center col-span-2 p-2">
                                <img src="/logos/tools/make.svg" alt="Make" className="w-full h-full object-contain dark:invert" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Payments — col span 2 */}
                    <motion.div
                        variants={cardVariants}
                        className="md:col-span-2 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden group hover:border-gray-300 dark:hover:border-gray-700 transition-colors flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold dark:text-white mb-2">Seamless Payments via Stripe</h3>
                            <p className="text-secondary-text dark:text-gray-400 font-medium max-w-xl">
                                Accept all payment types. Create, accept, and record payments seamlessly directly through the platform.
                            </p>
                        </div>
                        <div className="w-full relative py-6 flex overflow-hidden">
                            <div className="absolute left-0 inset-y-0 w-12 sm:w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 inset-y-0 w-12 sm:w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
                            <div
                                className="carousel-track items-center shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                                style={{ animationDuration: '30s', willChange: 'transform' }}
                            >
                                <PaymentLogos />
                                <PaymentLogos />
                            </div>
                        </div>
                    </motion.div>

                    {/* Shipping — full width */}
                    <motion.div
                        variants={cardVariants}
                        className="lg:col-span-3 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-structural-border dark:border-gray-800 bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/20 dark:to-blue-950/20 shadow-sm overflow-hidden group hover:border-blue-200 dark:hover:border-blue-800 transition-colors flex flex-col md:flex-row items-center gap-8"
                    >
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold dark:text-white mb-4">Advanced Shipping & Logging</h3>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "Deep ShipStation Integration",
                                    "Live rates, make and void labels with all major carriers",
                                    "Detailed tracking log of all shipments in and out"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                        <svg className="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400 mt-0.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                            <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-secondary-text dark:text-gray-300 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="grid grid-cols-3 gap-4 p-4 bg-white dark:bg-gray-900/80 rounded-2xl border border-gray-100 dark:border-gray-800">
                                {[
                                    { name: 'UPS', src: 'ups.svg' },
                                    { name: 'FedEx', src: 'fedex.svg' },
                                    { name: 'USPS', src: 'usps.svg' },
                                    { name: 'DHL', src: 'dhl.svg' },
                                    { name: 'ShipWire', src: 'shipwire.svg', invertDark: true, className: 'scale-[1.5]' },
                                    { name: 'Amazon', src: 'amazon.svg', invertDark: true, className: 'scale-[6]' }
                                ].map((carrier, i) => (
                                    <div key={i} className="aspect-[3/2] rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center border border-gray-100 dark:border-gray-700/50 p-4">
                                        <img
                                            src={`/logos/shipping/${carrier.src}`}
                                            alt={carrier.name}
                                            className={`w-full h-full object-contain opacity-70 ${carrier.invertDark ? 'dark:invert dark:opacity-80' : ''} ${carrier.className ?? ''}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function PaymentLogos() {
    return (
        <div className="flex shrink-0 items-center gap-8 md:gap-12 pr-8 md:pr-12">
            <img src="/logos/payments/visa.svg" alt="Visa" className="opacity-80 w-auto h-14 object-contain" />
            <img src="/logos/payments/amex.svg" alt="AMEX" className="opacity-80 w-auto h-14 object-contain" />
            <img src="/logos/payments/discover.svg" alt="Discover" className="opacity-80 w-auto h-14 object-contain" />
            <img src="/logos/payments/mastercard.svg" alt="Mastercard" className="opacity-80 w-auto h-14 object-contain" />
            <img src="/logos/payments/paypal.svg" alt="PayPal" className="opacity-80 w-auto h-14 object-contain" />
            <img src="/logos/payments/google-pay.svg" alt="Google Pay" className="opacity-80 w-auto h-14 object-contain" />
            <img src="/logos/payments/apple-pay.svg" alt="Apple Pay" className="opacity-80 w-auto h-14 object-contain" />
            <img src="/logos/payments/stripe-link.svg" alt="Stripe Link" className="opacity-80 w-auto h-7 object-contain" />
            <img src="/logos/payments/affirm.svg" alt="Affirm" className="opacity-80 w-auto h-7 object-contain" />
            <img src="/logos/payments/klarna.svg" alt="Klarna" className="opacity-80 w-auto h-7 object-contain" />
        </div>
    );
}
