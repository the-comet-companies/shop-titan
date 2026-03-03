# Public Pricing UI Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a visually stunning, glassmorphic `/pricing` page that hides dollar amounts ("Custom Quote") while preserving the original `PricingSection.tsx`.

**Architecture:** Create a new `PublicPricingSection.tsx`, update `/pricing/page.tsx` to use it, and restore navbar links.

**Tech Stack:** React, Tailwind CSS, Framer Motion

---

### Task 1: Create the new PublicPricingSection component

**Files:**
- Create: `apps/marketing/components/sections/PublicPricingSection.tsx`

Use Framer motion for entry staggered animations. Implement dark mode glassmorphism (`bg-white/5`, `backdrop-blur-xl`, `border-white/10`). Use radial gradients for background styling. Retain the same feature lists as the original `PricingSection.tsx`.

---

### Task 2: Update the pricing page to render the new section

**Files:**
- Modify: `apps/marketing/app/pricing/page.tsx`

Import `PublicPricingSection` instead of `PricingSection` and render it.

---

### Task 3: Restore Navigation

**Files:**
- Modify: `apps/marketing/components/Header.tsx`
- Modify: `apps/marketing/components/ui/MobileMenu.tsx`

Uncomment `pricing` from arrays and route handlers so the link works again.

---

### Task 4: Commit

```bash
git add .
git commit -m "feat(pricing): add revamped public pricing UI without dollar amounts"
```
