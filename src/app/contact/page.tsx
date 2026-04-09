import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { siteSeo } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Contact & Request Pricing",
  description: `Contact ${siteSeo.name} (Mind Fulcrum Healthcare) in Indiranagar, Bengaluru, or online for corporate programs, school wellbeing, and therapy inquiries. Request pricing and a customized proposal across India.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${siteSeo.name}`,
    description: "Get in touch for programs, pricing, and consultations.",
  },
};

export default function Page() {
  return <ContactPage />;
}
