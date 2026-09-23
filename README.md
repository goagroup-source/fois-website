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

Pushing to `main` auto-deploys via `.github/workflows/deploy.yml`
(GitHub Actions → FTPS on push), which mirrors this repo to
`public_html` on the host (currently Namehero), excluding `.git/`,
`.github/`, `docs/`, `README.md` and `CHANGELOG.md`.

**One-time setup** (needed before the first run succeeds): in the
GitHub repo, go to Settings → Secrets and variables → Actions → New
repository secret, and add:

- `FTP_SERVER` — the FTP/FTPS hostname from the NameHero cPanel FTP
  Accounts page (often `ftp.futureofinteriorspaces.com` or a
  `server###.namehero.com`-style host)
- `FTP_USERNAME` — the cPanel FTP username
- `FTP_PASSWORD` — the cPanel FTP password
- `FTP_SERVER_DIR` — only needed if the live document root isn't
  `public_html/` (e.g. an addon-domain subfolder); the workflow
  defaults to `public_html/` if this secret is unset

Never put these values in this repo, a commit, or a chat message —
only in the GitHub secret fields above, which are encrypted and never
shown again once saved.

Check progress under the repo's **Actions** tab after a push. If a run
fails, that tab shows exactly where (usually a wrong secret or a doc
root mismatch); the site simply doesn't update until it's fixed — a
failed deploy doesn't affect what's already live.

If nothing appears to update after a successful run, purge the
LiteSpeed cache (cPanel → LiteSpeed Cache Manager).

**Manual fallback** (still works, e.g. for a same-minute emergency
fix): zip the folder (excluding `.git/`, `.github/` and `docs/`) or use
cPanel File Manager / FTP to upload just the changed file(s) directly.

## Known gaps (tracked, not yet built)

- Auto-deploy (`.github/workflows/deploy.yml`) needs its FTP secrets
  added in GitHub before it will actually run successfully — see
  "Deploying a change" above. Until then, pushes to `main` will show a
  failing Action rather than a silent no-op.
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
