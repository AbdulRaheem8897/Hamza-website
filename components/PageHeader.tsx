import { Logo } from "./Logo";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="grain relative overflow-hidden bg-[var(--color-wine-dark)] pb-16 pt-32 text-center text-[var(--color-ivory)] sm:pb-20 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,162,75,0.16),_transparent_55%)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <Logo rounded="rounded-xl" className="mx-auto h-20" />
        <p className="eyebrow mt-5 !text-[var(--color-gold-soft)]">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl text-[var(--color-ivory)] sm:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-xl font-serif-elegant text-lg text-[var(--color-ivory)]/75">
            {subtitle}
          </p>
        )}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--color-ivory)] to-transparent" />
    </section>
  );
}
