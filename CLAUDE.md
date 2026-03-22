# CLAUDE.md

Shared conventions: see `../GUIDELINES.md` for cross-site standards (design tokens,
typography, responsive breakpoints, content principles).

## Project overview

Static project website for the Impact Engine ecosystem. Covers the value proposition (index),
scientific methodology (science), and system architecture (system). Deployed
to GitHub Pages via a deploy workflow.

## Development setup

No build step. Open any `.html` file under `site/` in a browser to preview. Deploy happens
automatically on push to main via `.github/workflows/deploy.yml` (publishes `site/` directory).

## Common commands

- `python -m http.server -d site` — serve locally at localhost:8000 for preview
- `git push origin main` — deploy to GitHub Pages (triggers CI)

## Architecture

- `site/` — deployable website directory (published to GitHub Pages)
  - `index.html` — landing page: value proposition, decision loop, source code links
  - `science.html` — scientific foundations: causal inference, evidence assessment, decision theory
  - `system.html` — system architecture: pipeline design, adapters, config pattern
  - `styles.css` — shared stylesheet across all pages
  - `logo-inline.js` — injects inline logo mark into `<strong>` tags
  - `_static/` — SVG diagrams and logo assets (naming: `logo-*` for branding, `{page}-{subject}.svg` for diagrams)
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow
- `_external/utils-agentic-support/` — shared agentic support (read-only submodule)

## Verification

1. Open each HTML page under `site/` in a browser and verify navigation links work
2. Check that all SVG diagrams render correctly
3. Verify responsive layout at 768px and 480px breakpoints
4. Push to GitHub and confirm deploy workflow passes

## Key conventions

- Pure static HTML/CSS — no build tools, no frameworks, no JavaScript except `logo-inline.js`
- All pages share the same nav, font stack (Inter + Crimson Pro), and `styles.css`
- Diagrams are inline SVGs with `light-dark()` support for dark mode
- `_external/` directory is read-only — do not modify files inside it
- No print statements or console.log in JavaScript

## Cross-page structure (MUST maintain symmetry)

### Navigation

`Home` / `Science` / `System` — consistent across all pages.

### Page structure (science.html, system.html)

Both deep-dive pages follow the same skeleton:

1. `<h1>` title + epigraph + subtitle
2. Three `<h2>` sections, each: **Topic — Question?**
3. Each section: `section-flex` (image + text, alternating sides) → `<h4>` with CI badges + package name → `<p>` description
4. `<hr>` + **Further Reading** with `<h4>` subheadings matching the three `<h2>` section topics
5. Back to Home link

### Section headings

Science and System h2s are symmetric two-word labels with distinct second words:

| Science | System |
|---------|--------|
| What happened? — Causal Inference | How is it wired? — Pipeline Design |
| What did we learn? — Evidence Assessment | How does it extend? — Extension Points |
| What should we do? — Decision Theory | How is it built? — Agentic Support |

### Deep Dives cards (index.html)

The Deep Dives card descriptions echo the three questions from each page's h2 headings:

- **Science**: What happened? What did we learn? What should we do?
- **System**: How is it wired? How does it extend? How is it built?

### Index section headings

All two words: **Decision Loop** / **Source Codes** / **Deep Dives**.

### Further Reading sections

- `<h4>` subheadings match the page's three `<h2>` section topics (not generic categories)
- Two references per subheading
- Reference format: `Author(s) — <em>Title</em> (venue/edition, year)`
  - Authors: `Initials. Surname & Initials. Surname` — use `&` for two, list all for three+, `et al.` for five+
  - Org authors (no person): just the org name, no initials (e.g., `Anthropic`)
  - Title: always in `<em>` italics regardless of format (book, paper, blog post)
  - Parenthetical: `(year)` for standalone books, `(venue, year)` for blog posts/cookbooks/proceedings, `(edition, year)` for revised editions, `(series, year)` for monograph series
  - Use `&amp;` for `&` in HTML

### Footer

Index page has a lightweight author attribution footer: "Built by Philipp Eisenhauer".
