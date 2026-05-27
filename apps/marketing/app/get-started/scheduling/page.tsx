import type { Metadata } from "next";
import LandingHeader from "../_components/LandingHeader";
import SchedulingContent from "../_components/SchedulingContent";

export const metadata: Metadata = {
    title: "Production scheduling software for print shops — Shop Titan",
    description:
        "Stop scheduling from whiteboards and spreadsheets. See job status, department workload, rush impact, approvals, inventory readiness, and bottlenecks in one connected system.",
    alternates: { canonical: "https://shoptitan.app/get-started/scheduling" },
    robots: { index: true, follow: true },
    openGraph: {
        type: "website",
        url: "https://shoptitan.app/get-started/scheduling",
        title: "Production scheduling software for print shops — Shop Titan",
        description:
            "See job status, department workload, rush impact, approvals, inventory readiness, and bottlenecks in one connected system.",
    },
};

export default function SchedulingPage() {
    return (
        <>
            <LandingHeader />
            <main className="min-h-screen pt-20">
                <SchedulingContent />
            </main>
        </>
    );
}
