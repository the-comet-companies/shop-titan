"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import CTAButton from "./CTAButton";
import { Eyebrow, SectionWrap, FadeIn, Em, fadeUp, stagger } from "./primitives";

const PAIN_RECOGNITION = [
    "Orders are in one place.",
    "Artwork is somewhere else.",
    "Approvals are buried in email.",
    "Scheduling lives on a whiteboard.",
    "Pricing depends on who quoted it.",
    "Inventory gets checked too late.",
    "Production keeps asking for updates.",
    "The owner keeps becoming the answer.",
];

const REAL_PROBLEM_QUESTIONS = [
    "What was approved?",
    "Which art file is correct?",
    "Is inventory ready?",
    "Who owns the next step?",
    "What is blocked?",
    "What is late?",
    "What is profitable?",
    "What needs the owner?",
];

const FEATURES = [
    { icon: "hub", title: "Centralized job records", body: "Every order, art file, approval, and note lives on one record from quote to ship." },
    { icon: "approval", title: "Artwork & approval tracking", body: "Version control on art files. Approvals are timestamped and tied to the job." },
    { icon: "schedule", title: "Production scheduling", body: "Plan by department and machine instead of by memory and whiteboard.", linkLabel: "Read deep-dive", linkHref: "/get-started/scheduling" },
    { icon: "groups", title: "Department queues", body: "Art, screen, embroidery, DTF, finishing - each crew sees only what is theirs." },
    { icon: "inventory_2", title: "Inventory awareness", body: "Surface blank shortages before the job hits the press, not the morning of." },
    { icon: "payments", title: "Pricing visibility", body: "Quotes, margins, and changes stay attached to the order - no one-off math." },
    { icon: "track_changes", title: "Job status tracking", body: "Every job has one current status. The owner stops being the source of truth." },
    { icon: "report", title: "Reprint & exception tracking", body: "Catch what went wrong, who owns it, and what it cost - across every job." },
    { icon: "insights", title: "Owner-level reporting", body: "Throughput, on-time rate, bottlenecks, profitability - without the spreadsheet." },
];

const BEFORE = [
    "Whiteboards",
    "Spreadsheets",
    "Emails",
    "Verbal updates",
    "Lost artwork",
    "Manual scheduling",
    "Unclear approvals",
    "Surprise inventory issues",
    "Constant owner interruptions",
];

const AFTER = [
    "One job record",
    "Clear production status",
    "Connected artwork",
    "Tracked approvals",
    "Visible department queues",
    "Better scheduling clarity",
    "Earlier inventory visibility",
    "Fewer interruptions",
    "More owner control",
];

const EXPERIENCE = [
    "What is ready.",
    "What is blocked.",
    "What is late.",
    "What is waiting on approval.",
    "What is missing inventory.",
    "What is in production.",
    "What is done.",
    "What needs attention.",
];

const FOR_LIST = [
    "Your shop is growing.",
    "Your team is asking too many status questions.",
    "Your schedule keeps changing.",
    "Your owner is still the bottleneck.",
    "Your approvals are hard to track.",
    "Your production meetings are too reactive.",
    "Your systems are patched together.",
    "You know you need more structure before scaling further.",
];

const NOT_FOR_LIST = [
    "Shops that want a generic project management tool.",
    "Shops that want another spreadsheet.",
    "Shops that are not ready to improve their process.",
    "Shops that want to keep every decision in the owner's head.",
    "Shops that are fine with daily production chaos.",
];

const FAQS = [
    {
        q: "Is this just project management software?",
        a: "No. Generic project management tools are not built around decoration production, approvals, art files, job status, inventory dependencies, rush jobs, and department handoffs.",
    },
    {
        q: "Can this help if we already use spreadsheets?",
        a: "Yes. Shop Titan is designed for shops that have outgrown spreadsheets but still rely on them because nothing has replaced the full workflow.",
    },
    {
        q: "Is this only for large shops?",
        a: "No. It is for shops that are growing or already feeling the pain of disconnected systems, unclear scheduling, and too much owner dependency.",
    },
    {
        q: "Does every button go to the same form?",
        a: "Yes. Every CTA on this page leads to the same demo request. One path. One conversation. No funnels.",
    },
];

