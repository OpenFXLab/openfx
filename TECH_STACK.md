# Technology Stack

**Status: Proposal — not final. Major decisions remain open for discussion with technical collaborators.**

This document describes the proposed technology stack for OpenFXLab and explains the reasoning behind each choice. The project is in Phase 0 (planning), and the technical collaborator who joins the project will have real input into these decisions.

---

## Guiding principles

1. **Prefer proven, boring technology.** The domain (financial data analysis) is complex enough. The stack should not add complexity.
2. **Modular monolith first.** A single deployable application is simpler to operate, debug, and understand than a distributed system. Decompose only when there is a clear need.
3. **Reproducibility.** Everything containerized from the start. No "works on my machine."
4. **Transparency.** Technologies chosen for inspectability and debuggability, not for impression.

---

## Backend

### Python

The primary backend language. Python is the natural choice for a data-heavy analytical platform:

- The best scientific and data libraries (Pandas, Polars, NumPy, SciPy) are in Python
- The financial data community is primarily Python-based
- FastAPI, Pydantic, and SQLAlchemy are mature and widely used
- Contributors familiar with quantitative analysis will already know Python

### FastAPI

Web framework for the API layer.

**Why FastAPI:**
- Automatic OpenAPI documentation from type hints
- Excellent performance relative to Django or Flask for API-only services
- Native async support
- Pydantic integration for request/response validation

### Pydantic

Data validation and settings management. Used for:

- API request/response schema definition
- Configuration management
- Data pipeline schema validation

### SQLAlchemy (or alternative)

ORM and database abstraction layer.

**Why:** Provides a clean Python interface to PostgreSQL. Supports both ORM and core SQL styles. Migration tooling (Alembic) is well-documented.

**Open question:** SQLAlchemy Core vs. SQLAlchemy ORM vs. another approach (e.g., direct `psycopg2` with raw SQL for performance-critical queries). This is an early technical decision to discuss with the technical collaborator.

---

## Database

### PostgreSQL

Primary analytical database.

**Why PostgreSQL:**
- Robust, battle-tested, open source
- Strong support for time-series queries via standard SQL with proper indexing
- JSONB support for flexible raw-data storage
- Widely deployed; many hosting options

**On time-series extensions:** TimescaleDB extends PostgreSQL for time-series use cases. Whether to use it depends on the actual query patterns of the ingested data. The initial recommendation is to start with standard PostgreSQL and evaluate time-series extensions only if performance requires it.

**Schema will include:**
- `raw_cftc_reports` — source files preserved verbatim
- `positioning` — normalized positioning by currency, participant group, and report date
- `macro_indicators` — macro data points by currency, indicator type, and observation date
- `price_history` — OHLCV price data by currency pair and date
- `data_sources` — registry of all data sources with provenance metadata

---

## Data processing

### Python (Pandas or Polars)

**Pandas:** Mature, extensive documentation, familiar to most quant developers.

**Polars:** Significantly faster for large datasets. More modern API. Growing adoption.

**Open question:** Pandas or Polars? For MVP data volumes (weekly CFTC reports for seven currencies), either works. Polars may be preferable if performance matters or if the contributor prefers it. This is a decision for the technical collaborator.

### Scheduled ingestion

- Python scripts running on a schedule (cron or a lightweight task scheduler)
- Jobs: weekly CFTC ingestion (Friday publication), macro data refresh (varies by source)
- Each job: download raw source, validate, normalize, store
- Failure alerting: email or webhook on ingestion failure

### Data layer structure

```
raw/         — Source files exactly as downloaded (never modified)
validated/   — Files that passed schema and completeness checks
transformed/ — Normalized, enriched data ready for the database
```

Clear separation prevents silent data corruption. Raw files are always recoverable.

---

## Frontend

### TypeScript

All frontend code in TypeScript. Type safety reduces a large class of bugs in complex data-display logic.

### React

