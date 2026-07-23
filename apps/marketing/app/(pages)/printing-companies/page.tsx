'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

// ─────────────────────────────────────────────────────────────────────────────
// /printing-companies · dark command-center landing page for print shops.
// Fixed dark palette (independent of site theme): base #0B0E13, panels
// #10151D/#151B25, borders #202836, accent = brand blue on dark.
// ─────────────────────────────────────────────────────────────────────────────

// Pain-to-service cards: one big card per scroll step in a horizontal
// scroll-driven strip (CSS view-timeline, per scroll-driven-animations.style).
// Content left, product screenshot right.
const painSolutions = [
    {
        icon: 'inbox',
        q: 'Orders Live Everywhere?',
        pain: 'Customer details, quantities, sizes, due dates, print locations, garment styles, and production notes are split across emails, spreadsheets, invoices, and job sheets.',
        service: 'Centralized Job Records',
        fix: 'Every order becomes one connected job record: customer details, quantities, garment styles, due dates, print locations, and production requirements in the same place.',
        img: '/filemaker/PurchaseOrders.png',
        alt: 'Purchase orders screen with complete order details',
    },
    {
        icon: 'palette',
        q: 'Artwork Gets Messy Fast?',
        pain: 'Mockups, approvals, revised files, logo versions, print placements, and color notes get buried in email threads, folders, and downloads.',
        service: 'Artwork and Approval Tracking',
        fix: 'Mockups, revised artwork, approval history, logo files, print placement notes, and customer sign-off attach directly to the order.',
        img: '/filemaker/transfer&firm.gif',
        alt: 'Transfers and trim tracking screen with artwork files per job',
    },
    {
        icon: 'edit_calendar',
        q: 'Scheduling Is Still Too Manual?',
        pain: 'Whiteboards, spreadsheets, magnets, and verbal updates do not show real press capacity, department workload, rush impact, or bottlenecks.',
        service: 'Production Scheduling',
        fix: 'See what is in queue, what is ready, what is blocked, and how rush jobs affect capacity across departments.',
        img: '/filemaker/machine-scheduler.png',
        alt: 'Machine scheduler with jobs assigned per press and department',
    },
    {
        icon: 'notifications_active',
        q: 'Production Keeps Getting Interrupted?',
        pain: 'The team keeps asking, "Where is this order?" or "Is this approved?" because the system does not give everyone a clear answer.',
        service: 'Job Status Tracking',
        fix: 'See where each order stands without walking the floor, interrupting production, or asking three different people.',
        img: '/filemaker/TaskTypes.png',
        alt: 'Task types setup with per-department production tasks',
    },
    {
        icon: 'calculate',
        q: 'Pricing Is Easy to Get Wrong?',
        pain: 'Print pricing changes based on setup, color count, locations, quantity breaks, garment type, rush needs, and finishing requirements.',
        service: 'Structured Pricing Support',
        fix: 'Pricing logic, quantity breaks, color counts, locations, rush fees, discounts, and special requirements stay consistent on every quote.',
        img: '/filemaker/ServicePricingGrid-cropped.png',
        alt: 'Services pricing grid with quantity break pricing per service',
    },
    {
        icon: 'inventory_2',
        q: 'Inventory Issues Show Up Too Late?',
        pain: 'Blanks, transfers, screens, specialty inks, labels, and packaging are not always connected to the job before production begins.',
        service: 'Inventory Awareness',
        fix: 'Jobs connect to blanks, transfers, specialty inks, labels, packaging, and vendor needs before production gets delayed.',
        img: '',
        alt: 'Inventory ordering report by product SKU',
    },
    {
        icon: 'replay',
        q: 'Reprints Eat Profit?',
        pain: 'Wrong artwork, missing approvals, unclear notes, incorrect garments, or rushed handoffs can turn a profitable job into a loss.',
        service: 'Margin and Reprint Visibility',
        fix: 'Track the details that affect profit, including labor, rush changes, errors, reprints, discounts, and production exceptions.',
        img: '',
        alt: 'Margin and reprint visibility report',
    },
    {
        icon: 'manage_accounts',
        q: 'The Owner Becomes the System?',
        pain: 'The owner or production manager becomes the person everyone depends on for answers, approvals, pricing, scheduling, and problem solving.',
        service: 'Department Visibility',
        fix: 'Screen printing, DTG, DTF, finishing, fulfillment, and shipping teams get the exact information they need to move work forward without waiting on you.',
        img: '',
        alt: 'Department visibility dashboard',
    },
];

