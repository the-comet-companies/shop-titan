# Product Requirements Document: Shop Titan Marketing Website

## Executive Summary

**Product Name:** Shop Titan (formerly Tech For Decorators)  
**Product Type:** Marketing Website / Single-Page Application  
**Target Audience:** High-volume apparel decorators and production shop owners  
**Version:** 1.0.0  
**Last Updated:** February 10, 2026

### Product Vision

Shop Titan is the marketing website for a FileMaker-based operational platform designed to unify production for high-volume decorators. The website communicates the core value proposition: transforming traditional, human-centric shop management (where owners are "human routers") into system-driven operations that provide operational leverage and strategic oversight.

---

## Current Implementation Overview

### Tech Stack

- **Framework:** Next.js 15.1.4 (App Router)
- **React:** 19.0.0
- **TypeScript:** 5.7.3
- **Styling:** Tailwind CSS 3.4.17
- **Fonts:** 
  - **Display/Body:** Inter (Google Fonts)
  - **Editorial:** Crimson Pro (Google Fonts)
- **Icons:** Material Symbols Outlined
- **Port:** 3001 (Development)

### Architecture

```
apps/marketing/
├── app/
│   ├── layout.tsx          # Root layout with font imports
│   ├── page.tsx             # Main single-page app
│   └── globals.css          # Global styles & utilities
├── components/
│   ├── Header.tsx           # Fixed glassmorphism nav
│   ├── Footer.tsx           # Footer component
│   ├── AnimatedGradientBackground.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── MobileMenu.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── PainPointSection.tsx
│       ├── PlatformSection.tsx
│       ├── ProductShowcaseSection.tsx
│       ├── FeaturesSection.tsx
│       ├── BlogSection.tsx
│       └── ContactSection.tsx
├── hooks/
│   └── useScrollAnimation.ts
└── public/
    └── animations/
        └── landing.mp4
```

---

## Page Structure & Sections

### 1. Header Component (Fixed)

**Purpose:** Persistent navigation with glassmorphism effect

**Features:**
- Fixed positioning with blur backdrop
- Logo: "Shop **Titan**" (Titan in primary color)
- Desktop navigation: Product, Platform, Features, Blog
- CTA buttons: "Log in" + "Request Demo"
- Mobile: Hamburger menu with slide-in drawer
- Smooth scroll to sections
- Responsive breakpoints: mobile, tablet, desktop

**Technical:**
- Z-index: 50
- Backdrop filter: blur(20px)
- Background: white/70 (light) | rgba(10,10,10,0.72) (dark)
- Border: 1px solid rgba(255,255,255,0.08)

---

### 2. Hero Section (`#product`)

**Purpose:** Primary value proposition and animated background

**Content:**
- **Headline:** "Unify your production. One platform for high-volume decorators to manage orders, inventory, and automation—from intake to fulfillment, without the friction."
- **CTAs:** 
  - Primary: "Get Started Now" (with shimmer animation)
  - Secondary: "Contact Sales" (glass button)
- **Partner Carousel:** Infinite horizontal scroll with Material Icon placeholders
- **Animated Gradient Background:** 4 flowing gradient blobs with staggered animations
- **"Why This System Exists" Subsection:**
  - Tagline: "Why This System Exists"
  - Problem/solution comparison:
    - ❌ Disconnected (red icon)
    - ✅ Unified Flow (green icon)

**Animations:**
- Fade-in-up for headline (0.8s)
- Delayed fade-in for CTAs (delay 200ms)
- Infinite carousel scroll (40s linear)
- Gradient blob movements (20-30s ease-in-out)
- Scroll-triggered fade-in for subsection

**Technical:**
- Scroll padding offset: 100px
- Gradient blobs: 4 absolute positioned divs with blur filters
- useScrollAnimation hook for visibility detection

---

### 3. Pain Point Section

**Purpose:** Articulate customer pain points through time-based scenarios

