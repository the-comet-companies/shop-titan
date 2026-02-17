'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import TestimonialScroll from '@/components/ui/TestimonialScroll';


export default function ShowcaseSection() {
    const { elementRef: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation();

    return (
        <section id="showcase" className="py-16 md:py-24 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-mobile">
                {/* Feature Matrix Section */}
                <div className="mb-20 md:mb-32">

                </div>

                {/* Testimonials Section */}
                <div
                    ref={testimonialRef}
                    className={`transition-all duration-700 ${testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <TestimonialScroll
                        title="Trusted by High-Volume Shops"
                        subtitle="See what shop owners are saying about Shop Titan"
                    />


                </div>
            </div>
        </section>
    );
}