// Website-focused cards: same pain-to-solution format, storefront screens
// from DTLA Print's live site (built on Shop Titan).
const siteSolutions = [
    {
        icon: 'storefront',
        q: 'Still Taking Orders by Phone and Email?',
        pain: 'Every order that starts with a call or an email thread needs someone to type it up, chase the details, and confirm the price before work can begin.',
        service: 'Online Storefront',
        fix: 'Customers browse products, pick garments, and place orders on your website any time, and each order arrives complete instead of scattered across messages.',
        img: '/website/ProductCatalog.png',
        alt: 'Product page with color, size, and quantity ordering flow',
    },
    {
        icon: 'grid_view',
        q: 'Customers Cannot See Everything You Offer?',
        pain: 'If your catalog lives in a PDF or in your head, customers only order what they already know about, and the rest of your capabilities never get sold.',
        service: 'Full Product Catalog',
        fix: 'Organized categories put every garment, print method, and service in front of customers, so browsing turns into bigger and more frequent orders.',
        img: '/gallery/dtla-print/categories.webp',
        alt: 'DTLA Print product category navigation',
    },
    {
        icon: 'design_services',
        q: 'Custom Jobs Start as Long Email Threads?',
        pain: 'Custom merch requests bounce between quotes, art files, placement notes, and revisions before anyone knows what the job actually is.',
        service: 'Custom Merch Ordering',
        fix: 'A guided flow collects the garment, quantities, artwork, and placement up front, so custom jobs start with the details production needs.',
        img: '/website/art-work-upload.png',
        alt: 'Design studio with artwork upload, placement, and decoration method',
    },
    {
        icon: 'bolt',
        q: 'Rush Requests Come In With No Structure?',
        pain: 'Rush jobs land as urgent calls with unclear expectations, and the shop absorbs the chaos of confirming what is possible by when.',
        service: 'Rush Ordering Built In',
        fix: 'Clear rush options and turnaround expectations live on the site, so customers pick a real deadline and production plans around it.',
        img: '/website/rush-orders-hero.png',
        alt: 'Rush order page with turnaround options and rush quote button',
    },
    {
        icon: 'shopping_cart',
        q: 'Reorders Still Require a Phone Call?',
        pain: 'Repeat customers should be your easiest revenue, but if reordering means calling the shop, many of those orders quietly go elsewhere.',
        service: 'Self-Serve Checkout',
        fix: 'Customers build a cart and check out on their own, and repeat orders take minutes instead of another round of back and forth.',
        img: '/gallery/dtla-print/cart.webp',
        alt: 'DTLA Print cart and checkout',
    },
    {
        icon: 'sell',
        q: 'Promotions Never Reach Your Customers?',
        pain: 'Deals, seasonal pushes, and best sellers do not sell anything if the only place they exist is inside the shop.',
        service: 'Deals and Best Sellers',
        fix: 'Featured deals and best-seller pages give customers a reason to come back and an easy path to order more.',
        img: '/gallery/dtla-print/deals.webp',
        alt: 'DTLA Print deals page with featured offers',
    },
];

const painCss = `
.pain-track {
    --card-w: min(1400px, calc(100vw - 4rem));
    display: flex;
    gap: 1.5rem;
    /* center the first card at rest and the last card at the end */
    padding: 0 calc((100vw - var(--card-w)) / 2);
}
.pain-viewport { overflow-x: auto; padding-bottom: 1rem; }
@supports (animation-timeline: view()) {
    .pain-section {
        height: 500vh;
        overflow: visible; /* required for position: sticky inside */
        view-timeline-name: --pain-tl;
        view-timeline-axis: block;
        /* the site sets scroll-padding-top: 100px, which view-timeline-inset:auto
           would inherit and start the animation early; pin it to 0 so the first
           card sits centered when the section pins */
        view-timeline-inset: 0;
    }
    .pain-viewport {
        position: sticky;
        top: 0;
        height: 100vh;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 0;
    }
    .pain-track {
        width: max-content;
        will-change: transform;
        animation: pain-move linear forwards;
        animation-timeline: --pain-tl;
        animation-range: contain 0% contain 100%;
    }
    @keyframes pain-move {
        to {
            /* Move horizontally so the right edge aligns with the viewport */
            transform: translateX(calc(-100% + 100vw));
        }
    }
    /* website strip has 6 cards instead of 8: shorter scroll range */
    .site-section { height: 400vh; }
}
`;

