import { useState, useEffect, useRef } from 'react';

/**
 * Hook to determine which section is currently active based on scroll position.
 * Uses requestAnimationFrame throttling to avoid re-renders on every scroll event.
 */
export function useActiveSection(sectionIds: readonly string[], offset = 100) {
    const [activeSection, setActiveSection] = useState<string>('');
    const rafRef = useRef<number | null>(null);
    const currentRef = useRef<string>('');

    useEffect(() => {
        const handleScroll = () => {
            if (rafRef.current !== null) return; // already scheduled
            rafRef.current = requestAnimationFrame(() => {
                rafRef.current = null;
                const scrollPosition = window.scrollY + offset;

                let next = window.scrollY < 50 && sectionIds.length > 0 ? sectionIds[0] : '';

                for (const id of sectionIds) {
                    const element = document.getElementById(id);
                    if (element) {
                        const { offsetTop, offsetHeight } = element;
                        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                            next = id;
                            break;
                        }
                    }
                }

                // Only trigger re-render when section actually changes
                if (next !== currentRef.current) {
                    currentRef.current = next;
                    setActiveSection(next);
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, [sectionIds, offset]);

    return activeSection;
}
