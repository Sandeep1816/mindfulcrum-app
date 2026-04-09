import type { MetadataRoute } from "next";
import { siteSeo } from "@/lib/seo/config";

/** Web app manifest — improves installability & complements SEO signals. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteSeo.name} — ${siteSeo.tagline}`,
    short_name: siteSeo.name,
    description: siteSeo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1e3a5f",
    lang: "en-IN",
    dir: "ltr",
    icons: [
      {
        src: "/images/Mindfulcrum.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