The component model is appropriate for a data-heavy dashboard with many reused chart and table components.

### Next.js

**Why Next.js:**
- Server-side rendering for fast initial page loads
- Static export option for simple deployment
- API routes if needed for server-side logic
- Excellent TypeScript support

### Charting library

**Open question:** The charting library has not been selected. Candidates include:

- **Recharts** — React-native, good TypeScript support, lower learning curve
- **Victory** — Component-based, accessible by default
- **Highcharts** — Feature-rich, but licensing cost for commercial use
- **D3.js** — Maximum flexibility, higher complexity
- **Lightweight Charts (TradingView)** — Excellent for financial time series, open source

The decision should account for licensing, accessibility, bundle size, and the types of charts required. This is a decision for the technical collaborator.

---

## Infrastructure

### Docker

All services containerized via Docker and Docker Compose. A single `docker-compose up` should start the entire development environment.

### GitHub Actions

CI/CD pipeline:

- Run backend tests on every pull request
- Run frontend tests on every pull request
- Run data validation tests on ingestion job changes
- Lint Python (Ruff or Flake8) and TypeScript (ESLint)
- Build Docker images on merge to main
- Deploy to staging on merge to main (later)

### Cloud deployment

**Open question:** The cloud provider has not been selected. Criteria:

- Low cost for a small, low-traffic service in early stages
- Simple PostgreSQL hosting option
- Container deployment support
- Reasonable free tier or low monthly cost

Candidates: Fly.io, Render, Railway, DigitalOcean App Platform, AWS (later, when scale requires it).

The initial goal is the simplest possible deployment that is reliable and cheap, not the most scalable architecture.

### GitHub Pages

The static landing page (`docs/`) is deployed via GitHub Pages. No backend required for the landing page.

---

## Testing

### Pytest

Backend unit and integration tests. All data-processing functions, API endpoints, and ingestion logic should have test coverage.

### Frontend testing

Component tests using Vitest or Jest with React Testing Library. End-to-end tests using Playwright or Cypress for critical user journeys (later phases).

### Data quality tests

A suite of tests specifically for ingested data:

- Completeness checks (no missing currencies or dates)
- Range checks (positions within plausible bounds)
- Consistency checks (gross long + gross short ≈ open interest)
- Staleness checks (data not older than expected publication schedule)

### Schema validation

Pydantic models validate all data entering the database from external sources. No unvalidated external data reaches the analytical layer.

---

## Documentation

### Markdown

All project documentation in Markdown, version-controlled in the repository.

### OpenAPI

FastAPI generates OpenAPI documentation automatically. Published at `/docs` on the API service.

### Future documentation site

When documentation volume justifies it, a documentation site (e.g., MkDocs or Docusaurus) can be generated from the Markdown source. Not required for MVP.

---

## What to avoid in early stages

The following are not recommended for the MVP and should only be introduced if there is a clearly documented need:

- Kubernetes or container orchestration (unnecessary complexity for a small service)
- Microservices architecture (a modular monolith is correct for this stage)
- Message queues (Kafka, RabbitMQ) — scheduled jobs are sufficient for weekly data
- GraphQL — REST is simpler and sufficient
- Redis caching — optimize only after measuring performance issues
- Elasticsearch — PostgreSQL full-text search is sufficient

Complexity should be added only when it solves a specific, observed problem.

---

## Open technical decisions

The following decisions are intentionally left open for discussion with the technical collaborator:

1. SQLAlchemy ORM vs. Core vs. raw SQL for database access
2. Pandas vs. Polars for data processing
3. Charting library for the frontend
4. Cloud deployment provider
5. Task scheduling approach (APScheduler, Celery, system cron, GitHub Actions scheduled workflows)
6. PostgreSQL hosting approach (managed service vs. self-hosted)
7. TimescaleDB adoption timeline
8. Authentication approach for future API rate limiting

Interested contributors should feel free to propose their preferred approaches in GitHub issues or discussions.
