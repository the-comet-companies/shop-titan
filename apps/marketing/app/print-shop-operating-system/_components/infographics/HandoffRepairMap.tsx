type FlowRow = {
  start: string;
  middle: string;
  end: string;
};

const beforeRows: FlowRow[] = [
  { start: "Art file", middle: "Unclear", end: "Production delay" },
  { start: "Approval", middle: "Buried", end: "Team guessing" },
  { start: "Inventory", middle: "Checked late", end: "Job blocked" },
  { start: "Owner", middle: "Asked again", end: "Decision bottleneck" },
];

const afterRows: FlowRow[] = [
  { start: "Art file", middle: "Version controlled", end: "Production ready" },
  { start: "Approval", middle: "Tied to job", end: "Visible status" },
  { start: "Inventory", middle: "Checked earlier", end: "Fewer surprises" },
  { start: "Owner", middle: "Visibility dashboard", end: "Less interruption" },
];

function Arrow({ tone }: { tone: "muted" | "primary" }) {
  const stroke = tone === "primary" ? "stroke-primary/60" : "stroke-gray-300";
  return (
    <svg
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      className="shrink-0"
      aria-hidden="true"
    >
      <path
        d="M1 5H15"
        className={stroke}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M12 1.5L16 5L12 8.5"
        className={stroke}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlowRowItem({
  row,
  variant,
}: {
  row: FlowRow;
  variant: "before" | "after";
}) {
  const middleClass =
    variant === "before"
      ? "bg-rose-50 border-rose-200 text-rose-700"
      : "bg-primary/5 border-primary/30 text-primary";
  const endClass =
    variant === "before" ? "text-secondary-text" : "text-charcoal";
  const arrowTone = variant === "before" ? "muted" : "primary";

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
      {/* Start pill (fixed-width column on sm+ for vertical alignment) */}
      <div className="sm:w-[120px] sm:shrink-0">
        <span className="inline-flex items-center rounded-full border border-structural-border bg-white px-3 py-1 text-[12px] text-charcoal">
          {row.start}
        </span>
      </div>

      {/* Arrow */}
      <div className="hidden sm:flex">
        <Arrow tone={arrowTone} />
      </div>
      <div className="flex sm:hidden justify-center">
        <svg
          width="10"
          height="14"
          viewBox="0 0 10 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 1V11"
            className={
              variant === "before" ? "stroke-gray-300" : "stroke-primary/60"
            }
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M1.5 8L5 11.5L8.5 8"
            className={
              variant === "before" ? "stroke-gray-300" : "stroke-primary/60"
            }
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Middle pill */}
      <div className="sm:w-[170px] sm:shrink-0">
        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 text-[12px] ${middleClass}`}
        >
          {row.middle}
        </span>
      </div>

      {/* Arrow */}
      <div className="hidden sm:flex">
        <Arrow tone={arrowTone} />
      </div>
      <div className="flex sm:hidden justify-center">
        <svg
          width="10"
          height="14"
          viewBox="0 0 10 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 1V11"
            className={
              variant === "before" ? "stroke-gray-300" : "stroke-primary/60"
            }
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M1.5 8L5 11.5L8.5 8"
            className={
              variant === "before" ? "stroke-gray-300" : "stroke-primary/60"
            }
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* End pill */}
      <div>
        <span
          className={`inline-flex items-center rounded-full border border-structural-border bg-white px-3 py-1 text-[12px] ${endClass}`}
        >
          {row.end}
        </span>
      </div>
    </div>
  );
}

export function HandoffRepairMap() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-5 font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
        Handoff: broken vs repaired
      </div>

      <div className="rounded-lg border border-structural-border bg-white">
        {/* BEFORE */}
        <section className="p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
              Before
            </span>
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-rose-500"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col gap-4 sm:gap-3">
            {beforeRows.map((row) => (
              <FlowRowItem key={`before-${row.start}`} row={row} variant="before" />
            ))}
          </div>
        </section>

        {/* Hairline divider */}
        <div className="border-t border-structural-border" />

        {/* AFTER */}
        <section className="p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
              After
            </span>
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col gap-4 sm:gap-3">
            {afterRows.map((row) => (
              <FlowRowItem key={`after-${row.start}`} row={row} variant="after" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
