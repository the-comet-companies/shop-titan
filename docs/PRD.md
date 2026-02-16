# Product Requirements Document: Shop Titan Marketing Website

## Executive Summary

**Product Name:** Shop Titan (formerly Tech For Decorators)  
**Product Type:** Marketing Website / Single-Page Application  
**Target Audience:** High-volume apparel decorators and production shop owners  
**Version:** 1.1.0  
**Last Updated:** February 13, 2026

### Product Vision

**Headlines:**
1.  A single source of truth for the decoration industry.
2.  Our system allows you to focus on what you do best.

Shop Titan is the marketing website for a FileMaker-based operational platform designed to unify production for high-volume decorators. The website communicates the core value proposition: transforming traditional, human-centric shop management (where owners are "human routers") into system-driven operations that provide operational leverage and strategic oversight.

---

## 3. Marketing Story - About Us

### Necessity is the mother of invention

This solution came about because there was no solution I liked. So I built my own, over 15 years. Now, I am offering it to the rest of the world.

I did not want to move, and I did not like feeling stressed. I realized stress came from not having optics on where anything is, having to stay on top of the team. So I built a solution where I could be anywhere in the world and still run a large-scale print shop.

Of course, it is to help the team. But I had to do a lot to get it there.

*   Every click has a follow action.
*   We built this as automated as possible, as delegatable as possible, and for the least amount of issues or mistakes to go wrong.

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
│       ├── FeaturesSection.tsx
│       ├── PainPointSection.tsx
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
- Smooth scroll to ids

---

### 2. Hero Section (`#hero`)

**Purpose:** Primary value proposition and animated background

**Current Implementation:**
- **Headline:**
"A single source of truth for the decoration industry."

**Sub-headline:**
"Our system allows you to focus on what you do best."

**Primary CTA:**
"Request Demo" (Button - Standard)

**Secondary CTA:**
"See How It Works" (Button - Outline/Ghost)

**Social Proof / Trust Signals:**
*   "Trusted by 150+ high-volume shops."
*   Partner Logos (SanMar, S&S, AlphaBroder, etc. - in greyscale).

**"Why This System Exists" Subsection:**
*   Tagline: "Why This System Exists"
*   Content: "Most decorating businesses don't suffer from lack of talent. They suffer from *lack of structure*."

**Animations:**
- Fade-in-up for headline (0.8s)
- Delayed fade-in for CTAs
- Infinite carousel scroll (40s linear)
- Animated Gradient Background (4 blobs)
- Interactive Grid Pattern (opacity 0.4)

**Technical:**
- `useScrollAnimation` for "Why" section visibility.
- Padding offset: `pt-32` mobile, `pt-48` desktop.

---

### 3. Marketing Narrative & "Top 10" Pain Points (Context)

*This section provides the content strategy and problem analysis that drives the website's messaging. For the actual on-page implementation, see Section 7 (Pain Points Section).*

#### The "Why": Necessity is the mother of invention
*Marketing Story for About Page / Modal:*
"This solution came about because there was no solution I liked. So I built my own, over 15 years... I realized stress came from not having optics on where anything is... So I built a solution where I could be anywhere in the world and still run a large-scale print shop."

#### Top 10 Biggest Pain Points (Reference List)
#### Top 10 Biggest Pain Points (Reference List)

1.  **No Single Source of Truth:** Orders, artwork, pricing live in different places -> Miscommunication & errors.
2.  **Production Scheduling Chaos:** Whiteboards/Spreadsheets -> Owners guessing capacity.
3.  **Manual Repetitive Data Entry:** Errors, burnout, inconsistent records.
4.  **Lack of Real-Time Job Visibility:** "Where is this order?" -> Constant interruptions.
5.  **Margin Leakage:** Labor not tracked, reprints eat profit.
6.  **Pricing Complexity:** Structured matrices missing -> Sales underquotes.
7.  **Artwork and Approval Bottlenecks:** Files in email/drive -> Wrong versions printed.
8.  **Inventory Blind Spots:** Blanks run out mid-job -> Production stalls.
9.  **Owner Dependency:** Owner is the bottleneck/system.
10. **Scaling Breaks the System:** What works at 5 employees breaks at 20.

