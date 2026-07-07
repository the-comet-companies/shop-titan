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

const storeTypes = [
    {
        icon: 'storefront',
        title: 'Branded merch store',
        desc: 'Your brand\'s own online store for fans, customers, and employees. Sell your designs with secure checkout, no spreadsheets or DMs.',
        featured: true,
    },
    { icon: 'groups', title: 'Team & group stores', desc: 'Schools, clubs, and leagues order their gear in one place, each member in their own size.' },
    { icon: 'corporate_fare', title: 'Company swag store', desc: 'Let companies order branded apparel and gifts for staff and events, on a recurring basis.' },
    { icon: 'volunteer_activism', title: 'Fundraising store', desc: 'Run a time-boxed campaign store where every sale supports the cause, then close it out.' },
    { icon: 'celebration', title: 'Pop-up & event store', desc: 'Spin up a store for a concert, festival, or launch, then take it down when the event ends.' },
    { icon: 'inventory_2', title: 'Print on demand', desc: 'Sell without holding inventory. Print and ship each order as it comes in, no minimums.' },
];

const included = [
    { icon: 'shopping_cart_checkout', title: 'Online storefront & checkout', desc: 'A real store with secure card payments, not a contact form or a DM thread.' },
    { icon: 'apparel', title: 'Product catalog & mockups', desc: 'Tees, hoodies, caps, and more, with live mockups so buyers see the design before they buy.' },
    { icon: 'upload_file', title: 'Artwork & logo upload', desc: 'For custom jobs, customers attach their art and notes, attached to the order.' },
    { icon: 'badge', title: 'Customer accounts & reorders', desc: 'Buyers track orders and reorder a past design in a click.' },
    { icon: 'travel_explore', title: 'SEO & AI search ready', desc: 'Clean structure and schema so your store shows up in Google and AI answers.' },
    { icon: 'bolt', title: 'Connected to production', desc: 'Orders flow into the pre-built FileMaker back office as jobs, with no re-entry.' },
];

const steps = [
    { num: '01', title: 'Pick your store type', desc: 'Branded merch, team store, company swag, fundraiser, or print on demand.' },
    { num: '02', title: 'Load products & designs', desc: 'We set up your catalog, mockups, pricing, and checkout.' },
    { num: '03', title: 'Share the link', desc: 'Send buyers to a clean store URL. They order and pay themselves.' },
    { num: '04', title: 'Fulfill from clean orders', desc: 'Paid, production-ready orders flow to your shop floor, no re-keying.' },
];

