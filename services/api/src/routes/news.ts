import { Router } from "express";
import { db } from "../db";

const router = Router();

interface NewsRow {
  slug: string;
  title: string;
  dek: string;
  catergory: string;
  date: string | Date;
  read_time: string;
  body: unknown;
  image: string;
}

function parseBody(value: unknown): string[] {
  let parsed = value;
  if (typeof parsed === "string") {
    const rawBody = parsed;
    try {
      parsed = JSON.parse(rawBody);
    } catch {
      return [rawBody];
    }
  }

  const paragraphs = Array.isArray(parsed)
    ? parsed
    : typeof parsed === "object" && parsed !== null
      ? (parsed as { body?: unknown }).body
      : undefined;

  return Array.isArray(paragraphs)
    ? paragraphs.filter((paragraph): paragraph is string => typeof paragraph === "string")
    : [];
}

router.get("/", async (_req, res) => {
  const rows = await db("news")
    .select("slug", "title", "dek", "catergory", "date", "read_time", "body", "image")
    .orderBy("date", "desc") as NewsRow[];

  res.json(rows.map((row, index) => ({
    slug: row.slug,
    title: row.title,
    dek: row.dek,
    category: row.catergory,
    date: row.date instanceof Date ? row.date.toISOString().slice(0, 10) : String(row.date).slice(0, 10),
    readTime: row.read_time,
    featured: index === 0,
    body: parseBody(row.body),
    image: row.image,
  })));
});

export default router;