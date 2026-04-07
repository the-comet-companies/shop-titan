import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Production Management for Print Shops | Track Jobs & Control Scheduling",
    description:
        "Track every job from art approval to shipment with a print shop production management system. Control scheduling, handle rush orders, and prevent delays. Deploy in 2–4 weeks.",
    alternates: {
        canonical: "https://shoptitan.app/platform/production-automation",
    },
    openGraph: {
        title: "Production Management for Print Shops | Track Jobs & Control Scheduling | Shop Titan",
        description: "Print shop production management system — track jobs, control scheduling, handle rush orders, and prevent delays.",
        url: "https://shoptitan.app/platform/production-automation",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Production Management for Print Shops | Shop Titan",
        description: "Track every job from art approval to shipment. Control scheduling and prevent delays.",
    },
};

export default function ProductionAutomationLayout({ children }: { children: React.ReactNode }) {
    return children;
}
