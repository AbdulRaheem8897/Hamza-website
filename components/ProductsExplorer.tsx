"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products, categories, type Category } from "@/data/products";
import { ProductCard } from "./ProductCard";

type Filter = "All" | Category;
type Sort = "featured" | "low" | "high";

const filters: Filter[] = ["All", ...categories];

export function ProductsExplorer({ initialCategory = "All" }: { initialCategory?: Filter }) {
  const [active, setActive] = useState<Filter>(initialCategory);
  const [sort, setSort] = useState<Sort>("featured");

  const list = useMemo(() => {
    let l = active === "All" ? products : products.filter((p) => p.category === active);
    l = [...l];
    if (sort === "low") l.sort((a, b) => a.price - b.price);
    else if (sort === "high") l.sort((a, b) => b.price - a.price);
    else l.sort((a, b) => Number(b.featured) - Number(a.featured));
    return l;
  }, [active, sort]);

  return (
    <div>
      <div className="mb-9 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* category pills */}
        <div className="flex flex-wrap gap-2.5">
          {filters.map((f) => {
            const count =
              f === "All" ? products.length : products.filter((p) => p.category === f).length;
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.14em] transition-all duration-300 ${
                  isActive
                    ? "border-[var(--color-wine)] bg-[var(--color-wine)] text-[var(--color-ivory)]"
                    : "border-[var(--color-gold)]/40 bg-white text-[var(--color-ink-soft)] hover:border-[var(--color-wine)] hover:text-[var(--color-wine)]"
                }`}
              >
                {f}
                <span className={`ml-1.5 ${isActive ? "text-[var(--color-gold-soft)]" : "text-[var(--color-muted)]"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* sort */}
        <div className="flex items-center gap-3">
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Sort
          </span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-full border border-[var(--color-gold)]/40 bg-white px-4 py-2 text-xs uppercase tracking-[0.1em] text-[var(--color-ink-soft)] outline-none focus:border-[var(--color-wine)]"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div
              key={p.asin}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mt-10 text-center text-sm text-[var(--color-muted)]">
        Showing <span className="text-[var(--color-wine)]">{list.length}</span> handcrafted{" "}
        {list.length === 1 ? "piece" : "pieces"}
      </p>
    </div>
  );
}
