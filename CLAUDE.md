# CLAUDE.md

## Project overview

Static project website for the Impact Engine ecosystem. Covers the value proposition (index),
scientific methodology (science), system architecture (system), and topical memos. Deployed
to GitHub Pages via a deploy workflow.

## Development setup

No build step. Open any `.html` file in a browser to preview. Deploy happens automatically
on push to main via `.github/workflows/deploy.yml`.

## Common commands

- `python -m http.server` — serve locally at localhost:8000 for preview
- `git push origin main` — deploy to GitHub Pages (triggers CI)

## Architecture

- `index.html` — landing page: value proposition, decision loop, source code links
- `science.html` — scientific foundations: causal inference, evidence assessment, decision theory
- `system.html` — system architecture: pipeline design, adapters, config pattern
- `memos.html` — listing page for topical memos
- `memos/*.html` — individual memo pages
- `styles.css` — shared stylesheet across all pages
- `logo-inline.js` — injects inline logo mark into `<strong>` tags
- `img/` — SVG diagrams and logo assets
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow
- `_external/utils-agentic-support/` — shared agentic support (read-only submodule)

## Verification

1. Open each HTML page in a browser and verify navigation links work
2. Check that all SVG diagrams render correctly
3. Verify responsive layout at 768px and 480px breakpoints
4. Push to GitHub and confirm deploy workflow passes

## Key conventions

- Pure static HTML/CSS — no build tools, no frameworks, no JavaScript except `logo-inline.js`
- All pages share the same nav, font stack (Inter + Crimson Pro), and `styles.css`
- Diagrams are inline SVGs with `light-dark()` support for dark mode
- Memo pages live in `memos/` and use `../` prefixed paths for shared assets
- `_external/` directory is read-only — do not modify files inside it
- No print statements or console.log in JavaScript
