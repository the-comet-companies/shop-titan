import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Ecommerce Website for Print Shops | Online Ordering for Custom Apparel",
    description: "Get a print shop ecommerce website with artwork uploads, size/color selection, and automatic order processing. Built for real production workflows. Deploy in 2-3 weeks.",
    path: "/platform/ecommerce-storefront",
    type: "platform",
});

export default function EcommerceStorefrontLayout({ children }: { children: React.ReactNode }) {
    return children;
}
