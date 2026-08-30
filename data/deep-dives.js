// Long-form concept write-ups for the 10 highest-leverage Series 14 concepts.
// Each article is 800-1500 words of rich HTML with structured sections,
// callouts (trap/tip), comparison tables, and a cross-link back to the
// chapter-by-chapter rules dashboard.
window.DEEP_DIVES = [
  {
    id: "reg-bi",
    jobFunction: "F8",
    title: "Regulation Best Interest (Reg BI)",
    summary: "The BD conduct standard that replaced suitability for retail recommendations — four obligations, Form CRS, and the fiduciary line.",
    readMin: 8,
    tldr: "Regulation Best Interest requires broker-dealers and their associated persons to act in the <strong>best interest</strong> of a retail customer at the time a recommendation of a securities transaction or account type is made, without placing the firm's interests ahead of the customer's. Compliance rests on four specific obligations — Disclosure, Care, Conflict of Interest, and Compliance — plus Form CRS. Reg BI is <strong>not</strong> a fiduciary standard; the fiduciary duty under the Advisers Act still governs investment advisers.",
    body: `
<h2>Why this matters</h2>
<p>Reg BI is arguably the most tested rule on the sales-practice side of the Series 14. Effective June 30, 2020, it displaced FINRA's older suitability standard (Rule 2111) for retail recommendations by broker-dealers. Any question that mentions a retail customer, a recommendation, a rollover, or account-type advice is a Reg BI question — and the exam loves to confuse it with the Investment Advisers Act fiduciary duty. A Senior Compliance Officer is expected to know exactly which regime applies, what the four component obligations require, and how Form CRS interacts with the rest of the disclosure regime.</p>

<h2>The rule</h2>
<p>Reg BI (17 CFR 240.15l-1) applies when a <strong>broker-dealer or associated person</strong> makes a <strong>recommendation</strong> of a securities transaction or investment strategy (including account-type recommendations and rollovers) to a <strong>retail customer</strong>. A retail customer is a natural person, or the legal representative of one, who uses the recommendation primarily for personal, family, or household purposes.</p>
<p>The general obligation — act in the retail customer's best interest without placing the firm's or associated person's interests ahead of the customer's — is satisfied only by complying with all four component obligations:</p>
<ul>
  <li><strong>Disclosure Obligation.</strong> Before or at the time of the recommendation, disclose in writing all material facts about the scope and terms of the relationship (capacity, fees, type/scope of services, material limitations on products) and all material facts about conflicts of interest. Form CRS is the primary vehicle at account opening.</li>
  <li><strong>Care Obligation.</strong> Exercise reasonable diligence, care, and skill to (1) understand the potential risks/rewards/costs of the recommendation, (2) have a reasonable basis to believe it is in the customer's best interest based on the customer's investment profile, and (3) when recommending a series of transactions, that the series is not excessive.</li>
  <li><strong>Conflict of Interest Obligation.</strong> Establish, maintain, and enforce written policies and procedures reasonably designed to identify and at a minimum disclose or eliminate conflicts, mitigate conflicts creating incentives to place firm interests ahead of the retail customer, and <strong>eliminate</strong> sales contests, sales quotas, bonuses, and non-cash comp based on the sale of specific securities or specific types of securities within a limited period.</li>
  <li><strong>Compliance Obligation.</strong> Establish, maintain, and enforce written policies and procedures reasonably designed to achieve compliance with Reg BI as a whole.</li>
</ul>

<h2>Form CRS (Relationship Summary)</h2>
<p>Both broker-dealers and investment advisers that serve retail investors must deliver <strong>Form CRS</strong>: at or before the earliest of (a) recommending an account type or security to a retail investor, (b) placing an order for the investor, or (c) opening a brokerage account. It is a short (2-page BD, 4-page dual) plain-English summary of relationship, services, fees, conflicts, standard of conduct, disciplinary history, and mandated "conversation starter" questions. Amendments must be posted within 30 days of a material change.</p>

<h2>Parameters to memorize</h2>
<table>
  <thead><tr><th>Item</th><th>Reg BI (BDs)</th><th>Advisers Act (IAs)</th></tr></thead>
  <tbody>
    <tr><td>Standard</td><td>Best interest at time of recommendation</td><td>Fiduciary duty (duty of care + duty of loyalty), continuing</td></tr>
    <tr><td>Who is covered</td><td>Retail customer (natural person, personal purpose)</td><td>All advisory clients</td></tr>
    <tr><td>Trigger</td><td>Recommendation of security, strategy, account type, or rollover</td><td>Entire advisory relationship</td></tr>
    <tr><td>Disclosure vehicle</td><td>Form CRS + Reg BI disclosures</td><td>Form ADV Parts 2A/2B + Form CRS</td></tr>
    <tr><td>Sales contests</td><td>Prohibited on specific securities / limited-time basis</td><td>Fiduciary duty analysis</td></tr>
    <tr><td>Effective</td><td>June 30, 2020</td><td>Since 1940</td></tr>
  </tbody>
</table>

<h2>Applying the rule in practice</h2>
<p>Compliance officers implement Reg BI through a combination of technology, training, and documentation. Firms typically deploy suitability-plus-cost engines that score each recommendation against the customer's stated investment profile, flag high-cost or high-commission products, and require enhanced documentation when a lower-cost alternative was reasonably available. Registered representatives must document the basis for a recommendation contemporaneously, including consideration of reasonably available alternatives (RAAs) — the Care Obligation does not require review of every product on earth, but the firm's WSPs must define the RAA universe. Rollover recommendations are the single most examined touchpoint post-2020: representatives must compare the current plan's fees, services, and features to those of the receiving account and document the rationale.</p>
<p>Enforcement patterns since 2020 emphasize conflicts around variable annuities, non-traded REITs, private placements sold to retail customers, and rollover recommendations from ERISA plans. The SEC's 2023 Bulletin on Conflicts of Interest reiterates that mere disclosure of a conflict does not, by itself, discharge the Conflict of Interest Obligation when the conflict creates an incentive to place firm interests ahead of the customer.</p>
<h2>Common exam traps</h2>
<div class="callout trap"><p><strong>Trap:</strong> The question says "the adviser owes a best-interest duty." Reg BI applies to <strong>broker-dealers</strong>. Registered investment advisers owe a <strong>fiduciary duty</strong> under the Investment Advisers Act of 1940 — that duty is broader (loyalty + care, ongoing) than Reg BI's transaction-anchored best-interest standard. Reg BI never made BDs fiduciaries.</p></div>
<div class="callout trap"><p><strong>Trap:</strong> A one-time recommendation of an IRA rollover to a retail investor is a Reg BI event even if no security is transacted the same day. Account-type and rollover recommendations are explicitly covered.</p></div>

<h2>Study checklist</h2>
<div class="callout tip"><p><strong>Tip:</strong> Learn the four obligations as a mnemonic — <em>DCCC</em> (Disclosure, Care, Conflict, Compliance). If any answer choice implies a "suitable but not best interest" recommendation is acceptable for a retail customer, it is wrong. Also remember: mitigate <em>or</em> disclose most conflicts, but <strong>eliminate</strong> product-specific sales contests.</p></div>
<ul>
  <li>Know retail customer definition (natural person + personal/family/household use).</li>
  <li>Recite the four obligations and one concrete example of each.</li>
  <li>Form CRS timing, length limits, 30-day amendment posting.</li>
  <li>Contrast Reg BI (BD, transaction-anchored) vs. fiduciary duty (IA, ongoing).</li>
  <li>Rollovers, account-type recommendations, and implicit hold recommendations are covered.</li>
</ul>
<p>Rule cards to review after: <a href="./rules/#chapter-8" target="_blank" rel="noopener">Chapter 8 — Customer Accounts</a>.</p>
`
  },

  {
    id: "reg-nms",
    jobFunction: "F2",
    title: "Regulation NMS",
    summary: "Rules 610/611/612/605/606 — access, order protection, sub-penny, execution quality, order-routing disclosures.",
    readMin: 9,
    tldr: "Regulation NMS is the SEC's 2005 framework linking the national market system. The five rules you must know cold: <strong>Rule 610</strong> (fair access, $0.003 access fee cap), <strong>Rule 611</strong> (Order Protection Rule against trade-throughs of protected quotes), <strong>Rule 612</strong> (sub-penny quoting ban), <strong>Rule 605</strong> (market-center execution quality reports), and <strong>Rule 606</strong> (broker order-routing and PFOF disclosures).",
    body: `
<h2>Why this matters</h2>
<p>Function 2 (Markets and Operations) is the single largest weighting on the exam at 20 items, and Reg NMS is the backbone of that function. Every US exchange, ATS, and wholesale market maker operates under these rules. Series 14 questions repeatedly test the numeric parameters and which rule covers which behavior — trade-throughs, access-fee caps, sub-penny quotes, PFOF disclosures. Miss the rule number and you miss the question.</p>

<h2>The rules</h2>
<p><strong>Rule 610 — Access to Quotations.</strong> Requires fair and non-discriminatory access to protected quotations, prohibits automated trading centers from "locking or crossing" protected quotations (bidding at or above the best offer, or offering at or below the best bid), and caps the access fee a trading center may charge to <strong>$0.003 per share</strong> for NMS stocks priced $1.00 or more (a fraction of 1% for sub-$1 stocks). The cap is why exchange maker-taker rebates cluster in the tenth-of-a-cent range.</p>
<p><strong>Rule 611 — Order Protection Rule (Trade-Through Rule).</strong> Trading centers must establish, maintain, and enforce policies reasonably designed to prevent the execution of trades at prices inferior to <strong>protected quotations</strong>. A protected quotation is the best bid or best offer of an automated trading center that is displayed and immediately accessible. Key exceptions:</p>
<ul>
  <li><strong>Intermarket Sweep Order (ISO)</strong> exception — a limit order routed with simultaneous ISOs sent to every better-priced protected quote.</li>
  <li>Self-help (a market is failing to respond).</li>
  <li>Flickering quotes (protected quote displayed for less than one second).</li>
  <li>Benchmark trades (VWAP), stopped orders at a customer-agreed price, single-priced opening/closing/reopening.</li>
</ul>
<p><strong>Rule 612 — Sub-Penny Rule.</strong> No exchange, ATS, broker, or dealer may display, rank, or accept a quotation or order in an NMS stock priced <strong>$1.00 or greater</strong> in an increment smaller than <strong>$0.01</strong>. For stocks priced under $1.00, the minimum increment is <strong>$0.0001</strong>. Executions (not quotes) may occur at sub-penny increments as a result of midpoint or price-improvement executions.</p>
<p><strong>Rule 605 — Market-Center Execution Quality.</strong> Market centers must publish monthly, standardized execution-quality statistics: effective spread, realized spread, price improvement, speed, and fill rates by order size and type. Publicly available; the retail investor's tool for comparing market centers.</p>
<p><strong>Rule 606 — Broker Order Routing Disclosures.</strong> Broker-dealers publish quarterly public reports on order routing for non-directed customer orders (with venue percentages, payment for order flow, profit-sharing arrangements), and provide customer-specific routing reports on request for the prior six months. Amendments (2018/2020) expanded Rule 606(a) covered order types and added Rule 606(b)(3) institutional NMS-stock order handling reporting.</p>
<h2>How the pieces fit together</h2>
<p>Reg NMS built a virtual national order book from many physical venues. Rule 611 forces every automated trading center to honor every other automated trading center's best displayed quote — that is what makes the collection of exchanges function as a single market. Rule 610 backstops 611 by guaranteeing that any market participant can reach any protected quote on fair terms and at a bounded cost. Rule 612 keeps the pricing grid legible by preventing sub-penny quote games that would push meaningful quotes off the top of the book. Rules 605 and 606 provide the transparency layer that lets investors, regulators, and academics evaluate execution quality and monitor the influence of payment for order flow.</p>
<p>The Order Protection Rule is what necessitated the intermarket sweep order. Without ISOs, a broker that wanted to execute a large marketable order at a single venue would have to first walk the book of every other automated trading center — impractical at speed. An ISO carries a representation that the sender has simultaneously routed orders to all better-priced protected quotes, freeing the receiving venue to execute at its own price. Firms that use ISOs bear responsibility for meeting that representation, and misuse is a common enforcement theme.</p>
<p>Recent SEC rulemaking (Rules approved in 2024) added new tick-size regimes and a reduced access-fee cap for certain low-tick stocks, but the core Reg NMS architecture — 610/611/612/605/606 — remains the tested framework.</p>

<h2>Parameters to memorize</h2>
<table>
  <thead><tr><th>Rule</th><th>Topic</th><th>Key number</th></tr></thead>
  <tbody>
    <tr><td>610</td><td>Access fee cap (≥$1 stock)</td><td>$0.003 per share</td></tr>
    <tr><td>610</td><td>Locked/crossed markets</td><td>Prohibited</td></tr>
    <tr><td>611</td><td>Trade-through</td><td>Protected quotes only, ISO/flicker/self-help exceptions</td></tr>
    <tr><td>612</td><td>Minimum quote increment ≥$1</td><td>$0.01</td></tr>
    <tr><td>612</td><td>Minimum quote increment &lt;$1</td><td>$0.0001</td></tr>
    <tr><td>605</td><td>Execution quality — who reports</td><td>Market centers, monthly</td></tr>
    <tr><td>606</td><td>Order routing / PFOF — who reports</td><td>Broker-dealers, quarterly + on request</td></tr>
  </tbody>
</table>

<h2>Common exam traps</h2>
<div class="callout trap"><p><strong>Trap:</strong> Rule 605 is filed by <strong>market centers</strong> (exchanges, ATSs, market makers) — Rule 606 by <strong>broker-dealers</strong>. Reversing them is the classic wrong answer.</p></div>
<div class="callout trap"><p><strong>Trap:</strong> Rule 611 protects only the <strong>top-of-book (best) quote</strong> of an automated trading center, not depth of book. Manual quotes, and quotes displayed for less than one second (flickering), are not protected.</p></div>

<h2>Study checklist</h2>
<div class="callout tip"><p><strong>Tip:</strong> Memorize the rule numbers as a stack — 605/606 are the disclosure pair, 610/611/612 are the market-structure trio. If a question says "PFOF" or "payment for order flow disclosure" the answer is <strong>Rule 606</strong>.</p></div>
<ul>
  <li>Access fee cap $0.003 for stocks ≥$1.</li>
  <li>Sub-penny prohibition applies to quoting, not execution.</li>
  <li>ISO mechanics: sends simultaneous sweeps to all better-priced protected quotes.</li>
  <li>Rule 605 = market center; Rule 606 = broker-dealer.</li>
  <li>OPR exceptions: ISO, self-help, flicker, benchmark, single-priced open/close.</li>
</ul>
<p>Rule cards to review after: <a href="./rules/#chapter-5" target="_blank" rel="noopener">Chapter 5 — SEC Trading Rules</a>.</p>
`
  },

  {
    id: "reg-sho",
    jobFunction: "F2",
    title: "Regulation SHO",
    summary: "Short-sale rules — locate, close-out, threshold securities, and the Rule 201 alternative uptick.",
    readMin: 7,
    tldr: "Regulation SHO governs short selling of equity securities. Memorize four rules: <strong>Rule 200</strong> (order marking long/short/short-exempt), <strong>Rule 201</strong> (alternative uptick / circuit-breaker triggered by a 10% intraday decline), <strong>Rule 203</strong> (locate requirement before a short sale), and <strong>Rule 204</strong> (mandatory close-out of fails to deliver by T+1 morning after settlement).",
    body: `
<h2>Why this matters</h2>
<p>Reg SHO consolidated the old short-sale rules after the collapse of the uptick rule in 2007. It underpins how prime brokers, wholesalers, and market makers manage locates, delivery, and short-sale marking. Exam items focus on the mechanics: who must locate, when close-out is required, when the price test kicks in, and how threshold securities are treated.</p>

<h2>The rules</h2>
<p><strong>Rule 200 — Marking.</strong> Every sell order in an equity security must be marked <em>long</em>, <em>short</em>, or <em>short exempt</em>. A "long" mark requires that the seller is deemed to own the security and either has it in the account or reasonably expects to deliver it before settlement.</p>
<p><strong>Rule 201 — Alternative Uptick / Circuit Breaker.</strong> If a covered security's intraday price drops <strong>10% or more</strong> from the prior day's closing price, a circuit breaker is triggered; for the remainder of that day and all of the next trading day, short sales of the security may be executed or displayed only at a price <strong>above the current national best bid</strong>. Short-exempt orders (e.g., certain arbitrage, VWAP, or riskless principal) are exempt. Broker-dealers must have written policies to prevent execution or display of impermissible short sales.</p>
<p><strong>Rule 203 — Locate Requirement.</strong> Before accepting or effecting a short sale for its own account or a customer, a broker-dealer must have (1) borrowed the security, (2) entered into a bona-fide arrangement to borrow it, or (3) reasonable grounds to believe the security can be borrowed and delivered by settlement date. The locate must be documented. <strong>Bona-fide market making</strong> is exempted from the locate requirement (but not from close-out).</p>
<p><strong>Rule 204 — Close-Out.</strong> A participant of a registered clearing agency (typically the introducing/clearing broker) must close out a fail-to-deliver:</p>
<ul>
  <li><strong>Short sale fails:</strong> by no later than the beginning of regular trading hours on <strong>T+1</strong> settlement day plus one business day (i.e., the morning after settlement day — since T+1 settlement began May 28, 2024, close-out is by the open on T+2).</li>
  <li><strong>Long sale fails and fails from bona-fide market making:</strong> allowed additional time — close-out by the morning of settlement day plus three business days.</li>
</ul>
<p>If a participant fails to close out, the participant and any broker-dealer for which it clears may not effect further short sales in that security without a <strong>pre-borrow</strong> (not just a locate) — the "penalty box."</p>
<p><strong>Threshold Securities.</strong> An SRO publishes a daily list of securities with aggregate fails ≥10,000 shares and ≥0.5% of shares outstanding for five consecutive settlement days. Additional attention and reporting apply.</p>

<h2>Parameters to memorize</h2>
<table>
  <thead><tr><th>Item</th><th>Threshold / Timing</th></tr></thead>
  <tbody>
    <tr><td>Rule 201 circuit breaker</td><td>10% intraday decline from prior close</td></tr>
    <tr><td>Rule 201 duration</td><td>Rest of day + entire next trading day</td></tr>
    <tr><td>Rule 201 restriction</td><td>Short sale must be priced &gt; national best bid</td></tr>
    <tr><td>Locate (Rule 203)</td><td>Documented before short sale; MM exempt</td></tr>
    <tr><td>Close-out short fails (Rule 204)</td><td>Open of T+1 morning after settlement</td></tr>
    <tr><td>Close-out long / MM fails</td><td>Open of settlement day + 3 business days</td></tr>
    <tr><td>Pre-borrow penalty</td><td>Applies until fail is closed out and purchase settles</td></tr>
    <tr><td>Threshold list</td><td>≥10,000 shares AND ≥0.5% shares out, 5 consecutive days</td></tr>
  </tbody>
</table>

<h2>How the rule works in practice</h2>
<p>Prime brokerage locate desks maintain "easy-to-borrow" lists — securities the firm has ready availability to borrow — updated at least daily. A customer or trading desk that wants to short must confirm that the security is on the ETB list, or obtain a specific locate quote from the securities-lending desk that the firm documents in a locate log. The Rule 203 documentation obligation is not optional; SEC enforcement actions repeatedly cite failures to maintain locate logs and post-trade delivery-versus-locate reconciliation.</p>
<p>When the Rule 201 circuit breaker triggers, exchanges disseminate a short-sale-restriction (SSR) flag for the affected security. Order-management systems must recognize the flag and reprice or reject short sell orders that would execute at or below the current NBB. Broker-dealers must maintain written policies that also cover routing decisions — a firm cannot escape the price test by routing to a dark pool that lacks the appropriate controls.</p>
<p>Rule 204's penalty box is the enforcement teeth of Reg SHO. When a clearing participant misses a close-out, the participant and every broker it clears for must pre-borrow — not merely locate — before every short sale in the affected security. That constraint typically cascades into fee spikes and stress on securities-lending desks, providing strong economic incentive for timely close-outs.</p>
<h2>Common exam traps</h2>
<div class="callout trap"><p><strong>Trap:</strong> Rule 201 is <strong>not</strong> the old uptick rule. Short sales are permitted below the last trade price — they simply must be priced <strong>above the current best bid</strong> for the covered day-plus-one window. And the circuit breaker triggers off a 10% decline from the <strong>prior day's close</strong>, not intraday high.</p></div>
<div class="callout trap"><p><strong>Trap:</strong> A "locate" is not a "borrow." A broker can rely on reasonable grounds to believe delivery is possible — but if a fail occurs and is not closed out, the firm goes into the penalty box requiring a <strong>pre-borrow</strong> for further shorts.</p></div>

<h2>Study checklist</h2>
<div class="callout tip"><p><strong>Tip:</strong> Cluster the rules by verb: <em>Mark</em> the order (200) → <em>Locate</em> before the short (203) → if the stock drops 10% <em>uptick</em> restriction kicks in (201) → if the trade fails, <em>close it out</em> (204).</p></div>
<ul>
  <li>Mark every sale — long / short / short-exempt.</li>
  <li>Alternative uptick triggers at 10%, lasts rest-of-day + next full day.</li>
  <li>Locate required for shorts; documented; MM exemption.</li>
  <li>Close-out short fails by open T+1 after settlement; failure → pre-borrow.</li>
  <li>Threshold securities: 10,000/0.5%/5 days.</li>
</ul>
<p>Rule cards to review after: <a href="./rules/#chapter-5" target="_blank" rel="noopener">Chapter 5 — SEC Trading Rules</a>.</p>
`
  },

  {
    id: "reg-m",
    jobFunction: "F6",
    title: "Regulation M",
    summary: "Anti-manipulation rules for distributions — Rules 101, 102, 104 stabilization, and 105 short-sale prohibition.",
    readMin: 8,
    tldr: "Regulation M prevents distribution participants from artificially conditioning the market for a security being offered. <strong>Rule 101</strong> restricts distribution participants (underwriters, dealers), <strong>Rule 102</strong> restricts issuers and affiliated purchasers, <strong>Rule 104</strong> permits limited stabilizing bids at prices not exceeding the highest independent bid, and <strong>Rule 105</strong> bars covering a short sold during the 5-business-day period before pricing with securities from the offering.",
    body: `
<h2>Why this matters</h2>
<p>Reg M is a Function 6 (Investment Banking) staple. It is the SEC's anti-manipulation framework around securities offerings and is tightly interwoven with syndicate operations, stabilization, and the mechanics of secondary offerings. Series 14 questions test the restricted-period math, which rule applies to whom, the stabilizing-bid limit, and the Rule 105 short-sale trap that has generated dozens of SEC enforcement actions against hedge funds.</p>

<h2>The rules</h2>
<p><strong>Rule 101 — Distribution Participants.</strong> During the applicable <strong>restricted period</strong>, distribution participants (underwriters, prospective underwriters, brokers, dealers, and their affiliated purchasers) may not bid for, purchase, or induce others to bid for or purchase a covered security. Restricted-period length depends on the security's trading characteristics:</p>
<ul>
  <li><strong>0 days</strong> — Actively traded securities (ADTV ≥ $1,000,000 and public float value ≥ $150,000,000).</li>
  <li><strong>1 business day</strong> — Securities with ADTV ≥ $100,000 and float ≥ $25,000,000.</li>
  <li><strong>5 business days</strong> — All other covered securities.</li>
</ul>
<p>The restricted period ends at completion of participation in the distribution. Excepted activities include odd-lot transactions, unsolicited transactions, basket transactions, exercises of standardized options, and Rule 144A transactions.</p>
<p><strong>Rule 102 — Issuers and Affiliated Purchasers.</strong> The same conceptual restrictions, but applied to the <strong>issuer</strong> and <strong>affiliated purchasers</strong> (which includes officers, directors and affiliates that participate in the offering). Rule 102 is stricter — fewer exceptions than Rule 101 — because insiders have more information and more incentive to move the market.</p>
<p><strong>Rule 104 — Stabilizing and Other Activities.</strong> Permits stabilizing bids (a bid to peg, fix, or stabilize the price to facilitate the offering) subject to strict limits:</p>
<ul>
  <li>Only <strong>one</strong> stabilizing bid at a time.</li>
  <li>The stabilizing bid must be at a price <strong>no higher than the highest independent bid</strong>, and cannot exceed the offering price.</li>
  <li>The bid must be identified as a stabilizing bid to the market.</li>
  <li><strong>Penalty bids</strong> (reclaiming the selling concession from a syndicate member whose customer flipped the security) and <strong>syndicate covering transactions</strong> (buying to cover a syndicate short) are permitted with disclosure.</li>
</ul>
<p><strong>Rule 105 — Short Selling in Connection with a Public Offering.</strong> It is unlawful for any person to purchase the offered security from an underwriter or broker-dealer participating in an offering if that person effected a short sale of the same security during the <strong>Rule 105 restricted period</strong>, which is the shorter of (a) the period beginning <strong>five business days before pricing</strong> and ending with pricing, or (b) the period beginning with the initial filing of the registration statement/Reg A notification and ending with pricing. Applies to firm-commitment secondary offerings of common equity. Limited exceptions: bona-fide purchase before pricing, separate accounts, and investment companies.</p>

<h2>Parameters to memorize</h2>
<table>
  <thead><tr><th>Rule</th><th>Who is restricted</th><th>Key parameter</th></tr></thead>
  <tbody>
    <tr><td>101</td><td>Distribution participants</td><td>Restricted period 0 / 1 / 5 business days based on ADTV+float</td></tr>
    <tr><td>102</td><td>Issuers &amp; affiliated purchasers</td><td>Same periods, fewer exceptions</td></tr>
    <tr><td>104</td><td>Syndicate manager</td><td>One stabilizing bid, ≤ highest indep. bid, ≤ offering price</td></tr>
    <tr><td>105</td><td>Any purchaser in secondary offering</td><td>Cannot cover short sold in 5 business days pre-pricing with offering shares</td></tr>
  </tbody>
</table>
<p><strong>ADTV/float thresholds for Rule 101:</strong> Actively traded = ADTV ≥ $1M and float ≥ $150M. Middle tier = ADTV ≥ $100K and float ≥ $25M.</p>

<h2>Applying the rule</h2>
<p>On a follow-on offering, the syndicate desk begins tracking the restricted period as soon as pricing is contemplated. Compliance identifies whether the security is "actively traded" using ADTV data for the two full calendar months prior to the offering filing. If yes, the Rule 101 restriction collapses to zero days and the trading desk can continue market-making activity through pricing. If no, the desk must be flat and stop bidding for the applicable one- or five-business-day window. Rule 102 obligations for the issuer and its affiliated purchasers overlap but often extend further — issuer buyback programs must be suspended even if the corresponding Rule 101 window is zero.</p>
<p>Rule 104 stabilization is more theoretical than practical for the highest-volume US IPOs; most syndicates rely on the <strong>Green Shoe (over-allotment) option</strong> combined with covering short sales to manage aftermarket price support. When stabilization is used, only the syndicate manager may place the bid, only one bid may be outstanding, and the bid must be flagged to the market as stabilizing. Penalty bids allow the syndicate to reclaim the selling concession from a syndicate member whose customers flipped stock in the aftermarket, provided that practice is disclosed.</p>
<p>Rule 105 has generated a steady stream of SEC settled orders — many involving hedge funds that participated in secondary offerings while inadvertently maintaining short positions established during the restricted period. The remedy is disgorgement, prejudgment interest, and a civil penalty. Because Rule 105 is strict liability, good-faith arguments about Chinese walls between desks generally do not prevail; the SEC treats the fund as a single legal person.</p>
<h2>Common exam traps</h2>
<div class="callout trap"><p><strong>Trap:</strong> Rule 105 is a <strong>strict-liability</strong> rule — no scienter required. A hedge fund that shorts during the five business days before pricing and then buys any offering shares (even for a different desk) faces disgorgement. The exam loves this as a "the trader had no intent to manipulate" distractor.</p></div>
<div class="callout trap"><p><strong>Trap:</strong> Stabilizing bids under Rule 104 may be placed at a price <em>up to</em> the highest independent bid — not above it — and never above the public offering price. Only <strong>one</strong> stabilizing bid may be outstanding at any time.</p></div>

<h2>Study checklist</h2>
<div class="callout tip"><p><strong>Tip:</strong> Reg M is a "who + when" rule. Ask yourself: who is buying (participant/issuer/anyone) → what is the security's ADTV and float → how many days before pricing? The four rule numbers 101/102/104/105 map onto participants / issuers / stabilization / short-covering.</p></div>
<ul>
  <li>Rule 101 restricted-period tiers: 0 / 1 / 5 business days.</li>
  <li>Rule 104: one bid, at or below highest independent bid, at or below offering price.</li>
  <li>Rule 105: 5-business-day-pre-pricing short cannot be covered with offering securities.</li>
  <li>Actively-traded exception: ADTV ≥ $1M and float ≥ $150M.</li>
</ul>
<p>Rule cards to review after: <a href="./rules/#chapter-2" target="_blank" rel="noopener">Chapter 2 — Underwriting</a>.</p>
`
  },

  {
    id: "net-capital",
    jobFunction: "F4",
    title: "Rule 15c3-1 — Net Capital",
    summary: "The firm's solvency backstop — aggregate indebtedness ratios, minimum dollar floors, haircuts, and early-warning triggers.",
    readMin: 8,
    tldr: "Rule 15c3-1 requires every registered broker-dealer to maintain minimum net capital at all times. Firms elect either the <strong>aggregate indebtedness (AI) standard</strong> (AI cannot exceed 1500% of net capital — a 15:1 ratio) or the <strong>alternative standard</strong> (net capital must be at least 2% of aggregate debit items from the Rule 15c3-3 reserve formula). Minimum dollar floors range from $250,000 for clearing firms down to $5,000 for certain limited BDs. Early-warning ratios trigger at 12:1 (AI) or 5% (alternative).",
    body: `
<h2>Why this matters</h2>
<p>Financial responsibility rules are the third rail of broker-dealer regulation. A firm that drops below net capital must cease business, notify FINRA and the SEC immediately, and may be liquidated under SIPA. Every Series 14 candidate must be able to compute net capital, apply haircuts to inventory, and recognize the numeric triggers that require additional notice or restrict withdrawals of equity capital.</p>

<h2>The rule</h2>
<p><strong>Net capital</strong> is essentially the firm's net worth adjusted to a highly liquid basis. Start with owner's equity, subtract non-allowable (illiquid) assets (fixed assets, unsecured receivables, non-marketable securities), then apply <strong>haircuts</strong> to marketable proprietary securities to reflect market risk. Add back approved subordinated loans that satisfy Appendix D.</p>
<p>A firm chooses one of two standards:</p>
<ul>
  <li><strong>Aggregate Indebtedness (AI) standard.</strong> Aggregate indebtedness (essentially unsecured liabilities) may not exceed <strong>1,500% of net capital</strong>. That is a <strong>15:1</strong> ratio. During the first 12 months after commencing business, the limit is <strong>800% (8:1)</strong>.</li>
  <li><strong>Alternative standard.</strong> Net capital must be at least the greater of the firm's dollar minimum or <strong>2% of aggregate debit items</strong> in the Rule 15c3-3 reserve formula. Firms that self-clear typically elect the alternative standard.</li>
</ul>
<p><strong>Minimum dollar floors</strong> depend on firm type:</p>
<table>
  <thead><tr><th>Firm type</th><th>Minimum</th></tr></thead>
  <tbody>
    <tr><td>Carrying / clearing firm (holds customer funds and securities)</td><td>$250,000</td></tr>
    <tr><td>Introducing firm receiving customer checks (payable to the clearing firm)</td><td>$50,000</td></tr>
    <tr><td>Market maker in equities</td><td>$100,000 (plus $1,000 or $2,500 per stock quoted, capped at $1,000,000)</td></tr>
    <tr><td>Prime broker</td><td>$1,500,000</td></tr>
    <tr><td>Firm effecting mutual fund / variable annuity subscription-way business only</td><td>$5,000</td></tr>
    <tr><td>Broker-dealer that does not receive or hold customer funds/securities and does not carry accounts</td><td>$5,000</td></tr>
  </tbody>
</table>

<h2>Haircuts</h2>
<p>Haircuts are percentage reductions applied to the market value of proprietary securities to arrive at net capital. Sample values:</p>
<ul>
  <li>US Treasuries: 0% to 6% depending on maturity (e.g., ≤3 months: 0%; 5–10 years: 3%; &gt;25 years: 6%).</li>
  <li>Municipal securities: category- and maturity-based, up to 7%.</li>
  <li>Corporate debt: typically 2% to 9% investment grade.</li>
  <li>Common stock and convertibles: <strong>15%</strong> haircut on the greater of the long or short market value.</li>
  <li>Undue concentration: an additional 15% haircut on securities positions exceeding 10% of net capital.</li>
</ul>

<h2>Early-warning and withdrawal restrictions</h2>
<ul>
  <li><strong>Rule 17a-11 early warning:</strong> A firm must notify the SEC (via FINRA) within 24 hours if AI exceeds <strong>1,200% of net capital (12:1)</strong> under the AI standard, or if net capital falls below <strong>5% of aggregate debits</strong> under the alternative standard.</li>
  <li><strong>Restriction on withdrawals of equity capital:</strong> Withdrawals require prior SEC/FINRA notice if they would reduce net capital such that AI exceeds <strong>1,000% (10:1)</strong> or net capital falls below <strong>6% of aggregate debits</strong>, or would reduce net capital by more than 30% in any rolling 30-day period.</li>
  <li><strong>Below minimum:</strong> Firm must immediately cease conducting a securities business and file a notice under Rule 17a-11. Failure can trigger SIPA liquidation via a court-appointed SIPC trustee.</li>
</ul>

<h2>How firms manage net capital day to day</h2>
<p>Financial and Operations Principals (FinOps) compute net capital <strong>daily</strong> for firms of any size. The general ledger is closed each morning; the resulting balance sheet feeds a net-capital computation with the previous day's positions, haircuts, and receivables. Firms operate with substantial cushion — often 2–5x their required minimum — precisely because a single day's loss, a large customer margin debit, or a securities-borrowed shortfall can whipsaw the ratio.</p>
<p>Practical levers include: converting non-allowable receivables to cash before month-end; using approved subordinated loans (which count as equity for net capital purposes and cannot be repaid without prior FINRA approval); reducing proprietary inventory to lower haircut exposure; and paying down bank loans to reduce aggregate indebtedness. Firms subject to consolidated supervision under Alternative Net Capital rules operate under Appendix E with SEC-approved internal models — the regime used by the largest broker-dealers.</p>
<p>The consequences of falling below minimum are severe and immediate. The firm must cease conducting a securities business (with limited exceptions for liquidating positions) and file a Rule 17a-11 notice with the SEC and FINRA. If the deficiency cannot be cured, the SEC or SIPC can seek appointment of a <strong>SIPA trustee</strong> to liquidate the firm — the process that resolved MF Global, Lehman Brothers Inc., and Bear Stearns's remaining broker-dealer estate. Customer accounts are protected up to SIPC limits ($500,000 per customer, of which $250,000 may be cash).</p>
<h2>Common exam traps</h2>
<div class="callout trap"><p><strong>Trap:</strong> The 15:1 ratio applies to <strong>aggregate indebtedness / net capital</strong>, not the other way around. If a firm has $200,000 net capital, its AI may not exceed $3,000,000. First-year firms are limited to 8:1.</p></div>
<div class="callout trap"><p><strong>Trap:</strong> Subordinated debt that meets Appendix D qualifies as <strong>equity for net capital purposes</strong>, not as aggregate indebtedness — a favorite quick-boost financing tool for firms nearing an early-warning threshold.</p></div>

<h2>Study checklist</h2>
<div class="callout tip"><p><strong>Tip:</strong> Remember the three ratios as a ladder: <strong>15:1 hard limit → 12:1 early warning → 10:1 withdrawal restriction</strong>. On the alternative side: <strong>2% minimum → 5% early warning → 6% withdrawal restriction</strong>.</p></div>
<ul>
  <li>Choose AI standard (15:1) or alternative (2% of debits).</li>
  <li>Know the minimum dollar floors — especially $250K clearing, $50K introducing, $100K market maker, $5K subscription-way.</li>
  <li>Haircut common stock at 15%.</li>
  <li>Early warning: 12:1 or 5%.</li>
  <li>Withdrawal restriction: 10:1 or 6% or 30%-in-30-days.</li>
  <li>Below minimum → cease business, Rule 17a-11 notice, potential SIPA liquidation.</li>
</ul>
<p>Rule cards to review after: <a href="./rules/#chapter-13" target="_blank" rel="noopener">Chapter 13 — Financial Responsibility</a>.</p>
`
  },

  {
    id: "customer-protection",
    jobFunction: "F4",
    title: "Rule 15c3-3 — Customer Protection",
    summary: "Possession or control of customer securities and the weekly Special Reserve Bank Account computation.",
    readMin: 7,
    tldr: "Rule 15c3-3 has two goals: keep <strong>fully paid and excess margin securities</strong> segregated in possession or control, and keep <strong>customer credit balances</strong> segregated in a Special Reserve Bank Account for the Exclusive Benefit of Customers. The reserve computation is performed <strong>weekly</strong> (Friday-of-week close, deposit by 10:00 a.m. ET Tuesday) using a formula that subtracts customer-related debits from customer-related credits — deposit the excess.",
    body: `
<h2>Why this matters</h2>
<p>15c3-3 is the customer-money rule. Together with 15c3-1 it forms the financial-responsibility core of the exam and is why the SEC/FINRA can promise SIPC coverage to customers of failed broker-dealers. Compliance officers need to know exactly which securities must be segregated, how PAB (proprietary account of broker-dealers) balances are treated, and how the reserve formula works mechanically.</p>

<h2>The two prongs</h2>
<p><strong>1. Possession or Control (Section (b)).</strong> A carrying broker-dealer must promptly obtain and thereafter maintain physical possession or control of all <strong>fully paid securities</strong> and <strong>excess margin securities</strong> of customers.</p>
<ul>
  <li><em>Fully paid securities</em> — customer-owned securities for which the customer has paid in full.</li>
  <li><em>Excess margin securities</em> — customer margin securities whose market value exceeds <strong>140%</strong> of the customer's debit balance. The 140% is the number you memorize.</li>
  <li><em>Good control locations</em> — DTC or another registered clearing agency, a bank as defined in the Exchange Act, an omnibus account at another BD, or a transfer agent processing a transfer. Segregated customer securities may not be used to finance the firm's operations or lent for the firm's account.</li>
</ul>
<p>If a fail-to-receive results in customer securities not being in possession or control (a "customer securities deficiency"), the firm must take action within specific timeframes — including buying in the fail — to restore the position.</p>
<p><strong>2. Special Reserve Bank Account (Section (e) — the Reserve Formula).</strong> Compute weekly, as of Friday close, a reserve requirement equal to the excess of customer-related <strong>credits</strong> over customer-related <strong>debits</strong> under the formula set out in Exhibit A to Rule 15c3-3. Deposit cash or qualifying securities (US government or guaranteed) into a Special Reserve Bank Account no later than <strong>one hour after the opening of banking business on the second business day</strong> following the computation date. In practice: Friday computation → Tuesday morning deposit.</p>

<h3>Credits (partial list)</h3>
<ul>
  <li>Free credit balances in customer accounts.</li>
  <li>Monies borrowed collateralized by customer securities.</li>
  <li>Payables to customers (dividends, interest, sale proceeds pending settlement).</li>
  <li>Customer-related fails to receive.</li>
</ul>
<h3>Debits (partial list)</h3>
<ul>
  <li>Debit balances in customer margin accounts.</li>
  <li>Securities borrowed to make delivery on customer transactions.</li>
  <li>Customer-related fails to deliver.</li>
  <li>Margin required and on deposit with clearing agencies for customer transactions.</li>
</ul>
<p>Debit items can be increased by allowable haircut items, but individual debits are also subject to concentration and aged-fail reductions.</p>

<h2>PAB Accounts</h2>
<p>Since 2013, Rule 15c3-3 also requires a <strong>separate PAB reserve computation</strong> for proprietary accounts of broker-dealers (PAB). PAB securities must be treated substantively like customer securities: subject to possession or control, and PAB credits/debits fed through a parallel reserve formula with a separate Special Reserve Account for PAB. The rule protects other broker-dealers acting essentially as customers to a carrying firm.</p>

<h2>Parameters to memorize</h2>
<table>
  <thead><tr><th>Item</th><th>Number / Timing</th></tr></thead>
  <tbody>
    <tr><td>Excess margin threshold</td><td>Market value &gt; 140% of debit</td></tr>
    <tr><td>Reserve computation frequency</td><td>Weekly (Friday close)</td></tr>
    <tr><td>Deposit deadline</td><td>1 hour after banking open, 2nd business day after computation (typically Tuesday)</td></tr>
    <tr><td>Qualifying reserve deposits</td><td>Cash + US government / agency securities</td></tr>
    <tr><td>PAB reserve</td><td>Separate account and formula, same weekly cadence</td></tr>
    <tr><td>Monthly election</td><td>Small firms may elect monthly computation if reserve &lt; $1M and other conditions</td></tr>
  </tbody>
</table>

<h2>Applying the rule in practice</h2>
<p>Weekly reserve computations are performed by the FinOps/Regulatory Reporting team. The formula pulls from the general ledger's customer subledger accounts, securities-borrowed and loaned records, and stock-record positions. Excess of credits over debits is the required deposit; a shortfall means the firm has under-deposited and must add cash or qualifying securities immediately. Overages can be withdrawn subject to procedures.</p>
<p>Segregation is enforced via the daily stock record and "box count" reconciliation. Fully paid customer securities are identified daily and moved to segregated locations — DTC memo-segregation, physical vault, or transfer agent. Any deficits (customer securities that end the day out of a good control location) trigger action within specified timeframes: for a fail-to-receive that creates a customer deficiency, the firm must generally issue a buy-in within 30 calendar days if not resolved.</p>
<p>Enforcement patterns include failing to include specific credit items in the formula (undersized reserve), commingling customer and firm securities in a single DTC subaccount without proper memo segregation, and using customer margin securities as collateral for firm bank loans in excess of the 140% aggregate limit. The 2008 collapse of Lehman Brothers and 2011 collapse of MF Global drew intense regulatory focus on customer-protection weaknesses, resulting in the 2013 amendments that added the PAB reserve.</p>
<h2>Common exam traps</h2>
<div class="callout trap"><p><strong>Trap:</strong> Fully paid and excess margin securities must be in possession or control — not simply in the firm's DTC account. Rehypothecating customer securities to finance <strong>firm proprietary positions</strong> is prohibited; the firm may only pledge customer margin securities in aggregate up to 140% of the aggregate customer debit balance (see Rule 8c-1).</p></div>
<div class="callout trap"><p><strong>Trap:</strong> The reserve formula subtracts debits from credits. If a firm forgets to include a customer-related fail-to-receive as a credit, the reserve deposit will be understated — a classic exam calculation. Do not net individual customers; the formula is aggregate.</p></div>

<h2>Study checklist</h2>
<div class="callout tip"><p><strong>Tip:</strong> Two prongs, one rule: <em>segregation</em> (possession or control) and <em>reservation</em> (Special Reserve Bank Account). If a question mentions "fully paid" or "excess margin," it is a possession/control question. If it mentions "reserve," "credits," or "debits," it is a formula question.</p></div>
<ul>
  <li>Excess margin securities = value &gt; 140% of debit.</li>
  <li>Weekly Friday computation, Tuesday morning deposit.</li>
  <li>Deposits: cash or US government securities in the Special Reserve for Exclusive Benefit of Customers.</li>
  <li>Separate PAB reserve for broker-dealer customers.</li>
  <li>Firm cannot use customer funds/securities to finance proprietary trading.</li>
</ul>
<p>Rule cards to review after: <a href="./rules/#chapter-13" target="_blank" rel="noopener">Chapter 13 — Financial Responsibility</a>.</p>
`
  },

  {
    id: "rule-3110-supervision",
    jobFunction: "F5",
    title: "FINRA Rule 3110 — Supervision",
    summary: "WSPs, principal designations, OSJ inspections, correspondence review, plus Rules 3120, 3130, and 3170.",
    readMin: 8,
    tldr: "Rule 3110 requires every FINRA member to establish and maintain a written supervisory system reasonably designed to achieve compliance with applicable rules. That system must designate <strong>principals</strong>, define <strong>branch offices</strong> and <strong>Offices of Supervisory Jurisdiction (OSJ)</strong>, inspect OSJs and supervising branches <strong>annually</strong> and non-supervising branches at least every <strong>three years</strong>, and provide for review of correspondence and internal communications. Rules 3120 (annual testing), 3130 (CEO certification), and 3170 (taping) sit on top.",
    body: `
<h2>Why this matters</h2>
<p>Function 5 (General Supervision) is 20 items — tied for the largest weighting on the exam. Rule 3110 is the anchor. A compliance officer is expected to be able to build, defend, and audit a supervisory system. The exam probes the parameters: what makes an office an OSJ, how often inspections happen, and what the CEO must certify each year.</p>

<h2>The rule</h2>
<p><strong>3110(a) — Supervisory System.</strong> Each member must establish and maintain a system to supervise the activities of each associated person that is reasonably designed to achieve compliance with securities laws, regulations, and FINRA rules. The system must include:</p>
<ul>
  <li>Written procedures (WSPs).</li>
  <li>Designation of principals, including a Chief Compliance Officer.</li>
  <li>Designation of at least one principal in each OSJ and one principal in each branch office (or a plan for supervising remote branches).</li>
  <li>Assignment of each registered person to a supervisory principal.</li>
  <li>Reasonable efforts to determine that supervisors are qualified by virtue of experience or training.</li>
</ul>
<p><strong>3110(b) — Written Procedures.</strong> WSPs must cover, at minimum, supervision of the types of business in which the member engages, supervision of associated persons, review of transactions, review of correspondence and internal communications, and identification of business locations subject to inspection. <strong>Rule 3110(b)(4)</strong> specifically requires supervision of incoming and outgoing correspondence and internal communications.</p>
<p><strong>3110(c) — Internal Inspections.</strong> The member must conduct inspections:</p>
<ul>
  <li><strong>OSJs and supervising branch offices — annually</strong> (at least once per calendar year).</li>
  <li><strong>Non-supervising branches — at least every three years.</strong></li>
  <li><strong>Non-branch locations — on a regular periodic schedule</strong> reasonably designed based on the nature and complexity of activities and quality of supervision.</li>
</ul>
<p>Inspections must be documented in a written report and must, among other things, verify sales practice compliance and safeguarding of customer funds and securities.</p>
<p><strong>OSJ definition (3110(f)).</strong> An office is an OSJ if it is any of: (1) an office where market making or trading takes place; (2) an office that structures public offerings or private placements; (3) an office where retail sales activity is conducted and final approval of new accounts or advertising takes place; (4) an office responsible for the review and endorsement of customer orders; (5) an office that maintains custody of customer funds/securities; or (6) an office where supervisors of associated persons in other offices sit.</p>
<p><strong>Rule 3120 — Annual Testing and Verification.</strong> Each member must designate a principal or principals to test and verify the WSPs annually, prepare a written report, and submit it to senior management.</p>
<p><strong>Rule 3130 — CEO Certification.</strong> The CEO must certify annually that the member has processes to establish, maintain, review, test, and modify policies and procedures reasonably designed to achieve compliance with applicable rules — after meeting at least annually with the CCO to review those processes.</p>
<p><strong>Rule 3170 — Taping Rule.</strong> A "taping firm" — a firm that hires above certain thresholds of registered persons from disciplined firms — must, for a period of three years, tape record all telephone conversations between its registered persons and existing or potential customers. Thresholds (per Rule 3170) depend on firm size: e.g., for a firm with 5–9 registered persons, hiring <strong>40% or more</strong> from disciplined firms triggers the rule; the percentage steps down as firm size grows.</p>

<h2>Parameters to memorize</h2>
<table>
  <thead><tr><th>Item</th><th>Frequency / Trigger</th></tr></thead>
  <tbody>
    <tr><td>OSJ inspection</td><td>Annually</td></tr>
    <tr><td>Supervising branch inspection</td><td>Annually</td></tr>
    <tr><td>Non-supervising branch inspection</td><td>At least every 3 years</td></tr>
    <tr><td>Non-branch location inspection</td><td>Regular periodic schedule, risk-based</td></tr>
    <tr><td>3120 annual testing report</td><td>Annually, to senior management</td></tr>
    <tr><td>3130 CEO certification</td><td>Annually, after CCO meeting</td></tr>
    <tr><td>3170 taping period</td><td>3 years</td></tr>
  </tbody>
</table>

<h2>How this looks in a real supervisory program</h2>
<p>A modern supervisory program at a mid-sized broker-dealer typically pairs Rule 3110 with a risk-based approach. Retail branches with heavy transaction volume, complex products, or higher-risk registered representatives are prioritized for on-site inspections; low-risk non-branch teleworking locations receive remote inspections that verify licensing, correspondence review sampling, and trade blotter access. Inspections must be conducted by a person independent of the location being inspected wherever possible — the same-day principal cannot inspect his or her own office.</p>
<p>Rule 3120 testing looks at whether the WSPs, as written, achieve compliance and whether they are actually being followed. The annual report typically covers key risks (AML, cybersecurity, best execution, communications, complaints, outside business activities, private securities transactions, personal trading), sample-based testing results, exceptions, and remediation plans. The Rule 3130 CEO certification piggybacks on the 3120 report and the CEO's meeting with the CCO.</p>
<p>Rule 3170 is a corner-case rule but is heavily tested because it is quantitative. The thresholds are structured so that a small firm that hires a large fraction of its people from disciplined firms triggers taping, while a very large firm needs to hire a smaller fraction to trigger. Once triggered, the firm records all conversations between its registered persons and customers or prospective customers for three years, retains the recordings, and files a report with FINRA every three months describing supervision of the taped population.</p>
<h2>Common exam traps</h2>
<div class="callout trap"><p><strong>Trap:</strong> Not every branch office is an OSJ. A branch office (Rule 3110(f)(2)) is any location where one or more associated persons conducts securities business. It becomes an <strong>OSJ</strong> only if it meets one of the six OSJ triggers. Supervising branches are inspected annually even if not technically OSJs.</p></div>
<div class="callout trap"><p><strong>Trap:</strong> Correspondence review (3110(b)(4)) requires reasonable procedures for review of incoming and outgoing correspondence and internal communications. Firms are not required to review <strong>every</strong> communication — only to have reasonably designed procedures. However, the review must be evidenced (initialing, sampling logs, lexicon-based flagging).</p></div>

<h2>Study checklist</h2>
<div class="callout tip"><p><strong>Tip:</strong> Remember the inspection cadence as <strong>1 / 3 / risk</strong> — 1 year for OSJs and supervising branches, 3 years for other branches, risk-based schedule for non-branch locations.</p></div>
<ul>
  <li>Six OSJ triggers — market making, structuring offerings, final approval, order review/endorsement, custody, supervising other offices.</li>
  <li>3120 annual testing → written report → senior management.</li>
  <li>3130 CEO certifies annually after meeting with CCO.</li>
  <li>3170 taping thresholds vary by firm size; taping duration is 3 years.</li>
  <li>Correspondence review under 3110(b)(4) must be reasonable and evidenced.</li>
</ul>
<p>Rule cards to review after: <a href="./rules/#chapter-10" target="_blank" rel="noopener">Chapter 10 — General Supervision</a>.</p>
`
  },

  {
    id: "regulation-d",
    jobFunction: "F6",
    title: "Regulation D — Private Placements",
    summary: "Rules 504, 506(b), and 506(c); accredited investor definition; Form D filing timeline.",
    readMin: 8,
    tldr: "Regulation D provides safe harbors from Securities Act registration for private placements. <strong>Rule 504</strong> allows up to <strong>$10 million</strong> in any 12-month period. <strong>Rule 506(b)</strong> allows unlimited capital, up to <strong>35 non-accredited</strong> sophisticated purchasers, but <strong>no general solicitation</strong>. <strong>Rule 506(c)</strong> permits general solicitation, but every purchaser must be <strong>accredited AND verified</strong>. <strong>Form D</strong> must be filed with the SEC within <strong>15 calendar days</strong> after the first sale.",
    body: `
<h2>Why this matters</h2>
<p>Function 6 (Investment Banking) leans heavily on the offering safe harbors. Regulation D is the workhorse of private capital formation — the exemption used by virtually every private fund, PE deal, and private company financing. The exam tests the numeric parameters (dollar caps, purchaser counts, filing windows) and, crucially, the differences between 506(b) and 506(c).</p>

<h2>The rules</h2>
<p><strong>Rule 501 — Accredited investor definition.</strong> Includes:</p>
<ul>
  <li>Natural person with individual income &gt; <strong>$200,000</strong> in each of the two most recent years (or joint income &gt; <strong>$300,000</strong>) with a reasonable expectation of reaching the same level in the current year.</li>
  <li>Natural person with individual net worth (or joint net worth with spouse or spousal equivalent) exceeding <strong>$1,000,000, excluding primary residence</strong>.</li>
  <li>Since the SEC's 2020 amendments: natural persons holding in good standing the Series <strong>7, 65, or 82</strong> licenses; certain "knowledgeable employees" of private funds; certain family offices with $5M AUM; SEC-registered advisers; and specified entities meeting AUM/asset thresholds.</li>
</ul>
<p><strong>Rule 504.</strong> Permits offers and sales of up to <strong>$10,000,000</strong> in a 12-month period (the cap was raised from $5M in 2017 and again reaffirmed at $10M in the 2020 amendments). No specific limit on number of purchasers. No general solicitation as a matter of federal law unless the offering is limited to accredited investors under a state-registered offering. Not available to Exchange Act reporting companies, blank check companies, or investment companies. Rule 504 securities are typically restricted; general solicitation is available only in limited state-registered configurations.</p>
<p><strong>Rule 506(b).</strong> The classic private placement. Unlimited dollar amount. Sales to:</p>
<ul>
  <li>An unlimited number of <strong>accredited investors</strong>, and</li>
  <li>Up to <strong>35 non-accredited but sophisticated purchasers</strong> per offering.</li>
</ul>
<p><strong>No general solicitation or advertising</strong> is permitted. If any non-accredited investors participate, the issuer must furnish them with specified information similar to a registered offering (audited financials for larger offerings). Rule 506 offerings preempt state registration; the states are limited to notice filing and antifraud enforcement.</p>
<p><strong>Rule 506(c).</strong> Introduced in 2013 pursuant to the JOBS Act. Unlimited dollar amount. General solicitation and general advertising are <strong>permitted</strong>, but:</p>
<ul>
  <li>All purchasers must be <strong>accredited investors</strong>, and</li>
  <li>The issuer must take <strong>reasonable steps to verify</strong> accredited status — usually via tax returns, W-2s, brokerage statements, or a written confirmation from a registered broker-dealer, RIA, CPA, or attorney. A purchaser's self-certification is generally insufficient.</li>
</ul>
<p><strong>Rule 502(d) — Restricted securities.</strong> Securities acquired in a Reg D offering are "restricted securities" under Rule 144. Resale is limited until the holding period (typically 6 months for reporting company; 12 months otherwise) and other Rule 144 conditions are satisfied.</p>
<p><strong>Form D.</strong> The issuer must file Form D with the SEC no later than <strong>15 calendar days after the first sale of securities</strong> in the offering. Amendments are required for material changes and annually while the offering is ongoing. Notice filings are also generally required in each state where sales occur.</p>

<h2>Parameters to memorize</h2>
<table>
  <thead><tr><th>Rule</th><th>Cap</th><th>Non-accredited allowed</th><th>General solicitation</th><th>Verification of accreditation</th></tr></thead>
  <tbody>
    <tr><td>504</td><td>$10M / 12 months</td><td>Yes</td><td>Only in limited state configurations</td><td>No SEC-mandated verification standard</td></tr>
    <tr><td>506(b)</td><td>Unlimited</td><td>Up to 35 sophisticated</td><td>No</td><td>Not required (issuer belief)</td></tr>
    <tr><td>506(c)</td><td>Unlimited</td><td>No</td><td>Yes</td><td>Yes — reasonable-steps verification</td></tr>
  </tbody>
</table>
<p><strong>Accredited investor thresholds:</strong> $200K individual income / $300K joint income / $1M net worth excluding primary residence / Series 7, 65, or 82.</p>

<h2>Applying the rule</h2>
<p>Almost every private capital raise in the United States relies on Rule 506, and Rule 506(b) dominates because most issuers prefer to stay silent to the public. The tradeoff is straightforward: 506(b) allows the issuer to include friends-and-family type non-accredited investors so long as it does not solicit the public. 506(c) is the modern hedge fund and crowdfunding-adjacent path — general solicitation is permitted (websites, demo days, press coverage), but the compliance cost is the mandatory verification step. Common verification methods include reviewing tax returns showing income, brokerage or bank statements showing net worth, or obtaining a written confirmation from the investor's broker, RIA, CPA, or attorney within the prior three months.</p>
<p>Rule 504 is niche — occasionally used for state-registered offerings and small issuers who want federal exemption without the informational obligations Rule 506(b) imposes when non-accredited investors are present. It is not available to investment companies, blank-check companies, or Exchange Act reporting companies, which limits its practical footprint.</p>
<p><strong>Bad Actor disqualification (Rule 506(d)).</strong> The Rule 506 exemption is not available if the issuer or any "covered person" (directors, executive officers, 20% beneficial owners, placement agents) has a disqualifying event — certain criminal convictions, SEC or state regulatory orders, disqualifying commodity or postal orders. Issuers must diligence covered persons before every offering and disclose pre-existing (grandfathered) events.</p>
<h2>Common exam traps</h2>
<div class="callout trap"><p><strong>Trap:</strong> Rule 506(b) allows non-accredited investors — up to 35 sophisticated purchasers — but the moment the issuer engages in <strong>general solicitation</strong>, the exemption is lost. Rule 506(c) allows general solicitation but every purchaser must be accredited <strong>and</strong> verified. Mixing solicitation and non-accredited investors is the classic trap.</p></div>
<div class="callout trap"><p><strong>Trap:</strong> Form D is due within <strong>15 calendar days after the first sale</strong>, not after the offering closes and not before it begins. And it is a notice filing — it is not a registration, and the SEC does not "approve" it.</p></div>

<h2>Study checklist</h2>
<div class="callout tip"><p><strong>Tip:</strong> Anchor the exemptions by their giveaway feature — 504: <em>small cap</em>; 506(b): <em>no general solicitation</em>; 506(c): <em>verified accredited only</em>. Add the accredited definition thresholds and the 15-day Form D deadline and you can answer most Reg D questions in seconds.</p></div>
<ul>
  <li>Rule 504 cap: $10M / 12 months.</li>
  <li>Rule 506(b): unlimited, up to 35 non-accredited sophisticated purchasers, no general solicitation.</li>
  <li>Rule 506(c): unlimited, accredited only, general solicitation permitted, verification required.</li>
  <li>Form D within 15 calendar days after first sale.</li>
  <li>Accredited investor: $200K/$300K income, $1M net worth ex-primary-residence, Series 7/65/82.</li>
</ul>
<p>Rule cards to review after: <a href="./rules/#chapter-1" target="_blank" rel="noopener">Chapter 1 — Public and Private Offerings</a>.</p>
`
  },

  {
    id: "msrb-g37",
    jobFunction: "F5",
    title: "MSRB Rule G-37 — Political Contributions",
    summary: "The two-year ban on negotiated muni business triggered by MFP political contributions above $250.",
    readMin: 6,
    tldr: "MSRB Rule G-37 is a pay-to-play rule for the municipal securities business. If a <strong>Municipal Finance Professional (MFP)</strong> makes a political contribution to an issuer official, the dealer is banned from engaging in <strong>negotiated municipal securities business</strong> with that issuer for <strong>two years</strong>. A de minimis exception allows contributions of up to <strong>$250 per election</strong> — but only if the MFP is entitled to vote for the official. Every dealer files Form G-37 quarterly.",
    body: `
<h2>Why this matters</h2>
<p>G-37 was the SEC and MSRB's response to widespread pay-to-play in the muni underwriting business in the early 1990s. The rule reshaped how underwriters and MFPs interact with elected officials nationwide, and the SEC/MSRB continue to bring enforcement actions for contribution-related violations. Series 14 questions test the numeric threshold, the two-year look-back and forward ban, quarterly disclosure, and who counts as an MFP.</p>

<h2>The rule</h2>
<p><strong>Definitions.</strong> A <strong>Municipal Finance Professional (MFP)</strong> is any associated person of a broker, dealer, or municipal securities dealer who is: primarily engaged in municipal securities representative activities; solicits municipal securities business; is a supervisor of MFPs; or is an executive-level officer in the muni chain. An <strong>issuer official</strong> is any elected or appointed person who has direct or indirect authority to influence the issuer's selection of a municipal securities dealer (or is a candidate for such office).</p>
<p><strong>The ban.</strong> If an MFP, the dealer itself, or a dealer PAC controlled by the dealer or MFPs makes a contribution to an issuer official (other than a de minimis contribution meeting the exception), the dealer is prohibited from engaging in <strong>municipal securities business</strong> — meaning negotiated underwriting, private placement, financial advisory, or remarketing agent services — with that issuer for <strong>two years</strong>. Competitive bid underwritings are <strong>not</strong> subject to the ban.</p>
<p><strong>De minimis exception.</strong> An MFP (natural person only) may contribute up to <strong>$250 per candidate per election</strong> without triggering the ban — <strong>only if</strong> the MFP is entitled to vote for that candidate. If the MFP cannot vote for the official, <strong>any</strong> contribution triggers the two-year ban. The de minimis exception does not apply to the dealer itself or to controlled PACs — those cannot make any contribution to an issuer official without triggering the ban.</p>
<p><strong>Look-back for new MFPs.</strong> When someone becomes an MFP, prior contributions are counted:</p>
<ul>
  <li><strong>2-year look-back</strong> for MFPs who solicit business or supervise those who do.</li>
  <li><strong>6-month look-back</strong> for MFPs who are municipal securities representatives but do not solicit business (e.g., traders).</li>
</ul>
<p><strong>Disclosure.</strong> Every dealer files <strong>Form G-37</strong> quarterly (within 30 days of quarter-end) disclosing all contributions by the dealer, MFPs, and controlled PACs to issuer officials, payments to political parties of states and localities, and all municipal securities business engaged in during the quarter. Forms are publicly posted on the MSRB's EMMA system.</p>
<p><strong>Rule G-38</strong> separately bars dealers from paying non-affiliated third parties to solicit municipal business — a sister rule that closes a common workaround.</p>

<h2>Parameters to memorize</h2>
<table>
  <thead><tr><th>Item</th><th>Parameter</th></tr></thead>
  <tbody>
    <tr><td>De minimis contribution</td><td>Up to $250 per election, only if entitled to vote</td></tr>
    <tr><td>Ban duration</td><td>2 years, negotiated business only</td></tr>
    <tr><td>Look-back — soliciting/supervising MFP</td><td>2 years</td></tr>
    <tr><td>Look-back — non-soliciting rep</td><td>6 months</td></tr>
    <tr><td>Form G-37 filing</td><td>Quarterly, within 30 days of quarter-end</td></tr>
    <tr><td>Dealer or PAC contribution</td><td>No de minimis; any contribution triggers ban</td></tr>
  </tbody>
</table>

<h2>Applying the rule</h2>
<p>Every muni dealer maintains a contribution pre-clearance program. Before any employee who could be an MFP makes a political contribution, the employee submits the details (candidate, office, amount, election, voter eligibility) through a compliance workflow that checks: (1) is the recipient an issuer official within the meaning of G-37; (2) is the contribution within the de minimis exception; (3) does the contribution otherwise present an issue under G-37 or state pay-to-play laws (many states have overlapping regimes such as SEC Rule 206(4)-5 for advisers, New Jersey EO 117, or California's Levine Act). The pre-clearance program is critical because a single non-compliant contribution can shut down all negotiated business with an issuer for two years — a potentially eight- or nine-figure revenue impact for a top-tier muni underwriter.</p>
<p>Every muni dealer also tracks its <strong>look-back exposure</strong> when hiring. When a candidate is identified for a soliciting or supervising MFP role, the firm requests contribution records for the prior two years; if the candidate contributed above de minimis to an issuer official of a jurisdiction where the firm has active negotiated business, the hire is either delayed until the two-year clock runs down, restructured to a non-soliciting role, or declined. Rule G-37 explicitly contemplates this look-back to prevent contributions-in-advance-of-hire arbitrage.</p>
<p>Enforcement is regular — the MSRB, SEC, and FINRA jointly bring G-37 cases. Common issues include failure to identify all issuer officials (e.g., missing that a state treasurer serves ex officio on a bond-issuing authority), failure to catch spousal or PAC contributions, and failure to comply with the quarterly Form G-37 filing deadline.</p>
<h2>Common exam traps</h2>
<div class="callout trap"><p><strong>Trap:</strong> The $250 de minimis exception applies <strong>only</strong> if the MFP is entitled to vote for the official receiving the contribution. A New Jersey-resident MFP who contributes even $50 to a New York state comptroller candidate triggers a full two-year ban on the dealer's negotiated New York municipal business.</p></div>
<div class="callout trap"><p><strong>Trap:</strong> The ban applies to <strong>negotiated</strong> muni business only. Competitive-bid underwritings are exempt because the issuer selects on price, not on relationship. Financial advisory services and remarketing agent services <strong>are</strong> covered.</p></div>

<h2>Study checklist</h2>
<div class="callout tip"><p><strong>Tip:</strong> Two dollars and two years — <strong>$250 de minimis</strong>, <strong>2-year ban</strong>. Add the two look-back periods (2 years and 6 months) and you have the whole rule memorized numerically.</p></div>
<ul>
  <li>MFP definition includes solicitors, supervisors, and executive officers.</li>
  <li>Contributions to issuer officials trigger a 2-year ban on negotiated muni business.</li>
  <li>$250 de minimis exception requires voter eligibility.</li>
  <li>Look-back: 2 years for solicitors/supervisors, 6 months for non-soliciting reps.</li>
  <li>Form G-37 quarterly to MSRB, posted on EMMA.</li>
  <li>G-38 bars payments to non-affiliated solicitors.</li>
</ul>
<p>Rule cards to review after: <a href="./rules/#chapter-11" target="_blank" rel="noopener">Chapter 11 — Business Conduct</a>.</p>
`
  },

  {
    id: "finra-2210-communications",
    jobFunction: "F9",
    title: "FINRA Rule 2210 — Communications with the Public",
    summary: "Retail vs. institutional vs. correspondence, filing and approval, and the modern testimonial rules.",
    readMin: 7,
    tldr: "Rule 2210 divides communications into three categories: <strong>correspondence</strong> (25 or fewer retail investors within 30 calendar days), <strong>retail communications</strong> (more than 25 retail investors within 30 calendar days), and <strong>institutional communications</strong> (institutional investors only). Retail communications generally require <strong>principal approval before first use</strong>, and certain retail communications must be filed with FINRA — new members file 10 business days <strong>before</strong> first use during their first year; established firms file 10 business days <strong>after</strong> first use for specified content.",
    body: `
<h2>Why this matters</h2>
<p>Function 9 (Sales Practice — Solicitations) is entirely about marketing and communications compliance. Rule 2210 is its centerpiece. Compliance officers are expected to categorize a communication correctly, apply the right approval and filing regime, and understand the interplay with the SEC's marketing rule for advisers (which permits testimonials and endorsements with disclosures since 2021).</p>

<h2>The rule</h2>
<p><strong>Three categories.</strong></p>
<ul>
  <li><strong>Institutional communication.</strong> Distributed or made available <strong>only</strong> to institutional investors (banks, insurance companies, RIAs, government entities, employee benefit plans with ≥ $50M in assets, natural persons or entities with ≥ $50M in assets, and other broker-dealers). Not filed with FINRA. Firms must have written procedures for review; they can be reviewed post-use.</li>
  <li><strong>Retail communication.</strong> Any written (including electronic) communication distributed or made available to more than <strong>25 retail investors</strong> within any <strong>30 calendar-day period</strong>. A retail investor is any investor that is not an institutional investor.</li>
  <li><strong>Correspondence.</strong> Any written (including electronic) communication distributed or made available to <strong>25 or fewer retail investors</strong> within any 30 calendar-day period.</li>
</ul>
<p><strong>Principal approval.</strong> Under Rule 2210(b)(1), a registered principal must approve each retail communication <strong>before</strong> the earlier of use or filing with FINRA — subject to specified exceptions for certain templates and previously-filed materials. Correspondence is subject to Rule 3110(b)(4) supervisory review rather than pre-use principal approval, though many firms apply principal approval anyway to certain categories. Institutional communications require supervision under written procedures but not pre-use principal approval.</p>
<p><strong>Filing with FINRA (Rule 2210(c)).</strong></p>
<ul>
  <li><strong>New member firms:</strong> During the <strong>first year</strong> of FINRA membership, must file <strong>at least 10 business days before first use</strong> any retail communication that is published or made available to the public via a "generally accessible medium" (broadcast, newspaper, magazine, telephone/audio recording, video, or public site).</li>
  <li><strong>All firms:</strong> Must file within <strong>10 business days after first use</strong> retail communications concerning registered investment companies (mutual funds, closed-end funds, variable products) that include performance rankings/comparisons not generally published, retail communications concerning <strong>public direct participation programs</strong>, retail communications concerning <strong>collateralized mortgage obligations</strong>, and retail communications concerning <strong>options</strong> that do not qualify for the standardized options-disclosure-document exception. Retail communications concerning security-based swaps and certain structured products have their own filing schedules.</li>
</ul>
<p><strong>Content standards (Rule 2210(d)).</strong> All communications must be fair, balanced, and not misleading; must disclose material information; must not predict or project performance (with limited educational or hypothetical illustration exceptions); and must clearly identify the firm.</p>
<p><strong>Testimonials.</strong> Since the SEC's <strong>Marketing Rule amendments (Rule 206(4)-1, effective November 4, 2022 compliance date)</strong> for investment advisers, testimonials and endorsements are permitted with prescribed disclosures — including whether the promoter is a client, whether cash or non-cash compensation was provided, and material conflicts. FINRA Rule 2210 was amended in 2023 to align with the SEC framework for broker-dealer testimonials in retail communications: testimonials are permitted, but must (1) clearly disclose whether the person giving the testimonial is a customer, (2) disclose whether compensation was paid and, if so, a description, and (3) present material conflicts. Retail communications containing testimonials remain subject to principal pre-use approval and applicable filing rules.</p>

<h2>Parameters to memorize</h2>
<table>
  <thead><tr><th>Category</th><th>Threshold</th><th>Principal approval</th><th>Filing</th></tr></thead>
  <tbody>
    <tr><td>Correspondence</td><td>≤ 25 retail investors / 30 days</td><td>Supervisory review (3110)</td><td>Not filed</td></tr>
    <tr><td>Retail communication</td><td>&gt; 25 retail investors / 30 days</td><td>Yes, before first use</td><td>Per 2210(c)</td></tr>
    <tr><td>Institutional communication</td><td>Institutional investors only</td><td>Written procedures</td><td>Not filed</td></tr>
    <tr><td>New member filing</td><td>10 business days before first use</td><td>—</td><td>First year, generally accessible media</td></tr>
    <tr><td>Standard filing</td><td>10 business days after first use</td><td>—</td><td>Mutual funds w/rankings, DPPs, CMOs, options</td></tr>
  </tbody>
</table>

<h2>Applying the rule</h2>
<p>Compliance officers implement Rule 2210 through a communications review workflow — every draft piece is categorized (retail/institutional/correspondence), routed to the appropriate principal, reviewed against content standards, approved with a documented approval record, and filed with FINRA where required. Marketing platforms increasingly automate the categorization step by tallying distribution counts on rolling 30-day windows and applying the 25-investor threshold in real time.</p>
<p>The 2023 Rule 2210 amendments harmonizing broker-dealer testimonials with the SEC Marketing Rule are exam-tested in three ways: what disclosures are required (customer status, compensation, material conflicts), what remains prohibited (misleading testimonials, cherry-picked performance without balance), and how the amendments interact with existing pre-use approval and filing rules (they layer on top — a retail communication containing testimonials is still a retail communication).</p>
<p>The content standards under 2210(d) also warrant attention: no predictions or projections of future performance except in limited education/illustration contexts; balanced treatment of risks and benefits; accurate presentation of past performance with appropriate disclosures; and clear identification of the member firm. Options communications are subject to additional standards under Rule 2220, and communications about municipal securities are subject to MSRB rules G-21 and G-27.</p>
<h2>Common exam traps</h2>
<div class="callout trap"><p><strong>Trap:</strong> The 25-investor line uses a <strong>30-calendar-day</strong> window and counts <strong>retail investors</strong>, not accounts or households. An email sent to 30 retail clients in a single day is a <strong>retail communication</strong>, not correspondence, and requires principal pre-use approval.</p></div>
<div class="callout trap"><p><strong>Trap:</strong> Institutional communications lose their institutional status if the firm has reason to believe they will be forwarded to a retail investor. If a broker sends an "institutional" memo to a pension consultant knowing it will be distributed to the plan sponsor's retail participants, the memo is retail.</p></div>

<h2>Study checklist</h2>
<div class="callout tip"><p><strong>Tip:</strong> Remember the numbers as <strong>25 / 30 / 10</strong> — 25 retail investors, 30 calendar days, 10 business days for filing. Add: new firms file <strong>before</strong>, established firms file <strong>after</strong>.</p></div>
<ul>
  <li>Three categories and the 25-in-30 line.</li>
  <li>Principal pre-use approval for retail; supervisory review for correspondence.</li>
  <li>New members: 10 business days before use, first year, public-facing.</li>
  <li>Established firms: 10 business days after use for mutual-fund rankings, DPPs, CMOs, non-standard options.</li>
  <li>Content standards: fair, balanced, no predictions/projections.</li>
  <li>Testimonials permitted post-2023 amendments with prescribed disclosures.</li>
</ul>
<p>Rule cards to review after: <a href="./rules/#chapter-12" target="_blank" rel="noopener">Chapter 12 — Communications</a>.</p>
`
  }
];
