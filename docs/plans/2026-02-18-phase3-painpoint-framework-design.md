# Phase 3: Restructure PainPointSection - 6-Step Framework

**Design Date:** February 18, 2026
**Status:** Validated and ready for implementation
**Goal:** Complete redesign following Pain Point Framework to achieve +40-60% conversion lift

---

## Overview

This design completely restructures PainPointSection from 3 simultaneous time-based scenarios to a focused, conversion-optimized 6-step framework. The section moves from position #7 to position #2 (right after Hero), creating a problem-first narrative arc.

**Key Changes:**
- Apply 6-step Pain Point Framework structure
- Move section to position #2 in page flow
- Single primary pain point focus ("No Single Source of Truth")
- Add Dream Outcome and Negative Stakes sections
- Create expandable accordion for 9 additional pain points
- Implement conversion-optimized dual-CTA layout
- Preserve SpotlightCard component for accordion

**Expected Impact:**
- Conversion lift: +40-60%
- Emotional engagement through loss aversion and dream outcome
- Better scroll completion with improved narrative arc
- Self-qualification based on pain point resonance

---

## Architecture & Component Changes

### High-Level Structure

```tsx
<PainPointSection id="painpoints">
  {/* Step 1: Primary Pain Point */}
  <PrimaryPainBlock>
    <SplitScreenLayout>
      <ChaosVisual /> {/* Left: Fragmented systems */}
      <SolutionVisual /> {/* Right: Shop Titan dashboard */}
    </SplitScreenLayout>
    <TimeScenario>9:30am scenario</TimeScenario>
  </PrimaryPainBlock>

  {/* Step 2: Solution */}
  <SolutionBlock>
    Product positioning
  </SolutionBlock>

  {/* Step 3: Dream Outcome */}
  <DreamOutcomeBlock>
    4 benefits with green checkmarks
  </DreamOutcomeBlock>

  {/* Step 4: Negative Stakes */}
  <NegativeStakesBlock>
    4 consequences with red warning icons
  </NegativeStakesBlock>

  {/* Step 5: Additional Pain Points */}
  <PainPointAccordion>
    9 expandable pain point cards
  </PainPointAccordion>

  {/* Step 6: Call to Action */}
  <CTABlock>
    Dual-button layout with trust signals
  </CTABlock>
</PainPointSection>
```

### Files Modified

**Primary Changes:**
```
apps/marketing/components/sections/PainPointSection.tsx
  - Complete rewrite following 6-step framework
  - Preserve SpotlightCard component for accordion
  - Add accordion state management
  - Implement split-screen layout
  - Add Dream Outcome and Negative Stakes sections

apps/marketing/app/page.tsx
  - Move PainPointSection from position #6 to position #2
  - Update section order for improved narrative flow
```

### Component Hierarchy

```tsx
PainPointSection
├── PrimaryPainBlock
│   ├── SplitScreenLayout
│   │   ├── ChaosVisual (left)
│   │   └── SolutionVisual (right)
│   └── TimeScenario (SpotlightCard)
├── SolutionBlock
├── DreamOutcomeBlock
│   └── BenefitList (4 items with checkmarks)
├── NegativeStakesBlock
│   └── ConsequenceList (4 items with warnings)
├── PainPointAccordion
│   └── AccordionCard[] (9 expandable cards)
└── CTABlock
    ├── PrimaryCTA (Request Demo)
    ├── SecondaryCTA (See How It Works)
    └── TrustSignals
```

---

## 6-Step Content Structure & Layout

### Step 1: Primary Pain Point
**Full-bleed hero treatment with emotional hook**

```tsx
// Headline
"No Single Source of Truth"

// Subheadline
"Orders, artwork, pricing, approvals all live in different places"

// Split-screen visual (Static, Option A)
Left side: Chaos visual
  - Email screenshots
  - Excel spreadsheets
  - Slack messages
  - Dropbox folders
  - Visual overlay: "Which version is correct?"

Right side: Shop Titan dashboard
  - Clean unified interface mockup
  - Single source of truth visualization
  - Organized, calm, professional

// Time scenario (spotlight card)
"9:30am - Your production manager is copying order details
from emails into 4 different spreadsheets."

// Background
- Gradient blob (reuse existing animated gradient from current section)
- Full-bleed section with generous padding
```

