import { generatePageMetadata } from "@/lib/schema";

// The products page itself is a client component, so its metadata lives here in
// a server-component layout instead of an exported metadata object on the page.
export const metadata = generatePageMetadata({
    title: "Print Shop Website & FileMaker System",
    description:
        "Get your shop online and taking orders with a branded website, then add the pre-built FileMaker back office to run quotes, orders, inventory, and production when you are ready.",
    path: "/products",
    type: "page",
});

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
