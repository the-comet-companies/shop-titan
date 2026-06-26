import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Print Shop Ecommerce Website: Sell Apparel Online",
    description:
        "Sell custom apparel and merch online with a print shop ecommerce website. Online store, secure checkout, card payments, team stores, and artwork upload, connected to your production. Launch in weeks.",
    path: "/print-shop-ecommerce-website",
    type: "page",
});

export default function PrintShopEcommerceWebsiteLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
