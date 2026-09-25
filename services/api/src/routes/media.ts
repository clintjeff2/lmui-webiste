import fs from "fs";
import path from "path";
import { Router } from "express";
import multer from "multer";
import { db } from "../db";
import { toApiRow } from "../lib/caseUtils";
import { requireAuth } from "../middleware/auth";

const uploadsDir = path.resolve(process.cwd(), process.env.UPLOADS_DIR || "./uploads");
fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext).replace(/[^a-z0-9-_]/gi, "-");
    cb(null, `${Date.now()}-${base}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = ["image/png", "image/jpeg", "image/webp", "image/gif", "image/svg+xml"];
    cb(null, allowed.includes(file.mimetype));
  },
});

const router = Router();

// This serves uploads from local disk, which is fine for a single-server
// dev/demo deployment. Swap this route for an S3 (or equivalent) upload +
// a CDN-backed URL before going to production with real traffic.
router.post("/", requireAuth(), upload.single("file"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  const url = `/uploads/${req.file.filename}`;
  const [id] = await db("media").insert({
    url,
    filename: req.file.originalname,
    mime_type: req.file.mimetype,
    size_bytes: req.file.size,
    uploaded_by: req.user!.id,
  });
  const row = await db("media").where({ id }).first();
  res.status(201).json(toApiRow(row));
});

router.get("/", requireAuth(), async (_req, res) => {
  const rows = await db("media").orderBy("created_at", "desc").limit(200);
  res.json(rows.map(toApiRow));
});

export default router;
export { uploadsDir };
