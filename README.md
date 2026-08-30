# Series 14 Study Hub

A complete study system for the **FINRA Series 14 — Compliance Official Qualification Examination** (110 items, 175 minutes, 70% to pass).

**Live site:** [marlon-b89.github.io/series-14-study-dashboard/](https://marlon-b89.github.io/series-14-study-dashboard/)

## What's inside

The hub landing page provides:

- **6-Week Study Plan** — Daily topics calibrated to the FINRA blueprint. Weeks 1-2 front-load Registration and Investment Banking (F6/F7), Weeks 3-4 hit Markets and Supervision (F2/F5, 40 of 110 items), Week 5 covers Sales Practice (F8/F9), Week 6 is dedicated review.
- **Flashcards** — 114 cards across 9 decks, sized to the F1-F9 item counts. Flip, rate, track. Progress saves per deck.
- **Deep Dives** — Long-form write-ups on the 10 highest-leverage concepts: Reg BI, Reg NMS, Reg SHO, Reg M, Net Capital (15c3-1), Customer Protection (15c3-3), Rule 3110 Supervision, Regulation D, MSRB G-37, FINRA 2210.
- **Real-World Examples** — 15 case studies: enforcement actions, operational scenarios, and market events tied to specific rules.
- **Visualizations** — Exam weighting doughnut, Rule 15c3-1 haircut ladder, Reg M restricted period bars, IPO timeline, MSRB G-37 two-year ban chart, T+1 settlement flow.
- **Rules Reference** — The full 289-rule chapter-by-chapter dashboard at [`/rules/`](./rules/). Every FINRA/SEC/MSRB rule with exact language, core concept, parameters, and exceptions.

## Structure

```
/                    → Study companion (landing page)
  index.html
  app.js
  styles.css
  data/              → flashcards, deep-dives, examples, program, blueprint
/rules/              → Rules reference dashboard
  index.html
  app.js
  styles.css
  data/              → 13 chapters × 289 rules
```

## FINRA Series 14 exam blueprint

| Code | Function | Items |
|---|---|---|
| F1 | Regulatory Agencies and Statutory Framework | 3 |
| F2 | Markets and Operations | 20 |
| F3 | Broker-Dealer Operations | 10 |
| F4 | Credit Regulation and Net Capital | 7 |
| F5 | General Supervision | 20 |
| F6 | Investment Banking and Corporate Finance | 15 |
| F7 | Registration | 9 |
| F8 | Sales Practice — Customers and Employees | 16 |
| F9 | Sales Practice — Solicitations and Communications | 10 |
| **Total** | | **110** |

## License

MIT — see [LICENSE](./LICENSE).

## Attribution

Built for compliance professionals preparing for the FINRA Compliance Official exam. Rule content sourced from FINRA, SEC, and MSRB publicly-available rulebooks; STC 41st Edition study manual referenced for structure.
