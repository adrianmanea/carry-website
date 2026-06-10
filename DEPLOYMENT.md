# Deploying Carry

Stack: **Next.js + Payload CMS + Postgres**. Target: **Vercel** (zero-config for Next.js) with serverless Postgres and Blob storage from the Vercel Marketplace.

Total time: ~10 minutes. Everything below is Marketplace one-click integrations + env vars — no infra to manage.

---

## Architecture

| Concern | Service | Why |
|---|---|---|
| App + SSR + Payload admin | Vercel | Native Next.js host, git-push deploys, free preview URLs |
| Database | Neon Postgres (Vercel Marketplace) | Serverless Postgres, auto-sets `DATABASE_URL`, scales to zero |
| Media uploads | Vercel Blob | Vercel's filesystem is **ephemeral** — uploads must go to Blob, not disk |

> **The one gotcha:** on Vercel the filesystem is read-only/ephemeral, so locally-stored uploads vanish between deploys. The code already handles this — `src/plugins/index.ts` switches the `media` collection to Vercel Blob automatically whenever `BLOB_READ_WRITE_TOKEN` is set, and falls back to local disk in dev. You just need to add the Blob store (Step 4).

---

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free Hobby plan is fine to start).
- Code pushed to GitHub. Remote is already set: `git@github.com:adrianmanea/carry-website.git`.

```bash
git add -A
git commit -m "Prepare for deployment"
git push origin main
```

---

## Step 1 — Import the repo into Vercel

1. Vercel dashboard → **Add New… → Project**.
2. Import `adrianmanea/carry-website` from GitHub.
3. Framework preset auto-detects **Next.js**. Leave build settings default
   (`next build`; the `postbuild` sitemap step runs automatically).
4. **Don't deploy yet** — add storage + env vars first (Steps 2–5), or the first
   build will fail on the missing `DATABASE_URL`. If it does deploy and fail,
   that's fine — finish the steps and redeploy.

---

## Step 2 — Add Postgres (Neon)

1. In the project → **Storage** tab → **Create Database** → **Neon** (Postgres).
2. Accept defaults, pick the region closest to your users.
3. Connect it to the project. Vercel injects **`DATABASE_URL`** automatically
   into all environments.

Payload's Postgres adapter creates the schema on first boot — no manual migration.

---

## Step 3 — Generate the app secrets

You need three random secrets. Generate them locally:

```bash
# run three times, or reuse the openssl one-liner below
openssl rand -hex 16   # PAYLOAD_SECRET
openssl rand -hex 16   # CRON_SECRET
openssl rand -hex 16   # PREVIEW_SECRET
```

---

## Step 4 — Add Blob storage (media uploads)

1. Project → **Storage** tab → **Create Database** → **Blob**.
2. Connect it. Vercel injects **`BLOB_READ_WRITE_TOKEN`** automatically.

That's all — the Payload config picks the token up and routes uploads to Blob.

---

## Step 5 — Set environment variables

Project → **Settings → Environment Variables**. Add the following for
**Production** (and Preview if you want preview deploys to work fully):

| Variable | Value | Set by |
|---|---|---|
| `DATABASE_URL` | _auto_ | Step 2 (Neon) |
| `BLOB_READ_WRITE_TOKEN` | _auto_ | Step 4 (Blob) |
| `PAYLOAD_SECRET` | your random hex | Step 3 |
| `CRON_SECRET` | your random hex | Step 3 |
| `PREVIEW_SECRET` | your random hex | Step 3 |
| `NEXT_PUBLIC_SERVER_URL` | `https://your-domain.com` | you (no trailing slash) |

Notes:
- `NEXT_PUBLIC_SERVER_URL` drives CORS, canonical URLs, sitemap, and OG tags.
  Use your real production domain. If you don't have one yet, use the Vercel
  URL (`https://carry-website.vercel.app`) and update it after adding a domain.
- Leave `DATABASE_URL` and `BLOB_READ_WRITE_TOKEN` as the auto-injected values —
  don't overwrite them.

