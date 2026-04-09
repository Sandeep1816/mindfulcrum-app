/**
 * Canonical site URL for metadata, OG tags, sitemap, robots, and JSON-LD.
 * For Google indexing, production **must** set `NEXT_PUBLIC_SITE_URL=https://www.mindfulcrum.in`
 * (no trailing slash). If unset on Vercel, the deployment URL is used — not your custom domain.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  return "http://localhost:3000";
}

export const siteSeo = {
  name: "Mindfulcrum",
  /** Registered / legal entity name (office & invoices) */
  legalName: "Mind Fulcrum Healthcare",
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
    "Bengaluru",
    "Indiranagar",
    "leadership development",
    "burnout prevention",
  ],
  locale: "en_IN",
  email: "vincent@mindfulcrum.in",
  phone: "+911234567890",
  /** schema.org PostalAddress.streetAddress */
  streetAddress:
    "No 103 Shalom, Binnamangala 1st stage, Ecogrand Boutique Omes 10th Cross, Indiranagar",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560038",
  addressCountry: "IN",
  linkedinUrl: "https://in.linkedin.com/in/mind-fulcrum-healthcare-9127a03b9",
} as const;

/** Multi-line office address for footer & contact UI */
export const SITE_OFFICE_ADDRESS_LINES = [
  "No 103 Shalom, Binnamangala 1st stage",
  "Ecogrand Boutique Omes 10th Cross",
  "Indiranagar",
  "Bengaluru 560038, Karnataka, India",
] as const;
