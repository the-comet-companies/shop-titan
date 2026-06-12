import type { Metadata } from "next";
import { Inter, Crimson_Pro, JetBrains_Mono } from "next/font/google";
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

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
    weight: ["400", "500"],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://shoptitan.app'),
    title: {
        default: 'Shop Titan | Ecommerce Storefront & Print Shop Management System',
        template: '%s | Shop Titan',
    },
    description:
        'A branded ecommerce storefront for print and decoration shops  - customers find you and order online without a phone call. Add a pre-built FileMaker system to run quotes, orders, inventory, and production. Proven in a $1M+ shop.',
    keywords: [
        'custom apparel online store',
        'print shop ecommerce',
        'online ordering for printers',
        'ecommerce for screen printers',
        'print shop management system',
        'filemaker for print shops',
        'screen printing software',
        'apparel decorator management',
        'screen printing inventory',
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
        title: 'Shop Titan | Ecommerce Storefront & Print Shop Management System',
        description: 'A branded ecommerce storefront for print shops  - customers order online. Add a pre-built FileMaker system to run operations. Proven in a $1M+ shop.',
        images: [
            {
                url: 'https://shoptitan.app/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Shop Titan  - Ecommerce Storefront & Print Shop Management System',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Shop Titan | Ecommerce Storefront for Print Shops',
        description: 'A branded storefront for print shops  - customers order online. Add a FileMaker system to run operations. Deploy in weeks.',
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
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200..400,0..1,-50..200&display=swap"
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
                                    "description": "Branded ecommerce storefronts and pre-built FileMaker systems for print shops. Proven in a $1M+ screen printing operation.",
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
                                        "Ecommerce for Print Shops",
                                        "Online Ordering for Apparel Decorators",
                                        "Print Shop Management",
                                        "FileMaker Development",
                                        "Screen Printing Software",
                                        "Apparel Decoration Operations"
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
                                    "description": "Ecommerce storefront for print shops with online ordering, plus an integrated FileMaker operations platform for quotes, orders, inventory, and production.",
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
                className={`${inter.variable} ${crimsonPro.variable} ${jetbrainsMono.variable} antialiased selection:bg-primary/20`}
            >
                <SmoothScrolling>
                    <Header />
                    {children}
                </SmoothScrolling>
            </body>
        </html>
    );
}
