import type { Metadata } from "next";
import { CTAButton } from "./_components/CTAButton";
import { Footer } from "./_components/Footer";
import { GradientText } from "./_components/GradientText";
import { Icon } from "./_components/Icon";
import { Nav } from "./_components/Nav";
import { ProductionScheduleDashboard } from "./_components/ProductionScheduleDashboard";
import { Reveal } from "./_components/Reveal";
import { Section } from "./_components/Section";
import { SectionHeading } from "./_components/SectionHeading";
import {
  WorkflowStepper,
  type WorkflowStep,
} from "./_components/WorkflowStepper";
import { BrokenSystemMap } from "./_components/infographics/BrokenSystemMap";
import { MorningInterruptionStack } from "./_components/infographics/MorningInterruptionStack";
import { GrowthPressureScale } from "./_components/infographics/GrowthPressureScale";
import { OwnerAsOperatingSystem } from "./_components/infographics/OwnerAsOperatingSystem";
import { OneJobSixPlaces } from "./_components/infographics/OneJobSixPlaces";
import { ToolFragmentationCards } from "./_components/infographics/ToolFragmentationCards";
import { HandoffRepairMap } from "./_components/infographics/HandoffRepairMap";
import { ChaosToControlComparison } from "./_components/infographics/ChaosToControlComparison";
import { ProofDashboard } from "./_components/infographics/ProofDashboard";
import { ClarityState } from "./_components/infographics/ClarityState";
import { DailyOrderSnapshot } from "./_components/infographics/DailyOrderSnapshot";

export const metadata: Metadata = {
  title:
    "Your shop is not chaotic because your team is bad. It is chaotic because your system is broken. Shop Titan",
  description:
    "Shop Titan is the connected production operating system for growing print and decoration shops. Orders, artwork, approvals, scheduling, inventory, and job status in one workflow.",
  robots: { index: true, follow: true },
};

// Pre-emphasized React nodes for the pain stack
const painStackNodes: React.ReactNode[] = [
  <>
    New orders come in before yesterday's jobs are{" "}
    <span className="pain-em">fully updated</span>.
  </>,
  <>
    Someone is asking which art file is the{" "}
    <span className="pain-em">final one</span>. Again.
  </>,
  <>
    The approval exists, but{" "}
    <span className="pain-em">nobody knows</span> where it is.
  </>,
  <>
    The whiteboard changed, but{" "}
    <span className="pain-em">not everyone got the memo</span>.
  </>,
  <>
    Blanks are <span className="pain-em">missing</span> after the job is already
    supposed to move.
  </>,
  <>
    <span className="pain-em">Production keeps stopping</span> to ask what is
    next.
  </>,
  <>
    Sales wants an update, but the answer is{" "}
    <span className="pain-em">still in someone's head</span>.
  </>,
  <>
    The <span className="pain-em">owner gets pulled in</span> because no one
    fully trusts the system.
  </>,
];

const dailyDragLines: React.ReactNode[] = [
  <>
    The job status changed, but{" "}
    <span className="pain-em">only one person knows</span>.
  </>,
  <>
    The customer approved the artwork, but{" "}
    <span className="pain-em">production has not seen it</span>.
  </>,
  <>
    The blanks arrived, but{" "}
    <span className="pain-em">nobody updated the order</span>.
  </>,
  <>
    The rush job moved up, but the{" "}
    <span className="pain-em">schedule did not</span>.
  </>,
  <>
    The sales team promised a date, but production{" "}
    <span className="pain-em">never saw the note</span>.
  </>,
  <>
    The owner knows what is blocked, but the{" "}
    <span className="pain-em">team is still guessing</span>.
  </>,
  <>
    The shop is busy, but{" "}
    <span className="pain-em">nobody has a clean view</span> of what is actually
    happening.
  </>,
];

const ownerKnowsLines: React.ReactNode[] = [
  <>They know which customer is sensitive.</>,
  <>They know which jobs are hot.</>,
  <>They know which approval came in late.</>,
  <>They know which department is behind.</>,
  <>They know who needs to be pushed.</>,
  <>
    They know what is{" "}
    <span className="pain-em">about to go wrong</span>.
  </>,
];

