import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Shopify for Print Shops: Does It Actually Work?",
    description:
        "Can you use Shopify for a print shop? An honest look at where Shopify works, where it falls short for decoration-aware ordering and production, the apps you would need, and when a purpose-built platform fits better.",
    path: "/shopify-for-print-shops",
    type: "page",
});

export default function ShopifyForPrintShopsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
