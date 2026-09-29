import { Router } from "express";
import { db } from "../db";

const router = Router();

interface TestimonialRow {
  quote: string;
  student_name: string;
  detail: string | null;
  student_image: string | null;
}

router.get("/", async (_req, res) => {
  const rows = await db("testimonials").select(
    "quote",
    "student_name",
    "detail",
    "student_image",
  ) as TestimonialRow[];

  res.json(rows.map((row) => ({
    quote: row.quote,
    name: row.student_name,
    detail: row.detail ?? "",
    image: row.student_image ?? "",
  })));
});

export default router;