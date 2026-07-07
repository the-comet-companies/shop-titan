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

const painPoints = [
    { old: 'Quotes by email and text', desc: 'Every estimate starts a back-and-forth thread to pin down garment, colors, sizes, and quantity.', fix: 'A quote form captures every spec up front and prices the job automatically.' },
    { old: 'Orders managed in an inbox', desc: 'Jobs live in scattered emails, so details get missed and nothing has a single source of truth.', fix: 'Orders arrive complete in one place, ready to move to production.' },
    { old: 'Artwork approval delays', desc: 'Proofs bounce around over email and screens get burned from the wrong file.', fix: 'Customers upload print-ready art and approve a proof online before anything runs.' },
    { old: 'Phone orders all day', desc: 'Your team stops printing to answer the phone, retype orders, and chase missing information.', fix: 'Customers configure and place orders themselves, day or night.' },
    { old: 'Spreadsheet workflows', desc: 'Pricing, sizes, and status live in fragile spreadsheets that only one person understands.', fix: 'Pricing and size runs are built into the site, and status updates flow to the customer.' },
];

const comparison = [
    { label: 'Built for', generic: 'Any business', shoptitan: 'Screen printing and apparel decorators' },
    { label: 'Custom apparel orders', generic: 'Contact form only', shoptitan: 'Configure garment, colors, sizes, and quantity online' },
    { label: 'Artwork', generic: 'Email attachments', shoptitan: 'Upload, attach to the order, approve proofs online' },
    { label: 'Quoting', generic: 'Manual, by hand', shoptitan: 'Priced by run size and color count automatically' },
    { label: 'Web-to-print', generic: 'Not supported', shoptitan: 'Product catalogs, online ordering, team stores' },
    { label: 'Back office', generic: 'Disconnected', shoptitan: 'Optional FileMaker connection for production and inventory' },
];

const features = [
    { icon: 'storefront', title: 'Ecommerce storefront', desc: 'A real online store for custom apparel and promotional products, with secure checkout, not a brochure site.' },
    { icon: 'shopping_cart_checkout', title: 'Online ordering', desc: 'Customers configure garments, sizes, colors, and quantity, then order and pay without a phone call.' },
    { icon: 'inventory_2', title: 'Product catalogs', desc: 'Organized catalogs for tees, hoodies, caps, and promo items, with options that match how you actually price.' },
    { icon: 'upload_file', title: 'Artwork uploads', desc: 'Print-ready files attach to the order with placement and notes, so the right art is always on the job.' },
    { icon: 'request_quote', title: 'Quote requests', desc: 'Custom jobs come in as structured quote requests with every spec, not a vague email.' },
    { icon: 'badge', title: 'Customer accounts', desc: 'Buyers log in to track orders and reorder a past run in a click, without re-sending art.' },
    { icon: 'mobile_friendly', title: 'Mobile responsive design', desc: 'Most apparel buyers shop on their phone, so the site is built to load fast and convert on small screens.' },
    { icon: 'travel_explore', title: 'SEO optimization', desc: 'Clean structure, technique pages, and schema that help you rank in Google and get cited by AI search.' },
    { icon: 'bolt', title: 'Fast performance', desc: 'A quick, modern site that keeps shoppers moving from product to checkout instead of bouncing.' },
    { icon: 'lock', title: 'Secure hosting', desc: 'Reliable, secure hosting with SSL and online payments, so customer and order data stays protected.' },
];

const filemaker = [
    { icon: 'receipt_long', title: 'Order management', desc: 'Online orders become jobs in one system, with no re-keying between the website and the shop floor.' },
    { icon: 'conveyor_belt', title: 'Production tracking', desc: 'Follow every job from approval through press and cure, so nothing slips and due dates hold.' },
    { icon: 'inventory', title: 'Inventory', desc: 'Track blanks and stock so you know what to order before a run is held up waiting on garments.' },
    { icon: 'groups', title: 'Customer management', desc: 'Keep accounts, history, and pricing in one place, so repeat customers are easy to serve and upsell.' },
];

