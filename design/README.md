# Design

This directory will contain design assets, UI references, and design documentation for OpenFXLab.

**Status: Not yet implemented.** Formal design work will begin in Phase 1/2 of the roadmap.

---

## Intended purpose

The `design/` directory stores design-related artifacts that should be version-controlled alongside the code:

- UI mockups and wireframes (exported from design tools)
- Design tokens (colors, typography, spacing)
- Icon references
- Component specifications
- Accessibility audit notes

---

## Proposed contents

```
design/
├── wireframes/
│   ├── market-overview.png       # Market overview mockup
│   ├── currency-detail.png       # Currency detail page mockup
│   └── screener.png              # Screener mockup
├── tokens/
│   └── design-tokens.json        # Colors, typography, spacing
├── icons/
│   └── README.md                 # Icon usage guidelines
├── specs/
│   └── component-specs.md        # Component design specifications
└── README.md
```

---

## Current design references

Low-fidelity wireframes are described in [docs/ui-wireframes.md](../docs/ui-wireframes.md). Those text-based wireframes are the starting point for any visual design work.

---

## Design principles

- **Clarity over decoration.** Data is the focus. The interface should support analysis, not distract from it.
- **Readable contrast.** Financial data requires clear, legible presentation.
- **Accessibility first.** Color alone should never be the only indicator of status. Keyboard navigation must work throughout.
- **Mobile-responsive.** The interface must work on small screens, even for a primarily desktop-oriented product.
- **No hype.** Avoid marketing-heavy visual language. The design should feel like a research tool, not a sales page.

---

## What is not yet implemented

No design files have been created yet. This directory is a placeholder.

The static project landing page (`docs/`) has basic styling already implemented.

---

## How to contribute

Design contributions are welcome. If you are interested in contributing UI design or UX research, please review [CONTRIBUTING.md](../CONTRIBUTING.md) and look at [docs/user-personas.md](../docs/user-personas.md) for the intended users. Review [docs/ui-wireframes.md](../docs/ui-wireframes.md) as the starting reference point.

A designer or UX researcher with an interest in financial data visualization would be particularly valuable in Phase 1 and Phase 2.
