import { Router } from "express";
import { db } from "../db";

const router = Router();

interface NewsRow {
  slug: string;
  title: string;
  dek: string;
  body: unknown;
  image: string | null;
  date: string | Date | null;
  catergory: string | Date;
  read_time: string | null;
  featured: boolean | null;
}

function parseBody(value: unknown): string[] {
  let parsed = value;
  if (typeof parsed === "string") {
    const rawBody = parsed;
    try {
      parsed = JSON.parse(rawBody);
    } catch {
      const paragraphs = rawBody.match(/<p\b[^>]*>([\s\S]*?)<\/p>/gi);
      if (paragraphs) {
        return paragraphs.map((paragraph) => paragraph
          .replace(/<[^>]+>/g, "")
          .replace(/&nbsp;/gi, " ")
          .trim()).filter(Boolean);
      }
      return [rawBody.replace(/<[^>]+>/g, "").trim()].filter(Boolean);
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
    .select("slug", "title", "dek", "body", "image", "date", "catergory", "read_time", "featured")
    .orderBy("date", "desc") as NewsRow[];

  res.json(rows.map((row, index) => ({
    slug: row.slug,
    title: row.title,
    dek: row.dek,
    category: row.catergory,
    date: String(row.date).slice(0, 10),
    readTime: `${Math.max(1, Math.ceil(parseBody(row.body).join(" ").split(/\s+/).filter(Boolean).length / 200))} min read`,
    featured: row.featured,
    body: parseBody(row.body),
    image: row.image ?? "",
  })));
});

export default router;