// Chapter 2 – Underwriting
window.CHAPTER_2 = {
  id: 2,
  title: "Underwriting",
  subtitle: "Underwriting commitments, FINRA filings, Regulation M, New Issue Rule",
  sections: [
    {
      name: "Underwriting Commitments",
      rules: [
        {
          id: "firm-commitment",
          name: "Firm-Commitment Underwriting",
          category: "Underwriting Type",
          language: "If the syndicate agrees to purchase the entire issue and absorb any securities that are not sold, it is engaging in a firm-commitment underwriting. The syndicate is acting for its own account and risk.",
          concept: "Maximum risk to the syndicate — they guarantee the sale and are principals. If shares don't sell, the syndicate takes them into inventory. Most IPOs by larger issuers are firm-commitment.",
          parameters: [
            "Syndicate is liable for unsold shares",
            "Syndicate acts for its own account and risk",
            "Issuer is guaranteed the proceeds (minus spread)"
          ],
          exceptions: [
            "Market-out clause: enables syndicate to cancel its commitment on adverse material events affecting the issuer or general dislocation in financial markets caused by an external event"
          ]
        },
        {
          id: "best-efforts",
          name: "Best-Efforts Underwriting",
          category: "Underwriting Type",
          language: "When underwriters agree to place as much of the new offering as they can and return any unsold securities to the issuer, they have agreed to a best-efforts underwriting. The underwriters are acting in the capacity of an agent for the issuer, rather than as a principal for their own accounts.",
          concept: "Zero capital commitment by the underwriter — acts only as an agent. Cheaper for the issuer. The issuer bears the risk of shares not selling.",
          parameters: [
            "Underwriter acts as agent, not principal",
            "Unsold shares returned to the issuer",
            "No penalty for failing to sell the entire issue",
            "Issuer bears risk of undersold offering"
          ],
          exceptions: []
        },
        {
          id: "all-or-none",
          name: "Best-Efforts: All-or-None",
          category: "Underwriting Type",
          language: "If the issuer requires that a specific minimum amount of capital be raised, the issuer will specify that all of the issue must be sold, or the entire distribution will be cancelled.",
          concept: "Best-efforts with a cancellation trigger: the WHOLE deal must sell. If any portion remains unsold, ALL sales are reversed and money is returned.",
          parameters: [
            "Underwriters act as agent",
            "If entire issue does not sell, all sales cancelled",
            "Subscriber funds must be returned",
            "Customer funds must be held in escrow pending completion"
          ],
          exceptions: []
        },
        {
          id: "mini-maxi",
          name: "Best-Efforts: Mini-Maxi",
          category: "Underwriting Type",
          language: "A variation of all-or-none. There is a minimum threshold of sales that must be met in order for the offering to avoid cancellation. Once the minimum is met, additional sales may be made up to a specified maximum amount.",
          concept: "All-or-none with a floor. Once a preset minimum is hit, the offering is viable and can keep selling up to a maximum cap.",
          parameters: [
            "Minimum threshold required to avoid cancellation",
            "Maximum sales cap once minimum met",
            "Subscriber funds escrowed until minimum reached"
          ],
          exceptions: []
        },
        {
          id: "standby",
          name: "Standby Underwriting",
          category: "Underwriting Type",
          language: "Under a standby underwriting arrangement, the syndicate agrees (in return for a fee) to purchase any unsubscribed shares that remain after a rights offering. If current shareholders (or purchasers of the rights) fail to subscribe to the stock, the investment banker will purchase the residual shares on a firm-commitment basis.",
          concept: "Used with preemptive rights offerings. Underwriter stands by to pick up anything shareholders didn't subscribe to.",
          parameters: [
            "Ties to rights offerings only",
            "Syndicate commits on a firm-commitment basis for residual shares",
            "Syndicate is paid a standby fee"
          ],
          exceptions: []
        },
        {
          id: "sec-15c2-4",
          name: "SEC Rule 15c2-4 – Escrow Requirements",
          category: "SEC Rule",
          language: "The escrowing of funds is covered by SEC Rule 15c2-4 of the Securities Exchange Act of 1934. If a broker-dealer is participating in a distribution (other than a firm-commitment underwriting), it must either promptly forward funds to the issuer or establish an account with an escrow agent that has agreed in writing to hold such funds.",
          concept: "Protects customer money in contingency offerings (all-or-none, mini-maxi, best-efforts with delayed transmittal). Funds sit in escrow until the contingency is met.",
          parameters: [
            "Applies to any distribution OTHER than firm-commitment",
            "Funds must be promptly forwarded to issuer OR placed with a bank escrow agent under written agreement",
            "If offering fails, ALL client funds must be returned in entirety — no deductions for offering expenses",
            "Best-efforts arrangement where underwriter doesn't promptly transmit funds: escrow required",
            "Separate bank account with bank as escrow agent"
          ],
          exceptions: [
            "Firm-commitment underwritings are exempt from the escrow requirement"
          ]
        }
      ]
    },
    {
      name: "FINRA Corporate Financing Rule",
      rules: [
        {
          id: "corporate-financing",
          name: "FINRA Corporate Financing Rule – Filing Requirements",
          category: "FINRA Rule",
          language: "Broker-dealers are generally required to file certain documents and information with FINRA relating to securities offerings. For registered securities, the required disclosures must be filed with FINRA by no later than one business day following the filing of the issuer's registration statement with the SEC. If the issue is exempt from registration, the disclosures must be filed with FINRA at least 15 business days prior to the anticipated offering.",
          concept: "FINRA reviews underwriting compensation for fairness. Member firms may not sell a new issue until FINRA issues a 'no objections' opinion on the underwriting terms.",
          parameters: [
            "Registered securities: file within 1 business day of the issuer's SEC filing",
            "Exempt securities: file at least 15 business days before the anticipated offering",
            "Documents required: registration statement, offering memorandum/circular, underwriting agreement, agreement among underwriters, consulting agreement, letter of intent, underwriter's warrant agreement, escrow agreement, amendments, final effective registration",
            "Information required: estimated max offering price; estimated max underwriting discount/commission/counsel fees/finders' fees; affiliations with member firms (officers, directors, 5%+ beneficial owners of issuer); compensation/valuable items received in the 180-day pre-filing period; statement of compliance with exceptions to definition of compensation",
            "If FINRA notifies that compensation is unfair, managing UW must notify syndicate members and instruct them NOT to offer the securities"
          ],
          exceptions: [
            "NOT subject to filing: investment-grade non-convertible debt (≥4-year term) or non-convertible preferred stock rated in top 4 NRSRO categories",
            "NOT subject to filing: S-3/F-3 shelf offerings",
            "NOT subject to filing: Canadian foreign private issuers using Form F-10",
            "NOT subject to filing: exchange offers where securities are listed on NYSE, NYSE American, or Nasdaq Global Market",
            "NOT subject to filing: offerings by churches / charitable institutions exempt from SEC registration",
            "EXEMPT from the entire rule: Reg D private placements, open-end investment companies (mutual funds), variable contracts, municipal offerings, tender offers, M&A/spin-off securities not resulting in public ownership of the member firm"
          ]
        },
        {
          id: "fairness-compensation",
          name: "Fairness of Underwriter Compensation",
          category: "FINRA Rule",
          language: "FINRA reviews all distributions in which a member firm is participating to ensure that the compensation paid to the member firm is not excessive or unfair. FINRA will not pass judgment on the merits of the issue or on the public offering price.",
          concept: "FINRA's role is compensation fairness, NOT merit regulation. Many specific items are counted as compensation (and many are not).",
          parameters: [
            "Factors: offering proceeds; risk assumed (firm vs. best-efforts; IPO vs. secondary); type of securities",
            "Items INCLUDED as compensation: underwriting discount/commission; reimbursement of underwriter expenses; underwriters' counsel fees (NOT Blue-Sky reimbursement); finder's fees (cash/securities); wholesaler fees; financial consulting/advisory fees; equity securities/warrants/options received for private placement agent, loans or M&A services; special sales incentive items; advisory-to-board compensation; compensation from exercising/converting warrants within 1 year of effective date; QIU fees; comp for uncompleted offering (unless member not in revised deal)",
            "Items NOT INCLUDED: registration fees (state/Blue-Sky); accounting fees; FINRA filing fees; prospectus printing; cash comp for placement agent role; loans for M&A services; acquisition of non-convertible securities/derivatives at fair price in ordinary course unrelated to the offering",
            "Review window for items-of-value: 180-day period before registration filing until sales begin"
          ],
          exceptions: []
        },
        {
          id: "prohibited-arrangements",
          name: "Prohibited Underwriting Arrangements & Restrictions on Securities Received",
          category: "FINRA Rule",
          language: "The Corporate Financing Rule describes prohibited terms. Also, the sale of securities acquired in connection with an offering is restricted for a period of six months following the effective date of registration.",
          concept: "Hard rules on what underwriters cannot get or do with securities acquired in connection with an offering.",
          parameters: [
            "Prohibited: reimbursement for miscellaneous expenses",
            "Prohibited: reimbursement for salaries of investment banking personnel",
            "Prohibited: commissions paid by issuer to member firm prior to commencement of the public sale",
            "Prohibited: compensation paid by issuer to member firm on an offering that was not completed",
            "Prohibited: security/warrant/option with duration > 5 years or better terms than offered to public",
            "Prohibited: non-accountable expense allowance > 3% of offering proceeds",
            "6-month lock-up: securities acquired in connection with offering restricted for 6 months post-effective date",
            "Options/warrants may be exercised at any time, BUT underlying shares remain restricted for the remainder of the initial 6-month period",
            "Maximum life of an underwriter's warrant: 60 months (5 years)",
            "In a unit deal: underwriter options cannot have lower strike and/or longer life than those offered publicly"
          ],
          exceptions: []
        }
      ]
    },
    {
      name: "Conflicts of Interest in Public Offerings",
      rules: [
        {
          id: "conflict-of-interest",
          name: "FINRA Conflict of Interest Rule (Public Offerings of Member Securities)",
          category: "FINRA Rule",
          language: "A member firm is not permitted to participate in a public offering in which it has a conflict of interest unless the offering complies with one of two conditions: (1) prominent prospectus disclosure plus one of three specified protections, or (2) a qualified independent underwriter (QIU) participates in the preparation of the offering documents.",
          concept: "Defines 'conflict of interest' and 'affiliate' for member-firm offerings and enforces compliance through disclosure + protections or through QIU participation. Only one condition needs to be met.",
          parameters: [
            "Conflict of interest exists when: securities are issued by the member; OR issuer controls/is controlled by the member; OR 5%+ of net proceeds (ex-UW compensation) will reduce/retire a loan from the member",
            "Affiliate = entity that controls, is controlled by, or is under common control with the member",
            "Control = 10% or more of the common/preferred equity/subordinated debt, or 10%+ right to partnership profits/losses",
            "Condition 1: prominent prospectus disclosure + ONE of: (a) managing UW has no conflict and is not affiliated with anyone who does; (b) bona fide public market exists; (c) investment-grade securities",
            "Condition 2: Qualified Independent Underwriter (QIU) must (i) have served as manager/co-manager in at least 3 public offerings of similar size and type in the 3 years preceding registration filing, (ii) have no conflicts of interest, (iii) participate in preparation of offering documents, (iv) exercise same due diligence as any UW. Disclosure required in prospectus; FINRA must be notified when offering completes",
            "Discretionary accounts: member with conflict of interest must obtain PRIOR WRITTEN APPROVAL from the customer (in addition to POA) before placing stock in the customer's discretionary account",
            "Investment adviser BD selling a distribution in which it is participating must give/send customer written notice at or before completion of the transaction"
          ],
          exceptions: []
        }
      ]
    },
    {
      name: "Regulation M – Trading Practices",
      rules: [
        {
          id: "reg-m-overview",
          name: "Regulation M Overview",
          category: "SEC Regulation",
          language: "Regulation M restricts distribution participants (such as underwriters and issuers) from bidding for or making purchases in the secondary market of stock that is being offered in a distribution. This restriction is in effect for a limited period revolving around the effective date to prevent upward price manipulation.",
          concept: "Anti-manipulation framework covering participants (101), issuers/selling holders (102), passive market making (103), stabilization (104), and pre-offering short sales (105).",
          parameters: [
            "Covers both IPOs and follow-on offerings",
            "Subject security = security being distributed",
            "Reference security = security into which the subject security may be converted (e.g., common underlying a convertible)",
            "Covered securities = subject + reference securities — both subject to Rule 101",
            "Common stock is a reference security for rights/warrants/convertibles (the subject); the reverse is NOT true"
          ],
          exceptions: []
        },
        {
          id: "reg-m-rule-101",
          name: "Regulation M Rule 101 – Distribution Participants",
          category: "SEC Rule",
          language: "Distribution participants (syndicate members, selling group members, other broker-dealers helping to sell the subject security) are not permitted to buy or bid for the subject security within the restricted period.",
          concept: "Restricts the people selling the deal from manipulating the secondary market in the same security during the offering window.",
          parameters: [
            "Restricted period starts: 5 business days prior to pricing (default) OR when the broker-dealer becomes a participant, whichever is LATER",
            "Restricted period ends: when the broker-dealer's participation ends",
            "1-business-day restricted period if: ADTV ≥ $100,000 AND issuer's public float ≥ $25 million",
            "No restricted period (actively traded security): ADTV ≥ $1,000,000 AND public float ≥ $150 million",
            "No restricted period: municipals, governments, non-convertible investment-grade debt",
            "M&A/exchange offer: restricted period begins on proxy-materials dissemination date and ends on completion of distribution"
          ],
          exceptions: [
            "Transactions in government/municipal bonds, non-convertible investment-grade debt/preferred, registered investment company securities",
            "Actively traded securities (ADTV ≥ $1M, float ≥ $150M)",
            "Odd-lot transactions",
            "Exercise of option/warrant/right during restricted period (regardless of when acquired)",
            "Unsolicited brokerage transactions and unsolicited principal purchases",
            "Rule 144A sales to QIBs; certain Reg S transactions",
            "Subject security in a basket strategy — subject security ≤ 5% of a basket containing ≥ 20 securities",
            "Unaccepted bids and purchases not exceeding 2% of ADTV — provided firm maintains written policies/procedures (safe harbor lost after discovery)",
            "Research reports meeting Rule 138/139 of 1933 Act: distributed with reasonable regularity in normal course of business"
          ]
        },
        {
          id: "reg-m-rule-102",
          name: "Regulation M Rule 102 – Activities of Issuers & Selling Security Holders",
          category: "SEC Rule",
          language: "Regulation M prohibits issuers and selling security holders (mainly insiders) from supporting or raising the price of a security being distributed. This means they cannot purchase or bid for a covered security or induce others to do so.",
          concept: "Restricts issuers and selling holders from manipulating their own stock during the distribution window. Fewer exceptions than Rule 101 because they are not intermediaries.",
          parameters: [
            "Issuers/selling holders cannot buy or bid for covered securities or induce others to do so"
          ],
          exceptions: [
            "Similar to Rule 101: unsolicited purchases, 144A transactions, exercise of convertibles, odd-lot transactions, transactions in exempted securities",
            "NOT available to issuers/selling holders: actively traded securities exception; basket transactions; inadvertent (de minimis) transactions; unsolicited transactions executed through a broker-dealer; the research exception"
          ]
        },
        {
          id: "reg-m-rule-103",
          name: "Regulation M Rule 103 – Passive Market Making",
          category: "SEC Rule",
          language: "Rule 103 permits distribution participants to continue making markets in a Nasdaq stock that is the subject of an offering during the Rule 101 restricted period, but only on a passive basis. The market maker cannot enter a bid or effect a purchase at a price that exceeds the highest independent bid on Nasdaq.",
          concept: "Preserves liquidity in the Nasdaq market during the restricted period by letting distribution participants keep market-making — but passively (no price leadership, limited size).",
          parameters: [
            "Cannot bid/buy above the highest independent bid on Nasdaq",
            "Passive MM is not allowed if NO independent bid exists on Nasdaq",
            "Daily purchase limit: greater of 30% of ADTV OR 200 shares",
            "Once net purchases (purchases − sales) exceed daily limit, MM must withdraw for the rest of the day",
            "MM near the limit may execute any single order in full (even exceeding the limit), then must withdraw",
            "Cannot aggregate orders into a single ticket to evade the rule",
            "Falling market: MM may maintain bid until purchases reach the lesser of 2x minimum quote size OR remaining daily limit — then drop bid to at-or-below highest independent bid; if daily limit reached first, withdraw",
            "Rising market: MM may raise bid when best independent bid rises (not required)"
          ],
          exceptions: []
        },
        {
          id: "reg-m-rule-104",
          name: "Regulation M Rule 104 – Stabilization",
          category: "SEC Rule",
          language: "Stabilizing is defined as the placing of any bid, or the effecting of any purchase, for the purpose of pegging, fixing, or otherwise maintaining the price of a security. Stabilization by an underwriter is a permitted manipulative activity as long as the Commission's rules governing it are followed.",
          concept: "The ONLY permitted manipulation. Used to support the price of a new issue during its distribution. Strict rules around who, price, disclosure, priority, and permitted markets.",
          parameters: [
            "Only ONE participant in the distribution may enter a stabilizing bid",
            "Maximum initiation price: the last independent sale price OR the highest bid in the market",
            "IPO: bid cannot be higher than the Public Offering Price (POP)",
            "Principal market open at initiation: bid at a price no higher than the last independent transaction price IF (i) the security traded in principal market that day or the preceding business day, AND (ii) current ask in principal market ≥ last independent transaction price; if either fails, use the highest current independent bid in principal market",
            "Principal market closed at initiation: price = lower of (price at which stabilizing could have been initiated at principal market's previous close) OR (last independent transaction or bid on the market where stabilizing will begin)",
            "Must grant priority to independent bids at the same price regardless of size",
            "Once initiated, stabilizing bid may be raised to match independent bids",
            "Notification: syndicate must disclose the purpose of the stabilizing bid to the person with whom the bid is entered; notify the market in which it occurs",
            "No specific time limit; restrictions end when distribution is complete"
          ],
          exceptions: [
            "Stabilization is NOT permitted in an at-the-market offering"
          ]
        },
        {
          id: "penalty-bid-covering",
          name: "Penalty Bids & Syndicate Covering Transactions",
          category: "SEC/FINRA Concept",
          language: "A penalty bid permits the managing underwriter to reclaim a selling concession from a syndicate member when the securities originally sold by that member are purchased in syndicate covering transactions. A syndicate covering transaction is the placing of any bid or the effecting of any purchase to reduce a short position created in connection with the offering.",
          concept: "Manager tools to manage a short position (from overallotments) and to punish 'flipping'. FINRA must be given written notice before these activities begin.",
          parameters: [
            "Written notice to FINRA before activity — Regulation M Trading Notification Form (part of the Underwriting Activity Report)",
            "Notice must include security identity, Nasdaq symbol, start date",
            "Manager must maintain file info on syndicate short position within 30 days after effective date",
            "Penalty bids identified on Nasdaq by the abbreviation 'PBID'",
            "Syndicate short positions arise from overallotments",
            "Short positions can be covered by stabilizing purchases or by exercising a Green Shoe"
          ],
          exceptions: []
        },
        {
          id: "green-shoe",
          name: "Green Shoe Clause (Overallotment Option)",
          category: "Concept",
          language: "In a rising market, the lead underwriter may invoke the Green Shoe option if available. This is a provision that may be included in the registration statement which allows the syndicate to purchase up to 15% more shares than were originally registered, on the same terms and at the same price as the original shares, to cover overallotments.",
          concept: "Gives underwriters a pre-registered overallotment cushion so they can cover short positions from overselling without buying in at higher market prices.",
          parameters: [
            "Up to 15% more shares than originally registered",
            "Same terms and same price as original shares",
            "Must be included in the registration statement",
            "Covered by anti-fraud rules — overselling cannot be manipulative"
          ],
          exceptions: []
        },
        {
          id: "reg-m-rule-105",
          name: "Regulation M Rule 105 – Short Sales in Connection with an Offering",
          category: "SEC Rule",
          language: "Rule 105 stipulates that it is a violation for any person to sell short the security that is the subject of an offering, and then purchase the offered securities from an underwriter, if the short sale was executed during the period beginning five business days prior to the pricing of the offering and ending with the pricing of the issue.",
          concept: "Prevents a common manipulation: shorting the stock to drive the price down before pricing, then covering with cheap shares from the underwriters.",
          parameters: [
            "Restricted period: 5 business days prior to pricing through the pricing of the issue",
            "If pricing occurs within 5 business days of filing the registration statement, Rule 105 applies from the filing date to pricing",
            "Applies only to firm-commitment offerings"
          ],
          exceptions: [
            "Bona fide purchase exception: a person who was unaware of the offering or changes her mind may close out the short sale at least 1 business day prior to the pricing day and still purchase in the offering"
          ]
        },
        {
          id: "finra-reg-m-forms",
          name: "FINRA Forms for Regulation M (UAR / Restricted Period Notification)",
          category: "FINRA Rule",
          language: "For any Nasdaq security that is part of a distribution subject to Regulation M, the managing underwriter may request an Underwriting Activity Report (UAR) from FINRA's Corporate Financing Department. For non-exempt securities, the manager must submit a Restricted Period Notification Form to Nasdaq Market Operations by no later than the day prior to the commencement of the restricted period.",
          concept: "Mechanics of filing Reg M-related forms with FINRA; distinguishes what can/cannot be stabilized in OTC vs. Nasdaq.",
          parameters: [
            "UAR identifies whether restricted period is 1-day, 5-day, or actively-traded exempt",
            "UAR optional — underwriter may use other sources",
            "Restricted Period Notification Form: filed with FINRA for both exchange-listed and OTC equity; also filed with NYSE if NYSE-listed",
            "Form must disclose: short covering intent, penalty bid intent, stabilizing bid intent",
            "Stabilization: FINRA Market Regulations Department must receive PRIOR electronic notification",
            "Required disclosures on form: security name, stock symbol, type/number of shares offered, pricing date/time, managing UW and syndicate member names (NOT selling group), Reg M restricted period start/end",
            "Records retention: 3 years",
            "FINRA prohibits entry of a stabilizing bid for an OTC equity security"
          ],
          exceptions: []
        },
        {
          id: "sec-17a-2",
          name: "SEC Rule 17a-2 – Syndicate & Stabilization Recordkeeping",
          category: "SEC Rule",
          language: "According to SEC Rule 17a-2, an underwriter that will be stabilizing an issue, effecting a syndicate short covering transaction, or implementing a penalty bid must maintain detailed records.",
          concept: "Recordkeeping backbone for Reg M activities — who participated, dates, security, prices, timing.",
          parameters: [
            "Must record: % participation/commitment of each syndicate member",
            "Must record: names and addresses of syndicate members",
            "Must record: dates the penalty bid was in effect",
            "Must record: name and class of any security stabilized or covered",
            "Must record: price, date, time of each stabilizing purchase or syndicate short covering transaction",
            "Each syndicate member must receive from the manager: name, date, and time of first stabilizing purchase, and time stabilization was terminated",
            "Records retention: minimum 3 years",
            "Syndicate member (not manager) effecting a transaction must notify manager within 3 business days"
          ],
          exceptions: []
        },
        {
          id: "ipo-allocations",
          name: "IPO Allocations & Tie-in Arrangements (Laddering)",
          category: "Reg M Concept",
          language: "Regulation M applies to IPOs by preventing underwriters and broker-dealers from influencing the price prior to the completion of the distribution. It is a violation to allocate IPO shares based on placing prearranged purchase orders in the aftermarket at specified prices.",
          concept: "Oversubscribed IPO allocations cannot be tied to aftermarket buying commitments — this is 'laddering' and is manipulative.",
          parameters: [
            "Permissible allocation considerations: institutional vs. retail; order size; client's history of flipping",
            "PROHIBITED: allocating based on commitment to purchase additional shares in the secondary market",
            "PROHIBITED: tie-in / laddering arrangements (prearranged aftermarket buys at specified prices)",
            "Rule violated regardless of whether aftermarket orders are executed",
            "PROHIBITED: encouraging clients, prior to IPO trading, to provide info on price/shares they will buy in aftermarket",
            "Best practice for oversubscribed issue: pro rata allocation on a fair basis"
          ],
          exceptions: []
        }
      ]
    },
    {
      name: "The New Issue Rule",
      rules: [
        {
          id: "finra-new-issue",
          name: "FINRA New Issue Rule (Rule 5130)",
          category: "FINRA Rule",
          language: "A FINRA member firm should make a bona fide offering of new issues to the public and not withhold any shares for its own or employees' accounts or any other industry insiders. The rule prohibits a FINRA member broker-dealer from selling a new issue to an account in which a restricted person has a beneficial interest.",
          concept: "Prevents industry insiders (member firm employees, their families, portfolio managers, broker-dealer owners) from taking up hot IPO shares that belong in the public market.",
          parameters: [
            "'New issue' = initial public offering of equity securities sold under a registration statement or offering circular",
            "Preconditions for sale: firm must obtain representation from account holder (or authorized party) that the account is eligible; must be affirmative statement; electronic verification OK; oral statements NOT acceptable",
            "For conduit accounts (banks, foreign bankers, BDs, investment advisers): must obtain representation that all conduit purchasers are compliant",
            "Recertification of eligibility: every 12 months (firm's responsibility, not the RR's)",
            "Recordkeeping: minimum 3 years",
            "Restricted persons: FINRA member firms and their associated persons; immediate family of member-firm employees (spouse, children, parents, siblings, in-laws, anyone materially supported — NOT aunts/uncles/cousins); finders/fiduciaries (attorneys, accountants) in the offering and anyone they materially support; portfolio managers (for PERSONAL accounts only, NOT for funds they manage); persons owning 10%+ of a broker-dealer",
            "Material support = providing more than 25% of the person's income OR living in the same household",
            "Immediate family treated as restricted only if: employee gives/receives material support; OR employee is at the member firm selling the new issue; OR employee can control the allocation"
          ],
          exceptions: [
            "NOT new issues (may be sold to restricted persons): secondary offerings; private offerings including Reg D and Rule 144A; all debt offerings (including convertible and non-investment-grade); preferred stock and rights offerings; investment company offerings; exempt securities; DPPs and REITs; exchange offers and M&A offerings; ADR offerings with preexisting market outside U.S.",
            "Limited broker-dealer exemption: employees of a BD that restricts its business to investment company/variable contract securities or DPPs may purchase new issues",
            "Anti-Dilution Exception: restricted person who already holds shares may buy in the new issue to maintain equity % if (a) held prior interest for 1 year before effective date, (b) purchase doesn't increase equity %, (c) new-issue shares not sold/pledged/transferred for 3 months post-effective",
            "General exemptions allow sales to: registered investment companies; insurance company general/separate accounts; common trust funds; de minimis accounts (restricted persons ≤ 10% beneficial interest); publicly traded entities (other than BD or its affiliates in new-issue distribution); foreign investment companies; ERISA, state/local benefit plans, IRS 501(c)(3) tax-exempt plans",
            "Undersubscribed-issue exemption: BD may place shares in its own investment account if there is no unmet public demand (cannot sell to OTHER restricted persons)",
            "Issuer-Directed Securities exemption: parent company of issuer; subsidiary of issuer; employees and directors of the issuer — permitted to purchase if issuer specifically directs the securities to them"
          ]
        },
        {
          id: "fixed-price-offering",
          name: "Fixed-Price Public Offering Rule",
          category: "FINRA Rule",
          language: "A broker-dealer that participates in a fixed price offering (either as part of a selling group/syndicate or as a single underwriter) cannot sell securities below the stated public offering price to any person outside the selling group/syndicate.",
          concept: "During a fixed-price offering, everyone pays the POP. No discounts, rebates, concessions, or special deals may lower the actual price to public customers.",
          parameters: [
            "Applies until either (a) offering ends, or (b) firm cannot continue selling at stated price after making a genuine public offering attempt",
            "'Reduced price' includes any discount, rebate, concession, or special deal effectively lowering price paid",
            "Firms MAY sell to affiliated persons (employees) — but must charge the full offering price",
            "Firms MAY sell to research clients — at the full offering price",
            "Normal business transactions with affiliated persons that are not related to the offering are allowed",
            "Firms may exempt these securities from asset-based fee calculations if this is their normal business practice"
          ],
          exceptions: [
            "Sales to other members of the selling syndicate/group at reduced prices (concessions) are permitted",
            "Rule does NOT apply to: municipal securities; exempted securities; mutual fund shares priced at NAV"
          ]
        }
      ]
    }
  ]
};
