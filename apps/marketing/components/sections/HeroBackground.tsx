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
  { id: 'intake', label: 'Intake', icon: 'inbox', x: 890, y: 120, mobile: true, driftPeriod: 9, driftDelay: 0, w: 110 },
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

// pathD draws hub→node, terminating at the pill's edge (not the center)
const PILL_EDGE_OFFSET = 26; // ≈ H/2 + 2px buffer — stops line at pill border

function pathD(node: NodeDef, hub: HubPos) {
  // Direction vector from hub to node
  const dx = node.x - hub.x;
  const dy = node.y - hub.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  // End point: node center minus one pill-radius toward the hub
  const endX = node.x - (dx / len) * PILL_EDGE_OFFSET;
  const endY = node.y - (dy / len) * PILL_EDGE_OFFSET;
  const cp = ctrlPt(hub.x, hub.y, endX, endY);
  return `M${hub.x},${hub.y} Q${cp.x},${cp.y} ${endX},${endY}`;
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
    // Reversed: travel from node (path end) back toward hub (path start)
    const rawProgress = ((elapsed / durationMs) + startOffset) % 1;
    const progress = 1 - rawProgress;

    const totalLength = totalLengthRef.current;
    const point = pathEl.getPointAtLength(progress * totalLength);
    circle.setAttribute('cx', String(point.x));
    circle.setAttribute('cy', String(point.y));

    // Fade: in over first 10% of travel, out over last 15% (near hub)
    const opacity =
      rawProgress < 0.10 ? rawProgress / 0.10 :
        rawProgress > 0.85 ? (1 - rawProgress) / 0.15 :
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
  const H = 48;
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
        transition={{ duration: 0.7, delay: 0.3 + index * 1.1, ease: 'easeOut' }}
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
          // 1.5s after node appears (node appears at 1.0 + index*1.1, +0.5s clearance)
          delay: 1.5 + index * 1.1 + node.driftDelay,
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
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 1.0 + index * 1.1 }}
        >
          <div
            // @ts-expect-error xmlns required for SVG foreignObject
            xmlns="http://www.w3.org/1999/xhtml"
            className="flex items-center gap-2 px-3 py-2.5
                       rounded-full
                       bg-white/75 dark:bg-slate-900/80
                       backdrop-blur-md
                       border border-primary/25 dark:border-primary/20
                       shadow-[0_4px_20px_rgba(0,102,204,0.13)]
                       whitespace-nowrap"
            style={{ width: W, height: H }}
          >
            <span className="flex-none flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20">
              <span className="material-symbols-outlined text-primary leading-none" style={{ fontSize: '13px' }}>
                {node.icon}
              </span>
            </span>
            <span className="text-[11px] font-semibold tracking-wide text-charcoal dark:text-white">
              {node.label}
            </span>
          </div>
        </motion.foreignObject>
      </motion.g>
    </>
  );
}

function Hub({ prefersReduced, pos }: { prefersReduced: boolean | null; pos: HubPos }) {
  return (
    <g>
      {/* Pulse rings — 3 ripples, start after all nodes appear (~5.8s), then repeat every 3.5s */}
      {[5.8, 7.0, 8.2].map((delay, i) => (
        <motion.circle
          key={i}
          cx={pos.x} cy={pos.y} r={42}
          fill="none"
          stroke="#0066CC"
          strokeWidth={1.5}
          initial={{ scale: 1, opacity: prefersReduced ? 0 : 0.5 }}
          animate={prefersReduced ? { scale: 1, opacity: 0 } : { scale: 4.5, opacity: 0 }}
          transition={prefersReduced ? { duration: 0 } : { duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: 'easeOut', delay }}
          style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
        />
      ))}

      {/* Hub entrance — inside-out: core pops first, outer rings expand after */}

      {/* Entrance burst — single pulse fires once hub appears, bridges gap to repeating pulses */}
      {!prefersReduced && (
        <motion.circle
          cx={pos.x} cy={pos.y} r={42}
          fill="none"
          stroke="#0066CC"
          strokeWidth={2.5}
          initial={{ scale: 0.8, opacity: 0.65 }}
          animate={{ scale: 5, opacity: 0 }}
          transition={{ duration: 2.2, ease: 'easeOut', delay: 0.65 }}
          style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
        />
      )}

      {/* Inner dot — springs in first with bigger bounce, then breathes continuously */}
      <motion.circle cx={pos.x} cy={pos.y} r={8} fill="#0066CC" fillOpacity={0.80}
        initial={{ scale: 0, opacity: 0 }}
        animate={prefersReduced
          ? { scale: 1, opacity: 1 }
          : { scale: [0, 1.9, 0.75, 1.25, 0.95, 1], opacity: 1 }
        }
        transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
        style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
      />
      {/* Continuous breath on inner dot */}
      {!prefersReduced && (
        <motion.circle cx={pos.x} cy={pos.y} r={8} fill="#0066CC" fillOpacity={0.50}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut', delay: 1 }}
          style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
        />
      )}

      {/* Mid rings — expand outward after core */}
      <motion.circle cx={pos.x} cy={pos.y} r={16} fill="#0066CC" fillOpacity={0.20}
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.3 }}
        style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
      />
      <motion.circle cx={pos.x} cy={pos.y} r={28} fill="#0066CC" fillOpacity={0.12}
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 160, damping: 16, delay: 0.45 }}
        style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
      />
      <motion.circle cx={pos.x} cy={pos.y} r={42} fill="#0066CC" fillOpacity={0.06}
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 140, damping: 18, delay: 0.6 }}
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
        <defs>
          {/* Aurora glow — soft radial, left-center */}
          <radialGradient id="aurora-left" cx="25%" cy="50%" r="45%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#0066CC" stopOpacity={0.45} />
            <stop offset="55%" stopColor="#0066CC" stopOpacity={0.15} />
            <stop offset="100%" stopColor="#0066CC" stopOpacity={0} />
          </radialGradient>

          {/* Dot grid pattern — 2px dots every 36px */}
          <pattern id="dot-grid" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
            <circle cx="18" cy="18" r="1.5" fill="#0066CC" fillOpacity={0.65} />
          </pattern>

          {/* Fade mask: opaque on both edges, transparent in middle (around hub) */}
          <linearGradient id="dot-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity={1} />
            <stop offset="40%" stopColor="white" stopOpacity={0} />
            <stop offset="65%" stopColor="white" stopOpacity={0} />
            <stop offset="85%" stopColor="white" stopOpacity={0.5} />
            <stop offset="100%" stopColor="white" stopOpacity={0.7} />
          </linearGradient>
          <mask id="dot-mask">
            <rect x="0" y="0" width="1440" height="720" fill="url(#dot-fade)" />
          </mask>
        </defs>

        {/* Left-side atmosphere: aurora glow + dot grid */}
        <rect x="0" y="0" width="1440" height="720" fill="url(#aurora-left)" />
        <rect x="0" y="0" width="1440" height="720" fill="url(#dot-grid)" mask="url(#dot-mask)" />
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
