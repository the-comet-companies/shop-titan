import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import PainPointSection from "@/components/sections/PainPointSection";
import CanYouRelateSection from "@/components/sections/CanYouRelateSection";
import ProductShowcaseSection from "@/components/sections/ProductShowcaseSection";
import PathSelectionSection from "@/components/sections/PathSelectionSection";
import WhyWebsiteSection from "@/components/sections/WhyWebsiteSection";
import WebsiteSecretSection from "@/components/sections/WebsiteSecretSection";
import WebsiteEverythingSection from "@/components/sections/WebsiteEverythingSection";
import WebsiteFeaturesGridSection from "@/components/sections/WebsiteFeaturesGridSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import FounderStorySection from "@/components/sections/FounderStorySection";
import CtaSection from "@/components/sections/CtaSection";

import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Shop Titan: Print Shop Websites & Ecommerce Storefronts",
    description:
        "Get your print shop online with a branded ecommerce storefront and online ordering, then add a pre-built FileMaker system to run quotes, orders, inventory, and production. Proven in a $1M+ shop.",
    alternates: { canonical: "https://shoptitan.app" },
};

export default function Home() {
    return (
        <>
            <main>
                <HeroSection />
                <PainPointSection />
                <PathSelectionSection />
                <WhyWebsiteSection />
                <WebsiteSecretSection />
                <WebsiteEverythingSection />
                <WebsiteFeaturesGridSection />
                <BenefitsSection />
                <CanYouRelateSection />
                {/* <ProductShowcaseSection /> */}
                <IndustriesSection />
                <ShowcaseSection />
                <FounderStorySection />
                <CtaSection />

            </main>
            <Footer />
        </>
    );
}
