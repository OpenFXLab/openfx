# Labels

This document defines the recommended GitHub label system for OpenFXLab. Labels should be created in the repository settings before the project begins active development.

---

## Area labels

These labels identify which part of the project an issue or PR relates to.

| Label | Color (suggested) | Description |
|-------|------------------|-------------|
| `backend` | `#0075ca` (blue) | Backend code: API, data ingestion, database, processing |
| `frontend` | `#e4e669` (yellow) | Frontend code: web interface, components, styling |
| `data` | `#d93f0b` (orange) | Data sources, data quality, ingestion, storage |
| `infrastructure` | `#bfd4f2` (light blue) | CI/CD, Docker, deployment, configuration |
| `design` | `#f9d0c4` (pink) | UI/UX design, wireframes, mockups |
| `documentation` | `#0052cc` (dark blue) | Documentation, methodology docs, guides |
| `finance-research` | `#006b75` (teal) | Financial methodology, market research, user research |
| `methodology` | `#5319e7` (purple) | Analytical methodology: formulas, indicators, calculations |
| `security` | `#ee0701` (red) | Security vulnerabilities, authentication, data protection |

---

## Type labels

These labels classify the type of work the issue or PR represents.

| Label | Color (suggested) | Description |
|-------|------------------|-------------|
| `bug` | `#ee0701` (red) | Something is not working correctly |
| `feature` | `#0075ca` (blue) | New feature or functionality |
| `enhancement` | `#84b6eb` (light blue) | Improvement to existing functionality |
| `research` | `#e6e6e6` (grey) | Research task requiring investigation, not necessarily code |
| `question` | `#d876e3` (pink) | Question requiring clarification or discussion |

---

## Contribution labels

These labels help contributors find appropriate issues.

| Label | Color (suggested) | Description |
|-------|------------------|-------------|
| `good first issue` | `#7057ff` (purple) | Suitable for first-time contributors |
| `help wanted` | `#008672` (green) | Maintainers would especially welcome help with this |

---

## Priority labels

These labels indicate relative priority.

| Label | Color (suggested) | Description |
|-------|------------------|-------------|
| `priority: high` | `#b60205` (dark red) | Blocks other work or addresses a critical need |
| `priority: medium` | `#fbca04` (yellow) | Important but not blocking |
| `priority: low` | `#e4e669` (light yellow) | Nice to have, address when higher priorities are done |

---

## Status labels

These labels communicate the current state of an issue or PR.

| Label | Color (suggested) | Description |
|-------|------------------|-------------|
| `blocked` | `#ee0701` (red) | Cannot proceed — waiting on another issue, decision, or external factor |
| `needs discussion` | `#d876e3` (pink) | Requires broader input or decision before work can proceed |
| `needs data review` | `#006b75` (teal) | Requires review of data source, licensing, or quality before proceeding |
| `needs methodology review` | `#5319e7` (purple) | Requires review of analytical methodology before implementation |

---

## How to create labels

Labels must be created manually in the GitHub repository settings, or via the GitHub CLI:

```bash
gh label create "backend" --color "0075ca" --description "Backend code: API, data ingestion, database, processing"
gh label create "frontend" --color "e4e669" --description "Frontend code: web interface, components, styling"
# ... and so on for each label
```

Alternatively, labels can be created through the GitHub web interface at:
`https://github.com/OpenFXLab/openfx/issues/labels`

---

## Label usage guidelines

- Apply at least one **area** label to every issue and PR.
- Apply exactly one **type** label to every issue.
- Apply **priority** labels for issues that are being actively scheduled.
- Apply **status** labels when an issue is blocked or needs a decision.
- Use `good first issue` liberally — it helps new contributors find work they can tackle.
- Remove `blocked` and `needs discussion` labels once the blocking condition is resolved.
