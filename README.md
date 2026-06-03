# SH ROYALS HANDICRAFT — Website

A modern, mobile-responsive catalog website for **SH ROYALS HANDICRAFT** (Hyderabad, India) —
handcrafted metal showpieces, Dhal–Talwar sword & shield wall art, designer flower vases,
statues and heritage decor.

Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **Framer Motion** and **TypeScript**.
Aesthetic: *Royal Heritage* — deep wine, antique gold and ivory, with Playfair Display & Cormorant type.

## Features

- **Home** — hero, trust strip, shop-by-collection, featured products, heritage story, CTA band
- **Collection** (`/products`) — filter by category, sort by price, animated grid (17 products)
- **Product pages** (`/products/[asin]`) — image gallery, specs, *Buy on Amazon* + *WhatsApp enquiry*, related items
- **Heritage** (`/about`) — brand story, values, registered-business details
- **Contact** — WhatsApp/email enquiry form + Google Maps
- Fully responsive, SEO metadata, static-generated product pages

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Editing the catalog

All products live in [`data/products.ts`](data/products.ts). Each entry has a name, price,
category, size, description, Amazon URL and image paths. Product photos are in
[`public/products/`](public/products) (named `<ASIN>-1.jpg` … `<ASIN>-4.jpg`).

To **add a product**: drop its images in `public/products/`, then add an object to the
`products` array. To **change a price or description**, edit the relevant entry.

## Contact / brand config

Phone, email, address, GSTIN, Amazon store link and the tagline are centralised in
[`lib/site.ts`](lib/site.ts) — update them in one place.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js.
3. Deploy. No environment variables are required.

---

> Product photography is sourced from the brand's own Amazon listings.
> © SH ROYALS HANDICRAFT · Proprietor: Syed Ameer Hamza · GSTIN 36BMLPH0045J1Z4
