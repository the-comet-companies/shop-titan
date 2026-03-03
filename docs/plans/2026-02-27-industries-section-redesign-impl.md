# IndustriesSection Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the disconnected light-bg two-zone section with a unified dark-themed section that flows: header → marquee → capability badges.

**Architecture:** Full file rewrite of `IndustriesSection.tsx`. The `capabilities` array gains icon fields. The marquee logic, `distributeIntoRows`, `industryRows`, `highlightWords`, and the IntersectionObserver interval are all preserved verbatim. The two-column bottom layout and plain SVG checklist are deleted. Background becomes `bg-background-dark` with top/bottom gradient bleeds and faint animated orbs.

**Tech Stack:** Framer Motion (`motion`, `AnimatePresence`), Tailwind CSS, TypeScript, React. No new dependencies.

---

## Task 1: Rewrite IndustriesSection.tsx

**Files:**
- Modify: `apps/marketing/components/sections/IndustriesSection.tsx`

This is a full file replacement. The complete new content is provided below — copy it exactly.

**Step 1: Write the complete new file**

Replace the entire contents of `apps/marketing/components/sections/IndustriesSection.tsx` with:

```tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const capabilities = [
    { label: "Take in custom orders", icon: "shopping_bag" },
    { label: "Manage artwork", icon: "palette" },
    { label: "RFQs & Work with subcontractors", icon: "handshake" },
    { label: "Schedule machines", icon: "precision_manufacturing" },
    { label: "Assign production tasks", icon: "task_alt" },
    { label: "Manage pricing matrices", icon: "grid_on" },
    { label: "Deal with rush jobs", icon: "bolt" },
    { label: "Track QC", icon: "verified" },
    { label: "Coordinate vendors", icon: "people" },
    { label: "Handle sampling and reorders", icon: "repeat" },
];

const industries = [
    "Manual press shops",
    "Automatic press shops",
    "Contract printers",
    "Specialty ink printers",
    "Plastisol transfer producers",
    "Large format textile printers",
    "Commercial embroidery shops",
    "Multi-head operators",
    "Contract embroidery houses",
    "Cap embroidery specialists",
    "Patch + embroidery hybrids",
    "Small batch decorators",
    "Ecommerce fulfillment printers",
    "In-house brand production",
    "Sample studios",
    "Gang sheet producers",
    "Wholesale transfer suppliers",
    "Hybrid screen + DTF shops",
    "Small print shops transitioning from vinyl",
    "Sports jersey producers",
    "All-over print manufacturers",
    "Promotional product decorators",
    "Polyester apparel decorators",
    "Boutique apparel decorators",
    "Event merch printers",
    "Small sign shops",
    "Custom one-off printers",
    "Hard goods decorators",
    "Bottle/tumbler printers",
    "Phone case printers",
    "Industrial flatbed operators",
    "Promotional item printers",
    "Plastic product decorators",
    "Promo item suppliers",
    "Industrial parts decorators",
    "Tumbler engraving shops",
    "Corporate gifting companies",
    "Wood/acrylic decorators",
    "Leather engraving shops",
    "Chenille producers",
    "Varsity patch makers",
    "Woven patch manufacturers",
    "PVC patch producers",
    "Leather patch shops",
    "Velcro patch makers",
    "Enzyme wash facilities",
    "Acid wash houses",
    "Pigment dye facilities",
    "Vintage wash processors",
    "Garment distressing facilities",
    "Garment dye specialists",
    "Tie-dye production",
    "Dip-dye processors",
    "Custom color labs",
    "Leather embossers",
    "Apparel embossers",
    "Foil stamp operators",
    "Heat emboss operators",
    "Sand blasting operators",
    "Bleach effect printers",
    "Hand distressing studios",
    "Cut-and-destroy processors",
    "Campus merch producers",
    "Athletic department printers",
    "Police uniform suppliers",
    "Fire department apparel",
];

const uniqueIndustries = Array.from(new Set(industries));

function distributeIntoRows(items: string[], numRows = 2) {
    const rows: string[][] = Array.from({ length: numRows }, () => []);
    items.forEach((item, i) => { rows[i % numRows].push(item); });
    return rows;
}

const industryRows = distributeIntoRows(uniqueIndustries, 2);

const highlightWords = [
    "embroidery shops",
    "screen printers",
    "DTF producers",
    "promo distributors",
    "sublimation shops",
    "print brokers",
    "apparel brands",
];

export default function IndustriesSection() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !interval) {
                    interval = setInterval(() => {
                        setCurrentWordIndex(p => (p + 1) % highlightWords.length);
                    }, 2500);
                } else if (!entry.isIntersecting && interval) {
                    clearInterval(interval);
                    interval = null;
                }
            },
            { threshold: 0.1 }
        );
        const el = sectionRef.current;
        if (el) observer.observe(el);
        return () => {
            observer.disconnect();
            if (interval) clearInterval(interval);
        };
    }, []);

    return (
        <section
            id="industries"
            ref={sectionRef}
            className="relative bg-background-dark overflow-hidden pt-40 pb-40"
        >
            {/* Animated gradient orb background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50" aria-hidden="true">
                <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-3xl animate-gradient-flow-1" />
                <div className="absolute top-1/2 -left-48 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.04] blur-3xl animate-gradient-flow-2" />
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-teal-400/[0.03] blur-3xl animate-gradient-flow-3" />
            </div>

            {/* Top bleed: previous light section → dark */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background-light dark:from-background-dark to-transparent pointer-events-none z-0" />
            {/* Bottom bleed: dark → next light section */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pointer-events-none z-0" />

            {/* All content sits above the gradient bleeds */}
            <div className="relative z-10">

                {/* Section Header */}
                <div className="max-w-3xl mx-auto px-mobile text-center mb-16 md:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold tracking-wider uppercase mb-6"
                    >
                        Who We Serve
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
                    >
                        Built for businesses who{' '}
                        <span className="italic font-serif opacity-90">actually make</span> things.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex flex-wrap items-center justify-center gap-2 text-xl md:text-2xl text-white/60 font-medium"
                    >
                        <span>Not just for</span>
                        <div className="relative inline-flex overflow-hidden h-8 items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentWordIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="block italic font-serif text-white whitespace-nowrap"
                                >
                                    &quot;{highlightWords[currentWordIndex]}&quot;
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Marquee */}
                <div className="relative overflow-hidden pb-8">
                    {/* Edge fades — must match section bg */}
                    <div className="absolute left-0 inset-y-0 w-24 md:w-48 bg-gradient-to-r from-background-dark to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 inset-y-0 w-24 md:w-48 bg-gradient-to-l from-background-dark to-transparent z-10 pointer-events-none" />

                    <div className="flex flex-col gap-4 md:gap-5">
                        {industryRows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="carousel-track shrink-0"
                                style={{
                                    animationDuration: '120s',
                                    animationDelay: `${rowIndex * -12}s`,
                                    animationDirection: rowIndex % 2 === 0 ? 'normal' : 'reverse',
                                    willChange: 'transform',
                                }}
                            >
                                {[...row, ...row].map((industry, i) => (
                                    <span
                                        key={`${rowIndex}-${i}`}
                                        className="inline-flex items-center px-4 py-2 mr-3 rounded-full border border-white/10 text-sm font-medium text-white/75 whitespace-nowrap bg-white/[0.05] hover:bg-white/10 hover:border-white/20 transition-colors"
                                    >
                                        {industry}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bridge text */}
                <div className="max-w-3xl mx-auto px-mobile text-center mt-10 mb-8">
                    <p className="text-sm text-white/40 font-medium tracking-widest uppercase">
                        If your shop handles any of these, you&apos;re in the right place.
                    </p>
                </div>

                {/* Capability Badges */}
                <div className="max-w-4xl mx-auto px-mobile pb-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {capabilities.map((capability, index) => (
                            <motion.div
                                key={capability.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: 'spring', stiffness: 280, damping: 22, delay: index * 0.06 }}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.08] border border-white/[0.15] text-sm font-medium text-white/90 hover:bg-white/[0.15] hover:border-white/25 transition-colors duration-200 cursor-default"
                            >
                                <span className="material-symbols-outlined text-primary text-base leading-none">{capability.icon}</span>
                                {capability.label}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
```