### Step 2: Solution
**Product positioning**

```tsx
// Headline
"One Platform. One Truth."

// Body
"Shop Titan becomes your single source of truth - orders, art,
pricing, production, and inventory in one system."

// Visual
- Unified dashboard mockup (can reuse from ProductShowcaseSection)
- Clean, organized interface

// Background
- White/light background
- Centered content, max-width container
```

### Step 3: Dream Outcome
**Aspirational benefits with positive framing**

```tsx
// Headline
"Here's What Happens When You Work With Us:"

// Benefits (4 items with green checkmarks)
✅ Zero time wasted searching for information
✅ No more 'which version?' confusion
✅ Production errors eliminated at the source
✅ Your team focuses on production, not data entry

// Visual
- Clean workspace comparison
- Light, aspirational imagery

// Background
bg-green-50/30 dark:bg-green-950/10
```

### Step 4: Negative Stakes
**Loss aversion language with urgency**

```tsx
// Headline
"Here's What Happens If You Don't:"

// Consequences (4 items with red warning icons)
⚠️ Production errors continue eating 15-20% of your margin
⚠️ Your best people burn out on data entry instead of skilled work
⚠️ Scaling remains impossible (what works at 5 employees breaks at 20)
⚠️ You stay trapped as the bottleneck in your own business

// Statistics
- "Production errors eat 15-20% of margin"
- "10+ hours/week wasted on data entry"
- "64% longer to onboard new employees"

// Background
bg-red-50/30 dark:bg-red-950/10
```

### Step 5: Additional Pain Points
**Vertical accordion (Option A - Traditional)**

```tsx
// Section headline
"Can You Relate To Any of These?"

// 9 accordion cards with Material Symbols icons
1. Production Scheduling Chaos (icon: "calendar_today")
2. Manual Repetitive Data Entry (icon: "edit_note")
3. Lack of Real-Time Visibility (icon: "visibility_off")
4. Margin Leakage (icon: "trending_down")
5. Pricing Complexity (icon: "calculate")
6. Artwork Bottlenecks (icon: "image")
7. Inventory Blind Spots (icon: "inventory")
8. Owner Dependency (icon: "person")
9. Scaling Breaks the System (icon: "broken_image")

// Collapsed state (~80px height)
- Icon (Material Symbols, text-primary, 24px)
- Title (text-lg font-bold)
- Expand icon (expand_more)
- Hover effect (from existing SpotlightCard)

// Expanded state (~300px height)
- Icon + Title (same as collapsed)
- Problem section:
  - Gray box (bg-slate-50 dark:bg-slate-900/50)
  - sentiment_dissatisfied icon
  - Problem description text
- Our Solution section:
  - Blue/indigo box (bg-indigo-50/50 dark:bg-indigo-950/30)
  - bolt icon
  - Solution description text
- Result section:
  - Green text with checkmark
  - Outcome statement
- Collapse icon (expand_less)

// Accordion behavior
- Only one expanded at a time
- Smooth framer-motion layout animations
- Click anywhere on collapsed card to expand
```

### Step 6: Call to Action
**Conversion-optimized dual CTA**

```tsx
// Dual-button layout
Primary CTA: "Request Demo"
  - Large button, primary color
  - Opens demo request form/link

Secondary CTA: "See How It Works"
  - Outline button
  - Smooth scrolls to ProductShowcaseSection (#product)

// Reassurance copy
"No pressure. No sales pitch. Just clarity."

// Win/Lose framing
"See how a single platform could save you 10+ hours per week,
or keep struggling with fragmented systems."

// Trust signals
- "Trusted by 150+ decoration shops"
- Avatar row (3-5 customer avatars)
- Small testimonial quote (optional)

// Background
- Gradient background similar to Primary Pain
- High contrast buttons for visibility
```

