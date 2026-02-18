"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function ScrollHandler() {
    const lenis = useLenis();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Handle hash navigation on route change
        if (lenis && window.location.hash) {
            const hash = window.location.hash;

            const scrollToHash = () => {
                const element = document.querySelector(hash) as HTMLElement;
                if (element) {
                    lenis.scrollTo(element, { offset: -100 });
                }
            };

            // Try immediately
            scrollToHash();

            // Retry after short delay
            const timeout1 = setTimeout(scrollToHash, 100);
            // Retry after longer delay for heavy loads
            const timeout2 = setTimeout(scrollToHash, 500);

            return () => {
                clearTimeout(timeout1);
                clearTimeout(timeout2);
            };
        }
    }, [lenis, pathname, searchParams]);

    return null;
}

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.08, duration: 1.0, smoothWheel: true }}>
            <Suspense fallback={null}>
                <ScrollHandler />
            </Suspense>
            {children}
        </ReactLenis>
    );
}
