# Features Section Glassmorphism Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Elevate the FeaturesSection with a glassmorphism visual system: animated gradient orb background, frosted glass cards, rose/blue-tinted pain/solution panels, a glassmorphic nav pill with scroll progress track, and polished Tier 2 expand/collapse cards.

**Architecture:** All changes are isolated to `FeaturesSection.tsx` and `FeatureGridCard.tsx`. No new components are created. The gradient orb keyframes already exist in `tailwind.config.ts`. Framer Motion's `AnimatePresence` replaces the basic show/hide pattern in `FeatureGridCard`. Note: these are pure visual changes — no unit tests apply; each task ends with a visual verification step instead.

**Tech Stack:** Next.js, Framer Motion, Tailwind CSS, Material Symbols icons

---

## Reference

Design doc: `docs/plans/2026-02-24-features-section-redesign.md`

**Color palette (tailwind.config.ts):**
- `primary`: `#0066CC`
- `background-light`: `#FBFBFB`
- `background-dark`: `#0a0a0a`
- `charcoal`: `#1D1D1F`
- `secondary-text`: `#6E6E73`
- `structural-border`: `#E5E7EB`
- `surface`: `#FFFFFF`

**Existing animation keyframes (already in tailwind.config.ts):**
- `animate-gradient-flow-1` through `animate-gradient-flow-4` — slow blob movement animations

---

## Task 1: Add Animated Gradient Orb Background to FeaturesSection

**Files:**
- Modify: `apps/marketing/components/sections/FeaturesSection.tsx:159-161`

**Step 1: Add `relative overflow-hidden` to the section tag**

Find this line (~line 160):
```tsx
<section id="features" className="pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-28 lg:pb-32 bg-background-light dark:bg-background-dark">
```

Replace with:
```tsx
<section id="features" className="pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-28 lg:pb-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
```

**Step 2: Insert the orb layer immediately after the opening `<section>` tag (before the `<div className="max-w-7xl ...">` line)**

```tsx
{/* Animated gradient orb background */}
<div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-3xl animate-gradient-flow-1" />
    <div className="absolute top-1/2 -left-48 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.04] blur-3xl animate-gradient-flow-2" />
    <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-teal-400/[0.03] blur-3xl animate-gradient-flow-3" />
</div>
```

**Step 3: Visual verification**

Run `npm run dev` in `apps/marketing`. Open the page and scroll to the features section. You should see very subtle animated color blobs in the background — blue top-right, indigo center-left, teal bottom. They should be barely perceptible in light mode and more visible in dark mode. They must NOT cover text or receive mouse events.

**Step 4: Commit**

```bash
git add apps/marketing/components/sections/FeaturesSection.tsx
git commit -m "feat(marketing): add animated gradient orb background to FeaturesSection"
```

---

## Task 2: Apply Glass Treatment to FeatureBlock Card Shell

**Files:**
- Modify: `apps/marketing/components/sections/FeaturesSection.tsx` — the `FeatureBlock` component (~line 530–540)

**Step 1: Update the `motion.div` wrapper className in `FeatureBlock`**

Find (~line 532–538):
```tsx
<motion.div
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    transition={{ duration: 0.6 }}
    className="group feature-card rounded-2xl md:rounded-3xl overflow-hidden flex flex-col border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-900 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 max-w-3xl mx-auto w-full relative"
>
```

Replace with:
```tsx
<motion.div
    id={id}
    initial={{ opacity: 0, y: 40, scale: 0.97 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    transition={{ duration: 0.6 }}
    className="group feature-card rounded-2xl md:rounded-3xl overflow-hidden flex flex-col border border-white/60 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-black/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 max-w-3xl mx-auto w-full relative"
>
```

**Step 2: Add top-edge shimmer highlight**

After the opening `motion.div` tag, there is already:
```tsx
{/* Hover Gradient Border Effect */}
<div className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-primary/10 transition-colors duration-500" />
```

Insert this new line immediately after it:
```tsx
{/* Top-edge glass highlight */}
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none z-10" />
```

**Step 3: Update the icon container**

Find (~line 545):
```tsx
<div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
```

Replace with:
```tsx
<div className="w-10 h-10 md:w-12 md:h-12 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/50 dark:border-white/20 rounded-2xl shadow-sm flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-500">
```

**Step 4: Visual verification**

Scroll to the FeaturesSection. Each feature card should now appear as frosted glass. In light mode the glass should be barely perceptible (white/80 on the light orb background). In dark mode it should be clearly glassy with a subtle bright border. The card entry animation should feel slightly "popping in" due to the scale delta.

**Step 5: Commit**

```bash
git add apps/marketing/components/sections/FeaturesSection.tsx
git commit -m "feat(marketing): apply glass card treatment to FeatureBlock shell"
```

---

