"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import CTAButton from "./CTAButton";

export default function LandingHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50 && !isScrolled) setIsScrolled(true);
        else if (latest <= 50 && isScrolled) setIsScrolled(false);
    });

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-0 z-50"
        >
            <div
                className={cn(
                    "mx-auto flex items-center justify-between px-6 md:px-12 transition-[background-color,border-color,box-shadow] duration-300",
                    isScrolled
                        ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/60 shadow-sm h-16"
                        : "bg-transparent border-b border-transparent h-20"
                )}
            >
                <Link href="/" className="flex items-center gap-2 group" aria-label="Shop Titan home">
                    <span className="text-xl md:text-2xl font-black tracking-tighter text-charcoal group-hover:opacity-80 transition-opacity">
                        Shop <span className="text-primary">Titan</span>
                    </span>
                </Link>

                <CTAButton label="Book a Demo" variant="primary" className="px-4 py-2 text-xs md:text-sm md:px-6 md:py-2.5" />
            </div>
        </motion.header>
    );
}