const movingParts = [
    'Quote', 'Customer notes', 'Garment style', 'Size breakdown', 'Print method', 'Artwork file',
    'Mockup', 'Approval status', 'Ink colors', 'Print locations', 'Screens', 'Transfers',
    'Press schedule', 'Production notes', 'Finishing', 'Shipping', 'Invoice', 'Profit review',
];

const beforeItems = [
    'Orders spread across multiple systems',
    'Artwork buried in email or folders',
    'Approvals hard to confirm',
    'Scheduling handled manually',
    'Production notes missing or unclear',
    'Inventory problems discovered late',
    'Job status depends on asking someone',
    'Reprints and mistakes are hard to track',
    'Owner involvement is required constantly',
];

const afterItems = [
    'One connected job record',
    'Artwork tied directly to the order',
    'Approvals tracked clearly',
    'Production schedule visible in one place',
    'Notes organized by job and department',
    'Inventory and vendor needs connected earlier',
    'Status visible without interrupting the team',
    'Reprints and exceptions easier to identify',
    'The shop can run with less owner dependency',
];

const features = [
    { icon: 'assignment', title: 'Centralized Job Records', desc: 'Keep customer details, quantities, garment styles, due dates, print locations, and production requirements connected to the same job.' },
    { icon: 'fact_check', title: 'Artwork and Approval Tracking', desc: 'Attach mockups, revised artwork, approval history, logo files, print placement notes, and customer sign-off directly to the order.' },
    { icon: 'calendar_month', title: 'Production Scheduling', desc: 'See what is in queue, what is ready, what is blocked, and how rush jobs affect capacity across departments.' },
    { icon: 'groups', title: 'Department Visibility', desc: 'Give screen printing, DTG, DTF, finishing, fulfillment, and shipping teams the exact information they need to move work forward.' },
    { icon: 'request_quote', title: 'Structured Pricing Support', desc: 'Keep pricing logic, quantity breaks, color counts, locations, rush fees, discounts, and special requirements more consistent.' },
    { icon: 'warehouse', title: 'Inventory Awareness', desc: 'Connect jobs to blanks, transfers, specialty inks, labels, packaging, and vendor needs before production gets delayed.' },
    { icon: 'track_changes', title: 'Job Status Tracking', desc: 'See where each order stands without walking the floor, interrupting production, or asking three different people.' },
    { icon: 'monitoring', title: 'Margin and Reprint Visibility', desc: 'Track the details that affect profit, including labor, rush changes, errors, reprints, discounts, and production exceptions.' },
];

const workflow = [
    { icon: 'request_quote', title: 'Quote Created', desc: 'Capture customer details, quantities, garment style, print method, and pricing.' },
    { icon: 'upload_file', title: 'Artwork Uploaded', desc: 'Attach logos, mockups, art notes, revisions, and placement requirements.' },
    { icon: 'task_alt', title: 'Approval Confirmed', desc: 'Track what was approved, when it was approved, and who approved it.' },
    { icon: 'inventory', title: 'Inventory Checked', desc: 'Confirm blanks, transfers, screens, inks, labels, and production materials.' },
    { icon: 'event_available', title: 'Production Scheduled', desc: 'Assign the job to the correct print method, department, machine, or production queue.' },
    { icon: 'update', title: 'Job Status Updated', desc: 'Give the team real-time visibility into what is ready, blocked, in production, completed, or shipped.' },
    { icon: 'paid', title: 'Profit Reviewed', desc: 'Review the job details, exceptions, reprints, labor, and margin impact.' },
];

