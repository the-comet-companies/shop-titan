import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import PainPointSection from "@/components/sections/PainPointSection";
import ProductShowcaseSection from "@/components/sections/ProductShowcaseSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import PricingSection from "@/components/sections/PricingSection";


import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <main>
                <HeroSection />
                <PainPointSection /> {/* Moved to #2 */}

                <FeaturesSection />
                <ProductShowcaseSection />
                <ShowcaseSection />
                <PricingSection />
                <AboutUsSection />

            </main>
            <Footer />
        </>
    );
}
