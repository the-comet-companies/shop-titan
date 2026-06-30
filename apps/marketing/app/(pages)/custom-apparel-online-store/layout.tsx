import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Custom Apparel Online Store: Launch & Sell Merch",
    description:
        "Launch a custom apparel online store to sell merch, run branded company and team stores, take orders, and fulfill on demand. Built for print shops and apparel decorators, connected to production. Launch in weeks.",
    path: "/custom-apparel-online-store",
    type: "page",
});

export default function CustomApparelOnlineStoreLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
