import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "WooCommerce for Print Shops: Is It Worth It?",
    description:
        "WooCommerce is a free WordPress plugin, but running it for a print shop means hosting, premium plugins for decoration ordering and artwork upload, and ongoing maintenance. See what it really takes and when a purpose-built platform fits better.",
    path: "/woocommerce-for-print-shops",
    type: "page",
});

export default function WooCommerceForPrintShopsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
