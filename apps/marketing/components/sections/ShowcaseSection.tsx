'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import VideoShowcase from '@/components/ui/VideoShowcase';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import FeatureMatrix from '@/components/ui/FeatureMatrix';

export default function ShowcaseSection() {
    const { elementRef: videoRef, isVisible: videoVisible } = useScrollAnimation();
    const { elementRef: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation();

    return (
        <section id="showcase" className="py-16 md:py-24 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-mobile">
                {/* Video Showcase Section */}
                <div
                    ref={videoRef}
                    className={`mb-20 md:mb-32 transition-all duration-700 ${videoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-4">
                            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                Platform Demo
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal dark:text-white mb-4">
                            See Shop Titan in Action
                        </h2>
                        <p className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto">
                            Watch how our platform transforms chaotic workflows into streamlined operations
                        </p>
                    </div>

                    {/* Video Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <VideoShowcase
                            title="Order Management Workflow"
                            description="From intake to fulfillment in one unified system"
                        />
                        <VideoShowcase
                            title="Production Scheduler"
                            description="Real-time capacity planning and machine management"
                        />
                    </div>
                </div>

                {/* Feature Matrix Section */}
                <div className="mb-20 md:mb-32">
                    <FeatureMatrix />
                </div>

                {/* Testimonials Section */}
                <div
                    ref={testimonialRef}
                    className={`transition-all duration-700 ${testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-4">
                            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                Client Success
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal dark:text-white mb-4">
                            Trusted by High-Volume Shops
                        </h2>
                        <p className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl mx-auto">
                            See what shop owners are saying about Shop Titan
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <TestimonialCarousel />
                    </div>

                    {/* Trust Metrics */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                150+
                            </div>
                            <div className="text-sm text-secondary-text">
                                Active Shops
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                98%
                            </div>
                            <div className="text-sm text-secondary-text">
                                Satisfaction Rate
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                64%
                            </div>
                            <div className="text-sm text-secondary-text">
                                Time Saved
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                24/7
                            </div>
                            <div className="text-sm text-secondary-text">
                                Support
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
