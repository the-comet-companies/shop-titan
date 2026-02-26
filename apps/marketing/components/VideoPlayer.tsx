'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
    src?: string;
    fallbackContent?: React.ReactNode;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    className?: string;
    hideControls?: boolean;
}

export default function VideoPlayer({
    src,
    fallbackContent,
    autoPlay = true,
    muted = true,
    loop = true,
    className = '',
    hideControls = false
}: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(false);

    useEffect(() => {
        if (!videoRef.current || !src) return;

        const video = videoRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && autoPlay) {
                        video.play().catch(() => {
                            // Autoplay was prevented
                        });
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, [src, autoPlay]);

    const togglePlayPause = () => {
        if (!videoRef.current || hideControls) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    // If no video source, show fallback content
    if (!src) {
        return (
            <div className={`relative ${className}`}>
                {fallbackContent}
            </div>
        );
    }

    return (
        <div
            className={`relative ${className}`}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            onClick={togglePlayPause}
        >
            {/* Loading Skeleton */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 rounded-lg" />
            )}

            {/* Video Element */}
            <video
                ref={videoRef}
                src={src}
                muted={muted}
                loop={loop}
                playsInline
                preload="none"
                onLoadedData={() => setIsLoaded(true)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className={`w-full h-full rounded-lg object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
            />

            {/* Hover Controls */}
            {showControls && !hideControls && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-lg cursor-pointer"
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center shadow-xl"
                    >
                        <span className="material-symbols-outlined text-3xl text-charcoal dark:text-white">
                            {isPlaying ? 'pause' : 'play_arrow'}
                        </span>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
