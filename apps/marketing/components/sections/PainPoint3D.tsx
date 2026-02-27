'use client';

import { useEffect, useRef, useMemo, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

type ParticleShape = 'scattered' | 'organized' | 'expanding' | 'contracting';

interface PainPointScene {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    color: string;
    particleColor: string;
    highlightWord: string | null;
    icon: string;
    particleShape: ParticleShape;
    cta?: { label: string; href: string };
}

// --- Data Structure ---
const painPointScenes: PainPointScene[] = [
    {
        id: "chaos",
        title: "No Single Source of Truth",
        subtitle: "THE PROBLEM",
        description: "Orders, artwork, pricing, and approvals live in different places. Your production manager is copying details from emails into 4 different spreadsheets.",
        color: "#ef4444",
        particleColor: "#93c5fd",
        highlightWord: "CHAOS",
        icon: "report",
        particleShape: "scattered",
    },
    {
        id: "solution",
        title: "One Platform. One Truth.",
        subtitle: "THE SOLUTION",
        description: "Shop Titan becomes your single source of truth. Orders, art, pricing, production, and inventory in one system.",
        color: "#4f46e5",
        particleColor: "#60a5fa",
        highlightWord: "CLARITY",
        icon: "emoji_objects",
        particleShape: "organized",
    },
    {
        id: "dream",
        title: "Here's What Happens",
        subtitle: "DREAM OUTCOME",
        description: "Zero time wasted searching. No more 'which version?' confusion. Production errors eliminated at the source.",
        color: "#059669",
        particleColor: "#3b82f6",
        highlightWord: "FOCUS",
        icon: "trending_up",
        particleShape: "expanding",
    },
    {
        id: "stakes",
        title: "Every Week You Wait...",
        subtitle: "THE RISK",
        description: "Another missed deadline. Another manual error. Another dollar left on the floor. The margin leaks are silent — until they're not. Your competitors are already systematizing.",
        color: "#f97316",
        particleColor: "#fca5a5",
        highlightWord: "COST",
        icon: "alarm",
        particleShape: "contracting",
    },
    {
        id: "cta",
        title: "Ready to change that?",
        subtitle: "YOUR MOVE",
        description: "Shops that unify their operations cut production errors and reclaim hours every single day. The only question is when you start.",
        color: "#0066CC",
        particleColor: "#93c5fd",
        highlightWord: null,
        icon: "rocket_launch",
        particleShape: "expanding",
        cta: { label: "Let's Talk", href: "/reach-out" },
    },
];

// --- Particle Shape Generator ---
const PARTICLE_COUNT = 500;

function generatePositionsForShape(shape: ParticleShape, count: number): Float32Array {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        let r: number;
        let noise: number;
        switch (shape) {
            case 'scattered':
                r = Math.random() * 5;
                noise = 2.5;
                break;
            case 'organized':
                r = 2.5 + Math.random() * 0.5;
                noise = 0.3;
                break;
            case 'expanding':
                r = 3.5 + Math.random() * 2.5;
                noise = 1.0;
                break;
            case 'contracting':
                r = Math.pow(Math.random(), 2) * 2.0;
                noise = 0.5;
                break;
            default: {
                const _exhaustiveCheck: never = shape;
                r = 0;
                noise = 0;
                break;
            }
        }
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta) + (Math.random() - 0.5) * noise;
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) + (Math.random() - 0.5) * noise;
        positions[i * 3 + 2] = r * Math.cos(phi) + (Math.random() - 0.5) * noise;
    }
    return positions;
}

// --- Animation Variants ---
const sceneVariants = {
    initial: {},
    animate: {
        transition: { staggerChildren: 0.07 },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.2, ease: 'easeIn' as const },
    },
};

const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: 'easeOut' as const },
    },
    exit: {},
};

const iconVariants = {
    initial: { opacity: 0, scale: 0.85, y: 20 },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' as const },
    },
    exit: {},
};

