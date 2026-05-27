"use client";

import { motion } from "framer-motion";

const TABS = ["In production", "Awaiting", "Blocked / rush", "Ready"] as const;

const CAPACITY = [
    { dept: "Screen print", value: 82 },
    { dept: "Embroidery", value: 45 },
    { dept: "DTF / DTG", value: 64 },
    { dept: "Finishing", value: 91 },
    { dept: "Fulfillment", value: 38 },
];

const STATS = [
    { label: "Jobs scheduled", value: "38" },
    { label: "Awaiting approval", value: "12" },
    { label: "Late risk", value: "4" },
    { label: "Rush impact", value: "9" },
];

const JOBS = [
    { id: "SO-10421", customer: "Northside Athletics", detail: "Screen print · Fri 3:00p", status: "In production", tone: "default" as const },
    { id: "SO-10468", customer: "Harbor University", detail: "Finishing · Today 5p", status: "Rush", tone: "rush" as const },
    { id: "SO-10455", customer: "Riley & Co.", detail: "Screen print · Thu", status: "Blocked · inventory", tone: "blocked" as const },
    { id: "SO-10440", customer: "Mason Fire Dept.", detail: "Art · Wed", status: "Awaiting approval", tone: "awaiting" as const },
    { id: "SO-10412", customer: "Crestwood Camp", detail: "DTF · Fri", status: "Ready to ship", tone: "ready" as const },
];

const STATUS_TONE: Record<typeof JOBS[number]["tone"], string> = {
    default: "bg-primary/10 text-primary",
    rush: "bg-rose-500/10 text-rose-600",
    blocked: "bg-amber-500/10 text-amber-700",
    awaiting: "bg-charcoal/10 text-charcoal",
    ready: "bg-emerald-500/10 text-emerald-700",
};

function CapacityBar({ value }: { value: number }) {
    const fill = value >= 80 ? "bg-rose-500" : value >= 60 ? "bg-amber-500" : "bg-primary";
    return (
        <div className="h-1.5 w-full rounded-full bg-structural-border overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`h-full ${fill}`}
            />
        </div>
    );
}

export default function ProductionScheduleDashboard() {
    return (
        <div className="rounded-lg border border-structural-border bg-surface shadow-xl shadow-primary/5 overflow-hidden">
            {/* Header strip */}
            <div className="flex flex-col gap-3 border-b border-structural-border bg-background-light/50 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-6">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-secondary-text" style={{ fontVariationSettings: "'wght' 300" }}>
                        calendar_month
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary-text">
                        Week of May 19 · 38 active · 6 blocked · 9 rush · 4 late risk
                    </span>
                </div>
                <button className="inline-flex items-center gap-1 self-start rounded-full border border-charcoal/15 bg-white/60 px-3 py-1.5 text-[11px] font-semibold text-charcoal backdrop-blur-md md:self-auto">
                    Review
                    <span className="material-symbols-outlined text-sm" aria-hidden>arrow_forward</span>
                </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-structural-border overflow-x-auto">
                {TABS.map((tab, i) => (
                    <button
                        key={tab}
                        className={`relative whitespace-nowrap px-5 py-3 text-xs font-semibold transition-colors ${i === 0 ? "text-charcoal" : "text-secondary-text hover:text-charcoal"
                            }`}
                    >
                        {tab}
                        {i === 0 && <span className="absolute inset-x-3 -bottom-px h-0.5 bg-primary" />}
                    </button>
                ))}
            </div>

            <div className="grid gap-0 lg:grid-cols-12 lg:divide-x lg:divide-structural-border">
                {/* Left: capacity + stats */}
                <div className="lg:col-span-4 p-5 md:p-6 space-y-6 border-b border-structural-border lg:border-b-0">
                    <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary-text mb-3">
                            Department capacity
                        </div>
                        <div className="space-y-3">
                            {CAPACITY.map((c) => (
                                <div key={c.dept}>
                                    <div className="flex items-center justify-between text-xs mb-1.5">
                                        <span className="text-charcoal">{c.dept}</span>
                                        <span className="font-mono text-secondary-text">{c.value}%</span>
                                    </div>
                                    <CapacityBar value={c.value} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary-text mb-3">
                            Daily
                        </div>
                        <div className="grid grid-cols-2 gap-px bg-structural-border border border-structural-border rounded">
                            {STATS.map((s) => (
                                <div key={s.label} className="bg-surface p-3">
                                    <div className="font-mono text-2xl font-medium text-charcoal leading-none">{s.value}</div>
                                    <div className="mt-1 text-[11px] text-secondary-text leading-tight">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: job rows */}
                <div className="lg:col-span-8 p-5 md:p-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary-text mb-3">
                        Production queue
                    </div>
                    <div className="divide-y divide-structural-border border border-structural-border rounded overflow-hidden">
                        {JOBS.map((job, i) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.4, delay: 0.05 * i }}
                                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 bg-surface px-4 py-3 hover:bg-background-light/60 transition-colors"
                            >
                                <div className="min-w-0">
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-mono text-[11px] text-secondary-text">{job.id}</span>
                                        <span className="truncate text-sm font-semibold text-charcoal">{job.customer}</span>
                                    </div>
                                    <div className="mt-0.5 truncate text-xs text-secondary-text">{job.detail}</div>
                                </div>
                                <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ${STATUS_TONE[job.tone]}`}>
                                    {job.status}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Alert strip */}
            <div className="flex items-center gap-2 border-t border-structural-border bg-rose-50 px-5 py-3 md:px-6">
                <span className="material-symbols-outlined text-base text-rose-600" style={{ fontVariationSettings: "'wght' 400" }}>
                    warning
                </span>
                <span className="text-xs text-rose-700">
                    4 jobs at late risk · Screen print &amp; Finishing at &gt;80% capacity
                </span>
            </div>
        </div>
    );
}
