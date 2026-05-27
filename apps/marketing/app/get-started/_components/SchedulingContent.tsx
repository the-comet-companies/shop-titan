"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import CTAButton from "./CTAButton";
import { Eyebrow, SectionWrap, FadeIn, fadeUp, stagger } from "./primitives";
import ProductionScheduleDashboard from "./ProductionScheduleDashboard";
import WorkflowStepper from "./WorkflowStepper";

const DAILY_REALITY = [
    { title: "Capacity blind spots", body: "A whiteboard can show what is planned, but it cannot show how much work each department can realistically handle." },
    { title: "Outdated Spreadsheets", body: "The second a job changes, a rush order comes in, or an approval gets delayed, the spreadsheet becomes unreliable." },
    { title: "Verbal chaos", body: "When scheduling depends on quick conversations, hallway updates, and memory, important details get missed." },
    { title: "Rush job chaos", body: "One urgent order can shift the whole day, but most shops cannot clearly see the impact until production is already behind." },
    { title: "Machine blind spots", body: "Jobs get scheduled before artwork is approved, blanks are ready, files are finalized, or production notes are complete." },
    { title: "Hidden bottlenecks", body: "One department may be overloaded while another is waiting, but leadership does not see the imbalance in time." },
    { title: "Machine overload", body: "Owners and managers cannot always see which machines are booked, which are open, and where capacity is tightening." },
    { title: "Status Chasing", body: "When job status is unclear, sales, art, production, shipping, and leadership all interrupt each other to find answers." },
    { title: "Schedule risk", body: "Jobs that looked fine yesterday suddenly become urgent because the schedule did not show risk early enough." },
    { title: "Owner dependency", body: "When the schedule is unclear, everyone comes back to the owner or production manager to make the final call." },
];

const RIPPLE = [
    { who: "Sales", impact: "cannot give confident customer updates." },
    { who: "Production", impact: "does not know what should be next." },
    { who: "Purchasing", impact: "does not know what needs to be rushed." },
    { who: "Art", impact: "does not know what is holding up the floor." },
    { who: "Shipping", impact: "gets surprised at the end." },
    { who: "The owner", impact: "gets pulled into everything." },
];

const REAL_CAUSE = [
    "Jobs scheduled before they are actually ready.",
    "Capacity decisions made from incomplete information.",
    "Rush orders added without understanding the impact.",
    "Machine conflicts discovered too late.",
    "Blocked jobs sitting in active queues.",
    "Owners making decisions from memory instead of data.",
];

const SYSTEM_FEATURES = [
    { icon: "view_kanban", title: "Live production queue", body: "See which jobs are ready, in progress, blocked, delayed, completed, or waiting for the next department." },
    { icon: "groups", title: "Department-level visibility", body: "Give screen printing, embroidery, DTF, DTG, finishing, fulfillment, and shipping teams a clear view of their workload." },
    { icon: "bolt", title: "Rush job impact", body: "Understand how rush jobs affect existing work before the whole schedule gets thrown off." },
    { icon: "block", title: "Blocked job tracking", body: "Identify jobs that are waiting on artwork, approval, inventory, vendor items, production notes, or customer decisions." },
    { icon: "speed", title: "Machine & capacity awareness", body: "Give managers a better view of where capacity is available and where bottlenecks are forming." },
    { icon: "assignment_ind", title: "Clear task ownership", body: "Show who owns the next step so jobs do not sit in limbo." },
    { icon: "event", title: "Due date visibility", body: "See upcoming deadlines, late-risk jobs, and production priorities before they turn into emergencies." },
    { icon: "linked_services", title: "Connected job details", body: "Keep scheduling connected to the order, artwork, approvals, blanks, production notes, and customer requirements." },
    { icon: "self_improvement", title: "Less owner dependency", body: "Give the team a system they can run from instead of forcing every decision back to the owner." },
];

