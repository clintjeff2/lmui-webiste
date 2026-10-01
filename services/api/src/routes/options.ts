import { Router } from "express";
import { db } from "../db";
import { toApiRow } from "../lib/caseUtils";

const router = Router();

interface OptionFilters {
  fieldSlug?: string;
  degreeLevel?: string;
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
      "body",
      "highlights",
      "outcomes",
      "hero_image_url",
      "field_slug",
    );

  if (filters.fieldSlug) query.andWhere("field_slug", filters.fieldSlug);
  if (filters.degreeLevel) query.andWhere("degree_level", filters.degreeLevel);

  const rows = await query.orderBy("created_at", "desc");
  return rows.map(toApiRow);
}

router.get("/", async (req, res) => {
  res.json(await queryOptionsData({
    fieldSlug: typeof req.query.fieldSlug === "string" ? req.query.fieldSlug : undefined,
    degreeLevel: typeof req.query.degreeLevel === "string" ? req.query.degreeLevel : undefined,
  }));
});

export default router;