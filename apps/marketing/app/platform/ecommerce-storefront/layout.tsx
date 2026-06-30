import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Print Shop Storefront, Connected to Production",
    description: "The Shop Titan storefront module sends online orders straight into your FileMaker system as quotes, inventory, and production jobs, with no re-entry. The selling front-end of the complete print shop platform.",
    path: "/platform/ecommerce-storefront",
    type: "platform",
});

export default function EcommerceStorefrontLayout({ children }: { children: React.ReactNode }) {
    return children;
}
