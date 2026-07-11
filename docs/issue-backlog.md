# Issue Backlog

This document contains proposed GitHub issues for the OpenFXLab project. Issues are organized by phase and area. Each entry includes a title, description, scope, acceptance criteria, suggested labels, dependencies, and difficulty estimate.

To create actual GitHub issues, use this document as the source. Issues can be filed using the templates in `.github/ISSUE_TEMPLATE/`.

**Note on suggested labels:** The "Suggested labels" in each issue entry reflect the label system described in [docs/labels.md](labels.md). Custom labels currently active in the repository are: `backend`, `frontend`, `data`, `infrastructure`, and `methodology`. Standard GitHub labels (`bug`, `documentation`, `duplicate`, `enhancement`, `good first issue`, `help wanted`, `invalid`, `question`, `wontfix`) are also available. Labels such as `feature`, `research`, `needs data review`, `needs discussion`, and `needs methodology review` are proposed labels that may not yet exist in the repository; use `enhancement` for new features if the `feature` label has not been created.

---

## Phase 0 — Foundation

### Issue 1: CFTC TFF data format research

**Problem/goal:** Before writing any ingestion code, document the exact format, column definitions, and historical coverage of the CFTC Traders in Financial Futures report.

**Scope:** Research task. No code required.

**Acceptance criteria:**
- Document the TFF CSV column names and their meanings
- Confirm the URL pattern for accessing historical reports
- Document the update schedule (observation date, publication date)
- Document known changes to the report format over time
- List the contract codes for all 7 target currencies
- Document any known data quality issues or gaps

**Suggested labels:** `data`, `research`, `good first issue`

**Dependencies:** None

**Difficulty:** Beginner

---

### Issue 2: Data source licensing audit

**Problem/goal:** Confirm that every proposed data source in `docs/data-sources.md` is appropriately licensed for display and redistribution.

**Scope:** Research task for each data source category.

**Acceptance criteria:**
- For each proposed data source: confirm license type, redistribution permission, and attribution requirements
- Flag any sources with unclear or restrictive licensing
- Propose alternatives for any sources that cannot be used

**Suggested labels:** `data`, `research`, `needs data review`

**Dependencies:** Issue 1

**Difficulty:** Intermediate

---

### Issue 3: Architecture review and technology decisions

**Problem/goal:** Review the proposed architecture in `docs/architecture.md` and TECH_STACK.md, resolve open decisions, and document the agreed technical approach.

**Scope:** Discussion and documentation update.

**Acceptance criteria:**
- All open technical decisions in TECH_STACK.md documented with agreed approach
- Database access approach confirmed (SQLAlchemy ORM/Core/raw SQL)
- Data processing library confirmed (Pandas vs. Polars)
- Charting library proposed with justification
- Cloud deployment provider selected
- Task scheduling approach confirmed

**Suggested labels:** `backend`, `infrastructure`, `needs discussion`

**Dependencies:** None

**Difficulty:** Intermediate

---

### Issue 4: User interviews — Phase 0 validation

**Problem/goal:** Conduct at least 5 interviews with potential users to validate the product direction before implementation begins.

**Scope:** User research task.

**Acceptance criteria:**
- At least 5 interviews conducted with users from at least 3 different persona types
- Findings documented in a brief summary
- Product specification or roadmap updated based on findings
- Any major pivots or scope changes flagged

**Suggested labels:** `research`, `documentation`

**Dependencies:** None (can proceed immediately)

**Difficulty:** Intermediate

---

## Phase 1 — Data Foundation

### Issue 5: CFTC data importer

**Problem/goal:** Write a Python script to download, parse, and normalize the CFTC TFF report for currency futures.

**Scope:** Backend — data ingestion

**Acceptance criteria:**
- Script downloads the latest TFF report from the CFTC website
- Parses the CSV file correctly
- Extracts positions for all 7 target currency contracts
- Separates by participant group (leveraged funds, asset managers, dealers, other reportables)
- Outputs a normalized DataFrame or data structure
- Handles HTTP errors and malformed files gracefully
- Includes tests with a sample TFF file

**Suggested labels:** `backend`, `data`, `feature`

**Dependencies:** Issue 1 (format research), Docker dev environment

**Difficulty:** Intermediate

---

