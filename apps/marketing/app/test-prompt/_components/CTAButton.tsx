import Link from "next/link";
import { Icon } from "./Icon";

export type CTALabel =
  | "Book a Demo"
  | "See Shop Titan in Action"
  | "Get the Production System"
  | "Request a Walkthrough"
  | "Stop Chasing Updates"
  | "Stop Being the System"
  | "Get Clear Daily View"
  | "Create a Smoother Workflow"
  | "Run Production With Confidence"
  | "Take Control of Production";

type Props = {
  label: CTALabel;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  withArrow?: boolean;
};

export function CTAButton({
  label,
  variant = "primary",
  size = "md",
  withArrow = true,
}: Props) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-primary whitespace-nowrap";

  const sizing =
    size === "lg" ? "h-12 px-7 text-[15px]" : "h-11 px-6 text-[14px]";

  const variants = {
    primary:
      "bg-primary text-white shadow-lg shadow-primary/20 hover:brightness-110 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/30",
    secondary:
      "bg-white/60 dark:bg-white/5 border border-charcoal/15 dark:border-white/10 backdrop-blur-md text-charcoal dark:text-white hover:bg-white/85 dark:hover:bg-white/10 hover:scale-[1.03]",
  } as const;

  return (
    <Link
      href="/reach-out"
      className={`${base} ${sizing} ${variants[variant]}`}
      data-cta={label}
    >
      <span>{label}</span>
      {withArrow && (
        <Icon
          name="arrow_forward"
          size={16}
          weight={300}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}
