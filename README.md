# OpenFXLab

**FX Positioning and Macro Intelligence Platform**

OpenFXLab is a planned open-source platform that brings together foreign exchange positioning data and macroeconomic context in one place. It is designed for currency traders, researchers, finance students, and developers who need a transparent, reproducible way to understand how market participants are positioned in FX markets and whether the macro environment supports those positions.

**Current status: Pre-alpha — planning and design stage.** No application code has been written yet. This repository contains project documentation, product specifications, and contributor materials.

---

## What is FX positioning?

Currency futures markets require large participants to report their positions weekly to the U.S. Commodity Futures Trading Commission (CFTC). The CFTC publishes these reports publicly. They show how different groups of market participants — including leveraged funds, asset managers, and dealers — are positioned across major currency futures contracts.

A "long" position profits if the currency strengthens. A "short" position profits if the currency weakens. Aggregating those positions across thousands of traders and comparing them to historical levels reveals whether a particular directional bet is crowded, growing, or reversing.

## What is macro intelligence?

Currencies do not move in a vacuum. They are driven by central bank policy, interest rate differentials, inflation, employment, economic growth, commodity prices, and shifts in global risk appetite. Macro intelligence means connecting positioning data with those driving forces — so you can ask not just "who is positioned long?" but "does the macro environment still support that position?"

## The problem

A researcher analyzing the Japanese yen today typically needs to:

- Download and parse CFTC positioning reports
- Map contract codes to actual currencies
- Separate leveraged-fund, asset-manager, and dealer positions
- Compare current levels with historical data to assess whether a position is crowded
- Gather USD/JPY price data
- Compare U.S. and Japanese interest rates and central bank policy
- Review inflation and employment figures from separate official sources
- Track volatility indicators
- Manually decide whether all of those signals agree or contradict one another

All of this information exists publicly. But it lives in separate systems, arrives on different schedules, uses inconsistent formats, and requires significant effort to normalize and combine. Simple COT-charting websites display positioning but lack macro context. Institutional terminals provide sophisticated analytics but are expensive and closed. OpenFXLab aims to fill the gap between those two options.

## The proposed solution

A modular open-source platform that:

- Ingests and normalizes CFTC positioning data for major currency futures
- Calculates standard positioning metrics: net positions, weekly changes, percentiles, z-scores
- Connects positioning data with macro drivers: central bank rates, interest rate differentials, bond yields, inflation, employment, growth, commodities, and volatility
- Identifies when positioning is historically crowded, when participant groups disagree, and when price behavior diverges from dominant positioning
- Exposes everything through a public API and a web interface
- Documents all formulas, data sources, and assumptions openly

## JPY example

As an illustration of the type of insight the platform aims to provide:

> *Illustrative example — not live market data.*
>
> Leveraged funds hold a historically large net short position in JPY futures (positioning percentile: 88th). Asset managers are moderately net long. The speculative short has grown for six consecutive weeks. However, USD/JPY has stopped making new highs, and the U.S.–Japan interest rate differential has begun narrowing as the Bank of Japan signals tightening. The short position may therefore be increasingly vulnerable to a rapid unwind.

The platform would surface this type of observation as a research input — not as a trading signal or guaranteed forecast.

## Initial MVP currencies

EUR, JPY, GBP, CAD, AUD, CHF, NZD.

USD is treated as the reference currency throughout.

## Intended users

- Independent currency traders
- Global macro investors
- Small hedge funds and proprietary trading firms
- Finance students and quantitative finance clubs
- Academic researchers
- Financial journalists
- Quantitative developers
- Portfolio managers and market commentators

OpenFXLab is not designed to replace Bloomberg, LSEG, bank research desks, or proprietary institutional flow data. It is designed to be a useful specialist tool that saves time, provides clean data, offers transparent calculations, and fits into existing workflows.

## Why open source?

The analytical methodology should be publicly inspectable. Anyone should be able to verify the formulas, check the data sources, and reproduce the calculations. Open-source development also allows contributors to add data connectors, new indicators, documentation, tests, and interfaces. A convenient hosted version of the platform may eventually exist, and that service could later support itself through convenience features, higher API limits, or appropriately licensed premium datasets — but the core code and methodology remain open.

## Proposed technical architecture

The planned stack is a modular Python/TypeScript system:

- **Data ingestion**: Python scheduled jobs pulling from official public sources
- **Database**: PostgreSQL storing raw and normalized data
- **API layer**: FastAPI serving positioning and macro data
- **Web interface**: Next.js with TypeScript
- **Infrastructure**: Docker, GitHub Actions

The stack is a proposal, not a final decision. Architecture choices remain open for discussion with future technical collaborators. See [TECH_STACK.md](TECH_STACK.md) and [docs/architecture.md](docs/architecture.md).

## Honest limitations

CFTC positioning data represent reported positions in covered futures and options-on-futures markets only. They do not represent the entire global FX market. Spot trades, forwards, swaps, non-deliverable forwards, OTC options, bank inventories, corporate hedges, and sovereign activity may not be captured. Positioning data are published weekly and are delayed — typically by one business day after the Tuesday observation date. Participant classifications are useful but imperfect. A historically crowded position can remain crowded for a long time before reversing. Correlation does not imply causation. **OpenFXLab is not financial advice.**

## Roadmap summary

| Phase | Focus |
|-------|-------|
| 0 | Foundation — documentation, data-source verification, architecture decisions |
| 1 | Data — CFTC ingestion, macro data adapters, historical storage |
| 2 | Public MVP — API, web interface, charts, methodology pages |
| 3 | Intelligence — crowding indicators, divergence screens, alerts |
| 4 | Ecosystem — Python package, research notebooks, contributor tooling |
| 5 | Adoption — hosted features, expanded asset coverage |

Full roadmap: [ROADMAP.md](ROADMAP.md)

## How to contribute

This project is in its earliest stage. Right now, the most valuable contributions are:

- Reviewing and improving documentation
- Research into data sources, APIs, and licensing
- Architecture discussions
- UI and UX thinking
- Finance methodology input

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide. See [JOIN.md](JOIN.md) if you are considering a deeper technical collaboration.

The issue backlog is documented in [docs/issue-backlog.md](docs/issue-backlog.md).

## Contact

Project lead: **Aditya Navin**
Email: [openfxresearch@gmail.com](mailto:openfxresearch@gmail.com)

## Disclaimer

OpenFXLab is a software research tool in development. Nothing in this repository constitutes financial advice, investment advice, or a recommendation to buy or sell any financial instrument. Historical positioning patterns do not guarantee future results. All example data are illustrative only.

## License

MIT License — see [LICENSE](LICENSE).

---

*Additional documentation:*
[PROJECT_BRIEF.md](PROJECT_BRIEF.md) · [VISION.md](VISION.md) · [PRODUCT.md](PRODUCT.md) · [ROADMAP.md](ROADMAP.md) · [TECH_STACK.md](TECH_STACK.md) · [CONTRIBUTING.md](CONTRIBUTING.md) · [JOIN.md](JOIN.md) · [docs/architecture.md](docs/architecture.md) · [docs/methodology.md](docs/methodology.md) · [docs/data-sources.md](docs/data-sources.md)
