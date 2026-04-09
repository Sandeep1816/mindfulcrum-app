import { JsonLd } from "./JsonLd";
import { getSiteUrl, siteSeo } from "@/lib/seo/config";

export function SiteJsonLd() {
  const url = getSiteUrl();
  const logoUrl = `${url}/images/Mindfulcrum.png`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url}/#organization`,
    name: siteSeo.name,
    legalName: siteSeo.legalName,
    description: siteSeo.description,
    url,
    logo: { "@type": "ImageObject", url: logoUrl },
    image: logoUrl,
    email: siteSeo.email,
    telephone: siteSeo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteSeo.addressLocality,
      addressRegion: siteSeo.addressRegion,
      addressCountry: siteSeo.addressCountry,
    },
    areaServed: { "@type": "Country", name: "India" },
    priceRange: "₹₹",
    sameAs: [] as string[],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name: siteSeo.name,
    description: siteSeo.description,
    url,
    publisher: { "@id": `${url}/#organization` },
    inLanguage: siteSeo.locale,
  };

  return <JsonLd data={[organization, website]} />;
}
