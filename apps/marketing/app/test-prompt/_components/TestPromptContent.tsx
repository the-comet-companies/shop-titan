"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const CTA_HREF = "/reach-out";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

// Power word highlight: pill-style background + brighter accent for inline emphasis.
function Pw({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-block px-1.5 py-0.5 rounded-md bg-primary/10 text-primary font-semibold">
            {children}
        </span>
    );
}

// Glow phrase: large isolated emphasis that breaks the rhythm between sections.
function Glow({ children }: { children: React.ReactNode }) {
    return (
        <span className="block text-2xl md:text-3xl lg:text-4xl text-primary italic font-light tracking-tight" style={{ textShadow: "0 0 30px rgba(0, 102, 204, 0.18)" }}>
            {children}
        </span>
    );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary/80">
            {children}
        </span>
    );
}

function PrimaryCTA({ children }: { children: React.ReactNode }) {
    return (
        <Link
            href={CTA_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-primary/30 hover:brightness-110 hover:shadow-xl hover:shadow-primary/40 transition-all"
        >
            {children}
            <span className="material-symbols-outlined text-base" aria-hidden>arrow_forward</span>
        </Link>
    );
}

function SecondaryCTA({ children }: { children: React.ReactNode }) {
    return (
        <Link
            href={CTA_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-gray-300 backdrop-blur text-charcoal px-7 py-3.5 text-sm font-semibold hover:bg-gray-100 hover:border-gray-400 transition-all"
        >
            {children}
        </Link>
    );
}

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <section className={`relative border-t border-structural-border py-24 md:py-32 ${className ?? ""}`}>
            <div className="max-w-6xl mx-auto px-4 md:px-6">{children}</div>
        </section>
    );
}

