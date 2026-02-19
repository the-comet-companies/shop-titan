import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "../components/SmoothScrolling";
import Header from "@/components/Header";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const crimsonPro = Crimson_Pro({
    subsets: ["latin"],
    variable: "--font-crimson",
    display: "swap",
    style: ["normal", "italic"],
    weight: ["400", "600"],
});

export const metadata: Metadata = {
    title: "Shop Titan | Professional Apparel Operations",
    description:
        "Unify your production. One platform for high-volume decorators to manage orders, inventory, and automation—from intake to fulfillment, without the friction.",
    keywords: "apparel operations, decoration industry, production management, inventory management, order automation, high-volume decorators",
    authors: [{ name: "Shop Titan" }],
    creator: "Shop Titan",
    publisher: "Shop Titan",

    icons: {
        icon: [
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon.ico', sizes: 'any' }
        ],
        apple: [
            { url: '/apple-touch-icon.png' }
        ],
        other: [
            {
                rel: 'manifest',
                url: '/site.webmanifest',
            }
        ]
    },
    manifest: '/site.webmanifest',

    // Open Graph
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://shoptitan.com',
        siteName: 'Shop Titan',
        title: 'Shop Titan | Professional Apparel Operations',
        description: 'Unify your production. One platform for high-volume decorators to manage orders, inventory, and automation—from intake to fulfillment, without the friction.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Shop Titan - Professional Apparel Operations Platform',
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Shop Titan | Professional Apparel Operations',
        description: 'Unify your production. One platform for high-volume decorators to manage orders, inventory, and automation.',
        images: ['/twitter-image.jpg'],
        creator: '@shoptitan',
    },

    // Robots
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // Verification
    verification: {
        google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
        // bing: 'your-bing-verification-code',
    },
};



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* DNS Prefetch for critical origins */}
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

                {/* Preconnect for faster font loading */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Preload critical hero assets */}
                <link
                    rel="preload"
                    href="https://prod.spline.design/tICsK1PQRrzcESXa/scene.splinecode"
                    as="fetch"
                    crossOrigin="anonymous"
                />
                {/* Uncomment when local video is ready */}
                {/* <link
                    rel="preload"
                    href="/hero-animation.webm"
                    as="video"
                    type="video/webm"
                /> */}

                {/* Material Symbols Icons */}
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />

                {/* Structured Data - Organization Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Shop Titan",
                            "description": "Professional apparel operations platform for high-volume decorators",
                            "url": "https://shoptitan.com",
                            "logo": "https://shoptitan.com/logo.png",
                            "sameAs": [
                                "https://twitter.com/shoptitan",
                                "https://linkedin.com/company/shoptitan"
                            ],
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "Customer Service",
                                "email": "contact@shoptitan.com",
                                "areaServed": "US",
                                "availableLanguage": "English"
                            }
                        })
                    }}
                />
            </head>
            <body
                className={`${inter.variable} ${crimsonPro.variable} antialiased selection:bg-primary/20`}
            >
                <SmoothScrolling>
                    <Header />
                    {children}
                </SmoothScrolling>
            </body>
        </html>
    );
}
