"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { MAIN_NAV_LINKS } from "@/data/site-navigation";

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = MAIN_NAV_LINKS;

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const linkClass = (path: string) => {
    const active = isActive(path);
    return [
      "relative flex h-16 shrink-0 items-center justify-center whitespace-nowrap 2xl:h-24",
      "px-3 sm:px-3.5 2xl:px-4",
      "text-[14px] font-semibold transition-colors duration-200 2xl:text-[15px]",
      active
        ? "text-[#1e3a5f] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-[#c92a2a]"
        : "text-[#1e3a5f]/65 hover:text-[#1e3a5f]",
    ].join(" ");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#1e3a5f]/10 bg-white/95 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex min-h-[5.25rem] items-center justify-between gap-4 sm:gap-6 2xl:min-h-24">
          <Link
            href="/"
            className="relative flex max-w-[72vw] shrink-0 items-center py-0.5 sm:max-w-none 2xl:max-w-[17.5rem]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/images/Mindfulcrum_Banner.png"
              alt="Mindfulcrum — Workplace Psychology"
              width={400}
              height={100}
              className="h-12 w-auto max-w-full object-contain object-left sm:h-14 md:h-16 2xl:h-[5.25rem]"
              priority
              sizes="(max-width: 640px) 70vw, 400px"
            />
          </Link>

          <div className="hidden min-h-20 2xl:flex 2xl:min-w-0 2xl:flex-1 2xl:items-stretch 2xl:justify-center 2xl:gap-0">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} className={linkClass(link.path)}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden 2xl:flex 2xl:shrink-0 2xl:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm border border-[#c92a2a] bg-[#c92a2a] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:border-[#b02525] hover:bg-[#b02525] 2xl:px-5 2xl:text-[15px]"
            >
              Request Pricing
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#1e3a5f]/15 text-[#1e3a5f] transition-colors hover:bg-[#1e3a5f]/5 2xl:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#1e3a5f]/10 py-2 2xl:hidden">
            <div className="flex flex-col divide-y divide-[#1e3a5f]/8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-1 py-4 text-base font-semibold transition-colors sm:px-2 ${
                    isActive(link.path)
                      ? "text-[#c92a2a]"
                      : "text-[#1e3a5f]/80 hover:text-[#1e3a5f]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-5 flex w-full items-center justify-center rounded-sm border border-[#c92a2a] bg-[#c92a2a] py-3.5 text-base font-semibold text-white hover:bg-[#b02525]"
            >
              Request Pricing
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
