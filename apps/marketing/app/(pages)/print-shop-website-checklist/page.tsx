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

const checklist = [
    {
        group: 'Foundations',
        icon: 'foundation',
        blurb: 'The basics every site needs before anything else matters.',
        items: [
            { text: 'A domain that matches your shop name', why: 'Easy to remember and share, and it builds your brand instead of a marketplace.' },
            { text: 'Fast load on phones', why: 'Most customers find you on mobile. A slow site loses them before they see your work.' },
            { text: 'Secure HTTPS', why: 'Protects checkout and artwork uploads, and Google expects it.' },
            { text: 'Clear navigation', why: 'Services, gallery, ordering, and contact reachable in one tap.' },
            { text: 'Accessibility basics', why: 'Readable contrast and image alt text, so every customer and search engine can use the site.' },
        ],
    },
    {
        group: 'Show your work',
        icon: 'photo_library',
        blurb: 'Proof that you can produce what the customer is picturing.',
        items: [
            { text: 'A real portfolio of past jobs', why: 'Photos of finished prints, stitches, and signage do more selling than any paragraph.' },
            { text: 'A product catalog', why: 'Shirts, hats, signage, whatever you decorate, browsable with real options.' },
            { text: 'Decoration methods explained', why: 'Screen print, embroidery, DTG, and DTF so buyers pick the right one with confidence.' },
        ],
    },
    {
        group: 'Online ordering',
        icon: 'shopping_cart',
        blurb: 'Where a brochure site becomes a shop that takes money.',
        items: [
            { text: 'A product builder', why: 'Colors, sizes, and quantities chosen on the page, not over email.' },
            { text: 'Artwork upload at order time', why: 'Customers attach files when they order, so jobs do not stall waiting on art.' },
            { text: 'Instant or quote-based pricing', why: 'Real numbers beat "call for a quote." Capture the order while intent is high.' },
            { text: 'One-click reorders', why: 'Repeat customers are your best customers. Make buying again effortless.' },
            { text: 'Multiple payment methods', why: 'Card and the wallets your customers expect, so checkout is never the reason a sale stalls.' },
        ],
    },
    {
        group: 'Trust and conversion',
        icon: 'verified',
        blurb: 'The signals that turn a visitor into a paying order.',
        items: [
            { text: 'Reviews and client logos', why: 'Social proof from real customers and recognizable brands you have printed for.' },
            { text: 'A clear About page', why: 'Your story, your team, and how long you have been decorating.' },
            { text: 'Easy contact', why: 'Form, phone, and location so nobody has to hunt to reach you.' },
            { text: 'An FAQ', why: 'Answer turnaround, minimums, and pricing before they have to ask.' },
        ],
    },
    {
        group: 'Run the shop',
        icon: 'settings_suggest',
        blurb: 'The difference between a website and a system that saves you time.',
        items: [
            { text: 'Orders that flow into production', why: 'No re-keying an emailed order into your shop system by hand.' },
            { text: 'Customer accounts and saved designs', why: 'Returning buyers keep their art and details, so reorders are instant.' },
            { text: 'Inventory and stock visibility', why: 'Sell what you can actually produce, without overselling blanks.' },
            { text: 'Online proof approval', why: 'Customers sign off on the proof on the site, so production starts on a file they already approved.' },
        ],
    },
    {
        group: 'Get found',
        icon: 'search',
        blurb: 'So new customers actually land on the site you built.',
        items: [
            { text: 'Local SEO and a Google Business Profile', why: 'Most decoration buyers search local. Show up in the map and "near me" results.' },
            { text: 'Titles and structured data per service', why: 'Helps Google and AI tools understand and surface each thing you offer.' },
            { text: 'A blog or resources', why: 'Answer real questions, earn links, and build the authority that lifts every page.' },
        ],
    },
];

const totalItems = checklist.reduce((n, g) => n + g.items.length, 0);

const faqs = [
    {
        question: 'What should a print shop website include?',
        answer: 'At minimum: a fast, mobile-friendly site on your own domain, a portfolio of real work, a clear product catalog with your decoration methods explained, online ordering with a product builder and artwork upload, trust signals like reviews and an About page, and local SEO. The strongest sites go further and connect online orders straight into production so nothing is re-keyed by hand.',
    },
    {
        question: 'Does a print shop really need online ordering, or is a brochure site enough?',
        answer: 'A brochure site tells people you exist, but an ordering site captures the sale while intent is high. Without a product builder, artwork upload, and pricing, you lose orders to back-and-forth email and to competitors who let customers buy on the spot. Online ordering is the line between a site that markets and a site that earns.',
    },
    {
        question: 'What is the most overlooked item on this checklist?',
        answer: 'The production tie-in. Plenty of shops add a store, then re-type every online order into their shop system by hand. That manual step is where time leaks and mistakes happen. A site that pushes orders directly into your production queue is what actually saves labor, not just another checkout button.',
    },
    {
        question: 'Can I build all of this myself?',
        answer: 'You can assemble most of it with a website builder plus plugins for ordering, uploads, and pricing, but decoration-aware ordering and a real production tie-in are the hard parts. Many shops get a brochure site live themselves and then move to a purpose-built platform once they want online orders to flow into the shop without manual work.',
    },
    {
        question: 'How long does it take to build a print shop website?',
        answer: 'A simple brochure site can go live in days. A full ordering site with a product builder, artwork upload, pricing, and production integration takes longer to do well, which is why many shops choose a print-built platform that ships those pieces ready instead of building each one from scratch.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Print Shop Website Build',
    description:
        'A purpose-built print shop website with decoration-aware online ordering, artwork upload, instant pricing, and production integration, covering every essential a print shop site needs to win and fulfill orders online.',
    url: 'https://shoptitan.app/print-shop-website-checklist',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Print Shop Website Checklist', url: 'https://shoptitan.app/print-shop-website-checklist' },
]);
const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Print Shop Website Checklist',
    numberOfItems: totalItems,
    itemListElement: checklist.flatMap((g) => g.items).map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.text,
    })),
};

