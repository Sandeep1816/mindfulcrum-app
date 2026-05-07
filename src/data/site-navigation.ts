/** Primary header navigation — single source for UI + structured data (SEO). */
export const MAIN_NAV_LINKS = [
  {
    path: "/",
    label: "Home",
    seoDescription: "Overview of Mindfulcrum workplace psychology and wellbeing solutions.",
  },
  {
    path: "/corporate-programs",
    label: "Corporate Programs",
    seoDescription: "Structured corporate mental health and leadership wellbeing programs.",
  },
  {
    path: "/corporate-audit",
    label: "Leadership Audit",
    seoDescription: "Leadership psychological audit with insights and measurable outcomes.",
  },
  {
    path: "/school-programs",
    label: "School Programs",
    seoDescription: "Campus and parent behavior programs for student wellbeing.",
  },
  {
    path: "/resources",
    label: "Resources",
    seoDescription: "Mental health resources and helplines across India.",
  },
  {
    path: "/about",
    label: "About",
    seoDescription: "About Mindfulcrum, mission, and workplace psychology approach.",
  },
  {
    path: "/contact",
    label: "Contact",
    seoDescription: "Contact Mindfulcrum for consultations, pricing, and partnerships.",
  },
] as const;

export type MainNavPath = (typeof MAIN_NAV_LINKS)[number]["path"];
