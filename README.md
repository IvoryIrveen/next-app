# Lighthouse log (next-app)

A Strux real-world test project (docs/REAL_WORLD_TESTS.md in the Strux repository).

**What it is:** a Next.js (App Router) app with one page and a client-side counter.

| Source | `next.config.mjs` | What Strux should do |
|---|---|---|
| `main` | A server app (no static export) | **Unsupported**: Next.js needs a server unless it exports static files; no App can be created from it |
| branch `static-export` | `output: "export"` | Detect a **built web app**: `npm ci`, `npm run build`, output `out` |

Check locally: `npm ci && npm run build` (on `static-export`, the files land in `out/`).
