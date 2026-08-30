window.EXAMPLES = [
  {
    category: "Enforcement",
    title: "Robinhood's PFOF Disclosure Failure",
    scenario: "<p>Robinhood built its brand on <strong>commission-free</strong> trading, but the SEC found that the real economics ran through <strong>payment for order flow (PFOF)</strong>. Between 2015 and 2018, Robinhood allegedly told customers on FAQ pages that its execution quality matched or beat competitors while omitting the largest source of firm revenue.</p>",
    whatHappened: "<p>In December 2020 Robinhood agreed to pay a <strong>$65 million</strong> SEC civil penalty for misleading statements about PFOF and for failing to satisfy its <strong>duty of best execution</strong>. The SEC concluded that inferior execution prices cost customers more than the savings from zero commissions. Robinhood neither admitted nor denied the findings but revised its disclosures and routing practices.</p>",
    lesson: "<p>Expect exam questions tying <strong>Rule 606</strong> (quarterly public reports on order routing and payments received) to the broader <strong>best execution</strong> obligation. Zero commissions do not eliminate the duty — if a firm is paid to route orders, that fact and its impact on execution quality must be disclosed accurately.</p>",
    rules: ["SEC Rule 606", "FINRA 2010", "FINRA 5310"]
  },
  {
    category: "Enforcement",
    title: "MF Global and the Customer Seg Shortfall",
    scenario: "<p>MF Global was a major futures commission merchant and broker-dealer that took large proprietary positions in <strong>European sovereign debt</strong> in 2011. As those trades moved against the firm and margin calls escalated, liquidity dried up in the final days before its bankruptcy filing.</p>",
    whatHappened: "<p>In the last week of October 2011, MF Global <strong>transferred customer segregated funds</strong> to cover proprietary margin and operational shortfalls, leaving a roughly <strong>$1.6 billion</strong> gap in customer accounts. The firm filed for bankruptcy on October 31, 2011; the trustee eventually returned nearly all customer property, and executives faced regulatory bans and civil penalties.</p>",
    lesson: "<p>This is the textbook <strong>possession or control</strong> case. <strong>SEC Rule 15c3-3</strong> and the parallel <strong>CFTC 1.20/1.25</strong> segregation rules exist so that customer property is never available to pay firm creditors. Watch for exam fact patterns where firm cash is commingled, moved to house accounts, or invested in non-permitted instruments.</p>",
    rules: ["SEC Rule 15c3-3", "CFTC 1.20", "CFTC 1.25", "FINRA 4330"]
  },
  {
    category: "Enforcement",
    title: "Wells Fargo Unauthorized Accounts",
    scenario: "<p>Wells Fargo's community bank ran an aggressive cross-sell program with punishing sales quotas. Front-line employees were pressured to hit product-per-household targets that many later described as impossible to achieve legitimately.</p>",
    whatHappened: "<p>Regulators found that employees opened <strong>millions of deposit and credit accounts without customer authorization</strong>, sometimes using existing customer PII to create sham accounts and meet quotas. The firm paid substantial penalties to the CFPB, OCC, SEC, and state regulators, and senior executives were later banned from the industry. The case became a landmark example of <strong>supervisory and cultural failure</strong>.</p>",
    lesson: "<p>Sales-practice fact patterns on the exam love the combination of <strong>KYC (Rule 2090)</strong>, <strong>supervision (Rule 3110)</strong>, and <strong>standards of commercial honor (Rule 2010)</strong>. When a firm's compensation structure incentivizes misconduct and supervisors ignore red flags, liability rolls up — quotas alone don't excuse unauthorized activity.</p>",
    rules: ["FINRA 3110", "FINRA 2010", "FINRA 2090"]
  },
  {
    category: "Operational scenario",
    title: "A Stock Hits the Reg SHO Threshold List",
    scenario: "<p>Ticker XYZ appears on an exchange's <strong>threshold securities list</strong>: it has recorded <strong>fails to deliver of at least 10,000 shares</strong> and at least <strong>0.5% of shares outstanding</strong> for <strong>five consecutive settlement days</strong>. A market maker on your desk has an open fail in XYZ from a customer long sale.</p>",
    whatHappened: "<p>Under <strong>Reg SHO Rule 204</strong>, the firm must <strong>close out</strong> the fail by purchasing or borrowing securities of like kind and quantity. For a fail resulting from a long sale the close-out deadline is generally the beginning of trading on <strong>T+3</strong>; for a short sale it is <strong>T+1</strong>. Until the fail is closed, the firm and any broker-dealer clearing through it are subject to a <strong>pre-borrow</strong> requirement for further short sales in that security.</p>",
    lesson: "<p>Threshold-list questions test two things: how a stock gets ON the list (the 10K shares + 0.5% + 5 days trigger) and what the close-out and <strong>penalty box</strong> pre-borrow consequences are. Also remember <strong>Rule 203(b)</strong>'s locate requirement applies to every short sale regardless of threshold status.</p>",
    rules: ["SEC Reg SHO Rule 203", "SEC Reg SHO Rule 204"]
  },
  {
    category: "Market event",
    title: "T+1 Settlement Goes Live — May 28, 2024",
    scenario: "<p>On <strong>May 28, 2024</strong>, the U.S. moved its standard settlement cycle for most broker-dealer securities transactions from <strong>T+2 to T+1</strong>. Canada and Mexico shifted the previous business day. Operations teams at every broker-dealer had spent 18+ months compressing affirmation, allocation, and FX workflows.</p>",
    whatHappened: "<p>The SEC's amendments to <strong>Rule 15c6-1</strong> shortened the standard cycle, while new <strong>Rule 15c6-2</strong> requires broker-dealers to have written agreements or policies ensuring <strong>same-day allocations, confirmations, and affirmations</strong> for institutional trades. Advisers face parallel recordkeeping requirements under Advisers Act Rule 204-2. Industry reporting after go-live showed affirmation rates rose sharply and fail rates did not spike as some feared.</p>",
    lesson: "<p>Expect questions on the <strong>trade date + 1 business day</strong> settlement cycle, the same-day institutional allocation deadline (generally by end of trade date), and the exceptions that remain on T+2 or longer (certain exempted securities, when-issued, and negotiated contracts). Cash settlement is still available by mutual agreement.</p>",
    rules: ["SEC Rule 15c6-1", "SEC Rule 15c6-2"]
  },
  {
    category: "Operational scenario",
    title: "CIP Skipped for a Shell-Company Account",
    scenario: "<p>A branch office opens a brokerage account for an LLC introduced by a referring attorney. The paperwork lists a nominee manager, the LLC was formed weeks earlier in a secrecy-friendly jurisdiction, and the firm skips independent verification of <strong>beneficial ownership</strong>. Within months, wires move in from unrelated third parties and out to overseas accounts.</p>",
    whatHappened: "<p>Regulators found the firm violated its <strong>Customer Identification Program</strong> obligations under <strong>USA PATRIOT Act Section 326</strong> and its AML program duty under <strong>FINRA Rule 3310</strong>. The firm failed to identify and verify beneficial owners under FinCEN's CDD rule, failed to file SARs on obvious red flags, and had inadequate transaction monitoring. FinCEN and FINRA imposed penalties; the AML officer was also sanctioned.</p>",
    lesson: "<p>AML questions typically bundle four duties: <strong>CIP</strong> (identify the customer), <strong>CDD/beneficial ownership</strong> (know who really controls a legal entity), <strong>ongoing monitoring</strong>, and <strong>SAR filing</strong>. A shell entity + third-party wires + rapid pass-through activity is the classic red-flag stack — the exam wants you to recognize it.</p>",
    rules: ["FINRA 3310", "USA PATRIOT Act 326", "SEC Rule 17a-8", "FinCEN CDD Rule"]
  },
  {
    category: "Everyday hypothetical",
    title: "MSRB G-37: A $500 Mayoral Donation",
    scenario: "<p>Priya is a <strong>municipal finance professional (MFP)</strong> at a broker-dealer that underwrites negotiated bond deals for City A. She lives in City B but donates <strong>$500</strong> to a mayoral candidate in City A, where she is <strong>not entitled to vote</strong>.</p>",
    whatHappened: "<p>MSRB <strong>Rule G-37</strong> caps de minimis MFP contributions at <strong>$250 per election</strong> and only to candidates the MFP can vote for. Priya's donation blows through both prongs. The firm triggers a <strong>two-year ban</strong> on engaging in <strong>negotiated municipal securities business</strong> with that issuer, measured from the date of the contribution. The firm must also report the contribution on <strong>Form G-37</strong>.</p>",
    lesson: "<p>Memorize the numbers: <strong>$250 de minimis, only if you can vote, two-year ban, quarterly G-37 filings</strong>. Note that competitive bid business is generally not swept in, and the definition of MFP includes solicitors and supervisors — not just bankers who directly do muni deals.</p>",
    rules: ["MSRB G-37"]
  },
  {
    category: "Enforcement",
    title: "Reg M Rule 105: Shorting Into a Follow-On",
    scenario: "<p>A hedge fund establishes a short position in a Nasdaq-listed issuer during the week leading up to the pricing of a <strong>follow-on offering</strong>. The fund then submits an indication of interest and receives an allocation in the offering, planning to <strong>cover</strong> its short with the newly issued shares.</p>",
    whatHappened: "<p><strong>Reg M Rule 105</strong> prohibits purchasing offering securities from an underwriter or broker-dealer if the buyer sold short the same security during the <strong>Rule 105 restricted period</strong> — the shorter of the five business days before pricing or the period from the initial filing through pricing. The SEC has brought numerous strict-liability actions in this space, typically requiring <strong>disgorgement of profits</strong> plus prejudgment interest and a civil penalty. Intent is not required.</p>",
    lesson: "<p>Rule 105 is a favorite exam trap because it looks like insider trading but isn't — it's a <strong>strict liability</strong> prophylactic rule aimed at manipulation of offering prices. Watch for the limited exceptions: <strong>bona fide purchase</strong>, <strong>separate accounts</strong>, and <strong>investment company</strong> exceptions, each with specific mechanical requirements.</p>",
    rules: ["SEC Reg M Rule 105"]
  },
  {
    category: "Operational scenario",
    title: "A 10b5-1 Plan Adopted During Blackout",
    scenario: "<p>An executive at a public company adopts a <strong>Rule 10b5-1 trading plan</strong> to sell shares in scheduled tranches over the next year. At the time of adoption she is aware of unannounced <strong>material non-public information</strong> about a pending acquisition — or, in a variation, she modifies an existing plan during the company's earnings blackout.</p>",
    whatHappened: "<p>A properly designed 10b5-1 plan provides an <strong>affirmative defense</strong> to insider trading under <strong>Rule 10b-5</strong>, but only if it was <strong>entered into in good faith</strong> and while the insider was <strong>not aware of MNPI</strong>. The SEC's <strong>2023 amendments</strong> tightened the regime: a <strong>90-day cooling-off period</strong> for directors and officers (longer of 90 days or two business days after the next 10-Q/10-K, capped at 120 days), a <strong>30-day</strong> cooling-off for others, mandatory certifications, and limits on overlapping and single-trade plans.</p>",
    lesson: "<p>The exam wants you to recognize that a 10b5-1 plan is <strong>not a magic shield</strong>. Adoption or modification while aware of MNPI, or without the required cooling-off, destroys the defense. Modifying a plan is treated like adopting a new one.</p>",
    rules: ["SEC Rule 10b-5", "SEC Rule 10b5-1"]
  },
  {
    category: "Operational scenario",
    title: "DUI Arrest Not Reported on Form U4",
    scenario: "<p>A registered representative is arrested on a <strong>felony DUI</strong> charge over a long weekend. He tells his branch manager verbally on Monday but assumes the firm will handle the paperwork, and no one updates his <strong>Form U4</strong>. The disclosure surfaces months later during a routine <strong>Rule 3110(e)</strong> background review.</p>",
    whatHappened: "<p>Under <strong>FINRA By-Laws Article V, Section 2</strong> and <strong>Rule 4530</strong>, statutory disclosure events on Form U4 — including many charges and all felony arrests — must be reported within <strong>30 calendar days</strong>. Late U4 amendments are one of the most common bases for AWCs, typically resulting in a <strong>fine and a short suspension</strong> for the individual, with heightened sanctions where the omission appears intentional.</p>",
    lesson: "<p>Know the <strong>30-day rule</strong> cold and know it runs from the reportable event, not from the firm's internal awareness. Charges, convictions, bankruptcies, liens, customer complaints meeting the threshold, and internal reviews for wrongdoing all trigger amendment obligations.</p>",
    rules: ["FINRA By-Laws Art. V Sec. 2", "FINRA 4530", "FINRA 1010"]
  },
  {
    category: "Enforcement",
    title: "Missed Branch Office Inspections",
    scenario: "<p>A mid-sized broker-dealer with dozens of branches lets its inspection calendar slip during a period of rapid hiring. Several <strong>OSJs</strong> go more than a year without a documented on-site review, and multiple non-OSJ branches miss their <strong>triennial</strong> cycle.</p>",
    whatHappened: "<p><strong>FINRA Rule 3110(c)</strong> requires firms to inspect each <strong>OSJ and supervisory branch at least annually</strong>, each <strong>non-supervisory branch at least every three years</strong>, and non-branch locations on a regular periodic schedule. Missing inspections routinely produces AWCs with fines and undertakings to rebuild written supervisory procedures, particularly where the firm cannot document reasons for the schedule or the scope of the reviews performed.</p>",
    lesson: "<p>Inspection frequency and <strong>independence of inspector</strong> are staple exam topics. A person cannot inspect an office where they are assigned, are directly or indirectly supervised by someone at that office, or have a conflict — with narrow exceptions. Also remember the FINRA <strong>Remote Inspection Pilot Program</strong> has specific eligibility and recordkeeping conditions.</p>",
    rules: ["FINRA 3110"]
  },
  {
    category: "Everyday hypothetical",
    title: "Reg BI Care Obligation and a Costly Annuity",
    scenario: "<p>A registered rep recommends a <strong>proprietary variable annuity</strong> with a 7-year surrender schedule and high internal fees to a <strong>75-year-old retiree</strong> on a fixed income. The rep documents no consideration of alternatives, no analysis of surrender-charge risk versus the client's likely liquidity needs, and no comparison to lower-cost non-proprietary products.</p>",
    whatHappened: "<p><strong>Regulation Best Interest</strong> imposes four obligations at the time of a recommendation to a retail customer: <strong>Disclosure, Care, Conflict of Interest, and Compliance</strong>. The Care Obligation requires the firm and the associated person to have a reasonable basis to believe the recommendation is in the customer's best interest, considering <strong>costs, risks, rewards, and reasonably available alternatives</strong>. Recommending an illiquid, high-cost product to an elderly investor without that analysis fails Care and typically produces both firm-level and individual sanctions.</p>",
    lesson: "<p>Reg BI is not a fiduciary standard but it explicitly requires <strong>consideration of alternatives</strong> and elevates conflicts management. Watch for exam fact patterns involving <strong>seniors, proprietary products, complex or illiquid features, and rollovers</strong> — those are the SEC and FINRA's stated enforcement priorities.</p>",
    rules: ["SEC Reg BI", "Form CRS"]
  },
  {
    category: "Everyday hypothetical",
    title: "A Retail Web Page That Fails Rule 2210",
    scenario: "<p>A firm's marketing team publishes a public-facing web page featuring a <strong>hypothetical performance chart</strong> for a model portfolio, several <strong>client testimonials</strong>, and a headline promising \"market-beating returns.\" Fees are footnoted in gray, and the testimonials do not disclose whether the clients were compensated or whether the experience is typical.</p>",
    whatHappened: "<p>The page is a <strong>retail communication</strong> under <strong>FINRA Rule 2210</strong> because it was made available to more than 25 retail investors in a 30-day period. It must be approved by a registered principal before use, be <strong>fair and balanced</strong>, and comply with prohibitions on <strong>false, exaggerated, or misleading</strong> statements. Performance presentations require prominent fee and risk disclosure; testimonials require specific disclosures under Rule 2210 and, if paid, under the SEC Marketing Rule for adviser-side communications.</p>",
    lesson: "<p>Know the <strong>25-retail-investors-in-30-days</strong> threshold that separates retail from correspondence, remember <strong>institutional communications</strong> have their own carve-out but still require supervision, and be ready to spot <strong>predictions/projections, guarantees, and omitted material facts</strong> as classic 2210 violations that also implicate Rules <strong>2020</strong> (manipulative practices) and <strong>2010</strong>.</p>",
    rules: ["FINRA 2210", "FINRA 2020", "FINRA 2010"]
  },
  {
    category: "Operational scenario",
    title: "Net Capital Falls Below the Minimum",
    scenario: "<p>Late on a Friday, a broker-dealer's <strong>FINOP</strong> discovers that a large unsecured receivable must be non-allowable, wiping out the cushion above the firm's required minimum. The computation shows <strong>net capital below the required minimum</strong> under <strong>SEC Rule 15c3-1</strong>.</p>",
    whatHappened: "<p>A firm below its minimum is <strong>required to cease conducting a securities business</strong> immediately, except to liquidate positions in an orderly way. Under <strong>Rule 17a-11</strong> the firm must give <strong>same-day telegraphic/electronic notice</strong> to the SEC and its DEA (FINRA) of the deficiency; early-warning triggers (net capital falling below 120% of the minimum, or aggregate indebtedness exceeding 12x net capital for firms using the AI method) require notice within 24 hours. Rule <strong>15c3-4</strong> layers additional risk management standards for firms using internal models under Appendix E.</p>",
    lesson: "<p>Memorize the three notice tiers: <strong>early warning</strong> (24 hours), <strong>deficiency</strong> (same day), and <strong>books and records problems</strong> (48 hours). Also recall the two computation methods — <strong>basic (aggregate indebtedness)</strong> and <strong>alternative (2% of aggregate debit items)</strong> — and their respective minimums by firm type.</p>",
    rules: ["SEC Rule 15c3-1", "SEC Rule 17a-11", "SEC Rule 15c3-4"]
  },
  {
    category: "Enforcement",
    title: "Late and Inaccurate CAT Reporting",
    scenario: "<p>A broker-dealer's order management system has an intermittent bug that <strong>drops timestamp precision</strong> and mislabels certain agency orders as principal. The errors show up in its daily <strong>Consolidated Audit Trail (CAT)</strong> submissions, driving reject rates well above the industry threshold for weeks before anyone in compliance escalates.</p>",
    whatHappened: "<p>Under the <strong>FINRA 6800 Series</strong> and <strong>SEC Rule 613</strong>, industry members must report specified order, quote, and trade events to the CAT central repository, generally by <strong>8:00 a.m. Eastern the next trading day</strong>, and must correct errors by <strong>T+3</strong>. Regulators have increasingly targeted firms with sustained <strong>error and repair rates</strong> above tolerance, inadequate <strong>Clock Synchronization</strong>, or missing <strong>customer and account information</strong> (CAIS) — issuing AWCs with fines and required remediation plans.</p>",
    lesson: "<p>CAT questions focus on the mechanics: <strong>who reports</strong> (industry members and exchanges), <strong>what</strong> (reportable events across the order lifecycle), <strong>when</strong> (T+1 by 8 a.m. ET, corrections by T+3), and <strong>clock sync</strong> tolerances (generally 50 milliseconds for computer clocks, tighter for certain systems). CAT superseded OATS in 2021 and is now a common enforcement docket.</p>",
    rules: ["FINRA 6800 Series", "SEC Rule 613"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.EXAMPLES;
}
