const foundingYear = 2005;
const yearsSinceFounded = new Date().getFullYear() - foundingYear;

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface StatsData {
  heroStats: Stat[];
  secondaryStats: Stat[];
}

export const heroStats: Stat[] = [
  { value: 14200, suffix: "+", label: "Students enrolled" },
  { value: 150, suffix: "+", label: "Degree options" },
  { value: 80, suffix: "%", label: "Employed within 6 months" },
  { value: 20, prefix: "XAF", suffix: "M", label: "Annual Scholarship Fund" },
];

export function getSecondaryStats(campusCount: number): Stat[] {
  return [
    { value: 40, label: "Countries represented" },
    { value: 32, suffix: ":1", label: "Student-faculty ratio" },
    { value: campusCount, label: "Buea City campuses" },
    { value: yearsSinceFounded, label: "Years of history" },
  ];
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

function isStat(value: unknown): value is Stat {
  if (typeof value !== "object" || value === null) return false;

  const stat = value as Record<string, unknown>;
  return (
    typeof stat.value === "number" &&
    typeof stat.label === "string" &&
    (stat.prefix === undefined || typeof stat.prefix === "string") &&
    (stat.suffix === undefined || typeof stat.suffix === "string")
  );
}

export async function getStats(
  fallbackCampusCount: number | Promise<number>,
  fallbackOptionCount: number | Promise<number>,
): Promise<StatsData> {
  const optionCount = await fallbackOptionCount;
  const fallbackHeroStats = heroStats.map((stat) =>
    /degree\s+(options|programs)/i.test(stat.label) ? { ...stat, value: optionCount } : stat,
  );

  try {
    const response = await fetch(`${API_BASE}/api/v1/stats`, { cache: "no-store" });
    if (response.ok) {
      const data: unknown = await response.json();
      if (typeof data === "object" && data !== null) {
        const result = data as Partial<StatsData>;
        const loadedHeroStats = Array.isArray(result.heroStats)
          ? result.heroStats.filter(isStat)
          : [];
        const loadedSecondaryStats = Array.isArray(result.secondaryStats)
          ? result.secondaryStats.filter(isStat)
          : [];
        const campusCountFallback = await fallbackCampusCount;
        const normalizedHeroStats = loadedHeroStats.map((stat) =>
          /degree\s+(options|programs)/i.test(stat.label) && stat.value === 0
            ? { ...stat, value: optionCount }
            : stat,
        );
        const normalizedSecondaryStats = loadedSecondaryStats.map((stat) =>
          stat.label === "Buea City campuses" && stat.value === 0
            ? { ...stat, value: campusCountFallback }
            : stat,
        );

        return {
          heroStats: normalizedHeroStats.length > 0 ? normalizedHeroStats : fallbackHeroStats,
          secondaryStats: normalizedSecondaryStats.length > 0
            ? normalizedSecondaryStats
            : getSecondaryStats(campusCountFallback),
        };
      }
    }
  } catch {
    // Use local values when the API is unavailable.
  }

  return {
    heroStats: fallbackHeroStats,
    secondaryStats: getSecondaryStats(await fallbackCampusCount),
  };
}