const BEFORE = [
    "Scheduling happens on whiteboards and spreadsheets",
    "Rush jobs disrupt the whole day",
    "Jobs get scheduled before they are approved",
    "Blocked jobs stay hidden in active queues",
    "Machine availability is unclear",
    "Departments do not see each other's workload",
    "Bottlenecks are discovered too late",
    "Everyone interrupts everyone for updates",
    "Production meetings become the system",
    "The owner or manager has to make every call",
];

const AFTER = [
    "Production schedule lives in one connected system",
    "Rush impact is easier to understand",
    "Jobs can be checked for readiness before scheduling",
    "Blocked jobs are easier to identify",
    "Department queues are more visible",
    "Capacity is clearer across production stages",
    "Bottlenecks surface earlier",
    "Teams can find updates without interrupting",
    "Meetings become more focused",
    "The shop can run with less owner dependency",
];

const READINESS = [
    "Artwork approval",
    "Final mockup approval",
    "Correct blank inventory",
    "Vendor items",
    "Specialty materials",
    "Production notes",
    "Thread color",
    "Ink color",
    "Screens",
    "Transfer",
    "Labels",
    "Packaging",
    "Customer confirmation",
];

const METHODS = [
    "Screen Printing",
    "Embroidery",
    "DTF",
    "DTG",
    "Cut and Sew",
    "Dye Houses",
    "Promo Products",
    "Contract Decoration",
    "Fulfillment",
    "Private Label Production",
    "Finishing",
    "Rush Production",
];

const OWNER_BENEFITS = [
    "Fewer interruptions",
    "Clearer daily priorities",
    "Better department handoffs",
    "Less production guessing",
    "More visible bottlenecks",
    "Faster answers",
    "Less owner dependency",
    "More control as order volume grows",
];

const WHAT_CHANGES = [
    { title: "Fewer daily fire drills", body: "The team can see problems earlier instead of reacting after things are already late." },
    { title: "Cleaner production flow", body: "Jobs move through departments with clearer ownership and fewer missing details." },
    { title: "Better rush job decisions", body: "Managers can understand the impact of rush work before committing to unrealistic timelines." },
    { title: "Less wasted time", body: "Teams spend less time asking for updates and more time moving jobs forward." },
    { title: "Earlier bottleneck detection", body: "Production leaders can see where work is stacking up before it delays everything else." },
    { title: "More scalable operations", body: "The shop can handle more jobs without relying on whiteboards, memory, and constant meetings." },
];

