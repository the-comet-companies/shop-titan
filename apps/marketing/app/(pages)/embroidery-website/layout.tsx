import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Embroidery Website: Sell Embroidered Apparel Online",
    description:
        "An ecommerce website for embroidery shops. Sell embroidered caps, polos, jackets, and uniforms online, collect logos for digitizing, approve stitch proofs, and run company and team stores, connected to production. Launch in weeks.",
    path: "/embroidery-website",
    type: "page",
});

export default function EmbroideryWebsiteLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
