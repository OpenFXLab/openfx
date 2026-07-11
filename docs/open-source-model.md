# Open-Source Model

This document explains how OpenFXLab's open-source model works, what it means for contributors, and how the project may evolve commercially over time.

---

## License

OpenFXLab is released under the [MIT License](../LICENSE). This is one of the most permissive open-source licenses available. It allows anyone to:

- Use the software for any purpose, including commercial purposes
- Modify the software
- Distribute the software
- Distribute modified versions

The only requirement is that the MIT License copyright notice is preserved in copies of the software.

The MIT License is preserved in full and will not be replaced.

---

## What "open source" means for this project

**The code is publicly inspectable.** Anyone can read the data-processing logic, verify formulas, check assumptions, and identify errors. This is a core value of the project — transparency in financial analysis means nothing if the code is closed.

**Contributions are welcome.** Developers can submit improvements to data connectors, indicators, documentation, tests, and interfaces. See [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines.

**The data methodology is documented.** All calculations are documented in [docs/methodology.md](methodology.md) and are verifiable from the code.

**Data sources are cited.** Every data point has a documented source, observation date, and publication date.

---

## Hosted service possibility

A publicly hosted version of OpenFXLab may eventually be made available on a website. This hosted service would:

- Run the open-source codebase
- Serve positioning and macro data through a web interface and API
- Be convenient for users who do not want to self-host

**This is not mutually exclusive with open-source availability.** Users who want to run their own instance can do so using the open-source code. The hosted service would add convenience, not exclude alternatives.

---

## Commercial sustainability

Open-source projects need sustainable maintenance. A future hosted service could support itself through:

- Higher API rate limits for registered users (convenience tier)
- Saved dashboards, alerts, and team features (convenience tier)
- Appropriately licensed premium macro datasets (if commercially licensed data is incorporated)
- Other convenience features that do not close the core analytical methodology

No monetization currently exists. No revenue model has been finalized. Any future commercial tier will be clearly described and will not affect the open-source availability of the core code and methodology.

---

## Premium data licensing

Some useful macro or positioning data sources require commercial licensing to redistribute. If such datasets are eventually incorporated:

- They will be clearly labeled as premium data, available only through a licensed tier
- The licensing terms will be documented
- The core platform will remain functional without premium data, using only freely available sources
- Premium data will never be the only path to basic analytical functionality

No premium data agreements currently exist.

---

## Contributions and equity

Making a contribution to OpenFXLab (code, documentation, data research, design) is governed by the MIT License. Contributors grant rights to their contributions under that license.

**Contributing to the open-source repository does not:**
- Create an employment relationship
- Entitle a contributor to equity, compensation, or profit sharing
- Imply any commitment beyond what the MIT License states

This is standard open-source practice. The same applies to any major open-source project.

**If a company is incorporated in the future:**
The legal entity would be separate from the open-source repository. Any equity, compensation, or formal role in a future company would require a separate written agreement, negotiated at that time, with appropriate legal documentation and vesting terms. No commitments about equity percentages are made here.

---

## Transparency as a product feature

The open-source model is not just an ethical choice — it is a product differentiator. Users who need to explain or defend their analysis to colleagues, supervisors, investment committees, or academic reviewers can point to the documented methodology and inspectable code. That is more valuable than a black-box signal.

---

## Summary

| Aspect | Position |
|--------|----------|
| License | MIT (open, permissive) |
| Core code | Open source, publicly inspectable |
| Hosted service | Possible future addition — not exclusive with open source |
| Commercial tiers | May exist for convenience features — will not close the core |
| Premium data | May exist if licensed — clearly labeled, not required for core function |
| Contributions | Welcome under MIT License |
| Equity for contributors | Not automatic; requires separate written agreement if ever applicable |
| Company status | No company incorporated — project is an open-source initiative |
