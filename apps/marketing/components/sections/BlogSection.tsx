'use client';

import { motion } from 'framer-motion';
import { articles } from '@/lib/blog-data';
import Link from 'next/link';

export default function BlogSection() {
    return (
        <section id="blog" className="bg-ivory pt-24 md:pt-32 pb-24 md:pb-32">
            <div className="max-w-7xl mx-auto px-mobile">

                {/* Architectural header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 md:mb-24">
                    <div className="lg:col-span-5">
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="inline-block text-[11px] tracking-[0.22em] uppercase text-graphite font-medium mb-6"
                        >
                            Editorial
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-light text-charcoal leading-[1.05] tracking-tight"
                        >
                            The architecture of{' '}
                            <span className="italic font-extralight text-graphite">modern apparel decoration.</span>
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-7 lg:pt-2 text-lg md:text-xl text-graphite leading-relaxed font-light max-w-2xl"
                    >
                        Field notes on running a print shop. Operations, FileMaker, ecommerce, inventory, and scaling. Written from inside the work, not the sidelines.
                    </motion.p>
                </div>

                {/* Article index with hairline dividers */}
                <div className="border-t border-line">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
                            className="border-b border-line"
                        >
                            <Link
                                href={`/blog/${article.slug}`}
                                className="group block py-10 md:py-14 hover:bg-stone/40 transition-colors"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">

                                    {/* Left: number + date + category */}
                                    <div className="lg:col-span-3">
                                        <div className="flex items-baseline gap-4 mb-6">
                                            <span className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="h-px flex-1 bg-line group-hover:bg-charcoal/40 transition-colors" />
                                        </div>
                                        <p className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium mb-2">
                                            {article.category}
                                        </p>
                                        <p className="text-xs text-graphite font-light">
                                            {article.date}
                                        </p>
                                    </div>

                                    {/* Middle: title + description */}
                                    <div className="lg:col-span-7">
                                        <h2
                                            className="text-2xl md:text-3xl lg:text-4xl text-charcoal leading-snug tracking-tight mb-5 group-hover:text-black transition-colors"
                                            style={{ fontFamily: 'var(--font-crimson), serif' }}
                                        >
                                            {article.title}
                                        </h2>
                                        <p className="text-sm md:text-base text-graphite leading-relaxed font-light max-w-2xl">
                                            {article.description}
                                        </p>
                                    </div>

                                    {/* Right: read link */}
                                    <div className="lg:col-span-2 lg:pt-2">
                                        <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-charcoal font-medium">
                                            <span>Read</span>
                                            <span
                                                className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform"
                                                style={{ fontVariationSettings: "'wght' 250" }}
                                            >
                                                arrow_forward
                                            </span>
                                        </span>
                                    </div>

                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                {/* View all (placeholder for future archive expansion) */}
                <div className="mt-20 flex justify-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm tracking-wide font-medium border border-charcoal text-charcoal rounded-[6px] hover:bg-charcoal hover:text-ivory transition-colors group"
                    >
                        <span>View All Articles</span>
                        <span
                            className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform"
                            style={{ fontVariationSettings: "'wght' 250" }}
                        >
                            arrow_forward
                        </span>
                    </Link>
                </div>

            </div>
        </section>
    );
}
