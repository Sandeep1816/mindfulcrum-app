/** Canonical site URL for metadata, OG tags, sitemap, and JSON-LD. Set in production via NEXT_PUBLIC_SITE_URL */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  return "http://localhost:3000";
}

export const siteSeo = {
  name: "Mindfulcrum",
  legalName: "Mindfulcrum",
  tagline: "Workplace Psychology & Wellbeing",
  description:
    "Mindfulcrum helps organizations improve employee wellbeing, reduce burnout, and strengthen leadership through evidence-based workplace psychology programs, school programs, and online therapy with certified psychologists in India.",
  keywords: [
    "workplace psychology",
    "employee wellbeing",
    "corporate mental health",
    "psychologist India",
    "online therapy India",
    "organizational psychology",
    "school mental health",
    "Bangalore",
    "leadership development",
    "burnout prevention",
  ],
  locale: "en_IN",
  email: "hello@mindfulcrum.com",
  phone: "+911234567890",
  addressLocality: "Bangalore",
  addressRegion: "Karnataka",
  addressCountry: "IN",
};
