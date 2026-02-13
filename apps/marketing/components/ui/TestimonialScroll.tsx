'use client';

interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    initials: string;
}

interface TestimonialScrollProps {
    title?: string;
    subtitle?: string;
    testimonials?: Testimonial[];
    className?: string;
}

// Default testimonials with print shop relevant content
const defaultTestimonials: Testimonial[] = [
    {
        id: '1',
        quote: 'The time savings are real. We\'re producing 5x more content.',
        author: 'Alex Rivera',
        role: 'Marketing Director',
        initials: 'AR',
    },
    {
        id: '2',
        quote: 'Setup was incredibly intuitive. Within an hour, we transformed our workflow.',
        author: 'Roberto Silva',
        role: 'Operations Manager',
        initials: 'RS',
    },
    {
        id: '3',
        quote: 'Best investment we\'ve made this year. The ROI is incredible.',
        author: 'Jessica Wang',
        role: 'CEO',
        initials: 'JW',
    },
    {
        id: '4',
        quote: 'The customization options are unmatched. Our content feels natural.',
        author: 'David Park',
        role: 'Creative Director',
        initials: 'DP',
    },
    {
        id: '5',
        quote: 'The content repurposing options are fantastic. Our social media engagement increased by 300%.',
        author: 'Sarah Mitchell',
        role: 'Content Director',
        initials: 'SM',
    },
    {
        id: '6',
        quote: 'The AI understanding is phenomenal. It captures nuance and context perfectly.',
        author: 'Laura Kim',
        role: 'Product Manager',
        initials: 'LK',
    },
    {
        id: '7',
        quote: 'We\'ve seen a 40% increase in content output. The AI is consistently on-brand.',
        author: 'Marcus Chen',
        role: 'Marketing Manager',
        initials: 'MC',
    },
    {
        id: '8',
        quote: 'Our content quality has improved dramatically. Clients love the consistency.',
        author: 'James Wilson',
        role: 'Agency Owner',
        initials: 'JW',
    },
    {
        id: '9',
        quote: 'Repostr has become essential to our content strategy.',
        author: 'Michael Brown',
        role: 'Content Strategist',
        initials: 'MB',
    },
    {
        id: '10',
        quote: 'From podcast to social posts in minutes. This tool revolutionized our pipeline.',
        author: 'Emma Davis',
        role: 'Social Media Manager',
        initials: 'ED',
    },
    {
        id: '11',
        quote: 'Repostr reduced our content production time by 75% in just two months.',
        author: 'Tom Anderson',
        role: 'Content Lead',
        initials: 'TA',
    },
    {
        id: '12',
        quote: 'The workflow automation saved us countless hours every week.',
        author: 'Nina Patel',
        role: 'Digital Marketing Director',
        initials: 'NP',
    },
    {
        id: '13',
        quote: 'The automated scheduling has freed up our entire team to focus on strategy.',
        author: 'Robert Chen',
        role: 'Social Lead',
        initials: 'RC',
    },
    {
        id: '14',
        quote: 'Customer support is world-class. They actually listen to feature requests.',
        author: 'Amanda Low',
        role: 'Print Shop Manager',
        initials: 'AL',
    },
    {
        id: '15',
        quote: 'Shop Titan pays for itself in just a few days of use each month.',
        author: 'Kevin O\'Neil',
        role: 'Business Owner',
        initials: 'KO',
    },
    {
        id: '16',
        quote: 'The interface is so clean and easy to use. My team picked it up instantly.',
        author: 'Rachel Green',
        role: 'Creative Director',
        initials: 'RG',
    },
];

// Distribute testimonials into 4 columns for masonry layout
const distributeIntoColumns = (items: Testimonial[], numColumns: number = 4) => {
    const columns: Testimonial[][] = Array.from({ length: numColumns }, () => []);
    items.forEach((item, index) => {
        columns[index % numColumns].push(item);
    });
    return columns;
};

export default function TestimonialScroll({
    title = 'Loved by content teams everywhere',
    subtitle = 'Join thousands of creators using Shop Titan',
    testimonials = defaultTestimonials,
    className = '',
}: TestimonialScrollProps) {
    // Create columns for masonry layout - now 4 columns
    const columns = distributeIntoColumns(testimonials, 4);

    return (
        <div className={`py-16 md:py-24 ${className}`}>
            {/* Header */}
            <div className="relative z-20 text-center mb-12 px-4">
                <div className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                        Testimonials
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal dark:text-white mb-4">
                    {title}
                </h2>
                <p className="text-lg text-secondary-text dark:text-gray-400 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            </div>

            {/* Scrolling Container */}
            <div className="relative z-10 h-[800px] overflow-hidden mask-vertical-fade">
                {/* Fade overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-20 pointer-events-none" />

                {/* Vertical Fade Overlays */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white dark:from-gray-950 to-transparent z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent z-20 pointer-events-none" />

                {/* Scrolling columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {columns.map((column, columnIndex) => (
                        <div
                            key={columnIndex}
                            className="flex flex-col gap-4 md:gap-6 min-w-0 animate-scroll-vertical"
                            style={{
                                animationDelay: `${columnIndex * -5}s`,
                                animationDuration: '60s', // Slower for better readability
                            }}
                        >
                            {/* Duplicate array for infinite scroll */}
                            {[...column, ...column].map((testimonial, index) => (
                                <div
                                    key={`${testimonial.id}-${index}`}
                                    className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    {/* Quote */}
                                    <p className="text-sm text-charcoal dark:text-white mb-4 leading-relaxed">
                                        "{testimonial.quote}"
                                    </p>

                                    {/* Stars */}
                                    <div className="flex gap-0.5 mb-4">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <span
                                                key={i}
                                                className="text-black dark:text-white text-base"
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>

                                    {/* Author */}
                                    <div className="flex items-center gap-3">
                                        {/* Avatar with initials */}
                                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                                            <span className="text-xs font-semibold text-charcoal dark:text-white">
                                                {testimonial.initials}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-charcoal dark:text-white">
                                                {testimonial.author}
                                            </div>
                                            <div className="text-xs text-secondary-text dark:text-gray-400">
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <style jsx>{`
                    @keyframes scroll-vertical {
                        0% {
                            transform: translateY(0);
                        }
                        100% {
                            transform: translateY(-50%);
                        }
                    }

                    .animate-scroll-vertical {
                        animation: scroll-vertical linear infinite;
                    }

                    .animate-scroll-vertical:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </div>
        </div>
    );
}
