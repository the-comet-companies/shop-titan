'use client';

import { useRef, useState } from 'react';
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
            {/* Gradient Blob Background - Animated */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.08, 0.05]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-primary rounded-full blur-[120px] -z-10"
            />

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
                                        {/* Animated Clock Icon */}
                                        <div className="w-6 h-6 md:w-8 md:h-8 relative">
                                            <div className="absolute inset-0 border-2 border-charcoal/30 dark:border-white/30 rounded-full"></div>
                                            <motion.div
                                                className="absolute top-1/2 left-1/2 w-[1px] h-1/2 bg-charcoal dark:bg-white origin-bottom"
                                                style={{ left: '50%', top: '0' }}
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                            />
                                            <motion.div
                                                className="absolute top-1/2 left-1/2 w-[1px] h-1/3 bg-charcoal dark:bg-white origin-bottom"
                                                style={{ left: '50%', top: '16.66%' }}
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                            />
                                        </div>
                                    </div>
                                    <motion.span
                                        className="text-lg md:text-xl font-semibold text-charcoal dark:text-white font-mono"
                                        animate={{
                                            textShadow: ["0 0 0px rgba(239,68,68,0)", "0 0 8px rgba(239,68,68,0.4)", "0 0 0px rgba(239,68,68,0)"],
                                            color: ["#1D1D1F", "#3F1D1F", "#1D1D1F"]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                                    >
                                        {point.time}
                                    </motion.span>
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
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            variants={variants}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative flex flex-col justify-start overflow-hidden rounded-2xl border border-structural-border dark:border-white/10 bg-surface dark:bg-white/5 p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
        >
            <div
                className="pointer-events-none absolute -inset-px transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
            />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
