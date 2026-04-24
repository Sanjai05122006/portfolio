"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const landingNavItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/stack", label: "Stack" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="relative z-40 border-b border-[var(--line)] bg-[var(--surface-soft)]/80 backdrop-blur-xl">
      <div className="flex h-[90px] w-full items-center justify-between px-6 md:px-10 xl:px-[56px]">
        <div className="flex items-center gap-[22px]">
          <Link
            href="/"
            className="text-[37px] font-semibold leading-none tracking-[-0.06em] text-[var(--foreground)]"
          >
            S
          </Link>
          <span className="text-[22px] font-medium tracking-[-0.04em] text-[var(--foreground)]">
            Sanjai M
          </span>
        </div>

        <nav className="hidden items-center gap-[40px] md:flex">
          {landingNavItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative pb-[30px] pt-[30px] text-[15px] font-medium tracking-[-0.03em] ${
                  active ? "text-[var(--foreground)]" : "text-[var(--muted)]"
                }`}
              >
                {item.label}
                {active ? (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[var(--foreground)]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-[14px] border border-[var(--line-strong)] bg-[var(--surface-soft)]/90 text-[var(--foreground)] shadow-[0_14px_28px_var(--shadow-soft)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_var(--shadow-medium)] md:hidden"
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`block h-[2px] w-5 rounded-full bg-current transition duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-current transition duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-current transition duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
          <Link
            href="mailto:sanjaimurugan08@gmail.com"
            className="group hidden h-[54px] items-center gap-3 rounded-[14px] bg-[linear-gradient(135deg,var(--cta-start)_0%,var(--cta-mid)_55%,var(--cta-end)_100%)] px-[27px] text-[15px] font-medium tracking-[-0.03em] text-white shadow-[0_18px_38px_var(--shadow-soft)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_46px_var(--shadow-medium)] md:inline-flex"
          >
            <span className="text-white">Let&apos;s Connect</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-[15px] w-[15px] shrink-0 text-white transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M9 7H17V15" />
            </svg>
          </Link>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-[var(--line)] bg-[var(--surface)]/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-5">
          {landingNavItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-2xl px-4 py-3 text-[16px] font-medium tracking-[-0.03em] transition duration-200 ${
                  active
                    ? "bg-[var(--surface-soft)] text-[var(--foreground)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="mailto:sanjaimurugan08@gmail.com"
            className="mt-4 inline-flex h-[54px] items-center justify-center gap-3 rounded-[16px] bg-[linear-gradient(135deg,var(--cta-start)_0%,var(--cta-mid)_55%,var(--cta-end)_100%)] px-6 text-[15px] font-medium tracking-[-0.03em] text-white shadow-[0_18px_38px_var(--shadow-soft)]"
          >
            <span className="text-white">Let&apos;s Connect</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-[15px] w-[15px] shrink-0 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M9 7H17V15" />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
