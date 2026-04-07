import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Production Management for Print Shops | Track Jobs & Control Scheduling",
    description: "Track every job from art approval to shipment with a print shop production management system. Control scheduling, handle rush orders, and prevent delays. Deploy in 2-4 weeks.",
    path: "/platform/production-automation",
    type: "platform",
});

export default function ProductionAutomationLayout({ children }: { children: React.ReactNode }) {
    return children;
}
