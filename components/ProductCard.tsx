import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { inr } from "@/lib/site";
import { BuyOnAmazon, WhatsAppEnquiry } from "./CtaButtons";

export function ProductCard({ product }: { product: Product }) {
  const { asin, name, price, images, category, size, tag, badge } = product;
  return (
    <article className="lift group relative flex flex-col overflow-hidden rounded-[14px] border border-[var(--color-gold)]/25 bg-white shadow-[0_18px_40px_-28px_rgba(28,23,20,0.45)]">
      {badge && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-[var(--color-wine)] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-ivory)]">
          {badge}
        </span>
      )}

      <Link
        href={`/products/${asin}`}
        className="relative block aspect-square overflow-hidden bg-[var(--color-cream)]"
      >
        <Image
          src={images[0]}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        {images[1] && (
          <Image
            src={images[1]}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        )}
        <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[var(--color-gold)]/10" />
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-1.5 flex items-center justify-between gap-2">
          <span className="text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-gold-deep)]">
            {category}
          </span>
          <span className="rounded-full bg-[var(--color-cream)] px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.12em] text-[var(--color-muted)]">
            {size}
          </span>
        </div>

        <Link href={`/products/${asin}`}>
          <h3 className="font-display text-lg leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-wine)]">
            {name}
          </h3>
        </Link>

        <p className="mt-1 text-xs italic text-[var(--color-muted)]">{tag}</p>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-display text-2xl text-[var(--color-wine)]">
            {inr(price)}
          </span>
          <span className="text-[0.65rem] uppercase tracking-wide text-[var(--color-muted)]">
            incl. taxes
          </span>
        </div>

        <div className="mt-4 flex gap-2 pt-1">
          <BuyOnAmazon href={product.amazonUrl} className="flex-1 !px-3 !text-xs" />
          <WhatsAppEnquiry
            name={name}
            price={price}
            className="!px-3 !text-xs"
          />
        </div>
      </div>
    </article>
  );
}
