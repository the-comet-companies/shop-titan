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
};



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
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
