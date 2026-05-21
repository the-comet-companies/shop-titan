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
            const targetId = sectionId === 'features' ? 'solutions' : sectionId;
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
                        "mx-auto flex items-center justify-between px-6 md:px-10 transition-[background-color,border-color] duration-300",
                        isScrolled
                            ? "glass-nav h-14"
                            : "bg-transparent border-b border-transparent h-20"
                    )}
                >
                    <div className="flex-shrink-0">
                        <a
                            href="#"
                            className="flex items-center gap-2 group"
                            onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}
                        >
                            <span className="text-base md:text-lg font-medium tracking-tight text-charcoal dark:text-white group-hover:opacity-70 transition-opacity">
                                Shop <span className="font-light italic text-graphite dark:text-gray-300">Titan</span>
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2">
                        {NAV_SECTIONS.map((section, index) => (
                            <motion.button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.06, duration: 0.4 }}
                                className={cn(
                                    "text-[11px] font-medium transition-colors duration-200 tracking-[0.18em] uppercase focus-primary tap-target",
                                    (activeSection === section && pathname === '/') || (section === 'blog' && pathname === '/blog') || ((section as string) === 'contact' && pathname === '/reach-out') || (section === 'case-studies' && pathname === '/case-studies') || (section === 'pricing' && pathname === '/pricing') || (section === 'about' && pathname === '/about')
                                        ? "text-charcoal dark:text-white"
                                        : "text-graphite dark:text-gray-400 hover:text-charcoal dark:hover:text-white"
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
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-ivory text-[11px] tracking-[0.18em] uppercase font-medium rounded-[6px] hover:bg-black transition-colors focus-primary tap-target"
                        >
                            Request Demo
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'wght' 250" }}>
                                arrow_forward
                            </span>
                        </motion.button>
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="md:hidden w-10 h-10 flex items-center justify-center hover:bg-charcoal/5 dark:hover:bg-white/5 transition-colors tap-target focus-primary"
                        aria-label="Open menu"
                    >
                        <span className="material-symbols-outlined text-charcoal dark:text-gray-300" style={{ fontVariationSettings: "'wght' 250" }}>
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
