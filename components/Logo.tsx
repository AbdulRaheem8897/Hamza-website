import Image from "next/image";

// The brand logo (crest + SH-ROYALS wordmark) on its own white badge so it
// reads cleanly over the site's dark wine sections.
export function Logo({
  className = "",
  priority = false,
  rounded = "rounded-xl",
}: {
  className?: string;
  priority?: boolean;
  rounded?: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center overflow-hidden bg-white p-1.5 ring-1 ring-[var(--color-gold)]/40 ${rounded} ${className}`}
    >
      <Image
        src="/brand/logo.jpeg"
        alt="SH ROYALS HANDICRAFT"
        width={1024}
        height={856}
        priority={priority}
        className="h-full w-auto object-contain"
      />
    </span>
  );
}
