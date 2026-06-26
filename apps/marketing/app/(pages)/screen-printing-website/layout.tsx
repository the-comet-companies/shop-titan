import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Screen Printing Website Design & Online Ordering",
    description:
        "ShopTitan builds ecommerce websites for screen printing businesses. Sell custom apparel online, take orders and quotes, collect artwork, and connect to FileMaker. Built only for print shops. Book a demo.",
    path: "/screen-printing-website",
    type: "page",
});

export default function ScreenPrintingWebsiteLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
