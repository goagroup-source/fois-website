# FOIS Intelligence — Platform Concept & FOIS Design System

*Prepared as the flagship destination and reference template for the FOIS digital ecosystem.*

---

## 1. Information Architecture

| Section | Why It Exists |
|---|---|
| **Homepage** | Entry point. Orients a first-time visitor in one screen: what FOIS Intelligence is, its most important current report, and how to search. |
| **Research (hub)** | The master index of everything published — the "table of contents" for the whole division. |
| **Reports** | Long-form flagship publications (annual reports, indices). The most citable, most downloaded content type. |
| **Trends** | Shorter-form signal-tracking — faster to produce than a full report, keeps the platform feeling alive week to week. |
| **Industry Outlooks** | Sector-specific forward views (workplace, residential, hospitality, healthcare, education) — the lens practitioners search by most. |
| **Country Intelligence** | Geography-first view of the same research. Critical for developers, investors and governments who think in markets, not topics. |
| **Materials Intelligence** | A distinct vertical — manufacturers and specifiers search by material, not by report title. |
| **AI & Technology** | Fastest-moving category; kept separate so it can publish more frequently without diluting the "timeless" tone elsewhere. |
| **Sustainability** | High-search-intent category; also the throughline connecting most other categories. |
| **Search** | Cuts across every section above — see Section 6. |
| **Downloads** | Every PDF, data pack and executive summary in one place, for people who came for one file, not the site. |
| **Archive** | Everything ever published, filterable — this is what makes the platform a *library*, not a *blog*. |

**Primary nav (Intelligence sub-site):** Reports · Trends · Countries · Dashboard · Archive
**Utility nav:** Search · Subscribe · Back to FOIS

---

## 2. User Experience / Journey

**Arrival.** Most visitors arrive one of three ways: (a) referred from the FOIS homepage Platform Overview card, (b) a direct link to a specific report shared on LinkedIn/email, (c) organic search for a topic ("future of workplace design 2027"). The homepage and every report page must work as a *first page* — never assume the visitor came from the FOIS homepage.

**Browsing.** Three parallel browsing models, so no single mental model is forced on the visitor:
- **By topic** (Trending Topics pills / category pages) — for practitioners who know what they're researching.
- **By geography** (Country Intelligence) — for developers/investors thinking market-first.
- **By recency** (Latest Research / Upcoming Research) — for repeat visitors checking what's new.

**Searching.** A visitor either free-types a query (hero search bar, global in header) or narrows via filters (country, industry, topic, year, author, content type, tags) — see Section 6.

**Discovering related research.** Every report ends with a "Related Research" rail (3 items, same topic or adjacent). No report is a dead end.

**Downloading.** Every report has three download weights available separately: full PDF, executive summary PDF, and a raw data pack — because a journalist wants the summary, a researcher wants the data, and a specifier wants the full document.

---

## 3. Homepage — Built

See `FOIS-Intelligence.html`. Sections implemented: Hero (with search), Flagship Report feature, Latest Research grid, Trending Topics, Industry Dashboard (illustrative chart + stat cards), Featured Countries, Upcoming Research, Newsletter, Research Archive teaser, Footer.

---

## 4. Individual Report Page — Built