---

## Accordion Data Structure

### Additional Pain Points Content

```tsx
const additionalPainPoints = [
  {
    id: "scheduling",
    icon: "calendar_today",
    title: "Production Scheduling Chaos",
    problem: "Whiteboards, spreadsheets, magnets. You cannot see real capacity, machine availability, or rush job impact. Owners are guessing.",
    solution: "Visual production scheduler with drag-drop job assignment. Real-time capacity planning, machine utilization tracking, and workload balancing.",
    result: "Stop overbooking machines and guessing capacity. See exactly what you can deliver and when."
  },
  {
    id: "data-entry",
    icon: "edit_note",
    title: "Manual Repetitive Data Entry",
    problem: "Same order details entered in quotes, production sheets, invoices, inventory systems. Creates errors, wastes time, causes burnout.",
    solution: "Enter once, use everywhere. Orders flow automatically from quote to production to invoice with zero re-entry.",
    result: "Eliminate 10+ hours per week of redundant data entry. Let your team focus on production."
  },
  {
    id: "visibility",
    icon: "visibility_off",
    title: "Lack of Real-Time Job Visibility",
    problem: "The most common question: 'Where is this order?' No live status tracking, department visibility, or task ownership. Everyone interrupts everyone.",
    solution: "Real-time order tracking with department visibility and task ownership. Every job shows exactly where it is and who owns the next step.",
    result: "Stop the constant interruptions. Everyone knows exactly where every order is."
  },
  {
    id: "margin",
    icon: "trending_down",
    title: "Margin Leakage",
    problem: "Labor isn't tracked. Machine time isn't measured. Rush jobs disrupt efficiency. Discounts aren't documented. Reprints eat profit.",
    solution: "Track labor, machine time, and true costs per job. See actual margin in real-time, not at month-end.",
    result: "Know your true profit per job. Identify margin leaks before they become patterns."
  },
  {
    id: "pricing",
    icon: "calculate",
    title: "Pricing Complexity and Inconsistency",
    problem: "Decoration pricing is layered: stitch counts, screen setups, wash types, multi-location prints. Sales underquotes, margins erode.",
    solution: "Dynamic pricing matrices for all decoration types: embroidery (stitch count), screen printing (colors, screens), and any custom task.",
    result: "Consistent, accurate pricing every time. No more underquoting or margin erosion."
  },
  {
    id: "artwork",
    icon: "image",
    title: "Artwork and Approval Bottlenecks",
    problem: "Artwork versions float in email threads, Google Drive, desktop downloads. No approval tracking leads to printing wrong versions.",
    solution: "Centralized artwork library with version control and structured approval workflows. Every file tracked, every approval logged.",
    result: "Always print the right version. Eliminate reprints from artwork confusion."
  },
  {
    id: "inventory",
    icon: "inventory",
    title: "Inventory Blind Spots",
    problem: "Blanks run out mid-job. Dye lots don't match. Specialty materials aren't tracked. Production stalls, rush shipments cost more.",
    solution: "Integrated inventory tracking with low-stock alerts, automatic reordering, and production-aware availability.",
    result: "Never run out mid-job. Know what you have, what you need, and when to reorder."
  },
  {
    id: "owner-dependency",
    icon: "person",
    title: "Owner Dependency and Bottlenecking",
    problem: "Owner approves pricing, manages scheduling, resolves disputes, understands the system. If owner leaves for a week, things slow down.",
    solution: "Structured workflows with clear ownership and approval chains. Your team operates independently with full visibility.",
    result: "Take a vacation without production grinding to a halt. Build a system, not a dependency."
  },
  {
    id: "scaling",
    icon: "broken_image",
    title: "Scaling Breaks the System",
    problem: "What works at 5 employees and 50 orders per week breaks at 20 employees and 300 orders. Processes are informal, knowledge is tribal.",
    solution: "Structured operational backbone that scales with you. Documented workflows, automated routing, and clear task chains.",
    result: "Grow without breaking. Scale from 5 to 50 employees on the same system."
  }
];
```

