"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeContentRouter = makeContentRouter;
const express_1 = require("express");
const db_1 = require("../db");
const auth_1 = require("../middleware/auth");
const caseUtils_1 = require("./caseUtils");
/**
 * One factory covers every fixed-structure content type (Programs,
 * Departments, Faculty, News, Events): public reads only ever see
 * status = 'published'; every write requires auth. This is the pattern to
 * copy for any new content type — register a table, a zod schema, and
 * you're done, no bespoke route file needed.
 */
function makeContentRouter(opts) {
    const { table, schema, filterableColumns = [] } = opts;
    const router = (0, express_1.Router)();
    router.get("/", async (req, res) => {
        const query = (0, db_1.db)(table).where({ status: "published" });
        for (const column of filterableColumns) {
            const value = req.query[(0, caseUtils_1.snakeToCamel)(column)];
            if (typeof value === "string" && value.length > 0) {
                query.andWhere(column, value);
            }
        }
        const rows = await query.orderBy("created_at", "desc");
        res.json(rows.map(caseUtils_1.toApiRow));
    });
    router.get("/admin/all", (0, auth_1.requireAuth)(), async (_req, res) => {
        const rows = await (0, db_1.db)(table).orderBy("updated_at", "desc");
        res.json(rows.map(caseUtils_1.toApiRow));
    });
    router.get("/:slug", async (req, res) => {
        const row = await (0, db_1.db)(table).where({ slug: req.params.slug, status: "published" }).first();
        if (!row)
            return res.status(404).json({ error: "Not found" });
        res.json((0, caseUtils_1.toApiRow)(row));
    });
    router.post("/", (0, auth_1.requireAuth)(), async (req, res) => {
        const parsed = schema.safeParse(req.body);
        if (!parsed.success)
            return res.status(400).json({ error: parsed.error.flatten() });
        const [id] = await (0, db_1.db)(table).insert((0, caseUtils_1.toDbRow)(parsed.data));
        const row = await (0, db_1.db)(table).where({ id }).first();
        res.status(201).json((0, caseUtils_1.toApiRow)(row));
    });
    router.patch("/:id", (0, auth_1.requireAuth)(), async (req, res) => {
        const parsed = schema.partial().safeParse(req.body);
        if (!parsed.success)
            return res.status(400).json({ error: parsed.error.flatten() });
        const update = (0, caseUtils_1.toDbRow)(parsed.data);
        if (Object.keys(update).length > 0) {
            await (0, db_1.db)(table).where({ id: req.params.id }).update(update);
        }
        const row = await (0, db_1.db)(table).where({ id: req.params.id }).first();
        if (!row)
            return res.status(404).json({ error: "Not found" });
        res.json((0, caseUtils_1.toApiRow)(row));
    });
    router.delete("/:id", (0, auth_1.requireAuth)(), async (req, res) => {
        await (0, db_1.db)(table).where({ id: req.params.id }).delete();
        res.status(204).end();
    });
    return router;
}
