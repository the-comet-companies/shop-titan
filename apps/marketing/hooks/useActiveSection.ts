import { useState, useEffect } from 'react';

/**
 * Hook to determine which section is currently active based on scroll position.
 * 
 * @param sectionIds Array of section IDs to track
 * @param offset px offset for calculation (e.g. header height)
 * @returns The ID of the currently active section
 */
export function useActiveSection(sectionIds: string[], offset = 100) {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            // Find the section that is currently visible
            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    // Check if the scroll position is within the section
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(id);
                        return;
                    }
                }
            }

            // Fallback: checks if we are at the top, set the first section active
            if (window.scrollY < 50 && sectionIds.length > 0) {
                setActiveSection(sectionIds[0]);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, offset]);

    return activeSection;
}
