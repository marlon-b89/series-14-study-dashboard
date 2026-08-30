// FINRA Series 14 Job Function weights — 110 scored items total
// Source: FINRA Series 14 Content Outline (user-provided; matches published blueprint)
window.EXAM_BLUEPRINT = [
  {
    code: "F1",
    title: "Regulatory Agencies and Statutory Framework",
    shortLabel: "F1 · Regulatory Agencies",
    items: 3,
    weight: 2.7,
    focus: "SEC, FINRA, MSRB, SIPC roles; landmark securities acts.",
    dashboardChapters: [1],
    decks: ["deck-f1"]
  },
  {
    code: "F2",
    title: "Markets and Their Operations",
    shortLabel: "F2 · Markets & Operations",
    items: 20,
    weight: 18.2,
    focus: "Reg NMS, Reg SHO, order handling, trade reporting (ACT, TRACE, CAT), quoting rules.",
    dashboardChapters: [4, 5, 6, 7],
    decks: ["deck-f2"]
  },
  {
    code: "F3",
    title: "Broker-Dealer Operations",
    shortLabel: "F3 · BD Operations",
    items: 10,
    weight: 9.1,
    focus: "Books & records, customer confirms & statements, T+1 settlement, DTCC/NSCC/OCC clearing.",
    dashboardChapters: [4, 13],
    decks: ["deck-f3"]
  },
  {
    code: "F4",
    title: "Credit Regulation and Capital Requirements",
    shortLabel: "F4 · Credit & Capital",
    items: 7,
    weight: 6.4,
    focus: "Reg T margin, Rule 15c3-1 Net Capital, Rule 15c3-3 Customer Protection, SIPA.",
    dashboardChapters: [9, 13],
    decks: ["deck-f4"]
  },
  {
    code: "F5",
    title: "General Supervision",
    shortLabel: "F5 · Supervision",
    items: 20,
    weight: 18.2,
    focus: "Rule 3110 supervisory system, WSPs, branch inspections, correspondence review, MSRB G-27.",
    dashboardChapters: [10, 11],
    decks: ["deck-f5"]
  },
  {
    code: "F6",
    title: "Investment Banking",
    shortLabel: "F6 · Investment Banking",
    items: 15,
    weight: 13.6,
    focus: "'33 Act registration, Reg D/A/S, IPO allocation (5130/5131), Reg M, research quiet periods.",
    dashboardChapters: [1, 2, 3],
    decks: ["deck-f6"]
  },
  {
    code: "F7",
    title: "Registration",
    shortLabel: "F7 · Registration",
    items: 9,
    weight: 8.2,
    focus: "Form U4/U5, Rule 1210 registration categories, CE, statutory disqualification, fingerprinting.",
    dashboardChapters: [10],
    decks: ["deck-f7"]
  },
  {
    code: "F8",
    title: "Sales Practice — Customer and Employee Accounts",
    shortLabel: "F8 · Sales — Customers",
    items: 16,
    weight: 14.5,
    focus: "Reg BI, Form CRS, AML/CIP, elder financial exploitation, Reg S-P, employee accounts, penny stock.",
    dashboardChapters: [8],
    decks: ["deck-f8"]
  },
  {
    code: "F9",
    title: "Sales Practice — Solicitations",
    shortLabel: "F9 · Sales — Solicitations",
    items: 10,
    weight: 9.1,
    focus: "Rule 2210 communications, retail vs institutional filing, testimonials, MSRB G-21, telemarketing.",
    dashboardChapters: [12],
    decks: ["deck-f9"]
  }
];

// The five hero-stat callouts on the overview
window.HERO_STATS = [
  { num: "110", label: "Scored items" },
  { num: "175", label: "Minutes" },
  { num: "70%", label: "Passing score" },
  { num: "9",   label: "Job functions" }
];
