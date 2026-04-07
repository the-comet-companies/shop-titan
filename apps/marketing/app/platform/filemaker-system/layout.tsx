import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FileMaker System for Print Shops | Pre-Built & Production-Tested",
    description:
        "Pre-built FileMaker system for print shops. Manage quotes, orders, inventory, and production from one platform — tested in real daily operations. Deploy in 2–4 weeks.",
    alternates: {
        canonical: "https://shoptitan.app/platform/filemaker-system",
    },
    openGraph: {
        title: "FileMaker System for Print Shops | Pre-Built & Production-Tested | Shop Titan",
        description: "Pre-built FileMaker system for print shops. Manage quotes, orders, inventory, and production — tested in real daily operations. Deploy in 2–4 weeks.",
        url: "https://shoptitan.app/platform/filemaker-system",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "FileMaker System for Print Shops | Shop Titan",
        description: "Pre-built FileMaker system for print shops. Deploy in 2–4 weeks.",
    },
};

export default function FileMakerSystemLayout({ children }: { children: React.ReactNode }) {
    return children;
}
