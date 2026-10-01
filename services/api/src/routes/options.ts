import { Router } from "express";
import { db } from "../db";
import { toApiRow } from "../lib/caseUtils";

const router = Router();

interface OptionFilters {
  departmentSlug?: string;
  degreeLevel?: string;
}

export async function queryOptionsData(filters: OptionFilters = {}) {
  const query = db("options")
    .select(
      "id",
      "slug",
      "name",
      "degree_level",
      "department_slug",
      "school_slug",
      "duration",
      "summary",
      "body",
      "highlights",
      "outcomes",
      "hero_image_url",
      "status",
      "created_at",
      "updated_at",
    )
    .where({ status: "published" });

  if (filters.departmentSlug) query.andWhere("department_slug", filters.departmentSlug);
  if (filters.degreeLevel) query.andWhere("degree_level", filters.degreeLevel);

  const rows = await query.orderBy("created_at", "desc");
  return rows.map(toApiRow);
}

router.get("/", async (req, res) => {
  res.json(await queryOptionsData({
    departmentSlug: typeof req.query.departmentSlug === "string" ? req.query.departmentSlug : undefined,
    degreeLevel: typeof req.query.degreeLevel === "string" ? req.query.degreeLevel : undefined,
  }));
});

export default router;