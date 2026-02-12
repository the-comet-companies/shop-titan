# ShopTitan Engineering & Design Guidelines

This document outlines the core principles for building the ShopTitan frontend. All future code must adhere to these standards to maintain a premium, cohesive, and user-centric experience.

## 1. UI/UX Storytelling & Philosophy

Our goal isn't just to display features; it's to tell a story of *transformation* (Chaos -> Order, Friction -> Flow).

### Core Principles
*   **Show, Don't Just Tell**: Use interactive mockups, animations, and "live" UI elements instead of static screenshots whenever possible.
*   **Friction vs. Flow**:
    *   **Friction (The Problem)**: Use stark, slightly chaotic, or "warning" visual cues (e.g., red/orange accents, jagged lines, or "messy" layouts) when describing the user's pain points.
    *   **Flow (The Solution)**: Use smooth, aligned, and "calm" visual cues (e.g., green/blue accents, smooth curves, organized grids) when describing our solution.
*   **Visual Hierarchy**:
    *   **Headings**: Bold, concise, and often uppercase tracking for "eyebrow" labels.
    *   **Body Text**: Legible, high-contrast, restricted measure (max-width) for readability.
    *   **Micro-interactions**: Hover states should be meaningful (e.g., a card lifting, a border glowing) to invite interaction.

## 2. Responsive Design (Mobile-First)

Responsiveness is not an afterthought; it is a primary design constraint.

### Rules of Thumb
*   **Grid Safety**: ALWAYS add `min-w-0` to direct children of `grid` containers, especially when using `truncate` or flexbox inside them. This prevents grid blowouts on small screens.
*   **Stacking Order**:
    *   **Mobile**: Content (Text) FIRST, Visual (Image/Mockup) SECOND. Use `order-1` and `order-2` classes to enforce this.
    *   **Desktop**: Alternating layout (Text Left/Image Right -> Image Left/Text Right).
*   **Visibility & Overflow**:
    *   **Avoid Horizontal Scroll for Critical Flows**: Users should see the entire process at a glance. Use `flex-wrap` for timelines or step-by-step flows on mobile instead of `overflow-x-auto`, unless it's a non-critical carousel.
*   **Touch Targets**: Ensure buttons and interactive elements are at least 44px tall on mobile.

## 3. Code Cleanliness & Architecture

Maintainability allows us to iterate fast.

### Structure
*   **Component Granularity**: If a section has repeated sub-units (e.g., multiple "Feature Cards" or "Steps"), extract them into a sub-component (e.g., `FeatureBlock.tsx`) defined within the same file or a dedicated component file.
*   **Semantic HTML**: Use `<section>`, `<article>`, `<header>`, `<footer>`, etc., for better accessibility and SEO.
*   **Tailwind Best Practices**:
    *   Use `classNames` utility for conditional styling.
    *   Stick to the design tokens (e.g., `text-primary`, `bg-background-light`) defined in `globals.css` rather than hardcoded hex values.

## 4. Animation Strategy (`framer-motion`)

Animations guide the user's eye and smooth out transitions.

*   **Scroll Trigger**: Use `whileInView` with `viewport={{ once: true }}` for entrance animations. Don't over-animate; things should fade in or slide up gently.
*   **Staggered Children**: When revealing a list or grid, stagger the entrance of items (`transition: { staggerChildren: 0.1 }`) to create a polished feel.
*   **Performance**: Animate `opacity` and `transform` properties only. Avoid animating layout properties like `height` or `width` unless necessary (and use `layout` prop if so).

---

**Revision History**
*   v1.0: Initial Guidelines established (Focus: Mobile Responsiveness, Storytelling).
