import Footer from "@/components/Footer";

export const metadata = {
    title: "Case Studies | Shop Titan",
    description: "Read about how our customers succeed with Shop Titan.",
};

export default function CaseStudiesPage() {
    return (
        <>
            <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center pt-32 pb-24">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        Coming Soon
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-charcoal dark:text-white">
                        Case Studies
                    </h1>
                    <p className="text-lg md:text-xl text-secondary-text dark:text-gray-400 max-w-2xl mx-auto">
                        Content mapping coming soon. We are currently gathering success stories from our network of high-volume decorators.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
