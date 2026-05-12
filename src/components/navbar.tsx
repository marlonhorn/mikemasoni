"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-white/10 bg-black/70 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          <a href="#home" className="text-xs tracking-[0.35em] text-white uppercase">
            Mike Masoni
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.3em] text-white/70 uppercase transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className="text-xs tracking-[0.3em] text-white uppercase md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-black/95 px-6 py-10 transition-all duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mb-14 flex items-center justify-between">
          <span className="text-xs tracking-[0.35em] text-white uppercase">Mike Masoni</span>
          <button
            className="text-xs tracking-[0.3em] text-white uppercase"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            Close
          </button>
        </div>
        <nav className="flex flex-col gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-light tracking-wide text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
