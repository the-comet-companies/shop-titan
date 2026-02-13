# Implementation Plan: Shop Titan Content & Design Overhaul

**Goal:** Transform the Shop Titan marketing site into a comprehensive, content-rich platform that accurately reflects the "System-Driven" philosophy, deep operational pain points, and specific feature set of the software.

> [!IMPORTANT]
> **Source of Truth:** This plan integrates the "02-12-2026 Feedback" directly. The `docs/PRD.md` will be updated to match these requirements to ensure long-term consistency.
> **Design System:** We are proceeding with the **Apple-Inspired** color palette (`#FBFBFB` background, `#1D1D1F` text) as defined in the PRD.

## 1. Content & Messaging Updates

### A. Hero Section
**Action:** Update copy to align with new positioning.
- **Headline:** "A single source of truth for the decoration industry."
- **Subheadline:** "Our system allows you to focus on what you do best."

### B. Marketing Story (About Us)
**Action:** Implement the "Necessity is the Mother of Invention" narrative.
- **Location:** New `/about` page or a prominent "Story" section on the homepage.
- **Key Narrative Points:**
    - "No solution existed, so I built my own over 15 years."
    - "I wanted to live anywhere and still run a large-scale shop."
    - "Stress comes from lack of optics."
    - "Every click has a follow action."

### C. Pain Points (Major Expansion)
**Action:** The user request defines a "Pain Point Framework" suggesting separate *landing pages* for specific pain points.
- **Homepage Section:** Display the "Top 10 Top Pain Points" (Single Source of Truth, Scheduling Chaos, etc.) as interactable cards/slides.
- **New Page:** `/pain-points` (or distinct landing pages) covering the **Universal Operational Pain Points** table.
- **Strategy:** We will build a dynamic "Pain Point" component that can render these massive lists (Sales, Floor, Financial) without cluttering the UI.

### D. Detailed Feature List
**Action:** Create a "Features Matrix" or dedicated "Platform" page to house the granular feature list.
- **Categories:** Quotes, Orders, Customers/Vendors, POs (with RFQ), Machines/Scheduler, Pricing Matrices, Product Management (XML Feeds), Contractor Work Orders, Analytics.
- **Requirement:** "Showcase each section... possibly a video." -> We will implement a `VideoFeatureCard` component.

### E. Target Industries
**Action:** Display the "Industries We Serve" table.
- **Format:** A clean, searchable, or tabbed table showing Primary Decorators vs. Hybrid Operators etc.

### F. Packages & Pricing
**Action:** Implement the 5-Tier Pricing Structure.
- **Tiers:** Starter ($5k), Pro, Fully Automated, Ultimate (Consultant), Custom.

## 2. Technical Implementation Steps

### Phase 1: Design System Foundation
*   [ ] **Update Tailwind Config:** Implement the Apple-inspired palette (`#FBFBFB`, `#1D1D1F`, `#0066CC`).
*   [ ] **Typography:** Ensure `Inter` (Body) and `Crimson Pro` (Editorial/Story) are correctly set up.
*   [ ] **Base Components:** Refactor `Button`, `Card`, and `Section` to use new colors.

### Phase 2: Core Components
*   [ ] **VideoShowcase:** Reusable component for "Feature Videos" (auto-playing placeholders for now).
*   [ ] **TestimonialCarousel:** Component for social proof.
*   [ ] **FeatureMatrix:** A complex grid/list component to handle the "Checkbox" style feature lists (Quotes, ISOs, etc.).

### Phase 3: Page Structure (Homepage)
We will restructure `app/page.tsx` to follow this flow:
1.  **Hero:** New Headlines.
2.  **Video Intro:** "Showcase the solution".
3.  **Problem/Pain Points:** The "Top 10" section.
4.  **Solution/Features:** The "Featured Sections" with video placeholders.
5.  **Benefits:** The "Reliable / AWS / Support" section.
6.  **Social Proof:** Testimonials & Industries Served.
7.  **Pricing:** The 5-tier pricing table.
8.  **Story:** "Necessity is Invention" (teaser leading to /about or modal).
9.  **Contact/CTA.**

### Phase 4: New Pages (Optional but Recommended)
*   [ ] **`/about`:** Full text of the "Marketing Story".
*   [ ] **`/pain-points`:** Full "Universal" and "Segment" pain point tables (too long for home?).

## 3. Verification Plan
*   **Content Audit:** I will read through the rendered page to ensure *exact* phrase matching (e.g., "necessity is the mother of all invention").
*   **Design Check:** Verify the `#FBFBFB` background is soft and not glaring white.
*   **Responsive Check:** Ensure the large "Target Industries" table is scrollable or collapsed on mobile.
