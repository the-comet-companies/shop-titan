import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Bypass Vercel's image optimizer (quota exceeded on current plan).
    // Re-enable by removing `unoptimized: true` after upgrading to Pro.
    images: {
        unoptimized: true,
        formats: ['image/avif', 'image/webp'],
        dangerouslyAllowSVG: false,
    },

    // Compress responses with gzip (reduces transfer size ~70%)
    compress: true,

    // Remove React error overlay in production for smaller bundle
    reactStrictMode: true,

    // Optimize package imports to avoid importing full libraries
    experimental: {
        optimizePackageImports: [
            'framer-motion',
            'gsap',
        ],
    },

    // Preserve the old experimental URL: 301 to the renamed route.
    async redirects() {
        return [
            {
                source: '/test-prompt',
                destination: '/print-shop-operating-system',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
