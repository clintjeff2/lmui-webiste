"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const router = (0, express_1.Router)();
function parseJson(value) {
    if (typeof value !== "string")
        return value;
    return JSON.parse(value);
}
router.get("/", async (_req, res) => {
    const rows = await (0, db_1.db)("landmark_schools").select("school_slug", "school_route", "schools_name", "schools_short_name", "school_tag_line", "schools_description", "schools_stat", "school_pattern");
    res.json(rows.map((row) => {
        const descriptionData = parseJson(row.schools_description);
        const statData = parseJson(row.schools_stat);
        const description = Array.isArray(descriptionData)
            ? descriptionData
            : typeof descriptionData === "object" && descriptionData !== null
                ? descriptionData.description ?? []
                : typeof descriptionData === "string" ? descriptionData : [];
        const stat = typeof statData === "object" && statData !== null
            ? statData
            : {};
        return {
            slug: row.school_slug,
            name: row.schools_name,
            shortName: row.schools_short_name,
            route: row.school_route,
            tagline: row.school_tag_line,
            description,
            stat: { value: String(stat.value ?? ""), label: stat.label ?? "" },
            pattern: row.school_pattern,
        };
    }));
});
exports.default = router;
