import type { Metadata } from "next";
import PublicPricingSection from "@/components/sections/PublicPricingSection";

export const metadata: Metadata = {
    title: "Pricing — Website, FileMaker System, or Both",
    description:
        "Transparent pricing for Shop Titan. Get a pre-built FileMaker system, an ecommerce storefront, or the complete platform — deployed in weeks.",
    alternates: {
        canonical: "https://shoptitan.app/pricing",
    },
    openGraph: {
        title: "Shop Titan Pricing — Print Shop Systems",
        description: "Transparent pricing for pre-built FileMaker systems and ecommerce storefronts for print shops.",
        url: "https://shoptitan.app/pricing",
    },
};
import Footer from "@/components/Footer";

export default function PricingPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <PublicPricingSection />
            <Footer />
        </main>
    );
}
