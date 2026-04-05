import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ecommerce Website for Print Shops | Online Ordering for Custom Apparel",
    description:
        "Get a print shop ecommerce website with artwork uploads, size/color selection, and automatic order processing. Built for real production workflows. Deploy in 2–3 weeks.",
    alternates: {
        canonical: "https://shoptitan.app/platform/ecommerce-storefront",
    },
    openGraph: {
        title: "Ecommerce Website for Print Shops | Online Ordering for Custom Apparel | Shop Titan",
        description: "Print shop ecommerce website with artwork uploads, size/color selection, and automatic order processing. Built for real production workflows.",
        url: "https://shoptitan.app/platform/ecommerce-storefront",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ecommerce Website for Print Shops | Shop Titan",
        description: "Print shop ecommerce website with artwork uploads and automatic order flow into production.",
    },
};

export default function EcommerceStorefrontLayout({ children }: { children: React.ReactNode }) {
    return children;
}
