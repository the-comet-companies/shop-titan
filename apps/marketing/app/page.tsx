import HeroSection from "@/components/sections/HeroSection";
import PainPointSection from "@/components/sections/PainPointSection";
import ProductShowcaseSection from "@/components/sections/ProductShowcaseSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";


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

            </main>
            <Footer />
        </>
    );
}
