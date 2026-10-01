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
            ? parsed.body
            : undefined;
    return Array.isArray(paragraphs)
        ? paragraphs.filter((paragraph) => typeof paragraph === "string")
        : [];
}
router.get("/", async (_req, res) => {
    const rows = await (0, db_1.db)("news")
        .select("slug", "title", "dek", "body", "image", "date", "catergory", "read_time", "featured")
        .orderBy("date", "desc");
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
exports.default = router;