See `FOIS-Intelligence-Report-Template.html`, built for the flagship *State of Interior Spaces 2027*. Includes Executive Summary, Key Statistics, Data Highlight chart, Interactive Data teaser, Methodology, Authors (attributed to the FOIS Intelligence Research Team rather than invented individuals — consistent with the platform's no-fictional-persons standard), Related Reports, Citation block, and a three-item Downloads panel.

All statistics and chart values on this page are explicitly labelled **"Illustrative sample data"** — per the standing FOIS content policy of never presenting invented numbers as confirmed fact. Replace with verified figures at the point of real publication.

---

## 5. Research Categories

| Category | Purpose | Audience | Example Report | Nav Path |
|---|---|---|---|---|
| **Annual Reports** | Flagship, once-a-year synthesis | Everyone — the "state of the union" | *State of Interior Spaces 2027* | Reports → Annual |
| **Trend Forecasts** | Forward-looking, shorter cycle | Designers, brand strategists | *Six Forces That Will Redefine Space by 2030* | Trends |
| **Industry Outlooks** | Sector-specific deep dives | Practitioners in that sector | *Future Workplace Report* | Reports → Outlooks |
| **Country Intelligence** | Market-level research | Investors, developers, governments | *Africa Interior Design Outlook* | Countries |
| **Materials Intelligence** | Material innovation tracking | Manufacturers, specifiers | *Material Innovation Index* | Reports → Materials |
| **AI & Technology** | Adoption and tooling research | Technologists, studio principals | *AI Adoption in Interior Design* | Trends → AI |
| **Sustainability** | Standards, circularity, carbon | Everyone, increasingly mandatory | *Materials Index (carbon lens)* | Trends → Sustainability |
| **Workplace / Residential / Hospitality / Healthcare / Education** | Building-type verticals | Type-specific practitioners | See homepage grid | Reports → [type] |

---

## 6. Search Experience

**Primary search bar** — hero + persistent header icon, free-text.
**Filter facets** (combinable, faceted-search pattern): Country · Industry · Topic · Year · Author · Content Type (Report / Trend / Interview / Data Pack) · Tags.
**Result card** shows: content-type badge, title, one-line summary, country/topic tags, publish date, download-availability icon.
**No-results state** should never dead-end — always surface the three most recent reports and an "email us your research request" path, since a missed query is a signal for future commissioning.

---

## 7. Component Library (established in the build, reusable across all future FOIS destinations)

- **Nav** — sub-brand lockup + "Back to FOIS" pattern (see `.nav-logo`, `.nav-cta-group`)
- **Hero** — dark, full-bleed, gold eyebrow / serif headline / light body copy (`.hero-*`)
- **Flagship Feature** — 50/50 image-and-content split for a single hero piece of content (`.flagship`)
- **Card, editorial** — image with bottom-anchored gradient overlay, tag + title (`.insight-card`)
- **Overview Card** — text-only card with numbered index, one line, "Learn More" (from the FOIS homepage `.overview-card` — reuse for any future index page)
- **Stat Block** — large serif numeral + label, used singly or in a grid (`.stat-block` / `.stat-card`)
- **Chart, bar** — simple CSS bar chart with gold gradient fill, always paired with an "illustrative data" caption until real data exists (`.chart-bars`)
- **Country / Index Card** — compact text-centred card for directory-style grids (`.country-card`)
- **Timeline / Upcoming List** — row-based list with a right-aligned date badge (`.upcoming-item`)
- **Newsletter Block** — dark CTA section with inline email form (`.cta-section` + `.newsletter-form`)
- **Citation Box** — left-gold-border blockquote style for formal citations (`.citation-box`)
- **Download Panel** — bordered row: filename, format/size, right-aligned download link (`.download-card`)
- **Related Content Rail** — 3-card grid, tag + title only, no imagery (`.related-grid`)

---

## 8. Editorial System

- **Tone of voice:** belief-driven, not promotional. Prefer "We believe..." / declarative statements over adjectives ("world-class," "cutting-edge"). Every report opens with a thesis sentence, not a scene-setter.
- **Headline hierarchy:** H1 serif (Cormorant Garamond, weight 300) for report/page titles only, one per page. H2 serif for section titles. Never more than two heading levels visible at once in a reading column.
- **Reading width:** body copy is capped at ~720px (`.reading-col`) — never full-bleed. Matches print-magazine line length for readability.
- **Typography hierarchy:** Cormorant Garamond (serif) for anything that should feel considered — titles, pull quotes, stat numerals. Inter (sans) for everything functional — body copy, labels, nav, buttons.
- **Photography style:** architectural/interior photography only, desaturated slightly (`filter: contrast(1.05) saturate(0.9)`), never stock-photo people-in-suits imagery.
- **Data visualisation style:** minimal, gold-on-dark or gold-on-stone bar charts only at this stage — no 3D, no pie charts, no chart-junk. Always caption data provenance.
- **Illustration style:** none used currently — if introduced, should stay strictly line-based/monochrome-gold to avoid clashing with the photography-led system.

---

## 9. Sample Content Inventory (invented, believable, for template population)

| Title | Category | Status |
|---|---|---|
| The State of Interior Spaces 2027 | Flagship Annual | Built as full template |
| The Future Workplace Report | Industry Outlook | Card built |
| Africa Interior Design Outlook | Country Intelligence | Card built |
| AI Adoption in Interior Design | AI & Technology | Card built |
| Material Innovation Index | Materials Intelligence | Card built |
| Future Homes Report | Industry Outlook | Card built |
| Hospitality Trends | Industry Outlook | Card built |
| Future Cities Report | Industry Outlook | Listed as upcoming |
| Future Schools | Industry Outlook | Listed as upcoming |
| Future Healthcare Spaces | Industry Outlook | Listed as upcoming |

---

## 10. FOIS Design System (applies to every future destination)

- **Grid:** 5rem side padding on desktop, collapsing to 1.5–2.5rem under 900px. Content max-width 1300–1400px, reading columns 580–720px.
- **Spacing:** section vertical padding 8–9rem desktop / 4–6rem mobile. Card gaps 1.5rem. Never less than 1.2rem between distinct interactive elements.
- **Typography:** Cormorant Garamond (serif, editorial) + Inter (sans, functional). No third typeface without a strong reason.
- **Colour usage:** `--midnight` for dark/institutional sections, `--ivory` for light/editorial sections, `--gold` exclusively for emphasis (never as a base colour), `--stone`/`--slate` for structure and secondary text. Sector accent colours (`--teal`, `--emerald`, `--amber`, `--crimson`) reserved for future data-viz category coding — not yet in active use.
- **Interaction patterns:** custom cursor + hover-scale on every clickable element; 1px gold underline draw-in on nav links; image scale-on-hover (1.08×) inside cards; button lift-on-hover (`translateY(-3px)`).
- **Animation principles:** GSAP ScrollTrigger reveal (opacity 0→1, translateY 50→0) on every content block, staggered ~0.03–0.05s; hero elements animate in sequence on load, never on scroll.
- **Editorial principles:** belief-driven copy; no invented named individuals presented as real (speakers, authors, advisors) until confirmed; no invented statistics presented as fact — always caption illustrative data.
- **Accessibility:** maintain AA contrast for all text on `--midnight` and `--ivory` backgrounds; every interactive card should also be reachable as a real `<a>`/`<button>`, not a bare `onclick` div; the custom cursor is decorative only — never the sole way to signal interactivity (all hover states must have a visible underline/border/scale change that works without it).
- **Responsive behaviour:** 3-column grids collapse to 2 at 1024px, to 1 at 768px; nav links hide below 1000px in favour of a future mobile menu (not yet built — flagged below).
- **Card hierarchy:** editorial image-card > text-only overview card > compact index card > list row, in descending visual weight — use the heaviest card only for the 3–6 most important items per page.
- **Navigation:** every sub-destination keeps the FOIS nav pattern but re-badges the logo lockup (e.g. "FOIS *Intelligence*") and always includes an explicit "Back to FOIS" path.

**Known gap to flag:** no mobile hamburger menu exists yet anywhere in the FOIS system (nav links simply disappear under 1000px). This should be resolved once, in the design system, before it's replicated across ten more destinations.

---

## 11. Lighter Plan — The Other 10 Destinations

For each: a one-line purpose, the 4–6 pages that matter most, and which FOIS Intelligence components carry over directly.

**FOIS Journal** — True editorial publication, not a blog. Pages: Journal home, Category index (Ideas / Interviews / Projects / Opinion / Materials...), Article template (reuse report-page reading column + citation removed, byline added), Author index. Reuses: editorial card, reading column, related-content rail.

**Featured Projects** — Project library and case-study archive. Pages: Projects home (filter by country/type/designer), Global Project Map (new component — needs a map library, not yet built), Project case-study template (image-led, closer to the homepage's editorial-feature split than to the report template). Reuses: editorial card, editorial-feature split.

**FOIS Annual Reports** — A publishing system, not a new visual language — effectively "more instances of the report template." Pages: Reports index (grid by year), individual report pages (reuse `FOIS-Intelligence-Report-Template.html` directly). No new components needed.

**FOIS Awards** — Prestige and process. Pages: Awards home, Categories, Eligibility & Judging Criteria, Timeline, Jury/Advisory Panel (reuse Advisory Board "coming soon" seat pattern from the homepage), Nomination form, Winners archive. Needs one new component: a timeline/process-step component.

**FOIS Community** — The most functionally different destination — closer to a member portal than a publication. Pages: Community home, Member directory (needs auth — flag as a build dependency), Regional chapters, Discussion forums (likely third-party embed, e.g. Discourse), Mentorship, Events calendar. Reuses: country-grid pattern for chapters; everything else is new product work, not editorial design.

**FOIS TV** — "Netflix meets Monocle." Pages: TV home, Video library (filterable grid), Series/playlist pages, individual video page (needs a video player — embed, not built). Reuses: editorial card grid for the library; needs a new video-card variant with a duration badge and play-icon overlay.

**Research Library** — University-library register, deliberately more austere than Intelligence. Pages: Library home, Search & filter (heavier version of Section 6, with citation-export tools), Paper/case-study/toolkit templates. Reuses: search/filter component; citation box. Needs a new dense **table/list view** (this is the one destination that should probably *not* use image-led cards — a Research Library should feel searchable, not scrollable).

**Future 100** — The signature annual editorial franchise. Pages: Future 100 home (this year's list, ranked or unranked), individual honoree profile page, "How selection works" page, past years' archive. Needs a new **profile-grid component** distinct from anything built so far — likely a portrait + name + one-line distinction, no ranking numbers (per the brief's instruction to celebrate ideas over celebrity).

**Governance** — Institutional credibility. Pages: Governance home, Advisory Board / Editorial Board / Research Council / Awards Jury / Regional Ambassadors (all variations on the homepage's Advisory Board seat-grid pattern), Ethics & Transparency, Annual Review. Almost entirely reuses existing components — the lowest-new-build destination.

**FOIS Observatory** — The most product-like destination: a "living" dashboard rather than an editorial archive. Pages: Observatory home (global trends dashboard), topic-specific dashboards (AI adoption, sustainability metrics, etc.), interactive map. Reuses: the Industry Dashboard chart/stat-card pattern from FOIS Intelligence as its starting point, scaled up. This is the one destination that will eventually need real data infrastructure, not just design — flag for a technical scoping conversation before visual design goes further.

**Build-order recommendation:** Governance and FOIS Annual Reports first (lowest new-component cost, highest credibility payoff) → FOIS Journal and Featured Projects next (highest content-marketing value) → Awards and Future 100 (signature/PR moments) → TV and Research Library (more specialised audiences) → Community and Observatory last (both require real backend/data work beyond visual design).

---

## 12. FOIS Intelligence, Deepened — Phase 2

*FOIS Intelligence is now treated as the flagship product of the ecosystem. This phase deepens the destination itself rather than building new ones (Journal, TV, Awards, Academy and Community remain explicitly out of scope, per instruction).*

### 12.1 What Was Built This Phase

| File | Covers |
|---|---|
| `FOIS-Intelligence-Archive.html` | Research Library, Search (instant + faceted filters), Category Pages, Topic Collections — fully functional client-side search/filter over a realistic 15-report dataset |
| `FOIS-Intelligence-Country-UK.html` | Country Intelligence template (also demonstrates the City Intelligence and Sector Intelligence patterns within one country page) |
| `FOIS-Intelligence-Dashboard.html` | Dashboard Experience concept — reading progress, saved reports, watchlists, recommendations, upcoming research. Explicitly flagged in-page as a static concept: real personalisation needs the membership/account system (see 12.6) |
| `FOIS-Intelligence-Article-Interview.html` | A second, distinct article template (interview/Q&A format with pull quotes) — demonstrates the platform can hold more than one editorial shape without losing its identity |

Combined with the homepage and flagship report template from Phase 1, FOIS Intelligence now has **six working page types**, covering roughly a third of the full 20-page IA below — enough to prove the system holds together, without pretending the entire product (in particular anything needing accounts, saved state or real data) can be "production-ready" as static HTML.

### 12.2 Complete Information Architecture (20 Pages)

| # | Page | Status | Notes |
|---|---|---|---|
| 1 | Homepage | **Built** | `FOIS-Intelligence.html` |
| 2 | Category Pages | **Built** (as filters) | Handled inside the Research Library rather than as 11 separate URLs — one filterable page scales better than eleven near-duplicate ones |
| 3 | Research Library | **Built** | `FOIS-Intelligence-Archive.html` |
| 4 | Research Articles | **Built** (template) | `FOIS-Intelligence-Article-Interview.html` |
| 5 | Industry Reports | **Built** (template) | Shares the flagship report template |
| 6 | Trend Reports | **Built** (template) | Shorter variant of the report template — same components, less scaffolding (no methodology/citation block needed) |
| 7 | Country Intelligence | **Built** | `FOIS-Intelligence-Country-UK.html` |
| 8 | City Intelligence | **Built** (as a module) | Folded into the country page rather than a separate URL per city — see 12.2 note below |
| 9 | Sector Intelligence | **Built** (as a module) | Folded into the country page's Sector Breakdown grid; a dedicated `/intelligence/sector/workplace/` page would reuse the same grid + chart pattern |
| 10 | Topic Collections | **Built** (as filters) | Same reasoning as Category Pages |
| 11 | Author Profiles | Spec only | See 12.3 |
| 12 | Research Teams | Spec only | Byline convention already established (see Report Template's Authors section — "FOIS Intelligence Research Team", not invented individuals) |
| 13 | Dashboard | **Built** (concept) | `FOIS-Intelligence-Dashboard.html` |
| 14 | Search | **Built** | Instant search + facets inside the Research Library |
| 15 | Saved Reports / Bookmarks | **Built** (concept, in Dashboard) | Needs accounts to persist — flagged |
| 16 | Downloads | **Built** (module) | Download panel component exists on the report template; a dedicated `/downloads/` index would just be the Research Library filtered to "has download" |
| 17 | Newsletter | **Built** | On the homepage |
| 18 | Methodology | **Built** (module) | Section on the report template; a standalone `/methodology/` page would restate this once, platform-wide |
| 19 | About Intelligence | Spec only | Should state the Maven/FOIS relationship again at this level — one paragraph, reusing language already established on the FOIS homepage |
| 20 | Research Calendar | Spec only | Table/list view of the Upcoming Research homepage section, extended across a full year |
| 21 | Annual Reports (index) | Spec only | Research Library filtered to `type: Annual Report` — no new build needed |
| 22 | Interactive Data | Spec only | The "Explore the Data" teaser on the report template names this; building the real interactive explorer is a data-infrastructure project, not a design one (see 12.7) |
| 23 | Media Centre | Spec only | Press-facing page: logos, boilerplate, press contact, recent coverage — low design complexity, low priority |

**Design decision worth flagging:** City Intelligence, Sector Intelligence, Category Pages and Topic Collections are deliberately *not* built as 30+ separate near-duplicate URLs. At FOIS Intelligence's likely real scale (11 topics × ~15 countries × ~6 sectors), a rigid one-page-per-node IA becomes unmaintainable. The pattern used here — one strong template per *content type* (report, article, country) plus filterable index pages for everything else — is what makes the "50+ countries / 500+ reports / 10,000+ articles" scalability requirement in the brief actually achievable without a redesign.

### 12.3 User Journeys (by persona)

| Persona | Entry point | What they're really looking for | Where the current build takes them |
|---|---|---|---|
| **Designer / Architect** | Homepage → Trending Topics or a shared report link | Practical, citable trend evidence for a client deck | Report/Article templates, designed for skimmability (pull quotes, key stats up top) |
| **Developer / Investor** | Country Intelligence directly (often via search engine, not FOIS nav) | Market-level signal, not design inspiration | Country template leads with sector breakdown and data, not narrative |
| **Manufacturer** | Materials-tagged search or a specific report (Material Innovation Index) | Where their material category sits vs. alternatives | Topic filter in the Research Library; Materials Intelligence flagged as its own facet |
| **Student** | Homepage → Research Library, broad browsing | Foundational, citable material for coursework | Citation block on every report is written for this reader specifically |
| **Government / Policymaker** | A specific Country Intelligence page, often linked from elsewhere | Neutral, sourced framing — not vendor-driven | Illustrative-data labelling is intentionally conservative for exactly this reader |
| **Journalist** | Search, or a report's Executive Summary | A quotable stat and someone to attribute it to | Key Statistics block + FOIS Intelligence Research Team byline (never an invented individual a journalist could misattribute a quote to) |
| **Researcher / Academic** | Citation tools, Related Research rail | Chain of sourcing across related work | Citation box + Related Reports rail on every long-form page |
| **Sponsor** | Homepage → Founding Partner Opportunities (FOIS-level, not Intelligence-level) | Credibility signal before committing budget | Handled at the FOIS homepage layer, not duplicated here |

### 12.4 Report & Article Experience — Consolidated Template Logic

Rather than ten visually distinct templates for "Research article / long-form report / data report / industry analysis / trend forecast / executive summary / opinion piece / interview / white paper / annual outlook," the system uses **two structural templates** with a shared component set, varied by which modules are present:

- **Long-form template** (`FOIS-Intelligence-Report-Template.html`) — full scaffolding: Executive Summary, Key Statistics, Chart, Interactive Data teaser, Methodology, Authors, Related, Citation, Downloads. Used for: Annual Reports, Industry Reports, White Papers, Annual Outlooks, Data Reports.
- **Short-form template** (`FOIS-Intelligence-Article-Interview.html`) — reading-column-first, no citation/methodology scaffolding, supports Q&A blocks and pull quotes. Used for: Research Articles, Opinion, Interviews, Executive Summaries (as a standalone short read, distinct from the Executive Summary *module* inside a long report).

This is a deliberate constraint, not a shortcut: ten bespoke templates would fragment the reading experience and multiply maintenance cost. Two well-designed templates, varied by module, is what an institution "still publishing in 50 years" can actually sustain.

### 12.5 Visual Data Components

Beyond the bar chart already in use (homepage dashboard, report template, country template), the following are specified but not built — each needs either a charting library (Chart.js/D3, not yet loaded) or real geographic data (a map library) before implementation:

- **Country map** — choropleth, coloured by report volume or a selected metric. Needs a map library (e.g. amCharts, Mapbox, or a lightweight SVG world map) — not yet loaded anywhere in the system.
- **Heat map** — for cross-tabulating e.g. sector × country intensity. Deliberately not mocked with fake data here, since a heat map's entire value is data density, and illustrative filler would undercut the "trust indicator" the brief asks for.
- **Trend timeline** — horizontal, year-marked, for showing a topic's coverage over time. Straightforward CSS build, same visual language as the Upcoming Research list.
- **Industry scorecard / Opportunity matrix** — 2×2 or ranked-list comparison format. Recommend building only once there's a second real dataset to compare against — a scorecard with one entry isn't a scorecard.

### 12.6 Membership Experience

Four tiers already exist at the FOIS platform level (Member / Professional / Fellow / Corporate, defined on the FOIS homepage). FOIS Intelligence should **inherit that tier structure**, not invent a separate one — an Intelligence-specific membership would fragment the "one FOIS" positioning Phase 1 worked to establish. What Intelligence adds on top:

- **Bookmarks / Saved Reports** — any tier
- **Reading progress tracking** — any tier (shown in the Dashboard concept)
- **Saved searches + research alerts** — Professional and above
- **Member-only reports** (e.g. early access to the flagship annual before public release) — Fellow and Corporate
- **Email digest frequency control** — any tier, self-service

None of this is buildable as static HTML — it requires an account system, a database, and auth. The Dashboard concept page exists to agree the *design* before that engineering work starts, not to simulate the product.

### 12.7 Content Strategy — Publishing Cadence

| Cadence | Content type | Why |
|---|---|---|
| **Weekly** | Trend signals, one short article/interview | Keeps the "reasons to return" promise from the FOIS homepage; low production cost per piece |
| **Monthly** | One Industry Outlook or Country Intelligence update | Matches the natural pace of real market movement — anything faster would outrun genuine signal |
| **Quarterly** | Executive Summary / market-signal snapshot (see "Q4 2026 Market Signals" in the sample archive) | Gives journalists and investors a predictable citation point |
| **Annual** | The flagship *State of Interior Spaces* report + sector deep-dives (Future Workplace, Future Homes, etc.) | The prestige/flagship layer — matches how WEF, Deloitte and McKinsey pace their signature publications |

Recommendation: **do not** attempt daily publishing. A research-and-insight platform that publishes daily reads as content marketing, not intelligence — the brief's own benchmark list (WEF, McKinsey, FT Research) all publish on weekly-to-annual cycles, never daily.

### 12.8 Future Scalability — What Would Actually Break First

Tested against the brief's target (50+ countries, 500+ reports, 10,000+ articles, hundreds of contributors, millions of readers):

1. **Content architecture holds.** The filterable-index pattern (12.2) doesn't add new page types as content grows — it just adds rows to the `REPORTS` dataset. This was validated directly: `FOIS-Intelligence-Archive.html`'s filtering logic works identically whether the array has 15 items or 15,000; only the data source needs to move from an inline JS array to a real API/database call.
2. **Search will not hold as built.** Client-side array filtering is fine at hundreds of items; at 10,000+ articles it needs a real search index (Algolia, Elasticsearch, or similar) — flag this as the first infrastructure investment once content volume grows.
3. **The Dashboard needs an account system before it needs more design.** Every component in `FOIS-Intelligence-Dashboard.html` is already specified; none of it can go live without auth + a database.
4. **Contributor scale needs an editorial workflow, not just an Author Profile page.** "Hundreds of contributors" implies a CMS with role-based publishing, byline management and an approval flow — worth scoping with engineering before Author Profiles (IA #11) are designed in detail, since the page's structure depends on what the CMS can actually store.

