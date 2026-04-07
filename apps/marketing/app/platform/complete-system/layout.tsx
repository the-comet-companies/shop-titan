import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Print Shop Management System | Website + Operations in One Platform",
    description:
        "Complete print shop management system — ecommerce storefront and FileMaker operations connected. Orders flow from website to production automatically. Deploy in 4–6 weeks.",
    alternates: {
        canonical: "https://shoptitan.app/platform/complete-system",
    },
    openGraph: {
        title: "Print Shop Management System | Website + Operations in One Platform | Shop Titan",
        description: "Complete print shop management system — ecommerce storefront and FileMaker operations connected. Orders flow from website to production automatically.",
        url: "https://shoptitan.app/platform/complete-system",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Print Shop Management System | Shop Titan",
        description: "Complete print shop management system — website and operations in one platform.",
    },
};

export default function CompleteSystemLayout({ children }: { children: React.ReactNode }) {
    return children;
}
