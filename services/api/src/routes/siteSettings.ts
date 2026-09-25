import { Router } from "express";
import { z } from "zod";
import { db } from "../db";
import { requireAuth } from "../middleware/auth";

const router = Router();

router.get("/:key", async (req, res) => {
  const row = await db("site_settings").where({ key: req.params.key }).first();
  if (!row) return res.status(404).json({ error: "Not found" });
  res.json({ key: row.key, value: typeof row.value === "string" ? JSON.parse(row.value) : row.value });
});

const upsertSchema = z.object({ value: z.any() });

router.put("/:key", requireAuth(["admin"]), async (req, res) => {
  const parsed = upsertSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });

  const existing = await db("site_settings").where({ key: req.params.key }).first();
  if (existing) {
    await db("site_settings")
      .where({ key: req.params.key })
      .update({ value: JSON.stringify(parsed.data.value) });
  } else {
    await db("site_settings").insert({
      key: req.params.key,
      value: JSON.stringify(parsed.data.value),
    });
  }
  res.json({ key: req.params.key, value: parsed.data.value });
});

export default router;
