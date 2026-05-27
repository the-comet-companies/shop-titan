"use client";

import { motion } from "framer-motion";

const STEPS = [
    {
        title: "Job created",
        body: "Order enters the system with customer details, due date, decoration method, and production requirements.",
        icon: "add_task",
    },
    {
        title: "Artwork & approval checked",
        body: "The system shows whether the job is ready or blocked by art, mockups, approvals, or revisions.",
        icon: "check_circle",
    },
    {
        title: "Inventory confirmed",
        body: "Blanks, materials, transfers, thread, screens, packaging, or vendor items are checked before production.",
        icon: "inventory_2",
    },
    {
        title: "Production scheduled",
        body: "The job is assigned to the correct department, queue, machine, or production stage.",
        icon: "schedule",
    },
    {
        title: "Status updated",
        body: "The team updates where the job stands so everyone sees the latest production status.",
        icon: "update",
    },
    {
        title: "Bottlenecks identified",
        body: "Managers can see where work is stacking up, what is blocked, and what needs attention.",
        icon: "filter_alt",
    },
    {
        title: "Order completed",
        body: "The job moves through finishing, fulfillment, shipping, and final review.",
        icon: "local_shipping",
    },
];

export default function WorkflowStepper() {
    return (
        <ol className="grid gap-px bg-structural-border border border-structural-border rounded-lg overflow-hidden md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step, i) => (
                <motion.li
                    key={step.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-surface p-6 md:p-7 relative flex flex-col"
                >
                    <div className="flex items-start justify-between mb-4">
                        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary-text">
                            Step {i + 1}
                        </span>
                        <span
                            className="material-symbols-outlined text-primary text-2xl"
                            style={{ fontVariationSettings: "'wght' 300" }}
                            aria-hidden
                        >
                            {step.icon}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-charcoal leading-tight mb-2">
                        {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-secondary-text">
                        {step.body}
                    </p>
                </motion.li>
            ))}
            {/* Trailing tile to balance 7-step grid */}
            <li
                className="hidden bg-background-light/40 p-6 md:p-7 lg:flex flex-col justify-center items-center text-center"
                aria-hidden
            >
                <span
                    className="material-symbols-outlined text-primary text-3xl mb-2"
                    style={{ fontVariationSettings: "'wght' 300" }}
                >
                    insights
                </span>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary-text">
                    Schedule from real readiness, not hope.
                </p>
            </li>
        </ol>
    );
}
