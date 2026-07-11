# Labels

This document describes the GitHub label system used in the OpenFXLab repository.

---

## Active custom labels

These labels have been created in the repository and are available for use on issues and pull requests.

| Label | Color | Description |
|-------|-------|-------------|
| `backend` | `#5319E7` (purple) | Backend services, APIs, databases, and data processing |
| `frontend` | `#1D76DB` (blue) | Web interface, frontend components, and user experience |
| `data` | `#FBCA04` (yellow) | Data ingestion, normalization, storage, and quality |
| `infrastructure` | `#B60205` (red) | Docker, deployment, CI/CD, and development infrastructure |
| `methodology` | `#C5DEF5` (light blue) | Financial calculations, indicators, and analytical methodology |

---

## Standard GitHub labels

These default GitHub labels are available in the repository.

| Label | Description |
|-------|-------------|
| `bug` | Something is not working correctly |
| `documentation` | Improvements or additions to documentation |
| `duplicate` | This issue or pull request already exists |
| `enhancement` | New feature or feature request |
| `good first issue` | Suitable for first-time contributors |
| `help wanted` | Maintainers would especially welcome help with this |
| `invalid` | This doesn't seem right |
| `question` | Further information is requested |
| `wontfix` | This will not be worked on |

---

## Label usage guidelines

- Apply at least one **custom area** label to every issue and PR.
- Use `enhancement` for new features or feature requests.
- Use `good first issue` liberally — it helps new contributors find work they can tackle.
- Multiple labels may be applied where relevant.

---

## How to create custom labels

Custom labels can be created via the GitHub CLI or the web interface:

```bash
gh label create "backend" --color "5319E7" --description "Backend services, APIs, databases, and data processing"
gh label create "frontend" --color "1D76DB" --description "Web interface, frontend components, and user experience"
gh label create "data" --color "FBCA04" --description "Data ingestion, normalization, storage, and quality"
gh label create "infrastructure" --color "B60205" --description "Docker, deployment, CI/CD, and development infrastructure"
gh label create "methodology" --color "C5DEF5" --description "Financial calculations, indicators, and analytical methodology"
```

Or through the GitHub web interface at:
`https://github.com/OpenFXLab/openfx/issues/labels`

---

## Possible future labels

The following labels may be useful as the project grows, but have not yet been created. Do not treat these as active labels until they are added to the repository.

| Label | Purpose |
|-------|---------|
| `priority: high` | Blocks other work or addresses a critical need |
| `priority: medium` | Important but not blocking |
| `priority: low` | Nice to have, address when higher priorities are done |
| `blocked` | Cannot proceed — waiting on another issue, decision, or external factor |
| `needs discussion` | Requires broader input or decision before work can proceed |
| `research` | Research task requiring investigation, not necessarily code |
