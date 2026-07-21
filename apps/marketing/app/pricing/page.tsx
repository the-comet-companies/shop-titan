import { generatePageMetadata, generateProductSchema } from "@/lib/schema";
import { PRICING } from "@/lib/pricing-calculator";
import PricingCalculator from "@/components/sections/PricingCalculator";
import Footer from "@/components/Footer";

export const metadata = generatePageMetadata({
    title: "Pricing - Two Ways to Launch Your Print Shop Storefront",
    description: "Transparent pricing for a fully SEO-optimized print shop storefront. Do-It-Yourself from $10,000 or Done-For-You from $20,000, with a 3-month trial, a monthly base waived under $10K gross, and revenue share that scales with your sales.",
    path: "/pricing",
    type: "page",
});

// Product + AggregateOffer schema derived from the two launch models so the
// setup-fee range stays in sync with lib/pricing-calculator.ts.
const PRICING_URL = "https://shoptitan.app/pricing";
const setups = [
    PRICING.models.diy.setupTotal,
    PRICING.models.dfy.setupTotal - PRICING.models.dfy.fmDiscount,
    PRICING.models.dfy.setupTotal,
];
const productSchema = generateProductSchema([
    {
        name: "Shop Titan Print Shop Storefront",
        description: "A fully SEO-optimized ecommerce storefront for print shops and apparel decorators, available Do-It-Yourself or Done-For-You.",
        url: PRICING_URL,
        lowPrice: Math.min(...setups),
        highPrice: Math.max(...setups),
        offerCount: 2,
    },
]);

export default function PricingPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <PricingCalculator />
            <Footer />
        </main>
    );
}
