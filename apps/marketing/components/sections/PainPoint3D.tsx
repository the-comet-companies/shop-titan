'use client';

import React, { useEffect, useRef, useMemo, useState, useCallback } from "react";
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
    Icon: (props: IconProps) => React.JSX.Element;
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
        particleColor: "#ef4444",
        highlightWord: "CHAOS",
        Icon: ReportIcon,
        particleShape: "scattered",
    },
    {
        id: "solution",
        title: "One Platform. One Truth.",
        subtitle: "THE SOLUTION",
        description: "Shop Titan becomes your single source of truth. Orders, art, pricing, production, and inventory in one system.",
        color: "#EAB308",
        particleColor: "#EAB308",
        highlightWord: "CLARITY",
        Icon: LightbulbIcon,
        particleShape: "organized",
    },
    {
        id: "dream",
        title: "Here's What Happens",
        subtitle: "DREAM OUTCOME",
        description: "Zero time wasted searching. No more 'which version?' confusion. Production errors eliminated at the source.",
        color: "#059669",
        particleColor: "#059669",
        highlightWord: "FOCUS",
        Icon: TrendingUpIcon,
        particleShape: "expanding",
    },
    {
        id: "stakes",
        title: "Every Week You Wait...",
        subtitle: "THE RISK",
        description: "Another missed deadline. Another manual error. Another dollar left on the floor. The margin leaks are silent — until they're not. Your competitors are already systematizing.",
        color: "#f97316",
        particleColor: "#f97316",
        highlightWord: "COST",
        Icon: AlarmIcon,
        particleShape: "contracting",
    },
    {
        id: "cta",
        title: "Ready to change that?",
        subtitle: "YOUR MOVE",
        description: "Shops that unify their operations cut production errors and reclaim hours every single day. The only question is when you start.",
        color: "#0066CC",
        particleColor: "#0066CC",
        highlightWord: null,
        Icon: RocketIcon,
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

type IconProps = { color: string };

function ReportIcon({ color }: IconProps) {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <motion.path
                d="M32 10 L56 52 H8 Z"
                stroke={color}
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            />
            <motion.line
                x1="32" y1="26" x2="32" y2="40"
                stroke={color}
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.55, ease: 'easeOut' }}
            />
            <motion.circle
                cx="32" cy="47" r="2.5"
                fill={color}
                style={{ transformOrigin: '32px 47px' }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.15, delay: 0.75, type: 'spring' as const, stiffness: 400 }}
            />
        </svg>
    );
}

function LightbulbIcon({ color }: IconProps) {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <motion.path
                d="M32 10 C21 10 14 19 14 28 C14 37 20 41 22 46 H42 C44 41 50 37 50 28 C50 19 43 10 32 10 Z"
                stroke={color}
                strokeWidth="2.5"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
            />
            <motion.path
                d="M32 18 C25 18 22 24 22 28 C22 35 27 38 29 43 H35 C37 38 42 35 42 28 C42 24 39 18 32 18 Z"
                fill={color}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 0.4, delay: 0.6 }}
            />
            <motion.line
                x1="24" y1="50" x2="40" y2="50"
                stroke={color} strokeWidth="2.5" strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.65 }}
            />
            <motion.line
                x1="27" y1="55" x2="37" y2="55"
                stroke={color} strokeWidth="2.5" strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.15, delay: 0.82 }}
            />
        </svg>
    );
}

function TrendingUpIcon({ color }: IconProps) {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <motion.line
                x1="8" y1="52" x2="56" y2="52"
                stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeOpacity={0.3}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
            />
            <motion.line
                x1="8" y1="52" x2="8" y2="10"
                stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeOpacity={0.3}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.25, ease: 'easeOut', delay: 0.15 }}
            />
            <motion.polyline
                points="12,48 24,36 36,26 50,14"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
            />
            <motion.polyline
                points="44,12 50,14 48,20"
                stroke={color}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.85 }}
            />
        </svg>
    );
}

function AlarmIcon({ color }: IconProps) {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <motion.circle
                cx="32" cy="36" r="20"
                stroke={color} strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
            />
            <motion.line
                x1="14" y1="20" x2="22" y2="28"
                stroke={color} strokeWidth="2.5" strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15, delay: 0.5 }}
            />
            <motion.line
                x1="50" y1="20" x2="42" y2="28"
                stroke={color} strokeWidth="2.5" strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15, delay: 0.5 }}
            />
            <motion.line
                x1="32" y1="36" x2="32" y2="18"
                stroke={color} strokeWidth="2.5" strokeLinecap="round"
                style={{ transformOrigin: '32px 36px' }}
                initial={{ rotate: 180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.45, delay: 0.65, ease: 'easeInOut' }}
            />
            <motion.circle
                cx="32" cy="36" r="2"
                fill={color}
                style={{ transformOrigin: '32px 36px' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.15, delay: 0.6, type: 'spring' as const, stiffness: 400 }}
            />
        </svg>
    );
}

function RocketIcon({ color }: IconProps) {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <motion.path
                d="M32 6 C32 6 19 22 19 38 L26 45 L38 45 L45 38 C45 22 32 6 32 6 Z"
                stroke={color} strokeWidth="2.5" strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
            />
            <motion.path
                d="M19 38 L12 50 L26 45"
                stroke={color} strokeWidth="2" strokeLinejoin="round"
                style={{ transformOrigin: '19px 45px' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.5 }}
            />
            <motion.path
                d="M45 38 L52 50 L38 45"
                stroke={color} strokeWidth="2" strokeLinejoin="round"
                style={{ transformOrigin: '45px 45px' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.5 }}
            />
            <motion.circle
                cx="32" cy="28" r="5"
                stroke={color} strokeWidth="2"
                style={{ transformOrigin: '32px 28px' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2, delay: 0.6, type: 'spring' as const, stiffness: 350 }}
            />
            <motion.path
                d="M26 46 C24 52 28 58 32 60 C36 58 40 52 38 46"
                stroke={color} strokeWidth="2" strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 0.3, delay: 0.75, ease: 'easeOut' }}
            />
        </svg>
    );
}

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
    const SceneIcon = activeScene.Icon;

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
                                <motion.div
                                    variants={iconVariants}
                                    className="mb-6"
                                    aria-hidden="true"
                                >
                                    <SceneIcon color={activeScene.color} />
                                </motion.div>

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
