// Small inline icon set (no runtime icon dependency).
type P = { className?: string };

export const WhatsAppIcon = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M17.47 14.38c-.3-.15-1.74-.86-2-.95-.27-.1-.46-.15-.65.15-.2.3-.75.94-.92 1.13-.17.2-.34.22-.63.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.34.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.65-1.57-.9-2.15-.24-.57-.48-.5-.65-.5h-.56c-.2 0-.5.07-.77.36-.26.3-1 1-1 2.43s1.03 2.82 1.17 3.02c.15.2 2.03 3.1 4.92 4.35.69.3 1.22.47 1.64.6.69.22 1.31.19 1.81.12.55-.08 1.74-.71 1.98-1.4.25-.68.25-1.27.17-1.39-.07-.12-.27-.2-.56-.34zM12.04 21.5h-.01a9.5 9.5 0 0 1-4.84-1.33l-.35-.2-3.6.94.96-3.5-.23-.36a9.46 9.46 0 0 1-1.45-5.05c0-5.24 4.27-9.5 9.52-9.5 2.54 0 4.93.99 6.73 2.79a9.45 9.45 0 0 1 2.78 6.73c0 5.24-4.27 9.5-9.51 9.5zm8.1-17.6A11.4 11.4 0 0 0 12.04.5C5.74.5.6 5.64.6 11.95c0 2.1.55 4.16 1.6 5.97L.5 23.5l5.72-1.5a11.4 11.4 0 0 0 5.82 1.58h.01c6.3 0 11.43-5.14 11.44-11.45a11.36 11.36 0 0 0-3.35-8.13z" />
  </svg>
);

export const AmazonIcon = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M15.93 17.09c-2.13 1.57-5.2 2.4-7.85 2.4-3.71 0-7.06-1.37-9.58-3.66-.2-.18-.02-.42.22-.28 2.72 1.58 6.08 2.53 9.56 2.53 2.35 0 4.94-.49 7.32-1.5.36-.15.66.24.33.51z" transform="translate(2.5 1.5)"/>
    <path d="M16.8 16.1c-.27-.35-1.8-.17-2.5-.08-.2.02-.24-.16-.05-.3 1.22-.86 3.22-.61 3.46-.32.24.3-.06 2.3-1.2 3.26-.18.15-.35.07-.27-.12.26-.64.85-2.08.56-2.44z" transform="translate(2.5 1.5)"/>
    <path d="M14.35 2.9V1.96c0-.14.1-.24.24-.24h4.2c.14 0 .25.1.25.24v.8c0 .14-.12.31-.32.6l-2.18 3.1c.8-.02 1.66.1 2.4.51.16.1.2.23.22.37v1c0 .15-.16.32-.33.23-1.3-.68-3.02-.76-4.45.01-.16.08-.32-.08-.32-.22v-.95c0-.15 0-.42.16-.66l2.52-3.62h-2.2c-.13 0-.24-.1-.25-.23z" transform="translate(2.5 1.5)"/>
    <path d="M5.9 8.85H4.62a.24.24 0 0 1-.23-.22V2.0c0-.13.11-.23.25-.23h1.19c.13 0 .23.1.24.22v.87h.02c.31-.83.9-1.21 1.69-1.21.8 0 1.3.38 1.66 1.21.31-.83 1.02-1.21 1.78-1.21.54 0 1.13.22 1.49.72.4.56.32 1.37.32 2.08v4.2c0 .12-.11.22-.25.22h-1.28a.24.24 0 0 1-.23-.22v-3.5c0-.28.03-.98-.04-1.25-.1-.45-.39-.57-.77-.57-.32 0-.65.21-.79.55-.13.34-.12.9-.12 1.27v3.5c0 .12-.11.22-.25.22H8.32a.24.24 0 0 1-.24-.22v-3.5c0-.74.12-1.83-.8-1.83-.93 0-.9 1.06-.9 1.83v3.5c0 .12-.1.22-.24.22z" transform="translate(2.5 1.5)"/>
  </svg>
);

export const ArrowIcon = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const PinIcon = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const MailIcon = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const ClockIcon = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const ShieldCheck = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 3 5 6v6c0 4.4 3 7.5 7 9 4-1.5 7-4.6 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const HandIcon = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M6 11V6.5a1.5 1.5 0 0 1 3 0V11m0-1V4.5a1.5 1.5 0 0 1 3 0V10m0 0V5.5a1.5 1.5 0 0 1 3 0V12m0-2.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1.7a4 4 0 0 1-2.9-1.25L6 16.5" />
  </svg>
);

export const SparkIcon = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z" />
  </svg>
);

export const TruckIcon = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="17.5" cy="18" r="1.6" />
  </svg>
);
