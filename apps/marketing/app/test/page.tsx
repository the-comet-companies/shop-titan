'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

/*
    Architectural design sandbox - isolated tokens (do not pull from tailwind theme).
    Palette:
        ivory   #F7F5F0   page bg
        stone   #EFEDE8   muted section bg
        bone    #FFFFFF   card / surface
        line    #E0DDD7   hairline borders
        graphite #5A5A5C  muted secondary text / icons
        charcoal #1C1C1C  primary text / primary button
*/

const fadeIn = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function Divider() {
    return <div className="h-px w-full bg-[#E0DDD7]" />;
}

function ThinIcon({ name, className = '' }: { name: string; className?: string }) {
    return (
        <span
            className={`material-symbols-outlined ${className}`}
            style={{ fontVariationSettings: "'wght' 200, 'GRAD' 0, 'opsz' 24" }}
        >
            {name}
        </span>
    );
}

export default function ArchitecturalTestPage() {
    return (
        <main className="min-h-screen bg-[#F7F5F0] text-[#1C1C1C] font-sans pt-16">
            {/* ── HERO ── */}
            <section className="px-6 md:px-10 pt-24 md:pt-32 pb-24 md:pb-32">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={fadeIn}
                        className="flex items-center gap-3 mb-10"
                    >
                        <div className="h-px w-10 bg-[#1C1C1C]" />
                        <span className="text-[11px] tracking-[0.22em] uppercase text-[#5A5A5C] font-medium">
                            Shop Titan / Operating System
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] max-w-4xl"
                    >
                        A calm operating system
                        <span className="block text-[#5A5A5C] font-extralight italic">
                            for serious production shops.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="text-lg md:text-xl text-[#5A5A5C] leading-relaxed max-w-2xl mt-8 font-light"
                    >
                        One platform for quotes, orders, inventory, production, and your storefront. Built for shops that prefer structure over noise.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-3 mt-12"
                    >
                        <Link
                            href="/reach-out"
                            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#1C1C1C] text-[#F7F5F0] text-sm tracking-wide font-medium hover:bg-[#000] transition-colors"
                        >
                            Request a walkthrough
                            <span className="ml-3 text-base" style={{ fontVariationSettings: "'wght' 200" }}>
                                <ThinIcon name="arrow_forward" />
                            </span>
                        </Link>
                        <Link
                            href="/pricing"
                            className="inline-flex items-center justify-center px-7 py-3.5 border border-[#1C1C1C] text-[#1C1C1C] text-sm tracking-wide font-medium hover:bg-[#1C1C1C] hover:text-[#F7F5F0] transition-colors"
                        >
                            View pricing
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Divider />

            {/* ── DASHBOARD MOCKUP ── */}
            <section className="px-6 md:px-10 py-24 md:py-32">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                        <div className="lg:col-span-5">
                            <span className="text-[11px] tracking-[0.22em] uppercase text-[#5A5A5C] font-medium">
                                01 / Operations
                            </span>
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight mt-6">
                                Every order, every job, every status - in one view.
                            </h2>
                        </div>
                        <p className="lg:col-span-7 text-[#5A5A5C] leading-relaxed text-base md:text-lg font-light lg:pt-12">
                            A quiet interface that surfaces only what your team needs to act on. No dashboards full of vanity metrics. No notifications fighting for attention. Just the next decision, clearly framed.
                        </p>
                    </div>

                    {/* Dashboard card */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-white border border-[#E0DDD7] shadow-[0_1px_0_rgba(0,0,0,0.02),0_20px_60px_-30px_rgba(0,0,0,0.08)] overflow-hidden"
                    >
                        {/* Window chrome */}
                        <div className="flex items-center justify-between px-5 py-3 border-b border-[#E0DDD7]">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#D9D6D0]" />
                                <span className="w-2 h-2 rounded-full bg-[#D9D6D0]" />
                                <span className="w-2 h-2 rounded-full bg-[#D9D6D0]" />
                            </div>
                            <span className="text-[10px] tracking-[0.18em] uppercase text-[#5A5A5C]">Shop Titan / Production</span>
                            <div className="w-12" />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E0DDD7]">
                            {/* Sidebar */}
                            <aside className="lg:col-span-3 p-6 bg-[#FAFAF7]">
                                <div className="text-[10px] tracking-[0.18em] uppercase text-[#5A5A5C] mb-4">Workspace</div>
                                <nav className="space-y-1 text-sm font-light">
                                    {[
                                        { label: 'Orders', count: '24', active: true },
                                        { label: 'Production', count: '11' },
                                        { label: 'Inventory', count: '3' },
                                        { label: 'Customers', count: '128' },
                                        { label: 'Vendors', count: '14' },
                                        { label: 'Reports', count: null },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className={`flex items-center justify-between px-3 py-2 ${
                                                item.active ? 'bg-white border border-[#E0DDD7]' : ''
                                            }`}
                                        >
                                            <span className={item.active ? 'text-[#1C1C1C]' : 'text-[#5A5A5C]'}>{item.label}</span>
                                            {item.count && (
                                                <span className="text-[11px] text-[#5A5A5C] font-medium">{item.count}</span>
                                            )}
                                        </div>
                                    ))}
                                </nav>
                            </aside>

                            {/* Main */}
                            <div className="lg:col-span-9 p-6 md:p-8">
                                <div className="flex items-baseline justify-between mb-6">
                                    <div>
                                        <h3 className="text-xl font-light">Open orders</h3>
                                        <p className="text-xs text-[#5A5A5C] mt-1 font-light">Updated 2 minutes ago</p>
                                    </div>
                                    <div className="flex items-center gap-6 text-xs text-[#5A5A5C]">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#1C1C1C]" /> Active
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#A8A29A]" /> Pending
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#D9D6D0]" /> Draft
                                        </div>
                                    </div>
                                </div>

                                {/* Table */}
                                <div className="border-t border-[#E0DDD7]">
                                    <div className="grid grid-cols-12 px-2 py-3 border-b border-[#E0DDD7] text-[10px] tracking-[0.18em] uppercase text-[#5A5A5C] font-medium">
                                        <div className="col-span-1">No.</div>
                                        <div className="col-span-4">Customer</div>
                                        <div className="col-span-3">Product</div>
                                        <div className="col-span-2">Due</div>
                                        <div className="col-span-2 text-right">Status</div>
                                    </div>
                                    {[
                                        { id: '0421', cust: 'Ridge & Pine Co.', prod: '120 Embroidered caps', due: 'Mar 06', state: 'active' },
                                        { id: '0420', cust: 'Northbound Coffee', prod: '480 Tees, 2-color', due: 'Mar 07', state: 'active' },
                                        { id: '0419', cust: 'Atlas Climbing', prod: '60 Hoodies, DTG', due: 'Mar 09', state: 'pending' },
                                        { id: '0418', cust: 'Quincy Athletics', prod: '300 Polos, embroidery', due: 'Mar 11', state: 'pending' },
                                        { id: '0417', cust: 'Harbor Lane Hotel', prod: '90 Aprons', due: 'Mar 14', state: 'draft' },
                                    ].map((row, i) => (
                                        <div
                                            key={i}
                                            className="grid grid-cols-12 px-2 py-4 border-b border-[#E0DDD7] last:border-0 text-sm font-light items-center hover:bg-[#FAFAF7] transition-colors"
                                        >
                                            <div className="col-span-1 text-[#5A5A5C]">{row.id}</div>
                                            <div className="col-span-4 text-[#1C1C1C]">{row.cust}</div>
                                            <div className="col-span-3 text-[#5A5A5C]">{row.prod}</div>
                                            <div className="col-span-2 text-[#5A5A5C]">{row.due}</div>
                                            <div className="col-span-2 text-right">
                                                <span className="inline-flex items-center gap-2 text-[#5A5A5C]">
                                                    <span
                                                        className={`w-1.5 h-1.5 rounded-full ${
                                                            row.state === 'active'
                                                                ? 'bg-[#1C1C1C]'
                                                                : row.state === 'pending'
                                                                ? 'bg-[#A8A29A]'
                                                                : 'bg-[#D9D6D0]'
                                                        }`}
                                                    />
                                                    {row.state.charAt(0).toUpperCase() + row.state.slice(1)}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── FEATURE GRID (stone section) ── */}
            <section className="bg-[#EFEDE8] px-6 md:px-10 py-24 md:py-32 border-y border-[#E0DDD7]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                        <div className="lg:col-span-5">
                            <span className="text-[11px] tracking-[0.22em] uppercase text-[#5A5A5C] font-medium">
                                02 / Modules
                            </span>
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight mt-6">
                                A system, not a stack of tools.
                            </h2>
                        </div>
                        <p className="lg:col-span-7 text-[#5A5A5C] leading-relaxed text-base md:text-lg font-light lg:pt-12">
                            Each module is a precise instrument. Together they form a single, coherent platform - the way an operating system should feel.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0DDD7] border border-[#E0DDD7]">
                        {[
                            { icon: 'storefront', title: 'Storefront', desc: 'A customer-facing front door for your catalog, artwork uploads, and online ordering.' },
                            { icon: 'request_quote', title: 'Quoting', desc: 'Configurable pricing matrices that hold up to real-world decoration variables.' },
                            { icon: 'list_alt', title: 'Orders', desc: 'A single ledger from intake to shipment, visible to every department at once.' },
                            { icon: 'inventory_2', title: 'Inventory', desc: 'Live stock by style, color, size - with reservations and purchase order automation.' },
                            { icon: 'precision_manufacturing', title: 'Production', desc: 'Task-based workflows that map to your real shop floor, not a generic template.' },
                            { icon: 'insights', title: 'Reporting', desc: 'Quiet, on-demand insight into revenue, capacity, and profitability.' },
                        ].map((m) => (
                            <motion.div
                                key={m.title}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-[#F7F5F0] p-8 md:p-10 hover:bg-white transition-colors"
                            >
                                <ThinIcon name={m.icon} className="text-[#1C1C1C] text-2xl mb-6 block" />
                                <h3 className="text-base font-medium tracking-tight mb-3">{m.title}</h3>
                                <p className="text-sm text-[#5A5A5C] leading-relaxed font-light">{m.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WORKFLOW SEQUENCE ── */}
            <section className="px-6 md:px-10 py-24 md:py-32">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                        <div className="lg:col-span-5">
                            <span className="text-[11px] tracking-[0.22em] uppercase text-[#5A5A5C] font-medium">
                                03 / Workflow
                            </span>
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight mt-6">
                                One order, six steps, zero re-entry.
                            </h2>
                        </div>
                        <p className="lg:col-span-7 text-[#5A5A5C] leading-relaxed text-base md:text-lg font-light lg:pt-12">
                            From the moment a customer checks out to the moment the package ships, data moves on its own.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0">
                        {[
                            { n: '01', label: 'Order placed' },
                            { n: '02', label: 'Routed to system' },
                            { n: '03', label: 'Inventory reserved' },
                            { n: '04', label: 'Production scheduled' },
                            { n: '05', label: 'Customer notified' },
                            { n: '06', label: 'Order shipped' },
                        ].map((s, i, arr) => (
                            <div
                                key={s.n}
                                className={`py-8 ${i < arr.length - 1 ? 'lg:border-r border-[#E0DDD7]' : ''} ${
                                    i === 0 ? '' : 'lg:pl-6'
                                } pr-6`}
                            >
                                <div className="text-[10px] tracking-[0.22em] uppercase text-[#5A5A5C] mb-3 font-medium">
                                    {s.n}
                                </div>
                                <div className="text-base text-[#1C1C1C] font-light">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── STATS (stone) ── */}
            <section className="bg-[#EFEDE8] border-y border-[#E0DDD7] px-6 md:px-10 py-20 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                        {[
                            { value: '22', label: 'Print shops operating on the platform' },
                            { value: '4-6', label: 'Weeks from kickoff to go-live' },
                            { value: '$1M+', label: 'Annual revenue running through the system' },
                            { value: '0', label: 'Hourly development fees' },
                        ].map((s) => (
                            <div key={s.label}>
                                <div className="text-5xl md:text-6xl font-extralight tracking-tight text-[#1C1C1C]">
                                    {s.value}
                                </div>
                                <div className="mt-3 text-xs text-[#5A5A5C] uppercase tracking-[0.18em] font-medium leading-relaxed max-w-[180px]">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── QUOTE / EDITORIAL ── */}
            <section className="px-6 md:px-10 py-24 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <div className="h-px w-10 bg-[#1C1C1C] mb-10" />
                    <blockquote
                        className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug tracking-tight text-[#1C1C1C]"
                        style={{ fontFamily: 'var(--font-crimson), serif' }}
                    >
                        <span className="italic">
                            &ldquo;The shop went from sticky notes and three browser tabs to one system that simply knows what is happening. We stopped firefighting.&rdquo;
                        </span>
                    </blockquote>
                    <div className="mt-8 text-[11px] tracking-[0.22em] uppercase text-[#5A5A5C] font-medium">
                        DTLA Print &nbsp;/&nbsp; Operations
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="bg-[#1C1C1C] text-[#F7F5F0] px-6 md:px-10 py-24 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <div className="h-px w-10 bg-[#F7F5F0] mb-10" />
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight max-w-3xl">
                        Bring quiet, structured order to your shop.
                    </h2>
                    <p className="mt-6 text-base md:text-lg text-[#A8A29A] font-light max-w-2xl leading-relaxed">
                        Book a walkthrough. See a live order flow through the platform from end to end. Then decide.
                    </p>
                    <div className="mt-12 flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/reach-out"
                            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#F7F5F0] text-[#1C1C1C] text-sm tracking-wide font-medium hover:bg-white transition-colors"
                        >
                            Request a walkthrough
                        </Link>
                        <Link
                            href="/pricing"
                            className="inline-flex items-center justify-center px-7 py-3.5 border border-[#F7F5F0]/40 text-[#F7F5F0] text-sm tracking-wide font-medium hover:border-[#F7F5F0] transition-colors"
                        >
                            View pricing
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
