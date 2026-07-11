# Roadmap

OpenFXLab uses milestone-based phases rather than calendar deadlines, because the project is in an early stage with a small team. Phases represent logical completion points, not fixed dates. Progress depends on contributor availability and community engagement.

**Current status:** Phase 0 — Foundation and validation.

---

## Phase 0 — Foundation and validation

### Objectives

Establish the project foundation: documentation, architecture decisions, data-source verification, and initial design concepts. Validate that the planned data sources are sufficient and accessible before writing application code.

### Major deliverables

- [x] Project documentation (README, VISION, PRODUCT, ROADMAP, TECH_STACK)
- [x] Contributor materials (CONTRIBUTING, JOIN, GOVERNANCE, CODE_OF_CONDUCT)
- [x] GitHub issue templates and PR template
- [x] Initial issue backlog
- [x] Architecture proposal
- [x] Data-source research document
- [x] Methodology documentation
- [x] UI wireframes
- [x] Static project landing page
- [ ] User interviews with at least five potential users
- [ ] Data-source verification: confirm CFTC file formats, update schedules, and historical coverage
- [ ] Architecture review with at least one technical collaborator
- [ ] Database schema proposal
- [ ] Technology stack confirmed

### Exit criteria

Data sources confirmed. Architecture agreed. Technology stack confirmed. Additional technical collaborators engaged. All Phase 0 deliverables complete.

### Dependencies

None — this phase can proceed immediately.

---

## Phase 1 — Data foundation

### Objectives

Build the data pipeline. Ingest, validate, normalize, and store CFTC positioning data and a baseline set of macro indicators. No user-facing product yet — the focus is a clean, reliable data layer.

### Major deliverables

- CFTC Traders in Financial Futures (TFF) data importer
- Contract-code-to-currency mapping table
- Currency direction normalization (long EUR/USD vs. long USD/JPY)
- Raw data storage layer (source files preserved)
- PostgreSQL schema for positioning data
- Data validation suite (completeness, range checks, consistency)
- Historical backfill for at least 5 years of positioning data
- Macro data source registry documenting all candidate sources
- At least two macro data adapters (central bank rates + one other)
- Price data adapter (appropriately licensed source)
- Scheduled ingestion jobs for weekly positioning updates
- Data quality monitoring basics (stale data alerts, failed ingestion alerts)

### Exit criteria

All seven currencies have clean, validated historical positioning data. At least one macro data stream is live per currency. Scheduled ingestion runs without manual intervention. Data quality tests pass.

### Dependencies

Confirmed data-source licenses and API access. Agreed database schema. Containerized development environment.

---

## Phase 2 — Public MVP

### Objectives

Build and deploy the first public-facing product: a web interface and API serving positioning and macro data for all seven currencies.

### Major deliverables

- FastAPI application with positioning and macro endpoints
- OpenAPI documentation for the API
- Next.js frontend scaffold
- Market overview page (all currencies, key metrics)
- Individual currency pages (positioning chart, participant breakdown, macro panel)
- Positioning chart with participant group breakdown
- Historical positioning chart with percentile bands
- Macro driver panel
- Data download (CSV) per currency
- Methodology pages (all metrics documented)
- Data provenance labels and freshness timestamps throughout
- Docker development environment
- GitHub Actions CI (tests, linting)
- Basic deployment to a cloud provider
- GitHub Pages landing page live

### Exit criteria

All seven currencies show current positioning data updated weekly. Net position, weekly change, percentile, z-score, and participant breakdowns displayed. At least one macro indicator live per currency. CSV download available. API documented and publicly accessible. All data attributed to sources.

### Dependencies

Phase 1 complete. Frontend developer engaged. Cloud deployment environment chosen.

---

## Phase 3 — Intelligence layer

### Objectives

Add analytical indicators that identify crowded positions, positioning-price divergences, and positioning-macro divergences. Add screener and alert functionality.

### Major deliverables

- Crowding composite indicator (transparent, documented components)
- Positioning-price divergence detection
- Positioning-macro divergence detection (rate differential vs. positioning direction)
- Cross-currency screener with filter controls
- Screener alert system (email notifications)
- Multi-currency comparison charts
- Alert builder UI
- Positioning-trend analysis (consecutive weeks of increase/decrease)

### Exit criteria

Screener functional. At least three divergence/crowding metrics live. Alert system operational. All indicators documented on methodology pages.

### Dependencies

Phase 2 complete. Alert delivery infrastructure. Additional macro data streams.

---

## Phase 4 — Open-source ecosystem

### Objectives

Make the platform more useful as open-source infrastructure. Release a Python package, publish research notebooks, improve contributor documentation.

### Major deliverables

- `openfxlab` Python package (data access, metric calculation)
- Package published to PyPI
- Research notebooks (Jupyter) demonstrating positioning analysis
- Enhanced contributor documentation
- Public API with documented rate limits
- Example scripts for common analytical tasks
- Educational materials explaining FX positioning concepts

### Exit criteria

Python package published and installable. At least three research notebooks published. Contributor onboarding documented end-to-end.

### Dependencies

Phase 2 API stable. Community contributors engaged.

---

## Phase 5 — Broader adoption and optional hosted features

### Objectives

Expand the platform's usefulness and explore sustainable hosting. Begin evaluating additional asset classes.

### Major deliverables

- Saved dashboards and watchlists (requires user accounts)
- Team/organization features
- Higher API rate limits for registered users
- Appropriately licensed premium macro datasets (if feasible and correctly licensed)
- Evaluation of rates, commodities, or equity-index futures positioning expansion
- Enhanced mobile experience
- Accessibility audit and improvements

### Exit criteria

User accounts functional. Hosted service operational. Premium data tier reviewed and legally documented (if pursued).

### Dependencies

Phase 3 complete. Legal review if premium data or paid tiers are introduced. Sustained contributor community.

---

## What is not on the roadmap

- Real-time data feeds (not commercially or technically feasible for this project in the near term)
- Automated trade execution
- Brokerage integration
- OTC derivatives data
- Proprietary bank flow data
- Machine learning forecasting models in early phases (methodology transparency takes priority)

---

## How the roadmap evolves

This roadmap is a living document. Phase scope and sequencing will be updated as the project progresses, as user feedback is incorporated, and as the contributor community grows. Major changes will be discussed in GitHub issues or discussions before being merged.
