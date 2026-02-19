import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface GridPatternProps {
    width?: number;
    height?: number;
    className?: string;
    squaresClassName?: string;
}

export default function InteractiveGridPattern({
    width = 80,
    height = 80,
    className,
    squaresClassName,
}: GridPatternProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [gridDimensions, setGridDimensions] = useState({ rows: 0, cols: 0 });

    useEffect(() => {
        const calculateGrid = () => {
            if (!containerRef.current) return;
            const { offsetWidth, offsetHeight } = containerRef.current;
            setGridDimensions({
                cols: Math.ceil(offsetWidth / width),
                rows: Math.ceil(offsetHeight / height),
            });
        };

        calculateGrid();

        let resizeTimer: ReturnType<typeof setTimeout>;
        const debouncedCalculate = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(calculateGrid, 150);
        };

        window.addEventListener('resize', debouncedCalculate);
        return () => {
            clearTimeout(resizeTimer);
            window.removeEventListener('resize', debouncedCalculate);
        };
    }, [width, height]);

    return (
        <div
            ref={containerRef}
            className={cn("absolute inset-0 -z-1 overflow-hidden", className)}
        >
            <div
                className="grid h-full w-full"
                style={{
                    gridTemplateColumns: `repeat(${gridDimensions.cols}, ${width}px)`,
                    gridTemplateRows: `repeat(${gridDimensions.rows}, ${height}px)`,
                }}
            >
                {Array.from({ length: gridDimensions.rows * gridDimensions.cols }).map((_, i) => (
                    <GridSquare key={i} className={squaresClassName} />
                ))}
            </div>
        </div>
    );
}

function GridSquare({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "h-full w-full border-[0.5px] border-transparent",
                className
            )}
        />
    );
}
