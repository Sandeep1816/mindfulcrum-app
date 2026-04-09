import { JsonLd } from "./JsonLd";
import { getSiteUrl, siteSeo } from "@/lib/seo/config";
import type { TherapistProfile } from "@/data/therapists-profiles";

export function TherapistJsonLd({ profile }: { profile: TherapistProfile }) {
  const base = getSiteUrl();
  const pageUrl = `${base}/therapist/${profile.id}`;
  const fullBio = `${profile.description} ${profile.longDescription}`.slice(0, 5000);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${pageUrl}#person`,
    name: profile.name,
    jobTitle: profile.title,
    description: fullBio,
    image: { "@type": "ImageObject", url: profile.image },
    url: pageUrl,
    knowsAbout: [...profile.specializations, profile.specialty],
    knowsLanguage: profile.languages,
    worksFor: {
      "@type": "Organization",
      "@id": `${base}/#organization`,
      name: siteSeo.name,
      url: base,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Book therapy", item: `${base}/therapy-booking` },
      { "@type": "ListItem", position: 3, name: profile.name, item: pageUrl },
    ],
  };

  return <JsonLd data={[person, breadcrumb]} />;
}
