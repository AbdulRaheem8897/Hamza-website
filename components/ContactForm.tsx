"use client";

import { useState } from "react";
import { whatsappLink, site } from "@/lib/site";
import { WhatsAppIcon, MailIcon } from "./icons";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const composed = `Hello SH ROYALS,%0A%0AName: ${name || "—"}%0APhone: ${
    phone || "—"
  }%0A%0A${message || "I'd like to know more about your handicrafts."}`;

  const waHref = whatsappLink(decodeURIComponent(composed));
  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Enquiry from ${name || "website"}`
  )}&body=${composed}`;

  const field =
    "w-full rounded-xl border border-[var(--color-gold)]/35 bg-white px-4 py-3 text-base text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-wine)]";

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waHref, "_blank", "noopener,noreferrer");
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
            Your Name
          </label>
          <input
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Aarav Sharma"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
            Phone / WhatsApp
          </label>
          <input
            className={field}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. +91 9XXXXXXXXX"
            inputMode="tel"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
          Message
        </label>
        <textarea
          className={`${field} min-h-32 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us which piece you're interested in, quantities, or any custom request…"
        />
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-wine)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-ivory)] transition-colors hover:bg-[var(--color-wine-deep)]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Send on WhatsApp
        </button>
        <a
          href={mailHref}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--color-gold-deep)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-wine)] transition-colors hover:bg-[var(--color-wine)] hover:text-[var(--color-ivory)]"
        >
          <MailIcon className="h-4 w-4" />
          Email Instead
        </a>
      </div>
      <p className="pt-1 text-xs text-[var(--color-muted)]">
        Your details open a pre-filled message — no data is stored on this site.
      </p>
    </form>
  );
}
