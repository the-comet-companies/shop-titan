import { caseStudies } from "@/lib/case-studies-data";
import { generatePageMetadata } from "@/lib/schema";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);
    if (!study) return { title: "Case Study Not Found | Shop Titan" };

    return generatePageMetadata({
        title: study.title,
        description: study.description,
        path: `/case-studies/${study.slug}`,
        type: "page",
    });
}

export async function generateStaticParams() {
    return caseStudies.map((s) => ({ slug: s.slug }));
}

const categoryColors: Record<string, string> = {
    Operations: 'bg-primary/10 text-primary',
    Growth: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    Inventory: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    Automation: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
};

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);
    if (!study) notFound();

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://shoptitan.app' },
        { name: 'Case Studies', url: 'https://shoptitan.app/case-studies' },
        { name: study.title, url: `https://shoptitan.app/case-studies/${study.slug}` },
    ]);

    const otherStudies = caseStudies.filter((s) => s.slug !== slug).slice(0, 2);

    return (
        <>
            <main className="min-h-screen pt-20">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

                {/* Hero */}
                <section className="pt-12 md:pt-16 pb-10 md:pb-14 bg-background-light dark:bg-background-dark">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <Link
                            href="/case-studies"
                            className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-text hover:text-primary transition-colors flex items-center gap-2 mb-8"
                        >
                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                            Back to Case Studies
                        </Link>

                        <div className="flex items-center gap-3 mb-4">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${categoryColors[study.category] || 'bg-gray-100 text-gray-600'}`}>
                                {study.category}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-secondary-text dark:text-gray-500">
                                {study.shop.location}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-4">
                            {study.title}
                        </h1>
                        <p className="text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                            {study.description}
                        </p>
                    </div>
                </section>

                {/* Shop Profile */}
                <section className="bg-surface dark:bg-gray-950 border-y border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile py-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary-text dark:text-gray-500 mb-1">Shop</p>
                                <p className="text-sm font-bold text-charcoal dark:text-white">{study.shop.name}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary-text dark:text-gray-500 mb-1">Location</p>
                                <p className="text-sm font-bold text-charcoal dark:text-white">{study.shop.location}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary-text dark:text-gray-500 mb-1">Team Size</p>
                                <p className="text-sm font-bold text-charcoal dark:text-white">{study.shop.employees}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary-text dark:text-gray-500 mb-1">Methods</p>
                                <p className="text-sm font-bold text-charcoal dark:text-white">{study.shop.methods.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Before */}
                <section className="py-10 md:py-14 bg-background-light dark:bg-background-dark">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-text dark:text-gray-500 mb-2">Before Shop Titan</p>
                        <p className="text-base text-secondary-text dark:text-gray-400 leading-relaxed mb-8 p-4 rounded-xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/30 dark:bg-rose-950/10">
                            {study.before}
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                            {study.problem.headline}
                        </h2>
                        <p className="text-base text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                            {study.problem.description}
                        </p>
                        <div className="space-y-2">
                            {study.problem.painPoints.map((point, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-rose-500 text-sm mt-0.5 flex-shrink-0">close</span>
                                    <span className="text-sm text-secondary-text dark:text-gray-400">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solution */}
                <section className="py-10 md:py-14 bg-surface dark:bg-gray-950">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">The Solution</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                            {study.solution.package} - Deployed in {study.solution.timeline}
                        </h2>
                        <p className="text-base text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                            {study.solution.description}
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {study.solution.modules.map((mod) => (
                                <div key={mod} className="flex items-center gap-2 p-2 rounded-lg border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900">
                                    <span className="material-symbols-outlined text-primary text-sm">check</span>
                                    <span className="text-xs font-medium text-charcoal dark:text-white">{mod}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Results */}
                <section className="py-10 md:py-14 bg-background-light dark:bg-background-dark">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">The Results</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-6">
                            {study.results.headline}
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                            {study.results.metrics.map((m) => (
                                <div key={m.label} className="p-4 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 text-center">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-secondary-text dark:text-gray-500 mb-2">{m.label}</p>
                                    <p className="text-sm text-rose-500 line-through mb-1">{m.before}</p>
                                    <p className="text-xl font-bold text-charcoal dark:text-white">{m.after}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-base text-secondary-text dark:text-gray-400 leading-relaxed">
                            {study.results.description}
                        </p>
                    </div>
                </section>

                {/* Quote */}
                <section className="py-10 md:py-14 bg-surface dark:bg-gray-950">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <div className="p-6 md:p-8 rounded-2xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900">
                            <span className="material-symbols-outlined text-primary text-3xl mb-4 block">format_quote</span>
                            <p className="text-lg md:text-xl font-medium text-charcoal dark:text-white leading-relaxed mb-4">
                                &quot;{study.quote.text}&quot;
                            </p>
                            <div>
                                <p className="text-sm font-bold text-charcoal dark:text-white">{study.quote.author}</p>
                                <p className="text-xs text-secondary-text dark:text-gray-400">{study.quote.role}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Links */}
                <section className="py-10 md:py-14 bg-background-light dark:bg-background-dark">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                            Explore the System Behind These Results
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {study.linksTo.map((link) => (
                                <Link
                                    key={link}
                                    href={link}
                                    className="px-4 py-2 text-xs font-bold text-primary border border-primary/30 rounded-full hover:bg-primary/5 transition-colors"
                                >
                                    {link.replace(/\//g, ' / ').trim()}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Other Case Studies */}
                {otherStudies.length > 0 && (
                    <section className="py-10 md:py-14 bg-surface dark:bg-gray-950">
                        <div className="max-w-3xl mx-auto px-mobile">
                            <h2 className="text-xl font-bold text-charcoal dark:text-white tracking-tight mb-6">
                                More Case Studies
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {otherStudies.map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/case-studies/${s.slug}`}
                                        className="p-5 rounded-xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/40 transition-colors group"
                                    >
                                        <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${categoryColors[s.category] || 'bg-gray-100 text-gray-600'}`}>
                                            {s.category}
                                        </span>
                                        <h3 className="text-sm font-bold text-charcoal dark:text-white leading-snug mb-2 group-hover:text-primary transition-colors">
                                            {s.title}
                                        </h3>
                                        <span className="text-xs text-primary font-bold">Read case study →</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="py-10 md:py-16 bg-background-light dark:bg-background-dark">
                    <div className="max-w-3xl mx-auto px-mobile text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                            Ready to See Similar Results in Your Shop?
                        </h2>
                        <p className="text-secondary-text dark:text-gray-400 mb-6">
                            Book a demo and we will show you how the system works for shops like yours.
                        </p>
                        <Link
                            href="/reach-out"
                            className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                        >
                            Book a Demo
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