const whyChoose = [
    { icon: 'verified', title: 'Built exclusively for print shops', desc: 'We do not build generic small-business sites. Every feature is shaped around how screen printers quote, decorate, and ship.' },
    { icon: 'workspace_premium', title: 'Industry expertise', desc: 'We speak color counts, screens, blanks, and run sizes, so you are not teaching your web team the basics.' },
    { icon: 'shopping_bag', title: 'Ecommerce-first approach', desc: 'The site is built to sell and take orders, not just to look good. Conversion and clean intake come first.' },
    { icon: 'trending_up', title: 'Scalable platform', desc: 'Start with a storefront and grow into web-to-print, team stores, and a connected back office as you expand.' },
    { icon: 'support_agent', title: 'Ongoing support', desc: 'You get a partner after launch, not a handoff, with help as your catalog, pricing, and volume change.' },
    { icon: 'rocket_launch', title: 'Future-ready architecture', desc: 'A modern stack that keeps pace with new payment, SEO, and AI search expectations instead of aging out.' },
];

const benefits = [
    { icon: 'shopping_cart', title: 'More online orders', desc: 'A storefront that takes orders around the clock captures jobs you would otherwise miss after hours.' },
    { icon: 'task_alt', title: 'Less manual work', desc: 'Self-serve ordering and built-in quoting cut the retyping, phone tag, and email chasing your team does now.' },
    { icon: 'speed', title: 'Faster turnaround', desc: 'Complete, approved orders hit production sooner, so jobs move through the shop without intake delays.' },
    { icon: 'sentiment_satisfied', title: 'Better customer experience', desc: 'Customers order, approve, and track on their own time, which is what they now expect from any vendor.' },
    { icon: 'payments', title: 'Increased sales', desc: 'Reorders, team stores, and promo products open revenue a phone-and-email shop leaves on the table.' },
    { icon: 'percent', title: 'Higher conversion rates', desc: 'A fast, mobile, ecommerce-first site turns more visitors into paying orders than a generic brochure page.' },
];

const process = [
    { num: '01', title: 'Discovery', desc: 'We learn your products, decoration methods, pricing, and how your shop quotes and runs jobs today.' },
    { num: '02', title: 'Website planning', desc: 'We map your catalog, ordering flow, and quote logic, and define what launch looks like for your shop.' },
    { num: '03', title: 'Design', desc: 'We design a storefront that reflects your brand and is built to convert visitors into orders.' },
    { num: '04', title: 'Development', desc: 'We build the store, ordering, artwork upload, and quoting, and connect FileMaker if you want it.' },
    { num: '05', title: 'Launch', desc: 'We go live, test the full order path, and train your team to run it in a matter of weeks.' },
    { num: '06', title: 'Ongoing support', desc: 'We stay on as a partner, updating the site as your catalog, pricing, and volume grow.' },
];

