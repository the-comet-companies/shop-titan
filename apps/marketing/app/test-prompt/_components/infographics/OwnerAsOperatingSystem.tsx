export function OwnerAsOperatingSystem() {
  const departments = [
    { name: "Sales", label: "NEED STATUS" },
    { name: "Art", label: "NEED APPROVAL" },
    { name: "Production", label: "NEED ANSWER" },
    { name: "Inventory", label: "NEED DECISION" },
    { name: "Shipping", label: "NEED UPDATE" },
    { name: "Customer Service", label: "NEED ANSWER" },
  ];

  // Hexagonal positions around center (cx=400, cy=300, r=220)
  // angles: top, top-right, bottom-right, bottom, bottom-left, top-left
  const cx = 400;
  const cy = 300;
  const r = 220;
  const angles = [-90, -30, 30, 90, 150, 210]; // degrees

  const nodes = departments.map((d, i) => {
    const rad = (angles[i] * Math.PI) / 180;
    const x = cx + r * Math.cos(rad);
    const y = cy + r * Math.sin(rad);
    return { ...d, x, y, angle: angles[i] };
  });

  // Center card dimensions
  const centerW = 180;
  const centerH = 90;
  // Outer card dimensions (approx for line endpoints)
  const nodeW = 150;
  const nodeH = 56;

  // Compute line from outer node edge toward center edge
  function getLine(nx: number, ny: number) {
    const dx = cx - nx;
    const dy = cy - ny;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / dist;
    const uy = dy / dist;

    // Start: edge of outer node (offset from node center toward owner)
    const startOffset = 36;
    const x1 = nx + ux * startOffset;
    const y1 = ny + uy * startOffset;

    // End: edge of center card (offset away from owner toward node)
    const endOffset = 60;
    const x2 = cx - ux * endOffset;
    const y2 = cy - uy * endOffset;

    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;

    return { x1, y1, x2, y2, midX, midY };
  }

  return (
    <section className="w-full">
      {/* Desktop / tablet: SVG radial diagram */}
      <div className="hidden md:block">
        <div className="relative mx-auto w-full max-w-[820px]">
          <svg
            viewBox="0 0 800 600"
            className="w-full h-auto"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="arrow-inward"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#9CA3AF" />
              </marker>
            </defs>

            {/* Connector lines */}
            {nodes.map((n, i) => {
              const { x1, y1, x2, y2, midX, midY } = getLine(n.x, n.y);
              return (
                <g key={`line-${i}`}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    className="stroke-gray-400"
                    strokeWidth="1"
                    markerEnd="url(#arrow-inward)"
                  />
                  {/* Mid-line label background */}
                  <rect
                    x={midX - 52}
                    y={midY - 9}
                    width="104"
                    height="18"
                    fill="#FBFBFB"
                  />
                  <text
                    x={midX}
                    y={midY + 3}
                    textAnchor="middle"
                    className="fill-secondary-text"
                    style={{
                      fontFamily:
                        "ui-monospace, SFMono-Regular, Menlo, monospace",
                      fontSize: "10px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    {n.label}
                  </text>
                </g>
              );
            })}

            {/* Center OWNER card */}
            <g>
              <rect
                x={cx - centerW / 2}
                y={cy - centerH / 2}
                width={centerW}
                height={centerH}
                rx="10"
                ry="10"
                fill="#FFFFFF"
                className="stroke-charcoal"
                strokeWidth="1.5"
              />
              <text
                x={cx}
                y={cy - 8}
                textAnchor="middle"
                className="fill-charcoal"
                style={{
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                OWNER
              </text>
              <text
                x={cx}
                y={cy + 14}
                textAnchor="middle"
                className="fill-secondary-text"
                style={{
                  fontSize: "12px",
                }}
              >
                The current operating system
              </text>
            </g>

            {/* Department nodes */}
            {nodes.map((n, i) => (
              <g key={`node-${i}`}>
                <rect
                  x={n.x - nodeW / 2}
                  y={n.y - nodeH / 2}
                  width={nodeW}
                  height={nodeH}
                  rx="6"
                  ry="6"
                  fill="#FFFFFF"
                  className="stroke-structural-border"
                  strokeWidth="1"
                />
                <text
                  x={n.x}
                  y={n.y - 8}
                  textAnchor="middle"
                  className="fill-secondary-text"
                  style={{
                    fontFamily:
                      "ui-monospace, SFMono-Regular, Menlo, monospace",
                    fontSize: "9px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  DEPT
                </text>
                <text
                  x={n.x}
                  y={n.y + 12}
                  textAnchor="middle"
                  className="fill-charcoal"
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  {n.name}
                </text>
              </g>
            ))}
          </svg>

          <p className="mt-6 text-center font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
            Every department ends at one person.
          </p>
        </div>
      </div>

      {/* Mobile: stacked list */}
      <div className="md:hidden">
        <div className="mx-auto w-full max-w-sm">
          {/* Center OWNER card at top */}
          <div className="rounded-lg border-[1.5px] border-charcoal bg-white px-4 py-4 text-center">
            <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-charcoal font-semibold">
              OWNER
            </div>
            <div className="mt-1 text-sm text-secondary-text">
              The current operating system
            </div>
          </div>

          {/* Vertical connector hint */}
          <div className="mx-auto my-3 h-6 w-px bg-gray-300" aria-hidden="true" />

          {/* Department rows */}
          <ul className="divide-y divide-structural-border rounded-lg border border-structural-border bg-white">
            {departments.map((d, i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-3 px-3 py-3"
              >
                <div className="min-w-0">
                  <div className="font-mono uppercase tracking-[0.18em] text-[10px] text-secondary-text">
                    DEPT
                  </div>
                  <div className="text-sm font-semibold text-charcoal">
                    {d.name}
                  </div>
                </div>
                <div className="shrink-0 font-mono uppercase tracking-[0.14em] text-[10px] text-secondary-text">
                  &rarr; {d.label}
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-center font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
            Every department ends at one person.
          </p>
        </div>
      </div>
    </section>
  );
}