---

## Step 6 — Deploy

Project → **Deployments → Redeploy** (or just `git push` again).

### How the database schema gets created

Payload only auto-creates tables in **dev** (`push` mode). In production it runs
**migrations**, so the schema comes from a committed migration file, not at
runtime. This repo is already set up for that:

- `src/migrations/` holds the initial migration (all tables).
- `vercel.json` sets the build command to **`npm run ci`**, which runs
  `payload migrate` (applies migrations to Neon) **before** `next build`.
- `engines.node` is pinned to **`22.x`** — Payload's migrate CLI breaks on
  Node 24 (a tsx bug: `node:crypto?tsx-namespace`), so the build must run on
  Node 22.

> Make sure the Vercel **Build Command** (Settings → General) is on default
> (empty) so `vercel.json`'s `npm run ci` is used. If it's overridden to
> `next build`, migrations won't run and you'll get
> `relation "pages" does not exist`.

The build runs `payload migrate` → `next build` → `next-sitemap`. `payload
migrate` is idempotent — it skips already-applied migrations on every deploy.
First build is the slowest (~2–4 min); later ones are faster.

### When you change the schema later

After editing collections/fields, generate a new migration locally and commit it:

```bash
# uses Node 22 — Payload migrate is broken on Node 24
PATH="$(brew --prefix node@22)/bin:$PATH" npm run payload migrate:create <name>
git add src/migrations && git commit -m "migration: <name>" && git push
```

Vercel applies it on the next deploy.

---

## Step 7 — First-run setup

1. Visit `https://your-domain.com/admin`.
2. Create the **first admin user** (the create-first-user screen shows on an
   empty database).
3. Optional: seed demo content from the dashboard's **seed** button, or start
   creating Posts and editing the Header/Footer globals.

You're live.

---

## Custom domain

Project → **Settings → Domains** → add your domain → follow the DNS
instructions (CNAME to Vercel, or use Vercel nameservers).
After it's verified, update `NEXT_PUBLIC_SERVER_URL` to match and redeploy.

---

## Continuous deployment

Already on by default once imported:

- **Push to `main`** → production deploy.
- **Open a PR / push any branch** → unique preview URL with its own build.

No CI config needed.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Runtime: `relation "pages" does not exist` | Migrations didn't run | Ensure Build Command is default so `vercel.json` → `npm run ci` runs `payload migrate`; check `engines.node` is `22.x`; redeploy |
| Build fails: `node:crypto?tsx-namespace` | Build ran on Node 24 | Pin `engines.node` to `22.x` (already set); redeploy |
| Build fails: `DATABASE_URL` undefined | DB not connected / env not set | Finish Step 2, redeploy |
| `payload migrate` errors on Neon (pooling / prepared-statement) | Pooled PgBouncer endpoint | Set `DATABASE_URL` to the **non-pooling** value (`POSTGRES_URL_NON_POOLING` / `DATABASE_URL_UNPOOLED`) and redeploy |
| Uploaded images 404 after a deploy | Blob not configured | Add Blob (Step 4); confirm `BLOB_READ_WRITE_TOKEN` exists, redeploy |
| Admin login loops / JWT errors | `PAYLOAD_SECRET` changed or missing | Set a stable `PAYLOAD_SECRET`, don't rotate it casually |
| Links/OG point at `localhost` | `NEXT_PUBLIC_SERVER_URL` wrong | Set it to the production URL, redeploy |
| Sitemap empty / wrong host | `NEXT_PUBLIC_SERVER_URL` wrong at build time | Same as above — it's read during `next build` |

---

## Local development (unchanged)

Local dev needs none of the above — it uses local Postgres and writes uploads to
disk:

```bash
brew services start postgresql@15   # if not already running
npm run dev                         # http://localhost:3000
```

`.env` keeps `DATABASE_URL=postgres://adrian@127.0.0.1:5432/carry_website` and no
`BLOB_READ_WRITE_TOKEN`, so media stays on local disk while production uses Blob.
