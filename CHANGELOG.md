# Changelog

This repo was initialized directly from the current live state of the
site, so git history starts from today rather than replaying every past
edit. This file summarizes the real build history for context.

## Build history (summary)

1. **Homepage repositioning** — Rebuilt from a conference-first homepage
   into a platform-first one: navigation, hero, homepage flow reordered
   around "why FOIS exists" before the conference, fictional attendance
   stats replaced with honest launch messaging (Founding Partners, Call
   for Speakers, etc).
2. **Maven relationship added** — Threaded the "FOIS is a global initiative
   by Maven School of Interior Decoration and Design" positioning through
   nav, hero tagline, mission copy, and a dedicated Maven section.
3. **Platform Overview consolidation** — Five separate initiative sections
   (Journal, Intelligence, TV, Academy, Awards) merged into one Platform
   Overview card grid, to stop the homepage reading like a catalogue.
   Added a manifesto section, an ecosystem diagram, a Global Advisory
   Board section (deliberately marked "coming soon" rather than inventing
   names), and a four-tier Membership section.
4. **Authenticity pass** — Removed fictional named conference speakers,
   fictional named report authors, and unconfirmed real furniture-brand
   partner logos. Replaced with honest "coming soon" / team-attributed
   framing throughout.
5. **FOIS Intelligence built as the flagship destination** — Homepage,
   flagship report template (*State of Interior Spaces 2027*), Research
   Library with live client-side search/filtering, a Country Intelligence
   template (United Kingdom), a member Dashboard UI concept (explicitly
   flagged as static — needs an account system to go live), and a second
   article template (interview/Q&A format) to prove the platform can hold
   more than one editorial shape.
6. **Mobile navigation added** — Hamburger menu + full-screen overlay on
   the homepage and FOIS Intelligence homepage (the two pages with a full
   nav bar); minimal two-item nav on sub-pages didn't need it.
7. **Conference date correction** — Updated from September 2026 to
   September 2027 in all five places it appeared (countdown label,
   Conference section copy, Call for Speakers line, ticket/passes copy,
   and the countdown timer's actual JS target date).
8. **Nav tagline update** — Logo subtitle changed to "A Global Initiative
   of Maven SIDD".
9. **Link integrity pass for deployment** — Fixed the logo path, fixed a
   couple of internal links that disagreed with each other about a page's
   own URL, and repointed several "related report" links (which pointed
   at individual report pages that don't exist yet) to the Research
   Library with a pre-filled search instead, so they resolve to a working
   result rather than a 404.

Full rationale, information architecture, and design system documentation
live in `docs/FOIS-Intelligence-Concept.md`.

## Going forward

New changes from this point should get their own commits with real
diffs, so this file can stay short — the git log itself becomes the
record.
