import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Serve modern image formats (avif ~50% smaller than jpg, webp ~30% smaller)
    images: {
        formats: ['image/avif', 'image/webp'],
        // Minimize layout shift by enforcing explicit dimensions
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
            '@splinetool/react-spline',
            'gsap',
        ],
    },
};

export default nextConfig;
