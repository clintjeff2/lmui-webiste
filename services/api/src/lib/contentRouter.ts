import { Router } from "express";
import { AnyZodObject } from "zod";
import { db } from "../db";
import { requireAuth } from "../middleware/auth";
import { snakeToCamel, toApiRow, toDbRow } from "./caseUtils";

interface ContentRouterOptions<T extends AnyZodObject> {
  table: string;
  schema: T;
  /** snake_case DB columns that can be filtered via ?camelCaseName= on the public list endpoint. */
  filterableColumns?: string[];
}

/**
 * One factory covers every fixed-structure content type (Options,
 * Departments, Faculty, News, Events): public reads only ever see
 * status = 'published'; every write requires auth. This is the pattern to
 * copy for any new content type — register a table, a zod schema, and
 * you're done, no bespoke route file needed.
 */
export function makeContentRouter<T extends AnyZodObject>(opts: ContentRouterOptions<T>) {
  const { table, schema, filterableColumns = [] } = opts;
  const router = Router();

  router.get("/", async (req, res) => {
    const query = db(table).where({ status: "published" });
    for (const column of filterableColumns) {
      const value = req.query[snakeToCamel(column)];
      if (typeof value === "string" && value.length > 0) {
        query.andWhere(column, value);
      }
    }
    const rows = await query.orderBy("created_at", "desc");
    res.json(rows.map(toApiRow));
  });

  router.get("/admin/all", requireAuth(), async (_req, res) => {
    const rows = await db(table).orderBy("updated_at", "desc");
    res.json(rows.map(toApiRow));
  });

  router.get("/:slug", async (req, res) => {
    const row = await db(table).where({ slug: req.params.slug, status: "published" }).first();
    if (!row) return res.status(404).json({ error: "Not found" });
    res.json(toApiRow(row));
  });

  router.post("/", requireAuth(), async (req, res) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });

    const [id] = await db(table).insert(toDbRow(parsed.data));
    const row = await db(table).where({ id }).first();
    res.status(201).json(toApiRow(row));
  });

  router.patch("/:id", requireAuth(), async (req, res) => {
    const parsed = schema.partial().safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });

    const update = toDbRow(parsed.data);
    if (Object.keys(update).length > 0) {
      await db(table).where({ id: req.params.id }).update(update);
    }
    const row = await db(table).where({ id: req.params.id }).first();
    if (!row) return res.status(404).json({ error: "Not found" });
    res.json(toApiRow(row));
  });

  router.delete("/:id", requireAuth(), async (req, res) => {
    await db(table).where({ id: req.params.id }).delete();
    res.status(204).end();
  });

  return router;
}
