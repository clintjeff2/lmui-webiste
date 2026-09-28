"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("@lmui/shared");
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const zod_1 = require("zod");
const db_1 = require("../db");
const caseUtils_1 = require("../lib/caseUtils");
const revalidate_1 = require("../lib/revalidate");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
async function loadDraftBlocks(page) {
    const rows = await (0, db_1.db)("page_blocks").where({ page }).orderBy("position", "asc");
    return rows.map((row) => ({
        id: row.id,
        page: row.page,
        blockType: row.block_type,
        position: row.position,
        config: (0, caseUtils_1.parseJsonColumn)(row.config),
        createdBy: row.created_by,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
    }));
}
// ---- Admin: draft editing ----
router.get("/:page/draft", (0, auth_1.requireAuth)(), async (req, res) => {
    res.json(await loadDraftBlocks(req.params.page));
});
router.get("/block-types", (0, auth_1.requireAuth)(), (_req, res) => {
    const defs = Object.values(shared_1.blockRegistry).map((def) => ({
        key: def.key,
        label: def.label,
        description: def.description,
        fields: def.fields,
        defaultConfig: def.defaultConfig(),
    }));
    res.json(defs);
});
const createBlockSchema = zod_1.z.object({
    blockType: zod_1.z.string().min(1),
    config: zod_1.z.record(zod_1.z.any()).optional(),
});
router.post("/:page/blocks", (0, auth_1.requireAuth)(), async (req, res) => {
    const parsed = createBlockSchema.safeParse(req.body);
    if (!parsed.success)
        return res.status(400).json({ error: parsed.error.flatten() });
    const def = shared_1.blockRegistry[parsed.data.blockType];
    if (!def)
        return res.status(400).json({ error: `Unknown block type: ${parsed.data.blockType}` });
    let config;
    try {
        config = (0, shared_1.validateBlockConfig)(parsed.data.blockType, parsed.data.config ?? def.defaultConfig());
    }
    catch (err) {
        return res.status(400).json({ error: "Invalid block config", details: err });
    }
    const page = req.params.page;
    const maxRow = await (0, db_1.db)("page_blocks").where({ page }).max("position as maxPosition").first();
    const nextPosition = (maxRow?.maxPosition ?? -1) + 1;
    const [id] = await (0, db_1.db)("page_blocks").insert({
        page,
        block_type: parsed.data.blockType,
        position: nextPosition,
        config: JSON.stringify(config),
        created_by: req.user.id,
    });
    const row = await (0, db_1.db)("page_blocks").where({ id }).first();
    res.status(201).json({
        ...(0, caseUtils_1.toApiRow)(row),
        config: (0, caseUtils_1.parseJsonColumn)(row.config),
    });
});
const updateBlockSchema = zod_1.z.object({
    config: zod_1.z.record(zod_1.z.any()).optional(),
});
router.patch("/:page/blocks/:id", (0, auth_1.requireAuth)(), async (req, res) => {
    const existing = await (0, db_1.db)("page_blocks")
        .where({ id: req.params.id, page: req.params.page })
        .first();
    if (!existing)
        return res.status(404).json({ error: "Not found" });
    const parsed = updateBlockSchema.safeParse(req.body);
    if (!parsed.success)
        return res.status(400).json({ error: parsed.error.flatten() });
    const update = {};
    if (parsed.data.config !== undefined) {
        try {
            update.config = JSON.stringify((0, shared_1.validateBlockConfig)(existing.block_type, parsed.data.config));
        }
        catch (err) {
            return res.status(400).json({ error: "Invalid block config", details: err });
        }
    }
    if (Object.keys(update).length > 0) {
        await (0, db_1.db)("page_blocks").where({ id: req.params.id }).update(update);
    }
    const row = await (0, db_1.db)("page_blocks").where({ id: req.params.id }).first();
    res.json({ ...(0, caseUtils_1.toApiRow)(row), config: (0, caseUtils_1.parseJsonColumn)(row.config) });
});
router.delete("/:page/blocks/:id", (0, auth_1.requireAuth)(), async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id))
        return res.status(400).json({ error: "Invalid block id" });
    await (0, db_1.db)("page_blocks").where({ id, page: req.params.page }).delete();
    res.status(204).end();
});
const reorderSchema = zod_1.z.array(zod_1.z.object({ id: zod_1.z.number(), position: zod_1.z.number() })).min(1);
router.post("/:page/blocks/reorder", (0, auth_1.requireAuth)(), async (req, res) => {
    const parsed = reorderSchema.safeParse(req.body);
    if (!parsed.success)
        return res.status(400).json({ error: parsed.error.flatten() });
    await db_1.db.transaction(async (trx) => {
        for (const item of parsed.data) {
            await trx("page_blocks")
                .where({ id: item.id, page: req.params.page })
                .update({ position: item.position });
        }
    });
    res.json(await loadDraftBlocks(req.params.page));
});
// ---- Preview (short-lived link to view the DRAFT before publishing) ----
// A dedicated 10-minute token, not the session cookie, is what goes into
// the preview URL — so a link that ends up in a chat message or a browser
// history entry can't be used to act as the admin.
router.post("/:page/preview-token", (0, auth_1.requireAuth)(), (req, res) => {
    const secret = process.env.JWT_SECRET;
    if (!secret)
        return res.status(500).json({ error: "Server misconfigured" });
    const token = jsonwebtoken_1.default.sign({ page: req.params.page }, secret, { expiresIn: "10m" });
    res.json({ token });
});
router.get("/:page/preview", async (req, res) => {
    const secret = process.env.JWT_SECRET;
    const token = req.query.token;
    if (!secret || typeof token !== "string") {
        return res.status(401).json({ error: "Missing preview token" });
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, secret);
        if (payload.page !== req.params.page)
            throw new Error("page mismatch");
    }
    catch {
        return res.status(401).json({ error: "Invalid or expired preview link" });
    }
    const draft = await loadDraftBlocks(req.params.page);
    res.json({
        page: req.params.page,
        publishedAt: null,
        blocks: draft.map((b) => ({ blockType: b.blockType, position: b.position, config: b.config })),
    });
});
// ---- Publish / revisions ----
router.post("/:page/publish", (0, auth_1.requireAuth)(), async (req, res) => {
    const page = req.params.page;
    const draft = await loadDraftBlocks(page);
    // Defensive re-validation: nothing goes live with a shape the renderer
    // doesn't understand, even if it somehow got saved to the draft table.
    for (const block of draft) {
        try {
            (0, shared_1.validateBlockConfig)(block.blockType, block.config);
        }
        catch (err) {
            return res.status(400).json({
                error: `Block #${block.id} (${block.blockType}) fails validation and cannot be published`,
                details: err,
            });
        }
    }
    const snapshot = draft.map((b) => ({
        blockType: b.blockType,
        position: b.position,
        config: b.config,
    }));
    const [revisionId] = await (0, db_1.db)("page_revisions").insert({
        page,
        snapshot: JSON.stringify(snapshot),
        published_by: req.user.id,
    });
    await (0, revalidate_1.triggerRevalidate)(page);
    const revision = await (0, db_1.db)("page_revisions").where({ id: revisionId }).first();
    res.status(201).json({ ...(0, caseUtils_1.toApiRow)(revision), snapshot: (0, caseUtils_1.parseJsonColumn)(revision.snapshot) });
});
router.get("/:page/live", async (req, res) => {
    // published_at has only 1-second resolution; id is the true tiebreaker
    // for two publishes landing in the same second.
    const revision = await (0, db_1.db)("page_revisions")
        .where({ page: req.params.page })
        .orderBy([
        { column: "published_at", order: "desc" },
        { column: "id", order: "desc" },
    ])
        .first();
    if (!revision)
        return res.json({ page: req.params.page, publishedAt: null, blocks: [] });
    res.json({
        page: req.params.page,
        publishedAt: revision.published_at,
        blocks: (0, caseUtils_1.parseJsonColumn)(revision.snapshot),
    });
});
router.get("/:page/revisions", (0, auth_1.requireAuth)(), async (req, res) => {
    const rows = await (0, db_1.db)("page_revisions")
        .leftJoin("users", "users.id", "page_revisions.published_by")
        .where("page_revisions.page", req.params.page)
        .orderBy([
        { column: "page_revisions.published_at", order: "desc" },
        { column: "page_revisions.id", order: "desc" },
    ])
        .select("page_revisions.id", "page_revisions.page", "page_revisions.published_at", "users.full_name as published_by_name");
    res.json(rows.map(caseUtils_1.toApiRow));
});
router.post("/:page/revisions/:revisionId/restore", (0, auth_1.requireAuth)(), async (req, res) => {
    const revision = await (0, db_1.db)("page_revisions")
        .where({ id: req.params.revisionId, page: req.params.page })
        .first();
    if (!revision)
        return res.status(404).json({ error: "Revision not found" });
    const snapshot = (0, caseUtils_1.parseJsonColumn)(revision.snapshot);
    await db_1.db.transaction(async (trx) => {
        await trx("page_blocks").where({ page: req.params.page }).delete();
        if (snapshot.length > 0) {
            await trx("page_blocks").insert(snapshot.map((b) => ({
                page: req.params.page,
                block_type: b.blockType,
                position: b.position,
                config: JSON.stringify(b.config),
                created_by: req.user.id,
            })));
        }
    });
    // Restoring only resets the DRAFT — an editor must still hit Publish,
    // so a bad rollback can be reviewed/previewed before it goes live.
    res.json(await loadDraftBlocks(req.params.page));
});
exports.default = router;
