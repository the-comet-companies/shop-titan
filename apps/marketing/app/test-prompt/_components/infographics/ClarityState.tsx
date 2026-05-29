import { Icon } from "../Icon";

type Row = {
  icon: string;
  label: string;
  count: string;
  dot: string;
};

const rows: Row[] = [
  { icon: "check_circle", label: "Ready", count: "12 jobs", dot: "bg-emerald-500" },
  { icon: "block", label: "Blocked", count: "3 jobs", dot: "bg-rose-500" },
  { icon: "approval", label: "Waiting on approval", count: "5 jobs", dot: "bg-amber-500" },
  { icon: "inventory_2", label: "Missing inventory", count: "2 jobs", dot: "bg-amber-500" },
  { icon: "schedule", label: "Late risk", count: "4 jobs", dot: "bg-rose-500" },
  { icon: "track_changes", label: "Moving today", count: "18 jobs", dot: "bg-emerald-500" },
  { icon: "stacked_bar_chart", label: "Department overloaded", count: "1 dept", dot: "bg-amber-500" },
];

export function ClarityState() {
  return (
    <div className="rounded-lg border border-structural-border bg-white p-6 sm:p-8">
      <div className="mb-6">
        <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
          Daily view
        </div>
        <h3 className="mt-2 font-display font-semibold text-charcoal text-[18px] leading-snug">
          What the owner sees in the morning.
        </h3>
      </div>

      <ul className="divide-y divide-structural-border border-y border-structural-border">
        {rows.map((row) => (
          <li
            key={row.label}
            className="flex items-center gap-3 sm:gap-4 py-3"
          >
            <Icon
              name={row.icon}
              size={20}
              weight={300}
              className="text-secondary-text shrink-0"
            />
            <span className="flex-1 text-charcoal text-[14px] sm:text-[15px] truncate">
              {row.label}
            </span>
            <span className="font-mono text-[11px] sm:text-[12px] text-secondary-text tabular-nums shrink-0">
              {row.count}
            </span>
            <span
              className={`h-2 w-2 rounded-full shrink-0 ${row.dot}`}
              aria-hidden="true"
            />
          </li>
        ))}
      </ul>

      <div className="mt-6 font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
        One view. No asking around.
      </div>
    </div>
  );
}
