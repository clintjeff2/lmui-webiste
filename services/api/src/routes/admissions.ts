import { Router } from "express";
import { db } from "../db";

const router = Router();

function formatAdmissionDate(value: Date | string | null | undefined): string {
  if (!value) return "";

  try {
    const date =
      value instanceof Date
        ? new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()))
        : new Date(`${String(value).slice(0, 10)}T00:00:00Z`);

    if (Number.isNaN(date.getTime())) return String(value);

    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }).format(date);
  } catch {
    return String(value ?? "");
  }
}

export async function queryAdmissionsData() {
  try {
    const [stepRows, deadlineRows, faqRows] = await Promise.all([
      db("admission_steps")
        .select("number", "title", "description")
        .orderBy("number"),
      db("admission_deadline")
        .select("round", "date", "note"),
      db("admission_faq")
        .select("question", "answer"),
    ]);

    const admissionSteps = (stepRows || []).map((row) => ({
      number: String(row.number ?? "").padStart(2, "0"),
      title: row.title ?? "",
      description: row.description ?? "",
    }));

    const deadlines = (deadlineRows || []).map((row) => ({
      round: row.round ?? "",
      date: formatAdmissionDate(row.date),
      note: row.note ?? "",
    }));

    const admissionsFaq = (faqRows || []).map((row) => ({
      question: row.question ?? "",
      answer: row.answer ?? "",
    }));

    return { admissionSteps, deadlines, admissionsFaq };
  } catch (err) {
    console.error("[queryAdmissionsData Error]:", err);
    throw err;
  }
}

router.get("/", async (_req, res) => {
  const data = await queryAdmissionsData();
  res.json(data);
});

export default router;