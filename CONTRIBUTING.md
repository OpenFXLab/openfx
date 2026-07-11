# Contributing to OpenFXLab

Thank you for your interest in contributing. OpenFXLab is in its earliest stage, and contributions of all kinds — code, documentation, research, design, and feedback — are genuinely valuable.

---

## Ways to contribute

**Documentation:** Review and improve existing documents. Fix inaccuracies, clarify explanations, improve structure. Finance methodology documentation in particular benefits from expert review.

**Data source research:** Investigate data sources, check licensing terms, document APIs, and propose new integrations. See [docs/data-sources.md](docs/data-sources.md).

**Architecture and design discussions:** Comment on open architectural questions in issues. The technology stack and system design are not finalized.

**UI and UX:** Review [docs/ui-wireframes.md](docs/ui-wireframes.md), propose improvements, create mockups or design references.

**Backend development (Phase 1+):** Python data pipelines, API development, database schema design, data validation.

**Frontend development (Phase 2+):** TypeScript, React, Next.js, charting components.

**Finance methodology:** Review or propose analytical metrics, crowding indicators, and macro-driver connections. See [docs/methodology.md](docs/methodology.md).

**Testing:** Write unit tests, data quality tests, or integration tests.

**Issues:** File clear, detailed bug reports or feature requests using the issue templates.

---

## Development process

### Branching

- `main` branch contains reviewed, stable documentation and code.
- Create a feature branch for each contribution: `feature/short-description`
- Create a fix branch for bug fixes: `fix/short-description`
- Create a docs branch for documentation: `docs/short-description`

### Issues first

Before writing code for a non-trivial change, open an issue to discuss the approach. This avoids duplicate work and ensures the change fits the project direction.

The issue backlog is at [docs/issue-backlog.md](docs/issue-backlog.md). Look there first for good starting points.

### Pull requests

- Pull requests should be focused on one logical change.
- Reference the related issue in the PR description.
- Use the pull request template — it is in `.github/PULL_REQUEST_TEMPLATE.md`.
- A project maintainer will review the PR. Please allow reasonable time for review.
- Be open to feedback and requests for changes. Code review is collaborative, not adversarial.

---

## Issue workflow

1. Check if an issue already exists before filing a new one.
2. Use the appropriate issue template (bug, feature, data source, documentation).
3. Provide enough detail for someone unfamiliar with your context to understand the problem.
4. Tag issues appropriately using the label system documented in [docs/labels.md](docs/labels.md).
5. If you are working on an issue, comment to indicate that before starting, to avoid duplicate effort.

---

## Testing expectations

- All backend code changes should include or update relevant Pytest tests.
- Data-processing functions should be tested with known inputs and expected outputs.
- Data ingestion changes should include data validation tests.
- Frontend changes should not break existing component tests.
- New frontend components should include basic unit tests where practical.

---

## Documentation expectations

- Update relevant documentation when making code changes.
- If you add a new metric, update [docs/methodology.md](docs/methodology.md).
- If you add a new data source, update [docs/data-sources.md](docs/data-sources.md).
- Documentation should be clear to both developers and finance-oriented readers.
- Do not leave placeholder text or TODO markers in merged documentation.

---

## Finance methodology review

Any change to how financial metrics are calculated — or any new metric — requires methodology documentation. Before implementing a new indicator:

1. Document the formula and data inputs in a GitHub issue.
2. Explain the financial rationale.
3. Identify any limitations or edge cases.
4. Reference any relevant academic or industry literature if applicable.

Methodology changes that affect displayed metrics require a maintainer with finance knowledge to review before merging. This is to preserve the analytical integrity that is central to the project's value.

---

## Data source and licensing rules

Before proposing or implementing a new data source, confirm:

- The data is freely available for the intended use
- The license permits redistribution or display (as applicable)
- Attribution requirements are understood
- The data source is stable enough to depend on
- The data has sufficient historical coverage

**Do not** ingest or redistribute data whose license prohibits it. When in doubt, document the source in an issue and ask before implementing.

---

## Code review expectations

Code review is intended to improve quality, not to gatekeep. Reviewers aim to:

- Identify bugs, edge cases, or logical errors
- Suggest improvements to clarity and maintainability
- Confirm that tests and documentation are adequate
- Verify that financial methodology is correctly implemented

Reviewers will not reject contributions for style preferences not documented in the project's style guide.

---

## Communication

- GitHub Issues and Pull Requests are the primary communication channels.
- Email [openfxresearch@gmail.com](mailto:openfxresearch@gmail.com) for broader discussions or introductory conversations.
- Be respectful and professional. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

---

## Conduct

All contributors are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md). Disrespectful, dismissive, or harassing behavior will not be tolerated.

---

## License

By contributing to this repository, you agree that your contributions will be licensed under the [MIT License](LICENSE).
