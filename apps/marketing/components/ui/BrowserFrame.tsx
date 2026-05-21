import { cn } from "@/lib/utils";

interface BrowserFrameProps {
    children: React.ReactNode;
    className?: string;
    url?: string;
}

export default function BrowserFrame({ children, className, url = "app.shoptitan.com" }: BrowserFrameProps) {
    return (
        <div
            className={cn(
                "rounded-[8px] overflow-hidden border border-line dark:border-gray-800 bg-white dark:bg-gray-900 shadow-[0_1px_0_rgba(0,0,0,0.02),0_20px_60px_-30px_rgba(0,0,0,0.08)]",
                className
            )}
        >
            {/* Minimal architectural chrome */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-line dark:border-gray-800 bg-ivory/60 dark:bg-gray-950/60">
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-line" />
                    <span className="w-1.5 h-1.5 rounded-full bg-line" />
                    <span className="w-1.5 h-1.5 rounded-full bg-line" />
                </div>
                <div className="flex items-center gap-2 text-xs font-light text-graphite truncate max-w-[70%]">
                    <span
                        className="material-symbols-outlined text-graphite text-xs flex-shrink-0"
                        style={{ fontVariationSettings: "'wght' 250" }}
                    >
                        lock
                    </span>
                    <span className="truncate">{url}</span>
                </div>
                <div className="w-12" />
            </div>
            <div className="relative">{children}</div>
        </div>
    );
}
