import { JsonLd } from "./JsonLd";
import { getSiteUrl, siteSeo } from "@/lib/seo/config";

export function SiteJsonLd() {
  const url = getSiteUrl();
  const logoUrl = `${url}/images/Mindfulcrum.png`;
  const knowsAbout = [...siteSeo.keywords];

  const organization = {
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
      streetAddress: siteSeo.streetAddress,
      addressLocality: siteSeo.addressLocality,
      addressRegion: siteSeo.addressRegion,
      postalCode: siteSeo.postalCode,
      addressCountry: siteSeo.addressCountry,
    },
    areaServed: [
      { "@type": "City", name: "Bengaluru" },
      { "@type": "AdministrativeArea", name: "Karnataka" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout,
    priceRange: "₹₹",
    sameAs: [siteSeo.linkedinUrl, siteSeo.instagramUrl],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name: siteSeo.name,
    description: siteSeo.description,
    url,
    inLanguage: siteSeo.locale,
    publisher: { "@id": `${url}/#organization` },
    copyrightHolder: { "@id": `${url}/#organization` },
    about: { "@id": `${url}/#organization` },
    image: logoUrl,
  };

  return <JsonLd data={[organization, website]} />;
}
