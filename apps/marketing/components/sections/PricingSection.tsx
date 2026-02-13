'use client';

import { useState } from 'react';
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

// Personal tiers (3 tiers)
const personalTiers: PricingTier[] = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$5,000',
        description: 'Get started with essential tools',
        features: [
            { icon: 'description', text: 'Quotes & Estimates' },
            { icon: 'shopping_cart', text: 'Order Management' },
            { icon: 'people', text: 'Customer Database' },
            { icon: 'support_agent', text: 'Virtual setup & onboarding' },
        ],
        ctaText: 'Get Started',
    },
    {
        id: 'business',
        name: 'Business',
        price: '$10,000',
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
        ctaText: 'Upgrade to Business',
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        price: '$20,000',
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
        ctaText: 'Upgrade to Enterprise',
    },
];

// Business tiers (2 tiers)
const businessTiers: PricingTier[] = [
    {
        id: 'ultimate',
        name: 'Ultimate',
        price: 'Custom Pricing',
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
        ctaText: 'Contact Us',
    },
    {
        id: 'custom',
        name: 'Custom Development',
        price: 'Let\'s Talk',
        description: 'Tailored solutions for unique business needs',
        features: [
            { icon: 'code', text: 'Custom feature development' },
            { icon: 'hub', text: 'Specialized integrations' },
            { icon: 'group', text: 'Dedicated development team' },
            { icon: 'phone', text: 'Contact us for more details' },
        ],
        ctaText: 'Contact Sales',
    },
];

export default function PricingSection() {
    const { elementRef, isVisible } = useScrollAnimation();
    const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal');

    const currentTiers = activeTab === 'personal' ? personalTiers : businessTiers;
    const gridCols = activeTab === 'personal' ? 'lg:grid-cols-3' : 'lg:grid-cols-2';

    return (
        <section id="pricing" className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
            <div ref={elementRef} className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div
                    className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal dark:text-white mb-4">
                        Choose Your Package
                    </h2>
                    <p className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-3xl mx-auto mb-8">
                        Transform your print shop with the perfect setup package
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex items-center bg-white dark:bg-gray-800 rounded-full p-1.5 shadow-sm border border-gray-100 dark:border-gray-700">
                        <button
                            onClick={() => setActiveTab('personal')}
                            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === 'personal'
                                ? 'bg-primary text-white shadow-md'
                                : 'text-gray-600 dark:text-gray-400 hover:text-charcoal dark:hover:text-white'
                                }`}
                        >
                            Personal
                        </button>
                        <button
                            onClick={() => setActiveTab('business')}
                            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === 'business'
                                ? 'bg-primary text-white shadow-md'
                                : 'text-gray-600 dark:text-gray-400 hover:text-charcoal dark:hover:text-white'
                                }`}
                        >
                            Business
                        </button>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className={`grid grid-cols-1 ${gridCols} gap-6 max-w-6xl mx-auto`}>
                    {currentTiers.map((tier, index) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative bg-white dark:bg-gray-900 rounded-2xl border-2 transition-all duration-500 flex flex-col ${tier.highlighted
                                ? 'border-primary dark:border-primary shadow-xl scale-105 z-10'
                                : 'border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                                }`}
                        >
                            {/* Badge */}
                            {tier.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                                        {tier.badge}
                                    </span>
                                </div>
                            )}

                            <div className="p-6 md:p-8 flex flex-col h-full">
                                {/* Tier Name */}
                                <h3 className="text-xl font-bold text-charcoal dark:text-white mb-2">
                                    {tier.name}
                                </h3>

                                {/* Price */}
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-charcoal dark:text-white">
                                        {tier.price}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-secondary-text dark:text-gray-400 mb-8 min-h-[40px]">
                                    {tier.description}
                                </p>

                                {/* CTA Button */}
                                <button
                                    className={`w-full py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300 mb-8 ${tier.highlighted
                                        ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5'
                                        : 'bg-gray-100 dark:bg-gray-800 text-charcoal dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    {tier.ctaText || 'Get Started'}
                                </button>

                                {/* Features List */}
                                <div className="">
                                    <ul className="space-y-4">
                                        {tier.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3"
                                            >
                                                <span className={`material-symbols-outlined text-xl flex-shrink-0 mt-0.5 ${tier.highlighted ? 'text-primary' : 'text-gray-400 dark:text-gray-600'
                                                    }`}>
                                                    {feature.icon}
                                                </span>
                                                <span className="text-sm text-charcoal dark:text-gray-300 leading-relaxed font-medium">
                                                    {feature.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <p className="text-sm text-secondary-text dark:text-gray-500">
                        All packages include full access to Shop Titan platform. Custom integrations and features available upon request.
                    </p>
                </div>
            </div>
        </section>
    );
}