const workflowSteps: WorkflowStep[] = [
  {
    index: "1",
    icon: "receipt_long",
    h: "Order details",
  },
  {
    index: "2",
    icon: "palette",
    h: "Artwork",
  },
  {
    index: "3",
    icon: "approval",
    h: "Approval",
  },
  {
    index: "4",
    icon: "inventory_2",
    h: "Inventory",
  },
  {
    index: "5",
    icon: "view_kanban",
    h: "Production",
  },
  {
    index: "6",
    icon: "auto_awesome",
    h: "Finishing",
  },
  {
    index: "7",
    icon: "local_shipping",
    h: "Shipping",
  },
];

const breakdownChips = [
  "Missing approval",
  "Wrong art file",
  "No inventory",
  "Unclear status",
  "No department owner",
  "Late update",
];

const productModules = [
  { icon: "receipt_long", h: "Orders" },
  { icon: "palette", h: "Artwork" },
  { icon: "approval", h: "Approvals" },
  { icon: "calendar_month", h: "Scheduling" },
  { icon: "inventory_2", h: "Inventory" },
  { icon: "view_kanban", h: "Production Queues" },
  { icon: "auto_awesome", h: "Finishing" },
  { icon: "local_shipping", h: "Shipping" },
  { icon: "monitoring", h: "Reporting" },
];

type PainFix = {
  pain: string;
  fix: React.ReactNode;
};

const painFixCards: PainFix[] = [
  {
    pain: "Which art file is correct?",
    fix: <>Artwork version control and approvals tied to the job.</>,
  },
  {
    pain: "Where is this order right now?",
    fix: (
      <>
        One current job status{" "}
        <span className="pain-em">visible</span> to the team.
      </>
    ),
  },
  {
    pain: "What is production working on next?",
    fix: (
      <>
        Department queues for art, screen print, embroidery, DTF, finishing, and
        shipping.
      </>
    ),
  },
  {
    pain: "Why did we find out inventory was missing today?",
    fix: (
      <>
        Inventory visibility{" "}
        <span className="pain-em">before the job hits production</span>.
      </>
    ),
  },
  {
    pain: "Why does every quote feel different?",
    fix: <>Pricing and margin visibility attached to the order.</>,
  },
  {
    pain: "Why does everything come back to the owner?",
    fix: (
      <>
        Owner-level reporting{" "}
        <span className="pain-em">
          without the owner being the source of truth
        </span>
        .
      </>
    ),
  },
];

const youKnowLines = [
  "You know what is ready.",
  "You know what is blocked.",
  "You know what is waiting on approval.",
  "You know what is missing inventory.",
  "You know what is late.",
  "You know what is moving today.",
  "You know which department is overloaded.",
  "You know what needs your decision and what does not.",
];

const noThisLines = [
  "No walking the floor.",
  "No chasing three people.",
  "No digging through emails.",
  "No relying on memory.",
  "No wondering what slipped.",
];

const forYou = [
  "Your shop is growing.",
  "Your team is asking too many status questions.",
  "Your schedule keeps changing.",
  "Your owner is still the bottleneck.",
  "Your approvals are hard to track.",
  "Your production meetings are too reactive.",
  "Your systems are patched together.",
  "You know you need more structure before scaling further.",
];

const notForYou = [
  "Shops that want a generic project management tool.",
  "Shops that want another spreadsheet.",
  "Shops that are not ready to improve their process.",
  "Shops that want to keep every decision in the owner's head.",
  "Shops that are fine with daily production chaos.",
];

