# Phase 2: Restructure FeaturesSection - Tiered Approach

**Design Date:** February 18, 2026
**Status:** Validated and ready for implementation
**Goal:** Split 11 full-width feature blocks into 5 core pillars (full-width) + 6 compact grid features to achieve 52% scroll reduction

---

## Overview

This design restructures FeaturesSection from 11 equal-weight full-width blocks (~11,000px scroll) into a tiered system with 5 core pillar features (full-width) and 6 additional features (compact grid), reducing scroll depth by 52% to ~5,200px.

**Key Changes:**
- Create FeatureGridCard component for compact expandable cards
- Create FeatureGrid container component for 3-column layout
- Update navigation to two-level structure (Tier 1 + "More Features")
- Maintain all existing content (no information loss)
- Preserve dark mode and responsive design

**Expected Impact:**
- Tier 1: ~4,000px scroll (5 features, full detail)
- Tier 2: ~1,200px scroll (6 features, compact grid)
- Total: ~5,200px (52% reduction from ~11,000px)
- Improved content hierarchy and user experience

---

## Architecture & Component Structure

### High-Level Changes

1. **FeaturesSection.tsx** - Major refactor
   - Tier 1: Keep existing 5 FeatureBlock components (full-width)
   - Tier 2: Replace 6 FeatureBlock with new compact grid
   - Update navigation array to reflect tiers
   - Add "More Features" nav button

2. **New Component: FeatureGridCard.tsx**
   - Compact card with expand/collapse state
   - Icon + Title + 2-sentence summary (collapsed)
   - Full Pain/Solution content (expanded)
   - Smooth height animation on toggle

3. **New Component: FeatureGrid.tsx** (Container)
   - 3-column grid layout (desktop)
   - 1-column on mobile
   - Manages state for all 6 cards
   - Section heading: "Additional Capabilities"

### File Structure

```
apps/marketing/components/
├── sections/
│   └── FeaturesSection.tsx (refactored)
└── ui/
    ├── FeatureGridCard.tsx (new)
    └── FeatureGrid.tsx (new)
```

### Component Hierarchy

```tsx
<FeaturesSection id="features">
  <Grid>
    {/* Left Column - Sticky Navigation */}
    <StickyNav>
      <Header>
        Product Capabilities
        Engineered for Operational Excellence
      </Header>

      <Navigation>
        {/* Tier 1 - Full navigation buttons */}
        <NavButton>Quotes</NavButton>
        <NavButton>Orders</NavButton>
        <NavButton>Machines & Scheduler</NavButton>
        <NavButton>Pricing Matrixes</NavButton>
        <NavButton>Reporting + Analytics</NavButton>

        {/* Tier 2 - Collapsed entry */}
        <NavButton type="section">More Features</NavButton>
      </Navigation>
    </StickyNav>

    {/* Right Column - Content Area */}
    <ContentArea>
      {/* Tier 1: Full-width feature blocks (existing) */}
      <FeatureBlock id="feature-0">Quotes</FeatureBlock>
      <FeatureBlock id="feature-1">Orders</FeatureBlock>
      <FeatureBlock id="feature-4">Machines & Scheduler</FeatureBlock>
      <FeatureBlock id="feature-5">Pricing Matrixes</FeatureBlock>
      <FeatureBlock id="feature-10">Reporting + Analytics</FeatureBlock>

      {/* Tier 2: Compact grid */}
      <FeatureGrid id="more-features">
        <FeatureGridCard>Customers / Vendors</FeatureGridCard>
        <FeatureGridCard>Purchase Orders</FeatureGridCard>
        <FeatureGridCard>Contractor Work Orders</FeatureGridCard>
        <FeatureGridCard>Product Management</FeatureGridCard>
        <FeatureGridCard>XML Feed Management</FeatureGridCard>
        <FeatureGridCard>Decoration & Task Types</FeatureGridCard>
      </FeatureGrid>
    </ContentArea>
  </Grid>
</FeaturesSection>
```

---

## FeatureGridCard Component Design

### Component Props

```tsx
interface FeatureGridCardProps {
  id: string;
  icon: string;
  title: string;
  summary: string;
  painPoint: string;
  solution: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}
```

