import WebImageLinks from "./images/image_objects";

export interface Pillar {
  title: string;
  description: string;
}

const defaultPillars: Pillar[] = [
  {
    title: "Mission",
    description:
      "",
  },
  {
    title: "Vision",
    description:
      "",
  },
  {
    title: "Policies",
    description:
      "",
  },
];

export interface Leader {
  name: string;
  title: string;
  bio: string;
  image?: string | null;
}

export interface StaffMember {
  staff_name: string;
  staff_title: string;
  staff_bio: string;
  staff_image: string | null;
  staff_grade: string;
}

const defaultLeadership: Leader[] = [
  {
    name: "Dr. Carla Whitfield",
    title: "President",
    bio: "Previously Provost at a leading research university, Dr. Whitfield has spent three decades arguing that access and rigor are not a trade-off.",
    image: WebImageLinks.president,
  },
  {
    name: "Dr. Iman Farouk",
    title: "Vice Provost for Research",
    bio: "An infectious disease epidemiologist by training, Dr. Farouk has led the five-year push to grow Landmark's interdisciplinary research centers.",
    image: WebImageLinks.vc
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

const defaultMilestones: Milestone[] = [
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
  campus: string;
}

const defaultCampusGallery: GalleryTile[] = [
  { label: "The Quad, main campus", size: "lg", pattern: "concentric", campus: "Campus B" },
  { label: "Whitfield Engineering Commons", size: "md", pattern: "grid", campus: "Campus A" },
  { label: "Riverside Campus waterfront", size: "sm", pattern: "wave", campus: "Campus B" },
  { label: "Downtown Law & Policy campus", size: "sm", pattern: "diagonal", campus: "Campus A" },
  { label: "Landmark Health Partners", size: "md", pattern: "radial", campus: "Campus B" },
];

export type AboutCollection = "pillars" | "staff" | "milestones" | "campusGallery";

export interface AboutData {
  pillars: Pillar[];
  leadership: Leader[];
  milestones: Milestone[];
  campusGallery: GalleryTile[];
  campusCount: number;
}

const fallbackAboutData: AboutData = {
  pillars: defaultPillars,
  leadership: defaultLeadership,
  milestones: defaultMilestones,
  campusGallery: defaultCampusGallery,
  campusCount: countDistinctCampuses(defaultCampusGallery),
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

function rowsOrFallback<T>(rows: unknown, fallback: T[]): T[] {
  return Array.isArray(rows) && rows.length > 0 ? rows as T[] : fallback;
}

function countDistinctCampuses(gallery: GalleryTile[]): number {
  return new Set(
    gallery
      .map((tile) => tile.campus.trim().toLocaleLowerCase())
      .filter(Boolean),
  ).size;
}

function mapTopManagementToLeadership(rows: unknown): Leader[] {
  if (!Array.isArray(rows)) return [];

  // Keep only top-management staff and expose the field names used by the frontend.
  return rows.flatMap((row): Leader[] => {
    if (typeof row !== "object" || row === null) return [];

    const staffMember = row as Record<string, unknown>;
    if (
      typeof staffMember.staff_grade !== "string" ||
      staffMember.staff_grade.trim().toLowerCase() !== "board management"
    ) {
      return [];
    }

    if (
      typeof staffMember.staff_name !== "string" ||
      typeof staffMember.staff_title !== "string" ||
      typeof staffMember.staff_bio !== "string"
    ) {
      return [];
    }

    return [{
      name: staffMember.staff_name,
      title: staffMember.staff_title,
      bio: staffMember.staff_bio,
      image: typeof staffMember.staff_image === "string" ? staffMember.staff_image : null,
    }];
  });
}

export async function getStaffData(): Promise<StaffMember[]> {
  try {
    const response = await fetch(`${API_BASE}/api/v1/about`, { cache: "no-store" });
    if (!response.ok) return [];

    const data: unknown = await response.json();
    if (typeof data !== "object" || data === null) return [];

    const staffRows = (data as { staff?: unknown }).staff;
    if (!Array.isArray(staffRows)) return [];

    return staffRows.flatMap((row): StaffMember[] => {
      if (typeof row !== "object" || row === null) return [];

      const staffMember = row as Record<string, unknown>;
      if (
        typeof staffMember.staff_name !== "string" ||
        typeof staffMember.staff_title !== "string"
      ) {
        return [];
      }

      return [{
        staff_name: staffMember.staff_name,
        staff_title: staffMember.staff_title,
        staff_bio: typeof staffMember.staff_bio === "string" ? staffMember.staff_bio : "",
        staff_image: typeof staffMember.staff_image === "string" ? staffMember.staff_image : null,
        staff_grade: typeof staffMember.staff_grade === "string" ? staffMember.staff_grade : "",
      }];
    });
  } catch {
    return [];
  }
}

export async function getAboutData(): Promise<AboutData> {
  try {
    const response = await fetch(`${API_BASE}/api/v1/about`, { cache: "no-store" });
    if (!response.ok) return fallbackAboutData;

    const data: unknown = await response.json();
    if (typeof data !== "object" || data === null) return fallbackAboutData;

    const about = data as Partial<AboutData> & { staff?: unknown };
    // The aggregate endpoint includes raw staff rows; derive leadership from their grade.
    const leadership = Array.isArray(about.staff)
      ? mapTopManagementToLeadership(about.staff)
      : rowsOrFallback(about.leadership, fallbackAboutData.leadership);

    return {
      pillars: rowsOrFallback(about.pillars, fallbackAboutData.pillars),
      leadership,
      milestones: rowsOrFallback(about.milestones, fallbackAboutData.milestones),
      campusGallery: rowsOrFallback(about.campusGallery, fallbackAboutData.campusGallery),
      campusCount: countDistinctCampuses(
        rowsOrFallback(about.campusGallery, fallbackAboutData.campusGallery),
      ),
    };
  } catch {
    return fallbackAboutData;
  }
}
