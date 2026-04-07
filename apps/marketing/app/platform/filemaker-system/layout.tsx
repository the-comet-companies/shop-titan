import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "FileMaker System for Print Shops | Pre-Built & Production-Tested",
    description: "Pre-built FileMaker system for print shops. Manage quotes, orders, inventory, and production from one platform — tested in real daily operations. Deploy in 2–4 weeks.",
    path: "/platform/filemaker-system",
    type: "platform",
});

export default function FileMakerSystemLayout({ children }: { children: React.ReactNode }) {
    return children;
}
