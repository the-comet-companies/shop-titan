// Deprecated in v3 design system — kept as a no-op shim so any
// stray imports keep compiling. Use the chip pattern via SectionHeading
// (eyebrow prop) instead.
type Props = {
  children: string;
};

export function MonoLabel({ children }: Props) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/65">
      {children.replace(/^\/\/\s*/, "")}
    </span>
  );
}
