# OpenFXLab Organization Profile

*This document contains copy suitable for placement in a `.github/profile/README.md` in a separate `OpenFXLab/.github` organization-profile repository.*

---

## OpenFXLab

**FX Positioning and Macro Intelligence — Open Source**

OpenFXLab is building an open-source platform for foreign exchange positioning analysis and macroeconomic research. We ingest public CFTC positioning data, connect it with macro drivers — central bank policy, interest rate differentials, inflation, employment, and growth — and present it through a transparent, documented, reproducible interface.

**Current status: Pre-alpha. Planning and design stage.**

---

### The problem

Currency researchers gather positioning data, central bank rates, inflation figures, and price data from separate sources, normalize it manually, and maintain their own spreadsheets. The underlying information is largely public. The work of combining it is repetitive and error-prone.

Simple COT-charting tools display raw positioning. Institutional terminals go much further but are expensive and closed. OpenFXLab aims to fill the gap: more analytical than a chart website, more transparent and accessible than a professional terminal.

---

### What we are building

- **Weekly positioning data** from CFTC TFF reports, normalized and calculated for EUR, JPY, GBP, CAD, AUD, CHF, and NZD
- **Macro context** alongside positioning: central bank rates, rate differentials, inflation, employment
- **Standard metrics**: net position, weekly change, historical percentiles, z-scores
- **Analytical indicators**: crowding assessment, positioning-price divergence, positioning-macro divergence
- **Public API and data downloads** for researchers and developers
- **Documented methodology**: every formula inspectable and verifiable

---

### Why open source

Financial data methodology should be verifiable. A tool whose calculations can be inspected and reproduced is more trustworthy than one that cannot. Open development also allows specialists to contribute data connectors, indicators, and documentation.

---

### Who it is for

Independent currency traders · Global macro investors · Finance students and researchers · Quantitative developers · Financial journalists · Small funds and investment clubs

---

### Repositories

| Repository | Description |
|------------|-------------|
| [openfx](https://github.com/OpenFXLab/openfx) | Main platform repository — documentation, data pipelines, API, web interface |

---

### Status

This organization is active in Phase 0 of development: documentation, architecture planning, and data-source research. No production application code has been written yet. We are seeking technical collaborators.

---

### Get involved

- Browse the [issue backlog](https://github.com/OpenFXLab/openfx/blob/main/docs/issue-backlog.md)
- Read [CONTRIBUTING.md](https://github.com/OpenFXLab/openfx/blob/main/CONTRIBUTING.md)
- Explore [JOIN.md](https://github.com/OpenFXLab/openfx/blob/main/JOIN.md) for deeper collaboration
- Contact: [openfxresearch@gmail.com](mailto:openfxresearch@gmail.com)

---

### Disclaimer

OpenFXLab is a software research tool in development. Nothing here constitutes financial advice or a recommendation to buy or sell any financial instrument. All example data are illustrative only.

---

*Project lead: Aditya Navin*
