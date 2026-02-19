'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

/**
 * Scroll-triggered entrance animation hook, resilient to main-thread blocking.
 *
 * Strategy:
 *  1. SSR renders with isVisible=true → content visible in HTML (no blank page)
 *  2. useLayoutEffect (runs before first paint) hides elements that are below
 *     the viewport so entrance animations still work
 *  3. IntersectionObserver reveals elements as they scroll into view
 *
 * This ensures content is visible even when a heavy asset (e.g. Spline 3D)
 * blocks the main thread — elements already in the viewport stay visible
 * because they were never hidden.
 */
export function useScrollAnimation(threshold = 0.1) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true); // true → SSR HTML is visible

    // Before first paint: hide elements below the viewport so they can
    // later animate in.  Elements already in/above the viewport stay visible.
    useLayoutEffect(() => {
        const el = elementRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top >= window.innerHeight) {
            setIsVisible(false);
        }
    }, []);

    // IntersectionObserver for the entrance animation
    useEffect(() => {
        if (isVisible) return; // already visible — nothing to do

        const el = elementRef.current;
        if (!el) return;

        // Immediate check: element may already be in the viewport by the
        // time this effect runs (user scrolled fast, or hydration was slow).
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100 && rect.bottom > 0) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -100px 0px',
            }
        );

        observer.observe(el);
        return () => observer.unobserve(el);
    }, [threshold, isVisible]);

    return { elementRef, isVisible };
}
