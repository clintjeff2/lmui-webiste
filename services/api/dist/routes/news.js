"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const router = (0, express_1.Router)();
function parseBody(value) {
    let parsed = value;
    if (typeof parsed === "string") {
        const rawBody = parsed;
        try {
            parsed = JSON.parse(rawBody);
        }
        catch {
            return [rawBody];
        }
    }
    const paragraphs = Array.isArray(parsed)
        ? parsed
        : typeof parsed === "object" && parsed !== null
            ? parsed.body
            : undefined;
    return Array.isArray(paragraphs)
        ? paragraphs.filter((paragraph) => typeof paragraph === "string")
        : [];
}
router.get("/", async (_req, res) => {
    const rows = await (0, db_1.db)("news")
        .select("slug", "title", "dek", "catergory", "date", "read_time", "body", "image")
        .orderBy("date", "desc");
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
exports.default = router;
