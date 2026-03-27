# Founder Story CTA Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a `FounderStorySection` to the home page between the testimonials (ShowcaseSection) and the coming-soon integrations (ComingSoonSection) that drives users to `/about` by surfacing the founder origin story and the "Building Shop Titan" video thumbnail.

**Architecture:** Single new client component (`FounderStorySection.tsx`) with a dark background, two-column layout (copy left, video thumbnail right on desktop; stacked on mobile), and Framer Motion `whileInView` animations. The entire section navigates to `/about` via a CTA button and the thumbnail card. No new state, no data fetching.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion

**Design doc:** `docs/plans/2026-03-03-founder-story-cta-design.md`

---

### Task 1: Create `FounderStorySection.tsx`

**Files:**
- Create: `apps/marketing/components/sections/FounderStorySection.tsx`

**Step 1: Create the file with the full component**

```tsx
'use client';

import { motion } from 'framer-motion';

export default function FounderStorySection() {
    return (
        <section className="relative bg-charcoal dark:bg-gray-950 py-24 md:py-32 overflow-hidden">
            {/* Subtle background orbs for depth */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-3xl" />
                <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.05] blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-mobile relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column — Copy */}
                    <div className="flex flex-col gap-6">
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="inline-block w-fit px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase"
                        >
                            The Origin
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
                        >
                            Built by someone who lived it.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="text-lg text-gray-400 leading-relaxed max-w-lg"
                        >
                            Over 15 years running a large-scale print shop, Michael Monfared felt the same stress every owner does — no visibility, no control, no way to step away. So he built his own solution. Now he&apos;s offering it to everyone.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                                <span className="text-primary font-bold text-sm">M</span>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">Michael Monfared</p>
                                <p className="text-gray-500 text-xs font-medium">Founder &amp; CEO, Shop Titan</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <a
                                href="/about"
                                className="inline-flex items-center gap-2 px-8 py-3 min-h-[44px] text-base font-semibold text-white relative overflow-hidden group rounded-full"
                            >
                                <div className="absolute inset-0 bg-white/8 group-hover:bg-white/14 transition-colors rounded-full" />
                                <div className="absolute inset-0 border-2 border-white/20 group-hover:border-white/35 transition-colors rounded-full" />
                                <span className="relative z-10">Our Story</span>
                                <span className="material-symbols-outlined text-lg relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column — Video Thumbnail Card */}
                    <motion.a
                        href="/about"
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group cursor-pointer block"
                        aria-label="Watch Building Shop Titan — Our Story"
                    >
                        {/* Dark background with gradient */}
                        <div className="absolute inset-0 bg-neutral-900">
                            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" />
                        </div>

                        {/* Subtle grid texture */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                                <span className="material-symbols-outlined text-3xl md:text-4xl text-white ml-1">play_arrow</span>
                            </div>
                        </div>

                        {/* Bottom gradient for text readability */}
                        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                        {/* Label */}
                        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-10">
                            <span className="inline-block px-1.5 py-0.5 md:px-2 md:py-1 bg-white/20 backdrop-blur-sm rounded text-[8px] md:text-[10px] font-bold text-white mb-1 md:mb-2 uppercase tracking-wide">
                                Watch the Film
                            </span>
                            <h3 className="text-white text-lg md:text-2xl font-bold">Building Shop Titan</h3>
                        </div>
                    </motion.a>

                </div>
            </div>
        </section>
    );
}
```

**Step 2: Verify the file was created**

Check that the file exists at `apps/marketing/components/sections/FounderStorySection.tsx`.

**Step 3: Commit**

```bash
git add apps/marketing/components/sections/FounderStorySection.tsx
git commit -m "feat(marketing): add FounderStorySection component"
```

---

### Task 2: Insert section into the home page

**Files:**
- Modify: `apps/marketing/app/page.tsx`

**Step 1: Add the import at the top of `page.tsx`**

After the existing `ShowcaseSection` import (line 9), add:

```tsx
import FounderStorySection from "@/components/sections/FounderStorySection";
```

**Step 2: Insert the component in JSX**

In the `<main>` block, insert `<FounderStorySection />` between `<ShowcaseSection />` and `<ComingSoonSection />`:

```tsx
<ShowcaseSection />
<FounderStorySection />
<ComingSoonSection />
```

**Step 3: Verify the full `page.tsx` looks correct**

The import list and JSX order should be:
```
HeroSection
PainPointSection
CanYouRelateSection
WorkflowVideoSection
FeaturesSection
BenefitsSection
IndustriesSection
ShowcaseSection
FounderStorySection   ← new
ComingSoonSection
CtaSection
```

**Step 4: Commit**

```bash
git add apps/marketing/app/page.tsx
git commit -m "feat(marketing): insert FounderStorySection between testimonials and coming soon"
```

---

### Task 3: Visual QA checklist

Spin up the dev server (`cd apps/marketing && pnpm dev` or `pnpm --filter marketing dev` from root) and verify:

- [ ] Dark section appears between Showcase (gray) and ComingSoon (light) — clear visual contrast on both edges
- [ ] Left column copy is legible on dark background
- [ ] Eyebrow label, headline, copy, founder avatar, and CTA button all animate in with stagger
- [ ] CTA button "Our Story →" navigates to `/about`
- [ ] Right thumbnail card navigates to `/about` when clicked
- [ ] Play button scales up on hover
- [ ] On mobile: copy stacks above thumbnail, both are full width
- [ ] On desktop: two-column layout, columns are vertically centered
- [ ] No layout overflow or clipping

---

### Task 4: Final commit

```bash
git add -A
git commit -m "feat(marketing): add founder story CTA section to home page"
```
