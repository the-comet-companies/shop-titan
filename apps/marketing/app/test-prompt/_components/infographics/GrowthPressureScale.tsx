"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type Stage = {
  count: number;
  label: string;
  state: string;
  descriptor: string;
  questions: number;
  interruptions: number;
  risk: string;
  riskTone: "low" | "moderate" | "high" | "critical";
  x: number;
};

const stages: Stage[] = [
  {
    count: 20,
    label: "20 orders",
    state: "Manageable",
    descriptor: "Memory and quick conversations still work.",
    questions: 3,
    interruptions: 1,
    risk: "Low risk",
    riskTone: "low",
    x: 80,
  },
  {
    count: 50,
    label: "50 orders",
    state: "Messy",
    descriptor: "Updates start slipping. Whiteboard goes stale.",
    questions: 9,
    interruptions: 4,
    risk: "Moderate risk",
    riskTone: "moderate",
    x: 320,
  },
  {
    count: 100,
    label: "100 orders",
    state: "Reactive",
    descriptor: "Handoffs blur. Approvals get buried.",
    questions: 21,
    interruptions: 11,
    risk: "High risk",
    riskTone: "high",
    x: 560,
  },
  {
    count: 200,
    label: "200+ orders",
    state: "Owner-dependent",
    descriptor: "The owner becomes the system.",
    questions: 46,
    interruptions: 28,
    risk: "Owner is the system",
    riskTone: "critical",
    x: 800,
  },
];

