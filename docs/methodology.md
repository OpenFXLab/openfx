# Methodology

This document explains in plain English how OpenFXLab calculates every metric it displays. All formulas are given explicitly. Users should be able to reproduce any calculation using the underlying data.

**Status: Methodology specification — not yet implemented in code.**

All formulas described here are reference specifications for the planned implementation. Minor implementation details may evolve as the software matures. Any material methodological change will be documented, reviewed, and reflected in the changelog and relevant API documentation.

---

## Core positioning metrics

### Gross long position

The total number of contracts held in long positions by a given participant group in a given futures market, as reported in the CFTC TFF report. A long futures position benefits when the currency represented by the futures contract strengthens against USD. OpenFXLab normalizes contract directions into consistent displayed currency-pair conventions before reporting.

```
Gross_Long = Sum of all reported long contracts for participant group G in currency C for report date D
```

This is a raw count of contracts, not a dollar value. To understand the notional value, multiply by the contract size for that market.

---

### Gross short position

The total number of contracts held in short positions by the same participant group and date. A short futures position benefits when the currency represented by the futures contract weakens against USD.

```
Gross_Short = Sum of all reported short contracts for participant group G in currency C for report date D
```

---

### Net position

The difference between gross long and gross short positions.

```
Net_Position = Gross_Long - Gross_Short
```

A positive net position means the group holds more longs than shorts (net long). A negative net position means more shorts than longs (net short).

---

### Weekly change

The difference in net position between the current report and the prior report (one week earlier).

```
Weekly_Change = Net_Position(D) - Net_Position(D - 1 week)
```

Positive weekly change means the group increased its net long position (or reduced its net short) over the week. Negative means the reverse.

---

### Position as a share of open interest

Net position expressed as a percentage of total open interest in that contract. This normalizes positioning across contracts of different total sizes and is more comparable over time as contract popularity changes.

```
Position_Pct_OI = Net_Position / Total_Open_Interest × 100
```

Where `Total_Open_Interest` is the total number of outstanding contracts in the market as reported in the CFTC data.

---

### Historical percentile

Net position ranked against all historical observations within a lookback window.

```
Percentile = (Number of prior observations where Net_Position < current Net_Position) / (Total observations in window) × 100
```

A percentile of 90 means the current net position is larger (more net long) than 90% of all observations in the lookback window. A percentile of 10 means the current position is more net short than 90% of historical observations.

**Default lookback window:** 3 years (156 weeks). Configurable.

**Why this matters:** The absolute level of net positions changes over time as the market grows. Percentile rank captures whether the current level is historically unusual, regardless of market size changes.

---

### Z-score

The current net position expressed in terms of standard deviations from the mean of the lookback window.

```
Z_Score = (Net_Position - Mean(Net_Position, window)) / StdDev(Net_Position, window)
```

A z-score of +2.0 means the current position is 2 standard deviations above the mean — statistically unusual if the distribution is approximately normal.

**Default lookback window:** 1 year (52 weeks). Configurable.

**Why z-score rather than only percentile:** Z-score is sensitive to how far outside normal range a position is. A position at the 99th percentile could be barely above the 95th percentile observation, or it could be far above it. Z-score captures the distance.

---

## Price metrics

### Price momentum

A simple rolling return: the percentage change in currency price over a defined window.

```
Momentum(N) = (Price(D) / Price(D - N periods) - 1) × 100
```

**Default window:** 4 weeks and 13 weeks.

Used to identify whether the currency is trending in the direction implied by positioning, or diverging from it.

---

## Macro metrics

### Interest rate differential

The difference between the U.S. policy rate and the home-country policy rate for a given currency pair.

```
Rate_Differential = US_Policy_Rate - Foreign_Policy_Rate
```

For USD/JPY: `Rate_Differential = US_Fed_Funds_Rate - Bank_of_Japan_Policy_Rate`

A positive differential favors the USD. A narrowing differential (decreasing over time) reduces the incentive to hold USD over the foreign currency.

