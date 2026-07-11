# Glossary

Plain-English definitions of key terms used in OpenFXLab.

---

## FX (Foreign Exchange)

The global market for buying and selling currencies. FX is the largest financial market in the world by trading volume. "FX" and "forex" are used interchangeably.

---

## Futures

A futures contract is a standardized agreement to buy or sell an asset at a specified price on a specified future date. Currency futures allow participants to lock in or speculate on exchange rates. Unlike the OTC spot and forward market, futures trade on regulated exchanges (such as the CME Group) with standardized contract sizes and clearing.

---

## Positioning

In this context, positioning refers to the aggregate directional bets held by groups of market participants in the futures market. If leveraged funds collectively hold more long contracts than short contracts in EUR futures, they are described as "net long EUR" — they profit if EUR rises against USD. Positioning data reveals whether the crowd is leaning in one direction and by how much.

---

## Long

A long position profits if the price of the asset rises. In FX futures, holding a long EUR/USD futures contract profits if EUR strengthens against USD.

---

## Short

A short position profits if the price of the asset falls. In FX futures, holding a short EUR/USD futures contract profits if EUR weakens against USD.

---

## Net position

The difference between gross long contracts and gross short contracts held by a participant group:

```
Net Position = Gross Long - Gross Short
```

A positive net position means the group is net long (more longs than shorts). A negative net position means the group is net short. Net position is the primary summary statistic used in positioning analysis.

---

## Open interest

The total number of outstanding (not yet settled) futures contracts in a given market. Open interest is used to normalize positioning data: expressing net position as a percentage of open interest shows whether positioning is large relative to overall market size, rather than just in absolute terms.

---

## Leveraged funds

A participant category in the CFTC Traders in Financial Futures (TFF) report. This group typically includes hedge funds, commodity trading advisors (CTAs), and other leveraged accounts that trade for speculative purposes. This is one of the most closely watched categories because it tends to represent shorter-horizon, higher-turnover positioning. The category label should not be interpreted as "all hedge funds" or "only hedge funds" — it is a regulatory classification.

---

## Asset managers

Another CFTC TFF participant category. This group typically includes pension funds, insurance companies, mutual funds, and other institutional investors managing large pools of capital on behalf of clients. Asset managers tend to hold positions for longer horizons and their positioning reflects different objectives from leveraged funds.

---

## Dealers

The CFTC TFF "Dealer/Intermediary" category. This group includes banks and other institutions acting as market makers or intermediaries. Their positioning often reflects hedging of client transactions rather than directional speculation.

---

## COT (Commitment of Traders)

The broader name for a family of weekly reports published by the CFTC. The original COT report (now called "Legacy") divides participants into commercial and non-commercial categories. The more detailed Disaggregated and Traders in Financial Futures (TFF) reports provide more granular participant breakdowns. OpenFXLab focuses on the TFF report for FX analysis.

---

## TFF (Traders in Financial Futures)

The specific CFTC report that OpenFXLab primarily uses. Published weekly, it covers financial futures (including currency futures) and separates participants into four categories: Dealer/Intermediary, Asset Manager/Institutional, Leveraged Funds, and Other Reportables, plus a non-reportable remainder.

---

## Interest-rate differential

The difference between the policy rates (or bond yields) of two countries. For USD/JPY: the U.S. rate minus the Japanese rate. A large positive differential means U.S. rates are much higher than Japanese rates, which generally creates an incentive to hold USD-denominated assets over JPY-denominated assets (all else equal). Changes in the differential — whether it is widening or narrowing — are often more important than its absolute level.

---

## Carry

"Carry" refers to the return earned from holding a position over time, primarily through the interest rate differential. A "carry trade" involves borrowing in a low-interest-rate currency and investing in a higher-interest-rate currency, earning the differential. The JPY has historically been a popular funding currency for carry trades due to Japan's low interest rates. Positioning data often reflects carry trade dynamics — leveraged funds building large JPY short positions during periods when the rate differential heavily favors USD.

---

## Crowding

A positioning condition in which a large share of market participants are positioned in the same direction, and that position is historically extreme by the standards of its own recent history. A "crowded" trade is not necessarily wrong, but it may be more vulnerable to a rapid reversal if conditions change, because many participants may need to close the same position simultaneously.

---

## Divergence

In OpenFXLab, a divergence refers to a mismatch between two signals that are expected to align:

- **Positioning-price divergence:** Dominant positioning is in one direction (e.g., net long), but price is moving against it (e.g., the currency is falling).
- **Positioning-macro divergence:** Dominant positioning is in one direction, but the macro conditions supporting it are weakening (e.g., the rate differential is narrowing).

Divergences are research observations, not guaranteed reversal signals.

---

## Unwind

When a crowded position reverses rapidly, it is called an "unwind." If many participants are net short JPY and the market moves sharply against them, those participants may close their short positions quickly — buying JPY — which amplifies the move. Unwinds can be sharp and disorderly.

---

## Volatility

In financial markets, volatility measures how much prices fluctuate over a given period. Higher volatility often reflects uncertainty or stress. Implied volatility (derived from options prices) represents the market's expectation of future volatility. VIX is a commonly referenced implied volatility index for U.S. equity markets and is sometimes used as a proxy for global risk sentiment.

---

## Macro

Short for "macroeconomic." In the context of FX analysis, macro refers to the broad economic conditions that drive currency values: central bank policy, interest rates, inflation, employment, economic growth, trade balances, and geopolitical conditions.

---

## OTC (Over the Counter)

Trades conducted directly between parties, outside of a regulated exchange. Most FX trading occurs in the OTC market — spot transactions, forwards, swaps, and non-deliverable forwards (NDFs). The OTC FX market is vastly larger than the listed futures market, but OTC positions are largely not reported publicly. This is a key limitation of using CFTC data as a proxy for "the FX market."

---

## API (Application Programming Interface)

A structured way to access data or functionality programmatically. OpenFXLab will offer a RESTful JSON API that allows developers, researchers, and tools to query positioning and macro data without using the web interface. Documented in OpenAPI format.

---

## Percentile

A statistical rank that shows where a value falls within a distribution. The 80th percentile means the value is higher than 80% of all observations in the reference dataset. In the context of positioning, a net position at the 90th historical percentile means it is more net long (or net short) than 90% of all weekly observations in the lookback window.

---

## Z-score

A standardized measure expressing a value in terms of standard deviations from the mean of its distribution. Calculated as:

```
Z-score = (Value - Mean) / Standard Deviation
```

A z-score of +2.0 is approximately 2 standard deviations above the mean. In the context of positioning, a high positive z-score indicates an unusually large net long position relative to recent history.
