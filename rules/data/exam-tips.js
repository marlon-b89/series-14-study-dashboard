// Exam Tips — high-yield mnemonics, common traps, and memory hooks for each rule.
// Keyed by rule id. Merged into rules at render time by app.js.
window.EXAM_TIPS = {

  // ====== CHAPTER 1 ======
  "securities-act-1933": "The '33 Act = PRIMARY market (new issues, disclosure via prospectus). The '34 Act = SECONDARY market (trading, SEC, B-Ds). Balance sheet must be within 90 days of filing; financials must cover 3 fiscal years. This is the most common 'which act governs what' question on the exam.",

  "exchange-act-1934": "Remember: 1933 = issuance, 1934 = trading. The '34 Act created the SEC — so anything about B-D registration, exchanges, insider reporting, proxies, or tender offers is the '34 Act. Covered in detail in Chapter 3.",

  "maloney-act": "Maloney Act (1938) amended the '34 Act to permit SROs for OTC. NASD (1939) + NYSE member reg merged in 2007 = FINRA. MSRB (1975) writes rules but does NOT enforce them — FINRA enforces MSRB rules for B-Ds; bank regulators enforce for banks.",

  "form-s1": "Form S-1 = long-form 'default' registration. Used by IPOs and any issuer that does not qualify for S-3. If the question says 'first-time issuer' or 'no reporting history' — it's S-1.",

  "form-s3": "S-3 is the 'short form' — requires the issuer to be a reporting company for 12+ months and current on filings. WKSIs use S-3 for automatic shelf. Also used for secondary offerings by seasoned issuers. Key trap: non-reporting issuers CANNOT use S-3.",

  "form-s4": "S-4 = business combinations (mergers, asset transfers, reclassifications under Rule 145). Any M&A question involving securities issued to target shareholders points to S-4.",

  "form-f6": "F-series = FOREIGN private issuers. F-6 specifically = ADRs (American Depositary Receipts). Domestic issuers never use F forms.",

  "registration-process": "Three phases: PRE-FILING (quiet period, no offers), WAITING (red herring, tombstones, indications of interest only — NO sales, NO confirmations), POST-EFFECTIVE (final prospectus required with every sale). The 20-day cooling-off period is between filing and effective date. No sales until effective.",

  "prospectus-delivery": "Aftermarket prospectus delivery requirements: IPO = 25 days if listed on exchange/Nasdaq (90 days if not listed); Additional offering by reporting issuer = 0 days if listed, 40 days otherwise; Non-reporting issuer additional = 40/90 days. Memorize the '25/40/90' framework.",

  "rule-15c2-12": "Muni underwriter obligation: obtain the official statement and ensure continuing disclosure. Applies to primary offerings of $1MM+. Exempt: offerings under $1MM, short-term notes (9 months or less), or offerings with a put feature.",

  "msrb-g32": "MSRB G-32 = muni equivalent of prospectus delivery. Underwriters must submit the official statement to EMMA (MSRB's electronic system) within 1 business day of the sale and no later than closing. Retail customers must receive the official statement by settlement.",

  "sec-rule-405": "Issuer categories by size (from smallest to largest): Non-reporting → Unseasoned (reporting <12 months) → Seasoned (reporting 12+ months, S-3 eligible) → WKSI (Well-Known Seasoned Issuer: $700MM+ float OR $1B debt issued in past 3 yrs). WKSI = most gun-jumping/communication flexibility.",

  "rule-415": "Shelf registration lets issuers 'put on the shelf' for up to 3 years. WKSIs get AUTOMATIC shelf (effective upon filing, no SEC review). Non-WKSIs need SEC review. Take-downs can happen anytime during the 3-year window.",

  "atm-offering": "ATM = 'at-the-market' offering. Seasoned issuer sells directly into the trading market over time. Must be on S-3 shelf; cannot exceed market price; salespersons cannot solicit. Think of it as dripping shares into the market.",

  "exempt-securities": "Memory trick — exempt SECURITIES (always exempt regardless of transaction): Government, Municipal, Non-profit, Commercial paper ≤270 days, Domestic bank/trust, SBICs, Insurance policies/fixed annuities. These never require '33 Act registration.",

  "rule-147": "Rule 147/147A = intrastate exemption. 147: 80% test (80% of revenue, assets, and proceeds in-state) + issuer incorporated in-state. 147A: issuer can be incorporated anywhere but principal place of business must be in-state, and offers may be made to out-of-state residents (only SALES restricted). Resale restriction: 6 months within-state only.",

  "regulation-a": "Reg A+ two tiers: Tier 1 = up to $20MM (state blue sky applies); Tier 2 = up to $75MM (preempts state review BUT requires audited financials + ongoing reporting). Both allow 'testing the waters' before filing. No accredited-investor requirement — open to retail.",

  "section-4-2": "Section 4(a)(2) = the private placement exemption. 'Transactions by an issuer not involving any public offering.' Reg D is the SAFE HARBOR under 4(a)(2). Keyword: if sold to sophisticated investors with access to information, it's 4(a)(2).",

  "section-4-5": "Section 4(a)(5) = accredited investor exemption. Up to $5MM, accredited investors only, no advertising. Less used in practice than Reg D 506(b)/(c).",

  "reg-d": "Reg D is the SAFE HARBOR for private placements. Form D must be filed within 15 days of first sale. The three workhorse rules: 504 ($10MM cap), 506(b) (unlimited $, no general solicitation, up to 35 non-accredited), 506(c) (unlimited $, general solicitation OK, accredited-only + verification).",

  "rule-504": "Rule 504: $10MM limit in 12 months, no specific investor limit, but generally no general solicitation or advertising unless registered at state level or sold only to accredited investors. Bad actor disqualification applies.",

  "rule-506b": "506(b): UNLIMITED $, NO general solicitation, up to 35 NON-accredited (must be sophisticated) + unlimited accredited. This is the most common traditional private placement.",

  "rule-506c": "506(c): UNLIMITED $, general solicitation/advertising PERMITTED, but ONLY accredited investors, and issuer must take REASONABLE STEPS TO VERIFY accredited status (not just self-certification). Mnemonic: 'C for Commercials' — public ads allowed.",

  "rule-144": "Rule 144 resale of restricted/control stock. Holding periods: Reporting issuer = 6 months; non-reporting = 12 months. Volume limit (affiliates only): greater of 1% of outstanding OR avg weekly trading volume over prior 4 weeks. Form 144 required if sale exceeds 5,000 shares OR $50,000 in 3 months. Non-affiliates after holding period: unrestricted.",

  "rule-144a": "Rule 144A = resale of restricted securities to QIBs (Qualified Institutional Buyers, $100MM+ in securities). Creates a liquid secondary market for private placements among institutions. No holding period. Retail customers cannot participate.",

  "regulation-s": "Reg S = offshore exemption. Securities sold outside the U.S. to non-U.S. persons. Distribution compliance period (40 days for debt, 6 mo/1 yr for equity) before resale into U.S. Must have 'no directed selling efforts' in the U.S.",

  "finra-5122": "FINRA 5122 = private placements OF the member firm (or its control entity). Disclosure doc must be filed with FINRA within 15 days of first sale. At least 85% of proceeds must go to operations/business purposes disclosed. Exemptions: sales to QIBs, institutional accounts, accredited investors.",

  "finra-5123": "FINRA 5123 = private placements SOLD BY the member firm (third-party issuer). File the offering document within 15 days of first sale. Many exemptions: QIBs, institutional, accredited, employee offerings, M&A.",

  "rule-145": "Rule 145 treats reclassifications, mergers, and asset transfers as 'sales' requiring registration via Form S-4. NOT treated as sales: stock splits, reverse splits, changes in par value. Memory: structural changes = S-4; mechanical recalibrations = no registration."

  ,
  // ====== CHAPTER 2 ======
  "firm-commitment": "Firm commitment = underwriter buys the entire issue and resells to public. Underwriter assumes ALL market risk. Any unsold shares stay on the underwriter's balance sheet. This is the 'standard' IPO method for established deals.",

  "best-efforts": "Best efforts = underwriter acts as AGENT, not principal. No capital commitment — underwriter uses best efforts but takes no unsold shares. Common for smaller or riskier deals. Key phrase: 'underwriter bears no risk of unsold securities.'",

  "all-or-none": "AON = either the ENTIRE offering sells or the deal is cancelled and all funds returned to investors. Customer funds must be held in escrow until all-or-none threshold is met. SEC Rule 15c2-4 governs the escrow.",

  "mini-maxi": "Mini-maxi = minimum-maximum best efforts. Sets a MIN (below which deal is cancelled and funds returned) and a MAX (ceiling). Funds held in escrow until minimum reached. Common in real-estate and direct participation programs.",

  "standby": "Standby = used with RIGHTS OFFERINGS. Underwriter agrees to buy any shares that existing shareholders don't purchase via their rights. Ensures full subscription of the offering.",

  "sec-15c2-4": "15c2-4 = escrow requirement for contingent offerings (AON, mini-maxi, best efforts with contingency). Customer funds must go into a SEPARATE bank escrow (not a B-D account). If contingency not met, funds must be PROMPTLY RETURNED to customers — no fees withheld.",

  "corporate-financing": "FINRA 5110 = Corporate Financing Rule. Underwriter must file offering docs with FINRA PRIOR to the offering. FINRA reviews underwriting compensation for FAIRNESS. Exemptions: investment-grade debt, exchange-listed issuers meeting certain tests, shelf offerings by seasoned issuers, muni offerings.",

  "fairness-compensation": "FINRA evaluates underwriting comp across multiple factors: offering size, type of securities, underwriter risk, market conditions, other services. General cap on total comp varies by offering size (smaller = higher %; larger = lower %). There's no single cap — 'reasonable' is contextual.",

  "prohibited-arrangements": "Prohibited under 5110: underwriter receiving securities during the 180-day review period at less than public price (unless within the 5% de minimis); rights of first refusal longer than 3 years; termination fees exceeding underwriter's actual expenses; tail fees beyond 2 years.",

  "conflict-of-interest": "FINRA 5121 = conflicts of interest. If a member underwriter or its affiliates have a conflict (e.g., issuer is an affiliate, or 5%+ of net offering proceeds go to member), a QIU (Qualified Independent Underwriter) or other specified measures are required. Prominent disclosure in the prospectus is mandatory.",

  "reg-m-overview": "Reg M = anti-manipulation rules during distributions. Goal: prevent underwriters/issuers from artificially propping up the price of the offered security. Five rules: 101 (distribution participants), 102 (issuer/selling holders), 103 (passive MM), 104 (stabilization), 105 (short sale restriction).",

  "reg-m-rule-101": "Rule 101 = restricted period for DISTRIBUTION PARTICIPANTS (underwriters, dealers). Cannot bid for or purchase the subject security during the restricted period. Restricted period: 1 day for actively traded ($1MM+ avg daily trading volume AND $150MM+ float); 5 days for others. Excepted securities: investment-grade nonconvertible debt/preferred, actively traded reference securities.",

  "reg-m-rule-102": "Rule 102 = restricted period for the ISSUER and SELLING SECURITYHOLDERS. Same restricted period as 101. More restrictive because no exception for actively traded securities — issuer/holders always have the restriction.",

  "reg-m-rule-103": "Rule 103 = PASSIVE MARKET MAKING on Nasdaq during distributions. Nasdaq market maker may continue making markets but must: not exceed prior day's independent bid; limit daily purchases to greater of 30% of ADTV or 200 shares; identify bids as passive. Only applies to Nasdaq, not exchange-listed.",

  "reg-m-rule-104": "Rule 104 = STABILIZATION. Underwriters may place stabilizing bid at or below offering price to support the market. Only ONE stabilizing bid at a time. Must be disclosed in prospectus. Stabilization bid cannot be raised — can only maintain or lower. Must be identified as stabilizing.",

  "penalty-bid-covering": "Penalty bid = underwriter reclaims selling concession from broker whose customers quickly flip IPO allocations. Syndicate covering = underwriter buys back shares in aftermarket to cover short syndicate position (from overallotment). Both must be disclosed. Distinct from stabilization.",

  "green-shoe": "Green Shoe (overallotment option) = underwriter may sell up to 15% MORE shares than the base deal, then cover either by purchasing in the market (at or below offering) OR exercising the option from the issuer. Named after Green Shoe Mfg. Allows 'cushion' against demand volatility.",

  "reg-m-rule-105": "Rule 105 = SHORT SALE RESTRICTION. Cannot purchase in a covered offering if you shorted the same security during the 5 business days before pricing (the 'Rule 105 restricted period'). Prevents manipulative shorting to pressure offering price. Exceptions: bona fide purchase exception, separate accounts, investment company.",

  "finra-reg-m-forms": "FINRA requires underwriters to file Reg M restricted period notifications: notice BEFORE restricted period begins, and post-distribution notice (typically within 1-2 business days of pricing). Syndicate covering transactions and penalty bids require additional notice.",

  "sec-17a-2": "17a-2 = recordkeeping for underwriters. Underwriters must keep records of stabilization activity, syndicate covering, penalty bids for 3 years. SEC/FINRA can inspect.",

  "ipo-allocations": "FINRA 5131 = IPO allocations. Prohibits 'spinning' (allocating IPOs to executive officers of current/potential investment-banking clients). Prohibits 'quid pro quo' (allocations tied to excess commissions). Requires written allocation procedures. 'Flipping' = customer quickly selling IPO allocation; can trigger penalty bid.",

  "finra-new-issue": "FINRA 5130 = New Issue Rule. RESTRICTED PERSONS cannot buy IPOs (common stock IPOs specifically). Restricted persons = B-D employees + immediate family, portfolio managers, finders. Exemptions: foreign investment companies, ERISA plans with 10,000+ participants, investment companies registered under 1940 Act. Applies only to equity IPOs — not secondaries, not debt.",

  "fixed-price-offering": "Public offerings are fixed-price — all customers pay the same public offering price. No discounts to favored clients during the offering. Selling concession goes to the B-D from the underwriter, not to the customer. Customer pays POP flat."
};