**Content:**
- **Headline:** "Your best people are stuck doing low-value work."
- **3 Time-Based Cards:**
  1. **9:30 am** - Production manager copying order details into 4 spreadsheets
  2. **1:15 pm** - Team lead hunting for artwork files
  3. **5:45 pm** - Decorator manually updating inventory
- **Bottom Message:** "We can automate all of this and give you hours back every day."

**Design:**
- Gradient background (white → gray-50 → white)
- Red gradient blob (top-right, blurred)
- Clock SVG icons with custom hands
- 3-column grid (desktop), stacked (mobile)
- Staggered animations (delay-100, delay-200, delay-300)

**Technical:**
- Custom SVG clock circles with static hands
- Feature card styling with hover effects
- Scroll-triggered visibility detection

---

### 4. Platform Section (`#platform`)

**Purpose:** System architecture overview and operational philosophy

**Subsections:**

#### 4.1. Header
- Subtitle: "ARCHITECTURE OVERVIEW"
- Title: "A Single Operational Source of Truth."

#### 4.2. Main Content (2-column layout)

**Left Column:**
- **Headline:** "Built for Operational Leverage."
- **Description:** System-driven hierarchy philosophy
- **2 Feature Cards:**
  - 🔍 High-Level Visibility (Real-time P&L)
  - ⚙️ Self-Driving Operations (Automated logic)

**Right Column:**
- **3-Tier Architecture Diagram:**
  - **Level 01 - Ownership** (gray border-left)
    - "Strategic Direction & Profitability"
    - Tags: P&L Visibility, Forecasting, Growth ROI
  - **Level 02 - Management** (gray border-left)
    - "Execution & Optimization"
    - Tags: Production Flow, Inventory Sync, Staffing
  - **Level 03 - Automation** (primary border-left, highlighted)
    - "Self-Correcting Logistics"
    - ✅ Error Prevention Logic
    - ✅ Automated Shipping Workflows
    - ✅ Real-time Status Synchronization

#### 4.3. Hierarchy of Leverage Comparison

**Traditional Shops:**
- Icon: person_off (gray)
- Description: Owner is "Human Router" = bottleneck

**System-Driven Shops:**
- Icon: hub (primary color)
- Description: "System Router" = operational autonomy

**Design:**
- Contained in rounded card with border
- 2-column responsive grid
- Gradient blob accent (primary/5, blurred)

---

### 5. Product Showcase Section

**Purpose:** Visual demonstration of the platform UI

**Note:** Not fully detailed in provided files, likely contains:
- Mock UI screenshots
- Interactive product demo
- Feature highlights with visual proofs

---

### 6. Features Section (`#features`)

**Purpose:** Detailed breakdown of platform capabilities

**Structure:**
- 4 detailed feature cards with mock UI snippets
- Each card contains:
  - Icon representation
  - Feature title and description
  - Mock UI container (`.ui-snippet` class)
  - Technical specifications

**Design:**
- Feature card hover effects (shadow lift)
- Dark/light mode support
- Responsive grid layout

**Technical:**
- `.feature-card` custom utility
- `.ui-snippet` for mock UI containers
- Scroll-triggered animations

---

### 7. Blog Section (`#blog`)

**Purpose:** Editorial content and thought leadership

**Content:**
- **Header:** 
  - "EDITORIAL INSIGHTS"
  - Tagline: "The architecture of modern apparel decoration."
- **4 Articles:**
  1. "Neutralizing POD Friction" (Operations)
  2. "Scaling Beyond 10 Employees" (Growth)
  3. "Inventory Sync Realities" (Automation)
  4. "Claris FileMaker vs SaaS" (Infrastructure)

**Each Article Card:**
- Date + Category badge
- Large serif title (3-5xl, hover → primary color)
- Description paragraph
- "Read Analysis →" link with arrow icon

**Design:**
- Serif typography (Crimson Pro italic)
- Extra-large vertical spacing (48+ between articles)
- Minimal, editorial aesthetic
- "View All Archives" button at bottom

