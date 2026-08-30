// Chapter 1 – Public and Private Offerings
window.CHAPTER_1 = {
  id: 1,
  title: "Public and Private Offerings",
  subtitle: "Securities Act of 1933, registration, exemptions, and restricted securities",
  sections: [
    {
      name: "Foundational Acts & SROs",
      rules: [
        {
          id: "securities-act-1933",
          name: "Securities Act of 1933",
          category: "Federal Law",
          language: "Section 5 of the Act states that it is unlawful to use an instrument of interstate commerce (e.g., mailings) to sell a security unless a registration statement is in effect. The Act requires that non-exempt securities be registered with the SEC. The process includes filing a registration statement and preparation/distribution of a prospectus.",
          concept: "Governs the PRIMARY market. Its purpose is full and fair disclosure so investors are provided with sufficient information about a new issue. Also called the 'Paper Act' or 'Prospectus Act.' Applies to issuers (corporations, foreign governments) and investment bankers.",
          parameters: [
            "Issuers must file a registration statement with the SEC unless an exemption is available",
            "Must contain detailed info about the issuer, its business, owners, financial condition",
            "Balance sheet data must be no older than 90 days prior to filing",
            "Must include P&L for the latest fiscal year plus the two preceding years",
            "Must disclose shareholdings of senior officers, directors, underwriters, and 10%+ holders",
            "Liability extends to underwriters and anyone assisting in registration statement preparation"
          ],
          exceptions: [
            "Exempt securities (government, municipal, non-profit, commercial paper ≤270 days, domestic bank/trust company, small business investment company securities)",
            "Exempt transactions (Rule 147/147A intrastate, Regulation A, Regulation D private placements, Regulation S offshore, Rule 144/144A resales)"
          ]
        },
        {
          id: "exchange-act-1934",
          name: "Securities Exchange Act of 1934",
          category: "Federal Law",
          language: "Regulates the secondary (trading) markets. Requires exchanges and market participants (e.g., broker-dealers) to register with the SEC. Created the Securities and Exchange Commission (SEC) which has preeminent regulatory authority over domestic securities dealings in both the primary and secondary markets.",
          concept: "Governs the SECONDARY market — where securities trade AFTER they have been issued. Created the SEC. Requires registration of exchanges (NYSE, Nasdaq) and broker-dealers. Is covered in more depth in Chapter 3.",
          parameters: [
            "Exchanges must register with the SEC",
            "Broker-dealers must register with the SEC",
            "Market participants are subject to ongoing reporting and anti-fraud provisions"
          ],
          exceptions: []
        },
        {
          id: "maloney-act",
          name: "Maloney Act of 1938",
          category: "Federal Law",
          language: "The Maloney Act of 1938 enabled the creation of non-exchange SROs. Led to the National Association of Securities Dealers (NASD) in 1939 for the OTC market, and later to the creation of the MSRB in 1975 for municipal securities.",
          concept: "Amendment to the Act of 1934 that permitted the creation of SROs for OTC markets. The NASD merged with NYSE member regulation in 2007 to form FINRA.",
          parameters: [
            "NASD created in 1939 as the SRO for the OTC (non-exchange) market",
            "MSRB created in 1975 to write rules for municipal securities",
            "FINRA (2007) merged NYSE and NASD member regulation functions"
          ],
          exceptions: []
        }
      ]
    },
    {
      name: "SEC Registration Forms",
      rules: [
        {
          id: "form-s1",
          name: "Form S-1",
          category: "SEC Form",
          language: "Form S-1 is the basic registration form that most companies are required to use when conducting initial public offerings. Foreign issuers file Form F-1 as the equivalent.",
          concept: "The default long-form registration statement for U.S. companies doing an IPO or for companies that don't qualify for short-form. Used by unseasoned issuers and non-reporting issuers (IPOs / pink / limited market).",
          parameters: [
            "Used by unseasoned issuers (less than $75 million public float)",
            "Used by non-reporting issuers (IPOs, Pink, Limited Market)",
            "Foreign issuers use the equivalent Form F-1"
          ],
          exceptions: []
        },
        {
          id: "form-s3",
          name: "Form S-3 (Short Form)",
          category: "SEC Form",
          language: "An S-3 registration statement—often referred to as a short form registration statement—is used by seasoned issuers. The minimum requirement is a public float of $75 million in voting and non-voting common equity. Foreign issuers file Form F-3.",
          concept: "The short-form registration for SEASONED issuers with established SEC reporting history. Allows shelf registration and incorporation by reference to reduce the disclosure burden.",
          parameters: [
            "Minimum $75 million public float in voting and non-voting common equity",
            "Issuer must have an established SEC reporting history",
            "Foreign equivalent: Form F-3"
          ],
          exceptions: [
            "Issuer cannot file S-3 if it failed to pay a dividend on preferred stock",
            "Issuer cannot file S-3 if it failed to pay interest on a bond",
            "Issuer cannot file S-3 if it is delinquent in its SEC filings"
          ]
        },
        {
          id: "form-s4",
          name: "Form S-4",
          category: "SEC Form",
          language: "The SEC requires an issuer to file Form S-4 if securities are being offered as a result of a business combination (e.g., merger, acquisition, consolidation, reclassification of securities, or transfer of corporate assets).",
          concept: "Business-combination registration. Triggered by M&A activity involving a securities issuance or by any transaction subject to Rule 145.",
          parameters: [
            "Required for mergers, acquisitions, consolidations",
            "Required for reclassifications of securities",
            "Required for transfers of corporate assets where securities are issued",
            "Required for all transactions subject to Rule 145"
          ],
          exceptions: [
            "Stock splits are not reclassifications",
            "Reverse stock splits are not reclassifications",
            "Changes in par value are not reclassifications"
          ]
        },
        {
          id: "form-f6",
          name: "Form F-6",
          category: "SEC Form",
          language: "SEC Form F-6 is a filing that investment firms must file if they intend to offer American depositary receipts (ADRs) of a foreign issuer.",
          concept: "Registration form specifically for ADRs representing shares of foreign issuers.",
          parameters: [
            "Used for registration of ADRs",
            "Filed by investment firms sponsoring the ADR program"
          ],
          exceptions: []
        }
      ]
    },
    {
      name: "Offering Process & Timing",
      rules: [
        {
          id: "registration-process",
          name: "IPO Registration Process & Effective Date",
          category: "Process",
          language: "As a general rule, the date on which a registration statement becomes effective is the 20th day after the filing date. Any amendment to a registration statement that's filed prior to the effective date will initiate a new 20-day period. When the issuer files the final amendment, it may request an accelerated effective date.",
          concept: "Three phases: (1) Pre-Registration/Pre-Filing (quiet period, no discussion with customers); (2) Cooling-Off/Waiting Period (SEC reviews; red herring permitted; indications of interest only — no sales, no payment); (3) Post-Effective (final prospectus, sales begin).",
          parameters: [
            "Default effective date = 20 days after filing (or after last amendment)",
            "Amendments before effective date restart the 20-day clock",
            "Acceleration request requires SEC notification no later than the second business day before the desired effective date",
            "During cooling-off period: red herring OK; discussing the issue OK; recording non-binding indications of interest OK",
            "During cooling-off period: NO sales, NO acceptance of payment",
            "A deficiency letter triggers required amendment"
          ],
          exceptions: [
            "SEC may accelerate the effective date upon joint request by the issuer and managing underwriter"
          ]
        },
        {
          id: "prospectus-delivery",
          name: "Prospectus Delivery Requirement",
          category: "SEC Rule",
          language: "A dealer that sells securities in the secondary market must provide prospectuses to customers if new securities of that class were recently sold by the issuer under a registration statement. If an issuer has publicly traded securities already outstanding, a prospectus must be delivered to purchasers for 40 days after the effective date. If an issuer is conducting an IPO, the prospectus must be delivered to purchasers for 90 days.",
          concept: "Aftermarket prospectus delivery periods vary with the issuer's reporting status and whether the stock will be listed.",
          parameters: [
            "Non-Reporting issuer, will be listed on exchange/Nasdaq: 25 days (most typical IPO)",
            "Non-Reporting issuer, will NOT be listed, NOT an IPO (follow-on): 40 days",
            "Non-Reporting issuer, will NOT be listed, IS an IPO: 90 days",
            "In the case of a non-reporting issuer, the preliminary prospectus must be delivered at least 48 hours before the sale is confirmed",
            "Mutual fund prospectus used >9 months must contain info no older than 16 months"
          ],
          exceptions: [
            "If the issuer was a reporting company prior to filing, NO aftermarket prospectus delivery requirement applies (EDGAR is available)"
          ]
        },
        {
          id: "rule-15c2-12",
          name: "SEC Rule 15c2-12 – Municipal Securities Disclosure",
          category: "SEC Rule",
          language: "SEC Rule 15c2-12 requires an underwriter to: (1) obtain and review an official statement deemed final by the issuer prior to bidding for or purchasing the securities; (2) send customers the most recent preliminary official statement within one business day of request (for negotiated offerings); and (3) contract with the issuer to receive sufficient quantities of the final official statement within seven business days after the agreement to purchase, offer, or sell.",
          concept: "Disclosure backbone for municipal primary offerings. Also enables continuing disclosure contracts (to EMMA) — municipal issuers are otherwise exempt from most SEC reporting rules.",
          parameters: [
            "Review final-form official statement before bidding or purchasing",
            "Provide preliminary official statement within one business day of request (negotiated offerings)",
            "Obtain sufficient final official statements within seven business days after purchase/offer/sale agreement",
            "Obligated person = any entity legally agreeing to support payment on the issue",
            "Items that can be omitted before pricing: offering price, interest rate, selling comp, aggregate principal, principal per maturity, delivery dates, ratings, underwriter identity"
          ],
          exceptions: [
            "Primary offerings with aggregate principal amount less than $1 million",
            "Bonds sold in units of at least $100,000 to no more than 35 sophisticated investors (private placement)",
            "Bonds sold in $100,000 minimum denominations that mature in 9 months or less"
          ]
        },
        {
          id: "msrb-g32",
          name: "MSRB Rule G-32 – Disclosures in Connection with Primary Offerings",
          category: "MSRB Rule",
          language: "MSRB Rule G-32 addresses disclosure requirements in connection with primary offerings of municipal securities. The underwriter must submit a final official statement to MSRB EMMA or disclose that no final official statement is being prepared. Broker-dealers must provide customers a final official statement (or notice + preliminary) by no later than settlement.",
          concept: "Operationalizes SEC Rule 15c2-12 through the MSRB EMMA system and creates customer-delivery obligations for primary-offering municipal securities.",
          parameters: [
            "Deliver final official statement to customers by settlement date",
            "Alternative: notice on how to obtain from EMMA; if requested, send by first-class mail within 1 business day",
            "Customer delivery window: from availability until the earlier of 90 days after end of underwriting period or when OS becomes available to MSRB — but never less than 25 days",
            "If OS is submitted to EMMA, underwriter's customer-availability window reduces from 90 to 25 days (incentive to file)"
          ],
          exceptions: []
        }
      ]
    },
    {
      name: "Issuer Categories & Shelf Registration",
      rules: [
        {
          id: "sec-rule-405",
          name: "SEC Rule 405 – Categories of Issuers",
          category: "SEC Rule",
          language: "SEC Rule 405 defines the different categories of issuers and determines the level and type of communications regarding the new issue offering that an issuer may make. Categories include Well-Known Seasoned Issuer (WKSI), Seasoned Issuer, Unseasoned Issuer, and Non-Reporting Issuer.",
          concept: "Issuer category drives registration form, ability to use shelf registration, and ability to file automatic (non-reviewed) offerings. WKSI status = maximum flexibility including free writing prospectus and immediately-effective ASR.",
          parameters: [
            "WKSI: must be 13(a) or 15(d) reporter; must be S-3/F-3 eligible; public float ≥ $700 million OR $1 billion non-convertible debt issued in the last 3 years",
            "Seasoned Issuer: S-3/F-3 eligible (≥ $75 million public float)",
            "Unseasoned Issuer: 13/15(d) reporter but < $75 million float — must use S-1",
            "Non-Reporting Issuer: not required to file Section 13 or 15(d) reports (still non-reporting even if filing voluntarily)",
            "WKSI majority-owned subsidiary qualifies as WKSI if: non-convertible (non-equity) securities fully guaranteed by the WKSI parent; OR guarantees of non-convertible (non-equity) parent/sub securities; OR non-convertible investment-grade securities",
            "WKSI may use a Free Writing Prospectus (FWP) in conjunction with a registration statement"
          ],
          exceptions: []
        },
        {
          id: "rule-415",
          name: "Rule 415 – Shelf Registration",
          category: "SEC Rule",
          language: "Rule 415 allows issuers to file registration documents and offer the subject securities on a delayed or continuous basis. A shelf registration statement for qualifying offerings may be used for three years after an initial effective date. A WKSI may file an immediately effective automatic shelf registration statement (ASR).",
          concept: "Lets issuers register now, sell later when market conditions are favorable. WKSIs get 'pay-as-you-go' ASRs that bypass SEC staff review.",
          parameters: [
            "Business-combination / on-behalf-of-issuer shelf: amount reasonably expected to sell in 2 years",
            "S-3/F-3 primary shelf: usable for 3 years after initial effective date",
            "Must begin immediately and last >30 days OR be for S-3/F-3 on-behalf-of registrant securities",
            "WKSI ASR: pay-as-you-go — registration fee paid as securities are sold off the shelf",
            "ASR may omit info not yet available (types of securities offered, primary vs. selling-holder mix, plan of distribution, description of securities beyond name/class, identity of other issuers)",
            "No limit on the dollar amount of securities that may be registered on a shelf for eligible issuers",
            "Loss of WKSI status: issuer must amend its ASR; can continue selling under old ASR until the next Form 10-K is due, then convert to regular (SEC-reviewed) shelf via amended S-3"
          ],
          exceptions: []
        },
        {
          id: "atm-offering",
          name: "At-The-Market (ATM) Offering",
          category: "SEC Concept",
          language: "An at-the-market offering of securities is sold at the prevailing market price directly into the secondary market through a designated broker-dealer at prevailing market prices, rather than through a traditional offering of a fixed number of shares at a fixed price. Only issuers that register under Form S-3 or Form F-3 may engage in this type of offering.",
          concept: "Issuer dribbles shares into the open market through a broker-dealer at market prices, typically under a shelf registration. Only available to S-3/F-3 eligible issuers.",
          parameters: [
            "Must be registered on S-3 or F-3",
            "Sales occur at varying prices throughout the day reflecting supply/demand",
            "A broker-dealer participating in a distribution of a non-exchange-listed security cannot represent it is offered at-the-market unless it has reasonable grounds to believe an independent market exists",
            "Stabilization is NOT permitted in an at-the-market offering (Reg M Rule 104)"
          ],
          exceptions: []
        }
      ]
    },
    {
      name: "Exempt Securities & Exempt Transactions",
      rules: [
        {
          id: "exempt-securities",
          name: "Exempt Securities (Section 3)",
          category: "Act of 1933",
          language: "Certain securities are exempt from the registration and prospectus requirements of the Securities Act of 1933 because of the nature of the issuer.",
          concept: "Securities that are permanently exempt from 1933 Act registration regardless of the transaction. Exemption is based on WHO the issuer is.",
          parameters: [
            "U.S. government and U.S. government agency securities",
            "Municipal securities",
            "Securities issued by non-profit organizations",
            "Short-term corporate debt with a maturity not exceeding 270 days (e.g., commercial paper)",
            "Securities issued by domestic banks and trust companies (but NOT bank holding companies)",
            "Securities issued by small business investment companies"
          ],
          exceptions: [
            "Anti-fraud provisions still apply even to exempt securities",
            "Bank holding companies are NOT exempt (contrast with banks themselves)"
          ]
        },
        {
          id: "rule-147",
          name: "Rule 147 & Rule 147A – Intrastate Offerings",
          category: "SEC Rule",
          language: "Rule 147 is a safe harbor under the statutory intrastate offering exemption. Companies conducting offerings and selling securities only to their state residents are exempt from registration. Rule 147A (2017) modernizes this and allows multi-state offers (not sales) and out-of-state incorporation if the principal place of business is in-state.",
          concept: "In-state capital raising exemption. Key difference: Rule 147A permits general solicitation and out-of-state offers (but sales still must be in-state); Rule 147 does not.",
          parameters: [
            "Issuer must have principal office (Rule 147) or principal place of business (Rule 147A) in that state",
            "Doing-business test (must meet ONE of four): (1) 80% of consolidated gross revenues from in-state operations; (2) 80% of consolidated assets in-state at most recent semiannual period-end; (3) 80% of net proceeds used in-state; (4) majority of employees based in-state (147A only)",
            "Must obtain written representation of residency from all purchasers",
            "Resales to out-of-state persons restricted for 6 months from sale by issuer to purchaser (was 9 months)",
            "Legend requirement applies",
            "If issuer changes principal place of business, cannot conduct another intrastate offering under these rules in another state for 6 months"
          ],
          exceptions: [
            "Rule 147A permits general solicitation and publicly available websites to find in-state investors (Rule 147 does not)"
          ]
        },
        {
          id: "regulation-a",
          name: "Regulation A (Tier 1 & Tier 2 / 'Reg A+')",
          category: "SEC Regulation",
          language: "Under Regulation A, an issuer offering a new issue of securities may be exempt if certain conditions are met. The JOBS Act expanded Regulation A into two tiers with higher dollar caps. Tier 1 permits up to $20 million in 12 months; Tier 2 permits up to $75 million in 12 months.",
          concept: "A mini-registration — exempt from full Act of 1933 registration, but requires a Form 1-A offering statement and an offering circular. Cheaper, faster than S-1. 'Test the waters' permitted. Two tiers with escalating disclosure burdens.",
          parameters: [
            "Tier 1: up to $20 million in 12 months; max $6 million by selling shareholders; SEC + Blue Sky review; continuing disclosure required",
            "Tier 2: up to $75 million in 12 months; max $22.5 million by selling shareholders; SEC review only (NOT blue sky); audited financials + ongoing reporting",
            "Offering statement filed on Form 1-A — deemed qualified 20 calendar days after filing (absent delay/suspension)",
            "Preliminary or final offering circular must be provided at least 48 hours before mailing the confirmation",
            "If preliminary is used, final offering circular must be delivered with the confirmation",
            "Test-the-waters materials: must include description of business, CEO background, statement that no money should be sent",
            "At least 20 days must separate use of a solicitation statement and the first sale",
            "Both U.S. and Canadian companies eligible; equity or debt"
          ],
          exceptions: [
            "Current SEC reporting companies cannot use Regulation A",
            "SEC may halt a Regulation A offering if deficient in any terms/conditions/regulatory requirements (including failure to provide SEC copies of radio/TV scripts)"
          ]
        }
      ]
    },
    {
      name: "Regulation D & Private Placements",
      rules: [
        {
          id: "section-4-2",
          name: "Section 4(2) Exemption",
          category: "Act of 1933",
          language: "Section 4(2) of the Securities Act of 1933 provides a registration exemption for transactions by an issuer that do NOT involve a public offering. Purchasers must have sufficient knowledge and experience in finance and business to understand and evaluate the risks and merits of the investment.",
          concept: "The statutory basis for private placements. Rule 506 is the safe harbor that operationalizes this section.",
          parameters: [
            "Purchasers must be sophisticated (knowledge/experience in finance and business)",
            "Purchasers must have access to the same information normally in a prospectus",
            "Purchasers must agree not to resell or redistribute the securities to the public"
          ],
          exceptions: []
        },
        {
          id: "section-4-5",
          name: "Section 4(5) Exemption",
          category: "Act of 1933",
          language: "An offering by an issuer may be considered exempt if: (1) the amount of the offering doesn't exceed $5 million; (2) no advertising or public solicitation is being used; and (3) the offering is sold only to accredited investors.",
          concept: "Accredited-investor-only private offering. Unlike Reg D, there is no 35-non-accredited limit because only accredited investors can participate. Institutional investors are considered accredited under 4(5).",
          parameters: [
            "Offering amount cap: $5 million",
            "No advertising or public solicitation",
            "Only accredited investors (institutions count as accredited here)"
          ],
          exceptions: []
        },
        {
          id: "reg-d",
          name: "Regulation D – Form D Filing",
          category: "SEC Regulation",
          language: "SEC Regulation D provides an exemption from registration for private placements of securities by an issuer if several conditions are met. A uniform notice of sale (Form D) must be filed with the SEC by no later than 15 days after the first sale of the securities. Form D is a short form and not a registration statement.",
          concept: "Umbrella regulation for private placements — Rules 504, 506(b), 506(c). Form D is a notice filing, not a registration.",
          parameters: [
            "Form D must be filed within 15 days after the first sale",
            "Form D is a notice filing, not a registration statement"
          ],
          exceptions: []
        },
        {
          id: "rule-504",
          name: "Rule 504 (Regulation D)",
          category: "SEC Rule",
          language: "Under Rule 504, for offerings not exceeding $10 million within a 12-month period, an issuing corporation is permitted to offer and sell the securities to an unlimited number of investors without regard to their experience and sophistication. The issuer is not required to provide a disclosure document to the investors.",
          concept: "Small-company private placement — up to $10M in 12 months, unlimited number of investors, no sophistication test, no disclosure document required.",
          parameters: [
            "Maximum offering size: $10 million in 12 months",
            "Unlimited number of investors",
            "No sophistication requirement",
            "No mandatory disclosure document"
          ],
          exceptions: [
            "Not available to SEC reporting companies",
            "Not available to investment companies",
            "Not available to development stage (blank-check) companies with no specific business plan"
          ]
        },
        {
          id: "rule-506b",
          name: "Rule 506(b) (Regulation D)",
          category: "SEC Rule",
          language: "Rule 506(b) covers private offerings for which the amount of capital being raised is unlimited. Regulation D allows an unlimited number of accredited investors to purchase the securities, but no more than 35 non-accredited investors.",
          concept: "The workhorse private placement rule: unlimited capital, unlimited accredited investors, up to 35 non-accredited sophisticated investors. NO general solicitation permitted. Sophistication and purchaser representatives required for non-accredited investors.",
          parameters: [
            "Unlimited dollar amount may be raised",
            "Unlimited number of accredited investors",
            "Maximum 35 non-accredited investors (must be sophisticated alone or with a purchaser representative)",
            "NO general solicitation or advertising (no cold calls, no public seminars, no media)",
            "Accredited individual = $1 million net worth (alone or with spouse, excluding primary residence) OR $200k income ($300k with spouse) in each of the last 2 years with expectation of same in current year",
            "Institutional accredited = banks, insurance companies, investment companies, large tax-exempt plans, private BDCs",
            "Directors, executive officers, and general partners of the issuer are accredited",
            "Entity formed solely to acquire the offering — each participant counted separately",
            "Relatives of a purchaser at the same address are excluded from the 35-count; 50%-owned purchaser trust also excluded",
            "Purchaser representative cannot own 10%+ of issuer stock or be an affiliate/director/officer/employee of the issuer (unless related to purchaser by blood, marriage, adoption)",
            "Purchaser representative designation must be in writing per-offering (no blanket approval)",
            "If any non-accredited investor participates: issuer must provide offering memorandum to ALL purchasers (accredited and non-accredited)",
            "Restricted securities: legend required, investment letter required, stop-transfer instructions to transfer agent"
          ],
          exceptions: []
        },
        {
          id: "rule-506c",
          name: "Rule 506(c) (Regulation D)",
          category: "SEC Rule",
          language: "For issuers that seek to raise an unlimited amount of capital privately, the JOBS Act established Rule 506(c). The company is permitted to use general solicitation or advertising to market the securities. Sales may only be made to accredited investors, and the company must take reasonable steps to verify that its investors are accredited.",
          concept: "The 'public' private placement — general solicitation is OK, but only accredited investors may buy and the issuer must VERIFY accredited status (not just self-certification).",
          parameters: [
            "Unlimited capital raised",
            "General solicitation/advertising permitted",
            "Sales only to accredited investors",
            "Reasonable verification required (may include W-2s, tax returns, bank/brokerage statements, credit reports)",
            "Securities are restricted"
          ],
          exceptions: []
        }
      ]
    },
    {
      name: "Selling Unregistered Securities",
      rules: [
        {
          id: "rule-144",
          name: "Rule 144 – Sale of Restricted & Control Stock",
          category: "SEC Rule",
          language: "Rule 144 permits the resale of restricted (unregistered) stock and control stock under certain conditions. It is not a means for an issuer to raise money. An individual selling securities pursuant to Rule 144 must notify the SEC at the time a sell order is placed by filing Form 144 (effective for 90 days).",
          concept: "The safe harbor for reselling restricted or control stock. Restricted stock = acquired via private placement/unregistered transaction; Control stock = any stock (even open-market) held by an affiliate (officer/director/10%+ holder).",
          parameters: [
            "Holding period — restricted stock: 6 months if issuer is a reporting company; 1 year if non-reporting",
            "Holding period — control stock: NONE (can be sold at any time)",
            "Affiliate acquiring restricted stock: still subject to 6-month holding period",
            "Volume limit every 3 months — exchange/Nasdaq-listed: greater of 1% of shares outstanding OR average weekly volume of the past 4 weeks",
            "Volume limit every 3 months — OTC: 1% of shares outstanding (no ADTV option)",
            "Form 144 not required if sale ≤ 5,000 shares AND ≤ $50,000",
            "Brokers' transactions only — agency basis; no solicitations except: inquiries of customers with unsolicited interest within 10 business days, or inquiries of another broker with interest within 60 days",
            "Holding period tolls for gifts from the original purchaser, trust-from-beneficiary, pledgee-from-pledgor (holding period continues, not restarts)",
            "Required: adequate public information about the issuer",
            "Filing effective for 90 days; can refile at conclusion of each 90-day period"
          ],
          exceptions: [
            "Non-affiliate who has owned restricted stock ≥ 1 year AND has not been an affiliate for ≥ 3 months prior to sale: may sell WITHOUT Rule 144 restrictions",
            "Estate of a deceased non-affiliate: holding period waived (other provisions of Rule 144 still apply)",
            "Estate of a deceased affiliate: normal holding period applies"
          ]
        },
        {
          id: "rule-144a",
          name: "Rule 144A – Sales to QIBs",
          category: "SEC Rule",
          language: "Rule 144A permits the sale of restricted securities (except sales by the issuer) to qualified institutional buyers (QIBs) without the conditions imposed by Rule 144. The purchaser must be a QIB; the seller need only reasonably believe the buyer is qualified.",
          concept: "Creates a liquid institutional market for restricted securities. QIBs may resell immediately to other QIBs. Critical for Rule 144A/Reg S combination offerings by foreign issuers.",
          parameters: [
            "QIB three-part test: (1) eligible entity type (insurance company, registered investment company, small business development company, public/private pension plan, certain bank trust funds, corp/partnership/business trust, certain non-profits, registered investment adviser); (2) buying for its own account or the account of other QIBs; (3) owns and invests ≥ $100 million in unaffiliated-issuer securities",
            "Broker-dealer QIB threshold: $10 million of unaffiliated-issuer securities (or acting as riskless principal for other QIBs)",
            "Seller (or its agent) must notify the buyer it is relying on Rule 144A",
            "Issuer information must be available to holders and prospective purchasers on request (unless the issuer is an Exchange Act reporter, an exempt foreign private issuer, or a foreign government)"
          ],
          exceptions: [
            "Ineligible: securities of the same class as those listed on an exchange or Nasdaq (including certain convertibles and warrants)",
            "Ineligible: securities issued by registered investment companies"
          ]
        },
        {
          id: "regulation-s",
          name: "Regulation S – Offshore Offerings",
          category: "SEC Regulation",
          language: "Regulation S provides that if a company issues securities according to its provisions, the offering is NOT required to be registered under the Securities Act of 1933. A U.S. company may issue an unlimited amount of securities outside of the country without filing documentation with the SEC.",
          concept: "Safe harbor for offshore offerings by U.S. or foreign issuers. Designed around 'offshore transaction' + 'no directed selling effort' in the U.S.",
          parameters: [
            "Offshore transaction: no offer to a person in the U.S.; at the time the buy order is originated the buyer is outside the U.S., OR the transaction is executed through a designated offshore securities market",
            "No directed selling effort in the U.S. (no U.S. mailings, promotional seminars, radio/TV/print ads)",
            "Only non-U.S. persons may buy",
            "U.S. citizen traveling or residing abroad for a significant part of the year is STILL a U.S. investor (classification is by status, not physical location)",
            "Distribution compliance period before resale into U.S.: 40 days for debt securities; 1 year for equity"
          ],
          exceptions: []
        },
        {
          id: "finra-5122",
          name: "FINRA Rule 5122 – Member Private Offerings (MPOs)",
          category: "FINRA Rule",
          language: "FINRA Rule 5122 relates to the private placement of securities in which a member firm issues the securities and conducts the offering on its own behalf (a 'Member Private Offering'). The member firm must provide a term sheet, private placement memorandum, or disclosure document with specified information, and file it with FINRA's Corporate Financing Department.",
          concept: "Conflict-of-interest rule for when a member firm is raising capital for ITSELF or an entity it controls (>50% ownership). Supplements Reg D; does not replace it.",
          parameters: [
            "Control = ownership of more than 50% of the company",
            "Required disclosures (term sheet / PPM / disclosure document) filed with FINRA Corporate Financing Department",
            "Two exemption categories: by investor type and by offering type"
          ],
          exceptions: [
            "Investor exemptions: institutional investors (banks, insurance, investment companies, investors with ≥ $50M total assets); Qualified Institutional Buyers (Rule 144A)",
            "Offering exemptions: exempt securities (Act of 1933); exempt offerings under Reg S or Rule 144A; variable contracts; commodity pool offerings; equity and credit derivatives; unregistered investment-grade debt or preferred; member-firm securities sold in a public offering"
          ]
        },
        {
          id: "finra-5123",
          name: "FINRA Rule 5123 – Member Private Placements of Third-Party Issuers",
          category: "FINRA Rule",
          language: "FINRA Rule 5123 relates to a member firm that sells an ISSUER's securities in a private placement offering. The member firm must file with FINRA a copy of any private placement memorandum, term sheet, or other offering documents within 15 calendar days of the date of first sale. If no offering documents are used, FINRA must also be notified.",
          concept: "Information-capture rule: when a member sells a private placement for a third-party issuer, the PPM/term sheet gets filed with FINRA so FINRA has visibility. FINRA does not approve or disapprove — it just requires the filing.",
          parameters: [
            "Filing deadline: within 15 calendar days of the first sale",
            "If no offering documents are used, FINRA must still be notified"
          ],
          exceptions: [
            "Same exemptions as Rule 5122 apply",
            "Both rules still apply to private placement sales to individual accredited investors"
          ]
        },
        {
          id: "rule-145",
          name: "Rule 145 – Reclassifications as Sales",
          category: "SEC Rule",
          language: "Rule 145 defines certain types of securities reclassifications as sales that are subject to the registration and prospectus requirements of the Securities Act of 1933. Filing on Form S-4 is required for all transactions conducted under Rule 145.",
          concept: "Treats certain corporate restructurings as if they are new sales, triggering 1933 Act registration via Form S-4.",
          parameters: [
            "Covered: reclassification of securities (substitution of one security for another)",
            "Covered: merger or consolidation in which securities are exchanged",
            "Covered: transfer of assets from one corporation to another",
            "Form S-4 is required"
          ],
          exceptions: [
            "NOT subject to Rule 145: stock splits",
            "NOT subject to Rule 145: reverse stock splits",
            "NOT subject to Rule 145: changes in par value"
          ]
        }
      ]
    }
  ]
};
