import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Production Management Software for Printing Companies",
    description:
        "Shop Titan helps print shops manage orders, artwork, approvals, scheduling, inventory, job status, and production from one connected system.",
    path: "/printing-companies",
    type: "page",
});

export default function PrintingCompaniesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
