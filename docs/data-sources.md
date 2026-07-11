# Data Sources

This document describes the data sources OpenFXLab plans to use, organized by category. All sources must meet the licensing and quality criteria described in the approval checklist below before implementation.

**Status: Research and planning stage. No data integrations have been implemented yet.**

---

## Data source approval checklist

Before any data source is integrated, it must satisfy:

- [ ] **Reliability:** The source is maintained by a credible institution and has a track record of stable publication.
- [ ] **Licensing:** The license explicitly permits the intended use (display, redistribution, download).
- [ ] **Historical availability:** Sufficient historical data exists for meaningful analysis (minimum 3 years; 5+ years preferred).
- [ ] **Update frequency:** The data is published on a schedule compatible with the platform's refresh requirements.
- [ ] **Schema stability:** The data format is stable or versioned, reducing the risk of breaking changes.
- [ ] **Attribution:** Attribution requirements are documented and will be applied.
- [ ] **Redistribution rights:** If data will be available for download, redistribution is explicitly permitted.

---

## Category 1: Positioning data

### CFTC Traders in Financial Futures (TFF) reports

**What it measures:** Reported futures and options-on-futures positions in financial futures markets, broken down by participant category: Dealer/Intermediary, Asset Manager/Institutional, Leveraged Funds, Other Reportables, and Non-Reportable Positions.

**Why it matters:** This is the primary data source for FX positioning. It provides the most granular public view of how different types of market participants are positioned in major currency futures.

**Update frequency:** Weekly. Published on Fridays (observation date: preceding Tuesday).