export default function HomeContent() {
    return (
        <>
            {/* ───── 1. HERO ───── */}
            <section className="relative pt-12 md:pt-20 pb-12 md:pb-16 overflow-hidden">
                <div className="max-w-container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={stagger}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div variants={fadeUp} className="mb-6">
                            <Eyebrow>Production operating system</Eyebrow>
                        </motion.div>
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-charcoal"
                        >
                            Your shop is not <Em>chaotic</Em> because your team is bad. It is <Em>chaotic</Em> because your system is broken.
                        </motion.h1>
                        <motion.p
                            variants={fadeUp}
                            className="mt-7 text-lg md:text-xl text-secondary-text leading-relaxed max-w-3xl mx-auto"
                        >
                            Shop Titan gives growing production shops one operating system for orders, artwork, approvals, pricing, scheduling, inventory, job status, and reporting - so your team can stop guessing and start running production with control.
                        </motion.p>
                        <motion.div
                            variants={fadeUp}
                            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
                        >
                            <CTAButton label="Book a Demo" variant="primary" />
                            <CTAButton label="See Shop Titan in Action" variant="secondary" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ───── 2. DEMO INTRO ───── */}
            <section className="pb-24 md:pb-32">
                <div className="max-w-container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                        className="text-center mb-8"
                    >
                        <motion.div variants={fadeUp}>
                            <Eyebrow>No generic sales deck. See the actual workflow built for production shops.</Eyebrow>
                        </motion.div>
                    </motion.div>
                    <FadeIn className="relative rounded-lg overflow-hidden border border-structural-border shadow-2xl shadow-primary/10 bg-surface">
                        <Image
                            src="/dashboard-hero.png"
                            alt="Shop Titan production operating system dashboard"
                            width={1680}
                            height={920}
                            priority
                            className="w-full h-auto"
                        />
                    </FadeIn>
                </div>
            </section>

            {/* ───── 3. PAIN RECOGNITION ───── */}
            <SectionWrap>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Pattern interrupt</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        Sound familiar
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-lg md:text-xl text-secondary-text leading-relaxed">
                        If this feels normal, your shop has already <Em>outgrown</Em> its system.
                    </FadeIn>
                </div>

                <motion.ol
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={stagger}
                    className="mt-12 grid gap-px bg-structural-border border border-structural-border rounded-lg overflow-hidden md:grid-cols-2"
                >
                    {PAIN_RECOGNITION.map((item, i) => (
                        <motion.li
                            key={item}
                            variants={fadeUp}
                            className="bg-surface p-6 flex items-start gap-4"
                        >
                            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary-text pt-1 flex-shrink-0 w-6">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-base md:text-lg text-charcoal leading-relaxed">{item}</span>
                        </motion.li>
                    ))}
                </motion.ol>

                <FadeIn className="mt-12">
                    <CTAButton label="See Shop Titan in Action" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 4. ORIGIN STORY ───── */}
            <SectionWrap className="bg-surface">
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>The slow break</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        The slow break
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-lg md:text-xl text-secondary-text leading-relaxed">
                        This is how production chaos usually starts.
                    </FadeIn>
                </div>

                <FadeIn className="mt-10 max-w-3xl space-y-5 text-base md:text-lg text-secondary-text leading-relaxed">
                    <p>At first, the whiteboard works. The spreadsheet is fine. The owner remembers every detail. The team can just ask each other.</p>
                    <p>Then order volume grows. More jobs. More rush orders. More art changes. More approvals. More blanks. More departments. More handoffs. More questions.</p>
                    <p className="text-charcoal font-semibold">
                        And suddenly, the same system that helped the shop get started becomes the thing <Em>holding it back</Em>.
                    </p>
                </FadeIn>

                <FadeIn className="mt-12">
                    <CTAButton label="Book a Demo" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 5. CORE PROBLEM ───── */}
            <SectionWrap>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Diagnosis</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        The real problem
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-lg md:text-xl text-secondary-text leading-relaxed">
                        The real problem is not printing. It is managing <Em>complexity</Em>.
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                        Most shops are good at production. They know how to print, how to embroider, how to decorate apparel. The problem is the work around the work.
                    </FadeIn>
                </div>

                <motion.ol
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={stagger}
                    className="mt-12 grid gap-px bg-structural-border border border-structural-border rounded-lg overflow-hidden md:grid-cols-2"
                >
                    {REAL_PROBLEM_QUESTIONS.map((q, i) => (
                        <motion.li key={q} variants={fadeUp} className="bg-surface p-6 flex items-start gap-4">
                            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary-text pt-1 flex-shrink-0 w-6">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-base md:text-lg text-charcoal leading-relaxed">{q}</span>
                        </motion.li>
                    ))}
                </motion.ol>

                <FadeIn className="mt-12">
                    <CTAButton label="Request a Walkthrough" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 6. SOLUTION INTRO ───── */}
            <SectionWrap className="bg-surface">
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>New mechanism</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        The new way
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-lg md:text-xl text-secondary-text leading-relaxed">
                        The new way to run a production shop: one connected operating system.
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                        Shop Titan replaces scattered workflows with one connected production system. Instead of managing orders, art, approvals, notes, POs, inventory, scheduling, and reporting in separate places, your team works from one connected job record.
                    </FadeIn>
                </div>
            </SectionWrap>

            {/* ───── 7. FEATURE GRID ───── */}
            <SectionWrap>
                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                    className="grid gap-px bg-structural-border border border-structural-border rounded-lg overflow-hidden md:grid-cols-2 lg:grid-cols-3"
                >
                    {FEATURES.map((f) => (
                        <motion.li key={f.title} variants={fadeUp} className="bg-surface p-6 md:p-7 flex flex-col">
                            <span
                                className="material-symbols-outlined text-primary text-3xl mb-4"
                                style={{ fontVariationSettings: "'wght' 300" }}
                                aria-hidden
                            >
                                {f.icon}
                            </span>
                            <h3 className="text-lg font-bold tracking-tight text-charcoal leading-tight">{f.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-secondary-text">{f.body}</p>
                            {f.linkLabel && f.linkHref && (
                                <a
                                    href={f.linkHref}
                                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                                >
                                    {f.linkLabel}
                                    <span className="material-symbols-outlined text-base" aria-hidden>arrow_forward</span>
                                </a>
                            )}
                        </motion.li>
                    ))}
                </motion.ul>

                <FadeIn className="mt-12">
                    <CTAButton label="See Shop Titan in Action" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 8. BEFORE / AFTER ───── */}
            <SectionWrap className="bg-surface">
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Before / After</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        Before / After
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-lg md:text-xl text-secondary-text leading-relaxed">
                        Before Shop Titan vs. after Shop Titan.
                    </FadeIn>
                </div>

                <div className="mt-12 grid gap-px bg-structural-border border border-structural-border rounded-lg overflow-hidden md:grid-cols-2">
                    {/* Before */}
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

                    {/* After Shop Titan */}
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

            {/* ───── 9. EXPERIENCE STATEMENT ───── */}
            <SectionWrap>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>What it feels like</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        What it feels like
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-lg md:text-xl text-secondary-text leading-relaxed">
                        Imagine opening one system and actually knowing what is happening.
                    </FadeIn>
                </div>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={stagger}
                    className="mt-12 grid gap-3 md:grid-cols-2"
                >
                    {EXPERIENCE.map((item) => (
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
                    No walking the floor. No chasing three people. No digging through emails. No guessing from memory.
                </FadeIn>

                <FadeIn className="mt-10">
                    <CTAButton label="Get the Production System" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 10. WHO THIS IS FOR ───── */}
            <SectionWrap className="bg-surface">
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Who this is for</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        Who this is for
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-lg md:text-xl text-secondary-text leading-relaxed">
                        Shop Titan is built for shops that are past the &ldquo;just wing it&rdquo; stage.
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-base text-secondary-text font-medium">
                        This is for you if:
                    </FadeIn>
                </div>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={stagger}
                    className="mt-10 grid gap-3 md:grid-cols-2"
                >
                    {FOR_LIST.map((item) => (
                        <motion.li
                            key={item}
                            variants={fadeUp}
                            className="flex items-start gap-3 rounded-lg border border-structural-border bg-background-light/40 p-4"
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

                <FadeIn className="mt-12">
                    <CTAButton label="Book a Demo" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 11. WHO THIS IS NOT FOR ───── */}
            <SectionWrap>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Who this is not for</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        Who this is not for
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-lg md:text-xl text-secondary-text leading-relaxed">
                        This is not for shops that want another basic task board.
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-base text-secondary-text font-medium">
                        Shop Titan is not for:
                    </FadeIn>
                </div>

                <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={stagger}
                    className="mt-10 grid gap-3 md:grid-cols-2"
                >
                    {NOT_FOR_LIST.map((item) => (
                        <motion.li
                            key={item}
                            variants={fadeUp}
                            className="flex items-start gap-3 rounded-lg border border-structural-border bg-surface p-4"
                        >
                            <span
                                className="material-symbols-outlined text-secondary-text text-xl flex-shrink-0"
                                style={{ fontVariationSettings: "'wght' 300" }}
                                aria-hidden
                            >
                                close
                            </span>
                            <span className="text-base text-secondary-text leading-relaxed">{item}</span>
                        </motion.li>
                    ))}
                </motion.ul>

                <FadeIn className="mt-12">
                    <CTAButton label="See Shop Titan in Action" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 12. WHY WE BUILT THIS ───── */}
            <SectionWrap className="bg-surface">
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Why we built this</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        Why we built this
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-lg md:text-xl text-secondary-text leading-relaxed">
                        Built from real production pressure.
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                        Shop Titan was not built as a generic SaaS idea. It was built from the pressure of running real decoration production, where one missed detail can delay a job, trigger a reprint, frustrate a customer, and cut into margin. This is software built around how production actually breaks.
                    </FadeIn>
                </div>

                <FadeIn className="mt-12">
                    <CTAButton label="Request a Walkthrough" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 13. FAQ ───── */}
            <SectionWrap>
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Common questions</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        Common questions
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-lg md:text-xl text-secondary-text leading-relaxed">
                        Common questions before you see it.
                    </FadeIn>
                </div>

                <motion.dl
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={stagger}
                    className="mt-12 max-w-3xl divide-y divide-structural-border border-t border-b border-structural-border"
                >
                    {FAQS.map((f) => (
                        <motion.div key={f.q} variants={fadeUp} className="py-6">
                            <dt className="text-lg md:text-xl font-bold tracking-tight text-charcoal mb-2">{f.q}</dt>
                            <dd className="text-base md:text-lg text-secondary-text leading-relaxed">{f.a}</dd>
                        </motion.div>
                    ))}
                </motion.dl>

                <FadeIn className="mt-12">
                    <CTAButton label="Book a Demo" variant="primary" />
                </FadeIn>
            </SectionWrap>

            {/* ───── 14. CLOSING ARGUMENT ───── */}
            <SectionWrap className="bg-surface">
                <div className="max-w-3xl">
                    <FadeIn className="mb-5">
                        <Eyebrow>Last thing</Eyebrow>
                    </FadeIn>
                    <FadeIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal">
                        Last thing
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-lg md:text-xl text-secondary-text leading-relaxed">
                        Your shop can keep growing. But your current system may not survive it.
                    </FadeIn>
                    <FadeIn as="p" className="mt-5 text-base md:text-lg text-secondary-text leading-relaxed">
                        If your team is already relying on whiteboards, spreadsheets, emails, memory, and constant interruptions, the problem will not get smaller as volume grows. Shop Titan gives you the structure to scale with more clarity, more control, and less chaos.
                    </FadeIn>
                </div>

                <FadeIn className="mt-10 flex flex-col sm:flex-row gap-3">
                    <CTAButton label="Book a Demo" variant="primary" />
                    <CTAButton label="See Shop Titan in Action" variant="secondary" />
                </FadeIn>
            </SectionWrap>

            <Footer />
        </>
    );
}
