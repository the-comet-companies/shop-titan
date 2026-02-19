# Phase 4: Elevate WorkflowTabs as Standalone Section

**Design Date:** February 18, 2026
**Status:** Validated and ready for implementation
**Goal:** Extract WorkflowTabs from ProductShowcaseSection and create standalone "Life of an Order" showcase section

---

## Overview

This design extracts the WorkflowTabs component from the end of ProductShowcaseSection and elevates it to a standalone section positioned between FeaturesSection and ShowcaseSection. This gives the workflow demonstration the spotlight it deserves and creates a natural bridge to testimonials.

**Key Changes:**
- Extract WorkflowTabs from ProductShowcaseSection
- Create new standalone WorkflowSection component
- Add compelling section header and subtitle
- Position between FeaturesSection (#4) and ShowcaseSection (#5)
- Maintain all existing WorkflowTabs functionality

**Expected Impact:**
- Stronger narrative arc completion
- Natural bridge to social proof (testimonials)
- Workflow demonstration gets deserved spotlight
- Better separation of concerns (ProductShowcaseSection focuses on features, WorkflowSection shows complete journey)

---

## Current State Analysis

### WorkflowTabs Location
**File:** `apps/marketing/components/sections/ProductShowcaseSection.tsx`
**Position:** Embedded at end of component (after Feature 4 placeholder)
**Lines:** ~367-end

### WorkflowTabs Content
- 5-tab workflow: Intake → Proofing → Production → Fulfillment → Updates
- Auto-rotation with hover-pause UX
- Visual mockups for each workflow stage
- Excellent storytelling quality

### Current Issues
- Comes after 4 feature blocks, reducing impact
- Feels like an afterthought rather than a showcase
- Lost in the ProductShowcaseSection context
- No dedicated section header explaining what it is

---

## Architecture & Component Changes

### New Component Structure

```tsx
// NEW FILE: apps/marketing/components/sections/WorkflowSection.tsx
export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 md:py-32 lg:py-40 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-mobile">
        {/* Section Header */}
        <SectionHeader />

        {/* WorkflowTabs Component */}
        <WorkflowTabs />
      </div>
    </section>
  );
}
```

### Files Modified

**New Component:**
```
apps/marketing/components/sections/WorkflowSection.tsx (new)
  - Import WorkflowTabs component
  - Add section header and subtitle
  - Wrap in proper section container
```

**Modified Components:**
```
apps/marketing/components/sections/ProductShowcaseSection.tsx
  - Remove WorkflowTabs component from end
  - Remove WorkflowTabs import
  - Clean up any wrapper divs

apps/marketing/app/page.tsx
  - Import new WorkflowSection
  - Add WorkflowSection between FeaturesSection and ShowcaseSection
```

**No Changes Needed:**
```
apps/marketing/components/sections/WorkflowTabs.tsx
  - Component remains completely unchanged
  - All functionality preserved
```

---

## Section Header Design

### Content

```tsx
<div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
  {/* Eyebrow */}
  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4 md:mb-6">
    The Complete Journey
  </span>

  {/* Headline */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white mb-6 leading-tight tracking-tight">
    Life of an Order
  </h2>

  {/* Subtitle */}
  <p className="text-lg md:text-xl text-secondary-text dark:text-gray-400 leading-relaxed">
    See how a single order flows through Shop Titan—from intake to delivery—without manual handoffs or lost information.
  </p>
</div>
```

### Visual Design

- **Eyebrow:** Primary color badge (matches existing design system)
- **Headline:** Large, bold, attention-grabbing
- **Subtitle:** Emphasizes the key value proposition (no handoffs, no lost information)
- **Spacing:** Generous margin-bottom before WorkflowTabs (mb-16 md:mb-20)

---

## Section Positioning & Page Flow

### Current Section Order

```
1. HeroSection
2. PainPointSection (Phase 3)
3. ProductShowcaseSection (with WorkflowTabs embedded)
4. FeaturesSection
5. ShowcaseSection (testimonials)
6. PricingSection
7. AboutUsSection
8. ContactSection
```

### New Section Order

```
1. HeroSection
2. PainPointSection (Phase 3)
3. ProductShowcaseSection (features only, WorkflowTabs removed)
4. FeaturesSection
5. WorkflowSection ← NEW (extracted from ProductShowcaseSection)
6. ShowcaseSection (testimonials)
7. PricingSection
8. AboutUsSection
9. ContactSection
```

### Narrative Flow

**Benefit:** Natural progression from feature details to complete workflow demonstration to customer testimonials.

```
Pain Points (problem)
  ↓
Product Showcase (solution overview)
  ↓
Features (detailed capabilities)
  ↓
Workflow (complete journey proof)
  ↓
Testimonials (social proof)
  ↓
Pricing (conversion)
```

---

## Implementation Details

### Step 1: Create WorkflowSection.tsx

```tsx
'use client';

import WorkflowTabs from './WorkflowTabs';
import { motion } from 'framer-motion';

export default function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="py-24 md:py-32 lg:py-40 bg-background-light dark:bg-background-dark"
    >
      <div className="max-w-7xl mx-auto px-mobile">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4 md:mb-6">
            The Complete Journey
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white mb-6 leading-tight tracking-tight">
            Life of an Order
          </h2>

          <p className="text-lg md:text-xl text-secondary-text dark:text-gray-400 leading-relaxed">
            See how a single order flows through Shop Titan—from intake to delivery—without manual handoffs or lost information.
          </p>
        </motion.div>

        {/* WorkflowTabs Component */}
        <WorkflowTabs />
      </div>
    </section>
  );
}
```

### Step 2: Update ProductShowcaseSection.tsx

**Remove WorkflowTabs:**

```tsx
// BEFORE (at end of ProductShowcaseSection.tsx)
{/* Workflow Tabs */}
<div className="mt-24 md:mt-32">
  <WorkflowTabs />
</div>

// AFTER
// (remove entire WorkflowTabs section)
```

**Remove Import:**

```tsx
// BEFORE
import WorkflowTabs from './WorkflowTabs';

// AFTER
// (remove import)
```

### Step 3: Update page.tsx

```tsx
// Add import
import WorkflowSection from "@/components/sections/WorkflowSection";

// Update JSX
export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <PainPointSection />
        <ProductShowcaseSection />
        <FeaturesSection />
        <WorkflowSection /> {/* NEW - extracted from ProductShowcaseSection */}
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

---

## Testing & Validation

### Functional Testing Checklist

- [ ] **WorkflowTabs functionality** - All 5 tabs work correctly
- [ ] **Auto-rotation** - Tabs auto-advance as before
- [ ] **Hover-pause** - Auto-rotation pauses on hover
- [ ] **Tab switching** - Manual tab clicks work
- [ ] **Visual mockups** - All workflow stage visuals render correctly
- [ ] **Section header** - Header animates on viewport entry
- [ ] **Section positioning** - WorkflowSection renders between FeaturesSection and ShowcaseSection

### Visual Regression Checks

- [ ] Section header: Eyebrow, headline, subtitle styled correctly
- [ ] WorkflowTabs: No visual changes from current implementation
- [ ] Spacing: Proper padding around section (py-24 md:py-32 lg:py-40)
- [ ] Background: Matches FeaturesSection background
- [ ] Dark mode: All text and backgrounds render correctly
- [ ] Mobile: Header text responsive, WorkflowTabs mobile-friendly

### Performance Validation

- [ ] No impact on WorkflowTabs performance
- [ ] Header animation smooth (60fps)
- [ ] Page load: No layout shift
- [ ] Section ID "workflow" added for potential anchor links

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

- ✅ WorkflowTabs extracted from ProductShowcaseSection
- ✅ New WorkflowSection component created
- ✅ Section header added with compelling copy
- ✅ Section positioned between FeaturesSection and ShowcaseSection
- ✅ All WorkflowTabs functionality preserved

### Quality Standards

- ✅ No changes to WorkflowTabs component itself
- ✅ Dark mode compatible
- ✅ Mobile responsive
- ✅ Smooth viewport entry animation for header
- ✅ Consistent with design system (eyebrow, colors, spacing)

### User Experience

- ✅ Workflow demonstration gets proper spotlight
- ✅ Clear context via section header
- ✅ Natural narrative bridge to testimonials
- ✅ Improved separation of concerns

---

## Rollback Strategy

If critical issues arise during implementation:

1. **Revert new WorkflowSection.tsx:**
   ```bash
   git rm apps/marketing/components/sections/WorkflowSection.tsx
   ```

2. **Revert ProductShowcaseSection.tsx:**
   ```bash
   git checkout apps/marketing/components/sections/ProductShowcaseSection.tsx
   ```

3. **Revert page.tsx:**
   ```bash
   git checkout apps/marketing/app/page.tsx
   ```

Git commits provide clean restore points.

---

## Design Decisions

### Why Standalone Section?

**Chosen:** Extract to dedicated WorkflowSection

**Alternatives Considered:**
- Keep embedded in ProductShowcaseSection
- Embed in FeaturesSection instead

**Rationale:**
- WorkflowTabs is high-quality content that deserves spotlight
- Better narrative separation (features → complete journey → proof)
- Natural bridge to testimonials (workflow proof → customer proof)
- Easier to maintain and update independently

### Why Position After FeaturesSection?

**Chosen:** Position between FeaturesSection (#4) and ShowcaseSection (#5)

**Rationale:**
- Logical flow: Detailed features → Complete workflow → Customer testimonials
- Workflow serves as "proof of concept" before social proof
- Keeps related technical content together before testimonials

### Why Minimal Changes to WorkflowTabs?

**Chosen:** No changes to WorkflowTabs.tsx component

**Rationale:**
- Component works perfectly as-is
- Reduces risk of breaking existing functionality
- Separation of concerns (WorkflowSection handles presentation, WorkflowTabs handles workflow logic)

---

## Post-Implementation Tasks

After successful implementation:

1. **Update PRD:** Document new WorkflowSection in `docs/PRD.md`
2. **Update optimization plan:** Mark Phase 4 as complete
3. **Analytics:** Track scroll depth through WorkflowSection
4. **Consider enhancements (future):**
   - Add "Download Workflow PDF" CTA
   - Add customer quote about workflow efficiency
   - A/B test different section headlines

---

## Notes

- WorkflowTabs component remains 100% unchanged
- Section uses existing design system (eyebrow, spacing, colors)
- Framer-motion animation for header viewport entry
- Section ID "workflow" allows anchor linking
- Background matches FeaturesSection for visual continuity
- Simple extraction, low implementation risk
- Estimated effort: 1 hour

---

**Design approved by:** User
**Implementation ready:** Yes
**Estimated effort:** 1 hour
**Risk level:** Low (simple extraction, no component changes)
**Dependencies:** None (can be implemented independently of other phases)
