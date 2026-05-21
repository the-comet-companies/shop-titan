'use client';

import Link from 'next/link';

const linkClass = "block transition-colors hover:text-charcoal text-graphite focus-primary tap-target font-light";

export default function Footer() {
    return (
        <footer className="bg-charcoal border-t border-line/30 py-16 md:py-20 lg:py-24 text-ivory">
            <div className="max-w-7xl mx-auto px-mobile">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12">

                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-3">
                        <a
                            href="#"
                            className="text-lg md:text-xl font-medium tracking-tight text-ivory mb-5 block"
                        >
                            Shop <span className="font-light italic text-ivory/70">Titan</span>
                        </a>
                        <div className="h-px w-10 bg-ivory/30 mb-5" />
                        <p className="text-ivory/60 text-sm max-w-xs leading-relaxed font-light">
                            A calm operating system for serious production shops.
                        </p>
                    </div>

                    {/* Platform */}
                    <div className="lg:col-span-2">
                        <h5 className="text-[10px] font-medium uppercase tracking-[0.22em] mb-6 text-ivory/50">
                            Platform
                        </h5>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/platform/filemaker-system" className="block transition-colors hover:text-ivory text-ivory/60 focus-primary tap-target font-light">FileMaker System</Link></li>
                            <li><Link href="/platform/ecommerce-storefront" className="block transition-colors hover:text-ivory text-ivory/60 focus-primary tap-target font-light">Ecommerce Storefront</Link></li>
                            <li><Link href="/platform/complete-system" className="block transition-colors hover:text-ivory text-ivory/60 focus-primary tap-target font-light">Complete System</Link></li>
                            <li><Link href="/platform/inventory-management" className="block transition-colors hover:text-ivory text-ivory/60 focus-primary tap-target font-light">Inventory Management</Link></li>
                            <li><Link href="/platform/production-automation" className="block transition-colors hover:text-ivory text-ivory/60 focus-primary tap-target font-light">Production Management</Link></li>
                            <li><Link href="/hire/filemaker-developer" className="block transition-colors hover:text-ivory text-ivory/60 focus-primary tap-target font-light">Hire a Developer</Link></li>
                            <li><Link href="/pricing" className="block transition-colors hover:text-ivory text-ivory/60 focus-primary tap-target font-light">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2">
                        <h5 className="text-[10px] font-medium uppercase tracking-[0.22em] mb-6 text-ivory/50">
                            Company
                        </h5>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="block transition-colors hover:text-ivory text-ivory/60 focus-primary tap-target font-light">About</Link></li>
                            <li><Link href="/#founder-story" className="block transition-colors hover:text-ivory text-ivory/60 focus-primary tap-target font-light">Founder Story</Link></li>
                            <li><Link href="/case-studies" className="block transition-colors hover:text-ivory text-ivory/60 focus-primary tap-target font-light">Case Studies</Link></li>
                            <li><Link href="/reach-out" className="block transition-colors hover:text-ivory text-ivory/60 focus-primary tap-target font-light">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="lg:col-span-2">
                        <h5 className="text-[10px] font-medium uppercase tracking-[0.22em] mb-6 text-ivory/50">
                            Legal
                        </h5>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/privacy-policy" className="block transition-colors hover:text-ivory text-ivory/60 focus-primary tap-target font-light">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="block transition-colors hover:text-ivory text-ivory/60 focus-primary tap-target font-light">Terms</Link></li>
                        </ul>
                    </div>

                    {/* Stay Updated */}
                    <div className="sm:col-span-2 lg:col-span-3">
                        <h5 className="text-[10px] font-medium uppercase tracking-[0.22em] mb-6 text-ivory/50">
                            Stay Updated
                        </h5>
                        <p className="text-ivory/60 text-sm mb-5 leading-relaxed font-light">
                            Periodic updates on our progress and new features.
                        </p>
                        <form className="flex flex-col gap-2 w-full" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full min-h-[44px] bg-transparent border border-ivory/20 text-ivory placeholder-ivory/40 rounded-[6px] px-4 py-3 focus:outline-none focus:border-ivory transition-colors text-sm font-light"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full min-h-[44px] bg-ivory text-charcoal text-[11px] font-medium rounded-[6px] px-6 py-3 tracking-[0.18em] uppercase hover:bg-white transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                <div className="mt-16 md:mt-20 pt-8 border-t border-ivory/15">
                    <p className="text-xs text-ivory/40 text-center md:text-left font-light">
                        © 2026 Shop Titan. Built on Claris FileMaker.
                    </p>
                </div>
            </div>
        </footer>
    );
}
