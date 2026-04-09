const labels: Record<string, string> = {
  "corporate-engage": "Corporate: Mindfulcrum Engage (3 months)",
  "corporate-transform": "Corporate: Mindfulcrum Transform (6 months)",
  "corporate-elevate": "Corporate: Mindfulcrum Elevate (12 months)",
  "leadership-audit": "Leadership Psychological Audit",
  "school-campuswell": "School: CampusWell Program",
  "school-parent": "School: Parent Intelligence Program",
  "individual-therapy": "Individual/Family Therapy",
  "not-sure": "Not sure yet / General inquiry",
};

export function getProgramLabel(value: string): string {
  return labels[value] ?? value;
}
