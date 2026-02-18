'use client';

import { motion } from 'framer-motion';
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
  onToggle
}: FeatureGridCardProps) {
  return (
    <motion.div
      layout
      className={`
        bg-surface dark:bg-gray-900
        border rounded-2xl p-6
        transition-all duration-300
        ${isExpanded
          ? 'border-2 border-primary/30 dark:border-primary/40 shadow-2xl col-span-1 md:col-span-2 lg:col-span-3'
          : 'border border-structural-border dark:border-gray-800 hover:shadow-xl hover:border-primary/20 cursor-pointer'
        }
      `}
      onClick={() => !isExpanded && onToggle(id)}
    >
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

      {!isExpanded ? (
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
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Pain Point - Expressive/Friction Theme */}
            <div className="relative p-5 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 rounded-xl overflow-hidden flex flex-col h-full hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600 transition-all">
              <div className="flex items-center gap-2 mb-3 relative z-10">
                <div className="p-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg">
                  <span className="material-symbols-outlined text-slate-500 text-lg">sentiment_dissatisfied</span>
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
                  The Friction
                </h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed relative z-10 font-medium flex-grow">
                {painPoint}
              </p>
            </div>

            {/* Solution - Vibrant/Flow Theme */}
            <div className="relative p-5 border border-indigo-100 dark:border-indigo-900 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-xl overflow-hidden group/flow flex flex-col h-full hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-200 dark:hover:border-indigo-700 transition-all">
              {/* Subtle Background Gradient Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent -translate-x-[100%] animate-[shimmer_3s_infinite] pointer-events-none" />

              <div className="flex items-center gap-2 mb-3 relative z-10">
                <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400">
                  <span className="material-symbols-outlined text-lg">bolt</span>
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-400">
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

              <div className="w-full max-w-4xl shadow-2xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 relative z-10 bg-white dark:bg-gray-900 flex flex-col aspect-video">
                <div className="flex-grow relative bg-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center text-white/20">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-current flex items-center justify-center">
                      <span className="material-symbols-outlined text-4xl md:text-5xl">play_arrow</span>
                    </div>
                  </div>
                  <VideoPlayer
                    src={videoSrc}
                    autoPlay={true}
                    className="h-full w-full object-cover relative z-10"
                    hideControls={true}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Collapse Button */}
          <div className="flex justify-center">
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
    </motion.div>
  );
}