### Issue 6: Contract-code-to-currency mapping table

**Problem/goal:** Create the mapping table that translates CFTC contract codes to currency pairs and normalizes direction.

**Scope:** Data

**Acceptance criteria:**
- CSV or YAML mapping file covering all 7 target currencies
- Each entry includes: CFTC contract code, currency pair, direction convention, contract size, and notes
- Direction normalization documented (positive = long non-USD currency)
- Mapping is used by the CFTC importer

**Suggested labels:** `data`, `documentation`

**Dependencies:** Issue 1, Issue 5

**Difficulty:** Beginner

---

### Issue 7: PostgreSQL database schema

**Problem/goal:** Design and implement the PostgreSQL database schema for positioning data, macro data, price data, provenance metadata, and derived metrics.

**Scope:** Backend — database

**Acceptance criteria:**
- Schema covers: `data_sources`, `raw_files`, `positioning`, `macro_indicators`, `price_history`, `derived_metrics`
- `derived_metrics` table includes enough information to identify: currency or contract, participant group, observation date, metric name, metric value, lookback window or calculation parameters, methodology or calculation version, and calculation timestamp
- Alembic migrations created for all tables
- Schema documented with field descriptions
- All foreign key relationships defined
- Indexes on date columns and currency columns

**Suggested labels:** `backend`, `data`, `feature`

**Dependencies:** Issue 3 (technology decisions)

**Difficulty:** Intermediate

---

### Issue 8: Data validation suite

**Problem/goal:** Write a suite of data quality tests that run after each ingestion cycle.

**Scope:** Backend — testing

**Acceptance criteria:**
- Completeness check: all 7 currencies present in each report
- Range check: open interest and all reported long, short, and spreading positions must be non-negative; reported values should not exceed plausible bounds relative to open interest
- Consistency check: participant and report totals should reconcile according to the exact fields, definitions, and tolerances documented for the selected CFTC report; validation logic must be based on documented CFTC column relationships rather than an assumed long-plus-short equality; any reconciliation difference should be logged and explained
- Staleness check: report date is recent (not older than 10 days)
- Weekly continuity check: no gaps of more than 2 consecutive weeks
- All tests pass on sample historical data
- Failures emit a clearly labeled error message

**Suggested labels:** `backend`, `data`, `feature`

**Dependencies:** Issue 5, Issue 7

**Difficulty:** Intermediate

---

### Issue 9: Historical CFTC data backfill

**Problem/goal:** Download and store the full available history of CFTC TFF reports (back to 2009 or minimum 5 years).

**Scope:** Backend — data

**Acceptance criteria:**
- All historical TFF reports downloaded and stored in raw layer
- All historical reports parsed and normalized using the importer from Issue 5
- All historical data written to PostgreSQL
- Data quality tests pass for historical data
- Any known gaps in historical data documented

**Suggested labels:** `backend`, `data`, `feature`

**Dependencies:** Issue 5, Issue 7, Issue 8

**Difficulty:** Intermediate

---

### Issue 10: Metric calculation — percentiles and z-scores

**Problem/goal:** Implement the historical percentile and z-score calculations as defined in `docs/methodology.md`.

**Scope:** Backend — data processing

**Acceptance criteria:**
- `calculate_percentile(net_position, history, window_weeks)` function implemented
- `calculate_zscore(net_position, history, window_weeks)` function implemented
- Both functions match the formulas in `docs/methodology.md` exactly
- Lookback window is configurable
- Edge cases handled: fewer observations than window, missing data
- Unit tests with known inputs and expected outputs
- Results written to `derived_metrics` table

**Suggested labels:** `backend`, `methodology`, `feature`

**Dependencies:** Issue 7, Issue 9

**Difficulty:** Intermediate

---

### Issue 11: Central bank rate data adapter

**Problem/goal:** Implement an ingestion adapter for central bank policy rates for all covered currencies.

**Scope:** Backend — macro data

**Acceptance criteria:**
- Retrieves current policy rate for: Fed, ECB, BoJ, BoE, BoC, RBA, SNB, RBNZ
- Calculates pairwise rate differentials vs. USD
- Stores data in `macro_indicators` table with proper provenance
- Update schedule appropriate to central bank meeting frequency
- Data sources confirmed as freely available and appropriately licensed
- Tests covering rate retrieval and differential calculation

