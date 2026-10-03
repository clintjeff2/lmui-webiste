"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryOptionsData = queryOptionsData;
const express_1 = require("express");
const db_1 = require("../db");
const caseUtils_1 = require("../lib/caseUtils");
const router = (0, express_1.Router)();
function parseStringList(value, key) {
    const parsed = (0, caseUtils_1.parseJsonColumn)(value);
    const list = Array.isArray(parsed)
        ? parsed
        : typeof parsed === "object" && parsed !== null
            ? parsed.items ?? parsed[key]
            : null;
    return Array.isArray(list)
        ? list.filter((item) => typeof item === "string")
        : [];
}
async function queryOptionsData(filters = {}) {
    const query = (0, db_1.db)("options")
        .select("id", "slug", "name", "degree_level", "duration", "summary", "highlights", "outcomes", "hero_image_url", "fieldSlug");
    if (filters.fieldSlug)
        query.andWhere("fieldSlug", filters.fieldSlug);
    if (filters.degreeLevel)
        query.andWhere("degree_level", filters.degreeLevel);
    const rows = await query
        .orderBy("fieldSlug", "desc")
        .orderBy("name", "desc");
    return rows.map((row) => {
        const apiRow = (0, caseUtils_1.toApiRow)(row);
        return {
            ...apiRow,
            highlights: parseStringList(row.highlights, "highlights"),
            outcomes: parseStringList(row.outcomes, "outcomes"),
        };
    });
}
router.get("/", async (req, res) => {
    res.json(await queryOptionsData({
        fieldSlug: typeof req.query.fieldSlug === "string" ? req.query.fieldSlug : undefined,
        degreeLevel: typeof req.query.degreeLevel === "string" ? req.query.degreeLevel : undefined,
    }));
});
exports.default = router;
