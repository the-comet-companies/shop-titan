'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { articles } from '@/lib/blog-data';
import Link from 'next/link';

export default function BlogSection() {
    const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { elementRef: articlesRef, isVisible: articlesVisible } = useScrollAnimation();

    return (
        <section id="blog" className="pt-24 sm:pt-32 md:pt-48 pb-24 md:pb-40">
            <div className="max-w-4xl mx-auto px-mobile">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`mb-16 sm:mb-24 md:mb-32 border-b border-structural-border dark:border-gray-900 pb-12 md:pb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h1 className="text-[11px] font-bold tracking-[0.3em] text-primary uppercase mb-4 md:mb-6">
                        Editorial Insights
                    </h1>
                    <p className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-charcoal dark:text-gray-200">
                        The architecture of modern apparel decoration.
                    </p>
                </div>

                {/* Articles */}
                <div
                    ref={articlesRef}
                    className={`space-y-24 sm:space-y-32 md:space-y-48 transition-all duration-700 delay-100 ${articlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-text dark:text-gray-500 mb-4 md:mb-6">
                                <span>{article.date}</span>
                                <span className="w-1 h-1 rounded-full bg-structural-border"></span>
                                <span className="text-primary">{article.category}</span>
                            </div>
                            <Link href={`/blog/${article.slug}`} className="block group">
                                <h2 className="article-title font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal dark:text-white group-hover:text-primary transition-colors duration-400 mb-6 md:mb-8">
                                    {article.title}
                                </h2>
                            </Link>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
                                <p className="max-w-xl text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed font-light">
                                    {article.description}
                                </p>
                                <Link
                                    href={`/blog/${article.slug}`}
                                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary focus-primary tap-target whitespace-nowrap group/link"
                                >
                                    <motion.span whileHover={{ x: 5 }} className="flex items-center gap-2">
                                        Read Analysis{" "}
                                        <span className="material-symbols-outlined text-sm">
                                            arrow_forward
                                        </span>
                                    </motion.span>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View All */}
                <div className="mt-48 pt-16 border-t border-structural-border dark:border-gray-900 flex justify-center">
                    <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary-text hover:text-charcoal dark:hover:text-white transition-all py-5 px-10 border border-structural-border dark:border-gray-800 rounded-full hover:border-charcoal dark:hover:border-white">
                        View All Archives
                    </button>
                </div>
            </div>
        </section>
    );
}
