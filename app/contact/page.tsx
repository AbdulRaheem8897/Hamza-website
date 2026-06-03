import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { PinIcon, WhatsAppIcon, MailIcon, ClockIcon } from "@/components/icons";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SH ROYALS HANDICRAFT, Hyderabad — WhatsApp, email or visit us. Bulk orders, gifting and custom requests welcome.",
};

const mapQuery = encodeURIComponent(
  `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.state} ${site.address.pin}`
);

export default function ContactPage() {
  const details = [
    {
      icon: PinIcon,
      label: "Visit Us",
      value: `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.state} — ${site.address.pin}`,
      href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: site.whatsappDisplay,
      href: whatsappLink("Hello SH ROYALS, I'd like to enquire about your products."),
    },
    {
      icon: MailIcon,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: ClockIcon,
      label: "Business Hours",
      value: site.hours,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Let's Talk"
        subtitle="For orders, bulk enquiries, gifting and custom requests — we'd love to hear from you."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* details */}
          <Reveal className="lg:col-span-2">
            <p className="eyebrow">Reach us</p>
            <h2 className="mt-3 font-display text-3xl">We're here to help</h2>
            <ul className="mt-8 space-y-5">
              {details.map((d) => {
                const inner = (
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-wine)]/8 text-[var(--color-wine)]">
                      <d.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-gold-deep)]">
                        {d.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                        {d.value}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <a
                        href={d.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-xl p-2 transition-colors hover:bg-[var(--color-cream)]"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="p-2">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-2xl border border-[var(--color-gold)]/30 bg-[var(--color-cream)] p-6 shadow-[0_22px_50px_-34px_rgba(28,23,20,0.5)] sm:p-8">
              <h2 className="font-display text-2xl">Send an Enquiry</h2>
              <p className="mt-1.5 text-sm text-[var(--color-muted)]">
                Fill in your details and we'll continue the chat on WhatsApp.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* map */}
      <section className="px-6 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-[var(--color-gold)]/30">
          <iframe
            title="SH ROYALS HANDICRAFT location"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
