'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WorkflowVideoSection() {
  const { elementRef, isVisible } = useScrollAnimation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use a native IntersectionObserver for robust mobile video play/pause
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is muted for inline autoplay policies
    video.muted = true;
    video.playsInline = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use a promise catch to handle play() rejections gracefully (e.g. low power mode)
            video.play().catch(() => {
              console.log("Video autoplay blocked or pending interaction.");
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.2 } // Play when 20% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="workflow-video" className="py-24 md:py-32 bg-background-light dark:bg-black">
      <div className="max-w-6xl mx-auto px-mobile">
        {/* Section header */}
        <div
          ref={elementRef}
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-4">
            Every stage. One system.
          </h2>
          <p className="text-lg text-secondary-text dark:text-gray-400 max-w-2xl mx-auto">
            From the first lead to the final report — fully connected.
          </p>
        </div>

        {/* Video container — simplified fade reveal for mobile reliability */}
        <div ref={containerRef}>
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-auto block aspect-video object-cover"
              poster="/video-fallback-poster.jpg" // Add a poster class or image if available
            >
              <source src="/animations/workflow.mp4" type="video/mp4" />
              <p>Your browser does not support HTML5 video.</p>
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
