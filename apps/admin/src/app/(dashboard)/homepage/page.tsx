"use client";

import type { PageBlock, PageRevisionSummary } from "@lmui/shared";
import { useEffect, useState } from "react";
import BlockForm from "@/components/BlockForm";
import { api } from "@/lib/api";

const PAGE = "home";
const WEB_BASE = process.env.NEXT_PUBLIC_WEB_BASE_URL || "http://localhost:3000";

interface BlockTypeDef {
  key: string;
  label: string;
  description: string;
  fields: any[];
  defaultConfig: Record<string, unknown>;
}

export default function HomepageBuilderPage() {
  const [blocks, setBlocks] = useState<PageBlock[]>([]);
  const [blockTypes, setBlockTypes] = useState<BlockTypeDef[]>([]);
  const [revisions, setRevisions] = useState<PageRevisionSummary[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [drafts, setDrafts] = useState<Record<number, Record<string, unknown>>>({});
  const [addingType, setAddingType] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function load() {
    const [blockList, types, revs] = await Promise.all([
      api.draftBlocks(PAGE),
      api.blockTypes(),
      api.revisions(PAGE),
    ]);
    setBlocks(blockList);
    setBlockTypes(types);
    setRevisions(revs);
    if (!addingType && types.length) setAddingType(types[0].key);
  }

  useEffect(() => {
    load().catch((e) => setError(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function defFor(blockType: string) {
    return blockTypes.find((t) => t.key === blockType);
  }

  async function withBusy(fn: () => Promise<void>) {
    setBusy(true);
    setError(null);
    try {
      await fn();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  async function handleAdd() {
    if (!addingType) return;
    await withBusy(async () => {
      await api.createBlock(PAGE, addingType, defFor(addingType)?.defaultConfig ?? {});
      await load();
      setMessage("Block added to draft.");
    });
  }

  async function move(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= blocks.length) return;
    const reordered = blocks.slice();
    [reordered[index], reordered[target]] = [reordered[target], reordered[index]];
    setBlocks(reordered);
    await withBusy(async () => {
      await api.reorderBlocks(
        PAGE,
        reordered.map((b, i) => ({ id: b.id, position: i })),
      );
      await load();
    });
  }

  async function handleDelete(id: number) {
    if (!confirm("Remove this block from the draft?")) return;
    await withBusy(async () => {
      await api.deleteBlock(PAGE, id);
      await load();
      setMessage("Block removed.");
    });
  }

  function startEditing(block: PageBlock) {
    setEditingId(block.id);
    setDrafts((prev) => ({ ...prev, [block.id]: prev[block.id] ?? block.config }));
  }

  async function saveBlock(id: number) {
    await withBusy(async () => {
      await api.updateBlock(PAGE, id, drafts[id]);
      setEditingId(null);
      await load();
      setMessage("Block saved to draft.");
    });
  }

  async function handlePublish() {
    if (!confirm("Publish the current draft? This goes live immediately.")) return;
    await withBusy(async () => {
      await api.publishPage(PAGE);
      await load();
      setMessage("Published. The homepage is now live with this layout.");
    });
  }

  async function handlePreview() {
    await withBusy(async () => {
      const { token } = await api.previewToken(PAGE);
      window.open(`${WEB_BASE}/preview/${PAGE}?token=${encodeURIComponent(token)}`, "_blank");
    });
  }

  async function handleRestore(revisionId: number) {
    if (!confirm("Load this older version back into the draft? You will still need to Publish it.")) return;
    await withBusy(async () => {
      await api.restoreRevision(PAGE, revisionId);
      await load();
      setMessage("Draft reset to that revision. Review it, then Publish when ready.");
    });
  }

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Homepage Builder</h1>
      <p style={{ color: "var(--muted)", marginTop: -8 }}>
        Reorder, add, remove, and edit the sections on the public homepage. Nothing here is
        visible to the public until you click Publish.
      </p>

      {error && <div className="error-banner">{error}</div>}
      {message && !error && (
        <div className="error-banner" style={{ background: "#e8f5e9", color: "#1b5e20" }}>
          {message}
        </div>
      )}

      <div className="toolbar">
        <button className="btn btn--ghost" onClick={handlePreview} disabled={busy}>
          Preview draft
        </button>
        <button className="btn btn--gold" onClick={handlePublish} disabled={busy}>
          Publish
        </button>
      </div>

      {blocks.map((block, index) => {
        const def = defFor(block.blockType);
        const isEditing = editingId === block.id;
        return (
          <div className="card" key={block.id}>
            <div className="block-row">
              <div>
                <div className="block-row__title">{def?.label ?? block.blockType}</div>
                <div className="block-row__type">{block.blockType}</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="btn btn--ghost" onClick={() => move(index, -1)} disabled={busy || index === 0}>
                  ↑
                </button>
                <button
                  className="btn btn--ghost"
                  onClick={() => move(index, 1)}
                  disabled={busy || index === blocks.length - 1}
                >
                  ↓
                </button>
                <button className="btn btn--ghost" onClick={() => (isEditing ? setEditingId(null) : startEditing(block))}>
                  {isEditing ? "Close" : "Edit"}
                </button>
                <button className="btn btn--danger" onClick={() => handleDelete(block.id)} disabled={busy}>
                  Delete
                </button>
              </div>
            </div>

            {isEditing && def && (
              <div style={{ marginTop: 16, borderTop: "1px solid var(--border)", paddingTop: 16 }}>
                <BlockForm
                  fields={def.fields}
                  value={drafts[block.id] ?? block.config}
                  onChange={(next) => setDrafts((prev) => ({ ...prev, [block.id]: next }))}
                />
                <button className="btn btn--primary" onClick={() => saveBlock(block.id)} disabled={busy}>
                  Save block
                </button>
              </div>
            )}
          </div>
        );
      })}

      <div className="card">
        <div className="block-row__title" style={{ marginBottom: 10 }}>
          Add a section
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <select value={addingType} onChange={(e) => setAddingType(e.target.value)} style={{ flex: 1 }}>
            {blockTypes.map((t) => (
              <option key={t.key} value={t.key}>
                {t.label}
              </option>
            ))}
          </select>
          <button className="btn btn--primary" onClick={handleAdd} disabled={busy}>
            Add block
          </button>
        </div>
        {addingType && (
          <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: 10 }}>
            {defFor(addingType)?.description}
          </p>
        )}
      </div>

      <h2 style={{ marginTop: 40 }}>Publish history</h2>
      <div className="card">
        {revisions.length === 0 && <p style={{ color: "var(--muted)" }}>No revisions yet.</p>}
        {revisions.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Published</th>
                <th>By</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {revisions.map((rev) => (
                <tr key={rev.id}>
                  <td>{new Date(rev.publishedAt).toLocaleString()}</td>
                  <td>{rev.publishedByName ?? "—"}</td>
                  <td>
                    <button className="btn btn--ghost" onClick={() => handleRestore(rev.id)} disabled={busy}>
                      Restore to draft
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
