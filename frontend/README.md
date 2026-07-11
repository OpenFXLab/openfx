# Frontend

This directory will contain the OpenFXLab web interface.

**Status: Not yet implemented.** The frontend is planned for Phase 2 (public MVP) of the roadmap.

---

## Intended purpose

The frontend is a Next.js web application that provides:

- A cross-currency market overview page
- Individual currency detail pages
- Positioning charts with participant group breakdowns
- Macro driver panels
- A screener for identifying notable positioning conditions
- Data download pages
- Methodology and data provenance pages
- An alert builder (later phases)

---

## Proposed responsibilities

- Display current and historical positioning data for all supported currencies
- Render time-series charts for positioning and price history
- Show macro indicator context alongside positioning data
- Provide a screener interface with filter controls
- Enable CSV data downloads
- Explain all metrics on linked methodology pages
- Attribute every data point to its source with freshness timestamps
- Be accessible (WCAG 2.1 AA target) and mobile-responsive

---

## Proposed structure (to be implemented)

```
frontend/
├── app/
│   ├── page.tsx                  # Market overview
│   ├── [currency]/
│   │   └── page.tsx              # Currency detail page
│   ├── screener/
│   │   └── page.tsx
│   ├── methodology/
│   │   └── page.tsx
│   └── layout.tsx
├── components/
│   ├── PositioningChart.tsx
│   ├── MacroPanel.tsx
│   ├── CurrencyTable.tsx
│   ├── ParticipantBreakdown.tsx
│   └── DataProvenance.tsx
├── lib/
│   ├── api.ts                    # API client
│   └── types.ts                  # Shared TypeScript types
├── public/
├── tests/
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

---

## Technology

- TypeScript
- React
- Next.js
- A charting library (to be selected — see [TECH_STACK.md](../TECH_STACK.md))

---

## What is not yet implemented

Everything in this directory is planned, not built. No production web application has been implemented yet.

The static project landing page is in `docs/` (not this directory) and is already implemented as a plain HTML/CSS/JS file.

---

## Relevant issues

See [docs/issue-backlog.md](../docs/issue-backlog.md) for Phase 2 frontend issues, including:

- Frontend scaffold (Next.js + TypeScript setup)
- Market overview page
- Currency detail page
- Positioning charts
- Macro panels
- Screener
- Data download page
- Accessibility review

---

## How to contribute

Frontend contributions are most needed in Phase 2 and beyond. If you are interested in contributing to the frontend, please review [CONTRIBUTING.md](../CONTRIBUTING.md) and [JOIN.md](../JOIN.md). Familiarity with Next.js, TypeScript, and financial data visualization is helpful.
