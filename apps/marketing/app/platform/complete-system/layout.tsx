import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Print Shop Management System | Website + Operations in One Platform",
    description: "Complete print shop management system  - ecommerce storefront and FileMaker operations connected. Orders flow from website to production automatically. Deploy in 4-6 weeks.",
    path: "/platform/complete-system",
    type: "platform",
});

export default function CompleteSystemLayout({ children }: { children: React.ReactNode }) {
    return children;
}
