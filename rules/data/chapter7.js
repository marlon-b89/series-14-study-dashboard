// Chapter 7 – Trade Reporting
window.CHAPTER_7 = {
  id: 7,
  title: "Trade Reporting",
  subtitle: "ACT/TRF/ORF equity trade reporting, ADF, OTC reporting, TRACE for fixed income, Consolidated Audit Trail (CAT), clearly erroneous transactions, and short interest reporting",
  sections: [
    {
      name: "ACT Technology Platform and Trade Reporting Facilities",
      rules: [
        {
          id: "act-technology-platform",
          name: "ACT (Automated Confirmation Transaction) Technology Platform",
          category: "FINRA Rule",
          language: "FINRA rules require the reporting of transactions in domestic and foreign equity securities. Transactions in OTC equity securities are reported to the OTC Reporting Facility (ORF). Transactions in Nasdaq-listed and other exchange-listed securities (NYSE or AMEX) that occur over-the-counter are reported to the FINRA/Nasdaq Trade Reporting Facility (TRF). Both the ORF and TRF make use of the Nasdaq ACT Technology Platform. The TRF and ORF are open from 8:00 a.m. to 8:00 p.m. ET.",
          concept: "The ACT platform is the reporting backbone. Three channels: TRF for listed-security OTC trades, ORF for pure OTC equity trades, and ADF for ADF-eligible securities. Each facility is a separate reporting service that contracts with Nasdaq for ACT platform use.",
          parameters: [
            "TRF: reports OTC transactions in Nasdaq-listed and other exchange-listed (NYSE/AMEX) securities",
            "ORF: reports transactions in OTC equity securities that are NOT listed on Nasdaq or an exchange",
            "ADF: reports ADF-eligible securities (NMS securities only); open 8:00 a.m. to 6:30 p.m. ET",
            "TRF and ORF hours: 8:00 a.m. to 8:00 p.m. ET",
            "Neither the TRF nor ORF is an order-execution system — trades are already negotiated before entry",
            "NYSE floor transactions are reported by the exchange to the Consolidated Tape (not the TRF or ORF)"
          ],
          exceptions: [
            "Foreign security OTC transactions are excluded if executed on and reported through a foreign securities exchange, or executed OTC and reported to a foreign regulator",
            "If a foreign OTC trade is not reported overseas, it must be reported to the ORF within 10 seconds"
          ],
          examTip: "Keep the three facilities straight: TRF = listed securities traded OTC; ORF = pure OTC equity securities; ADF = NMS securities using private connectivity. The TRF is NOT a NYSE reporting system — NYSE reports to the Consolidated Tape directly."
        },
        {
          id: "trf-reporting-obligations",
          name: "TRF Market-Maker and Order-Entry Obligations",
          category: "FINRA Rule",
          language: "Market makers are required to report to the TRF all OTC transactions in Nasdaq Global Select Market, Nasdaq Global Market, Nasdaq Capital Market, and CQS issues within 10 seconds during applicable hours, and enter trade details using the market-maker (MM) function on the Nasdaq Workstation. Order-entry firms must either enter a version of the trade within 20 minutes using the OE Browse Function, accept the market-maker trade entry within 20 minutes, or decline an incorrect entry to cancel it. To avoid double counting between two market makers, the buying market maker reports using the order-entry function as a non-reporting principal.",
          concept: "Reporting responsibility is divided between the market-maker side (MM function, reports to Tape) and the order-entry side (OE function, validates or accepts within 20 minutes). Once matched, the trade is locked in for clearing.",
          parameters: [
            "Market maker: report to TRF within 10 seconds using MM function",
            "Order-entry firm: enter trade version or accept MM entry within 20 minutes using OE Browse Function",
            "When two market makers trade: buying MM uses OE function as non-reporting principal to avoid double counting",
            "Only MM function data is reported to Nasdaq (or SIAC for listed stocks) for Tape dissemination",
            "After both sides match, trade is locked in for clearing",
            "Trades not reported within 10 seconds must be reported as promptly as possible and carry the .Z identifier plus the time of transaction",
            "If ACT platform is unavailable due to service or transmission problems, trade must be reported by phone to TRF Operations Department"
          ],
          exceptions: [],
          examTip: "Market-maker side uses MM function and is the only side reported to the Tape. Order-entry side uses OE function and has 20 minutes to accept or decline. The 10-second clock is for the MM side; the 20-minute clock is for the OE side."
        },
        {
          id: "trf-reporting-windows",
          name: "TRF / ORF Reporting Windows — Time-of-Day Rules",
          category: "FINRA Rule",
          language: "OTC transactions in Nasdaq-listed and other exchange-listed securities must be reported to the TRF within 10 seconds during normal market hours (9:30 a.m. to 4:00 p.m.). For trades outside normal hours, reporting requirements depend on the exact time of execution: midnight to 8:00 a.m. trades must be reported by 8:15 a.m. using the .T modifier (or .U if late); 8:00 to 9:30 a.m. trades within 10 seconds with .T (or .U if late); 4:00 to 8:00 p.m. within 10 seconds with .T (or .U if late); 8:00 p.m. to midnight reported T+1 by 8:15 a.m. designated as/of.",
          concept: "Reporting windows and trade modifiers (.T, .U, .Z, as/of) identify the timing and lateness of reports for regulatory audit purposes. The 10-second standard applies during all open-system hours; different late modifiers distinguish normal-hours late (.Z) from extended-hours late (.U).",
          parameters: [
            "Midnight to 8:00 a.m.: report to TRF by 8:15 a.m. same day, designated .T; if after 8:15 a.m., use .U modifier",
            "8:00 a.m. to 9:30 a.m.: report within 10 seconds, designated .T; if late, use .U modifier",
            "9:30 a.m. to 4:00 p.m. (normal hours): report within 10 seconds; if late, designated .Z",
            "4:00 p.m. to 8:00 p.m.: report within 10 seconds, designated .T; if late, use .U modifier",
            "8:00 p.m. to midnight: report T+1 by 8:15 a.m., designated as/of with .T modifier; if not by 8:15 a.m., use .U modifier",
            "Cancelled trades executed during normal hours and cancelled at or before 4:00 p.m.: report within 10 seconds",
            "Cancelled trades executed during normal hours, cancelled 4:00 p.m. to 8:00 p.m.: best effort by 8:00 p.m.",
            "Cancelled trades executed during normal hours, cancelled after 8:00 p.m.: report by 8:00 p.m. next business day"
          ],
          exceptions: [],
          examTip: "During normal market hours (9:30-4:00), a late report uses .Z. Outside normal hours, a late report uses .U. Trades from 8:00 p.m. to midnight are always T+1 (as/of). The 10-second rule applies throughout the TRF's open hours (8:00 a.m. to 8:00 p.m.)."
        },
        {
          id: "trf-reporting-exemptions",
          name: "Transactions Not Required to Be Reported to TRF",
          category: "FINRA Rule",
          language: "The following transactions are not required to be reported to the TRF: (1) transactions reported automatically by another system such as the Nasdaq Market Center Execution System; (2) transactions that are part of primary or secondary distribution private placements; (3) transactions in which the buyer and seller agreed to a price substantially unrelated to the current market price (e.g., a gift); (4) purchases or sales related to the exercise of an option or convertible at a pre-established price not related to market value; and (5) purchases of securities off the floor of an exchange pursuant to a tender offer.",
          concept: "These exclusions prevent double-counting and exempt non-market-price transactions from Tape reporting requirements.",
          parameters: [
            "Auto-reported trades (Nasdaq Market Center Execution System) are already reported",
            "Primary or secondary distribution private placements are excluded",
            "Gift transfers and similar non-arm's-length transactions at non-market prices are excluded",
            "Option or convertible exercises at pre-established (non-market) prices are excluded",
            "Off-floor tender offer purchases are excluded"
          ],
          exceptions: [],
          examTip: "A transaction at a price substantially unrelated to the current market (e.g., gifting shares) does not need to be reported to the TRF. This is a frequently tested exception. Contrast with normal secondary market trades, which must always be reported."
        },
        {
          id: "who-reports-trf",
          name: "Which Firm Reports to TRF or ORF",
          category: "FINRA Rule",
          language: "To avoid double counting, the transaction is reported to the TRF or ORF by only one side of the trade. In a transaction between two member firms, the executing party is required to report. The executing party is the member firm that received an order for handling or execution (or was presented an order against its quote) and did not reroute the order. If two firms meet this definition (e.g., a negotiated phone transaction), the selling firm is required to report. In a transaction between a member firm and a non-member or customer, only the member firm reports.",
          concept: "One-side reporting prevents double-counting on the Tape. The executing party has primary responsibility; if both qualify, the seller reports. ECNs and ATSs are defined as the executing party when they received and executed the order.",
          parameters: [
            "Two member firms: executing party reports; if both qualify, the selling firm reports",
            "Member firm vs. non-member or customer: member reports",
            "ATS/ECN that received and executed the order: ECN is the executing party and reports",
            "Riskless principal: one leg reported to the FINRA facility for public dissemination; other leg as clearing-only (not Tape-reported)"
          ],
          exceptions: [],
          examTip: "When two member firms execute a negotiated phone trade, the SELLER reports. If an ECN executes the trade, the ECN is the reporting party. The member always reports when the counterparty is a customer or non-member."
        },
        {
          id: "trade-processing-methods",
          name: "Trade Reporting and Processing Methods",
          category: "FINRA Rule",
          language: "Acceptable methods for trade reporting and processing through FINRA facilities: (1) Trade by Trade Match — both parties submit data and the system performs an online match; (2) Trade Acceptance — reporting party enters its version and contraparty accepts or declines within 20 minutes (declined trades are purged at end of trade date); (3) Aggregate Volume Match — batch comparison at end of trade date for uncompared trades; (4) T+N — used for next-day clearing, submitted until 5:15 p.m. each business day.",
          concept: "Multiple methods accommodate different execution and clearing arrangements. Step-out and give-up arrangements allow trade allocation between executing and clearing firms. A clearing step-out must be reported to the same FINRA facility as the original Tape report.",
          parameters: [
            "Trade by Trade Match: real-time bilateral submission",
            "Trade Acceptance: reporting party enters; other side accepts or declines within 20 minutes; declined trades purged at end of trade date",
            "Aggregate Volume Match: end-of-day batch for uncompared trades",
            "T+N: next-day clearing, submitted by 5:15 p.m.",
            "Give-up: executing broker submits trades to TRF on behalf of a participant broker-dealer under a written agreement",
            "Step-out: method to allocate all or part of a transaction to another broker-dealer for clearing; must be reported to the same FINRA facility as original trade report",
            "Riskless principal exception: one leg to FINRA facility (public), other leg as clearing-only"
          ],
          exceptions: [
            "A clearing-only (non-Tape) report cannot be submitted to a different FINRA facility than the one that received the original Tape report"
          ],
          examTip: "Step-outs must go to the same facility as the original Tape report — a firm cannot step out through the TRF if the original was reported to the exchange. The T+N method has a 5:15 p.m. submission cutoff. Declined trade acceptances are purged at end of trade date processing."
        }
      ]
    },
    {
      name: "ADF Reporting and OTC Equity Securities Reporting",
      rules: [
        {
          id: "adf-reporting",
          name: "Alternate Display Facility (ADF) Reporting",
          category: "FINRA Rule",
          language: "The ADF is a quotation system that also provides reporting services. ADF-eligible securities include Nasdaq Global Market, Nasdaq Capital Market, Nasdaq Convertible Debt Securities, and other exchange-listed securities trading over-the-counter (CQS securities). ADF users include market makers seeking an alternative to the Nasdaq Market Center Execution System and ECNs lacking market-maker status. ADF hours are 8:00 a.m. to 6:30 p.m. ET.",
          concept: "The ADF is both a quotation display and trade reporting system; execution is handled by private connectivity providers external to the ADF. The ADF uniquely permits three-party trade entries, simplifying riskless principal and ECN subscriber reporting.",
          parameters: [
            "ADF hours: 8:00 a.m. to 6:30 p.m. ET (contrast with TRF/ORF: 8:00 a.m. to 8:00 p.m.)",
            "ADF-eligible: Nasdaq Global Market, Nasdaq Capital Market, Nasdaq Convertible Debt, CQS exchange-listed OTC securities",
            "Three-party trade option available on ADF (not on TRF or ORF)",
            "ADF comparison service: compares ADF participant trade data, submits locked-in trades to DTCC, transmits to securities information processor for public dissemination",
            "Reporting windows for ADF-eligible securities mirror TRF except the 4:00-6:30 p.m. window (not 4:00-8:00 p.m.)",
            "Trades from 6:30 p.m. to midnight: reported T+1 by 8:15 a.m., designated as/of with .T; if after 8:15 a.m., use .U modifier"
          ],
          exceptions: [],
          examTip: "ADF closes at 6:30 p.m. — 90 minutes earlier than the TRF/ORF. The after-hours window from 4:00-6:30 p.m. requires .T; there is no ADF trading window from 6:30-8:00 p.m. (those trades go T+1). The ADF's three-party trade entry is its unique feature not shared by TRF or ORF."
        },
        {
          id: "orf-otc-equity-reporting",
          name: "OTC Reporting Facility (ORF) — OTC Equity Securities",
          category: "FINRA Rule",
          language: "Industry rules require trade reporting of transactions in OTC equity securities, defined as equity securities for which real-time trade reporting is not otherwise required — any equity security not listed on Nasdaq or a national exchange. OTC transactions from 9:30 a.m. to 4:00 p.m. must be reported to the ORF within 10 seconds of execution. An OTC market maker is a broker-dealer that holds itself out as a market maker by entering proprietary quotations or indications of interest in any interdealer quotation medium (e.g., the OTC Markets Group system). The ORF uses the ACT Technology Platform.",
          concept: "The ORF captures OTC equity trades not covered by the TRF or ADF — primarily Pink Sheets and OTC Bulletin Board stocks. Reporting applies regardless of whether the security appears on any quotation medium. All transactions in Rule 144A restricted equity securities must also be reported to the ORF.",
          parameters: [
            "OTC equity security: equity not listed on Nasdaq or a national exchange",
            "Includes regional exchange-listed securities not eligible for the Consolidated Tape",
            "Rule 144A restricted equity securities must also be reported to the ORF",
            "Rule 144A trades from midnight to 8:00 p.m.: report on same business day",
            "Rule 144A trades from 8:00 p.m. to midnight: report T+1, designated as/of",
            "Reporting windows same as TRF except ORF OTC securities use .Z or .SLD for normal-hours late trades"
          ],
          exceptions: [
            "Primary or secondary distributions exempt",
            "Private placements exempt",
            "Transactions at prices substantially unrelated to current market (gifts) exempt",
            "Option or convertible exercises at pre-established non-market prices exempt",
            "Foreign OTC equities reported to a foreign exchange or foreign regulator are exempt"
          ],
          examTip: "The ORF is for pure OTC (non-exchange, non-Nasdaq) equities. The late modifier for OTC normal-hours late trades is .Z or .SLD — note that .SLD is unique to ORF and not used in TRF reporting. Always check: if there is any foreign exchange reporting, no U.S. reporting is required."
        }
      ]
    },
    {
      name: "Consolidated Audit Trail (CAT)",
      rules: [
        {
          id: "cat-overview-sec-rule-613",
          name: "Consolidated Audit Trail (CAT) — SEC Rule 613 / FINRA Rule 6800 Series",
          category: "SEC Rule",
          language: "SEC Rule 613 requires an SRO to implement compliance rules concerning the Consolidated Audit Trail. FINRA created the 6800 Series rule to ensure compliance. CAT is a central repository that receives, consolidates, and retains data over the lifecycle of trades and orders for all eligible securities. Eligible securities include NMS stocks, listed options, and OTC equity securities. Exchanges, SROs, and broker-dealers are required to submit order information to CAT each trading day.",
          concept: "CAT replaced the Order Audit Trail System (OATS), which had limitations and exemptions exposed by the 2010 Flash Crash. CAT covers all order lifecycle events (origination, routing, modification, cancellation, execution) for NMS stocks, listed options, and OTC equity securities. Unlike OATS, CAT has no exemptions and requires proprietary and market-making order reporting.",
          parameters: [
            "Eligible securities: NMS stocks, listed options, OTC equity securities",
            "Required reporters: all U.S. exchanges, ATSs, and SRO-registered broker-dealers",
            "No exemptions from reporting (unlike OATS)",
            "Includes proprietary and market-making orders (not required under OATS)",
            "Broker-dealers submit significant customer account information: name, address, year of birth, Large Trader ID",
            "CAT system accepts submissions 24 hours per day, 7 days per week (except announced scheduled maintenance)"
          ],
          exceptions: [],
          examTip: "CAT vs. OATS: CAT has NO exemptions and requires proprietary/market-making order reporting; OATS had both. CAT was mandated by SEC Rule 613 in response to the 2010 Flash Crash. FINRA implemented CAT through the 6800 Series rules."
        },
        {
          id: "cat-rule-6830-industry-member-reporting",
          name: "FINRA Rule 6830 — Industry Member CAT Reporting Data",
          category: "FINRA Rule",
          language: "FINRA requires its members to report detailed information to the central CAT repository, including: (1) the original receipt or origination of an order; (2) the routing of an order; (3) the receipt of an order that has been routed; (4) whether the order has been modified or cancelled; and (5) whether the order has been executed, in whole or in part. Recorded Industry Member Data must be reported by 8:00 a.m. ET on the trading day following the day the member records such data. Received Industry Member Data must be reported by 8:00 a.m. ET on the trading day following the day the member receives such data.",
          concept: "Full order-lifecycle reporting: CAT captures every event from order origination through final disposition. All data must reach the CAT repository by 8:00 a.m. ET next trading day. Error corrections are due by 8:00 a.m. ET on T+3.",
          parameters: [
            "Reportable events: order origination, routing, receipt of routed order, modification, cancellation, full or partial execution",
            "Deadline: 8:00 a.m. ET on next trading day for both recorded and received data",
            "Voluntary early reporting permitted before the 8:00 a.m. deadline",
            "Error corrections: corrected data must be submitted by 8:00 a.m. ET on T+3 (third business day after trade date)"
          ],
          exceptions: [],
          examTip: "Two CAT deadlines to memorize: regular data due by 8:00 a.m. ET next trading day (T+1); error corrections due by 8:00 a.m. ET on T+3. Any report received after the deadline is considered late."
        },
        {
          id: "cat-customer-account-reporting",
          name: "CAT Customer and Account Identification — CCID and FDID",
          category: "FINRA Rule",
          language: "Customers are represented by their CAT Customer ID (CCID), which is assigned by FINRA to each customer based on the customer's Tax ID number (e.g., Social Security number). Trading accounts are represented by a Firm Designated ID (FDID), which is a unique identifier each firm creates and assigns to each trading account. A customer can have more than one trading account, and a trading account can have more than one customer. Each firm must use the same FDID across all CAT reporting vendors for the same trading account.",
          concept: "The CCID enables regulators to identify a customer across multiple broker-dealers; the FDID enables firms to consolidate all activity for a single trading account regardless of reporting vendor. The FDID must be reported on each new order submitted to CAT.",
          parameters: [
            "CCID: FINRA-assigned, based on customer Tax ID (SSN for individuals); identifies a customer across all broker-dealers",
            "FDID: firm-created unique identifier for each trading account; must be unique across all vendors the firm uses",
            "A customer can have multiple trading accounts (multiple FDIDs)",
            "A trading account can have multiple customers",
            "FDID must be reported on every new order submitted to CAT",
            "FDIDs can represent both firm accounts and customer accounts"
          ],
          exceptions: [],
          examTip: "CCID = customer (assigned by FINRA based on Tax ID). FDID = trading account (assigned by the firm). The FDID must be identical across all of the firm's CAT reporting vendors for the same account — no vendor-specific IDs."
        },
        {
          id: "cat-clock-synchronization",
          name: "CAT Clock Synchronization — FINRA Rule 6810",
          category: "FINRA Rule",
          language: "To comply with Clock Synchronization requirements under both SEC Rule 613 and FINRA Rule 6810, firms are required to synchronize their business clocks internally. Clocks used for reporting must be synchronized to within 50 milliseconds of the time maintained by the National Institute of Standards and Technology (NIST). Business clocks used solely for manual CAT events or for allocation report time-of-allocation must be synchronized with at least a one-second tolerance.",
          concept: "Precise time-stamping is fundamental to CAT's purpose of reconstructing market events. Automated trading clocks require 50-millisecond precision; manual-event clocks require only 1-second precision. The NIST atomic clock is the reference standard.",
          parameters: [
            "Automated/electronic clocks: synchronized within 50 milliseconds of NIST",
            "Manual CAT event clocks and allocation time-of-allocation clocks: synchronized within 1 second of NIST",
            "NIST is an atomic clock operated by the U.S. Department of Commerce",
            "Synchronization must be maintained continuously"
          ],
          exceptions: [],
          examTip: "50 milliseconds is the precision required for automated clocks; 1 second for manual events. The NIST atomic clock is the sole reference. This is a frequently tested specific number — do not confuse it with the 10-second trade reporting window."
        },
        {
          id: "cat-trading-day-definition",
          name: "CAT Trading Day Definition",
          category: "FINRA Rule",
          language: "For industry members, the CAT trading day starts immediately after 4:15:00 p.m. ET on one trade date and ends at exactly 4:15:00 p.m. ET on the next trade date. For example, a trade that occurs at 4:16 p.m. ET on Monday is considered to occur on the Tuesday trading day. Weekends and days on which all equities or options national securities exchanges are closed are not considered a trading day.",
          concept: "The CAT trading day is used to determine reporting deadlines. The 4:15 p.m. cutoff means after-hours trades belong to the next trading day. Weekend and holiday activity rolls to the next trading day.",
          parameters: [
            "Trading day starts: immediately after 4:15:00 p.m. ET (no fractions of a second) on one date",
            "Trading day ends: at exactly 4:15:00 p.m. ET (no fractions of a second) on the next date",
            "Weekends and exchange holiday closures: not a trading day — activity rolls to the next trading day",
            "A trade at 4:16 p.m. Friday would be reported with Monday's activity"
          ],
          exceptions: [],
          examTip: "CAT's 4:15 p.m. cutoff is different from the standard 4:00 p.m. market close. This means trades from 4:01-4:15 p.m. belong to the current trading day, but trades at 4:16 p.m. and later belong to the NEXT trading day for CAT reporting purposes."
        }
      ]
    },
    {
      name: "Clearly Erroneous Transactions",
      rules: [
        {
          id: "finra-rule-11892-clearly-erroneous-listed",
          name: "FINRA Rule 11892 — Clearly Erroneous Transactions in Exchange-Listed Securities",
          category: "FINRA Rule",
          language: "FINRA defines clearly erroneous as an obvious error in any term such as price, number of shares, or other unit of trading, or identification of the security. For exchange-listed securities, numerical thresholds apply: for stocks priced above $0 to $25.00, 10% during normal hours / 20% outside normal hours; for $25.01-$50.00, 5% / 10%; for above $50.00, 3% / 6%. For multi-stock events involving 5-19 securities filed by the same member, a 10% threshold applies in both sessions. For multi-stock events of 20 or more securities within five minutes, FINRA uses a 30% threshold for both market hours and outside market hours.",
          concept: "Provides a mechanism to void or adjust trades where one term is obviously erroneous. Applies to market disruptions and extraordinary conditions, not unauthorized trading or manipulation. Reference price is the consolidated last sale.",
          parameters: [
            "Reference price: consolidated last sale",
            "Price $0.01 to $25.00: 10% normal hours, 20% outside normal hours",
            "Price $25.01 to $50.00: 5% normal hours, 10% outside normal hours",
            "Price above $50.00: 3% normal hours, 6% outside normal hours",
            "Multi-stock event (5-19 securities by same member): 10% both sessions, aggregated into single filing",
            "Multi-stock event (20+ securities within 5 minutes): 30% threshold both sessions",
            "Leveraged ETF/ETN: multiply applicable threshold by the leverage multiplier (e.g., 2x for a 2x ETF)",
            "Member complaint deadline: 30 minutes from execution time",
            "Outlier Transaction (price more than 3x the numerical guideline): complaint within 60 minutes",
            "FINRA/Nasdaq officer determination: generally within 30 minutes of becoming aware for exchange-listed securities"
          ],
          exceptions: [
            "Rule pertains to disruptions and extraordinary market conditions — NOT to unauthorized trading or market manipulation"
          ],
          examTip: "Memorize the three tiers: above $50 = 3%/6%, $25-$50 = 5%/10%, below $25 = 10%/20%. Outside normal hours the percentage doubles. For leveraged ETFs, multiply by the leverage factor. The 30-minute complaint window is standard; 60 minutes for an Outlier Transaction."
        },
        {
          id: "finra-rule-11893-clearly-erroneous-otc",
          name: "FINRA Rule 11893 — Clearly Erroneous Transactions in OTC Equity Securities",
          category: "FINRA Rule",
          language: "FINRA Rule 11893 governs clearly erroneous determinations involving transactions in OTC equity securities, using different numerical guidelines from Rule 11892. Thresholds are: $0.9999 and under: 20%; $1.00 to $4.9999: low end minimum 20%, high end minimum 10%; $5.00 to $74.9999: 10%; $75.00 to $199.9999: low end minimum 10%, high end minimum 5%; $200.00 to $499.9999: 5%; $500.00 to $999.9999: low end minimum 5%, high end minimum 3%; $1,000 and above: 3%. FINRA officer takes action as soon as possible, but in all cases by 3:00 p.m. on the next trading day for OTC equity securities.",
          concept: "OTC equity thresholds are tiered differently from exchange-listed securities because OTC stocks are generally more thinly traded and volatile. FINRA may use alternative reference prices (e.g., if a stock split occurred, was recently halted, or is an IPO) when standard pricing isn't reliable.",
          parameters: [
            "Price under $1.00: 20% threshold",
            "Price $1.00-$4.9999: graduated (low end 20%, high end 10%)",
            "Price $5.00-$74.9999: 10%",
            "Price $75.00-$199.9999: graduated (low end 10%, high end 5%)",
            "Price $200.00-$499.9999: 5%",
            "Price $500.00-$999.9999: graduated (low end 5%, high end 3%)",
            "Price $1,000 and above: 3%",
            "FINRA officer determination deadline for OTC equities: by 3:00 p.m. on the next trading day",
            "Alternative reference prices may be used: stock split, recent halt/resumption, or IPO"
          ],
          exceptions: [],
          examTip: "Rule 11892 = exchange-listed (three tiers); Rule 11893 = OTC equities (seven tiers). The OTC officer deadline is 3:00 p.m. next trading day (less urgent than the same-day 30-minute standard for listed securities). Both rules use similar complaint and appeal procedures."
        },
        {
          id: "clearly-erroneous-appeal-process",
          name: "Clearly Erroneous — Appeal Process",
          category: "FINRA Rule",
          language: "A decision of a Nasdaq or FINRA officer may be appealed to the Market Operations Review Committee (MORC) or the Uniform Practice Committee (UPC). The appeal must be in writing and must be received within 30 minutes after the person making the appeal is given notification of the decision. For exchange-listed securities, the decision will be made as soon as feasible, generally on the same trading day. For OTC equity securities, the decision will be made no later than two trading days after the execution.",
          concept: "Two-tier review: the initial officer determination can be appealed to either MORC or UPC. Time limits are strict — 30 minutes for the appeal filing, with OTC decisions allowed up to two trading days.",
          parameters: [
            "Appeal to: Market Operations Review Committee (MORC) or Uniform Practice Committee (UPC)",
            "Appeal deadline: 30 minutes after notification of officer's decision",
            "Appeal must be in writing",
            "Exchange-listed securities: decision as soon as feasible, generally same trading day; if appeal after 3:00 p.m., decision no later than next trading day",
            "OTC equity securities: decision no later than two trading days after execution"
          ],
          exceptions: [],
          examTip: "Remember both MORC and UPC can hear appeals. The appeal window is 30 minutes from notification. Exchange-listed appeals are resolved same day (or next day if after 3:00 p.m.); OTC appeals can take up to two trading days."
        }
      ]
    },
    {
      name: "TRACE — Trade Reporting and Compliance Engine",
      rules: [
        {
          id: "trace-overview",
          name: "TRACE — Overview and Eligible Securities",
          category: "FINRA Rule",
          language: "The Trade Reporting and Compliance Engine (TRACE) was created to provide greater transparency in the corporate bond market. TRACE-eligible securities are depository-eligible, U.S. dollar-denominated debt securities, including: investment- and non-investment-grade securities, split-rated debt, SEC-registered corporate debt (U.S. and foreign), 144A securities, U.S. Treasury securities, agency and government-sponsored enterprise debt, foreign sovereign debt (USD-denominated), asset-backed securities, CDOs, and CMOs. TRACE is not a quotation or execution system.",
          concept: "TRACE brings post-trade price transparency to the fixed-income market (which has no equivalent of the equity Tape). All members party to a TRACE-eligible transaction must report their side unless an exception applies.",
          parameters: [
            "Investment-grade, non-investment-grade, and split-rated corporate debt",
            "SEC-registered corporate debt of U.S. and foreign issuers (USD-denominated)",
            "Rule 144A debt securities",
            "U.S. Treasury securities",
            "Agency debt and GSE-guaranteed debt",
            "Foreign sovereign debt (USD-denominated)",
            "Asset-backed securities, CDOs, CMOs",
            "TRACE hours: 8:00 a.m. to 6:29:59 p.m. ET",
            "Both the clearing firm and the introducing broker-dealer must sign a TRACE participation agreement",
            "Managing underwriter must provide CUSIP, issuer name, coupon rate, pricing time, description, and other information to FINRA to enable TRACE reporting for new issues"
          ],
          exceptions: [
            "Money-market instruments with maturities of less than one year are NOT TRACE-eligible",
            "Development bank debt is NOT TRACE-eligible",
            "Municipal securities are NOT TRACE-eligible",
            "FINRA does not disseminate transaction information for Section 4(2) private placements"
          ],
          examTip: "Three securities that are NOT TRACE-eligible: money market instruments (maturity under 1 year), development bank debt, and municipal securities. Note that U.S. Treasuries ARE TRACE-eligible — a common trap question. Split-rated debt (IG by one NRSRO, non-IG by another) is also TRACE-eligible."
        },
        {
          id: "trace-reporting-requirements",
          name: "TRACE Reporting Requirements — 15-Minute Rule",
          category: "FINRA Rule",
          language: "TRACE reports must be submitted within 15 minutes and must include: CUSIP number or FINRA symbol, number of bonds, price or contract amount and accrued interest, buy/sell/cross designation, date of execution for as/of trades, contraparty identifier, agent or principal capacity, time of execution, give-up for executing and introducing broker, commission/markup or markdown, trade modifiers, and yield-to-call or yield-to-maturity. Trades executed from 8:00 a.m. to 6:29:59 p.m. (TRACE system hours) must be reported within 15 minutes. If executed within 15 minutes of system close, reporting may occur within 15 minutes of next-day opening.",
          concept: "15 minutes is the standard TRACE window — contrast with the 10-second equity window. TRACE covers full lifecycle data including yield information and capacity disclosure. Once reported, transaction information is available to the public immediately.",
          parameters: [
            "Standard window: within 15 minutes of execution for trades during TRACE hours (8:00 a.m. to 6:29:59 p.m.)",
            "If executed within 15 minutes of system close: may report within 15 minutes of next-day open",
            "6:30 p.m. to 11:59:59 p.m.: report within 15 minutes of next-day open, designated as/of with execution date",
            "Midnight to 7:59:59 a.m.: report within 15 minutes of same-day open",
            "Non-business-day executions: report within 15 minutes of next-day open; execution time must be listed as 12:01:00 a.m. with 'special price' modifier",
            "Public dissemination is immediate upon reporting",
            "Give-up arrangement: clearing firm may report on behalf of introducing firm that lacks direct TRACE access"
          ],
          exceptions: [],
          examTip: "TRACE = 15 minutes (not 10 seconds like equities). The 'special price' modifier is used for non-business-day executions. The give-up arrangement allows a clearing firm to report TRACE on behalf of an introducing firm — this is the TRACE exception to the requirement that each party report its own side."
        },
        {
          id: "trace-treasury-agency-reporting",
          name: "TRACE — U.S. Treasury and Agency Securities Reporting",
          category: "FINRA Rule",
          language: "Transactions in U.S. Treasury securities executed from midnight (12:00 a.m.) to 5:00 p.m. are reported within 60 minutes. Transactions executed after 5:00 p.m. are reported on the next business day (T+1) and designated as/of with time and date included. Transactions in STRIPS are also required to be reported. Agency securities transactions (including CDOs and CMOs) executed during TRACE system hours are reported on the same business day within 60 minutes of execution.",
          concept: "U.S. Treasury and agency securities have a 60-minute TRACE window (rather than 15 minutes for corporate bonds), reflecting the institutional, inter-dealer nature of these markets. STRIPS are TRACE-reportable despite their unique structure.",
          parameters: [
            "U.S. Treasuries executed midnight to 5:00 p.m.: report within 60 minutes",
            "U.S. Treasuries executed after 5:00 p.m.: report T+1 as/of with time and date",
            "STRIPS: reportable to TRACE",
            "Agency securities (including CDOs, CMOs) during TRACE system hours: report same business day within 60 minutes"
          ],
          exceptions: [],
          examTip: "U.S. Treasury TRACE window is 60 minutes (not 15 like corporate bonds). The 5:00 p.m. cutoff determines same-day vs. T+1 reporting for Treasuries. STRIPS must be reported. CDOs and CMOs follow agency security rules (60 minutes, same day during TRACE hours)."
        },
        {
          id: "trace-new-issues",
          name: "TRACE — New Issue Reporting (List or Fixed Offering Price Transactions)",
          category: "FINRA Rule",
          language: "A List or Fixed Offering Price Transaction, or Takedown Transaction, is a primary market new-issue offering by a sole underwriter or syndicate member, or by a selling group member at a discount from the offering price. These transactions must be reported by no later than T+1 during TRACE system hours. The firm must also indicate as/of and provide the actual execution day.",
          concept: "New-issue (primary market) TRACE transactions get a longer reporting window (T+1) because they are executed under controlled syndicate conditions. Both as/of designation and the actual execution date must accompany the report.",
          parameters: [
            "Covered: primary market offerings by sole underwriters, syndicate members, or selling group members at a discount",
            "Reporting deadline: no later than T+1 during TRACE system hours",
            "Must include as/of designation and actual execution date"
          ],
          exceptions: [],
          examTip: "New-issue TRACE reports get T+1 — more time than the 15-minute standard. But the report must include as/of and the actual execution date, so regulators can distinguish it from a same-day secondary trade."
        }
      ]
    },
    {
      name: "Short-Interest Reporting and MOC/LOC Orders",
      rules: [
        {
          id: "short-interest-reporting",
          name: "Short-Interest Reporting",
          category: "FINRA Rule",
          language: "Members must maintain a record of total short positions in Nasdaq stocks in all customer and proprietary accounts. This information must be reported periodically to FINRA, currently twice per month. All short-interest reports must be made as of the close of the designated settlement date, which is currently the 15th of the month (or the preceding business day if the 15th falls on a holiday or weekend), and as of the last trading day of the month. The report must be received at FINRA by the close of the second business day after the calculation date. Short-interest information for listed securities must also be collected and reported to the firm's designated examining authority (DEA).",
          concept: "Regulators use short-interest data to monitor market activity and potential short squeezes. Bi-monthly reporting provides a current picture of aggregate short positions. The DEA for most broker-dealers is FINRA.",
          parameters: [
            "Frequency: twice per month",
            "Calculation dates: as of the 15th of the month (or prior business day), and as of the last trading day of the month",
            "Deadline: received at FINRA by close of the second business day after the calculation date",
            "Covers: all customer and proprietary accounts",
            "Listed securities: also reported to the firm's designated examining authority (DEA)"
          ],
          exceptions: [],
          examTip: "Short interest is reported twice monthly — the 15th (or prior business day) and the last trading day of the month. The submission deadline is the second business day after the calculation date. DEA for most firms is FINRA."
        },
        {
          id: "moc-loc-orders",
          name: "MOC and LOC Orders — NYSE Rules",
          category: "NYSE Rule",
          language: "According to NYSE rules, market-on-close (MOC) and limit-on-close (LOC) orders may be entered until 3:50 p.m. However, these orders may be cancelled or reduced in size to correct a legitimate error by 3:58 p.m. After 3:58 p.m., MOC and LOC orders cannot be cancelled. Market-on-close orders receive the closing price if executed. However, MOC orders are cancelled if there is a regulatory trading halt in effect. If there is a trading halt due to an order imbalance or equipment problems, the cancellation of MOC orders is not allowed.",
          concept: "MOC and LOC orders lock in at specific times to ensure orderly market closes. The 3:50 p.m. entry cutoff and 3:58 p.m. cancellation cutoff create a controlled window. Regulatory halts automatically cancel MOC orders; operational halts (imbalance, equipment) do not.",
          parameters: [
            "Entry deadline: 3:50 p.m.",
            "Cancellation/reduction deadline (legitimate error only): 3:58 p.m.",
            "After 3:58 p.m.: cannot be cancelled under any circumstance",
            "Regulatory trading halt in effect: MOC orders are cancelled",
            "Order imbalance halt or equipment problem halt: MOC orders are NOT cancelled"
          ],
          exceptions: [
            "MOC orders may be cancelled if there is a regulatory trading halt",
            "MOC orders may NOT be cancelled due to order imbalance or equipment-related halts"
          ],
          examTip: "Two MOC cancellation rules to keep straight: regulatory halt cancels MOC orders; order imbalance or equipment halt does NOT cancel MOC orders. The 3:58 p.m. hard cutoff means no post-3:58 cancellations regardless of reason."
        }
      ]
    }
  ]
};