## Task 3: Update Pain/Solution Card Colors (Rose + Primary Blue)

**Files:**
- Modify: `apps/marketing/components/sections/FeaturesSection.tsx` — pain/solution cards inside `FeatureBlock` (~lines 555–597)

**Step 1: Update the Pain card (`motion.div` with "The Friction")**

Find (~line 555–573):
```tsx
<motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.4 }}
    className="relative p-5 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 rounded-xl overflow-hidden flex flex-col h-full hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600 transition-all"
>
    <div className="flex items-center gap-2 mb-3 relative z-10">
        <div className="p-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg">
            <span className="material-symbols-outlined text-slate-500 text-lg">sentiment_dissatisfied</span>
        </div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
            {painPoint.title}
        </h4>
    </div>
    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed relative z-10 font-medium flex-grow">
        {painPoint.description}
    </p>
</motion.div>
```

Replace with:
```tsx
<motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.4 }}
    className="relative p-5 border border-rose-200/50 dark:border-rose-800/30 bg-rose-50/60 dark:bg-rose-950/20 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col h-full hover:shadow-lg hover:border-rose-300/60 dark:hover:border-rose-700/40 transition-all"
>
    {/* Corner glow accent */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-rose-500/10 blur-2xl rounded-full pointer-events-none" />
    <div className="flex items-center gap-2 mb-3 relative z-10">
        <div className="p-1.5 bg-rose-100 dark:bg-rose-900/40 rounded-lg">
            <span className="material-symbols-outlined text-rose-500 text-lg">sentiment_dissatisfied</span>
        </div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400">
            {painPoint.title}
        </h4>
    </div>
    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed relative z-10 font-medium flex-grow">
        {painPoint.description}
    </p>
</motion.div>
```

**Step 2: Update the Solution card (`motion.div` with "The Flow")**

Find (~line 575–597):
```tsx
<motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.4, delay: 0.1 }}
    className="relative p-5 border border-indigo-100 dark:border-indigo-900 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-xl overflow-hidden group/flow flex flex-col h-full hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-200 dark:hover:border-indigo-700 transition-all"
>
    {/* Subtle Background Gradient Animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent -translate-x-[100%] animate-[shimmer_3s_infinite] pointer-events-none" />

    <div className="flex items-center gap-2 mb-3 relative z-10">
        <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400">
            <span className="material-symbols-outlined text-lg">bolt</span>
        </div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-400">
            {solution.title}
        </h4>
    </div>
    <p className="text-charcoal dark:text-white text-sm leading-relaxed font-semibold relative z-10 flex-grow">
        {solution.description}
    </p>
</motion.div>
```

Replace with:
```tsx
<motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.4, delay: 0.1 }}
    className="relative p-5 border border-blue-200/50 dark:border-blue-800/30 bg-blue-50/60 dark:bg-blue-950/20 backdrop-blur-sm rounded-xl overflow-hidden group/flow flex flex-col h-full hover:shadow-lg hover:shadow-primary/10 hover:border-blue-300/60 dark:hover:border-blue-700/40 transition-all"
>
    {/* Corner glow accent */}
    <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/10 blur-2xl rounded-full pointer-events-none" />
    <div className="flex items-center gap-2 mb-3 relative z-10">
        <div className="p-1.5 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-primary">
            <span className="material-symbols-outlined text-lg">bolt</span>
        </div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-400">
            {solution.title}
        </h4>
    </div>
    <p className="text-charcoal dark:text-white text-sm leading-relaxed font-semibold relative z-10 flex-grow">
        {solution.description}
    </p>
</motion.div>
```

**Step 3: Visual verification**

The "The Friction" panel should now be rose-tinted (warm red) rather than cold gray/slate. The "The Flow" panel should be primary blue-tinted, not indigo — they should visually match the `#0066CC` brand color throughout the section. Check both light and dark mode.

**Step 4: Commit**

```bash
git add apps/marketing/components/sections/FeaturesSection.tsx
git commit -m "feat(marketing): update pain/solution card colors to rose/primary-blue glass"
```

---

## Task 4: Left Nav — Glassmorphic Active Pill + Scroll Progress Track

**Files:**
- Modify: `apps/marketing/components/sections/FeaturesSection.tsx` — left nav block (~lines 187–224)

**Step 1: Add `progressPercent` derived value**

In the `FeaturesSection` component body, find the existing `scrollToFeature` function (~line 105) and add this immediately after it:

```tsx
// Progress track percentage (0–100) based on active nav item index
const activeNavIndex = navigationItems.findIndex(item => item.id === activeFeature);
const progressPercent = navigationItems.length > 1
    ? (Math.max(0, activeNavIndex) / (navigationItems.length - 1)) * 100
    : 0;
```

**Step 2: Replace the nav container and active indicator**

