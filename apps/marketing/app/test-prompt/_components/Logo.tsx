import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 focus-primary rounded-sm"
      aria-label="Shop Titan home"
    >
      <span className="relative inline-flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-0 border border-charcoal dark:border-white transition-colors group-hover:border-primary" />
        <span className="absolute right-0 bottom-0 h-2.5 w-2.5 border-l border-t border-charcoal dark:border-white transition-colors group-hover:border-primary" />
      </span>
      <span className="font-display font-semibold tracking-tight text-charcoal dark:text-white text-[15px]">
        Shop&nbsp;Titan
      </span>
    </Link>
  );
}
