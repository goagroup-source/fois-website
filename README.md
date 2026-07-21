# Future of Interior Spaces (FOIS) — Website

Source for the FOIS website: the main platform homepage plus the FOIS
Intelligence destination. Static HTML/CSS/JS — no build step, no
framework, no dependencies beyond CDN-hosted fonts and GSAP.

## Live structure

This repo mirrors the exact folder structure expected at the web root
(`public_html` on the current host). Each folder maps to a URL:

| Path in repo | Live URL | Page |
|---|---|---|
| `index.html` | `/` | FOIS homepage |
| `intelligence/index.html` | `/intelligence/` | FOIS Intelligence hub |
| `intelligence/library/index.html` | `/intelligence/library/` | Research Library (live search & filters) |
| `intelligence/state-of-interior-spaces-2027/index.html` | `/intelligence/state-of-interior-spaces-2027/` | Flagship annual report |
| `intelligence/country/united-kingdom/index.html` | `/intelligence/country/united-kingdom/` | UK Country Intelligence |
| `intelligence/interview-ageing-populations/index.html` | `/intelligence/interview-ageing-populations/` | Interview article template |
| `intelligence/dashboard/index.html` | `/intelligence/dashboard/` | Member dashboard (static concept — needs an account system to go live) |
| `assets/` | `/assets/` | Static assets — **upload your logo here as `fois-logo.png`**, see `assets/README.txt` |
| `docs/FOIS-Intelligence-Concept.md` | *(not deployed)* | Information architecture, editorial system, design system and content strategy reference — internal only |

## Deploying a change

This repo is the source of truth; it does **not** auto-deploy. After
editing:

1. Commit your change here.
2. Zip the folder (excluding `.git/` and `docs/`) or use cPanel File
   Manager / FTP to upload just the changed file(s) to the matching
   path under `public_html` on the host (currently Namehero).
3. If nothing appears to update, purge the LiteSpeed cache (cPanel →
   LiteSpeed Cache Manager).

A CI-based auto-deploy (GitHub Action → FTP/SFTP on push) can be added
later if manual re-uploads become tedious — ask if you want that set up.

## Known gaps (tracked, not yet built)

- Logo image (`/assets/fois-logo.png`) is a placeholder path — upload
  the real file.
- Several "related report" links inside the Research Library point at
  individual report permalinks (e.g. `/intelligence/future-workplace-report/`)
  that don't have pages built yet — they'll 404 until those pages exist.
  See `docs/FOIS-Intelligence-Concept.md` §12.2 for the full build-order
  recommendation.
- No mobile hamburger menu on the sub-pages with minimal nav (report
  template, country page, dashboard, interview) — not needed yet since
  those only have two nav items, but flag if that nav grows.

## Design system

Typography: Cormorant Garamond (serif, editorial) + Inter (sans,
functional). Full editorial/design system documented in
`docs/FOIS-Intelligence-Concept.md` §7–10 — read that before adding new
pages so new work stays visually consistent with what's here.
