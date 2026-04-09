import { JsonLd } from "./JsonLd";
import { BOOKING_THERAPISTS } from "@/data/therapists-list";
import { getSiteUrl } from "@/lib/seo/config";

/** ItemList of expert profile URLs for the home page (Meet Our Experts). */
export function HomeStructuredData() {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Psychologists and therapists at Mindfulcrum",
    description:
      "Certified psychology experts for online therapy, adolescents, workplace wellbeing, and organizational programs in India.",
    numberOfItems: BOOKING_THERAPISTS.length,
    itemListElement: BOOKING_THERAPISTS.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      url: `${base}/therapist/${t.id}`,
      description: t.description,
    })),
  };
  return <JsonLd data={data} />;
}
