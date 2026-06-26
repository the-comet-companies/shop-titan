import { generatePageMetadata, generateProductSchema } from "@/lib/schema";
import { pricing, tracks } from "@/lib/pricing-data";
import InteractivePricing from "@/components/sections/InteractivePricing";
import Footer from "@/components/Footer";

export const metadata = generatePageMetadata({
    title: "Pricing - Website, FileMaker System, or Both",
    description: "Transparent pricing for Shop Titan. Choose your product track, pick your delivery model, and see exactly what you get. No hidden fees. No long-term contracts.",
    path: "/pricing",
    type: "page",
});

// Product + AggregateOffer schema, derived from the real pricing tiers so the
// setup-fee range (DIY low to DFY high) stays in sync with pricing-data.ts.
const PRICING_URL = "https://shoptitan.app/pricing";
const toNumber = (value: string) => Number(value.replace(/[^0-9.]/g, ""));
const productSchema = generateProductSchema(
    tracks.map((track) => {
        const setups = pricing
            .filter((tier) => tier.track === track.id)
            .map((tier) => toNumber(tier.setup));
        return {
            name: `Shop Titan ${track.name} for Print Shops`,
            description: track.tagline,
            url: PRICING_URL,
            lowPrice: Math.min(...setups),
            highPrice: Math.max(...setups),
            offerCount: setups.length,
        };
    })
);

export default function PricingPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <InteractivePricing />
            <Footer />
        </main>
    );
}
