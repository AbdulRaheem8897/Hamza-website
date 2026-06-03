import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { ArrowIcon, HandIcon, ShieldCheck, SparkIcon, TruckIcon } from "@/components/icons";
import { Crest } from "@/components/Crest";
import { featuredProducts, products, categories } from "@/data/products";
import { site } from "@/lib/site";

const categoryArt: Record<string, string> = {
  "Swords & Shields": "/products/B0GKPCGHWM-1.jpg",
  "Flower Vases": "/products/B0GHFH7KK8-1.jpg",
  Statues: "/products/B0H2B1X1JS-1.jpg",
  "Wall Art": "/products/B0GL22JLH4-1.jpg",
  Furniture: "/products/B0GZDKLXM6-2.jpg",
};

const trust = [
  { icon: HandIcon, title: "100% Handcrafted", sub: "Made by skilled artisans" },
  { icon: ShieldCheck, title: "GST Registered", sub: site.gstin },
  { icon: SparkIcon, title: "Heritage Designs", sub: "Timeless royal motifs" },
  { icon: TruckIcon, title: "Pan-India Delivery", sub: "Shipped via Amazon" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust strip */}
      <section className="border-y border-[var(--color-gold)]/20 bg-[var(--color-cream)]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-2 py-2 sm:px-6 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.title} className="flex items-center gap-3 px-3 py-5 sm:px-5">
              <t.icon className="h-7 w-7 shrink-0 text-[var(--color-wine)]" />
              <div>
                <p className="font-display text-base text-[var(--color-ink)]">{t.title}</p>
                <p className="text-[0.7rem] uppercase tracking-wide text-[var(--color-muted)]">
                  {t.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal className="text-center">
          <p className="eyebrow">Browse</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Shop by Collection</h2>
          <div className="rule-diamond mt-5">
            <Crest className="h-5 w-5" />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const count = products.filter((p) => p.category === cat).length;
            const featuredSpan = i === 0 ? "lg:col-span-2" : "";
            return (
              <Reveal key={cat} delay={i * 0.06} className={featuredSpan}>
                <Link
                  href={`/products?cat=${encodeURIComponent(cat)}`}
                  className="group relative block h-56 overflow-hidden rounded-2xl border border-[var(--color-gold)]/25 sm:h-64 lg:h-72"
                >
                  <Image
                    src={categoryArt[cat]}
                    alt={cat}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wine-dark)]/85 via-[var(--color-wine-dark)]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
                      {count} {count === 1 ? "piece" : "pieces"}
                    </p>
                    <h3 className="mt-1 flex items-center gap-2 font-display text-2xl text-[var(--color-ivory)]">
                      {cat}
                      <ArrowIcon className="h-5 w-5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </h3>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-[var(--color-cream)] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Curated</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">Featured Pieces</h2>
            </div>
            <Link
              href="/products"
              className="link-underline inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-[var(--color-wine)]"
            >
              View all {products.length}
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {featuredProducts.slice(0, 4).map((p, i) => (
              <Reveal key={p.asin} delay={i * 0.06}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage story */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-gold)]/30 shadow-[0_30px_70px_-40px_rgba(28,23,20,0.6)]">
              <Image
                src="/products/B0H124DCKC-2.jpg"
                alt="Handcrafted Dhal Talwar sword and shield"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden rounded-xl bg-[var(--color-wine)] px-6 py-5 text-[var(--color-ivory)] shadow-xl sm:block">
              <p className="font-display text-3xl">{products.length}+</p>
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-gold-soft)]">
                Handcrafted designs
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow">Our Heritage</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Where craft meets <span className="italic text-[var(--color-wine)]">royalty</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-ink-soft)]">
              {site.brandFull} is a Hyderabad-based handicraft house dedicated to the
              age-old art of metal craftsmanship. From intricate Dhal–Talwar sword and
              shield wall art to graceful peacock vases and Vastu elephant statues, every
              piece is shaped, finished and inspected by hand.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-soft)]">
              We blend regal motifs with modern interiors — heirloom-worthy decor and
              gifting that carries the warmth of true craftsmanship into your home.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-wine)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-wine)] transition-colors duration-300 hover:bg-[var(--color-wine)] hover:text-[var(--color-ivory)]"
            >
              Read our story
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="grain relative overflow-hidden bg-[var(--color-wine-dark)] py-20 text-center text-[var(--color-ivory)] sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,75,0.15),_transparent_60%)]" />
        <Reveal className="relative z-10 mx-auto max-w-2xl px-6">
          <Crest className="mx-auto h-14 w-14 text-[var(--color-gold)]" />
          <h2 className="mt-6 font-display text-4xl text-[var(--color-ivory)] sm:text-5xl">
            Bring home a piece of heritage
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[var(--color-ivory)]/75">
            Explore the full collection or message us on WhatsApp for bulk orders,
            custom requests and gifting.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="w-full rounded-full bg-[var(--color-gold)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-wine-dark)] transition-colors hover:bg-[var(--color-gold-soft)] sm:w-auto"
            >
              View Collection
            </Link>
            <Link
              href="/contact"
              className="w-full rounded-full border border-[var(--color-gold)]/60 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-ivory)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
