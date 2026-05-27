"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// All paid-funnel CTAs route here. Single destination is enforced at the type level.
export const CTA_DESTINATION = "/reach-out";

// Exactly four allowed labels. Rotate them across the page; never invent a new one.
export type CtaLabel =
    | "Book a Demo"
    | "See Shop Titan in Action"
    | "Get the Production System"
    | "Request a Walkthrough";

type Variant = "primary" | "secondary";

interface CTAButtonProps {
    label: CtaLabel;
    variant?: Variant;
    className?: string;
}

export default function CTAButton({ label, variant = "primary", className }: CTAButtonProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
        >
            <Link
                href={CTA_DESTINATION}
                className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-[background-color,border-color,filter] duration-200 focus-primary",
                    variant === "primary"
                        ? "bg-primary text-white shadow-lg shadow-primary/20 hover:brightness-110 hover:shadow-xl hover:shadow-primary/30"
                        : "bg-white/60 border border-charcoal/15 backdrop-blur-md text-charcoal hover:bg-white/85",
                    className
                )}
            >
                {label}
                <span className="material-symbols-outlined text-base" aria-hidden>
                    arrow_forward
                </span>
            </Link>
        </motion.div>
    );
}
