import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  index?: string;
  tone?: "default" | "primary";
};

export function StatusChip({ children, index, tone = "default" }: Props) {
  const toneClass =
    tone === "primary"
      ? "text-primary"
      : "text-secondary-text dark:text-gray-400";
  const indexClass =
    tone === "primary"
      ? "text-primary"
      : "text-charcoal dark:text-white";
  return (
    <span
      className={`inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.18em] ${toneClass}`}
    >
      {index ? (
        <>
          <span className={indexClass}>{index}</span>
          <span className="h-px w-6 bg-structural-border dark:bg-gray-700" />
        </>
      ) : null}
      <span>{children}</span>
    </span>
  );
}
