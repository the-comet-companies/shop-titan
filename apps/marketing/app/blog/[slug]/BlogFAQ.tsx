'use client';

import { useState } from 'react';

interface FAQ {
    question: string;
    answer: string;
}

export default function BlogFAQ({ faqs }: { faqs: FAQ[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-0 border-t border-structural-border dark:border-gray-800">
            {faqs.map((faq, i) => (
                <div
                    key={i}
                    className="border-b border-structural-border dark:border-gray-800"
                >
                    <button
                        onClick={() => toggle(i)}
                        className="w-full flex items-center justify-between py-5 text-left group"
                    >
                        <h2 className="text-base font-bold text-charcoal dark:text-white pr-4 leading-snug">
                            {faq.question}
                        </h2>
                        <span
                            className={`material-symbols-outlined text-xl text-secondary-text dark:text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                                openIndex === i ? 'rotate-180' : ''
                            }`}
                        >
                            expand_more
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${
                            openIndex === i ? 'max-h-96 pb-5' : 'max-h-0'
                        }`}
                    >
                        <p className="text-sm text-secondary-text dark:text-gray-400 leading-relaxed">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
