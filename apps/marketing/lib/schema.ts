// JSON-LD Schema generators for SEO

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };
}

export function generateServiceSchema(service: {
    name: string;
    description: string;
    url: string;
    provider?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "url": service.url,
        "provider": {
            "@type": "Organization",
            "@id": "https://shoptitan.app/#organization",
            "name": service.provider ?? "Shop Titan",
        },
        "areaServed": {
            "@type": "Country",
            "name": "United States",
        },
    };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url,
        })),
    };
}

export function generateArticleSchema(article: {
    title: string;
    description: string;
    slug: string;
    date: string;
    author: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.description,
        "datePublished": article.date,
        "author": {
            "@type": "Person",
            "name": article.author,
        },
        "publisher": {
            "@type": "Organization",
            "name": "Shop Titan",
            "url": "https://shoptitan.app",
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://shoptitan.app/blog/${article.slug}`,
        },
    };
}
