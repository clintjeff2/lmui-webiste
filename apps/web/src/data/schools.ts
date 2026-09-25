export interface School {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  stat: { value: string; label: string };
  pattern: "grid" | "diagonal" | "radial" | "wave" | "concentric";
}

export const schools: School[] = [
  {
    slug: "engineering",
    name: "School of Engineering & Applied Sciences",
    shortName: "Engineering",
    tagline: "Building the systems the next century runs on.",
    description:
      "From robotics to civil infrastructure, students work alongside faculty on real, funded research from their first year — not a simulation of engineering practice, the practice itself.",
    stat: { value: "$180M", label: "in active research funding" },
    pattern: "grid",
  },
  {
    slug: "business",
    name: "School of Business & Management",
    shortName: "Business",
    tagline: "Where analysis meets judgment.",
    description:
      "A curriculum built around live case work with regional employers, a student-run investment fund, and one of the country's most connected entrepreneurship studios.",
    stat: { value: "94%", label: "employed or in grad school within 6 months" },
    pattern: "diagonal",
  },
  {
    slug: "arts-sciences",
    name: "College of Arts, Humanities & Sciences",
    shortName: "Arts & Sciences",
    tagline: "The widest doorway on campus.",
    description:
      "Thirty-one majors spanning the physical sciences, humanities, and social sciences, unified by a shared commitment to original inquiry from the undergraduate level up.",
    stat: { value: "31", label: "majors across 9 departments" },
    pattern: "concentric",
  },
  {
    slug: "health-medicine",
    name: "School of Health & Medicine",
    shortName: "Health & Medicine",
    tagline: "Care, trained at the point of contact.",
    description:
      "Clinical rotations begin earlier here than almost anywhere else in the region, inside the teaching hospitals and community clinics that make up Landmark Health Partners.",
    stat: { value: "1,400+", label: "clinical placement hours by graduation" },
    pattern: "radial",
  },
  {
    slug: "design-architecture",
    name: "School of Design & Architecture",
    shortName: "Design & Architecture",
    tagline: "Studio culture, city-scale stakes.",
    description:
      "Design studios partner directly with the metropolitan planning office — student proposals have shaped real zoning, transit, and public space decisions across the region.",
    stat: { value: "12", label: "built or adopted civic design projects" },
    pattern: "wave",
  },
  {
    slug: "law-policy",
    name: "School of Law & Public Policy",
    shortName: "Law & Policy",
    tagline: "Advocacy trained on real cases.",
    description:
      "A legal clinic that has argued before the state supreme court, and a policy lab that regularly briefs city and state legislators on live proposals.",
    stat: { value: "#8", label: "ranked public policy clinic nationally" },
    pattern: "grid",
  },
];

export function getSchoolBySlug(slug: string): School | undefined {
  return schools.find((s) => s.slug === slug);
}
