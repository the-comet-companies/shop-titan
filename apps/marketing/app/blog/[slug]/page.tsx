import { articles, formatBlogDate } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/schema";
import Footer from "@/components/Footer";
import BlogFAQ from "./BlogFAQ";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const post = articles.find((article) => article.slug === slug);

    if (!post) {
        return { title: "Article Not Found | Shop Titan" };
    }

    return generatePageMetadata({
        // seoTitle keeps the <title> under 60 chars; post.title (longer) stays the H1.
        title: post.seoTitle || post.title,
        description: post.description,
        path: `/blog/${post.slug}`,
        type: "blog",
        ogType: "article",
        publishedTime: post.date,
        author: post.author,
    });
}

// Generate static params
export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

// Extract FAQ pairs from HTML content
function extractFAQs(content: string): { question: string; answer: string }[] {
    const faqs: { question: string; answer: string }[] = [];
    const faqSection = content.split('<h2>FAQ</h2>');
    if (faqSection.length < 2) return faqs;

    const faqHtml = faqSection[1];
    const regex = /<h2><strong>([^<]*)<\/strong><\/h2>[\s\S]*?<p>([\s\S]*?)<\/p>/g;
    let match;
    while ((match = regex.exec(faqHtml)) !== null) {
        faqs.push({
            question: match[1].replace(/<[^>]*>/g, ''),
            answer: match[2].replace(/<[^>]*>/g, ''),
        });
    }
    return faqs;
}

// Get content before FAQ section
function getMainContent(content: string): string {
    const parts = content.split('<h2>FAQ</h2>');
    return parts[0];
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = articles.find((article) => article.slug === slug);

    if (!post) {
        notFound();
    }

    const faqs = extractFAQs(post.content);
    const mainContent = getMainContent(post.content);

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.description,
                "datePublished": post.date,
                "dateModified": post.updated ?? post.date,
                "author": {
                    "@type": "Person",
                    "name": post.author,
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Shop Titan",
                    "url": "https://shoptitan.app",
                },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://shoptitan.app/blog/${post.slug}`,
                },
            },
            ...(faqs.length > 0
                ? [
                      {
                          "@type": "FAQPage",
                          "mainEntity": faqs.map((faq) => ({
                              "@type": "Question",
                              "name": faq.question,
                              "acceptedAnswer": {
                                  "@type": "Answer",
                                  "text": faq.answer,
                              },
                          })),
                      },
                  ]
                : []),
        ],
    };

    return (
        <>
            <article className="min-h-screen bg-off-white dark:bg-black pt-32 pb-24 md:pt-48 md:pb-40 px-mobile">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <div className="max-w-3xl mx-auto">
                    {/* Back Link */}
                    <div className="mb-12 md:mb-16">
                        <Link
                            href="/blog"
                            className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-text hover:text-primary transition-colors flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                            Back to Insights
                        </Link>
                    </div>

                    {/* Header */}
                    <header className="mb-10 md:mb-14">
                        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-text dark:text-gray-500 mb-6">
                            <span>Published {formatBlogDate(post.date)}</span>
                            {post.updated && (
                                <>
                                    <span className="w-1 h-1 rounded-full bg-structural-border"></span>
                                    <span>Updated {formatBlogDate(post.updated)}</span>
                                </>
                            )}
                            <span className="w-1 h-1 rounded-full bg-structural-border"></span>
                            <span className="text-primary">{post.category}</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal dark:text-white tracking-tight leading-tight">
                            {post.title}
                        </h1>
                    </header>

                    {/* Quick Answer (AEO: direct answer AI engines can extract) */}
                    {post.quickAnswer && (
                        <div className="mb-10 md:mb-14 rounded-2xl border border-primary/20 bg-primary/5 p-5 md:p-6">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Quick Answer</p>
                            <p className="text-base md:text-lg text-charcoal dark:text-gray-200 leading-relaxed">
                                {post.quickAnswer}
                            </p>
                        </div>
                    )}

                    {/* Content */}
                    <div
                        className="
                            max-w-none
                            [&>p]:text-base [&>p]:text-secondary-text [&>p]:dark:text-gray-400 [&>p]:leading-[1.8] [&>p]:mb-7
                            [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-charcoal [&>h2]:dark:text-white [&>h2]:tracking-tight [&>h2]:mt-16 [&>h2]:mb-6
                            [&>ul]:my-7 [&>ul]:space-y-4 [&>ol]:my-7 [&>ol]:space-y-4
                            [&>ul>li]:text-base [&>ul>li]:text-secondary-text [&>ul>li]:dark:text-gray-400 [&>ul>li]:leading-[1.8] [&>ul>li]:pl-1
                            [&>ol>li]:text-base [&>ol>li]:text-secondary-text [&>ol>li]:dark:text-gray-400 [&>ol>li]:leading-[1.8] [&>ol>li]:pl-1
                            [&_strong]:text-charcoal [&_strong]:dark:text-gray-200 [&_strong]:font-bold
                            [&_a]:text-primary [&_a]:no-underline hover:[&_a]:underline
                            [&_em]:text-secondary-text [&_em]:dark:text-gray-400
                        "
                        dangerouslySetInnerHTML={{ __html: mainContent }}
                    />

                    {/* FAQ Accordion */}
                    {faqs.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-8">
                                Frequently Asked Questions
                            </h2>
                            <BlogFAQ faqs={faqs} />
                        </div>
                    )}

                    {/* Footer / Author */}
                    <div className="mt-16 pt-12 border-t border-structural-border dark:border-gray-800">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-text">
                            Written by{" "}
                            <Link href="/about" className="text-charcoal dark:text-white hover:text-primary transition-colors">{post.author}</Link>
                        </p>
                        <p className="mt-3 text-sm font-normal normal-case tracking-normal text-secondary-text dark:text-gray-400 leading-relaxed max-w-xl">
                            Founder of Shop Titan, drawing on 15+ years running a $1M+ print and decoration shop.{" "}
                            <Link href="/about" className="text-primary hover:underline">More about the team</Link>.
                        </p>
                    </div>
                </div>
            </article>
            <Footer />
        </>
    );
}
