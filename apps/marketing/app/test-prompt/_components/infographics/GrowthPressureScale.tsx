export function GrowthPressureScale() {
  const points = [
    {
      count: "20 orders",
      state: "Manageable",
      stroke: "stroke-emerald-500",
      fill: "fill-white",
      radius: 6,
      x: 80,
      pressure: 1,
      pressureOpacity: 0.2,
    },
    {
      count: "50 orders",
      state: "Messy",
      stroke: "stroke-amber-500",
      fill: "fill-white",
      radius: 6,
      x: 320,
      pressure: 2.5,
      pressureOpacity: 0.4,
    },
    {
      count: "100 orders",
      state: "Reactive",
      stroke: "stroke-amber-500",
      fill: "fill-amber-500",
      radius: 7,
      x: 560,
      pressure: 4.5,
      pressureOpacity: 0.6,
    },
    {
      count: "200+ orders",
      state: "Owner-dependent",
      stroke: "stroke-rose-500",
      fill: "fill-rose-500",
      radius: 9,
      x: 800,
      pressure: 7,
      pressureOpacity: 0.8,
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16">
      <div className="container-app">
        <div className="mb-8 text-center sm:mb-10">
          <p className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
            Volume vs System Capacity
          </p>
        </div>

        {/* Desktop / tablet: horizontal gauge */}
        <div className="hidden sm:block">
          <div className="relative w-full overflow-hidden rounded-lg bg-white border border-structural-border px-6 py-10">
            <svg
              viewBox="0 0 880 280"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Y-axis label */}
              <text
                x="10"
                y="150"
                className="fill-secondary-text font-mono"
                fontSize="10"
                letterSpacing="2"
              >
                PRESSURE
              </text>

              {/* Pressure curve (load line) above axis */}
              <path
                d={`M ${points[0].x} ${200 - points[0].pressure * 4}
                    Q ${(points[0].x + points[1].x) / 2} ${200 - points[1].pressure * 5},
                      ${points[1].x} ${200 - points[1].pressure * 4}
                    T ${points[2].x} ${200 - points[2].pressure * 4}
                    T ${points[3].x} ${200 - points[3].pressure * 4}`}
                fill="none"
                className="stroke-charcoal"
                strokeWidth="1"
                strokeOpacity="0.2"
              />
              {/* Layered thicker strokes towards right for gradient-thickness effect */}
              {points.slice(0, -1).map((p, i) => {
                const next = points[i + 1];
                const avgWidth = (p.pressure + next.pressure) / 2;
                const avgOpacity = (p.pressureOpacity + next.pressureOpacity) / 2;
                return (
                  <line
                    key={`pressure-${i}`}
                    x1={p.x}
                    y1={200 - p.pressure * 4}
                    x2={next.x}
                    y2={200 - next.pressure * 4}
                    className="stroke-charcoal"
                    strokeWidth={avgWidth}
                    strokeOpacity={avgOpacity}
                    strokeLinecap="round"
                  />
                );
              })}

              {/* Horizontal axis */}
              <line
                x1="60"
                y1="220"
                x2="840"
                y2="220"
                className="stroke-gray-300"
                strokeWidth="1"
              />

              {/* Tick marks and node circles */}
              {points.map((p, i) => (
                <g key={`tick-${i}`}>
                  <line
                    x1={p.x}
                    y1="216"
                    x2={p.x}
                    y2="224"
                    className="stroke-gray-400"
                    strokeWidth="1"
                  />
                  <circle
                    cx={p.x}
                    cy="220"
                    r={p.radius}
                    className={`${p.stroke} ${p.fill}`}
                    strokeWidth="1.5"
                  />
                  {/* Count label below tick */}
                  <text
                    x={p.x}
                    y="250"
                    textAnchor="middle"
                    className="fill-secondary-text font-mono"
                    fontSize="10"
                    letterSpacing="1.5"
                  >
                    {p.count.toUpperCase()}
                  </text>
                </g>
              ))}
            </svg>

            {/* State cards positioned above each tick */}
            <div className="pointer-events-none absolute inset-x-6 top-10 hidden md:block">
              <div className="relative h-0">
                {points.map((p, i) => (
                  <div
                    key={`card-${i}`}
                    className="absolute -translate-x-1/2"
                    style={{ left: `${(p.x / 880) * 100}%` }}
                  >
                    <div className="bg-white border border-structural-border rounded-md py-2.5 px-3 min-w-[110px] text-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                      <div className="font-mono uppercase tracking-[0.18em] text-[10px] text-secondary-text">
                        {p.count}
                      </div>
                      <div className="mt-1 font-display font-bold text-[13px] text-charcoal">
                        {p.state}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tablet fallback: cards as a row below the SVG */}
          <div className="md:hidden mt-6 grid grid-cols-4 gap-2">
            {points.map((p, i) => (
              <div
                key={`tab-card-${i}`}
                className="bg-white border border-structural-border rounded-md py-2.5 px-3 text-center"
              >
                <div className="font-mono uppercase tracking-[0.18em] text-[10px] text-secondary-text">
                  {p.count}
                </div>
                <div className="mt-1 font-display font-bold text-[13px] text-charcoal">
                  {p.state}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack with horizontal pressure bars */}
        <div className="sm:hidden space-y-3">
          {points.map((p, i) => {
            const barWidth = (p.pressure / 7) * 100;
            const barColor =
              i === 0
                ? "bg-emerald-500"
                : i === 3
                ? "bg-rose-500"
                : "bg-amber-500";
            return (
              <div
                key={`mob-${i}`}
                className="bg-white border border-structural-border rounded-md p-4"
              >
                <div className="flex items-baseline justify-between">
                  <div className="font-display font-bold text-[14px] text-charcoal">
                    {p.state}
                  </div>
                  <div className="font-mono uppercase tracking-[0.18em] text-[10px] text-secondary-text">
                    {p.count}
                  </div>
                </div>
                <div className="mt-3 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className={`h-full ${barColor} rounded-full`}
                    style={{
                      width: `${barWidth}%`,
                      opacity: 0.3 + (p.pressureOpacity - 0.2) * 1.2,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-secondary-text text-[14px] sm:text-[15px]">
          <span className="pain-em">
            Growth exposes the gaps that were already there.
          </span>
        </p>
      </div>
    </section>
  );
}
