"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import MobileMenu from './ui/MobileMenu';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/lib/utils';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const NAV_SECTIONS = ['about', 'features', 'case-studies', 'pricing', 'blog'] as const;
const ACTIVE_SECTIONS = ['hero', 'platform', 'features', 'case-studies', 'pricing', 'blog', 'contact'] as const;

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50 && !isScrolled) {
            setIsScrolled(true);
        } else if (latest <= 50 && isScrolled) {
            setIsScrolled(false);
        }
    });

    const activeSection = useActiveSection(ACTIVE_SECTIONS);

    const scrollToSection = (sectionId: string) => {
        if (sectionId === 'blog') {
            router.push('/blog');
            return;
        }

        if (sectionId === 'contact') {
            router.push('/reach-out');
            return;
        }

        if (sectionId === 'pricing') {
            router.push('/pricing');
            return;
        }

        if (sectionId === 'about') {
            router.push('/about');
            return;
        }

        if (sectionId === 'case-studies') {
            router.push('/case-studies');
            return;
        }

        if (pathname === '/') {
            const targetId = sectionId === 'features' ? 'website-features' : sectionId;
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            router.push(`/#${sectionId}`);
        }
    };

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed left-0 right-0 z-50",
                    isScrolled ? "px-0" : "px-0"
                )}
            >
                <nav
                    className={cn(
                        "mx-auto flex items-center justify-between px-6 md:px-12 transition-[background-color,border-color,box-shadow] duration-300",
                        isScrolled
                            ? "glass-nav shadow-lg shadow-black/5 h-16"
                            : "bg-transparent border-b border-transparent h-20"
                    )}
                >
                    <div className="flex-shrink-0">
                        <motion.a
                            href="#"
                            className="flex items-center gap-2 group"
                            onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >

                            <span className="text-xl md:text-2xl lg:text-3xl font-black tracking-tighter text-charcoal dark:text-white group-hover:opacity-80 transition-opacity">
                                Shop <span className="text-primary">Titan</span>
                            </span>
                        </motion.a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
                        {NAV_SECTIONS.map((section, index) => (
                            <motion.button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                                className={cn(
                                    "text-xs font-semibold transition-[color,transform] duration-300 uppercase tracking-wider focus-primary tap-target hover:scale-110",
                                    (activeSection === section && pathname === '/') || (section === 'blog' && pathname === '/blog') || ((section as string) === 'contact' && pathname === '/reach-out') || (section === 'case-studies' && pathname === '/case-studies') || (section === 'pricing' && pathname === '/pricing') || (section === 'about' && pathname === '/about')
                                        ? "text-primary dark:text-white"
                                        : "text-secondary-text dark:text-gray-400 hover:text-primary dark:hover:text-white"
                                )}
                            >
                                {section === 'case-studies' ? 'Case Studies' : section.charAt(0).toUpperCase() + section.slice(1)}
                            </motion.button>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <motion.button
                            onClick={() => scrollToSection("contact")}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                                "group relative border-2 px-4 md:px-6 py-2 text-xs font-bold rounded-full transition-[background-color,border-color] duration-200 flex items-center gap-2 shadow-lg shadow-black/5 uppercase tracking-wide focus-primary tap-target",
                                "bg-white/15 dark:bg-white/5 border-charcoal/20 dark:border-white/30 hover:border-charcoal/30 dark:hover:border-white/40 text-charcoal dark:text-white hover:bg-white/25 dark:hover:bg-white/10"
                            )}
                        >
                            Request Demo{" "}
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </motion.button>
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
            </motion.header>

            {/* Mobile Menu Component */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                onNavigate={scrollToSection}
            />
        </>
    );
}
