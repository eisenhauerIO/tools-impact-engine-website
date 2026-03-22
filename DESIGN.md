# Design: Impact Engine Project Website

## Motivation

Each Impact Engine component has its own Sphinx documentation covering API reference and
usage. But there is no single place that explains why the ecosystem exists, what scientific
foundations it rests on, and how the pieces fit together. The website fills this gap for
four audiences: industry hiring managers, academic researchers, business decision-makers,
and students.

## Architecture overview

```
index.html          Problem page (landing)
science.html        Science page (methodology)
system.html         System page (architecture)
styles.css          Shared styles
logo-inline.js      Logo injection script
img/                SVG assets
```

All pages are static HTML sharing one stylesheet. No build step, no templating engine.
The site deploys to GitHub Pages on push to main.

## Components

| File | Role |
|------|------|
| `index.html` | Landing page: logo, decision loop diagram, code snippet, source code cards, deep dive links |
| `science.html` | Three-section structure mapping disciplines to pipeline stages (causal inference, evidence assessment, decision theory) |
| `system.html` | Architecture: protocol-based pipeline, adapter pattern, config pattern, CLI scaffolding |
| `styles.css` | Full stylesheet: layout, typography, cards, diagrams, responsive breakpoints |
| `logo-inline.js` | Finds `<strong>` elements containing "Impact Engine" and prepends the inline logo SVG |

## Data flow

No runtime data flow — this is a static site. Content flows from:

1. Component README taglines and solution paragraphs inform `science.html` software descriptions
2. Component Sphinx docs are linked from source code cards on `index.html`

## Future directions

- **Dark mode refinement**: SVG diagrams already use `light-dark()` CSS; verify all pages render correctly in both modes
