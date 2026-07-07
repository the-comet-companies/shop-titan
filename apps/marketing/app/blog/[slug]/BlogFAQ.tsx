interface FAQ {
    question: string;
    answer: string;
}

export default function BlogFAQ({ faqs }: { faqs: FAQ[] }) {
    return (
        <div className="border-t border-structural-border dark:border-gray-800">
            {faqs.map((faq, i) => (
                <details key={i} className="group border-b border-structural-border dark:border-gray-800">
                    <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none select-none">
                        <h3 className="text-base font-bold text-charcoal dark:text-white pr-4 leading-snug">{faq.question}</h3>
                        <span className="material-symbols-outlined text-xl text-secondary-text dark:text-gray-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                    </summary>
                    <p className="pb-5 text-sm text-secondary-text dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                </details>
            ))}
        </div>
    );
}
