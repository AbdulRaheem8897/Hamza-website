// Central brand + contact configuration for SH ROYALS HANDICRAFT.

export const site = {
  brand: "SH ROYALS",
  brandFull: "SH ROYALS HANDICRAFT",
  tagline: "Handcrafted Heritage Decor",
  proprietor: "Syed Ameer Hamza",
  gstin: "36BMLPH0045J1Z4",
  description:
    "Handcrafted metal showpieces, Dhal-Talwar sword & shield wall art, designer flower vases, statues and heritage decor — made in Hyderabad, India.",
  url: "https://sh-royals.com",

  whatsappNumber: "918688204554",
  whatsappDisplay: "+91 86882 04554",
  email: "mohammed@hiveinspect.com",

  amazonStore: "https://www.amazon.in/s?k=SH-ROYALS",

  address: {
    line1: "Plot No. 8 & 9, Sy. No. 120 to 123",
    line2: "Chandrayangutta, Phool Bagh",
    city: "Hyderabad",
    state: "Telangana",
    pin: "500005",
    country: "India",
  },

  hours: "Mon – Sat · 10:00 AM – 7:00 PM IST",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function productEnquiry(name: string, price: number) {
  return whatsappLink(
    `Hello SH ROYALS, I'm interested in the "${name}" (₹${price.toLocaleString(
      "en-IN"
    )}). Please share more details.`
  );
}

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
