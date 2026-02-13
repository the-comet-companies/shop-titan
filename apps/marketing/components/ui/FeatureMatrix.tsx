'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Feature {
    id: string;
    name: string;
    description?: string;
    included: boolean;
    badge?: string;
}

interface FeatureCategory {
    id: string;
    title: string;
    icon?: string;
    features: Feature[];
}

interface FeatureMatrixProps {
    categories?: FeatureCategory[];
    title?: string;
    description?: string;
    className?: string;
}

// Placeholder feature data
const defaultCategories: FeatureCategory[] = [
    {
        id: 'core',
        title: 'Core Features',
        icon: 'inventory_2',
        features: [
            { id: '1', name: 'Quotes & Estimates', description: 'Generate and track quotes', included: true },
            { id: '2', name: 'Order Management', description: 'End-to-end order tracking', included: true },
            { id: '3', name: 'Customer CRM', description: 'Manage customer relationships', included: true },
            { id: '4', name: 'Vendor Management', description: 'Track supplier relationships', included: true },
        ],
    },
    {
        id: 'production',
        title: 'Production Tools',
        icon: 'precision_manufacturing',
        features: [
            { id: '5', name: 'Production Scheduler', included: true },
            { id: '6', name: 'Machine Management', included: true },
            { id: '7', name: 'Capacity Planning', included: true },
            { id: '8', name: 'Workflow Automation', included: true, badge: 'Popular' },
        ],
    },
    {
        id: 'advanced',
        title: 'Advanced Features',
        icon: 'auto_awesome',
        features: [
            { id: '9', name: 'API Access', included: true, badge: 'Pro' },
            { id: '10', name: 'White-label Options', included: true, badge: 'Pro' },
            { id: '11', name: 'Custom Integrations', included: true, badge: 'Enterprise' },
            { id: '12', name: 'Dedicated Support', included: true, badge: 'Enterprise' },
        ],
    },
];

export default function FeatureMatrix({
    categories = defaultCategories,
    title = 'Complete Feature Set',
    description = 'Everything you need to run your decoration business',
    className = '',
}: FeatureMatrixProps) {
    const { elementRef, isVisible } = useScrollAnimation();

    return (
        <div ref={elementRef} className={`${className}`}>
            {/* Header */}
            {(title || description) && (
                <div
                    className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {title && (
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal dark:text-white mb-4">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>
            )}

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {categories.map((category, categoryIndex) => (
                    <div
                        key={category.id}
                        className={`bg-surface dark:bg-gray-900 rounded-xl border border-structural-border p-6 md:p-8 transition-all duration-700 delay-${categoryIndex * 100
                            } ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                            }`}
                    >
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-structural-border">
                            {category.icon && (
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-xl text-primary">
                                        {category.icon}
                                    </span>
                                </div>
                            )}
                            <h3 className="text-xl font-semibold text-charcoal dark:text-white">
                                {category.title}
                            </h3>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-3">
                            {category.features.map((feature) => (
                                <li
                                    key={feature.id}
                                    className="flex items-start gap-3 group"
                                >
                                    {/* Checkbox */}
                                    <div
                                        className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded flex items-center justify-center ${feature.included
                                            ? 'bg-primary text-white'
                                            : 'bg-gray-200 dark:bg-gray-700'
                                            }`}
                                    >
                                        {feature.included && (
                                            <span className="material-symbols-outlined text-sm">
                                                check
                                            </span>
                                        )}
                                    </div>

                                    {/* Feature Details */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span
                                                className={`text-sm font-medium ${feature.included
                                                    ? 'text-charcoal dark:text-white'
                                                    : 'text-gray-400 dark:text-gray-600 line-through'
                                                    }`}
                                            >
                                                {feature.name}
                                            </span>
                                            {feature.badge && (
                                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-wide">
                                                    {feature.badge}
                                                </span>
                                            )}
                                        </div>
                                        {feature.description && (
                                            <p className="text-xs text-secondary-text dark:text-gray-500 mt-1">
                                                {feature.description}
                                            </p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