function FadeIn({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

const HERO_DASHBOARD_TILES = [
    { label: "Orders", icon: "shopping_cart", note: "12 awaiting" },
    { label: "Artwork", icon: "palette", note: "3 unapproved" },
    { label: "Approvals", icon: "approval", note: "5 buried in email" },
    { label: "Inventory", icon: "inventory_2", note: "Low on blanks" },
    { label: "Production", icon: "precision_manufacturing", note: "Press idle" },
    { label: "Scheduling", icon: "calendar_month", note: "Whiteboard only" },
    { label: "Owner Visibility", icon: "visibility", note: "Asked 4 times today" },
    { label: "Status", icon: "timeline", note: "Last update: yesterday" },
];

const PAIN_CARDS = [
    { text: "New orders come in before yesterday's jobs are", em: "fully updated." },
    { text: "Someone is asking which art file is the", em: "final one. Again." },
    { text: "The approval exists, but", em: "nobody knows where it is." },
    { text: "The whiteboard changed, but", em: "not everyone got the memo." },
    { text: "Blanks are", em: "missing", suffix: "after the job is already supposed to move." },
    { text: "", em: "Production keeps stopping", suffix: "to ask what is next." },
    { text: "Sales wants an update, but the answer is", em: "still in someone's head." },
    { text: "The", em: "owner gets pulled in", suffix: "because no one fully trusts the system." },
];

const STILL_HAPPENING = [
    { plain: "The job status changed, but", emphasis: "only one person knows." },
    { plain: "The customer approved the artwork, but", emphasis: "production has not seen it." },
    { plain: "The blanks arrived, but", emphasis: "nobody updated the order." },
    { plain: "The rush job moved up, but the", emphasis: "schedule did not." },
    { plain: "The sales team promised a date, but production", emphasis: "never saw the note." },
    { plain: "The owner knows what is blocked, but the", emphasis: "team is still guessing." },
    { plain: "The shop is busy, but", emphasis: "nobody has a clean view of what is actually happening." },
];

const GROWTH_STAGES = [
    { stage: "20 orders", label: "Manageable", tone: "text-emerald-600", bar: "w-1/5 bg-emerald-500" },
    { stage: "50 orders", label: "Messy", tone: "text-yellow-600", bar: "w-2/5 bg-yellow-500" },
    { stage: "100 orders", label: "Reactive", tone: "text-orange-600", bar: "w-3/5 bg-orange-500" },
    { stage: "200+ orders", label: "Owner-dependent", tone: "text-rose-600", bar: "w-full bg-rose-500" },
];

const OWNER_KNOWS = [
    "They know which customer is sensitive.",
    "They know which jobs are hot.",
    "They know which approval came in late.",
    "They know which department is behind.",
    "They know who needs to be pushed.",
    "They know what is about to go wrong.",
];

const PROBLEM_FLOW = [
    { stage: "Order details", breakdown: "Missing approval" },
    { stage: "Artwork", breakdown: "Wrong art file" },
    { stage: "Approval", breakdown: "Buried in email" },
    { stage: "Inventory", breakdown: "No inventory" },
    { stage: "Production", breakdown: "Unclear status" },
    { stage: "Finishing", breakdown: "No department owner" },
    { stage: "Shipping", breakdown: "Late update" },
];

const FALSE_SOLUTIONS = [
    {
        name: "Whiteboards",
        body: "Good for visibility in the room. Bad for remote access, job history, updates, accountability, and scale.",
        emphasis: "remote access, job history, updates, accountability, and scale",
    },
    {
        name: "Spreadsheets",
        body: "Flexible at first. Fragile once multiple people, departments, versions, and priorities depend on them.",
        emphasis: "Fragile",
    },
    {
        name: "Generic task apps",
        body: "They track tasks. They do not understand art approvals, decoration methods, blanks, job stages, production queues, or shop-specific handoffs.",
        emphasis: "do not understand",
    },
];

const REVEAL_MODULES = [
    { name: "Orders", icon: "shopping_cart" },
    { name: "Artwork", icon: "palette" },
    { name: "Approvals", icon: "approval" },
    { name: "Scheduling", icon: "calendar_month" },
    { name: "Inventory", icon: "inventory_2" },
    { name: "Production Queues", icon: "view_kanban" },
    { name: "Finishing", icon: "auto_fix_high" },
    { name: "Shipping", icon: "local_shipping" },
    { name: "Reporting", icon: "monitoring" },
];

const PAIN_FIX_PAIRS = [
    {
        pain: "Which art file is correct?",
        fix: "Artwork version control and approvals tied to the job.",
    },
    {
        pain: "Where is this order right now?",
        fix: "One current job status visible to the team.",
    },
    {
        pain: "What is production working on next?",
        fix: "Department queues for art, screen print, embroidery, DTF, finishing, and shipping.",
    },
    {
        pain: "Why did we find out inventory was missing today?",
        fix: "Inventory visibility before the job hits production.",
    },
    {
        pain: "Why does every quote feel different?",
        fix: "Pricing and margin visibility attached to the order.",
    },
    {
        pain: "Why does everything come back to the owner?",
        fix: "Owner-level reporting without the owner being the source of truth.",
    },
];

const BEFORE_ROWS = [
    "Jobs tracked across whiteboards, emails, spreadsheets, and memory",
    "Status updates require asking around",
    "Artwork approvals get buried",
    "Inventory issues show up too late",
    "Owners become the source of truth",
    "Growth creates more interruptions",
];

const AFTER_ROWS = [
    "Jobs move through one connected system",
    "Status is visible in real time",
    "Artwork and approvals stay tied to the order",
    "Inventory issues are easier to catch earlier",
    "Owners get visibility without constant involvement",
    "Growth becomes easier to manage",
];

const DREAM_LIST = [
    "You know what is ready.",
    "You know what is blocked.",
    "You know what is waiting on approval.",
    "You know what is missing inventory.",
    "You know what is late.",
    "You know what is moving today.",
    "You know which department is overloaded.",
    "You know what needs your decision and what does not.",
];

const NO_MORE = [
    "No walking the floor just to get answers.",
    "No chasing three people for one update.",
    "No digging through email threads.",
    "No relying on memory.",
    "No wondering what slipped.",
];

export default function TestPromptContent() {
    return (
        <>
            {/* ───── 1. HERO PAIN HOOK ───── */}
            <section className="relative overflow-hidden pt-12 md:pt-20 pb-24 md:pb-32">
                {/* radial glow */}
                <div className="pointer-events-none absolute inset-x-0 -top-32 h-[480px] bg-[radial-gradient(ellipse_at_center,_rgba(0,102,204,0.10)_0%,_rgba(255,255,255,0)_70%)]" />
                <div className="relative max-w-6xl mx-auto px-4 md:px-6">
                    <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl">
                        <motion.div variants={fadeUp} className="mb-6">
                            <Eyebrow>Production operating system</Eyebrow>
                        </motion.div>
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-charcoal"
                        >
                            Your shop is not <Pw>chaotic</Pw> because your team is bad.
                            <br className="hidden md:block" />
                            It is chaotic because your <Pw>system is broken</Pw>.
                        </motion.h1>
                        <motion.p variants={fadeUp} className="mt-7 text-lg md:text-xl text-secondary-text leading-relaxed max-w-3xl">
                            Orders live in one place. Artwork lives somewhere else. Approvals are <Pw>buried in email</Pw>. Scheduling is on a whiteboard. Inventory gets checked <Pw>too late</Pw>. And somehow, the <Pw>owner</Pw> is still the person everyone goes to for the answer.
                        </motion.p>
                        <motion.p variants={fadeUp} className="mt-5 text-base md:text-lg text-charcoal/80 font-medium">
                            That is not a team problem. That is a system problem.
                        </motion.p>
                        <motion.div variants={fadeUp} className="mt-9 flex flex-col sm:flex-row gap-3">
                            <PrimaryCTA>See the System Built for Production Shops</PrimaryCTA>
                            <SecondaryCTA>Watch How It Works</SecondaryCTA>
                        </motion.div>
                    </motion.div>

                    {/* Hero command-center dashboard mockup */}
                    <FadeIn className="mt-16 md:mt-20" delay={0.15}>
                        <div className="rounded-2xl border border-structural-border bg-white backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary/10">
                            <div className="flex items-center justify-between border-b border-structural-border bg-gray-50 px-5 py-3">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                                </div>
                                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-secondary-text/60">
                                    shoptitan.app / command-center
                                </span>
                                <div className="w-12" />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 p-px">
                                {HERO_DASHBOARD_TILES.map((tile, i) => (
                                    <motion.div
                                        key={tile.label}
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.4, delay: 0.05 * i }}
                                        className="bg-background-light p-5 md:p-6"
                                    >
                                        <span
                                            className="material-symbols-outlined text-primary text-xl mb-3 block"
                                            style={{ fontVariationSettings: "'wght' 300" }}
                                            aria-hidden
                                        >
                                            {tile.icon}
                                        </span>
                                        <p className="text-sm font-semibold text-charcoal">{tile.label}</p>
                                        <p className="mt-1 text-xs text-secondary-text/60">{tile.note}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ───── 2. SCROLLING PAIN STACK ───── */}
            <Section>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Pain stack</Eyebrow>
                    </FadeIn>
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                            Does your shop feel like this by 10 AM?
                        </h2>
                    </FadeIn>
                </div>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                    className="mt-12 grid gap-4 md:grid-cols-2"
                >
                    {PAIN_CARDS.map((card, i) => (
                        <motion.li
                            key={i}
                            variants={fadeUp}
                            className="group rounded-2xl border border-structural-border bg-white backdrop-blur-sm p-6 hover:bg-gray-50 hover:border-gray-300 transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/70 pt-1.5 flex-shrink-0">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <p className="text-base md:text-lg text-charcoal/85 leading-relaxed">
                                    {card.text} <Pw>{card.em}</Pw>
                                    {card.suffix ? ` ${card.suffix}` : null}
                                </p>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>

                <FadeIn className="mt-14 max-w-3xl">
                    <p className="text-base md:text-lg text-secondary-text leading-relaxed">
                        If this feels familiar, the problem is not your team. It is the way the shop is being forced to run.
                    </p>
                    <div className="mt-8">
                        <PrimaryCTA>Show Me the Fix</PrimaryCTA>
                    </div>
                </FadeIn>
            </Section>

            {/* ───── 3. KEEP HITTING THE PAIN ───── */}
            <Section>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>And it keeps going</Eyebrow>
                    </FadeIn>
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                            And it does not stop there.
                        </h2>
                    </FadeIn>
                </div>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                    className="mt-12 max-w-4xl divide-y divide-structural-border border-t border-b border-structural-border"
                >
                    {STILL_HAPPENING.map((line, i) => (
                        <motion.li
                            key={i}
                            variants={fadeUp}
                            className="flex items-start gap-6 py-6"
                        >
                            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/60 pt-1.5 flex-shrink-0 w-8">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <p className="text-lg md:text-xl text-charcoal/85 leading-snug">
                                {line.plain} <Pw>{line.emphasis}</Pw>
                            </p>
                        </motion.li>
                    ))}
                </motion.ul>

                <FadeIn className="mt-14">
                    <Glow>That is how shops get stuck in reactive mode.</Glow>
                </FadeIn>
            </Section>

            {/* ───── 4. CHAOS COMPOUNDS WITH GROWTH ───── */}
            <Section>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Growth exposes the cracks</Eyebrow>
                    </FadeIn>
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                            What worked at 20 orders breaks at 200.
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.05}>
                        <p className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                            A small shop can survive on <Pw>memory</Pw>, quick conversations, and a whiteboard. But as order volume grows, every <Pw>missing update</Pw> creates another interruption. Every <Pw>unclear handoff</Pw> creates another delay. Every <Pw>buried approval</Pw> creates another risk.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn className="mt-14">
                    <div className="rounded-2xl border border-structural-border bg-white backdrop-blur-sm p-6 md:p-10">
                        <div className="space-y-6">
                            {GROWTH_STAGES.map((stage, i) => (
                                <motion.div
                                    key={stage.stage}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="flex items-baseline justify-between gap-4 mb-2">
                                        <span className="font-mono text-sm md:text-base text-charcoal tracking-wide">{stage.stage}</span>
                                        <span className={`text-sm md:text-base font-semibold ${stage.tone}`}>{stage.label}</span>
                                    </div>
                                    <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                            style={{ transformOrigin: "left" }}
                                            className={`h-full rounded-full ${stage.bar}`}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                <FadeIn className="mt-12 max-w-3xl">
                    <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">
                        Growth does not create chaos. Growth <Pw>exposes the system gaps</Pw> that were already there.
                    </p>
                </FadeIn>
            </Section>

            {/* ───── 5. OWNER DEPENDENCY ───── */}
            <Section>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Owner-dependent</Eyebrow>
                    </FadeIn>
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                            The <Pw>owner</Pw> should not have to be the operating system.
                        </h2>
                    </FadeIn>
                    <FadeIn>
                        <p className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                            Not because the owner wants to be involved in everything. Because the <Pw>system still depends on them</Pw>.
                        </p>
                    </FadeIn>
                </div>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                    className="mt-12 max-w-3xl space-y-3"
                >
                    {OWNER_KNOWS.map((line, i) => (
                        <motion.li
                            key={i}
                            variants={fadeUp}
                            className="flex items-center gap-4 rounded-xl border border-structural-border bg-white backdrop-blur-sm px-5 py-4"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0" />
                            <span className="text-base md:text-lg text-charcoal/85">{line}</span>
                        </motion.li>
                    ))}
                </motion.ul>

                <FadeIn className="mt-12 max-w-3xl">
                    <p className="text-lg md:text-xl text-charcoal font-medium leading-snug">
                        And that works until the shop grows. Then the <Pw>owner becomes the system</Pw>.
                    </p>
                    <div className="mt-8">
                        <PrimaryCTA>Get Production Out of Your Head</PrimaryCTA>
                    </div>
                </FadeIn>
            </Section>

            {/* ───── 6. THE REAL PROBLEM ───── */}
            <Section>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Real problem</Eyebrow>
                    </FadeIn>
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                            Your shop is <Pw>not disorganized</Pw>. Your <Pw>information is</Pw>.
                        </h2>
                    </FadeIn>
                    <FadeIn>
                        <p className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                            Most production problems are not caused by lazy people, bad teams, or lack of effort. They happen because the information needed to move a job forward is <Pw>scattered</Pw> across too many <Pw>disconnected places</Pw>.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn className="mt-14">
                    <div className="rounded-2xl border border-structural-border bg-white backdrop-blur-sm p-6 md:p-8 overflow-x-auto">
                        <div className="flex items-stretch min-w-max gap-3 md:gap-4">
                            {PROBLEM_FLOW.map((node, i) => (
                                <div key={node.stage} className="flex items-stretch gap-3 md:gap-4">
                                    <div className="flex flex-col items-center text-center min-w-[120px] md:min-w-[140px]">
                                        <div className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 w-full">
                                            <p className="text-xs md:text-sm font-semibold text-charcoal">{node.stage}</p>
                                        </div>
                                        <div className="mt-3 text-[10px] uppercase tracking-[0.18em] font-mono text-rose-600">
                                            {node.breakdown}
                                        </div>
                                    </div>
                                    {i < PROBLEM_FLOW.length - 1 && (
                                        <div className="flex items-center text-secondary-text/50 pt-3">
                                            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'wght' 300" }} aria-hidden>chevron_right</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </Section>

            {/* ───── 7. FALSE SOLUTIONS ───── */}
            <Section>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Why the usual tools fail</Eyebrow>
                    </FadeIn>
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                            Whiteboards, spreadsheets, and generic task boards were <Pw>not built for production shops</Pw>.
                        </h2>
                    </FadeIn>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                    className="mt-14 grid gap-4 md:grid-cols-3"
                >
                    {FALSE_SOLUTIONS.map((item) => (
                        <motion.div
                            key={item.name}
                            variants={fadeUp}
                            className="rounded-2xl border border-structural-border bg-white backdrop-blur-sm p-6 md:p-7 hover:border-gray-300 transition-colors"
                        >
                            <h3 className="text-lg font-bold text-charcoal mb-3">{item.name}</h3>
                            <p className="text-sm md:text-base text-secondary-text leading-relaxed">
                                {item.body}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <FadeIn className="mt-12 max-w-3xl">
                    <p className="text-lg md:text-xl text-charcoal/85 leading-relaxed">
                        You do not need another place to type notes. You need a system that <Pw>understands how production actually moves</Pw>.
                    </p>
                </FadeIn>
            </Section>

            {/* ───── 8. PRODUCT REVEAL ───── */}
            <Section>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Introducing Shop Titan</Eyebrow>
                    </FadeIn>
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                            Shop Titan gives production shops <Pw>one connected operating system</Pw>.
                        </h2>
                    </FadeIn>
                    <FadeIn>
                        <p className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                            Every order, art file, approval, note, schedule, inventory issue, department queue, and job status lives in <Pw>one connected workflow</Pw> so your team can move <Pw>without guessing</Pw>, <Pw>without chasing</Pw>, or <Pw>without constantly asking the owner</Pw>.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn className="mt-14">
                    <div className="rounded-2xl border border-primary/30 bg-primary/[0.05] backdrop-blur-sm p-2 shadow-2xl shadow-primary/20">
                        <div className="rounded-xl border border-structural-border bg-white p-6 md:p-10">
                            <div className="flex items-center justify-between mb-8">
                                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary/80">
                                    Shop Titan / one connected system
                                </span>
                                <div className="flex items-center gap-2 text-[11px] font-mono text-secondary-text/60">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Live
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4">
                                {REVEAL_MODULES.map((m, i) => (
                                    <motion.div
                                        key={m.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.4, delay: 0.04 * i }}
                                        className="group rounded-xl border border-structural-border bg-white p-4 md:p-5 hover:border-primary/40 hover:bg-primary/[0.05] transition-all"
                                    >
                                        <span
                                            className="material-symbols-outlined text-primary text-xl mb-3 block group-hover:text-primary transition-colors"
                                            style={{ fontVariationSettings: "'wght' 300" }}
                                            aria-hidden
                                        >
                                            {m.icon}
                                        </span>
                                        <p className="text-sm font-semibold text-charcoal">{m.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn className="mt-10">
                    <PrimaryCTA>See Shop Titan in Action</PrimaryCTA>
                </FadeIn>
            </Section>

            {/* ───── 9. PAIN TO SOLUTION CARDS ───── */}
            <Section>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Pain to fix</Eyebrow>
                    </FadeIn>
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                            Every painful handoff gets a <Pw>place</Pw>, an <Pw>owner</Pw>, and a <Pw>status</Pw>.
                        </h2>
                    </FadeIn>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={stagger}
                    className="mt-12 grid gap-4 md:grid-cols-2"
                >
                    {PAIN_FIX_PAIRS.map((pair, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            className="rounded-2xl border border-structural-border bg-white backdrop-blur-sm overflow-hidden"
                        >
                            <div className="px-6 py-5 border-b border-structural-border">
                                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-rose-600 mb-2">Pain</div>
                                <p className="text-base md:text-lg text-charcoal/85 leading-snug">{pair.pain}</p>
                            </div>
                            <div className="px-6 py-5 bg-primary/[0.04]">
                                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/80 mb-2">Fix</div>
                                <p className="text-base md:text-lg text-charcoal leading-snug">{pair.fix}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Section>

            {/* ───── 10. BEFORE / AFTER ───── */}
            <Section>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Before / After</Eyebrow>
                    </FadeIn>
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                            <Pw>Before</Pw> Shop Titan vs. <Pw>after</Pw> Shop Titan.
                        </h2>
                    </FadeIn>
                </div>

                <div className="mt-14 grid gap-4 md:grid-cols-2">
                    <FadeIn className="rounded-2xl border border-structural-border bg-white backdrop-blur-sm p-6 md:p-8">
                        <div className="mb-5">
                            <Eyebrow>Before</Eyebrow>
                        </div>
                        <ul className="space-y-3">
                            {BEFORE_ROWS.map((row) => (
                                <li key={row} className="flex items-start gap-3 text-base text-secondary-text leading-relaxed">
                                    <span className="material-symbols-outlined text-secondary-text/50 text-lg flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'wght' 300" }} aria-hidden>
                                        remove
                                    </span>
                                    {row}
                                </li>
                            ))}
                        </ul>
                    </FadeIn>

                    <FadeIn className="rounded-2xl border border-primary/30 bg-primary/[0.05] backdrop-blur-sm p-6 md:p-8 shadow-xl shadow-primary/10" delay={0.08}>
                        <div className="mb-5">
                            <Eyebrow>After Shop Titan</Eyebrow>
                        </div>
                        <ul className="space-y-3">
                            {AFTER_ROWS.map((row) => (
                                <li key={row} className="flex items-start gap-3 text-base text-charcoal leading-relaxed">
                                    <span className="material-symbols-outlined text-primary text-lg flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'wght' 400" }} aria-hidden>
                                        check
                                    </span>
                                    {row}
                                </li>
                            ))}
                        </ul>
                    </FadeIn>
                </div>

                <FadeIn className="mt-12">
                    <PrimaryCTA>Build a Shop That Runs With Clarity</PrimaryCTA>
                </FadeIn>
            </Section>

            {/* ───── 11. DREAM OUTCOME ───── */}
            <Section>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Dream outcome</Eyebrow>
                    </FadeIn>
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                            Imagine knowing what is happening <Pw>before someone has to ask</Pw>.
                        </h2>
                    </FadeIn>
                </div>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                    className="mt-12 grid gap-3 md:grid-cols-2"
                >
                    {DREAM_LIST.map((item) => (
                        <motion.li
                            key={item}
                            variants={fadeUp}
                            className="flex items-start gap-3 rounded-xl border border-structural-border bg-white backdrop-blur-sm p-4"
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

                <FadeIn className="mt-12 max-w-3xl">
                    <ul className="space-y-2">
                        {NO_MORE.map((line) => (
                            <li key={line} className="text-base md:text-lg text-secondary-text/80 leading-relaxed">
                                {line}
                            </li>
                        ))}
                    </ul>
                </FadeIn>

                <FadeIn className="mt-14 max-w-3xl">
                    <Glow>The shop keeps moving without the owner having to manually hold it together.</Glow>
                </FadeIn>

                <FadeIn className="mt-10">
                    <PrimaryCTA>See What That Looks Like</PrimaryCTA>
                </FadeIn>
            </Section>

            {/* ───── 12. FINAL CTA ───── */}
            <section className="relative border-t border-structural-border py-28 md:py-40 overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(0,102,204,0.08)_0%,_rgba(255,255,255,0)_70%)]" />
                <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-charcoal">
                            If your shop has <Pw>outgrown chaos</Pw>, it is time to outgrow the system causing it.
                        </h2>
                    </FadeIn>
                    <FadeIn>
                        <p className="mt-7 text-lg md:text-xl text-secondary-text leading-relaxed max-w-3xl mx-auto">
                            Shop Titan was built for production shops that need <Pw>clearer job ownership</Pw>, <Pw>fewer interruptions</Pw>, <Pw>better visibility</Pw>, and <Pw>less owner dependency</Pw>.
                        </p>
                    </FadeIn>
                    <FadeIn className="mt-10 flex justify-center">
                        <PrimaryCTA>Book a Shop Titan Demo</PrimaryCTA>
                    </FadeIn>
                    <FadeIn>
                        <p className="mt-10 text-sm text-secondary-text/60 font-mono uppercase tracking-[0.22em]">
                            Built for decorators, print shops, embroidery shops, and custom merch teams that need real operational clarity.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ───── FOOTER ───── */}
            <footer className="border-t border-structural-border py-12">
                <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <p className="text-lg font-bold tracking-tight text-charcoal">
                        Shop <span className="text-primary">Titan</span>
                    </p>
                    <p className="text-xs font-mono uppercase tracking-[0.22em] text-secondary-text/60">
                        Test page / removable
                    </p>
                </div>
            </footer>
        </>
    );
}
