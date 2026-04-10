import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Inventory Management for Print Shops | Track Blanks & Prevent Stockouts",
    description: "Track blank apparel by size, color, and style with a print shop inventory system that connects to orders and production. No spreadsheets. No stockouts. Deploy in 2-4 weeks.",
    path: "/platform/inventory-management",
    type: "platform",
});

export default function InventoryManagementLayout({ children }: { children: React.ReactNode }) {
    return children;
}
