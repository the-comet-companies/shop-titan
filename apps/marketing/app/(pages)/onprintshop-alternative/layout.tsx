import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "OnPrintShop Alternative for Print Shops",
    description:
        "Looking for an OnPrintShop alternative? See why print shops compare Shop Titan: a custom storefront set up for you, decoration-aware online ordering, and orders that flow straight into production, without a heavy configuration project.",
    path: "/onprintshop-alternative",
    type: "page",
});

export default function OnPrintShopAlternativeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
