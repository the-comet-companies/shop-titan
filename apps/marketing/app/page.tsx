import HeroSection from "@/components/sections/HeroSection";
import PainPointSection from "@/components/sections/PainPointSection";
import PlatformSection from "@/components/sections/PlatformSection";
import ProductShowcaseSection from "@/components/sections/ProductShowcaseSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import PricingSection from "@/components/sections/PricingSection";

import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <main>
                <HeroSection />
                <PlatformSection />
                <FeaturesSection />
                <ProductShowcaseSection />
                <ShowcaseSection />
                <PricingSection />
                <PainPointSection />

                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
