import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Best Ecommerce Platform for Print Shops (2026)",
    description:
        "Compare the best ecommerce platforms for print shops and apparel decorators, including Shop Titan, Printavo, DecoNetwork, OnPrintShop, Shopify, and print-on-demand. See what each is built for and how to choose.",
    path: "/best-ecommerce-platform-for-print-shops",
    type: "page",
});

export default function BestEcommercePlatformLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
