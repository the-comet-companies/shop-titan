'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

// ── Data ──────────────────────────────────────────────────────────────────────

const HUB = { x: 840, y: 340 };

const NODES = [
  { id: 'quotes',    label: 'Quotes',    icon: 'request_quote',          x: 240,  y: 130, mobile: true  },
  { id: 'orders',    label: 'Orders',    icon: 'shopping_cart',           x: 1120, y: 90,  mobile: true  },
  { id: 'scheduler', label: 'Scheduler', icon: 'precision_manufacturing', x: 1280, y: 320, mobile: true  },
  { id: 'pricing',   label: 'Pricing',   icon: 'grid_on',                 x: 1180, y: 530, mobile: false },
  { id: 'analytics', label: 'Analytics', icon: 'analytics',               x: 880,  y: 610, mobile: false },
  { id: 'customers', label: 'Customers', icon: 'people',                  x: 460,  y: 520, mobile: false },
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

function pathD(node: NodeDef) {
  const cp = ctrlPt(node.x, node.y, HUB.x, HUB.y);
  return `M${node.x},${node.y} Q${cp.x},${cp.y} ${HUB.x},${HUB.y}`;
}

// ── Sub-components ────────────────────────────────────────────────────────────

function NetworkNode({ node, index }: { node: NodeDef; index: number }) {
  const W = 110;
  const H = 44;

  return (
    <g>
      {/* Path draws on after node appears */}
      <motion.path
        id={`path-${node.id}`}
        d={pathD(node)}
        fill="none"
        stroke="#0066CC"
        strokeOpacity={0.25}
        strokeWidth={1.5}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 + 0.4, ease: 'easeOut' }}
      />

      {/* Node card */}
      <motion.foreignObject
        x={node.x - W / 2}
        y={node.y - H / 2}
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
                     bg-white/80 dark:bg-white/5
                     border border-primary/20 dark:border-white/10
                     backdrop-blur-sm shadow-sm
                     text-xs font-semibold text-charcoal dark:text-white
                     whitespace-nowrap"
          style={{ width: W, height: H }}
        >
          <span className="material-symbols-outlined text-primary text-sm leading-none">
            {node.icon}
          </span>
          {node.label}
        </div>
      </motion.foreignObject>
    </g>
  );
}

function Hub() {
  return (
    <g>
      {/* Pulse ring — emits every 3s (added in Task 3, placeholder comment here) */}

      {/* Static rings with entrance spring */}
      <motion.circle
        cx={HUB.x} cy={HUB.y} r={42}
        fill="#0066CC" fillOpacity={0.06}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
        style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
      />
      <motion.circle
        cx={HUB.x} cy={HUB.y} r={28}
        fill="#0066CC" fillOpacity={0.10}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.15 }}
        style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
      />
      <motion.circle
        cx={HUB.x} cy={HUB.y} r={16}
        fill="#0066CC" fillOpacity={0.20}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
        style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
      />
      <motion.circle
        cx={HUB.x} cy={HUB.y} r={8}
        fill="#0066CC" fillOpacity={0.60}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.25 }}
        style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
      />
    </g>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function HeroBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  const visibleNodes = isMobile ? NODES.filter(n => n.mobile) : NODES;

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-40 dark:opacity-30"
      >
        {visibleNodes.map((node, i) => (
          <NetworkNode key={node.id} node={node} index={i} />
        ))}
        <Hub />
      </svg>
    </div>
  );
}