Find the entire nav block (~lines 187–224):
```tsx
{/* Desktop Navigation */}
<div
    ref={navContainerRef}
    className="hidden lg:flex flex-col gap-1 relative flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent"
>
    {navigationItems.map((item, index) => (
        <button
            key={item.id}
            ref={(el) => { navRefs.current[index] = el; }}
            onClick={() => scrollToFeature(item.id)}
            className={cn(
                "text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 relative flex items-center gap-3",
                activeFeature === item.id
                    ? "text-primary bg-primary/5 font-bold"
                    : "text-gray-500 hover:text-charcoal dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800",
                item.type === "section" && "border-t border-gray-200 dark:border-gray-800 mt-4 pt-6"
            )}
        >
            {activeFeature === item.id && (
                <motion.div
                    layoutId="activeFeatureIndicator"
                    className="absolute left-0 w-1 h-6 bg-primary rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
            <span className={cn(
                "transition-transform duration-300",
                activeFeature === item.id ? "translate-x-2" : ""
            )}>
                {item.title}
            </span>
            {item.type === "section" && (
                <span className="material-symbols-outlined text-sm ml-auto">
                    expand_more
                </span>
            )}
        </button>
    ))}
</div>
```

Replace with:
```tsx
{/* Desktop Navigation */}
<div
    ref={navContainerRef}
    className="hidden lg:flex flex-col gap-1 relative flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent pl-4"
>
    {/* Progress track */}
    <div className="absolute left-1 top-3 bottom-3 w-0.5 bg-gray-200 dark:bg-gray-800 rounded-full pointer-events-none">
        <motion.div
            className="absolute top-0 left-0 w-full bg-primary rounded-full"
            animate={{ height: `${progressPercent}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
        />
    </div>

    {navigationItems.map((item, index) => (
        <button
            key={item.id}
            ref={(el) => { navRefs.current[index] = el; }}
            onClick={() => scrollToFeature(item.id)}
            className={cn(
                "text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 relative flex items-center gap-3",
                activeFeature === item.id
                    ? "text-primary font-bold"
                    : "text-gray-500 hover:text-charcoal dark:hover:text-white",
                item.type === "section" && "border-t border-gray-200 dark:border-gray-800 mt-4 pt-6"
            )}
        >
            {/* Glassmorphic background pill for active item */}
            {activeFeature === item.id && (
                <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-white/80 dark:border-white/20 shadow-md shadow-primary/10 rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
            <span className="relative z-10">
                {item.title}
            </span>
            {item.type === "section" && (
                <span className="material-symbols-outlined text-sm ml-auto relative z-10">
                    expand_more
                </span>
            )}
        </button>
    ))}
</div>
```

**Step 3: Visual verification**

Scroll through the features section slowly. The left nav should show:
- A frosted glass pill sliding between items as you scroll (smooth spring animation)
- A thin vertical blue line growing from the top of the track downward as you progress through features
- The active item text is primary blue and bold, sitting on top of the glass pill
- The old left-bar indicator is gone

**Step 4: Commit**

```bash
git add apps/marketing/components/sections/FeaturesSection.tsx
git commit -m "feat(marketing): add glassmorphic nav pill and scroll progress track to FeaturesSection"
```

---

## Task 5: FeatureGridCard — Glass Treatment + AnimatePresence + Rose/Blue Panels

**Files:**
- Modify: `apps/marketing/components/ui/FeatureGridCard.tsx`

**Step 1: Add `AnimatePresence` to the import**

Find line 2:
```tsx
import { motion } from 'framer-motion';
```

Replace with:
```tsx
import { motion, AnimatePresence } from 'framer-motion';
```

**Step 2: Update the card shell className**

Find (~lines 33–41):
```tsx
className={`
    bg-surface dark:bg-gray-900
    border rounded-2xl p-6
    transition-all duration-300 relative
    ${isExpanded
        ? 'border-2 border-primary/30 dark:border-primary/40 shadow-2xl'
        : 'border border-structural-border dark:border-gray-800 hover:shadow-xl hover:border-primary/20 cursor-pointer'
    }
`}
```

Replace with:
```tsx
className={`
    bg-white/70 dark:bg-white/5 backdrop-blur-xl
    border rounded-2xl p-6
    transition-all duration-300 relative
    ${isExpanded
        ? 'border-2 border-primary/30 dark:border-primary/40 shadow-2xl shadow-primary/5'
        : 'border border-white/50 dark:border-white/10 shadow-lg hover:shadow-xl hover:border-primary/20 cursor-pointer'
    }
`}
```

**Step 3: Replace expanded content with AnimatePresence**

Find the conditional rendering block (~lines 70–178):
```tsx
{!isExpanded ? (
    <>
        {/* Collapsed State */}
        ...
    </>
) : (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="space-y-6"
    >
        ...
    </motion.div>
)}
```

Replace with:
```tsx
{!isExpanded && (
    <>
        {/* Collapsed State */}
        <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
            {summary}
        </p>

        <button
            onClick={(e) => {
                e.stopPropagation();
                onToggle(id);
            }}
            className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
        >
            Learn More
            <span className="material-symbols-outlined text-base">expand_more</span>
        </button>
    </>
)}

<AnimatePresence>
    {isExpanded && (
        <motion.div
            key="expanded-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="space-y-6 overflow-hidden"
        >
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* Pain Point - Rose glass */}
                <div className="relative p-5 border border-rose-200/50 dark:border-rose-800/30 bg-rose-50/60 dark:bg-rose-950/20 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-rose-500/10 blur-2xl rounded-full pointer-events-none" />
                    <div className="flex items-center gap-2 mb-3 relative z-10">
                        <div className="p-1.5 bg-rose-100 dark:bg-rose-900/40 rounded-lg">
                            <span className="material-symbols-outlined text-rose-500 text-lg">sentiment_dissatisfied</span>
                        </div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400">
                            The Friction
                        </h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed relative z-10 font-medium flex-grow">
                        {painPoint}
                    </p>
                </div>

                {/* Solution - Primary blue glass */}
                <div className="relative p-5 border border-blue-200/50 dark:border-blue-800/30 bg-blue-50/60 dark:bg-blue-950/20 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col h-full hover:shadow-lg hover:shadow-primary/10 transition-all">
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/10 blur-2xl rounded-full pointer-events-none" />
                    <div className="flex items-center gap-2 mb-3 relative z-10">
                        <div className="p-1.5 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-primary">
                            <span className="material-symbols-outlined text-lg">bolt</span>
                        </div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-400">
                            The Flow
                        </h4>
                    </div>
                    <p className="text-charcoal dark:text-white text-sm leading-relaxed font-semibold relative z-10 flex-grow">
                        {solution}
                    </p>
                </div>
            </div>

            {/* Video Placeholder */}
            {videoSrc && (
                <div className="w-full bg-gray-50 dark:bg-black/50 p-2 md:p-4 flex items-center justify-center border border-structural-border dark:border-gray-800 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 dark:opacity-20 pointer-events-none" />

                    <div className="w-full max-w-4xl shadow-2xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 relative z-10 bg-white dark:bg-gray-900 flex flex-col aspect-video group">
                        <div className="flex-grow relative bg-gray-900 group-hover:bg-gray-800 transition-colors duration-500">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onWatchDemo?.(videoSrc);
                                }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-white/40 group-hover:text-white/80 transition-all duration-500 z-20 hover:bg-black/20"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-current flex items-center justify-center mb-4 transition-transform group-hover:scale-110 bg-black/20 backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-4xl md:text-5xl pl-1">play_arrow</span>
                                </div>
                                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Watch Demo</span>
                            </button>

                            <VideoPlayer
                                src={videoSrc}
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                className="h-full w-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                                hideControls={true}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Collapse Button (Mobile Only) */}
            <div className="flex justify-center md:hidden">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggle(id);
                    }}
                    className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-4"
                >
                    Show Less
                    <span className="material-symbols-outlined text-base">expand_less</span>
                </button>
            </div>
        </motion.div>
    )}
