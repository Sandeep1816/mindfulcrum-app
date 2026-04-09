/** Primary header navigation — single source for UI + structured data (SEO). */
export const MAIN_NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/corporate-programs", label: "Corporate Programs" },
  { path: "/corporate-audit", label: "Leadership Audit" },
  { path: "/school-programs", label: "School Programs" },
  { path: "/resources", label: "Resources" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
] as const;

export type MainNavPath = (typeof MAIN_NAV_LINKS)[number]["path"];
