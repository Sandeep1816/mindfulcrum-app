import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeTaglineBar } from "@/components/home/HomeTaglineBar";
import { HomeStatistics } from "@/components/home/HomeStatistics";
import { HomeWhyChooseUs } from "@/components/home/HomeWhyChooseUs";
import { HomeMeetExperts } from "@/components/home/HomeMeetExperts";
import { HomeProgramsOverview } from "@/components/home/HomeProgramsOverview";
import { HomeBottomCta } from "@/components/home/HomeBottomCta";
import { HomeStructuredData } from "@/components/seo/HomeStructuredData";
import { getSiteUrl, siteSeo } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: { absolute: `${siteSeo.name} — ${siteSeo.tagline}` },
  description: siteSeo.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: getSiteUrl(),
    title: `${siteSeo.name} — ${siteSeo.tagline}`,
    description: siteSeo.description,
  },
};

export default function Page() {
  return (
    <div className="bg-white">
      <HomeStructuredData />
      <HomeHero />
      <HomeTaglineBar />
      <HomeStatistics />
      <HomeWhyChooseUs />
      <HomeMeetExperts />
      <HomeProgramsOverview />
      <HomeBottomCta />
    </div>
  );
}
