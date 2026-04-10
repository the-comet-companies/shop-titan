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
    metadataBase: new URL('https://shoptitan.app'),
    title: {
        default: 'Shop Titan | Print Shop Management System & Ecommerce Platform',
        template: '%s | Shop Titan',
    },
    description:
        'Pre-built FileMaker system and ecommerce storefront for print shops. Proven in a $1M+ operation  - deploy in weeks, not months. Quotes, orders, inventory, production, and online ordering.',
    keywords: [
        'print shop management system',
        'filemaker for print shops',
        'screen printing software',
        'apparel decorator management',
        'print shop ecommerce',
        'order management for printers',
        'screen printing inventory',
        'production automation',
        'custom apparel online store',
        'print shop CRM',
    ],
    authors: [{ name: 'Shop Titan' }],
    creator: 'Shop Titan',
    publisher: 'Shop Titan',

    icons: {
        icon: [
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon.ico', sizes: 'any' },
        ],
        apple: [{ url: '/apple-touch-icon.png' }],
    },
    manifest: '/site.webmanifest',

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://shoptitan.app',
        siteName: 'Shop Titan',
        title: 'Shop Titan | Print Shop Management System & Ecommerce Platform',
        description: 'Pre-built FileMaker system and ecommerce storefront for print shops. Proven in a $1M+ operation  - deploy in weeks, not months.',
        images: [
            {
                url: 'https://shoptitan.app/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Shop Titan  - Print Shop Management System & Ecommerce Platform',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Shop Titan | Print Shop Management System',
        description: 'Pre-built FileMaker system and ecommerce storefront for print shops. Deploy in weeks, not months.',
        images: ['https://shoptitan.app/og-image.png'],
        creator: '@shoptitan',
    },

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

    alternates: {
        canonical: 'https://shoptitan.app',
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
                            "@graph": [
                                {
                                    "@type": "Organization",
                                    "@id": "https://shoptitan.app/#organization",
                                    "name": "Shop Titan",
                                    "description": "Pre-built FileMaker systems and ecommerce storefronts for print shops. Proven in a $1M+ screen printing operation.",
                                    "url": "https://shoptitan.app",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://shoptitan.app/logo-transparent.png"
                                    },
                                    "sameAs": [
                                        "https://twitter.com/shoptitan",
                                        "https://linkedin.com/company/shoptitan"
                                    ],
                                    "contactPoint": {
                                        "@type": "ContactPoint",
                                        "contactType": "Sales",
                                        "email": "contact@shoptitan.app",
                                        "areaServed": "US",
                                        "availableLanguage": "English"
                                    },
                                    "knowsAbout": [
                                        "FileMaker Development",
                                        "Print Shop Management",
                                        "Screen Printing Software",
                                        "Apparel Decoration Operations",
                                        "Ecommerce for Print Shops"
                                    ]
                                },
                                {
                                    "@type": "WebSite",
                                    "@id": "https://shoptitan.app/#website",
                                    "url": "https://shoptitan.app",
                                    "name": "Shop Titan",
                                    "publisher": {
                                        "@id": "https://shoptitan.app/#organization"
                                    }
                                },
                                {
                                    "@type": "SoftwareApplication",
                                    "name": "Shop Titan",
                                    "applicationCategory": "BusinessApplication",
                                    "operatingSystem": "Web, FileMaker",
                                    "description": "Complete print shop management system  - FileMaker-based operations platform with integrated ecommerce storefront.",
                                    "offers": {
                                        "@type": "Offer",
                                        "availability": "https://schema.org/InStock",
                                        "priceCurrency": "USD"
                                    },
                                    "provider": {
                                        "@id": "https://shoptitan.app/#organization"
                                    }
                                }
                            ]
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