---

## Mobile Responsive Behavior & Visual Design

### Responsive Breakpoints

**Desktop (>1024px):**
- Split-screen: Side-by-side 50/50 layout
- Dream Outcome: 2-column grid (2 benefits per column)
- Negative Stakes: 2-column grid (2 consequences per column)
- Accordion: Full width with hover states active
- CTA: Horizontal dual-button layout (buttons side-by-side)
- Max-width: 1280px centered

**Tablet (768-1024px):**
- Split-screen: Side-by-side (narrower spacing)
- Dream Outcome: 2-column grid
- Negative Stakes: 2-column grid
- Accordion: Full width
- CTA: Horizontal dual-button layout
- Max-width: 100% with padding

**Mobile (<768px):**
- Split-screen: Stacks vertically (Chaos on top, Solution below)
- Dream Outcome: Single column (4 benefits stacked)
- Negative Stakes: Single column (4 consequences stacked)
- Accordion: Full width cards, one per row
- CTA: Stacked buttons (Primary on top, Secondary below, full-width)
- Sticky CTA bar: Appears after scrolling past Primary Pain section

### Color Palette & Backgrounds

**Primary Pain Block:**
```css
background: existing animated gradient blob
padding: 4rem (desktop), 2rem (mobile)
full-bleed section
```

**Solution Block:**
```css
background: bg-background-light dark:bg-background-dark
padding: 3rem (desktop), 2rem (mobile)
centered content, max-width: 1024px
```

**Dream Outcome Block:**
```css
background: bg-green-50/30 dark:bg-green-950/10
padding: 3rem (desktop), 2rem (mobile)
checkmarks: text-green-600 dark:text-green-400
```

**Negative Stakes Block:**
```css
background: bg-red-50/30 dark:bg-red-950/10
padding: 3rem (desktop), 2rem (mobile)
warnings: text-red-600 dark:text-red-400
```

**Accordion Section:**
```css
background: bg-background-light dark:bg-background-dark
padding: 3rem (desktop), 2rem (mobile)
cards: Use existing SpotlightCard styling
```

**CTA Block:**
```css
background: gradient similar to Primary Pain
padding: 4rem (desktop), 2rem (mobile)
buttons: high contrast (primary color + outline)
```

### Animation Details

**Framer-motion Animations:**
- Viewport entry: Stagger children with 0.2s delay
- Accordion expand: Layout animation with spring physics
- Split-screen: Fade in from left (chaos) and right (solution)
- Benefits/Consequences: Scale up on viewport entry
- CTA: Pulse animation on primary button (subtle)

**SpotlightCard Reuse:**
- Accordion cards inherit existing spotlight hover effect
- Smooth expand/collapse with layout animations
- Preserve all accessibility features

---

## Section Positioning & Page Flow

### Current Section Order

```
1. HeroSection
2. FeaturesSection (tiered)
3. ProductShowcaseSection (consolidated)
4. ShowcaseSection (testimonials)
5. PricingSection
6. PainPointSection ← Currently at #6
7. AboutUsSection
8. ContactSection
```

### New Section Order

```
1. HeroSection
2. PainPointSection ← MOVED UP (6-step framework)
3. ProductShowcaseSection (consolidated value props)
4. FeaturesSection (tiered approach)
5. ShowcaseSection (testimonials)
6. PricingSection
7. AboutUsSection
8. ContactSection
```

### Narrative Flow Improvement

**Before:**
```
Hero → Features → Products → Testimonials → Pricing → Pain Points → About → Contact
```
**Problem:** User sees solutions before understanding the problem. Pain points become "confirmation" rather than "motivation".

**After:**
```
Hero → Pain Points → Products → Features → Testimonials → Pricing → About → Contact
```
**Benefit:** Problem-first approach creates emotional hook. Natural conversion flow: Hook → Solution → Proof → Price → CTA.

### Page.tsx Changes

