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
| `intelligence/dashboard/index.html` | `/intelligence/dashboard/` | Member dashboard (static concept — needs an account system to go live; `noindex`) |
| `conference/index.html` | `/conference/` | FOIS Conference (standalone page) |
| `community/index.html` | `/community/` | FOIS Community (standalone page) |
| `404.html` | *(served on any unmatched URL — host-dependent config)* | Branded 404 page |
| `assets/` | `/assets/` | Static assets — logo (`fois-logo.png`), favicons, OG/social card, `newsletter.js` |
| `sitemap.xml`, `robots.txt` | `/sitemap.xml`, `/robots.txt` | SEO — canonical domain: `futureofinteriorspaces.com` |
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

- **Deploy is still manual.** Every commit here needs a separate upload
  to the live host (see "Deploying a change" above) — pushing to GitHub
  does not update `futureofinteriorspaces.com` by itself. Set up the
  GitHub Action auto-deploy mentioned above if manual re-uploads become
  tedious.
- Newsletter signup (homepage, FOIS Intelligence, FOIS Journal) posts to
  a live Formspree endpoint (`assets/newsletter.js`) but hasn't had a
  real end-to-end test submission confirmed in the connected inbox yet.
- Homepage "Global Advisory Board" section is a deliberate "coming soon"
  placeholder — no names until real ones are confirmed.
- Intelligence member dashboard (`/intelligence/dashboard/`) is a static
  concept only; it needs a real account/auth system to go live, which is
  a separate build.
- No analytics installed — the Privacy Policy and Cookie Policy both
  explicitly disclose this; add one only alongside a policy update, not
  silently.
- All hamburger/mobile-nav pages, favicons, social cards, sitemap, and
  the Research Library's report cross-links are done — this list no
  longer tracks those.

## Design system

Typography: Cormorant Garamond (serif, editorial) + Inter (sans,
functional). Full editorial/design system documented in
`docs/FOIS-Intelligence-Concept.md` §7–10 — read that before adding new
pages so new work stays visually consistent with what's here.
