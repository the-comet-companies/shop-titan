'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import { TestimonialsSection } from '@/components/blocks/testimonials-with-marquee';

const testimonialsData = [
    {
        author: {
            name: "Emma Thompson",
            handle: "@emma_prints",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
        },
        text: "Using this platform has transformed how we handle our print orders. The speed and accuracy are unprecedented.",
    },
    {
        author: {
            name: "David Park",
            handle: "@dpark_designs",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        text: "The integration is flawless. We've reduced our shop's turnaround time by 60% since implementing this solution.",
    },
    {
        author: {
            name: "Sofia Rodriguez",
            handle: "@sofia_custom",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
        },
        text: "Finally, a shop management tool that actually understands our workflows! The accuracy in keeping track of inventory is impressive."
    }
];

export default function ShowcaseSection() {
    const { elementRef: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation();

    return (
        <section id="showcase" className="pt-8 md:pt-12 pb-16 md:pb-24 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-mobile">


                {/* Testimonials Section */}
                <div
                    ref={testimonialRef}
                    className={`transition-all duration-700 ${testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <TestimonialsSection
                        title="Trusted by High-Volume Shops"
                        description="See what shop owners are saying about Shop Titan"
                        testimonials={testimonialsData}
                    />
                </div>
            </div>
        </section>
    );
}