```tsx
// apps/marketing/app/page.tsx

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <PainPointSection /> {/* Moved from position #6 to #2 */}
        <ProductShowcaseSection />
        <FeaturesSection />
        <ShowcaseSection />
        <PricingSection />
        <AboutUsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
```

### CTA Cross-Linking

**"See How It Works" Button:**
```tsx
onClick={() => {
  const element = document.getElementById('product');
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}}
```
Smooth scrolls to ProductShowcaseSection to show concrete solution.

---

## Implementation Steps & Code Structure

### Step 1: Create Data Structure

```tsx
// Pain points data
const additionalPainPoints = [
  {
    id: "scheduling",
    icon: "calendar_today",
    title: "Production Scheduling Chaos",
    problem: "...",
    solution: "...",
    result: "..."
  },
  // ... 8 more pain points
];
```

### Step 2: Component Architecture

```tsx
'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PainPointSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [expandedPain, setExpandedPain] = useState<string | null>(null);

  return (
    <section id="painpoints" className="relative overflow-hidden">
      {/* Step 1: Primary Pain */}
      <PrimaryPainBlock />

      {/* Step 2: Solution */}
      <SolutionBlock />

      {/* Step 3: Dream Outcome */}
      <DreamOutcomeBlock />

      {/* Step 4: Negative Stakes */}
      <NegativeStakesBlock />

      {/* Step 5: Additional Pain Points */}
      <PainPointAccordion
        pains={additionalPainPoints}
        expandedPain={expandedPain}
        onToggle={(id) => setExpandedPain(expandedPain === id ? null : id)}
      />

      {/* Step 6: Call to Action */}
      <CTABlock />
    </section>
  );
}
```

### Step 3: Reusable Sub-Components

**SplitScreenLayout:**
```tsx
function SplitScreenLayout({ chaos, solution }: { chaos: React.ReactNode, solution: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        {chaos}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        {solution}
      </motion.div>
    </div>
  );
}
```

**BenefitList:**
```tsx
function BenefitList({ benefits }: { benefits: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start gap-3"
        >
          <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-2xl flex-shrink-0">
            check_circle
          </span>
          <p className="text-base md:text-lg text-charcoal dark:text-white">
            {benefit}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
```

**ConsequenceList:**
```tsx
function ConsequenceList({ consequences }: { consequences: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {consequences.map((consequence, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start gap-3"
        >
          <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-2xl flex-shrink-0">
            warning
          </span>
          <p className="text-base md:text-lg text-charcoal dark:text-white">
            {consequence}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
```

**AccordionCard:**
```tsx
function AccordionCard({
  pain,
  isExpanded,
  onToggle
}: {
  pain: PainPoint;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      onClick={() => !isExpanded && onToggle()}
      className={`
        bg-surface dark:bg-gray-900 border rounded-2xl p-6
        transition-all duration-300 cursor-pointer
        ${isExpanded
          ? 'border-2 border-primary/30 dark:border-primary/40 shadow-2xl'
          : 'border border-structural-border dark:border-gray-800 hover:shadow-xl hover:border-primary/20'
        }
      `}
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary text-2xl">
          {pain.icon}
        </span>
        <h3 className="text-lg font-bold text-charcoal dark:text-white flex-1">
          {pain.title}
        </h3>
        <span className="material-symbols-outlined text-gray-400">
          {isExpanded ? 'expand_less' : 'expand_more'}
        </span>
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {/* Problem */}
          <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-slate-500 text-lg">
                sentiment_dissatisfied
              </span>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
                The Problem
              </h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {pain.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-4 p-4 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400 text-lg">
                bolt
              </span>
              <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-400">
                Our Solution
              </h4>
            </div>
            <p className="text-sm text-charcoal dark:text-white font-semibold leading-relaxed">
              {pain.solution}
            </p>
          </div>

          {/* Result */}
          <div className="flex items-start gap-2">
            <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-lg flex-shrink-0">
              check_circle
            </span>
            <p className="text-sm text-green-700 dark:text-green-400 font-medium">
              {pain.result}
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
```

---

## Testing & Validation

### Functional Testing Checklist

