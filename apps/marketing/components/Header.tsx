"use client";

import { useState } from 'react';
import MobileMenu from './ui/MobileMenu';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <header className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-6">
                <nav
                    className="glass-nav max-w-6xl mx-auto h-14 md:h-16 rounded-full flex items-center justify-between px-4 md:px-6 transition-all duration-300"
                >
                    <div className="flex-shrink-0">
                        <a
                            href="#"
                            className="text-sm md:text-base lg:text-lg font-bold tracking-tight text-charcoal dark:text-white"
                        >
                            Shop <span className="text-primary">Titan</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
                        <button
                            onClick={() => scrollToSection("hero")}
                            className="text-xs font-semibold text-secondary-text dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors uppercase tracking-wider focus-primary tap-target"
                        >
                            Product
                        </button>
                        <button
                            onClick={() => scrollToSection("platform")}
                            className="text-xs font-semibold text-secondary-text dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors uppercase tracking-wider focus-primary tap-target"
                        >
                            Platform
                        </button>
                        <button
                            onClick={() => scrollToSection("features")}
                            className="text-xs font-semibold text-secondary-text dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors uppercase tracking-wider focus-primary tap-target"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection("blog")}
                            className="text-xs font-semibold text-secondary-text dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors uppercase tracking-wider focus-primary tap-target"
                        >
                            Blog
                        </button>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <button className="hidden lg:block text-xs font-bold text-secondary-text dark:text-gray-400 hover:text-charcoal dark:hover:text-white transition-all uppercase tracking-wider px-3 focus-primary tap-target">
                            Log in
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="group relative backdrop-blur-xl bg-white/5 dark:bg-white/5 border border-white/10 hover:border-white/20 text-charcoal dark:text-white px-4 md:px-6 py-2 text-xs font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 flex items-center gap-2 shadow-lg shadow-black/5 uppercase tracking-wide focus-primary tap-target"
                        >
                            Request Demo{" "}
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </button>
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors tap-target focus-primary"
                        aria-label="Open menu"
                    >
                        <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">
                            menu
                        </span>
                    </button>
                </nav>
            </header>

            {/* Mobile Menu Component */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                onNavigate={scrollToSection}
            />
        </>
    );
}
