import type { Metadata } from "next";
import { CorporateProgramsPage } from "@/components/pages/CorporateProgramsPage";
import { siteSeo } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Corporate Wellbeing Programs",
  description: `3, 6 & 12-month workplace psychology programs for HR leaders — on-site psychologists, leadership assessments, and wellbeing reports. ${siteSeo.name}, India.`,
  alternates: { canonical: "/corporate-programs" },
  keywords: ["corporate mental health India", "workplace wellbeing program", "organizational psychology", ...siteSeo.keywords.slice(0, 5)],
};

export default function Page() {
  return <CorporateProgramsPage />;
}
