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

const lifecycle = [
    { icon: 'tune', title: 'Configure', desc: 'Pick product, size, color, and quantity, and see the price update live.' },
    { icon: 'upload_file', title: 'Upload artwork', desc: 'Attach the design, set placement, and add any notes.' },
    { icon: 'task_alt', title: 'Approve the proof', desc: 'Confirm the mockup online before anything goes to press.' },
    { icon: 'credit_card', title: 'Pay', desc: 'Check out by card or place a deposit up front.' },
    { icon: 'local_shipping', title: 'Track', desc: 'Follow live order status all the way to delivery.' },
];

const stopDoing = [
    'Retyping orders from phone calls, texts, and email threads.',
    'Chasing customers for sizes, artwork, and approvals.',
    'Quoting the same simple jobs over and over by hand.',
    'Answering "where is my order?" all day long.',
];

const features = [
    { icon: 'dynamic_form', title: 'Decoration-aware order forms', desc: 'Forms that capture size, color, method, placement, and quantity on every job.' },
    { icon: 'request_quote', title: 'Custom quote requests', desc: 'Jobs that need a manual quote come in clean and complete, not as a vague email.' },
    { icon: 'approval', title: 'Artwork upload and proofing', desc: 'Files attach to the order and customers approve the proof online.' },
    { icon: 'payments', title: 'Automatic pricing and deposits', desc: 'Quantity pricing built in, with card payment or a deposit collected up front.' },
    { icon: 'history', title: 'Reorders and accounts', desc: 'Returning customers reorder a past job in a couple of clicks.' },
    { icon: 'pending_actions', title: 'Live order status', desc: 'Buyers see where their order is, which cuts the status calls to your team.' },
];

const faqs = [
    {
        question: 'What is online ordering for print shops?',
        answer: 'Online ordering lets customers place a print or decoration job on your website instead of by phone or email. They configure the product, upload artwork, approve a proof, and pay, so the order arrives complete and ready for production.',
    },
    {
        question: 'How is this different from just having a website?',
        answer: 'A basic website shows your information. Online ordering is the working part: decoration-aware order forms, artwork upload, online proof approval, automatic pricing, and payment. It replaces manual intake, not just your online presence.',
    },
    {
        question: 'Can customers upload artwork and approve proofs online?',
        answer: 'Yes. Customers attach their files to the order with placement and notes, and they approve the mockup online before it goes to press, so nothing prints without sign-off and the right file is always attached.',
    },
    {
        question: 'Can I take custom quote requests, not just fixed-price products?',
        answer: 'Yes. Alongside fixed-price products, customers can submit a structured quote request that captures all the specs you need, so even custom jobs arrive complete instead of as a back-and-forth email thread.',
    },
    {
        question: 'How do customers pay?',
        answer: 'Customers pay by card at checkout, or you can collect a deposit up front for larger jobs. Either way, money is captured before production, which protects your cash flow and cuts down on chasing invoices.',
    },
    {
        question: 'Does online ordering connect to production?',
        answer: 'Yes. Orders flow from the website into the FileMaker back office, where they become quotes, allocate inventory, and enter the production queue. Nobody re-keys the order between the site and the shop floor.',
    },
    {
        question: 'Will customers be able to track their order?',
        answer: 'Yes. Buyers see live order status from approval through production to shipping, which replaces most of the day-to-day "where is my order?" calls and emails your team fields now.',
    },
    {
        question: 'How much does online ordering cost?',
        answer: 'Pricing depends on whether you take the website on its own or connected to the full operations system, and whether we build it for you or you set it up yourself. See the pricing page for current setup and monthly options with no long-term contract.',
    },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({
    name: 'Online Ordering for Print Shops',
    description:
        'An online ordering system for print shops and apparel decorators, with decoration-aware order forms, custom quote requests, artwork upload and online proofing, automatic pricing, payment, reorders, and live order status connected to production.',
    url: 'https://shoptitan.app/online-ordering-for-print-shops',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Online Ordering for Print Shops', url: 'https://shoptitan.app/online-ordering-for-print-shops' },
]);

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

const popIn: Variants = {
    hidden: { scale: 0, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] },
    },
};

