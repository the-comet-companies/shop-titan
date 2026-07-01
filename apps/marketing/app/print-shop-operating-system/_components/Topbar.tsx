import { CTAButton } from "./CTAButton";
import { Logo } from "./Logo";

export function Topbar() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Logo />
        <CTAButton label="Book a Demo" />
      </div>
    </header>
  );
}
