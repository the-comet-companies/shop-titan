'use client';

import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

interface PricingFeature {
    icon: string;
    text: string;
}

interface PricingTier {
    id: string;
    name: string;
    price: string;
    description: string;
    features: PricingFeature[];
    highlighted?: boolean;
    badge?: string;
    ctaText?: string;
}

// Platform tiers (3 tiers)
const platformTiers: PricingTier[] = [
    {
        id: 'starter',
        name: 'Starter',
        price: 'Custom Quote',
        description: 'Get started with essential tools',
        features: [
            { icon: 'description', text: 'Quotes & Estimates' },
            { icon: 'shopping_cart', text: 'Order Management' },
            { icon: 'people', text: 'Customer Database' },
            { icon: 'support_agent', text: 'Virtual setup & onboarding' },
        ],
    },
    {
        id: 'business',
        name: 'Business',
        price: 'Custom Quote',
        description: 'Unlock advanced features for growing teams',
        features: [
            { icon: 'check_circle', text: 'Everything in Starter' },
            { icon: 'storefront', text: 'Vendor Management' },
            { icon: 'precision_manufacturing', text: 'Machine Tracking' },
            { icon: 'receipt_long', text: 'Purchase Orders' },
            { icon: 'badge', text: 'Extra onboarding & training' },
            { icon: 'analytics', text: 'System review & optimization' },
        ],
        badge: 'Popular',
        highlighted: true,
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        price: 'Custom Quote',
        description: 'Full automation with AI integrations',
        features: [
            { icon: 'check_circle', text: 'Everything in Business' },
            { icon: 'label', text: 'White-label Options' },
            { icon: 'api', text: 'Full API Access' },
            { icon: 'payment', text: 'Stripe Payment Integration' },
            { icon: 'local_shipping', text: 'UPS Shipping Labels' },
            { icon: 'send', text: 'Automated Quote Follow-ups' },
            { icon: 'psychology', text: 'AI Integrations' },
            { icon: 'groups', text: '1-on-1 Strategy Sessions' },
        ],
    },
];

// Services tiers (2 tiers)
const servicesTiers: PricingTier[] = [
    {
        id: 'ultimate',
        name: 'Ultimate',
        price: 'Custom Quote',
        description: 'Complete consultant package with ongoing support',
        features: [
            { icon: 'check_circle', text: 'Everything in Enterprise' },
            { icon: 'groups', text: 'Bi-weekly 2-hour meetings for 6 months' },
            { icon: 'search', text: 'SEO & website review' },
            { icon: 'developer_mode', text: 'Tech stack consultation' },
            { icon: 'psychology', text: 'Advanced AI automations' },
            { icon: 'support_agent', text: 'Dedicated consultant' },
            { icon: 'trending_up', text: 'Business strategy sessions' },
        ],
        badge: 'Premium',
    },
    {
        id: 'custom',
        name: 'Custom Development',
        price: "Let's Talk",
        description: 'Tailored solutions for unique business needs',
        features: [
            { icon: 'code', text: 'Custom feature development' },
            { icon: 'hub', text: 'Specialized integrations' },
            { icon: 'group', text: 'Dedicated development team' },
            { icon: 'phone', text: 'Contact us for more details' },
        ],
    },
];

export default function PublicPricingSection() {
    const { elementRef, isVisible } = useScrollAnimation();

    const renderCard = (tier: PricingTier, index: number) => (
        <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group backdrop-blur-xl rounded-[2rem] p-px transition-all duration-500 flex flex-col ${tier.highlighted
                ? 'bg-gradient-to-b from-primary to-primary/20 shadow-2xl shadow-primary/20 scale-[1.02] z-10'
                : 'bg-gradient-to-b from-black/10 to-transparent dark:from-white/10 dark:to-transparent hover:from-black/20 dark:hover:from-white/20'
                }`}
        >
            {/* Inner Card Content */}
            <div className="absolute inset-px rounded-[calc(2rem-1px)] bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-3xl z-0" />

            {/* Badge */}
            {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary blur-md opacity-50 rounded-full" />
                        <span className="relative inline-flex items-center px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest shadow-xl">
                            {tier.badge}
                        </span>
                    </div>
                </div>
            )}

            <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                {/* Tier Name */}
                <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-4">
                    {tier.name}
                </h3>



                {/* Description */}
                <p className="text-sm text-secondary-text dark:text-gray-400 mb-8 min-h-[40px] leading-relaxed">
                    {tier.description}
                </p>

                {/* Features List */}
                <div className="mb-10 flex-grow">
                    <ul className="space-y-4">
                        {tier.features.map((feature, idx) => (
                            <li
                                key={idx}
                                className="flex items-start gap-3"
                            >
                                <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${tier.highlighted ? 'bg-primary/20 text-primary' : 'bg-black/5 dark:bg-white/10 text-charcoal dark:text-white'
                                    }`}>
                                    <span className="material-symbols-outlined text-[12px] font-bold">
                                        {feature.icon === 'check_circle' ? 'check' : feature.icon}
                                    </span>
                                </div>
                                <span className="text-sm text-charcoal dark:text-gray-300 font-medium">
                                    {feature.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="pricing" className="pt-20 pb-24 md:pb-32 bg-background-light dark:bg-black relative overflow-hidden">
            {/* Soft Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            <div ref={elementRef} className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div
                    className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal dark:text-white mb-6">
                        The Operating System for <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                            High-Volume Apparel
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl mx-auto">
                        Transform your print shop with a setup package designed to scale with your ambition. No hidden fees, just raw operational power.
                    </p>
                </div>

                {/* Pricing Grids */}
                <div className="space-y-24">
                    {/* Platform Grid */}
                    <div>
                        <h3 className="text-2xl font-bold text-center text-charcoal dark:text-white mb-10 tracking-tight">Platform Packages</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                            {platformTiers.map((tier, index) => renderCard(tier, index))}
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div>
                        <h3 className="text-2xl font-bold text-center text-charcoal dark:text-white mb-10 tracking-tight">Professional Services</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                            {servicesTiers.map((tier, index) => renderCard(tier, index))}
                        </div>
                    </div>
                </div>

                {/* Main Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-24 text-center"
                >
                    <div className="relative inline-block group">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors duration-500" />
                        <Link
                            href="/reach-out"
                            className="relative inline-flex items-center gap-3 px-10 py-5 bg-charcoal dark:bg-white text-white dark:text-charcoal text-lg font-bold rounded-full hover:scale-105 transition-transform duration-300"
                        >
                            Let&apos;s Talk
                            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="mt-8">
                        <p className="text-sm text-secondary-text dark:text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            All packages include full access to the Shop Titan platform. Custom integrations and features available upon request. We believe in providing solutions, not forcing subscriptions. Let&apos;s discuss what works best for your workflow.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
