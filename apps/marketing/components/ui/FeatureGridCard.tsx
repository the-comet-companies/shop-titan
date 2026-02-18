'use client';

import { motion } from 'framer-motion';

interface FeatureGridCardProps {
  id: string;
  icon: string;
  title: string;
  summary: string;
  painPoint: string;
  solution: string;
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
          ? 'border-2 border-primary/30 dark:border-primary/40 shadow-2xl'
          : 'border border-structural-border dark:border-gray-800 hover:shadow-xl hover:border-primary/20 cursor-pointer'
        }
      `}
      onClick={() => !isExpanded && onToggle(id)}
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
        <span className="material-symbols-outlined text-primary text-2xl">
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-charcoal dark:text-white mb-3">
        {title}
      </h3>

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
        <>
          {/* Expanded State */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {/* Pain Point Box */}
            <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-slate-500 text-lg">
                  sentiment_dissatisfied
                </span>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
                  The Friction
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {painPoint}
              </p>
            </div>

            {/* Solution Box */}
            <div className="mb-6 p-4 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400 text-lg">
                  bolt
                </span>
                <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-400">
                  The Flow
                </h4>
              </div>
              <p className="text-sm text-charcoal dark:text-white font-semibold leading-relaxed">
                {solution}
              </p>
            </div>

            {/* Collapse Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggle(id);
              }}
              className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
            >
              Show Less
              <span className="material-symbols-outlined text-base">expand_less</span>
            </button>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
