import type { Metadata } from "next";
import { IndividualProgramsPage } from "@/components/pages/IndividualProgramsPage";
import { siteSeo } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Individual & Family Therapy",
  description: `One-to-one online therapy with certified psychologists — flexible sessions, confidential care. Book through ${siteSeo.name}.`,
  alternates: { canonical: "/individual-programs" },
  keywords: ["online therapy India", "individual counseling", "family therapy", siteSeo.name],
};

export default function Page() {
  return <IndividualProgramsPage />;
}
