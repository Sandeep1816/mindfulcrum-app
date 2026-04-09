import type { Metadata } from "next";
import { ResourcesPage } from "@/components/pages/ResourcesPage";
import { siteSeo } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Mental Health & Suicide Prevention Helplines (India)",
  description:
    "State-wise mental health and suicide prevention helpline numbers across India — TeleMANAS (1-8008914416 / 14416) and regional crisis lines. Free reference from Mindfulcrum.",
  keywords: [
    "mental health helpline India",
    "TeleMANAS",
    "suicide prevention helpline",
    "crisis helpline by state",
    siteSeo.name,
  ],
  alternates: { canonical: "/resources" },
  openGraph: {
    title: `Mental Health Helplines | ${siteSeo.name}`,
    description: "India-wide helpline directory for mental health support and suicide prevention.",
  },
};

export default function Page() {
  return <ResourcesPage />;
}
