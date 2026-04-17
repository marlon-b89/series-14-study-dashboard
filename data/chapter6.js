// Chapter 6 – SRO Trading Rules
window.CHAPTER_6 = {
  id: 6,
  title: "SRO Trading Rules",
  subtitle: "Nasdaq market-maker registration, circuit breakers, LULD, order tickets, prohibited trading practices, markups, and options position limits",
  sections: [
    {
      name: "Nasdaq Market-Maker Registration and Withdrawal",
      rules: [
        {
          id: "nasdaq-mm-registration",
          name: "Nasdaq Market-Maker Registration",
          category: "Nasdaq Rule",
          language: "A broker-dealer may enter quotes into Nasdaq only if it is registered as a Nasdaq market maker. A prospective market maker must file an application with Nasdaq that certifies its good standing with the SRO and demonstrates its compliance with financial responsibility rules, including net capital requirements. A market maker's registration is effective only when it is notified by Nasdaq. Registration in specific issues becomes effective on the day registration is requested.",
          concept: "Two-step process: (1) general registration with Nasdaq as a market maker, and (2) issue-by-issue registration entered via Nasdaq terminal. Normal business hours require the market maker to be open from 9:30 a.m. to 4:00 p.m. ET.",
          parameters: [
            "Application must certify good standing with SRO and compliance with net capital rules",
            "General registration effective only upon Nasdaq notification",
            "Issue-specific registration effective on the day the request is entered",
            "Normal market hours: 9:30 a.m. to 4:00 p.m. ET",
            "Premarket session (voluntary): 4:00 a.m. to 9:30 a.m.",
            "Aftermarket session (voluntary): 4:00 p.m. to 8:00 p.m.",
            "Nasdaq system overall operates from 4:00 a.m. to 8:00 p.m. ET"
          ],
          exceptions: [],
          examTip: "Registration in a specific Nasdaq security becomes effective the same day the request is entered — but the market maker's overall Nasdaq registration only becomes effective upon Nasdaq notification. Know this two-step distinction."
        },
        {
          id: "voluntary-excused-withdrawal",
          name: "Voluntary and Excused Withdrawal from Market Making",
          category: "Nasdaq Rule",
          language: "A Nasdaq or ADF market maker may terminate its registration in a security by withdrawing its quotes at any time on a voluntary (unexcused) basis. However, that market maker cannot reregister as a Nasdaq or ADF market maker for that security for 20 business days. In the case of an unexcused withdrawal from quoting a CQS (exchange-listed) security, the market maker may reregister after only one business day.",
          concept: "Voluntary withdrawal carries a 20-business-day re-entry blackout for Nasdaq securities. Excused withdrawal (granted by Nasdaq for qualifying reasons) allows immediate re-entry. Excused withdrawals are NOT granted for pending news or price changes.",
          parameters: [
            "Voluntary withdrawal: 20-business-day blackout before reregistration in a Nasdaq security",
            "Voluntary withdrawal from a CQS security: only 1 business day before reregistration",
            "Excused withdrawal up to 5 business days: circumstances beyond the firm's control (e.g., severe storm, sudden illness)",
            "Excused withdrawal up to 60 days: legal or regulatory reasons with supporting documentation",
            "Religious holiday excusal: application must be made at least 1 business day in advance and approved by FINRA",
            "Vacation excusal (small firms — 3 or fewer Level 3 terminals): application 1 business day in advance with list of securities",
            "Excused withdrawal for Regulation M participation (underwriting): passive market-maker status or withdrawal",
            "Reg M passive market-maker application: must be filed no later than the business day prior to the first trading session of the restricted period",
            "Accidental withdrawal: may be immediately reinstated if firm notifies Nasdaq Market Operations within 1 hour and follows up in writing, and 2-6 inadvertent withdrawals per year is considered acceptable"
          ],
          exceptions: [
            "Excused withdrawals will NOT be granted for pending news about an issuer",
            "Excused withdrawals will NOT be granted because of price changes or a sudden influx of orders",
            "Voluntary withdrawal of a clearing relationship is treated as voluntary, not excused"
          ],
          examTip: "The two blackout periods to memorize: 20 business days for Nasdaq securities (voluntary), 1 business day for CQS exchange-listed securities. Also remember: excused withdrawal is never granted simply because of pending news or heavy order flow."
        }
      ]
    },
    {
      name: "Market-Wide and Individual Stock Circuit Breakers",
      rules: [
        {
          id: "market-wide-circuit-breakers",
          name: "Market-Wide Circuit Breakers (S&P 500 Based)",
          category: "Regulation",
          language: "Circuit breakers apply to all National Market System (NMS) securities regardless of the exchange on which they trade. The reference index is the S&P 500 Index. Level 1 (7% decline): 15-minute trading halt if triggered between 9:30 a.m. and 3:25 p.m. ET. Level 2 (13% decline): 15-minute trading halt if triggered between 9:30 a.m. and 3:25 p.m. ET. Level 3 (20% decline): trading halts for the remainder of the trading day at any time.",
          concept: "Market-wide halts protect against extraordinary volatility. Originally based on the DJIA but now use the S&P 500. All NMS stocks — exchange-listed and OTC — must halt. FINRA is responsible for halting OTC NMS stocks.",
          parameters: [
            "Level 1: 7% S&P 500 decline — 15-minute halt if between 9:30 a.m. and 3:25 p.m. ET",
            "Level 2: 13% S&P 500 decline — 15-minute halt if between 9:30 a.m. and 3:25 p.m. ET",
            "Level 3: 20% S&P 500 decline — halt for remainder of the trading day, any time",
            "At or after 3:25 p.m. ET, trading continues unless there is a Level 3 halt",
            "Levels are calculated daily based on prior day's S&P 500 close",
            "FINRA responsible for halting OTC-traded NMS stocks during a market-wide halt"
          ],
          exceptions: [
            "Level 1 and Level 2 halts do not apply after 3:25 p.m. ET — only Level 3 can halt trading in the final 35 minutes"
          ],
          examTip: "The magic cutoff is 3:25 p.m. After that, only a Level 3 (20%) halt can stop trading. Memorize the three levels: 7% / 13% / 20%, and that all use the S&P 500 (not the DJIA anymore)."
        },
        {
          id: "luld-limit-up-limit-down",
          name: "Limit Up – Limit Down (LULD) — Individual Stock Circuit Breakers",
          category: "SEC Rule",
          language: "The SEC created individual stock circuit breakers (LULD) to prevent trades from occurring outside of applicable price bands and to require exchanges and FINRA to pause trading in a stock if the price moves by more than a specified percentage in a five-minute period. The rule applies only to NMS securities, including ETFs. Price bands are set at a percentage above and below a reference price based on the opening price or most recent five minutes of trading.",
          concept: "LULD creates per-stock price collars. If a stock's National Best Bid (NBB) hits the upper band or National Best Offer (NBO) hits the lower band (Limit State) and stays there for 15 seconds, a five-minute trading pause is triggered. Bands are doubled at the open and close.",
          parameters: [
            "S&P 500 or Russell 1,000 stocks priced above $3.00: 5% price band",
            "All other NMS stocks priced above $3.00: 10% price band",
            "Stocks priced $0.75 to $3.00: 20% price band",
            "Stocks priced below $0.75: lesser of $0.15 or 75%",
            "Bands doubled during first 15 minutes of trading (9:30 to 9:45 a.m.) and last 25 minutes (3:35 to 4:00 p.m.)",
            "Core band hours: 9:45 a.m. to 3:35 p.m. ET",
            "Limit State: NBB at or above upper band, or NBO at or below lower band",
            "Straddle State: NBB below the lower band OR NBO above the upper band (only one side executable)",
            "Trading Pause: 5-minute pause triggered if security remains in Limit State for 15 seconds",
            "No transactions permitted during trading pause; bids and offers continue to be displayed",
            "After pause, primary listing exchange reopens trading using its reopening procedures; new price becomes reference price"
          ],
          exceptions: [
            "Straddle State: primary listing exchange is permitted but not required to issue a trading pause"
          ],
          examTip: "LULD and market-wide circuit breakers are separate systems: LULD operates at the individual stock level; market-wide halts hit all NMS securities. Key LULD number: 15 seconds in Limit State triggers a 5-minute pause. Bands are doubled at the open (9:30-9:45) and near close (3:35-4:00)."
        }
      ]
    },
    {
      name: "Order Tickets and Order Processing",
      rules: [
        {
          id: "order-ticket-requirements",
          name: "Order Ticket (Order Memorandum) Requirements",
          category: "FINRA Rule",
          language: "Regulators require a paper trail tracking the life of an order. An order ticket must include essential order details: buy or sell, account name/number, terms and conditions, and time of entry and execution. Sell tickets must be marked long or short (except for debt securities). A ticket must be marked short exempt if circuit breakers are in effect.",
          concept: "The order memorandum is the documentary foundation of every trade. Minimum required elements track what was ordered, for whom, on what terms, and when. Cancelled orders must be retained the same as executed orders.",
          parameters: [
            "Must indicate buy or sell",
            "Sell tickets must be marked long or short (except debt securities); marked short exempt if Reg SHO circuit breakers apply",
            "Must include account name or account number (name of person entering the order if different from account holder)",
            "Terms and conditions: price, stop, GTC, at-the-close/opening, not-held, all-or-none, fill-or-kill, immediate-or-cancel, do-not-reduce/increase, special settlement, solicited/unsolicited",
            "Order must be time-stamped at entry and, to the extent feasible, at execution",
            "Pre-timestamping in connection with block positioning is a violation of FINRA books-and-records requirements",
            "Cancelled orders must be retained the same as executed orders",
            "Discretionary authority must be noted; check 'discretion not exercised' if customer consented to a specific trade"
          ],
          exceptions: [
            "No account name/designation required if the order is from an outside investment adviser (investment advisory exception)",
            "No exception for discretionary accounts — account designation still required"
          ],
          examTip: "Sell tickets must be marked long or short — but NOT debt securities. Pre-timestamping (backdating) an order ticket is a direct books-and-records violation. Also, not-held orders are not protected under the Manning Rule (Limit Order Protection)."
        }
      ]
    },
    {
      name: "Prohibited Trading Practices",
      rules: [
        {
          id: "rule-5270-front-running",
          name: "FINRA Rule 5270 — Front-Running of Block Transactions",
          category: "FINRA Rule",
          language: "It is a violation of industry rules for member firms or associated persons to execute an order to buy or sell a security or a related security (option or other derivative) for an account in which they have an interest or exercise discretion when they are in possession of material, non-public information about an imminent block transaction in the underlying security. The prohibition applies until information about the block transaction has been made publicly available through reporting on the Tape or through a third-party newswire service.",
          concept: "Front-running means trading ahead of a known customer block order to profit from its anticipated price impact. It is not insider trading (which concerns issuer information), but it is a distinct violation protecting customers from firm exploitation.",
          parameters: [
            "Block generally defined as 10,000 or more shares, or options covering that many shares (FINRA may consider smaller amounts in appropriate circumstances)",
            "Ban applies to accounts in which the firm has an interest or exercises discretion",
            "Ban remains in effect during partial execution of a block until the entire block is publicly reported",
            "Shadowing (firm trades right after client but before Tape report) is also a violation",
            "Rule applies only to trades reportable to Nasdaq, Consolidated Tape, or Options Price Reporting Service",
            "Not applicable to transactions in automatic execution systems (e.g., Nasdaq Market Center)"
          ],
          exceptions: [
            "Information Barriers: trading desk with proper barriers from the block trading desk may continue normal activities",
            "Prior Customer Order: a party already working a customer order in the same security before learning of the block",
            "Error Corrections",
            "Odd-Lot Orders",
            "Block Order Facilitation Exception: firm may trade ahead of a block if the purpose is to fulfill or facilitate the customer's own block — customer consent required (written, negative consent letter, or order-by-order oral documented consent)"
          ],
          examTip: "Front-running involves misuse of information about a customer's own block order (NOT issuer information). The three forms of customer consent for facilitation trading are: written, negative consent letter, and oral order-by-order. Automatic execution systems are excluded because the firm cannot avoid the execution."
        },
        {
          id: "rule-5280-trading-ahead-research",
          name: "FINRA Rule 5280 — Trading Ahead of Research Reports",
          category: "FINRA Rule",
          language: "FINRA prohibits a member from establishing, increasing, decreasing, or liquidating an inventory position in a particular security or derivative of that security based on material, non-public, advanced knowledge of the content and timing of a research report in that security. A member firm is required to establish, maintain, and enforce policies and procedures designed to restrict or limit the flow of information between the research and trading departments.",
          concept: "Prevents firms from adjusting trading inventory to profit from anticipated customer demand created by their own research reports. Covers all securities issued by the subject issuer, including debt and derivatives, both listed and non-listed.",
          parameters: [
            "Prohibits increasing or decreasing inventory position based on advance knowledge of a research report",
            "Covers all of the issuer's securities including debt and derivatives",
            "Applies to both exchange-listed and non-exchange-listed securities",
            "Firm must maintain information barriers between research and trading departments"
          ],
          exceptions: [],
          examTip: "Rule 5280 (trading ahead of research) and Rule 5270 (front-running block transactions) are related but distinct. Rule 5280 is about exploiting the firm's own research before publication; Rule 5270 is about exploiting a customer's block order. Both require information barriers as the primary compliance tool."
        },
        {
          id: "trade-shredding",
          name: "Trade Shredding — Prohibition",
          category: "FINRA Rule",
          language: "Under industry rules, a broker-dealer cannot split orders into smaller ones for executions, or split executions into multiple executions for transaction reporting with the intent of increasing a monetary or in-kind amount (e.g., commissions, credits, gratuities, payments, or rebates of fees) to be received because of the execution of the orders or the transaction reporting for the orders.",
          concept: "Trade shredding is the manipulation of order size to generate additional payments. Breaking orders up to improve customer execution, achieve best execution, or avoid a Reg NMS trade-through violation is permissible.",
          parameters: [
            "Prohibited when the purpose is to increase monetary or in-kind compensation from executions or transaction reporting",
            "Prohibited in any format: splitting orders or splitting executions for reporting"
          ],
          exceptions: [
            "Breaking up orders to provide a customer with lower cost or best execution is permitted",
            "Breaking up orders to avoid a trade-through violation under Reg NMS is permitted"
          ],
          examTip: "The exam tests the line between prohibited trade shredding and legitimate order splitting. The key is intent: if the purpose is to inflate compensation, it is a violation. If the purpose is to benefit the customer or comply with Reg NMS, it is permissible."
        },
        {
          id: "rogue-trading-controls",
          name: "Rogue Trading — Controls and Procedures",
          category: "FINRA Rule",
          language: "The SEC requires firms to institute policies and procedures designed to both detect and prevent unauthorized trading. Required procedures include mandatory vacations for persons with sensitive jobs, limiting system access to appropriate job functions, protecting monitoring/surveillance systems from circumvention, and requiring multiple passwords for access to certain systems.",
          concept: "Rogue trading (unauthorized trading) has caused the failure of multiple broker-dealers. Regulatory safeguards include mandatory minimum vacation periods and strict access controls to prevent any single individual from concealing positions.",
          parameters: [
            "Mandatory vacations: minimum number of consecutive business days (typically 10 consecutive business days) for persons with sensitive jobs such as traders",
            "System access limited to job-appropriate functions",
            "Monitoring and surveillance systems must be protected from employee circumvention",
            "Multiple passwords required for access to certain systems"
          ],
          exceptions: [],
          examTip: "Know that mandatory vacations for traders are a required rogue-trading control — typically 10 consecutive business days. The key word is consecutive; the purpose is to prevent someone from concealing positions they manage day-to-day."
        },
        {
          id: "marking-the-close",
          name: "Marking-the-Close / Marking-the-Opening — Fraudulent Devices",
          category: "FINRA Rule",
          language: "Marking-the-close refers to a series of transactions at or near the close of trading (at or within minutes of 4:00 p.m.) which either uptick or downtick a security. Marking-the-close represents a possible departure from the normal forces of supply and demand that result in the fair auction price for a security. Similar activity at the start of the day is considered marking-the-opening. FINRA's rule on manipulative, deceptive, or fraudulent devices states: 'No member shall effect any transaction in, or induce the purchase or sale of, any security by means of any manipulative, deceptive or other fraudulent device or contrivance.'",
          concept: "A manipulative practice to affect a security's closing or opening price — impacting margin calculations, newspaper prices, index values, and option settlement prices. The concern arises when a pattern develops.",
          parameters: [
            "Marking-the-close: transactions at or within minutes of 4:00 p.m. intended to move the final price",
            "Marking-the-opening: similar activity at the open, often tied to options expiration settlement or program trading",
            "Simply changing a quote (without a trade) near the close can also constitute this violation",
            "FINRA written supervisory procedures must contain a process for detecting these violations",
            "Both FINRA and exchanges have systems generating marking-the-close reports"
          ],
          exceptions: [],
          examTip: "Marking-the-close is tested as a manipulation concept, not just a trading rule. Two motivations: (1) affecting margin requirements (firms may raise requirements at $5/share) and (2) controlling the price shown in newspapers. RRs and traders both have a duty to investigate red flags — the burden is not only on supervisors."
        },
        {
          id: "payments-for-market-making",
          name: "Prohibition on Payments for Market Making",
          category: "FINRA Rule",
          language: "No FINRA member or associated person may accept, directly or indirectly, any payment or other consideration from an issuer, or any affiliate or promoter of the issuer, for: (1) publishing a quote, (2) acting as a market maker in a security, or (3) submitting an application in connection with market-making activity. Issuers cannot pay broker-dealers to make markets in their securities.",
          concept: "Prevents issuers from paying firms to artificially support or create a market for their stock. The rule covers direct and indirect forms of consideration, including favorable securities pricing, discounted options, or below-market purchases.",
          parameters: [
            "Consideration includes: securities offered on more favorable terms than to the public, options exercisable at a discount from market, purchase of securities by a member from a prohibited party at a discount",
            "Promoter defined as: any person other than the issuer or affiliates that has an interest in influencing a firm to make a market — including advisers, accountants, attorneys, restricted-stock holders, and persons owning 5% or more of the public float"
          ],
          exceptions: [
            "Payment for bona fide services (e.g., investment banking underwriting compensation) is permitted",
            "Reimbursement for registration fees paid to the SEC or a state regulator is permitted",
            "Reimbursement for listing fees imposed by an SRO is permitted"
          ],
          examTip: "Issuers paying firms to make markets is a clear violation — even indirect payment through discounted securities counts. The 5% public float threshold for defining a 'promoter' (anyone owning 5% or more) is a testable number."
        }
      ]
    },
    {
      name: "Block Trading and Crossing Orders",
      rules: [
        {
          id: "crossing-orders-nyse",
          name: "Crossing Orders — NYSE Rules",
          category: "NYSE Rule",
          language: "A cross transaction refers to a situation in which a member on the NYSE has an order to buy and an order to sell the same security and wants to match these orders internally. To ensure that customers are obtaining the best price, the member must offer the security at a price which is higher than its current bid. All such bids and offers must be clearly announced to the trading crowd before the member may proceed with the proposed cross transaction.",
          concept: "A cross occurs when a broker-dealer has matching buy and sell orders for the same security. Public announcement to the trading crowd ensures price competition before the internal match is completed.",
          parameters: [
            "Offer price must be higher than the current bid",
            "Bids and offers must be clearly announced to the trading crowd first",
            "Provisions apply only to manual transactions"
          ],
          exceptions: [],
          examTip: "NYSE cross transactions apply to manual (floor) transactions only. The firm must offer it above the current bid to allow the crowd to participate — the cross is not done silently."
        },
        {
          id: "nyse-rule-72-block-trading",
          name: "NYSE Rule 72 — Block Trading and Positioning",
          category: "NYSE Rule",
          language: "NYSE Rule 72 governs block trading on the NYSE and provides facilitation mechanisms for large institutional trades. A block is defined as any transaction involving 10,000 shares or more, or alternatively, any trade with a market value of $200,000 or more. The rule permits firms to position blocks as principal, agency cross transactions in block-sized orders, and clean-up transactions to dispose of residual positions.",
          concept: "Facilitates large institutional trades that would be difficult to execute without moving the market. Firms may position blocks using their own capital, act as dual agents for institutional crosses, and execute clean-up trades to wind down residual inventory.",
          parameters: [
            "Block definition: 10,000 shares or more, OR market value of $200,000 or more (dual threshold — whichever is met)",
            "Block positioning: firm buys the block as principal using its own capital, assumes market risk, and gradually unwinds",
            "Agency cross: firm acts as agent for both buyer and seller in the same block transaction; both clients must consent",
            "Clean-up transactions: secondary trades to dispose of residual positions after block positioning",
            "If any block stock is for the firm's own position: firm must fill public orders at clean-up price before retaining stock for its own account",
            "If all stock is for customer accounts and firm declines to provide stock to market: must fill public orders on specialist book for at least 5% of total block or 1,000 shares, whichever is greater"
          ],
          exceptions: [
            "The residual-position clean-up rule does not apply to purchases to liquidate a short position or sales of a long position"
          ],
          examTip: "NYSE Rule 72's block threshold uses EITHER 10,000 shares OR $200,000 market value — whichever is met first. FINRA Rule 5270 prohibits front-running customer block orders; NYSE Rule 72 enables legitimate block facilitation. They work together."
        }
      ]
    },
    {
      name: "Fair Prices, Commissions, and Net Transactions",
      rules: [
        {
          id: "finra-5-percent-markup-policy",
          name: "FINRA 5% Markup Policy",
          category: "FINRA Rule",
          language: "FINRA members are not permitted to charge prices or commissions that are unfair or excessive. The 5% Markup Policy serves as a guideline (not a fixed cap) for markups, markdowns, and commissions on both exchange-listed and non-exchange-listed securities, whether the broker-dealer acts as principal or agent. Markup is calculated as the difference between the interdealer ask price and the customer's purchase price; markdown is the difference between the interdealer bid and the customer's sale price.",
          concept: "5% is a guideline, not a bright-line rule. All relevant factors are considered. Higher markups may be justified in some circumstances; even 5% may be excessive in others. A market-dominated-and-controlled environment requires using contemporaneous cost, not quoted prices.",
          parameters: [
            "Applies to markups, markdowns, and commissions",
            "Applies to both principal and agency capacity",
            "Applies to exchange-listed and non-exchange-listed securities",
            "Relevant factors: type of security, availability in market, price of security, transaction dollar amount, disclosure to customer, pattern of markups, nature of the broker-dealer's business",
            "In active/competitive markets (Nasdaq GS or GM), the inside offer may be used as the prevailing market price",
            "A quote is validated when: competitive market exists, interdealer sales occur with some frequency, and sales occur at or around quoted offers",
            "In dominated/controlled markets, the inside quote is NOT appropriate — dealer must use contemporaneous cost",
            "Proceeds transactions: markup computed on total compensation on both legs as a percentage of the sale amount"
          ],
          exceptions: [
            "Securities requiring a prospectus or offering circular (e.g., IPOs and mutual fund shares) are exempt — they are sold at a fixed public offering price"
          ],
          examTip: "Two most common exam traps: (1) 5% is only a GUIDELINE, not a ceiling; (2) when a market is dominated and controlled by one firm, the firm cannot use its own quote as the prevailing price — it must use its contemporaneous cost. Proceeds transactions combine compensation from both the sale and the purchase."
        },
        {
          id: "debt-markup-policy",
          name: "Debt Securities Markup Policy",
          category: "FINRA Rule",
          language: "FINRA guidance requires that markups on debt transactions with customers be based on the security's prevailing market price, determined by a hierarchy: (1) contemporaneous cost or proceeds (dealer's inventory purchase and resale in close time proximity); (2) prices of contemporaneous interdealer transactions in the same security; (3) prices of contemporaneous dealer transactions with institutional customers in the same security; (4) for actively traded securities, contemporaneous quotes; (5) prices of similar securities; (6) economic valuation models.",
          concept: "The hierarchy ensures markups are tied to real market prices. Contemporaneous cost is the gold standard. Market events (credit rating change, interest rate change, issuer news) may render earlier cost data obsolete, triggering use of the hierarchy.",
          parameters: [
            "Priority 1: Dealer's contemporaneous cost or proceeds",
            "Priority 2: Contemporaneous interdealer prices in the same security",
            "Priority 3: Contemporaneous institutional customer prices in the same security",
            "Priority 4: Contemporaneous quotes for actively traded securities",
            "Priority 5: Prices of similar securities (comparable credit, collateral, yield spread, structure)",
            "Priority 6: Economic pricing models (credit quality, coupon, call provisions, interest rates, maturity, face amount, industry sector)"
          ],
          exceptions: [
            "Municipal securities (investment-grade or non-investment-grade) are exempt",
            "Exempt securities (e.g., U.S. government securities) are exempt",
            "Transactions with QIBs in non-investment-grade debt securities are exempt"
          ],
          examTip: "The debt markup hierarchy runs: contemporaneous cost first, then interdealer transactions, then institutional-customer transactions, then quotes. The three exemptions are muni, government, and QIB/non-IG debt. Contrast with equity: for equity, QIBs are not automatically exempt."
        },
        {
          id: "net-basis-transactions",
          name: "Net-Basis Transactions with Customers",
          category: "FINRA Rule",
          language: "In a net-basis trade, a dealer profits by charging a different price for securities rather than charging a markup. Unlike a riskless principal transaction (where markup is disclosed), the profit in a net-basis transaction is not disclosed on the customer's confirmation. FINRA rules place disclosure and consent requirements on dealers that execute net-basis trades with customers. Both legs of a net-basis transaction will be reported as principal trades to the Trade Reporting Facility.",
          concept: "Net-basis trading is lawful but requires prior customer consent. Retail customers need written consent order-by-order. Institutional customers may provide standing blanket consent via negative consent letter.",
          parameters: [
            "Non-institutional (retail) customers: written consent required on an order-by-order basis, prior to execution",
            "Institutional customers: (1) oral permission before each trade, OR (2) written permission before each trade, OR (3) blanket permission via negative consent letter (customer informed, given opportunity to opt out)",
            "Fiduciaries: disclosure and consent to the party granted trading authorization; institutional consent rules apply if fiduciary is an institution",
            "Both legs reported to TRF as principal trades (different prices distinguish from riskless principal)"
          ],
          exceptions: [],
          examTip: "Net-basis vs. riskless principal: in riskless principal, both legs execute at the same price and the markup is disclosed; in net-basis, the firm charges a different price and the profit is NOT on the confirmation. For retail, net-basis requires order-by-order written consent — no negative consent shortcut."
        },
        {
          id: "best-execution-interpositioning",
          name: "Best Execution and Interpositioning — FINRA Rule 5310",
          category: "FINRA Rule",
          language: "A member firm's failure to use reasonable diligence when attempting to obtain the best price on purchases and sales for its customer is inconsistent with just and equitable principles of trade. Interpositioning, defined as the insertion of a third party between a customer and the best market, is generally prohibited, specifically when it is to the detriment of the customer. The best execution duty applies to the price the customer received, exclusive of commissions, markups, or markdowns.",
          concept: "Best execution is the cornerstone customer-protection rule for order handling. Firms must periodically — at minimum quarterly — conduct a regular and rigorous review of execution quality on a security-by-security and order-type basis.",
          parameters: [
            "Factors for reasonable diligence: character of the market (price, volatility, liquidity), size and type of transaction, number of markets checked, accessibility of quotation, terms and conditions of the order",
            "Periodic review required at minimum quarterly; security-by-security and order-type basis",
            "Receiving firm (not sending firm) subject to best execution rules when customer directs routing",
            "Applies to equity and debt securities, agency and principal capacity"
          ],
          exceptions: [
            "Interpositioning not prohibited if execution was demonstrably advantageous to the customer (e.g., use of a broker's broker, crossing with another retail order, protecting customer identity)",
            "Channel through a third party allowed if: party is an established correspondent, customer's firm name is provided, customer is not charged for correspondent's services"
          ],
          examTip: "The quarterly review is the minimum standard for best execution. Know that the best execution obligation applies to the price the customer received — commissions/markups do not affect this measurement. Inadequate personnel is NOT a valid reason for failing to obtain best price."
        }
      ]
    },
    {
      name: "Options Position Limits and Reporting",
      rules: [
        {
          id: "options-position-exercise-limits",
          name: "Options Position and Exercise Limits",
          category: "Regulation",
          language: "Exchanges have established exercise limits on the amount of options that an individual (or a group of individuals acting in concert) may exercise within any five consecutive business days. Exchanges have also established position limits — the maximum number of contracts that an individual or group acting in concert may hold at any one time. Exercise and position limits differ for each underlying security based on trading volume and outstanding shares.",
          concept: "Position and exercise limits prevent corners or manipulation via concentrated options positions. Both long calls and short puts are on the same side of the market (bullish side); short calls and long puts are on the other (bearish). Acting in concert includes investment advisers controlling multiple accounts.",
          parameters: [
            "Clients must agree in writing to abide by position and exercise limits upon opening an account",
            "Long side of market: long calls and short puts",
            "Short side of market: short calls and long puts",
            "Limits are based on volume of trading and shares outstanding on any side of the market",
            "Hedge exemptions: certain option strategies qualify for a position limit five times the standard limit"
          ],
          exceptions: [
            "Regulators may further limit or prohibit opening short option contracts if uncovered short positions in a class have exceeded regular position limits"
          ],
          examTip: "Know the sides: long calls and short puts = same (bullish) side; short calls and long puts = same (bearish) side. A customer cannot use both legs to exceed the limit — e.g., long 2,500 calls and short 2,500 puts both add to the same side, totaling 5,000 — a position-limit violation if the limit is 4,000."
        },
        {
          id: "lopr-large-options-position-report",
          name: "Large Options Position Report (LOPR)",
          category: "FINRA Rule",
          language: "Member firms must report to the exchange all long and short positions of 200 contracts or more in a single class of option contracts. The report (LOPR) must be submitted on the business day following the date on which the customer's position reached the 200-contract reporting level. Each report must indicate the customer's name, address, Social Security or tax identification number, and whether short positions are covered or uncovered. Reports of uncovered short option positions must be filed within two business days when requested by regulators.",
          concept: "Surveillance tool enabling exchanges to identify concentrated options positions. Applies to customers, the member firm itself, and partners, officers, and employees of the member firm.",
          parameters: [
            "Reporting threshold: 200 contracts or more in a single class",
            "Submission deadline: business day following the day the position reached 200 contracts",
            "Required information: customer name, address, SSN or tax ID, covered/uncovered status of short positions",
            "Reports required for all positions: customers, member firm, partners, officers, employees"
          ],
          exceptions: [],
          examTip: "LOPR threshold: 200 contracts in a single option class. Due the next business day after the threshold is reached. Covers the firm's own positions, employees, AND customers — it is not just a customer reporting requirement."
        }
      ]
    }
  ]
};
