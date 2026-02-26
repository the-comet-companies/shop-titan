# Coming Soon Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a dark "What's Coming" section placed before CtaSection on the homepage, featuring four upcoming-feature cards with logo placeholders and a UI-only email notification form.

**Architecture:** Single `ComingSoonSection.tsx` client component. Email form state managed locally with `useState`. Logo slots render text-pill placeholders now; real SVGs dropped into `public/images/logos/` later with no code changes required. Wired into `app/page.tsx` between `<ShowcaseSection />` and `<CtaSection />`.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, Material Symbols Outlined

**Design reference:** `docs/plans/2026-02-25-coming-soon-section-design.md`

---

## Task 1: Create logo directory and placeholder files

**Files:**
- Create: `apps/marketing/public/images/logos/.gitkeep`

**Step 1: Create the directory**

```bash
mkdir -p apps/marketing/public/images/logos
touch apps/marketing/public/images/logos/.gitkeep
```

**Step 2: Commit**

```bash
git add apps/marketing/public/images/logos/.gitkeep
git commit -m "chore: add logos directory for coming soon section"
```

---

## Task 2: Build ComingSoonSection component

**Files:**
- Create: `apps/marketing/components/sections/ComingSoonSection.tsx`

This is the entire section. Read the full file before moving on to wiring.

**Step 1: Create `apps/marketing/components/sections/ComingSoonSection.tsx`**

```tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// Logo slot: renders an <img> if the SVG file exists at the given path,
// otherwise renders a text pill. Swap in real SVGs by dropping files into
// public/images/logos/ — no code changes needed.
function LogoSlot({ name, file }: { name: string; file: string }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (!imgFailed) {
    return (
      <img
        src={`/images/logos/${file}`}
        alt={name}
        onError={() => setImgFailed(true)}
        className="h-6 w-auto object-contain opacity-60 grayscale"
      />
    );
  }

  return (
    <span className="px-3 py-1 rounded-full bg-white/10 text-white/50 text-xs font-medium">
      {name}
    </span>
  );
}

const CARDS = [
  {
    id: 'woocommerce',
    icon: 'shopping_bag',
    title: 'WooCommerce Integration',
    description: 'Connect your WooCommerce store directly to Shop Titan.',
    footnote: '* Additional time may be required for field mapping',
    logos: [{ name: 'WooCommerce', file: 'woocommerce.svg' }],
  },
  {
    id: 'shopify',
    icon: 'storefront',
    title: 'Shopify Integration',
    description: 'Two-way sync between Shopify orders and your Shop Titan workflow.',
    footnote: '* Additional dev time may be required for mapping',
    logos: [{ name: 'Shopify', file: 'shopify.svg' }],
  },
  {
    id: 'design-library',
    icon: 'palette',
    title: 'Design Library',
    description: 'Take your designs, sell them and push them to all the marketplaces.',
    footnote: null,
    logos: [],
  },
  {
    id: 'feed-management',
    icon: 'rss_feed',
    title: 'eCommerce Feed Management',
    description: 'Easy XML creation and product pushing across all major platforms.',
    footnote: null,
    logos: [
      { name: 'eBay', file: 'ebay.svg' },
      { name: 'Amazon', file: 'amazon.svg' },
      { name: 'Etsy', file: 'etsy.svg' },
      { name: 'Shopify', file: 'shopify.svg' },
      { name: 'WooCommerce', file: 'woocommerce.svg' },
      { name: 'Merchant Center', file: 'google-merchant-center.svg' },
      { name: 'Faire', file: 'faire.svg' },
      { name: 'Fashion Go', file: 'fashion-go.svg' },
    ],
  },
] as const;

export default function ComingSoonSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-3xl" />
        <div className="absolute bottom-0 -left-48 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.05] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-5">
            Extra
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5">
            What&apos;s Coming.
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-10">
            Be the first to know when these features ship.
          </p>

          {/* Email form */}
          <div className="flex justify-center">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 text-white/80"
              >
                <span className="material-symbols-outlined text-primary text-2xl">
                  check_circle
                </span>
                <span className="text-base font-medium">You&apos;re on the list.</span>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-primary/60 focus:bg-white/[0.12] transition-colors"
                />
                <button
                  type="submit"
                  className="px-7 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors flex-shrink-0"
                >
                  Notify Me
                </button>
              </motion.form>
            )}
          </div>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {CARDS.map((card) => (
            <motion.div
              key={card.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group relative flex flex-col gap-4 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-primary/30 hover:bg-white/[0.08] hover:shadow-[0_0_40px_-10px_rgba(0,102,204,0.3)] transition-all duration-300"
            >
              {/* Top-edge glass highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-3xl pointer-events-none" />

              {/* Header row */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl">
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight">{card.title}</h3>
                </div>
                <span className="flex-shrink-0 px-2.5 py-1 rounded-full bg-white/10 text-white/50 text-[10px] font-bold tracking-wider uppercase">
                  Soon
                </span>
              </div>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed">{card.description}</p>

              {/* Logo grid */}
              {card.logos.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-1 items-center">
                  {card.logos.map((logo) => (
                    <LogoSlot key={logo.file} name={logo.name} file={logo.file} />
                  ))}
                </div>
              )}

              {/* Footnote */}
              {card.footnote && (
                <p className="text-white/25 text-xs mt-auto pt-2 border-t border-white/10">
                  {card.footnote}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

**Step 2: Verify no TypeScript errors**

```bash
cd apps/marketing && npx tsc --noEmit
```

Expected: no errors.

**Step 3: Commit**

```bash
git add apps/marketing/components/sections/ComingSoonSection.tsx
git commit -m "feat(marketing): add ComingSoonSection component"
```

---

## Task 3: Wire into page

**Files:**
- Modify: `apps/marketing/app/page.tsx`

**Step 1: Read current `apps/marketing/app/page.tsx`** (confirm current imports and order)

**Step 2: Add import**

Add after the `ShowcaseSection` import line:
```tsx
import ComingSoonSection from "@/components/sections/ComingSoonSection";
```

**Step 3: Add component between ShowcaseSection and CtaSection**

```tsx
<ShowcaseSection />
<ComingSoonSection />
<CtaSection />
```

**Step 4: Visual checks**

Start the dev server if not already running:
```bash
cd apps/marketing && npm run dev
```

Navigate to `http://localhost:3001` and scroll to the bottom. Confirm:
- [ ] Dark section appears between ShowcaseSection and CtaSection
- [ ] "EXTRA" eyebrow pill visible
- [ ] "What's Coming." headline renders large and white
- [ ] Email form: type an email and click Notify Me → form disappears, success message appears
- [ ] 4 cards in 2-column grid on desktop, stacked on mobile
- [ ] Each card shows icon, title, description, "Soon" badge
- [ ] Logo slots show text pill placeholders (no 404 errors in console — `onError` handles missing files gracefully)
- [ ] WooCommerce and Shopify cards show footnote text
- [ ] Feed Management card shows all 8 logo placeholder pills
- [ ] Hover on card: border glows blue, subtle shadow

**Step 5: Commit**

```bash
git add apps/marketing/app/page.tsx
git commit -m "feat(marketing): wire ComingSoonSection into homepage"
```

---

## Done

Section is live. When real SVG logos are ready, drop them into `apps/marketing/public/images/logos/` matching the filenames in `CARDS` — the `LogoSlot` component will automatically switch from text pills to images with no code changes.

**Logo filenames expected:**
- `woocommerce.svg`
- `shopify.svg`
- `ebay.svg`
- `amazon.svg`
- `etsy.svg`
- `google-merchant-center.svg`
- `faire.svg`
- `fashion-go.svg`
