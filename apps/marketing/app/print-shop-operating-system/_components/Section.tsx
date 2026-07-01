import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "stone";
};

export function Section({ children, className = "", id, tone = "default" }: Props) {
  const bg =
    tone === "stone"
      ? "bg-gray-50 dark:bg-gray-900/40"
      : "bg-background-light dark:bg-background-dark";
  return (
    <section
      id={id}
      className={`relative border-t border-structural-border dark:border-gray-800 ${bg} ${className}`}
    >
      <div className="container-app py-24 md:py-32">{children}</div>
    </section>
  );
}
