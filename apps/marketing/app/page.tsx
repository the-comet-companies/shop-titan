import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import PainPointSection from "@/components/sections/PainPointSection";
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
                <FeaturesSection />
                <ProductShowcaseSection />
                <ShowcaseSection />
                <PricingSection />
                <PainPointSection />
                <AboutUsSection />

                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
