import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  underline?: boolean;
  className?: string;
};

/**
 * Editorial emphasis: Crimson Pro italic, no color shift on the text itself.
 * Optional thin primary-blue underline rule for the heaviest solution-side beats.
 */
export function GradientText({ children, underline = false, className = "" }: Props) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="pain-em">{children}</span>
      {underline ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-1 left-0 right-0 h-px bg-primary/70"
        />
      ) : null}
    </span>
  );
}
