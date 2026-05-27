import { generatePageMetadata } from "@/lib/schema";
import { caseStudies } from "@/lib/case-studies-data";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = generatePageMetadata({
    title: "Case Studies - Real Results From Real Print Shops",
    description: "See how print shops use Shop Titan to eliminate order errors, scale operations, prevent stockouts, and automate workflows. Real numbers from real shops.",
    path: "/case-studies",
    type: "page",
});

const categoryColors: Record<string, string> = {
    Operations: 'bg-primary/10 text-primary',
    Growth: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    Inventory: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    Automation: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
};

export default function CaseStudiesPage() {
    return (
        <>
            <main className="min-h-screen pt-20">
                {/* Hero */}
                <section className="pt-12 md:pt-16 pb-10 md:pb-14 bg-background-light dark:bg-background-dark">
                    <div className="max-w-4xl mx-auto px-mobile text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                            Case Studies
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-4">
                            Real Results From Real Print Shops
                        </h1>
                        <p className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            These are not hypothetical scenarios. These are real print shops that deployed Shop Titan and measured the difference. Real numbers. Real outcomes.
                        </p>
                    </div>
                </section>

                {/* Case Study Cards */}
                <section className="py-10 md:py-14 bg-surface dark:bg-gray-950">
                    <div className="max-w-5xl mx-auto px-mobile">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {caseStudies.map((study) => (
                                <Link
                                    key={study.slug}
                                    href={`/case-studies/${study.slug}`}
                                    className="group p-6 rounded-2xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/40 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${categoryColors[study.category] || 'bg-gray-100 text-gray-600'}`}>
                                            {study.category}
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-secondary-text dark:text-gray-500">
                                            {study.shop.location}
                                        </span>
                                    </div>

                                    <h2 className="text-lg font-bold text-charcoal dark:text-white tracking-tight leading-snug mb-3 group-hover:text-primary transition-colors">
                                        {study.title}
                                    </h2>

                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed mb-4">
                                        {study.description}
                                    </p>

                                    {/* Key metric preview */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        {study.results.metrics.slice(0, 2).map((m) => (
                                            <div key={m.label} className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                                                <p className="text-[10px] font-bold uppercase tracking-wider text-secondary-text dark:text-gray-500 mb-0.5">{m.label}</p>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs text-rose-500 line-through">{m.before}</span>
                                                    <span className="material-symbols-outlined text-primary text-xs">arrow_forward</span>
                                                    <span className="text-xs font-bold text-charcoal dark:text-white">{m.after}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-primary">Read case study</span>
                                        <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-10 md:py-16 bg-background-light dark:bg-background-dark">
                    <div className="max-w-3xl mx-auto px-mobile text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                            Ready to See Similar Results?
                        </h2>
                        <p className="text-secondary-text dark:text-gray-400 mb-8 max-w-xl mx-auto">
                            Book a demo and we will walk you through the system, show you how it works for shops like yours, and give you an honest assessment of whether it is a fit.
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