**Suggested labels:** `backend`, `data`, `feature`

**Dependencies:** Issue 7, Issue 2 (licensing)

**Difficulty:** Intermediate

---

### Issue 12: Currency price data adapter

**Problem/goal:** Implement an ingestion adapter for daily OHLC price data for all 7 currency pairs. Volume data is included only when the selected source provides a clearly defined and appropriately documented volume measure. The decentralized spot FX market does not have one universal global volume figure; broker-specific tick volume or venue-specific volume must not be presented as total global FX volume.

**Scope:** Backend — price data

**Acceptance criteria:**
- Daily close prices retrieved for EUR/USD, USD/JPY, GBP/USD, USD/CAD, AUD/USD, USD/CHF, NZD/USD
- Data source confirmed as freely available and appropriately licensed for redistribution
- At least 5 years of historical data retrieved and stored
- Data stored in `price_history` table with proper provenance
- Tests covering data retrieval and storage

**Suggested labels:** `backend`, `data`, `feature`

**Dependencies:** Issue 7, Issue 2 (licensing)

**Difficulty:** Intermediate

---

### Issue 13: Docker development environment

**Problem/goal:** Create a Docker Compose setup that starts the full local development environment with a single command.

**Scope:** Infrastructure

**Acceptance criteria:**
- `docker-compose up` starts: PostgreSQL, FastAPI backend, and (later) Next.js frontend
- Database is seeded with migrations on first start
- Environment variables managed via `.env.example`
- `README` in repository root updated with setup instructions
- Works on macOS and Linux

**Suggested labels:** `infrastructure`, `good first issue`

**Dependencies:** Issue 7

**Difficulty:** Intermediate

---

## Phase 2 — Public MVP

### Issue 14: FastAPI application scaffold

**Problem/goal:** Create the FastAPI application structure with routing, error handling, and OpenAPI documentation configured.

**Scope:** Backend — API

**Acceptance criteria:**
- FastAPI app created with health check endpoint
- Versioned routing (`/api/v1/...`)
- Pydantic response models for all planned endpoints
- OpenAPI documentation accessible at `/docs`
- CORS configured for frontend origin
- Error handling returns consistent JSON error responses
- Dockerfile for the API service

**Suggested labels:** `backend`, `feature`

**Dependencies:** Issue 13

**Difficulty:** Intermediate

---

### Issue 15: Positioning API endpoints

**Problem/goal:** Implement the positioning data API endpoints.

**Scope:** Backend — API

**Acceptance criteria:**
- `GET /api/v1/currencies` returns list of supported currencies
- `GET /api/v1/positioning/{currency}` returns current positioning with all metrics
- `GET /api/v1/positioning/{currency}/history` returns historical data with date range support
- All responses include data provenance (source, observation date, publication date)
- Responses match documented Pydantic schemas
- Tests for all endpoints

**Suggested labels:** `backend`, `feature`

**Dependencies:** Issue 10, Issue 14

**Difficulty:** Intermediate

---

### Issue 16: Macro data API endpoints

**Problem/goal:** Implement macro data API endpoints.

**Scope:** Backend — API

**Acceptance criteria:**
- `GET /api/v1/macro/{currency}` returns current macro indicators for a currency pair
- Response includes: central bank rates, rate differential, inflation, employment where available
- All responses include provenance metadata
- Tests for all endpoints

**Suggested labels:** `backend`, `feature`

**Dependencies:** Issue 11, Issue 14

**Difficulty:** Intermediate

---

### Issue 17: Next.js frontend scaffold

**Problem/goal:** Set up the Next.js + TypeScript frontend project structure.

**Scope:** Frontend

**Acceptance criteria:**
- Next.js project created with TypeScript
- ESLint and Prettier configured
- API client module created (fetches from FastAPI backend)
- Shared TypeScript types aligned with API response schemas
- Basic layout and navigation component
- Dockerfile for the frontend service
- `docker-compose.yml` updated to include frontend

**Suggested labels:** `frontend`, `feature`

**Dependencies:** Issue 13, Issue 14

**Difficulty:** Intermediate

---

### Issue 18: Market overview page

**Problem/goal:** Implement the market overview page showing all currencies with key positioning metrics.

