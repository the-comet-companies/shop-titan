"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import MobileMenu from './ui/MobileMenu';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/lib/utils';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const activeSection = useActiveSection(['hero', 'platform', 'product', 'features', 'blog', 'contact']);

    const scrollToSection = (sectionId: string) => {
        if (pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            router.push(`/#${sectionId}`);
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
                            className="flex items-center gap-2 group"
                            onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}
                        >
                            <div className="relative w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                <Image
                                    src="/logo-transparent.png"
                                    alt="Shop Titan Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-sm md:text-base lg:text-lg font-bold tracking-tight text-charcoal dark:text-white group-hover:opacity-80 transition-opacity">
                                Shop <span className="text-primary">Titan</span>
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
                        {['platform', 'product', 'features', 'blog'].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={cn(
                                    "text-xs font-semibold transition-all duration-300 uppercase tracking-wider focus-primary tap-target hover:scale-110",
                                    activeSection === section
                                        ? "text-primary dark:text-white"
                                        : "text-secondary-text dark:text-gray-400 hover:text-primary dark:hover:text-white"
                                )}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={() => scrollToSection("contact")}
                            className={cn(
                                "group relative backdrop-blur-xl border px-4 md:px-6 py-2 text-xs font-bold rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg shadow-black/5 uppercase tracking-wide focus-primary tap-target",
                                activeSection === 'contact'
                                    ? "bg-primary text-white border-primary hover:bg-primary/90"
                                    : "bg-white/5 dark:bg-white/5 border-white/10 hover:border-white/20 text-charcoal dark:text-white hover:bg-white/10"
                            )}
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

