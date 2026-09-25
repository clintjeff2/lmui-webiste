# Landmark Metropolitan University Institute — website platform

## For tomorrow's presentation

**Only `apps/web` matters. Ignore `apps/admin` and `services/api` entirely —
the public site does not call them.** All content is hardcoded static data
in `apps/web/src/data/*.ts`, and all fonts are self-hosted in
`apps/web/src/fonts/`. There is nothing to start except this one app, and
nothing that can go down mid-demo — no database, no API, no external
network call of any kind at runtime.

```bash
cd apps/web
npm run build   # only needed once, or after any code change
npm run start   # serves the production build on http://localhost:3000
```

A production server built this way is already running in this session at
`http://localhost:3000` — you likely don't need to do anything, just open
that URL. If it's not responding, run the two commands above from
`apps/web`.

Pages: `/` (home), `/academics`, `/academics/<program-slug>`,
`/admissions`, `/about`, `/news`, `/news/<article-slug>`. Every Apply /
Apply Now / Apply to This Program button opens `study.landmark.cm`.

---

*(Everything below this line describes the original full-stack plan —
`services/api` + `apps/admin` — which is out of scope for tomorrow but
still in the repo, untouched, for later.)*

## Original architecture

A monorepo with four workspaces:

```
packages/shared    Block type registry + zod schemas + shared TS types.
                    The single source of truth for "what a homepage
                    section is" — the API, the public site, and the admin
                    app all import from here.
services/api        Express + MySQL (via Knex). REST API, auth, the
                    homepage draft/publish engine, and CRUD for every
                    fixed-structure content type (Programs, Departments,
                    Faculty, News, Events).
apps/web             The public Next.js site (landmark.cm). Renders the
                    homepage from published blocks + interior pages from
                    fixed React templates fed by the API.
apps/admin           The admin portal (a separate app/origin from the
                    public site). Homepage drag-free reorder-and-edit
                    builder, content CRUD screens, auth.
```

## How the "change the homepage anytime" mechanism works

1. `page_blocks` (MySQL) is the **draft** working set for a page — one row
   per section, with a `block_type`, a `position`, and a `config` JSON blob.
   Editors add/remove/reorder/edit rows here through the admin app; none of
   it is public yet.
2. Clicking **Publish** copies the current draft into an append-only
   `page_revisions` table as one JSON snapshot, and pings the Next.js site's
   `/api/revalidate` endpoint. The public site always renders the *latest*
   snapshot for a page — so a publish is instant, atomic, and reversible
   (older snapshots can be restored back into the draft table and
   re-published).
3. `packages/shared/src/blocks.ts` is the block type registry: each block
   type is a zod schema (validation) + a `FieldSpec[]` (drives the admin's
   auto-generated edit form) + a default config. `apps/web/src/blocks/registry.tsx`
   maps each block type's key to the React component that renders it.

**Adding a new homepage section type** means: add an entry to
`packages/shared/src/blocks.ts`, add a component in `apps/web/src/blocks/`,
add one line to `apps/web/src/blocks/registry.tsx`. Nothing about the
database shape, the publish flow, or the admin editor changes.

**Interior pages** (Programs, Departments, Faculty, News, Events) are the
opposite: fixed React templates (see `apps/web/src/app/programs/`) fed by
plain CRUD tables. The API's `makeContentRouter` factory
(`services/api/src/lib/contentRouter.ts`) gives every content type the same
public-read / admin-write REST shape — copy `apps/admin/src/app/(dashboard)/programs/page.tsx`
to add an admin screen for Departments/Faculty/News/Events; the backend
routes already exist for all five in `services/api/src/index.ts`.

## First-time setup

```bash
# 1. Create the database
mysql -u root -e "CREATE DATABASE lmui CHARACTER SET utf8mb4"

# 2. Copy env files and fill in secrets
cp services/api/.env.example services/api/.env
cp apps/web/.env.example apps/web/.env.local
cp apps/admin/.env.example apps/admin/.env.local

# 3. Install everything
npm install

# 4. Build the shared package (apps/web and apps/admin transpile it live,
#    but services/api needs the compiled dist/ for its build step later)
npm run build --workspace=packages/shared

# 5. Run migrations, then seed sample content + an admin login
npm run migrate
npm run seed
```

Seeded admin login: `admin@landmark.cm` / `ChangeMe123!` — change this
before any real deployment.

## Running everything

Three terminals:

```bash
npm run dev:api     # http://localhost:4000
npm run dev:web     # http://localhost:3000  (public site)
npm run dev:admin   # http://localhost:3001  (admin portal)
```

## Known vulnerabilities (`npm audit`)

`npm audit` flags 2 issues in `apps/web`/`apps/admin`, both only fully
resolved by a Next.js 16 major upgrade (a breaking change — v16 makes route
`params`/`searchParams` async, which touches every page in this scaffold):

- **Critical — RCE in the Image Optimization API (AVIF).** Mitigated: both
  apps set `images.unoptimized: true` in `next.config.js`, which takes the
  vulnerable `/_next/image` route out of service. Neither app uses
  `next/image`, so this has no functional cost.
- **High — PostCSS XSS/path-traversal in source-map handling.** A build-time
  tooling dependency processing only this repo's own CSS, not user input —
  not reachable at runtime.

Do a real Next.js major-version upgrade (and re-test every page) before
this ships to production traffic.

## What's deliberately out of scope in this scaffold

- **Rich text editing** — body fields are raw HTML textareas. Swap in a
  proper WYSIWYG (TipTap, Lexical) before content editors use this daily.
- **Media storage** — uploads go to local disk (`services/api/uploads/`).
  Fine for development; swap `services/api/src/routes/media.ts` for S3 (or
  equivalent) + a CDN before production traffic.
- **Departments / Faculty / News / Events admin screens** — the API fully
  supports all five content types identically; only the Programs admin
  screen is built as the copy-able example.
- **Roles beyond admin/editor** — the `role` column exists; only `admin` is
  currently required anywhere (site settings). Add editor-level
  restrictions as the team grows.
