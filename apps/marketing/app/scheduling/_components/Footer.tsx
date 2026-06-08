import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-structural-border dark:border-gray-800">
      <div className="container-app flex flex-wrap items-center justify-between gap-4 py-10">
        <Logo />
        <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-secondary-text dark:text-gray-500">
          © {year} Shop Titan
        </span>
      </div>
    </footer>
  );
}
