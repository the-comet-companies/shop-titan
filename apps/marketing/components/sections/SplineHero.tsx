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
        };
    } | null;
}

export default function SplineHero({
    scene = "https://prod.spline.design/tICsK1PQRrzcESXa/scene.splinecode"
}: SplineHeroProps) {
    const splineRef = useRef<SplineApp | null>(null);

    const adjustScale = useCallback(() => {
        if (!splineRef.current) return;

        const width = window.innerWidth;

        // Laptop screens (typically 1280px - 1440px) often feel too zoomed in
        if (width < 1600) {
            // Find the camera - Spline usually names it 'Main Camera', 'Camera', or 'PerspectiveCamera'
            const camera = splineRef.current.findObjectByName('Main Camera') ||
                splineRef.current.findObjectByName('Camera') ||
                splineRef.current.findObjectByName('PerspectiveCamera');

            if (camera && camera.position) {
                // Adjusting camera position to "pull back" significantly
                // Higher values = more assets visible
                camera.position.z = camera.position.z > 0 ? 2000 : -2000;
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
        if (w < 1024) return 'scale-[0.7] md:scale-[0.85]';
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
