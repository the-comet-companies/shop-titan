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
import { WorkflowStepper, type WorkflowStep } from "./_components/WorkflowStepper";

export const metadata: Metadata = {
  title: "Production Scheduling Software for Print & Decoration Shops — Shop Titan",
  description:
    "Shop Titan helps production shops manage scheduling, job status, department workload, blocked jobs, rush orders, inventory readiness, and production visibility from one connected system.",
  openGraph: {
    title: "Production Scheduling Software — Shop Titan",
    description:
      "Stop scheduling production from whiteboards, spreadsheets, and guesswork. See what is ready, what is blocked, and what is falling behind.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const painCards = [
  {
    icon: "edit_note",
    h: "Capacity blind spots",
    p: "A whiteboard can show what is planned, but it cannot show how much work each department can realistically handle.",
  },
  {
    icon: "table_chart",
    h: "Outdated Spreadsheets",
    p: "The second a job changes, a rush order comes in, or an approval gets delayed, the spreadsheet becomes unreliable.",
  },
  {
    icon: "record_voice_over",
    h: "Verbal chaos",
    p: "When scheduling depends on quick conversations, hallway updates, and memory, important details get missed.",
  },
  {
    icon: "bolt",
    h: "Rush job chaos",
    p: "One urgent order can shift the whole day, but most shops cannot clearly see the impact until production is already behind.",
  },
  {
    icon: "block",
    h: "Machine blind spots",
    p: "Jobs get scheduled before artwork is approved, blanks are ready, files are finalized, or production notes are complete.",
  },
  {
    icon: "stacked_bar_chart",
    h: "Hidden bottlenecks",
    p: "One department may be overloaded while another is waiting, but leadership does not see the imbalance in time.",
  },
  {
    icon: "precision_manufacturing",
    h: "Machine overload",
    p: "Owners and managers cannot always see which machines are booked, which are open, and where capacity is tightening.",
  },
  {
    icon: "notifications_active",
    h: "Status Chasing",
    p: "When job status is unclear, sales, art, production, shipping, and leadership all interrupt each other to find answers.",
  },
  {
    icon: "schedule",
    h: "Schedule risk",
    p: "Jobs that looked fine yesterday suddenly become urgent because the schedule did not show risk early enough.",
  },
  {
    icon: "shield_person",
    h: "Owner dependency",
    p: "When the schedule is unclear, everyone comes back to the owner or production manager to make the final call.",
  },
];

const teamImpact = [
  { team: "Sales", line: "cannot give confident customer updates." },
  { team: "Production", line: "does not know what should be next." },
  { team: "Purchasing", line: "does not know what needs to be rushed." },
  { team: "Art", line: "does not know what is holding up the floor." },
  { team: "Shipping", line: "gets surprised at the end." },
  { team: "The owner", line: "gets pulled into everything." },
];

const rootCauseBullets = [
  "Jobs scheduled before they are actually ready.",
  "Capacity decisions made from incomplete information.",
  "Rush orders added without understanding the impact.",
  "Machine conflicts discovered too late.",
  "Blocked jobs sitting in active queues.",
  "Owners making decisions from memory instead of data.",
];

const features = [
  {
    icon: "view_timeline",
    h: "Live production queue",
    p: "See which jobs are ready, in progress, blocked, delayed, completed, or waiting for the next department.",
  },
  {
    icon: "view_kanban",
    h: "Department-level visibility",
    p: "Give screen printing, embroidery, DTF, DTG, finishing, fulfillment, and shipping teams a clear view of their workload.",
  },
  {
    icon: "bolt",
    h: "Rush job impact",
    p: "Understand how rush jobs affect existing work before the whole schedule gets thrown off.",
  },
  {
    icon: "block",
    h: "Blocked job tracking",
    p: "Identify jobs that are waiting on artwork, approval, inventory, vendor items, production notes, or customer decisions.",
  },
  {
    icon: "precision_manufacturing",
    h: "Machine & capacity awareness",
    p: "Give managers a better view of where capacity is available and where bottlenecks are forming.",
  },
  {
    icon: "person_pin",
    h: "Clear task ownership",
    p: "Show who owns the next step so jobs do not sit in limbo.",
  },
  {
    icon: "event_busy",
    h: "Due date visibility",
    p: "See upcoming deadlines, late-risk jobs, and production priorities before they turn into emergencies.",
  },
  {
    icon: "link",
    h: "Connected job details",
    p: "Keep scheduling connected to the order, artwork, approvals, blanks, production notes, and customer requirements.",
  },
  {
    icon: "shield_person",
    h: "Less owner dependency",
    p: "Give the team a system they can run from instead of forcing every decision back to the owner.",
  },
];

const workflowSteps: WorkflowStep[] = [
  {
    index: "1",
    icon: "receipt_long",
    h: "Job created",
    p: "Order enters the system with customer details, due date, decoration method, and production requirements.",
  },
  {
    index: "2",
    icon: "approval",
    h: "Artwork & approval checked",
    p: "The system shows whether the job is ready or blocked by art, mockups, approvals, or revisions.",
  },
  {
    index: "3",
    icon: "inventory_2",
    h: "Inventory confirmed",
    p: "Blanks, materials, transfers, thread, screens, packaging, or vendor items are checked before production.",
  },
  {
    index: "4",
    icon: "view_kanban",
    h: "Production scheduled",
    p: "The job is assigned to the correct department, queue, machine, or production stage.",
  },
  {
    index: "5",
    icon: "track_changes",
    h: "Status updated",
    p: "The team updates where the job stands so everyone sees the latest production status.",
  },
  {
    index: "6",
    icon: "warning",
    h: "Bottlenecks identified",
    p: "Managers can see where work is stacking up, what is blocked, and what needs attention.",
  },
  {
    index: "7",
    icon: "check_circle",
    h: "Order completed",
    p: "The job moves through finishing, fulfillment, shipping, and final review.",
  },
];

const before = [
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

const after = [
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

const readinessChecks = [
  "Artwork approval",
  "Final mockup approval",
  "Correct blank inventory",
  "Vendor items",
  "Specialty materials",
  "Production notes",
  "Thread colors",
  "Ink colors",
  "Screens",
  "Transfers",
  "Labels",
  "Packaging",
  "Customer confirmation",
];

const industries = [
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

const ownerOutcomes = [
  "Fewer interruptions",
  "Clearer daily priorities",
  "Better department handoffs",
  "Less production guessing",
  "More visible bottlenecks",
  "Faster answers",
  "Less owner dependency",
  "More control as order volume grows",
];

const results = [
  {
    icon: "local_fire_department",
    h: "Fewer daily fire drills",
    p: "The team can see problems earlier instead of reacting after things are already late.",
  },
  {
    icon: "waves",
    h: "Cleaner production flow",
    p: "Jobs move through departments with clearer ownership and fewer missing details.",
  },
  {
    icon: "bolt",
    h: "Better rush job decisions",
    p: "Managers can understand the impact of rush work before committing to unrealistic timelines.",
  },
  {
    icon: "schedule",
    h: "Less wasted time",
    p: "Teams spend less time asking for updates and more time moving jobs forward.",
  },
  {
    icon: "stacked_bar_chart",
    h: "Earlier bottleneck detection",
    p: "Production leaders can see where work is stacking up before it delays everything else.",
  },
  {
    icon: "trending_up",
    h: "More scalable operations",
    p: "The shop can handle more jobs without relying on whiteboards, memory, and constant meetings.",
  },
];

export default function SchedulingPage() {
  return (
    <>
      <Nav />
      <main>
        {/* 1. Hero */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-24 bg-background-light dark:bg-background-dark">
          <div className="container-app">
            <div className="mx-auto flex max-w-4xl flex-col items-start gap-7">
              <Reveal>
                <span className="inline-block text-[11px] font-mono uppercase tracking-[0.18em] text-secondary-text dark:text-gray-500">
                  Production scheduling software
                </span>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-balance font-bold tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-[68px] text-charcoal dark:text-white">
                  Stop scheduling production from{" "}
                  <span className="pain-em">whiteboards, spreadsheets, and guesswork</span>.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-pretty text-[17px] md:text-[18px] leading-[1.65] text-secondary-text dark:text-gray-400 max-w-2xl">
                  Shop Titan helps growing production shops see job status,
                  department workload, rush impact, approvals, inventory
                  readiness, and production bottlenecks in one connected system.
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

              <Reveal delay={0.2}>
                <p className="text-[12.5px] text-secondary-text dark:text-gray-500 font-mono tracking-wide">
                  See the actual schedule view built for production shops.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.25} className="mt-20 md:mt-24">
              <ProductionScheduleDashboard />
            </Reveal>
          </div>
        </section>

        {/* 2. Pain */}
        <Section tone="stone">
          <SectionHeading
            index="01"
            eyebrow="The daily reality"
            headline={
              <>
                When scheduling is manual, every day starts with{" "}
                <span className="pain-em">confusion</span>.
              </>
            }
            intro={
              <>
                Most shops do not have a production problem. They have a{" "}
                <strong className="font-semibold text-charcoal dark:text-white">
                  scheduling visibility
                </strong>{" "}
                problem. The work is moving, but the schedule lives across
                whiteboards, spreadsheets, verbal updates, team memory, and
                last-minute changes — so no one can clearly see what is ready,
                what is waiting, what is blocked, or what needs attention now.
              </>
            }
          />

          <Reveal delay={0.15} className="mt-14">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-structural-border dark:border-gray-800">
              {painCards.map((c, i) => (
                <div
                  key={c.h}
                  className="border-r border-b border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 p-7"
                >
                  <div className="flex items-start justify-between mb-5">
                    <Icon
                      name={c.icon}
                      size={22}
                      weight={300}
                      className="text-charcoal dark:text-white"
                    />
                  </div>
                  <h3 className="text-[16px] font-medium tracking-tight text-charcoal dark:text-white">
                    {c.h}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.6] text-secondary-text dark:text-gray-400">
                    {c.p}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <CTAButton label="See Shop Titan in Action" />
          </Reveal>
        </Section>

        {/* 3. Emotional Trigger */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              index="02"
              eyebrow="The ripple effect"
              align="center"
              headline={
                <>
                  Scheduling chaos does not just slow production. It creates{" "}
                  <span className="pain-em">stress everywhere</span>.
                </>
              }
              intro={<>When the schedule is unclear, every team feels it.</>}
            />

            <Reveal delay={0.15} className="mt-12">
              <ul className="border-t border-structural-border dark:border-gray-800">
                {teamImpact.map((t, i) => (
                  <li
                    key={t.team}
                    className="grid grid-cols-[88px_24px_1fr] sm:grid-cols-[140px_24px_1fr] items-center gap-3 border-b border-structural-border dark:border-gray-800 py-4"
                  >
                    <span className="text-[14px] font-medium text-charcoal dark:text-white tracking-tight">
                      {t.team}
                    </span>
                    <span className="font-mono text-[11px] text-secondary-text dark:text-gray-500 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] text-secondary-text dark:text-gray-400">{t.line}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2} className="mt-14">
              <figure className="border-y border-charcoal dark:border-white py-10">
                <blockquote className="text-balance text-[22px] md:text-[26px] leading-[1.35] font-bold text-charcoal dark:text-white tracking-tight">
                  <span className="pain-em text-[28px] md:text-[34px] mr-1.5">&ldquo;</span>
                  A messy schedule turns every department into customer service
                  for every other department.
                  <span className="pain-em text-[28px] md:text-[34px] ml-0.5">&rdquo;</span>
                </blockquote>
              </figure>
            </Reveal>

            <div className="mt-14 flex justify-center">
              <CTAButton label="Book a Demo" />
            </div>
          </div>
        </Section>

        {/* 4. Root Cause */}
        <Section tone="stone">
          {/* eyebrow spans the full section so both columns start at the headline line */}
          <Reveal>
            <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.18em] text-secondary-text dark:text-gray-500">
              <span className="text-charcoal dark:text-white">03</span>
              <span className="h-px w-6 bg-gray-300 dark:bg-gray-700" />
              <span>The real cause</span>
            </div>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <Reveal>
                <h2 className="font-bold tracking-tight leading-tight text-balance text-3xl sm:text-4xl md:text-5xl text-charcoal dark:text-white max-w-2xl">
                  The problem is not that your team is busy. It is that no one
                  can see the{" "}
                  <GradientText underline>whole schedule</GradientText>.
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-6 text-[16px] md:text-[17px] leading-[1.65] text-secondary-text dark:text-gray-400 max-w-2xl text-pretty">
                  Production teams are usually working hard. The issue is that
                  the full picture is hidden. One person knows the art is not
                  approved. Another knows the blanks are missing. Another knows
                  the machine is already booked. Another knows the customer
                  changed the due date. But the schedule does not always know.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 border-l-2 border-charcoal dark:border-white pl-5 text-[18px] md:text-[20px] text-charcoal dark:text-white tracking-tight leading-[1.4]">
                  If the schedule does not know the truth, the team ends up{" "}
                  <span className="pain-em">guessing</span>.
                </p>
              </Reveal>
            </div>

            <div>
              <Reveal delay={0.1}>
                {/* nudge the list down so the first row aligns with the H2 first-line baseline */}
                <ul className="mt-2.5 md:mt-3.5">
                  {rootCauseBullets.map((q, i) => (
                    <li
                      key={q}
                      className="flex items-start gap-5 border-b border-structural-border dark:border-gray-800 py-4 first:pt-0"
                    >
                      <span className="font-mono text-[11px] text-secondary-text dark:text-gray-500 tabular-nums mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15.5px] md:text-[16.5px] text-charcoal dark:text-white tracking-tight leading-[1.4]">
                        {q}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.2} className="mt-8">
                <CTAButton label="Request a Walkthrough" />
              </Reveal>
            </div>
          </div>
        </Section>

        {/* 5. Solution */}
        <Section>
          <SectionHeading
            index="04"
            eyebrow="The system"
            headline={
              <>
                Shop Titan gives production teams a clearer way to{" "}
                <GradientText underline>schedule work</GradientText>.
              </>
            }
            intro={
              <>
                Shop Titan connects job status, approvals, inventory, production
                notes, department ownership, and due dates into one system so
                your team can see what is ready, what is blocked, and what
                needs attention.
              </>
            }
          />

          <Reveal delay={0.15} className="mt-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-structural-border dark:border-gray-800">
              {features.map((f, i) => (
                <div
                  key={f.h}
                  className="border-r border-b border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 p-7"
                >
                  <div className="flex items-start justify-between mb-6">
                    <Icon
                      name={f.icon}
                      size={22}
                      weight={300}
                      className="text-charcoal dark:text-white"
                    />
                  </div>
                  <h3 className="text-[17px] font-medium tracking-tight text-charcoal dark:text-white">
                    {f.h}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.6] text-secondary-text dark:text-gray-400">
                    {f.p}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <CTAButton label="See Shop Titan in Action" />
          </Reveal>
        </Section>

        {/* 6. Workflow */}
        <Section tone="stone">
          <SectionHeading
            index="05"
            eyebrow="The workflow"
            headline={
              <>
                From approved job to finished order, keep production{" "}
                <GradientText underline>moving</GradientText>.
              </>
            }
            intro={<>The goal is simple: schedule from real readiness, not hope.</>}
          />

          <Reveal delay={0.15} className="mt-16">
            <WorkflowStepper steps={workflowSteps} />
          </Reveal>

          <Reveal delay={0.2} className="mt-14">
            <CTAButton label="Book a Demo" />
          </Reveal>
        </Section>

        {/* 7. Before / After */}
        <Section>
          <SectionHeading
            index="06"
            eyebrow="Before / After"
            headline={
              <>
                Before Shop Titan vs.{" "}
                <GradientText underline>after Shop Titan</GradientText>.
              </>
            }
          />

          <Reveal delay={0.15} className="mt-14">
            <div className="grid md:grid-cols-2 border-t border-l border-structural-border dark:border-gray-800">
              <div className="border-r border-b border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 p-8">
                <div className="mb-6 text-[10.5px] font-mono uppercase tracking-[0.18em] text-secondary-text dark:text-gray-500">
                  Before
                </div>
                <ul>
                  {before.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 py-3 text-[14.5px] border-b border-structural-border dark:border-gray-800 last:border-0 text-secondary-text dark:text-gray-400"
                    >
                      <span className="inline-block h-1 w-1 rounded-full bg-gray-400 mt-2 shrink-0" />
                      <span className="line-through decoration-gray-300">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-r border-b border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 p-8">
                <div className="mb-6 flex items-center gap-2">
                  <span className="status-dot bg-charcoal dark:bg-white" />
                  <span className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-charcoal dark:text-white">
                    After Shop Titan
                  </span>
                </div>
                <ul>
                  {after.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-3 py-3 text-[14.5px] border-b border-structural-border dark:border-gray-800 last:border-0 text-charcoal dark:text-white"
                    >
                      <Icon
                        name="check"
                        size={15}
                        weight={300}
                        className="text-charcoal dark:text-white mt-0.5 shrink-0"
                      />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <CTAButton label="Book a Demo" />
          </Reveal>
        </Section>

        {/* 8. Production Reality */}
        <Section tone="stone">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-start">
            <div>
              <SectionHeading
                index="07"
                eyebrow="Real readiness"
                headline={
                  <>
                    A production schedule is only useful if it knows what is{" "}
                    <GradientText underline>actually ready</GradientText>.
                  </>
                }
                intro={
                  <>
                    A job is not ready just because it has a due date. It may
                    still be waiting on any of these — and the schedule needs to
                    know:
                  </>
                }
              />
              <Reveal delay={0.2} className="mt-8 max-w-xl">
                <p className="text-[15.5px] text-secondary-text dark:text-gray-400 leading-[1.65]">
                  Shop Titan helps production teams schedule around real job
                  readiness, not assumptions.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {readinessChecks.map((r) => (
                  <span
                    key={r}
                    className="inline-flex items-center gap-2 rounded-sm border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 px-3 py-2 text-[13px] text-charcoal dark:text-white tracking-tight"
                  >
                    <Icon
                      name="check"
                      size={13}
                      weight={300}
                      className="text-secondary-text dark:text-gray-400"
                    />
                    {r}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>

        {/* 9. Industry Fit */}
        <Section>
          <SectionHeading
            index="08"
            eyebrow="Built for production"
            headline={
              <>
                Built for production shops with{" "}
                <span className="pain-em">real moving parts</span>.
              </>
            }
            intro={
              <>
                Generic project management tools do not understand the way
                production work moves through a decoration business. Shop Titan
                is built for shops where orders move through multiple stages,
                departments, materials, approvals, and deadlines before they are
                complete.
              </>
            }
          />

          <Reveal delay={0.15} className="mt-12">
            <div className="flex flex-wrap gap-2.5">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="inline-flex items-center rounded-sm border border-charcoal/25 dark:border-white/25 bg-white dark:bg-gray-900 px-3.5 py-2 text-[13px] text-charcoal dark:text-white tracking-tight hover:border-charcoal dark:hover:border-white transition-colors"
                >
                  {ind}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <CTAButton label="See Shop Titan in Action" />
          </Reveal>
        </Section>

        {/* 10. Owner Dependency */}
        <Section tone="stone">
          <SectionHeading
            index="09"
            eyebrow="Less owner dependency"
            headline={
              <>
                Your production schedule should not live in{" "}
                <span className="pain-em">one person&rsquo;s head</span>.
              </>
            }
            intro={
              <>
                If the owner or production manager is the only person who knows
                what needs to happen next, the shop is fragile. Shop Titan helps
                turn scheduling knowledge into a system the team can follow.
              </>
            }
          />

          <Reveal delay={0.15} className="mt-12">
            <ul className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-structural-border dark:border-gray-800">
              {ownerOutcomes.map((o) => (
                <li
                  key={o}
                  className="flex items-center gap-3 border-r border-b border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 px-5 py-5"
                >
                  <Icon name="check" size={15} weight={300} className="text-charcoal dark:text-white" />
                  <span className="text-[14px] text-charcoal dark:text-white tracking-tight leading-snug">
                    {o}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <p className="border-l-2 border-charcoal dark:border-white pl-5 text-[17px] md:text-[19px] text-charcoal dark:text-white tracking-tight leading-[1.5] max-w-2xl">
              The goal is not to replace leadership. The goal is to stop making
              leadership the <span className="pain-em">only schedule</span>.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-10">
            <CTAButton label="Book a Demo" />
          </Reveal>
        </Section>

        {/* 11. Results */}
        <Section>
          <SectionHeading
            index="10"
            eyebrow="What changes"
            headline={
              <>
                What changes when production scheduling{" "}
                <GradientText underline>gets clearer</GradientText>.
              </>
            }
          />

          <Reveal delay={0.15} className="mt-14">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-structural-border dark:border-gray-800">
              {results.map((r, i) => (
                <div
                  key={r.h}
                  className="border-r border-b border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900 p-7"
                >
                  <div className="flex items-start justify-between mb-5">
                    <Icon name={r.icon} size={22} weight={300} className="text-charcoal dark:text-white" />
                  </div>
                  <h3 className="text-[17px] font-medium tracking-tight text-charcoal dark:text-white">
                    {r.h}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.6] text-secondary-text dark:text-gray-400">{r.p}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <CTAButton label="Get the Production System" size="lg" />
          </Reveal>
        </Section>

        {/* 12. Credibility */}
        <Section tone="stone">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              index="11"
              eyebrow="Why we built this"
              align="center"
              headline={
                <>
                  Built from{" "}
                  <GradientText underline>real production pressure</GradientText>.
                </>
              }
              intro={
                <>
                  Shop Titan was built from inside the production world, where
                  scheduling mistakes create late orders, rushed teams, missed
                  details, reprints, customer frustration, and margin loss. It
                  was created for shops that need a better way to control the
                  flow of work — not another generic task board.
                </>
              }
            />
            <Reveal delay={0.15} className="mt-10 text-[17px] text-charcoal dark:text-white font-medium">
              This is software for production companies that are ready to stop
              guessing and start running from a clearer system.
            </Reveal>
            <Reveal delay={0.2} className="mt-12 flex justify-center">
              <CTAButton label="Request a Walkthrough" />
            </Reveal>
          </div>
        </Section>

        {/* 13. Final CTA */}
        <section className="relative border-t border-structural-border dark:border-gray-800 bg-background-light dark:bg-background-dark">
          <div className="container-app py-32 md:py-40 text-center">
            <Reveal>
              <span className="inline-block text-[11px] font-mono uppercase tracking-[0.18em] text-secondary-text dark:text-gray-500">
                Last thing
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 text-balance font-bold tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl text-charcoal dark:text-white max-w-4xl mx-auto">
                Ready to bring control to your{" "}
                <span className="pain-em">production schedule</span>?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 text-pretty text-[17px] md:text-[18px] leading-[1.65] text-secondary-text dark:text-gray-400 max-w-2xl mx-auto">
                If your shop is still scheduling from whiteboards, spreadsheets,
                verbal updates, and memory, Shop Titan gives your team a clearer
                way to see what is ready, what is blocked, and what needs to
                happen next.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <CTAButton label="Book a Demo" size="lg" />
                <CTAButton label="See Shop Titan in Action" variant="secondary" size="lg" />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-[12.5px] font-mono text-secondary-text dark:text-gray-500 tracking-wide">
                One connected schedule. Less guessing. More control.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
