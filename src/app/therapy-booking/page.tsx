import type { Metadata } from "next";
import { TherapyBookingPage } from "@/components/pages/TherapyBookingPage";
import { siteSeo } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Book Online Therapy — Certified Psychologists",
  description: `Book 1:1 online therapy with certified psychologists at ${siteSeo.name}. Anxiety, depression, relationships, workplace stress — view profiles, ratings, and session fees in India.`,
  keywords: [
    "book psychologist online India",
    "online therapy Bangalore",
    "certified psychologist",
    "video counseling",
    ...siteSeo.keywords.slice(0, 8),
  ],
  alternates: { canonical: "/therapy-booking" },
  openGraph: {
    title: `Book Therapy | ${siteSeo.name}`,
    description: "Choose a verified psychologist and book a secure online session.",
  },
};

export default function Page() {
  return <TherapyBookingPage />;
}
