"use client";

import { motion } from "framer-motion";
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

const easeOut = [0.22, 1, 0.36, 1] as const;

function OutlierCard({ item, index, mobile = false }: { item: Outlier; index: number; mobile?: boolean }) {
  const entryDelay = mobile ? 0.05 * index : 0.25 + index * 0.12;
  const dotDelay = mobile ? 0.05 * index + 0.3 : 0.5 + index * 0.12;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: entryDelay, ease: easeOut }}
      className="group relative bg-white border border-structural-border rounded-xl p-4 shadow-[0_1px_0_rgba(0,0,0,0.02),0_8px_24px_-16px_rgba(0,0,0,0.08)] overflow-hidden"
    >
      {/* Hairline top highlight */}
      <span
        aria-hidden
        className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent"
      />
      {/* Soft inner gradient toward the side that faces center */}
      <span
        aria-hidden
        className={`absolute top-0 bottom-0 w-12 bg-gradient-to-r pointer-events-none ${
          item.side === 'right'
            ? 'right-0 from-transparent to-primary/[0.025]'
            : 'left-0 from-primary/[0.025] to-transparent'
        }`}
      />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
            {item.eyebrow}
          </span>
          {/* Tiny live status pip */}
          <motion.span
            aria-hidden
            className={`inline-block h-1 w-1 rounded-full ${item.warn ? 'bg-rose-500' : 'bg-charcoal/40'}`}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2 + index * 0.15, repeat: Infinity, ease: 'easeInOut', delay: 1.5 + index * 0.1 }}
          />
        </div>
        <Icon
          name={item.icon}
          size={18}
          weight={300}
          className="text-secondary-text/70 shrink-0"
        />
      </div>

      <div className="relative mt-2 font-display font-bold text-charcoal text-base">
        {item.heading}
      </div>

      <div className="relative mt-1 flex items-center gap-1.5 text-xs text-secondary-text">
        {item.warn && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: dotDelay, ease: easeOut }}
            className="relative inline-flex items-center justify-center"
          >
            {/* Pulsing halo ring */}
            <motion.span
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-rose-500"
              initial={{ width: 13, height: 13, opacity: 0 }}
              animate={{
                width: [13, 24],
                height: [13, 24],
                opacity: [0.55, 0],
              }}
              transition={{
                duration: 2.4,
                delay: 2.6 + index * 0.1,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
            <motion.span
              className="relative inline-flex items-center justify-center"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 2.4,
                delay: 2.6 + index * 0.1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Icon
                name="error"
                size={13}
                weight={500}
                fill={1}
                className="text-rose-500"
              />
            </motion.span>
          </motion.span>
        )}
        <span>{item.status}</span>
      </div>
    </motion.div>
  );
}

export function BrokenSystemMap() {
  return (
    <div className="w-full">
      {/* Mobile: stacked vertical list */}
      <div className="lg:hidden space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="bg-white border-2 border-charcoal rounded-xl p-5"
        >
          <div className="font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
            ACTIVE PRODUCTION JOB
          </div>
          <div className="mt-2 font-display font-bold text-charcoal text-xl">
            Job #10468
          </div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {OUTLIERS.map((item, i) => (
            <OutlierCard key={item.eyebrow} item={item} index={i} mobile />
          ))}
        </div>
      </div>

      {/* Desktop: grid with SVG connectors */}
      <div className="hidden lg:block relative">
        <div className="relative grid grid-cols-3 grid-rows-3 gap-6">
          {/* SVG connectors + radar layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              {/* Animated dashed gradient for connectors */}
              <linearGradient id="conn-line-gradient" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="rgb(209 213 219)" />
                <stop offset="50%" stopColor="rgb(0 102 204)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="rgb(209 213 219)" />
              </linearGradient>
              {/* Radar fade for ping rings */}
              <radialGradient id="radar-fade" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgb(0 102 204)" stopOpacity="0" />
                <stop offset="100%" stopColor="rgb(0 102 204)" stopOpacity="0.4" />
              </radialGradient>
            </defs>

            {/* Radar rings emanating from center (continuous loop) */}
            {[0, 1.4, 2.8].map((delay, i) => (
              <circle
                key={`radar-${i}`}
                cx={CENTER.x}
                cy={CENTER.y}
                fill="none"
                stroke="rgb(0 102 204)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                opacity="0"
              >
                <animate
                  attributeName="r"
                  values="40;240"
                  dur="4.2s"
                  begin={`${2.5 + delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.35;0"
                  dur="4.2s"
                  begin={`${2.5 + delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

            {OUTLIERS.map((item, i) => {
              const mid = midpoint(item.line);
              return (
                <g key={item.eyebrow}>
                  {/* Connector line — draws in on scroll */}
                  <motion.line
                    x1={item.line.x1}
                    y1={item.line.y1}
                    x2={item.line.x2}
                    y2={item.line.y2}
                    stroke="rgb(209 213 219)"
                    strokeWidth={1}
                    strokeDasharray="4,4"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.7 + i * 0.12,
                      ease: easeOut,
                    }}
                  />

                  {/* Traveling signal dot — center → outlier, loops continuously */}
                  <circle
                    r="2.5"
                    fill="rgb(0 102 204)"
                    opacity="0"
                  >
                    <animate
                      attributeName="cx"
                      values={`${item.line.x2};${item.line.x1}`}
                      dur="2.8s"
                      begin={`${2 + i * 0.25}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cy"
                      values={`${item.line.y2};${item.line.y1}`}
                      dur="2.8s"
                      begin={`${2 + i * 0.25}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;0.85;0.85;0"
                      keyTimes="0;0.15;0.85;1"
                      dur="2.8s"
                      begin={`${2 + i * 0.25}s`}
                      repeatCount="indefinite"
                    />
                  </circle>

                </g>
              );
            })}
          </svg>


          {/* Outlying cards */}
          {OUTLIERS.map((item, i) => (
            <div
              key={item.eyebrow}
              className={`relative z-10 ${item.col} ${item.row}`}
            >
              <OutlierCard item={item} index={i} />
            </div>
          ))}

          {/* Center card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="relative z-10 lg:col-start-2 lg:row-start-2 flex items-center justify-center"
          >
            <div className="relative bg-white border-2 border-charcoal rounded-xl px-5 py-5 w-full max-w-[260px] text-center shadow-[0_2px_0_rgba(0,0,0,0.02),0_24px_56px_-24px_rgba(0,102,204,0.25)]">
              {/* Subtle pulsing outline behind card */}
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-xl border border-primary/40 pointer-events-none"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: [0, 0.45, 0], scale: [1, 1.08, 1.14] }}
                transition={{
                  duration: 3.2,
                  delay: 2.4,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
              {/* Inner hairline top accent */}
              <span
                aria-hidden
                className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
              />

              <div className="relative font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text">
                ACTIVE PRODUCTION JOB
              </div>
              <div className="relative mt-2 font-display font-bold text-charcoal text-xl">
                Job #10468
              </div>
              {/* Live tag */}
              <div className="relative mt-3 inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.18em] text-[9px] text-secondary-text">
                <motion.span
                  className="inline-block h-1 w-1 rounded-full bg-emerald-500"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                />
                Live
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 2, ease: easeOut }}
        className="mt-8 text-center font-mono uppercase tracking-[0.18em] text-[11px] text-secondary-text"
      >
        ONE JOB. SIX DISCONNECTED PLACES.
      </motion.div>
    </div>
  );
}