const methods = [
    { key: 'screen', icon: 'layers', name: 'Screen Printing', desc: 'Manage color counts, print locations, screens, setups, press scheduling, approvals, and production notes.' },
    { key: 'dtg', icon: 'print', name: 'DTG Printing', desc: 'Track garment details, artwork readiness, print queues, pretreatment requirements, and production status.' },
    { key: 'dtf', icon: 'layers_clear', name: 'DTF Printing', desc: 'Manage transfer orders, artwork, gang sheets, production timing, application notes, and fulfillment needs.' },
    { key: 'contract', icon: 'handshake', name: 'Contract Printing', desc: 'Keep customer-supplied blanks, outside vendor needs, client instructions, print specs, and production requirements connected.' },
    { key: 'hybrid', icon: 'hub', name: 'Hybrid Print Shops', desc: 'Run multiple departments with one connected view of jobs, handoffs, approvals, status, and schedule.' },
];

const ownerOutcomes = [
    'Fewer owner interruptions',
    'Cleaner handoffs between departments',
    'Better production visibility',
    'More consistent pricing',
    'Faster answers for the team',
    'Less guessing',
    'More control as order volume grows',
];

const results = [
    { icon: 'search_off', title: 'Less Searching', desc: 'Your team spends less time hunting through emails, folders, spreadsheets, and job sheets.' },
    { icon: 'verified', title: 'Fewer Production Mistakes', desc: 'The right art, notes, approvals, and production details stay connected to the job.' },
    { icon: 'event_note', title: 'More Reliable Scheduling', desc: 'Production leaders can see what is coming, what is blocked, and where capacity is tightening.' },
    { icon: 'forum', title: 'Cleaner Communication', desc: 'Sales, art, production, purchasing, finishing, and shipping work from the same source of truth.' },
    { icon: 'savings', title: 'Better Margin Control', desc: 'Owners can see where errors, discounts, reprints, labor, and rush work are affecting profit.' },
    { icon: 'trending_up', title: 'More Scalable Growth', desc: 'The shop can handle more orders without relying on memory, heroics, and constant manual follow-up.' },
];

// ── schema ──
const serviceSchema = generateServiceSchema({
    name: 'Production Management Software for Printing Companies',
    description:
        'Shop Titan is a production operating system for growing print shops: orders, artwork, approvals, pricing, production scheduling, inventory, job status, and reporting in one connected system.',
    url: 'https://shoptitan.app/printing-companies',
});
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://shoptitan.app' },
    { name: 'Printing Companies', url: 'https://shoptitan.app/printing-companies' },
]);

// ── shared bits ──
const panel = 'border border-[#202836] bg-[#10151D]';
const accent = 'text-[#4D9FFF]';

function DemoButton({ label = 'Book a Demo' }: { label?: string }) {
    return (
        <Link
            href="/reach-out"
            className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
        >
            {label}
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </Link>
    );
}

function GhostButton({ label, href }: { label: string; href: string }) {
    return (
        <a
            href={href}
            className="px-8 py-4 border border-[#2A3547] text-white font-semibold rounded-full hover:border-[#4D9FFF] hover:text-[#4D9FFF] transition-colors inline-flex items-center justify-center gap-2"
        >
            {label}
        </a>
    );
}

function SectionHead({ title, body, wide }: { title: string; body?: string; wide?: boolean }) {
    return (
        <div className={`${wide ? 'max-w-4xl' : 'max-w-3xl'} mb-12`}>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">{title}</h2>
            {body && <p className="text-base md:text-lg text-gray-400 leading-relaxed">{body}</p>}
        </div>
    );
}