// --- 3D Particle Component ---
function StoryParticles({
    activeIndex,
    particleShape,
    visible,
}: {
    activeIndex: number;
    particleShape: ParticleShape;
    visible: boolean;
}) {
    const pointsRef = useRef<THREE.Points>(null);

    const [targetPositions, setTargetPositions] = useState<Float32Array | null>(null);

    useEffect(() => {
        setTargetPositions(generatePositionsForShape(particleShape, PARTICLE_COUNT));
    }, [particleShape]);

    const initialPositions = useMemo(() => generatePositionsForShape('scattered', PARTICLE_COUNT), []);

    useFrame((_, delta) => {
        if (!visible || !pointsRef.current || !targetPositions) return;

        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
        const lerpFactor = 1.5 * delta;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const idx = i * 3;
            positions[idx]     += (targetPositions[idx]     - positions[idx])     * lerpFactor;
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

// Scene is kept as an extension point for future geometry (lighting, additional meshes, etc.)
function Scene({
    activeIndex,
    particleShape,
    visible,
}: {
    activeIndex: number;
    particleShape: ParticleShape;
    visible: boolean;
}) {
    return (
        <StoryParticles activeIndex={activeIndex} particleShape={particleShape} visible={visible} />
    );
}

// --- Main Component ---
export default function PainPoint3D() {
    const outerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const activeScene = painPointScenes[activeIndex];

    useEffect(() => {
        const outer = outerRef.current;
        if (!outer) return;

        let rafId = 0;
        const handleScroll = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const rect = outer.getBoundingClientRect();
                const totalScrollable = outer.offsetHeight - window.innerHeight;
                const scrolled = -rect.top;
                const p = Math.max(0, Math.min(1, scrolled / totalScrollable));
                setActiveIndex(Math.min(Math.floor(p * 5), 4));
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // sync on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    const scrollToScene = useCallback((index: number) => {
        const outer = outerRef.current;
        if (!outer) return;
        const totalScrollable = outer.offsetHeight - window.innerHeight;
        const targetProgress = (index + 0.5) / 5;
        const targetScrollY =
            outer.getBoundingClientRect().top + window.scrollY + targetProgress * totalScrollable;
        window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    }, []);

    return (
        <div ref={outerRef} style={{ height: '500vh' }}>
            <section className="sticky top-0 h-screen w-full overflow-hidden bg-background-light dark:bg-black">
                {/* 3D Canvas Layer */}
                <div className="absolute inset-0 z-0">
                    <Canvas
                        camera={{ position: [0, 0, 8], fov: 50 }}
                        gl={{ alpha: true, antialias: false }}
                        dpr={[1, 1.5]}
                    >
                        <Scene activeIndex={activeIndex} particleShape={activeScene.particleShape} visible={true} />
                    </Canvas>
                </div>

                {/* Text Overlay Layer */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <div className="w-full max-w-4xl px-mobile mx-auto text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeScene.id}
                                variants={sceneVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="flex flex-col items-center p-4 md:p-0"
                            >
                                {/* Icon */}
                                <motion.span
                                    variants={iconVariants}
                                    className="material-symbols-outlined mb-6 select-none"
                                    style={{ fontSize: '64px', color: activeScene.color }}
                                    aria-hidden="true"
                                >
                                    {activeScene.icon}
                                </motion.span>

                                {/* Subtitle eyebrow */}
                                <motion.span
                                    variants={itemVariants}
                                    className="block text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6"
                                    style={{ color: activeScene.color }}
                                >
                                    {activeScene.subtitle}
                                </motion.span>

                                {/* H2 */}
                                <motion.h2
                                    variants={itemVariants}
                                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal dark:text-white mb-8 leading-tight tracking-tight"
                                >
                                    {activeScene.title}
                                </motion.h2>

                                {/* Description */}
                                <motion.p
                                    variants={itemVariants}
                                    className="text-lg md:text-2xl text-secondary-text dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
                                >
                                    {activeScene.description}
                                </motion.p>

                                {/* CTA or highlight word */}
                                <motion.div variants={itemVariants}>
                                    {activeScene.cta ? (
                                        <div className="flex flex-col items-center gap-5">
                                            <a
                                                href={activeScene.cta.href}
                                                className="pointer-events-auto px-10 py-5 text-xl font-semibold text-charcoal dark:text-white relative overflow-hidden group rounded-full inline-flex items-center gap-2 justify-center"
                                            >
                                                <div className="absolute inset-0 bg-white/20 dark:bg-white/8 group-hover:bg-white/30 dark:group-hover:bg-white/12 transition-colors rounded-full" />
                                                <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-charcoal/30 dark:group-hover:border-white/40 transition-colors rounded-full" />
                                                <span className="relative z-10">{activeScene.cta.label}</span>
                                                <span className="material-symbols-outlined text-xl relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
                                            </a>
                                            <button
                                                type="button"
                                                onClick={() => document.getElementById('workflow-video')?.scrollIntoView({ behavior: 'smooth' })}
                                                className="pointer-events-auto flex flex-col items-center gap-2 text-secondary-text dark:text-gray-500 hover:text-charcoal dark:hover:text-white transition-colors duration-300 group"
                                            >
                                                <span className="text-xs font-semibold tracking-widest uppercase">Explore the platform</span>
                                                <span className="material-symbols-outlined text-lg animate-bounce">keyboard_arrow_down</span>
                                            </button>
                                        </div>
                                    ) : (
                                        activeScene.highlightWord && (
                                            <div
                                                className="inline-block px-8 py-4 border-2 rounded-full text-sm font-bold tracking-widest uppercase"
                                                style={{ borderColor: activeScene.color, color: activeScene.color }}
                                            >
                                                {activeScene.highlightWord}
                                            </div>
                                        )
                                    )}
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Progress Lines */}
                <div
                    className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-1.5 px-8"
                    role="group"
                    aria-label="Scene navigation"
                >
                    {painPointScenes.map((scene, index) => (
                        <button
                            key={scene.id}
                            type="button"
                            onClick={() => scrollToScene(index)}
                            className="flex-1 max-w-24 cursor-pointer py-3"
                            aria-label={`Go to ${scene.subtitle}`}
                            aria-current={activeIndex === index ? 'step' : undefined}
                        >
                            <motion.div
                                style={{ height: '1px', backgroundColor: scene.color }}
                                animate={{ opacity: activeIndex === index ? 1 : 0.25 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            />
                        </button>
                    ))}
                </div>

                {/* Gradient overlay for bottom blending */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-black to-transparent pointer-events-none" />
            </section>
        </div>
    );
}
