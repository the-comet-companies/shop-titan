'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
    rating?: number;
}

interface TestimonialCarouselProps {
    testimonials?: Testimonial[];
    autoRotate?: boolean;
    rotationInterval?: number;
    className?: string;
}

// Placeholder testimonials
const defaultTestimonials: Testimonial[] = [
    {
        id: '1',
        quote: 'Shop Titan transformed our operations. We went from chaos to complete clarity in just 30 days.',
        author: 'Sarah Martinez',
        role: 'Owner',
        company: 'Premier Embroidery Co.',
        rating: 5,
    },
    {
        id: '2',
        quote: 'The single source of truth concept is revolutionary. No more hunting for information across spreadsheets.',
        author: 'Michael Chen',
        role: 'Production Manager',
        company: 'Elite Screen Printing',
        rating: 5,
    },
    {
        id: '3',
        quote: 'We scaled from 5 to 20 employees without losing our minds. The system handles everything.',
        author: 'Jessica Williams',
        role: 'CEO',
        company: 'Custom Apparel Solutions',
        rating: 5,
    },
];

export default function TestimonialCarousel({
    testimonials = defaultTestimonials,
    autoRotate = true,
    rotationInterval = 5000,
    className = '',
}: TestimonialCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!autoRotate) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, rotationInterval);

        return () => clearInterval(interval);
    }, [autoRotate, rotationInterval, testimonials.length]);

    const currentTestimonial = testimonials[activeIndex];

    return (
        <div className={`relative ${className}`}>
            {/* Testimonial Card */}
            <div className="bg-surface dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-structural-border shadow-lg">
                {/* Quote Icon */}
                <div className="mb-6">
                    <span className="material-symbols-outlined text-5xl text-primary/20">
                        format_quote
                    </span>
                </div>

                {/* Rating Stars */}
                {currentTestimonial.rating && (
                    <div className="flex gap-1 mb-6">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <span
                                key={i}
                                className={`material-symbols-outlined text-xl ${i < currentTestimonial.rating!
                                    ? 'text-yellow-400'
                                    : 'text-gray-300 dark:text-gray-700'
                                    }`}
                            >
                                star
                            </span>
                        ))}
                    </div>
                )}

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-light text-charcoal dark:text-white leading-relaxed mb-8">
                    &quot;{currentTestimonial.quote}&quot;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                        {currentTestimonial.avatar ? (
                            <Image
                                src={currentTestimonial.avatar}
                                alt={currentTestimonial.author}
                                fill
                                className="rounded-full object-cover"
                            />
                        ) : (
                            <span className="material-symbols-outlined text-2xl text-primary">
                                person
                            </span>
                        )}
                    </div>

                    {/* Details */}
                    <div>
                        <div className="font-semibold text-charcoal dark:text-white">
                            {currentTestimonial.author}
                        </div>
                        <div className="text-sm text-secondary-text">
                            {currentTestimonial.role} at {currentTestimonial.company}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                            ? 'w-8 bg-primary'
                            : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
                <button
                    onClick={() =>
                        setActiveIndex((prev) =>
                            prev === 0 ? testimonials.length - 1 : prev - 1
                        )
                    }
                    className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-structural-border flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg"
                    aria-label="Previous testimonial"
                >
                    <span className="material-symbols-outlined text-charcoal dark:text-white">
                        chevron_left
                    </span>
                </button>
                <button
                    onClick={() =>
                        setActiveIndex((prev) => (prev + 1) % testimonials.length)
                    }
                    className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-structural-border flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg"
                    aria-label="Next testimonial"
                >
                    <span className="material-symbols-outlined text-charcoal dark:text-white">
                        chevron_right
                    </span>
                </button>
            </div>
        </div>
    );
}
