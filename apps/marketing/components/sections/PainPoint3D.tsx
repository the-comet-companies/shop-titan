'use client';

import { useEffect, useRef, useMemo, useCallback, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- Data Structure ---
const painPointScenes = [
    {
        id: "chaos",
        title: "No Single Source of Truth",
        subtitle: "THE PROBLEM",
        description: "Orders, artwork, pricing, and approvals live in different places. Your production manager is copying details from emails into 4 different spreadsheets.",
        color: "#ef4444", // Red 500 for text accents
        particleColor: "#93c5fd", // Blue 300
        highlightWord: "CHAOS"
    },
    {
        id: "solution",
        title: "One Platform. One Truth.",
        subtitle: "THE SOLUTION",
        description: "Shop Titan becomes your single source of truth. Orders, art, pricing, production, and inventory in one system.",
        color: "#4f46e5", // Indigo 600
        particleColor: "#60a5fa", // Blue 400
        highlightWord: "CLARITY"
    },
    {
        id: "dream",
        title: "Here's What Happens",
        subtitle: "DREAM OUTCOME",
        description: "Zero time wasted searching. No more 'which version?' confusion. Production errors eliminated at the source.",
        color: "#059669", // Emerald 600
        particleColor: "#3b82f6", // Blue 500
        highlightWord: "FOCUS"
    },
    {
        id: "stakes",
        title: "If You Don't...",
        subtitle: "NEGATIVE STAKES",
        description: "Production errors continue eating 15-20% of your margin. Your best people burn out on data entry instead of skilled work.",
        color: "#d97706", // Amber 600
        particleColor: "#2563eb", // Blue 600
        highlightWord: "BURNOUT"
    }
];

// --- 3D Particle Component ---
function StoryParticles({ activeIndex, scrollProgress, visible }: { activeIndex: number; scrollProgress: number; visible: boolean }) {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 2000; // Particle count

    const [targetPositions, setTargetPositions] = useState<Float32Array | null>(null);

    // Initial random delays for staggering
    const particleData = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({ delay: Math.random() * 0.5 });
        }
        return temp;
    }, []);

    // --- Geometries ---

    // Unified Sphere Generation (Used for all steps)
    const generateSpherePositions = useCallback(() => {
        const positions = new Float32Array(count * 3);
        const radius = 2.5;
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2; // Angle around the equator
            const phi = Math.acos(2 * Math.random() - 1); // Angle from the pole

            // Create a sphere with slight noise for organic feel
            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
        }
        return positions;
    }, []);

    // Update target positions when index changes
    useEffect(() => {
        // Always regenerate sphere positions to create a "reshuffling" effect on transition
        const newPositions = generateSpherePositions();
        setTargetPositions(newPositions);
    }, [activeIndex, generateSpherePositions]);

    const initialPositions = useMemo(() => generateSpherePositions(), [generateSpherePositions]);

    useFrame((state, delta) => {
        if (!visible || !pointsRef.current || !targetPositions) return;

        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

        // Morph speed factor
        const lerpFactor = 2.0 * delta;

        for (let i = 0; i < count; i++) {
            const idx = i * 3;
            // Simple ease towards target
            positions[idx] += (targetPositions[idx] - positions[idx]) * lerpFactor;
            positions[idx + 1] += (targetPositions[idx + 1] - positions[idx + 1]) * lerpFactor;
            positions[idx + 2] += (targetPositions[idx + 2] - positions[idx + 2]) * lerpFactor;
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;

        // Gentle rotation
        pointsRef.current.rotation.y += delta * 0.1;
        pointsRef.current.rotation.x += delta * 0.05;
    });

    return (
        <Points ref={pointsRef} positions={initialPositions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color={painPointScenes[activeIndex].particleColor}
                size={0.06}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.9}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

function Scene({ activeIndex, scrollProgress, visible }: { activeIndex: number; scrollProgress: number; visible: boolean }) {
    return (
        <>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color={painPointScenes[activeIndex].particleColor} />
            <StoryParticles activeIndex={activeIndex} scrollProgress={scrollProgress} visible={visible} />
            <EffectComposer>
                <Bloom intensity={1.2} luminanceThreshold={0.1} luminanceSmoothing={0.9} mipmapBlur />
            </EffectComposer>
        </>
    );
}

// --- Main Component ---
export default function PainPoint3D() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPinned, setIsPinned] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "+=300%", // Pin for 300% (3 sections worth of scroll for 4 items)
                pin: true,
                scrub: 0.5,
                onEnter: () => setIsPinned(true),
                onLeave: () => setIsPinned(false),
                onEnterBack: () => setIsPinned(true),
                onLeaveBack: () => setIsPinned(false),
                onUpdate: (self) => {
                    const p = self.progress;
                    setProgress(p);

                    // Map progress 0-1 to index 0-3
                    // 0.00-0.25 -> 0
                    // 0.25-0.50 -> 1
                    // 0.50-0.75 -> 2
                    // 0.75-1.00 -> 3
                    const idx = Math.min(Math.floor(p * 4), 3);
                    setActiveIndex(idx);
                }
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-background-light dark:bg-black">
            {/* 3D Canvas Layer */}
            <div ref={containerRef} className="absolute inset-0 z-0">
                <Canvas
                    camera={{ position: [0, 0, 8], fov: 50 }}
                    gl={{ alpha: true, antialias: true }}
                    dpr={[1, 2]}
                >
                    {/* <color attach="background" args={["#000000"]} />  Dark background for bloom */}
                    <Scene activeIndex={activeIndex} scrollProgress={progress} visible={true} />
                </Canvas>
            </div>

            {/* Text Overlay Layer */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <div className="w-full max-w-4xl px-mobile mx-auto text-center">
                    {/* Text Content - Centered */}

                    {painPointScenes.map((scene, index) => {
                        // Calculate opacity based on progress
                        // Visible when activeIndex == index
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={scene.id}
                                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 transform
                                        ${isActive ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'}
                                    `}
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
                                    <div className="inline-block px-6 py-3 border-2 rounded-full text-sm font-bold tracking-widest uppercase transition-colors" style={{ borderColor: scene.color, color: scene.color }}>
                                        {scene.highlightWord}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Pagination/Progress Dots */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
                {painPointScenes.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all duration-500 
                            ${idx === activeIndex ? 'h-8 bg-white' : 'bg-white/30'}
                        `}
                        style={{ backgroundColor: idx === activeIndex ? painPointScenes[idx].color : undefined }}
                    />
                ))}
            </div>

            {/* Gradient overlay for bottom blending */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-black to-transparent pointer-events-none" />
        </section>
    );
}
