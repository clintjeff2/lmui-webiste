"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryFieldsData = queryFieldsData;
const express_1 = require("express");
const db_1 = require("../db");
const caseUtils_1 = require("../lib/caseUtils");
const router = (0, express_1.Router)();
async function queryFieldsData() {
    const rows = await (0, db_1.db)("fields")
        .select("id", "slug", "name", "school_slug", "degree_level", "duration", "summary", "highlights", "outcomes", "position")
        .orderBy("position", "asc");
    return rows.map(caseUtils_1.toApiRow);
}
router.get("/", async (_req, res) => {
    res.json(await queryFieldsData());
});
exports.default = router;