**The Meta Problem:** "They are production businesses running on fragmented systems built for small shops... You are not solving decoration. You are solving production operations."

---

### 4. Platform Section (`#platform`)

**Purpose:** System architecture overview and operational philosophy.

**Current Implementation:**

#### 4.1. Header
- **Subtitle:** "Architecture Overview"
- **Title:** "The Operational Architecture Behind Structured Shops."

#### 4.2. Main Content
- **Left Column:**
  - Headline: "Engineered for Operational Independence."
  - Description: "The platform installs structured control across ownership, management, and execution."
  - **2 Feature Cards:**
    - �️ **Executive Visibility:** Real-time financial/capacity clarity.
    - 🤖 **Autonomous Execution:** Automated routing, validation, sync.
- **Right Column (Architecture Diagram):**
  - **Level 01 - Ownership:** Strategic Oversight (P&L, Forecasting, Capital).
  - **Level 02 - Management:** Operational Command (Production Flow, Inventory, Workforce).
  - **Level 03 - Automation:** Core Engine (Error Prevention, Workflow, Status Sync).

#### 4.3. Hierarchy of Leverage
- **Traditional Shops:** Owner is "Human Router" (bottleneck).
- **System-Driven Shops:** "System Router" takes over decision trees.

**Animations:**
- Staggered fade-ins for header -> content -> diagram -> comparison.
- Diagram levels pop in with spring physics.
- Connecting lines grow vertically.

---

### 5. Product Showcase Section (`#product`)

**Purpose:** Visual demonstration of the platform UI.

**Current Implementation:**

#### 5.1. Friction Removal
- **Headline:** "Clarity replaces communication."
- **Points:** Fewest Clicks, Eliminated Handoffs, Explicit Ownership.
- **Mockup:** `app.shoptitan.com/workflow` showing "Auto-Approve Art" and "Skip Shipping Intake".
- **Metric:** "-64% reduction" in touchpoints.

#### 5.2. Ownership-Level Result
- **Headline:** "Scale without adding noise."
- **Points:** No Chasing Updates, Visibility-on-Demand, Owner-Absent Operations.
- **Mockup:** `app.shoptitan.com/dashboard` showing Queue Status (Healthy) and Operator Pulse (Machine A 142u/hr).

#### 5.3. Strategic Strategy
- **Headline:** "Single-Piece Orders, Without Operational Chaos."
- **Focus:** Neutralizing Print-on-Demand threat.
- **Mockup:** `app.shoptitan.com/orders/9102` showing Shopify Integration, Art Prep, Stock Check, Route.

#### 5.4. Intake Flow Animation
- Horizontal flow: Intake → Proofing → Production → Fulfillment → Updates.
- Animated with `framer-motion` sliding up.

**Technical:**
- Uses `BrowserFrame` component for mockups.
- Scroll-triggered animations for each section.

---

### 6. Features Section (`#features`)

**Purpose:** Detailed storytelling of platform capabilities.

**Current Implementation (Storytelling Mode):**
*   **Sticky Header:** "Engineered for Operational Excellence."
*   **5 Interactive Feature Blocks:**
    1.  **Job and project tracking:** "Where is order #492?" -> Real-time status.
        *   Mockup: Job #9928 Production Status.
    2.  **Inventory and materials management:** "Out of Large Whites" -> Global stock visibility.
        *   Mockup: Size grid with "Syncing with SanMar..." animation.
    3.  **Client workflows and approvals:** "Approval delays" -> Integrated proofing.
        *   Mockup: "Approved by Client" button (disabled state concept).
    4.  **Financial visibility and reporting:** "Profit leaks" -> Real-time P&L.
        *   Mockup: Net Profit $12,402 (+14%) with bar chart.
    5.  **Automation layers and triggers:** "Manual re-entry" -> Automated alerts/labels.
        *   Mockup: Code logic (`IF status == Approved await shipstation`).

**Core Features (Detailed Checklist):**

*   **Quotes:** (Video showcase needed)
*   **Orders:** End-to-end tracking.
*   **Customers / Vendors:** CRM & VRM.
*   **Purchase Orders:**
    *   **RFQ Feature:** Request for Quotes from vendors.
