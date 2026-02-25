'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WorkflowVideoSection() {
  const { elementRef, isVisible } = useScrollAnimation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasExpanded = useRef(false);

  // Fires once to trigger the expand animation
  const isContainerInView = useInView(containerRef, { once: true, margin: '-80px' });

  // Ongoing visibility for play/pause control
  const isVideoVisible = useInView(containerRef, { once: false, amount: 0.3 });

  // After the expand animation finishes, start playing if still in view
  const handleExpandComplete = () => {
    hasExpanded.current = true;
    if (isVideoVisible) {
      videoRef.current?.play();
    }
  };

  // Play/pause as user scrolls in and out — only after expand has run
  useEffect(() => {
    if (!hasExpanded.current) return;
    if (isVideoVisible) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isVideoVisible]);

  return (
    <section id="workflow-video" className="py-24 md:py-32 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={elementRef}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">
            Every stage. One system.
          </h2>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            From the first lead to the final report — fully connected.
          </p>
        </div>

        {/* Video container — cinematic expand reveal */}
        <div ref={containerRef}>
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl origin-center"
            initial={{ scaleX: 0, scaleY: 0.04 }}
            animate={
              isContainerInView
                ? { scaleX: [0, 1, 1], scaleY: [0.04, 0.04, 1] }
                : { scaleX: 0, scaleY: 0.04 }
            }
            transition={{
              duration: 0.9,
              times: [0, 0.45, 1],
              ease: ['easeOut', 'easeInOut'],
            }}
            onAnimationComplete={handleExpandComplete}
          >
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              className="w-full block"
            >
              <source src="/animations/workflow.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
