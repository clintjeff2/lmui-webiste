import { Router } from "express";
import { db } from "../db";
import { parseJsonColumn, toApiRow } from "../lib/caseUtils";

const router = Router();

interface OptionFilters {
  fieldSlug?: string;
  degreeLevel?: string;
}

function parseStringList(value: unknown, key: "highlights" | "outcomes" | "admissionRequirements"): string[] {
  const parsed = parseJsonColumn<unknown>(value);
  const list = Array.isArray(parsed)
    ? parsed
    : typeof parsed === "object" && parsed !== null
      ? (parsed as Record<string, unknown>).items ?? (parsed as Record<string, unknown>)[key]
      : null;

  return Array.isArray(list)
    ? list.filter((item): item is string => typeof item === "string")
    : [];
}

export async function queryOptionsData(filters: OptionFilters = {}) {
  const query = db("options")
    .select(
      "id",
      "slug",
      "name",
      "degree_level",
      "duration",
      "summary",
      "highlights",
      "outcomes",
      "hero_image_url",
      "fieldSlug",
      "admissionRequirements",
      "registration",
      "tuitionFees"
    );

  if (filters.fieldSlug) query.andWhere("fieldSlug", filters.fieldSlug);
  if (filters.degreeLevel) query.andWhere("degree_level", filters.degreeLevel);

  const rows = await query
    .orderBy("name", "asc");
  return rows.map((row) => {
    const apiRow = toApiRow(row);

    return {
      ...apiRow,
      highlights: parseStringList(row.highlights, "highlights"),
      outcomes: parseStringList(row.outcomes, "outcomes"),
      admissionRequirements: parseStringList(row.admissionRequirements, "admissionRequirements"),
    };
  }); 
}

router.get("/", async (req, res) => {
  res.json(await queryOptionsData({
    fieldSlug: typeof req.query.fieldSlug === "string" ? req.query.fieldSlug : undefined,
    degreeLevel: typeof req.query.degreeLevel === "string" ? req.query.degreeLevel : undefined,
  }));
});

export default router;