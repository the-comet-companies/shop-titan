import HeroSection from "@/components/sections/HeroSection";
import PainPointSection from "@/components/sections/PainPointSection";
import CanYouRelateSection from "@/components/sections/CanYouRelateSection";
import ProductShowcaseSection from "@/components/sections/ProductShowcaseSection";
import PathSelectionSection from "@/components/sections/PathSelectionSection";
import WorkflowVideoSection from "@/components/sections/WorkflowVideoSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import FounderStorySection from "@/components/sections/FounderStorySection";
import ComingSoonSection from "@/components/sections/ComingSoonSection";
import CtaSection from "@/components/sections/CtaSection";

import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <main>
                <HeroSection />
                <PainPointSection />
                <PathSelectionSection />
                <CanYouRelateSection />
                <WorkflowVideoSection />
                {/* <ProductShowcaseSection /> */}
                <BenefitsSection />
                <IndustriesSection />
                <ShowcaseSection />
                <FounderStorySection />
                <ComingSoonSection />
                <CtaSection />

            </main>
            <Footer />
        </>
    );
}