**Technical:**
- `.article-title` custom utility
- Serif font family from Crimson Pro
- Group hover states for interactive elements

---

### 8. Contact Section (`#contact`)

**Purpose:** Lead generation through demo request form

**Content:**
- **Header:** "Request Your Demo"
- **Subheader:** "No pressure. No sales pitch. Just clarity."
- **Form Fields:**
  - Name (text, required)
  - Work Email (email, required)
  - Company (text, required)
  - Main Friction Point (textarea, required)
- **Submit Button:** "Request Custom Demo →"
- **Social Proof:** Avatar stack + "Joined by 150+ shops this month"
- **Footer Tag:** "Zero Distractions • Ultra-Clean UI • High Focus"

**Design:**
- Centered form layout (max-width: xl)
- Large rounded card with shadow
- Gray-50 input backgrounds
- Primary color focus states
- Arrow icon with translate animation on hover

**Technical:**
- Client-side validation
- Console logging on submit (demo)
- Alert confirmation message
- React state management for form data

---

### 9. Footer Component

**Purpose:** Site links and legal information

**Note:** Not detailed in provided files, standard footer implementation

---

## Design System

### Current Color Palette

> [!WARNING]
> **This color palette is currently implemented but NEEDS TO BE REPLACED** with the new Apple-inspired palette specified in the section below.

**Current Colors:**
- **Primary:** #6366f1 (Indigo)
- **Charcoal:** #0A0A0A
- **Background Light:** #FFFFFF
- **Background Dark:** #0A0A0A

---

### **NEW REQUIRED COLOR PALETTE (Apple-Inspired)**

> [!IMPORTANT]
> **All future implementations and redesigns MUST use this color palette.**

| Role                  | Hex       | Rationale                                                                                          |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------|
| **Primary Background** | `#FBFBFB` | "Off-white" (Apple-style). Softer than pure white, reducing eye strain and feeling more "mature." |
| **Primary Text**       | `#1D1D1F` | Deep Charcoal. Avoids the "harshness" of pure black while maintaining high legibility.             |
| **Secondary Text**     | `#6E6E73` | Muted Grey. Perfect for subheadlines and descriptions to create a clear visual hierarchy.          |
| **Action Blue**        | `#0066CC` | A precise, professional blue. Used sparingly for buttons and links to signal "System" and "Trust." |
| **Structural Borders** | `#E5E7EB` | Tailwind's gray-200. Used for clean, thin lines that define the "grid" and "automation" theme.    |
| **Surface/Card**       | `#FFFFFF` | Pure white. Used for cards or "FileMaker UI" snippets to make them pop off the background.        |

**Implementation Notes:**
- Replace `primary: #6366f1` → `#0066CC`
- Replace `background-light: #ffffff` → `#FBFBFB`
- Replace `charcoal: #0A0A0A` → `#1D1D1F`
- Add `secondary-text: #6E6E73`
- Add `structural-border: #E5E7EB`
- Add `surface: #FFFFFF`

**Usage Guidelines:**
- **#FBFBFB:** Body background, main canvas
- **#1D1D1F:** Headings, primary body text
- **#6E6E73:** Subheadlines, descriptions, metadata
- **#0066CC:** Call-to-action buttons, links, interactive elements, brand accent
- **#E5E7EB:** Card borders, dividers, section separators
- **#FFFFFF:** Card surfaces, elevated panels, UI snippet containers

---

### Typography

**Font Families:**
```css
--font-inter: Inter, sans-serif
--font-crimson: Crimson Pro, serif
```

**Font Usage:**
- **Display/Body:** Inter (all weights)
- **Editorial/Blog:** Crimson Pro (400, 600, italic)

**Responsive Text Utilities:**
- `.text-responsive-sm` → text-sm md:text-base
- `.text-responsive-base` → text-base md:text-lg
- `.text-responsive-xl` → text-xl md:text-2xl
- `.text-responsive-4xl` → text-4xl md:text-5xl lg:text-6xl

---

### Custom Utilities

