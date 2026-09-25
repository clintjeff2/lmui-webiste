"use client";

import type { Program } from "@lmui/shared";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

type FormState = {
  slug: string;
  name: string;
  degreeLevel: "undergraduate" | "graduate" | "certificate";
  departmentSlug: string;
  summary: string;
  body: string;
  heroImageUrl: string;
  status: "draft" | "published";
};

const BLANK: FormState = {
  slug: "",
  name: "",
  degreeLevel: "undergraduate",
  departmentSlug: "",
  summary: "",
  body: "",
  heroImageUrl: "",
  status: "draft",
};

/**
 * This screen is the template for every other fixed-structure content
 * type (Departments, Faculty, News, Events): the API already exposes the
 * identical CRUD shape for each (see services/api/src/lib/contentRouter.ts)
 * — copy this file, point it at a different api.* method and field set.
 */
export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [editingId, setEditingId] = useState<number | "new" | null>(null);
  const [form, setForm] = useState<FormState>(BLANK);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function load() {
    setPrograms(await api.listProgramsAll());
  }

  useEffect(() => {
    load().catch((e) => setError(e.message));
  }, []);

  function startCreate() {
    setForm(BLANK);
    setEditingId("new");
  }

  function startEdit(p: Program) {
    setForm({
      slug: p.slug,
      name: p.name,
      degreeLevel: p.degreeLevel,
      departmentSlug: p.departmentSlug ?? "",
      summary: p.summary,
      body: p.body,
      heroImageUrl: p.heroImageUrl ?? "",
      status: p.status,
    });
    setEditingId(p.id);
  }

  async function save() {
    setBusy(true);
    setError(null);
    try {
      const payload = { ...form, departmentSlug: form.departmentSlug || null, heroImageUrl: form.heroImageUrl || null };
      if (editingId === "new") {
        await api.createProgram(payload);
      } else if (typeof editingId === "number") {
        await api.updateProgram(editingId, payload);
      }
      setEditingId(null);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setBusy(false);
    }
  }

  async function remove(id: number) {
    if (!confirm("Delete this program?")) return;
    setBusy(true);
    try {
      await api.deleteProgram(id);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Delete failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Programs</h1>
      {error && <div className="error-banner">{error}</div>}

      {editingId === null && (
        <button className="btn btn--primary" onClick={startCreate} style={{ marginBottom: 20 }}>
          + New program
        </button>
      )}

      {editingId !== null && (
        <div className="card">
          <div className="field">
            <label>Slug (URL path, e.g. computer-science-bs)</label>
            <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
          </div>
          <div className="field">
            <label>Name</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="field">
            <label>Degree level</label>
            <select
              value={form.degreeLevel}
              onChange={(e) => setForm({ ...form, degreeLevel: e.target.value as FormState["degreeLevel"] })}
            >
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
              <option value="certificate">Certificate</option>
            </select>
          </div>
          <div className="field">
            <label>Department slug</label>
            <input
              value={form.departmentSlug}
              onChange={(e) => setForm({ ...form, departmentSlug: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Summary</label>
            <textarea value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} />
          </div>
          <div className="field">
            <label>Body (HTML)</label>
            <textarea value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} />
          </div>
          <div className="field">
            <label>Hero image URL</label>
            <input value={form.heroImageUrl} onChange={(e) => setForm({ ...form, heroImageUrl: e.target.value })} />
          </div>
          <div className="field">
            <label>Status</label>
            <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as FormState["status"] })}>
              <option value="draft">Draft (hidden from public site)</option>
              <option value="published">Published</option>
            </select>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn btn--primary" onClick={save} disabled={busy}>
              Save
            </button>
            <button className="btn btn--ghost" onClick={() => setEditingId(null)} disabled={busy}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Degree</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {programs.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.degreeLevel}</td>
              <td>
                <span className="badge">{p.status}</span>
              </td>
              <td style={{ display: "flex", gap: 8 }}>
                <button className="btn btn--ghost" onClick={() => startEdit(p)}>
                  Edit
                </button>
                <button className="btn btn--danger" onClick={() => remove(p.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