function CountUp({
  to,
  duration = 1.2,
  delay = 0,
}: {
  to: number;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration, delay, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to, duration, delay]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function GrowthPressureScale() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const yQuestions = (q: number) => 160 - (q / 50) * 110;
  const yInter = (i: number) => 160 - (i / 30) * 90;

  const buildPath = (yFn: (n: number) => number, key: "questions" | "interruptions") => {
    const pts = stages.map((s) => ({ x: s.x, y: yFn(s[key]) }));
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];
      const cx = (prev.x + curr.x) / 2;
      d += ` C ${cx} ${prev.y}, ${cx} ${curr.y}, ${curr.x} ${curr.y}`;
    }
    return d;
  };

  const questionsPath = buildPath(yQuestions, "questions");
  const interruptionsPath = buildPath(yInter, "interruptions");

  // Area under the questions curve, used as a soft fill
  const areaPath =
    questionsPath + ` L ${stages[stages.length - 1].x} 180 L ${stages[0].x} 180 Z`;

  return (
    <section className="w-full py-12 sm:py-16">
      <div className="container-app">
        <div className="rounded-xl bg-white border border-structural-border overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          {/* Header */}
          <div className="px-6 py-7 md:px-10 md:py-9 border-b border-structural-border">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono uppercase tracking-[0.18em] text-[10px] text-secondary-text">
                Volume vs System Capacity
              </span>
              <span className="h-px flex-1 bg-structural-border" />
              <span className="flex items-center gap-1.5 font-mono uppercase tracking-[0.18em] text-[10px] text-secondary-text">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live model
              </span>
            </div>
            <h3 className="text-[20px] md:text-[22px] font-bold text-charcoal tracking-tight leading-tight">
              Operational strain does not grow evenly.
            </h3>
            <p className="mt-2 text-secondary-text text-[14px] md:text-[15px] leading-relaxed max-w-2xl">
              Small gaps become daily interruptions as volume increases.
            </p>
          </div>

          {/* Chart */}
          <div className="px-4 sm:px-6 md:px-10 pt-8 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
              <div className="flex items-center gap-5">
                <span className="flex items-center gap-2 font-mono uppercase tracking-[0.16em] text-[10px] text-secondary-text">
                  <span className="w-3.5 h-[2px] bg-charcoal" />
                  Open questions
                </span>
                <span className="flex items-center gap-2 font-mono uppercase tracking-[0.16em] text-[10px] text-secondary-text">
                  <span className="w-3.5 h-[2px] bg-primary" />
                  Owner interruptions
                </span>
              </div>
              <span className="font-mono uppercase tracking-[0.18em] text-[10px] text-secondary-text">
                Per day
              </span>
            </div>

            <svg
              ref={ref}
              viewBox="0 0 880 220"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="strainArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1D1D1F" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#1D1D1F" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="warnBand" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#F43F5E" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              {[50, 110, 170].map((y) => (
                <line
                  key={y}
                  x1="40"
                  x2="840"
                  y1={y}
                  y2={y}
                  stroke="#E5E7EB"
                  strokeWidth="0.5"
                  strokeDasharray="2 4"
                />
              ))}

              {/* Final-stage warning band */}
              <rect x="680" y="20" width="160" height="160" fill="url(#warnBand)" />

              {/* Area under questions curve */}
              <motion.path
                d={areaPath}
                fill="url(#strainArea)"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              />

              {/* Owner interruptions line */}
              <motion.path
                d={interruptionsPath}
                fill="none"
                stroke="#0066CC"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.6, ease: "easeOut", delay: 0.1 }}
              />

              {/* Open questions line */}
              <motion.path
                d={questionsPath}
                fill="none"
                stroke="#1D1D1F"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
              />

              {/* Stages */}
              {stages.map((s, i) => (
                <g key={s.count}>
                  <line
                    x1={s.x}
                    y1="20"
                    x2={s.x}
                    y2="180"
                    stroke={i === 3 ? "#FB7185" : "#E5E7EB"}
                    strokeWidth={i === 3 ? "1" : "0.5"}
                    strokeDasharray="2 3"
                  />
                  <motion.circle
                    cx={s.x}
                    cy={yInter(s.interruptions)}
                    r="4"
                    fill="white"
                    stroke="#0066CC"
                    strokeWidth="1.5"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.0 + i * 0.12 }}
                  />
                  <motion.circle
                    cx={s.x}
                    cy={yQuestions(s.questions)}
                    r={i === 3 ? 6 : 4.5}
                    fill={i === 3 ? "#F43F5E" : "white"}
                    stroke={i === 3 ? "#F43F5E" : "#1D1D1F"}
                    strokeWidth="1.5"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.1 + i * 0.12 }}
                  />
                  <text
                    x={s.x}
                    y="205"
                    textAnchor="middle"
                    fill="#6E6E73"
                    fontSize="10"
                    letterSpacing="1.6"
                  >
                    {s.label.toUpperCase()}
                  </text>
                </g>
              ))}

              {/* Subtle pulse on the critical stage */}
              <motion.circle
                cx={800}
                cy={yQuestions(46)}
                r="6"
                fill="none"
                stroke="#F43F5E"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={
                  inView
                    ? { opacity: [0, 0.45, 0], scale: [1, 2.2, 2.6] }
                    : {}
                }
                transition={{
                  duration: 2.4,
                  delay: 1.6,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            </svg>
          </div>

          {/* Milestone cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-structural-border">
            {stages.map((s, i) => {
              const isCritical = s.riskTone === "critical";
              const pill =
                s.riskTone === "low"
                  ? "text-emerald-700 bg-emerald-50 border-emerald-200"
                  : s.riskTone === "moderate"
                  ? "text-amber-700 bg-amber-50 border-amber-200"
                  : s.riskTone === "high"
                  ? "text-orange-700 bg-orange-50 border-orange-200"
                  : "text-rose-700 bg-rose-50 border-rose-200";
              return (
                <motion.div
                  key={s.count}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.3 + i * 0.15,
                    ease: "easeOut",
                  }}
                  className={`relative p-5 md:p-6 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-structural-border lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-structural-border sm:[&:nth-child(-n+2)]:border-b sm:[&:nth-child(-n+2)]:border-structural-border lg:[&:nth-child(-n+2)]:border-b-0 ${
                    isCritical ? "bg-rose-50/30" : ""
                  }`}
                >
                  {isCritical && (
                    <span className="absolute top-3 right-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                      <span className="font-mono uppercase tracking-[0.18em] text-[9px] text-rose-600">
                        Overloaded
                      </span>
                    </span>
                  )}
                  <div className="font-mono uppercase tracking-[0.18em] text-[10px] text-secondary-text mb-2">
                    {s.label}
                  </div>
                  <div className="font-bold text-charcoal text-[16px] tracking-tight">
                    {s.state}
                  </div>
                  <div className="mt-1 text-[12.5px] text-secondary-text leading-snug">
                    {s.descriptor}
                  </div>

                  <div className="mt-5 space-y-2.5">
                    <Row
                      label="Open questions"
                      value={<CountUp to={s.questions} delay={0.6 + i * 0.15} />}
                      emphasized={isCritical}
                    />
                    <Row
                      label="Owner interruptions"
                      value={<CountUp to={s.interruptions} delay={0.7 + i * 0.15} />}
                    />
                  </div>

                  <div className="mt-4">
                    <span
                      className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.16em] text-[10px] px-2 py-1 rounded-sm border ${pill}`}
                    >
                      {isCritical && (
                        <span className="w-1 h-1 rounded-full bg-rose-500" />
                      )}
                      {s.risk}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom insight */}
          <div className="border-t border-structural-border px-6 py-5 md:px-10 md:py-6 bg-[#FBFBFB]">
            <p className="text-[13px] md:text-[14px] text-charcoal leading-relaxed flex flex-wrap items-baseline gap-x-2">
              <span className="font-mono uppercase tracking-[0.18em] text-[10px] text-secondary-text">
                Insight
              </span>
              <span>
                The system that felt{" "}
                <span className="pain-em">flexible at 20 orders</span> becomes the{" "}
                <span className="pain-em">bottleneck at 200</span>.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  emphasized,
}: {
  label: string;
  value: ReactNode;
  emphasized?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="font-mono uppercase tracking-[0.16em] text-[10px] text-secondary-text">
        {label}
      </span>
      <span
        className={`font-bold tabular-nums ${
          emphasized
            ? "text-rose-600 text-[20px]"
            : "text-charcoal text-[18px]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
