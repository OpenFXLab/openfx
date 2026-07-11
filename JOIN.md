# Join OpenFXLab

## Who this is for

This document is for developers who are considering a deeper involvement in OpenFXLab — not just occasional contributions, but helping shape the project from its earliest stages.

---

## Current project status

Pre-alpha. The repository currently contains project documentation, product specifications, a roadmap, contributor materials, and a static informational website. No production data pipeline, API, database, or interactive product application has been implemented yet.

The most recent Phase 0 deliverables (documentation, architecture planning, issue backlog) are complete or nearing completion. Phase 1 (data foundation) begins as technical implementation and architecture review start. Additional technical collaborators are currently welcome.

---

## What has been completed

- Full project documentation (README, VISION, PRODUCT, ROADMAP, TECH_STACK)
- Architecture proposal and data-source research
- Methodology documentation
- UI wireframes
- GitHub issue templates, PR template, and contributor guides
- Proposed issue backlog (see [docs/issue-backlog.md](docs/issue-backlog.md))
- Static project landing page

---

## What still needs to be built

**Phase 1 — Data foundation:**
- CFTC data importer and parser
- Contract-to-currency mapping
- Currency direction normalization
- PostgreSQL database schema and setup
- Data validation suite
- Historical data backfill
- Macro data source research and adapter(s)
- Price data adapter

**Phase 2 — Public MVP:**
- FastAPI backend with positioning and macro endpoints
- Next.js frontend with market overview and currency detail pages
- Positioning charts with participant breakdowns
- Macro driver panels
- CSV download feature
- Methodology pages
- Docker development environment
- GitHub Actions CI
- Deployment pipeline

**Phase 3+ (later):**
- Crowding indicators and divergence detection
- Screener
- Alert system
- Python package
- Research notebooks

The full backlog is documented in [docs/issue-backlog.md](docs/issue-backlog.md).

---

## Skills most useful now

**High priority:**
- Python (data pipelines, FastAPI, data validation, Pytest)
- PostgreSQL (schema design, query optimization)
- Data engineering (ingestion pipelines, normalization, scheduling)

**Also valuable:**
- TypeScript and React/Next.js (frontend MVP)
- Docker and CI/CD (GitHub Actions)
- Familiarity with financial data (CFTC reports, time series, macro indicators)

You do not need all of these. Someone strong in Python backend and data pipelines is the most useful profile at this stage.

---

## What the project lead handles

Aditya Navin leads:

- Finance research — data sources, methodology, analytical framework
- Product definition — requirements, user journeys, acceptance criteria, prioritization
- Documentation — project documentation, methodology writing, API documentation
- User outreach — identifying and interviewing potential users
- Project coordination — issue triage, contributor communication, roadmap management

---

## What a technical collaborator would handle

- Architecture decisions (in collaboration with the project lead)
- Data pipeline implementation
- API design and implementation
- Database schema design
- Frontend implementation
- Testing infrastructure
- Deployment pipeline
- Technical documentation

The role involves real input into technical decisions. This is not "implement a spec." Major architectural choices are open for discussion, and the technical collaborator's judgment matters.

---

## Compensation

There is currently no cash compensation available. OpenFXLab is in the pre-alpha stage. No company has been formed. No funding has been raised.

Contributors who make open-source contributions to this repository do not automatically acquire equity, employment status, or any financial entitlement.

If a sustained collaboration develops and a company is formally incorporated in the future, any equity or compensation arrangement would require a separate written agreement with formal vesting terms, mutual evaluation, legal documentation, and explicit consent from both parties. That discussion would happen at the appropriate time — not as a side effect of contributing code.

No specific equity percentages are promised here or elsewhere in this documentation.

---

## What to expect

If you reach out and both sides want to explore working together:

1. An introductory conversation (video call or email) to discuss the project, your background, and what collaboration might look like.
2. A small trial contribution — a specific task from the issue backlog — to see how the working relationship feels in practice.
3. If both sides are interested in continuing, a deeper discussion about roles, responsibilities, and working style.

There is no obligation to continue beyond any of these steps.

---

## Next step

Email [openfxresearch@gmail.com](mailto:openfxresearch@gmail.com) with a brief introduction: your background, what interests you about the project, and what kind of contribution you are considering.

You are also welcome to look through [docs/issue-backlog.md](docs/issue-backlog.md) for specific tasks that interest you, and reference them in your message.

---

*For general contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).*
