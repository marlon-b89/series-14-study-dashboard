// Chapter 5 – SEC Trading Rules
window.CHAPTER_5 = {
  id: 5,
  title: "SEC Trading Rules",
  subtitle: "Regulation NMS (Rules 602, 605, 606, 607, 610, 611, 612), Manning Rule, and Regulation SHO (Rules 200, 201, 203, 204)",
  sections: [
    {
      name: "Regulation NMS – Overview and Quote Rules",
      rules: [
        {
          id: "reg-nms-overview",
          name: "Regulation National Market System (Reg NMS) – Overview",
          category: "Regulation",
          language: "Regulation NMS is a set of rules passed by the SEC to refine how all listed U.S. stocks are traded. It requires non-discriminatory access to quotations, automated execution of orders, and limit order protection on an interexchange basis. Market centers that participate in the National Market System must provide automated trading systems and implement procedures designed to prevent trade-throughs at inferior prices of protected quotations. For a quotation to be protected, it must be the best price in its respective market center and it must be immediately and automatically accessible.",
          concept: "Reg NMS is the foundational framework for modern U.S. equity market structure. A trade-through occurs when an order is executed at a price inferior to the contemporaneous inside market (buy executed above the lowest offer, or sell executed below the highest bid). NMS securities include stocks traded on Nasdaq, the NYSE, and regional stock exchanges.",
          parameters: [
            "Applies to NMS securities: Nasdaq-listed, NYSE-listed, and all regional exchange-listed stocks",
            "Protected quotation: must be the best price at its market center AND immediately and automatically accessible",
            "Manual quotes are not protected quotations and are not subject to the Order Protection Rule",
            "Market centers must provide automated trading systems",
            "Trade-through: executing a buy order above the lowest available offer or a sell order below the highest available bid"
          ],
          exceptions: [],
          examTip: "The two requirements for a quotation to be 'protected' under Reg NMS: (1) best price at its market center and (2) immediately and automatically accessible. Manual quotes are never protected. Only protected quotations trigger the anti-trade-through obligation of Rule 611."
        },
        {
          id: "reg-nms-rule-602",
          name: "SEC Rule 602 – The Quote Rule (Firm Quote Rule)",
          category: "SEC Rule",
          language: "Rule 602 covers the dissemination of quotes and was designed to improve the quality and transparency of U.S. markets. When a market maker disseminates a quote that is covered by the rule, it is obligated to execute an order that is presented to it at a price at least as favorable as its published quote, for an amount up to its published quote size. If a market maker does not publish a quote with a size specified, the size is assumed to be the normal unit of trading, which is 100 shares. Failure to honor a firm quote is a violation referred to as backing away.",
          concept: "The Firm Quote Rule: market makers must execute at their published quote for up to their published size when an order is presented. 'Backing away' from a firm quote is a violation. The obligation begins when the order is presented, regardless of how it is transmitted.",
          parameters: [
            "Market maker must execute at a price at least as favorable as its published quote for up to its published quote size",
            "Obligation begins when order is presented, regardless of transmission method (verbal, phone, or electronic)",
            "If no size is specified in the quote, size defaults to 100 shares (normal unit of trading)",
            "Failure to honor a firm quote is called backing away — a violation"
          ],
          exceptions: [
            "Market maker communicated a revised price or size to Nasdaq prior to the presentation of the order",
            "Market maker just effected or is in the process of effecting a transaction at the time the order is presented AND immediately upon completion communicates a revised quote to Nasdaq (the trade-ahead exception)"
          ],
          examTip: "Backing away is the term for refusing to honor a firm quote. There are only two exceptions: (1) the quote was revised before the order arrived, and (2) the market maker was actively executing another trade at that exact moment and immediately updates its quote upon completion. Both exceptions require that the revised quote be communicated to Nasdaq immediately."
        },
        {
          id: "reg-nms-round-lots-mdi",
          name: "Regulation NMS – Mandated Round Lots (Market Data Infrastructure Rules)",
          category: "SEC Rule",
          language: "On November 3, 2025, the SEC implemented new definitions for round lots under the Market Data Infrastructure (MDI) rules. The new rule has four round lot tiers based on share price: $1–$250 = 100 shares; $250.01–$1,000 = 40 shares; $1,000.01–$10,000 = 10 shares; above $10,000.01 = 1 share. Quotation sizes are now displayed in actual shares (rounded down to the nearest multiple of the assigned round lot size) rather than in number of round lots.",
          concept: "The MDI rules updated round lot definitions to reflect high share prices and changed quote display from number-of-lots to actual share count. Every six months, each NMS stock is reassigned to a tier based on its average closing price during a one-month evaluation period.",
          parameters: [
            "Share price $1–$250: round lot = 100 shares",
            "Share price $250.01–$1,000: round lot = 40 shares",
            "Share price $1,000.01–$10,000: round lot = 10 shares",
            "Share price above $10,000.01: round lot = 1 share",
            "Evaluation periods: March (effective first business day in May) and September (effective first business day in November)",
            "Quotation sizes now expressed in actual shares rounded down to the nearest multiple of the assigned round lot size (not number of round lots)",
            "Effective date: November 3, 2025"
          ],
          exceptions: [],
          examTip: "Before November 3, 2025, a quote of 5 x 10 meant 500 shares bid by 1,000 shares offered (5 lots x 100). After November 3, 2025, the same quote appears as 500 x 1,000 in actual shares. On exams, most questions involve stocks priced $1–$250 where the round lot remains 100 shares. For stocks at $600, the round lot is 40."
        },
        {
          id: "limit-order-display-rule",
          name: "Limit Order Display Rule",
          category: "SEC Rule",
          language: "If a customer limit order is accepted by a market maker and the price on the order improves that market maker's quote, the market maker must change its quote immediately to reflect the customer's interest. Under normal market conditions, the SEC interprets 'immediately' to mean within 30 seconds. If a market maker is at the inside market and accepts a customer limit order at the inside, it must also change its size to reflect the customer's interest, unless the order is de minimis (10% or less of the market maker's size).",
          concept: "Market makers must display customer limit orders that improve their price, ensuring that customer interest contributes to price discovery. The Display Rule applies only when a market maker accepts a limit order — it is not required to accept. Size at the inside must also be updated (unless de minimis). Display does not apply if inside market moves to the MM's price until the MM updates size.",
          parameters: [
            "Quote must be updated within 30 seconds of accepting a price-improving limit order under normal market conditions",
            "Abnormal conditions permitting relaxation of 30-second window: market openings, reopening after trading halt, beginning of trading for an IPO",
            "Size update required only when the market maker is at the inside market and accepts a limit order at the inside",
            "De minimis exception: if customer's order is 10% or less of the market maker's current size at the inside, size update is not required",
            "If inside market moves to the MM's price, MM must immediately update its quote size to reflect aggregate customer orders at that price",
            "Rule applies only when the market maker accepts the customer limit order — the MM is not required to accept every order"
          ],
          exceptions: [
            "Customer requests that the order not be displayed (must be individually negotiated; standardized new account disclaimers do not qualify)",
            "Block-size orders (at least 10,000 shares or $200,000 in market value)",
            "Odd-lot orders",
            "All-or-none orders",
            "Orders sent to another market or broker-dealer that complies with the Display Rule",
            "Orders sent to an ECN that agrees to display the order",
            "Orders executed immediately upon receipt"
          ],
          examTip: "The Display Rule has two components: price display and size display. Price display: must show when the customer's limit improves the MM's quote. Size display: only required if the MM is at the inside AND the order is not de minimis (over 10% of MM's size). Watch for the trick: the MM is NOT required to accept a limit order in the first place — the rule only applies once accepted."
        }
      ]
    },
    {
      name: "Manning Rule and Order Handling",
      rules: [
        {
          id: "manning-rule",
          name: "Manning Rule – Prohibition Against Trading Ahead of Customer Orders",
          category: "FINRA Rule",
          language: "FINRA considers it a violation of just and equitable business principles for member firms to trade ahead of customer orders. The market maker must execute the customer order immediately upon executing an order for its own account that would have filled the customer order. Immediately generally means within 60 seconds of an execution for the firm's account. Unless an exception applies, if a member firm accepts and holds a customer order (limit or market) in an equity security, it is prohibited from trading for its own account at a price that would satisfy the customer order.",
          concept: "The Manning Rule prevents broker-dealers from front-running customer orders by trading proprietarily at prices that would have filled the customer. Applies to both exchange-listed and OTC equity securities. If triggered, the firm must fill the customer order immediately (within 60 seconds) at the same or better price as the firm's own execution.",
          parameters: [
            "Applies to all equity securities: exchange-listed (NYSE, Nasdaq) and OTC",
            "Firm must protect customer limit and market orders from proprietary trading at the same or better price",
            "Immediately upon executing a proprietary trade that would fill the customer order, the firm must fill the customer order",
            "Immediately means within 60 seconds of the proprietary execution",
            "Firm may execute for its own account at the same price only if it immediately executes the customer order up to the same size at the same or better price",
            "If a Manning obligation is triggered, the firm must fill only as much of the customer order as it executed for its own account (partial fill obligation)",
            "Non-displayed limit orders that are held by the firm must still be protected under Manning",
            "Minimum price improvement required to avoid triggering Manning: $0.01 for NMS stocks priced at $1.00 or more",
            "For orders less than $1.00: minimum improvement is lesser of half the inside spread or $0.01 (if limit price above $0.01) or $0.001 (if limit price at least $0.001 but less than $0.01)",
            "Sending an order to an ECN or another market maker does NOT relieve the firm of its Manning obligations"
          ],
          exceptions: [
            "Institutional accounts: banks, insurance companies, S&Ls, registered investment companies, registered investment advisers, or entities with total assets of at least $50 million — with written or oral per-order disclosures",
            "Large orders: 10,000 shares or more, unless less than $100,000 in value — with written or oral per-order disclosures",
            "Intermarket Sweep Orders (ISOs)",
            "No-Knowledge Exception: firm has effective information barriers preventing one trading unit from obtaining knowledge of customer orders held by another unit",
            "Riskless Principal Exception: firm trades proprietarily to facilitate a customer order on a riskless principal basis; customer order must be executed within 60 seconds; firm must submit riskless principal trade report",
            "Odd-lot transactions: obligations do not apply to proprietary transactions for less than a normal unit of trading",
            "Bona fide error corrections"
          ],
          examTip: "Manning = firm must do for the customer at least what it did for itself. The 60-second window is the key timing rule. The minimum price improvement to avoid triggering Manning for an NMS stock priced at $1 or more is $0.01. Two institutional exceptions require prior written (or per-order oral) disclosure: institutional accounts ($50M+ assets) and large orders (10,000+ shares and at least $100,000 in value)."
        },
        {
          id: "payment-for-order-flow",
          name: "Payment for Order Flow (PFOF) and Manning Interaction",
          category: "SEC Rule",
          language: "Payment for order flow (PFOF) is the rebate, discount, or payment of cash for routing orders to another broker-dealer or exchange. Relationships wherein the cross of customer limit orders and market orders must be price-improved are payment for order flow, as well as reciprocal and correspondent arrangements. By accepting a PFOF arrangement, an executing broker-dealer has undertaken to provide best execution to all customer orders received from the order-routing firm.",
          concept: "When a broker-dealer routes orders under a PFOF or similar arrangement, the executing firm takes on best execution and Manning obligations for those orders. Non-displayed limit orders of the executing firm must be used to price-improve incoming market orders rather than executing the market order at the worse inside quote.",
          parameters: [
            "Executing broker under a PFOF arrangement must price-improve market orders when it holds a non-displayed customer limit order at a better price",
            "Disclosure required on customer confirmation: whether payment for order flow is received and source/nature of compensation available upon written request (per Rule 606)",
            "Non-PFOF relationships: market maker may execute incoming interdealer market orders at the inside market without price improvement, BUT still owes Manning-triggered fills on non-displayed customer limit orders"
          ],
          exceptions: [],
          examTip: "PFOF triggers best execution obligations for the routing relationship: the executing firm must price-improve the routed market order to the price of any non-displayed limit order it holds. Without a PFOF or similar relationship, an interdealer market order can be executed at the inside bid/offer — but Manning still applies if a non-displayed customer limit order exists at the same or better price."
        }
      ]
    },
    {
      name: "Regulation NMS – Access, Order Protection, and Pricing",
      rules: [
        {
          id: "reg-nms-rule-610",
          name: "SEC Rule 610 – The Access Rule",
          category: "SEC Rule",
          language: "SEC Rule 610 was established to promote fair and equal access to quotations. The Access Rule promotes access to protected quotations in three ways: (1) requires market participants to have access to quotations on Nasdaq, NYSE, NYSE American, and regional exchanges through a variety of approved private connectivity providers; (2) limits access fees to $0.003 per share to promote fairness and efficiency within the National Market System; (3) trading centers must establish written rules designed to prevent market participants from displaying quotations that lock or cross the market.",
          concept: "Rule 610 ensures that market participants can reach any protected quotation without discriminatory fees or access barriers. It also prohibits locked and crossed markets by requiring trading centers to have anti-lock/anti-cross policies. Locked markets occur when a bid equals another center's offer; crossed markets occur when a bid exceeds another center's offer.",
          parameters: [
            "Access fee cap: $0.003 per share for accessing protected quotations",
            "Market participants must have connectivity to all NMS exchanges through approved private providers",
            "Trading centers must establish written rules to prevent locked or crossed markets",
            "Locked market: a market center displays a bid at the same price as another center's lowest offer (or an offer equal to another center's highest bid)",
            "Crossed market: a market center displays a bid higher than another center's lowest offer (or an offer lower than another center's highest bid)"
          ],
          exceptions: [],
          examTip: "Rule 610 has three pillars: connectivity, fee cap ($0.003/share), and anti-lock/anti-cross rules. A locked market is bid = another center's offer; a crossed market is bid > another center's offer (or offer < another center's bid). Locked = equal; Crossed = inverted."
        },
        {
          id: "reg-nms-rule-611",
          name: "SEC Rule 611 – Order Protection Rule (Trade-Through Rule)",
          category: "SEC Rule",
          language: "SEC Rule 611 was established under Regulation NMS to prevent trade-throughs of protected quotations. A protected quotation is one that is immediately accessible through automatic execution. Rule 611 requires market centers to establish written policies and procedures that are designed to reasonably prevent trade-throughs within the National Market System by routing orders to the market center that displays the best price.",
          concept: "Rule 611 is the core anti-trade-through rule: market centers must route orders to wherever the best protected price is displayed rather than executing at an inferior price. ISOs are the primary exception that allow inferior-price executions simultaneously with sweeps of all better-priced protected quotations.",
          parameters: [
            "Applies to protected quotations: immediately accessible through automatic execution",
            "Manual quotes are not protected and are not subject to Rule 611",
            "Market centers must have written policies and procedures to prevent trade-throughs",
            "ISOs: limit orders designated as intermarket sweep orders may execute at inferior prices while simultaneously routing orders to all market centers with better protected prices",
            "Stopped orders: exempt if for a customer (not a broker-dealer), customer agreed to the stop price on an order-by-order basis, and execution price is better than the then-current NBBO",
            "Other exceptions: flickering quotations (multiple prices in a one-second period), material delay (trading center repeatedly fails to respond to an order within one second), VWAP orders, single-priced opening or closing transactions"
          ],
          exceptions: [
            "Intermarket Sweep Orders (ISOs): designated limit orders executed at inferior prices simultaneously with orders to all better-priced protected quotations",
            "Stopped orders for customer accounts where customer agreed to stop price on order-by-order basis and execution improves on the NBBO at time of execution",
            "Flickering quotations: multiple prices displayed within a one-second period",
            "Material delay: trading center repeatedly fails to respond within one second",
            "Benchmarked orders (e.g., VWAP orders)",
            "Single-priced opening or closing transactions by a market center"
          ],
          examTip: "The ISO exception is the most commonly tested Rule 611 exception. An ISO lets the BD execute at inferior prices in one market as long as it simultaneously sends orders to ALL market centers displaying better-priced protected quotes. The 'simultaneously' requirement is critical — it satisfies both the trade-through rule and best execution. Stopped orders for institutional customers are another key exception."
        },
        {
          id: "reg-nms-rule-612",
          name: "SEC Rule 612 – Minimum Pricing Increment (Sub-Penny Rule)",
          category: "SEC Rule",
          language: "Under Rule 612, national securities exchanges, national securities associations, alternative trading systems, vendors, and broker-dealers are prohibited from accepting bids, offers, or indications of interest for NMS stocks that are priced at $1.00 or more in increments smaller than $0.01. For NMS stocks priced less than $1.00, increments smaller than $0.0001 (a hundredth of a cent) are prohibited.",
          concept: "Rule 612 prevents sub-penny pricing, which can be used to gain order queue priority without meaningful price improvement. The rule applies uniformly to all market participants and venues. Two price tiers: $1.00+ stocks use $0.01 minimum increments; stocks under $1.00 use $0.0001 minimum increments.",
          parameters: [
            "NMS stocks priced at $1.00 or more: minimum increment is $0.01 (two decimal places)",
            "NMS stocks priced less than $1.00: minimum increment is $0.0001 (four decimal places)",
            "Applies to: national securities exchanges, national securities associations, ATSs, vendors, and broker-dealers",
            "Applies to bids, offers, and indications of interest"
          ],
          exceptions: [],
          examTip: "The sub-penny rule is straightforward: $1.00 or more = penny increments ($0.01); under $1.00 = sub-penny allowed but only to $0.0001 (four decimal places). For a $1.00+ stock, a quote of $18.559 is not acceptable — $18.56 is the minimum valid increment. For a stock under $1.00, $0.51598 is not acceptable but $0.5159 is."
        },
        {
          id: "vwap-orders",
          name: "Volume-Weighted Average Price (VWAP) Orders",
          category: "SEC Rule",
          language: "A volume-weighted average price order is typically placed by an institutional investor and is calculated by totaling the dollar value of each trade (number of shares times price) and dividing by the total shares traded over a given period. Since the broker-dealer is guaranteeing a price to a client that is unknown, the firm will typically seek the client's permission to engage in bona fide hedging and proprietary trading, although the firm cannot trade for its own account in a manner that harms the client who placed the VWAP order.",
          concept: "VWAP orders guarantee the institutional client the volume-weighted average price over a specified period. Because the final price is unknown at order entry, VWAP orders are exempt from the Order Protection Rule (Rule 611). The executing firm may hedge but cannot disadvantage the VWAP client through its trading.",
          parameters: [
            "VWAP is calculated: sum of (shares x price) for each trade divided by total shares over the period",
            "Order entered prior to the client knowing the actual execution price",
            "Exempt from Rule 611 (Order Protection Rule)",
            "Firm may engage in bona fide hedging and proprietary trading with client permission",
            "Firm cannot trade in a way that harms the VWAP order client",
            "Other trading desks may trade the stock provided proper information barriers are in place",
            "Firm may execute a customer order received prior to the VWAP order, but cannot share VWAP information with another trading desk"
          ],
          exceptions: [],
          examTip: "VWAP = total dollar cost divided by total shares. For exam calculations: multiply each fill quantity by its price, sum all dollar amounts, divide by total shares. VWAP orders are exempt from the Order Protection Rule (listed as an exception to Rule 611). The firm must maintain information barriers so other desks do not exploit knowledge of the VWAP order."
        }
      ]
    },
    {
      name: "Disclosure Rules – Rules 605, 606, and 607",
      rules: [
        {
          id: "reg-nms-rule-605",
          name: "SEC Rule 605 – Market Center Execution Quality Reports",
          category: "SEC Rule",
          language: "SEC Rule 605 requires market centers to disclose order-execution information. A market center is considered any national securities exchange or association, alternative trading system, OTC market maker, or member firm that internalizes orders. Market centers that trade National Market System stocks are required to produce monthly electronic reports that include uniform statistical measures of execution quality for covered orders.",
          concept: "Rule 605 creates uniform, publicly available monthly reports on how well each market center executes orders. This enables broker-dealers and institutional investors to compare execution quality across venues. A covered order includes market and limit orders received and executed during normal business hours (9:30 a.m.–4:00 p.m. ET).",
          parameters: [
            "Market centers must publish monthly electronic execution quality reports",
            "Reports must be made public",
            "Covered order: any market or limit order received and executed during normal business hours (9:30 a.m. to 4:00 p.m. ET)",
            "Covered orders include immediate-or-cancel orders but exclude orders with special customer instructions",
            "Required disclosures: effective spreads; comparison of market order execution to public quotes by order size; execution with price improvement and price disimprovement; fill rates; execution speed",
            "Covered securities: any NMS stock (Nasdaq-listed, NYSE-listed, and other exchange-listed securities)"
          ],
          exceptions: [
            "Orders in which the client provides special instructions are not covered orders under Rule 605"
          ],
          examTip: "Rule 605 = execution quality reports from MARKET CENTERS (monthly). Rule 606 = order routing reports from BROKER-DEALERS (quarterly). These two rules complement each other: 605 shows how venues execute, 606 shows how BDs route to those venues. A common exam trap is mixing up who reports under each rule."
        },
        {
          id: "reg-nms-rule-606",
          name: "SEC Rule 606 – Broker-Dealer Order Routing Reports",
          category: "SEC Rule",
          language: "Each calendar quarter, Rule 606 requires a broker-dealer to make its order-routing information publicly available for all non-directed orders in NMS securities, which includes securities listed on the NYSE, NYSE American, Nasdaq, and exchange-listed options. A directed order is one in which the customer designates the execution venue. A non-directed order is one in which the broker-dealer chooses the place of execution because the customer has not made a market center determination.",
          concept: "Rule 606 provides transparency into how broker-dealers route customer orders, including any payment for order flow arrangements. Reports must be broken down by month, posted free on the firm's website, and accessible for three years. The rule was enhanced to also require detailed not-held order disclosures for institutional customers.",
          parameters: [
            "Quarterly reports required for non-directed orders in NMS stocks and listed options",
            "Reports must be broken down by calendar month and posted on a free website accessible to the public",
            "Reports must be accessible for three years following initial posting",
            "NMS stock section must be separated into: (1) S&P 500 stocks and (2) all other NMS stocks",
            "Each section must disclose: percentage of orders that were non-directed; percentages of non-directed orders that were market orders, marketable limit orders, non-marketable limit orders, and other orders; material aspects of the relationship with each venue including any PFOF arrangements",
            "Customer-specific requests: broker-dealer must disclose routing information for held NMS stock orders, not-held NMS stock orders, and options orders for the six months prior to the request",
            "Not-held order disclosures (section b(3)): required for institutional customers; includes execution routing, order execution, liquidity-providing and liquidity-removing statistics, and fees/rebates",
            "At least annually, institutional customers must be notified in writing that detailed order routing reports are available upon request",
            "Customer confirmation must disclose whether PFOF is received and that source/nature of compensation is available upon written request"
          ],
          exceptions: [],
          examTip: "Rule 606 covers BROKER-DEALER routing (quarterly) while Rule 605 covers MARKET CENTER execution (monthly). Rule 606 splits NMS stocks into S&P 500 vs. non-S&P 500. The not-held order disclosure (subsection b(3)) is the major 2018 amendment targeted at institutional best execution transparency. PFOF must be disclosed on each customer confirmation."
        },
        {
          id: "sec-rule-607",
          name: "SEC Rule 607 – Payment for Order Flow Disclosure",
          category: "SEC Rule",
          language: "According to SEC Rule 607, a broker-dealer that acts as agent for a customer is required to provide written disclosures at the time of account opening and annually thereafter. The disclosures include the policies and procedures regarding the receipt of payment for order flow and the effect that payment for order flow has on sending orders to a specific market center.",
          concept: "Rule 607 operationalizes PFOF disclosure at the account level. The broker-dealer acting as agent must make two disclosures: PFOF policies at account opening and annually, and per-trade confirmation disclosure (under Rule 606) of whether PFOF is received. This gives customers visibility into conflicts inherent in order routing.",
          parameters: [
            "Disclosure timing: at account opening AND annually thereafter",
            "Must disclose: policies and procedures regarding receipt of PFOF",
            "Must disclose: effect of PFOF on routing orders to specific market centers",
            "Applies to broker-dealers acting as agent for a customer"
          ],
          exceptions: [],
          examTip: "Rule 607 has a two-part disclosure requirement: (1) at account opening and (2) annually. It is separate from the per-trade confirmation requirement. Together with Rule 606, Rule 607 creates a full-disclosure regime for PFOF from account-open through every trade confirmation."
        }
      ]
    },
    {
      name: "Regulation SHO – Short Selling Rules",
      rules: [
        {
          id: "reg-sho-overview",
          name: "Regulation SHO – Overview and Scope",
          category: "Regulation",
          language: "In early 2004, the SEC adopted Regulation SHO, which modernizes the rules and creates uniform standards regarding short sales. Regulation SHO applies to equity securities and any security that is convertible into an equity security (e.g., convertible bonds). Regulation SHO clarifies the order-marking requirement of broker-dealers: any sell order ticket must be marked either long or short.",
          concept: "Reg SHO was adopted to address abuses in uncovered (naked) short selling, where positions were not properly borrowed prior to the short sale. It established uniform locate, marking, and closeout requirements across all equity securities. Non-reporting threshold securities (private company stock, unsponsored ADRs) are subject to a FINRA rule modeled after Reg SHO rather than Reg SHO itself.",
          parameters: [
            "Applies to: all equity securities and securities convertible into equity securities (e.g., convertible bonds)",
            "Non-reporting threshold securities (e.g., private company stock, unsponsored ADRs) are not subject to Reg SHO; they are subject to a FINRA rule modeled after Reg SHO",
            "Three key components: order marking (Rule 200), circuit breaker restrictions (Rule 201), locate and delivery requirements (Rule 203), and closeout requirements (Rule 204)"
          ],
          exceptions: [],
          examTip: "Reg SHO applies to exchange-listed and Nasdaq equities and convertible securities. It does NOT apply to non-reporting equities (private company stock, unsponsored ADRs traded OTC) — those are governed by a parallel FINRA rule. Remember this carve-out."
        },
        {
          id: "reg-sho-rule-200",
          name: "SEC Rule 200 – Definitions and Order Marking",
          category: "SEC Rule",
          language: "Under Rule 200, a person is considered an owner of a security if he has purchased the security or entered into an unconditional and binding contract to make the purchase but has not yet received the security. A broker-dealer must aggregate all of its positions in a security to determine its net position, except in instances where the broker-dealer qualifies for independent trading unit aggregation. The order-marking requirement requires a broker-dealer to mark all sell orders either long, short, or short exempt.",
          concept: "Rule 200 defines ownership for short sale purposes and establishes the three-way marking requirement. 'Long' means own and expect to deliver by settlement. 'Short' means do not own, or own but do not expect to deliver by settlement. 'Short exempt' means the seller qualifies for an exception to Rule 201's circuit breaker restrictions.",
          parameters: [
            "A person owns a security if they have purchased it or entered into an unconditional and binding contract to purchase it, even if not yet received",
            "A person also owns a security if they hold a security futures contract to purchase it and have received notification of physical settlement",
            "Broker-dealer must aggregate all positions to determine net long or short position",
            "Independent trading unit aggregation: each unit determines its own net position if (a) documented organization plan identifies each aggregation unit with specified trading objectives; (b) at time of each sale, each aggregation unit determines its net position for every security it trades; (c) all traders follow trading objectives of their unit without coordinating with another unit; (d) individual traders may be assigned to only one unit at any time",
            "Order marking — Long: seller owns the security AND it is in possession/control of the broker-dealer, OR reasonably expected to be delivered by no later than settlement day",
            "Order marking — Short: seller owns the security but does not reasonably believe it will be in possession/control of the broker-dealer by settlement day; OR seller does not own the security; OR any sale effected by delivery of borrowed securities",
            "Order marking — Short Exempt: sale order in which the seller is exempt from SEC Rule 201"
          ],
          exceptions: [],
          examTip: "Three possible markings under Rule 200: Long, Short, or Short Exempt. 'Short Exempt' is exclusively the marking for orders exempt from Rule 201 (the circuit breaker). If you own the stock but cannot deliver by settlement (e.g., certificates in transfer), the order is marked SHORT, not long. This is a frequent exam trap."
        },
        {
          id: "reg-sho-rule-201",
          name: "SEC Rule 201 – Alternative Uptick Rule (Circuit Breaker)",
          category: "SEC Rule",
          language: "Rule 201 requires a trading center to restrict short selling (no shorting at the bid or lower) if a covered security declines by 10% or more from the prior trading day's closing price. A covered security is any NMS security, which includes any equity security listed on the NYSE, Nasdaq, or the NYSE American. The rule does not apply to securities quoted in the Pink Limited Market. The restriction applies during the remainder of the trading day in which the 10% decline is triggered and through the next business day. The 10% decline is measured against the prior day's regular trading hours closing price.",
          concept: "Rule 201 is an alternative uptick rule (sometimes called the circuit breaker short sale restriction). Once triggered by a 10% intraday decline, only short sales priced above the national best bid are permitted for the remainder of that day and the following trading day. The restriction can be retriggered if the stock continues to fall.",
          parameters: [
            "Trigger: NMS security declines 10% or more from the prior day's regular trading hours closing price",
            "Restriction duration: remainder of the trading day of the trigger and through the next business day",
            "Restriction: no short sale may be displayed or executed at the bid or lower; short sales only permitted at a price above the national best bid",
            "If the stock continues to fall after triggering, the circuit breaker can be retriggered",
            "Applies to: all NMS securities (NYSE, Nasdaq, NYSE American listed)",
            "Does NOT apply to: securities quoted in the Pink Limited Market",
            "SEC did not specify a minimum price increment above the national best bid; the minimum increment under Rule 612 applies"
          ],
          exceptions: [
            "A sale by an owner of the security who will deliver the security as soon as all restrictions are removed",
            "Odd-lot transactions by a market maker",
            "Domestic or international arbitrage",
            "Short sale by an underwriter in connection with an overallotment",
            "Riskless principal transaction by a broker-dealer effecting a customer long sale (provided certain conditions are satisfied)",
            "VWAP transactions",
            "Note: there is NO exception for bona fide market-making activities (unlike previous price test rules)"
          ],
          examTip: "The circuit breaker is triggered at 10% decline from the PRIOR day's close and lasts for the REST of that day plus the NEXT business day. Short exempt marking is used for orders qualifying under a Rule 201 exception. Critical trap: bona fide market makers do NOT get an exception under Rule 201 — this differs from prior uptick rules and from Rule 203's locate requirement."
        },
        {
          id: "reg-sho-rule-203",
          name: "SEC Rule 203 – Locate and Borrowing Requirements",
          category: "SEC Rule",
          language: "Prior to effecting a short sale, a broker-dealer must locate securities that can be used for delivery by the settlement date. A broker-dealer cannot accept an order to sell short an equity security for a person, or for its own account, unless one of the following locate conditions is met (and documented): (1) the broker-dealer has borrowed the security or entered into an arrangement to borrow the security; or (2) the broker-dealer reasonably believes that it can borrow the security for delivery on the date that delivery is due.",
          concept: "Rule 203 is the locate requirement for short sales. Before accepting a short sale order, the broker-dealer must either have borrowed the security or have a reasonable belief that it can be borrowed by settlement. The Easy to Borrow list (less than 24 hours old) provides a safe harbor for the reasonable belief standard.",
          parameters: [
            "Broker-dealer must locate securities before effecting a short sale",
            "Locate condition options: (1) borrowed or arranged to borrow the security, OR (2) reasonably believes the security can be borrowed for delivery by settlement date",
            "Documentation required: which locate condition exists",
            "Easy to Borrow lists: must be less than 24 hours old; provide reasonable grounds for belief that a security will be available to be borrowed",
            "For long sales: if the broker-dealer knows or should know a sale is marked long, it must make delivery by settlement date; borrowed securities cannot be used to make delivery on a long sale",
            "Fail to deliver threshold security closeout: if a broker-dealer has a fail to deliver in a threshold security for 13 consecutive settlement days, it must close out immediately on the morning of the 14th settlement day",
            "For Rule 144 sales: closeout deadline is 35 consecutive settlement days; if not delivered within 35 days after trade date, close out immediately (on the 36th day)",
            "Threshold security: equity security registered under Section 12 or reporting under Section 15(d) of the Exchange Act with aggregate fail to deliver of 10,000+ shares AND at least 0.5% of total outstanding shares for five consecutive settlement days, with the security listed by an SRO on its threshold list",
            "Once a BD with a fail to deliver in a threshold security has been in that position for 13 consecutive settlement days, it cannot accept new short sales in that security without first borrowing or arranging to borrow",
            "Non-reporting threshold securities (private company stock, unsponsored ADRs) are not subject to Reg SHO — subject to FINRA rule instead"
          ],
          exceptions: [
            "Short sale by a market maker in connection with bona fide market-making activity is exempt from the locate requirement (unlike Rule 201 which has no market maker exception)",
            "If broker-dealer A accepts a short sale from broker-dealer B: BD B must meet the locate requirement unless BD A has contractual responsibility to comply",
            "Sale on behalf of an owner who will deliver when restrictions are removed: if the person fails to deliver within 35 days after the trade date, the BD must borrow or buy to close out the position (e.g., seller owns restricted Rule 144 stock with legend not yet removed)"
          ],
          examTip: "Rule 203 has a bona fide market maker exception for the locate requirement — this is the OPPOSITE of Rule 201 where market makers do NOT get an exception. Threshold security = 10,000+ shares and at least 0.5% of outstanding shares failing to deliver for 5 consecutive settlement days. Closeout on the 14th settlement day for regular fails; 36th day for Rule 144 fails."
        },
        {
          id: "reg-sho-rule-204",
          name: "SEC Rule 204 – Fail-to-Deliver Closeout Requirements",
          category: "SEC Rule",
          language: "Unless a certain exemption applies, broker-dealers that have fails (as a result of not being able to deliver the equity security by the settlement date) are required to immediately purchase or borrow the security to close out the fail. This rule requires a broker-dealer that sells an equity security to either deliver the security by settlement date (T+1), or immediately purchase or borrow the security by no later than the beginning of trading on the next settlement day (T+2). If the firm is not in compliance, no short sales in that security are permitted by the broker-dealer or any broker-dealer for which it clears, unless the security has been preborrowed.",
          concept: "Rule 204 is the universal closeout rule that applies to ALL equity securities (not just threshold securities). It has a tighter timeline than the Rule 203 threshold security rule. If a firm fails to close out, it and all firms it clears for are locked out of short selling in that security until the position is closed or preborrowed.",
          parameters: [
            "Default: broker-dealer must deliver equity security by T+1 settlement date OR immediately purchase or borrow by no later than the beginning of trading on T+2",
            "Failure to comply: broker-dealer and all broker-dealers for which it clears are prohibited from short selling the security unless they have preborrowed",
            "Applies to ALL equity securities (not just threshold securities)",
            "Long sale fail closeout: three settlement days following settlement date (T+4) — two extra settlement days granted",
            "Bona fide market-making activities fail closeout: three settlement days following settlement date (T+4) — two extra settlement days granted",
            "Bona fide market making includes: registered market makers, options market makers, and other market makers obligated to quote OTC equities",
            "Owner-of-record exception (similar to Rule 203): if fail results from a sale by a person determined to be the owner, and the BD is informed the person will deliver when restrictions are removed — if person fails to deliver within 35 calendar days after trade date, BD must close out immediately on the 36th day"
          ],
          exceptions: [
            "Long sales: three settlement days after settlement date (T+4) to close out",
            "Bona fide market-making activities: three settlement days after settlement date (T+4) to close out",
            "Owner of record with restricted delivery: 35 calendar days from trade date; close out on day 36 if not delivered (e.g., Rule 144 restricted stock with legend pending removal)"
          ],
          examTip: "Rule 204 has two extended closeout deadlines: (1) long sale fails and (2) bona fide market-making fails both get T+4 (S+3). All other short sale fails must be closed out by the beginning of trading on T+2. Rule 204 applies to ALL equity securities; Rule 203's 13-day threshold rule applies only to threshold securities. The lockout consequence — no new short sales for you or firms you clear for — is one of the most testable features of Rule 204."
        }
      ]
    }
  ]
};
