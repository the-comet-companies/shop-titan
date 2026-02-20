'use client';

import { motion } from 'framer-motion';

export default function BenefitsSection() {
    return (
        <section id="benefits" className="pt-20 md:pt-32 pb-20 md:pb-32 bg-surface dark:bg-gray-950 relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-mobile relative z-10">
                <div className="mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                            The Ecosystem
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-charcoal dark:text-white leading-tight mb-4">
                            Built for reliability.<br />
                            <span className="text-secondary-text dark:text-gray-400">Integrated with everything.</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Bento Box Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Cloud Security Block (Span 2) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-structural-border dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-sm relative overflow-hidden group hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all flex flex-col justify-between"
                    >
                        <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mx-20 -my-20 group-hover:bg-primary/10 transition-colors" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                <span className="material-symbols-outlined text-2xl">cloud_done</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold dark:text-white mb-2">Fully Cloud Based on AWS S3</h3>
                            <p className="text-secondary-text dark:text-gray-400 font-medium">
                                Secure, enterprise-grade architecture. Your data, your access, you are in control.
                            </p>
                        </div>

                        <div className="mt-8 relative z-10 flex flex-wrap gap-3">
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

                    {/* Support Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="rounded-2xl md:rounded-3xl p-6 md:p-8 border border-structural-border dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-sm relative overflow-hidden group hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all"
                    >
                        <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl group-hover:bg-yellow-400/10 transition-colors" />
                        <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl flex items-center justify-center text-yellow-600 dark:text-yellow-500 mb-6">
                            <span className="material-symbols-outlined text-2xl">support_agent</span>
                        </div>
                        <h3 className="text-xl font-bold dark:text-white mb-2">Quick Response Support</h3>
                        <p className="text-secondary-text dark:text-gray-400 font-medium text-sm">
                            Real support happens through Slack, directly connecting you with our success team. Includes all maintenance and hosting so you focus on what you do best.
                        </p>
                    </motion.div>

                    {/* API & Automations Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-1 lg:col-span-1 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-structural-border dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-sm relative overflow-hidden group hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                                <span className="material-symbols-outlined text-2xl">webhook</span>
                            </div>
                            <h3 className="text-xl font-bold dark:text-white mb-2">API & Automations</h3>
                            <p className="text-secondary-text dark:text-gray-400 font-medium text-sm mb-6">
                                Unlimited possibilities with white-labeled, blind ship options using your client&apos;s logo, plus S3 bucket integrations.
                            </p>
                        </div>

                        {/* Logos Grid */}
                        <div className="grid grid-cols-2 gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
                            <div className="bg-gray-100 dark:bg-gray-800/50 rounded-lg h-12 flex items-center justify-center font-bold font-mono text-gray-800 dark:text-gray-200">
                                n8n
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg h-12 flex items-center justify-center font-bold text-orange-600 dark:text-orange-400 tracking-tight flex-col leading-none">
                                <span className="text-[10px] uppercase font-black">Zapier</span>
                            </div>
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg h-12 flex items-center justify-center col-span-2 font-bold text-indigo-700 dark:text-indigo-400">
                                make.com
                            </div>
                        </div>
                    </motion.div>

                    {/* Payments Block (Span 2) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-2 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-structural-border dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-sm relative overflow-hidden group hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all flex flex-col justify-between"
                    >
                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                            <span className="material-symbols-outlined text-2xl">payments</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold dark:text-white mb-2">Seamless Payments via Stripe</h3>
                        <p className="text-secondary-text dark:text-gray-400 font-medium mb-8 max-w-xl">
                            Accept all payment types. Create, accept, and record payments seamlessly directly through the platform.
                        </p>

                        <div className="w-full relative py-6 flex overflow-hidden">
                            {/* Faded edges */}
                            <div className="absolute left-0 inset-y-0 w-12 sm:w-20 bg-gradient-to-r from-surface dark:from-gray-900/50 to-transparent z-10" />
                            <div className="absolute right-0 inset-y-0 w-12 sm:w-20 bg-gradient-to-l from-surface dark:from-gray-900/50 to-transparent z-10" />

                            {/* Animated Payment Marquee */}
                            <motion.div
                                className="flex w-max shrink-0 items-center opacity-60 group-hover:opacity-100 transition-opacity"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            >
                                <PaymentLogos />
                                <PaymentLogos />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* ShipStation Integration Block (Span 3 on Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="lg:col-span-3 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-structural-border dark:border-gray-800 bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/20 dark:to-blue-950/20 backdrop-blur-sm shadow-sm relative overflow-hidden group hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all flex flex-col md:flex-row items-center gap-8"
                    >
                        <div className="flex-1">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                                <span className="material-symbols-outlined text-2xl">local_shipping</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold dark:text-white mb-2 pb-1">Advanced Shipping & Logging</h3>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-green-500 text-sm mt-1 border border-green-200 dark:border-green-800 rounded-full bg-green-50 dark:bg-green-900/30">check</span>
                                    <span className="text-secondary-text dark:text-gray-300 font-medium">Deep ShipStation Integration</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-green-500 text-sm mt-1 border border-green-200 dark:border-green-800 rounded-full bg-green-50 dark:bg-green-900/30">check</span>
                                    <span className="text-secondary-text dark:text-gray-300 font-medium">Live rates, make and void labels with all major carriers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-green-500 text-sm mt-1 border border-green-200 dark:border-green-800 rounded-full bg-green-50 dark:bg-green-900/30">check</span>
                                    <span className="text-secondary-text dark:text-gray-300 font-medium">Detailed tracking log of all shipments in and out</span>
                                </li>
                            </ul>
                        </div>

                        {/* Carrier Logos */}
                        <div className="flex-1 w-full relative">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white dark:bg-gray-900/80 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-inner perspective-1000">
                                {['UPS', 'FedEx', 'USPS', 'DHL', 'ShipWire', 'Amazon'].map((carrier, i) => (
                                    <div key={i} className="aspect-[3/2] rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center font-bold text-gray-400 dark:text-gray-500 border border-gray-100 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700 hover:text-charcoal dark:hover:text-white hover:scale-105 hover:shadow-md transition-all cursor-default">
                                        <span className="text-xs uppercase tracking-wider">{carrier}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}

function PaymentLogos() {
    return (
        <div className="flex items-center gap-8 px-4">
            <span className="text-xl font-bold italic tracking-tight text-[#1434CB] dark:text-[#a0aeff] opacity-80 backdrop-grayscale">VISA</span>
            <span className="text-xl font-black text-[#006FCF] dark:text-[#6ba7f7] bg-blue-50 dark:bg-white/10 px-2 py-0.5 rounded opacity-80">AMEX</span>
            <span className="text-xl font-bold text-gray-800 dark:text-white opacity-80">DISCOVER</span>
            <span className="text-2xl text-[#eb001b] opacity-80 relative w-8 h-8 flex justify-center items-center">
                <div className="w-5 h-5 bg-[#eb001b] rounded-full absolute left-0" />
                <div className="w-5 h-5 bg-[#f79e1b] rounded-full absolute right-0 mix-blend-multiply dark:mix-blend-screen" />
            </span>
            <span className="text-2xl font-black italic text-[#003087] dark:text-[#7ba9ff] opacity-80">PayPal</span>
            <span className="text-xl font-medium text-gray-800 dark:text-gray-200 flex items-center gap-1 opacity-80">
                <span className="flex text-lg items-center text-blue-500">G</span>Pay
            </span>
            <span className="text-xl font-medium text-gray-800 dark:text-gray-200 flex items-center gap-1 opacity-80">
                <span className="material-symbols-outlined text-sm">apple</span>Pay
            </span>
            <span className="text-xl font-black text-[#00D632] dark:text-[#2bed5f] flex items-center gap-1 opacity-80">
                <span className="w-4 h-4 rounded-sm bg-current rotate-45 mr-1" /> link
            </span>
            <span className="text-xl font-bold text-gray-800 dark:text-gray-200 px-3 border border-gray-300 dark:border-gray-600 rounded-full opacity-80">
                affirm
            </span>
            <span className="text-lg font-bold text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30 px-3 py-1 rounded-full opacity-80">
                Klarna.
            </span>
        </div>
    );
}
