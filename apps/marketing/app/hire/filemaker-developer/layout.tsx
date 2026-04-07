import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hire a FileMaker Developer | Or Deploy a Proven System",
    description:
        "Looking to hire a FileMaker developer? Before you spend $50K+ building from scratch, see the pre-built system already running in real operations. Deploy in 2–4 weeks.",
    alternates: {
        canonical: "https://shoptitan.app/hire/filemaker-developer",
    },
    openGraph: {
        title: "Hire a FileMaker Developer | Or Deploy a Proven System | Shop Titan",
        description: "Looking to hire a FileMaker developer? See the pre-built system already running in real operations before building from scratch.",
        url: "https://shoptitan.app/hire/filemaker-developer",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hire a FileMaker Developer | Shop Titan",
        description: "Before you hire a FileMaker developer, see the system that's already built.",
    },
};

export default function HireFileMakerLayout({ children }: { children: React.ReactNode }) {
    return children;
}
