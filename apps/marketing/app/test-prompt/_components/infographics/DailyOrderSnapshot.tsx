"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

type Row = {
  count: number;
  label: string;
  bar: string;
  text: string;
  dot: string;
};

const ROWS: Row[] = [
  {
    count: 17,
    label: "Orders For Today",
    bar: "bg-rose-500",
    text: "text-rose-600",
    dot: "bg-rose-500",
  },
  {
    count: 23,
    label: "Orders For Tomorrow",
    bar: "bg-amber-500",
    text: "text-amber-600",
    dot: "bg-amber-500",
  },
  {
    count: 13,
    label: "Orders in 2 Days",
    bar: "bg-violet-500",
    text: "text-violet-600",
    dot: "bg-violet-500",
  },
];

function CountUp({
  to,
  delay = 0,
  duration = 1.4,
}: {
  to: number;
  delay?: number;
  duration?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, count, rounded, to, duration, delay]);

  return <span ref={ref}>{display}</span>;
}

export function DailyOrderSnapshot() {
  return (
    <div className="rounded-2xl border border-structural-border bg-white shadow-card overflow-hidden">
      {/* Eyebrow */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-structural-border">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-secondary-text">
          Daily Order Snapshot
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-secondary-text">
          <motion.span
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"
          />
          Live
        </span>
      </div>

      {/* Rows */}
      <div>
        {ROWS.map((row, i) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.7,
              delay: 0.15 + i * 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`relative flex items-center gap-5 px-6 py-6 ${
              i > 0 ? "border-t border-structural-border" : ""
            }`}
          >
            {/* Left accent bar */}
            <span
              aria-hidden
              className={`absolute left-0 top-0 bottom-0 w-[3px] ${row.bar}`}
            />

            {/* Count */}
            <div className="flex-shrink-0 min-w-[72px] md:min-w-[88px]">
              <span
                className={`text-4xl md:text-5xl font-light tracking-tight tabular-nums ${row.text}`}
              >
                <CountUp to={row.count} delay={0.4 + i * 0.25} />
              </span>
            </div>

            {/* Label */}
            <div className="flex-1">
              <p className="text-base md:text-lg font-medium text-charcoal leading-tight">
                {row.label}
              </p>
            </div>

            {/* Status dot */}
            <span
              aria-hidden
              className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${row.dot}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom line */}
      <div className="px-6 py-4 border-t border-structural-border bg-background-light/40">
        <p className="text-sm text-secondary-text text-center">
          <span className="pain-em">One glance.</span> No walking the floor.
        </p>
      </div>
    </div>
  );
}
