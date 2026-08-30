// 6-week study program calibrated to FINRA Series 14 blueprint weightings.
// Total exam items = 110. Weeks are sized to how many items each function contributes.
window.PROGRAM = [
  {
    num: 1,
    title: "Foundations, Registration & Regulatory Framework",
    focus: "Build the map: who regulates whom, and how principals get and keep their registrations.",
    tag: "F1 · F7",
    hours: 10,
    days: [
      {
        day: "Mon",
        topic: "SEC, FINRA, MSRB, SIPC — jurisdictional map",
        desc: "Learn which regulator owns which rulebook and how self-regulatory authority delegates from the SEC under the '34 Act. Anchor every later chapter to this map.",
        tasks: [
          { type: "dash", label: "Ch 10 — General Supervision", href: "./rules/#chapter-10" },
          { type: "flash", label: "Deck F1 — Regulators", href: "#flashcards/deck-f1" },
          { type: "review", label: "Self-quiz: who writes which rule?", href: null }
        ]
      },
      {
        day: "Tue",
        topic: "Registration categories — FINRA Rule 1210 series",
        desc: "Walk the representative and principal categories (Series 7, 24, 79, 99, 27/28, 14, etc.) and the permissive registration and waiver framework in Rule 1210.",
        tasks: [
          { type: "dash", label: "Ch 10 — Registration", href: "./rules/#chapter-10" },
          { type: "flash", label: "Deck F7 — Registration matrix", href: "#flashcards/deck-f7" },
          { type: "example", label: "Case-based registration scenarios", href: "#examples" }
        ]
      },
      {
        day: "Wed",
        topic: "Form U4, Form U5, and disclosure events",
        desc: "Master the 30-day amendment window for U4, U5 filing on termination, and which reportable events trigger disclosure. Focus on customer complaints, arbitrations, and criminal disclosures.",
        tasks: [
          { type: "dash", label: "Ch 10 — U4/U5 mechanics", href: "./rules/#chapter-10" },
          { type: "flash", label: "Deck F7 — U4/U5 events", href: "#flashcards/deck-f7" },
          { type: "review", label: "Practice: disclosure trigger drill", href: null }
        ]
      },
      {
        day: "Thu",
        topic: "Statutory disqualification & MC-400 relief",
        desc: "Section 3(a)(39) of the '34 Act plus FINRA Rule 9520 series. Know which felonies, injunctions, and regulatory bars create SD, and the eligibility proceeding path.",
        tasks: [
          { type: "dash", label: "Ch 10 — Disqualification", href: "./rules/#chapter-10" },
          { type: "flash", label: "Deck F7 — SD triggers", href: "#flashcards/deck-f7" },
          { type: "example", label: "SD fact patterns", href: "#examples" },
          { type: "review", label: "Self-quiz", href: null }
        ]
      },
      {
        day: "Fri",
        topic: "Continuing Education — Regulatory & Firm Elements",
        desc: "Post-2022 CE: annual Regulatory Element for every registered person, plus the firm-designed Firm Element based on the firm's needs analysis and written training plan.",
        tasks: [
          { type: "dash", label: "Ch 10 — CE", href: "./rules/#chapter-10" },
          { type: "flash", label: "Deck F7 — CE rules", href: "#flashcards/deck-f7" },
          { type: "review", label: "Self-quiz", href: null }
        ]
      },
      {
        day: "Sat",
        topic: "Weekly integration — foundations checkpoint",
        desc: "Consolidate F1 + F7 content and rehearse the regulator/registration map end-to-end before moving into the '33 Act next week.",
        tasks: [
          { type: "flash", label: "Mixed F1/F7 review", href: "#flashcards/deck-f7" },
          { type: "example", label: "Mixed scenarios", href: "#examples" },
          { type: "review", label: "12-question mini-quiz", href: null }
        ]
      },
      {
        day: "Sun",
        topic: "Rest & consolidate",
        desc: "Passive review only — skim any flagged flashcards; no new material.",
        tasks: [
          { type: "review", label: "Light review", href: null }
        ]
      }
    ],
    summary: "<p>End-of-week checkpoint: <strong>you should now be able to</strong> name the primary regulator for any activity (SEC vs FINRA vs MSRB), map a job role to its required Series exam under Rule 1210, list at least six U4 disclosure events with correct filing windows, and identify statutory disqualification triggers under '34 Act §3(a)(39). Finish with a 15-question F1/F7 mini practice set and mark any misses for spaced review.</p>"
  },

  {
    num: 2,
    title: "Investment Banking & Offerings",
    focus: "Own the '33 Act — every exemption, every quiet period, every allocation rule.",
    tag: "F6",
    hours: 13,
    days: [
      {
        day: "Mon",
        topic: "'33 Act framework and the registration process",
        desc: "Section 5 prohibitions, the pre-filing / waiting / post-effective periods, and what may be communicated in each. Anchor red herring, tombstone, and free writing prospectus rules.",
        tasks: [
          { type: "dash", label: "Ch 1 — Public and Private Offerings", href: "./rules/#chapter-1" },
          { type: "flash", label: "Deck F6 — '33 Act timeline", href: "#flashcards/deck-f6" },
          { type: "review", label: "Self-quiz on §5", href: null }
        ]
      },
      {
        day: "Tue",
        topic: "Regulation D — Rules 504, 506(b), 506(c)",
        desc: "Accredited investor definition, general solicitation rules under 506(c), 35 non-accredited limit under 506(b), Form D filing within 15 days of first sale.",
        tasks: [
          { type: "dash", label: "Ch 1 — Reg D", href: "./rules/#chapter-1" },
          { type: "deep", label: "Regulation D deep dive", href: "#deep-dives/regulation-d" },
          { type: "flash", label: "Deck F6 — Reg D", href: "#flashcards/deck-f6" },
          { type: "example", label: "Reg D fact patterns", href: "#examples" }
        ]
      },
      {
        day: "Wed",
        topic: "Reg A (Tier 1 / Tier 2), Reg S, and Rule 144 / 144A resales",
        desc: "Reg A+ tiers and dollar caps, Category 1/2/3 offshore rules under Reg S, and Rule 144 volume, manner-of-sale, and holding-period conditions for restricted vs control stock.",
        tasks: [
          { type: "dash", label: "Ch 1 — Reg A / S / 144", href: "./rules/#chapter-1" },
          { type: "flash", label: "Deck F6 — exemptions", href: "#flashcards/deck-f6" },
          { type: "review", label: "Volume-limit drill", href: null }
        ]
      },
      {
        day: "Thu",
        topic: "IPO allocations — FINRA Rules 5130 and 5131",
        desc: "5130 restricted-person prohibition on new issue allocations, 5131 spinning and quid-pro-quo prohibitions for public-company executives and directors.",
        tasks: [
          { type: "dash", label: "Ch 2 — Underwriting", href: "./rules/#chapter-2" },
          { type: "flash", label: "Deck F6 — 5130/5131", href: "#flashcards/deck-f6" },
          { type: "example", label: "Spinning scenarios", href: "#examples" }
        ]
      },
      {
        day: "Fri",
        topic: "Regulation M — trading during a distribution",
        desc: "Rules 101, 102, 103, 104, 105: restricted periods for distribution participants, issuer/affiliate rules, passive market making, stabilizing bids, and the 5-business-day short-sale prohibition.",
        tasks: [
          { type: "dash", label: "Ch 2 — Reg M", href: "./rules/#chapter-2" },
          { type: "deep", label: "Reg M deep dive", href: "#deep-dives/reg-m" },
          { type: "flash", label: "Deck F6 — Reg M", href: "#flashcards/deck-f6" },
          { type: "review", label: "Restricted-period timing drill", href: null }
        ]
      },
      {
        day: "Sat",
        topic: "Research quiet periods and FINRA Rule 2241",
        desc: "Post-IPO and post-secondary quiet periods, information barriers between research and banking, personal trading restrictions for analysts, and Reg AC certifications.",
        tasks: [
          { type: "dash", label: "Ch 3 — Research", href: "./rules/#chapter-3" },
          { type: "flash", label: "Deck F6 — Research", href: "#flashcards/deck-f6" },
          { type: "example", label: "Quiet-period scenarios", href: "#examples" },
          { type: "review", label: "20-question F6 practice set", href: null }
        ]
      }
    ],
    summary: "<p>End-of-week checkpoint: <strong>you should now be able to</strong> sequence '33 Act communications correctly in each offering phase, pick the right exemption (Reg D, A, S, 144) for a given fact pattern, apply 5130/5131 to any restricted person or covered executive, identify a Reg M restricted period, and place research analysts on the correct quiet-period clock under Rule 2241. Close with a 25-question banking practice set.</p>"
  },

  {
    num: 3,
    title: "Markets & Trading",
    focus: "Nail the heaviest single function — market structure, order handling, and trade reporting.",
    tag: "F2",
    hours: 14,
    days: [
      {
        day: "Mon",
        topic: "Reg NMS Rule 611 — Order Protection Rule",
        desc: "The trade-through prohibition, protected quotations, ISO orders, and the intermarket sweep exception. Understand why routing engines exist.",
        tasks: [
          { type: "dash", label: "Ch 5 — SEC Trading Rules", href: "./rules/#chapter-5" },
          { type: "deep", label: "Reg NMS deep dive", href: "#deep-dives/reg-nms" },
          { type: "flash", label: "Deck F2 — Reg NMS", href: "#flashcards/deck-f2" },
          { type: "review", label: "Trade-through drill", href: null }
        ]
      },
      {
        day: "Tue",
        topic: "Reg NMS Rules 610 and 612 — access and sub-penny",
        desc: "Rule 610 fair-access and locked/crossed-market rules with the 30-mil access fee cap, and Rule 612 minimum pricing increments (penny for ≥$1, sub-penny for <$1).",
        tasks: [
          { type: "dash", label: "Ch 5 — Rules 610/612", href: "./rules/#chapter-5" },
          { type: "flash", label: "Deck F2 — 610/612", href: "#flashcards/deck-f2" },
          { type: "example", label: "Locked/crossed scenarios", href: "#examples" }
        ]
      },
      {
        day: "Wed",
        topic: "Reg SHO — locate, close-out, and threshold securities",
        desc: "Rule 200 order marking (long/short/short exempt), Rule 203(b) locate requirement, Rule 204 T+1 close-out obligation, and the alternative uptick rule (Rule 201) triggered at a 10% intraday decline.",
        tasks: [
          { type: "dash", label: "Ch 5 — Reg SHO", href: "./rules/#chapter-5" },
          { type: "deep", label: "Reg SHO deep dive", href: "#deep-dives/reg-sho" },
          { type: "flash", label: "Deck F2 — Reg SHO", href: "#flashcards/deck-f2" },
          { type: "review", label: "Locate/close-out drill", href: null }
        ]
      },
      {
        day: "Thu",
        topic: "Rules 605 and 606 — execution quality and routing disclosure",
        desc: "Rule 605 monthly market-center execution-quality stats, Rule 606(a) quarterly public routing report, and Rule 606(b) on-request customer-specific routing disclosures. Know the covered-order universe.",
        tasks: [
          { type: "dash", label: "Ch 6 — SRO Trading", href: "./rules/#chapter-6" },
          { type: "flash", label: "Deck F2 — 605/606", href: "#flashcards/deck-f2" },
          { type: "example", label: "Payment for order flow scenarios", href: "#examples" },
          { type: "review", label: "Self-quiz", href: null }
        ]
      },
      {
        day: "Fri",
        topic: "Trade reporting — ACT/TRF, TRACE, and best execution",
        desc: "TRF vs ADF vs ORF, the 10-second equity reporting window, TRACE reporting for corporate/agency debt, and FINRA Rule 5310 best-execution obligations plus limit-order display under Rule 6460.",
        tasks: [
          { type: "dash", label: "Ch 7 — Trade Reporting", href: "./rules/#chapter-7" },
          { type: "flash", label: "Deck F2 — Reporting", href: "#flashcards/deck-f2" },
          { type: "example", label: "Reporting timing scenarios", href: "#examples" }
        ]
      },
      {
        day: "Sat",
        topic: "CAT — Consolidated Audit Trail",
        desc: "CAT NMS Plan reporting for order events, industry-member vs SRO reporters, PII handling, and the retirement of OATS. Wrap the week with an F2 mixed practice block.",
        tasks: [
          { type: "dash", label: "Ch 7 — CAT", href: "./rules/#chapter-7" },
          { type: "flash", label: "Deck F2 — CAT", href: "#flashcards/deck-f2" },
          { type: "review", label: "30-question F2 practice set", href: null }
        ]
      }
    ],
    summary: "<p>End-of-week checkpoint: <strong>you should now be able to</strong> apply Rule 611 to any trade-through fact pattern, mark orders correctly under Reg SHO and cite the T+1/T+3/T+6 close-out clocks, distinguish Rule 605 from 606(a) and 606(b) disclosures, place any equity or debt trade on the correct reporting venue with the right timestamp, and describe the CAT lifecycle from order origination to allocation. This is the heaviest exam function — target 80%+ on the 30-question practice set before moving on.</p>"
  },

  {
    num: 4,
    title: "Broker-Dealer Operations & Capital",
    focus: "Trace a trade from execution through settlement, and prove the firm can absorb the risk.",
    tag: "F3 · F4",
    hours: 12,
    days: [
      {
        day: "Mon",
        topic: "T+1 settlement and Rule 15c6-1",
        desc: "The May 28, 2024 move from T+2 to T+1 for most securities transactions, exceptions (options settle T+1 already; government securities same-day), and affirmation/allocation deadlines.",
        tasks: [
          { type: "dash", label: "Ch 4 — Equity Trading & Settlement", href: "./rules/#chapter-4" },
          { type: "flash", label: "Deck F3 — T+1", href: "#flashcards/deck-f3" },
          { type: "review", label: "Settlement-date drill", href: null }
        ]
      },
      {
        day: "Tue",
        topic: "DTCC, NSCC, and clearing mechanics",
        desc: "CNS at NSCC for equities, DTC for depository/custody, novation, and the fails process. Understand how a fail-to-deliver flows into Reg SHO close-outs.",
        tasks: [
          { type: "dash", label: "Ch 4 — Clearing", href: "./rules/#chapter-4" },
          { type: "flash", label: "Deck F3 — Clearing", href: "#flashcards/deck-f3" },
          { type: "example", label: "Clearing flow scenarios", href: "#examples" }
        ]
      },
      {
        day: "Wed",
        topic: "Rule 10b-10 confirmations and books & records",
        desc: "Trade confirmation contents (capacity, markup for riskless principal, PFOF disclosure), plus SEA Rules 17a-3/17a-4 record-creation and 3-year/6-year retention frameworks.",
        tasks: [
          { type: "dash", label: "Ch 4 — Confirms & records", href: "./rules/#chapter-4" },
          { type: "flash", label: "Deck F3 — 10b-10 / 17a-3", href: "#flashcards/deck-f3" },
          { type: "review", label: "Confirm-contents self-quiz", href: null }
        ]
      },
      {
        day: "Thu",
        topic: "Rule 15c3-1 — Net Capital",
        desc: "Aggregate indebtedness vs alternative standard, minimum dollar minima by business type, haircuts on securities positions, and the early-warning notification triggers.",
        tasks: [
          { type: "dash", label: "Ch 13 — Financial Responsibility", href: "./rules/#chapter-13" },
          { type: "deep", label: "Net Capital deep dive", href: "#deep-dives/net-capital" },
          { type: "flash", label: "Deck F4 — 15c3-1", href: "#flashcards/deck-f4" },
          { type: "example", label: "Haircut calculation examples", href: "#examples" }
        ]
      },
      {
        day: "Fri",
        topic: "Rule 15c3-3 — Customer Protection & SIPA",
        desc: "Possession/control of fully-paid customer securities, the Special Reserve Bank Account and weekly/monthly reserve computation, and SIPA coverage ($500K total, $250K cash sublimit).",
        tasks: [
          { type: "dash", label: "Ch 13 — Customer Protection", href: "./rules/#chapter-13" },
          { type: "deep", label: "Customer Protection deep dive", href: "#deep-dives/customer-protection" },
          { type: "flash", label: "Deck F4 — 15c3-3 / SIPA", href: "#flashcards/deck-f4" },
          { type: "review", label: "Reserve-formula drill", href: null }
        ]
      },
      {
        day: "Sat",
        topic: "Regulation T — margin",
        desc: "Fed-imposed initial 50% requirement, FINRA Rule 4210 25% maintenance, day-trading (4x buying power / $25K minimum equity / pattern day trader), and Reg T call timing.",
        tasks: [
          { type: "dash", label: "Ch 9 — Margin", href: "./rules/#chapter-9" },
          { type: "flash", label: "Deck F4 — Reg T / 4210", href: "#flashcards/deck-f4" },
          { type: "example", label: "Margin call scenarios", href: "#examples" },
          { type: "review", label: "20-question F3/F4 practice", href: null }
        ]
      }
    ],
    summary: "<p>End-of-week checkpoint: <strong>you should now be able to</strong> walk a trade from execution through T+1 CNS settlement, list required Rule 10b-10 confirmation elements, compute net capital effects using haircuts, identify a customer-protection reserve deficit, and calculate initial and maintenance margin plus day-trading buying power. Target 75%+ on the 20-question F3/F4 practice set.</p>"
  },

  {
    num: 5,
    title: "Supervision, Business Conduct & Communications",
    focus: "Own the compliance-officer functions: the Rule 3110 system, WSPs, and Rule 2210 approvals.",
    tag: "F5 · F9",
    hours: 13,
    days: [
      {
        day: "Mon",
        topic: "FINRA Rule 3110 — supervisory system and WSPs",
        desc: "Designation of principals, written supervisory procedures, OSJ definition, and the supervisory-control architecture that ties Rule 3110 to Rule 3120.",
        tasks: [
          { type: "dash", label: "Ch 10 — Supervision", href: "./rules/#chapter-10" },
          { type: "deep", label: "Rule 3110 deep dive", href: "#deep-dives/rule-3110-supervision" },
          { type: "flash", label: "Deck F5 — 3110", href: "#flashcards/deck-f5" },
          { type: "review", label: "WSP-adequacy drill", href: null }
        ]
      },
      {
        day: "Tue",
        topic: "Branch inspections and internal reviews",
        desc: "3110(c) inspection cycles — annually for OSJs and supervisory branches, at least every 3 years for non-supervisory branches — plus the risk-based factors and heightened supervision triggers.",
        tasks: [
          { type: "dash", label: "Ch 10 — Inspections", href: "./rules/#chapter-10" },
          { type: "flash", label: "Deck F5 — Inspections", href: "#flashcards/deck-f5" },
          { type: "example", label: "Branch-inspection scenarios", href: "#examples" }
        ]
      },
      {
        day: "Wed",
        topic: "Rules 3120 and 3130 — supervisory controls and CEO certification",
        desc: "3120 annual supervisory-controls testing report to senior management and 3130 annual CEO certification of the compliance and supervisory processes. Understand how they interlock.",
        tasks: [
          { type: "dash", label: "Ch 10 — 3120/3130", href: "./rules/#chapter-10" },
          { type: "flash", label: "Deck F5 — 3120/3130", href: "#flashcards/deck-f5" },
          { type: "review", label: "Certification-timeline quiz", href: null }
        ]
      },
      {
        day: "Thu",
        topic: "Rule 3170 taping rule and MSRB G-27",
        desc: "3170 disciplined-firm taping thresholds and 3-year retention; MSRB G-27 municipal-securities supervision framework and its overlap/differences with FINRA 3110.",
        tasks: [
          { type: "dash", label: "Ch 10 — 3170 / MSRB G-27", href: "./rules/#chapter-10" },
          { type: "flash", label: "Deck F5 — 3170 / G-27", href: "#flashcards/deck-f5" },
          { type: "example", label: "Taping-threshold scenarios", href: "#examples" }
        ]
      },
      {
        day: "Fri",
        topic: "FINRA Rule 2210 — communications with the public",
        desc: "Retail vs institutional vs correspondence classification, principal pre-use approval requirements, and the filing categories that require FINRA Advertising Regulation review.",
        tasks: [
          { type: "dash", label: "Ch 12 — Communications", href: "./rules/#chapter-12" },
          { type: "deep", label: "Rule 2210 deep dive", href: "#deep-dives/finra-2210-communications" },
          { type: "flash", label: "Deck F9 — 2210", href: "#flashcards/deck-f9" },
          { type: "review", label: "Classification drill", href: null }
        ]
      },
      {
        day: "Sat",
        topic: "Testimonials, endorsements, and MSRB G-37 political contributions",
        desc: "2021 SEC marketing-rule alignment inside 2210 for testimonials and endorsements (disclosures required), plus MSRB G-37 pay-to-play, the $250 de minimis, and the two-year look-back ban.",
        tasks: [
          { type: "dash", label: "Ch 12 — Testimonials", href: "./rules/#chapter-12" },
          { type: "deep", label: "MSRB G-37 deep dive", href: "#deep-dives/msrb-g37" },
          { type: "flash", label: "Deck F9 — G-37", href: "#flashcards/deck-f9" },
          { type: "review", label: "25-question F5/F9 practice", href: null }
        ]
      }
    ],
    summary: "<p>End-of-week checkpoint: <strong>you should now be able to</strong> design a Rule 3110 supervisory system with correct OSJ and branch-inspection cadences, articulate the 3120/3130 annual cycle, classify any communication under Rule 2210 with the right approval and filing path, and apply MSRB G-37 to a political-contribution fact pattern. Together F5 + F9 are 30 items — target 80%+ on the practice set.</p>"
  },

  {
    num: 6,
    title: "Sales Practice + Full Review",
    focus: "Close F8 (customer conduct), then two full-length practice exams and targeted weakness triage.",
    tag: "F8 · Review",
    hours: 14,
    days: [
      {
        day: "Mon",
        topic: "Regulation Best Interest and Form CRS",
        desc: "Reg BI's four obligations (Disclosure, Care, Conflict of Interest, Compliance) for retail customer recommendations, plus the Form CRS relationship-summary delivery requirements.",
        tasks: [
          { type: "dash", label: "Ch 8 — Customer Accounts", href: "./rules/#chapter-8" },
          { type: "deep", label: "Reg BI deep dive", href: "#deep-dives/reg-bi" },
          { type: "flash", label: "Deck F8 — Reg BI / CRS", href: "#flashcards/deck-f8" },
          { type: "review", label: "Best-interest scenarios", href: null }
        ]
      },
      {
        day: "Tue",
        topic: "AML, CIP, and Reg S-P privacy",
        desc: "Bank Secrecy Act SAR filing thresholds, Customer Identification Program requirements under FINRA Rule 3310, and Reg S-P initial/annual privacy notices plus the safeguards rule.",
        tasks: [
          { type: "dash", label: "Ch 8 — AML / Reg S-P", href: "./rules/#chapter-8" },
          { type: "flash", label: "Deck F8 — AML / S-P", href: "#flashcards/deck-f8" },
          { type: "example", label: "SAR trigger scenarios", href: "#examples" },
          { type: "review", label: "Self-quiz", href: null }
        ]
      },
      {
        day: "Wed",
        topic: "Elder exploitation (Rule 2165), penny stock, and Rule 2111 suitability",
        desc: "FINRA Rule 2165 temporary holds on disbursements for specified adults, Rule 2090 know-your-customer, Rule 2111 suitability tiers, and the SEC penny-stock cold-call and disclosure rules.",
        tasks: [
          { type: "dash", label: "Ch 8 — Penny stock / 2165", href: "./rules/#chapter-8" },
          { type: "flash", label: "Deck F8 — 2165 / penny stock", href: "#flashcards/deck-f8" },
          { type: "example", label: "Elder-exploitation cases", href: "#examples" }
        ]
      },
      {
        day: "Thu",
        topic: "Full-length practice exam #1",
        desc: "Sit a timed 110-question practice exam under real conditions (~2 hours 45 minutes). Do not review during — mark and move. Score and log misses by function code.",
        tasks: [
          { type: "review", label: "Timed full-length practice exam", href: null },
          { type: "review", label: "Score and tag misses by F-code", href: null }
        ]
      },
      {
        day: "Fri",
        topic: "Weakness triage and targeted remediation",
        desc: "Rank the weakest 2-3 functions from Thursday's exam and drill them: rewatch deep dives, run the relevant flashcard decks, and rework any missed items until you can explain the rule from scratch.",
        tasks: [
          { type: "deep", label: "Revisit weakest-topic deep dive", href: "#deep-dives/reg-bi" },
          { type: "flash", label: "Targeted deck review", href: "#flashcards/deck-f8" },
          { type: "example", label: "Rework missed scenarios", href: "#examples" },
          { type: "review", label: "Focused 40-question drill", href: null }
        ]
      },
      {
        day: "Sat",
        topic: "Full-length practice exam #2 + final cram sheet",
        desc: "Second timed 110-question exam. Compare score and function-level performance to exam #1, then build a one-page cram sheet of every rule you're still shaky on for exam-eve review.",
        tasks: [
          { type: "review", label: "Timed full-length practice exam", href: null },
          { type: "review", label: "Build final cram sheet", href: null },
          { type: "flash", label: "Flag-cards final pass", href: "#flashcards/deck-f5" }
        ]
      },
      {
        day: "Sun",
        topic: "Rest — exam eve",
        desc: "No new material. Skim the cram sheet once in the morning, then rest, hydrate, and confirm test-center or online-proctor logistics.",
        tasks: [
          { type: "review", label: "Skim cram sheet once — then stop", href: null }
        ]
      }
    ],
    summary: "<p>End-of-week checkpoint: <strong>you should be exam-ready.</strong> You've completed two full-length timed practice exams, triaged your weakest functions, and produced a one-page cram sheet. Sit the real Series 14 with a clear sense of the four Reg BI obligations, AML/CIP mechanics, elder-exploitation holds under Rule 2165, and penny-stock disclosures — and confidence that F2, F5, F6, and F8 (which together are 71 of 110 items) are your strongest areas.</p>"
  }
];
