import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
    title: "Book a Demo — See the System Live",
    description:
        "Book a live walkthrough of the Shop Titan platform. See how the FileMaker system and ecommerce storefront work together for print shops.",
    alternates: {
        canonical: "https://shoptitan.app/reach-out",
    },
    openGraph: {
        title: "Book a Demo — Shop Titan",
        description: "Book a live walkthrough of the Shop Titan platform for your print shop.",
        url: "https://shoptitan.app/reach-out",
    },
};
import Footer from "@/components/Footer";

export default function ReachOutPage() {
    return (
        <>
            <main className="min-h-screen flex flex-col">
                <div className="flex-grow flex flex-col pt-20">
                    <ContactSection />
                </div>
            </main>
            <Footer />
        </>
    );
}
