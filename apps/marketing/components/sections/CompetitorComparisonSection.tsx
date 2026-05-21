'use client';

import { motion } from 'framer-motion';
import type { ComparisonTable, CellState } from '@/lib/comparison-data';

type Props = {
    data: ComparisonTable;
    bg?: 'light' | 'surface';
};

function Cell({ state }: { state: CellState }) {
    if (state === 'yes') {
        return (
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-base">check</span>
            </span>
        );
    }
    if (state === 'no') {
        return (
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-500/10">
                <span className="material-symbols-outlined text-rose-500 text-base">close</span>
            </span>
        );
    }
    return (
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/10">
            <span className="material-symbols-outlined text-amber-500 text-base">remove</span>
        </span>
    );
}

function Legend() {
    return (
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs text-secondary-text dark:text-gray-400">
            <div className="flex items-center gap-2">
                <Cell state="yes" />
                <span>Included</span>
            </div>
            <div className="flex items-center gap-2">
                <Cell state="partial" />
                <span>Partial or add-on</span>
            </div>
            <div className="flex items-center gap-2">
                <Cell state="no" />
                <span>Not available</span>
            </div>
        </div>
    );
}

export default function CompetitorComparisonSection({ data, bg = 'light' }: Props) {
    const sectionBg =
        bg === 'surface'
            ? 'relative bg-surface dark:bg-gray-950'
            : 'bg-background-light dark:bg-background-dark';

    return (
        <section className={`${sectionBg} py-16 md:py-20`}>
            {bg === 'surface' && (
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
            )}
            <div className="max-w-7xl mx-auto px-mobile relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-bold text-charcoal dark:text-white tracking-tight mb-4"
                >
                    {data.heading}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-secondary-text dark:text-gray-400 leading-relaxed max-w-3xl mb-6"
                >
                    {data.intro}
                </motion.p>

                <div className="mb-6">
                    <Legend />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto rounded-2xl border border-structural-border dark:border-gray-800 bg-white dark:bg-gray-900"
                >
                    <table className="w-full text-sm min-w-[640px]">
                        <thead>
                            <tr className="border-b border-structural-border dark:border-gray-800 bg-background-light/60 dark:bg-gray-950/60">
                                <th className="p-4 text-left font-bold text-charcoal dark:text-white">Feature</th>
                                <th className="p-4 text-center font-bold text-primary whitespace-nowrap">Shop Titan</th>
                                <th className="p-4 text-center font-bold text-secondary-text dark:text-gray-300">Printavo</th>
                                <th className="p-4 text-center font-bold text-secondary-text dark:text-gray-300">ShopWorx</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.rows.map((row, i) => (
                                <tr
                                    key={i}
                                    className="border-b border-structural-border dark:border-gray-800 last:border-0 hover:bg-background-light/40 dark:hover:bg-gray-950/40 transition-colors"
                                >
                                    <td className="p-4 font-semibold text-charcoal dark:text-white">{row.feature}</td>
                                    <td className="p-4 text-center">
                                        <div className="flex justify-center">
                                            <Cell state={row.shopTitan} />
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex justify-center">
                                            <Cell state={row.printavo} />
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex justify-center">
                                            <Cell state={row.shopworx} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-sm text-secondary-text dark:text-gray-400 mt-6 max-w-3xl leading-relaxed"
                >
                    {data.footnote}
                </motion.p>
            </div>
        </section>
    );
}