### Collapsed State (~200px height)

```tsx
<motion.div
  layout
  className="bg-surface dark:bg-gray-900 border border-structural-border dark:border-gray-800 rounded-2xl p-6 hover:shadow-xl hover:border-primary/20 transition-all cursor-pointer"
>
  {/* Icon */}
  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
    <span className="material-symbols-outlined text-primary text-2xl">
      {icon}
    </span>
  </div>

  {/* Title */}
  <h3 className="text-xl font-bold text-charcoal dark:text-white mb-3">
    {title}
  </h3>

  {/* Summary (2 sentences, line-clamp) */}
  <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
    {summary}
  </p>

  {/* Learn More Button */}
  <button
    onClick={() => onToggle(id)}
    className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
  >
    Learn More
    <span className="material-symbols-outlined text-base">expand_more</span>
  </button>
</motion.div>
```

### Expanded State (~600px height)

```tsx
<motion.div
  layout
  animate={{ height: "auto" }}
  className="bg-surface dark:bg-gray-900 border-2 border-primary/30 dark:border-primary/40 rounded-2xl p-6 shadow-2xl"
>
  {/* Icon + Title (same as collapsed) */}
  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
    <span className="material-symbols-outlined text-primary text-2xl">
      {icon}
    </span>
  </div>

  <h3 className="text-xl font-bold text-charcoal dark:text-white mb-6">
    {title}
  </h3>

  {/* Pain Point Box */}
  <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg">
    <div className="flex items-center gap-2 mb-2">
      <span className="material-symbols-outlined text-slate-500 text-lg">
        sentiment_dissatisfied
      </span>
      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
        The Friction
      </h4>
    </div>
    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
      {painPoint}
    </p>
  </div>

  {/* Solution Box */}
  <div className="mb-6 p-4 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 rounded-lg">
    <div className="flex items-center gap-2 mb-2">
      <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400 text-lg">
        bolt
      </span>
      <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-400">
        The Flow
      </h4>
    </div>
    <p className="text-sm text-charcoal dark:text-white font-semibold leading-relaxed">
      {solution}
    </p>
  </div>

  {/* Collapse Button */}
  <button
    onClick={() => onToggle(id)}
    className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
  >
    Show Less
    <span className="material-symbols-outlined text-base">expand_less</span>
  </button>
</motion.div>
```

### Animation Behavior

