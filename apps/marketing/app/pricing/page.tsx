import { generatePageMetadata } from "@/lib/schema";
import InteractivePricing from "@/components/sections/InteractivePricing";
import Footer from "@/components/Footer";

export const metadata = generatePageMetadata({
    title: "Pricing - Website, FileMaker System, or Both",
    description: "Transparent pricing for Shop Titan. Choose your product track, pick your delivery model, and see exactly what you get. No hidden fees. No long-term contracts.",
    path: "/pricing",
    type: "page",
});

export default function PricingPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <InteractivePricing />
            <Footer />
        </main>
    );
}
