'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion, useAnimationFrame } from 'framer-motion';

// ── Data ──────────────────────────────────────────────────────────────────────

// Desktop hub: 65% from left in 1440-wide viewBox
const HUB = { x: 840, y: 340 };

// Mobile hub: lower-right corner, clear of all text and buttons.
// On 375×812 mobile the visible SVG x-range ≈ 512–927; y=580 is below the CTA buttons.
const MOBILE_HUB = { x: 760, y: 560 };

type HubPos = typeof HUB;

const NODES = [
  { id: 'intake', label: 'Intake', icon: 'inbox', x: 840, y: 90, mobile: true, driftPeriod: 9, driftDelay: 0, w: 110 },
  { id: 'proofing', label: 'Proofing', icon: 'rate_review', x: 1120, y: 140, mobile: true, driftPeriod: 12, driftDelay: 1.5, w: 120 },
  { id: 'production', label: 'Production', icon: 'precision_manufacturing', x: 1240, y: 340, mobile: true, driftPeriod: 8, driftDelay: 3, w: 130 },
  { id: 'fulfillment', label: 'Fulfillment', icon: 'local_shipping', x: 1080, y: 540, mobile: false, driftPeriod: 14, driftDelay: 0.8, w: 125 },
  { id: 'status_updates', label: 'Status Updates', icon: 'notifications', x: 860, y: 580, mobile: false, driftPeriod: 10, driftDelay: 4, w: 148 },
] as const;

type NodeDef = typeof NODES[number];

function ctrlPt(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  return { x: mx - (dy / len) * len * 0.12, y: my + (dx / len) * len * 0.12 };
}

// pathD always uses desktop coordinates (mobile renders hub-only, no paths)
function pathD(node: NodeDef, hub: HubPos) {
  const cp = ctrlPt(node.x, node.y, hub.x, hub.y);
  return `M${node.x},${node.y} Q${cp.x},${cp.y} ${hub.x},${hub.y}`;
}

// ── Sub-components ────────────────────────────────────────────────────────────

interface ParticleProps {
  pathId: string;
  duration: number;
  startOffset: number; // 0-1, staggers particles so they don't bunch
}

function Particle({ pathId, duration, startOffset }: ParticleProps) {
  const circleRef = useRef<SVGCircleElement>(null);
  const startTimeRef = useRef<number | null>(null);
  // Cache total length — getTotalLength() triggers layout recalc if called every frame
  const totalLengthRef = useRef<number | null>(null);

  useAnimationFrame((time) => {
    const circle = circleRef.current;
    const pathEl = document.getElementById(pathId) as SVGPathElement | null;
    if (!circle || !pathEl) return;

    if (totalLengthRef.current === null) {
      totalLengthRef.current = pathEl.getTotalLength();
    }

    if (startTimeRef.current === null) startTimeRef.current = time;
    const elapsed = time - startTimeRef.current;
    const durationMs = duration * 1000;
    const progress = ((elapsed / durationMs) + startOffset) % 1;

    const totalLength = totalLengthRef.current;
    const point = pathEl.getPointAtLength(progress * totalLength);
    circle.setAttribute('cx', String(point.x));
    circle.setAttribute('cy', String(point.y));

    // Fade: in over first 10%, out over last 15%
    const opacity =
      progress < 0.10 ? progress / 0.10 :
        progress > 0.85 ? (1 - progress) / 0.15 :
          1;
    circle.setAttribute('opacity', String(opacity * 0.9));
  });

  return (
    <circle
      ref={circleRef}
      r={3}
      fill="#0066CC"
      opacity={0}
    />
  );
}

