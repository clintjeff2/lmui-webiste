export interface Pillar {
  title: string;
  description: string;
}

export const pillars: Pillar[] = [
  {
    title: "Access",
    description:
      "Need-blind admission, need-based aid meeting 100% of demonstrated need, and a Bridge Scholars program built specifically for first-generation students from the metropolitan region.",
  },
  {
    title: "Practice",
    description:
      "Every school builds a required, real-stakes practicum into its curriculum — a live client, a real docket, real capital, a proposal a city actually adopts.",
  },
  {
    title: "Place",
    description:
      "Six campuses across the metropolitan region mean research and coursework stay tied to the city itself, not abstracted away from it.",
  },
];

export interface Leader {
  name: string;
  title: string;
  bio: string;
}

export const leadership: Leader[] = [
  {
    name: "Dr. Carla Whitfield",
    title: "President",
    bio: "Previously Provost at a leading research university, Dr. Whitfield has spent three decades arguing that access and rigor are not a trade-off.",
  },
  {
    name: "Dr. Iman Farouk",
    title: "Vice Provost for Research",
    bio: "An infectious disease epidemiologist by training, Dr. Farouk has led the five-year push to grow Landmark's interdisciplinary research centers.",
  },
  {
    name: "Dana Whitcombe",
    title: "Vice Provost for Enrollment",
    bio: "Architect of the Bridge Scholars program, now in its fourth year and credited with a 22% rise in first-generation enrollment.",
  },
  {
    name: "Dr. Alvaro Reyes",
    title: "Dean, School of Engineering & Applied Sciences",
    bio: "Led the four-year effort to build the Whitfield Engineering Commons, opened this fall as the university's largest capital project in two decades.",
  },
];

export interface Milestone {
  year: string;
  description: string;
}

export const milestones: Milestone[] = [
  { year: "1908", description: "Founded as a evening technical institute for the city's working professionals." },
  { year: "1947", description: "Granted university status and admitted its first undergraduate class." },
  { year: "1971", description: "Opened the School of Law & Public Policy and its first legal aid clinic." },
  { year: "1996", description: "Established Landmark Health Partners, its teaching hospital network." },
  { year: "2014", description: "Launched the Bridge Scholars program for first-generation students." },
  { year: "2026", description: "Opened the Whitfield Engineering Commons; enrollment crosses 14,200." },
];

export interface GalleryTile {
  label: string;
  size: "lg" | "md" | "sm";
  pattern: "grid" | "diagonal" | "radial" | "wave" | "concentric";
}

export const campusGallery: GalleryTile[] = [
  { label: "The Quad, main campus", size: "lg", pattern: "concentric" },
  { label: "Whitfield Engineering Commons", size: "md", pattern: "grid" },
  { label: "Riverside Campus waterfront", size: "sm", pattern: "wave" },
  { label: "Downtown Law & Policy campus", size: "sm", pattern: "diagonal" },
  { label: "Landmark Health Partners", size: "md", pattern: "radial" },
];
