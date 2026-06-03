"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Collection" },
  { href: "/about", label: "Heritage" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-wine-dark)]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      {/* top gold hairline */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-80" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 text-[var(--color-ivory)]"
          aria-label={site.brandFull}
        >
          <Logo
            priority
            rounded="rounded-lg"
            className="h-11 transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-wide">
              {site.brand}
            </span>
            <span className="text-[0.58rem] uppercase tracking-[0.32em] text-[var(--color-gold-soft)]">
              Handicraft
            </span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`link-underline text-sm uppercase tracking-[0.18em] transition-colors ${
                isActive(n.href)
                  ? "text-[var(--color-gold)]"
                  : "text-[var(--color-ivory)]/85 hover:text-[var(--color-gold-soft)]"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={site.amazonStore}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--color-gold)] px-5 py-2 text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-[var(--color-wine-dark)]"
          >
            Shop on Amazon
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-[var(--color-gold)] transition-all duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-[var(--color-gold)] transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-[var(--color-gold)] transition-all duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* mobile drawer */}
      <div
        className={`md:hidden overflow-hidden bg-[var(--color-wine-dark)] transition-[max-height] duration-500 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-7 pt-2">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`border-b border-[var(--color-gold)]/15 py-3.5 text-base uppercase tracking-[0.2em] ${
                isActive(n.href)
                  ? "text-[var(--color-gold)]"
                  : "text-[var(--color-ivory)]/90"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={site.amazonStore}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 rounded-full bg-[var(--color-gold)] py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-wine-dark)]"
          >
            Shop on Amazon
          </a>
        </nav>
      </div>
    </header>
  );
}