</AnimatePresence>
```

**Step 4: Remove the now-duplicate minimize button condition check**

The minimize button (desktop close button, ~line 44–56) references `isExpanded`. That block is unchanged — it only renders when `isExpanded` is true, which still works correctly. No change needed.

**Step 5: Visual verification**

Scroll to the "More Features" grid. Each card should appear as frosted glass. Click "Learn More" on any card — the content should spring-expand smoothly (height animating from 0 to auto). The pain panel should be rose-tinted, the solution panel primary blue. Click the X to close — content should spring-collapse back to zero height.

**Step 6: Commit**

```bash
git add apps/marketing/components/ui/FeatureGridCard.tsx
git commit -m "feat(marketing): apply glass treatment + AnimatePresence spring expand to FeatureGridCard"
```

---

## Completion Checklist

- [ ] Gradient orbs animate in background without interfering with content or pointer events
- [ ] FeatureBlock cards are frosted glass in both light and dark mode
- [ ] Pain panels are rose-tinted, solution panels are primary blue (no indigo conflict)
- [ ] Entry animation includes scale for physical weight
- [ ] Left nav active item has glassmorphic pill that slides smoothly between items
- [ ] Progress track fills as you scroll through Tier 1 features
- [ ] Tier 2 cards are frosted glass with spring expand/collapse
- [ ] Tier 2 expanded panels match Tier 1 rose/blue glass styling
- [ ] No layout shifts, no pointer-event leaks from orbs
- [ ] Both light and dark mode look correct
