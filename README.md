# Series 14 Study Dashboard

An interactive, chapter-by-chapter study dashboard for the **FINRA Series 14 Compliance Official Qualification Examination**, covering every named SEC, FINRA, MSRB, NYSE, and Nasdaq rule in the STC 41st Edition manual.

**🔗 Live site:** https://marlon-b89.github.io/series-14-study-dashboard/

## What's inside

**289 rules indexed across 82 sections**, organized into all 13 chapters of the exam curriculum.

| Ch | Title | Rules | Sections |
|---|---|---|---|
| 1 | Public and Private Offerings | 29 | 7 |
| 2 | Underwriting | 23 | 5 |
| 3 | Equity Research & '34 Act | 31 | 7 |
| 4 | Equity Trading and Settlement | 18 | 6 |
| 5 | SEC Trading Rules (Reg NMS/SHO) | 18 | 5 |
| 6 | SRO Trading Rules | 19 | 7 |
| 7 | Trade Reporting (ACT, TRACE, CAT) | 22 | 6 |
| 8 | Customer Accounts (Reg BI, AML, Penny Stock) | 28 | 8 |
| 9 | Margin (Regulation T) | 15 | 6 |
| 10 | General Supervision | 22 | 6 |
| 11 | Business Conduct Rules | 22 | 6 |
| 12 | Communications with the Public | 22 | 7 |
| 13 | Financial Responsibility | 20 | 6 |

## Every rule card includes

1. **Exact Language** — regulatory text from the manual
2. **Core Concept** — plain-English explanation of what the rule does
3. **Parameters** — thresholds, timeframes, filing deadlines, covered parties
4. **Exceptions** — exemptions, carve-outs, and safe harbors
5. **Exam Tip** — mnemonic, common trap, or memory hook

## Features

- **Accordion navigation** — one rule card open at a time to reduce clutter
- **Global search** — filter rules by name, concept, language, parameters, or tip
- **URL-addressable chapters** — bookmark specific chapters (e.g. `#chapter-8`)
- **Mobile responsive** — sidebar collapses to a slide-in drawer on smaller screens
- **Zero backend** — pure static HTML/CSS/JS, works offline after first load

## Tech

Static site — no build step, no dependencies.

- HTML5 / CSS (custom design system, no frameworks)
- Vanilla JavaScript (ES5-compatible)
- Google Fonts: Fraunces (headings), Inter (body), JetBrains Mono (labels)

## Local development

```bash
git clone https://github.com/marlon-b89/series-14-study-dashboard.git
cd series-14-study-dashboard
# Open index.html in a browser, or:
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Content attribution

Rule content is extracted from the **Securities Training Corporation (STC) Series 14 manual, 41st Edition**. This dashboard is a personal study aid and is not affiliated with or endorsed by STC, FINRA, the SEC, or any regulatory body. All regulatory citations point to publicly available rules from SEC, FINRA, and MSRB rulebooks.

## License

MIT — see [LICENSE](./LICENSE).
