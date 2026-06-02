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

function VertArrow({ tone }: { tone: "muted" | "primary" }) {
  const stroke = tone === "primary" ? "stroke-primary/60" : "stroke-gray-300";
  return (
    <svg
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 1V11"
        className={stroke}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M1.5 8L5 11.5L8.5 8"
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
      {/* Start pill */}
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
        <VertArrow tone={arrowTone} />
      </div>

      {/* Middle pill */}
      <div className="sm:w-[200px] sm:shrink-0">
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
        <VertArrow tone={arrowTone} />
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

export function ChaosToControlComparison() {
  return (
    <section className="w-full">
      <div className="container-app">
        <div className="mb-5 font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
          Operational state: scattered vs connected
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
              <span className="text-[12px] text-secondary-text ml-2">
                Scattered system
              </span>
            </div>

            <div className="flex flex-col gap-4 sm:gap-3">
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
              <span className="text-[12px] text-secondary-text ml-2">
                One connected workflow
              </span>
            </div>

            <div className="flex flex-col gap-4 sm:gap-3">
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
