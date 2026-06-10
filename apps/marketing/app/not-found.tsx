import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Page Not Found | Shop Titan',
    description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
    return (
        <>
            <main className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark px-6 py-24">
                <div className="max-w-2xl mx-auto text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6">
                        404
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-charcoal dark:text-white tracking-tight leading-tight mb-4">
                        We could not find that page.
                    </h1>
                    <p className="text-lg text-secondary-text dark:text-gray-400 leading-relaxed mb-8">
                        The link may be broken, the page may have moved, or it may not exist yet. Pick a way back below.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="/"
                            className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined text-lg">home</span>
                            Back to home
                        </Link>
                        <Link
                            href="/products"
                            className="px-6 py-3 text-charcoal dark:text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-primary/50 transition-colors rounded-full" />
                            <span className="relative z-10">See our products</span>
                        </Link>
                        <Link
                            href="/reach-out"
                            className="px-6 py-3 text-charcoal dark:text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 border-2 border-charcoal/20 dark:border-white/30 group-hover:border-primary/50 transition-colors rounded-full" />
                            <span className="relative z-10">Contact us</span>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
