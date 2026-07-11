# Product Specification

**Status: Pre-alpha planning document. No features described here are currently implemented.**

---

## Product overview

OpenFXLab is an FX Positioning and Macro Intelligence Platform. It collects publicly available positioning and macroeconomic data, normalizes it, calculates standard analytical metrics, and presents it through a web interface, a public API, and downloadable datasets. All formulas and data sources are documented openly.

The product is designed to help users understand how currency market participants are positioned, whether those positions are historically unusual, and whether the macroeconomic environment supports or contradicts them.

---

## User personas

### 1. The independent FX trader

**Background:** Active currency trader, primarily in spot or futures. Monitors positioning manually by downloading CFTC reports. Maintains spreadsheets. Keeps an eye on rate differentials and central bank meetings.

**Goal:** Reduce the time spent on data gathering. Have a reliable, clean view of positioning before making decisions. Understand whether current positions are crowded.

**Pain point:** Spends hours every week assembling data that should be automated. Has no clean way to combine positioning with macro context.

### 2. The global macro investor

**Background:** Manages a portfolio with FX as a significant allocation. Uses macro research to form multi-month directional views on currencies. Follows positioning as a contrarian or confirming signal.

**Goal:** A quick, reliable dashboard that confirms or challenges their current view. Clear identification of crowded or extreme positions. Macro context alongside positioning.

**Pain point:** Institutional tools are available but expensive. Simple COT charting tools lack macro context.

### 3. The finance student

**Background:** Studying finance, economics, or quantitative methods. Interested in real-world data. Writing a thesis, building a project, or learning how professional analysts work.

**Goal:** Understand how positioning data is used. Learn what CFTC reports contain. Access real data for academic work. Have every metric explained.

**Pain point:** Institutional data is unaffordable. Academic datasets are often stale. Explanations of methodology are hard to find.

### 4. The quantitative developer

**Background:** Builds trading or research tools. Comfortable with APIs and data pipelines. Wants clean, documented, reliable data access.

**Goal:** An API that returns clean, versioned, well-documented data. Downloadable historical datasets. A Python package to pull data programmatically.

**Pain point:** Raw CFTC files require significant parsing work. No single source combines positioning with macro data cleanly.

### 5. The researcher or journalist

**Background:** Academic researcher or financial journalist covering currency markets. Needs to verify facts, produce charts, and cite sources.

**Goal:** Clearly sourced data and charts. Ability to reproduce any calculation. Attribution-ready data exports.

**Pain point:** Positioning analysis is difficult to cite when the methodology is opaque.

---

## Core user journeys

### Journey 1: Daily market check

User opens the market overview page. They see a table of all seven currencies with current net positioning, weekly change, percentile rank, and a brief macro status indicator. They identify two currencies where positioning has moved significantly. They click through to the detail page for each.

### Journey 2: Currency deep-dive

User opens the JPY detail page. They see the positioning chart with participant breakdowns (leveraged funds, asset managers, dealers). They scroll to the macro panel showing the U.S.–Japan rate differential, inflation differential, and recent central bank actions. They note that positioning is at the 90th historical percentile and the rate differential is narrowing. They download the underlying data as CSV.

### Journey 3: Screener use

User opens the screener and filters for currencies where: net leveraged-fund position is above the 80th percentile, and the 4-week trend is increasing. Two currencies appear. They review the detail pages.

### Journey 4: Data download

User needs historical positioning data for a research paper. They go to the data download page, select EUR, choose the date range, and download a CSV. Every column is labeled and the methodology page is linked from the download page.

### Journey 5: API access

Developer queries the API for the latest positioning data for all currencies. The response is JSON with clear field names, source labels, and freshness timestamps. They integrate it into their own analysis tool.

---

## Functional requirements

### Positioning data

- Gross long positions by participant group
- Gross short positions by participant group
- Net positions by participant group
- Aggregate net position across all reportable traders
- Weekly change in net position
- Position as a percentage of total open interest
- Historical percentile rank (configurable lookback window, default 3 years)
- Z-score of net position (configurable lookback window, default 1 year)
- Observation date (Tuesday)
- Publication date (Friday)
- Data source and coverage labels on every data point

### Macro data

- Central bank policy rate for each currency's home country
- U.S. policy rate
- Interest rate differential (home country vs. U.S.)
- Government bond yield (e.g., 2-year and 10-year) where appropriately sourced
- Inflation indicator (CPI YoY % where available from official sources)
- Unemployment rate from official statistical agencies
- GDP growth indicator where available
- Relevant commodity prices (e.g., WTI crude oil for CAD, gold as risk indicator)
- Currency price history (daily OHLC, with volume included only when the selected source provides a clearly defined and appropriately documented volume measure)
- Implied volatility or proxy volatility measure
- A global risk sentiment indicator (e.g., VIX-family measure or equity index)

### Participant groups (CFTC TFF report)

- Leveraged funds (often includes hedge funds and other leveraged traders)
- Asset managers / institutional traders
- Dealers / intermediaries
- Other reportables
- Non-reportables (where reported)

---

## Initial supported currencies

EUR/USD · USD/JPY · GBP/USD · USD/CAD · AUD/USD · USD/CHF · NZD/USD

USD is treated as the reference currency. There is no single direct CFTC "USD position" in the futures market; USD positioning is inferred from the aggregate of non-USD contracts.

