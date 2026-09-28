import { Router } from "express";
import { db } from "../db";

const router = Router();

function formatAdmissionDate(value: Date | string): string {
  const date = value instanceof Date
    ? new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()))
    : new Date(`${String(value).slice(0, 10)}T00:00:00Z`);

  if (Number.isNaN(date.getTime())) return String(value);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export async function queryAdmissionsData() {
  const [stepRows, deadlineRows] = await Promise.all([
    db("admission_steps")
      .select("number", "title", "description")
      .orderBy("number"),
    db("admission_deadline")
      .select("round", "date", "note")
      .orderBy("date"),
  ]);

  const admissionSteps = stepRows.map((row) => ({
    number: String(row.number).padStart(2, "0"),
    title: row.title,
    description: row.description,
  }));

  const deadlines = deadlineRows.map((row) => ({
    round: row.round,
    date: formatAdmissionDate(row.date),
    note: row.note,
  }));

  return { admissionSteps, deadlines };
}

router.get("/", async (_req, res) => {
  res.json(await queryAdmissionsData());
});

export default router;