const lineGrow: Variants = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 } },
};

export default function OnlineOrderingPage() {
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
                            Take print shop orders online, day or night
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
                        >
                            Let customers configure a job, upload artwork, approve the proof, and pay on your website, so orders arrive complete and paid instead of buried in phone calls and email.
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
                <section className="bg-background-light dark:bg-background-dark pb-16 md:pb-20">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6 md:p-8 text-center">
                            <p className="text-base md:text-lg text-charcoal dark:text-gray-200 leading-relaxed">
                                Online ordering for print shops lets customers configure a job, upload artwork, approve a proof, and pay on your website instead of by phone or email. Orders arrive complete and paid, ready for production, so your team stops re-keying intake and chasing missing details.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ───── ORDER LIFECYCLE (signature) ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                How an online order flows
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Five steps the customer drives themselves, so a finished, paid order lands on your floor.
                            </p>
                        </div>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-y-10"
                        >
                            {lifecycle.map((s, i) => (
                                <motion.div key={s.title} variants={fadeUp} className="relative flex flex-col items-start gap-3">
                                    <div className="flex items-center w-full">
                                        <motion.span
                                            variants={popIn}
                                            className="relative z-10 h-11 w-11 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"
                                        >
                                            <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                                        </motion.span>
                                        {i < lifecycle.length - 1 && (
                                            <motion.span variants={lineGrow} className="hidden lg:block h-px flex-1 bg-structural-border dark:bg-gray-800 ml-3 origin-left" />
                                        )}
                                    </div>
                                    <h3 className="text-lg font-semibold text-charcoal dark:text-white tracking-tight">{s.title}</h3>
                                    <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed pr-6">{s.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ───── ORDER FORM MOCKUP ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-5">
                                An order form built for decoration
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Not a generic contact form. Customers choose the product, sizes, colors, and quantity, attach their artwork, and see the price before they check out, so every order arrives with the specs production needs.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-10 gap-10 lg:gap-12 items-center">
                            {/* Checklist (~20%) */}
                            <ul className="lg:col-span-2 space-y-4">
                                {['Size and color matrices on every product', 'Drag-and-drop artwork upload', 'Live quantity-based pricing', 'Card payment or deposit at checkout'].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm md:text-base text-secondary-text dark:text-gray-400 leading-relaxed">
                                        <span className="material-symbols-outlined text-primary text-xl shrink-0">check</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Order form screenshot (~80%) */}
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.6 }}
                                className="lg:col-span-8 rounded-2xl border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-950 shadow-card overflow-hidden"
                            >
                                <Image
                                    src="/website/ContactForm.png"
                                    alt="Online print shop order form: product, size and color, quantity, artwork upload, total, and place order"
                                    width={1498}
                                    height={669}
                                    sizes="(max-width: 1024px) 100vw, 820px"
                                    className="w-full h-auto"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ───── STOP DOING THIS ───── */}
                <section className="bg-surface dark:bg-gray-950 py-16 md:py-20 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-8">
                            Stop taking orders by hand
                        </h2>
                        <ul className="space-y-4">
                            {stopDoing.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                    <span className="material-symbols-outlined text-secondary-text/70 text-xl shrink-0">close</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ───── FEATURES (3-col) ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-6xl mx-auto px-mobile">
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-4">
                                Built for real print orders
                            </h2>
                            <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed">
                                Everything it takes to move a job from the customer to the press without a single retyped detail.
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
                            Orders that run straight into production
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-6">
                            Online ordering only saves time if the orders do not become manual data entry on the other end. Connected to the pre-built FileMaker system, every online order becomes a quote, allocates inventory, and enters the production queue automatically.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/print-shop-website" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Print shop websites overview
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/print-shop-ecommerce-website" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                Sell apparel online
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                            <Link href="/platform/complete-system" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                                See the complete system
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ───── FAQ ───── */}
                <section className="bg-background-light dark:bg-background-dark py-16 md:py-24 border-t border-structural-border dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-mobile">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white tracking-tight mb-10">
                            Online ordering FAQ
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
                            Let customers order without picking up the phone
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Book a demo and we will show you online ordering on a real print shop site, from configured product to paid, production-ready order.
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