*   **Machines & Production Scheduler:** Capacity planning.
*   **Pricing Matrixes:** Stick count, screen setups, wash types, etc.
*   **Product Management:**
    *   **XML Feed Management:** Google Merchant, FB/Insta, Reddit, Pinterest.
*   **Contractor Work Orders:** "Send work out... get it done right."
*   **Unlimited Decoration & Task Types:** Flexible config.
*   **Reporting & Analytics:**
    *   Inventory Reports.
    *   Financial Visibility.

**UI/UX Requirements:**
*   Sticky sidebar navigation tracked to scroll.
*   `activeFeature` state highlighting.
*   **Video Integration:** "Showcase each section... possibly a video of each feature."

---

### 7. Pain Points Section (`#pain-points`)

**Purpose:** Highlight the daily chaos of traditional shops to build empathy and urgency.

**Current Implementation:**
- **Headline:** "Your best people are stuck doing low-value work."
- **Animated Background:** Large primary-colored blob with pulse animation.
- **3 Time-Based Pain Cards (Spotlight Effect):**
  1.  **9:30 am:** "Production manager copying order details from emails into 4 different spreadsheets."
  2.  **1:15 pm:** "Team lead hunting through folders for artwork files from a job sent two weeks ago."
  3.  **5:45 pm:** "Your best decorator manually updating inventory counts instead of running the next batch."
- **Closing Statement:** "We can automate all of this and give you hours back every day."

**Content Requirements (Context & Analysis):**
*See "Top 10 Biggest Pain Points" below for the detailed problem analysis driving this section.*

#### Top 10 High-Level Pain Points (Reference)
1.  **No Single Source of Truth**
2.  **Production Scheduling Chaos**
3.  **Manual Repetitive Data Entry**
4.  **Lack of Real-Time Job Visibility**
5.  **Margin Leakage**
6.  **Pricing Complexity**
7.  **Artwork Bottlenecks**
8.  **Inventory Blind Spots**
9.  **Owner Dependency**
10. **Scaling Breaks the System**

---

### 8. Blog Section (`#blog`)

**Purpose:** Editorial content and thought leadership

**Current Implementation:**
- **Header:**
  - Tagline: "EDITORIAL INSIGHTS"
  - Main: "The architecture of modern apparel decoration."
- **Articles:** (Fetched from `blog-data.ts`)
  - Displays category, date, title, description, and "Read Analysis" link.
  - Hover effects on titles.

**Technical:**
- `useScrollAnimation` for staggered entry.
- Links to `/blog/[slug]`.

---

### 9. Contact Section (`#contact`)

**Purpose:** Lead generation through demo request form

**Current Implementation:**
- **Header:** "Request Your Demo"
- **Subheader:** "No pressure. No sales pitch. Just clarity."
- **Form Fields:**
  - Name, Work Email, Company, Main Friction Point.
- **Submit Action:** Client-side validation + console log (demo mode).
- **Social Proof:** Avatar stack + "Joined by 150+ shops this month".
- **Footer Tag:** "Zero Distractions • Ultra-Clean UI • High Focus"

**Technical:**
- Client-side React state.
- Success message animation on submit.

---



### 9. Coming Soon (Email Notification)

*   **WooCommerce Integration** (mapping required)
*   **Shopify Integration** (mapping required)
*   **Design Library:** Sell designs and push to marketplaces.
*   **Ecommerce Feed Management:** Easy XML creation and product pushing for:
    *   eBay, Amazon, Etsy, Shopify, WooCommerce, Merchant Center, Faire, Fashion Go.

---

### 10. Target Industries & Segments

Our SaaS is not just for embroidery shops; it is for **Production Driven Decoration Businesses** managing multi-step custom workflows.

| Segment | Examples |
| :--- | :--- |
| **Primary Decorators** | Screen Printing, Embroidery, DTG, DTF, Sublimation, Heat Transfer/Vinyl, UV Printing, Pad Printing, Laser Engraving, Applique/Patch. |
| **Finishing & Processing** | Wash Houses (Enzyme, Acid, Pigment Dye), Dye Houses (Tie-dye, Dip-dye), Specialty Finishers (Sand blasting, Distressing), Embossing/Debossing. |
| **Government/Institutional** | University Print Shops, Municipal Uniform Providers (Police/Fire), Military Contractors. |
| **Hybrid Operators** | Promo Product Decorators, Uniform Companies, Merch Fulfillment Centers (3PL), Corporate Swag, Sports Outfitters, Print Brokers, Sign Shops. |
| **Industrial & Specialty** | Industrial Textile Printers, Hard Goods Decorators, Leather Goods, Luxury Garment Finishers. |
| **Special Models** | On-Demand Production (POD), Bulk B2B Decorators, In-House Brand Production Teams. |

