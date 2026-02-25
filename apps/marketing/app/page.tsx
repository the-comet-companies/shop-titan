import HeroSection from "@/components/sections/HeroSection";
import PainPointSection from "@/components/sections/PainPointSection";
import CanYouRelateSection from "@/components/sections/CanYouRelateSection";
import ProductShowcaseSection from "@/components/sections/ProductShowcaseSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WorkflowVideoSection from "@/components/sections/WorkflowVideoSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import ComingSoonSection from "@/components/sections/ComingSoonSection";
import CtaSection from "@/components/sections/CtaSection";

import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <main>
                <HeroSection />
                <PainPointSection />
                <CanYouRelateSection />
                <WorkflowVideoSection />
                <FeaturesSection />
                {/* <ProductShowcaseSection /> */}
                <BenefitsSection />
                <IndustriesSection />
                <ShowcaseSection />
                <CtaSection />
                <ComingSoonSection />

            </main>
            <Footer />
        </>
    );
}
