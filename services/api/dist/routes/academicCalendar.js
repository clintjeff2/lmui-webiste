"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const router = (0, express_1.Router)();
router.get("/", async (_req, res) => {
    const events = await (0, db_1.db)("academic_calenda")
        .select("serial_number", "dates", "events")
        .orderBy("serial_number", "asc");
    res.json(events);
});
exports.default = router;
