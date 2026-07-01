import { Icon } from "../Icon";

type Check = {
  label: string;
  place: string;
  state: string;
  icon: string;
  dot: "rose" | "amber";
};

const checks: Check[] = [
  {
    label: "CHECK 01",
    place: "Order details",
    state: "Missing approval",
    icon: "shopping_bag",
    dot: "amber",
  },
  {
    label: "CHECK 02",
    place: "Artwork",
    state: "Wrong art file",
    icon: "image",
    dot: "rose",
  },
  {
    label: "CHECK 03",
    place: "Approval",
    state: "No inventory",
    icon: "approval",
    dot: "amber",
  },
  {
    label: "CHECK 04",
    place: "Inventory",
    state: "Unclear status",
    icon: "inventory_2",
    dot: "amber",
  },
  {
    label: "CHECK 05",
    place: "Production status",
    state: "No owner",
    icon: "track_changes",
    dot: "rose",
  },
  {
    label: "CHECK 06",
    place: "Shipping",
    state: "Late update",
    icon: "local_shipping",
    dot: "amber",
  },
];

export function OneJobSixPlaces() {
  return (
    <div className="w-full">
      <div className="border border-structural-border rounded-lg bg-white overflow-hidden">
        {/* Header */}
        <div className="px-5 py-5 sm:px-7 sm:py-6 border-b border-structural-border">
          <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text mb-2">
            Worksheet / Order #4471
          </div>
          <h3 className="font-display font-bold text-charcoal text-xl sm:text-2xl md:text-3xl leading-tight">
            ONE JOB. SIX PLACES TO CHECK.
          </h3>
        </div>

        {/* Grid of checks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y sm:divide-y-0 divide-structural-border">
          {checks.map((check, idx) => {
            const isRightEdge =
              (idx + 1) % 2 === 0 ? "sm:border-r-0" : "sm:border-r";
            const mdRightEdge =
              (idx + 1) % 3 === 0 ? "md:border-r-0" : "md:border-r";
            const bottomEdge =
              idx >= 4 ? "md:border-b-0" : "md:border-b";
            const smBottomEdge =
              idx >= 4 ? "sm:border-b-0" : "sm:border-b";

            const dotColor =
              check.dot === "rose" ? "bg-rose-500" : "bg-amber-500";
            const iconColor =
              check.dot === "rose" ? "text-rose-500" : "text-amber-500";

            return (
              <div
                key={check.label}
                className={`px-5 py-5 sm:px-6 sm:py-6 border-structural-border ${isRightEdge} ${mdRightEdge} ${smBottomEdge} ${bottomEdge}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
                    {check.label}
                  </div>
                  <Icon
                    name={check.icon}
                    size={20}
                    weight={300}
                    className={iconColor}
                  />
                </div>
                <div className="font-display font-bold text-charcoal text-base sm:text-lg leading-snug mb-2">
                  {check.place}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block w-1.5 h-1.5 rounded-full ${dotColor}`}
                    aria-hidden="true"
                  />
                  <span className="pain-em text-secondary-text text-sm">
                    {check.state}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Caption */}
      <div className="mt-4 font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text text-center">
        Diagnostic: one order, six places to check.
      </div>
    </div>
  );
}
