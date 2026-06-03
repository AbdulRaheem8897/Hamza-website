// Decorative SH-ROYALS crest rendered as inline SVG so it inherits `currentColor`.
export function Crest({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 130"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      {/* Crown */}
      <path
        d="M44 22l7 9 9-12 9 12 7-9-3 16H47l-3-16Z"
        fill="currentColor"
        stroke="none"
      />
      <circle cx="60" cy="14" r="2.4" fill="currentColor" stroke="none" />
      {/* Shield */}
      <path
        d="M34 40h52v34c0 18-15 25-26 30-11-5-26-12-26-30V40Z"
        strokeWidth="2.2"
      />
      {/* Inner hairline */}
      <path
        d="M40 46h40v27c0 14-12 20-20 24-8-4-20-10-20-24V46Z"
        strokeWidth="1"
        opacity="0.55"
      />
      {/* Flourishes */}
      <path d="M30 44c-7 4-9 12-5 18" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M90 44c7 4 9 12 5 18" strokeWidth="1.6" strokeLinecap="round" />
      {/* Monogram */}
      <text
        x="60"
        y="78"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="700"
        fontSize="30"
        fill="currentColor"
        stroke="none"
      >
        SH
      </text>
    </svg>
  );
}