const faqs = [
    {
        question: 'What is a custom apparel online store?',
        answer: 'A custom apparel online store is an ecommerce site that sells personalized clothing and merch, like tees, hoodies, and caps, online. Customers pick products, see a mockup, and pay, and the order arrives complete and production-ready. It replaces selling by phone, email, and order forms with a real storefront.',
    },
    {
        question: 'Can I run team stores and company stores?',
        answer: 'Yes. You can launch dedicated stores for teams, schools, clubs, and companies, each with approved designs and products. Members order their own sizes and pay individually, and the orders consolidate cleanly instead of arriving as a spreadsheet you have to chase and untangle.',
    },
    {
        question: 'Do I need to hold inventory?',
        answer: 'No. You can sell print on demand, printing and shipping each item as it is ordered, so you carry no stock. You can also run time-boxed stores that collect all orders first, then produce them in one batch, whichever fits the product and the campaign.',
    },
    {
        question: 'Can customers pay online?',
        answer: 'Yes. Customers pay securely by card at checkout, so money is captured before production. For larger custom jobs you can collect a deposit up front, which protects your cash flow and cuts down on chasing invoices after the work is done.',
    },
    {
        question: 'Can I sell both ready-made designs and custom orders?',
        answer: 'Yes. Sell your own fixed designs as products, and also take custom orders where customers upload a logo or artwork with notes. Both flow into the same workflow, so your store handles merch sales and custom decoration jobs without a separate system.',
    },
    {
        question: 'Does the store connect to production?',
        answer: 'Yes. Orders flow from the store into the pre-built FileMaker back office, where they become jobs ready to schedule and produce. Nobody re-keys an order between the store and the shop floor, so the time you save on intake is not lost to data entry.',
    },
    {
        question: 'How long does it take to launch a store?',
        answer: 'Most stores launch in a few weeks. We start with your products, designs, and pricing, set up the storefront and checkout, and train your team. You can start with a single store and add team or company stores whenever you are ready to grow.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Custom Apparel Online Store',
    description:
        'A custom apparel ecommerce store for print shops and apparel decorators, with an online storefront and checkout, product catalogs and mockups, artwork upload, branded merch, team, company, fundraising, and pop-up stores, print on demand, reorders, and orders connected to production.',
    url: 'https://shoptitan.app/custom-apparel-online-store',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Custom Apparel Online Store', url: 'https://shoptitan.app/custom-apparel-online-store' },
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

export default function CustomApparelOnlineStorePage() {
    return (
        <>
            <main className="min-h-screen pt-20">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

                {/* ───── HERO (split: image left, text right) ───── */}
                <section className="bg-background-light dark:bg-background-dark pt-12 md:pt-20 pb-16 md:pb-24">
                    <div className="max-w-6xl mx-auto px-mobile grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="order-2 lg:order-1 rounded-2xl border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 shadow-card overflow-hidden"
                        >
                            <Image
                                src="/website/StoreFront.png"
                                alt="Custom apparel online store selling merch with secure checkout"
                                width={1773}
                                height={795}
                                sizes="(max-width: 1024px) 100vw, 560px"
                                className="w-full h-auto"
                                priority
                            />
                        </motion.div>
                        <div className="order-1 lg:order-2">
                            <motion.h1
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-6"
                            >
                                Launch a custom apparel online store
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-lg md:text-xl text-secondary-text dark:text-gray-400 leading-relaxed mb-8"
                            >
                                Sell your merch and take custom orders online, with branded stores for teams, companies, and campaigns. Buyers order and pay themselves, so jobs land complete instead of in your inbox.
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
                    </div>
                </section>

                {/* ───── DIRECT ANSWER (AEO) ───── */}
                <section className="bg-surface dark:bg-gray-950 border-t border-structural-border dark:border-gray-800 py-14 md:py-16">
                    <div className="max-w-4xl mx-auto px-mobile">
                        <div className="border-l-4 border-primary pl-6 md:pl-8">
                            <p className="text-base md:text-lg text-charcoal dark:text-gray-200 leading-relaxed">
                                A custom apparel online store is an ecommerce site that sells personalized clothing and merch online. Customers pick products, see a mockup, and pay, and orders arrive complete and production-ready. The same platform runs branded merch, team, company, fundraising, and pop-up stores, and connects to production, so selling online replaces phone, email, and order-form intake.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ───── STORE TYPES (signature bento) ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                One platform, every kind of store
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Sell your own merch or stand up a store for a team, a company, or a one-time campaign, all from the same system.
                            </p>
                        </div>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                        >
                            {storeTypes.map((s) => (
                                <motion.div
                                    key={s.title}
                                    variants={fadeUp}
                                    className={`rounded-2xl border p-6 flex flex-col gap-3 ${
                                        s.featured
                                            ? 'sm:col-span-2 lg:row-span-2 lg:flex-col lg:justify-between border-primary/30 bg-primary/5 dark:bg-primary/10'
                                            : 'border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950'
                                    }`}
                                >
                                    <span className={`material-symbols-outlined text-primary ${s.featured ? 'text-5xl' : 'text-3xl'}`}>{s.icon}</span>
                                    <div>
                                        <h3 className={`font-semibold text-charcoal dark:text-white tracking-tight ${s.featured ? 'text-2xl mb-2' : 'text-lg'}`}>{s.title}</h3>
                                        <p className={`text-secondary-text dark:text-gray-400 leading-relaxed ${s.featured ? 'text-base md:text-lg' : 'text-sm'}`}>{s.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── HOW IT WORKS (compact strip) ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-20 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-10">
                            From idea to live store in four steps
                        </h2>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {steps.map((s) => (
                                <motion.div key={s.num} variants={fadeUp} className="relative pl-0">
                                    <div className="text-3xl font-bold text-primary/30 mb-2">{s.num}</div>
                                    <h3 className="text-lg font-semibold text-charcoal dark:text-white tracking-tight mb-1.5">{s.title}</h3>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{s.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── WHAT'S INCLUDED ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                What your store includes
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Everything it takes to sell custom apparel online and turn a buyer into a production-ready order.
                            </p>
                        </div>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {included.map((f) => (
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

                {/* ───── CROSS-LINKS ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-20 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                            Part of a full print shop platform
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                            The store is the front door. When you are ready, connect it to online ordering and the pre-built FileMaker system so every sale runs straight into production.
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
                            <Link href="/print-shop-website" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Print shop websites overview
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ───── FAQ ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-10 text-center">
                            Custom apparel store FAQ
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
                            Ready to sell your apparel online?
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Book a demo and we will walk you through a real custom apparel store, from product mockups and checkout to a paid, production-ready order connected to your shop.
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
