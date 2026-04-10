import type { Metadata } from "next";
import BlogSection from "@/components/sections/BlogSection";

export const metadata: Metadata = {
    title: "Blog  - Print Shop Operations, FileMaker, & Ecommerce",
    description:
        "Insights on running a print shop, FileMaker systems, ecommerce for screen printers, inventory management, and scaling apparel decoration businesses.",
    alternates: {
        canonical: "https://shoptitan.app/blog",
    },
    openGraph: {
        title: "Shop Titan Blog  - Print Shop Operations & Systems",
        description: "Insights on running a print shop, FileMaker systems, ecommerce for screen printers, and scaling apparel decoration businesses.",
        url: "https://shoptitan.app/blog",
    },
};
import Footer from "@/components/Footer";

export default function BlogPage() {
    return (
        <>
            <main>
                <BlogSection />
            </main>
            <Footer />
        </>
    );
}
