import { Icon } from "../Icon";

type BeforeItem = {
  label: string;
  icon: string;
};

type AfterItem = {
  label: string;
  icon: string;
};

const beforeItems: BeforeItem[] = [
  { label: "Whiteboard", icon: "dashboard" },
  { label: "Spreadsheet", icon: "table_chart" },
  { label: "Email approval", icon: "mail" },
  { label: "Artwork folder", icon: "folder" },
  { label: "Inventory note", icon: "inventory_2" },
  { label: "Owner memory", icon: "person" },
];

const afterItems: AfterItem[] = [
  { label: "One connected workflow", icon: "hub" },
  { label: "Job status", icon: "track_changes" },
  { label: "Artwork approval", icon: "approval" },
  { label: "Inventory check", icon: "inventory_2" },
  { label: "Department queue", icon: "view_kanban" },
  { label: "Production schedule", icon: "schedule" },
  { label: "Owner visibility", icon: "visibility" },
];

export function ChaosToControlComparison() {
  return (
    <section className="w-full">
      <div className="container-app">
        <div className="mb-6 font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
          Operational state
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* LEFT — BEFORE */}
          <div className="relative bg-white border border-structural-border rounded-lg p-5 sm:p-6">
            <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
              Before
            </div>
            <h3 className="mt-2 font-display font-bold text-[20px] text-charcoal">
              Scattered system
            </h3>

            <div className="relative mt-5">
              {/* Broken / dashed connector layer */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 300 300"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {/* Loose dashed connectors */}
                <path
                  d="M50 50 L150 50"
                  stroke="#D1D5DB"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                  fill="none"
                />
                <path
                  d="M150 50 L250 50"
                  stroke="#D1D5DB"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                  fill="none"
                />
                {/* Broken connector — rose break */}
                <path
                  d="M50 50 L50 130"
                  stroke="#D1D5DB"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                  fill="none"
                />
                <path
                  d="M50 140 L50 160"
                  stroke="#F43F5E"
                  strokeWidth="1.25"
                  strokeDasharray="2 3"
                  fill="none"
                />
                <path
                  d="M150 50 L150 150"
                  stroke="#D1D5DB"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                  fill="none"
                />
                <path
                  d="M250 50 L250 150"
                  stroke="#D1D5DB"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                  fill="none"
                />
                <path
                  d="M50 150 L150 150"
                  stroke="#D1D5DB"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                  fill="none"
                />
                {/* Another broken span */}
                <path
                  d="M150 150 L210 150"
                  stroke="#D1D5DB"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                  fill="none"
                />
                <path
                  d="M215 150 L250 150"
                  stroke="#F43F5E"
                  strokeWidth="1.25"
                  strokeDasharray="2 3"
                  fill="none"
                />
                <path
                  d="M50 150 L50 250"
                  stroke="#D1D5DB"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                  fill="none"
                />
                <path
                  d="M150 150 L150 250"
                  stroke="#D1D5DB"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                  fill="none"
                />
                <path
                  d="M50 250 L150 250"
                  stroke="#D1D5DB"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                  fill="none"
                />
                {/* Diagonal drift */}
                <path
                  d="M250 150 L150 250"
                  stroke="#D1D5DB"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                  fill="none"
                />
              </svg>

              {/* 3-col loose grid */}
              <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-3">
                {beforeItems.map((item) => (
                  <div
                    key={item.label}
                    className="bg-white border border-structural-border rounded-lg p-3 flex items-center gap-2"
                  >
                    <Icon
                      name={item.icon}
                      size={16}
                      weight={300}
                      className="text-secondary-text"
                    />
                    <span className="text-[13px] text-charcoal">
                      {item.label}
                    </span>
                  </div>
                ))}
                {/* 7th asymmetry slot — dotted "..." card */}
                <div className="border border-dashed border-structural-border rounded-lg p-3 flex items-center justify-center text-secondary-text text-[13px]">
                  ...
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-structural-border font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
              Disconnected. Everything lives in a different place.
            </div>
          </div>

          {/* RIGHT — AFTER */}
          <div className="relative bg-white border border-structural-border rounded-lg p-5 sm:p-6">
            <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-primary">
              After
            </div>
            <h3 className="mt-2 font-display font-bold text-[20px] text-charcoal">
              One connected workflow
            </h3>

            <div className="relative mt-5">
              <ul className="relative flex flex-col gap-2.5">
                {afterItems.map((item, idx) => (
                  <li key={item.label} className="relative">
                    {idx < afterItems.length - 1 && (
                      <svg
                        className="absolute left-[19px] top-full h-2.5 w-px pointer-events-none"
                        viewBox="0 0 1 10"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <line
                          x1="0.5"
                          y1="0"
                          x2="0.5"
                          y2="10"
                          stroke="#0066CC"
                          strokeOpacity="0.4"
                          strokeWidth="1"
                        />
                      </svg>
                    )}
                    <div className="bg-white border border-structural-border rounded-lg px-3 py-2.5 flex items-center gap-3">
                      <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-primary/10 text-primary shrink-0">
                        <Icon
                          name={item.icon}
                          size={14}
                          weight={300}
                          className="text-primary"
                        />
                      </span>
                      <span className="text-[13px] text-charcoal">
                        {item.label}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-structural-border font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
              Connected. One flow, one truth.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
