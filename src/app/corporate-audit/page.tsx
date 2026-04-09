import type { Metadata } from "next";
import { CorporateAuditPage } from "@/components/pages/CorporateAuditPage";
import { siteSeo } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Leadership Psychological Audit",
  description: `Leadership behavioral and psychological audit for organizations — insights for executives and HR. Request a proposal from ${siteSeo.name}.`,
  alternates: { canonical: "/corporate-audit" },
  keywords: ["leadership audit", "executive assessment", "workplace psychology India", siteSeo.name],
};

export default function Page() {
  return <CorporateAuditPage />;
}