const faqs = [
    {
        question: 'How much does a screen printing website cost?',
        answer: 'Cost depends on whether you want a storefront alone or a storefront connected to a full operations system, and whether we build it for you or you set it up. ShopTitan offers setup and monthly options with no long-term contract. See the pricing page for current screen printing website pricing.',
    },
    {
        question: 'What features should a screen printing website have?',
        answer: 'A screen printing website should include an ecommerce storefront, online ordering, product catalogs, artwork upload, quote requests, customer accounts, mobile responsive design, SEO, fast performance, and secure hosting. The goal is to take complete custom apparel orders online instead of managing quotes by phone and email.',
    },
    {
        question: 'Can customers upload artwork?',
        answer: 'Yes. Customers attach print-ready files directly to their order with placement and notes, and they approve a digital proof online before screens are burned. The artwork stays tied to the job, so the right file is always on the order and nothing gets lost in an email thread.',
    },
    {
        question: 'Can customers place custom apparel orders online?',
        answer: 'Yes. Customers choose the garment, colors, sizes, and quantity, upload artwork, see a price, and check out. The order arrives complete and production-ready, which replaces manual phone and email intake and lets your team print instead of retyping orders by hand.',
    },
    {
        question: 'Can my website connect to FileMaker?',
        answer: 'Yes, as an optional upgrade. Your ShopTitan website can connect to a FileMaker-based management system so online orders flow into order management, production tracking, inventory, and customer records automatically. You can launch the storefront first and add the FileMaker connection whenever you are ready.',
    },
    {
        question: 'How long does development take?',
        answer: 'Most screen printing websites launch in a few weeks. Timing depends on the size of your catalog, how custom your quoting is, and whether you connect FileMaker at launch. We start with discovery, plan the build, then design, develop, and train your team before going live.',
    },
    {
        question: 'Is SEO included?',
        answer: 'Yes. Every ShopTitan site is built with clean structure, fast performance, technique and location pages, and schema markup so you can rank in Google and get cited by AI search engines. SEO is built into the foundation rather than added on as an afterthought.',
    },
    {
        question: 'Can I sell promotional products?',
        answer: 'Yes. Alongside custom apparel and t-shirt printing, you can sell promotional products through the same storefront and catalog. Customers order, configure, and pay online, and the orders flow into the same workflow as your decorated apparel jobs.',
    },
    {
        question: 'Can I manage inventory?',
        answer: 'Yes, with the optional FileMaker system. You can track blanks and stock so you know what to reorder before a run is held up waiting on garments. Inventory connects to orders and production, giving you one view of what is committed and what is available.',
    },
    {
        question: 'Can I accept online payments?',
        answer: 'Yes. Customers pay securely by card at checkout, or you can collect a deposit up front for larger custom jobs. Payment is captured before production, which protects your cash flow and cuts down on chasing invoices after the work is done.',
    },
    {
        question: 'What is screen printing web-to-print?',
        answer: 'Screen printing web-to-print lets customers configure and order decorated apparel directly on your website. They pick products, colors, sizes, and quantity, upload artwork, and check out, so a print-ready order is created online instead of through manual quoting and email back-and-forth.',
    },
    {
        question: 'Do you build websites for other apparel decorators?',
        answer: 'Yes. Beyond screen printing, ShopTitan builds ecommerce websites for embroidery, DTG, and other custom apparel decorators. The platform handles the products, options, artwork, and online ordering that any apparel decorator needs to sell and take orders online.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Screen Printing Website Design and Ecommerce',
    description:
        'ShopTitan builds ecommerce websites for screen printing businesses, with online ordering, custom apparel and t-shirt printing storefronts, product catalogs, artwork upload, quote requests, customer accounts, web-to-print, SEO, and an optional FileMaker connection for order management, production tracking, and inventory.',
    url: 'https://shoptitan.app/screen-printing-website',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Screen Printing Website', url: 'https://shoptitan.app/screen-printing-website' },
]);

// ───── Motion ─────

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