#### Glassmorphism
```css
.glass-nav {
  backdrop-blur: 20px;
  background: rgba(255,255,255,0.7); /* Light mode */
  border: 1px solid rgba(255,255,255,0.2);
  box-shadow: large;
}

.dark .glass-nav {
  background: rgba(10,10,10,0.72);
  backdrop-filter: saturate(180%) blur(20px);
  border: 1px solid rgba(255,255,255,0.08);
}

.glass-button {
  backdrop-blur: medium;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
}
```

#### Feature Cards
```css
.feature-card {
  background: white;
  border: 1px solid rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  box-shadow: 0 20px 40px rgba(0,0,0,0.04);
}

.dark .feature-card {
  background: #111;
  border: 1px solid rgba(255,255,255,0.05);
}
```

#### UI Snippets
```css
.ui-snippet {
  background: #f9fafb;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

.dark .ui-snippet {
  background: #0a0a0a;
  border-color: #1f2937;
}
```

---

### Animations

#### Keyframes

**Carousel Scroll:**
```css
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.carousel-track {
  animation: scroll 40s linear infinite;
}
```

**Fade In Up:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
```

**Shimmer Effect:**
```css
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**Gradient Flow (4 variations):**
- `gradientFlow1` - 20s ease-in-out
- `gradientFlow2` - 25s ease-in-out
- `gradientFlow3` - 30s ease-in-out
- `gradientFlow4` - 22s ease-in-out

Each with unique translate, scale, and opacity transformations.

#### Animation Delays
- `.delay-100` - 0.1s
- `.delay-200` - 0.2s
- `.delay-300` - 0.3s
- `.delay-400` - 0.4s

#### Scroll Animation Hook

**File:** `hooks/useScrollAnimation.ts`

**Purpose:** Detect when elements enter viewport for fade-in effects

**Returns:**
- `elementRef` - React ref to attach to element
- `isVisible` - Boolean state for conditional classes

**Usage Pattern:**
```tsx
const { elementRef, isVisible } = useScrollAnimation();

<div
  ref={elementRef}
  className={`transition-all duration-700 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
>
```

---

## Functional Requirements

### Navigation

**FR-1:** Fixed header remains visible on scroll  
**FR-2:** Smooth scroll to section anchors on navigation click  
**FR-3:** Mobile menu slides in from right with backdrop overlay  
**FR-4:** Active section detection (future enhancement)  
**FR-5:** Scroll offset adjustment for fixed header (100px)

### Animations

**FR-6:** Hero headline animates on page load (fade-in-up)  
**FR-7:** Section content animates on scroll into viewport  
**FR-8:** Carousel infinitely scrolls with seamless loop  
**FR-9:** Gradient background flows continuously  
**FR-10:** CTA buttons have shimmer hover effect  
**FR-11:** Reduced motion support for accessibility

### Forms

**FR-12:** Contact form requires all fields  
**FR-13:** Email validation enforced  
**FR-14:** Submit triggers alert confirmation (demo mode)  
**FR-15:** Form data logged to console (dev mode)  
**FR-16:** Input focus states use primary color ring

### Responsive Design

**FR-17:** Mobile-first approach with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

**FR-18:** Touch-friendly tap targets (min 44x44px)  
**FR-19:** Hamburger menu on mobile, full nav on desktop  
**FR-20:** Grid layouts collapse to single column on mobile

### Dark Mode

**FR-21:** Class-based dark mode toggle support  
**FR-22:** All components have dark mode variants  
**FR-23:** Dark mode toggle UI not yet implemented

---

## SEO & Metadata

**Title:** Shop Titan | Professional Apparel Operations  
**Description:** Unify your production. One platform for high-volume decorators to manage orders, inventory, and automation—from intake to fulfillment, without the friction.

**Meta Tags:**
- Language: en
- Viewport: responsive
- Theme color: #6366CC (to be updated)

**Structured Data:** Not yet implemented

---

## Performance Requirements

**PR-1:** First Contentful Paint < 1.5s  
**PR-2:** Time to Interactive < 3s  
**PR-3:** Lighthouse Performance Score > 90  
**PR-4:** Optimized font loading with swap display  
**PR-5:** Material Icons loaded via CDN

---

## Browser Support

- Chrome (latest 2 versions)
- Safari (latest 2 versions)
- Firefox (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

---

## Future Enhancements

### Phase 2
- [ ] Dark mode toggle button in header
- [ ] Replace Material Icon placeholders with real partner logos
- [ ] Blog article pages with actual content
- [ ] Form backend integration (email service)
- [ ] Analytics integration (Google Analytics / Plausible)
- [ ] Cookie consent banner

### Phase 3
- [ ] A/B testing framework
- [ ] Testimonials section
- [ ] Case studies page
- [ ] Video testimonials
- [ ] Live chat integration
- [ ] Pricing page

### Phase 4
- [ ] Product demo video integration
- [ ] Interactive product tour
- [ ] Comparison calculator
- [ ] ROI calculator tool
- [ ] Multi-language support

---

## Known Issues & Limitations

> [!CAUTION]
> **Current Limitations:**

1. **Form submission** is client-side only (no backend)
2. **Partner carousel** uses icon placeholders instead of real logos
3. **Dark mode** CSS ready but toggle UI not implemented
4. **Blog articles** are static content with no routing
5. **ProductShowcaseSection** not fully documented in provided files
6. **FeaturesSection** details incomplete (file too large)
7. **Color palette** not yet updated to Apple-inspired scheme

---

## Deployment Notes

**Development:**
```bash
cd apps/marketing
npm install
npm run dev
```
Access at: `http://localhost:3001`