// ───── Motion ─────

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

export default function PrintShopWebsiteChecklistPage() {
    return (
        <>
            <main className="min-h-screen pt-20">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

                {/* ───── HERO ───── */}
                <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-background-light dark:bg-background-dark">
                    <div className="max-w-4xl mx-auto px-mobile text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="inline-flex items-center gap-2 rounded-full border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 px-4 py-1.5 mb-6"
                        >
                            <span className="material-symbols-outlined text-primary text-lg">checklist</span>
                            <span className="text-sm font-semibold text-charcoal dark:text-gray-200">{totalItems} essentials, 6 areas</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            The print shop website checklist
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
                        >
                            Check off what your site already has, and spot what it is missing. A practical, no-fluff list for a print shop site that actually wins and fulfills orders.
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
                                Get a Site That Checks Every Box
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link
                                href="/print-shop-website"
                                className="px-8 py-4 text-charcoal dark:text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-primary/50 transition-colors rounded-full" />
                                <span className="relative z-10">What a Print Shop Site Is</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* ───── DIRECT ANSWER (AEO) ───── */}
                <section className="bg-surface dark:bg-gray-950 border-t border-structural-border dark:border-gray-800 py-14 md:py-16">
                    <div className="max-w-4xl mx-auto px-mobile">
                        <div className="border-l-4 border-primary pl-6 md:pl-8">
                            <p className="text-base md:text-lg text-charcoal dark:text-gray-200 leading-relaxed">
                                A print shop website needs six things working together: solid foundations (fast, mobile, secure, on your own domain), a portfolio that proves your work, a product catalog with your decoration methods, decoration-aware online ordering with a product builder and artwork upload, trust signals like reviews and a clear About page, and local SEO so customers find you. The piece most shops miss is the production tie-in, online orders flowing straight into the shop instead of being re-keyed by hand.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ───── CHECKLIST (signature) ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-5xl mx-auto px-mobile">
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-60px' }}
                            className="space-y-8"
                        >
                            {checklist.map((group) => (
                                <motion.div
                                    key={group.group}
                                    variants={fadeUp}
                                    className="rounded-3xl border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 overflow-hidden"
                                >
                                    <div className="flex items-center gap-4 p-6 md:p-7 border-b border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-900">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                                            <span className="material-symbols-outlined text-primary">{group.icon}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                                <h2 className="text-xl md:text-2xl font-bold text-charcoal dark:text-white tracking-tight">{group.group}</h2>
                                                <span className="text-xs font-semibold uppercase tracking-wide text-secondary-text dark:text-gray-500">{group.items.length} items</span>
                                            </div>
                                            <p className="text-sm text-secondary-text dark:text-gray-400 mt-0.5">{group.blurb}</p>
                                        </div>
                                    </div>
                                    <ul className="divide-y divide-structural-border dark:divide-gray-800">
                                        {group.items.map((it) => (
                                            <li key={it.text} className="flex items-start gap-4 p-5 md:px-7">
                                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 mt-0.5">
                                                    <span className="material-symbols-outlined text-primary text-base leading-none">check</span>
                                                </span>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-base font-semibold text-charcoal dark:text-white">{it.text}</h3>
                                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed mt-0.5">{it.why}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── HOW MANY DID YOU CHECK ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-20 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            How many did your site check?
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                            Most print shop sites nail the foundations and the portfolio, then fall short on decoration-aware ordering and the production tie-in. Those last two are exactly where orders and hours are won. If your list has gaps there, that is where to focus next.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/online-ordering-for-print-shops" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Online ordering for print shops
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/print-shop-ecommerce-website" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Print shop ecommerce website
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/print-shop-website-cost" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                What it costs
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/portfolio" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Website examples
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ───── FAQ ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-10 text-center">
                            Print shop website checklist FAQ
                        </h2>
                        <div className="border-t border-structural-border dark:border-gray-800">
                            {faqs.map((f) => (
                                <details key={f.question} className="group border-b border-structural-border dark:border-gray-800">
                                    <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none select-none">
                                        <h3 className="text-base font-bold text-charcoal dark:text-white pr-4 leading-snug">{f.question}</h3>
                                        <span className="material-symbols-outlined text-xl text-secondary-text dark:text-gray-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                                    </summary>
                                    <p className="pb-5 text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{f.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── FINAL CTA ───── */}
                <section className="bg-surface dark:bg-gray-950 py-20 md:py-28 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            Want a site that checks every box?
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Book a demo and we will show you a print-built site with decoration-aware ordering, artwork upload, and orders that flow straight into production. Every essential on this list, ready out of the box.
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
