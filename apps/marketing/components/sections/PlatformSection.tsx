'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const platformData = [
    {
        statement: "Visibility",
        rotatingWords: ["REAL-TIME CLARITY", "FINANCIAL INSIGHT", "CAPACITY TRACKING"],
        outcome: "Executive Visibility: Real-time financial and capacity clarity — without reports or follow-ups.",
    },
    {
        statement: "Auto Mode",
        rotatingWords: ["AUTOMATED ROUTING", "VALIDATION", "SYNCHRONIZATION"],
        outcome: "Autonomous Execution: Automated routing, validation, and synchronization across production.",
    },
    {
        statement: "Ownership",
        rotatingWords: ["P&L VISIBILITY", "FORECASTING", "CAPITAL ALLOCATION"],
        outcome: "Level 01: Strategic Oversight",
    },
    {
        statement: "Management",
        rotatingWords: ["PRODUCTION FLOW", "INVENTORY INTEGRITY", "WORKFORCE ALLOCATION"],
        outcome: "Level 02: Operational Command",
    },
    {
        statement: "Automation",
        rotatingWords: ["ERROR PREVENTION", "WORKFLOW AUTOMATION", "STATUS SYNCHRONIZATION"],
        outcome: "Core Engine: System Enforcement Layer",
    },
];

export default function PlatformSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null); // Ref for the styled container
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    const outlineWordsRefs = useRef<(HTMLSpanElement | null)[][]>([]);
    const solidWordsRefs = useRef<(HTMLSpanElement | null)[][]>([]);

    const setOutlineWordRef = (el: HTMLSpanElement | null, itemIndex: number, wordIndex: number) => {
        if (!outlineWordsRefs.current[itemIndex]) outlineWordsRefs.current[itemIndex] = [];
        if (el) outlineWordsRefs.current[itemIndex][wordIndex] = el;
    };

    const setSolidWordRef = (el: HTMLSpanElement | null, itemIndex: number, wordIndex: number) => {
        if (!solidWordsRefs.current[itemIndex]) solidWordsRefs.current[itemIndex] = [];
        if (el) solidWordsRefs.current[itemIndex][wordIndex] = el;
    };

    useEffect(() => {
        const el = sectionRef.current;
        const container = containerRef.current;
        if (!el || !container) return;

        const ctx = gsap.context(() => {
            // Initial states
            // Container starts slightly scaled down and transparent
            gsap.set(container, { autoAlpha: 0, scale: 0.95, y: 50 });

            // Items start hidden
            itemsRef.current.forEach((item) => {
                if (item) {
                    gsap.set(item, { autoAlpha: 0, y: 30, scale: 0.9 });
                }
            });

            // Initialize words
            platformData.forEach((_, itemIndex) => {
                const outlineWords = outlineWordsRefs.current[itemIndex];
                const solidWords = solidWordsRefs.current[itemIndex];
                if (outlineWords && solidWords) {
                    outlineWords.forEach((w, i) => gsap.set(w, { autoAlpha: i === 0 ? 1 : 0, y: i === 0 ? 0 : 20 }));
                    solidWords.forEach((w, i) => gsap.set(w, { autoAlpha: i === 0 ? 1 : 0, y: i === 0 ? 0 : 20 }));
                }
            });

            // Rotating Words Animation
            platformData.forEach((_, index) => {
                const words = platformData[index].rotatingWords;
                const outlineWords = outlineWordsRefs.current[index];
                const solidWords = solidWordsRefs.current[index];

                if (outlineWords && solidWords && words.length > 1) {
                    const rotTl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
                    const stayTime = 2;

                    for (let i = 0; i < words.length; i++) {
                        const nextI = (i + 1) % words.length;

                        rotTl.to({}, { duration: stayTime });

                        rotTl.to([outlineWords[i], solidWords[i]], {
                            autoAlpha: 0,
                            y: -20,
                            duration: 0.5,
                            ease: "power2.inOut"
                        }, "switch" + i);

                        rotTl.to([outlineWords[nextI], solidWords[nextI]], {
                            autoAlpha: 1,
                            y: 0,
                            duration: 0.5,
                            ease: "power2.inOut"
                        }, "switch" + i + "+=0");
                    }
                }
            });


            // Scroll Trigger for Revealing Items (No Pinning, Just Reveal)
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%", // Start animating when section hits 80% of viewport
                    end: "top 20%",
                    toggleActions: "play none none reverse" // Play on enter, reverse on leave back up
                }
            });

            // 1. Reveal Container first
            tl.to(container, {
                autoAlpha: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            });

            // 2. Reveal Items with Stagger
            // We want them to pop in one by one shortly after container appears
            itemsRef.current.forEach((item, index) => {
                if (item) {
                    tl.to(item, {
                        autoAlpha: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        ease: "back.out(1.2)" // Tiny bounce for dynamic feel
                    }, 0.2 + (index * 0.1)); // Faster stagger
                }
            });

            // Buffer at end
            tl.to({}, { duration: 0.5 });

        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="platform" className="relative min-h-screen w-full bg-white dark:bg-background-dark flex flex-col items-center justify-center py-24 md:py-32">

            <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24 flex flex-col justify-center">
                {/* Main Container */}
                <div
                    ref={containerRef}
                    className="w-full bg-neutral-100 dark:bg-neutral-900/50 rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 p-8 md:p-16 shadow-2xl opacity-0" // Start invisible
                >

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16 w-full place-items-center">
                        {platformData.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => { itemsRef.current[index] = el; }}
                                className={`flex flex-col items-center justify-center text-center w-full max-w-md ${index === 4 ? "md:col-span-2 md:w-2/3" : ""
                                    }`}
                            >
                                {/* Statement */}
                                <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-5xl text-charcoal dark:text-white mb-2 md:mb-3 tracking-tight">
                                    {item.statement}
                                </h2>

                                {/* Rotating Wrapper */}
                                <div className="relative h-[1.2em] md:h-[1.5em] w-full flex justify-center items-center overflow-visible mb-2 md:mb-4">
                                    {item.rotatingWords.map((word, wordIndex) => (
                                        <div key={wordIndex} className="absolute inset-0 flex items-center justify-center">
                                            <span
                                                ref={el => setOutlineWordRef(el, index, wordIndex)}
                                                className="font-sans font-bold text-transparent text-lg sm:text-xl md:text-3xl whitespace-nowrap absolute"
                                                style={{ WebkitTextStroke: "1px #9ca3af" }}
                                            >
                                                {word}
                                            </span>
                                            <span
                                                ref={el => setSolidWordRef(el, index, wordIndex)}
                                                className="font-sans font-bold text-lg sm:text-xl md:text-3xl text-gray-400 dark:text-gray-500 whitespace-nowrap absolute"
                                            >
                                                {word}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Outcome */}
                                <p className="font-sans text-xs sm:text-sm text-gray-400 dark:text-gray-500 leading-relaxed max-w-sm">
                                    {item.outcome}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
