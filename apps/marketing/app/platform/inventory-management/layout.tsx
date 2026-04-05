import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Inventory Management for Print Shops | Track Blanks & Prevent Stockouts",
    description:
        "Track blank apparel by size, color, and style with a print shop inventory system that connects to orders and production. No spreadsheets. No stockouts. Deploy in 2–4 weeks.",
    alternates: {
        canonical: "https://shoptitan.app/platform/inventory-management",
    },
    openGraph: {
        title: "Inventory Management for Print Shops | Track Blanks & Prevent Stockouts | Shop Titan",
        description: "Track blank apparel by size, color, and style with a print shop inventory system connected to orders and production.",
        url: "https://shoptitan.app/platform/inventory-management",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Inventory Management for Print Shops | Shop Titan",
        description: "Print shop inventory system — track blanks, prevent stockouts, sync with orders.",
    },
};

export default function InventoryManagementLayout({ children }: { children: React.ReactNode }) {
    return children;
}