export default function SchedulingContent() {
    return (
        <>
            {/* ───── 1. HERO ───── */}
            <section className="relative pt-12 md:pt-20 pb-12 md:pb-16 overflow-hidden">
                <div className="max-w-container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={stagger}
                        className="max-w-4xl"
                    >
                        <motion.div variants={fadeUp} className="mb-6">
                            <Eyebrow>Production scheduling software</Eyebrow>
                        </motion.div>
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-charcoal"
                        >
                            Stop scheduling production from whiteboards, spreadsheets, and <span className="font-serif italic font-normal text-primary">guesswork</span>.
                        </motion.h1>
                        <motion.p
                            variants={fadeUp}
                            className="mt-7 text-lg md:text-xl text-secondary-text leading-relaxed max-w-3xl"
                        >
                            Shop Titan helps growing production shops see job status, department workload, rush impact, approvals, inventory readiness, and production bottlenecks in one connected system.
                        </motion.p>
                        <motion.div
                            variants={fadeUp}
                            className="mt-9 flex flex-col sm:flex-row items-start gap-3"
                        >
                            <CTAButton label="Book a Demo" variant="primary" />
                            <CTAButton label="See Shop Titan in Action" variant="secondary" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ───── 2. DASHBOARD DISPLAY ───── */}
            <section className="pb-24 md:pb-32">
                <div className="max-w-container mx-auto px-4 md:px-6">
                    <FadeIn className="max-w-3xl mb-10">
                        <p className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-charcoal">
                            See the actual schedule view built for production shops.
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <ProductionScheduleDashboard />
                    </FadeIn>
                </div>
            </section>

            {/* ───── 3. THE DAILY REALITY ───── */}
            <SectionWrap>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>The daily reality</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        When scheduling is manual, every day starts with <span className="font-serif italic font-normal text-primary">confusion</span>.
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                        Most shops do not have a production problem. They have a scheduling visibility problem. The work is moving, but the schedule lives across whiteboards, spreadsheets, verbal updates, team memory, and last-minute changes - so no one can clearly see what is ready, what is waiting, what is blocked, or what needs attention now.
                    </FadeIn>
                </div>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                    className="mt-12 grid gap-px bg-structural-border border border-structural-border rounded-lg overflow-hidden md:grid-cols-2 lg:grid-cols-3"
                >
                    {DAILY_REALITY.map((p) => (
                        <motion.li key={p.title} variants={fadeUp} className="bg-surface p-6 md:p-7">
                            <h3 className="text-lg font-bold tracking-tight text-charcoal leading-tight">{p.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-secondary-text">{p.body}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                <FadeIn className="mt-12">
                    <CTAButton label="See Shop Titan in Action" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 4. RIPPLE EFFECT ───── */}
            <SectionWrap className="bg-surface">
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>The ripple effect</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        Scheduling chaos does not just slow production. It creates <span className="font-serif italic font-normal text-primary">stress</span> everywhere.
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                        When the schedule is unclear, every team feels it.
                    </FadeIn>
                </div>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={stagger}
                    className="mt-12 grid gap-px bg-structural-border border border-structural-border rounded-lg overflow-hidden md:grid-cols-2 lg:grid-cols-3"
                >
                    {RIPPLE.map((r) => (
                        <motion.li key={r.who} variants={fadeUp} className="bg-surface p-6">
                            <p className="font-bold text-charcoal">{r.who}</p>
                            <p className="mt-1 text-base text-secondary-text leading-relaxed">{r.impact}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                <FadeIn className="mt-12 max-w-3xl">
                    <blockquote className="border-l-2 border-primary pl-6 py-2 text-xl md:text-2xl font-serif italic text-charcoal leading-relaxed">
                        &ldquo;A messy schedule turns every department into customer service for every other department.&rdquo;
                    </blockquote>
                </FadeIn>

                <FadeIn className="mt-12">
                    <CTAButton label="Book a Demo" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 5. THE REAL CAUSE ───── */}
            <SectionWrap>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>The real cause</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        The problem is not that your team is busy. It is that no one can see the <span className="font-serif italic font-normal text-primary">whole</span> schedule.
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                        Production teams are usually working hard. The issue is that the full picture is hidden. One person knows the art is not approved. Another knows the blanks are missing. Another knows the machine is already booked. Another knows the customer changed the due date. But the schedule does not always know. If the schedule does not know the truth, the team ends up guessing.
                    </FadeIn>
                </div>

                <motion.ol
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={stagger}
                    className="mt-12 grid gap-px bg-structural-border border border-structural-border rounded-lg overflow-hidden md:grid-cols-2"
                >
                    {REAL_CAUSE.map((item, i) => (
                        <motion.li key={item} variants={fadeUp} className="bg-surface p-6 flex items-start gap-4">
                            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary-text pt-1 flex-shrink-0 w-6">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-base md:text-lg text-charcoal leading-relaxed">{item}</span>
                        </motion.li>
                    ))}
                </motion.ol>

                <FadeIn className="mt-12">
                    <CTAButton label="Request a Walkthrough" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 6. THE SYSTEM ───── */}
            <SectionWrap className="bg-surface">
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>The system</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        Shop Titan gives production teams a <span className="font-serif italic font-normal text-primary">clearer</span> way to schedule work.
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                        Shop Titan connects job status, approvals, inventory, production notes, department ownership, and due dates into one system so your team can see what is ready, what is blocked, and what needs attention.
                    </FadeIn>
                </div>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                    className="mt-12 grid gap-px bg-structural-border border border-structural-border rounded-lg overflow-hidden md:grid-cols-2 lg:grid-cols-3"
                >
                    {SYSTEM_FEATURES.map((f) => (
                        <motion.li key={f.title} variants={fadeUp} className="bg-surface p-6 md:p-7">
                            <span
                                className="material-symbols-outlined text-primary text-3xl mb-4 block"
                                style={{ fontVariationSettings: "'wght' 300" }}
                                aria-hidden
                            >
                                {f.icon}
                            </span>
                            <h3 className="text-lg font-bold tracking-tight text-charcoal leading-tight">{f.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-secondary-text">{f.body}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                <FadeIn className="mt-12">
                    <CTAButton label="See Shop Titan in Action" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 7. WORKFLOW ───── */}
            <SectionWrap>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>The workflow</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        From approved job to finished order, keep production moving.
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                        The goal is simple: schedule from real readiness, not <span className="font-serif italic text-primary">hope</span>.
                    </FadeIn>
                </div>

                <FadeIn className="mt-12">
                    <WorkflowStepper />
                </FadeIn>

                <FadeIn className="mt-12">
                    <CTAButton label="Book a Demo" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 8. BEFORE / AFTER ───── */}
            <SectionWrap className="bg-surface">
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Before / After</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        Before Shop Titan vs. after Shop Titan.
                    </FadeIn>
                </div>

                <div className="mt-12 grid gap-px bg-structural-border border border-structural-border rounded-lg overflow-hidden md:grid-cols-2">
                    <FadeIn className="bg-surface p-6 md:p-8">
                        <div className="mb-5">
                            <Eyebrow>Before</Eyebrow>
                        </div>
                        <ul className="space-y-3">
                            {BEFORE.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-base text-secondary-text leading-relaxed">
                                    <span
                                        className="material-symbols-outlined text-secondary-text text-lg flex-shrink-0 mt-0.5"
                                        style={{ fontVariationSettings: "'wght' 300" }}
                                        aria-hidden
                                    >
                                        remove
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </FadeIn>

                    <FadeIn className="bg-surface p-6 md:p-8" delay={0.1}>
                        <div className="mb-5">
                            <Eyebrow>After Shop Titan</Eyebrow>
                        </div>
                        <ul className="space-y-3">
                            {AFTER.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-base text-charcoal leading-relaxed">
                                    <span
                                        className="material-symbols-outlined text-primary text-lg flex-shrink-0 mt-0.5"
                                        style={{ fontVariationSettings: "'wght' 400" }}
                                        aria-hidden
                                    >
                                        check
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </FadeIn>
                </div>

                <FadeIn className="mt-12">
                    <CTAButton label="Book a Demo" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 9. REAL READINESS ───── */}
            <SectionWrap>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Real readiness</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        A production schedule is only useful if it knows what is <span className="font-serif italic font-normal text-primary">actually</span> ready.
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                        A job is not ready just because it has a due date. It may still be waiting on any of these - and the schedule needs to know:
                    </FadeIn>
                </div>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                    className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                >
                    {READINESS.map((item) => (
                        <motion.li
                            key={item}
                            variants={fadeUp}
                            className="flex items-center gap-3 rounded-lg border border-structural-border bg-surface p-4"
                        >
                            <span
                                className="material-symbols-outlined text-primary text-base flex-shrink-0"
                                style={{ fontVariationSettings: "'wght' 400" }}
                                aria-hidden
                            >
                                check
                            </span>
                            <span className="text-sm text-charcoal">{item}</span>
                        </motion.li>
                    ))}
                </motion.ul>

                <FadeIn as="p" className="mt-10 max-w-3xl text-base md:text-lg text-secondary-text leading-relaxed">
                    Shop Titan helps production teams schedule around real job readiness, not assumptions.
                </FadeIn>
            </SectionWrap>

            {/* ───── 10. BUILT FOR PRODUCTION ───── */}
            <SectionWrap className="bg-surface">
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Built for production</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        Built for production shops with real moving parts.
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                        Generic project management tools do not understand the way production work moves through a decoration business. Shop Titan is built for shops where orders move through multiple stages, departments, materials, approvals, and deadlines before they are complete.
                    </FadeIn>
                </div>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                    className="mt-12 flex flex-wrap gap-2"
                >
                    {METHODS.map((m) => (
                        <motion.li
                            key={m}
                            variants={fadeUp}
                            className="rounded-full border border-structural-border bg-background-light/60 px-4 py-2 text-sm font-medium text-charcoal"
                        >
                            {m}
                        </motion.li>
                    ))}
                </motion.ul>

                <FadeIn className="mt-12">
                    <CTAButton label="See Shop Titan in Action" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 11. LESS OWNER DEPENDENCY ───── */}
            <SectionWrap>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Less owner dependency</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        Your production schedule should not live in <span className="font-serif italic font-normal text-primary">one person&apos;s</span> head.
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                        If the owner or production manager is the only person who knows what needs to happen next, the shop is fragile. Shop Titan helps turn scheduling knowledge into a system the team can follow.
                    </FadeIn>
                </div>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={stagger}
                    className="mt-12 grid gap-3 md:grid-cols-2"
                >
                    {OWNER_BENEFITS.map((item) => (
                        <motion.li
                            key={item}
                            variants={fadeUp}
                            className="flex items-start gap-3 rounded-lg border border-structural-border bg-surface p-4"
                        >
                            <span
                                className="material-symbols-outlined text-primary text-xl flex-shrink-0"
                                style={{ fontVariationSettings: "'wght' 400" }}
                                aria-hidden
                            >
                                check_circle
                            </span>
                            <span className="text-base text-charcoal leading-relaxed">{item}</span>
                        </motion.li>
                    ))}
                </motion.ul>

                <FadeIn as="p" className="mt-10 max-w-3xl text-base md:text-lg text-secondary-text leading-relaxed">
                    The goal is not to replace leadership. The goal is to stop making leadership the only schedule.
                </FadeIn>

                <FadeIn className="mt-10">
                    <CTAButton label="Book a Demo" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 12. WHAT CHANGES ───── */}
            <SectionWrap className="bg-surface">
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>What changes</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        What changes when production scheduling gets clearer.
                    </FadeIn>
                </div>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                    className="mt-12 grid gap-px bg-structural-border border border-structural-border rounded-lg overflow-hidden md:grid-cols-2 lg:grid-cols-3"
                >
                    {WHAT_CHANGES.map((c) => (
                        <motion.li key={c.title} variants={fadeUp} className="bg-surface p-6 md:p-7">
                            <h3 className="text-lg font-bold tracking-tight text-charcoal leading-tight">{c.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-secondary-text">{c.body}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                <FadeIn className="mt-12">
                    <CTAButton label="Get the Production System" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 13. WHY WE BUILT THIS ───── */}
            <SectionWrap>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Why we built this</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        Built from real production pressure.
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                        Shop Titan was built from inside the production world, where scheduling mistakes create late orders, rushed teams, missed details, reprints, customer frustration, and margin loss. It was created for shops that need a better way to control the flow of work - not another generic task board. This is software for production companies that are ready to stop guessing and start running from a clearer system.
                    </FadeIn>
                </div>

                <FadeIn className="mt-12">
                    <CTAButton label="Request a Walkthrough" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 14. FINAL CTA ───── */}
            <SectionWrap className="bg-surface">
                <div className="max-w-3xl">
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        Ready to bring <span className="font-serif italic font-normal text-primary">control</span> to your production schedule?
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                        If your shop is still scheduling from whiteboards, spreadsheets, verbal updates, and memory, Shop Titan gives your team a clearer way to see what is ready, what is blocked, and what needs to happen next.
                    </FadeIn>
                </div>

                <FadeIn className="mt-10 flex flex-col sm:flex-row gap-3">
                    <CTAButton label="Book a Demo" variant="primary" />
                    <CTAButton label="See Shop Titan in Action" variant="secondary" />
                </FadeIn>

                <FadeIn className="mt-12 pt-12 border-t border-structural-border">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-secondary-text">
                        One connected schedule. Less guessing. More control.
                    </p>
                </FadeIn>
            </SectionWrap>

            <Footer />
        </>
    );
}
