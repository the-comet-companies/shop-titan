# Pricing Page Archival

**Date**: March 3, 2026

## Context
The Pricing page has been temporarily archived and removed from the main navigation header and mobile menu. 

## Reason
Since the SaaS is currently new, the strategy is to "test the waters" first. Instead of showing public pricing tiers immediately, pricing will be decided and discussed on a case-by-case basis when directly talking to clients. 

## Implementation Notes
- The pricing link has been commented out in `apps/marketing/components/Header.tsx` (`NAV_SECTIONS` and `ACTIVE_SECTIONS`).
- The routing logic for `pricing` in `Header.tsx` has been commented out.
- The `Pricing` menu item in `apps/marketing/components/ui/MobileMenu.tsx` has been commented out.

The actual `/pricing` page file still exists if needed in the future, but it is no longer accessible via the site's navigation. To restore it, simply uncomment the code in `Header.tsx` and `MobileMenu.tsx`.
