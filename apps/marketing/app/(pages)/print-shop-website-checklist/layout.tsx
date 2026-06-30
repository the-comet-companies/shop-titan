import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Print Shop Website Checklist: 24 Essentials",
    description:
        "A practical checklist for building a print shop website that wins orders. Foundations, portfolio, decoration-aware online ordering, trust, production tie-in, and SEO, grouped so you can check off what your site has and what it is missing.",
    path: "/print-shop-website-checklist",
    type: "page",
});

export default function PrintShopWebsiteChecklistLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
