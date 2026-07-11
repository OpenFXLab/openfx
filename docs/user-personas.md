# User Personas

This document describes realistic user profiles for OpenFXLab, including their goals, workflows, and how the platform fits into their work.

---

## Persona 1: Independent FX Trader

**Name:** Marcus
**Role:** Independent retail FX trader, 8 years of experience
**Location:** United Kingdom
**Markets:** Primarily G10 currency pairs, holds positions for days to weeks

**Background:**
Marcus trades currencies using a combination of technical and macro analysis. He monitors CFTC data weekly and is familiar with the concept of "spec positioning" as a contrarian indicator. He currently downloads CFTC reports manually, pastes data into a spreadsheet, and maintains his own charts.

**Goals:**
- Save time on data gathering
- Have a quick, reliable view of positioning before forming a trading thesis
- Understand whether speculative positioning in a currency is crowded
- Get macro context alongside positioning without switching between multiple tools

**Pain points:**
- Manual process takes 1–2 hours per week
- His positioning charts lose historical context when he rebuilds his spreadsheet
- He has no clean way to compare positioning across multiple currencies at once
- He doesn't have a systematic way to quantify how extreme a position is historically

**How OpenFXLab helps:**
- Market overview page gives him a weekly status check in minutes
- Historical percentile and z-score replace his manual "is this extreme?" judgment
- Macro panel gives him rate differential context without opening separate sites
- CSV download lets him incorporate the data into his own analysis when needed

**Quote:** "I don't need signals — I just want clean data that I can trust and verify."

---

## Persona 2: Global Macro Portfolio Manager

**Name:** Priya
**Role:** Portfolio manager at a small multi-strategy fund (~$200M AUM)
**Location:** Singapore
**Markets:** Currency, rates, and commodity exposure; 1–6 month investment horizons

**Background:**
Priya incorporates FX positioning data as a secondary signal in her macro research process. She forms views based on macro conditions (central bank policy, growth differentials, relative valuations) and uses positioning as context: Is the market already positioned for what she expects, or is her thesis contrarian?

**Goals:**
- Quickly check whether the market is crowded in the direction she is considering
- Understand whether there are participant group divergences (e.g., leveraged funds vs. asset managers disagreeing)
- Monitor positioning trend over recent weeks to assess momentum

**Pain points:**
- Current tools either show raw positioning with no context, or require expensive institutional subscriptions
- Building her own positioning database is technically possible but not her highest-value activity
- She wants methodology transparency so she can explain the data to her investment committee

**How OpenFXLab helps:**
- Participant breakdown on currency detail pages surfaces disagreements between leveraged funds and asset managers
- Macro panel shows rate differential trend alongside positioning
- Methodology documentation allows her to explain the calculations to colleagues
- API access would allow her team's quant developer to pull data programmatically

**Quotes:** "A tool I can explain to my IC matters more than one I have to take on faith."

---

## Persona 3: Finance Graduate Student

**Name:** Amara
**Role:** Master's student in Finance, quantitative track
**Location:** Netherlands
**Focus:** Thesis on the predictive value of CFTC positioning data in G10 FX markets

**Background:**
Amara is writing a thesis that requires historical FX positioning data combined with macro variables. She has quantitative skills (Python, basic statistics) but has never directly worked with CFTC data before. She needs clean, well-documented data with explained methodology.

**Goals:**
- Access clean, historical positioning data with metadata (observation dates, publication dates)
- Understand how standard positioning metrics are calculated
- Download data in a format compatible with Python/pandas
- Have clear attribution for her academic work

**Pain points:**
- Raw CFTC files require significant parsing and normalization work that is not her thesis focus
- She cannot afford institutional data services
- She has found inconsistencies in some free COT data sources but doesn't know which to trust

**How OpenFXLab helps:**
- Clear methodology documentation allows her to understand and cite every calculation
- CSV download with column labels and source attribution
- Historical data with observation and publication dates (critical for avoiding look-ahead bias in research)
- Python package (Phase 4) would allow direct programmatic access

**Quote:** "I need to be able to explain every number in my data to my thesis supervisor."

---

## Persona 4: Quantitative Developer

**Name:** Leo
**Role:** Quantitative developer at a prop trading firm
**Location:** Poland
**Markets:** Systematic macro strategies across FX and rates

**Background:**
Leo builds and maintains systematic trading research tools. He wants clean data with a reliable API, documented schemas, and consistent update schedules. He will integrate the data into his firm's internal research environment.

**Goals:**
- Reliable JSON API with predictable schema
- Clear documentation of all fields and data provenance
- Historical data accessible programmatically
- Consistent update schedule with freshness indicators

**Pain points:**
- Building his own CFTC ingestion pipeline is technically straightforward but time-consuming to maintain
- Free data sources are often unreliable or undocumented
- He needs to understand exactly what "net position" means in terms of direction convention before using it in models

**How OpenFXLab helps:**
- Documented RESTful API with OpenAPI specification
- Direction normalization documented in methodology — important for systematic models
- Provenance metadata (observation date, publication date) essential for research
- Python package (Phase 4) reduces integration time

**Quote:** "Documentation matters more than the data itself. If I can't verify what a number means, I can't use it."

---

## Persona 5: Financial Journalist

**Name:** Diane
**Role:** Financial journalist covering currency and macro markets
**Location:** United States
**Outlet:** Independent financial media

**Background:**
Diane writes analysis on currency markets and often wants to reference positioning data when reporting on major moves or crowded trades. She needs data that is clearly sourced, easily cited, and understandable to a non-specialist readership.

**Goals:**
- Quickly check current positioning status for a story
- Generate or describe a clearly sourced chart
- Explain what positioning data means in plain English for her readers
- Have reliable attribution for regulatory data

**Pain points:**
- CFTC raw reports are difficult to read without technical expertise
- Simple COT charting sites don't explain their methodology
- She wants to include positioning context in articles but needs to be confident in the numbers she cites

**How OpenFXLab helps:**
- Market overview gives her a quick weekly status check
- Methodology pages provide explanation she can reference or paraphrase
- Data provenance labels give her clear attribution language
- CSV download provides data she can use in her own charts

**Quote:** "If I'm going to reference this data in print, I need to understand exactly what it measures and where it comes from."

---

## Persona 6: University Investment Club Member

**Name:** Tariq
**Role:** Undergraduate student, FX research lead at a university investment club
**Location:** Canada

**Background:**
Tariq leads the FX research team at his university investment club. The club publishes monthly market commentary and runs a paper portfolio. He is learning professional analysis methods and wants to understand how institutional traders think about positioning.

**Goals:**
- Learn how FX positioning analysis is done professionally
- Produce credible, data-backed commentary for club presentations
- Build his data literacy and portfolio for future job applications

**Pain points:**
- Doesn't know where to start with CFTC data
- Existing tools are either too simple or too expensive
- Wants everything explained so he can teach it to other club members

**How OpenFXLab helps:**
- Glossary and methodology pages serve as an educational resource
- Free access with clear explanations
- Accessible web interface lowers the barrier to doing the analysis at all

**Quote:** "I want to learn how to do this properly, not just stare at charts I don't understand."