**Scope:** Frontend

**Acceptance criteria:**
- Displays a table with all 7 currencies
- Columns: currency pair, net position (leveraged funds), weekly change, percentile, z-score, macro status indicator
- Visual indicator for extreme readings (≥80th or ≤20th percentile)
- Rows link to currency detail pages
- Data freshness timestamp displayed
- Source attribution displayed
- Mobile-responsive
- Accessibility: table uses semantic HTML, indicators have text equivalents

**Suggested labels:** `frontend`, `feature`

**Dependencies:** Issue 15, Issue 17

**Difficulty:** Intermediate

---

### Issue 19: Currency detail page

**Problem/goal:** Implement the currency detail page for an individual currency pair.

**Scope:** Frontend

**Acceptance criteria:**
- Displays positioning metrics table (all participant groups, all metrics)
- Displays positioning time-series chart with participant group breakdown
- Displays macro driver panel (rates, rate differential, inflation, employment)
- Displays data provenance and freshness for every section
- Links to methodology documentation
- CSV download button functional
- Mobile-responsive
- Accessible charts (data table alternative available)

**Suggested labels:** `frontend`, `feature`

**Dependencies:** Issue 15, Issue 16, Issue 18

**Difficulty:** Advanced

---

### Issue 20: Positioning charts component

**Problem/goal:** Implement the reusable positioning chart component used on the currency detail page.

**Scope:** Frontend — component

**Acceptance criteria:**
- Multi-line chart showing net position over time by participant group
- Date range selector (1 year, 2 years, 5 years)
- Participant group toggle
- Percentile band overlay option
- Chart is accessible (data table alternative)
- Chart resizes correctly on mobile
- Chart respects prefers-reduced-motion

**Suggested labels:** `frontend`, `feature`

**Dependencies:** Issue 17, charting library selected

**Difficulty:** Intermediate

---

### Issue 21: CI/CD pipeline (GitHub Actions)

**Problem/goal:** Set up GitHub Actions workflows for automated testing and linting.

**Scope:** Infrastructure

**Acceptance criteria:**
- Python backend: pytest + ruff/flake8 runs on every PR
- Frontend: ESLint + TypeScript type checking runs on every PR
- Docker build test runs on every PR
- All workflows pass on a clean repository state
- Workflow definitions documented

**Suggested labels:** `infrastructure`, `feature`

**Dependencies:** Issue 14, Issue 17

**Difficulty:** Intermediate

---

### Issue 22: Methodology pages

**Problem/goal:** Create the methodology pages in the web interface, linked from every metric displayed in the app.

**Scope:** Frontend + documentation

**Acceptance criteria:**
- Web page(s) explaining all metrics: gross long/short, net position, weekly change, % of OI, percentile, z-score
- Plain-English explanations alongside formulas
- Data source attributed for each metric
- Links from every metric label in the app to the relevant methodology section
- Mobile-responsive

**Suggested labels:** `frontend`, `documentation`, `methodology`

**Dependencies:** Issue 19

**Difficulty:** Beginner

---

### Issue 23: Data download endpoints and UI

**Problem/goal:** Implement CSV download functionality for positioning and macro data.

**Scope:** Backend + Frontend

**Acceptance criteria:**
- `GET /api/v1/download/{currency}/csv` returns well-formatted CSV
- CSV headers are labeled and documented
- Date range parameter supported
- Attribution text included in CSV header rows
- Download button on currency detail page and data download page
- All-currencies combined download available

**Suggested labels:** `backend`, `frontend`, `feature`

**Dependencies:** Issue 15, Issue 19

**Difficulty:** Beginner

---

### Issue 24: GitHub Pages deployment

**Problem/goal:** Ensure the static landing page in `docs/` deploys correctly via GitHub Pages.

**Scope:** Infrastructure

**Acceptance criteria:**
- GitHub Pages enabled for the repository from the `/docs` directory
- `docs/index.html` is accessible at the project's GitHub Pages URL
- All internal links in the landing page work correctly on GitHub Pages
- No build step required

**Suggested labels:** `infrastructure`, `documentation`, `good first issue`

**Dependencies:** None

**Difficulty:** Beginner

---

## Phase 3 — Intelligence Layer

### Issue 25: Screener implementation

