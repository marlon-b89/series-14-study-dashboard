// Chapter 9 – Margin
window.CHAPTER_9 = {
  id: 9,
  title: "Margin",
  subtitle: "Regulation T, SRO maintenance margin, SMA, short accounts, day-trading margin, and portfolio margin",
  sections: [
    {
      name: "Regulation T — Federal Reserve Board",
      rules: [
        {
          id: "regulation-t",
          name: "Regulation T — Extension of Credit by Broker-Dealers",
          category: "Regulation",
          language: "Regulation T (Reg T) governs the extension of credit by broker-dealers. It determines which securities may be purchased on credit (margin) through a broker-dealer, when payment must be made, and the amount of credit that may be extended. Reg T customer funds are due by no later than three business days following the trade date (T + 3), which is two business days following the settlement date (S + 2).",
          concept: "The Federal Reserve Board regulation controlling how much credit broker-dealers may extend to customers purchasing securities and when payment is due. It is an initial margin requirement, not an ongoing maintenance requirement.",
          parameters: [
            "Reg T initial margin requirement: 50% of the purchase price (including commissions); has been set at 50% since 1974",
            "Loan value: the complement of the margin requirement, also 50%; the amount the broker-dealer may finance",
            "Reg T payment due date: T + 3 (three business days following the trade date) or S + 2 (two business days following settlement)",
            "If payment is not received by the Reg T payment date, the broker-dealer is required to sell out (liquidate) the securities unless a valid extension is granted",
            "Liquidation occurs the day after the Reg T payment date (third business day following settlement); account is then frozen for 90 days",
            "During the 90-day freeze: customer must pay for all purchases in advance",
            "Settlement (broker-to-broker) for corporate securities: T + 1; for options: T + 1",
            "Exempt securities (Treasuries, municipals) and certain exempt transactions (private placements) are not subject to Reg T",
            "For options trades: payment deadline is T + 3 (not exempt from Reg T, unlike Treasuries and municipals)"
          ],
          exceptions: [
            "Exempt securities (U.S. Treasuries, municipal bonds) are exempt from Reg T; payment is generally required by settlement date",
            "Exempt transactions (e.g., private placements) are not subject to Reg T",
            "Broker-dealers are not required to collect funds if the amount owed is $1,000 or less (applies to freeriding rules in cash accounts)"
          ],
          examTip: "Key Reg T number: 50% initial margin; T + 3 payment (S + 2). Reg T is an INITIAL requirement only — the Fed never requires additional deposits if price drops. Maintenance calls come from FINRA/SRO rules, not the Fed."
        },
        {
          id: "marginable-securities",
          name: "Marginable Securities Under Regulation T",
          category: "Regulation",
          language: "Reg T allows the purchase of several types of securities on margin. Marginable equity securities include both exchange-listed securities and Nasdaq securities. Unlisted equities (those traded in the OTC Markets Group system) are not marginable. Other securities that may be used as collateral include U.S. Treasuries, municipal bonds, corporate bonds (including convertibles), and mutual fund shares held for more than 30 days.",
          concept: "Not all securities can be bought on margin or used as collateral. Unlisted OTC equities and new investment company shares (under 30 days held) are not marginable.",
          parameters: [
            "Marginable equities: exchange-listed securities and Nasdaq securities",
            "NOT marginable: unlisted equities traded in the OTC Markets Group (Pink Markets and OTC Bulletin Board)",
            "Acceptable collateral: U.S. Treasuries, municipal bonds, corporate bonds (including convertibles), mutual fund shares held more than 30 days",
            "Investment company (mutual fund) shares: marginable but cannot be used as collateral within 30 days of purchase (Securities Exchange Act of 1934 prevents extension of credit on a new issue by a distribution participant for 30 days)",
            "Only marginable stock may be deposited to meet a Reg T call"
          ],
          exceptions: [
            "New mutual fund shares cannot be purchased on margin or used as collateral for 30 days following the initial purchase"
          ],
          examTip: "Unlisted OTC equities = NOT marginable. Mutual funds ARE marginable but only after being held for 30 days. This 30-day rule comes from the Exchange Act, not Reg T itself."
        },
        {
          id: "reg-t-freeriding",
          name: "Freeriding — Cash Account Prohibition",
          category: "Regulation",
          language: "In a cash account, a member firm cannot allow a customer to make a purchase and then meet the payment requirement through liquidation of the same securities. The customer cannot purchase a stock and then sell it to pay the purchase price. Freeriding only applies if the customer sells the securities and does not pay for the original purchase by the Reg T payment date. If payment is made on time, there is no violation even if the customer also sold the securities.",
          concept: "Prohibits paying for a purchase using the proceeds from selling that same security in a cash account, since broker-dealers cannot extend credit in cash accounts.",
          parameters: [
            "Freeriding occurs in a cash account when a customer sells purchased securities to fund the purchase — and does not pay by the Reg T payment date",
            "Consequence: broker-dealer must sell out the position; account is frozen for 90 days (must pay in advance during freeze)",
            "If the customer sells the securities before settlement but pays the purchase price by the Reg T payment date with separate funds, there is no violation",
            "Rules do not apply to amounts of $1,000 or less (broker-dealers are not required to collect if the amount owed is $1,000 or less)",
            "Extensions may be granted under exceptional circumstances (e.g., mail delay); extension must be applied for before the Reg T deadline"
          ],
          exceptions: [
            "No violation if customer sells securities but pays for the original purchase independently by the Reg T payment date",
            "Rules do not apply when the amount owed is $1,000 or less"
          ],
          examTip: "Freeriding is selling a stock to pay for its own purchase — prohibited in cash accounts. The account gets frozen for 90 days. If the customer pays with their own funds (not from the sale proceeds), there is no violation even if they also sold the stock."
        }
      ]
    },
    {
      name: "Opening a Margin Account — Requirements and Disclosures",
      rules: [
        {
          id: "margin-agreement",
          name: "Margin Agreement — Required Components",
          category: "FINRA Rule",
          language: "When a margin account is opened, the customer is required to sign the margin agreement. The margin agreement contains: (1) the credit agreement, disclosing the terms under which the broker-dealer will finance the purchase; (2) the hypothecation agreement, providing that securities purchased will collateralize the debt; and (3) the loan consent agreement, giving the broker-dealer the right to lend the customer's securities to other clients or broker-dealers.",
          concept: "Three-part written contract governing the broker-dealer's extension of credit and the rights of each party over the pledged securities.",
          parameters: [
            "Credit agreement: discloses how interest is calculated and charged",
            "Hypothecation agreement: customer pledges purchased securities as collateral; broker-dealer may rehypothecate (re-pledge) to a bank",
            "Loan consent agreement: broker-dealer may lend customer's securities to other clients or broker-dealers for short-sale purposes; customer loses the right to vote loaned stock; this part is OPTIONAL",
            "If terms and conditions are changed by the broker-dealer, advance written notice must be provided at least 30 days prior to the changes",
            "A written statement of interest rate and computation method must be sent to the customer when the margin account is opened",
            "A written statement must be sent at least quarterly to all customers to whom credit is extended"
          ],
          exceptions: [
            "The loan consent agreement is optional — a customer is NOT required to sign it to open a margin account",
            "For fully paid securities (not in a margin account), a separate written consent is required in addition to the loan consent agreement before the broker-dealer can lend the stock"
          ],
          examTip: "The three parts of the margin agreement: Credit (interest terms), Hypothecation (pledging of securities), and Loan Consent (lending securities — optional). The hypothecation agreement is required; the loan consent is not."
        },
        {
          id: "finra-rule-2264-margin-disclosure",
          name: "FINRA Rule 2264 — Margin Disclosure Statement",
          category: "FINRA Rule",
          language: "A Margin Disclosure Statement must be provided to all customers who open a margin account. The statement must include specific language informing the customer that they can lose more funds than deposited, that the firm can force the sale of securities without contacting the customer, that the customer cannot choose which securities are sold, that the firm can increase in-house maintenance requirements at any time without advance written notice, and that the customer is not entitled to an extension of time on a margin call.",
          concept: "Mandatory pre-account-opening risk disclosure for retail margin customers. Two delivery triggers: new margin account opening and annually thereafter.",
          parameters: [
            "Required language: 'You can lose more funds than you deposit in the margin account'",
            "Required language: 'The firm can force the sale of securities or other assets in your account(s)'",
            "Required language: 'The firm can sell your securities or other assets without contacting you'",
            "Required language: 'You are not entitled to choose which securities or other assets in your account(s) are liquidated or sold to meet a margin call'",
            "Required language: 'The firm can increase its in-house maintenance margin requirements at any time and is not required to provide you advance written notice'",
            "Required language: 'You are not entitled to an extension of time on a margin call'",
            "Disclosure must be provided individually, in paper or electronic form, in a separate document (or on a separate page within another document)",
            "For non-institutional customers who open accounts online or engage in online transactions, the disclosure must be posted on the firm's website in a clear and conspicuous manner",
            "Delivery requirements apply only to non-institutional (retail) customers"
          ],
          exceptions: [
            "Does not apply to institutional customers"
          ],
          examTip: "Margin Disclosure Statement = 6 key warnings, all about firm power to liquidate. The rule explicitly states the customer is NOT entitled to advance notice before the firm raises in-house maintenance requirements or to extra time on a margin call."
        },
        {
          id: "minimum-initial-equity",
          name: "Minimum Initial Equity Requirement",
          category: "FINRA Rule",
          language: "In addition to the minimum percentage equity requirement of Reg T, there is also a minimum dollar requirement. The minimum initial margin deposit must be $2,000 unless the amount of the purchase is less than $2,000. If the purchase is less than $2,000, the customer must deposit the full purchase price. A customer is not required to deposit more than the full purchase price of the securities.",
          concept: "SRO (FINRA) rule setting a $2,000 minimum dollar amount for new margin positions — Reg T alone would not protect against very small purchases.",
          parameters: [
            "Minimum initial equity: $2,000",
            "If purchase price is less than $2,000: customer must deposit the full purchase price (not required to deposit more than the purchase price)",
            "If purchase is between $2,000 and $4,000: deposit $2,000 (more than the 50% Reg T requirement)",
            "If purchase is $4,000 or more: deposit 50% per Reg T",
            "The $2,000 minimum applies to purchases only — not to price declines (no maintenance call triggered solely because equity drops below $2,000 after initial purchase)"
          ],
          exceptions: [
            "If equity subsequently drops below $2,000 due to price movement after the initial deposit, no maintenance call is triggered solely by the $2,000 threshold",
            "If the customer wants to make an additional purchase and equity is below $2,000, equity must be at least $2,000 before additional credit is extended"
          ],
          examTip: "Minimum initial equity = $2,000 (FINRA/SRO rule, not Reg T). For a $3,000 purchase at 50% Reg T, the requirement is $2,000, not $1,500. The $2,000 floor only applies at purchase — not ongoing maintenance."
        },
        {
          id: "rehypothecation-rule-15c2-1",
          name: "SEC Rule 15c2-1 and Customer Protection Rule (15c3-3) — Hypothecation and Rehypothecation",
          category: "SEC Rule",
          language: "SEC Rule 15c2-1 addresses hypothecation of customers' securities. Prohibited practices include commingling customer securities with those of another customer without written consent, commingling customer securities with those of the broker-dealer, and hypothecating customer securities for a sum exceeding the total indebtedness of all customers. SEC Rule 15c3-3 permits broker-dealers to use stock with a value of up to 140% of the customer's debit balance as collateral for a bank loan.",
          concept: "Hypothecation (pledging) and rehypothecation (re-pledging customer securities to a bank) are permitted within strict limits to prevent firms from over-leveraging customer assets.",
          parameters: [
            "Commingling of one customer's securities with another's without written consent of each customer is prohibited",
            "Commingling customer securities with the broker-dealer's own securities is prohibited",
            "Cannot hypothecate customer securities for more than the total indebtedness of all customers",
            "Rehypothecation: with customer consent, broker-dealer may use customer securities as bank loan collateral",
            "Amount allowed for rehypothecation: stock with a value up to 140% of the customer's debit balance",
            "Broker-dealer may only borrow from the bank the amount it has loaned to the customer — the 140% rule governs the collateral, not the borrowing amount",
            "Excess margin securities: customer securities in excess of 140% of the debit balance; must be segregated (cannot be used as collateral)"
          ],
          exceptions: [],
          examTip: "140% rule: broker-dealer can pledge stock worth up to 140% of the customer's debit balance to the bank, but can only BORROW from the bank the amount it actually loaned to the customer. Excess margin securities (above 140%) must be segregated."
        }
      ]
    },
    {
      name: "Long Accounts — Equity, SMA, and Maintenance",
      rules: [
        {
          id: "long-account-equity-sma",
          name: "Excess Equity and Special Memorandum Account (SMA)",
          category: "FINRA Rule",
          language: "Excess equity refers to equity in a margin account that is greater than the Reg T requirement multiplied by the market value. The Special Memorandum Account (SMA) is an accounting notation that refers to the amount of cash that may be withdrawn from a margin account. Once created, SMA does not decrease when excess equity declines.",
          concept: "SMA tracks the purchasing power or withdrawal right that has been earned in a margin account. SMA can be created by stock appreciation, cash dividends, sales of securities, or voluntary deposits; it does not disappear when the stock falls.",
          parameters: [
            "Equity (long account) = Long Market Value (LMV) minus Debit Balance (DR)",
            "Excess equity = actual equity minus required equity (Reg T requirement x market value)",
            "SMA = accounting notation equal to excess equity when it is first created; preserves the excess equity credit even if market value later declines",
            "SMA is created by: appreciation of securities, cash dividends, sale of securities, voluntary cash deposits, or deposits of fully paid marginable securities",
            "SMA does NOT decrease when equity declines (once created, it is preserved)",
            "Buying power = SMA divided by the Reg T requirement (50%); represents additional securities that may be purchased without depositing additional cash",
            "Restricted account: equity falls below 50% of market value; no immediate deposit required unless maintenance levels are breached; additional purchases permitted if customer deposits Reg T amount on the new purchase",
            "Sale in restricted account: customer may withdraw up to 50% of sale proceeds; remaining 50% (retention requirement) is applied to the debit balance"
          ],
          exceptions: [
            "In a restricted account with an SMA balance, an additional loan up to the SMA amount may be taken, provided the resulting account does not violate minimum maintenance requirements"
          ],
          examTip: "SMA is like a credit line — it grows with gains and deposits but does NOT shrink when the stock falls. Buying power = SMA divided by 50% (Reg T). Restricted account (equity below 50%) does NOT require a deposit — only a maintenance breach requires one."
        },
        {
          id: "sro-maintenance-margin-long",
          name: "SRO Minimum Maintenance — Long Accounts",
          category: "FINRA Rule",
          language: "Industry rules require customers to maintain a minimum equity of 25% of the current market value in long margin accounts. If the equity drops below 25%, the member firm must issue a maintenance call. Failure to meet a maintenance call promptly requires liquidation of the customer's position.",
          concept: "FINRA's ongoing minimum equity floor for long margin positions — more stringent than Reg T, which requires nothing after the initial deposit.",
          parameters: [
            "Minimum maintenance equity (long account): 25% of the long market value",
            "Formula for maintenance call price: debit balance multiplied by 4/3 = market value at which the 25% floor is triggered",
            "Example: debit balance of $6,000 x 4/3 = $8,000; if market value falls to $8,000, equity is exactly $2,000 (25% of $8,000 = $2,000)",
            "FINRA requires firms to maintain a daily record of initial or additional margin obtained, showing the amount required and the date/manner of compliance",
            "In-house maintenance requirements may be higher than the 25% SRO minimum; firms may increase in-house requirements at any time without advance written notice",
            "Changes to interest rate/credit charge terms (not in-house maintenance) require 30-day advance written notice"
          ],
          exceptions: [
            "Broker-dealers may impose in-house maintenance requirements higher than 25% without any advance notice obligation to the customer",
            "Account guarantees: another customer's account may be used as collateral for an undermargined account if the guarantee is in writing"
          ],
          examTip: "Long maintenance = 25%; formula: debit x 4/3 = maintenance trigger price. This is an SRO rule (FINRA), not Reg T. Firms can raise in-house requirements any time with NO advance notice — this is explicitly in the Margin Disclosure Statement."
        },
        {
          id: "leveraged-etf-margin",
          name: "Special Maintenance Requirements — Leveraged ETFs",
          category: "FINRA Rule",
          language: "Leveraged ETFs have special maintenance requirements in excess of the typical SRO thresholds of 25% on long positions and 30% on short positions. The margin requirement is computed by multiplying the portfolio leverage factor by the standard SRO maintenance requirement.",
          concept: "Leveraged ETFs carry amplified market risk, so regulators impose higher maintenance requirements proportional to the leverage factor.",
          parameters: [
            "Double long leveraged ETF maintenance: 2 x 25% = 50%",
            "Triple short leveraged ETF maintenance: 3 x 30% = 90%",
            "Formula: leverage factor x SRO maintenance requirement (25% for long, 30% for short)"
          ],
          exceptions: [],
          examTip: "Leveraged ETF margin = leverage factor x standard maintenance rate. A 2x long ETF requires 50%; a 3x short ETF requires 90%. This is a straightforward multiplication — expect a calculation question on the exam."
        }
      ]
    },
    {
      name: "Short Accounts",
      rules: [
        {
          id: "short-account-mechanics",
          name: "Short Account — Mechanics and Initial Margin",
          category: "Regulation",
          language: "A short sale is a transaction completed by the delivery of stock the customer does not own. The broker-dealer borrows stock and the customer's account is credited with the sale proceeds plus the cash margin deposit. The total is the credit balance (CR). The customer owes the broker-dealer the borrowed stock valued at its current market price (short market value, or SMV). Equity in a short account equals the credit balance minus the short market value: CR - SMV = EQ.",
          concept: "Short selling requires a margin account because the customer is borrowing shares. Initial margin (Reg T 50%) and short-side maintenance margin apply. Unlike long accounts, the credit balance does not change as the stock price moves.",
          parameters: [
            "Short account equity = Credit Balance (CR) minus Short Market Value (SMV)",
            "Initial margin requirement: 50% (same as long accounts under Reg T)",
            "Credit balance = short sale proceeds + initial margin deposited; credit balance does NOT change with stock price movements",
            "Customer equity changes as SMV changes: if stock price rises, equity declines; if stock price falls, equity increases",
            "Lender of stock to short seller retains all rights except the right to vote",
            "Short seller: lender may recall stock at any time; borrower must deposit the full market value (not Reg T amount) when stock is loaned between broker-dealers"
          ],
          exceptions: [],
          examTip: "Short account equity = CR - SMV. The credit balance is fixed; the SMV moves. Rising stock price = bad for the short seller (equity falls). Initial margin is 50% for short sales — same as long purchases."
        },
        {
          id: "sro-maintenance-margin-short",
          name: "SRO Minimum Maintenance — Short Accounts",
          category: "FINRA Rule",
          language: "The minimum maintenance requirement in the short account is usually 30% of the market value. For lower-priced securities, the minimum maintenance requirements are: $2.50 per share or 100% of the current market value, whichever is greater, if the short stock is valued at less than $5.00 per share; and $5.00 per share or 30% of the current market value, whichever is greater, if the short stock is valued at $5.00 per share or above.",
          concept: "FINRA's ongoing minimum equity floor for short positions — 30% for standard-priced stocks, with higher per-share requirements for low-priced stocks.",
          parameters: [
            "Short maintenance (standard): 30% of the short market value",
            "Short stock below $5.00/share: greater of $2.50 per share OR 100% of current market value",
            "Short stock at $5.00/share or above: greater of $5.00 per share OR 30% of current market value",
            "Formula for maximum rise before maintenance call (standard): credit balance x 10/13 = market value at which the 30% floor is triggered"
          ],
          exceptions: [],
          examTip: "Short maintenance = 30% (vs. 25% long). For sub-$5 shorts, the requirement is $2.50/share or 100%, whichever is greater — effectively requiring 100% for penny stocks sold short. Maintenance call trigger formula: CR x 10/13."
        }
      ]
    },
    {
      name: "Day-Trading Margin (Pattern Day Trader Rules)",
      rules: [
        {
          id: "pattern-day-trader",
          name: "Pattern Day Trader — Definition and Requirements (FINRA Rule 4210)",
          category: "FINRA Rule",
          language: "A pattern day trader is any customer who day-trades four or more times in a five-business-day period, provided that the number of day trades represents more than 6% of total trades in the account for that five-day period. Day trading is defined as the purchasing and selling—or the selling and purchasing—of the same security on the same day in a margin account.",
          concept: "Pattern day traders face a higher minimum equity requirement and special buying power rules. Cross-guarantees between accounts are prohibited.",
          parameters: [
            "Pattern day trader: executes four or more day trades in a five-business-day period, AND day trades represent more than 6% of total trades for the period",
            "Day trading: buying and selling (or selling and buying) the same security on the same day in a margin account",
            "Excluded from day trading definition: a long position held overnight and sold the next day prior to any new purchase of the same security; a short position held overnight and purchased the next day prior to any new sale",
            "Minimum equity requirement: $25,000 (vs. standard $2,000); must be deposited before any day-trading activity begins",
            "Day-trading buying power: limited to four times the trader's maintenance margin excess as of the close of the previous business day",
            "Funds deposited to meet the $25,000 minimum equity or a day-trading margin call must remain on deposit for at least two business days",
            "If the broker-dealer knows or reasonably believes a new account holder will engage in a pattern of day trading, pattern day trader margin requirements may be imposed immediately",
            "Cross-guarantees are prohibited: each day-trading account must meet requirements independently, based only on the resources in that account — applies between accounts of different customers AND between different accounts of the same customer"
          ],
          exceptions: [
            "If day trades represent 6% or less of total trades for the five-business-day period, the customer is not a pattern day trader"
          ],
          examTip: "Pattern day trader = 4+ day trades in 5 business days AND those trades exceed 6% of total trades. Minimum equity $25,000 (not $2,000). Buying power = 4x maintenance margin excess. Cross-guarantees between any accounts are strictly prohibited."
        },
        {
          id: "day-trading-margin-call",
          name: "Day-Trading Margin Call and 90-Day Restriction",
          category: "FINRA Rule",
          language: "If a day trader exceeds her buying power limitations, she must meet a day-trading margin call within five business days. During the time the margin call is outstanding, the account is restricted to buying power of two times maintenance margin excess. If the margin call is not met by the fifth business day, trading is restricted to a cash-available basis for 90 days or until the call is met.",
          concept: "Violation of the day-trading buying power limit triggers a margin call with a 5-business-day window; non-payment results in a 90-day cash-only restriction.",
          parameters: [
            "Day-trading margin call deadline: 5 business days from issuance",
            "While call is outstanding: account restricted to 2x maintenance margin excess (reduced from normal 4x)",
            "If call is not met within 5 business days: account restricted to cash-available basis for 90 days or until the call is met",
            "Funds deposited to meet a day-trading margin call must remain in the account for at least two business days"
          ],
          exceptions: [
            "Cross-guarantees cannot be used to meet day-trading margin call requirements"
          ],
          examTip: "Day-trading margin call: 5-business-day deadline. During the call: buying power drops to 2x (from 4x). After 5 days without payment: 90-day cash-only restriction. Remember: deposited funds must stay for 2 business days."
        }
      ]
    },
    {
      name: "Portfolio Margin",
      rules: [
        {
          id: "portfolio-margin",
          name: "Portfolio Margin (Risk-Based Margining)",
          category: "FINRA Rule",
          language: "Portfolio margining evaluates the net risk of all positions held in a given account using an SEC-approved computer modeling system to perform risk analysis across multiple pricing scenarios. Margin is based on the greatest projected net loss of all positions in a product class or group. Portfolio margining is also referred to as risk-based margining.",
          concept: "A more sophisticated alternative to strategy-based margin that evaluates overall portfolio risk rather than each position in isolation. Generally results in lower margin requirements for well-hedged portfolios. Available only to eligible participants.",
          parameters: [
            "Eligible products: all margin equity securities, listed options, security futures products, unlisted derivatives, warrants, index warrants, and related instruments",
            "Eligible participants: (1) any SEC-registered broker or dealer; (2) any member of a national futures exchange hedging index futures with eligible derivatives; (3) any person approved to engage in uncovered option contracts",
            "To trade unlisted derivatives, the customer must maintain equity of at least $5,000,000 at all times",
            "Prior to offering portfolio margin, broker-dealer must notify and receive approval from FINRA, and submit that approval to the SEC",
            "FINRA requires customers to receive a disclosure statement and sign an acknowledgement form prior to their initial portfolio margin transaction",
            "Margin calls in portfolio margin accounts must be met within three business days (shorter than standard margin accounts)",
            "Pricing scenarios for highly-capitalized broad-based indices: +6% and -8%",
            "Pricing scenarios for non-highly-capitalized broad-based indices: +10% and -10%",
            "Pricing scenarios for equity options, narrow-based index options, and security futures: +15% and -15%",
            "Advertising portfolio margin is considered a retail communication subject to principal approval and FINRA filing; advertisement copy and approval must be retained for three years"
          ],
          exceptions: [
            "Portfolio margin is not available to small retail clients — only to eligible participants as defined"
          ],
          examTip: "Portfolio margin = risk-based; requires FINRA approval before a broker-dealer can offer it. Margin calls must be met in 3 business days (shorter than traditional). Unlisted derivatives require $5M minimum equity. Key risk: greater leverage means larger potential losses."
        }
      ]
    }
  ]
};
