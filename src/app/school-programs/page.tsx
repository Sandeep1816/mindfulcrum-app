import type { Metadata } from "next";
import { SchoolProgramsPage } from "@/components/pages/SchoolProgramsPage";
import { siteSeo } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "School Mental Health Programs",
  description: `CampusWell and parent-focused programs for students, teachers, and families — screening, training, and behavioral support. ${siteSeo.name}.`,
  alternates: { canonical: "/school-programs" },
  keywords: ["school mental health India", "student wellbeing", "parent counseling program", siteSeo.name],
};

export default function Page() {
  return <SchoolProgramsPage />;
}