- [ ] **Accordion behavior** - Only one pain point expanded at a time
- [ ] **Accordion animations** - Smooth expand/collapse with framer-motion
- [ ] **Primary CTA** - "Request Demo" button links correctly
- [ ] **Secondary CTA** - "See How It Works" smooth scrolls to #product
- [ ] **Split-screen layout** - Both sides visible on desktop, stacked on mobile
- [ ] **Sticky CTA bar** - Appears on mobile after scrolling past Primary Pain
- [ ] **Viewport animations** - All sections animate correctly on scroll into view
- [ ] **SpotlightCard hover** - Hover effects work on accordion items
- [ ] **Keyboard navigation** - Can tab through accordion and activate with Enter/Space
- [ ] **Section positioning** - PainPointSection renders at position #2 (after Hero)

### Visual Regression Checks

- [ ] Dream Outcome: Green checkmarks render correctly in light/dark mode
- [ ] Negative Stakes: Red warning icons render correctly in light/dark mode
- [ ] Split-screen: Chaos vs. Solution imagery aligned properly
- [ ] Accordion: Material Symbols icons display correctly
- [ ] Mobile: Vertical stacking maintains proper spacing
- [ ] Dark mode: All backgrounds, text colors, and borders render correctly
- [ ] Gradient blob: Animated background renders without performance issues
- [ ] Typography: Font sizes, weights, and line heights consistent
- [ ] Spacing: Consistent padding/margins across all 6 steps

### Content Validation

- [ ] All 10 pain points represented (1 primary + 9 accordion)
- [ ] Framework principles applied:
  - [ ] Single focus ("No Single Source of Truth")
  - [ ] Loss aversion language in Negative Stakes
  - [ ] Clear Dream Outcome with benefits
  - [ ] Win/lose framing in CTA
- [ ] Trust signals visible and accurate
- [ ] All copy matches painpoint-framework.md content
- [ ] No information loss from current implementation

### Performance Validation

- [ ] Accordion expand/collapse: 60fps smooth animations
- [ ] Page load: No layout shift when section renders
- [ ] Scroll animations: No jank or performance degradation
- [ ] Image optimization: Chaos/Solution visuals optimized
- [ ] Mobile: Sticky CTA doesn't cause scroll jank

### Browser Compatibility

