import type { Metadata } from "next";
import AboutUsSection from "@/components/sections/AboutUsSection";

export const metadata: Metadata = {
    title: "About Us — The Team Behind Shop Titan",
    description:
        "Shop Titan was built inside a real $1M+ screen printing operation. We deploy proven FileMaker systems and ecommerce storefronts to print shops across the US.",
    alternates: {
        canonical: "https://shoptitan.app/about",
    },
    openGraph: {
        title: "About Shop Titan — Built Inside a Real Print Shop",
        description: "Shop Titan was built inside a real $1M+ screen printing operation. We deploy proven FileMaker systems and ecommerce storefronts to print shops across the US.",
        url: "https://shoptitan.app/about",
    },
};
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <AboutUsSection />
            <Footer />
        </main>
    );
}
