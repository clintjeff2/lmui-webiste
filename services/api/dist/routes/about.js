"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryAboutData = queryAboutData;
const express_1 = require("express");
const db_1 = require("../db");
const router = (0, express_1.Router)();
const aboutCollections = {
    pillars: { table: "about_pillars", columns: ["title", "description"] },
    staff: { table: "about_staff", columns: ["staff_matricule", "staff_name", "staff_title", "staff_bio", "staff_image", "staff_grade"] },
    milestones: { table: "about_lmui_history", columns: ["history_year", "history_discription"] },
    campusGallery: {
        table: "campus_gallery",
        columns: ["gallery_label", "gallery_size", "gallery_pattern", "gallery_image", "campus"],
    },
};
async function queryAboutData() {
    const [pillars, staffRows, historyRows, galleryRows] = await Promise.all([
        (0, db_1.db)(aboutCollections.pillars.table)
            .select(aboutCollections.pillars.columns),
        (0, db_1.db)(aboutCollections.staff.table)
            .select(aboutCollections.staff.columns),
        (0, db_1.db)(aboutCollections.milestones.table)
            .select(aboutCollections.milestones.columns),
        (0, db_1.db)(aboutCollections.campusGallery.table)
            .select(aboutCollections.campusGallery.columns),
    ]);
    const milestones = historyRows.map((row) => ({
        year: row.history_year,
        description: row.history_discription,
    }));
    const campusGallery = galleryRows.map((row) => ({
        label: row.gallery_label,
        size: row.gallery_size,
        pattern: row.gallery_pattern,
        campus: row.campus,
    }));
    return { pillars, staff: staffRows, milestones, campusGallery };
}
router.get("/", async (_req, res) => {
    res.json(await queryAboutData());
});
router.get("/:collection", async (req, res) => {
    const collection = aboutCollections[req.params.collection];
    if (!collection)
        return res.status(404).json({ error: "Unknown about collection" });
    const rows = await (0, db_1.db)(collection.table)
        .select(collection.columns);
    res.json(rows);
});
exports.default = router;
