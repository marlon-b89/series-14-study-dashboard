// Chapter 13 – Financial Responsibility
window.CHAPTER_13 = {
  id: 13,
  title: "Financial Responsibility",
  subtitle: "SEC and FINRA rules governing net capital, customer protection, financial reporting, recordkeeping, and fidelity bonds",
  sections: [
    {
      name: "SEC Rule 15c3-1 — Net Capital Rule",
      rules: [
        {
          id: "rule-15c3-1-minimum-dollar",
          name: "SEC Rule 15c3-1 — Minimum Dollar Net Capital Requirements",
          category: "SEC Rule",
          language: "SEC Rule 15c3-1 (the Net Capital Rule) prevents a broker-dealer from becoming overleveraged by requiring a specific aggregate indebtedness to net capital ratio. The minimum amount of net capital required depends on the nature and size of the firm's business.",
          concept: "Every broker-dealer must maintain a minimum dollar amount of net capital based on its business type. The rule also imposes an AI-to-net capital ratio. The firm must meet whichever requirement is greater.",
          parameters: [
            "Carrying firm (carries customer accounts, receives and holds customer funds and securities): $250,000 minimum net capital",
            "Carrying firm (receives but does not hold customer funds or securities): $100,000 minimum net capital",
            "Prime broker (centralized clearing for customers executing through several broker-dealers): $1,500,000 minimum net capital",
            "Qualified block positioner or executing firm in a prime brokerage agreement: $1,000,000 minimum net capital",
            "Firm-commitment underwriters: $100,000 minimum net capital",
            "Market makers (dealers executing more than 10 transactions per year for own investment account): $100,000 minimum net capital",
            "Market maker additional requirement: $2,500 for each stock trading above $5/share and $1,000 for each stock trading at $5/share or less (not to exceed $1,000,000 total)",
            "Introducing firms that introduce accounts on a fully disclosed basis and do not receive customer funds or securities: $5,000 minimum net capital",
            "Introducing firms (dealers that receive customer securities for immediate delivery to a clearing firm): $50,000 minimum net capital",
            "Mutual fund firms (engage solely in the sale of redeemable investment company shares, customer checks payable to distributor): $5,000 minimum net capital",
            "All other broker-dealers (M&A firms, DPP-only firms): $5,000 minimum net capital",
            "A $5,000 or $50,000 introducing broker-dealer may only engage in best-efforts or all-or-none underwritings (not firm-commitment)"
          ],
          exceptions: [
            "Introducing broker-dealers may receive but not hold customer securities — they must forward them promptly to the clearing firm",
            "Regulation SHO exempts both market makers and qualified block positioners from the locate requirements when executing a short sale"
          ],
          examTip: "The big four to memorize: Clearing/Carrying firm = $250,000; Prime broker = $1,500,000; Firm-commitment underwriter or market maker = $100,000; Introducing (no customer funds) = $5,000; Introducing (receives securities) = $50,000. The $250,000 minimum is the most tested."
        },
        {
          id: "rule-15c3-1-ai-ratio",
          name: "SEC Rule 15c3-1 — Aggregate Indebtedness Ratio (15-to-1 Standard)",
          category: "SEC Rule",
          language: "A broker-dealer's net capital must, in general, be at least 1/15 of its aggregate indebtedness. The ratio of aggregate indebtedness to net capital cannot exceed 15-to-1. A broker-dealer in its first year of operation must meet the more stringent requirement of 1/8 of aggregate indebtedness.",
          concept: "In addition to the minimum dollar requirement, broker-dealers must maintain sufficient net capital to keep their AI/NC ratio at or below 15-to-1. The firm must always meet whichever requirement — dollar minimum or ratio — is greater.",
          parameters: [
            "Aggregate indebtedness (AI) generally includes liabilities not secured by a specific firm asset: customer credit balances, accounts payable, taxes payable, loans collateralized by customer securities, securities loaned for customer accounts, and certain fails to receive",
            "NOT included in AI: loans collateralized by firm securities, securities loaned for the firm's account, short trading account sold to customers, short security differences over 30 days old, subordinated loans, fixed liabilities secured by assets used in the firm's business, liabilities on open contractual commitments, and fails to receive for the account of the firm",
            "AI/NC ratio must not exceed 15-to-1 (NC must be at least 1/15 of AI)",
            "First-year broker-dealers: NC must be at least 1/8 of AI (more stringent)",
            "Firm must maintain the GREATEST of: (1) minimum dollar requirement, (2) 1/15 of AI, or (3) market-maker per-stock requirement",
            "Trial balance must be prepared monthly to calculate the AI/NC ratio",
            "Amount on deposit in the Special Reserve Bank Account under Rule 15c3-3 may be used to reduce AI"
          ],
          exceptions: [],
          examTip: "The AI/NC ratio is 15:1 for established firms and 8:1 for first-year firms. Always apply the rule that produces the HIGHEST required net capital — the minimum dollar floor often trumps the ratio. Example: $250,000 dollar minimum for a clearing firm will usually exceed 1/15 of AI for smaller clearing firms."
        },
        {
          id: "rule-15c3-1-alternative-standard",
          name: "SEC Rule 15c3-1 — Alternative Net Capital Requirement (2% Standard)",
          category: "SEC Rule",
          language: "Larger broker-dealers may elect to be governed by an alternative net capital requirement. Under this approach, a broker-dealer is required to maintain net capital of $250,000 or 2% of the aggregate debit items computed under Rule 15c3-3, whichever is greater.",
          concept: "The alternative standard is used by larger firms that carry customer accounts under the Customer Protection Rule (Rule 15c3-3). It replaces the AI/NC ratio test with a debit-items computation.",
          parameters: [
            "Net capital required: the greater of $250,000 or 2% of aggregate debit items under Rule 15c3-3",
            "This standard is based on the debit items (customer debit balances and similar) rather than aggregate indebtedness",
            "Firms electing the alternative standard must use it consistently",
            "Aggregate debit items represent money owed to the broker-dealer by or on behalf of customers"
          ],
          exceptions: [],
          examTip: "Two net capital standards: (1) Aggregate Indebtedness Standard — AI/NC ratio must be 15:1 or better; (2) Alternative Standard — net capital must be 2% of debit items (minimum $250,000). Larger clearing firms typically use the alternative standard."
        },
        {
          id: "rule-15c3-1-haircuts",
          name: "SEC Rule 15c3-1 — Haircuts on Securities Positions",
          category: "SEC Rule",
          language: "When computing net capital, the market value of securities is reduced because of possible illiquidity should large amounts be sold at one time. This reduction in value for net capital computation purposes is called a haircut. A haircut is applied to the net long or short position in each category of security held.",
          concept: "Haircuts reduce the carrying value of securities in inventory to account for market risk and illiquidity. The riskier or less liquid the security, the larger the haircut.",
          parameters: [
            "Cash: 0% haircut",
            "Common stock with a ready market: 15% haircut",
            "Limited market stock (e.g., Pink Limited Market with fewer than three market makers): 40% haircut",
            "Assets not readily convertible into cash (e.g., furniture and fixtures): 100% haircut (non-allowable assets)",
            "Restricted stock (private placements): 100% haircut",
            "Securities normally subject to 15% haircut when used to back a secured demand note: subject to a 30% deduction (double)",
            "Aged fail to deliver (more than 4 business days past original settlement date): treated as stock in the trading account, typically a 15% haircut applied to current market value",
            "Undue concentration deduction: if any long or short position exceeds 10% of tentative net capital, an additional deduction is assessed on the excess (15% for general stocks); applies only to equity positions in excess of $10,000 or the market value of 500 shares (whichever is greater); applies to debt positions in excess of $25,000"
          ],
          exceptions: [
            "Fails to deliver are initially treated as good receivables (no deduction required); only after 4 business days past settlement does the haircut apply"
          ],
          examTip: "The 15% haircut on common stock and the 40% on limited-market stocks are core exam facts. The undue concentration deduction kicks in when a single equity position exceeds 10% of tentative net capital — it imposes an extra charge on the amount over that 10% threshold."
        },
        {
          id: "rule-15c3-1-debt-equity",
          name: "SEC Rule 15c3-1 — Debt-to-Equity Requirement",
          category: "SEC Rule",
          language: "A broker-dealer's equity must be at least 30% of its debt-equity total. The debt-equity total equals net worth plus the amount of satisfactory subordination agreements. If equity falls below 30% and remains below 30% for a period exceeding 90 days, the broker-dealer is in violation of the net capital rule.",
          concept: "Prevents firms from deriving too much of their net capital from subordinated loans rather than genuine equity. Equity must constitute at least 30% of the total of equity plus subordinated debt.",
          parameters: [
            "Equity must be at least 30% of (equity + satisfactory subordinated loans)",
            "If equity falls below 30% of the debt-equity total and stays below for more than 90 days, the firm is in violation",
            "A subordinated loan is considered part of equity for the 30% test if: the lender is a partner or stockholder, the loan had an initial term of at least 3 years and has at least 12 months remaining, and the loan has no provisions for accelerated maturity",
            "Prepayment of a subordinated loan is not permitted if it would cause the AI/NC ratio to exceed 10-to-1 or would cause net capital to fall below 120% of the minimum dollar requirement"
          ],
          exceptions: [],
          examTip: "The 30% equity floor is separate from both the minimum dollar requirement and the AI/NC ratio. All three must be satisfied simultaneously. The 90-day cure period before violation is a testable detail."
        },
        {
          id: "rule-15c3-1-subordination-agreements",
          name: "SEC Rule 15c3-1 — Subordination Agreements",
          category: "SEC Rule",
          language: "A satisfactory subordination agreement allows a broker-dealer to ignore the liability created by a loan when calculating net capital, effectively increasing net capital by the amount of the loan. The loan must meet specific conditions including being in writing, having a minimum duration of one year, and requiring the lender to subordinate its claim to all other creditors.",
          concept: "Satisfactory subordinated loans boost net capital because the lender agrees to step behind all other creditors. Regular loans do not improve net capital because assets and liabilities increase equally.",
          parameters: [
            "Two types: subordinated loan agreement (cash only) and secured demand note agreement (may include securities)",
            "Loan must be in writing, indicate duration, be for a specific amount, and acknowledge that proceeds are used in the conduct of the business and are subject to its risks",
            "Lender must agree to subordinate its claim to all other creditors",
            "Minimum duration: one year",
            "Agreement must be filed with the SEC 10 days prior to effective date and with the broker-dealer's examining authority 30 days prior to effective date",
            "No prepayments during the first year; prepayment prohibited after first year if it would cause AI/NC ratio to exceed 10:1 or net capital to fall below 120% of minimum",
            "Temporary subordination agreement: maximum duration of 45 days; no more than three in any 12-month period; generally for underwriting purposes only",
            "Securities backing a secured demand note that are normally subject to a 15% haircut are subject to a 30% deduction"
          ],
          exceptions: [
            "A subordinated loan with initial term of at least 3 years and at least 12 months remaining (with partner/stockholder lender and no acceleration clause) may qualify as equity for the 30% debt-equity test"
          ],
          examTip: "A regular bank loan does not increase net capital — assets and liabilities rise equally. A satisfactory subordinated loan DOES increase net capital because the liability is ignored in the computation. The SEC filing is 10 days before; the examining authority filing is 30 days before — order matters."
        }
      ]
    },
    {
      name: "Early Warning Procedures and Supplemental Reporting (SEC Rule 17a-11)",
      rules: [
        {
          id: "rule-17a-11-net-capital-violation",
          name: "SEC Rule 17a-11 — Net Capital Violation Reporting",
          category: "SEC Rule",
          language: "If a broker-dealer's net capital falls below the minimum requirements of Rule 15c3-1, the broker-dealer must file a notice on the day the violation occurs. The notice must state the broker-dealer's net capital and its net capital requirement. The same reporting requirement applies if outstanding subordinated debt exceeds 70% of the debt-equity total for a period exceeding 90 days.",
          concept: "Immediate notice is required the day a net capital deficiency occurs. The firm must report even if it disagrees with the regulator's calculation (though it may include the basis for its disagreement).",
          parameters: [
            "Notice must be filed on the day the violation occurs",
            "Notice must state the firm's actual net capital and its required net capital",
            "Also triggered if outstanding subordinated debt exceeds 70% of the debt-equity total for more than 90 days",
            "Must be filed with: the SEC's Washington, D.C. office, the SEC regional office where the broker-dealer has its principal place of business, and the firm's Designated Examining Authority (DEA)",
            "Notice must be filed even if the broker-dealer disagrees with the regulator, but may include the basis for disagreement",
            "A broker-dealer cannot continue to do business with less than required net capital"
          ],
          exceptions: [],
          examTip: "Net capital violation = immediate notice the SAME DAY. The firm cannot continue doing business while in violation. All notices under Rule 17a-11 go to three places: SEC Washington D.C., SEC regional office, and the firm's DEA."
        },
        {
          id: "rule-17a-11-early-warning",
          name: "SEC Rule 17a-11 — Early Warning Notice",
          category: "SEC Rule",
          language: "Broker-dealers must file Early Warning notices even when there is no net capital violation. If a broker-dealer has a ratio of aggregate indebtedness to net capital exceeding 12-to-1, or if the dollar amount of net capital is less than 120% of its minimum net capital requirement, it must notify the SEC and its DEA within 24 hours.",
          concept: "Early warning notices alert regulators to deteriorating capital conditions before a full violation occurs. The trigger is 12:1 AI/NC ratio (not 15:1) or net capital below 120% of minimum.",
          parameters: [
            "Triggers: (1) AI/NC ratio exceeds 12-to-1, OR (2) net capital is less than 120% of the minimum net capital requirement",
            "Notice must be filed within 24 hours of the triggering event",
            "Example: a clearing firm with $250,000 minimum must file Early Warning if net capital falls below $300,000 ($250,000 x 120%)",
            "Early warning does not mean a violation has occurred — the firm can still do business"
          ],
          exceptions: [],
          examTip: "Early warning = 12:1 ratio or below 120% of minimum. Violation = 15:1 ratio or below 100% of minimum. The 120% early warning threshold is tested frequently: a clearing firm ($250,000 minimum) triggers early warning at $299,999 net capital."
        },
        {
          id: "rule-17a-11-books-records-material",
          name: "SEC Rule 17a-11 — Non-Current Books & Records and Material Inadequacies",
          category: "SEC Rule",
          language: "If a broker-dealer fails to maintain books and records under SEC rules, it must give notice to the SEC and its DEA that day and must file a report within 48 hours detailing steps to correct the situation, transmitted by overnight delivery. If a material inadequacy in accounting systems or internal controls is discovered, the CFO must send telegraphic or facsimile notice to the SEC within 24 hours and must file a corrective action report within 48 hours.",
          concept: "Operational and systems failures trigger their own reporting obligations under Rule 17a-11 — separate from capital deficiency notices.",
          parameters: [
            "Non-current books and records: give notice on the day of discovery; corrective action report within 48 hours by overnight delivery",
            "Material inadequacy (accounting system, internal accounting controls, or procedures for safeguarding securities): CFO must send telegraphic or facsimile notice to SEC within 24 hours; corrective action report within 48 hours",
            "DEA must also be notified in both cases",
            "Reports are sent to SEC Washington D.C., SEC regional office, and the DEA"
          ],
          exceptions: [],
          examTip: "Books and records failure = notice that day + corrective report within 48 hours. Material inadequacy = same 24-hour + 48-hour timeline but the CFO specifically must send the initial notice."
        },
        {
          id: "finra-rule-4110-early-warning",
          name: "FINRA Rule 4110 — FINRA Early Warning Notifications",
          category: "FINRA Rule",
          language: "Carrying or clearing broker-dealers must notify FINRA in writing within 24 hours if net capital falls below 150% of the minimum dollar requirement, if the AI/NC ratio exceeds 1,000% (10-to-1), or if certain alternative method thresholds are triggered. Firms must also notify FINRA immediately if capital withdrawals planned within the next six months would cause any of these conditions.",
          concept: "FINRA has its own early warning thresholds that are tighter than SEC Rule 17a-11. The most common trigger is net capital below 150% of minimum — different from the SEC's 120% threshold.",
          parameters: [
            "Must notify FINRA within 24 hours if: (1) net capital falls below 150% of minimum dollar requirement; (2) AI/NC ratio exceeds 10:1 (1,000% of net capital); or (3) alternative method firms trigger specific 15c3-3 thresholds",
            "Example: clearing firm with $250,000 minimum must notify FINRA if net capital drops below $375,000 ($250,000 x 150%)",
            "Must notify FINRA immediately if anticipated capital withdrawals (voluntary withdrawals, partner distributions, or maturing subordinated loans) within the next six months would cause any of the above conditions",
            "If any condition exists for more than 15 consecutive business days, FINRA may restrict business expansion",
            "FINRA may direct a broker-dealer to reduce existing business for specified conditions including: 25% reduction in excess net capital, non-compliance with customer protection rules, failure to clear and settle transactions timely, non-current books and records, substantial change in processing that increases customer risk"
          ],
          exceptions: [
            "With written permission from FINRA, a broker-dealer may continue to expand business even if the conditions above apply"
          ],
          examTip: "FINRA early warning = below 150% of minimum (tighter than SEC's 120%). SEC early warning = below 120% of minimum. Both require 24-hour notice. If the exam asks which threshold triggers notice to FINRA vs. SEC, use 150% for FINRA and 120% for SEC."
        }
      ]
    },
    {
      name: "Customer Protection Rule (SEC Rule 15c3-3)",
      rules: [
        {
          id: "rule-15c3-3-customer-securities",
          name: "SEC Rule 15c3-3 — Possession or Control of Customer Securities",
          category: "SEC Rule",
          language: "A broker-dealer is required to promptly obtain and thereafter maintain physical possession or control of all fully paid and excess margin securities that belong to its customers. Excess margin securities are those whose value exceeds 140% of the customer's debit balance.",
          concept: "Broker-dealers must segregate fully paid and excess margin customer securities — they cannot use those securities for the firm's own purposes. The daily computation ensures ongoing compliance.",
          parameters: [
            "Must maintain possession or control of all fully paid customer securities",
            "Excess margin securities = securities whose value exceeds 140% of the customer's debit balance (e.g., $10,000 in stock with $5,000 debit: excess margin = $10,000 - [140% x $5,000] = $3,000)",
            "Good control locations include: the broker-dealer's office, in transit between its offices, or in an SEC-approved depository",
            "Must compute daily (as of the close of the preceding business day) the quantity of fully paid and excess margin securities in possession/control and those not in possession/control",
            "Must take affirmative action to promptly obtain control of required securities",
            "If a customer sells securities and fails to deliver within 10 business days of settlement date, the broker-dealer must buy in the customer",
            "Customer is defined as any person for whom the broker-dealer holds funds or securities — does not include other broker-dealers, partners, officers, directors, or subordinated lenders"
          ],
          exceptions: [
            "Under exceptional circumstances, a broker-dealer may apply to FINRA for an extension of the 10-business-day buy-in requirement"
          ],
          examTip: "The 140% test is critical: securities worth MORE than 140% of the debit balance qualify as excess margin securities and must be controlled. Only the excess above 140% must be segregated — not the entire margin account position."
        },
        {
          id: "rule-15c3-3-reserve-account",
          name: "SEC Rule 15c3-3 — Special Reserve Bank Account",
          category: "SEC Rule",
          language: "Broker-dealers are required to maintain a Special Reserve Bank Account for the Exclusive Benefit of Customers at a bank. The account must contain cash or qualified securities (issued or guaranteed by the U.S. government) set aside for the benefit of customers. Amounts on deposit in the Reserve Bank Account cannot be used by the broker-dealer for any purpose.",
          concept: "The Special Reserve Bank Account protects customer cash from being used in the firm's operations. The amount on deposit is determined by subtracting customer debit items from customer credit items.",
          parameters: [
            "Reserve Bank Account must be at a bank, separate from all other broker-dealer accounts",
            "Must contain cash or U.S. government-issued or -guaranteed qualified securities",
            "Amount required = customer credit items minus customer debit items (credits - debits = required deposit)",
            "Example: if credits = $300,000 and debits = $250,000, the required deposit is $50,000",
            "Standard computation: weekly, as of the close of the last business day of the week",
            "Required deposit must be made no later than one hour after the opening of banking business on the second business day following the computation",
            "Monthly computation alternative: only available to firms with AI/NC ratio not exceeding 8:1 AND free customer credits not exceeding $1,000,000; requires maintaining 105% of the otherwise required amount",
            "Broker-dealer must obtain written notification from the bank that the Reserve Bank Account is for the exclusive benefit of customers and is not subject to any charge, lien, or claim by the bank or any other person",
            "If the broker-dealer fails to make the required deposit within the deadline, it must immediately notify the SEC by telegram and follow up in writing; must also notify the DEA",
            "Excess cash or securities may be withdrawn; the broker-dealer must maintain a record of the computation supporting each withdrawal",
            "The amount in the Reserve Bank Account may reduce aggregate indebtedness for purposes of the AI/NC ratio, but only up to the amount required to be on deposit"
          ],
          exceptions: [
            "k(1) firms (solely mutual fund sales, promptly transmit all funds and securities) are exempt from the Customer Protection Rule",
            "k(2)(ii) firms (clear trades through another firm on a fully disclosed basis) are exempt",
            "k(2)(i) firms (carry no margin accounts, promptly transmit all funds and securities, maintain all transactions through bank accounts exclusively for this purpose) are exempt",
            "A broker-dealer wishing to change from exempt to non-exempt status must first obtain written approval from FINRA"
          ],
          examTip: "Reserve formula: Credits minus Debits = required deposit. Weekly computation is the default; monthly is a restricted alternative requiring 105% deposit and meeting both the 8:1 AI/NC and $1M free credits tests. The account cannot be used as loan collateral."
        },
        {
          id: "rule-15c3-3-customer-free-credits",
          name: "SEC Rule 15c3-3 — Customer Free Credit Balances",
          category: "SEC Rule",
          language: "SEC rules require a broker-dealer to advise customers regarding their free credit balances at least quarterly. The notice must state the amount due, that the funds are payable on demand, and that the funds are not segregated and may be used in the conduct of the broker-dealer's business.",
          concept: "Customers must be reminded that their uninvested cash sitting in their brokerage accounts is not segregated and is available to the firm — a key consumer protection disclosure.",
          parameters: [
            "Notification required at least quarterly",
            "Must state: (1) the amount of the free credit balance; (2) that funds are payable to the customer on demand; (3) that funds are NOT segregated and may be used in the conduct of the broker-dealer's business",
            "If statements are sent more frequently than quarterly, free credit balance notification must accompany each statement"
          ],
          exceptions: [
            "A broker-dealer that actually segregates customer free credit balances so they cannot be used by the firm is not required to send this notice"
          ],
          examTip: "Free credit balance disclosure is quarterly at minimum and must include the three required statements. This is different from account statements, which have their own frequency requirements."
        }
      ]
    },
    {
      name: "Financial Reporting Requirements",
      rules: [
        {
          id: "rule-17a-5-focus-reports",
          name: "SEC Rule 17a-5 — FOCUS Reports",
          category: "SEC Rule",
          language: "SEC Rule 17a-5 requires broker-dealers to file certain financial reports with the SEC monthly and quarterly (FOCUS Reports). For broker-dealers that clear transactions and carry customer accounts, FOCUS Report Part I must be filed monthly within 10 business days of month-end; FOCUS Report Part II must be filed quarterly within 17 business days of quarter-end. Broker-dealers that do not clear transactions or carry customer accounts must file only FOCUS Report Part IIA quarterly.",
          concept: "FOCUS Reports are the primary ongoing financial disclosure mechanism for broker-dealers. Carrying firms file more frequent and detailed reports than non-carrying firms.",
          parameters: [
            "Carrying broker-dealers: FOCUS Part I filed monthly within 10 business days of month-end",
            "Carrying broker-dealers: FOCUS Part II filed quarterly within 17 business days of the end of the calendar quarter",
            "Non-carrying broker-dealers: FOCUS Part I is NOT required",
            "Non-carrying broker-dealers: FOCUS Part IIA filed quarterly within 17 business days of the end of the calendar quarter",
            "An oath or affirmation must be attached to all reports stating the information is true and correct, made by a general partner or duly authorized officer"
          ],
          exceptions: [],
          examTip: "Carrying firms file monthly (Part I) AND quarterly (Part II). Non-carrying firms file only quarterly (Part IIA). The 10-business-day deadline for monthly filings vs. 17-business-day deadline for quarterly filings is a common exam detail."
        },
        {
          id: "rule-17a-5-annual-report",
          name: "SEC Rule 17a-5 — Annual Audit and Financial Report",
          category: "SEC Rule",
          language: "In addition to monthly and quarterly reports, the broker-dealer must submit an annual report of financial condition, certified by an independent public accountant. The annual report must be filed no later than 60 days after the date of the financial statements.",
          concept: "The annual audit provides a comprehensive, independently verified picture of the firm's financial condition. The auditor's report must address the firm's SIPC membership status.",
          parameters: [
            "Annual report must be certified by an independent public accountant",
            "Filed as of the same, fixed, or determinable date each year (unless DEA approves a change)",
            "Must be filed no later than 60 days after the date of the financial statements",
            "Filing locations: SEC Washington D.C., SEC regional office where the broker-dealer has its principal place of business, and each national securities exchange and national securities association of which the broker-dealer is a member",
            "Broker-dealer must file a report with the SEC when the public accountant is retained and if the accountant's services are terminated",
            "Broker-dealer must notify the SEC if a dispute arises between the firm and the auditor regarding records preparation and maintenance",
            "Annual report must include: statement of financial condition, statement of income or loss, statement of changes in financial position, statement of changes in stockholders' equity or partners'/sole proprietors' net capital, and statement of changes in liabilities subordinated to claims of general creditors",
            "Supporting schedules must include computation of net capital and computation of the reserve requirement",
            "Supplemental report must include the independent accountant's opinion on the broker-dealer's SIPC membership status",
            "Audited annual statements must be sent to customers within 105 days after the broker-dealer files the annual report with the SEC",
            "If the auditor commented on any material inadequacies, the statement to customers must indicate that the audited report is available for inspection at the SEC"
          ],
          exceptions: [
            "An extension may be requested from the firm's DEA if the annual report cannot be filed on time"
          ],
          examTip: "Annual report is due within 60 days of the financial statements' date. Customer copies must follow within 105 days after filing. The independent accountant must specifically address SIPC membership status in a supplemental report."
        }
      ]
    },
    {
      name: "Securities Counts, Fidelity Bonds, and Books & Records",
      rules: [
        {
          id: "rule-17a-13-securities-counts",
          name: "SEC Rule 17a-13 — Quarterly Securities Count",
          category: "SEC Rule",
          language: "SEC Rule 17a-13 requires a broker-dealer to make a physical examination and count of all securities in its possession at least once in each calendar quarter. Counts must be made at intervals not less than two months nor more than four months apart.",
          concept: "Regular physical counts ensure that the firm's securities records match its actual holdings. Discrepancies (securities differences) require timely resolution and may result in net capital deductions.",
          parameters: [
            "Physical count must be made at least once per calendar quarter",
            "Counts must be at intervals not less than 2 months and not more than 4 months apart (e.g., if the last count was August 15, the next count cannot begin before October 15 or after December 15)",
            "Must account for securities in transfer, in transit, pledged or loaned, failed to receive, failed to deliver, or otherwise subject to the firm's control but not in its physical possession",
            "Must verify status of securities subject to control but not in physical possession if the situation has existed for more than 30 days",
            "Count must be made or supervised by persons whose regular duties do not require them to have direct responsibility for the care and protection of securities or related records",
            "All security differences that are unresolved must be recorded on books and records no later than seven business days after the security count",
            "Short securities difference deductions: 25% after 7 business days; 50% after 14 business days; 75% after 21 business days; 100% after 28 business days",
            "Long securities differences involving securities not resold have no effect on net capital (neither added to nor deducted)"
          ],
          exceptions: [
            "Broker-dealers that engage solely in the sale of redeemable shares of investment companies and promptly transmit all funds to the investment company are exempt from Rule 17a-13"
          ],
          examTip: "Quarterly count, 2-to-4-month intervals, and the escalating net capital deduction schedule (25%/50%/75%/100% at 7/14/21/28 business days) for short differences are all testable details. Long differences are neutral for net capital."
        },
        {
          id: "finra-rule-4360-fidelity-bond",
          name: "FINRA Rule 4360 — Fidelity Bond",
          category: "FINRA Rule",
          language: "FINRA members that are required to join SIPC must maintain a blanket fidelity bond covering officers and employees that provides against loss for fidelity (on premises or in transit), forgery and alteration (including check forgery), securities loss (including securities forgery), and counterfeit currency.",
          concept: "The fidelity bond protects SIPC-member broker-dealers against dishonest acts by employees. Minimum coverage is tied to the firm's required net capital and must be reviewed annually.",
          parameters: [
            "Covers: fidelity (on premises or in transit), forgery and alteration (including check forgery), securities loss (including securities forgery), and counterfeit currency",
            "Bond must include a provision that the carrier will promptly notify FINRA if the bond is canceled, terminated, or substantially modified",
            "Minimum required coverage for firms with net capital below $250,000: greater of 120% of required net capital or $100,000",
            "For firms with net capital of $250,000-$300,000: $600,000 minimum coverage",
            "For firms with net capital of $300,001-$500,000: $700,000 minimum coverage",
            "For firms with net capital of $500,001-$1,000,000: $800,000 minimum coverage",
            "For firms with net capital of $1,000,001-$2,000,000: $1,000,000 minimum coverage",
            "Maximum coverage required: $5,000,000 for firms with net capital requirements exceeding $12,000,000",
            "Deductible provision permitted: up to 25% of the coverage amount",
            "Coverage must be reviewed annually as of the anniversary date of the bond issuance; amount for the succeeding 12 months must be based on the HIGHEST required net capital during the preceding 12 months",
            "Member firms must notify FINRA immediately if any bond is canceled, terminated, or substantially modified"
          ],
          exceptions: [
            "Exempt: any firm that maintains a fidelity bond as required by a national securities exchange",
            "Exempt: any firm whose business is solely as a floor broker, floor trader, or designated market maker (DMM) and does not conduct business with the general public"
          ],
          examTip: "The deductible cap of 25% and the annual review using the HIGHEST net capital requirement over the preceding 12 months are tested details. The firm must act on the coverage amount based on peak capital needs, not current needs."
        },
        {
          id: "rule-17a-3-17a-4-books-records",
          name: "SEC Rules 17a-3 and 17a-4 — Books, Records, and Retention",
          category: "SEC Rule",
          language: "SEC Rule 17a-3 requires broker-dealers to create specific records; Rule 17a-4 requires those records to be kept for a number of years after their creation. Records may be divided into those retained for the life of the firm, those retained for six years, and those retained for three years. All records must be kept in an easily accessible place for the first two years.",
          concept: "The foundational recordkeeping framework for broker-dealers. Creation timing and retention duration differ by record type. Lifetime records apply to corporate governance documents.",
          parameters: [
            "Six-year records (selected): blotters (must be prepared by next business day), general ledger (at least monthly), customer account ledgers (by settlement date), position record (by business day after settlement or securities movement), cash and margin account records (before execution of transaction)",
            "Three-year records (selected): fail to receive/deliver (within 2 business days of settlement date), long and short stock record differences (within 7 business days of discovery), order tickets (before execution of transaction), confirmations and comparisons (by next business day after transaction), option records (by next business day after option is written), trial balance (within 10 business days after end of accounting period), written supervisory procedures (former version retained when updating), associated persons' application and fingerprint cards (at or prior to commencement of employment)",
            "Lifetime records: partnership articles, articles of incorporation, minute books, and stock certificate books — for BDs organized as partnerships or corporations",
            "All records must be kept in an easily accessible place for the first two years of existence",
            "Trial balance must be prepared monthly to ensure compliance with net capital rules",
            "If a broker-dealer intends to use electronic storage for recordkeeping, it must notify its DEA at least 90 days prior to use",
            "Electronic storage media must: maintain records in non-rewriteable and non-erasable formats; automatically confirm quality and accuracy; maintain records in serial form with time and date information; and allow downloading of indexes and records to SEC-accepted media"
          ],
          exceptions: [
            "If a broker-dealer clears trades through a bank and the bank prepares the required records, the broker-dealer is not required to separately prepare them (bank must confirm the records are the property of the broker-dealer and available to the SEC)",
            "If a broker-dealer clears trades on a fully disclosed basis through another broker-dealer, record maintenance obligation rests with the clearing firm",
            "In an omnibus account, the introducing broker-dealer is responsible for record maintenance"
          ],
          examTip: "Three tiers: lifetime (corporate formation docs), six years (financial records like blotters and ledgers), three years (operational records like order tickets and confirmations). The rule of thumb: financial records = 6 years; operational/transactional records = 3 years. Two-year accessible-location requirement applies to all records."
        },
        {
          id: "finra-rule-4511-recordkeeping",
          name: "FINRA Rule 4511 — General Recordkeeping Requirements",
          category: "FINRA Rule",
          language: "FINRA Rule 4511 establishes the general recordkeeping requirements for member firms. It mandates that members create and maintain all books and records required by FINRA rules, the Exchange Act, and applicable Exchange Act rules. For records without a specified retention period, firms must preserve them for at least six years. All required records must be maintained in formats and media that comply with SEC Rule 17a-4.",
          concept: "FINRA's general recordkeeping mandate applies the six-year default to any record not otherwise assigned a retention period under SEC rules.",
          parameters: [
            "Members must create and maintain all books and records required by FINRA rules, the Exchange Act, and Exchange Act rules",
            "Default retention period for records without a specified retention period: at least six years",
            "All required records must be maintained in formats and media that comply with SEC Rule 17a-4"
          ],
          exceptions: [],
          examTip: "When in doubt about a retention period, default to six years under FINRA Rule 4511. This is the backstop rule — if a record is required but no specific retention period is stated, six years applies."
        }
      ]
    },
    {
      name: "Securities Investor Protection Corporation (SIPC)",
      rules: [
        {
          id: "sipc-coverage",
          name: "SIPC — Customer Account Protection",
          category: "Federal Law",
          language: "The Securities Investor Protection Corporation (SIPC) is a non-profit corporation that provides limited protection to customers of SIPC-member broker-dealers that fail. SIPC protects customers up to $500,000 total per separate customer, with a sub-limit of $250,000 for cash claims.",
          concept: "SIPC is not an insurance company and does not cover investment losses. It protects customers against the failure of a broker-dealer — specifically, the loss of securities and cash held at the firm. Most FINRA member broker-dealers must be SIPC members.",
          parameters: [
            "Coverage limit: up to $500,000 per separate customer (total securities and cash combined)",
            "Sub-limit for cash claims: up to $250,000 per separate customer",
            "Coverage applies to missing securities and cash due to broker-dealer failure — not market losses",
            "FINRA members that are required to join SIPC must maintain a blanket fidelity bond",
            "Annual report must include the independent accountant's opinion on the broker-dealer's SIPC membership status"
          ],
          exceptions: [
            "SIPC does not cover commodity futures contracts, foreign exchange, fixed annuity contracts, and other investment contracts not registered under the Securities Act",
            "SIPC does not cover losses from market fluctuations or bad investment advice"
          ],
          examTip: "SIPC = $500,000 total / $250,000 cash sub-limit per separate customer. SIPC protects against broker-dealer insolvency, not investment losses. The $250,000 cash sub-limit is the most tested SIPC detail."
        }
      ]
    }
  ]
};
