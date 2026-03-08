# Impact Engine Website — Backlog

## Current state

The website has four main pages (Problem, Science, System, Memos) with consistent navigation,
shared styling, and responsive layout. The Memos section is scaffolded with a listing page
and one placeholder memo (validation strategy).

- Landing page with logo, decision loop diagram, code snippet, and source code cards
- Science page covering causal inference, evidence assessment, and decision theory
- System page covering pipeline architecture, adapters, and config pattern
- Memos listing page and directory structure ready for content
- GitHub Pages deployment via CI workflow

## Phase 0 — Site foundations

**Status**: complete

Established the three core pages (index, science, system), shared styles, SVG diagrams,
logo assets, and GitHub Pages deployment.

## Phase 1 — Memos infrastructure

**Status**: complete

Added the Memos section: nav link across all pages, listing page with card grid,
`memos/` directory, and first memo scaffold (validation strategy).

## Phase 2 — Memo content vault

**Status**: in-progress

Write 5-6 memos covering cross-cutting topics. Each memo addresses a general problem
and uses Impact Engine as the running example.

### Planned memos

- Validation strategy — how to validate a measurement system end-to-end
- Config design — parse-once patterns and why they matter
- Uncertainty propagation — carrying confidence through a pipeline
- Adapter pattern — swapping implementations without rewriting consumers
- Determinism in testing — why run-twice-assert-identical matters

## Phase 3 — Content distribution

**Status**: planned

Slice memos into social media posts (LinkedIn, Twitter). Each memo yields multiple posts:
key insight, code snippet, diagram, contrarian take. Link back to canonical long-form source.
