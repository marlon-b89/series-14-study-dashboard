// Series 14 Flashcards
// Decks are keyed to the nine FINRA job functions (F1–F9). Card counts are
// sized proportionally to exam weight. Answers are short HTML fragments so
// the study tool can render them directly.

window.FLASHCARD_DECKS = [
  {
    id: "deck-f1",
    jobFunction: "F1 · Regulatory Agencies",
    title: "Regulatory Agencies & Statutory Framework",
    cards: [
      {
        tag: "SEC vs FINRA",
        q: "Which body has statutory rulemaking authority over broker-dealers, and which is the SRO that examines and enforces day-to-day conduct?",
        a: "<p>The <strong>SEC</strong> is the federal statutory regulator with primary rulemaking authority under the '33 and '34 Acts. <strong>FINRA</strong> is the self-regulatory organization (SRO) that writes its own rules subject to SEC approval, and conducts routine exams and enforcement of member firms.</p><p>Memory hook: SEC = statute, FINRA = shop floor.</p>"
      },
      {
        tag: "'33 vs '34 Act",
        q: "What is the core distinction between the Securities Act of 1933 and the Securities Exchange Act of 1934?",
        a: "<p>The <strong>'33 Act</strong> governs the <em>primary market</em> — registration and disclosure for new issues (Form S-1, prospectus delivery).</p><p>The <strong>'34 Act</strong> governs the <em>secondary market</em> — it created the SEC, requires ongoing reporting (10-K/10-Q/8-K), and regulates exchanges, broker-dealers, and market conduct (10b-5, Reg SHO, Reg NMS).</p>"
      },
      {
        tag: "MSRB",
        q: "Who regulates municipal securities dealers, and who enforces MSRB rules against broker-dealers?",
        a: "<p>The <strong>MSRB</strong> writes the rules for municipal securities activity but has <em>no enforcement authority</em>. Enforcement against broker-dealers is done by <strong>FINRA</strong> and the <strong>SEC</strong>; against bank dealers by the federal bank regulators (OCC, FRB, FDIC).</p>"
      },
      {
        tag: "SIPC",
        q: "What does SIPC cover, and what are the per-customer limits?",
        a: "<p>SIPC protects customers of failed broker-dealers up to <strong>$500,000</strong> total per separate customer, of which no more than <strong>$250,000</strong> may be cash. It covers missing securities and cash — <em>not</em> market losses, and not commodities or unregistered investment contracts.</p>"
      },
      {
        tag: "SOX / Dodd-Frank",
        q: "In one line each, what did Sarbanes-Oxley (2002) and Dodd-Frank (2010) add to the regulatory framework?",
        a: "<p><strong>SOX</strong> — created the <strong>PCAOB</strong>, required CEO/CFO certification of financials, and imposed internal controls (Section 404) on public issuers.</p><p><strong>Dodd-Frank</strong> — created the <strong>CFPB</strong> and <strong>FSOC</strong>, mandated Volcker Rule limits on proprietary trading, expanded whistleblower awards, and required swap dealer registration.</p>"
      }
    ]
  },
  {
    id: "deck-f2",
    jobFunction: "F2 · Markets & Operations",
    title: "Trading Rules, Market Structure & Reporting",
    cards: [
      {
        tag: "Reg NMS · Rule 611",
        q: "What does Reg NMS Rule 611 (the Order Protection Rule) require?",
        a: "<p>Trading centers must establish, maintain, and enforce policies reasonably designed to prevent <strong>trade-throughs</strong> of protected quotations (the best bid/offer displayed by automated market centers). A protected quote must be automated, immediately accessible, and the top-of-book quote at that venue.</p>"
      },
      {
        tag: "Reg NMS · Rule 610",
        q: "Under Reg NMS Rule 610, what is the cap on access fees for protected quotations priced $1.00 or more?",
        a: "<p><strong>$0.003 per share</strong> (three-tenths of a cent). For quotes priced under $1.00, the cap is <strong>0.3%</strong> of the quote price. Rule 610 also bars locked/crossed markets.</p>"
      },
      {
        tag: "Reg NMS · Rule 612",
        q: "What is the sub-penny rule under Reg NMS Rule 612?",
        a: "<p>No market participant may display, rank, or accept a quotation or order in an NMS stock priced <strong>≥ $1.00</strong> in an increment finer than <strong>$0.01</strong>. For stocks priced under $1.00, the minimum increment is <strong>$0.0001</strong>. Executions can still occur at sub-penny prices (e.g., midpoint) — the ban is on <em>quoting</em>.</p>"
      },
      {
        tag: "Reg NMS · Rule 605/606",
        q: "What do Rules 605 and 606 disclose, respectively?",
        a: "<p><strong>Rule 605</strong> — <em>market centers</em> publish monthly execution quality statistics (effective spread, price improvement, speed).</p><p><strong>Rule 606</strong> — <em>broker-dealers</em> publish quarterly order routing reports and, on customer request, order-specific routing for the prior six months.</p>"
      },
      {
        tag: "Reg SHO · Rule 200",
        q: "How does Reg SHO Rule 200 define long vs short, and what marks are required?",
        a: "<p>Every sell order in an equity security must be marked <strong>\"long,\" \"short,\" or \"short exempt.\"</strong> A seller is \"long\" only if they own the security and will deliver it by settlement. Aggregation is done at the account/trading-unit level.</p>"
      },
      {
        tag: "Reg SHO · Rule 203",
        q: "What is the locate requirement under Reg SHO Rule 203(b)(1)?",
        a: "<p>Before accepting or effecting a <strong>short sale</strong>, a broker-dealer must have <strong>reasonable grounds to believe the security can be borrowed and delivered by settlement date</strong>, and must document the locate. Bona fide market makers are exempt for market-making activity.</p>"
      },
      {
        tag: "Reg SHO · Rule 204",
        q: "Under Reg SHO Rule 204, by when must a fail-to-deliver from a short sale be closed out?",
        a: "<p>By the beginning of regular trading hours on <strong>T+1</strong> after settlement date (settlement date is T+1, so the buy-in must be done by <strong>T+2</strong> after trade date for equities). Fails from long sales get an extra business day. Failure triggers the <strong>pre-borrow</strong> requirement — the firm cannot accept further short sales in that security without borrowing first.</p>"
      },
      {
        tag: "Reg SHO · Circuit Breaker",
        q: "What triggers the Reg SHO Rule 201 short sale circuit breaker (\"alternative uptick rule\")?",
        a: "<p>A decline of <strong>10% or more</strong> from the prior day's official closing price. Once triggered, short sales in that security may only be executed at a price <strong>above the current national best bid</strong>, and the restriction stays in effect for the <strong>remainder of that day and the following trading day</strong>.</p>"
      },
      {
        tag: "CAT",
        q: "What is the reporting deadline under the Consolidated Audit Trail (CAT)?",
        a: "<p>Broker-dealers must report reportable events to CAT by <strong>8:00 a.m. ET the following trading day (T+1)</strong>. Errors must be corrected by <strong>T+3</strong>. CAT replaced OATS and captures the full lifecycle of orders across all NMS securities and listed options.</p>"
      },
      {
        tag: "TRACE",
        q: "What is the TRACE reporting deadline for most corporate bond transactions?",
        a: "<p>Within <strong>15 minutes</strong> of execution during TRACE hours (8:00 a.m. – 6:29:59 p.m. ET). Certain securitized products and 144A trades have their own reporting windows. Trades executed outside TRACE hours must be reported the next business day.</p>"
      },
      {
        tag: "ACT / TRF",
        q: "For OTC trades in NMS equities, how quickly must a trade be reported to the FINRA/Nasdaq TRF (ACT)?",
        a: "<p>Within <strong>10 seconds</strong> of execution during normal market hours. Trades executed outside market hours have modified reporting windows (e.g., before 8:00 a.m. — report by 8:15 a.m. and mark \".T\"; after 4:00 p.m. — report within 10 seconds if before 8:00 p.m., else next day).</p>"
      },
      {
        tag: "Quote Rule 602",
        q: "What is required of exchange market makers under SEC Rule 602 (the Quote Rule)?",
        a: "<p>Exchanges and market makers must publish <strong>firm, two-sided quotations</strong> during regular market hours and honor them for at least the displayed size. This prevents \"backing away\" — a violation exposes the firm to disciplinary action.</p>"
      },
      {
        tag: "Limit Order Display",
        q: "What does the Manning / Limit Order Display Rule (SEC Rule 604 / FINRA 5320) require?",
        a: "<p>A market maker that receives a customer limit order priced better than its current quote must <strong>display the order</strong> in its published quote (Rule 604), and cannot <strong>trade ahead</strong> of that order for its own account without executing it at the same or better price (FINRA 5320).</p>"
      },
      {
        tag: "Best Execution",
        q: "What are the core factors in FINRA Rule 5310 (best execution)?",
        a: "<p>A firm must use <strong>reasonable diligence</strong> to obtain the most favorable price under prevailing conditions, considering: (1) character of the market, (2) size and type of the transaction, (3) number of markets checked, (4) accessibility of the quote, and (5) terms and conditions of the order. Firms must conduct <strong>regular and rigorous review</strong> of execution quality.</p>"
      },
      {
        tag: "Market Access · 15c3-5",
        q: "What is the SEC Market Access Rule (15c3-5) requirement in one sentence?",
        a: "<p>Broker-dealers with market access must implement <strong>pre-trade risk controls and supervisory procedures</strong> — credit/capital thresholds, erroneous order filters, and regulatory compliance checks — that are <strong>under the direct and exclusive control of the broker-dealer</strong>. No naked sponsored access.</p>"
      },
      {
        tag: "Reg ATS",
        q: "What defines an ATS under Reg ATS, and what must one file to operate?",
        a: "<p>An ATS matches orders for securities but is not registered as an exchange. Operators must be registered broker-dealers, file <strong>Form ATS</strong> at least 20 days before operations, and file amendments within <strong>30 days</strong> of material changes. NMS Stock ATSs file <strong>Form ATS-N</strong> publicly.</p>"
      },
      {
        tag: "LULD",
        q: "What is the Limit Up-Limit Down (LULD) plan?",
        a: "<p>A price band mechanism that prevents trades in NMS stocks outside a percentage band (<strong>5%, 10%, 20%, or dollar-based</strong> depending on tier and time of day) around the average price over the preceding 5 minutes. A 15-second limit state that doesn't resolve triggers a <strong>5-minute trading pause</strong>.</p>"
      },
      {
        tag: "Market-Wide Circuit Breakers",
        q: "At what S&P 500 declines do the three market-wide circuit breaker levels trigger?",
        a: "<p><strong>Level 1: 7%</strong>, <strong>Level 2: 13%</strong> — each triggers a 15-minute halt if hit before 3:25 p.m. ET. <strong>Level 3: 20%</strong> — halts trading for the remainder of the day, at any time.</p>"
      },
      {
        tag: "Locked/Crossed",
        q: "What is a locked market vs a crossed market, and why are they prohibited?",
        a: "<p><strong>Locked</strong> — bid equals offer across venues. <strong>Crossed</strong> — bid is higher than offer. Reg NMS Rule 610(d) requires trading centers to prevent members from displaying quotes that lock or cross other protected quotations, because they signal broken price discovery.</p>"
      },
      {
        tag: "Regulation SCI",
        q: "Who is subject to Regulation SCI and what is the core obligation?",
        a: "<p>Applies to \"SCI entities\" — exchanges, registered clearing agencies, plan processors, and large ATSs. They must maintain policies for capacity, integrity, resiliency, availability, and security of their systems, and must <strong>notify the SEC promptly</strong> of SCI events (systems disruptions, compliance issues, intrusions).</p>"
      },
      {
        tag: "Odd-Lot / Round-Lot",
        q: "Under the amended Reg NMS round-lot definition, how is round-lot size determined for a stock priced $500?",
        a: "<p>The SEC's 2020 Market Data Infrastructure amendments tier round lots by price: <strong>≤ $250 = 100 shares</strong>, <strong>$250.01–$1,000 = 40</strong>, <strong>$1,000.01–$10,000 = 10</strong>, <strong>&gt; $10,000 = 1</strong>. So a $500 stock is a <strong>40-share</strong> round lot. Odd-lot quotes better than the NBBO must also be disseminated.</p>"
      }
    ]
  },
  {
    id: "deck-f3",
    jobFunction: "F3 · Broker-Dealer Operations",
    title: "Clearance, Settlement & Books and Records",
    cards: [
      {
        tag: "T+1 Settlement",
        q: "When did the U.S. standard settlement cycle for most securities move to T+1, and under what rule?",
        a: "<p><strong>May 28, 2024</strong>, under amended <strong>SEC Rule 15c6-1</strong>. Covers most broker-to-broker transactions in equities, corporate/muni bonds, UITs, and ETFs. Options and government securities were already T+1; certain limited partnership interests may still be longer.</p>"
      },
      {
        tag: "Rule 15c6-1",
        q: "What transactions are excluded from Rule 15c6-1's standard settlement cycle?",
        a: "<p>Exempt from the T+1 default: <strong>exempted securities</strong> (Treasuries), <strong>municipal securities</strong> (though also T+1 by market convention), <strong>commercial paper/BAs</strong>, and transactions where the parties expressly agree to a different settlement date at the time of the trade (e.g., cash settlement, seller's option).</p>"
      },
      {
        tag: "Clearing · DTCC",
        q: "What are the roles of NSCC, DTC, and OCC within DTCC?",
        a: "<p><strong>NSCC</strong> — central counterparty for equities/corporates/munis; nets trades via CNS. <strong>DTC</strong> — central securities depository; holds securities in book-entry form and moves them via FAST. <strong>OCC</strong> — clears and guarantees all U.S. listed options (a separate SEC-registered clearing agency, jointly owned by exchanges, not DTCC).</p>"
      },
      {
        tag: "Rule 10b-10",
        q: "What must a customer confirmation under SEA Rule 10b-10 disclose, and when must it be sent?",
        a: "<p>At or before completion of the transaction (settlement date): <strong>trade date, security identity, quantity, price, capacity (agent vs principal), commission or markup for agency trades, yield for debt, and payment for order flow disclosure</strong>. For principal trades in equities under Rule 10b-10, riskless-principal markup must be shown.</p>"
      },
      {
        tag: "Statements · Rule 3150 / SEA 10b-10",
        q: "How often must customer account statements be sent under FINRA Rule 2231 / SEA 10b-10?",
        a: "<p><strong>Quarterly</strong> at minimum for accounts with a security position, money balance, or activity. Accounts with activity in a given month generally get a statement <strong>monthly</strong> for that month. Statements must show all positions, all activity, and SIPC coverage information.</p>"
      },
      {
        tag: "Books & Records · 17a-3",
        q: "Under SEA Rule 17a-3, list three records a broker-dealer must <em>make</em>.",
        a: "<p>Examples: <strong>blotters</strong> (daily record of purchases/sales, receipts/deliveries of securities, and cash), <strong>general ledger and customer ledgers</strong>, <strong>securities record</strong> (stock record), <strong>order tickets and trade confirmations</strong>, <strong>customer account records</strong>, and records of associated persons (U4 information).</p>"
      },
      {
        tag: "Books & Records · 17a-4 retention",
        q: "Give the three tiers of record retention under SEA Rule 17a-4.",
        a: "<p><strong>3 years</strong> (2 easily accessible) — order tickets, confirms, communications, exam records.</p><p><strong>6 years</strong> (2 easily accessible) — blotters, general ledgers, customer account records (measured from account close).</p><p><strong>Life of enterprise + 3 years</strong> — partnership/corporate charter, minute books, stock certificate books.</p>"
      },
      {
        tag: "Electronic Records · 17a-4(f)",
        q: "What are the storage-media requirements under Rule 17a-4(f) as amended in 2022?",
        a: "<p>Firms may use either (a) <strong>WORM (write-once, read-many)</strong> storage, or under the 2022 amendments, (b) an <strong>audit-trail system</strong> that maintains a complete time-stamped audit trail of original and modified records. A designated third party (D3P) or executive officer must have independent access.</p>"
      },
      {
        tag: "Prime Brokerage / Ex-Clearing",
        q: "In a prime brokerage arrangement, what is the executing broker's role vs the prime broker's role?",
        a: "<p>The <strong>executing broker</strong> takes the customer's order and executes it, then \"gives up\" the trade to the prime broker. The <strong>prime broker</strong> settles, clears, provides financing/margin, and consolidates recordkeeping. The customer typically maintains one master account at the prime broker.</p>"
      },
      {
        tag: "Reg SHO · Threshold Securities",
        q: "What defines a Reg SHO \"threshold security\" and what triggers the list?",
        a: "<p>Equity securities with an aggregate fail-to-deliver position at a registered clearing agency of <strong>≥ 10,000 shares and ≥ 0.5% of shares outstanding</strong> for <strong>5 consecutive settlement days</strong>. Once listed, the mandatory close-out cycles under Rule 204 apply, and the security is watched daily until it falls off the list.</p>"
      }
    ]
  },
  {
    id: "deck-f4",
    jobFunction: "F4 · Credit Regulation & Capital",
    title: "Reg T, Margin & Net Capital",
    cards: [
      {
        tag: "Reg T",
        q: "What is the Reg T initial margin requirement for equity purchases, and who sets it?",
        a: "<p><strong>50%</strong> of the purchase price, set by the <strong>Federal Reserve Board</strong> under the '34 Act. The customer must deposit initial margin within <strong>T+4</strong> (4 business days after trade). Failure results in a Reg T call and possible liquidation.</p>"
      },
      {
        tag: "Maintenance Margin",
        q: "What are FINRA Rule 4210 minimum maintenance margins for long and short equity positions?",
        a: "<p><strong>Long: 25%</strong> of current market value.</p><p><strong>Short: 30%</strong> of current market value (higher because losses on shorts are unlimited).</p><p>House requirements are usually higher; low-priced stocks are subject to floors (e.g., $2.50/share long, $5/share short for stocks under those prices).</p>"
      },
      {
        tag: "Pattern Day Trader",
        q: "How is a pattern day trader defined, and what are the minimum equity and buying power rules?",
        a: "<p>An account is a <strong>PDT</strong> if it executes <strong>4 or more day trades in 5 business days</strong>, and those day trades exceed <strong>6%</strong> of total trading activity in that period. Requires minimum equity of <strong>$25,000</strong>, and day-trading buying power is <strong>4× the maintenance margin excess</strong>. Falling below $25K restricts the account to closing transactions.</p>"
      },
      {
        tag: "Rule 15c3-1 · Tiers",
        q: "What are the minimum net capital tiers under SEA Rule 15c3-1?",
        a: "<p><strong>$250,000</strong> — carrying/clearing firms holding customer funds or securities.</p><p><strong>$100,000</strong> — introducing firms that receive but do not hold customer funds/securities.</p><p><strong>$50,000</strong> — introducing firms that promptly transmit funds and clear on a fully disclosed basis (variants).</p><p><strong>$5,000</strong> — firms that do not receive, hold, or owe funds or securities to customers.</p>"
      },
      {
        tag: "Rule 15c3-1 · Ratio",
        q: "What is the aggregate indebtedness to net capital limit, and when is early-warning triggered?",
        a: "<p>Aggregate indebtedness may not exceed <strong>15:1</strong> of net capital (the \"basic\" method); a firm in its first year is limited to <strong>8:1</strong>. Under Rule 17a-11, an <strong>early warning</strong> notice is required if AI/NC exceeds <strong>12:1</strong>, or under the alternative method if net capital falls below <strong>5%</strong> of aggregate debit items.</p>"
      },
      {
        tag: "Rule 15c3-3 · Reserve",
        q: "What is the customer reserve formula under Rule 15c3-3, and how often is it computed?",
        a: "<p>Firms compute <strong>credits owed to customers</strong> minus <strong>debits owed by customers</strong>; any net credit must be deposited in a <strong>Special Reserve Bank Account for the Exclusive Benefit of Customers</strong>. Computed <strong>weekly</strong> (as of the close of business Friday, deposited by the second business day) or <strong>monthly</strong> for smaller firms meeting the $250K/1% test.</p>"
      },
      {
        tag: "Rule 15c3-3 · Possession & Control",
        q: "What is the possession and control requirement of Rule 15c3-3?",
        a: "<p>A broker-dealer must maintain physical possession or control of all <strong>fully-paid</strong> and <strong>excess margin</strong> securities of customers — free of lien and located in a good control location (DTC, custodian bank, etc.). The firm must take prompt steps to reduce or obtain possession/control if a deficit arises.</p>"
      },
      {
        tag: "SIPA",
        q: "In a SIPA liquidation, how does SIPC advance funds to customers and what are the limits?",
        a: "<p>SIPC advances up to <strong>$500,000 per separate customer</strong>, of which no more than <strong>$250,000</strong> may be cash. Coverage is based on \"net equity\" as of the filing date. Missing securities are replaced in kind where practicable. SIPC does <em>not</em> cover market losses, futures, fixed annuities, or unregistered investment contracts.</p>"
      }
    ]
  },
  {
    id: "deck-f5",
    jobFunction: "F5 · General Supervision",
    title: "Rule 3110, WSPs & Registration Filings",
    cards: [
      {
        tag: "Rule 3110(a)",
        q: "What are the core elements of a supervisory system under FINRA Rule 3110(a)?",
        a: "<p>(1) <strong>Written supervisory procedures (WSPs)</strong>; (2) designation of a <strong>principal</strong> to supervise each area; (3) designation of an <strong>OSJ</strong> for each location that requires one; (4) qualified/registered principals with authority; (5) <strong>annual review</strong> of business; (6) assignment of each rep to a supervising principal; (7) reasonable efforts to determine principals are qualified.</p>"
      },
      {
        tag: "Rule 3110(b)",
        q: "What are the four content areas required in WSPs under 3110(b)?",
        a: "<p>WSPs must address: (1) <strong>supervision of registered reps</strong>, (2) <strong>review of transactions</strong>, (3) <strong>review of correspondence and internal communications</strong>, and (4) <strong>review of investment banking / securities business</strong>. WSPs must be kept current, and firms must document the identity of every person responsible for each supervisory task.</p>"
      },
      {
        tag: "Branch Inspections",
        q: "How often must a firm inspect an OSJ vs a non-OSJ branch vs a non-branch location under Rule 3110(c)?",
        a: "<p><strong>OSJ and supervising branches: at least annually.</strong></p><p><strong>Non-supervising branches: at least every 3 years.</strong></p><p><strong>Non-branch locations: on a regular periodic schedule</strong> — presumed 3 years unless a shorter cycle is warranted. Note the SEC's remote inspection pilot temporarily allows remote inspections through 2025 for eligible firms.</p>"
      },
      {
        tag: "OSJ Definition",
        q: "Under FINRA Rule 3110(f), what activities require a location to be designated an OSJ?",
        a: "<p>Order execution or market making; structuring public offerings or private placements; maintaining custody of customer funds/securities; final approval of new accounts; review and endorsement of customer orders; final approval of retail communications; supervising the activities of persons at one or more other branch offices.</p>"
      },
      {
        tag: "Correspondence · 3110(b)(4)",
        q: "What does Rule 3110(b)(4) require for review of correspondence and internal communications?",
        a: "<p>Firms must have <strong>risk-based supervisory procedures</strong> for reviewing incoming/outgoing correspondence and internal communications relating to the firm's investment banking or securities business. Review must be evidenced (initial + date, or system evidence). Firms may use lexicon-based sampling but must monitor effectiveness.</p>"
      },
      {
        tag: "Rule 3120",
        q: "What does FINRA Rule 3120 require, and how does it relate to Rule 3130?",
        a: "<p><strong>Rule 3120</strong> — a firm must <strong>annually test and verify</strong> that its supervisory procedures are reasonably designed to achieve compliance, and prepare a <strong>report</strong> for senior management.</p><p><strong>Rule 3130</strong> — the <strong>CEO must annually certify</strong> in writing that the firm has processes in place to establish, maintain, review, test, and modify the WSPs.</p>"
      },
      {
        tag: "Rule 3170 · Taping",
        q: "When does the FINRA \"taping rule\" (3170) apply to a firm?",
        a: "<p>When a firm has hired a specified percentage of registered persons from firms that were expelled or had their broker-dealer registration revoked. Thresholds depend on firm size (e.g., 40% for firms with 5–9 reps; 20% for 10–19; 10% for 20+). Triggered firms must <strong>tape record all telephone conversations</strong> between reps and existing/potential customers and retain the tapes.</p>"
      },
      {
        tag: "MSRB G-27",
        q: "What is MSRB Rule G-27, and how does it parallel FINRA 3110?",
        a: "<p>G-27 is the MSRB's <strong>supervision</strong> rule for municipal securities dealers. It requires WSPs, designation of principals, annual compliance meetings, branch inspections on the same OSJ/non-OSJ cadence, and correspondence review — mirroring FINRA 3110 for the muni side of the business.</p>"
      },
      {
        tag: "Form U4 Updates",
        q: "Within how many days must a Form U4 amendment be filed for a reportable event?",
        a: "<p><strong>30 days</strong> after the firm learns of the event. However, <strong>statutory disqualification events and customer complaints</strong> alleging theft/misappropriation or forgery must be reported <strong>within 10 business days</strong> via Rule 4530.</p>"
      },
      {
        tag: "Form U5 Filing",
        q: "When must a Form U5 be filed after a registered person is terminated, and how long to amend?",
        a: "<p>Filed within <strong>30 days</strong> of termination, with a copy delivered to the individual. Firms must file an <strong>amended U5</strong> within <strong>30 days</strong> of learning of facts that would have made the original U5 inaccurate or incomplete — this obligation continues indefinitely.</p>"
      },
      {
        tag: "Rule 4530",
        q: "What triggers a Rule 4530(a) firm disclosure, and what is the deadline?",
        a: "<p>Within <strong>30 calendar days</strong> after the firm knows/should know that it or an associated person: was subject to a written customer complaint involving theft/misappropriation/forgery, is subject to an SRO/regulatory action, was named in a criminal indictment/conviction, or was subject to certain civil litigations or arbitrations. Quarterly statistical reporting of written customer complaints is <strong>4530(d)</strong>.</p>"
      },
      {
        tag: "Rule 3270 · OBA",
        q: "What is required under FINRA Rule 3270 for an outside business activity?",
        a: "<p>Before engaging in an OBA, a registered person must give <strong>prior written notice</strong> to the firm. The firm must evaluate the OBA to determine whether it interferes with the person's duties or is viewed by customers as part of the firm's business, and may impose conditions or prohibit it.</p>"
      },
      {
        tag: "Rule 3280 · PST",
        q: "What is a private securities transaction and what does Rule 3280 require?",
        a: "<p>Any securities transaction outside the regular scope of the associated person's employment with the firm. The person must provide <strong>prior written notice</strong>. If compensated, the firm must <strong>approve or disapprove in writing</strong>; if approved, it must record the transaction on its books and supervise it as its own. Uncompensated PSTs require notice only, and the firm may impose conditions.</p>"
      },
      {
        tag: "Rule 3240",
        q: "Under FINRA Rule 3240, when may a registered rep borrow from or lend to a customer?",
        a: "<p>Only if the firm has WSPs permitting borrowing/lending, and one of five conditions is met: (1) immediate family, (2) financial institution customer engaged in lending, (3) two RRs at the same firm, (4) personal relationship outside the broker-customer relationship, or (5) business relationship outside. Notice/approval requirements depend on the category.</p>"
      },
      {
        tag: "Gifts · Rule 3220",
        q: "What is the annual limit on gifts under FINRA Rule 3220?",
        a: "<p><strong>$100 per person per year</strong> in aggregate. Excludes personal gifts (e.g., wedding), promotional items of nominal value, and legitimate business entertainment. Gifts must be recorded. MSRB G-20 mirrors this for munis.</p>"
      },
      {
        tag: "Annual Compliance Meeting",
        q: "Which rule requires an annual compliance meeting, and who must attend?",
        a: "<p>FINRA Rule <strong>3110(a)(7)</strong> requires each registered person to attend at least <strong>one compliance meeting per calendar year</strong>. May be delivered in person or by interactive electronic means with a mechanism to verify attendance and participation.</p>"
      },
      {
        tag: "Statutory Disqualification",
        q: "What events trigger statutory disqualification under Section 3(a)(39) of the '34 Act?",
        a: "<p>Felony or securities-related misdemeanor conviction in the prior <strong>10 years</strong>; SEC/SRO expulsion or suspension; injunctions; making a false statement on a regulatory filing; bar orders. Firms must file <strong>MC-400</strong> to seek FINRA approval to associate with an SD individual.</p>"
      },
      {
        tag: "Heightened Supervision",
        q: "When must a firm impose heightened supervision on an associated person?",
        a: "<p>When required by an MC-400 approval, a Letter of Acceptance/Waiver/Consent, or arbitration/litigation settlement. Also risk-based when the person has a pattern of complaints, prior disciplinary history, or exam failures. Written plan must be tailored, documented, and reviewed for effectiveness.</p>"
      },
      {
        tag: "Rule 3310 (supervision role)",
        q: "How does the AML compliance program under Rule 3310 intersect with the supervisory system?",
        a: "<p>Every firm must have an SAR-eligible AML program with: (1) written policies, (2) designated <strong>AMLCO</strong>, (3) <strong>independent annual testing</strong> (independent from AML functions, but may be an associated person), (4) ongoing training, and (5) risk-based CIP procedures. Findings feed into 3120/3130 supervisory testing.</p>"
      },
      {
        tag: "Communications Supervision",
        q: "Who must approve retail communications under Rule 2210(b)(1), and when?",
        a: "<p>A registered <strong>principal</strong> must approve each retail communication <strong>before the earlier of use or filing</strong> with FINRA. Exceptions include correspondence, communications posted on interactive electronic forums (subject to post-use review), and certain templated messages. Approval must be documented.</p>"
      }
    ]
  },
  {
    id: "deck-f6",
    jobFunction: "F6 · Investment Banking",
    title: "Offerings, Reg M, Research & IPO Allocations",
    cards: [
      {
        tag: "'33 Act · 4(a)(1)/(2)",
        q: "What do Sections 4(a)(1) and 4(a)(2) of the '33 Act exempt?",
        a: "<p><strong>4(a)(1)</strong> — transactions by <em>any person other than an issuer, underwriter, or dealer</em> (the exemption relied on for ordinary secondary trading).</p><p><strong>4(a)(2)</strong> — transactions by an <em>issuer</em> not involving any public offering (statutory private placement basis for Reg D).</p>"
      },
      {
        tag: "Reg D · 504",
        q: "What are the key parameters of Rule 504 of Reg D?",
        a: "<p>Offerings up to <strong>$10 million</strong> in a 12-month period. No specific investor sophistication requirement, but general solicitation is limited (permitted only in specific state-registered scenarios). Bad actor disqualification applies. Not available to '34 Act reporting companies, investment companies, or blank check issuers.</p>"
      },
      {
        tag: "Reg D · 506(b)",
        q: "What are the investor and solicitation rules for Rule 506(b)?",
        a: "<p>Unlimited dollar amount. Up to <strong>35 non-accredited but sophisticated</strong> investors plus unlimited <strong>accredited</strong> investors. <strong>No general solicitation or advertising.</strong> If any non-accredited investor participates, the issuer must deliver information similar to a registered offering. Form D filed within 15 days of first sale.</p>"
      },
      {
        tag: "Reg D · 506(c)",
        q: "What does Rule 506(c) permit that 506(b) does not?",
        a: "<p><strong>General solicitation and advertising</strong> — but <em>all</em> purchasers must be <strong>accredited investors</strong>, and the issuer must take <strong>reasonable steps to verify</strong> accredited status (review of tax returns, W-2s, brokerage statements, or written confirmation from a qualified third party).</p>"
      },
      {
        tag: "Reg A",
        q: "Compare Reg A Tier 1 and Tier 2 ceilings and ongoing reporting.",
        a: "<p><strong>Tier 1: up to $20 million</strong> in a 12-month period; subject to state blue-sky review; no ongoing reporting beyond a final Form 1-Z.</p><p><strong>Tier 2: up to $75 million</strong>; preempts state review for offering; requires <strong>audited</strong> financials and ongoing annual (1-K), semi-annual (1-SA), and current (1-U) reporting.</p>"
      },
      {
        tag: "Reg S",
        q: "What is Regulation S, and what are Category 1/2/3 distinguishing?",
        a: "<p>Reg S provides a safe harbor for <strong>offers and sales made outside the United States</strong>. Categories depend on issuer type: <strong>Cat 1</strong> — foreign issuers with no substantial U.S. market interest (least restrictive). <strong>Cat 2</strong> — reporting issuers (40-day distribution compliance period). <strong>Cat 3</strong> — non-reporting U.S. issuers (6-month/1-year DCP for debt/equity, most restrictive).</p>"
      },
      {
        tag: "Rule 144 · Holding",
        q: "What are the Rule 144 holding periods for restricted securities of reporting vs non-reporting issuers?",
        a: "<p><strong>Reporting issuer: 6 months</strong>. <strong>Non-reporting issuer: 1 year</strong>. Non-affiliates who satisfy the holding period may sell freely (subject to current public information for reporting-company non-affiliates until 12 months). Affiliates always face volume, manner-of-sale, notice (Form 144), and current-info requirements.</p>"
      },
      {
        tag: "Rule 144 · Volume",
        q: "What is the Rule 144 volume limit for affiliate sales in an exchange-listed security?",
        a: "<p>The greater of <strong>1% of outstanding shares</strong> or the <strong>average weekly trading volume during the 4 calendar weeks preceding</strong> the Form 144 filing, measured over any <strong>3-month</strong> period. Form 144 is required when the sale exceeds <strong>5,000 shares or $50,000</strong>.</p>"
      },
      {
        tag: "FINRA 5130",
        q: "Who is a \"restricted person\" ineligible to buy new issues under FINRA Rule 5130?",
        a: "<p>Broker-dealers, their associated persons, finders, fiduciaries acting on behalf of the managing underwriter, portfolio managers, and their immediate family members with material support. Firms must obtain a <strong>written representation of eligibility</strong> — good for <strong>12 months</strong>. Applies to <strong>equity IPOs only</strong> at the initial offering price.</p>"
      },
      {
        tag: "FINRA 5131",
        q: "What does FINRA Rule 5131 prohibit regarding IPO allocations?",
        a: "<p>Prohibits <strong>spinning</strong> (allocating IPO shares to executives/directors of current or prospective investment banking clients), <strong>quid pro quo</strong> allocations (in exchange for excessive commissions), and requires policies on <strong>flipping</strong>, <strong>market orders</strong> in new issues on the first day, and <strong>penalty bids</strong>. Applies to IPOs of equity securities.</p>"
      },
      {
        tag: "Reg M · Rule 101",
        q: "What does Reg M Rule 101 prohibit, and what is the \"restricted period\"?",
        a: "<p>Prohibits <strong>distribution participants</strong> (underwriters, brokers, dealers) from bidding for or purchasing the subject security during the restricted period. Restricted period is <strong>1 business day</strong> before pricing (ADTV ≥ $100K and public float ≥ $25M) or <strong>5 business days</strong> before pricing (smaller companies). Actively traded securities (ADTV ≥ $1M, float ≥ $150M) are exempt.</p>"
      },
      {
        tag: "Reg M · Rule 102",
        q: "Who does Reg M Rule 102 apply to, and how does it differ from Rule 101?",
        a: "<p>Rule 102 applies to <strong>issuers, selling security holders, and their affiliated purchasers</strong> during the same restricted period. There is <strong>no actively-traded exemption</strong> under 102 — insiders are always restricted. Rule 101 is for underwriters; Rule 102 is for issuers.</p>"
      },
      {
        tag: "Reg M · Rule 104",
        q: "What does Reg M Rule 104 permit and require regarding stabilization?",
        a: "<p>Permits <strong>stabilizing bids</strong> to facilitate an offering — but only at prices <strong>at or below the offering price</strong> and the current independent bid. Only <strong>one stabilizing bid</strong> at a time in the principal market. Must be disclosed in the prospectus and reported to the market center. Syndicate covering transactions and penalty bids are separately regulated.</p>"
      },
      {
        tag: "Reg M · Rule 105",
        q: "What does Reg M Rule 105 prohibit for follow-on/secondary offerings?",
        a: "<p>Prohibits purchasing offering securities from an underwriter/broker if the purchaser sold short the same security during the <strong>Rule 105 restricted period</strong> — <strong>the shorter of (i) 5 business days before pricing, or (ii) the period from filing of the registration statement to pricing</strong>. Aims to prevent manipulative shorting into a follow-on.</p>"
      },
      {
        tag: "Research Quiet Periods",
        q: "Under FINRA Rule 2241, what are the research quiet periods around IPOs and follow-ons?",
        a: "<p><strong>IPO: 10 calendar days</strong> after the offering date for managers/co-managers (formerly 25/40 days — reduced by the FAIR Act). <strong>Secondary offering: 3 calendar days</strong> after pricing for managers/co-managers. Booster-shot / expiration-of-lockup quiet periods (15 days before/after) were largely eliminated by later amendments.</p>"
      }
    ]
  },
  {
    id: "deck-f7",
    jobFunction: "F7 · Registration",
    title: "Form U4/U5, Qualification Exams & CE",
    cards: [
      {
        tag: "Form U4",
        q: "What is Form U4 used for, and what disclosures does it capture?",
        a: "<p>The <strong>Uniform Application for Securities Industry Registration</strong>. Filed via WebCRD to register an associated person with FINRA (and states/SROs). Captures identifying info, employment history (10 years), residential history (5 years), and <strong>Disclosure Questions</strong> covering criminal, regulatory, civil-judicial, customer complaint, termination, financial (bankruptcy/liens), and investigation matters.</p>"
      },
      {
        tag: "Form U5",
        q: "What is Form U5, and what termination types are recognized?",
        a: "<p>The <strong>Uniform Termination Notice</strong>, filed within <strong>30 days</strong> of termination. Termination types: <strong>Voluntary, Involuntary (Discharged), Permitted to Resign, Other, and Deceased</strong>. Full termination cancels registrations everywhere; partial terminations end registration with a particular SRO/state.</p>"
      },
      {
        tag: "Rule 1210",
        q: "Under Rule 1210, who must register with FINRA?",
        a: "<p>Every associated person <strong>engaged in the securities business</strong> of a member — including those actively involved in supervision, solicitation, or training of persons for those functions. Clerical/ministerial employees are exempt. Registration requires filing U4, fingerprints, and passing the appropriate qualification exams (SIE + at least one representative exam, plus principal exams as applicable).</p>"
      },
      {
        tag: "Series 24 vs 14 vs 27 vs 99",
        q: "Match the principal exams: Series 14, 24, 27, 99 — what does each qualify?",
        a: "<p><strong>Series 24</strong> — General Securities Principal (supervise most retail/institutional activities).</p><p><strong>Series 14</strong> — <em>Compliance Officer</em> (senior compliance function).</p><p><strong>Series 27</strong> — Financial and Operations Principal (FinOp) at carrying/clearing firms.</p><p><strong>Series 99</strong> — Operations Professional (covered operations functions).</p>"
      },
      {
        tag: "Fingerprinting · 17f-2",
        q: "What does SEA Rule 17f-2 require, and who is exempt?",
        a: "<p>Every <strong>partner, director, officer, and employee</strong> of a broker-dealer must be fingerprinted, with cards submitted to the FBI via a designated processor (usually FINRA). Exempt: persons not engaged in the sales or handling of securities/money and not having access to keeping records — but the firm must file a <strong>Notice of Exemption</strong>.</p>"
      },
      {
        tag: "Continuing Education",
        q: "What are the two components of continuing education, and when are they due?",
        a: "<p><strong>Regulatory Element</strong> — computer-based training on regulatory/compliance topics. As of <strong>January 2023</strong>, required <strong>annually by December 31</strong> for each registration held (formerly on 2nd anniversary and every 3 years thereafter).</p><p><strong>Firm Element</strong> — annual firm-designed training on products, strategies, and rules relevant to covered registered persons.</p>"
      },
      {
        tag: "MQP",
        q: "What is the Maintaining Qualifications Program (MQP)?",
        a: "<p>Effective March 2022, individuals who terminate registration may participate in MQP to <strong>keep qualification exams valid for up to 5 years</strong> (formerly only 2 years) by electing enrollment within 2 years of termination and completing annual CE. Regulatory Element must be completed each year of the 5-year period.</p>"
      },
      {
        tag: "Rule 1230 · Assoc Persons",
        q: "How does FINRA Rule 1230 define an \"associated person\" of a member?",
        a: "<p>A natural person engaged in the investment banking or securities business who is directly or indirectly controlling, controlled by, or under common control with a FINRA member, whether or not registered or compensated — includes sole proprietors, partners, officers, directors, and branch managers. This is broader than \"registered person.\"</p>"
      },
      {
        tag: "Disciplinary · 30-day",
        q: "When must an individual amend a U4 for a disciplinary or criminal event?",
        a: "<p>Firms and individuals must amend U4 <strong>within 30 days</strong> of learning of most reportable events. Certain matters — customer complaints alleging theft/forgery, and disciplinary actions triggering statutory disqualification — must be reported <strong>within 10 business days</strong> under Rule 4530. The firm is jointly responsible for timely amendments.</p>"
      }
    ]
  },
  {
    id: "deck-f8",
    jobFunction: "F8 · Sales Practice — Customer/Employee",
    title: "Reg BI, AML, Privacy & Senior Protection",
    cards: [
      {
        tag: "Reg BI · Four Obligations",
        q: "Name the four component obligations of Regulation Best Interest.",
        a: "<p><strong>Disclosure Obligation</strong> — written pre-trade disclosures (via Form CRS and other).</p><p><strong>Care Obligation</strong> — reasonable basis, customer-specific, and quantitative suitability.</p><p><strong>Conflict of Interest Obligation</strong> — identify and address; eliminate certain sales contests.</p><p><strong>Compliance Obligation</strong> — written policies and procedures reasonably designed to achieve compliance.</p>"
      },
      {
        tag: "Form CRS",
        q: "When must Form CRS be delivered to a retail investor?",
        a: "<p>Broker-dealers must deliver Form CRS <strong>at or before</strong>: (i) the earliest of recommending an account type, securities transaction, or investment strategy; (ii) opening a new account; or (iii) placing an order — whichever comes first. Dual registrants deliver one combined CRS. Updates delivered within <strong>30 days</strong> of a material change.</p>"
      },
      {
        tag: "AML · Rule 3310",
        q: "What are the five pillars of an AML program under FINRA Rule 3310?",
        a: "<p>(1) <strong>Written policies and procedures</strong> reasonably designed to detect/report suspicious activity; (2) designated <strong>AML Compliance Officer</strong>; (3) <strong>independent annual testing</strong> (may be biennial for firms not engaged in customer business); (4) <strong>ongoing training</strong>; (5) risk-based procedures for conducting <strong>ongoing CDD</strong> (beneficial ownership, customer risk profile).</p>"
      },
      {
        tag: "CIP",
        q: "What information must be collected under the Customer Identification Program (CIP)?",
        a: "<p>For each customer: <strong>name, date of birth (individuals), address, and taxpayer ID</strong>. Firms must verify identity within a reasonable time — through documents (government ID) or non-documentary means. CIP is required by Section 326 of the USA PATRIOT Act and implemented via joint FinCEN/SEC rules.</p>"
      },
      {
        tag: "SAR",
        q: "When must a broker-dealer file a Suspicious Activity Report (SAR)?",
        a: "<p>Within <strong>30 calendar days</strong> of initial detection of a suspicious transaction, if the transaction involves at least <strong>$5,000</strong> in aggregate funds/other assets. Extension of 30 days if no suspect identified. SARs are strictly confidential and must be retained for <strong>5 years</strong>.</p>"
      },
      {
        tag: "CTR",
        q: "When must a Currency Transaction Report (CTR) be filed?",
        a: "<p>For any <strong>cash</strong> transaction (or aggregated same-day transactions by/for one person) exceeding <strong>$10,000</strong>. Filed with FinCEN via BSA E-Filing within <strong>15 days</strong> of the transaction. Structuring to evade CTR filing is itself illegal.</p>"
      },
      {
        tag: "Penny Stock · 15g-2",
        q: "What is required under SEC Rule 15g-2 before a penny stock recommendation?",
        a: "<p>Firms must deliver a standardized <strong>risk disclosure document</strong> and receive a signed and dated acknowledgment from the customer <strong>before</strong> executing the first penny stock transaction. Penny stocks are generally equity securities under <strong>$5</strong> not listed on a national exchange.</p>"
      },
      {
        tag: "Penny Stock Suitability",
        q: "What does Rule 15g-9 require in addition to 15g-2?",
        a: "<p>For a non-established customer, the broker must (i) approve the customer's account for penny stock transactions based on a <strong>suitability determination</strong>, (ii) obtain a <strong>signed suitability agreement</strong>, and (iii) deliver the agreement at least <strong>2 business days before</strong> the first transaction. Established customers (≥ 1 year account or 3+ prior penny stock trades in unrelated issuers) are exempt.</p>"
      },
      {
        tag: "Reg S-P",
        q: "What are the initial and annual privacy notice requirements under Reg S-P?",
        a: "<p>Firms must deliver an <strong>initial privacy notice</strong> at the time a customer relationship is established, and <strong>annually thereafter</strong> (annual notice exception if no changes and firm shares only under 15 U.S.C. 6802(e) exceptions). Customers must be given an <strong>opt-out</strong> right for information shared with non-affiliated third parties.</p>"
      },
      {
        tag: "Reg S-P · Safeguards",
        q: "What did the SEC's 2024 amendments to Reg S-P add?",
        a: "<p>Amended firms must adopt a written <strong>incident response program</strong> including procedures to <strong>notify affected individuals</strong> within <strong>30 days</strong> of determining unauthorized access to sensitive customer information is reasonably likely to occur or has occurred. Also extended safeguards and disposal rules to <strong>transfer agents</strong>.</p>"
      },
      {
        tag: "FINRA 2165",
        q: "What does FINRA Rule 2165 permit regarding specified adults?",
        a: "<p>Permits a member to place a <strong>temporary hold</strong> on a disbursement of funds or securities (and, since 2022, on a <strong>securities transaction</strong>) when there is a reasonable belief of <strong>financial exploitation</strong> of a specified adult (≥ 65, or ≥ 18 with impairment). Initial hold up to <strong>15 business days</strong>, extendable by <strong>10 business days</strong> if the firm's internal review continues. Notice to trusted contact and account holders required within 2 business days.</p>"
      },
      {
        tag: "FINRA 4512 · Trusted Contact",
        q: "What is required for a trusted contact person under FINRA Rule 4512?",
        a: "<p>At account opening or update, firms must make <strong>reasonable efforts</strong> to obtain a trusted contact (name, contact info) for each non-institutional account. Written disclosure must inform the customer that the firm may contact the trusted contact regarding health, current contact info, or possible financial exploitation.</p>"
      },
      {
        tag: "FINRA 2090 · KYC",
        q: "What does FINRA Rule 2090 (Know Your Customer) require?",
        a: "<p>Every member must use <strong>reasonable diligence</strong>, in regard to the <strong>opening and maintenance</strong> of every account, to know the essential facts about every customer and the authority of each person acting on behalf of the customer. \"Essential facts\" are those needed to service the account, act on special handling instructions, understand authority, and comply with laws.</p>"
      },
      {
        tag: "FINRA 2111 · Suitability",
        q: "What are the three main components of the FINRA 2111 suitability obligation (for non-retail customers)?",
        a: "<p><strong>Reasonable-basis</strong> — the recommendation is suitable for at least some investors. <strong>Customer-specific</strong> — suitable for this particular customer based on their profile. <strong>Quantitative</strong> — a series of recommendations, even if individually suitable, is not excessive in the aggregate (turnover, cost-equity, in-and-out). For retail customers, Reg BI's Care Obligation supersedes.</p>"
      },
      {
        tag: "OFAC",
        q: "What is a firm's OFAC screening obligation?",
        a: "<p>Firms must screen customers and transactions against the <strong>Specially Designated Nationals (SDN)</strong> list and other sanctions programs administered by the U.S. Treasury's Office of Foreign Assets Control. Blocked property must be reported to OFAC within <strong>10 business days</strong>. This is separate from BSA/AML but typically integrated with the AML program.</p>"
      },
      {
        tag: "Elder / Discretion 3260",
        q: "Under FINRA Rule 3260, what is needed to exercise discretion in a customer account?",
        a: "<p>Written <strong>prior authorization</strong> from the customer <strong>and</strong> written acceptance of the account as discretionary by the member. Time and price discretion (\"not held\") for a specific order given on the same day is exempt from the written authorization requirement. Discretionary accounts must be <strong>reviewed frequently</strong> by a designated principal.</p>"
      }
    ]
  },
  {
    id: "deck-f9",
    jobFunction: "F9 · Sales Practice — Solicitations",
    title: "Rule 2210 Communications, Testimonials & Telemarketing",
    cards: [
      {
        tag: "Rule 2210 · Categories",
        q: "What are the three communication categories under FINRA Rule 2210?",
        a: "<p><strong>Retail communication</strong> — any written communication distributed or made available to <strong>more than 25 retail investors within 30 calendar days</strong>.</p><p><strong>Correspondence</strong> — written communication to 25 or fewer retail investors in 30 days.</p><p><strong>Institutional communication</strong> — written communication distributed only to <strong>institutional investors</strong>. Requires policies for supervision but not principal pre-approval.</p>"
      },
      {
        tag: "2210 · Principal Approval",
        q: "Which communications require principal pre-approval, and which are exempt?",
        a: "<p><strong>Retail communications: pre-approved by a principal before the earlier of use or filing</strong>, subject to exemptions (e.g., posts on interactive electronic forums, previously-filed templates, some research).</p><p><strong>Correspondence and institutional communications: subject to supervision and review under Rule 3110, but not pre-approval</strong> (unless they make a financial or investment recommendation and are subject to specific rules).</p>"
      },
      {
        tag: "2210 · Filing · New Member",
        q: "What are the filing requirements for a new member firm under Rule 2210(c)(1)?",
        a: "<p>For its <strong>first year</strong> of FINRA membership, a firm must file retail communications with the Advertising Regulation Department <strong>at least 10 business days before first use</strong>. After the first year, most retail communications may be filed <strong>within 10 business days of first use</strong> unless a specific pre-use filing category applies.</p>"
      },
      {
        tag: "2210 · Pre-Use Filing",
        q: "Which types of retail communications require pre-use filing regardless of firm age?",
        a: "<p>Retail communications concerning: <strong>registered mutual funds/ETFs</strong> that include self-created rankings; <strong>bond mutual fund volatility ratings</strong>; <strong>security futures</strong>; and (for firms in their first year) all retail communications. Options-related retail communications are subject to <strong>pre-use filing under Rule 2220</strong>.</p>"
      },
      {
        tag: "2210 · Testimonials",
        q: "What does Rule 2210(d)(6) require for testimonials in retail communications?",
        a: "<p>If a testimonial concerns a technical aspect of investing, the person must have knowledge to form a valid opinion. Firms must clearly and prominently disclose: (1) that the testimonial <strong>may not be representative</strong> of others' experiences, (2) it is <strong>no guarantee of future performance</strong>, and (3) if <strong>more than $100 was paid</strong>, that fact. The SEC's 2020 Marketing Rule (for RIAs) is separate.</p>"
      },
      {
        tag: "2210 · Content Standards",
        q: "What are the content standards under Rule 2210(d)?",
        a: "<p>Communications must be <strong>fair and balanced</strong>, provide a sound basis for evaluating the facts, and must <strong>not omit material facts</strong>, contain false/exaggerated/misleading statements, project performance, or predict future performance (with limited exceptions for hypothetical illustrations and target date fund glide paths). Must clearly identify the firm's name.</p>"
      },
      {
        tag: "MSRB G-21",
        q: "How does MSRB Rule G-21 differ from FINRA 2210 for municipal advertising?",
        a: "<p>G-21 governs <strong>municipal securities advertisements</strong>. Requires principal approval before first use, applies similar fair and balanced standards, and has specific rules for <strong>professional advertisements</strong>, <strong>product advertisements</strong>, and <strong>municipal fund security advertisements</strong> (e.g., 529 plans). Performance data for 529s has specific standardized presentation requirements.</p>"
      },
      {
        tag: "Rule 3230 · Telemarketing",
        q: "What are the calling-time and Do-Not-Call requirements under FINRA Rule 3230?",
        a: "<p>Cold calls to residences may only be made between <strong>8:00 a.m. and 9:00 p.m. local time</strong> at the called party's location. Firms must maintain a firm-specific DNC list, and must <strong>scrub against the National DNC Registry at least every 31 days</strong>. Must promptly disclose caller's name, firm, and purpose.</p>"
      },
      {
        tag: "3230 · Established Business Relationship",
        q: "How does an \"established business relationship\" (EBR) affect DNC obligations?",
        a: "<p>A firm may call a person on the National DNC list if there is an EBR — a transaction within the past <strong>18 months</strong>, or an inquiry/application within the past <strong>3 months</strong>. The EBR is terminated by the customer's DNC request. Existing customer exception does <em>not</em> apply to persons on the firm-specific DNC list.</p>"
      },
      {
        tag: "Prospectus Delivery",
        q: "Under the '33 Act, when must a final prospectus be delivered in connection with a registered secondary offering?",
        a: "<p>For a <strong>listed</strong> issuer, dealers generally rely on the <strong>access-equals-delivery</strong> rule (Rule 172) — filing the prospectus with the SEC satisfies delivery. For an IPO, prospectus delivery obligations continue for <strong>25 days</strong> after effectiveness for listed offerings, and longer for OTC offerings (40/90 days depending on status).</p>"
      }
    ]
  }
];

// Also export for Node-based verification.
if (typeof module !== "undefined" && module.exports) {
  module.exports = window.FLASHCARD_DECKS;
}
