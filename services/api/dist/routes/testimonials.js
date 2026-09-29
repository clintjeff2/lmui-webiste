"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const router = (0, express_1.Router)();
router.get("/", async (_req, res) => {
    const rows = await (0, db_1.db)("testimonials").select("quote", "student_name", "detail", "student_image");
    res.json(rows.map((row) => ({
        quote: row.quote,
        name: row.student_name,
        detail: row.detail ?? "",
        image: row.student_image ?? "",
    })));
});
exports.default = router;
