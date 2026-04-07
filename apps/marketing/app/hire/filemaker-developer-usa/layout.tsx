import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Hire FileMaker Developer USA | Or Deploy a Proven System",
    description: "Looking to hire a FileMaker developer in the USA? See how print shops deploy a proven system in weeks instead of building from scratch.",
    path: "/hire/filemaker-developer-usa",
    type: "hire",
});

export default function HireFileMakerUSALayout({ children }: { children: React.ReactNode }) {
    return children;
}
