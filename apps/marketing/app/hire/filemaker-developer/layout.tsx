import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Hire a FileMaker Developer | Or Deploy a Proven System",
    description: "Looking to hire a FileMaker developer? Before you spend $50K+ building from scratch, see the pre-built system already running in real operations. Deploy in 2-4 weeks.",
    path: "/hire/filemaker-developer",
    type: "hire",
});

export default function HireFileMakerLayout({ children }: { children: React.ReactNode }) {
    return children;
}
