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
        img: '/gallery/dtla-print/cart.webp',
        alt: 'DTLA Print cart with complete order details',
    },
    {
        icon: 'palette',
        q: 'Artwork Gets Messy Fast?',
        pain: 'Mockups, approvals, revised files, logo versions, print placements, and color notes get buried in email threads, folders, and downloads.',
        service: 'Artwork and Approval Tracking',
        fix: 'Mockups, revised artwork, approval history, logo files, print placement notes, and customer sign-off attach directly to the order.',
        img: '/gallery/dtla-print/custom-merch.webp',
        alt: 'DTLA Print custom merch page with artwork options',
    },
    {
        icon: 'edit_calendar',
        q: 'Scheduling Is Still Too Manual?',
        pain: 'Whiteboards, spreadsheets, magnets, and verbal updates do not show real press capacity, department workload, rush impact, or bottlenecks.',
        service: 'Production Scheduling',
        fix: 'See what is in queue, what is ready, what is blocked, and how rush jobs affect capacity across departments.',
        img: '/gallery/dtla-print/rush-orders.webp',
        alt: 'DTLA Print rush orders page with clear turnaround expectations',
    },
    {
        icon: 'notifications_active',
        q: 'Production Keeps Getting Interrupted?',
        pain: 'The team keeps asking, "Where is this order?" or "Is this approved?" because the system does not give everyone a clear answer.',
        service: 'Job Status Tracking',
        fix: 'See where each order stands without walking the floor, interrupting production, or asking three different people.',
        img: '/gallery/dtla-print/homepage.webp',
        alt: 'DTLA Print homepage where customers order without calling',
    },
    {
        icon: 'calculate',
        q: 'Pricing Is Easy to Get Wrong?',
        pain: 'Print pricing changes based on setup, color count, locations, quantity breaks, garment type, rush needs, and finishing requirements.',
        service: 'Structured Pricing Support',
        fix: 'Pricing logic, quantity breaks, color counts, locations, rush fees, discounts, and special requirements stay consistent on every quote.',
        img: '/gallery/dtla-print/deals.webp',
        alt: 'DTLA Print deals page with structured pricing offers',
    },
    {
        icon: 'inventory_2',
        q: 'Inventory Issues Show Up Too Late?',
        pain: 'Blanks, transfers, screens, specialty inks, labels, and packaging are not always connected to the job before production begins.',
        service: 'Inventory Awareness',
        fix: 'Jobs connect to blanks, transfers, specialty inks, labels, packaging, and vendor needs before production gets delayed.',
        img: '/gallery/dtla-print/best-sellers.webp',
        alt: 'DTLA Print best sellers with live product availability',
    },
    {
        icon: 'replay',
        q: 'Reprints Eat Profit?',
        pain: 'Wrong artwork, missing approvals, unclear notes, incorrect garments, or rushed handoffs can turn a profitable job into a loss.',
        service: 'Margin and Reprint Visibility',
        fix: 'Track the details that affect profit, including labor, rush changes, errors, reprints, discounts, and production exceptions.',
        img: '/gallery/dtla-print/t-shirts.webp',
        alt: 'DTLA Print t-shirt catalog with accurate product details',
    },
    {
        icon: 'manage_accounts',
        q: 'The Owner Becomes the System?',
        pain: 'The owner or production manager becomes the person everyone depends on for answers, approvals, pricing, scheduling, and problem solving.',
        service: 'Department Visibility',
        fix: 'Screen printing, DTG, DTF, finishing, fulfillment, and shipping teams get the exact information they need to move work forward without waiting on you.',
        img: '/gallery/dtla-print/categories.webp',
        alt: 'DTLA Print category navigation the whole team can follow',
    },
];

