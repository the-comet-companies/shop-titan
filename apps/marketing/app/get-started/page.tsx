import type { Metadata } from "next";
import LandingHeader from "./_components/LandingHeader";
import HomeContent from "./_components/HomeContent";

export const metadata: Metadata = {
    title: "Shop Titan — One operating system for production shops",
    description:
        "Stop running production from whiteboards, spreadsheets, and memory. Shop Titan gives growing shops one connected system for orders, art, approvals, scheduling, inventory, and status.",
    alternates: { canonical: "https://shoptitan.app/get-started" },
    robots: { index: true, follow: true },
    openGraph: {
        type: "website",
        url: "https://shoptitan.app/get-started",
        title: "Shop Titan — One operating system for production shops",
        description:
            "Stop running production from whiteboards, spreadsheets, and memory. One connected system for orders, art, approvals, scheduling, and status.",
        images: ["/dashboard-hero.png"],
    },
};

export default function GetStartedHomePage() {
    return (
        <>
            <LandingHeader />
            <main className="min-h-screen pt-20">
                <HomeContent />
            </main>
        </>
    );
}