---

### 11. Packages & Pricing

#### 01 Starter (~$5k Virtual Setup)
*   Quotes, Orders, Customers.

#### 02 Pro
*   All in Starter + Vendors, Machines, Purchase Orders.

#### 03 Fully Automated
*   All in Pro + White-label, API access, Stripe integration, UPS Shipping Labels, Quote follow-ups.

#### 04 Ultimate (Consultant Package)
*   Full print shop turnaround.
*   Bi-weekly 2-hour meetings for 6 months (SEO, tech stack, logic).
*   AI Integrations + Automations.

#### 05 Custom Development
*   Contact for more.

---



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

---

### 10. Benefits & Integrations

#### Benefits
*   **Reliable:** Fully Cloud Based on AWS S3 Servers.
    *   Secure with hourly, nightly, and monthly backups.
    *   "Your data - your access - you are in control."
*   **Quick Response Times:** Support happens through Slack.
*   **Maintenance Included:** Includes all maintenance + hosting.
*   **White Label:** Complete white label options, blind ship with client logos.

#### Integrations & Bonus Features
*   **Workflow:** n8n, Make.com, Zapier.
*   **Storage:** S3 bucket uploads.
*   **Payments:** Stripe (create, accept, record payments seamlessly).
*   **Shipping:** ShipStation integration (Live rates, create/void labels, shipment logging).
*   **Order Commissions:** (Future)

---

### 11. Coming Soon (Email Notification)

*   **WooCommerce Integration** (mapping required)
*   **Shopify Integration** (mapping required)
*   **Design Library:** Sell designs and push to marketplaces.
*   **Ecommerce Feed Management:** Easy XML creation and product pushing for:
    *   eBay, Amazon, Etsy, Shopify, WooCommerce, Merchant Center, Faire, Fashion Go.

---

### 12. Target Industries & Segments

Our SaaS is not just for embroidery shops; it is for **Production Driven Decoration Businesses** managing multi-step custom workflows.

| Segment | Examples |
| :--- | :--- |
| **Primary Decorators** | Screen Printing, Embroidery, DTG, DTF, Sublimation, Heat Transfer/Vinyl, UV Printing, Pad Printing, Laser Engraving, Applique/Patch. |
| **Finishing & Processing** | Wash Houses (Enzyme, Acid, Pigment Dye), Dye Houses (Tie-dye, Dip-dye), Specialty Finishers (Sand blasting, Distressing), Embossing/Debossing. |
| **Government/Institutional** | University Print Shops, Municipal Uniform Providers (Police/Fire), Military Contractors. |
| **Hybrid Operators** | Promo Product Decorators, Uniform Companies, Merch Fulfillment Centers (3PL), Corporate Swag, Sports Outfitters, Print Brokers, Sign Shops. |
| **Industrial & Specialty** | Industrial Textile Printers, Hard Goods Decorators, Leather Goods, Luxury Garment Finishers. |
| **Special Models** | On-Demand Production (POD), Bulk B2B Decorators, In-House Brand Production Teams. |

---

### 13. Packages & Pricing

#### 01 Starter (~$5k Virtual Setup)
*   Quotes, Orders, Customers.

#### 02 Pro
*   All in Starter + Vendors, Machines, Purchase Orders.

#### 03 Fully Automated
*   All in Pro + White-label, API access, Stripe integration, UPS Shipping Labels, Quote follow-ups.

#### 04 Ultimate (Consultant Package)
*   Full print shop turnaround.
*   Bi-weekly 2-hour meetings for 6 months (SEO, tech stack, logic).
*   AI Integrations + Automations.

#### 05 Custom Development
*   Contact for more.

---

### 14. Footer Component

**Purpose:** Site links and legal information

**Note:** Not detailed in provided files, standard footer implementation