**Production Build:**
```bash
npm run build
npm run start
```

**Environment Variables:**
- No environment variables currently required

---

## Messaging & Brand Voice

### Core Narrative

**Problem:** Business owners are trapped being "in" their business instead of "on" it  
**Solution:** System-driven operations that create operational leverage  
**Result:** Autonomous floor operations with strategic oversight

### Key Phrases

- "Unify your production"
- "Operational leverage"
- "System-driven hierarchy"
- "From Human Router to System Router"
- "High-volume decorators"
- "Self-correcting logistics"
- "One source of truth"
- "Without the friction"

### Tone

- **Professional** but approachable
- **Technical** but not jargon-heavy
- **Empathetic** to pain points
- **Confident** in solution
- **Editorial** voice in blog section
- **Action-oriented** in CTAs

---

## Appendix

### File Locations

**Core Files:**
- Layout: `apps/marketing/app/layout.tsx`
- Main Page: `apps/marketing/app/page.tsx`
- Global Styles: `apps/marketing/app/globals.css`
- Tailwind Config: `apps/marketing/tailwind.config.ts`

**Components:**
- Header: `apps/marketing/components/Header.tsx`
- Footer: `apps/marketing/components/Footer.tsx`
- Sections: `apps/marketing/components/sections/*.tsx`
- UI Components: `apps/marketing/components/ui/*.tsx`

**Hooks:**
- Scroll Animation: `apps/marketing/hooks/useScrollAnimation.ts`

**Assets:**
- Landing Video: `apps/marketing/public/animations/landing.mp4`

### Dependencies

```json
{
  "next": "^15.1.4",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "tailwindcss": "^3.4.17",
  "typescript": "^5.7.3"
}
```

### Development Commands

```bash
npm run dev      # Start dev server on port 3001
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Conclusion

Shop Titan's marketing website effectively communicates the value proposition of transforming traditional apparel decoration shops from human-centric to system-driven operations. The implementation uses modern web technologies with a focus on visual excellence, smooth animations, and clear messaging.

**Next Critical Step:** Implement the new Apple-inspired color palette to achieve the mature, professional aesthetic that aligns with the "System" and "Trust" brand positioning.

---

**Document Version:** 1.0  
**Last Updated:** February 10, 2026  
**Prepared By:** Antigravity AI Agent  
**Status:** Complete & Ready for Review
