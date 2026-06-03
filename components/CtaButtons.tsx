import { AmazonIcon, WhatsAppIcon } from "./icons";
import { productEnquiry } from "@/lib/site";

export function BuyOnAmazon({
  href,
  className = "",
  full = false,
}: {
  href: string;
  className?: string;
  full?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-wine)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-ivory)] shadow-[0_8px_20px_-8px_rgba(123,30,30,0.7)] transition-all duration-300 hover:bg-[var(--color-wine-deep)] hover:shadow-[0_12px_26px_-8px_rgba(123,30,30,0.85)] ${
        full ? "w-full" : ""
      } ${className}`}
    >
      <AmazonIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
      Buy on Amazon
    </a>
  );
}

export function WhatsAppEnquiry({
  name,
  price,
  className = "",
  full = false,
}: {
  name: string;
  price: number;
  className?: string;
  full?: boolean;
}) {
  return (
    <a
      href={productEnquiry(name, price)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-gold-deep)] bg-transparent px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-wine)] transition-all duration-300 hover:border-[var(--color-wine)] hover:bg-[var(--color-wine)] hover:text-[var(--color-ivory)] ${
        full ? "w-full" : ""
      } ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      Enquire
    </a>
  );
}
