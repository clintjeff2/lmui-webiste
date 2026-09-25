export interface Stat {
  value: number;
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

export const secondaryStats: Stat[] = [
  { value: 71, label: "Countries represented" },
  { value: 12, suffix: ":1", label: "Student-faculty ratio" },
  { value: 6, label: "Metropolitan campuses" },
  { value: 118, label: "Years of history" },
];
