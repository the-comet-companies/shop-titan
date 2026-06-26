import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Online Ordering for Print Shops: Take Orders 24/7",
    description:
        "Add online ordering to your print shop so customers configure jobs, upload artwork, approve proofs, and pay online. Replace phone and email intake with orders that arrive complete and paid, connected to production.",
    path: "/online-ordering-for-print-shops",
    type: "page",
});

export default function OnlineOrderingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
