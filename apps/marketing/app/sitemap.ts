import type { MetadataRoute } from 'next';
import { articles } from '@/lib/blog-data';
import { caseStudies } from '@/lib/case-studies-data';

const BASE_URL = 'https://shoptitan.app';

// Stable last-updated date for static + case study pages. Bump this when you
// meaningfully update site content. Avoid new Date() here: a "now" timestamp on
// every build makes lastmod useless, Google ignores sitemaps that always look
// freshly modified. Blog posts use their own post.date below.
const CONTENT_UPDATED = new Date('2026-06-24');

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/pricing`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/blog`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/case-studies`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/reach-out`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/platform/filemaker-system`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/platform/ecommerce-storefront`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/platform/complete-system`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/platform/inventory-management`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/platform/production-automation`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/get-started`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/get-started/scheduling`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/get-started/replace-spreadsheets`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/hire/filemaker-developer-usa`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/hire/filemaker-developer`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];

    const blogPages: MetadataRoute.Sitemap = articles.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
        url: `${BASE_URL}/case-studies/${study.slug}`,
        lastModified: CONTENT_UPDATED,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...blogPages, ...caseStudyPages];
}
