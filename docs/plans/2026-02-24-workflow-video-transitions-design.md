# Workflow Video — Transition & Icon Animation Redesign

**Date:** 2026-02-24

## Goal

Replace the white flash stage transition (which is harsh on the eyes) with a clean dark cut, and add richer alternating icon entry animations (slide + rotation + scale) to give the 13-stage sequence visual rhythm.

---

## Design Decisions

### Transition: Remove White Flash

The white `AbsoluteFill` overlay and `flashOpacity` variable are removed entirely. The `#0A0A0A` background makes the hard cut between stages already dark and eye-friendly. The icon animation starts at frame 0 and serves as the visual "landing" for each stage — no separate transition effect needed.

All downstream animation timing shifts 8 frames earlier (was offset by the 8-frame flash buffer).

### Icon Animation: Alternating Slide + Rotation

`Stage` receives a new `index: number` prop (0–12), passed from the parent composition.

Animation alternates by index parity:

| Index parity | translateX start | rotation start |
|---|---|---|
| Even (0, 2, 4…) | −150px → 0 | −20deg → 0 |
| Odd (1, 3, 5…) | +150px → 0 | +20deg → 0 |

All motion (translateX, rotation, scale, opacity) is driven by Remotion `spring()` — no CSS transitions or Tailwind animation classes. Duration: frames 0–25.

---

## Updated Animation Timing

All timings are relative to frame 0 of each stage (90 frames total).

| Element | Old timing | New timing |
|---|---|---|
| Flash overlay | 0–8 (removed) | — |
| Icon slide/rotate/scale/fade | 8–30 | 0–25 |
| Stage number fade | 30–45 | 22–37 |
| Stage name slide up | 42–60 | 34–52 |
| Rule draw | 52–65 | 44–57 |
| Insight fade up | 60–82 | 52–74 |
| Progress bar | 0–90 | 0–90 (unchanged) |

---

## Files Changed

- `apps/remotion/src/WorkflowVideo/Stage.tsx` — remove flash, add index prop, add alternating animation
- `apps/remotion/src/WorkflowVideo/WorkflowVideo.tsx` — pass `index` prop to each `<Stage>`
- `apps/marketing/public/animations/workflow.mp4` — re-rendered output
