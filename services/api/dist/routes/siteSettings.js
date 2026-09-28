"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const db_1 = require("../db");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.get("/:key", async (req, res) => {
    const row = await (0, db_1.db)("site_settings").where({ key: req.params.key }).first();
    if (!row)
        return res.status(404).json({ error: "Not found" });
    res.json({ key: row.key, value: typeof row.value === "string" ? JSON.parse(row.value) : row.value });
});
const upsertSchema = zod_1.z.object({ value: zod_1.z.any() });
router.put("/:key", (0, auth_1.requireAuth)(["admin"]), async (req, res) => {
    const parsed = upsertSchema.safeParse(req.body);
    if (!parsed.success)
        return res.status(400).json({ error: parsed.error.flatten() });
    const existing = await (0, db_1.db)("site_settings").where({ key: req.params.key }).first();
    if (existing) {
        await (0, db_1.db)("site_settings")
            .where({ key: req.params.key })
            .update({ value: JSON.stringify(parsed.data.value) });
    }
    else {
        await (0, db_1.db)("site_settings").insert({
            key: req.params.key,
            value: JSON.stringify(parsed.data.value),
        });
    }
    res.json({ key: req.params.key, value: parsed.data.value });
});
exports.default = router;
