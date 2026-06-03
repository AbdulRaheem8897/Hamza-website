import type { Metadata } from "next";
import { ProductsExplorer } from "@/components/ProductsExplorer";
import { categories, type Category } from "@/data/products";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "The Collection",
  description:
    "Browse handcrafted Dhal-Talwar sword & shield wall art, flower vases, statues, wall art and furniture from SH ROYALS HANDICRAFT.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat } = await searchParams;
  const initial =
    cat && (categories as string[]).includes(cat) ? (cat as Category) : "All";

  return (
    <>
      <PageHeader
        eyebrow="The Collection"
        title="Handcrafted Treasures"
        subtitle="Every piece shaped, finished and inspected by hand in Hyderabad."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-14 sm:px-8">
        <ProductsExplorer initialCategory={initial} />
      </section>

      <div className="rule-diamond pb-20">
        <span className="block h-2 w-2 rotate-45 bg-[var(--color-gold)]" />
      </div>
    </>
  );
}
