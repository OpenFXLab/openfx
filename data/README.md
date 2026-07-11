# Data

This directory will contain raw data files, schema definitions, and data-related scripts and documentation.

**Status: Not yet implemented.** Data infrastructure is planned for Phase 1 of the roadmap.

---

## Intended purpose

The `data/` directory serves as the root for data-related artifacts that are appropriate to store in the repository. Large datasets will not be committed here — they will live in the production database or in separate storage. This directory contains schemas, sample files, mapping tables, and documentation.

---

## Proposed contents

```
data/
├── schemas/
│   ├── positioning.schema.json      # JSON Schema for normalized positioning records
│   ├── macro.schema.json            # JSON Schema for macro indicator records
│   └── price.schema.json            # JSON Schema for price data records
├── mappings/
│   ├── cftc_contract_codes.csv      # CFTC contract code to currency pair mapping
│   └── currency_direction.csv       # Direction normalization reference table
├── samples/
│   ├── cftc_tff_sample.csv          # Sample CFTC TFF report (anonymized or from public source)
│   └── macro_sample.json            # Sample normalized macro data record
├── sources/
│   └── source_registry.yml          # Registry of all data sources with metadata
└── README.md
```

---

## Key concepts

### CFTC Traders in Financial Futures (TFF) reports

The primary positioning data source. Published weekly by the U.S. Commodity Futures Trading Commission. Covers futures and options-on-futures positions for large reportable traders across several participant categories.

See [docs/data-sources.md](../docs/data-sources.md) for the full data source framework.

### Contract mapping

CFTC reports identify instruments by contract code, not by currency pair name. A mapping table translates these codes (e.g., for the EUR/USD futures contract) to the correct currency pair and direction conventions used throughout OpenFXLab.

### Direction normalization

Some currency pairs are quoted as USD/XXX (e.g., USD/JPY, USD/CAD), while others are quoted as XXX/USD (e.g., EUR/USD, GBP/USD). A long position in JPY futures means long JPY / short USD, while a long position in EUR futures means long EUR / short USD. Normalization ensures that all positions are expressed consistently from a USD reference perspective.

---

## What is not yet implemented

No schemas, mappings, or sample files have been created yet. This directory is a placeholder for future data artifacts.

---

## Relevant issues

See [docs/issue-backlog.md](../docs/issue-backlog.md) for data-related issues, including:

- CFTC data format research
- Contract-code mapping table
- Currency direction normalization
- Database schema design
- Data validation suite
- Historical backfill

---

## How to contribute

Data research and schema design contributions are valuable in Phase 0 and Phase 1. If you are interested in contributing to the data layer, please review [CONTRIBUTING.md](../CONTRIBUTING.md). See [docs/data-sources.md](../docs/data-sources.md) for the data source framework and licensing requirements.
