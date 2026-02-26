'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutUsSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const videoScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
    const videoY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

    return (
        <section ref={containerRef} id="about-us" className="pt-8 pb-24 md:pt-12 md:pb-32 bg-background-light dark:bg-background-dark overflow-hidden relative">

            {/* Background Texture - Subtle Grain or Gradient */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay"></div>

            <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">

                {/* 1. Intro Header - Cinematic & Centered */}
                <div className="mb-4 md:mb-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-charcoal/5 dark:bg-white/10 text-charcoal dark:text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 border border-charcoal/5 dark:border-white/5"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        Our Origin Story
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                        className="text-3xl sm:text-5xl md:text-7xl font-bold text-charcoal dark:text-white mb-2 tracking-tight leading-[1.1]"
                    >
                        Necessity is the <br className="hidden md:block" />
                        <span className="text-secondary-text dark:text-gray-500">mother of invention.</span>
                    </motion.h2>

                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: 24 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="w-[1px] bg-gradient-to-b from-charcoal/20 to-transparent dark:from-white/20 mx-auto"
                    ></motion.div>
                </div>

                {/* 2. Video Placeholder - Hero Layout */}
                <motion.div
                    style={{ scale: videoScale, y: videoY }}
                    className="relative w-full aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/10 dark:shadow-black/50 border border-structural-border dark:border-gray-800 group cursor-pointer"
                >
                    {/* Video Background / Thumbnail */}
                    <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>

                        {/* Play Button */}
                        <div className="relative z-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                            <span className="material-symbols-outlined text-3xl md:text-5xl text-white ml-1 md:ml-2">play_arrow</span>
                        </div>
                    </div>

                    {/* Overlay Gradient for Text Readability */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

                    {/* Video Label */}
                    <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 z-20">
                        <span className="inline-block px-1.5 py-0.5 md:px-2 md:py-1 bg-white/20 backdrop-blur-sm rounded text-[8px] md:text-[10px] font-bold text-white mb-1 md:mb-2 uppercase tracking-wide">
                            Watch the Film
                        </span>
                        <h3 className="text-white text-lg md:text-2xl font-bold">Building Shop Titan</h3>
                    </div>
                </motion.div>

                {/* 3. Founder Info - Directly Below Video */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 flex flex-col items-center justify-center text-center"
                >
                    <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-gray-200 dark:bg-gray-800 p-0.5 border border-white dark:border-gray-700 shadow-md mb-4 bg-[url('/placeholder-founder.jpg')] bg-cover bg-center">
                        <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">M</div>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-charcoal dark:text-white">Michael Monfared</h4>
                        <p className="text-sm text-secondary-text dark:text-gray-500 font-medium">Founder & CEO, Shop Titan</p>
                    </div>
                </motion.div>

                {/* 4. Narrative - Magazine Style Layout */}
                <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-x-16 items-start prose-container">

                    {/* Pull Quote Column */}
                    <div className="md:col-span-4 md:sticky md:top-32 self-start">
                        <motion.blockquote
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-2xl md:text-4xl italic text-charcoal dark:text-white leading-tight"
                        >
                            &ldquo;I didn&apos;t want to move, and I didn&apos;t like feeling stressed.&rdquo;
                        </motion.blockquote>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 60 }}
                            viewport={{ once: true }}
                            className="h-1 bg-primary mt-6 rounded-full"
                        />
                    </div>

                    {/* Story Text Column */}
                    <div className="md:col-span-8 space-y-8 text-lg leading-relaxed text-secondary-text dark:text-gray-400">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="first-letter:text-5xl md:first-letter:text-6xl first-letter:font-bold first-letter:text-charcoal dark:first-letter:text-white first-letter:mr-2 md:first-letter:mr-3 first-letter:float-left"
                        >
                            This solution came about because there was no solution I liked. So I built my own, over 15 years.
                            I realized stress came from not having optics on where anything is, having to stay on top of the team.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            So I built a solution where I could be anywhere in the world, and still run a large scale print shop.
                            Now, I am offering it to the rest of the world.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-surface dark:bg-white/5 border border-structural-border dark:border-white/10 p-8 rounded-2xl my-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="material-symbols-outlined text-8xl">format_quote</span>
                            </div>
                            <h4 className="text-xl font-bold text-charcoal dark:text-white mb-2 relative z-10">The Core Philosophy</h4>
                            <p className="text-charcoal dark:text-gray-300 italic font-medium relative z-10">
                                &quot;Every click has a follow action. We built this as automated as possible, as delegatable as possible,
                                and for the least amount of issues or mistakes to go wrong.&quot;
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Of course it&apos;s to help the team. But I had to do a lot to get it there.
                            It wasn&apos;t just about building software; it was about reclaiming freedom.
                        </motion.p>
                    </div>
                </div>

            </div>
        </section>
    );
}