**Source type:** U.S. government agency (CFTC). Published at [cftc.gov](https://www.cftc.gov/MarketReports/TradersInFinancialFuturesReports/index.htm).

**Licensing:** Public domain (U.S. government work). No redistribution restrictions.

**Known limitations:**
- Covers futures and options on futures only. Spot FX, forwards, swaps, NDFs, OTC options, bank inventories, corporate hedges, and sovereign activity are not represented.
- Data is delayed: published Friday for Tuesday data.
- Participant categories are useful but not perfectly precise. "Leveraged funds" typically includes hedge funds and other leveraged traders, but exact categorization can vary.
- Position sizes are for net U.S. reporting purposes; non-U.S. participants may not be fully captured.
- Contract sizes change over time; normalization is required for long historical comparisons.

---

## Category 2: Currency prices

### Exchange rates — major currency pairs

**What it measures:** Daily OHLCV price data for EUR/USD, USD/JPY, GBP/USD, USD/CAD, AUD/USD, USD/CHF, NZD/USD.

**Why it matters:** Price behavior provides the basis for momentum analysis and for identifying positioning-price divergences.

**Update frequency:** Daily.

**Source type:** To be confirmed. Options under evaluation include:
- Official central bank exchange rate publications (e.g., ECB reference rates for EUR/USD)
- Open financial data providers with permissive licensing
- Exchange-published data

**Licensing:** Must be confirmed per source. Commercial data vendors typically restrict redistribution.

**Known limitations:** End-of-day price data is sufficient for weekly positioning analysis. Intraday or real-time data is not required for the MVP.

---

## Category 3: Central bank policy rates

### Policy rates — home countries of covered currencies

**What it measures:** Official central bank policy rates for the U.S. (Federal Reserve), Eurozone (ECB), Japan (Bank of Japan), United Kingdom (Bank of England), Canada (Bank of Canada), Australia (Reserve Bank of Australia), Switzerland (Swiss National Bank), New Zealand (Reserve Bank of New Zealand).

**Why it matters:** Policy rate differentials between the U.S. and other central banks are a primary driver of currency positioning and carry trade dynamics.

**Update frequency:** After central bank meetings (approximately 8 times per year for most central banks).

**Source type:** Official central bank publications. All covered central banks publish their policy rates publicly.

**Licensing:** Official government or central bank data. Generally public domain or open license for policy rates.

**Known limitations:** Rate history is straightforward; the analytical challenge is mapping meeting dates to rate-change events and normalizing across different rate types (e.g., Fed Funds Target Rate vs. ECB Main Refinancing Operations Rate).

---

## Category 4: Government bond yields

### Short and medium-term sovereign bond yields

**What it measures:** Government bond yields at 2-year and 10-year tenors for the U.S. and major currency pairs' home countries.

**Why it matters:** Bond yields incorporate market expectations of future policy and are a more forward-looking measure of interest rate dynamics than the current policy rate.

**Update frequency:** Daily (market prices) or weekly summary.

**Source type:** Official sources where available (e.g., U.S. Treasury, ECB, national debt management offices). Market-based data may be required for some countries.

**Licensing:** Official government publications are typically public. Market-based yield data may have licensing restrictions.

**Known limitations:** Bond market data licensing varies significantly by country and provider. Some official sources publish yield data; others require commercial data agreements. This is an area requiring careful licensing research.

---

## Category 5: Inflation indicators

### Consumer Price Index (CPI) — year-on-year change

**What it measures:** Annual inflation rate for each covered currency's home country.

**Why it matters:** Inflation differentials affect currency values and influence central bank policy expectations.

**Update frequency:** Monthly.

**Source type:** Official national statistics agencies:
- U.S.: Bureau of Labor Statistics (BLS)
- Eurozone: Eurostat
- Japan: Statistics Bureau of Japan
- United Kingdom: Office for National Statistics (ONS)
- Canada: Statistics Canada
- Australia: Australian Bureau of Statistics (ABS)
- Switzerland: Swiss Federal Statistical Office (FSO)
- New Zealand: Statistics New Zealand

**Licensing:** Official government statistics. Generally public domain or open government license.

**Known limitations:** Publication schedules vary by country. Revisions occur. Headline vs. core CPI definitions differ across countries.

---

## Category 6: Employment indicators

### Unemployment rate and employment change

**What it measures:** Official unemployment rate from national statistics agencies. Payroll or employment change data where available.

**Why it matters:** Employment conditions influence central bank policy and currency strength expectations.

**Update frequency:** Monthly.

**Source type:** Same official agencies as inflation (BLS, Eurostat, ONS, etc.).

**Licensing:** Official government statistics. Generally public domain or open government license.

**Known limitations:** Employment data revisions can be significant. International comparisons require adjustments for different measurement methodologies.

---

## Category 7: Economic growth indicators

### GDP growth rate

**What it measures:** Quarter-on-quarter or year-on-year GDP growth rate.

**Why it matters:** Relative economic growth rates affect capital flows and currency strength.

**Update frequency:** Quarterly (initial estimate, then revisions).

**Source type:** Same official agencies as above, plus international organizations (OECD, IMF) for standardized cross-country data.

**Licensing:** Official sources are generally open. IMF and OECD data have specific licensing terms to review.

**Known limitations:** GDP is released quarterly with significant revision cycles. Not a high-frequency signal.

---

## Category 8: Commodity prices

### Relevant commodity benchmarks

**What it measures:** Prices of commodities with strong currency linkages:
- WTI Crude Oil and/or Brent Crude (relevant for CAD)
- Gold (relevant as a safe-haven proxy and CHF indicator)
- Iron ore and copper (relevant for AUD)

**Why it matters:** Commodity-exporting countries' currencies have documented correlations with commodity prices. This provides additional macro context for CAD, AUD, and NZD positioning.

**Update frequency:** Daily.

**Source type:** Exchange-published settlement prices, or open financial data sources.

**Licensing:** Must be confirmed per source. Exchange data typically has redistribution restrictions.

**Known limitations:** Commodity correlations are not fixed — they vary with the economic cycle and global demand conditions.

---

## Category 9: Volatility and risk sentiment

### Implied volatility / VIX-family measures

**What it measures:** Market implied volatility as a proxy for risk sentiment. The CBOE VIX or similar measures for other asset classes.

**Why it matters:** Risk sentiment affects carry trades and FX positioning. High volatility periods often coincide with position unwinding.

**Update frequency:** Daily.

**Source type:** Exchange-published or open financial data.

**Licensing:** Must be confirmed per source.

---

## Later optional sources

The following data categories may be added in later phases, subject to licensing and quality review:

- FX implied volatility surfaces (currency-specific options markets)
- Positioning from other futures exchanges outside the U.S.
- Central bank reserve data
- Cross-border capital flow statistics
- Survey-based positioning data (where available and licensed)

---

## Data source registry

A machine-readable registry of all approved data sources will be maintained in `data/sources/source_registry.yml` once the data layer is implemented. Each entry will document: name, publisher, URL, license, update frequency, historical coverage, attribution requirements, and last verification date.