const faqs = [
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

export default function TestPromptPage() {
  return (
    <>
      <Nav />
      <main>
        {/* 1. Hero pain hook */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-24 bg-background-light">
          <div className="container-app">
            <div className="mx-auto flex max-w-4xl flex-col items-start gap-7">
              <Reveal delay={0.05}>
                <h1 className="text-balance font-bold tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-[68px] text-charcoal">
                  Your shop is not{" "}
                  <span className="pain-em">chaotic</span> because your team is
                  bad.
                  <br className="hidden md:block" />
                  It is chaotic because your{" "}
                  <GradientText underline>system is broken</GradientText>.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-pretty text-[17px] md:text-[18px] leading-[1.65] text-secondary-text max-w-2xl">
                  Orders live in one place. Artwork lives somewhere else.
                  Approvals are{" "}
                  <span className="pain-em">buried in email</span>. Scheduling
                  is on a whiteboard. Inventory gets checked{" "}
                  <span className="pain-em">too late</span>. And somehow, the{" "}
                  <span className="pain-em">owner</span> is still the person
                  everyone goes to for the answer.
                </p>
              </Reveal>

              <Reveal delay={0.13}>
                <p className="text-[17px] md:text-[18px] text-charcoal font-medium tracking-tight max-w-2xl">
                  That is not a team problem. That is a system problem.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  <CTAButton label="Book a Demo" size="lg" />
                  <CTAButton
                    label="See Shop Titan in Action"
                    variant="secondary"
                    size="lg"
                  />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.25} className="mt-20 md:mt-24">
              <div className="rounded-2xl border border-structural-border bg-white shadow-card overflow-hidden">
                {/* Browser-style chrome */}
                <div className="flex items-center justify-between border-b border-structural-border bg-background-light/50 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-structural-border" />
                    <span className="h-1.5 w-1.5 rounded-full bg-structural-border" />
                    <span className="h-1.5 w-1.5 rounded-full bg-structural-border" />
                  </div>
                  <span className="font-mono uppercase tracking-[0.22em] text-[10px] text-secondary-text">
                    shoptitan.app / support-hub / transfers
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.18em] text-[10px] text-secondary-text">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/filemaker/transfer%26firm.gif"
                  alt="Shop Titan Support Hub — transfer batch processing showing real production jobs, artwork files, and live status flags"
                  className="block w-full h-auto"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 2. Scrolling pain stack */}
        <Section tone="stone">
          <SectionHeading
            eyebrow="Sound familiar"
            headline={
              <>
                Does your shop feel like this{" "}
                <span className="pain-em">by 10 AM</span>?
              </>
            }
          />

          <Reveal delay={0.15} className="mt-14">
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-structural-border">
              {painStackNodes.map((node, i) => (
                <li
                  key={i}
                  className="border-r border-b border-structural-border bg-white p-6 flex flex-col gap-3 min-h-[180px]"
                >
                  <span className="font-mono text-[11px] text-secondary-text tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] md:text-[15.5px] text-charcoal leading-snug tracking-tight">
                    {node}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <CTAButton label="Book a Demo" />
          </Reveal>

          <Reveal delay={0.15} className="mt-12 md:mt-16">
            <MorningInterruptionStack />
          </Reveal>

          <Reveal
            delay={0.2}
            className="mt-12 text-[17px] md:text-[18px] text-charcoal max-w-2xl leading-[1.65]"
          >
            <p>
              If this feels familiar, the problem is not your team. It is the
              way the shop is being{" "}
              <span className="pain-em">forced to run</span>.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 md:mt-16">
            <BrokenSystemMap />
          </Reveal>

          <Reveal delay={0.25} className="mt-10">
            <CTAButton label="See Shop Titan in Action" />
          </Reveal>
        </Section>

        {/* 3. Keep hitting the pain */}
        <Section>
          <SectionHeading
            eyebrow="The daily drag"
            headline={<>And it does not stop there.</>}
          />

          <Reveal delay={0.15} className="mt-14 max-w-3xl">
            <ul className="border-t border-structural-border">
              {dailyDragLines.map((line, i) => (
                <li
                  key={i}
                  className="flex items-start gap-5 border-b border-structural-border py-5"
                >
                  <span className="font-mono text-[11px] text-secondary-text tabular-nums mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] md:text-[17px] text-charcoal tracking-tight leading-snug">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-12 max-w-2xl">
            <p className="text-[17px] md:text-[18px] text-charcoal leading-[1.6]">
              That is how shops get stuck in{" "}
              <span className="pain-em">reactive mode</span>.
            </p>
          </Reveal>
        </Section>

        {/* 4. The chaos compounds as you grow */}
        <Section tone="stone">
          <SectionHeading
            eyebrow="The slow break"
            headline={
              <>
                What worked at 20 orders{" "}
                <GradientText underline>breaks at 200</GradientText>.
              </>
            }
            intro={
              <>
                A small shop can survive on{" "}
                <span className="pain-em">memory</span>, quick conversations,
                and a whiteboard. But as order volume grows, every{" "}
                <span className="pain-em">missing update</span> creates another
                interruption. Every{" "}
                <span className="pain-em">unclear handoff</span> creates another
                delay. Every{" "}
                <span className="pain-em">buried approval</span> creates another
                risk.
              </>
            }
          />

          <Reveal delay={0.15} className="mt-12 md:mt-16">
            <GrowthPressureScale />
          </Reveal>

          <Reveal delay={0.2} className="mt-12 max-w-2xl">
            <p className="text-[17px] md:text-[18px] text-charcoal leading-[1.65]">
              Growth does not create chaos. Growth exposes the{" "}
              <span className="pain-em">system gaps</span> that were already
              there.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-10">
            <CTAButton label="Book a Demo" />
          </Reveal>
        </Section>

        {/* 5. Owner dependency */}
        <Section>
          <SectionHeading
            eyebrow="Owner dependency"
            headline={
              <>
                The <span className="pain-em">owner</span> should not have to be
                the operating system.
              </>
            }
            intro={
              <>
                Not because the owner wants to be involved in everything.
                Because the{" "}
                <span className="pain-em">system still depends on them</span>.
              </>
            }
          />

          <Reveal delay={0.15} className="mt-14 max-w-3xl">
            <ul className="border-t border-structural-border">
              {ownerKnowsLines.map((line, i) => (
                <li
                  key={i}
                  className="flex items-start gap-5 border-b border-structural-border py-4"
                >
                  <span className="font-mono text-[11px] text-secondary-text tabular-nums mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] md:text-[17px] text-charcoal tracking-tight leading-snug">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 md:mt-16">
            <OwnerAsOperatingSystem />
          </Reveal>

          <Reveal delay={0.2} className="mt-12 max-w-2xl">
            <p className="text-[17px] md:text-[18px] text-charcoal leading-[1.65]">
              And that works until the shop grows. Then the{" "}
              <GradientText underline>owner becomes the system</GradientText>.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-10">
            <CTAButton label="Get the Production System" />
          </Reveal>
        </Section>

        {/* 6. The real problem */}
        <Section tone="stone">
          <SectionHeading
            eyebrow="The real problem"
            headline={
              <>
                Your shop is{" "}
                <span className="pain-em">not disorganized</span>. Your{" "}
                <GradientText underline>information is</GradientText>.
              </>
            }
            intro={
              <>
                Most production problems are not caused by lazy people, bad
                teams, or lack of effort. They happen because the information
                needed to move a job forward is{" "}
                <span className="pain-em">scattered</span> across too many{" "}
                <span className="pain-em">disconnected places</span>.
              </>
            }
          />

          <Reveal delay={0.15} className="mt-16">
            <WorkflowStepper steps={workflowSteps} />
          </Reveal>

          <Reveal delay={0.2} className="mt-16">
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-secondary-text mb-4">
              Where it breaks
            </div>
            <div className="flex flex-wrap gap-2.5">
              {breakdownChips.map((c) => (
                <span
                  key={c}
                  className="chip chip-strong inline-flex items-center gap-2"
                >
                  <span className="status-dot bg-primary" />
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 md:mt-16">
            <OneJobSixPlaces />
          </Reveal>

          <Reveal delay={0.25} className="mt-12">
            <CTAButton label="Request a Walkthrough" />
          </Reveal>
        </Section>

        {/* 7. False solutions */}
        <Section>
          <SectionHeading
            eyebrow="Why generic tools fail"
            headline={
              <>
                Whiteboards, spreadsheets, and generic task boards were{" "}
                <span className="pain-em">not built for production shops</span>.
              </>
            }
          />

          <Reveal delay={0.15} className="mt-12 md:mt-16">
            <ToolFragmentationCards />
          </Reveal>

          <Reveal delay={0.2} className="mt-12 max-w-2xl">
            <p className="text-[17px] md:text-[18px] text-charcoal leading-[1.65]">
              You do not need another place to type notes. You need a system
              that understands how production actually moves.
            </p>
          </Reveal>
        </Section>

        {/* 8. Product reveal */}
        <Section tone="stone">
          <SectionHeading
            eyebrow="The new way"
            headline={
              <>
                Shop Titan gives production shops{" "}
                <span className="text-primary font-semibold">
                  one connected operating system
                </span>
                .
              </>
            }
            intro={
              <>
                Every order, art file, approval, note, schedule, inventory
                issue, department queue, and job status lives in{" "}
                <span className="text-primary font-semibold">
                  one connected workflow
                </span>{" "}
                so your team can move{" "}
                <span className="pain-em">without guessing</span>,{" "}
                <span className="pain-em">without chasing</span>, or{" "}
                <span className="pain-em">
                  without constantly asking the owner
                </span>
                .
              </>
            }
          />

          <Reveal delay={0.15} className="mt-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 border-t border-l border-structural-border">
              {productModules.map((m) => (
                <div
                  key={m.h}
                  className="border-r border-b border-structural-border bg-white p-7 flex flex-col gap-4 min-h-[150px]"
                >
                  <Icon
                    name={m.icon}
                    size={22}
                    weight={300}
                    className="text-charcoal"
                  />
                  <h3 className="text-[16px] font-semibold tracking-tight text-charcoal">
                    {m.h}
                  </h3>
                  <span className="status-dot bg-primary mt-auto" />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <CTAButton label="See Shop Titan in Action" />
          </Reveal>
        </Section>

        {/* 9. Pain-to-solution cards */}
        <Section>
          <SectionHeading
            headline={
              <>
                Every painful handoff gets a{" "}
                <span className="pain-em">place</span>, an{" "}
                <span className="pain-em">owner</span>, and a{" "}
                <span className="pain-em">status</span>.
              </>
            }
          />

          <Reveal delay={0.15} className="mt-14">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-structural-border">
              {painFixCards.map((c) => (
                <div
                  key={c.pain}
                  className="border-r border-b border-structural-border bg-white p-7 flex flex-col gap-5"
                >
                  <div>
                    <div className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-secondary-text mb-2">
                      Pain
                    </div>
                    <p className="text-[16px] text-charcoal font-medium tracking-tight leading-snug">
                      {c.pain}
                    </p>
                  </div>
                  <div className="border-t border-structural-border pt-5">
                    <div className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-primary mb-2">
                      Fix
                    </div>
                    <p className="text-[14.5px] text-charcoal leading-relaxed">
                      {c.fix}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 md:mt-16">
            <HandoffRepairMap />
          </Reveal>
        </Section>

        {/* 10. Before and after */}
        <Section tone="stone">
          <SectionHeading
            headline={
              <>
                Before Shop Titan vs.{" "}
                <GradientText underline>after Shop Titan</GradientText>.
              </>
            }
          />

          <Reveal delay={0.15} className="mt-12 md:mt-16">
            <ChaosToControlComparison />
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <CTAButton label="Book a Demo" />
          </Reveal>
        </Section>

        {/* 11. Dream outcome */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="What it feels like"
              align="center"
              headline={
                <>
                  Imagine opening one system and{" "}
                  <GradientText underline>knowing what is happening</GradientText>{" "}
                  before someone has to ask.
                </>
              }
            />

            <Reveal delay={0.1} className="mt-14 max-w-md mx-auto">
              <DailyOrderSnapshot />
            </Reveal>

            <Reveal delay={0.15} className="mt-14">
              <ul className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-structural-border">
                {youKnowLines.map((line) => (
                  <li
                    key={line}
                    className="flex items-center gap-3 border-r border-b border-structural-border bg-white px-5 py-4"
                  >
                    <Icon
                      name="check"
                      size={15}
                      weight={300}
                      className="text-primary"
                    />
                    <span className="text-[14.5px] md:text-[15.5px] text-charcoal tracking-tight">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="mt-12 md:mt-16">
              <ClarityState />
            </Reveal>

            <Reveal
              delay={0.2}
              className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-0 border-t border-l border-structural-border"
            >
              {noThisLines.map((s) => (
                <div
                  key={s}
                  className="border-r border-b border-structural-border px-4 py-5 text-[13px] text-secondary-text text-center bg-gray-100"
                >
                  {s}
                </div>
              ))}
            </Reveal>

            <Reveal
              delay={0.25}
              className="mt-14 text-center text-[18px] md:text-[20px] text-charcoal max-w-2xl mx-auto leading-[1.55]"
            >
              <p>
                The shop keeps moving{" "}
                <span className="pain-em">
                  without the owner having to manually hold it together
                </span>
                .
              </p>
            </Reveal>

            <div className="mt-12 flex justify-center">
              <CTAButton label="Get the Production System" size="lg" />
            </div>
          </div>
        </Section>

        {/* 11.5 Proof — DTLA Print scale */}
        <Section tone="default">
          <SectionHeading
            eyebrow="Built from real production scale"
            headline={
              <>
                DTLA Print runs <GradientText underline>real traffic</GradientText>.
                Shop Titan was built from that pressure.
              </>
            }
          />

          <Reveal delay={0.15} className="mt-12 md:mt-16">
            <ProofDashboard />
          </Reveal>
        </Section>

        {/* 12. Who this is for */}
        <Section tone="stone">
          <SectionHeading
            headline={
              <>
                Shop Titan is built for shops that are past the{" "}
                <span className="pain-em">&ldquo;just wing it&rdquo;</span>{" "}
                stage.
              </>
            }
            intro={<>This is for you if:</>}
          />

          <Reveal delay={0.15} className="mt-12">
            <ul className="grid sm:grid-cols-2 border-t border-l border-structural-border">
              {forYou.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-4 border-r border-b border-structural-border bg-white p-5"
                >
                  <Icon
                    name="check"
                    size={16}
                    weight={300}
                    className="text-primary mt-0.5"
                  />
                  <span className="text-[15px] text-charcoal leading-snug">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <CTAButton label="Book a Demo" />
          </Reveal>
        </Section>

        {/* 13. Who this is not for */}
        <Section>
          <SectionHeading
            headline={
              <>
                This is not for shops that want another{" "}
                <span className="pain-em">basic task board</span>.
              </>
            }
            intro={<>Shop Titan is not for:</>}
          />
          <Reveal delay={0.15} className="mt-12">
            <ul className="grid sm:grid-cols-2 border-t border-l border-structural-border">
              {notForYou.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-4 border-r border-b border-structural-border p-5"
                >
                  <Icon
                    name="close"
                    size={16}
                    weight={300}
                    className="text-secondary-text mt-0.5"
                  />
                  <span className="text-[15px] text-secondary-text leading-snug">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2} className="mt-12">
            <CTAButton label="See Shop Titan in Action" />
          </Reveal>
        </Section>

        {/* 14. Why we built this */}
        <Section tone="stone">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              align="center"
              headline={
                <>
                  Built from{" "}
                  <GradientText underline>
                    real production pressure
                  </GradientText>
                  .
                </>
              }
              intro={
                <>
                  Shop Titan was not built as a generic SaaS idea. It was built
                  from the pressure of running real decoration production, where
                  one missed detail can delay a job, trigger a reprint,
                  frustrate a customer, and cut into margin.
                </>
              }
            />
            <Reveal
              delay={0.15}
              className="mt-10 text-[17px] text-charcoal font-medium"
            >
              This is software built around how production actually breaks.
            </Reveal>
            <Reveal delay={0.2} className="mt-12 flex justify-center">
              <CTAButton label="Request a Walkthrough" />
            </Reveal>
          </div>
        </Section>

        {/* 15. Common questions */}
        <Section>
          <SectionHeading
            align="center"
            headline="Common questions before you see it."
          />
          <Reveal delay={0.15} className="mt-14 max-w-3xl mx-auto">
            <div className="border-t border-structural-border">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group border-b border-structural-border"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 list-none py-6 text-left hover:text-charcoal/80 transition-colors">
                    <span className="text-[17px] md:text-[18px] font-medium tracking-tight text-charcoal">
                      {f.q}
                    </span>
                    <Icon
                      name="add"
                      size={20}
                      weight={300}
                      className="text-secondary-text transition-transform duration-200 group-open:rotate-45"
                    />
                  </summary>
                  <div className="pb-6 -mt-1 text-[15.5px] text-secondary-text leading-[1.65] max-w-2xl">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2} className="mt-12 flex justify-center">
            <CTAButton label="Book a Demo" />
          </Reveal>
        </Section>

        {/* 16. Final CTA */}
        <section className="relative border-t border-structural-border bg-background-light">
          <div className="container-app py-32 md:py-40 text-center">
            <Reveal>
              <span className="inline-block text-[11px] font-mono uppercase tracking-[0.18em] text-secondary-text">
                Last thing
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 text-balance font-bold tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl text-charcoal max-w-4xl mx-auto">
                Your shop can keep growing. But your current system{" "}
                <span className="pain-em">may not survive it</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 text-pretty text-[17px] md:text-[18px] leading-[1.65] text-secondary-text max-w-2xl mx-auto">
                If your team is already relying on whiteboards, spreadsheets,
                emails, memory, and constant interruptions, the problem will not
                get smaller as volume grows. Shop Titan gives you the structure
                to scale with more clarity, more control, and less chaos.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <CTAButton label="Book a Demo" size="lg" />
                <CTAButton
                  label="See Shop Titan in Action"
                  variant="secondary"
                  size="lg"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
