import { Router } from "express";
import { db } from "../db";

const router = Router();

interface SchoolRow {
  school_slug: string;
  school_route?: string;
  school_name: string;
  school_short_name: string;
  school_tag_line: string;
  school_description: unknown;
  school_stat: unknown;
  school_pattern: string;
  school_logo?: string | null;
}

function parseJson(value: unknown): unknown {
  if (typeof value !== "string") return value;
  return JSON.parse(value);
}

router.get("/", async (_req, res) => {
  const columns = [
    "school_slug",
    "school_name",
    "school_short_name",
    "school_tag_line",
    "school_description",
    "school_stat",
    "school_pattern",
  ];
  const hasRoute = await db.schema.hasColumn("landmark_schools", "school_route");
  if (hasRoute) columns.push("school_route");
  if (await db.schema.hasColumn("landmark_schools", "school_logo")) {
    columns.push("school_logo");
  }

  const rows = await db("landmark_schools").select(columns) as SchoolRow[];

  res.json(rows.map((row) => {
    const descriptionData = parseJson(row.school_description);
    const statData = parseJson(row.school_stat);
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
      name: row.school_name,
      shortName: row.school_short_name,
      route: row.school_route ?? ({
        engineering: "/academics/lsset",
        business: "/academics/lsbss",
        biomedical: "/academics/lsmbs",
        agriculture: "/academics/lsafs",
      }[row.school_slug] ?? `/academics/${row.school_slug}`),
      tagline: row.school_tag_line,
      description,
      stat: { value: String(stat.value ?? ""), label: stat.label ?? "" },
      pattern: row.school_pattern,
      logo: row.school_logo ?? "",
    };
  }));
});

export default router;