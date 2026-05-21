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

export default function CaseStudiesPage() {
    return (
        <>
            <main className="min-h-screen bg-ivory pt-20">

                {/* Hero - two column architectural header */}
                <section className="pt-24 md:pt-32 pb-16 md:pb-20">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                            <div className="lg:col-span-5">
                                <span className="inline-block text-[11px] tracking-[0.22em] uppercase text-graphite font-medium mb-6">
                                    Case Studies
                                </span>
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-charcoal leading-[1.05] tracking-tight">
                                    Real shops.{' '}
                                    <span className="italic font-extralight text-graphite">Real results.</span>
                                </h1>
                            </div>
                            <p className="lg:col-span-7 lg:pt-2 text-lg md:text-xl text-graphite leading-relaxed font-light max-w-2xl">
                                These are not hypothetical scenarios. These are real print shops that deployed Shop Titan and measured the difference. Real numbers. Real outcomes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Case study index - editorial list with hairline dividers */}
                <section className="pb-24 md:pb-32">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <div className="border-t border-line">
                            {caseStudies.map((study, idx) => (
                                <Link
                                    key={study.slug}
                                    href={`/case-studies/${study.slug}`}
                                    className="group block border-b border-line py-10 md:py-14 hover:bg-stone/40 transition-colors"
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">

                                        {/* Left: number + category + shop */}
                                        <div className="lg:col-span-3">
                                            <div className="flex items-baseline gap-4 mb-6">
                                                <span className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium">
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                                <span className="h-px flex-1 bg-line group-hover:bg-charcoal/40 transition-colors" />
                                            </div>
                                            <p className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium mb-3">
                                                {study.category}
                                            </p>
                                            <p className="text-sm text-charcoal font-medium tracking-tight">
                                                {study.shop.name}
                                            </p>
                                            <p className="text-sm text-graphite font-light">
                                                {study.shop.location}
                                            </p>
                                            <p className="text-xs text-graphite font-light mt-1">
                                                {study.shop.employees} employees · {study.shop.methods.slice(0, 2).join(', ')}
                                            </p>
                                        </div>

                                        {/* Middle: title + description */}
                                        <div className="lg:col-span-6">
                                            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-charcoal leading-snug tracking-tight mb-4 group-hover:text-black transition-colors">
                                                {study.title}
                                            </h2>
                                            <p className="text-sm md:text-base text-graphite leading-relaxed font-light max-w-2xl">
                                                {study.description}
                                            </p>
                                            <div className="inline-flex items-center gap-2 mt-6 text-[11px] tracking-[0.22em] uppercase text-charcoal font-medium">
                                                <span>Read case study</span>
                                                <span
                                                    className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform"
                                                    style={{ fontVariationSettings: "'wght' 250" }}
                                                >
                                                    arrow_forward
                                                </span>
                                            </div>
                                        </div>

                                        {/* Right: key results - simplified */}
                                        <div className="lg:col-span-3">
                                            <div className="space-y-6">
                                                {study.results.metrics.slice(0, 2).map((m) => (
                                                    <div key={m.label}>
                                                        <p className="text-[10px] tracking-[0.22em] uppercase text-graphite font-medium mb-2">
                                                            {m.label}
                                                        </p>
                                                        <p className="text-2xl md:text-3xl text-charcoal font-light tracking-tight leading-none">
                                                            {m.after}
                                                        </p>
                                                        <p className="text-xs text-graphite font-light mt-1">
                                                            from {m.before}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-charcoal text-ivory py-24 md:py-32">
                    <div className="max-w-4xl mx-auto px-mobile">
                        <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight max-w-3xl">
                            Ready to see similar results in your shop?
                        </h2>
                        <p className="mt-6 text-base md:text-lg text-ivory/60 font-light max-w-2xl leading-relaxed">
                            Book a demo. We will walk you through the system, show you how it works for shops like yours, and give you an honest assessment of whether it is a fit.
                        </p>
                        <div className="mt-12 flex flex-col sm:flex-row gap-3">
                            <Link
                                href="/reach-out"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-ivory text-charcoal text-sm tracking-wide font-medium rounded-[6px] hover:bg-white transition-colors group"
                            >
                                <span>Book a Demo</span>
                                <span
                                    className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform"
                                    style={{ fontVariationSettings: "'wght' 250" }}
                                >
                                    arrow_forward
                                </span>
                            </Link>
                            <Link
                                href="/pricing"
                                className="inline-flex items-center justify-center px-7 py-3.5 border border-ivory/40 text-ivory text-sm tracking-wide font-medium rounded-[6px] hover:border-ivory transition-colors"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
