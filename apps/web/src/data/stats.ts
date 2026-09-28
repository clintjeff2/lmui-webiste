export interface Stat {
  value: number | string;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const heroStats: Stat[] = [
  { value: 14200, suffix: "+", label: "Students enrolled" },
  { value: 150, suffix: "+", label: "Degree programs" },
  { value: 92, suffix: "%", label: "Employed within 6 months" },
  { value: 340, prefix: "$", suffix: "M", label: "Annual research funding" },
];

export function getSecondaryStats(campusCount: number): Stat[] {
  return [
    { value: 40, label: "Countries represented" },
    { value: 32, suffix: ":1", label: "Student-faculty ratio" },
    { value: campusCount, label: "Buea City campuses" },
    { value: 22, label: "Years of history" },
  ];
}
