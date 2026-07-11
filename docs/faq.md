# Frequently Asked Questions

---

## About the project

### What is OpenFXLab?

OpenFXLab is a planned open-source FX Positioning and Macro Intelligence Platform. It will collect and normalize publicly available foreign exchange positioning data (primarily from the CFTC) and connect it with macroeconomic indicators to help users understand how currency markets are positioned and whether the macro environment supports those positions.

### What stage is the project at?

Pre-alpha. The repository currently contains detailed project documentation, product specifications, a roadmap, and contributor materials. No application code has been written yet. The platform is in the planning and design phase (Phase 0 of the roadmap).

### Is this a real project or just documentation?

It is a real project in its earliest stage. The documentation establishes the product direction, architecture, methodology, and contributor framework. Implementation begins when a technical collaborator joins the project. See [JOIN.md](../JOIN.md) if you are interested in contributing.

### Who leads the project?

Aditya Navin. Contact: [openfxresearch@gmail.com](mailto:openfxresearch@gmail.com).

---

## About the data

### What is CFTC positioning data?

The CFTC (U.S. Commodity Futures Trading Commission) requires large market participants to report their positions in U.S. futures and options markets weekly. The CFTC publishes this data publicly. The Traders in Financial Futures (TFF) report breaks out currency futures positions by participant category: leveraged funds, asset managers, dealers, other reportables, and non-reportables.

### Does CFTC data represent the entire FX market?

No. CFTC data covers reported positions in U.S. currency futures and options-on-futures only. The much larger global OTC foreign exchange market — including spot transactions, forwards, swaps, non-deliverable forwards (NDFs), OTC options, bank inventories, corporate hedges, and sovereign activity — is not captured. This is an explicit limitation documented throughout the platform. CFTC positioning data is a useful signal, but it is not a complete picture of global FX positioning.

### How often is the data updated?

CFTC reports are published weekly, on Fridays, with data as of the previous Tuesday. There is typically a three-day delay between observation and publication. OpenFXLab will update positioning data within 24 hours of CFTC publication.

### How far back does historical data go?

The CFTC TFF report has been published since 2009. OpenFXLab aims to include at least 5 years of history for all metrics at launch. Full historical coverage (back to 2009) will be evaluated during development.

### What currencies are covered?

The initial MVP covers: EUR, JPY, GBP, CAD, AUD, CHF, NZD. All are measured against USD. USD itself is not directly covered as a single contract — its positioning is implied by the aggregate of other currency contracts.

---

## About the analysis

### What is a "leveraged fund" in the CFTC data?

The CFTC TFF report categorizes participants. "Leveraged funds" typically includes hedge funds, commodity trading advisors (CTAs), and other leveraged accounts. This category often attracts the most attention from analysts because it represents more speculative, shorter-horizon positioning. However, the exact composition of this category can vary, and the label should not be taken as meaning "all hedge funds" or "only hedge funds."

### What does a positioning percentile mean?

A percentile rank compares the current net position to historical observations. A percentile of 90 means the current net position is more net long (or less net short) than 90% of all historical observations in the lookback window. A percentile of 10 means the opposite. This provides historical context for whether a position is unusually crowded.

### Is a crowded position a guaranteed sell signal?

No. A historically crowded position identifies a situation worth monitoring — it means the market is positioned more heavily in one direction than usual. But crowded positions can remain crowded for extended periods before reversing. The platform reports crowded positions as research context and risk observations, not as trading signals.

### What is a z-score?

A z-score expresses the current value in terms of standard deviations from the historical mean. A z-score of +2.0 means the current positioning is 2 standard deviations above the mean for the lookback window. This is another way of quantifying whether positioning is historically unusual.

### What is a positioning-price divergence?

A divergence occurs when the dominant positioning direction (e.g., heavily net long) does not match recent price behavior (e.g., the currency is declining). This may indicate that the crowded position is not being confirmed by price, which can be a risk observation — but it is not a guaranteed predictor of a reversal.

---

## About using the platform

### Is OpenFXLab financial advice?

No. OpenFXLab is a research tool that organizes publicly available data and calculates standard analytical metrics. Nothing produced by or displayed on OpenFXLab constitutes financial advice, investment advice, or a recommendation to buy or sell any financial instrument.

### Can I use the data in my own research?

Yes. The core data comes from official public sources (CFTC, central banks, national statistics agencies). OpenFXLab's calculations and documentation are released under the MIT License. Attribution to original data sources (as documented in [docs/data-sources.md](data-sources.md)) is required where applicable.

### Will there be a Python package?

Yes — in Phase 4 of the roadmap. The Python package will allow programmatic access to positioning and macro data and calculation utilities. It is not yet available.

### Will there be an API?

Yes — in Phase 2 of the roadmap. The API will be RESTful, documented via OpenAPI, and publicly accessible for the core dataset.

---

## About contributing

### How can I contribute?

See [CONTRIBUTING.md](../CONTRIBUTING.md) for a full guide. In the current phase (Phase 0), the most valuable contributions are documentation review, data source research, and architecture discussions. Implementation contributions will be most valuable in Phase 1 and beyond.

### Is there compensation for contributing?

There is currently no cash compensation. This is an open-source project in the pre-alpha stage. See [JOIN.md](../JOIN.md) and [docs/open-source-model.md](open-source-model.md) for details on the project's compensation and equity situation.

### I'm a developer interested in deeper collaboration. What do I do?

Read [JOIN.md](../JOIN.md) and then email [openfxresearch@gmail.com](mailto:openfxresearch@gmail.com) with a brief introduction.

---

## About the open-source model

### Why is this open source?

Financial data methodology should be inspectable. If a calculation is incorrect or an assumption is flawed, anyone should be able to identify it. Open-source development also allows specialists to contribute improvements. See [docs/open-source-model.md](open-source-model.md) for the full explanation.

### Will there ever be a paid version?

A hosted service may eventually exist and could include convenience tiers (higher API limits, saved dashboards, team features). The core code and methodology will remain open source. See [docs/open-source-model.md](open-source-model.md).

### Is there a company behind this?

No. OpenFXLab is currently an open-source project. No company has been incorporated, and no funding has been raised.
