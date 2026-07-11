# Vision

## Why this project exists

Currency markets generate and consume enormous quantities of information. Central banks publish policy decisions. National statistics agencies release employment and inflation figures. Futures exchanges produce daily trading data. The CFTC publishes detailed weekly reports on how large market participants are positioned.

Most of this information is public. Almost none of it is easy to use together.

A researcher trying to understand why a currency is moving — or whether a crowded speculative position might be approaching a reversal — must collect data from perhaps a dozen separate sources, reconcile different update schedules, normalize inconsistent formats, and apply their own analytical framework. This is slow, error-prone work. It discourages systematic analysis and gives an advantage to institutions that can automate and afford it.

OpenFXLab exists to reduce that friction. Not by providing proprietary signals or black-box scores, but by building clean, transparent, reproducible infrastructure: ingestion pipelines, normalized data, standard metrics, and clear methodology.

## Why positioning and macro must be connected

Raw positioning data tells you what the market is doing. Macroeconomic context tells you whether those positions make sense and whether the conditions supporting them are changing.

A large speculative short position in JPY might be entirely rational if U.S. interest rates remain substantially higher than Japanese rates and the Bank of Japan shows no willingness to tighten. The same position becomes more fragile if the rate differential is narrowing, if Japanese inflation is rising, if the Bank of Japan is signaling a policy change, and if the currency has stopped weakening despite the short. No single data point tells that story. The combination does.

Connecting positioning with macro conditions is not a novel idea. Experienced analysts do this every day. What OpenFXLab aims to build is a reproducible, open-source version of that analytical process — accessible to anyone.

## Why transparency matters

Financial data tools often obscure their methodology. Scores and signals arrive without explanation. Users cannot verify formulas or check assumptions. When a signal is wrong, there is no way to understand why.

OpenFXLab takes the opposite approach. Every metric should be computable from first principles using the documented formula. Every data point should have a clearly labeled source, coverage description, and freshness timestamp. Every score or composite indicator should expose its components and weights.

Transparency is not just an ethical principle. It is a product feature. A tool whose calculations can be verified is more trustworthy than one that cannot. An open-source codebase that can be audited is more durable than a closed platform.

## Why open financial-data infrastructure matters

Academic and independent research in financial markets is often constrained by data access. Students can describe theoretical frameworks but struggle to test them against real data. Journalists can describe market movements but struggle to reproduce the analysis behind professional claims. Quantitative developers can build tools but spend disproportionate time on data plumbing.

Open financial-data infrastructure — clean, licensed, well-documented, reproducible — lowers these barriers. It enables research that would otherwise not happen, exposes errors that would otherwise go unnoticed, and creates shared foundations that benefit the entire community.

OpenFXLab aims to be useful infrastructure first and a product second. The platform itself matters less than the pipelines, schemas, formulas, and documented methodology that make it work.

## Long-term direction

The initial focus is FX positioning and macro intelligence for major listed currency futures. That scope is narrow enough to be achievable and rich enough to be genuinely useful.

Over time, the same analytical framework could extend to:

- Fixed-income futures and rates positioning
- Commodity futures positioning
- Equity-index futures positioning
- Cross-asset macro dashboards combining multiple market views

These extensions are long-term possibilities, not near-term commitments. The priority is to build the FX foundation well before expanding scope.

The long-term goal is to become useful research infrastructure — a tool that serious analysts actually incorporate into their workflows — not to attract attention through hype or to produce unexplained signals.

## Non-goals

OpenFXLab is not designed to:

- Replace Bloomberg, LSEG, or any institutional terminal
- Promise guaranteed returns or trading signals
- Reveal every global FX position (CFTC futures data do not represent the entire global OTC FX market)
- Present public futures data as a complete picture of the FX market
- Launch every asset class simultaneously
- Compete with proprietary bank flow data or institutional research

What OpenFXLab can offer is a transparent, open-source alternative for users who need clean FX positioning data, reproducible analytics, and macro context — without the cost or opacity of institutional platforms.

## What success looks like

Success in the near term means: a working data pipeline, a clean API, a usable web interface, and documentation transparent enough that a researcher can verify every number independently.

Success in the medium term means: a tool that independent traders, students, and researchers actually use in their work, and a contributor community that improves it over time.

Success in the long term means: open financial-data infrastructure that outlasts any single contributor, remains honest about its limitations, and earns trust through reproducibility and transparency.
