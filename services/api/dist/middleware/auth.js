"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = signToken;
exports.setAuthCookie = setAuthCookie;
exports.clearAuthCookie = clearAuthCookie;
exports.requireAuth = requireAuth;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const COOKIE_NAME = "lmui_token";
function signToken(payload) {
    const secret = process.env.JWT_SECRET;
    if (!secret)
        throw new Error("JWT_SECRET is not set");
    return jsonwebtoken_1.default.sign(payload, secret, {
        expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    });
}
function setAuthCookie(res, token) {
    res.cookie(COOKIE_NAME, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
}
function clearAuthCookie(res) {
    res.clearCookie(COOKIE_NAME);
}
/** Requires a valid session. Optionally restrict to specific roles. */
function requireAuth(roles) {
    return (req, res, next) => {
        const token = req.cookies?.[COOKIE_NAME];
        if (!token) {
            return res.status(401).json({ error: "Not authenticated" });
        }
        try {
            const secret = process.env.JWT_SECRET;
            if (!secret)
                throw new Error("JWT_SECRET is not set");
            const payload = jsonwebtoken_1.default.verify(token, secret);
            if (roles && !roles.includes(payload.role)) {
                return res.status(403).json({ error: "Not authorized" });
            }
            req.user = payload;
            next();
        }
        catch {
            return res.status(401).json({ error: "Invalid or expired session" });
        }
    };
}
