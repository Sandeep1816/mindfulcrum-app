import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { siteSeo } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteSeo.name} — workplace psychology, our mission, and how we support organizations and schools across India with evidence-based mental health programs.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us | ${siteSeo.name}`,
    description: `Our story, values, and approach to workplace and school wellbeing.`,
  },
};

export default function Page() {
  return <AboutPage />;
}