// One pain-to-solution card in a horizontal scroll strip (30% text / 70% image).
function SolutionCard({ p }: { p: (typeof painSolutions)[number] }) {
    return (
        <div
            style={{ width: 'var(--card-w)' }}
            className="shrink-0 rounded-xl border border-[#232C3B] bg-[#10151D] overflow-hidden grid md:grid-cols-[3fr_7fr]"
        >
            <div className="p-7 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2A5A9E]/50 bg-[#0E1725] shrink-0">
                        <span className="material-symbols-outlined text-[#4D9FFF] text-xl">{p.icon}</span>
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{p.q}</h3>
                </div>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">{p.pain}</p>
                <div className="border-t border-[#202836] pt-5">
                    <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4D9FFF] mb-2">
                        Our Solution
                    </div>
                    <div className="text-lg font-bold text-white tracking-tight mb-2">{p.service}</div>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">{p.fix}</p>
                </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-[620px] border-t md:border-t-0 md:border-l border-[#202836] bg-[#0B0F16]">
                {p.img ? (
                    <Image
                        src={p.img}
                        alt={p.alt}
                        fill
                        sizes="(max-width: 768px) 90vw, 980px"
                        className="object-contain"
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <span className="material-symbols-outlined text-5xl text-[#2A3547]">imagesmode</span>
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A4657]">Screenshot coming soon</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function PrintingCompaniesPage() {
    const [method, setMethod] = useState('screen');
    const active = methods.find((m) => m.key === method)!;

    return (
        <>
            <main className="min-h-screen bg-[#0B0E13] pt-20">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

                {/* ───── HERO ───── */}
                <section className="relative overflow-hidden">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-[0.35]"
                        style={{
                            backgroundImage:
                                'linear-gradient(#141A24 1px, transparent 1px), linear-gradient(90deg, #141A24 1px, transparent 1px)',
                            backgroundSize: '44px 44px',
                            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 40%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 40%, transparent 100%)',
                        }}
                    />
                    <div className="relative max-w-7xl mx-auto px-mobile pt-16 md:pt-24 pb-16 md:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-6">
                                The Operating System Built for <span className={accent}>Growing Print Shops</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-4 max-w-xl">
                                Shop Titan helps print shops centralize every job detail, from quote to artwork approval to production scheduling, so your team can stop chasing information and start moving jobs through the shop with clarity.
                            </p>
                            <p className="text-base md:text-lg text-gray-300 font-medium mb-8">
                                Your print shop does not need more apps. It needs one operating system for the work behind every job.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <DemoButton />
                                <GhostButton label="See the Workflow" href="#workflow" />
                            </div>
                        </div>
                        <div className="rounded-xl border border-[#232C3B] shadow-[0_24px_80px_rgba(0,0,0,0.55)] overflow-hidden bg-[#0E1219]">
                            <Image
                                src="/gallery/dtla-print/hoodiesv2.jpg"
                                alt="DTLA Print custom hoodies and sweaters catalog built on Shop Titan"
                                width={1906}
                                height={2230}
                                priority
                                sizes="(max-width: 1024px) 90vw, 600px"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </section>

                {/* ───── PAIN · heading + supporting text ───── */}
                <section className="border-t border-[#161C27] pt-16 md:pt-24">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5 max-w-4xl">
                            Print Shops Do Not Break Because They Cannot Print. They Break Because the Work Is Hard to Manage.
                        </h2>
                        <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl mb-4">
                            Most print shops have the skill, the equipment, and the team to produce great work. The real problem is everything around the job: quotes, art files, approvals, blanks, schedules, production notes, status updates, and last-minute changes. When those details live in different places, every job becomes harder than it should be.
                        </p>
                        <p className="text-base md:text-lg text-gray-300 font-medium leading-relaxed">
                            Sound familiar? Every one of these problems maps to a service we deliver.
                        </p>
                    </div>
                </section>

                {/* ───── PAIN → SERVICE · horizontal scroll-driven cards (visually part of the section above: same bg, no rule) ───── */}
                <style dangerouslySetInnerHTML={{ __html: painCss }} />
                <section className="pain-section">
                    <div className="pain-viewport">
                        <div className="pain-track">
                            {painSolutions.map((p) => (
                                <SolutionCard key={p.q} p={p} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── WEBSITE · heading + supporting text ───── */}
                <section className="border-t border-[#161C27] pt-16 md:pt-24">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5 max-w-4xl">
                            Production Is Only Half the Story. Growth Starts on Your Website.
                        </h2>
                        <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl">
                            Before a job ever reaches the press, a customer has to find you, see what you offer, and place the order. When that only happens by phone and email, your shop sells at the speed of your inbox. Shop Titan builds print shop storefronts that take complete orders around the clock.
                        </p>
                    </div>
                </section>

                {/* ───── WEBSITE · horizontal scroll-driven cards (visually part of the section above: same bg, no rule) ───── */}
                <section className="pain-section site-section">
                    <div className="pain-viewport">
                        <div className="pain-track">
                            {siteSolutions.map((p) => (
                                <SolutionCard key={p.q} p={p} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── MOVING PARTS ───── */}
                <section className="border-t border-[#161C27] py-16 md:py-24 bg-[#0D1118]">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <SectionHead
                            title="Every Print Job Has Too Many Moving Parts to Manage From Memory."
                            body="A single print job can include customer details, garment styles, size breakdowns, ink colors, print locations, proof approvals, artwork revisions, screen setups, transfers, press assignments, production notes, finishing services, shipping details, and billing. If those details are not connected, your team is forced to fill in the gaps manually."
                        />
                        <div className="flex flex-wrap gap-2.5 max-w-5xl">
                            {movingParts.map((part) => (
                                <span
                                    key={part}
                                    className="text-sm text-gray-300 border border-[#26303F] bg-[#10151D] rounded-lg px-3.5 py-2"
                                >
                                    {part}
                                </span>
                            ))}
                        </div>
                        <p className="text-base md:text-lg text-white font-medium mt-10">
                            Shop Titan connects the full job story so your team can work from <span className={accent}>one version of the truth</span>.
                        </p>
                    </div>
                </section>

                {/* ───── BEFORE / AFTER ───── */}
                <section className="border-t border-[#161C27] py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <SectionHead title="Before Shop Titan vs. After Shop Titan" />
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className={`${panel} rounded-xl p-7`}>
                                <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">Before Shop Titan</div>
                                <ul className="space-y-3.5">
                                    {beforeItems.map((i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-400 leading-relaxed">
                                            <span className="material-symbols-outlined text-gray-600 text-xl shrink-0">close</span>
                                            {i}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-xl border border-[#2A5A9E]/50 bg-[#0E1725] p-7">
                                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#4D9FFF] mb-5">After Shop Titan</div>
                                <ul className="space-y-3.5">
                                    {afterItems.map((i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-200 leading-relaxed">
                                            <span className="material-symbols-outlined text-[#4D9FFF] text-xl shrink-0">check</span>
                                            {i}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ───── SOLUTION ───── */}
                <section className="border-t border-[#161C27] py-16 md:py-24 bg-[#0D1118]">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <SectionHead
                            title="One System for the Full Print Production Workflow"
                            body="Shop Titan gives print companies a centralized operating system for managing the details that make or break production."
                        />
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {features.map((f) => (
                                <div key={f.title} className={`${panel} rounded-xl p-6`}>
                                    <span className={`material-symbols-outlined ${accent} text-2xl`}>{f.icon}</span>
                                    <h3 className="text-base font-semibold text-white tracking-tight mt-3 mb-2">{f.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── WORKFLOW ───── */}
                <section id="workflow" className="border-t border-[#161C27] py-16 md:py-24 scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <SectionHead title="From Quote to Press to Delivery, Keep the Job Connected." />
                        <div className="relative">
                            <div aria-hidden="true" className="hidden lg:block absolute top-6 left-8 right-8 h-px bg-[#26303F]" />
                            <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-4">
                                {workflow.map((s) => (
                                    <div key={s.title} className="relative">
                                        <div className="relative z-10 h-12 w-12 rounded-full border border-[#2A5A9E]/60 bg-[#0E1725] flex items-center justify-center mb-4">
                                            <span className="material-symbols-outlined text-[#4D9FFF] text-xl">{s.icon}</span>
                                        </div>
                                        <h3 className="text-sm font-semibold text-white tracking-tight mb-1.5">{s.title}</h3>
                                        <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed mt-12 max-w-3xl">
                            The goal is simple: fewer scattered details, fewer interruptions, fewer mistakes, and a cleaner path from order to delivery.
                        </p>
                    </div>
                </section>

                {/* ───── PRINT METHODS ───── */}
                <section className="border-t border-[#161C27] py-16 md:py-24 bg-[#0D1118]">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <SectionHead
                            title="Built for the Way Print Shops Actually Work"
                            body="Shop Titan supports the operational complexity of modern print production, whether your shop focuses on one method or runs multiple departments under one roof."
                        />
                        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Print methods">
                            {methods.map((m) => (
                                <button
                                    key={m.key}
                                    type="button"
                                    role="tab"
                                    aria-selected={method === m.key}
                                    onClick={() => setMethod(m.key)}
                                    className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors border ${
                                        method === m.key
                                            ? 'border-[#4D9FFF] bg-[#0E1725] text-white'
                                            : 'border-[#26303F] bg-transparent text-gray-400 hover:text-white hover:border-[#3A4A61]'
                                    }`}
                                >
                                    {m.name}
                                </button>
                            ))}
                        </div>
                        <div className={`${panel} rounded-xl p-8 max-w-3xl`}>
                            <span className={`material-symbols-outlined ${accent} text-3xl`}>{active.icon}</span>
                            <h3 className="text-xl font-bold text-white tracking-tight mt-3 mb-3">{active.name}</h3>
                            <p className="text-base text-gray-400 leading-relaxed">{active.desc}</p>
                        </div>
                    </div>
                </section>

                {/* ───── OWNER DEPENDENCY ───── */}
                <section className="border-t border-[#161C27] py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-mobile grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
                                Your Print Shop Should Not Need You in Every Detail.
                            </h2>
                            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6">
                                If every pricing question, schedule change, art issue, production update, or customer problem comes back to the owner, the business is not scalable. Shop Titan helps turn owner knowledge into repeatable systems your team can follow.
                            </p>
                            <p className="text-base md:text-lg text-white font-medium leading-relaxed border-l-2 border-[#4D9FFF] pl-5">
                                The goal is not to remove leadership. The goal is to stop making leadership the only thing holding the shop together.
                            </p>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-3">
                            {ownerOutcomes.map((o) => (
                                <li key={o} className={`${panel} rounded-lg px-4 py-3.5 flex items-center gap-3 text-sm text-gray-200`}>
                                    <span className="material-symbols-outlined text-[#4D9FFF] text-lg shrink-0">check</span>
                                    {o}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ───── RESULTS ───── */}
                <section className="border-t border-[#161C27] py-16 md:py-24 bg-[#0D1118]">
                    <div className="max-w-7xl mx-auto px-mobile">
                        <SectionHead title="What Changes When Your Print Shop Has One Operating System" />
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {results.map((r) => (
                                <div key={r.title} className={`${panel} rounded-xl p-6`}>
                                    <span className={`material-symbols-outlined ${accent} text-2xl`}>{r.icon}</span>
                                    <h3 className="text-base font-semibold text-white tracking-tight mt-3 mb-2">{r.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{r.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ───── CREDIBILITY ───── */}
                <section className="border-t border-[#161C27] py-16 md:py-24">
                    <div className="max-w-3xl mx-auto px-mobile text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                            Built From Real Production Pressure
                        </h2>
                        <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-4">
                            Shop Titan was built from inside the production world, where one missed detail can delay an order, frustrate a customer, waste garments, trigger a reprint, and cut into margin.
                        </p>
                        <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-4">
                            It was created for shops that need real operational control, not another generic project management board.
                        </p>
                        <p className="text-base md:text-lg text-white font-medium leading-relaxed">
                            This is software for print companies that are ready to stop patching the process together.
                        </p>
                    </div>
                </section>

                {/* ───── FINAL CTA ───── */}
                <section className="border-t border-[#161C27] py-20 md:py-28 bg-[#0D1118]">
                    <div className="max-w-3xl mx-auto px-mobile text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
                            Ready to Run Your Print Shop From One Connected System?
                        </h2>
                        <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-9 max-w-2xl mx-auto">
                            If your print shop is growing, but your workflow still depends on spreadsheets, whiteboards, emails, and memory, Shop Titan gives your team the structure to scale with more control.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <DemoButton />
                            <GhostButton label="See How It Works" href="#workflow" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
