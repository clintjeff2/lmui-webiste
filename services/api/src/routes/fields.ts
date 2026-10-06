import { Router } from "express";
import { db } from "../db";
import { toApiRow } from "../lib/caseUtils";

const router = Router();

export async function queryFieldsData() {
  const rows = await db("fields")
    .select(
      "id",
      "slug",
      "name",
      "school_slug",
      "field_image",
      "degree_level",
      "duration",
      "summary",
      "highlights",
      "outcomes",
      "position",
    )
    .orderBy("name", "asc");

  return rows.map(toApiRow);
}

router.get("/", async (_req, res) => {
  res.json(await queryFieldsData());
});

export default router;