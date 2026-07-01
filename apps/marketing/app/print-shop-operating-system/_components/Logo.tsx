import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center focus-primary rounded-sm"
      aria-label="Shop Titan home"
    >
      <span className="text-xl md:text-2xl lg:text-3xl font-black tracking-tighter text-charcoal dark:text-white group-hover:opacity-80 transition-opacity">
        Shop <span className="text-primary">Titan</span>
      </span>
    </Link>
  );
}
