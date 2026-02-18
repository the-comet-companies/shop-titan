'use client';

import { Suspense, lazy, useCallback, useRef, useEffect } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineHeroProps {
    scene?: string;
}

interface SplineApp {
    findObjectByName: (name: string) => {
        position?: {
            z: number;
            y?: number;
            x?: number;
        };
    } | undefined; // Changed from null to undefined to match likely Spline return type
}

export default function SplineHero({
    scene = "https://prod.spline.design/tICsK1PQRrzcESXa/scene.splinecode"
}: SplineHeroProps) {
    const splineRef = useRef<SplineApp | null>(null);

    const adjustScale = useCallback(() => {
        if (!splineRef.current) return;

        const width = window.innerWidth;

        if (width < 768) {
            // Mobile screens (portrait)
            const camera = splineRef.current.findObjectByName('Main Camera') ||
                splineRef.current.findObjectByName('Camera') ||
                splineRef.current.findObjectByName('PerspectiveCamera');

            if (camera && camera.position) {
                // 1. Pull back EXTREMELY far to ensure everything is in frame
                camera.position.z = 4500;

                // Initialize if undefined to satisfy TS
                if (camera.position.x === undefined) camera.position.x = 0;
                if (camera.position.y === undefined) camera.position.y = 0;

                // 2. Shift camera to the RIGHT to find the tractors (which are off-screen right)
                // Moving camera +X moves the view to the right side of the scene
                camera.position.x += 1500;

                // 3. Pan down slightly to catch the floor/conveyor
                camera.position.y += 200;
            }
        } else {
            // Laptop & Desktop screens (landscape)
            // Find the camera - Spline usually names it 'Main Camera', 'Camera', or 'PerspectiveCamera'
            const camera = splineRef.current.findObjectByName('Main Camera') ||
                splineRef.current.findObjectByName('Camera') ||
                splineRef.current.findObjectByName('PerspectiveCamera');

            if (camera && camera.position) {
                // Adjusting camera position to "pull back" significantly
                // Higher values = more assets visible
                // For desktop, we also want to shift sightly right to see the tractor if it's off-screen

                // Base Zoom for Desktop/Laptop
                camera.position.z = camera.position.z > 0 ? 2200 : -2200;

                // Initialize if undefined
                if (camera.position.x === undefined) camera.position.x = 0;
                if (camera.position.y === undefined) camera.position.y = 0;

                // Pan Right to find the tractor (similar to mobile but less aggressive)
                camera.position.x += 600;

                // Pan Down slightly
                camera.position.y += 100;
            }
        }
    }, []);

    const handleLoad = useCallback((app: SplineApp) => {
        splineRef.current = app;

        // Initial responsive adjustment
        adjustScale();
    }, [adjustScale]);

    useEffect(() => {
        window.addEventListener('resize', adjustScale);
        return () => window.removeEventListener('resize', adjustScale);
    }, [adjustScale]);

    // CSS-based scale factor for very small laptop screens/narrow viewports
    const getScaleClass = () => {
        if (typeof window === 'undefined') return 'scale-100';
        const w = window.innerWidth;
        if (w < 1440 && w >= 1024) return 'scale-[0.85] lg:scale-[0.9]';
        // Mobile is handled by camera Z-index now, so we can keep scale at 1 or slightly reduced if needed
        if (w < 768) return 'scale-100';
        if (w < 1024) return 'scale-[0.9]'; // Tablet
        return 'scale-100';
    };

    return (
        <div className="w-full h-full min-h-[400px] lg:min-h-none relative">
            <Suspense
                fallback={
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-3xl overflow-hidden animate-pulse">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                            <p className="text-sm text-secondary-text animate-pulse">Loading 3D Scene...</p>
                        </div>
                    </div>
                }
            >
                <div className={`w-full h-full transition-all duration-700 ease-out origin-center ${getScaleClass()}`}>
                    <Spline
                        scene={scene}
                        className="w-full h-full"
                        onLoad={handleLoad}
                    />
                </div>
            </Suspense>
        </div>
    );
}
