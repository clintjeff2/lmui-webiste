"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryOptionsData = queryOptionsData;
const express_1 = require("express");
const db_1 = require("../db");
const caseUtils_1 = require("../lib/caseUtils");
const router = (0, express_1.Router)();
async function queryOptionsData(filters = {}) {
    const query = (0, db_1.db)("options")
        .select("id", "slug", "name", "degree_level", "department_slug", "school_slug", "duration", "summary", "body", "highlights", "outcomes", "hero_image_url", "status", "created_at", "updated_at")
        .where({ status: "published" });
    if (filters.departmentSlug)
        query.andWhere("department_slug", filters.departmentSlug);
    if (filters.degreeLevel)
        query.andWhere("degree_level", filters.degreeLevel);
    const rows = await query.orderBy("created_at", "desc");
    return rows.map(caseUtils_1.toApiRow);
}
router.get("/", async (req, res) => {
    res.json(await queryOptionsData({
        departmentSlug: typeof req.query.departmentSlug === "string" ? req.query.departmentSlug : undefined,
        degreeLevel: typeof req.query.degreeLevel === "string" ? req.query.degreeLevel : undefined,
    }));
});
exports.default = router;
