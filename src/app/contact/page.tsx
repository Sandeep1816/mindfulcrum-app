import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { siteSeo } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Contact & Request Pricing",
  description: `Contact ${siteSeo.name} for corporate programs, school wellbeing, or therapy inquiries. Request pricing and a customized proposal for your organization in Bangalore and across India.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${siteSeo.name}`,
    description: "Get in touch for programs, pricing, and consultations.",
  },
};

export default function Page() {
  return <ContactPage />;
}