**Problem/goal:** Implement the screener feature allowing users to filter currencies by positioning and macro criteria.

**Scope:** Backend + Frontend

**Acceptance criteria:**
- `GET /api/v1/screener` endpoint accepts filter parameters
- Filters: percentile range, weekly change direction, participant group, macro status
- Results include all key metrics
- Frontend screener page with filter controls
- Results link to currency detail pages
- CSV download of screener results

**Suggested labels:** `backend`, `frontend`, `feature`

**Dependencies:** Issue 15, Issue 16, Issue 19

**Difficulty:** Intermediate

---

### Issue 26: Crowding indicator

**Problem/goal:** Define and implement a composite crowding indicator as described in `docs/methodology.md`.

**Scope:** Backend — methodology

**Acceptance criteria:**
- Indicator defined with documented components and weights in `docs/methodology.md`
- Components include at minimum: positioning percentile, z-score, consecutive-week trend
- All component values exposed in API alongside composite score
- No mysterious scores — all components visible
- Tests with known inputs and expected outputs
- Displayed on currency detail page

**Suggested labels:** `backend`, `methodology`, `feature`, `needs methodology review`

**Dependencies:** Issue 10, Issue 15

**Difficulty:** Advanced

---

### Issue 27: Positioning-price divergence detection

**Problem/goal:** Implement the positioning-price divergence indicator as described in `docs/methodology.md`.

**Scope:** Backend

**Acceptance criteria:**
- Divergence flag calculated for each currency: is dominant positioning contradicted by recent price direction?
- Definition of "divergence" documented in methodology
- Time windows configurable
- Flag exposed in API and displayed on currency detail page with explanation
- Tests with known inputs

**Suggested labels:** `backend`, `methodology`, `feature`

**Dependencies:** Issue 10, Issue 12

**Difficulty:** Intermediate

---

### Issue 28: Accessibility audit

**Problem/goal:** Audit the web interface for accessibility issues and implement fixes.

**Scope:** Frontend

**Acceptance criteria:**
- WCAG 2.1 AA checklist reviewed for all pages
- All color-only indicators have text or icon accompaniments
- Charts have data-table alternatives
- All interactive elements keyboard-navigable
- Screen reader tested on at least one major screen reader
- All issues found documented and resolved or tracked

**Suggested labels:** `frontend`, `enhancement`

**Dependencies:** Issue 19, Issue 20

**Difficulty:** Intermediate

---

### Issue 29: Unit test coverage review

**Problem/goal:** Review unit test coverage for all backend data processing and API logic and improve to a documented minimum level.

**Scope:** Backend — testing

**Acceptance criteria:**
- Coverage report generated for all backend modules
- All metric calculation functions have ≥90% line coverage
- All API endpoints have integration test coverage
- Any gaps documented as follow-on issues
- CI workflow fails if coverage drops below threshold

**Suggested labels:** `backend`, `enhancement`

**Dependencies:** Issue 10, Issue 14, Issue 15

**Difficulty:** Intermediate

---

### Issue 30: Inflation and employment data adapters

**Problem/goal:** Implement ingestion adapters for CPI and unemployment data for all covered currencies' home countries.

**Scope:** Backend — macro data

**Acceptance criteria:**
- Monthly CPI (YoY%) retrieved for: US, Eurozone, Japan, UK, Canada, Australia, Switzerland, New Zealand
- Unemployment rate retrieved for the same set of countries
- Data stored in `macro_indicators` table with proper provenance
- Update schedule matched to publication frequency
- Data sources confirmed as freely available and appropriately licensed
- Tests covering data retrieval

**Suggested labels:** `backend`, `data`, `feature`

**Dependencies:** Issue 7, Issue 2 (licensing)

**Difficulty:** Intermediate

---

*End of backlog. Additional issues will be created as the project progresses.*

---

## How to use this backlog

1. Browse this document to find an issue that interests you.
2. Check GitHub Issues to confirm it has not already been filed.
3. File the issue using the appropriate issue template in `.github/ISSUE_TEMPLATE/`.
4. Reference this document in the issue for context.
5. Comment on the issue to indicate you are working on it before starting.

Questions? Open a discussion issue or email [openfxresearch@gmail.com](mailto:openfxresearch@gmail.com).
