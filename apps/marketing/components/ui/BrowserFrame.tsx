import { cn } from "@/lib/utils";

interface BrowserFrameProps {
    children: React.ReactNode;
    className?: string;
    url?: string;
}

export default function BrowserFrame({ children, className, url = "app.shoptitan.com" }: BrowserFrameProps) {
    return (
        <div className={cn("rounded-xl overflow-hidden border border-structural-border dark:border-gray-800 bg-surface dark:bg-gray-900 shadow-2xl", className)}>
            {/* Frame Header */}
            <div className="flex items-center gap-4 px-4 py-3 border-b border-structural-border dark:border-gray-800 bg-background-light dark:bg-gray-900/50">
                {/* Signal bars — unique production-themed window control replacement */}
                <div className="flex items-end gap-[3px]">
                    <div className="w-[3px] h-[8px] rounded-full bg-gray-300 dark:bg-gray-600" />
                    <div className="w-[3px] h-[11px] rounded-full bg-gray-300 dark:bg-gray-600" />
                    <div className="w-[3px] h-[14px] rounded-full bg-gray-300 dark:bg-gray-600" />
                </div>
                <div className="flex-1 flex justify-center px-4">
                    <div className="w-full max-w-sm bg-background-light dark:bg-black/20 rounded-md py-1 px-3 text-center text-xs text-secondary-text font-medium flex items-center justify-center gap-2">
                        <svg className="w-2.5 h-2.5 flex-shrink-0" viewBox="0 0 10 12" fill="none" aria-hidden="true">
                            <rect x="1" y="5" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M3 5V3.5a2 2 0 0 1 4 0V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        {url}
                    </div>
                </div>
                <div className="w-14" />
            </div>
            {/* Content */}
            <div className="relative">
                {children}
            </div>
        </div>
    );
}
