# UI Wireframes

This document describes the planned user interface for OpenFXLab using text-based layouts. These are low-fidelity wireframes intended to communicate structure and content, not visual design. Formal design work will build on these specifications.

**Status: Planning-stage wireframes — not yet implemented.**

---

## Screen 1: Market Overview (Home)

**Primary user goal:** Quickly scan all supported currencies for notable positioning events.

**Main components:**

```
┌─────────────────────────────────────────────────────────────────┐
│  OpenFXLab                                    [Methodology] [API]│
├─────────────────────────────────────────────────────────────────┤
│  FX Positioning Overview                   Last update: Fri date │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Currency │ Net Pos  │ Wk Change │ Pctile │ Z-score │ Macro│   │
│  ├──────────────────────────────────────────────────────────┤   │
│  │ EUR/USD  │ +85,420  │ +3,200 ▲  │  62%   │  +0.8   │  →  │   │
│  │ USD/JPY  │ -112,300 │ -4,100 ▼  │   8%  🔴│  -2.1  │  ←  │   │
│  │ GBP/USD  │ +32,100  │ +1,500 ▲  │  55%   │  +0.4   │  →  │   │
│  │ USD/CAD  │ -18,200  │  -800 ▼   │  35%   │  -0.3   │  ↑  │   │
│  │ AUD/USD  │ +14,600  │ +2,200 ▲  │  71%   │  +1.2   │  →  │   │
│  │ USD/CHF  │  -8,900  │   +400 ▲  │  28%   │  -0.6   │  →  │   │
│  │ NZD/USD  │  +6,200  │   -300 ▼  │  48%   │   0.0   │  →  │   │
│  └──────────────────────────────────────────────────────────┘   │
│  Net Pos = Leveraged funds net contracts. Pctile = 3yr window.   │
│  All data illustrative — not live market data                    │
│                                                                   │
│  [↓ Download all as CSV]                                         │
└─────────────────────────────────────────────────────────────────┘
```

**Data displayed:**
- Currency pair
- Net position (leveraged funds, contracts)
- Weekly change with direction arrow
- Historical percentile (3-year default)
- Z-score (1-year default)
- Macro status indicator (arrow showing rate differential direction)
- Visual flag for extreme readings (≥80th or ≤20th percentile)

**Main actions:**
- Click any row → navigate to currency detail page
- Download all data as CSV
- Filter by extreme readings (button or toggle)

**Mobile behavior:** Table scrolls horizontally. Priority columns: Currency, Net Pos, Pctile. Other columns accessible by scrolling.

**Accessibility:** Table uses proper `<thead>` / `<tbody>`. Arrows have screen-reader text (e.g., "Increasing" / "Decreasing"). Color indicators have icon accompaniments.

---

## Screen 2: Currency Detail Page

**Primary user goal:** Understand positioning and macro context for a single currency in depth.

**Main components:**

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Back to Overview                                              │
│  USD/JPY  ·  150.42  ·  Data as of: Tue 2024-11-05              │
├─────────────────────────────────────────────────────────────────┤
│  POSITIONING                                                     │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  [Positioning chart: 2-year time series, line per group] │   │
│  │   -- Leveraged Funds  -- Asset Managers  -- Dealers      │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌─────────────┬──────────────┬──────────────┬──────────────┐   │
│  │             │ Lev. Funds   │ Asset Mgrs   │ Dealers      │   │
│  ├─────────────┼──────────────┼──────────────┼──────────────┤   │
│  │ Gross Long  │   42,100     │   88,200     │  112,500     │   │
│  │ Gross Short │  154,400     │   71,300     │   98,200     │   │
│  │ Net         │ -112,300     │   +16,900    │   +14,300    │   │
│  │ Wk Change   │   -4,100     │    +1,200    │     -500     │   │
│  │ % of OI     │   -18.4%     │    +2.8%     │    +2.3%     │   │
│  │ Percentile  │     8% 🔴   │     54%      │     47%      │   │
│  │ Z-score     │    -2.1      │     +0.2     │     +0.1     │   │
│  └─────────────┴──────────────┴──────────────┴──────────────┘   │
│  [? Methodology]  [↓ Download CSV]                               │
├─────────────────────────────────────────────────────────────────┤
│  MACRO DRIVERS                                                   │
│  ┌───────────────────────────────────────────────────────┐      │
│  │ US Fed Funds Rate:      5.25%    BoJ Policy Rate: 0.1%│      │
│  │ Rate Differential:      +5.15%   Trend: Narrowing ←   │      │
│  │ US CPI (YoY):           2.6%     JP CPI (YoY):  2.8%  │      │
│  │ US Unemployment:        4.1%     JP Unemployment: 2.5% │      │
│  └───────────────────────────────────────────────────────┘      │
│  [? Methodology]                                                 │
├─────────────────────────────────────────────────────────────────┤
│  PRICE CHART                                                     │
│  [USD/JPY price chart, 6-month bars, with net positioning overlay│
│   shown as shaded band]                                          │
│                                                                   │
│  Source labels and data freshness displayed below each section.  │
└─────────────────────────────────────────────────────────────────┘
```

**Data displayed:**
- Currency pair header with latest price and data date
- Positioning chart by participant group
- Positioning metrics table with all calculated metrics
- Macro driver panel (rates, differentials, inflation, employment)
- Price chart with positioning overlay

**Main actions:**
- Download CSV (positioning data for this currency)
- Click "Methodology" links → navigate to relevant methodology section
- Back to overview

**Mobile behavior:** Charts resize to full width. Metrics table scrolls horizontally. Macro panel stacks vertically.

**Accessibility:** Charts have data-table fallbacks. All indicators have text explanations on hover or in linked methodology.

---

## Screen 3: Positioning Comparison Page

**Primary user goal:** Compare positioning across multiple currencies side by side.

**Main components:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Positioning Comparison                                          │
│  Select currencies: [EUR] [JPY] [GBP] [CAD] [AUD] [CHF] [NZD]  │
│  Participant group: [Leveraged Funds ▾]                         │
├─────────────────────────────────────────────────────────────────┤
│  [Multi-line chart: net positions for selected currencies,       │
│   normalized as % of open interest, 2-year time series]         │
├─────────────────────────────────────────────────────────────────┤
│  [Percentile bar chart: horizontal bars showing current          │
│   percentile rank for each selected currency]                    │
└─────────────────────────────────────────────────────────────────┘
```

