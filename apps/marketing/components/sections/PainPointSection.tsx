'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

export default function PainPointSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const painPoints = [
        {
            time: "9:30 am",
            description: "Production manager copying order details from emails into 4 different spreadsheets.",
        },
        {
            time: "1:15 pm",
            description: "Team lead hunting through folders for artwork files from a job sent two weeks ago.",
        },
        {
            time: "5:45 pm",
            description: "Your best decorator manually updating inventory counts instead of running the next batch.",
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 20,
                mass: 1
            }
        }
    };

    return (
        <section
            className="relative py-16 md:py-24 lg:py-32 bg-background-light dark:bg-background-dark overflow-hidden"
        >
            {/* Static gradient blob — no animation to avoid rAF cost */}
            <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-primary rounded-full blur-[120px] opacity-[0.06] -z-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-mobile">
                {/* Main Headline */}
                <motion.div
                    ref={containerRef}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white mb-6 leading-tight tracking-tight"
                    >
                        Your best people are stuck doing low-value work.
                    </motion.h2>


                    {/* Pain Point Cards */}
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16"
                    >
                        {painPoints.map((point, index) => (
                            <SpotlightCard key={index} variants={itemVariants}>
                                {/* Clock Icon with Time */}
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-background-light/50 dark:bg-white/5 rounded-full border border-structural-border dark:border-white/10">
                                        {/* Static Clock Icon — no animation to avoid rAF cost */}
                                        <div className="w-6 h-6 md:w-8 md:h-8 relative">
                                            <div className="absolute inset-0 border-2 border-charcoal/30 dark:border-white/30 rounded-full"></div>
                                            {/* Hour hand — static */}
                                            <div
                                                className="absolute w-[2px] bg-charcoal dark:bg-white origin-bottom rounded-full"
                                                style={{ height: '42%', left: 'calc(50% - 1px)', bottom: '50%', transform: `rotate(${index * 60}deg)` }}
                                            />
                                            {/* Minute hand — static */}
                                            <div
                                                className="absolute w-[1px] bg-charcoal/70 dark:bg-white/70 origin-bottom rounded-full"
                                                style={{ height: '38%', left: 'calc(50% - 0.5px)', bottom: '50%', transform: `rotate(${index * 120}deg)` }}
                                            />
                                        </div>
                                    </div>
                                    <span
                                        className="text-lg md:text-xl font-semibold text-charcoal dark:text-white font-mono"
                                    >
                                        {point.time}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                    {point.description}
                                </p>
                            </SpotlightCard>
                        ))}
                    </motion.div>

                    {/* Bottom Message */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center"
                    >
                        <p className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-400 dark:text-gray-600">
                            We can automate all of this and give you hours back every day.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function SpotlightCard({ children, variants }: { children: React.ReactNode, variants?: Variants }) {
    const divRef = useRef<HTMLDivElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);

    // Direct DOM manipulation — avoids setState/re-render on every mousemove
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || !spotlightRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 40%)`;
    };

    const handleMouseEnter = () => {
        if (spotlightRef.current) spotlightRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
        if (spotlightRef.current) spotlightRef.current.style.opacity = '0';
    };

    return (
        <motion.div
            ref={divRef}
            variants={variants}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative flex flex-col justify-start overflow-hidden rounded-2xl border border-structural-border dark:border-white/10 bg-surface dark:bg-white/5 p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
        >
            <div
                ref={spotlightRef}
                className="pointer-events-none absolute -inset-px transition-opacity duration-300"
                style={{ opacity: 0 }}
            />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
