
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function ReachOutPage() {
    return (
        <>
            <main className="min-h-screen flex flex-col">
                <div className="flex-grow flex flex-col pt-20">
                    <ContactSection />
                </div>
            </main>
            <Footer />
        </>
    );
}
