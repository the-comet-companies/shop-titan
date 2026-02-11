import { cn } from "@/lib/utils";

interface BrowserFrameProps {
    children: React.ReactNode;
    className?: string;
    url?: string;
}

export default function BrowserFrame({ children, className, url = "app.shoptitan.com" }: BrowserFrameProps) {
    return (
        <div className={cn("rounded-xl overflow-hidden border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-900 shadow-2xl", className)}>
            {/* Browser Header */}
            <div className="flex items-center gap-4 px-4 py-3 border-b border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-900/50 backdrop-blur-sm">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
                </div>
                <div className="flex-1 flex justify-center px-4">
                    <div className="w-full max-w-sm bg-background-light dark:bg-black/20 rounded-md py-1 px-3 text-center text-xs text-secondary-text font-medium flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[10px]">lock</span>
                        {url}
                    </div>
                </div>
                <div className="w-14" /> {/* Spacer for balance */}
            </div>
            {/* Browser Content */}
            <div className="relative">
                {children}
            </div>
        </div>
    );
}
