'use client';

import dynamic from 'next/dynamic';

// Code-split PainPoint3D to keep Three.js/R3F/drei (~800KB) out of the
// initial JS bundle. Without this, the heavy 3D libs block React hydration
// on mobile, preventing useEffect (IntersectionObserver, scroll listeners)
// from running in *all* downstream sections until parsing finishes.
const PainPoint3D = dynamic(() => import('./PainPoint3D'), {
    ssr: false,
    loading: () => (
        <div style={{ height: '300vh' }}>
            <div className="sticky top-0 h-screen w-full bg-background-light dark:bg-black" />
        </div>
    ),
});

export default function PainPointSection() {
    return (
        <div id="pain-points" className="relative">
            {/* Steps 1-4: 3D Scroll Experience */}
            <PainPoint3D />
        </div>
    );
}
