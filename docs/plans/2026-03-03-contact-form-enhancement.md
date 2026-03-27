# Contact Form Enhancement Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add "Number of Employees" (select) and "Decoration Methods Used" (multi-select checkboxes) to the existing contact form, and update messaging to "Let's Talk".

**Architecture:** Single file change to `ContactSection.tsx` — extend state, add new handlers, add new form fields in the correct steps, update webhook payloads and copy.

**Tech Stack:** React (useState), TypeScript, Framer Motion, Tailwind/CSS utilities

---

### Task 1: Update formData state type and default values

**Files:**
- Modify: `apps/marketing/components/sections/ContactSection.tsx:12-18`

Add `employeeCount: ""` and `decorationMethods: [] as string[]` to the `formData` useState.

---

### Task 2: Add handleDecorationChange handler

**Files:**
- Modify: `apps/marketing/components/sections/ContactSection.tsx` (after handleChange, ~line 35)

```tsx
const handleDecorationChange = (method: string) => {
    setFormData(prev => ({
        ...prev,
        decorationMethods: prev.decorationMethods.includes(method)
            ? prev.decorationMethods.filter(m => m !== method)
            : [...prev.decorationMethods, method]
    }));
};
```

---

### Task 3: Update webhook payloads

**Files:**
- Modify: `apps/marketing/components/sections/ContactSection.tsx`

Step 1 webhook body → add `employeeCount: formData.employeeCount`
Step 2 webhook body → add `decorationMethods: formData.decorationMethods`
Also update the fallback console.log statements.

---

### Task 4: Add "Number of Employees" field to Step 1 form

**Files:**
- Modify: `apps/marketing/components/sections/ContactSection.tsx` (after the Company field)

```tsx
{/* Number of Employees */}
<div>
    <label htmlFor="employeeCount" className="block text-xs font-bold uppercase tracking-widest text-secondary-text mb-2">
        Number of Employees
    </label>
    <select
        id="employeeCount"
        value={formData.employeeCount}
        onChange={handleChange}
        required
        className="w-full min-h-[48px] bg-background-light dark:bg-black/20 border border-structural-border dark:border-gray-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-charcoal dark:text-white outline-none appearance-none"
    >
        <option value="" disabled>Select team size</option>
        <option value="1-5">1–5 employees</option>
        <option value="6-15">6–15 employees</option>
        <option value="16-50">16–50 employees</option>
        <option value="51-200">51–200 employees</option>
        <option value="200+">200+ employees</option>
    </select>
</div>
```

---

### Task 5: Add "Decoration Methods" checkboxes to Step 2 form

**Files:**
- Modify: `apps/marketing/components/sections/ContactSection.tsx` (before the friction textarea in step 2)

Custom styled checkbox grid for: Screen Printing, Embroidery, DTG/DTF, Vinyl/Heat Transfer, Sublimation, Other.

---

### Task 6: Update messaging copy

**Files:**
- Modify: `apps/marketing/components/sections/ContactSection.tsx`

- `"Book a Demo"` → `"Let's Talk"` (form card title)
- `"Request Your Demo"` → `"Let's Talk"` (mobile heading)
- `"Main Friction Point"` → `"What's Slowing You Down?"` (label)
- Remove `required` from friction textarea (it's now optional context alongside decoration methods)

---

### Task 7: Fix form reset

**Files:**
- Modify: `apps/marketing/components/sections/ContactSection.tsx:398`

Update the reset `setFormData` call to include `employeeCount: ""` and `decorationMethods: []`.

---

### Task 8: Commit

```bash
git add apps/marketing/components/sections/ContactSection.tsx docs/plans/2026-03-03-contact-form-enhancement-design.md docs/plans/2026-03-03-contact-form-enhancement.md
git commit -m "feat(contact): add employee count and decoration methods fields to Let's Talk form"
```
