# OpenFXLab — Project Brief

*A one-page overview for developers considering joining the project.*

---

## What is the project?

OpenFXLab is a planned open-source FX Positioning and Macro Intelligence Platform. It ingests publicly available data — primarily CFTC currency futures positioning reports and official macro indicators — normalizes it, calculates a standard set of analytical metrics, and presents it through a web interface, API, and downloadable datasets.

## What problem does it solve?

Currency researchers currently piece together information from many separate places: the CFTC website, central bank publications, national statistics agencies, financial data providers, and their own spreadsheets. Much of the underlying positioning and macroeconomic data is publicly available, although licensing, attribution, access, and redistribution requirements vary by source — particularly for historical FX price data. The work of collecting it, normalizing it, and combining it is repetitive, error-prone, and time-consuming.

Simple COT-charting websites stop at displaying raw positioning. Institutional terminals go much further but are expensive, closed, and often inaccessible to independent researchers or students. The gap between those two options — more analytical than a charting website, more transparent and accessible than a professional terminal — is the space OpenFXLab aims to serve.

## Why is the problem real?

CFTC Commitment of Traders data has been publicly available for decades. The analytical value comes not from the raw numbers but from: normalizing them against open interest and history, connecting them to rate differentials and price behavior, identifying when positions are crowded, and flagging when those positions are contradicted by changing macro conditions. That work is within reach of open-source tools. It simply hasn't been assembled into a clean, transparent, reproducible platform.

## What would the finished product look like?

A web platform and API serving:

- A cross-currency market overview showing positioning status for EUR, JPY, GBP, CAD, AUD, CHF, and NZD
- Individual currency pages showing positioning breakdowns by participant group, historical charts, macro driver panels, and divergence indicators
- A screener to identify crowded positions and macro-positioning mismatches
- Clean data downloads in CSV and JSON
- A publicly documented API
- Methodology pages explaining every calculation in plain English

## What is the first MVP?

Phase 2 of the roadmap defines the MVP:

- CFTC data ingested, validated, and stored (Phase 1)
- Basic positioning metrics calculated: net position, weekly change, percentile, z-score
- FastAPI backend serving positioning data
- Next.js web interface with a market overview page and individual currency pages
- Positioning charts with participant breakdowns
- Macro panels showing central bank rates and rate differentials
- Downloadable CSV
- Methodology pages

## Why is the MVP feasible?

CFTC data is free and publicly released weekly with a well-documented format. The analytical calculations are straightforward statistics — percentiles, z-scores, rolling windows. The technology stack (Python, FastAPI, PostgreSQL, Next.js) is mature and well-documented. The biggest early work is careful data normalization and clear API design, both of which are engineering problems with known solutions.

## Why might users adopt it?

- Researchers and traders already do this analysis manually — a well-built tool saves real time
- Transparent methodology means users can verify and trust the numbers
- Free and open access removes the friction of institutional tools
- Downloadable data fits into existing workflows
- An API enables programmatic access for quantitative developers

## Why open source?

The methodology should be verifiable. Any calculation, formula, or assumption should be inspectable. Open development also invites specialists — quant developers, data engineers, finance researchers — to improve the tool. The core code and methodology remain open; a future hosted service could support sustainability without closing the source.

## What technical work is needed?

**Now (Phase 0–1):**
- Data pipeline design and architecture decisions
- CFTC data format research and ingestion script
- Currency contract mapping
- Database schema design
- Macro data source research and adapter design

**Phase 2:**
- FastAPI service with positioning and macro endpoints
- PostgreSQL schema implementation
- Next.js frontend scaffold
- Market overview and currency detail pages
- Charting integration
- CI/CD setup and Docker configuration

**Phase 3+:**
- Crowding indicators and divergence detection
- Screener
- Alerts
- Python package
- Research notebooks

## What will the project lead contribute?

Aditya leads:

- Finance research — data sources, methodology design, interpretation framework
- Product definition — requirements, user journeys, acceptance criteria
- Documentation — ongoing project documentation and methodology writing
- User outreach — identifying potential users and collecting feedback
- Project coordination — issue triage, contributor communication, roadmap management

## What type of collaborator is being sought?

A developer comfortable with Python backend work, data pipelines, and ideally some frontend experience. Familiarity with financial data or quantitative analysis is a plus but not required. The role would involve shaping the architecture, driving early implementation, and having real input into technical decisions.

This is a partnership. Major architectural choices remain open for discussion. The goal is to build something useful together — not to hand off a spec to be executed.

## Compensation and equity

There is currently no cash compensation available. OpenFXLab has not incorporated a company, raised funding, or committed to any equity structure.

If a long-term founding collaboration develops and a company is formally created in the future, any equity or compensation arrangement would require a separate written agreement with formal vesting terms and mutual consent — negotiated at that time. Making open-source contributions today does not automatically entitle anyone to equity. No specific percentages are promised.

## Next step

If this sounds interesting, the suggested first step is an introductory conversation via email ([openfxresearch@gmail.com](mailto:openfxresearch@gmail.com)), followed by a small trial contribution or planning task to see how collaboration feels in practice.

The issue backlog at [docs/issue-backlog.md](docs/issue-backlog.md) contains specific tasks of varying difficulty if you want to explore the work concretely before reaching out.
