'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import {
    generateFAQSchema,
    generateServiceSchema,
    generateBreadcrumbSchema,
} from '@/lib/schema';

// ───── Content ─────

const rows = [
    {
        img: '/website/StoreFront.png',
        w: 1773,
        h: 795,
        eyebrow: 'Sell online',
        title: 'Sell embroidered apparel online',
        body: 'Put your caps, polos, jackets, and uniforms in a real storefront with secure checkout. Customers pick the garment, color, and size, add their logo, and order without a single phone call.',
        points: ['Product catalog built for decorated apparel', 'Size and color options on every product', 'Card payment or deposit at checkout'],
    },
    {
        img: '/website/art-work-upload.png',
        w: 1904,
        h: 909,
        eyebrow: 'Artwork',
        title: 'Collect logos and digitizing details up front',
        body: 'Embroidery lives or dies on the logo. Customers upload their artwork with placement and thread notes, so every order arrives ready to digitize instead of starting another email thread.',
        points: ['Logo upload attached to the order', 'Placement, size, and thread-color notes', 'Reusable logos for repeat customers'],
    },
    {
        img: '/website/design-studio.png',
        w: 1080,
        h: 1350,
        eyebrow: 'Proofing',
        title: 'Approve the stitch proof before you run it',
        body: 'Show customers a digital proof of the embroidered logo and get sign-off online before a single stitch goes down. Fewer remakes, no "that is not what I expected" after the run.',
        points: ['Online proof approval', 'Locked-in artwork once approved', 'A clear record of what the customer signed off on'],
    },
    {
        img: '/website/Brands.png',
        w: 1881,
        h: 871,
        eyebrow: 'Programs',
        title: 'Run company stores and team uniform programs',
        body: 'Give companies, schools, and teams their own branded store with approved logos and products. Members order their own sizes, and the orders consolidate cleanly instead of arriving as a messy spreadsheet.',
        points: ['Dedicated branded stores per client', 'Members order and pay individually', 'Recurring uniform and reorder programs'],
    },
];

const products = [
    { icon: 'sports_baseball', label: 'Caps & hats' },
    { icon: 'apparel', label: 'Polos & button-downs' },
    { icon: 'checkroom', label: 'Jackets & outerwear' },
    { icon: 'badge', label: 'Workwear & uniforms' },
    { icon: 'backpack', label: 'Bags & totes' },
    { icon: 'ac_unit', label: 'Beanies & knitwear' },
];

const features = [
    { icon: 'precision_manufacturing', title: 'Digitizing-ready orders', desc: 'Every order carries the logo, placement, and thread notes your team needs to digitize and stitch.' },
    { icon: 'palette', title: 'Thread and stitch options', desc: 'Let customers pick thread colors and finishes, with monogramming and personalization built in.' },
    { icon: 'groups', title: 'Bulk and team ordering', desc: 'Size runs and per-member ordering for teams, clubs, and corporate uniform programs.' },
    { icon: 'history', title: 'Reorders in a click', desc: 'Returning customers reorder a past logo and garment in seconds, no re-sending files.' },
    { icon: 'travel_explore', title: 'SEO and AI search pages', desc: 'Technique and location pages that help your shop show up in Google and AI answers.' },
    { icon: 'bolt', title: 'Connected to production', desc: 'Approved orders flow into the pre-built FileMaker back office as jobs, with no re-entry.' },
];

const faqs = [
    {
        question: 'What is an embroidery website?',
        answer: 'An embroidery website is an ecommerce site built for embroidery shops. Beyond showing your work, it sells embroidered apparel online, collects customer logos with placement and thread details, prices jobs, approves stitch proofs, and books orders, so embroidery jobs arrive complete and ready to digitize instead of as scattered emails.',
    },
    {
        question: 'Can customers upload their logo for embroidery?',
        answer: 'Yes. Customers attach their logo to the order with placement, size, and thread-color notes, and the file stays tied to the job. Returning customers can reuse a saved logo, so you are not chasing artwork or re-digitizing the same design every time they reorder.',
    },
    {
        question: 'Can customers approve a proof before the order is stitched?',
        answer: 'Yes. The customer approves a digital stitch proof online before production starts, so the embroidery matches what they signed off on. That cuts remakes from miscommunication and protects you when a customer questions the finished result.',
    },
    {
        question: 'Do you support company stores and team uniform orders?',
        answer: 'Yes. You can run dedicated branded stores for companies, schools, and teams with approved logos and products. Members order their own sizes and pay individually, and the orders consolidate cleanly, instead of arriving as a spreadsheet you have to untangle.',
    },
    {
        question: 'What can customers order on an embroidery website?',
        answer: 'Anything you decorate: caps, polos, button-downs, jackets and outerwear, workwear and uniforms, bags, and knitwear. Each product carries its own size, color, and embroidery options, so customers configure exactly what they want and the order arrives production-ready.',
    },
    {
        question: 'Does the website connect to production?',
        answer: 'Yes. Approved orders flow into the pre-built FileMaker back office, where they become jobs ready to digitize, schedule, and stitch. Your team works from clean data instead of re-keying every online order by hand.',
    },
    {
        question: 'How long does it take to launch an embroidery website?',
        answer: 'Most shops launch in a few weeks. We start with your products, decoration options, and pricing, set up the storefront and logo-upload flow, and train your team. You can start with the website alone and connect the full operations system whenever you are ready.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Embroidery Website',
    description:
        'An ecommerce website for embroidery shops and apparel decorators, with online ordering for embroidered caps, polos, jackets, and uniforms, logo upload and digitizing details, online stitch proofing, company and team stores, reorders, and orders connected to production.',
    url: 'https://shoptitan.app/embroidery-website',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Embroidery Website', url: 'https://shoptitan.app/embroidery-website' },
]);

