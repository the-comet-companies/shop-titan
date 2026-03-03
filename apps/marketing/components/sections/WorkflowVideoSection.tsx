'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WorkflowVideoSection() {
  const { elementRef, isVisible } = useScrollAnimation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
            className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Overlay Gradient for Text Readability */}
            <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10 transition-opacity duration-1000 ${isPlaying ? 'opacity-0 delay-[3000ms]' : 'opacity-100 delay-0'}`}></div>

            {/* Video Label */}
            <div className={`absolute bottom-4 left-4 md:bottom-10 md:left-10 z-20 pointer-events-none transition-opacity duration-1000 ${isPlaying ? 'opacity-0 delay-[3000ms]' : 'opacity-100 delay-0'}`}>
              <span className="inline-block px-1.5 py-0.5 md:px-2 md:py-1 bg-white/20 backdrop-blur-sm rounded text-[8px] md:text-[10px] font-bold text-white mb-1 md:mb-2 uppercase tracking-wide">
                Inside The Platform
              </span>
              <h3 className="text-white text-lg md:text-2xl font-bold">The Connected Workflow</h3>
            </div>

            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-auto block aspect-[4/3] md:aspect-video object-cover object-center relative z-0"
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
