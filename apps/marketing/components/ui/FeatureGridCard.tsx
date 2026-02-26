'use client';

import { motion, AnimatePresence } from 'framer-motion';
import VideoPlayer from '@/components/VideoPlayer';

interface FeatureGridCardProps {
  id: string;
  icon: string;
  title: string;
  summary: string;
  painPoint: string;
  solution: string;
  videoSrc?: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  onWatchDemo?: (src: string) => void;
}

export default function FeatureGridCard({
  id,
  icon,
  title,
  summary,
  painPoint,
  solution,
  videoSrc,
  isExpanded,
  onToggle,
  onWatchDemo
}: FeatureGridCardProps) {
  return (
    <motion.div
      className={`
        bg-white/70 dark:bg-white/5 backdrop-blur-xl
        border rounded-2xl p-6
        transition-all duration-300 relative
        ${isExpanded
          ? 'border-2 border-primary/30 dark:border-primary/40 shadow-2xl shadow-primary/5'
          : 'border border-white/50 dark:border-white/10 shadow-lg hover:shadow-xl hover:border-primary/20 cursor-pointer'
        }
      `}
      onClick={() => !isExpanded && onToggle(id)}
    >
      {/* Minimize Button (Desktop) */}
      {isExpanded && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle(id);
          }}
          className="hidden md:flex absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-primary dark:hover:text-white hover:bg-primary/10 transition-all items-center justify-center"
          aria-label="Minimize"
        >
          <span className="material-symbols-outlined text-xl">close_fullscreen</span>
        </button>
      )}

      {/* Icon & Title Row */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="material-symbols-outlined text-primary text-2xl">
            {icon}
          </span>
        </div>
        <h3 className="text-xl font-bold text-charcoal dark:text-white">
          {title}
        </h3>
      </div>

      {!isExpanded && (
        <>
          {/* Collapsed State */}
          <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
            {summary}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle(id);
            }}
            className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
          >
            Learn More
            <span className="material-symbols-outlined text-base">expand_more</span>
          </button>
        </>
      )}

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="expanded-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="space-y-6 overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Pain Point - Rose glass */}
              <div className="relative p-5 border border-rose-200/50 dark:border-rose-800/30 bg-rose-50/60 dark:bg-rose-950/20 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
                <div className="absolute top-0 right-0 w-20 h-20 bg-rose-500/10 blur-2xl rounded-full pointer-events-none" />
                <div className="flex items-center gap-2 mb-3 relative z-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400">
                    The Friction
                  </h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed relative z-10 font-medium flex-grow">
                  {painPoint}
                </p>
              </div>

              {/* Solution - Primary blue glass */}
              <div className="relative p-5 border border-blue-200/50 dark:border-blue-800/30 bg-blue-50/60 dark:bg-blue-950/20 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col h-full hover:shadow-lg hover:shadow-primary/10 transition-all">
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/10 blur-2xl rounded-full pointer-events-none" />
                <div className="flex items-center gap-2 mb-3 relative z-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-400">
                    The Flow
                  </h4>
                </div>
                <p className="text-charcoal dark:text-white text-sm leading-relaxed font-semibold relative z-10 flex-grow">
                  {solution}
                </p>
              </div>
            </div>

            {/* Video Placeholder */}
            {videoSrc && (
              <div className="w-full bg-gray-50 dark:bg-black/50 p-2 md:p-4 flex items-center justify-center border border-structural-border dark:border-gray-800 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 dark:opacity-20 pointer-events-none" />

                <div className="w-full max-w-4xl shadow-2xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 relative z-10 bg-white dark:bg-gray-900 flex flex-col aspect-video group">
                  <div className="flex-grow relative bg-gray-900 group-hover:bg-gray-800 transition-colors duration-500">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onWatchDemo?.(videoSrc);
                      }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-white/40 group-hover:text-white/80 transition-all duration-500 z-20 hover:bg-black/20"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-current flex items-center justify-center mb-4 transition-transform group-hover:scale-110 bg-black/20 backdrop-blur-sm">
                        <span className="material-symbols-outlined text-4xl md:text-5xl pl-1">play_arrow</span>
                      </div>
                      <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Watch Demo</span>
                    </button>

                    <VideoPlayer
                      src={videoSrc}
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      className="h-full w-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                      hideControls={true}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Collapse Button (Mobile Only) */}
            <div className="flex justify-center md:hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle(id);
                }}
                className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-4"
              >
                Show Less
                <span className="material-symbols-outlined text-base">expand_less</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
