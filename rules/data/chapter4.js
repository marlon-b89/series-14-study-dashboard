// Chapter 4 – Equity Trading and Settlement
window.CHAPTER_4 = {
  id: 4,
  title: "Equity Trading and Settlement",
  subtitle: "Market structure, OTC equity tiers, Rule 15c2-11, clearing and introducing firms, trade documentation, settlement, and DVP/RVP",
  sections: [
    {
      name: "Market Structure and Participants",
      rules: [
        {
          id: "national-securities-exchange",
          name: "National Securities Exchange – Section 6 Registration",
          category: "Federal Law",
          language: "A national securities exchange is a market that is registered with the SEC under Section 6 of the Securities Exchange Act of 1934. A registered exchange acts as a self-regulatory organization for its members and is required to have surveillance systems in place to detect and prevent market manipulation.",
          concept: "Exchanges must register with the SEC and maintain surveillance to prevent manipulation. Not all national exchanges require a physical trading floor; purely electronic exchanges (e.g., Nasdaq) qualify. Hybrid markets combine auction and electronic trading.",
          parameters: [
            "Registered under Section 6 of the Securities Exchange Act of 1934",
            "Must act as an SRO for its members",
            "Must have surveillance systems to detect and prevent market manipulation",
            "Not required to maintain a physical trading floor",
            "Hybrid markets combine floor auction market and electronic market"
          ],
          exceptions: [
            "A national securities exchange is not required to have a traditional physical trading floor or an auction market"
          ],
          examTip: "Nasdaq is classified as a national securities exchange even though it has no physical floor. Hybrid markets (NYSE, most regional exchanges) combine both auction and electronic execution in compliance with Reg NMS."
        },
        {
          id: "designated-market-maker",
          name: "Designated Market Maker (DMM)",
          category: "NYSE Rule",
          language: "The responsibilities of the designated market maker include resolving trade imbalances resulting from a temporary lack of supply or demand in a particular security, maintaining liquidity, and providing a fair and orderly market. The DMM must buy and sell for its own account (acting as a dealer) to make the market fair and orderly. The DMM must be a buyer when there are no buyers and a seller when there are no sellers.",
          concept: "The DMM is the sole NYSE member permitted to continuously buy and sell stock on a principal basis in its registered securities. It narrows spreads, resolves imbalances, and must support price continuity. It may also act as agent by maintaining a book of limit and contingency orders.",
          parameters: [
            "Only member permitted to continuously buy and sell on a principal basis in its registered securities",
            "Must maintain fair and orderly market with price continuity and reasonable depth",
            "May accept GTC (open) and day orders on its book",
            "Cannot place market orders or not-held orders on its book",
            "Cannot compete with public orders; may only bid higher or offer lower than prevailing market to reduce the spread",
            "Cannot stop stock against the order book",
            "Stopping stock: guarantee that a broker's order will be executed at a specific price unless a better price is obtained — only for public orders, not for own account"
          ],
          exceptions: [
            "DMM cannot accept a market not-held order (which gives a floor broker discretion over timing of execution)",
            "DMM is prohibited from engaging in transactions in securities in which it is registered unless necessary to maintain a fair and orderly market"
          ],
          examTip: "DMMs act in two capacities: as AGENT (maintaining the book, executing limit orders for customers) and as PRINCIPAL (trading inventory to restore price continuity). The key distinction: DMMs can continuously trade on principal basis — no other member may do so. Market and not-held orders cannot be left on the DMM book."
        },
        {
          id: "market-maker-quotes",
          name: "Market-Maker Quotes and Obligations",
          category: "FINRA Rule",
          language: "Market makers must honor their quoted prices in interdealer transactions (i.e., trades with other broker-dealers). A market maker is a dealer that stands ready to buy or sell a specific security and is always prepared to do so. When a dealer is making a market, it is obligated to take the other side of the transaction when an investor or another dealer wants to trade a stock.",
          concept: "Market makers give two-sided (bid/offer) quotes and the size they are willing to transact. They earn the spread between their bid and offer. Retail customers typically pay a markup above the offer or receive a markdown below the bid.",
          parameters: [
            "Quote includes bid price (price at which MM will buy) and offer/ask price (price at which MM will sell)",
            "Size is the total number of shares the MM is willing to buy or sell at the quoted price",
            "If no size is specified, default size is one normal unit of trading (100 shares) per SEC Rule 602",
            "Market makers must honor quoted prices in interdealer transactions",
            "Retail customers pay markups (purchases) or receive markdowns (sales) relative to the interdealer quote"
          ],
          exceptions: [],
          examTip: "The spread is the market maker's gross profit per share when it buys at the bid and sells at the offer. Markups are charged above the offer when selling to retail customers; markdowns are taken below the bid when buying from retail customers. Failure to honor a firm quote is called 'backing away.'"
        },
        {
          id: "otc-equity-tiers",
          name: "OTC Equity Market Tiers (OTC Markets Group)",
          category: "Regulation",
          language: "The OTC Markets Group organizes OTC equity securities into four distinct market tiers based on the quality, timeliness, and completeness of the disclosure information that the issuing companies provide to investors. Effective July 1, 2025, the Pink Current Market ceased to exist and was replaced by the OTCID Basic Market.",
          concept: "The four tiers create a disclosure-based hierarchy for non-exchange-listed equities: OTCQX (highest), OTCQB, OTCID Basic, and Pink Limited. Broker-dealers must comply with SEC Rule 15c2-11 to quote any OTC equity. Pink Limited securities carry a 'yield sign' warning for investors.",
          parameters: [
            "OTCQX Best Market: highest tier; stringent financial standards; annual verification and management certification; timely annual and quarterly reports filed with SEC, U.S. bank regulator, or approved international regulator",
            "OTCQB Venture Market: current reporting required; annual verification; minimum bid price of $0.01; targeted at entrepreneurial and development-stage companies",
            "OTCID Basic Market (launched July 1, 2025): provides ongoing financial disclosure including quarterly and annual reports; annual management certifications; replaces the former Pink Current Market",
            "Pink Limited Market: minimal to no issuer involvement; no certified compliance with reporting standards; limited financial information; carries a yield sign warning; broker-dealers may place additional trading restrictions"
          ],
          exceptions: [
            "Broker-dealers may place additional trading restrictions on Pink Limited securities",
            "Many unsponsored ADRs where the issuer does not want U.S. trading will be quoted in the Pink Limited Market"
          ],
          examTip: "Memorize the four tiers top-to-bottom: OTCQX (best disclosure), OTCQB (venture/development), OTCID Basic (basic disclosure, launched July 2025), Pink Limited (minimal/no disclosure, highest risk). Pink Limited formerly included the Pink Current Market which was renamed OTCID Basic on July 1, 2025."
        }
      ]
    },
    {
      name: "SEC Rule 15c2-11 and FINRA Rule 6432",
      rules: [
        {
          id: "sec-rule-15c2-11",
          name: "SEC Rule 15c2-11 – Initiation of Quotations for OTC Equity Securities",
          category: "SEC Rule",
          language: "SEC Rule 15c2-11 requires broker-dealers that intend to publish quotes for an OTC equity security to either collect and review certain information about the issuer or rely on a qualified interdealer quotation system's (IDQS) review of the issuer's information. The term 'publish' means to initiate or resume quotes in any interdealer quote medium, such as the OTC Markets Group system.",
          concept: "A broker-dealer cannot simply begin quoting a non-listed OTC equity. It must either perform due diligence on the issuer (and file Form 211 with FINRA) or rely on a qualified IDQS that has already done the review. Designed to prevent manipulation of thinly-traded, low-information stocks.",
          parameters: [
            "Broker-dealer must possess one of five types of issuer information before quoting: (1) prospectus effective within 90 days; (2) Reg A offering circular effective within 40 days; (3) issuer's latest 10-K, all subsequent 10-Qs and 8-Ks with current filings; (4) foreign issuer financial info under Rule 12g3-2(b) for the last fiscal year; (5) detailed issuer information including name, address, state of incorporation, title/class of security, par value, shares outstanding, transfer agent, nature of business, products/services, facilities, CEO and board names, balance sheet, P&L, retained earnings for two preceding fiscal years, and affiliate/beneficial owner disclosure",
            "Broker-dealer must review information and have reasonable basis to believe it is accurate and from reliable sources",
            "Must maintain a record of circumstances of quote publication, any SEC trading suspension orders in prior 12 months, and any other material adverse information",
            "Form 211 must be filed with FINRA at least three business days prior to entering a quote",
            "If relying on IDQS review, broker-dealer must publish its quote within three business days after IDQS makes its determination publicly available",
            "FINRA reviews Form 211 and, within three business days, notifies the dealer whether the application has been cleared",
            "Any filings must be reviewed and signed by a principal of the member firm"
          ],
          exceptions: [
            "Security is listed on a national securities exchange or was traded on an exchange on the previous business day (recently delisted)",
            "Dealer publishing a quotation on behalf of a customer representing unsolicited customer interest in buying or selling (once order is executed or canceled, quoting must cease)",
            "Qualified IDQS (e.g., OTC Markets Group) has complied with information review requirements and made its determination publicly available",
            "Security with worldwide average daily trading volume value of at least $100,000 during the preceding 60 days AND issuer has at least $50 million total assets and $10 million shareholders' equity in an audited balance sheet issued within six months of fiscal year-end",
            "Quote initiated by an underwriter in that security",
            "Quote is for a municipal security"
          ],
          examTip: "Rule 15c2-11 is the gatekeeper for quoting OTC equities. Key exam facts: Form 211 filed at least 3 business days before first quote; FINRA notifies clearance within 3 business days; the IDQS reliance exception means the BD must post its quote within 3 business days of the IDQS determination. The unsolicited customer interest exception terminates once the order is filled or canceled."
        },
        {
          id: "piggyback-exception-15c2-11",
          name: "Rule 15c2-11 – Piggyback Exception",
          category: "SEC Rule",
          language: "The piggyback exception applies to securities that have been the subject of regular and continuous securities quotations in a quotation medium for the past 30 days. To be considered continuous, (i) the quotation must have appeared on at least 12 of those 30 days, and (ii) there could be no more than four business days in succession during that 30-day period without a quotation.",
          concept: "A new market maker may begin quoting an OTC equity without filing Form 211 by piggybacking on another market maker's continuous quotations. Once the piggybacking BD begins quoting, it may continue even if the original market maker stops — but if the piggybacker itself then stops, it must fully comply with 15c2-11 to resume.",
          parameters: [
            "Quotation must have appeared on at least 12 of the previous 30 days",
            "No more than four consecutive business days without a quotation in the 30-day period",
            "Piggybacking BD may continue quoting even if the original quoter withdraws, provided the piggybacking BD itself does not cease quoting"
          ],
          exceptions: [
            "Piggyback exception is NOT available if the issuer has been subject to an SEC trading suspension in the last 60 calendar days",
            "Piggyback exception is NOT available if the issuer is or is believed to be a shell company and quotes were initiated more than 18 months ago (new Form 211 required after 18 months)",
            "Piggyback exception is NOT available if the issuer is not filing required financial reports and public disclosures within 180 days of the end of its reporting period"
          ],
          examTip: "The piggyback exception requires 12 out of 30 days of quotations with no gap greater than 4 consecutive business days. The three situations that kill the piggyback exception are: SEC trading suspension within 60 days, shell company with quotes more than 18 months old, and issuer delinquent in filing (more than 180 days past reporting period end)."
        },
        {
          id: "finra-rule-6432",
          name: "FINRA Rule 6432 – Compliance with Information Requirements of Rule 15c2-11",
          category: "FINRA Rule",
          language: "A member firm (broker-dealer) is prohibited from initiating or resuming the quotation of a non-exchange listed security (OTC equity) in any quotation medium unless the member has demonstrated compliance with FINRA Rule 6432 and SEC Rule 15c2-11. A firm demonstrates compliance by filing Form 211 with FINRA and receiving confirmation that the form has been processed and cleared, or by relying on a qualified IDQS.",
          concept: "FINRA Rule 6432 is FINRA's enforcement mechanism for SEC Rule 15c2-11. It imposes the same gating requirement on FINRA member BDs and adds the IDQS alternative pathway. Unlike BDs (which must wait for FINRA to clear Form 211 before quoting), a qualified IDQS must file the modified Form 211 by 6:30 p.m. ET the business day after its determination is made public.",
          parameters: [
            "Member must file Form 211 and receive FINRA processing confirmation before initiating or resuming quotes; OR rely on a qualified IDQS",
            "Qualified IDQS must submit initial information review on a modified Form 211 to FINRA by no later than 6:30 p.m. ET on the business day following the publicly available determination",
            "Unlike BDs, IDQS filing is after-the-fact; BDs must wait for FINRA to clear Form 211 before first quote"
          ],
          exceptions: [],
          examTip: "BDs must WAIT for FINRA clearance before quoting; IDQSs make the determination public first and then file modified Form 211 by 6:30 p.m. ET the next day. This timing difference is exam-testable. Both routes require Form 211 to reach FINRA."
        }
      ]
    },
    {
      name: "Clearing, Introducing Firms, and Prime Brokerage",
      rules: [
        {
          id: "clearing-introducing-firms",
          name: "Clearing and Introducing Firms",
          category: "FINRA Rule",
          language: "Many smaller broker-dealers choose not to self-clear their trades and instead contract with a clearing firm to perform these services. The firm providing these services is referred to as the clearing firm, while the firm that pays for these services is referred to as the introducing firm. Customer funds and securities are physically held at the clearing firm.",
          concept: "The clearing/introducing relationship separates front-office (client-facing) and back-office (processing) functions. Under fully disclosed arrangements, the clearing firm knows each customer. Under omnibus arrangements, the clearing firm does not know individual customers — only a bulk account for the introducing firm.",
          parameters: [
            "Fully disclosed: introducing firm transmits all individual customer information to the clearing firm; clearing firm establishes separate accounts and delivers confirmations and statements",
            "Omnibus: clearing firm is not provided individual customer information; introducing firm maintains individual customer records and sends confirmations; clearing firm handles clearing and safekeeping",
            "Carrying agreements detail services and costs and must be submitted to FINRA",
            "Clearing firms must submit new or amended carrying agreements to FINRA for both review and approval",
            "Introducing firms must submit new or amended carrying agreements to FINRA for review only",
            "Customer notification: upon opening an account with an introducing firm that clears on a fully disclosed basis, each new customer must be notified in writing of the existence of the clearing agreement",
            "If clearing firm receives a customer complaint from an introducing firm's customer, the carrying agreement must authorize the clearing firm to submit the complaint to both the introducing firm and the introducing firm's DEA",
            "By no later than July 1 of each year, the clearing firm must notify the introducing firm's CEO and CCO of the reports it offers"
          ],
          exceptions: [],
          examTip: "Key distinction: clearing firm agreements require FINRA review AND approval; introducing firm agreements require only FINRA review. In omnibus accounts, recordkeeping belongs primarily to the introducing firm. In fully disclosed accounts, the clearing firm handles all paperwork but includes both firm names."
        },
        {
          id: "prime-brokerage",
          name: "Prime Brokerage",
          category: "SEC Rule",
          language: "In a prime-brokerage arrangement, the client chooses one firm as its prime broker. The client still uses several broker-dealers for execution (and as a source of research), but all trades are ultimately handled through its account at its prime broker. Orders that are placed with the executing broker are executed through an account in the name of the prime broker and for the benefit of the customer.",
          concept: "Prime brokerage centralizes clearing and custody for institutional clients who use multiple executing brokers. All executions flow back to the prime broker's account, giving the client unified margin, reporting, and custody. Confirmation is done through DTCC's ID Net.",
          parameters: [
            "Prime-brokerage customers must maintain a minimum net equity of $500,000",
            "Exception: if account is managed by a registered investment adviser, minimum equity is $100,000",
            "There must be a contract between the prime broker and the executing broker's clearing firm",
            "Customers must also sign agreements with the prime broker and each executing broker",
            "On trade date, customer notifies prime broker of the trade filled through the executing broker",
            "Executing broker confirms the transaction with the prime broker through DTCC's Institutional Delivery Netting Service (ID Net)",
            "Prime broker affirms the trade if information in the ID System matches customer information",
            "A broker-dealer cannot engage in prime-brokerage activities with any broker-dealer that it knows or has reason to believe is in violation of SEC conditions regarding prime brokerage"
          ],
          exceptions: [],
          examTip: "The minimum net equity threshold is $500,000 — except for RIA-managed accounts where it drops to $100,000. The prime broker acts as the central clearinghouse: all executing broker trades flow to the prime broker via DTCC ID Net. The customer holds one account at the prime broker, not at each executing firm."
        }
      ]
    },
    {
      name: "Trade Documentation and Confirmations",
      rules: [
        {
          id: "trade-comparison-nscc",
          name: "Trade Comparison and NSCC Contract Sheet",
          category: "FINRA Rule",
          language: "At the end of the trading day, the broker-dealer electronically sends the NSCC any information it has about the trades it executed that day. The NSCC then compares this information with that submitted by each contrabroker. The results are returned on a contract sheet. One section lists trades for which each side's information matched (cleared for settlement); another lists uncompared trades (submitted by BD but no matching info from contrabroker); another lists advisory trades (submitted by contrabroker but no matching info from BD).",
          concept: "The National Securities Clearing Corporation (NSCC) acts as the central matching utility for broker-dealer trades. Matched trades are cleared for settlement; unmatched and advisory trades must be reconciled. Ex-clearing comparisons (broker-to-broker) require written comparisons within one business day of trade date.",
          parameters: [
            "NSCC comparison results returned to broker-dealers on a contract sheet",
            "Uncompared trades: BD submitted but NSCC received no matching information from contrabroker",
            "Advisory trades: listed by another firm as being executed with the BD, but BD submitted no matching information",
            "Ex-clearing comparisons must be sent within one business day of the trade date",
            "Cash transactions (settled on trade date) require comparisons to be exchanged on the trade date",
            "For regular-way transactions, FINRA members must send written confirmations to each other on the first business day following the transaction (if not compared through clearing agency)"
          ],
          exceptions: [
            "Some transactions are compared and settled ex-clearing (broker-to-broker) by mutual agreement or due to the nature of the security"
          ],
          examTip: "Uncompared vs. advisory: 'uncompared' means your side submitted but got no match back; 'advisory' means someone else claims a trade with you that you didn't submit. Both require reconciliation. DK (Don't Know) notices come into play when a contrabroker doesn't recognize a trade."
        },
        {
          id: "dk-notice",
          name: "DK (Don't Know) Notice Procedures",
          category: "FINRA Rule",
          language: "If there is a non-recognized trade (a DK or don't know) and the trade cannot be confirmed, the party that receives the confirmation is required to promptly notify the confirming party by telephone and, within one business day, send a written notice by return receipt requested, indicating non-recognition of the transaction. Within four business days of the trade, the broker will send the contrabroker a DK notice.",
          concept: "When a broker-dealer receives a confirmation for a trade it doesn't recognize, it must DK the trade within prescribed timeframes. The contrabroker then must verify its records. If a member believes a trade is clearly erroneous, it may cancel only after notifying FINRA and receiving FINRA's approval.",
          parameters: [
            "Party receiving unrecognized confirmation must notify confirming party by telephone promptly",
            "Within one business day: send written notice (return receipt requested) indicating non-recognition",
            "Within four business days of the trade: broker sends DK notice to contrabroker",
            "After verification: if dealer believes trade occurred, must notify non-confirming party by phone immediately, and within one business day send written confirmation (return receipt requested)",
            "Clearly erroneous trades may be canceled only after FINRA notification and approval",
            "Corrected confirmations must be sent within one business day of discovering an error"
          ],
          exceptions: [],
          examTip: "Timeline for DK notices: (1) phone notification promptly; (2) written notice within 1 business day; (3) formal DK notice within 4 business days of the trade date. Cancellation of a clearly erroneous trade requires FINRA notification and approval — not unilateral action."
        },
        {
          id: "error-account",
          name: "Error Account",
          category: "FINRA Rule",
          language: "All broker-dealers are required to maintain an error account. The account is used by a broker-dealer if the firm or any of its registered representatives execute a trade in error (e.g., wrong security or wrong side of the market). Separate error accounts are not maintained by each RR; instead, the firm maintains one error account. If an error occurs, the firm should immediately execute the original transaction and maintain a record of the error.",
          concept: "A single firm-level account that absorbs and tracks execution errors before they are corrected. Registered representatives do not decide how to correct errors — they escalate to a supervisor. The error account provides an audit trail and prevents errors from being hidden in customer accounts.",
          parameters: [
            "Every broker-dealer must maintain at least one error account (firm-wide, not per RR)",
            "Used for trades done in error: wrong security, wrong side of market, etc.",
            "Firm should immediately execute the original (corrected) transaction",
            "RR must bring the error to the attention of a supervisor — RR should not decide how to correct the error"
          ],
          exceptions: [],
          examTip: "The error account is a FIRM-level account — one per firm, not one per rep. Registered representatives should never unilaterally correct errors; they must escalate. The firm records the error in the error account and immediately executes the corrected transaction."
        }
      ]
    },
    {
      name: "Settlement and Closeouts",
      rules: [
        {
          id: "rule-15c6-1-settlement",
          name: "SEC Rule 15c6-1 – Regular-Way Settlement (T+1)",
          category: "SEC Rule",
          language: "For transactions involving corporate securities (stocks and bonds), municipal securities, Treasury securities, and options, settlement occurs one business day after the trade date (T+1). For cash transactions, the settlement date is the same as the trade date. Regulation T requires payment for purchases to be made promptly, which typically means within two business days after regular-way settlement (S+2), or three business days following the trade date (T+3).",
          concept: "T+1 is the standard settlement cycle for virtually all U.S. equity, bond, and options transactions. Cash transactions settle same-day (both parties must agree). Seller's option is an alternative that allows extended delivery beyond T+1. Reg T payment is due T+3 (S+2).",
          parameters: [
            "Corporate securities (stocks and bonds): T+1 regular-way settlement",
            "Municipal securities: T+1 regular-way settlement",
            "U.S. government securities: T+1 regular-way settlement",
            "Options: T+1 regular-way settlement",
            "Cash transactions: same-day settlement (T+0); both parties must agree prior to execution",
            "Seller's option: seller requests additional time beyond T+1; seller must give buyer one business day written notice when securities become available",
            "Regulation T payment due: S+2 (two business days after settlement) = T+3",
            "Pre-IPO private placements and PIPES are not subject to the SEC payment cycle (Reg T)"
          ],
          exceptions: [
            "Cash transactions require mutual agreement prior to execution",
            "Seller's option: seller may request extended settlement when T+1 or cash delivery cannot be completed; buyer must be notified one business day in advance of delivery"
          ],
          examTip: "T+1 settlement does NOT mean T+1 customer payment. Customers must pay under Reg T by S+2 = T+3. 'Freeriding' — buying securities without the intention to pay — is prohibited under FRB rules. If the customer fails to pay by the Reg T deadline, the firm sells out the securities and freezes the account for 90 days."
        },
        {
          id: "closeout-procedures",
          name: "Closeout Procedures – Buy-In and Sell-Out",
          category: "FINRA Rule",
          language: "A buy-in occurs when a selling broker-dealer has failed to make proper delivery to a buying broker-dealer. The buying broker will purchase the securities in the open market, charging the selling broker-dealer the difference between the contract price and the buy-in price. A sell-out occurs when a selling broker-dealer makes good delivery but the buying broker-dealer refuses to accept the securities; the selling broker-dealer may sell the securities immediately, without notice.",
          concept: "Closeouts enforce settlement obligations: buy-ins penalize sellers who fail to deliver; sell-outs penalize buyers who refuse delivery. Client closeout timelines differ from interdealer closeouts. The Uniform Practice Code governs all closeout procedures.",
          parameters: [
            "Dealer-to-dealer buy-in: cannot be executed sooner than the third business day following settlement (T+4); notice must be sent by noon two business days before the proposed buy-in (by noon on T+3)",
            "Dealer-to-dealer sell-out: immediate — no notice required when buying broker refuses good delivery",
            "If seller notifies buyer that securities are in transit or at transfer agent with certificate numbers, buyer must defer closeout for seven calendar days",
            "Client sell-out: typically on the third business day after settlement (T+4), which is the day after the Reg T payment deadline",
            "Client buy-in: by no later than 10 business days after settlement (S+10 = T+11)",
            "Member executing a buy-in or sell-out must notify the other member on the same day as the action"
          ],
          exceptions: [
            "If selling broker provides certificate numbers and certifies securities are in transit or at transfer agent, buying broker must defer closeout by seven calendar days"
          ],
          examTip: "Dealer buy-in: available T+4 (settlement +3) with noon notice on T+3. Sell-out: immediate, no notice. Client buy-in: S+10 (T+11). Client sell-out: T+4. The sell-out is unique — no notice needed because the seller tendered good delivery and the buyer simply refused it."
        },
        {
          id: "dvp-rvp",
          name: "DVP/RVP Accounts (Delivery Versus Payment / Receive Versus Payment)",
          category: "SEC Rule",
          language: "A Cash On Delivery (COD) or Delivery Versus Payment (DVP) order is one in which the securities purchased will be delivered to an agent of the customer (e.g., a custodian bank) against payment. DVP refers to delivery versus payment and RVP refers to receive versus payment. DVP and RVP transactions are settled directly with a third-party agent bank or other custodial financial institution for the client.",
          concept: "DVP/RVP allows institutional clients and large retail customers to use multiple brokers for execution while settling all trades through a single custodian bank. The broker-dealer has up to 35 calendar days to complete delivery for a DVP customer. DVP account statements do not contain closing money balances or security positions.",
          parameters: [
            "Before accepting a DVP/RVP order, broker-dealer must obtain the name and address of the customer's agent and the customer's account number with the agent",
            "Order tickets must be marked as DVP/RVP transactions",
            "Customer must provide agreement that it will promptly furnish its agent with settlement instructions for each transaction",
            "DVP/RVP trades must be settled through a securities depository by book-entry procedures for all transactions involving depository-eligible securities (except trades settled outside the U.S.)",
            "Usual method of deposit, withdrawal, and transfer of securities: Integrated Delivery System (IDS)",
            "Broker-dealer has up to 35 calendar days to complete delivery for a DVP customer",
            "DVP account statements typically contain only debits, credits, and security transfers — no closing money balances or positions"
          ],
          exceptions: [
            "DVP/RVP transactions in non-exempt securities are subject to Reg T settlement parameters",
            "Trades settled outside the United States are not required to be settled through a securities depository by book-entry procedures"
          ],
          examTip: "DVP = delivery of securities triggers payment (broker delivers, bank pays). RVP = receiving securities triggers payment (broker receives securities, bank pays). Account statements under DVP/RVP contain NO closing balances or positions — only debits, credits, and security transfers. Mark order tickets at the time of order acceptance."
        }
      ]
    },
    {
      name: "Account Transfers and Customer Documentation",
      rules: [
        {
          id: "acats-account-transfer",
          name: "Automated Customer Account Transfer Service (ACATS)",
          category: "FINRA Rule",
          language: "If a customer wants to transfer an account from one member firm (the carrying firm) to another member firm (the receiving firm), the customer must give written instructions to the receiving firm. When both the carrying member and the receiving member are participants in a registered clearing agency with automated customer securities account transfer capabilities, they must use the system (e.g., NSCC ACATS).",
          concept: "ACATS is the standard mechanism for transferring customer accounts between FINRA member firms. The receiving firm submits the request; the carrying firm validates or takes exception within one business day. Carrying firm must freeze the account and complete the transfer within three days of validation.",
          parameters: [
            "Customer must provide written instructions to the receiving firm",
            "Receiving firm must immediately submit transfer request to carrying firm upon receipt from customer",
            "Carrying firm must validate instructions or take exception within one business day",
            "Upon validating, carrying firm must freeze the account: cancel all open orders (except options expiring within seven business days) and accept no new orders",
            "Transfer must be completed by the carrying firm within three days following validation",
            "Validated transfer instructions must include listing of all positions, money balances, current market values, and description of securities without CUSIP numbers",
            "Non-transferable assets must be disclosed to the customer in writing; options include liquidation, retention, transfer/delivery to customer, or transfer to a third party",
            "If a non-transferable asset is liquidated, distributions must be made within five business days of customer's liquidation instructions"
          ],
          exceptions: [
            "Carrying party may take exception only if: no record of the account on its books; transfer instructions are incomplete; or transfer instructions contain an invalid signature",
            "Options positions expiring within seven business days are excluded from the cancellation requirement when the account is frozen"
          ],
          examTip: "The three valid reasons to protest a transfer request are: (1) account not on books, (2) incomplete instructions, (3) invalid signature. Nothing else justifies protesting. The carrying firm freezes the account and has three days after validation to complete the transfer. Bulk transfers to ease an RR's paperwork are not permitted — each account requires individual written instructions (except under negative consent letter scenarios)."
        },
        {
          id: "negative-consent-letter",
          name: "Negative Consent Letter – Bulk Account Transfers",
          category: "FINRA Rule",
          language: "A negative consent letter is a notification that alerts customers to the fact that there has been some underlying change in the business of the entity. If the client does not respond within a specific time frame, the client is deemed to have consented to the change. FINRA has allowed negative response letters in specific situations for bulk transfers.",
          concept: "Normally, each customer account requires individual written transfer instructions. Negative consent letters are a limited exception allowing bulk transfers when the firm undergoes a qualifying structural change. An RR changing firms cannot use negative consent letters to transfer clients — each client must individually consent.",
          parameters: [
            "Permitted situations for negative consent letters: (1) merger or acquisition of a broker-dealer; (2) broker-dealer entering into a clearing arrangement; (3) broker-dealer no longer in business and clearing firm transferring accounts; (4) broker-dealer experiencing financial or operational difficulties; (5) financial institution terminating a networking arrangement with a broker-dealer"
          ],
          exceptions: [
            "Negative consent letters CANNOT be used by a registered representative who is changing firms to facilitate transfer of individual customer accounts",
            "Such RR-driven transfers require each client's prior written consent and individual transfer instructions"
          ],
          examTip: "Five permitted bulk transfer situations involve structural changes to the firm (M&A, new clearing arrangement, firm failure, financial distress, terminated networking). An RR changing firms is NOT one of them. If an RR tries to use a negative consent letter to move clients, that violates the rule — each client needs individual written consent."
        },
        {
          id: "account-statements-complaints",
          name: "Account Statements and Complaint Procedures",
          category: "FINRA Rule",
          language: "Broker-dealers are required to provide customers with a statement of account at least quarterly; however, the typical practice is to provide statements monthly for any account in which activity has occurred. A complaint is defined as any written statement of a customer or any person acting on behalf of a customer alleging a grievance involving the activities of those persons under the control of the member in connection with the solicitation or execution of any transaction or the disposition of securities or funds of that customer.",
          concept: "Account statements must be provided at minimum quarterly (monthly if activity occurred). Written complaints must be kept in a separate file at each office of supervisory jurisdiction. Quarterly statistical complaint reports are due to FINRA by the 15th of the month following each calendar quarter.",
          parameters: [
            "Account statements must be provided at least quarterly",
            "Monthly statements required when account activity occurs (purchases, sales, interest, dividends, transfers, etc.)",
            "Account statement must contain: description of all security positions, all money balances, and all account activity since last statement",
            "Separate written complaint file must be maintained at each office of supervisory jurisdiction",
            "Complaint file must include description of actions taken by member and all related correspondence",
            "A principal must review each complaint; there is no mandatory deadline for resolution",
            "Even if no complaints were received, an empty complaint file must still be maintained",
            "Quarterly complaint report due to FINRA on the 15th of the month following each calendar quarter",
            "No quarterly complaint report is required if no complaints were received during the quarter"
          ],
          exceptions: [],
          examTip: "Written complaints require a separate file at each OSJ — NOT consolidated in one central file. A principal must review each complaint, but there is no mandatory resolution deadline. The quarterly FINRA complaint report is due by the 15th of the month AFTER the quarter ends. Note: an empty complaint file must still be maintained even with no complaints."
        }
      ]
    }
  ]
};
