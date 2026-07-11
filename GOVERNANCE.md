# Governance

OpenFXLab is in its earliest stage. Governance is intentionally lightweight and will evolve as the project grows.

---

## Current structure

OpenFXLab currently operates as a single-maintainer open-source project led by Aditya Navin. There is no formal board, committee, or incorporated entity at this time.

---

## Project lead responsibilities

The project lead (Aditya Navin) is responsible for:

- Setting and maintaining the project direction and roadmap
- Reviewing and merging pull requests
- Triaging issues and maintaining the issue backlog
- Enforcing the Code of Conduct
- Making final decisions on scope, data sources, and methodology
- Communicating with contributors and the community
- Maintaining financial and analytical integrity of the platform

---

## Contributor responsibilities

All contributors are expected to:

- Follow the [Code of Conduct](CODE_OF_CONDUCT.md)
- Comply with the [Contributing guidelines](CONTRIBUTING.md)
- Respect the project's scope and direction
- Document their work clearly
- Be responsive to review feedback

---

## How technical decisions are proposed

For non-trivial technical changes:

1. Open a GitHub issue describing the proposed change, the problem it solves, and the alternatives considered.
2. Discuss the proposal in the issue. The project lead and contributors provide feedback.
3. If there is consensus, the work is scheduled or assigned.
4. If there is disagreement, the project lead makes the final call after considering community input.

For minor changes (bug fixes, documentation improvements, small enhancements), a pull request with a clear description is sufficient.

---

## How financial methodology changes are reviewed

Changes to how financial metrics are calculated require additional scrutiny:

1. The proposed change must be documented with the formula, data inputs, financial rationale, and known limitations.
2. At least the project lead (who leads finance research) must review and approve.
3. If the change affects a published metric, the methodology documentation must be updated in the same pull request.
4. Breaking changes to metric calculations should be versioned if they affect API consumers.

---

## How maintainers may be added

As the project grows, additional maintainers may be added. To become a maintainer:

- Sustained, high-quality contributions over time
- Demonstrated understanding of the project's scope and values
- Mutual agreement between the current maintainer(s) and the candidate
- Maintainer status is role-based (e.g., data infrastructure, frontend) rather than universal write access in early stages

No timeline for adding maintainers is currently specified.

---

## Conflict resolution

If a contributor has a concern about a project decision, the process is:

1. Raise the concern respectfully in the relevant GitHub issue or PR, or by email.
2. The project lead considers the concern and responds.
3. If the concern is about a Code of Conduct violation, contact the project lead by email at [openfxresearch@gmail.com](mailto:openfxresearch@gmail.com).

For disputes about methodology or data decisions, the project lead's judgment is final at this stage.

---

## Future governance evolution

As OpenFXLab grows, governance should evolve to match:

- A Technical Steering Committee or core contributor group may be established when there are sustained contributors across multiple areas.
- A public RFC process may be adopted for major changes.
- If a company is incorporated, legal governance documents will supersede this informal governance document.

Any significant governance changes will be discussed in GitHub issues before adoption.

---

## License

This project uses the [MIT License](LICENSE). Governance decisions do not alter the terms of the license. Contributors retain copyright on their contributions as per standard open-source practice.
