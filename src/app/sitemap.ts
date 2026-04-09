import type { MetadataRoute } from "next";
import { listTherapistProfileIds } from "@/data/therapists-profiles";
import { getSiteUrl } from "@/lib/seo/config";

const staticPaths = [
  "/",
  "/about",
  "/contact",
  "/resources",
  "/therapy-booking",
  "/corporate-programs",
  "/corporate-audit",
  "/school-programs",
  "/individual-programs",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastMod = new Date();

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified: lastMod,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  for (const id of listTherapistProfileIds()) {
    entries.push({
      url: `${base}/therapist/${id}`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  return entries;
}
