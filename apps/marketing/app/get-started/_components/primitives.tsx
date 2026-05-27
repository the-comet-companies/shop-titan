"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <span
            className={cn(
                "font-mono text-[11px] uppercase tracking-[0.18em] text-secondary-text",
                className
            )}
        >
            {children}
        </span>
    );
}

export function SectionWrap({
    children,
    className,
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {
    return (
        <section id={id} className={cn("py-24 md:py-32 border-t border-structural-border", className)}>
            <div className="max-w-container mx-auto px-4 md:px-6">{children}</div>
        </section>
    );
}

export function FadeIn({
    children,
    className,
    as: Tag = "div",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    as?: "div" | "h2" | "h3" | "p" | "span" | "ul" | "li";
    delay?: number;
}) {
    const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;
    return (
        <MotionTag
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                ...fadeUp,
                show: { ...(fadeUp.show as object), transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } },
            }}
            className={className}
        >
            {children}
        </MotionTag>
    );
}

interface SectionHeaderProps {
    eyebrow?: string;
    headline: React.ReactNode;
    subhead?: React.ReactNode;
    body?: React.ReactNode;
    align?: "left" | "center";
}

export function SectionHeader({ eyebrow, headline, subhead, body, align = "left" }: SectionHeaderProps) {
    const textAlign = align === "center" ? "text-center mx-auto" : "";
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className={cn("max-w-3xl", textAlign)}
        >
            {eyebrow && (
                <motion.div variants={fadeUp} className="mb-5">
                    <Eyebrow>{eyebrow}</Eyebrow>
                </motion.div>
            )}
            <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal"
            >
                {headline}
            </motion.h2>
            {subhead && (
                <motion.p
                    variants={fadeUp}
                    className="mt-5 text-lg md:text-xl text-secondary-text leading-relaxed"
                >
                    {subhead}
                </motion.p>
            )}
            {body && (
                <motion.p
                    variants={fadeUp}
                    className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed"
                >
                    {body}
                </motion.p>
            )}
        </motion.div>
    );
}

// Crimson Pro italic for pain words inside headlines.
export function Em({ children }: { children: React.ReactNode }) {
    return <span className="font-serif italic font-normal text-primary">{children}</span>;
}
