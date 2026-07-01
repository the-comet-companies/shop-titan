"use client";

import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "glass-nav backdrop-blur-xl"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-app flex h-16 items-center justify-between">
        <Logo />
        <CTAButton label="Book a Demo" />
      </div>
    </header>
  );
}
