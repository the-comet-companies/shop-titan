import { generatePageMetadata } from "@/lib/schema";

export const metadata = generatePageMetadata({
    title: "Replace Print Shop Spreadsheets | Print Shop Management Software",
    description: "Stop using spreadsheets to manage your print shop. Replace manual tracking with a system that handles orders, inventory, and production in real time.",
    path: "/get-started/replace-spreadsheets",
    type: "get-started",
});

export default function ReplaceSpreadsheetLayout({ children }: { children: React.ReactNode }) {
    return children;
}