Test on:
- [ ] Chrome (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Edge (latest 2 versions)
- [ ] Mobile Safari (iOS 14+)
- [ ] Chrome Mobile (Android 10+)

---

## Success Criteria

### Primary Goals

- ✅ Complete 6-step framework implementation (all steps present and functional)
- ✅ Section moved to position #2 (after HeroSection, before ProductShowcaseSection)
- ✅ Conversion-optimized structure with emotional engagement (Dream + Stakes)
- ✅ All 10 pain points from framework incorporated (1 primary + 9 accordion)
- ✅ No information loss from current implementation (time scenarios preserved)

### Quality Standards

- ✅ Dark mode compatible across all 6 steps
- ✅ Mobile responsive design:
  - Split-screen stacks vertically
  - Benefits/Consequences single column
  - Sticky CTA bar on mobile
- ✅ Smooth 60fps animations (framer-motion)
- ✅ Accessibility compliant:
  - Keyboard navigation for accordion
  - ARIA labels for interactive elements
  - Focus states visible
  - Color contrast meets WCAG AA

### Performance Targets

- ✅ **Conversion lift:** +40-60% (measured via A/B test or analytics comparison)
- ✅ **Scroll completion:** Improved completion rates through section
- ✅ **Emotional engagement:** Higher time-on-section metrics
- ✅ **Demo requests:** Increased CTA click-through rate
- ✅ **Self-qualification:** Users expanding pain points that resonate with them

### Measurement Approach

**Baseline Metrics (Before Phase 3):**
- Current conversion rate from PainPointSection
- Current demo request rate
- Current scroll completion rate
- Current time-on-section average

**Post-Implementation Metrics:**
- New conversion rate (target: +40-60% lift)
- Demo request rate from new CTA
- Scroll completion through all 6 steps
- Accordion interaction rate (% of users expanding at least one pain point)
- Secondary CTA usage ("See How It Works" scroll-to-product rate)

---

## Rollback Strategy

If critical issues arise during implementation:

1. **Revert PainPointSection.tsx:**
   ```bash
   git checkout apps/marketing/components/sections/PainPointSection.tsx
   ```

2. **Revert page.tsx section order:**
   ```bash
   git checkout apps/marketing/app/page.tsx
   ```

3. **Restore previous section positioning** (position #6 instead of #2)

Git commits provide clean restore points for each file.

---

## Design Decisions

### Why 6-Step Framework?

**Chosen:** Complete framework implementation (Pain → Solution → Dream → Stakes → Additional → CTA)

**Rationale:** The framework is proven for conversion optimization. Each step serves a specific psychological purpose:
- Pain Point: Creates identification ("That's me!")
- Solution: Positions product as answer
- Dream Outcome: Appeals to positive motivation
- Negative Stakes: Leverages loss aversion (2x more powerful than gain)
- Additional Pains: Allows self-qualification without overwhelming
- CTA: Removes decision friction with clear next step

### Why Static Split-Screen (Option A)?

**Chosen:** Static side-by-side layout (Chaos vs. Solution)

**Alternatives Considered:**
- Before/After toggle (requires user action)
- Animated transition (could distract from message)

**Rationale:** Immediate visual impact without requiring user interaction. Both states visible simultaneously creates instant contrast and clarity. Works better for accessibility and mobile stacking.

### Why Vertical Accordion (Option A)?

**Chosen:** Traditional vertical accordion with one-at-a-time expansion

**Alternatives Considered:**
- 3-column grid with modal popups
- Tabs with content panels

**Rationale:**
- Prevents overwhelming users (framework principle: "not all at once")
- Mobile-friendly (vertical stacking works perfectly)
- Familiar interaction pattern (low cognitive load)
- Allows users to scan titles and expand what resonates
- Accordion pattern naturally creates self-qualification

### Why Position #2 (After Hero)?

**Chosen:** Move from position #6 to position #2

**Rationale:**
- Problem-first narrative creates emotional hook
- Current flow shows solutions before problems (backwards)
- Early positioning captures users before attention wanes
- Natural bridge: Hero (what we do) → Pain (why you need it) → Solution (how we do it)
- Framework principle: Start with the problem until they say "YES THAT'S ME!"

---

## Post-Implementation Tasks

After successful implementation:

1. **Update PRD:** Document new PainPointSection structure in `docs/PRD.md`
2. **Update optimization plan:** Mark Phase 3 as complete in `docs/website-optimization-plan.md`
3. **A/B Testing Setup:**
   - Implement analytics tracking for all 6 steps
   - Track accordion expansion rates per pain point
   - Monitor CTA click-through rates (primary vs. secondary)
   - Measure conversion lift vs. baseline
4. **Content Optimization:**
   - Test different primary pain points (A/B test: "No Single Source" vs. "Owner Dependency" vs. "Margin Leakage")
   - Test with/without Negative Stakes section
   - Test CTA copy variations
5. **Prepare Phase 4:** Begin planning WorkflowTabs extraction

---

## Notes

- SpotlightCard component preserved and reused for accordion (maintains existing hover effect)
- Gradient blob animation reused from current implementation (no new animation needed)
- All Material Symbols icons already available in project
- Framer-motion already used throughout app (consistent animation approach)
- Dark mode color palette follows existing design system
- CTA "See How It Works" creates natural flow to ProductShowcaseSection
- Mobile sticky CTA bar ensures conversion opportunity always visible
- Framework principles applied: Single focus, loss aversion, clear CTA, win/lose framing

---

**Design approved by:** User
**Implementation ready:** Yes
**Estimated effort:** 6-8 hours
**Risk level:** Medium (complete component redesign, section repositioning)
**Reference:** docs/painpoint-framework.md, docs/website-optimization-plan.md
