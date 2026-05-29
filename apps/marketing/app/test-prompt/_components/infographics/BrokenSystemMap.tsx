import { Icon } from '../Icon';

type Outlier = {
  eyebrow: string;
  heading: string;
  status: string;
  icon: string;
  warn?: boolean;
  /** grid placement on desktop (col / row) */
  col: string;
  row: string;
  /** which side connects toward the center */
  side: 'right' | 'left' | 'bottom' | 'top';
  /** SVG line coordinates (in a 1000x600 viewbox) */
  line: { x1: number; y1: number; x2: number; y2: number };
};

const CENTER = { x: 500, y: 300 };

const OUTLIERS: Outlier[] = [
  {
    eyebrow: 'ORDER DETAILS',
    heading: 'Shop / POS',
    status: 'Synced 3h ago',
    icon: 'shopping_bag',
    col: 'lg:col-start-1',
    row: 'lg:row-start-1',
    side: 'right',
    line: { x1: 250, y1: 110, x2: 420, y2: 250 },
  },
  {
    eyebrow: 'ARTWORK',
    heading: 'Drive / folder',
    status: 'v4 - missing',
    icon: 'image',
    warn: true,
    col: 'lg:col-start-3',
    row: 'lg:row-start-1',
    side: 'left',
    line: { x1: 750, y1: 110, x2: 580, y2: 250 },
  },
  {
    eyebrow: 'APPROVAL',
    heading: 'Email',
    status: 'Buried in thread',
    icon: 'mail',
    warn: true,
    col: 'lg:col-start-3',
    row: 'lg:row-start-2',
    side: 'left',
    line: { x1: 750, y1: 300, x2: 600, y2: 300 },
  },
  {
    eyebrow: 'SCHEDULE',
    heading: 'Whiteboard',
    status: 'Changed today',
    icon: 'dashboard',
    col: 'lg:col-start-3',
    row: 'lg:row-start-3',
    side: 'left',
    line: { x1: 750, y1: 490, x2: 580, y2: 350 },
  },
  {
    eyebrow: 'INVENTORY',
    heading: 'Checked late',
    status: 'Not confirmed',
    icon: 'inventory_2',
    warn: true,
    col: 'lg:col-start-1',
    row: 'lg:row-start-3',
    side: 'right',
    line: { x1: 250, y1: 490, x2: 420, y2: 350 },
  },
  {
    eyebrow: 'OWNER',
    heading: 'Asked for answer',
    status: 'Pending response',
    icon: 'person_pin',
    col: 'lg:col-start-1',
    row: 'lg:row-start-2',
    side: 'right',
    line: { x1: 250, y1: 300, x2: 400, y2: 300 },
  },
];

function midpoint(line: Outlier['line']) {
  return {
    x: (line.x1 + line.x2) / 2,
    y: (line.y1 + line.y2) / 2,
  };
}

function OutlierCard({ item }: { item: Outlier }) {
  return (
    <div className="bg-white border border-structural-border rounded-lg p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
          {item.eyebrow}
        </div>
        <Icon
          name={item.icon}
          size={18}
          weight={300}
          className="text-secondary-text/70 shrink-0"
        />
      </div>
      <div className="mt-2 font-display font-bold text-charcoal text-base">
        {item.heading}
      </div>
      <div className="mt-1 flex items-center gap-1.5 text-xs text-secondary-text">
        {item.warn && (
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-500" />
        )}
        <span>{item.status}</span>
      </div>
    </div>
  );
}

export function BrokenSystemMap() {
  return (
    <div className="w-full">
      {/* Mobile: stacked vertical list */}
      <div className="lg:hidden space-y-4">
        <div className="bg-white border-2 border-charcoal rounded-lg p-5">
          <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
            ACTIVE PRODUCTION JOB
          </div>
          <div className="mt-2 font-display font-bold text-charcoal text-xl">
            Job #10468
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {OUTLIERS.map((item) => (
            <OutlierCard key={item.eyebrow} item={item} />
          ))}
        </div>
      </div>

      {/* Desktop: grid with SVG connectors */}
      <div className="hidden lg:block relative">
        <div className="relative grid grid-cols-3 grid-rows-3 gap-6">
          {/* SVG connectors layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {OUTLIERS.map((item) => {
              const mid = midpoint(item.line);
              return (
                <g key={item.eyebrow}>
                  <line
                    x1={item.line.x1}
                    y1={item.line.y1}
                    x2={item.line.x2}
                    y2={item.line.y2}
                    stroke="rgb(209 213 219)"
                    strokeWidth={1}
                    strokeDasharray="4,4"
                    vectorEffect="non-scaling-stroke"
                  />
                  {item.warn && (
                    <circle
                      cx={mid.x}
                      cy={mid.y}
                      r={5}
                      fill="rgb(244 63 94)"
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Outlying cards */}
          {OUTLIERS.map((item) => (
            <div
              key={item.eyebrow}
              className={`relative z-10 ${item.col} ${item.row}`}
            >
              <OutlierCard item={item} />
            </div>
          ))}

          {/* Center card */}
          <div className="relative z-10 lg:col-start-2 lg:row-start-2 flex items-center justify-center">
            <div className="bg-white border-2 border-charcoal rounded-lg p-5 w-full max-w-[260px] text-center">
              <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
                ACTIVE PRODUCTION JOB
              </div>
              <div className="mt-2 font-display font-bold text-charcoal text-xl">
                Job #10468
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
        ONE JOB. SIX DISCONNECTED PLACES.
      </div>
    </div>
  );
}
