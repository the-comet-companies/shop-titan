'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion.create(Link);

export default function Footer() {
    return (
        <footer className="bg-[#111111] border-t border-[#222] py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-mobile">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
                    <div className="sm:col-span-2 lg:col-span-4">
                        <a
                            href="#"
                            className="text-lg md:text-xl font-bold tracking-tight text-white mb-4 md:mb-6 block"
                        >
                            Shop <span className="text-primary">Titan</span>
                        </a>
                        <p className="text-gray-400 text-sm md:text-base max-w-xs leading-relaxed">
                            Custom FileMaker solutions for the apparel decoration industry.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <h5 className="text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 text-white">
                            Explore
                        </h5>
                        <ul className="space-y-3 md:space-y-4 text-sm text-gray-400">
                            <li>
                                <MotionLink
                                    href="/blog"
                                    whileHover={{ x: 5, color: "#EF4444" }}
                                    className="block transition-colors focus-primary tap-target hover:text-white"
                                >
                                    Case Studies
                                </MotionLink>
                            </li>
                            <li>
                                <MotionLink
                                    href="/#platform"
                                    whileHover={{ x: 5, color: "#EF4444" }}
                                    className="block transition-colors focus-primary tap-target hover:text-white"
                                >
                                    Platform
                                </MotionLink>
                            </li>
                            <li>
                                <MotionLink
                                    href="/pricing"
                                    whileHover={{ x: 5, color: "#EF4444" }}
                                    className="block transition-colors focus-primary tap-target hover:text-white"
                                >
                                    Pricing
                                </MotionLink>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h5 className="text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 text-white">
                            Legal
                        </h5>
                        <ul className="space-y-3 md:space-y-4 text-sm text-gray-400">
                            <li>
                                <MotionLink
                                    href="/privacy-policy"
                                    whileHover={{ x: 5, color: "#EF4444" }}
                                    className="block transition-colors focus-primary tap-target hover:text-white"
                                >
                                    Privacy Policy
                                </MotionLink>
                            </li>
                            <li>
                                <MotionLink
                                    href="/terms"
                                    whileHover={{ x: 5, color: "#EF4444" }}
                                    className="block transition-colors focus-primary tap-target hover:text-white"
                                >
                                    Terms
                                </MotionLink>
                            </li>
                        </ul>
                    </div>

                    <div className="sm:col-span-2 lg:col-span-4">
                        <h5 className="text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 text-white">
                            Stay Updated
                        </h5>
                        <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
                            Get periodic updates on our progress and new features.
                        </p>
                        <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full bg-[#161616] border border-[#222] text-gray-300 placeholder-gray-500 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-none transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-white text-black text-xs font-bold px-6 py-3 tracking-widest uppercase hover:bg-gray-200 transition-colors whitespace-nowrap rounded-none border border-white"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 md:mt-16 lg:mt-20 pt-6 md:pt-8 border-t border-[#222]">
                    <p className="text-xs text-secondary-text text-center md:text-left text-gray-500">
                        © 2026 Shop Titan. Built on Claris FileMaker.
                    </p>
                </div>
            </div>
        </footer>
    );
}
