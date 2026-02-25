'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WorkflowVideoSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="workflow-video" className="py-24 md:py-32 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={elementRef}
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">
            Every stage. One system.
          </h2>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            From the first lead to the final report — fully connected.
          </p>
        </div>

        {/* Video container */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full block"
          >
            <source src="/animations/workflow.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