// ───── Motion ─────

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

export default function EmbroideryWebsitePage() {
    return (
        <>
            <main className="min-h-screen pt-20">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

                {/* ───── HERO (centered) ───── */}
                <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-background-light dark:bg-background-dark">
                    <div className="max-w-4xl mx-auto px-mobile text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                        >
                            An embroidery website that takes the order and the logo
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
                        >
                            Sell embroidered caps, polos, jackets, and uniforms online. Customers add their logo, approve a stitch proof, and order, so jobs arrive ready to digitize instead of buried in phone calls and email.
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
                                href="/pricing"
                                className="px-8 py-4 text-charcoal dark:text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-primary/50 transition-colors rounded-full" />
                                <span className="relative z-10">View Pricing</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* ───── DIRECT ANSWER (AEO) ───── */}
                <section className="bg-surface dark:bg-gray-950 border-t border-structural-border dark:border-gray-800 py-14 md:py-16">
                    <div className="max-w-4xl mx-auto px-mobile">
                        <div className="border-l-4 border-primary pl-6 md:pl-8">
                            <p className="text-base md:text-lg text-charcoal dark:text-gray-200 leading-relaxed">
                                An embroidery website is an ecommerce site built for embroidery shops. It sells embroidered apparel like caps, polos, and uniforms online, collects customer logos with placement and thread details, approves stitch proofs, and can connect to a back office, so orders arrive complete and ready to digitize instead of scattered across phone, email, and spreadsheets.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ───── ALTERNATING FEATURE ROWS (signature) ───── */}
                <section className="bg-background-light dark:bg-background-dark py-8 md:py-12 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        {rows.map((r, i) => {
                            const imageRight = i % 2 === 0;
                            return (
                                <motion.div
                                    key={r.title}
                                    variants={stagger}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, margin: '-80px' }}
                                    className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 md:py-16 border-b border-structural-border dark:border-gray-800 last:border-0"
                                >
                                    <motion.div variants={fadeUp} className={imageRight ? 'lg:order-1' : 'lg:order-2'}>
                                        <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-3">{r.eyebrow}</span>
                                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">{r.title}</h2>
                                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-6">{r.body}</p>
                                        <ul className="space-y-3">
                                            {r.points.map((p) => (
                                                <li key={p} className="flex items-start gap-3 text-sm md:text-base text-secondary-text dark:text-gray-400 leading-relaxed">
                                                    <span className="material-symbols-outlined text-primary text-xl shrink-0">check</span>
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                    <motion.div
                                        variants={fadeUp}
                                        className={`${imageRight ? 'lg:order-2' : 'lg:order-1'} rounded-2xl border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 shadow-card overflow-hidden`}
                                    >
                                        <Image
                                            src={r.img}
                                            alt={r.title}
                                            width={r.w}
                                            height={r.h}
                                            sizes="(max-width: 1024px) 100vw, 540px"
                                            className="w-full h-auto"
                                        />
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* ───── WHAT YOU CAN EMBROIDER ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                Everything your shop embroiders, sold online
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Each product carries its own size, color, and embroidery options, so customers order exactly what you can stitch.
                            </p>
                        </div>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                        >
                            {products.map((p) => (
                                <motion.div
                                    key={p.label}
                                    variants={fadeUp}
                                    className="flex items-center gap-3 rounded-2xl border border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-900 p-5"
                                >
                                    <span className="material-symbols-outlined text-primary text-3xl shrink-0">{p.icon}</span>
                                    <span className="text-sm md:text-base font-semibold text-charcoal dark:text-white">{p.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── FEATURES ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                Built for how embroidery shops work
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Not a generic store. The site captures the logo, the placement, and the specs your team needs to digitize and stitch.
                            </p>
                        </div>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {features.map((f) => (
                                <motion.div
                                    key={f.title}
                                    variants={fadeUp}
                                    className="rounded-2xl border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 p-6 flex flex-col gap-3"
                                >
                                    <span className="material-symbols-outlined text-primary text-3xl">{f.icon}</span>
                                    <h3 className="text-lg font-semibold text-charcoal dark:text-white tracking-tight">{f.title}</h3>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{f.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── CONNECTS TO OPS ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-20 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            One website, every decoration method
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                            Most shops do more than embroidery. The same platform sells screen printing and custom apparel, takes online orders, and connects to the pre-built FileMaker system so every job runs from clean data.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/print-shop-website" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Print shop websites overview
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/screen-printing-website" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Screen printing websites
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/online-ordering-for-print-shops" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Take orders online
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ───── FAQ ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-10 text-center">
                            Embroidery website FAQ
                        </h2>
                        <div className="border-t border-structural-border dark:border-gray-800">
                            {faqs.map((faq, i) => (
                                <details key={i} className="group border-b border-structural-border dark:border-gray-800">
                                    <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none select-none">
                                        <h3 className="text-base font-bold text-charcoal dark:text-white pr-4 leading-snug">{faq.question}</h3>
                                        <span className="material-symbols-outlined text-xl text-secondary-text dark:text-gray-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                                    </summary>
                                    <p className="pb-5 text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── FINAL CTA ───── */}
                <section className="bg-surface dark:bg-gray-950 py-20 md:py-28 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            Give your embroidery shop a website that sells
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Book a demo and we will walk you through a real embroidery site, from logo upload and stitch proofing to a paid, production-ready order connected to your back office.
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
