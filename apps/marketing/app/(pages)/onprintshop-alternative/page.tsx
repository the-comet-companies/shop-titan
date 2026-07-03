'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import {
    generateFAQSchema,
    generateServiceSchema,
    generateBreadcrumbSchema,
} from '@/lib/schema';

// ───── Content ─────

const reasons = [
    {
        icon: 'tune',
        title: 'Setup feels like a project',
        body: 'OnPrintShop is powerful and deep, and that depth means configuration. Many shops lean on paid setup or a partner to get a storefront the way they want it. Shops looking to switch often want to be live sooner, without running the build themselves.',
    },
    {
        icon: 'payments',
        title: 'Cost adds up with customization',
        body: 'Between the platform, add-on modules, and the customization to fit how you actually sell, the real number can climb past what shops expected. They start pricing alternatives to see what a simpler, more predictable setup looks like.',
    },
    {
        icon: 'precision_manufacturing',
        title: 'The storefront and the shop floor stay separate',
        body: 'A web-to-print storefront sells the job, but many shops still move orders into production by hand. Owners want the site and the shop to be one system, so an online order lands in the queue without re-keying.',
    },
    {
        icon: 'support_agent',
        title: 'They want a partner, not a portal',
        body: 'Shops switching often say they want someone who knows print to set things up, answer the phone, and keep the site working, rather than managing an enterprise platform on their own.',
    },
];

const contrasts = [
    {
        theme: 'Getting live',
        them: 'A configurable platform you set up, often with paid onboarding or a partner to get it dialed in.',
        us: 'A custom storefront built and set up for you, so you go live without running the project yourself.',
    },
    {
        theme: 'Decoration-aware ordering',
        them: 'Strong web-to-print and variable data, configured to your catalog and rules.',
        us: 'Decoration choices, artwork upload, and quantity pricing ready for screen print, embroidery, DTG, and DTF.',
    },
    {
        theme: 'Production tie-in',
        them: 'A storefront focus, with production handled in separate systems or integrations.',
        us: 'Online orders flow straight into the same system your shop runs on, no re-keying.',
    },
    {
        theme: 'Pricing model',
        them: 'Platform plus modules and customization, which can grow as you add capability.',
        us: 'A clear, print-built package, set up for your shop without piecing modules together.',
    },
    {
        theme: 'Who it suits',
        them: 'Larger and B2B printers with the team and budget to run a deep web-to-print platform.',
        us: 'Decorators and print shops that want a custom site wired to production, run for them.',
    },
];

const faqs = [
    {
        question: 'What is the best OnPrintShop alternative for a small print shop?',
        answer: 'It depends on what you want to run yourself. OnPrintShop is a deep, configurable web-to-print platform that suits larger and B2B printers with the team to manage it. Shops that want a custom storefront set up for them, with decoration-aware ordering and orders that flow into production without re-keying, tend to compare purpose-built platforms like Shop Titan that handle the setup and the operations tie-in.',
    },
    {
        question: 'Why do print shops look for an OnPrintShop alternative?',
        answer: 'The common reasons are setup that feels like a project, cost that climbs as you add modules and customization, and a storefront that stays separate from the shop floor so orders still get re-keyed. Shops also want a partner who knows print to set it up and support it, rather than running an enterprise platform on their own.',
    },
    {
        question: 'Is OnPrintShop a bad platform?',
        answer: 'No. OnPrintShop is a capable, established web-to-print solution with a lot of depth, and it is a strong fit for larger or B2B printers who want that configurability and have the team to run it. It is simply more platform than some shops need. The right question is not which is better, but which matches how you sell and how much you want to manage yourself.',
    },
    {
        question: 'How is Shop Titan different from OnPrintShop?',
        answer: 'Shop Titan is set up for you as a custom storefront rather than a platform you configure, the decoration-aware ordering is print-ready out of the box, and online orders flow into the same system that runs your shop, so production is not a separate step. The trade is less do-it-yourself configurability in exchange for being live sooner with the shop floor connected.',
    },
    {
        question: 'Can I move from OnPrintShop to Shop Titan?',
        answer: 'Yes. The usual path is to map your products, decoration options, and pricing, stand up the new storefront, and connect it to production before you switch over. Book a demo and we will walk through what your catalog and workflow would look like so the move is planned, not disruptive.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'OnPrintShop Alternative',
    description:
        'A purpose-built print shop storefront and ordering platform, set up for you, with decoration-aware online ordering, artwork upload, and production integration, compared as an alternative to OnPrintShop web-to-print software.',
    url: 'https://shoptitan.app/onprintshop-alternative',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'OnPrintShop Alternative', url: 'https://shoptitan.app/onprintshop-alternative' },
]);

