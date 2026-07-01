import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Print Shop Website Examples",
    description:
        "See print shop website examples by vertical, screen printing, embroidery, promotional products, signage, and team wear. Each is a real, buildable Shop Titan design with decoration-aware online ordering, artwork upload, and a tie into production.",
    path: "/portfolio",
    type: "page",
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
