import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface TokenPayload {
  id: number;
  email: string;
  role: "admin" | "editor";
}

const COOKIE_NAME = "lmui_token";

export function signToken(payload: TokenPayload): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is not set");
  return jwt.sign(payload, secret, {
    expiresIn: (process.env.JWT_EXPIRES_IN as any) || "7d",
  });
}

export function setAuthCookie(res: Response, token: string): void {
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

export function clearAuthCookie(res: Response): void {
  res.clearCookie(COOKIE_NAME);
}

/** Requires a valid session. Optionally restrict to specific roles. */
export function requireAuth(roles?: Array<"admin" | "editor">) {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.[COOKIE_NAME];
    if (!token) {
      return res.status(401).json({ error: "Not authenticated" });
    }
    try {
      const secret = process.env.JWT_SECRET;
      if (!secret) throw new Error("JWT_SECRET is not set");
      const payload = jwt.verify(token, secret) as TokenPayload;
      if (roles && !roles.includes(payload.role)) {
        return res.status(403).json({ error: "Not authorized" });
      }
      req.user = payload;
      next();
    } catch {
      return res.status(401).json({ error: "Invalid or expired session" });
    }
  };
}
