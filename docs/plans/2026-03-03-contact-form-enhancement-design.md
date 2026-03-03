# Contact Form Enhancement — Design

**Date:** 2026-03-03

## Problem

The existing contact form at `/reach-out` already captures Name, Email, Phone, and Company. However, it lacks two key qualification fields needed for informed sales conversations: **number of employees** and **decoration methods used**. The form also uses "Book a Demo" / "Request Your Demo" language that doesn't align with the new "no public pricing, let's talk first" direction.

## Decision: Enhance Existing Form (Not a New Page)

- The "Request Demo" header CTA already routes to `/reach-out`
- Email + Phone are already collected
- Adding two fields avoids a second conversion surface and keeps UX focused

## Design

### Step 1 Fields (Lead Capture)
| Field | Type | Notes |
|---|---|---|
| Name | text | existing |
| Work Email | email | existing |
| Phone | tel | existing |
| Company | text | existing |
| **Number of Employees** | select | **new** — options: 1–5, 6–15, 16–50, 51–200, 200+ |

### Step 2 Fields (Context)
| Field | Type | Notes |
|---|---|---|
| **Decoration Methods** | checkbox group | **new** — multi-select: Screen Printing, Embroidery, DTG/DTF, Vinyl/Heat Transfer, Sublimation, Other |
| What's Slowing You Down? | textarea | renamed from "Main Friction Point" |

### Messaging Updates
- Form card title: `"Book a Demo"` → `"Let's Talk"`
- Mobile heading: `"Request Your Demo"` → `"Let's Talk"`

### Webhook Payload Updates
- Step 1 webhook: add `employeeCount`
- Step 2 webhook: add `decorationMethods`
