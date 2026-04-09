import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TherapistProfilePage } from "@/components/pages/TherapistProfilePage";
import { TherapistJsonLd } from "@/components/seo/TherapistJsonLd";
import { getTherapistProfile, listTherapistProfileIds } from "@/data/therapists-profiles";
import { getSiteUrl, siteSeo } from "@/lib/seo/config";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return listTherapistProfileIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const profile = getTherapistProfile(id);
  const base = getSiteUrl();

  if (!profile) {
    return { title: "Expert not found", robots: { index: false, follow: true } };
  }

  const title = `${profile.name} — ${profile.title} (${profile.specialty})`;
  const description = `${profile.description} Book online therapy with ${profile.name} in India. ${profile.experience} experience. ${siteSeo.name} — certified psychologists, video sessions from ₹${profile.pricePerSession}.`;
  const pageUrl = `${base}/therapist/${id}`;
  const keywords = [
    profile.name,
    profile.title,
    profile.specialty,
    ...profile.specializations.slice(0, 6),
    ...profile.languages,
    "psychologist India",
    "online therapy",
    "Mindfulcrum",
    "Bangalore",
  ];

  return {
    title,
    description,
    keywords,
    openGraph: {
      url: pageUrl,
      title: `${profile.name} | ${profile.title}`,
      description: profile.description,
      siteName: siteSeo.name,
      locale: siteSeo.locale,
      images: [{ url: profile.image, width: 800, height: 800, alt: `${profile.name} — ${profile.title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${profile.name} — ${profile.title}`,
      description: profile.description,
      images: [profile.image],
    },
    alternates: { canonical: `/therapist/${id}` },
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const profile = getTherapistProfile(id);
  if (!profile) notFound();

  return (
    <>
      <TherapistJsonLd profile={profile} />
      <TherapistProfilePage therapistId={id} />
    </>
  );
}
