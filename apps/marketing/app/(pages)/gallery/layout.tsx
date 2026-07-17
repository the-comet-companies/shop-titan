import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Print Shop Website Gallery",
    description:
        "Browse real print shop websites built by Shop Titan, page by page. Full storefront walkthroughs, from homepage and product catalog to deals, rush orders, and checkout, for shops like DTLA Print and Fresh Merch.",
    path: "/gallery",
    type: "page",
});

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