const lineGrow: Variants = {
    hidden: { scaleY: 0 },
    show: { scaleY: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function ScreenPrintingWebsitePage() {
    return (
        <>
            <main className="min-h-screen pt-20">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

                {/* ───── HERO (split: text left, screenshot right) ───── */}
                <section className="bg-background-light dark:bg-background-dark pt-12 md:pt-20 pb-16 md:pb-24">
                    <div className="max-w-6xl mx-auto px-mobile grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                            >
                                Screen printing websites that sell apparel and take orders online
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-lg md:text-xl text-secondary-text dark:text-gray-400 leading-relaxed mb-8"
                            >
                                ShopTitan builds ecommerce websites made only for screen printing businesses. Sell custom apparel, take online orders and quotes, collect artwork, and connect to your back office, so jobs arrive complete instead of buried in phone calls and email.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-4"
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

                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="rounded-2xl border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 shadow-card overflow-hidden"
                        >
                            <Image
                                src="/website/ScreenPrinting.png"
                                alt="Screen printing ecommerce website selling custom apparel online"
                                width={1080}
                                height={1350}
                                sizes="(max-width: 1024px) 100vw, 560px"
                                className="w-full h-auto"
                                priority
                            />
                        </motion.div>
                    </div>
                </section>

                {/* ───── DIRECT ANSWER (AEO) ───── */}
                <section className="bg-surface dark:bg-gray-950 border-t border-structural-border dark:border-gray-800 py-14 md:py-16">
                    <div className="max-w-4xl mx-auto px-mobile">
                        <div className="border-l-4 border-primary pl-6 md:pl-8">
                            <p className="text-base md:text-lg text-charcoal dark:text-gray-200 leading-relaxed">
                                A screen printing website is an ecommerce site built specifically for screen print shops and apparel decorators. It sells custom apparel and promotional products online, takes orders and quote requests, collects artwork, prices jobs by quantity and color count, and can connect to a FileMaker back office, so orders arrive complete and production-ready instead of scattered across phone, email, and spreadsheets.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ───── WHY SPECIALIZED (pain points + comparison) ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                Why screen printing businesses need a specialized website
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                A generic website is a brochure. Screen printing runs on quotes, artwork, color counts, and size runs, and a site that ignores that just sends you back to your inbox. Here is what slows most shops down, and how a specialized site fixes it.
                            </p>
                        </div>

                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="space-y-4 mb-14"
                        >
                            {painPoints.map((p) => (
                                <motion.div
                                    key={p.old}
                                    variants={fadeUp}
                                    className="grid md:grid-cols-2 gap-4 md:gap-8 rounded-2xl border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 p-6"
                                >
                                    <div className="flex gap-3">
                                        <span className="material-symbols-outlined text-secondary-text/70 text-xl shrink-0 mt-0.5">close</span>
                                        <div>
                                            <h3 className="text-base font-semibold text-charcoal dark:text-white mb-1">{p.old}</h3>
                                            <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{p.desc}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 md:border-l md:border-structural-border md:dark:border-gray-800 md:pl-8">
                                        <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">check_circle</span>
                                        <p className="text-sm text-charcoal dark:text-gray-200 leading-relaxed self-center">{p.fix}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Comparison table (GEO) */}
                        <h3 className="text-xl md:text-2xl font-bold text-charcoal dark:text-white tracking-tight mb-6">
                            Generic website vs ShopTitan screen printing website
                        </h3>
                        <div className="overflow-x-auto rounded-2xl border border-structural-border dark:border-gray-800">
                            <table className="w-full text-left border-collapse min-w-[640px]">
                                <thead>
                                    <tr className="bg-background-light dark:bg-gray-900">
                                        <th className="p-4 text-sm font-semibold text-secondary-text dark:text-gray-400 w-1/4">&nbsp;</th>
                                        <th className="p-4 text-sm font-semibold text-charcoal dark:text-white">Generic website</th>
                                        <th className="p-4 text-sm font-semibold text-primary">ShopTitan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparison.map((row, i) => (
                                        <tr key={row.label} className={i % 2 === 1 ? 'bg-background-light/50 dark:bg-gray-900/40' : 'bg-surface dark:bg-gray-950'}>
                                            <td className="p-4 text-sm font-semibold text-charcoal dark:text-white align-top border-t border-structural-border dark:border-gray-800">{row.label}</td>
                                            <td className="p-4 text-sm text-secondary-text dark:text-gray-400 align-top border-t border-structural-border dark:border-gray-800">{row.generic}</td>
                                            <td className="p-4 text-sm text-charcoal dark:text-gray-200 align-top border-t border-structural-border dark:border-gray-800">{row.shoptitan}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* ───── FEATURES (10 cards) ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                Everything your screen printing website includes
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Each ShopTitan site ships with the ecommerce, ordering, and infrastructure a custom apparel business needs to sell online and run clean.
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
                                    className="rounded-2xl border border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-900 p-6 flex flex-col gap-3"
                                >
                                    <span className="material-symbols-outlined text-primary text-3xl">{f.icon}</span>
                                    <h3 className="text-lg font-semibold text-charcoal dark:text-white tracking-tight">{f.title}</h3>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{f.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── OPTIONAL FILEMAKER ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-3">Optional upgrade</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                                Connect your website to a FileMaker back office
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8">
                                Start with the storefront, then connect ShopTitan&apos;s FileMaker-based management system whenever operations become your bottleneck. Online orders flow straight into the back office, so nobody re-keys a job between the website and the shop floor.
                            </p>
                            <div className="space-y-5">
                                {filemaker.map((f) => (
                                    <div key={f.title} className="flex gap-4">
                                        <span className="material-symbols-outlined text-primary text-2xl shrink-0">{f.icon}</span>
                                        <div>
                                            <h3 className="text-base font-semibold text-charcoal dark:text-white mb-0.5">{f.title}</h3>
                                            <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6 }}
                            className="rounded-2xl border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 shadow-card overflow-hidden"
                        >
                            <Image
                                src="/website/backend-dashboard.png"
                                alt="FileMaker back office connected to a screen printing website for order, production, and inventory management"
                                width={1743}
                                height={877}
                                sizes="(max-width: 1024px) 100vw, 560px"
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* ───── WHY CHOOSE SHOPTITAN ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                Why choose ShopTitan
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                We are not a generic web design agency. We build for one industry, so the website fits how your shop actually works.
                            </p>
                        </div>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="grid sm:grid-cols-2 gap-x-10 gap-y-8"
                        >
                            {whyChoose.map((w) => (
                                <motion.div key={w.title} variants={fadeUp} className="flex gap-4">
                                    <span className="material-symbols-outlined text-primary text-2xl shrink-0">{w.icon}</span>
                                    <div>
                                        <h3 className="text-lg font-semibold text-charcoal dark:text-white tracking-tight mb-1">{w.title}</h3>
                                        <p className="text-sm md:text-base text-secondary-text dark:text-gray-400 leading-relaxed">{w.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── BENEFITS (business outcomes) ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                What a specialized website does for your business
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                The point is not more features. It is more orders, less manual work, and a shop that scales without scaling the chaos.
                            </p>
                        </div>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-structural-border dark:bg-gray-800 rounded-2xl overflow-hidden border border-structural-border dark:border-gray-800"
                        >
                            {benefits.map((b) => (
                                <motion.div key={b.title} variants={fadeUp} className="bg-surface dark:bg-gray-950 p-6 md:p-8 flex flex-col gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">{b.icon}</span>
                                    <h3 className="text-lg font-semibold text-charcoal dark:text-white tracking-tight">{b.title}</h3>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{b.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── PROCESS (vertical rail) ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-12">
                            How we build your screen printing website
                        </h2>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="relative pl-12"
                        >
                            <motion.div
                                variants={lineGrow}
                                className="absolute left-[19px] top-2 bottom-2 w-px bg-structural-border dark:bg-gray-800 origin-top"
                            />
                            <div className="space-y-10">
                                {process.map((s) => (
                                    <motion.div key={s.num} variants={fadeUp} className="relative">
                                        <span className="absolute -left-12 top-0 h-10 w-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-soft">
                                            {s.num}
                                        </span>
                                        <h3 className="text-lg font-semibold text-charcoal dark:text-white tracking-tight mb-1.5">{s.title}</h3>
                                        <p className="text-base text-secondary-text dark:text-gray-400 leading-relaxed">{s.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ───── EXPLORE MORE (internal links) ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-20 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-3">
                            Explore the rest of the platform
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl">
                            A screen printing website is one part of how ShopTitan helps print shops sell and run. See how the pieces fit together.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { href: '/print-shop-website', label: 'Print shop website', desc: 'The pillar overview for print shop websites.' },
                                { href: '/print-shop-ecommerce-website', label: 'Print shop ecommerce website', desc: 'Sell custom apparel and merch online.' },
                                { href: '/online-ordering-for-print-shops', label: 'Online ordering for print shops', desc: 'Take complete, paid orders 24/7.' },
                                { href: '/platform/ecommerce-storefront', label: 'Ecommerce storefront', desc: 'The storefront that powers online sales.' },
                                { href: '/platform/filemaker-system', label: 'FileMaker system', desc: 'The back office your site can connect to.' },
                                { href: '/platform/inventory-management', label: 'Inventory management', desc: 'Track blanks and stock against orders.' },
                                { href: '/platform/production-automation', label: 'Production automation', desc: 'Move jobs through the shop automatically.' },
                                { href: '/case-studies', label: 'Case studies', desc: 'Real results from real print shops.' },
                                { href: '/pricing', label: 'Pricing', desc: 'Setup and monthly options, no contract.' },
                            ].map((l) => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className="group rounded-2xl border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 p-5 hover:border-primary/40 transition-colors"
                                >
                                    <div className="flex items-center justify-between gap-2 mb-1">
                                        <span className="text-base font-semibold text-charcoal dark:text-white group-hover:text-primary transition-colors">{l.label}</span>
                                        <span className="material-symbols-outlined text-primary text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </div>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{l.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── FAQ ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-10 text-center">
                            Screen printing website FAQ
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
                <section className="bg-background-light dark:bg-background-dark py-20 md:py-28 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            Ready for a screen printing website that sells?
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Book a demo and we will walk you through a real screen printing ecommerce site, from custom apparel ordering and artwork upload to a paid, production-ready order connected to your back office.
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
