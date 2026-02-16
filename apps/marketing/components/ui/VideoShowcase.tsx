'use client';

import { useState } from 'react';

interface VideoShowcaseProps {
    title: string;
    description?: string;
    videoUrl?: string;
    thumbnail?: string;
    aspectRatio?: '16/9' | '4/3' | '1/1';
    autoPlay?: boolean;
    className?: string;
}

export default function VideoShowcase({
    title,
    description,
    videoUrl,
    thumbnail,
    aspectRatio = '16/9',
    autoPlay = false,
    className = '',
}: VideoShowcaseProps) {
    const [isPlaying, setIsPlaying] = useState(autoPlay);

    return (
        <div className={`group relative ${className}`}>
            {/* Video Container */}
            <div
                className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 border border-structural-border"
                style={{ aspectRatio }}
            >
                {/* Placeholder Content */}
                {!videoUrl ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                        <div className="text-center p-8">
                            <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4">
                                play_circle
                            </span>
                            <p className="text-sm text-secondary-text">
                                Video Coming Soon
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                                {title}
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Thumbnail */}
                        {!isPlaying && thumbnail && (
                            <img
                                src={thumbnail}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        )}

                        {/* Video Element */}
                        {isPlaying && (
                            <video
                                className="w-full h-full object-cover"
                                autoPlay={autoPlay}
                                loop
                                muted
                                playsInline
                            >
                                <source src={videoUrl} type="video/mp4" />
                            </video>
                        )}

                        {/* Play Button Overlay */}
                        {!isPlaying && (
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-xl">
                                    <span className="material-symbols-outlined text-4xl md:text-5xl text-primary">
                                        play_arrow
                                    </span>
                                </div>
                            </button>
                        )}
                    </>
                )}
            </div>

            {/* Title & Description */}
            {(title || description) && (
                <div className="mt-4 space-y-2">
                    {title && (
                        <h3 className="text-lg font-semibold text-charcoal dark:text-white">
                            {title}
                        </h3>
                    )}
                    {description && (
                        <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}
