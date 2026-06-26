import { generatePageMetadata } from "@/lib/schema";

// Website-first pillar page. Metadata lives here in a server-component layout
// because the page itself is a client component (framer-motion animations).
export const metadata = generatePageMetadata({
    title: "Print Shop Websites That Take Orders Online",
    description:
        "Get a branded print shop website with online ordering, artwork upload, and decoration-aware pricing. Built for screen printers and apparel decorators, connected to your production. Launch in weeks.",
    path: "/print-shop-website",
    type: "page",
});

export default function PrintShopWebsiteLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
