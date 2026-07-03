import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 focus-primary rounded-sm"
      aria-label="Shop Titan home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/shop-titan-mark.png"
        alt=""
        className="h-8 w-8 md:h-9 md:w-9 dark:hidden group-hover:opacity-80 transition-opacity"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/shop-titan-mark-white.png"
        alt=""
        className="hidden h-8 w-8 md:h-9 md:w-9 dark:block group-hover:opacity-80 transition-opacity"
      />
      <span className="text-xl md:text-2xl lg:text-3xl font-black tracking-tighter text-charcoal dark:text-white group-hover:opacity-80 transition-opacity">
        Shop <span className="text-primary">Titan</span>
      </span>
    </Link>
  );
}