**Step 2: TypeScript check**

Run: `cd apps/marketing && npx tsc --noEmit`
Expected: No errors.

**Step 3: Commit**

```bash
git add apps/marketing/components/sections/IndustriesSection.tsx
git commit -m "feat: industries section - dark redesign with unified marquee and capability badges"
```

---

## Task 2: Visual verification

**Files:** none (visual check only)

**Step 1: Start dev server**

Run: `cd apps/marketing && npm run dev`

Open `http://localhost:3000` and scroll to the Industries section.

**Step 2: Verify transitions**

- [ ] **Top bleed (light mode):** Scrolling into the section from above — the white/near-white of the previous section should fade smoothly into the dark background over ~160px. There should be no hard white-to-black edge.
- [ ] **Bottom bleed (light mode):** The dark section fades back to light at the bottom before the next section begins.
- [ ] **Dark mode:** Both bleeds are invisible (both sides are dark) — section appears seamlessly continuous with surrounding dark-mode backgrounds.

**Step 3: Verify section header**

- [ ] `"WHO WE SERVE"` eyebrow pill: white/10 frosted rounded pill, white text, visible against dark bg
- [ ] H2: large (`text-6xl` on desktop), white, `"actually make"` uses `font-serif italic`
- [ ] Rotating subtitle: `"Not just for"` in muted white/60, rotating word appears in white serif italic
- [ ] Rotating word transitions smoothly (slide up/down with `AnimatePresence`) every 2.5s
- [ ] All three elements stagger in when section enters viewport

