import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  /**
   * @deprecated v5 dropped numbered section indices.
   * Prop kept for backward compatibility but no longer rendered.
   */
  index?: string;
  headline: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  headline,
  intro,
  align = "left",
}: Props) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <Reveal>
          <span className="inline-block text-[11px] font-mono uppercase tracking-[0.18em] text-secondary-text dark:text-gray-400">
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="font-display font-bold tracking-tight leading-tight text-balance text-responsive-3xl text-charcoal dark:text-white">
          {headline}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.1}>
          <p className="text-responsive-base leading-relaxed text-secondary-text dark:text-gray-400 max-w-2xl text-pretty">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
