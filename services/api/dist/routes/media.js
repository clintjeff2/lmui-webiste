"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadsDir = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const db_1 = require("../db");
const caseUtils_1 = require("../lib/caseUtils");
const auth_1 = require("../middleware/auth");
const uploadsDir = path_1.default.resolve(process.cwd(), process.env.UPLOADS_DIR || "./uploads");
exports.uploadsDir = uploadsDir;
fs_1.default.mkdirSync(uploadsDir, { recursive: true });
const storage = multer_1.default.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadsDir),
    filename: (_req, file, cb) => {
        const ext = path_1.default.extname(file.originalname);
        const base = path_1.default.basename(file.originalname, ext).replace(/[^a-z0-9-_]/gi, "-");
        cb(null, `${Date.now()}-${base}${ext}`);
    },
});
const upload = (0, multer_1.default)({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
        const allowed = ["image/png", "image/jpeg", "image/webp", "image/gif", "image/svg+xml"];
        cb(null, allowed.includes(file.mimetype));
    },
});
const router = (0, express_1.Router)();
// This serves uploads from local disk, which is fine for a single-server
// dev/demo deployment. Swap this route for an S3 (or equivalent) upload +
// a CDN-backed URL before going to production with real traffic.
router.post("/", (0, auth_1.requireAuth)(), upload.single("file"), async (req, res) => {
    if (!req.file)
        return res.status(400).json({ error: "No file uploaded" });
    const url = `/uploads/${req.file.filename}`;
    const [id] = await (0, db_1.db)("media").insert({
        url,
        filename: req.file.originalname,
        mime_type: req.file.mimetype,
        size_bytes: req.file.size,
        uploaded_by: req.user.id,
    });
    const row = await (0, db_1.db)("media").where({ id }).first();
    res.status(201).json((0, caseUtils_1.toApiRow)(row));
});
router.get("/", (0, auth_1.requireAuth)(), async (_req, res) => {
    const rows = await (0, db_1.db)("media").orderBy("created_at", "desc").limit(200);
    res.json(rows.map(caseUtils_1.toApiRow));
});
exports.default = router;
