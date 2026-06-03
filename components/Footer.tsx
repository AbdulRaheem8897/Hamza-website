import Link from "next/link";
import { Logo } from "./Logo";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon, MailIcon, PinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--color-wine-dark)] text-[var(--color-ivory)]">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 md:grid-cols-12">
        {/* brand */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <Logo rounded="rounded-xl" className="h-16" />
            <div>
              <p className="font-display text-2xl font-bold">{site.brand}</p>
              <p className="text-[0.6rem] uppercase tracking-[0.32em] text-[var(--color-gold-soft)]">
                Handicraft
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--color-ivory)]/70">
            {site.description}
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[var(--color-gold-soft)]">
            GSTIN · {site.gstin}
          </p>
        </div>

        {/* explore */}
        <div className="md:col-span-3">
          <h4 className="eyebrow !text-[var(--color-gold-soft)]">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm text-[var(--color-ivory)]/80">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Collection" },
              { href: "/about", label: "Our Heritage" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline hover:text-[var(--color-gold)]">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.amazonStore}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-[var(--color-gold)]"
              >
                Amazon Store
              </a>
            </li>
          </ul>
        </div>

        {/* contact */}
        <div className="md:col-span-4">
          <h4 className="eyebrow !text-[var(--color-gold-soft)]">Visit & Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-[var(--color-ivory)]/80">
            <li className="flex gap-3">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" />
              <span>
                {site.address.line1}, {site.address.line2}
                <br />
                {site.address.city}, {site.address.state} {site.address.pin}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-[var(--color-gold)]" />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)]">
                {site.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon className="h-4 w-4 shrink-0 text-[var(--color-gold)]" />
              <a href={`mailto:${site.email}`} className="hover:text-[var(--color-gold)]">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-gold)]/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-center text-xs text-[var(--color-ivory)]/55 sm:flex-row sm:px-8 sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.brandFull}. Proprietor: {site.proprietor}.
          </p>
          <p>Handcrafted in Hyderabad, India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