**Note:** Policy rates are a simplified proxy. Market-based rate differentials (using bond yields) provide a more forward-looking measure and may be incorporated as an additional metric.

---

### Inflation differential

The difference between U.S. CPI growth and the home-country CPI growth.

```
Inflation_Differential = US_CPI_YoY - Foreign_CPI_YoY
```

Used as contextual information alongside the rate differential.

---

## Analytical indicators

### Positioning-price divergence

A condition where the dominant positioning direction (as measured by net position sign and trend) does not match the recent price direction of the currency.

**Identification method (proposed):**
1. Determine positioning direction: net position above its 1-year mean = net long bias
2. Determine price direction: 4-week momentum positive = upward trend
3. Flag as a divergence if the two directions are opposite

Example: Net positioning is strongly net long, but the currency has declined over the past 4 weeks. This may indicate that the crowded long is not supported by price behavior.

**Important limitation:** Divergence is a research observation, not a signal. Price often corrects toward positioning, but positioning can also reverse. This is context for analysis, not a directional forecast.

---

### Positioning-macro divergence

A condition where positioning direction does not align with the macro environment.

**Identification method (proposed):**
1. Determine positioning direction as above
2. Determine macro direction: is the rate differential favoring or opposing the currency?
3. Flag as a divergence if the macro environment is shifting against the dominant position

Example: Leveraged funds are heavily net long EUR, but the ECB is cutting rates while the Fed holds, narrowing the rate differential that supported EUR longs. This is a macro-positioning divergence.

---

### Crowding score (future, transparent composite)

A future planned indicator that combines multiple signals to produce a single "crowding" measure. This is not yet implemented.

**Proposed components:**
- Current positioning percentile (weight TBD)
- Z-score relative to recent mean (weight TBD)
- Rate of change in positioning (consecutive weeks of increase) (weight TBD)
- Positioning-price divergence flag (weight TBD)

**Design principle:** The crowding score must expose all its components and weights. A score without explanation is not acceptable. Users should be able to see exactly why a score is high or low, and verify the components independently.

---

## Implementation considerations

### Lookback window choice

Lookback windows affect results significantly. A 1-year window is sensitive to recent regime changes; a 5-year window may include different market environments. The platform will display the window used for every calculation and allow users to adjust it.

### Missing data

If a report week has missing data (e.g., CFTC publishes no report for a holiday week), the gap is preserved in the database. Calculations requiring consecutive weeks will note the gap and adjust accordingly. Missing values are never silently forward-filled without documentation.

### Data revisions

The CFTC occasionally revises prior reports. The platform will track when revisions occur and update historical values accordingly. Revision history will be preserved where possible.

### Tuesday observation versus Friday publication

CFTC TFF data represents positions as of the close of business on Tuesday. Reports are published the following Friday. All data is stored and displayed with both the observation date (Tuesday) and the publication date (Friday). Analysis is anchored to the observation date.

### Direction normalization

As described in [docs/architecture.md](architecture.md), all net positions are normalized so that positive = net long the non-USD currency. This normalization is applied before any metric calculation.

### Outliers

Extreme values (statistical outliers) are not automatically removed. They are preserved in the data and may affect percentile and z-score calculations. Outlier context (e.g., position spikes around major market events) should be noted in the methodology.

### Contract changes

When a futures contract is revised (e.g., contract size changes, contract roll), the normalization mapping table must be updated to maintain consistency of historical time series. Contract change events will be documented in the data source registry.

### Avoiding look-ahead bias

All metrics are calculated using only data available at the observation date. Percentiles and z-scores use only past observations. This is critical for any historical or backtesting analysis.

### Backtesting limitations

Historical positioning patterns do not predict future returns. The platform may eventually support backtesting of positioning-based research frameworks, but any such analysis will carry explicit warnings about look-ahead bias, regime changes, survivorship bias, and the distinction between historical description and forward prediction.