const painCss = `
.pain-track {
    --card-w: min(1150px, calc(100vw - 4rem));
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

// ── hero dashboard mockup (illustrative UI, sample data) ──
function Dashboard() {
    const queues = [
        { name: 'Screen Printing', jobs: 18, pct: 78 },
        { name: 'DTG', jobs: 11, pct: 52 },
        { name: 'DTF', jobs: 9, pct: 41 },
    ];
    const approvals = [
        { job: 'Riverside FC · 144 tees · 3-color front', status: 'Awaiting client', tone: 'text-amber-400 border-amber-400/30 bg-amber-400/10' },
        { job: 'Summit Coffee · 60 hoodies · left chest', status: 'Approved', tone: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10' },
        { job: 'Valley 5K · 350 tees · front + back', status: 'Rev 2 sent', tone: 'text-sky-400 border-sky-400/30 bg-sky-400/10' },
    ];
    return (
        <div className="rounded-xl border border-[#232C3B] bg-[#0E1219] shadow-[0_24px_80px_rgba(0,0,0,0.55)] overflow-hidden text-left">
            {/* window bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#1C2330] bg-[#0B0F16]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2A3547]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2A3547]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2A3547]" />
                <span className="ml-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">Production Command Center</span>
                <span className="ml-auto text-[11px] text-gray-500">Today</span>
            </div>
            {/* KPI row */}
            <div className="grid grid-cols-4 divide-x divide-[#1C2330] border-b border-[#1C2330]">
                {[
                    { label: 'Open jobs', val: '47' },
                    { label: 'Rush', val: '6', hot: true },
                    { label: 'Awaiting approval', val: '9' },
                    { label: 'Blocked', val: '3' },
                ].map((k) => (
                    <div key={k.label} className="px-4 py-3">
                        <div className={`text-xl font-bold ${k.hot ? 'text-amber-400' : 'text-white'}`}>{k.val}</div>
                        <div className="text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">{k.label}</div>
                    </div>
                ))}
            </div>
            <div className="grid sm:grid-cols-2">
                {/* queues */}
                <div className="p-4 border-b sm:border-b-0 sm:border-r border-[#1C2330]">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 mb-3">Department queues</div>
                    <div className="space-y-3">
                        {queues.map((q) => (
                            <div key={q.name}>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-gray-300">{q.name}</span>
                                    <span className="text-gray-500">{q.jobs} jobs</span>
                                </div>
                                <div className="h-1.5 rounded-full bg-[#1C2330]">
                                    <div className="h-1.5 rounded-full bg-[#4D9FFF]" style={{ width: `${q.pct}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 rounded-lg border border-amber-400/25 bg-amber-400/5 px-3 py-2 flex items-start gap-2">
                        <span className="material-symbols-outlined text-amber-400 text-base mt-0.5">warning</span>
                        <div className="text-[11px] leading-snug text-gray-300">
                            <span className="font-semibold text-amber-400">Reprint flagged</span> · Job 2214 · art mismatch caught at press check
                        </div>
                    </div>
                    <div className="mt-2 rounded-lg border border-[#243044] bg-[#111827] px-3 py-2 flex items-start gap-2">
                        <span className="material-symbols-outlined text-[#4D9FFF] text-base mt-0.5">inventory_2</span>
                        <div className="text-[11px] leading-snug text-gray-300">
                            <span className="font-semibold text-[#4D9FFF]">Blanks low</span> · Black tees, size M · linked to 2 scheduled jobs
                        </div>
                    </div>
                </div>
                {/* approvals */}
                <div className="p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 mb-3">Artwork approvals</div>
                    <div className="space-y-2.5">
                        {approvals.map((a) => (
                            <div key={a.job} className="rounded-lg border border-[#1C2330] bg-[#0B0F16] px-3 py-2.5">
                                <div className="text-xs text-gray-200 leading-snug mb-1.5">{a.job}</div>
                                <span className={`inline-block text-[10px] font-semibold uppercase tracking-wider border rounded px-1.5 py-0.5 ${a.tone}`}>{a.status}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 mb-2">Press schedule</div>
                    <div className="space-y-1.5 text-[11px]">
                        <div className="flex justify-between text-gray-300"><span>Press 1 · 6-color</span><span className="text-gray-500">AM block</span></div>
                        <div className="flex justify-between text-gray-300"><span>Press 2 · 2-color</span><span className="text-gray-500">PM block</span></div>
                        <div className="flex justify-between text-gray-300"><span>DTG line</span><span className="text-amber-400">Rush queue</span></div>
                    </div>
                </div>
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
                        <Dashboard />
                    </div>
                </section>

                {/* ───── PAIN → SERVICE · horizontal scroll-driven cards ───── */}
                <style dangerouslySetInnerHTML={{ __html: painCss }} />
                <section className="pain-section border-t border-[#161C27]">
                    <div className="pain-viewport">
                        <div className="max-w-7xl mx-auto px-mobile w-full pt-16 md:pt-0 mb-8 md:mb-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 max-w-4xl">
                                Print Shops Do Not Break Because They Cannot Print. They Break Because the Work Is Hard to Manage.
                            </h2>
                            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl">
                                Sound familiar? Every one of these problems maps to a service we deliver.
                            </p>
                        </div>
                        <div className="pain-track">
                            {painSolutions.map((p) => (
                                <div
                                    key={p.q}
                                    className="w-[min(1150px,calc(100vw-4rem))] shrink-0 rounded-xl border border-[#232C3B] bg-[#10151D] overflow-hidden grid md:grid-cols-2"
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
                                                The service we offer
                                            </div>
                                            <div className="text-lg font-bold text-white tracking-tight mb-2">{p.service}</div>
                                            <p className="text-sm md:text-base text-gray-300 leading-relaxed">{p.fix}</p>
                                        </div>
                                    </div>
                                    <div className="relative min-h-[260px] md:min-h-[420px] border-t md:border-t-0 md:border-l border-[#202836] bg-[#0B0F16]">
                                        <Image
                                            src={p.img}
                                            alt={p.alt}
                                            fill
                                            sizes="(max-width: 768px) 90vw, 575px"
                                            className="object-cover object-left-top"
                                        />
                                    </div>
                                </div>
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
