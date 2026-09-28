import { Router } from "express";
import { db } from "../db";

const router = Router();

const aboutCollections = {
  pillars: { table: "about_pillars", columns: ["title", "description"] },
  staff: { table: "about_staff", columns: ["staff_matricule", "staff_name", "staff_title", "staff_bio", "staff_image", "staff_grade"] },
  milestones: { table: "about_lmui_history", columns: ["history_year", "history_discription"] },
  campusGallery: {
    table: "campus_gallery",
    columns: ["gallery_label", "gallery_size", "gallery_pattern", "gallery_image", "campus"],
  },
} satisfies Record<string, { table: string; columns: string[] }>;

export async function queryAboutData() {
  const [pillars, staffRows, historyRows, galleryRows] = await Promise.all([
    db(aboutCollections.pillars.table)
      .select(aboutCollections.pillars.columns),
    db(aboutCollections.staff.table)
      .select(aboutCollections.staff.columns),
    db(aboutCollections.milestones.table)
      .select(aboutCollections.milestones.columns),
    db(aboutCollections.campusGallery.table)
      .select(aboutCollections.campusGallery.columns),
  ]);

  const milestones = historyRows.map((row) => ({
    year: row.history_year,
    description: row.history_discription,
  }));
  const campusGallery = galleryRows.map((row) => ({
    label: row.gallery_label,
    size: row.gallery_size,
    pattern: row.gallery_pattern,
    campus: row.campus,
  }));

  return { pillars, staff: staffRows, milestones, campusGallery };
}

router.get("/", async (_req, res) => {
  res.json(await queryAboutData());
});

router.get("/:collection", async (req, res) => {
  const collection = aboutCollections[req.params.collection as keyof typeof aboutCollections];
  if (!collection) return res.status(404).json({ error: "Unknown about collection" });

  const rows = await db(collection.table)
    .select(collection.columns);
  res.json(rows);
});

export default router;