**Step 4: Verify marquee**

- [ ] Two rows of industry pills scrolling — row 1 left-to-right, row 2 right-to-left
- [ ] Pills: semi-transparent dark (`bg-white/[0.05]`), subtle white border
- [ ] Edge fades match the dark bg (not white — this was the bug in the original)
- [ ] Scrolling is smooth and continuous — no gap or jump at the seam

**Step 5: Verify bridge text + capability badges**

- [ ] `"IF YOUR SHOP HANDLES ANY OF THESE..."` appears in faint uppercase between marquee and badges
- [ ] 10 badges flex-wrap in a centered cluster
- [ ] Each badge: `shopping_bag`, `palette`, etc. icons render in `text-primary` blue
- [ ] Badge labels are `text-white/90` — readable on dark bg
- [ ] Badges spring in with stagger (first badge at 0ms, last at ~540ms)
- [ ] Hover state: badge lightens slightly — confirms it's interactive-feeling

**Step 6: Commit if visual fixes needed**

If you made any tweaks during verification:
```bash
git add apps/marketing/components/sections/IndustriesSection.tsx
git commit -m "fix: industries section - visual polish after review"
```

---

## Notes

- `carousel-track` is a CSS animation class defined in `apps/marketing/app/globals.css` — do not remove or rename it
- `bg-background-dark` is a custom Tailwind token defined in `apps/marketing/tailwind.config.ts` — verify the exact value matches what PainPoint3D uses for its dark background (`dark:bg-black` uses `#000000`, `bg-background-dark` is likely `#0a0a0a`)
- `animate-gradient-flow-1/2/3` are keyframe animation classes defined in `globals.css` — same as used in FeaturesSection
- `font-serif` maps to `Crimson Pro` via `var(--font-crimson)` — already loaded in `app/layout.tsx`
- `px-mobile` is a custom Tailwind utility for horizontal section padding — already in the project
- The `overflow-hidden` on the section is required to prevent the marquee rows from showing outside the section bounds
- `pt-40 pb-40` (160px top/bottom) gives the gradient bleeds room to breathe — the actual content starts at z-10, sitting above the bleeds
- If `bg-background-dark` doesn't exist as a Tailwind token, substitute `bg-[#0a0a0a]` — but check `tailwind.config.ts` first
