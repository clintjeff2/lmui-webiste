import { Router } from "express";
import { db } from "../db";

const router = Router();

interface SchoolRow {
  school_slug: string;
  school_route: string;
  schools_name: string;
  schools_short_name: string;
  school_tag_line: string;
  schools_description: unknown;
  schools_stat: unknown;
  school_pattern: string;
  school_logo: string;
}

function parseJson(value: unknown): unknown {
  if (typeof value !== "string") return value;
  return JSON.parse(value);
}

router.get("/", async (_req, res) => {
  const rows = await db("landmark_schools").select(
    "school_slug",
    "school_route",
    "schools_name",
    "schools_short_name",
    "school_tag_line",
    "schools_description",
    "schools_stat",
    "school_pattern",
    "school_logo"
  ) as SchoolRow[];

  res.json(rows.map((row) => {
    const descriptionData = parseJson(row.schools_description);
    const statData = parseJson(row.schools_stat);
    const description = Array.isArray(descriptionData)
      ? descriptionData
      : typeof descriptionData === "object" && descriptionData !== null
        ? (descriptionData as { description?: string[] }).description ?? []
        : typeof descriptionData === "string" ? descriptionData : [];
    const stat = typeof statData === "object" && statData !== null
      ? statData as { value?: string | number; label?: string }
      : {};

    return {
      slug: row.school_slug,
      name: row.schools_name,
      shortName: row.schools_short_name,
      route: row.school_route,
      tagline: row.school_tag_line,
      description,
      stat: { value: String(stat.value ?? ""), label: stat.label ?? "" },
      pattern: row.school_pattern,
      logo: row.school_logo,
    };
  }));
});

export default router;