type FlowRow = {
  start: string;
  middle: string;
  end: string;
};

const beforeRows: FlowRow[] = [
  { start: "Artwork", middle: "Lives in a folder", end: "Hard to find" },
  { start: "Approval", middle: "Buried in email", end: "Status unclear" },
  { start: "Inventory", middle: "Sticky note", end: "Surprises late" },
  { start: "Schedule", middle: "Whiteboard", end: "Wiped and redrawn" },
  { start: "Status", middle: "Ask a person", end: "Production stops" },
  { start: "Owner", middle: "Memory based", end: "Bottleneck" },
];

const afterRows: FlowRow[] = [
  { start: "Artwork", middle: "Version controlled", end: "Always current" },
  { start: "Approval", middle: "Tied to job", end: "Visible to all" },
  { start: "Inventory", middle: "Live count", end: "Caught early" },
  { start: "Schedule", middle: "Live schedule", end: "Single source" },
  { start: "Status", middle: "Live job status", end: "Anyone answers" },
  { start: "Owner", middle: "Visibility dashboard", end: "Stays clear" },
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
    <div className="flex items-center gap-2 flex-wrap">
      {/* Start pill */}
      <div className="w-[90px] shrink-0">
        <span className="inline-flex items-center rounded-full border border-structural-border bg-white px-2.5 py-1 text-[11.5px] text-charcoal whitespace-nowrap">
          {row.start}
        </span>
      </div>

      {/* Arrow */}
      <Arrow tone={arrowTone} />

      {/* Middle pill */}
      <div className="flex-1 min-w-0">
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11.5px] ${middleClass} whitespace-nowrap`}
        >
          {row.middle}
        </span>
      </div>

      {/* Arrow */}
      <Arrow tone={arrowTone} />

      {/* End pill */}
      <div>
        <span
          className={`inline-flex items-center rounded-full border border-structural-border bg-white px-2.5 py-1 text-[11.5px] ${endClass} whitespace-nowrap`}
        >
          {row.end}
        </span>
      </div>
    </div>
  );
}

export function ChaosToControlComparison() {
  return (
    <section className="w-full">
      <div className="container-app">
        <div className="mb-5 font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
          Operational state: scattered vs connected
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg border border-structural-border bg-white overflow-hidden">
          {/* BEFORE */}
          <section className="p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-structural-border">
            <div className="mb-4 flex items-center gap-2">
              <span className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
                Before
              </span>
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-rose-500"
                aria-hidden="true"
              />
              <span className="text-[12px] text-secondary-text ml-2">
                Scattered system
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {beforeRows.map((row) => (
                <FlowRowItem
                  key={`before-${row.start}`}
                  row={row}
                  variant="before"
                />
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-structural-border font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
              Disconnected. Everything lives in a different place.
            </div>
          </section>

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
              <span className="text-[12px] text-secondary-text ml-2">
                One connected workflow
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {afterRows.map((row) => (
                <FlowRowItem
                  key={`after-${row.start}`}
                  row={row}
                  variant="after"
                />
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-structural-border font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
              Connected. One flow, one truth.
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
