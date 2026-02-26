'use client';

import { useState } from 'react';
import FeatureGridCard from './FeatureGridCard';

interface FeatureData {
  id: string;
  icon: string;
  title: string;
  summary: string;
  painPoint: string;
  solution: string;
  videoSrc?: string;
}

interface FeatureGridProps {
  features: FeatureData[];
  onWatchDemo?: (src: string) => void;
}

export default function FeatureGrid({ features, onWatchDemo }: FeatureGridProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section id="more-features" className="mt-24 md:mt-32">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
          Additional Capabilities
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
          Built for Complete Control
        </h2>
        <p className="text-lg text-secondary-text dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Essential tools to manage every aspect of your production workflow.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6">
        {features.map((feature) => (
          <FeatureGridCard
            key={feature.id}
            {...feature}
            isExpanded={expandedCard === feature.id}
            onToggle={(id) => {
              setExpandedCard(expandedCard === id ? null : id);
            }}
            onWatchDemo={onWatchDemo}
          />
        ))}
      </div>
    </section>
  );
}
