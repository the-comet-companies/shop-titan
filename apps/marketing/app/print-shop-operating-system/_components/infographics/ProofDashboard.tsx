const channels = [
  { label: "Direct", value: "14K", pct: 100 },
  { label: "Organic Search", value: "7.3K", pct: (7.3 / 14) * 100 },
  { label: "Organic Social", value: "4.6K", pct: (4.6 / 14) * 100 },
  { label: "Paid Social", value: "4K", pct: (4 / 14) * 100 },
  { label: "Cross-network", value: "1.4K", pct: (1.4 / 14) * 100 },
  { label: "Referral", value: "652", pct: (0.652 / 14) * 100 },
];

const states = [
  { name: "California", users: "23K" },
  { name: "Texas", users: "4.2K" },
  { name: "New York", users: "566" },
  { name: "Florida", users: "455" },
  { name: "Illinois", users: "366" },
  { name: "Arizona", users: "252" },
  { name: "Washington", users: "247" },
];

const stats = [
  { eyebrow: "ACTIVE USERS", value: "33K", desc: "Real shops, real traffic" },
  { eyebrow: "NEW USERS", value: "29K", desc: "Reach, not stagnation" },
  { eyebrow: "AVG ENGAGEMENT", value: "1m 12s", desc: "Per active user" },
  { eyebrow: "LIVE RIGHT NOW", value: "59", desc: "", live: true },
];

export function ProofDashboard() {
  return (
    <div className="bg-white border border-structural-border rounded-lg p-6 sm:p-8">
      {/* REGION 1 — Stat tiles */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.eyebrow}
            className={`px-4 py-4 md:py-2 ${
              i < stats.length - 1
                ? "border-b md:border-b-0 md:border-r border-structural-border"
                : ""
            } ${i < 2 ? "border-b md:border-b-0" : ""}`}
          >
            <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
              {s.eyebrow}
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="font-display font-bold text-[28px] sm:text-[36px] leading-none text-charcoal">
                {s.value}
              </span>
              {s.live && (
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
              )}
            </div>
            {s.desc && (
              <div className="mt-2 text-[13px] text-secondary-text">
                {s.desc}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-structural-border my-8" />

      {/* REGION 2 — Sessions by Channel */}
      <div>
        <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text mb-5">
          SESSIONS BY CHANNEL — LAST 30 DAYS
        </div>
        <div className="space-y-3">
          {channels.map((c) => (
            <div
              key={c.label}
              className="grid grid-cols-[110px_1fr_56px] sm:grid-cols-[160px_1fr_72px] items-center gap-3 sm:gap-4"
            >
              <div className="text-[13px] text-charcoal truncate">
                {c.label}
              </div>
              <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${c.pct}%` }}
                />
              </div>
              <div className="font-mono text-[12px] text-secondary-text text-right tabular-nums">
                {c.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-structural-border my-8" />

      {/* REGION 3 — State reach */}
      <div>
        <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text mb-4">
          STATE REACH
        </div>
        <div className="divide-y divide-structural-border border-t border-b border-structural-border">
          {states.map((s) => (
            <div
              key={s.name}
              className="grid grid-cols-2 py-2.5 text-[13px]"
            >
              <div className="text-charcoal">{s.name}</div>
              <div className="font-mono text-secondary-text text-right tabular-nums">
                {s.users}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
          ACTIVE IN 7+ STATES.
        </div>
      </div>

      {/* Bottom caption */}
      <div className="mt-8 pt-6 border-t border-structural-border">
        <p className="font-serif italic text-[15px] sm:text-[17px] text-charcoal leading-relaxed">
          <span className="pain-em">
            DTLA Print runs real traffic, real demand, and real production
            complexity. Shop Titan was built from that pressure.
          </span>
        </p>
      </div>
    </div>
  );
}
