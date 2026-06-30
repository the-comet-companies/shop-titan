import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "How Much Does a Print Shop Website Cost? (2026)",
    description:
        "How much a print shop website costs in 2026: DIY builders run $15 to $50 a month, freelancers and agencies $2,000 to $10,000+, and a custom site with online ordering and production integration is priced as setup plus monthly. See what drives the cost.",
    path: "/print-shop-website-cost",
    type: "page",
});

export default function PrintShopWebsiteCostLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
