"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const express_1 = require("express");
const zod_1 = require("zod");
const db_1 = require("../db");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(1),
});
router.post("/login", async (req, res) => {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: "Invalid email or password" });
    }
    const { email, password } = parsed.data;
    const user = await (0, db_1.db)("users").where({ email }).first();
    if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
    }
    const ok = await bcryptjs_1.default.compare(password, user.password_hash);
    if (!ok) {
        return res.status(401).json({ error: "Invalid email or password" });
    }
    const token = (0, auth_1.signToken)({ id: user.id, email: user.email, role: user.role });
    (0, auth_1.setAuthCookie)(res, token);
    res.json({
        id: user.id,
        email: user.email,
        fullName: user.full_name,
        role: user.role,
    });
});
router.post("/logout", (_req, res) => {
    (0, auth_1.clearAuthCookie)(res);
    res.status(204).end();
});
router.get("/me", (0, auth_1.requireAuth)(), async (req, res) => {
    const user = await (0, db_1.db)("users").where({ id: req.user.id }).first();
    if (!user)
        return res.status(404).json({ error: "Not found" });
    res.json({
        id: user.id,
        email: user.email,
        fullName: user.full_name,
        role: user.role,
    });
});
exports.default = router;
