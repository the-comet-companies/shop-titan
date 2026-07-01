import { Icon } from "./Icon";

type StatusTone = "ok" | "warn" | "blocked" | "neutral" | "muted" | "rush";

type ScheduleJob = {
  id: string;
  customer: string;
  dept: string;
  due: string;
  start: number;
  width: number;
  tone: StatusTone;
  label: string;
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const capacities: { label: string; pct: number; tone: StatusTone }[] = [
  { label: "Screen print", pct: 82, tone: "warn" },
  { label: "Embroidery", pct: 45, tone: "ok" },
  { label: "DTF / DTG", pct: 64, tone: "neutral" },
  { label: "Finishing", pct: 91, tone: "warn" },
  { label: "Fulfillment", pct: 38, tone: "ok" },
];

const jobs: ScheduleJob[] = [
  {
    id: "SO-10421",
    customer: "Northside Athletics",
    dept: "Screen print",
    due: "Fri 3:00p",
    start: 4,
    width: 28,
    tone: "neutral",
    label: "In production",
  },
  {
    id: "SO-10468",
    customer: "Harbor University",
    dept: "Finishing",
    due: "Today 5p",
    start: 0,
    width: 14,
    tone: "rush",
    label: "Rush",
  },
  {
    id: "SO-10455",
    customer: "Riley & Co.",
    dept: "Screen print",
    due: "Thu",
    start: 36,
    width: 30,
    tone: "blocked",
    label: "Blocked · inventory",
  },
  {
    id: "SO-10440",
    customer: "Mason Fire Dept.",
    dept: "Art",
    due: "Wed",
    start: 18,
    width: 18,
    tone: "warn",
    label: "Awaiting approval",
  },
  {
    id: "SO-10412",
    customer: "Crestwood Camp",
    dept: "DTF",
    due: "Fri",
    start: 52,
    width: 22,
    tone: "ok",
    label: "Ready to ship",
  },
];

const dotClass: Record<StatusTone, string> = {
  ok: "bg-emerald-500",
  warn: "bg-amber-500",
  blocked: "bg-rose-500",
  neutral: "bg-charcoal dark:bg-white",
  muted: "bg-gray-400",
  rush: "bg-rose-500",
};

const barClass: Record<StatusTone, string> = {
  ok: "bg-emerald-500/10 border-emerald-500/40 text-emerald-700 dark:text-emerald-400",
  warn: "bg-amber-500/10 border-amber-500/40 text-amber-700 dark:text-amber-400",
  blocked: "bg-rose-500/10 border-rose-500/40 text-rose-700 dark:text-rose-400",
  neutral:
    "bg-primary/10 border-primary/40 text-primary dark:text-primary-300",
  muted:
    "bg-gray-200/40 border-gray-400/40 text-secondary-text dark:text-gray-400",
  rush: "bg-rose-500/15 border-rose-500/50 text-rose-700 dark:text-rose-400",
};

const capacityBarTone: Record<StatusTone, string> = {
  ok: "bg-emerald-500",
  warn: "bg-amber-500",
  blocked: "bg-rose-500",
  neutral: "bg-primary",
  muted: "bg-gray-400",
  rush: "bg-rose-500",
};

export function ProductionScheduleDashboard() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-900 shadow-soft">
        {/* chrome */}
        <div className="flex items-center justify-between border-b border-structural-border dark:border-gray-800 px-5 py-3.5">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full border border-gray-300 dark:border-gray-700" />
            <span className="inline-block h-2 w-2 rounded-full border border-gray-300 dark:border-gray-700" />
            <span className="inline-block h-2 w-2 rounded-full border border-gray-300 dark:border-gray-700" />
            <div className="ml-3 font-mono text-[11px] text-secondary-text dark:text-gray-500 tracking-wide">
              shoptitan.app / production /{" "}
              <span className="text-charcoal dark:text-white">schedule</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[10.5px] font-mono uppercase tracking-[0.18em] text-secondary-text dark:text-gray-500">
            <span className="status-dot bg-emerald-500" />
            <span>Live</span>
          </div>
        </div>

        {/* toolbar */}
        <div className="flex flex-wrap items-end justify-between gap-3 px-6 pt-5 pb-4 border-b border-structural-border dark:border-gray-800">
          <div>
            <div className="text-[15px] font-semibold tracking-tight text-charcoal dark:text-white">
              Production schedule
            </div>
            <div className="mt-0.5 font-mono text-[11px] text-secondary-text dark:text-gray-500">
              Week of May 19 · 38 active · 6 blocked · 9 rush · 4 late risk
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono text-secondary-text dark:text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              In production
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Awaiting
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              Blocked / rush
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Ready
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-[220px_1fr]">
          {/* sidebar — capacity */}
          <aside className="border-b md:border-b-0 md:border-r border-structural-border dark:border-gray-800 p-5 bg-gray-50 dark:bg-gray-900/60">
            <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.18em] text-secondary-text dark:text-gray-500">
              Department capacity
            </p>
            <div className="space-y-4">
              {capacities.map((c) => (
                <div key={c.label}>
                  <div className="flex items-center justify-between text-[12.5px] mb-1.5">
                    <span className="text-charcoal dark:text-white">{c.label}</span>
                    <span className="font-mono text-[11px] text-secondary-text dark:text-gray-400">
                      {c.pct}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-structural-border/70 dark:bg-gray-800 overflow-hidden">
                    <div
                      className={`h-full ${capacityBarTone[c.tone]}`}
                      style={{ width: `${c.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-7 mb-3 text-[10px] font-mono uppercase tracking-[0.18em] text-secondary-text dark:text-gray-500">
              Today
            </p>
            <div className="space-y-1.5 text-[12.5px]">
              <div className="flex items-center justify-between text-charcoal dark:text-white">
                <span>Jobs scheduled</span>
                <span className="font-mono text-secondary-text dark:text-gray-400">38</span>
              </div>
              <div className="flex items-center justify-between text-secondary-text dark:text-gray-400">
                <span>Awaiting approval</span>
                <span className="font-mono">12</span>
              </div>
              <div className="flex items-center justify-between text-rose-700 dark:text-rose-400">
                <span>Late risk</span>
                <span className="font-mono">4</span>
              </div>
              <div className="flex items-center justify-between text-rose-700 dark:text-rose-400">
                <span>Rush impact</span>
                <span className="font-mono">9</span>
              </div>
            </div>
          </aside>

          {/* timeline */}
          <div className="p-5 md:p-6 bg-surface dark:bg-gray-900">
            <div className="relative mb-3 grid grid-cols-5 text-[10.5px] font-mono uppercase tracking-[0.18em] text-secondary-text dark:text-gray-500">
              {days.map((d) => (
                <div
                  key={d}
                  className="border-l border-structural-border dark:border-gray-800 pl-2 first:border-l-0 first:pl-0"
                >
                  {d}
                </div>
              ))}
            </div>

            <div className="space-y-2.5">
              {jobs.map((j) => (
                <div
                  key={j.id}
                  className="grid grid-cols-[170px_1fr] items-center gap-3"
                >
                  <div className="text-[12.5px]">
                    <div className="font-mono text-[10.5px] text-secondary-text dark:text-gray-500">
                      {j.id}
                    </div>
                    <div className="text-charcoal dark:text-white tracking-tight truncate">
                      {j.customer}
                    </div>
                    <div className="text-secondary-text dark:text-gray-400 text-[11px]">
                      {j.dept} · {j.due}
                    </div>
                  </div>
                  <div className="relative h-9 rounded-sm bg-gray-50 dark:bg-gray-900/60 border border-structural-border dark:border-gray-800 overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-5 pointer-events-none">
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="border-r border-structural-border dark:border-gray-800 col-span-1"
                        />
                      ))}
                      <div className="col-span-1" />
                    </div>
                    <div
                      className={`absolute top-1.5 bottom-1.5 rounded-sm border ${barClass[j.tone]} flex items-center px-2.5`}
                      style={{
                        left: `${j.start}%`,
                        width: `${j.width}%`,
                      }}
                    >
                      <span className="inline-flex items-center gap-1.5 text-[11px] tracking-tight whitespace-nowrap">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${dotClass[j.tone]}`}
                        />
                        {j.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between rounded-sm border border-rose-500/30 bg-rose-500/[0.06] px-4 py-3">
              <div className="flex items-center gap-3">
                <Icon
                  name="warning"
                  size={16}
                  weight={300}
                  className="text-rose-700 dark:text-rose-400"
                />
                <span className="text-[13px] text-rose-700 dark:text-rose-400 tracking-tight">
                  4 jobs at late risk · Screen print & Finishing at &gt;80% capacity
                </span>
              </div>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-rose-700 dark:text-rose-400">
                Review
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