// ───── Motion ─────

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

export default function OnPrintShopAlternativePage() {
    return (
        <>
            <main className="min-h-screen pt-20">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

                {/* ───── HERO ───── */}
                <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-background-light dark:bg-background-dark">
                    <div className="max-w-4xl mx-auto px-mobile text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="inline-flex items-center gap-2 rounded-full border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 px-4 py-1.5 mb-6"
                        >
                            <span className="material-symbols-outlined text-primary text-lg">compare_arrows</span>
                            <span className="text-sm font-semibold text-charcoal dark:text-gray-200">OnPrintShop vs Shop Titan</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            An OnPrintShop alternative, built for the shop floor
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
                        >
                            OnPrintShop is a deep web-to-print platform. If you would rather be live sooner with a custom storefront set up for you, and online orders flowing straight into production, here is how Shop Titan compares.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href="/reach-out"
                                className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Book a Demo
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link
                                href="/best-ecommerce-platform-for-print-shops"
                                className="px-8 py-4 text-charcoal dark:text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-primary/50 transition-colors rounded-full" />
                                <span className="relative z-10">Compare All Platforms</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* ───── DIRECT ANSWER (AEO) ───── */}
                <section className="bg-surface dark:bg-gray-950 border-t border-structural-border dark:border-gray-800 py-14 md:py-16">
                    <div className="max-w-4xl mx-auto px-mobile">
                        <div className="border-l-4 border-primary pl-6 md:pl-8">
                            <p className="text-base md:text-lg text-charcoal dark:text-gray-200 leading-relaxed">
                                OnPrintShop is a capable, configurable web-to-print platform that suits larger and B2B printers with a team to run it. Shops look for an alternative when setup feels like a project, costs climb with modules and customization, or the storefront stays separate from production so orders get re-keyed. Shop Titan is a purpose-built alternative: a custom storefront set up for you, with decoration-aware ordering and online orders that flow straight into the system your shop already runs on.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ───── REASONS SHOPS SWITCH (signature) ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-5xl mx-auto px-mobile">
                        <div className="mb-10 max-w-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                Why print shops look for an OnPrintShop alternative
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                None of these mean OnPrintShop is wrong. They are the reasons shops tell us they start comparing.
                            </p>
                        </div>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-60px' }}
                            className="grid sm:grid-cols-2 gap-5"
                        >
                            {reasons.map((r) => (
                                <motion.div
                                    key={r.title}
                                    variants={fadeUp}
                                    className="rounded-2xl border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 p-6 md:p-7"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 mb-4">
                                        <span className="material-symbols-outlined text-primary">{r.icon}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-2">{r.title}</h3>
                                    <p className="text-sm md:text-base text-secondary-text dark:text-gray-400 leading-relaxed">{r.body}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── SIDE BY SIDE CONTRAST ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-5xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-10">
                            OnPrintShop and Shop Titan, side by side
                        </h2>
                        <div className="space-y-4">
                            {/* header row */}
                            <div className="hidden md:grid grid-cols-[1fr_1.4fr_1.4fr] gap-4 px-2">
                                <div />
                                <div className="text-sm font-semibold uppercase tracking-wide text-secondary-text dark:text-gray-500">OnPrintShop</div>
                                <div className="text-sm font-semibold uppercase tracking-wide text-primary">Shop Titan</div>
                            </div>
                            {contrasts.map((c) => (
                                <div
                                    key={c.theme}
                                    className="grid md:grid-cols-[1fr_1.4fr_1.4fr] gap-4 rounded-2xl border border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-900 p-5 md:p-6"
                                >
                                    <div className="font-semibold text-charcoal dark:text-white flex items-center">{c.theme}</div>
                                    <div className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">
                                        <span className="md:hidden block text-xs font-semibold uppercase tracking-wide text-secondary-text dark:text-gray-500 mb-1">OnPrintShop</span>
                                        {c.them}
                                    </div>
                                    <div className="text-sm text-charcoal dark:text-gray-200 leading-relaxed md:border-l md:border-primary/20 md:pl-4">
                                        <span className="md:hidden block text-xs font-semibold uppercase tracking-wide text-primary mb-1">Shop Titan</span>
                                        {c.us}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── FIRST-HAND EVIDENCE ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-5xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                What &ldquo;no platform to run&rdquo; looks like in practice
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                The clearest measure of a done-for-you system is how far a shop can grow without adding admin. One shop we work with scaled from 5 to 20 people on Shop Titan with the same single admin, the owner, the whole way.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-px rounded-2xl overflow-hidden border border-structural-border dark:border-gray-800 bg-structural-border dark:bg-gray-800 mb-8">
                            {[
                                { stat: '5 → 20', label: 'Team size, same single admin' },
                                { stat: '70+ → 45', label: 'Owner hours per week' },
                                { stat: '3-5/wk → 0', label: 'Jobs falling through the cracks' },
                            ].map((s) => (
                                <div key={s.label} className="flex-1 bg-surface dark:bg-gray-950 p-6 md:p-8 text-center">
                                    <p className="text-2xl md:text-3xl font-black tracking-tight text-primary mb-2">{s.stat}</p>
                                    <p className="text-sm text-secondary-text dark:text-gray-400">{s.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <Link href="/case-studies/scaling-from-5-to-20" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Read the full case study
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ───── WHERE ONPRINTSHOP FITS (fairness / EEAT) ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-20 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            Where OnPrintShop is the better choice
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                            If you are a larger or B2B printer that wants deep, configurable web-to-print, runs complex catalogs and storefronts for many clients, and has the team to manage and customize an enterprise platform, OnPrintShop is built for exactly that. Shop Titan is the better fit when you want a custom storefront set up for you, decoration-aware ordering out of the box, and online orders wired straight into production, without running the platform yourself.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/print-shop-ecommerce-website" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Print shop ecommerce website
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/online-ordering-for-print-shops" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Online ordering for print shops
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/best-ecommerce-platform-for-print-shops" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Compare all platforms
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ───── FAQ ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-10">
                            OnPrintShop alternative FAQ
                        </h2>
                        <div className="border-t border-structural-border dark:border-gray-800">
                            {faqs.map((f) => (
                                <details key={f.question} className="group border-b border-structural-border dark:border-gray-800">
                                    <summary className="flex cursor-pointer items-center justify-between gap-4 list-none py-5 text-left">
                                        <span className="text-base md:text-lg font-medium tracking-tight text-charcoal dark:text-white">{f.question}</span>
                                        <span className="material-symbols-outlined text-secondary-text transition-transform duration-200 group-open:rotate-45">add</span>
                                    </summary>
                                    <div className="pb-5 -mt-1 text-base text-secondary-text dark:text-gray-400 leading-relaxed">{f.answer}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── FINAL CTA ───── */}
                <section className="bg-surface dark:bg-gray-950 py-20 md:py-28 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            See the alternative in action
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Book a demo and we will show you a print-built storefront set up for your shop, with decoration-aware ordering and orders that land straight in production.
                        </p>
                        <Link
                            href="/reach-out"
                            className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
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
