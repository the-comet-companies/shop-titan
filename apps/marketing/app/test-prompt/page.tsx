import type { Metadata } from "next";
import LandingHeader from "../get-started/_components/LandingHeader";
import TestPromptContent from "./_components/TestPromptContent";

export const metadata: Metadata = {
    title: "Shop Titan - Production Operating System for Print Shops",
    description:
        "Your shop is not chaotic because your team is bad. It is chaotic because your system is broken. See how Shop Titan replaces whiteboards, spreadsheets, and memory with one connected operating system.",
    robots: { index: false, follow: false },
};

export default function TestPromptPage() {
    return (
        <>
            <LandingHeader />
            <main className="min-h-screen bg-background-light text-charcoal pt-20">
                <TestPromptContent />
            </main>
        </>
    );
}
