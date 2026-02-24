'use client';

import { useEffect, useRef, useMemo, useCallback, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// --- Data Structure ---
const painPointScenes = [
    {
        id: "chaos",
        title: "No Single Source of Truth",
        subtitle: "THE PROBLEM",
        description: "Orders, artwork, pricing, and approvals live in different places. Your production manager is copying details from emails into 4 different spreadsheets.",
        color: "#ef4444",
        particleColor: "#93c5fd",
        highlightWord: "CHAOS"
    },
    {
        id: "solution",
        title: "One Platform. One Truth.",
        subtitle: "THE SOLUTION",
        description: "Shop Titan becomes your single source of truth. Orders, art, pricing, production, and inventory in one system.",
        color: "#4f46e5",
        particleColor: "#60a5fa",
        highlightWord: "CLARITY"
    },
    {
        id: "dream",
        title: "Here's What Happens",
        subtitle: "DREAM OUTCOME",
        description: "Zero time wasted searching. No more 'which version?' confusion. Production errors eliminated at the source.",
        color: "#059669",
        particleColor: "#3b82f6",
        highlightWord: "FOCUS"
    },
];

// --- 3D Particle Component ---
function StoryParticles({ activeIndex, visible }: { activeIndex: number; scrollProgress: number; visible: boolean }) {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 500;

    const [targetPositions, setTargetPositions] = useState<Float32Array | null>(null);

    const generateDustPositions = useCallback(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const r = Math.pow(Math.random(), 0.4) * 3.2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta) + (Math.random() - 0.5) * 1.5;
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) + (Math.random() - 0.5) * 1.0;
            positions[i * 3 + 2] = r * Math.cos(phi) + (Math.random() - 0.5) * 1.5;
        }
        return positions;
    }, []);

    useEffect(() => {
        setTargetPositions(generateDustPositions());
    }, [activeIndex, generateDustPositions]);

    const initialPositions = useMemo(() => generateDustPositions(), [generateDustPositions]);

    useFrame((_, delta) => {
        if (!visible || !pointsRef.current || !targetPositions) return;

        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
        const lerpFactor = 1.5 * delta;

        for (let i = 0; i < count; i++) {
            const idx = i * 3;
            positions[idx] += (targetPositions[idx] - positions[idx]) * lerpFactor;
            positions[idx + 1] += (targetPositions[idx + 1] - positions[idx + 1]) * lerpFactor;
            positions[idx + 2] += (targetPositions[idx + 2] - positions[idx + 2]) * lerpFactor;
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;

        pointsRef.current.rotation.y += delta * 0.04;
        pointsRef.current.rotation.x += delta * 0.02;
    });

    return (
        <Points ref={pointsRef} positions={initialPositions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color={painPointScenes[activeIndex].particleColor}
                size={0.038}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.75}
                blending={THREE.NormalBlending}
            />
        </Points>
    );
}

function Scene({ activeIndex, scrollProgress, visible }: { activeIndex: number; scrollProgress: number; visible: boolean }) {
    return (
        <StoryParticles activeIndex={activeIndex} scrollProgress={scrollProgress} visible={visible} />
    );
}

// --- Main Component ---
export default function PainPoint3D() {
    const outerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const outer = outerRef.current;
        if (!outer) return;

        const handleScroll = () => {
            const rect = outer.getBoundingClientRect();
            const totalScrollable = outer.offsetHeight - window.innerHeight;
            const scrolled = -rect.top;
            const p = Math.max(0, Math.min(1, scrolled / totalScrollable));
            setProgress(p);
            setActiveIndex(Math.min(Math.floor(p * 3), 2));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // sync on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={outerRef} style={{ height: '300vh' }}>
            <section className="sticky top-0 h-screen w-full overflow-hidden bg-background-light dark:bg-black">
                {/* 3D Canvas Layer */}
                <div className="absolute inset-0 z-0">
                    <Canvas
                        camera={{ position: [0, 0, 8], fov: 50 }}
                        gl={{ alpha: true, antialias: false }}
                        dpr={[1, 1.5]}
                    >
                        <Scene activeIndex={activeIndex} scrollProgress={progress} visible={true} />
                    </Canvas>
                </div>

                {/* Text Overlay Layer */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <div className="w-full max-w-4xl px-mobile mx-auto text-center">
                        {painPointScenes.map((scene, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div
                                    key={scene.id}
                                    className={`absolute inset-0 flex flex-col items-center justify-center ${isActive ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <div className="p-4 md:p-0">
                                        <span
                                            className="block text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6"
                                            style={{ color: scene.color }}
                                        >
                                            {scene.subtitle}
                                        </span>
                                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal dark:text-white mb-8 leading-tight tracking-tight">
                                            {scene.title}
                                        </h2>
                                        <p className="text-lg md:text-2xl text-secondary-text dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                                            {scene.description}
                                        </p>
                                        <div className="inline-block px-6 py-3 border-2 rounded-full text-sm font-bold tracking-widest uppercase" style={{ borderColor: scene.color, color: scene.color }}>
                                            {scene.highlightWord}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Gradient overlay for bottom blending */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-black to-transparent pointer-events-none" />
            </section>
        </div>
    );
}
