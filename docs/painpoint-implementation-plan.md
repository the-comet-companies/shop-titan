# Implementation Plan - Pain Point & Features Alignment

The user wants to align the website content with the new "Pain Point Framework". The existing `FeaturesSection` is good as a "Solution" section, but the "Pain Point" section is currently weak and buried at the bottom of the page.

## User Review Required

> [!IMPORTANT]
> **Page Reordering**: I propose moving the `PainPointSection` **UP** to sit between the `HeroSection` and `PlatformSection` (or `FeaturesSection`). This follows the classic "Problem -> Agitation -> Solution" sales flow.

## Proposed Changes

### 1. Refactor `PainPointSection.tsx`
**Current State**: 3 simple "time of day" cards.
**New State**: "Can you relate?" checklist or "Top Operational Struggles" grid based on the new markdown.
- Headline: "The Hidden Cost of Chaos" or "Production Reality Check".
- Content: Pull from the "Universal Operational Pain Points" table in `painpoint-framework.md` (e.g., "No Single Source of Truth", "Scheduling Chaos").
- Visuals: Use the existing card style but expand to show more items, or use a "Struggle vs Solution" layout.

#### [MODIFY] [PainPointSection.tsx](/apps/marketing/components/sections/PainPointSection.tsx)
- Update content to reflect the "Top 10 Pain Points".
- Change layout to accomodate more text/items if necessary.

### 2. Reorder Landing Page Sections
#### [MODIFY] [page.tsx](/apps/marketing/app/page.tsx)
- Move `<PainPointSection />` from bottom (above AboutUs) to top (below Hero or Platform).
- Recommended Flow:
    1. Hero (Hook)
    2. PainPointSection (Problem/Agitation - "Can you relate?")
    3. PlatformSection (High level solution)
    4. FeaturesSection (Detailed proof/features)

### 3. Styling & Animations
**Visual Style**:
- **Layout**: Masonry or Bento-grid style layout to handle varying content lengths gracefully. `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.
- **Cards**: 
    - Background: `bg-surface dark:bg-white/5` with backdrop blur if needed.
    - Border: `border border-structural-border dark:border-white/10`.
    - Radius: `rounded-2xl` matching current design system.
    - Shadow: `shadow-sm hover:shadow-xl` transition.
- **Typography**: 
    - Headers: `text-xl font-bold text-charcoal dark:text-white`.
    - Body: `text-secondary-text dark:text-gray-400`.
- **Icons**: 
    - Use `material-symbols-outlined` with `text-primary` or status colors (red/orange for pain points).

**Animations (Framer Motion)**:
- **Scroll Trigger**: `useInView` with `once: true` and `-100px` margin.
- **Entrance**: 
    - Container: `staggerChildren: 0.1`.
    - Items: `initial={{ opacity: 0, y: 20, scale: 0.95 }}` -> `animate={{ opacity: 1, y: 0, scale: 1 }}` (Spring transition).
- **Interactivity**:
    - Card Hover: `whileHover={{ y: -5, scale: 1.02 }}`.
    - Gradient/Glow: Mouse-following radial gradient overlay (like current SpotlightCard).

## Verification Plan

### Manual Verification
- **Visual Check**: Run the app and scroll through the home page.
- **Flow Check**: Ensure the narrative makes sense (Problem -> Solution).
- **Responsive Check**: Ensure the new Pain Point layout works on mobile.
