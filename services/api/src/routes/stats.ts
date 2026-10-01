import { Router } from "express";
import { db } from "../db";

const router = Router();

export async function queryStatsData() {
  const [heroRows, secondaryRows, campusRows, optionRows] = await Promise.all([
    db("hero_stats")
      .select("value", "prefix", "suffix", "label")
      .orderBy("position", "asc"),
    db("secondary_stats")
      .select("value", "value_source", "prefix", "suffix", "label")
      .orderBy("position", "asc"),
    db("campus_gallery").select("campus"),
    db("options").select("name").where({ status: "published" }),
  ]);

  const campusCount = new Set(
    campusRows
      .map((row) => typeof row.campus === "string" ? row.campus.trim().toLocaleLowerCase() : "")
      .filter(Boolean),
  ).size;
  const optionCount = new Set(
    optionRows
      .map((row) => typeof row.name === "string" ? row.name.trim().toLocaleLowerCase() : "")
      .filter(Boolean),
  ).size;

  const secondaryStats = secondaryRows.map((row) => ({
    value: row.value_source === "campus_count"
      ? campusCount
      : row.value_source === "years_since_founded"
        ? new Date().getFullYear() - Number(row.value)
        : row.value,
    prefix: row.prefix ?? undefined,
    suffix: row.suffix ?? undefined,
    label: row.label,
  }));

  return {
    heroStats: heroRows.map((row) => ({
      value: /degree\s+(options|programs)/i.test(row.label) ? optionCount : row.value,
      prefix: row.prefix ?? undefined,
      suffix: row.suffix ?? undefined,
      label: row.label,
    })),
    secondaryStats,
  };
}

router.get("/", async (_req, res) => {
  res.json(await queryStatsData());
});

export default router;