- **Expand/Collapse:** Smooth height animation using `framer-motion` layout animations
- **Duration:** 0.3s with ease-in-out easing
- **Grid Reflow:** Other cards automatically shift down/up as card expands/collapses
- **Only One Expanded:** Accordion pattern - expanding one card collapses any other open card
- **Hover States:** Subtle border highlight (#6366f1 at 20% opacity), shadow lift on hover

---

## FeatureGrid Container Component

### Component Structure

```tsx
interface FeatureGridProps {
  features: FeatureGridCardProps[];
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section id="more-features" className="mt-24 md:mt-32">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
          Additional Capabilities
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
          Built for Complete Control
        </h2>
        <p className="text-lg text-secondary-text dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Essential tools to manage every aspect of your production workflow.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureGridCard
            key={feature.id}
            {...feature}
            isExpanded={expandedCard === feature.id}
            onToggle={(id) => {
              setExpandedCard(expandedCard === id ? null : id);
            }}
          />
        ))}
      </div>
    </section>
  );
}
```

### Grid Layout Behavior

**Responsive Breakpoints:**
- **Mobile (<768px):** 1 column, full-width cards
- **Tablet (768-1024px):** 2 columns, gap-6 (24px)
- **Desktop (>1024px):** 3 columns, gap-6 (24px)

**Grid Properties:**
```css
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 1.5rem; /* 24px */
```

**Expansion Behavior:**
- Card expands vertically in place
- Other cards in the grid shift down naturally (CSS Grid auto-placement)
- Expanded card maintains column width (does not span multiple columns)
- Smooth transition using framer-motion layout animations

**State Management:**
- Single state variable tracks currently expanded card ID
- Clicking "Learn More" on a card:
  - If no card expanded → expand clicked card
  - If same card expanded → collapse it
  - If different card expanded → collapse previous, expand new one
- Accordion pattern ensures only one card expanded at a time

---

## Navigation Structure Updates

### Updated Navigation Array

```tsx
const navigationItems = [
  // Tier 1: Core Features (full navigation buttons)
  { title: "Quotes", id: "feature-0", type: "feature", index: 0 },
  { title: "Orders", id: "feature-1", type: "feature", index: 1 },
  { title: "Machines & Scheduler", id: "feature-4", type: "feature", index: 4 },
  { title: "Pricing Matrixes", id: "feature-5", type: "feature", index: 5 },
  { title: "Reporting + Analytics", id: "feature-10", type: "feature", index: 10 },

  // Tier 2: Collapsed entry (single button for all 6 features)
  { title: "More Features", id: "more-features", type: "section" }
];
```

### Navigation Rendering

```tsx
{/* Desktop Navigation */}
<div className="hidden lg:flex flex-col gap-1 relative flex-1 overflow-y-auto">
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
        // Visual separator for "More Features"
        item.type === "section" && "border-t border-gray-200 dark:border-gray-800 mt-4 pt-6"
      )}
    >
      {/* Active indicator */}
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

      {/* Icon for "More Features" */}
      {item.type === "section" && (
        <span className="material-symbols-outlined text-sm ml-auto">
          expand_more
        </span>
      )}
    </button>
  ))}
</div>
```

### Active State Logic

**Scroll-based Active Detection:**
```tsx
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;

          // If it's a Tier 1 feature, set as active
          if (id.startsWith('feature-')) {
            setActiveFeature(id);
          }

          // If it's the "more-features" section, set as active
          if (id === 'more-features') {
            setActiveFeature('more-features');
          }
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: '-100px 0px -50% 0px'
    }
  );

  // Observe all feature blocks and the grid section
  const featureElements = document.querySelectorAll('[id^="feature-"]');
  const gridSection = document.getElementById('more-features');

  featureElements.forEach(el => observer.observe(el));
  if (gridSection) observer.observe(gridSection);

  return () => observer.disconnect();
}, []);
```

**Smooth Scroll Function:**
```tsx
const scrollToFeature = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
```

**Visual Hierarchy:**
- **Tier 1 buttons:** Standard size, equal weight
- **"More Features" button:**
  - Border-top separator (mt-4 pt-6)
  - Icon indicator (expand_more)
  - Same interaction pattern as Tier 1
  - When active, highlights entire grid section

---

## Tier 2 Feature Content Mapping

### Feature Data Structure

```tsx
const tier2Features: FeatureGridCardProps[] = [
  {
    id: "customers",
    icon: "people",
    title: "Customers / Vendors",
    summary: "Unified CRM and VRM with complete relationship tracking. Contact cards, order history, notes, and communication logs all in one place.",
    painPoint: "Contact info scattered across emails, sticky notes, and old spreadsheets. No relationship history. No visibility into customer lifetime value.",
    solution: "Unified CRM and VRM with complete relationship tracking. Contact cards, order history, notes, and communication logs all in one place.",
  },
  {
    id: "purchase-orders",
    icon: "receipt_long",
    title: "Purchase Orders",
    summary: "Automated PO generation with vendor integration. RFQ workflow for quotes, auto-reordering based on stock levels, and complete order tracking.",
    painPoint: "Manual PO creation, vendor emails flying back and forth. Stock running out mid-job because nobody tracked what was ordered.",
    solution: "Automated PO generation with vendor integration. RFQ workflow for quotes, auto-reordering based on stock levels, and complete order tracking.",
  },
  {
    id: "contractors",
    icon: "handshake",
    title: "Contractor Work Orders",
    summary: "Digital work order system for contractors. Send work out with detailed spec sheets, track deadlines, and get quality confirmation—all documented.",
    painPoint: "Subcontractor miscommunication. Work sent out with vague specs. Jobs coming back wrong or late with no accountability.",
    solution: "Digital work order system for contractors. Send work out with detailed spec sheets, track deadlines, and get quality confirmation—all documented.",
  },
  {
    id: "products",
    icon: "inventory_2",
    title: "Product Management",
    summary: "Centralized product database with SKU management, variant tracking, and organized image libraries. One source of truth for all product data.",
    painPoint: "Manual product data entry across multiple channels. SKU chaos. No central product database. Images scattered everywhere.",
    solution: "Centralized product database with SKU management, variant tracking, and organized image libraries. One source of truth for all product data.",
  },
  {
    id: "feeds",
    icon: "rss_feed",
    title: "XML Feed Management",
    summary: "Automated XML feed generation for all platforms: Google Merchant Center, Facebook/Instagram, Reddit, Pinterest. Auto-sync, error handling, and one-click updates.",
    painPoint: "Manual marketplace updates. Products out of sync across Google, Facebook, Pinterest, Reddit. Hours of copy-paste to update pricing.",
    solution: "Automated XML feed generation for all platforms: Google Merchant Center, Facebook/Instagram, Reddit, Pinterest. Auto-sync, error handling, and one-click updates.",
  },
  {
    id: "tasks",
    icon: "tune",
    title: "Decoration & Task Types",
    summary: "Fully configurable task types and decoration methods. Custom fields, workflow rules, and pricing formulas for ANY process you run.",
    painPoint: "Rigid software that can't handle your custom workflows. Every shop does things differently, but you're stuck with one-size-fits-all.",
    solution: "Fully configurable task types and decoration methods. Custom fields, workflow rules, and pricing formulas for ANY process you run.",
  }
];
```

### Content Extraction Notes

- **Summary:** First 2 sentences of current solution description
- **Pain Point:** Extracted from existing FeatureBlock components (lines 146-150, 240-242, 434-436, etc.)
- **Solution:** Extracted from existing FeatureBlock components (lines 188-190, 289-291, 439-441, etc.)
- **Icons:** Existing Material Symbols icons from current implementation
- **All content preserved:** No information loss from current FeaturesSection

---

## Tier 1 Feature Selection & Ordering

### Selected Core Features (5 total)

**Feature 0 - Quotes:**
- **Rationale:** Business-critical, high engagement, first point of customer interaction
- **Position:** #1 in Tier 1 (lead with sales workflow)

**Feature 1 - Orders:**
- **Rationale:** Primary workflow feature, end-to-end tracking, most frequently used
- **Position:** #2 in Tier 1 (core operational flow)

**Feature 4 - Machines & Production Scheduler:**
- **Rationale:** Production differentiator, unique value prop, capacity planning critical
- **Position:** #3 in Tier 1 (production core)

**Feature 5 - Pricing Matrixes:**
- **Rationale:** Unique value prop, complex domain problem, directly impacts margin
- **Position:** #4 in Tier 1 (pricing strategy)

**Feature 10 - Reporting + Analytics:**
- **Rationale:** Results-focused finale, financial visibility, executive-level value
- **Position:** #5 in Tier 1 (business intelligence)

### Moved to Tier 2 (6 features)

- **Customers / Vendors** - Supporting CRM/VRM functionality
- **Purchase Orders** - Operational support, less differentiating
- **Contractor Work Orders** - Niche use case, not all shops need
- **Product Management** - Important but supporting role
- **XML Feed Management** - Digital/ecommerce specific
- **Decoration & Task Types** - Configuration/flexibility feature

---

## Implementation Details

### Step 1: Create FeatureGridCard Component

**File:** `apps/marketing/components/ui/FeatureGridCard.tsx`

```tsx
'use client';

import { motion } from 'framer-motion';

interface FeatureGridCardProps {
  id: string;
  icon: string;
  title: string;
  summary: string;
  painPoint: string;
  solution: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}

export default function FeatureGridCard({
  id,
  icon,
  title,
  summary,
  painPoint,
  solution,
  isExpanded,
  onToggle
}: FeatureGridCardProps) {
  return (
    <motion.div
      layout
      className={`
        bg-surface dark:bg-gray-900
        border rounded-2xl p-6
        transition-all duration-300
        ${isExpanded
          ? 'border-2 border-primary/30 dark:border-primary/40 shadow-2xl'
          : 'border border-structural-border dark:border-gray-800 hover:shadow-xl hover:border-primary/20 cursor-pointer'
        }
      `}
      onClick={() => !isExpanded && onToggle(id)}
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
        <span className="material-symbols-outlined text-primary text-2xl">
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-charcoal dark:text-white mb-3">
        {title}
      </h3>

      {!isExpanded ? (
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
      ) : (
        <>
          {/* Expanded State */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {/* Pain Point Box */}
            <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-slate-500 text-lg">
                  sentiment_dissatisfied
                </span>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
                  The Friction
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {painPoint}
              </p>
            </div>

            {/* Solution Box */}
            <div className="mb-6 p-4 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400 text-lg">
                  bolt
                </span>
                <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-400">
                  The Flow
                </h4>
              </div>
              <p className="text-sm text-charcoal dark:text-white font-semibold leading-relaxed">
                {solution}
              </p>
            </div>

            {/* Collapse Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggle(id);
              }}
              className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
            >
              Show Less
              <span className="material-symbols-outlined text-base">expand_less</span>
            </button>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
```

### Step 2: Create FeatureGrid Component

**File:** `apps/marketing/components/ui/FeatureGrid.tsx`

```tsx
'use client';

import { useState } from 'react';
import FeatureGridCard from './FeatureGridCard';

interface FeatureData {
  id: string;
  icon: string;
  title: string;
  summary: string;
  painPoint: string;
  solution: string;
}

interface FeatureGridProps {
  features: FeatureData[];
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section id="more-features" className="mt-24 md:mt-32">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
          Additional Capabilities
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
          Built for Complete Control
        </h2>
        <p className="text-lg text-secondary-text dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Essential tools to manage every aspect of your production workflow.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureGridCard
            key={feature.id}
            {...feature}
            isExpanded={expandedCard === feature.id}
            onToggle={(id) => {
              setExpandedCard(expandedCard === id ? null : id);
            }}
          />
        ))}
      </div>
    </section>
  );
}
```

### Step 3: Refactor FeaturesSection.tsx

**Major Changes:**

1. **Update navigation array** to include only Tier 1 features + "More Features"
2. **Keep only 5 FeatureBlock components** (features 0, 1, 4, 5, 10)
3. **Add FeatureGrid component** at the end with Tier 2 features
4. **Update active state logic** to handle "more-features" section
5. **Define tier2Features data** array with all 6 features

**Key Code Changes:**

```tsx
// Updated navigation
const navigationItems = [
  { title: "Quotes", id: "feature-0", type: "feature" },
  { title: "Orders", id: "feature-1", type: "feature" },
  { title: "Machines & Scheduler", id: "feature-4", type: "feature" },
  { title: "Pricing Matrixes", id: "feature-5", type: "feature" },
  { title: "Reporting + Analytics", id: "feature-10", type: "feature" },
  { title: "More Features", id: "more-features", type: "section" }
];

// Add Tier 2 features data
const tier2Features = [ /* data from content mapping section */ ];

// In JSX, after Feature 10 (Reporting + Analytics)
<FeatureGrid features={tier2Features} />
```

---

## Testing & Validation

### Functional Testing

- [ ] **Card expand/collapse** - Click "Learn More" expands card, "Show Less" collapses
- [ ] **Accordion behavior** - Expanding one card collapses any other open card
- [ ] **Grid reflow** - Cards shift smoothly when another card expands/collapses
- [ ] **Navigation clicks** - All nav buttons scroll to correct sections
- [ ] **Active state tracking** - Scrolling updates active nav button correctly
- [ ] **Responsive breakpoints** - 3-column → 2-column → 1-column works correctly
- [ ] **Dark mode** - All colors, borders, and backgrounds render correctly
- [ ] **Animations** - Smooth expand/collapse with no jank or layout shift

### Visual Regression Checks

- [ ] Tier 1 FeatureBlocks unchanged from current design
- [ ] FeatureGridCard collapsed state height ~200px
- [ ] FeatureGridCard expanded state height ~600px
- [ ] Grid gap spacing consistent (24px)
- [ ] Section header centered and styled correctly
- [ ] Navigation separator for "More Features" renders correctly
- [ ] Hover states on cards work (shadow lift, border highlight)
- [ ] Mobile: Cards stack vertically, full-width

### Performance Validation

- [ ] Page scroll depth reduced from ~11,000px to ~5,200px (52% reduction)
- [ ] No layout shift on initial load
- [ ] Smooth 60fps animations on expand/collapse
- [ ] IntersectionObserver performs well with 6 additional elements
- [ ] Lighthouse performance score maintained or improved

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

**Primary Goals:**
- ✅ 5 Tier 1 features displayed full-width (existing FeatureBlock format)
- ✅ 6 Tier 2 features displayed in compact 3-column grid
- ✅ Expandable accordion behavior works smoothly
- ✅ Navigation updated to two-level structure
- ✅ ~52% scroll reduction achieved (~11,000px → ~5,200px)
- ✅ No information loss from current implementation

**Quality Standards:**
- ✅ All animations smooth at 60fps
- ✅ Dark mode renders correctly
- ✅ Mobile responsive layout intact
- ✅ Accessibility: Keyboard navigation, ARIA labels, focus states
- ✅ No console errors or warnings

**User Experience:**
- ✅ Clear visual hierarchy between Tier 1 and Tier 2
- ✅ Core features get full attention with storytelling format
- ✅ Additional features remain discoverable and detailed
- ✅ Accordion pattern prevents cognitive overload
- ✅ Improved scroll completion rates

---

## Design Decisions

### Why Tier 1 Features?

**Quotes, Orders, Machines & Scheduler, Pricing, Analytics** selected because:
- Business-critical operations (Quotes, Orders)
- Unique differentiators (Machines & Scheduler, Pricing)
- Results-focused finale (Analytics)
- Highest engagement and impact features
- Representative of full platform capabilities

### Why Expandable Accordion (Option A)?

**Chosen:** Expandable accordion within grid

**Alternatives Considered:**
- Modal/dialog overlay
- Hover tooltip with detail section

**Rationale:** Keeps content inline and discoverable without navigation jumps or modals. Users can quickly scan the grid and expand what interests them. Grid reflow is acceptable because users expect it when clicking "Learn More."

### Why Two-Level Navigation (Option A)?

**Chosen:** Tier 1 features get full nav buttons, Tier 2 collapsed under "More Features"

**Alternatives Considered:**
- Flat navigation with visual distinction
- Tabbed navigation

**Rationale:** Creates clear visual hierarchy, keeps navigation focused on core features, and grid section is self-contained with its own heading. Prevents sidebar scroll fatigue while maintaining discoverability.

### Why 3-Column Grid?

**Desktop (>1024px):** 3 columns optimally uses horizontal space
**Tablet (768-1024px):** 2 columns balances readability and space
**Mobile (<768px):** 1 column ensures full attention on each card

---

## Post-Implementation Tasks

After successful implementation:

1. **Update PRD:** Reflect new tiered structure in `docs/PRD.md`
2. **Update optimization plan:** Mark Phase 2 as complete
3. **Measure impact:** Track scroll depth reduction and engagement metrics
4. **A/B test (optional):** Test card expansion patterns and navigation structure
5. **Prepare Phase 3:** Begin PainPointSection restructure with 6-step framework

---

## Files to Modify

**New Components:**
- `apps/marketing/components/ui/FeatureGridCard.tsx` (new, ~150 lines)
- `apps/marketing/components/ui/FeatureGrid.tsx` (new, ~50 lines)

**Modified Components:**
- `apps/marketing/components/sections/FeaturesSection.tsx` (major refactor)
  - Update navigation array
  - Remove 6 FeatureBlock components
  - Add FeatureGrid component
  - Update active state logic

**Estimated Changes:**
- New code: ~200 lines
- Removed code: ~450 lines (6 FeatureBlock components)
- Modified code: ~50 lines (navigation, state logic)
- Net change: ~-200 lines

---

## Notes

- All Tier 2 content preserved from existing FeatureBlock implementations
- No UI mockups in Tier 2 cards (compact format prioritizes text)
- Material Symbols icons used throughout for consistency
- Framer-motion AnimatePresence handles smooth expand/collapse
- IntersectionObserver tracks scroll position for active nav state
- Color palette will be updated in separate Phase (independent task)

---

**Design approved by:** User
**Implementation ready:** Yes
**Estimated effort:** 4-6 hours
**Risk level:** Medium (significant refactor, careful testing required)
