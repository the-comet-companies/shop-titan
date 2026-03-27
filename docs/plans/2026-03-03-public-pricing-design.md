# Public Pricing UI Revamp Design

**Date:** 2026-03-03

## Background
We need to present the pricing tiers (Starter, Business, Enterprise & Ultimate, Custom) to users without exposing explicit dollar amounts since the company's early strategy involves assessing clients case-by-case first. The user requested we don't just blank out the text of the existing `PricingSection`, but instead build a brand new, highly polished UI (`PublicPricingSection`) and leave the old one untouched as an archive.

## Visual Direction
1. **Dark/Glassmorphic Aesthetic:** The section uses `bg-charcoal` or `dark:bg-black` with a subtle grid or radial glow background.
2. **Backdrop Blur Cards:** Cards use `bg-white/5 backdrop-blur-md` bordered with `border-white/10`.
3. **Typography:** Replaced the large `$X,XXX` prices with an elegant gradient or highlighted "Custom Quote". 
4. **Primary CTA:** Replaced standard button colors with rich gradients or pulsing rings for the "Popular" tiers (e.g. Business and Ultimate).
5. **Segmented Control:** A sleek, pill-shaped toggle switch for "Platform" vs "Services".

## Components
- `PublicPricingSection.tsx`: A completely new UI component that exports default.
- Navigation in `Header.tsx` and `MobileMenu.tsx` will be restored to point to `/pricing`.
- `/pricing/page.tsx` will import and render `PublicPricingSection`.
