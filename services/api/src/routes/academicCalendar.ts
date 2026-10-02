import { Router } from "express";
import { db } from "../db";

const router = Router();

router.get("/", async (_req, res) => {
  const events = await db("academic_calenda")
    .select("serial_number", "dates", "events")
    .orderBy("serial_number", "asc");

  res.json(events);
});

export default router;