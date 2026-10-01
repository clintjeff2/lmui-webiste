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
    const columns = [
        "school_slug",
        "school_name",
        "school_short_name",
        "school_tag_line",
        "school_description",
        "school_stat",
        "school_pattern",
    ];
    const hasRoute = await db_1.db.schema.hasColumn("landmark_schools", "school_route");
    if (hasRoute)
        columns.push("school_route");
    if (await db_1.db.schema.hasColumn("landmark_schools", "school_logo")) {
        columns.push("school_logo");
    }
    const rows = await (0, db_1.db)("landmark_schools").select(columns);
    res.json(rows.map((row) => {
        const descriptionData = parseJson(row.school_description);
        const statData = parseJson(row.school_stat);
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
            name: row.school_name,
            shortName: row.school_short_name,
            route: row.school_route ?? ({
                engineering: "/academics/lsset",
                business: "/academics/lsbss",
                biomedical: "/academics/lsmbs",
                agriculture: "/academics/lsafs",
            }[row.school_slug] ?? `/academics/${row.school_slug}`),
            tagline: row.school_tag_line,
            description,
            stat: { value: String(stat.value ?? ""), label: stat.label ?? "" },
            pattern: row.school_pattern,
            logo: row.school_logo ?? "",
        };
    }));
});
exports.default = router;
