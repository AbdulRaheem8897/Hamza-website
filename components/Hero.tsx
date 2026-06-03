"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { ArrowIcon } from "./icons";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="grain relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[var(--color-wine-dark)] text-[var(--color-ivory)]">
      {/* radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,162,75,0.18),_transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease }}
          className="mb-8 flex justify-center"
        >
          <Logo
            priority
            rounded="rounded-2xl"
            className="h-28 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] sm:h-32"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="eyebrow !text-[var(--color-gold-soft)]"
        >
          Handcrafted in Hyderabad · Est. 2025
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease }}
          className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl"
        >
          Royal Heritage,
          <br />
          <span className="text-gilt italic">Cast in Metal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease }}
          className="mx-auto mt-6 max-w-xl font-serif-elegant text-lg leading-relaxed text-[var(--color-ivory)]/80 sm:text-xl"
        >
          Dhal–Talwar sword &amp; shield wall art, designer flower vases, statues
          and heritage showpieces — each piece handcrafted by{" "}
          {site.brandFull}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.38, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/products"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-wine-dark)] transition-all duration-300 hover:bg-[var(--color-gold-soft)] sm:w-auto"
          >
            Explore the Collection
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href={site.amazonStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-gold)]/60 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-ivory)] transition-colors duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] sm:w-auto"
          >
            Shop on Amazon
          </a>
        </motion.div>
      </div>

      {/* bottom fade into page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-ivory)] to-transparent" />
    </section>
  );
}
