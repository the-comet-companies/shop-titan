# Contact Form Implementation & Webhook Setup

This document outlines the implementation details and setup instructions for the two-step contact form in the Marketing App (`apps/marketing`).

## Overview

The contact section has been split into a two-step process to optimize lead capture:

1.  **Step 1: Lead Capture**
    *   **Fields**: Name, Work Email, Phone Number, Company.
    *   **Action**: Captures the lead immediately via `WEBHOOK_STEP_1`.
    *   **Goal**: Secure contact information even if the user drops off before completing the full form.

2.  **Step 2: Context / Friction**
    *   **Fields**: Main Friction Point (Textarea).
    *   **Action**: Captures context via `WEBHOOK_STEP_2`.
    *   **Goal**: Gather qualitative data to qualify the lead and prepare for the demo.

---

## Configuration

To activate the webhooks, you need to set the following environment variables in your `.env.local` or deployment configuration.

### Environment Variables

```bash
NEXT_PUBLIC_CONTACT_WEBHOOK_STEP_1="https://your-webhook-url.com/step-1"
NEXT_PUBLIC_CONTACT_WEBHOOK_STEP_2="https://your-webhook-url.com/step-2"
```

*If these variables are not set, the form will log the data to the console for testing purposes.*

---

## Payload Structures

The form sends JSON payloads to the configured webhooks.

### Webhook 1 (Step 1: Lead Capture)

Triggered when the user clicks **"Next Step"**.

```json
{
  "step": 1,
  "name": "John Doe",
  "email": "john@company.com",
  "phone": "(555) 123-4567",
  "company": "Acme Inc",
  "timestamp": "2024-03-20T10:00:00.000Z"
}
```

### Webhook 2 (Step 2: Context)

Triggered when the user clicks **"Submit Request"**.

```json
{
  "step": 2,
  "email": "john@company.com", // Use email as key to merge with Step 1 record
  "friction": "Inventory management is chaotic and spreadsheets are failing.",
  "timestamp": "2024-03-20T10:00:30.000Z"
}
```

---

## Implementation Details

The core logic resides in:
`apps/marketing/components/sections/ContactSection.tsx`

### Key Functions

*   **`handleNextStep`**: Validates Step 1 fields, fires Webhook 1, and advances `step` state to 2.
*   **`handleSubmit`**: Validates Step 2 field, fires Webhook 2, sets `isSubmitted` to true.
*   **State Management**: Uses simple React `useState` for form data and step tracking.
*   **Animations**: Uses `framer-motion`'s `AnimatePresence` to transition between form steps smoothly.

### Error Handling

Currently, errors are logged to the console. In a production environment, you may want to add UI feedback (e.g., toast notifications) if the webhook request fails.