function NetworkNode({
  node, index, isMobile, prefersReduced, hub,
}: {
  node: NodeDef; index: number; isMobile: boolean; prefersReduced: boolean | null; hub: HubPos;
}) {
  const W = node.w;
  const H = 44;
  const particleCount = isMobile ? 1 : 2;

  // Always use desktop coordinates — mobile renders Hub-only, no NetworkNodes
  const nx = node.x;
  const ny = node.y;

  return (
    <>
      {/* Path from node to hub */}
      <motion.path
        id={`path-${node.id}`}
        d={pathD(node, hub)}
        fill="none"
        stroke="#0066CC"
        strokeOpacity={0.45}
        strokeWidth={2}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 + 0.4, ease: 'easeOut' }}
      />

      {/* Particles travel from node to hub — only when motion is allowed */}
      {!prefersReduced && Array.from({ length: particleCount }, (_, i) => (
        // composite key prevents React reusing state across nodes
        <Particle
          key={`particle-${node.id}-${i}`}
          pathId={`path-${node.id}`}
          duration={2.5 + nx * 0.0005} // slight variation per path, stable across re-renders
          startOffset={i / particleCount}
        />
      ))}

      {/* Drifting node card */}
      <motion.g
        animate={prefersReduced ? {} : { y: [0, -6, 0, 6, 0], x: [0, 3, 0, -3, 0] }}
        transition={{
          duration: node.driftPeriod,
          // 1.5s offset clears entrance animation (worst case ~1.3s)
          delay: 1.5 + node.driftDelay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.foreignObject
          x={nx - W / 2}
          y={ny - H / 2}
          width={W}
          height={H}
          style={{ overflow: 'visible' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
        >
          <div
            // @ts-expect-error xmlns required for SVG foreignObject
            xmlns="http://www.w3.org/1999/xhtml"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl
                       bg-white dark:bg-slate-800
                       border-2 border-primary/50 dark:border-primary/40
                       shadow-lg
                       text-xs font-bold text-charcoal dark:text-white
                       whitespace-nowrap"
            style={{ width: W, height: H }}
          >
            <span className="material-symbols-outlined text-primary text-sm leading-none">
              {node.icon}
            </span>
            {node.label}
          </div>
        </motion.foreignObject>
      </motion.g>
    </>
  );
}

function Hub({ prefersReduced, pos }: { prefersReduced: boolean | null; pos: HubPos }) {
  return (
    <g>
      {/* Pulse ring — expands and fades every ~3.5s */}
      <motion.circle
        cx={pos.x} cy={pos.y} r={28}
        fill="none"
        stroke="#0066CC"
        strokeWidth={1}
        initial={{ scale: 1, opacity: prefersReduced ? 0 : 0.4 }}
        animate={prefersReduced ? { scale: 1, opacity: 0 } : { scale: 3, opacity: 0 }}
        transition={prefersReduced ? { duration: 0 } : { duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: 'easeOut' }}
        style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
      />

      {/* Static rings with entrance spring */}
      <motion.circle cx={pos.x} cy={pos.y} r={42} fill="#0066CC" fillOpacity={0.06}
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
        style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
      />
      <motion.circle cx={pos.x} cy={pos.y} r={28} fill="#0066CC" fillOpacity={0.10}
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.15 }}
        style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
      />
      <motion.circle cx={pos.x} cy={pos.y} r={16} fill="#0066CC" fillOpacity={0.20}
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
        style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
      />
      <motion.circle cx={pos.x} cy={pos.y} r={8} fill="#0066CC" fillOpacity={0.60}
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.25 }}
        style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
      />
    </g>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function HeroBackground() {
  // null before hook resolves — treated as falsy (animate by default)
  const prefersReduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  const hub = isMobile ? MOBILE_HUB : HUB;

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-80 dark:opacity-70"
      >
        {/* On mobile: only the hub glow — no nodes or paths to avoid overlapping full-width text */}
        {!isMobile && NODES.map((node, i) => (
          <NetworkNode
            key={node.id}
            node={node}
            index={i}
            isMobile={isMobile}
            prefersReduced={prefersReduced}
            hub={hub}
          />
        ))}
        <Hub prefersReduced={prefersReduced} pos={hub} />
      </svg>
    </div>
  );
}
