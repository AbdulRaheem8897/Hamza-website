import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Crest } from "@/components/Crest";
import { ArrowIcon, HandIcon, ShieldCheck, SparkIcon } from "@/components/icons";
import { products } from "@/data/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Heritage",
  description:
    "The story of SH ROYALS HANDICRAFT — a Hyderabad-based handicraft house crafting heritage metal decor, sword & shield wall art, vases and statues.",
};

const values = [
  {
    icon: HandIcon,
    title: "Handcrafted",
    body: "Every piece is shaped, cast and finished by skilled artisans — never mass-produced.",
  },
  {
    icon: SparkIcon,
    title: "Heritage Design",
    body: "Royal motifs — lions, crowns, peacocks and warrior arms — reimagined for modern homes.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    body: "A GST-registered proprietorship with quality inspected on every order.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Heritage"
        title="The SH ROYALS Story"
        subtitle="Craftsmanship, royalty and the warmth of the handmade — from Hyderabad to your home."
      />

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
        <Reveal>
          <p className="font-serif-elegant text-2xl leading-relaxed text-[var(--color-ink-soft)] sm:text-3xl">
            “We craft heirlooms — pieces that carry the dignity of tradition and the
            soul of the artisan who made them.”
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[var(--color-gold-deep)]">
            {site.proprietor} · Founder & Proprietor
          </p>
        </Reveal>
      </section>

      {/* Story + image */}
      <section className="bg-[var(--color-cream)] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-gold)]/30 shadow-[0_30px_70px_-40px_rgba(28,23,20,0.6)]">
              <Image
                src="/products/B0GHFH7KK8-1.jpg"
                alt="Handcrafted peacock vase"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Rooted in craft</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Born in the lanes of Hyderabad
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--color-ink-soft)]">
              <p>
                {site.brandFull} began with a simple belief — that the metalcraft
                traditions of our region deserve a place in the modern home. What started
                as a passion for heritage decor has grown into a curated house of
                handcrafted showpieces.
              </p>
              <p>
                Our signature Dhal–Talwar sword and shield wall art celebrates the valour
                of warrior heritage, while our peacock vases, Vastu elephant statues and
                Shivaji Maharaj wall art bring grace and pride to living rooms across India.
              </p>
              <p>
                Each design is made to last — and made to be gifted, treasured and passed on.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <Reveal className="text-center">
          <p className="eyebrow">What we stand for</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Our Promise</h2>
          <div className="rule-diamond mt-5">
            <Crest className="h-5 w-5" />
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="lift h-full rounded-2xl border border-[var(--color-gold)]/25 bg-white p-7 text-center shadow-[0_18px_40px_-30px_rgba(28,23,20,0.4)]">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-wine)]/8 text-[var(--color-wine)]">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Business details */}
      <section className="bg-[var(--color-wine-dark)] py-16 text-[var(--color-ivory)]">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 sm:grid-cols-2 sm:px-8">
          <Reveal>
            <h3 className="font-display text-2xl text-[var(--color-gold-soft)]">
              Registered Business
            </h3>
            <dl className="mt-5 space-y-3 text-sm">
              {[
                ["Legal Name", site.proprietor],
                ["Trade Name", site.brandFull],
                ["Constitution", "Proprietorship"],
                ["GSTIN", site.gstin],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-[var(--color-gold)]/15 pb-3">
                  <dt className="text-[var(--color-ivory)]/55 uppercase tracking-[0.12em] text-xs">{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="font-display text-2xl text-[var(--color-gold-soft)]">
              Principal Place of Business
            </h3>
            <address className="mt-5 not-italic text-sm leading-relaxed text-[var(--color-ivory)]/80">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city}, {site.address.state} — {site.address.pin}
              <br />
              {site.address.country}
            </address>
            <Link
              href="/products"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-wine-dark)] transition-colors hover:bg-[var(--color-gold-soft)]"
            >
              Explore {products.length} pieces
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
