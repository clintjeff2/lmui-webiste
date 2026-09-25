const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

async function request(path: string, init?: RequestInit) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    credentials: "include",
    headers: { "content-type": "application/json", ...(init?.headers || {}) },
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const message =
      typeof body.error === "string" ? body.error : JSON.stringify(body.error ?? res.statusText);
    throw new Error(message);
  }
  if (res.status === 204) return null;
  return res.json();
}

export const api = {
  login: (email: string, password: string) =>
    request("/api/v1/auth/login", { method: "POST", body: JSON.stringify({ email, password }) }),
  logout: () => request("/api/v1/auth/logout", { method: "POST" }),
  me: () => request("/api/v1/auth/me"),

  blockTypes: () => request("/api/v1/pages/block-types"),
  draftBlocks: (page: string) => request(`/api/v1/pages/${page}/draft`),
  createBlock: (page: string, blockType: string, config: Record<string, unknown>) =>
    request(`/api/v1/pages/${page}/blocks`, {
      method: "POST",
      body: JSON.stringify({ blockType, config }),
    }),
  updateBlock: (page: string, id: number, config: Record<string, unknown>) =>
    request(`/api/v1/pages/${page}/blocks/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ config }),
    }),
  deleteBlock: (page: string, id: number) =>
    request(`/api/v1/pages/${page}/blocks/${id}`, { method: "DELETE" }),
  reorderBlocks: (page: string, items: Array<{ id: number; position: number }>) =>
    request(`/api/v1/pages/${page}/blocks/reorder`, { method: "POST", body: JSON.stringify(items) }),
  publishPage: (page: string) => request(`/api/v1/pages/${page}/publish`, { method: "POST" }),
  previewToken: (page: string) =>
    request(`/api/v1/pages/${page}/preview-token`, { method: "POST" }) as Promise<{ token: string }>,
  revisions: (page: string) => request(`/api/v1/pages/${page}/revisions`),
  restoreRevision: (page: string, revisionId: number) =>
    request(`/api/v1/pages/${page}/revisions/${revisionId}/restore`, { method: "POST" }),

  listProgramsAll: () => request("/api/v1/programs/admin/all"),
  createProgram: (data: Record<string, unknown>) =>
    request("/api/v1/programs", { method: "POST", body: JSON.stringify(data) }),
  updateProgram: (id: number, data: Record<string, unknown>) =>
    request(`/api/v1/programs/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  deleteProgram: (id: number) => request(`/api/v1/programs/${id}`, { method: "DELETE" }),

  uploadMedia: async (file: File) => {
    const form = new FormData();
    form.append("file", file);
    const res = await fetch(`${API_BASE}/api/v1/media`, {
      method: "POST",
      credentials: "include",
      body: form,
    });
    if (!res.ok) throw new Error("Upload failed");
    return res.json();
  },
};