**Data displayed:**
- Net position time series, normalized as % of OI
- Current percentile bar chart
- Participant group selector

**Main actions:**
- Toggle currencies on/off
- Change participant group
- Download comparison data as CSV

**Mobile behavior:** Charts display one at a time with tabs on mobile.

---

## Screen 4: Macro Driver Page

**Primary user goal:** Understand the macroeconomic context for a specific currency pair.

**Main components:**

```
┌─────────────────────────────────────────────────────────────────┐
│  USD/JPY — Macro Context                                         │
├─────────────────────────────────────────────────────────────────┤
│  INTEREST RATES                                                  │
│  [Line chart: US rate vs. Japan rate, 2-year history]           │
│  [Line chart: Rate differential, 2-year history]                │
├─────────────────────────────────────────────────────────────────┤
│  RECENT CENTRAL BANK ACTIONS                                     │
│  Fed: Hold (Nov 2024)  BoJ: Hold (Oct 2024) — Hawkish signal    │
├─────────────────────────────────────────────────────────────────┤
│  INFLATION & EMPLOYMENT                                          │
│  [Small chart: US vs. JP CPI trend]                             │
│  [Small chart: Unemployment rates]                              │
├─────────────────────────────────────────────────────────────────┤
│  Data sources and freshness displayed per section.              │
└─────────────────────────────────────────────────────────────────┘
```

---

## Screen 5: Screener

**Primary user goal:** Identify currencies that meet specified positioning and macro criteria.

**Main components:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Screener                                                        │
├─────────────────────────────────────────────────────────────────┤
│  FILTERS                                                         │
│  Participant group:   [Leveraged Funds ▾]                       │
│  Positioning:         Percentile ≥ [80]  or ≤ [20]             │
│  Weekly change:       [Any ▾]  [Increasing / Decreasing / Any]  │
│  Macro:               Rate differential [Any ▾]                 │
│  [Apply filters]                                                 │
├─────────────────────────────────────────────────────────────────┤
│  RESULTS (2 currencies match)                                    │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Currency │ Net Pos  │ Pctile │ Wk Change │ Rate Diff      │   │
│  │ USD/JPY  │ -112,300 │  8%   │   -4,100  │ +5.15% narrow  │   │
│  │ AUD/USD  │  +14,600 │  71%  │   +2,200  │ -0.25%         │   │
│  └──────────────────────────────────────────────────────────┘   │
│  [↓ Download results]                                            │
└─────────────────────────────────────────────────────────────────┘
```

**Main actions:**
- Apply filters
- Click result rows → navigate to currency detail page
- Download results as CSV

**Mobile behavior:** Filters collapse into a drawer/modal. Results table scrolls horizontally.

---

## Screen 6: Alert Builder (Post-MVP)

**Primary user goal:** Define conditions that trigger email notifications.

**Main components:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Create Alert                                                    │
├─────────────────────────────────────────────────────────────────┤
│  Currency:         [USD/JPY ▾]                                  │
│  Participant group:[Leveraged Funds ▾]                          │
│  Condition:        Percentile [crosses above ▾] [85]            │
│  Delivery:         Email: [your@email.com]                      │
│  [Save alert]                                                    │
├─────────────────────────────────────────────────────────────────┤
│  Your alerts (0)                                                 │
│  No alerts saved yet.                                            │
└─────────────────────────────────────────────────────────────────┘
```

**Note:** Alerts require user account infrastructure not present in the MVP.

---

## Screen 7: Data Download Page

**Primary user goal:** Download clean historical data for offline analysis.

**Main components:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Download Data                                                   │
├─────────────────────────────────────────────────────────────────┤
│  Dataset:          [Positioning — Leveraged Funds ▾]            │
│  Currency:         [All currencies ▾]                           │
│  Date range:       From [2021-01-01]  To [2024-11-05]           │
│  Format:           [CSV ▾]                                      │
│  [Download]                                                      │
├─────────────────────────────────────────────────────────────────┤
│  Column documentation and methodology: [→ Methodology page]     │
│  Data source and license: CFTC Traders in Financial Futures      │
│  Attribution required. See methodology for details.             │
└─────────────────────────────────────────────────────────────────┘
```

---

## Screen 8: Methodology Page

**Primary user goal:** Understand exactly how a metric is calculated.

**Main components:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Methodology                                                     │
├─────────────────────────────────────────────────────────────────┤
│  Contents                                                        │
│  · Positioning metrics                                           │
│  · Price metrics                                                 │
│  · Macro metrics                                                 │
│  · Analytical indicators                                         │
│  · Data sources and provenance                                   │
│  · Limitations                                                   │
├─────────────────────────────────────────────────────────────────┤
│  [Each metric has: name, plain-English explanation, formula,     │
│   example, data source, lookback window, known limitations,     │
│   link to related methodology section]                           │
└─────────────────────────────────────────────────────────────────┘
```

**Note:** Methodology page content maps directly to [docs/methodology.md](methodology.md).
