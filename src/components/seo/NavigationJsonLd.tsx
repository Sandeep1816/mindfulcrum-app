import { JsonLd } from "./JsonLd";
import { MAIN_NAV_LINKS } from "@/data/site-navigation";
import { getSiteUrl } from "@/lib/seo/config";

/**
 * ItemList JSON-LD for main nav URLs so search engines can associate labels with canonical pages.
 * WebSite @id matches SiteJsonLd for entity linking.
 */
export function NavigationJsonLd() {
  const base = getSiteUrl();
  const websiteId = `${base}/#website`;

  const itemListElement = MAIN_NAV_LINKS.map((link, i) => {
    const itemUrl = link.path === "/" ? base : `${base}${link.path}`;
    return {
      "@type": "ListItem" as const,
      position: i + 1,
      name: link.label,
      item: itemUrl,
    };
  });

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${base}/#main-navigation`,
    name: "Main navigation",
    description: "Primary site navigation links",
    numberOfItems: MAIN_NAV_LINKS.length,
    isPartOf: { "@type": "WebSite" as const, "@id": websiteId },
    itemListElement,
  };

  return <JsonLd data={data} />;
}
