# Pain Point Coverage Audit

Tracks which of the Top 10 Pain Points are addressed on the site, at what level, and what's missing.

Last updated: 2026-02-25

---

## How the site communicates pain (two levels)

**Macro (strategic narrative)** — PainPoint3D, Hero, ProductShowcase
Tells the story of *why the whole category of problem exists*. High emotion, broad audience hook.

**Micro (feature context)** — FeaturesSection Friction/Flow cards
Contextualizes *why each specific feature was built*. Detail-level, already-interested audience.

---

## Top 10 Coverage Map

| # | Pain Point | Macro | Micro (feature) | Status |
|---|---|---|---|---|
| 1 | No Single Source of Truth | ✅ PainPoint3D scene + Hero headline | ✅ Orders feature | **Covered** |
| 2 | Production Scheduling Chaos | ❌ | ✅ Machines & Scheduler feature | **Micro only** |
| 3 | Manual Repetitive Data Entry | ❌ | ❌ | **Missing entirely** |
| 4 | Lack of Real-Time Job Visibility | ✅ ProductShowcase "No Chasing Updates" | ✅ Orders feature | **Covered** |
| 5 | Margin Leakage | ❌ | ⚠️ Analytics feature (solution shown, pain not named) | **Micro only / weak** |
| 6 | Pricing Complexity & Inconsistency | ❌ | ✅ Pricing Matrixes feature | **Micro only** |
| 7 | Artwork & Approval Bottlenecks | ❌ | ❌ | **Missing entirely** |
| 8 | Inventory Blind Spots | ❌ | ⚠️ Analytics feature (solution shown, pain not named) | **Micro only / weak** |
| 9 | Owner Dependency & Bottlenecking | ✅ ProductShowcase "Owner-Absent Operations" | ❌ | **Macro only** |
| 10 | Scaling Breaks the System | ❌ | ❌ | **Missing entirely** |

---

## Gaps

### Missing entirely (no coverage at either level)
- **#3 Manual Repetitive Data Entry** — Every shop re-enters the same order into quotes, production sheets, invoices, and inventory. High daily frustration, never mentioned.
- **#7 Artwork & Approval Bottlenecks** — Wrong versions printed, email threads, reprints, client disputes. One of the most universally relatable production floor pains. Invisible on the site.
- **#10 Scaling Breaks the System** — What works at 5 employees collapses at 20. The fear that drives owners to seek a real platform. Never stated.

### Macro-level gaps (solution is shown, pain is never named)
- **#2 Production Scheduling Chaos** — Feature is strong, but "owners are guessing on whiteboards and magnets" is never said at the strategic level.
- **#5 Margin Leakage** — P&L dashboard is shown, but "most owners don't know their true profit per job" is never stated as a hook.
- **#6 Pricing Complexity** — Feature is strong, but the macro emotional hook ("your sales team is underquoting because pricing is in their head") is absent.
- **#8 Inventory Blind Spots** — Low stock alert is shown in a mockup, but "blanks running out mid-job" as a named pain never appears.

---

## Proposed Fix: "Can You Relate?" Section

A dedicated section — positioned high in the funnel, above the Features section — that surfaces all 10 pain points as short punchy hooks. Framework language: *"Do you recognize any of these?"*

This keeps FeaturesSection scoped to features, and gives the pain points their own strategic moment.

### Proposed placement in page order
```
Hero
↓
PainPoint3D (5-scene scroll — goes deep on #1)
↓
[ "Can You Relate?" section — surfaces all 10 ] ← NEW
↓
ProductShowcase
↓
FeaturesSection
↓
BenefitsSection
↓
Pricing
↓
CTA
```

### Design direction
- Grid of 10 cards (or 2-col list), each with:
  - A short "YES THAT'S ME" headline (one sentence max — no commas, no lists)
  - One brutal real-life consequence line
  - No solution mentioned — let it land
- Section ends with a single bridge line: *"Every one of these has a fix."* + scroll CTA into Features

### Content draft

| # | Headline | Consequence line |
|---|---|---|
| 1 | Your orders live in 6 different places. | And everyone's working off a different version. |
| 2 | Your production schedule is a whiteboard. | One rush job and the whole day falls apart. |
| 3 | You enter the same order four times. | Quotes. Production sheets. Invoices. Inventory. Every time. |
| 4 | "Where is this order?" gets asked 10 times a day. | And nobody has a real answer. |
| 5 | You find out a job lost money weeks after it shipped. | Because labor, machine time, and reprints were never tracked. |
| 6 | Your sales rep just guessed on that quote. | And you won't know if it was profitable until it's too late. |
| 7 | The wrong artwork version got printed. | Again. |
| 8 | You ran out of blanks mid-production. | Because nobody knew stock was low until it was too late. |
| 9 | The shop slows down every time you leave. | Because the system only works when you're in it. |
| 10 | What worked at 5 employees is breaking at 20. | Because you built the system for where you were, not where you're going. |

---

## Iteration Log

| Date | Change | Notes |
|---|---|---|
| 2026-02-25 | Initial audit | PainPoint3D had 3/5 framework steps; added Negative Stakes + CTA scenes |
| 2026-02-25 | Framework complete | All 5 steps now in PainPoint3D scroll sequence |
| 2026-02-25 | Coverage audit | Top 10 mapped; 3 missing entirely, 4 macro-level gaps identified |
| — | "Can You Relate?" section | Proposed — not yet built |
