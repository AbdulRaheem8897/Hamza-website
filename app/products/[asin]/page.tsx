import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductCard } from "@/components/ProductCard";
import { BuyOnAmazon, WhatsAppEnquiry } from "@/components/CtaButtons";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon, ShieldCheck, HandIcon, TruckIcon } from "@/components/icons";
import { getProduct, products } from "@/data/products";
import { inr, site } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ asin: p.asin }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ asin: string }>;
}): Promise<Metadata> {
  const { asin } = await params;
  const product = getProduct(asin);
  if (!product) return { title: "Not found" };
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} · ${site.brand}`,
      description: product.description,
      images: product.images[0] ? [product.images[0]] : [],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ asin: string }>;
}) {
  const { asin } = await params;
  const product = getProduct(asin);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.asin !== product.asin)
    .slice(0, 4);

  const specs = [
    { label: "Category", value: product.category },
    { label: "Size", value: product.size },
    { label: "Material", value: product.material },
    { label: "Style", value: product.tag },
  ];

  const assurances = [
    { icon: HandIcon, text: "Handcrafted & hand-finished" },
    { icon: ShieldCheck, text: "GST-registered seller" },
    { icon: TruckIcon, text: "Secure delivery via Amazon" },
  ];

  return (
    <article className="pt-24">
      {/* breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8">
        <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-wine)]">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[var(--color-wine)]">Collection</Link>
          <span>/</span>
          <Link
            href={`/products?cat=${encodeURIComponent(product.category)}`}
            className="hover:text-[var(--color-wine)]"
          >
            {product.category}
          </Link>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <ProductGallery images={product.images} name={product.name} />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col">
          {product.badge && (
            <span className="mb-3 w-fit rounded-full bg-[var(--color-wine)] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-ivory)]">
              {product.badge}
            </span>
          )}
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-2 font-display text-3xl leading-tight sm:text-4xl">
            {product.name}
          </h1>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-4xl text-[var(--color-wine)]">
              {inr(product.price)}
            </span>
            <span className="text-xs uppercase tracking-wide text-[var(--color-muted)]">
              inclusive of all taxes
            </span>
          </div>

          <div className="rule-diamond my-7 justify-start [&::before]:hidden" />

          <p className="text-base leading-relaxed text-[var(--color-ink-soft)]">
            {product.description}
          </p>

          {/* specs */}
          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/20">
            {specs.map((s) => (
              <div key={s.label} className="bg-white px-4 py-3.5">
                <dt className="text-[0.6rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {s.label}
                </dt>
                <dd className="mt-1 font-display text-base text-[var(--color-ink)]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BuyOnAmazon href={product.amazonUrl} full className="sm:flex-1" />
            <WhatsAppEnquiry
              name={product.name}
              price={product.price}
              full
              className="sm:flex-1"
            />
          </div>

          {/* assurances */}
          <ul className="mt-7 space-y-2.5">
            {assurances.map((a) => (
              <li key={a.text} className="flex items-center gap-3 text-sm text-[var(--color-ink-soft)]">
                <a.icon className="h-4 w-4 text-[var(--color-gold-deep)]" />
                {a.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* related */}
      {related.length > 0 && (
        <section className="bg-[var(--color-cream)] py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="flex items-end justify-between">
              <h2 className="font-display text-3xl sm:text-4xl">You may also like</h2>
              <Link
                href={`/products?cat=${encodeURIComponent(product.category)}`}
                className="link-underline hidden items-center gap-2 text-sm uppercase tracking-[0.14em] text-[var(--color-wine)] sm:inline-flex"
              >
                More {product.category}
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.asin} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
