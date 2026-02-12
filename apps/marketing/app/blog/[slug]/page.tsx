import { articles } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";

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
        return {
            title: "Article Not Found | Shop Titan",
        };
    }

    return {
        title: `${post.title} | Shop Titan Insights`,
        description: post.description,
    };
}

// Generate static params if we want to statically generate these pages at build time
export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = articles.find((article) => article.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-off-white dark:bg-black pt-32 pb-24 md:pt-48 md:pb-40 px-mobile">
            <div className="max-w-3xl mx-auto">
                {/* Back Link */}
                <div className="mb-12 md:mb-16">
                    <Link
                        href="/#blog"
                        className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-text hover:text-primary transition-colors flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Back to Insights
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-12 md:mb-16 border-b border-structural-border dark:border-gray-800 pb-12">
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-text dark:text-gray-500 mb-6">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-structural-border"></span>
                        <span className="text-primary">{post.category}</span>
                    </div>
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal dark:text-white leading-tight mb-8">
                        {post.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text dark:text-gray-400 font-light leading-relaxed max-w-2xl">
                        {post.description}
                    </p>
                </header>

                {/* Content */}
                <div
                    className="prose prose-lg dark:prose-invert max-w-none 
                    prose-headings:font-serif prose-headings:text-charcoal dark:prose-headings:text-white 
                    prose-p:text-secondary-text dark:prose-p:text-gray-400 prose-p:font-light prose-p:leading-relaxed
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-charcoal dark:prose-strong:text-gray-200"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Footer / Author */}
                <div className="mt-16 pt-12 border-t border-structural-border dark:border-gray-800">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-text">
                        Written by <span className="text-charcoal dark:text-white">{post.author}</span>
                    </p>
                </div>
            </div>
        </article>
    );
}