---

## Market overview dashboard

**Primary user goal:** Quickly scan all supported currencies for notable positioning events.

**Components:**
- Summary table with one row per currency
- Columns: Currency pair, Net position (leveraged funds), Weekly change, Percentile rank, Z-score, Macro status indicator, Last updated date
- Visual indicator (color or icon) for extreme readings (above 80th or below 20th percentile)
- Clickable rows linking to currency detail pages

**Non-goals for MVP:** Saved views, custom sorting beyond basic table sorting, real-time updates.

---

## Currency detail page

**Primary user goal:** Understand positioning and macro context for a single currency.

**Components:**
- Header: Currency pair, current price, last positioning update date
- Positioning chart: Time series of net positions by participant group
- Positioning metrics panel: current net, weekly change, percentile, z-score, position vs. open interest
- Participant breakdown: Separate rows for leveraged funds, asset managers, dealers
- Crowding indicator panel: Historical context, trend direction
- Macro driver panel: Rate differential, central bank rate(s), inflation, employment (simplified)
- Price chart: Currency price history with positioning overlay
- Data download button
- Link to methodology page

---

## Macro data panel

- Central bank policy rates for both currencies in the pair
- Rate differential with trend (widening/narrowing)
- Recent central bank meeting outcomes (brief label only — "hold", "hike", "cut")
- Inflation differential
- Employment status label
- Commodity relevance indicator (where applicable, e.g., CAD and oil)
- Data source labels and freshness timestamps for every displayed value

---

## Screener

**Primary user goal:** Identify currencies where positioning meets specified criteria.

**Filters (MVP):**
- Net position percentile range
- Weekly position change direction
- Participant group (leveraged funds, asset managers)
- Macro status (rate differential direction)

**Output:** Filtered table linking to currency detail pages.

---

## Alert specification (post-MVP or early post-MVP)

- User-defined alert when net position percentile crosses a threshold
- Alert when weekly change exceeds a specified magnitude
- Alert when rate differential change exceeds a threshold
- Delivery: Email notification only for MVP
- No real-time streaming required for initial version

---

## Data download

- CSV download of positioning history per currency
- CSV download of macro data per currency
- Column headers and units documented
- Date range selector
- Methodology page linked from download page
- Attribution text included in download files

---

## API

- RESTful JSON API
- Versioned endpoints (/api/v1/...)
- Endpoints:
  - GET /currencies — list of supported currencies
  - GET /positioning/{currency} — current and recent positioning
  - GET /positioning/{currency}/history — historical positioning with date range
  - GET /macro/{currency} — current macro indicators
  - GET /screener — filtered currency list based on query parameters
- OpenAPI documentation
- Rate limiting in later versions
- Authentication for higher-limit tiers in later versions

---

## Data provenance

- Every displayed data point shows its source (e.g., "CFTC Traders in Financial Futures report")
- Observation and publication dates displayed
- Freshness indicator (hours/days since last update)
- Link to original data source where possible
- Known coverage limitations displayed on relevant pages

---

## Accessibility requirements

- Semantic HTML throughout
- Charts must have accessible alternatives (data tables or text summaries)
- Color is not the only indicator for status (icons or labels must accompany color coding)
- Keyboard navigable
- Screen-reader compatible structure
- Minimum contrast ratios per WCAG 2.1 AA guidelines

---

## Mobile responsiveness

- Responsive layout for screens down to 375px width
- Tables must scroll horizontally or stack on small screens
- Charts must resize correctly
- Navigation must be usable on touch devices

---

## Non-functional requirements

*These are initial performance targets, subject to validation through implementation and testing.*

- Page load time under 3 seconds on a standard connection for static content
- API response time under 500ms for standard queries
- Data freshness: positioning data updated within 24 hours of CFTC publication
- Data freshness: macro data updated within 48 hours of official publication
- Uptime: best-effort for self-hosted during early stage; SLA to be defined for a future hosted service
- All calculations reproducible from documented formulas

---

## Non-goals

- Real-time streaming data
- Brokerage account integration
- Automated trade execution
- OTC derivatives data
- Proprietary bank flow data
- Coverage of equity, rates, or commodity futures in the MVP
- Guaranteed forecasting or predictive signals

---

## Risks and limitations

- CFTC data are delayed and do not represent the entire FX market
- Participant classifications are useful but imperfect
- Crowded positions can persist for extended periods
- Macro indicators have different publication schedules and revision histories
- Free and openly licensed macro data sources may have coverage gaps
- Currency price data licensing requires careful review

---

## MVP acceptance criteria

Phase 2 is complete when:
- All seven currencies have current positioning data updated weekly
- Net position, weekly change, percentile, and z-score are calculated and displayed
- Leveraged-fund, asset-manager, and dealer breakdowns are shown
- At least one macro indicator per currency is live (central bank rate and rate differential)
- Market overview page is functional
- Individual currency pages are functional with charts
- CSV download is available
- Methodology page documents all calculations
- API serves all of the above in JSON format
- All displayed data has source attribution and freshness timestamps

---

## Later-version ideas

- Saved dashboards and watchlists
- User accounts
- Alert system
- Python package
- Research notebooks
- Cross-asset expansion (rates, commodities, equity-index futures)
- Community-contributed indicators
- Educational course materials
- Team/organization features
