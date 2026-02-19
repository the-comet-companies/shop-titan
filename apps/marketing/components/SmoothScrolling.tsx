"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function ScrollHandler() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Handle hash navigation on route change
        if (window.location.hash) {
            const hash = window.location.hash;

            const scrollToHash = () => {
                const element = document.querySelector(hash) as HTMLElement;
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    }, [pathname, searchParams]);

    return null;
}

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Suspense fallback={null}>
                <ScrollHandler />
            </Suspense>
            {children}
        </>
    );
}
